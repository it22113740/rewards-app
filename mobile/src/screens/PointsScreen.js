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

export function PointsScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const token = params?.token;
  const [data, setData] = useState({ total: 0, byVenue: [] });
  const [loading, setLoading] = useState(!!token);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchPoints = useCallback(async () => {
    if (!token) {
      setError('Please log in again.');
      setLoading(false);
      setRefreshing(false);
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/users/me/points`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to load points');
      const json = await res.json();
      setData({
        total: json.total ?? 0,
        byVenue: Array.isArray(json.byVenue) ? json.byVenue : [],
      });
      setError(null);
    } catch (e) {
      setError(e?.message || 'Something went wrong');
      setData({ total: 0, byVenue: [] });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [token]);

  useEffect(() => {
    fetchPoints();
  }, [fetchPoints]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchPoints();
  }, [fetchPoints]);

  if (!token) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My points</Text>
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
        <Text style={styles.headerTitle}>My points</Text>
      </View>
      {loading && data.byVenue.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#2563eb" />
        </View>
      ) : error && data.byVenue.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={() => { setLoading(true); fetchPoints(); }}>
            <Text style={styles.retryBtnText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.totalCard}>
            <Text style={styles.totalLabel}>Total points</Text>
            <Text style={styles.totalValue}>{data.total}</Text>
          </View>
          <Text style={styles.sectionTitle}>By venue</Text>
          <FlatList
            data={data.byVenue}
            keyExtractor={(item) => item.venueId}
            contentContainerStyle={styles.listContent}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => (
              <View style={styles.venueRow}>
                <Text style={styles.venueName} numberOfLines={1}>{item.venueName}</Text>
                <Text style={styles.venuePoints}>{item.points} pts</Text>
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No points at any venue yet. Submit photos or videos at a shop to earn points.</Text>
            }
          />
        </>
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
  backBtnText: { fontSize: 16, color: '#2563eb', fontWeight: '500' },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '600', color: '#111' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  errorText: { fontSize: 16, color: '#64748b', marginBottom: 16, textAlign: 'center' },
  retryBtn: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#2563eb', borderRadius: 8 },
  retryBtnText: { fontSize: 15, fontWeight: '600', color: '#fff' },
  totalCard: { margin: 20, padding: 24, backgroundColor: '#2563eb', borderRadius: 16 },
  totalLabel: { fontSize: 14, color: 'rgba(255,255,255,0.9)', marginBottom: 4 },
  totalValue: { fontSize: 36, fontWeight: '700', color: '#fff' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111', marginHorizontal: 20, marginBottom: 12 },
  listContent: { paddingHorizontal: 20, paddingBottom: 24 },
  venueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  venueName: { flex: 1, fontSize: 16, fontWeight: '500', color: '#111', marginRight: 12 },
  venuePoints: { fontSize: 16, fontWeight: '700', color: '#2563eb' },
  emptyText: { fontSize: 14, color: '#64748b', lineHeight: 22, paddingVertical: 12 },
});
