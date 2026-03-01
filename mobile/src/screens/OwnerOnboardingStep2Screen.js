import { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API_BASE_URL } from '../config';

function parseIntNum(s, fallback = 0) {
  const n = parseInt(String(s).trim(), 10);
  return Number.isFinite(n) ? n : fallback;
}

export function OwnerOnboardingStep2Screen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const token = params?.token;
  const step1Data = params?.step1Data || {};

  const [pointsPerPhoto, setPointsPerPhoto] = useState('10');
  const [pointsPerVideo, setPointsPerVideo] = useState('20');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validate = () => {
    const pPhoto = parseIntNum(pointsPerPhoto, -1);
    const pVideo = parseIntNum(pointsPerVideo, -1);
    if (pPhoto < 0 || pVideo < 0) {
      setError('Points must be 0 or greater');
      return false;
    }
    setError('');
    return true;
  };

  const handleNext = async () => {
    if (!token) {
      setError('Please log in again.');
      return;
    }
    if (!validate()) return;

    const payload = {
      ...step1Data,
      pointsPerPhoto: parseIntNum(pointsPerPhoto, 0),
      pointsPerVideo: parseIntNum(pointsPerVideo, 0),
      category: category.trim() || undefined,
      description: description.trim() || undefined,
    };

    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE_URL}/venues`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      const created = await res.json().catch(() => null);
      if (!res.ok) {
        const err = created || {};
        throw new Error(err?.message || 'Create failed');
      }
      navigation.replace('VenuePerks', {
        token,
        user: params?.user,
        venueId: created.id,
        venue: created,
        onboarding: true,
      });
    } catch (e) {
      setError(e?.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBack} onPress={() => navigation.goBack()} disabled={submitting}>
          <Text style={styles.headerBackText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Step 2 of 3</Text>
      </View>

      <View style={styles.stepperBanner}>
        <Text style={styles.stepperTitle}>Points & info</Text>
        <Text style={styles.stepperSubtitle}>Rewards and description</Text>
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
          <Text style={styles.label}>Points per photo</Text>
          <TextInput
            style={styles.input}
            value={pointsPerPhoto}
            onChangeText={setPointsPerPhoto}
            placeholder="10"
            keyboardType="number-pad"
            editable={!submitting}
          />

          <Text style={styles.label}>Points per video</Text>
          <TextInput
            style={styles.input}
            value={pointsPerVideo}
            onChangeText={setPointsPerVideo}
            placeholder="20"
            keyboardType="number-pad"
            editable={!submitting}
          />

          <Text style={styles.label}>Category (optional)</Text>
          <TextInput
            style={styles.input}
            value={category}
            onChangeText={setCategory}
            placeholder="e.g. restaurant, coolbar"
            editable={!submitting}
          />

          <Text style={styles.label}>Description (optional)</Text>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            value={description}
            onChangeText={setDescription}
            placeholder="Short description"
            multiline
            numberOfLines={3}
            editable={!submitting}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity
            style={[styles.nextBtn, submitting && styles.nextBtnDisabled]}
            onPress={handleNext}
            disabled={submitting}
          >
            {submitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.nextBtnText}>Next → Step 3</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputMultiline: { minHeight: 80, textAlignVertical: 'top' },
  errorText: { color: '#dc2626', fontSize: 14, marginTop: 16 },
  nextBtn: {
    backgroundColor: '#059669',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  nextBtnDisabled: { opacity: 0.7 },
  nextBtnText: { color: '#fff', fontSize: 17, fontWeight: '600' },
});
