import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API_BASE_URL } from '../config';
import { MapPicker } from '../components/MapPicker';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x200/f1f5f9/94a3b8?text=No+image';

function parseNum(s, fallback = 0) {
  const n = parseFloat(String(s).trim());
  return Number.isFinite(n) ? n : fallback;
}

function parseIntNum(s, fallback = 0) {
  const n = parseInt(String(s).trim(), 10);
  return Number.isFinite(n) ? n : fallback;
}

export function OwnerOnboardingStep1Screen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const token = params?.token;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [radiusMeters, setRadiusMeters] = useState('100');
  const [imageUrl, setImageUrl] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState('');

  const pickImage = async () => {
    setError('');
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Photo library access is required to add a shop image.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });
    if (result.canceled || !result.assets?.[0]) return;
    await uploadImage(result.assets[0].uri);
  };

  const uploadImage = async (uri) => {
    if (!token) return;
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', { uri, name: 'image.jpg', type: 'image/jpeg' });
      formData.append('resourceType', 'image');
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
      if (data?.mediaUrl) setImageUrl(data.mediaUrl);
    } catch (e) {
      setError(e?.message || 'Image upload failed');
    } finally {
      setUploadingImage(false);
    }
  };

  const validate = () => {
    if (!name.trim() || name.trim().length < 2) {
      setError('Name must be at least 2 characters');
      return false;
    }
    if (!address.trim()) {
      setError('Address is required');
      return false;
    }
    const latN = parseNum(lat, NaN);
    const lngN = parseNum(lng, NaN);
    if (Number.isNaN(latN) || latN < -90 || latN > 90) {
      setError('Latitude must be between -90 and 90');
      return false;
    }
    if (Number.isNaN(lngN) || lngN < -180 || lngN > 180) {
      setError('Longitude must be between -180 and 180');
      return false;
    }
    const radius = parseIntNum(radiusMeters, NaN);
    if (Number.isNaN(radius) || radius < 10) {
      setError('Radius must be at least 10 meters');
      return false;
    }
    setError('');
    return true;
  };

  const handleNext = () => {
    if (!validate()) return;
    const step1Data = {
      name: name.trim(),
      address: address.trim(),
      lat: parseNum(lat),
      lng: parseNum(lng),
      radiusMeters: parseIntNum(radiusMeters, 100),
      imageUrl: imageUrl.trim() || undefined,
    };
    navigation.navigate('OnboardingStep2', {
      token: params?.token,
      user: params?.user,
      step1Data,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBack} onPress={() => navigation.goBack()}>
          <Text style={styles.headerBackText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Step 1 of 3</Text>
      </View>

      <View style={styles.stepperBanner}>
        <Text style={styles.stepperTitle}>Venue details</Text>
        <Text style={styles.stepperSubtitle}>Name, address and location</Text>
      </View>

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.label}>Shop image (optional)</Text>
          <TouchableOpacity style={styles.imageBox} onPress={pickImage} disabled={uploadingImage}>
            {uploadingImage ? (
              <ActivityIndicator color="#059669" />
            ) : (
              <Image
                source={{ uri: imageUrl || PLACEHOLDER_IMAGE }}
                style={styles.previewImage}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
          <Text style={styles.imageHint}>Tap to upload</Text>

          <Text style={styles.label}>Name *</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Venue name"
          />

          <Text style={styles.label}>Address *</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Full address"
          />

          <Text style={styles.label}>Location * (tap map or drag pin)</Text>
          <MapPicker
            latitude={lat}
            longitude={lng}
            onSelect={({ latitude: la, longitude: lo }) => {
              setLat(String(la));
              setLng(String(lo));
            }}
            height={220}
          />

          <Text style={styles.label}>Radius (meters) * min 10</Text>
          <TextInput
            style={styles.input}
            value={radiusMeters}
            onChangeText={setRadiusMeters}
            placeholder="100"
            keyboardType="number-pad"
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
            <Text style={styles.nextBtnText}>Next → Step 2</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerBack: { paddingVertical: 6, paddingRight: 12 },
  headerBackText: { fontSize: 16, color: '#059669', fontWeight: '500' },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '600', color: '#111' },
  stepperBanner: {
    padding: 14,
    margin: 16,
    marginBottom: 8,
    borderRadius: 10,
    backgroundColor: '#ecfdf5',
  },
  stepperTitle: { fontSize: 15, fontWeight: '700', color: '#065f46', marginBottom: 2 },
  stepperSubtitle: { fontSize: 13, color: '#16a34a' },
  keyboard: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 100, flexGrow: 1 },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
    marginTop: 14,
  },
  imageBox: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    backgroundColor: '#e2e8f0',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: { width: '100%', height: '100%' },
  imageHint: { fontSize: 12, color: '#94a3b8', marginTop: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  errorText: { color: '#dc2626', fontSize: 14, marginTop: 16 },
  nextBtn: {
    backgroundColor: '#059669',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  nextBtnText: { color: '#fff', fontSize: 17, fontWeight: '600' },
});
