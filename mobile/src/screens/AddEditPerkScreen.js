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
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { API_BASE_URL } from '../config';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x200/f1f5f9/94a3b8?text=Cover+image';

const PERK_TYPE_OPTIONS = [
  { value: 'OTHER', label: 'Other' },
  { value: 'FREE_MEAL', label: 'Free meal' },
  { value: 'DISCOUNT', label: 'Discount' },
];

function parseIntNum(s, fallback = 0) {
  const n = parseInt(String(s).trim(), 10);
  return Number.isFinite(n) ? n : fallback;
}

export function AddEditPerkScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const token = params?.token;
  const venueId = params?.venueId || params?.venue?.id;
  const perk = params?.perk || {};
  const isEdit = !!perk?.id;

  const [title, setTitle] = useState(perk?.title ?? '');
  const [description, setDescription] = useState(perk?.description ?? '');
  const [type, setType] = useState((perk?.type ?? 'OTHER').toUpperCase());
  const [pointsRequired, setPointsRequired] = useState(
    perk?.pointsRequired != null ? String(perk.pointsRequired) : '10'
  );
  const [discountPercent, setDiscountPercent] = useState(
    perk?.discountPercent != null ? String(perk.discountPercent) : ''
  );
  const [promoCodePrefix, setPromoCodePrefix] = useState(perk?.promoCodePrefix ?? '');
  const [imageUrl, setImageUrl] = useState(perk?.imageUrl ?? '');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const pickImage = async () => {
    setError('');
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Photo library access is required for the cover image.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 1],
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
    if (!title.trim() || title.trim().length < 2) {
      setError('Title must be at least 2 characters');
      return false;
    }
    const pts = parseIntNum(pointsRequired, -1);
    if (pts < 1) {
      setError('Points required must be at least 1');
      return false;
    }
    if (type === 'DISCOUNT') {
      const pct = parseIntNum(discountPercent, -1);
      if (pct < 0 || pct > 100) {
        setError('Discount percent must be 0–100');
        return false;
      }
    }
    setError('');
    return true;
  };

  const submit = async () => {
    if (!validate() || !token || !venueId) return;
    setSubmitting(true);
    try {
      const body = {
        title: title.trim(),
        description: description.trim() || undefined,
        type,
        pointsRequired: parseIntNum(pointsRequired, 10),
        discountPercent: type === 'DISCOUNT' && discountPercent.trim() !== '' ? parseIntNum(discountPercent, 0) : undefined,
        promoCodePrefix: promoCodePrefix.trim() || undefined,
        imageUrl: imageUrl.trim() || undefined,
      };
      if (isEdit) {
        const res = await fetch(`${API_BASE_URL}/perks/${perk.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          const d = await res.json().catch(() => ({}));
          throw new Error(d?.message || 'Update failed');
        }
        Alert.alert('Updated', 'Perk updated.', [{ text: 'OK', onPress: () => navigation.goBack() }]);
      } else {
        const res = await fetch(`${API_BASE_URL}/perks`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...body, venueId }),
        });
        if (!res.ok) {
          const d = await res.json().catch(() => ({}));
          throw new Error(d?.message || 'Create failed');
        }
        Alert.alert('Created', 'Perk added.', [{ text: 'OK', onPress: () => navigation.goBack() }]);
      }
    } catch (e) {
      setError(e?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()} disabled={submitting}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{isEdit ? 'Edit perk' : 'Add perk'}</Text>
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
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <Text style={styles.label}>Cover image (optional)</Text>
          <TouchableOpacity style={styles.imageBox} onPress={pickImage} disabled={uploadingImage}>
            {uploadingImage ? (
              <ActivityIndicator color="#059669" />
            ) : (
              <Image
                source={{ uri: imageUrl || PLACEHOLDER_IMAGE }}
                style={styles.coverImage}
                resizeMode="cover"
              />
            )}
          </TouchableOpacity>
          <Text style={styles.imageHint}>Tap to upload</Text>

          <Text style={styles.label}>Title *</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="e.g. Free drink"
            editable={!submitting}
          />

          <Text style={styles.label}>Description (optional)</Text>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            value={description}
            onChangeText={setDescription}
            placeholder="Short description of the perk"
            multiline
            numberOfLines={3}
            editable={!submitting}
          />

          <Text style={styles.label}>Type</Text>
          <View style={styles.typeRow}>
            {PERK_TYPE_OPTIONS.map((opt) => (
              <TouchableOpacity
                key={opt.value}
                style={[styles.typeBtn, type === opt.value && styles.typeBtnActive]}
                onPress={() => setType(opt.value)}
                disabled={submitting}
              >
                <Text style={[styles.typeBtnText, type === opt.value && styles.typeBtnTextActive]}>
                  {opt.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Points required *</Text>
          <TextInput
            style={styles.input}
            value={pointsRequired}
            onChangeText={setPointsRequired}
            placeholder="10"
            keyboardType="number-pad"
            editable={!submitting}
          />

          {type === 'DISCOUNT' ? (
            <>
              <Text style={styles.label}>Discount % (0–100)</Text>
              <TextInput
                style={styles.input}
                value={discountPercent}
                onChangeText={setDiscountPercent}
                placeholder="e.g. 10"
                keyboardType="number-pad"
                editable={!submitting}
              />
            </>
          ) : null}

          <Text style={styles.label}>Promo code prefix (optional)</Text>
          <TextInput
            style={styles.input}
            value={promoCodePrefix}
            onChangeText={setPromoCodePrefix}
            placeholder="e.g. RWD"
            editable={!submitting}
          />

          <TouchableOpacity
            style={[styles.submitBtn, submitting && styles.submitBtnDisabled]}
            onPress={submit}
            disabled={submitting}
          >
            {submitting ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.submitBtnText}>{isEdit ? 'Update perk' : 'Add perk'}</Text>
            )}
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
  backBtn: { paddingVertical: 6, paddingRight: 12 },
  backBtnText: { fontSize: 16, color: '#059669', fontWeight: '500' },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '600', color: '#111' },
  keyboard: { flex: 1 },
  scroll: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 40 },
  errorText: { fontSize: 14, color: '#dc2626', marginBottom: 12 },
  imageBox: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f1f5f9',
    marginBottom: 6,
  },
  coverImage: { width: '100%', height: '100%' },
  imageHint: { fontSize: 12, color: '#94a3b8', marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', color: '#334155', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  inputMultiline: { minHeight: 80, textAlignVertical: 'top' },
  typeRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  typeBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#fff',
  },
  typeBtnActive: { borderColor: '#059669', backgroundColor: '#ecfdf5' },
  typeBtnText: { fontSize: 14, fontWeight: '600', color: '#64748b' },
  typeBtnTextActive: { color: '#059669' },
  submitBtn: {
    backgroundColor: '#059669',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  submitBtnDisabled: { opacity: 0.6 },
  submitBtnText: { fontSize: 17, fontWeight: '600', color: '#fff' },
});
