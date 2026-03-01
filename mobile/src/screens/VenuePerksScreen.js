import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { API_BASE_URL } from '../config';

const PERK_TYPES = { DISCOUNT: 'Discount', FREE_MEAL: 'Free meal', OTHER: 'Other' };
const PERK_PLACEHOLDER = 'https://via.placeholder.com/120x120/f1f5f9/94a3b8?text=Perk';

export function VenuePerksScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const token = params?.token;
  const venueId = params?.venueId || params?.venue?.id;
  const venueName = params?.venue?.name || 'Venue';
  const isOnboarding = params?.onboarding === true;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(!!token && !!venueId);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchPerks = useCallback(async () => {
    if (!token || !venueId) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/perks/venue/${venueId}`);
      if (!res.ok) throw new Error('Failed to load perks');
      const data = await res.json();
      setList(Array.isArray(data) ? data : []);
      setError(null);
    } catch (e) {
      setError(e?.message || 'Something went wrong');
      setList([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [token, venueId]);

  useEffect(() => {
    fetchPerks();
  }, [fetchPerks]);

  useFocusEffect(
    useCallback(() => {
      if (token && venueId) fetchPerks();
    }, [token, venueId, fetchPerks])
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchPerks();
  }, [fetchPerks]);

  const handleAddPerk = () => {
    navigation.navigate('AddEditPerk', {
      token,
      user: params?.user,
      venueId,
      venue: params?.venue,
    });
  };

  const handleEditPerk = (perk) => {
    navigation.navigate('AddEditPerk', {
      token,
      user: params?.user,
      venueId,
      venue: params?.venue,
      perk,
    });
  };

  const handleDeletePerk = (perk) => {
    Alert.alert(
      'Delete perk',
      `Delete "${perk.title}"? This cannot be undone.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            if (!token || deletingId) return;
            setDeletingId(perk.id);
            try {
              const res = await fetch(`${API_BASE_URL}/perks/${perk.id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
              });
              if (!res.ok) {
                const d = await res.json().catch(() => ({}));
                throw new Error(d?.message || 'Delete failed');
              }
              setList((prev) => prev.filter((p) => p.id !== perk.id));
            } catch (e) {
              Alert.alert('Error', e?.message || 'Could not delete perk');
            } finally {
              setDeletingId(null);
            }
          },
        },
      ]
    );
  };

  if (!token || !venueId) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perks</Text>
        </View>
        <View style={styles.centered}>
          <Text style={styles.errorText}>Missing venue or auth.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() =>
            isOnboarding
              ? navigation.navigate('Main', { token: params?.token, user: params?.user })
              : navigation.goBack()
          }
        >
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {isOnboarding ? 'Step 3 of 3' : `Perks – ${venueName}`}
        </Text>
      </View>
      {isOnboarding ? (
        <View style={styles.stepperBanner}>
          <Text style={styles.stepperTitle}>Perks</Text>
          <Text style={styles.stepperSubtitle}>Add rewards customers can redeem with points</Text>
        </View>
      ) : null}
      {loading && list.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#059669" />
        </View>
      ) : error && list.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={() => { setLoading(true); fetchPerks(); }}>
            <Text style={styles.retryBtnText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={
            <TouchableOpacity style={styles.addBtn} onPress={handleAddPerk}>
              <Text style={styles.addBtnText}>+ Add perk</Text>
            </TouchableOpacity>
          }
          renderItem={({ item }) => {
            const isDeleting = deletingId === item.id;
            const typeLabel = PERK_TYPES[item.type] || item.type || 'Other';
            return (
              <View style={styles.card}>
                <View style={styles.cardTop}>
                  <Image
                    source={{ uri: item.imageUrl || PERK_PLACEHOLDER }}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                  <View style={styles.cardMain}>
                    <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                    {item.description ? (
                      <Text style={styles.cardDesc} numberOfLines={2}>{item.description}</Text>
                    ) : null}
                    <View style={styles.cardMeta}>
                      <Text style={styles.pointsText}>{item.pointsRequired} pts</Text>
                      <Text style={styles.typeText}>{typeLabel}</Text>
                      {item.discountPercent != null ? (
                        <Text style={styles.discountText}>{item.discountPercent}% off</Text>
                      ) : null}
                    </View>
                  </View>
                </View>
                <View style={styles.actions}>
                  <TouchableOpacity
                    style={styles.editBtn}
                    onPress={() => handleEditPerk(item)}
                    disabled={!!deletingId}
                  >
                    <Text style={styles.editBtnText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.deleteBtn, isDeleting && styles.btnDisabled]}
                    onPress={() => handleDeletePerk(item)}
                    disabled={!!deletingId}
                  >
                    {isDeleting ? (
                      <ActivityIndicator size="small" color="#fff" />
                    ) : (
                      <Text style={styles.deleteBtnText}>Delete</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={
            <View style={styles.emptyWrap}>
              <Text style={styles.emptyText}>No perks yet.</Text>
              <Text style={styles.emptyHint}>Tap "Add perk" to create one.</Text>
            </View>
          }
        />
      )}
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
  stepperBanner: {
    padding: 14,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 10,
    backgroundColor: '#ecfdf5',
  },
  stepperTitle: { fontSize: 15, fontWeight: '700', color: '#065f46', marginBottom: 2 },
  stepperSubtitle: { fontSize: 13, color: '#16a34a' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  errorText: { fontSize: 16, color: '#64748b', marginBottom: 16 },
  retryBtn: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#059669', borderRadius: 8 },
  retryBtnText: { fontSize: 15, fontWeight: '600', color: '#fff' },
  listContent: { padding: 16, paddingBottom: 24 },
  addBtn: {
    backgroundColor: '#059669',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  addBtnText: { fontSize: 16, fontWeight: '600', color: '#fff' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTop: { flexDirection: 'row', marginBottom: 10 },
  cardImage: { width: 72, height: 72, borderRadius: 8, backgroundColor: '#f1f5f9' },
  cardMain: { flex: 1, marginLeft: 12 },
  cardTitle: { fontSize: 17, fontWeight: '600', color: '#111', marginBottom: 4 },
  cardDesc: { fontSize: 14, color: '#64748b', marginBottom: 6 },
  cardMeta: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  pointsText: { fontSize: 14, fontWeight: '600', color: '#059669' },
  typeText: { fontSize: 13, color: '#64748b' },
  discountText: { fontSize: 13, color: '#0f766e' },
  actions: { flexDirection: 'row', gap: 8 },
  editBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#2563eb',
  },
  editBtnText: { fontSize: 14, fontWeight: '600', color: '#fff' },
  deleteBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#dc2626',
  },
  deleteBtnText: { fontSize: 14, fontWeight: '600', color: '#fff' },
  btnDisabled: { opacity: 0.6 },
  emptyWrap: { paddingVertical: 24 },
  emptyText: { fontSize: 16, color: '#64748b', marginBottom: 8 },
  emptyHint: { fontSize: 14, color: '#94a3b8' },
});
