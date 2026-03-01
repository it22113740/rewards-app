import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { API_BASE_URL } from '../config';
import { clearAuth } from '../authStorage';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x200/f1f5f9/94a3b8?text=No+image';

export function MainScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const user = params?.user || {};
  const role = String(user?.role ?? 'user').toLowerCase();
  const isOwner = role === 'owner';
  const [shops, setShops] = useState([]);
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(!isOwner);
  const [venuesLoading, setVenuesLoading] = useState(isOwner);
  const [refreshing, setRefreshing] = useState(false);
  const [venuesRefreshing, setVenuesRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [venuesError, setVenuesError] = useState(null);

  const fetchShops = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/venues?limit=50`);
      if (!res.ok) throw new Error('Failed to load shops');
      const data = await res.json();
      setShops(Array.isArray(data) ? data : []);
      setError(null);
    } catch (e) {
      setError(e?.message || 'Something went wrong');
      setShops([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  const fetchVenues = useCallback(async () => {
    const token = params?.token;
    if (!token) {
      setVenuesError('Please log in again.');
      setVenuesLoading(false);
      setVenuesRefreshing(false);
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/venues/mine`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Failed to load venues');
      const data = await res.json();
      setVenues(Array.isArray(data) ? data : []);
      setVenuesError(null);
    } catch (e) {
      setVenuesError(e?.message || 'Something went wrong');
      setVenues([]);
    } finally {
      setVenuesLoading(false);
      setVenuesRefreshing(false);
    }
  }, [params?.token]);

  useEffect(() => {
    if (!isOwner) fetchShops();
    if (isOwner) fetchVenues();
  }, [isOwner, fetchShops, fetchVenues]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchShops();
  }, [fetchShops]);

  const onVenuesRefresh = useCallback(() => {
    setVenuesRefreshing(true);
    fetchVenues();
  }, [fetchVenues]);

  const handleLogout = useCallback(async () => {
    await clearAuth();
    navigation.reset({ index: 0, routes: [{ name: 'RoleSelect' }] });
  }, [navigation]);

  if (isOwner) {
    const renderVenueItem = ({ item }) => (
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate('OwnerVenueDetail', {
            token: params?.token,
            user: params?.user,
            venue: item,
          })
        }
        android_ripple={{ color: 'rgba(0,0,0,0.06)' }}
      >
        <Image
          source={{ uri: item.imageUrl || PLACEHOLDER_IMAGE }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardName} numberOfLines={1}>
            {item.name}
          </Text>
          {item.category ? (
            <Text style={styles.cardCategory}>{item.category}</Text>
          ) : null}
          {item.description ? (
            <Text style={styles.cardDescription} numberOfLines={2}>
              {item.description}
            </Text>
          ) : null}
          {item.address ? (
            <Text style={styles.cardAddress} numberOfLines={1}>{item.address}</Text>
          ) : null}
        </View>
      </Pressable>
    );

    const renderVenuesEmpty = () => (
      <View style={styles.centered}>
        <Text style={styles.emptyText}>No venues yet</Text>
        <Text style={styles.emptyHint}>Add another venue to your profile</Text>
      </View>
    );

    let ownerBody;
    if (venuesLoading && venues.length === 0) {
      ownerBody = (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#059669" />
        </View>
      );
    } else if (venuesError && venues.length === 0) {
      ownerBody = (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{venuesError}</Text>
          <Text style={styles.retryHint}>Pull down to refresh</Text>
        </View>
      );
    } else if (venues.length === 0) {
      ownerBody = (
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Complete profile set up</Text>
          <Text style={styles.emptyHint}>
            Follow 3 quick steps to set up your first venue.
          </Text>
          <TouchableOpacity
            style={styles.addVenueBtn}
            activeOpacity={0.9}
            onPress={() =>
              navigation.navigate('OnboardingStep1', {
                token: params?.token,
                user: params?.user,
              })
            }
          >
            <Text style={styles.addVenueBtnText}>Complete profile set up</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      ownerBody = (
        <FlatList
          data={venues}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl
              refreshing={venuesRefreshing}
              onRefresh={onVenuesRefresh}
            />
          }
          renderItem={renderVenueItem}
          ListEmptyComponent={renderVenuesEmpty}
          ListHeaderComponent={
            <TouchableOpacity
              style={styles.addVenueBtn}
              onPress={() => navigation.navigate('AddVenue', { token: params?.token, user: params?.user })}
            >
              <Text style={styles.addVenueBtnText}>+ Add venue</Text>
            </TouchableOpacity>
          }
        />
      );
    }

    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>My venues</Text>
            <Text style={styles.subtitle}>
              {user?.email || user?.gmail || '—'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => navigation.navigate('Profile', { token: params?.token, user: params?.user })}
          >
            <Text style={styles.profileBtnText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutBtnText}>Log out</Text>
          </TouchableOpacity>
        </View>
        {ownerBody}
      </SafeAreaView>
    );
  }

  function renderShopItem({ item }) {
    return (
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate('ShopDetail', { venue: item, token: params?.token, user: params?.user })}
        android_ripple={{ color: 'rgba(0,0,0,0.06)' }}
      >
        <Image
          source={{ uri: item.imageUrl || PLACEHOLDER_IMAGE }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardName} numberOfLines={1}>
            {item.name}
          </Text>
          {item.category ? (
            <Text style={styles.cardCategory}>{item.category}</Text>
          ) : null}
          {item.description ? (
            <Text style={styles.cardDescription} numberOfLines={2}>
              {item.description}
            </Text>
          ) : null}
        </View>
      </Pressable>
    );
  }

  function renderEmpty() {
    return (
      <View style={styles.centered}>
        <Text style={styles.emptyText}>No shops yet</Text>
      </View>
    );
  }

  let body;
  if (loading) {
    body = (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  } else if (error) {
    body = (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.retryHint}>Pull down to refresh</Text>
      </View>
    );
  } else {
    body = (
      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={renderShopItem}
        ListEmptyComponent={renderEmpty}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>Shops</Text>
          <Text style={styles.subtitle}>Earn points at these venues</Text>
        </View>
        <TouchableOpacity
          style={styles.profileBtn}
          onPress={() => navigation.navigate('Profile', { token: params?.token, user: params?.user })}
        >
          <Text style={styles.profileBtnText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutBtnText}>Log out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userNavRow}>
        <TouchableOpacity
          style={styles.userNavBtn}
          onPress={() => navigation.navigate('Points', { token: params?.token, user: params?.user })}
        >
          <Text style={styles.userNavBtnText}>My points</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userNavBtn}
          onPress={() => navigation.navigate('Redemptions', { token: params?.token, user: params?.user })}
        >
          <Text style={styles.userNavBtnText}>My redemptions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userNavBtn}
          onPress={() => navigation.navigate('MySubmissions', { token: params?.token, user: params?.user })}
        >
          <Text style={styles.userNavBtnText}>My submissions</Text>
        </TouchableOpacity>
      </View>
      {body}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerLeft: {
    flex: 1,
  },
  profileBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    borderRadius: 8,
  },
  profileBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
  },
  logoutBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
  },
  logoutBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  userNavRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  userNavBtn: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#2563eb',
    borderRadius: 8,
    alignItems: 'center',
  },
  userNavBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  hint: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    color: '#dc2626',
    fontSize: 16,
    textAlign: 'center',
  },
  retryHint: {
    color: '#64748b',
    fontSize: 14,
    marginTop: 8,
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#f1f5f9',
  },
  cardBody: {
    padding: 14,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  cardCategory: {
    fontSize: 13,
    color: '#2563eb',
    fontWeight: '600',
    marginBottom: 6,
    textTransform: 'capitalize',
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  cardAddress: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
  emptyText: {
    fontSize: 16,
    color: '#94a3b8',
  },
  emptyHint: {
    fontSize: 14,
    color: '#cbd5e1',
    marginTop: 8,
  },
  addVenueBtn: {
    backgroundColor: '#059669',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  addVenueBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
