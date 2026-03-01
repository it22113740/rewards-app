import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
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
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { dateStyle: 'medium' });
  } catch {
    return iso;
  }
}

export function RedemptionsScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const token = params?.token;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(!!token);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchRedemptions = useCallback(async () => {
    if (!token) {
      setError('Please log in again.');
      setLoading(false);
      setRefreshing(false);
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/redemptions/mine`, {
        headers: { Authorization: `Bearer ${token}` },
      });
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
  }, [token]);

  useEffect(() => {
    fetchRedemptions();
  }, [fetchRedemptions]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchRedemptions();
  }, [fetchRedemptions]);

  if (!token) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My redemptions</Text>
        </View>
        <View style={styles.centered}>
          <Text style={styles.errorText}>Please log in again.</Text>
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
        <Text style={styles.headerTitle}>My redemptions</Text>
      </View>
      {loading && list.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#2563eb" />
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
            const venueName = item.perk?.venue?.name ?? '—';
            const perkTitle = item.perk?.title ?? '—';
            const status = (item.status || '').toLowerCase();
            const isUsed = status === 'used';
            return (
              <View style={[styles.card, isUsed && styles.cardUsed]}>
                <Text style={styles.cardTitle} numberOfLines={1}>{perkTitle}</Text>
                <Text style={styles.cardVenue}>{venueName}</Text>
                <View style={styles.promoRow}>
                  <Text style={styles.promoLabel}>Code: </Text>
                  <Text style={styles.promoCode} selectable>{item.promoCode ?? '—'}</Text>
                </View>
                <View style={styles.metaRow}>
                  <Text style={[styles.statusBadge, isUsed ? styles.statusUsed : styles.statusIssued]}>
                    {isUsed ? 'Used' : 'Issued'}
                  </Text>
                  <Text style={styles.date}>{formatDate(item.createdAt)}</Text>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={
            <View style={styles.emptyWrap}>
              <Text style={styles.emptyText}>No redemptions yet.</Text>
              <Text style={styles.emptyHint}>Redeem perks at a shop to see them here.</Text>
            </View>
          }
        />
      )}
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
  backBtn: {
    paddingVertical: 6,
    paddingRight: 12,
  },
  backBtnText: {
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
    textAlign: 'center',
  },
  retryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2563eb',
    borderRadius: 8,
  },
  retryBtnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  listContent: {
    padding: 20,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardUsed: {
    opacity: 0.85,
    borderColor: '#cbd5e1',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  cardVenue: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 10,
  },
  promoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  promoLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  promoCode: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f766e',
    letterSpacing: 1,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  statusBadge: {
    fontSize: 12,
    fontWeight: '600',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
    overflow: 'hidden',
  },
  statusIssued: {
    backgroundColor: '#ccfbf1',
    color: '#0f766e',
  },
  statusUsed: {
    backgroundColor: '#e2e8f0',
    color: '#64748b',
  },
  date: {
    fontSize: 12,
    color: '#94a3b8',
  },
  emptyWrap: {
    paddingVertical: 24,
  },
  emptyText: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 8,
  },
  emptyHint: {
    fontSize: 14,
    color: '#94a3b8',
  },
});
