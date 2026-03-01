import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { API_BASE_URL } from '../config';

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleDateString(undefined, { dateStyle: 'medium' });
  } catch {
    return iso;
  }
}

export function VenueRedemptionsScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const token = params?.token;
  const venueId = params?.venueId || params?.venue?.id;
  const venueName = params?.venue?.name || 'Venue';
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(!!token && !!venueId);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [markingId, setMarkingId] = useState(null);

  const fetchRedemptions = useCallback(async () => {
    if (!token || !venueId) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(
        `${API_BASE_URL}/redemptions/venue/${venueId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (!res.ok) throw new Error('Failed to load redemptions');
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
    fetchRedemptions();
  }, [fetchRedemptions]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchRedemptions();
  }, [fetchRedemptions]);

  const handleMarkUsed = async (redemption) => {
    if (!token || markingId) return;
    setMarkingId(redemption.id);
    try {
      const res = await fetch(
        `${API_BASE_URL}/redemptions/${redemption.id}/used`,
        {
          method: 'PATCH',
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d?.message || 'Failed to mark as used');
      }
      setList((prev) =>
        prev.map((r) =>
          r.id === redemption.id ? { ...r, status: 'USED', usedAt: new Date().toISOString() } : r
        )
      );
    } catch (e) {
      Alert.alert('Error', e?.message || 'Could not mark as used');
    } finally {
      setMarkingId(null);
    }
  };

  if (!token || !venueId) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Redemptions</Text>
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
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>Redemptions – {venueName}</Text>
      </View>
      {loading && list.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#059669" />
        </View>
      ) : error && list.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={() => { setLoading(true); fetchRedemptions(); }}>
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
          renderItem={({ item }) => {
            const isUsed = (item.status || '').toUpperCase() === 'USED';
            const isBusy = markingId === item.id;
            const userLabel = item.user?.username || item.user?.email || '—';
            const perkTitle = item.perk?.title ?? '—';
            return (
              <View style={[styles.card, isUsed && styles.cardUsed]}>
                <Text style={styles.cardTitle} numberOfLines={1}>{perkTitle}</Text>
                <Text style={styles.cardUser}>{userLabel}</Text>
                <View style={styles.promoRow}>
                  <Text style={styles.promoLabel}>Code: </Text>
                  <Text style={styles.promoCode} selectable>{item.promoCode ?? '—'}</Text>
                </View>
                <View style={styles.metaRow}>
                  <Text style={[styles.badge, isUsed ? styles.badgeUsed : styles.badgeIssued]}>
                    {isUsed ? 'Used' : 'Issued'}
                  </Text>
                  <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
                </View>
                {!isUsed && (
                  <TouchableOpacity
                    style={[styles.usedBtn, isBusy && styles.btnDisabled]}
                    onPress={() => handleMarkUsed(item)}
                    disabled={!!markingId}
                  >
                    {isBusy ? (
                      <ActivityIndicator size="small" color="#fff" />
                    ) : (
                      <Text style={styles.usedBtnText}>Mark as used</Text>
                    )}
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
          ListEmptyComponent={
            <View style={styles.emptyWrap}>
              <Text style={styles.emptyText}>No redemptions for this venue yet.</Text>
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
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  errorText: { fontSize: 16, color: '#64748b', marginBottom: 16 },
  retryBtn: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#059669', borderRadius: 8 },
  retryBtnText: { fontSize: 15, fontWeight: '600', color: '#fff' },
  listContent: { padding: 16, paddingBottom: 24 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardUsed: { opacity: 0.85 },
  cardTitle: { fontSize: 17, fontWeight: '600', color: '#111', marginBottom: 4 },
  cardUser: { fontSize: 14, color: '#64748b', marginBottom: 8 },
  promoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  promoLabel: { fontSize: 14, color: '#64748b' },
  promoCode: { fontSize: 15, fontWeight: '700', color: '#0f766e', letterSpacing: 1 },
  metaRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  badge: { fontSize: 12, fontWeight: '600', paddingVertical: 2, paddingHorizontal: 8, borderRadius: 6, overflow: 'hidden' },
  badgeIssued: { backgroundColor: '#ccfbf1', color: '#0f766e' },
  badgeUsed: { backgroundColor: '#e2e8f0', color: '#64748b' },
  dateText: { fontSize: 12, color: '#94a3b8' },
  usedBtn: {
    marginTop: 8,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#059669',
  },
  usedBtnText: { fontSize: 14, fontWeight: '600', color: '#fff' },
  btnDisabled: { opacity: 0.6 },
  emptyWrap: { paddingVertical: 32 },
  emptyText: { fontSize: 16, color: '#64748b' },
});
