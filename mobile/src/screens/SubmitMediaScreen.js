import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API_BASE_URL } from '../config';

const SUBMISSION_TYPE = { PHOTO: 'PHOTO', VIDEO: 'VIDEO' };
const MAX_ITEMS = 10;

export function SubmitMediaScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const venue = params?.venue || {};
  const venueId = params?.venueId || venue?.id;
  const token = params?.token;

  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestPermissions = async () => {
    const { status: camera } = await ImagePicker.requestCameraPermissionsAsync();
    const { status: library } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (camera !== 'granted' || library !== 'granted') {
      Alert.alert(
        'Permissions needed',
        'Camera and photo library access are required to submit media.',
        [{ text: 'OK' }]
      );
      return false;
    }
    return true;
  };

  const remaining = MAX_ITEMS - selectedItems.length;

  const addFromGallery = async (mediaType) => {
    setError(null);
    const ok = await requestPermissions();
    if (!ok) return;
    if (remaining <= 0) {
      setError(`Maximum ${MAX_ITEMS} items. Remove one to add more.`);
      return;
    }
    const isVideo = mediaType === SUBMISSION_TYPE.VIDEO;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: isVideo
        ? ImagePicker.MediaTypeOptions.Videos
        : ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: isVideo ? 1 : 0.8,
    });
    if (result.canceled || !result.assets?.length) return;
    const toAdd = result.assets
      .slice(0, remaining)
      .map((asset) => ({
        uri: asset.uri,
        type: isVideo ? SUBMISSION_TYPE.VIDEO : SUBMISSION_TYPE.PHOTO,
      }));
    setSelectedItems((prev) => [...prev, ...toAdd]);
  };

  const takePhoto = async () => {
    setError(null);
    const ok = await requestPermissions();
    if (!ok) return;
    if (remaining <= 0) {
      setError(`Maximum ${MAX_ITEMS} items. Remove one to add more.`);
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });
    if (result.canceled || !result.assets?.[0]) return;
    setSelectedItems((prev) => [...prev, { uri: result.assets[0].uri, type: SUBMISSION_TYPE.PHOTO }]);
  };

  const recordVideo = async () => {
    setError(null);
    const ok = await requestPermissions();
    if (!ok) return;
    if (remaining <= 0) {
      setError(`Maximum ${MAX_ITEMS} items. Remove one to add more.`);
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      videoMaxDuration: 60,
    });
    if (result.canceled || !result.assets?.[0]) return;
    setSelectedItems((prev) => [...prev, { uri: result.assets[0].uri, type: SUBMISSION_TYPE.VIDEO }]);
  };

  const removeItem = (index) => {
    setSelectedItems((prev) => prev.filter((_, i) => i !== index));
    setError(null);
  };

  const uploadFile = async (uri, type) => {
    const isVideo = type === SUBMISSION_TYPE.VIDEO;
    const resourceType = isVideo ? 'video' : 'image';
    const formData = new FormData();
    const name = isVideo ? 'video.mp4' : 'photo.jpg';
    const mimeType = isVideo ? 'video/mp4' : 'image/jpeg';
    formData.append('file', { uri, name, type: mimeType });
    formData.append('resourceType', resourceType);

    const res = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message || 'Upload failed');
    }
    const data = await res.json();
    return data?.mediaUrl;
  };

  const submitBatchToBackend = async (items) => {
    const res = await fetch(`${API_BASE_URL}/submissions/batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ venueId, items }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message || 'Submission failed');
    }
    return res.json();
  };

  const handleSubmit = async () => {
    if (!token) {
      setError('Please log in again.');
      return;
    }
    if (!venueId) {
      setError('Venue not found.');
      return;
    }
    if (selectedItems.length === 0) {
      setError('Add at least one photo or video.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const items = [];
      for (let i = 0; i < selectedItems.length; i++) {
        const { uri, type } = selectedItems[i];
        const mediaUrl = await uploadFile(uri, type);
        items.push({ type, mediaUrl });
      }
      await submitBatchToBackend(items);
      const count = items.length;
      Alert.alert(
        'Submitted',
        `${count} item${count > 1 ? 's' : ''} submitted. They’re under review; you’ll earn points once the owner approves.`,
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    } catch (e) {
      setError(e?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (!venueId) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.centered}>
          <Text style={styles.errorText}>Venue not found</Text>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>Go back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBack} onPress={() => navigation.goBack()} disabled={loading}>
          <Text style={styles.headerBackText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Submit at {venue?.name || 'venue'}</Text>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionLabel}>Add photos or videos (max {MAX_ITEMS})</Text>
        <Text style={styles.countText}>{selectedItems.length} / {MAX_ITEMS}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => addFromGallery(SUBMISSION_TYPE.PHOTO)}
            disabled={loading || remaining <= 0}
          >
            <Text style={styles.primaryBtnText}>Add photos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => addFromGallery(SUBMISSION_TYPE.VIDEO)}
            disabled={loading || remaining <= 0}
          >
            <Text style={styles.primaryBtnText}>Add videos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.secondaryBtn} onPress={takePhoto} disabled={loading || remaining <= 0}>
            <Text style={styles.secondaryBtnText}>Take photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn} onPress={recordVideo} disabled={loading || remaining <= 0}>
            <Text style={styles.secondaryBtnText}>Record video</Text>
          </TouchableOpacity>
        </View>

        {selectedItems.length > 0 ? (
          <View style={styles.listWrap}>
            <Text style={styles.sectionLabel}>Selected</Text>
            {selectedItems.map((item, index) => (
              <View key={`${item.uri}-${index}`} style={styles.itemRow}>
                {item.type === SUBMISSION_TYPE.PHOTO ? (
                  <Image source={{ uri: item.uri }} style={styles.thumb} resizeMode="cover" />
                ) : (
                  <View style={styles.thumbVideo}>
                    <Text style={styles.thumbVideoText}>Video</Text>
                  </View>
                )}
                <Text style={styles.itemType}>{item.type === SUBMISSION_TYPE.PHOTO ? 'Photo' : 'Video'}</Text>
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => removeItem(index)}
                  disabled={loading}
                >
                  <Text style={styles.removeBtnText}>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : null}

        {error ? <Text style={styles.errorMsg}>{error}</Text> : null}

        {loading ? (
          <View style={styles.loaderWrap}>
            <ActivityIndicator size="large" color="#2563eb" />
            <Text style={styles.loaderText}>Uploading & submitting…</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={[styles.submitBtn, selectedItems.length === 0 && styles.submitBtnDisabled]}
            onPress={handleSubmit}
            disabled={selectedItems.length === 0}
          >
            <Text style={styles.submitBtnText}>Submit {selectedItems.length > 0 ? `(${selectedItems.length})` : ''}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerBack: {
    paddingVertical: 6,
    paddingRight: 12,
  },
  headerBackText: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '500',
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionLabel: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 10,
  },
  countText: {
    fontSize: 15,
    color: '#111',
    fontWeight: '600',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
  },
  primaryBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#2563eb',
    alignItems: 'center',
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
  },
  secondaryBtnText: {
    color: '#475569',
    fontSize: 16,
    fontWeight: '600',
  },
  listWrap: {
    marginTop: 8,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  thumb: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#e2e8f0',
  },
  thumbVideo: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbVideoText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '600',
  },
  itemType: {
    flex: 1,
    fontSize: 15,
    color: '#334155',
    marginLeft: 12,
  },
  removeBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#fef2f2',
    borderRadius: 8,
  },
  removeBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#dc2626',
  },
  errorMsg: {
    color: '#dc2626',
    fontSize: 14,
    marginTop: 16,
  },
  loaderWrap: {
    marginTop: 24,
    alignItems: 'center',
  },
  loaderText: {
    marginTop: 10,
    fontSize: 14,
    color: '#64748b',
  },
  submitBtn: {
    marginTop: 28,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#2563eb',
    alignItems: 'center',
  },
  submitBtnDisabled: {
    opacity: 0.5,
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 16,
  },
  backBtn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
  },
  backBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
  },
});
