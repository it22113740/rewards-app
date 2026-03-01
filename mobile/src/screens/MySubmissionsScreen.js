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

function groupByVenue(submissions) {
  const byId = {};
  for (const s of submissions) {
    const id = s.venue?.id ?? s.venueId ?? 'unknown';
    if (!byId[id]) {
      byId[id] = {
        venue: s.venue ? { id: s.venue.id, name: s.venue.name } : { id, name: 'Venue' },
        submissions: [],
      };
    }
    byId[id].submissions.push(s);
  }
  return Object.values(byId).sort((a, b) =>
    (b.submissions[0]?.createdAt || '').localeCompare(a.submissions[0]?.createdAt || '')
  );
}

export function MySubmissionsScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const token = params?.token;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(!!token);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchSubmissions = useCallback(async () => {
    if (!token) {
      setError('Please log in again.');
      setLoading(false);
      setRefreshing(false);
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/submissions/mine`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to load submissions');
      const data = await res.json();
      const raw = Array.isArray(data) ? data : [];
      setList(groupByVenue(raw));
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
    fetchSubmissions();
  }, [fetchSubmissions]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchSubmissions();
  }, [fetchSubmissions]);

  const handleVenuePress = (item) => {
    navigation.navigate('MySubmissionsByVenue', {
      token: params?.token,
      user: params?.user,
      venue: item.venue,
      submissions: item.submissions,
    });
  };

  if (!token) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My submissions</Text>
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
        <Text style={styles.headerTitle}>My submissions</Text>
      </View>
      {loading && list.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#2563eb" />
        </View>
      ) : error && list.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={() => { setLoading(true); fetchSubmissions(); }}>
            <Text style={styles.retryBtnText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.venue.id}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.venueCard}
              onPress={() => handleVenuePress(item)}
              activeOpacity={0.7}
            >
              <Text style={styles.venueName} numberOfLines={1}>{item.venue.name}</Text>
              <Text style={styles.venueCount}>
                {item.submissions.length} submission{item.submissions.length !== 1 ? 's' : ''}
              </Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={styles.emptyWrap}>
              <Text style={styles.emptyText}>No submissions yet.</Text>
              <Text style={styles.emptyHint}>Submit photos or videos at a shop to see them here.</Text>
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
  backBtnText: { fontSize: 16, color: '#2563eb', fontWeight: '500' },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '600', color: '#111' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  errorText: { fontSize: 16, color: '#64748b', marginBottom: 16, textAlign: 'center' },
  retryBtn: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#2563eb', borderRadius: 8 },
  retryBtnText: { fontSize: 15, fontWeight: '600', color: '#fff' },
  listContent: { padding: 16, paddingBottom: 24 },
  venueCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  venueName: { fontSize: 17, fontWeight: '600', color: '#111', marginBottom: 4 },
  venueCount: { fontSize: 14, color: '#64748b' },
  emptyWrap: { paddingVertical: 32 },
  emptyText: { fontSize: 16, color: '#64748b', marginBottom: 8 },
  emptyHint: { fontSize: 14, color: '#94a3b8' },
});
