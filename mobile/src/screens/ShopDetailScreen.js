import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useVideoPlayer, VideoView } from 'expo-video';
import { API_BASE_URL } from '../config';
import { VenueMapView } from '../components/VenueMapView';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x200/f1f5f9/94a3b8?text=No+image';
const PERK_COVER_PLACEHOLDER = 'https://via.placeholder.com/400x120/f1f5f9/94a3b8?text=Perk';

export function ShopDetailScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const venue = params?.venue || {};
  const venueId = venue?.id || params?.venueId;
  const [perks, setPerks] = useState([]);
  const [perksLoading, setPerksLoading] = useState(!!venueId);
  const [redeemingId, setRedeemingId] = useState(null);
  const [venueMedia, setVenueMedia] = useState([]);
  const [venueMediaLoading, setVenueMediaLoading] = useState(!!venueId);
  const [viewMedia, setViewMedia] = useState({ visible: false, mediaUrl: null, type: null });

  const mediaViewerVideoSource =
    viewMedia.mediaUrl && (viewMedia.type || '').toUpperCase() !== 'PHOTO' ? viewMedia.mediaUrl : null;
  const mediaViewerPlayer = useVideoPlayer(mediaViewerVideoSource, (p) => {
    if (p) p.pause();
  });

  const fetchPerks = useCallback(async () => {
    if (!venueId) return;
    setPerksLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/perks/venue/${venueId}`);
      if (res.ok) {
        const data = await res.json();
        setPerks(Array.isArray(data) ? data : []);
      } else {
        setPerks([]);
      }
    } catch {
      setPerks([]);
    } finally {
      setPerksLoading(false);
    }
  }, [venueId]);

  const fetchVenueMedia = useCallback(async () => {
    if (!venueId) return;
    setVenueMediaLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/submissions/venue/${venueId}/approved-media`);
      if (res.ok) {
        const data = await res.json();
        setVenueMedia(Array.isArray(data) ? data : []);
      } else {
        setVenueMedia([]);
      }
    } catch {
      setVenueMedia([]);
    } finally {
      setVenueMediaLoading(false);
    }
  }, [venueId]);

  useEffect(() => {
    fetchPerks();
    fetchVenueMedia();
  }, [fetchPerks, fetchVenueMedia]);

  const handleSubmitPhotoVideo = () => {
    navigation.navigate('SubmitMedia', {
      venueId,
      venue,
      token: params?.token,
      user: params?.user,
    });
  };

  const handleRedeem = async (perk) => {
    const token = params?.token;
    if (!token) {
      Alert.alert('Error', 'Please log in to redeem.');
      return;
    }
    setRedeemingId(perk.id);
    try {
      const res = await fetch(`${API_BASE_URL}/redemptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ perkId: perk.id }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        Alert.alert('Redeem failed', data?.message || 'Could not redeem. You may not have enough points.');
        return;
      }
      Alert.alert(
        'Redeemed!',
        `Your code: ${data.promoCode ?? '—'}\n\nShow this code at ${venue?.name ?? 'the venue'}.`,
        [{ text: 'OK' }, { text: 'My redemptions', onPress: () => navigation.navigate('Redemptions', { token, user: params?.user }) }]
      );
    } catch (e) {
      Alert.alert('Error', e?.message || 'Something went wrong.');
    } finally {
      setRedeemingId(null);
    }
  };

  if (!venueId && !venue?.name) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.centered}>
          <Text style={styles.errorText}>Shop not found</Text>
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
        <TouchableOpacity style={styles.headerBack} onPress={() => navigation.goBack()}>
          <Text style={styles.headerBackText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{venue.name}</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageWrap}>
          <Image
            source={{ uri: venue.imageUrl || PLACEHOLDER_IMAGE }}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.name}>{venue.name}</Text>
          {venue.category ? (
            <Text style={styles.category}>{venue.category}</Text>
          ) : null}
          {venue.description ? (
            <Text style={styles.description}>{venue.description}</Text>
          ) : null}
          {venue.address ? (
            <Text style={styles.address}>📍 {venue.address}</Text>
          ) : null}
          {venue.lat != null && venue.lng != null ? (
            <>
              <Text style={styles.sectionTitle}>Location</Text>
              <VenueMapView latitude={venue.lat} longitude={venue.lng} height={200} />
            </>
          ) : null}
          <View style={styles.pointsRow}>
            <Text style={styles.pointsLabel}>Points per photo:</Text>
            <Text style={styles.pointsValue}>{venue.pointsPerPhoto ?? 0}</Text>
          </View>
          <View style={styles.pointsRow}>
            <Text style={styles.pointsLabel}>Points per video:</Text>
            <Text style={styles.pointsValue}>{venue.pointsPerVideo ?? 0}</Text>
          </View>

          <Text style={styles.sectionTitle}>Photos & videos</Text>
          {venueMediaLoading ? (
            <ActivityIndicator size="small" color="#2563eb" style={styles.mediaLoader} />
          ) : venueMedia.length === 0 ? (
            <Text style={styles.noMedia}>No photos or videos yet.</Text>
          ) : (
            <View style={styles.mediaGrid}>
              {venueMedia.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.mediaItem}
                  activeOpacity={0.8}
                  onPress={() => setViewMedia({ visible: true, mediaUrl: item.mediaUrl, type: item.type })}
                >
                  {item.type === 'PHOTO' ? (
                    <Image
                      source={{ uri: item.mediaUrl }}
                      style={styles.mediaImage}
                      resizeMode="cover"
                    />
                  ) : (
                    <View style={styles.mediaVideoPlaceholder}>
                      <Text style={styles.mediaVideoLabel}>Video</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}

          <Text style={styles.sectionTitle}>Perks</Text>
          {perksLoading ? (
            <ActivityIndicator size="small" color="#2563eb" style={styles.perksLoader} />
          ) : perks.length === 0 ? (
            <Text style={styles.noPerks}>No perks listed yet.</Text>
          ) : (
            perks.map((perk) => (
              <View key={perk.id} style={styles.perkCard}>
                <Image
                  source={{ uri: perk.imageUrl || PERK_COVER_PLACEHOLDER }}
                  style={styles.perkCoverImage}
                  resizeMode="cover"
                />
                <View style={styles.perkCardBody}>
                  <Text style={styles.perkTitle}>{perk.title}</Text>
                  {perk.description ? (
                    <Text style={styles.perkDesc}>{perk.description}</Text>
                  ) : null}
                  <View style={styles.perkRow}>
                  <Text style={styles.perkPoints}>{perk.pointsRequired} pts</Text>
                  <TouchableOpacity
                    style={styles.redeemBtn}
                    onPress={() => handleRedeem(perk)}
                    disabled={redeemingId === perk.id}
                  >
                    {redeemingId === perk.id ? (
                      <ActivityIndicator size="small" color="#fff" />
                    ) : (
                      <Text style={styles.redeemBtnText}>Redeem</Text>
                    )}
                  </TouchableOpacity>
                </View>
                </View>
              </View>
            ))
          )}

          <TouchableOpacity
            style={styles.cta}
            onPress={handleSubmitPhotoVideo}
            activeOpacity={0.8}
          >
            <Text style={styles.ctaText}>Submit photo / video</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={viewMedia.visible}
        transparent
        animationType="fade"
        onRequestClose={() => setViewMedia({ visible: false, mediaUrl: null, type: null })}
      >
        <View style={styles.mediaModalOverlay}>
          <TouchableOpacity
            style={styles.mediaModalClose}
            onPress={() => setViewMedia({ visible: false, mediaUrl: null, type: null })}
          >
            <Text style={styles.mediaModalCloseText}>Close</Text>
          </TouchableOpacity>
          {viewMedia.mediaUrl && (viewMedia.type || '').toUpperCase() === 'PHOTO' ? (
            <Image
              source={{ uri: viewMedia.mediaUrl }}
              style={styles.mediaModalImage}
              resizeMode="contain"
            />
          ) : viewMedia.mediaUrl ? (
            <VideoView
              player={mediaViewerPlayer}
              style={styles.mediaModalVideo}
              allowsFullscreen
              nativeControls
              contentFit="contain"
            />
          ) : null}
        </View>
      </Modal>
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
    paddingBottom: 32,
  },
  imageWrap: {
    width: '100%',
    height: 220,
    backgroundColor: '#e2e8f0',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  body: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    marginBottom: 6,
  },
  category: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 12,
  },
  address: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  pointsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  pointsLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  pointsValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginTop: 24,
    marginBottom: 12,
  },
  perksLoader: {
    marginVertical: 12,
  },
  noPerks: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 8,
  },
  perkCoverImage: {
    width: '100%',
    height: 100,
    backgroundColor: '#f1f5f9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  perkCardBody: { padding: 12 },
  perkCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#e2e8f0',
  },
  mediaLoader: {
    marginTop: 8,
    marginBottom: 16,
  },
  noMedia: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 16,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  mediaItem: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#e2e8f0',
  },
  mediaImage: {
    width: '100%',
    height: '100%',
  },
  mediaVideoPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#020617',
  },
  mediaVideoLabel: {
    color: '#f9fafb',
    fontSize: 13,
    fontWeight: '600',
  },
  mediaModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
  },
  mediaModalClose: {
    position: 'absolute',
    top: 48,
    right: 16,
    zIndex: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
  },
  mediaModalCloseText: { fontSize: 16, fontWeight: '600', color: '#fff' },
  mediaModalImage: { flex: 1, width: '100%' },
  mediaModalVideo: { flex: 1, width: '100%', alignSelf: 'stretch' },
  perkTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  perkDesc: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 6,
  },
  perkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  perkPoints: {
    fontSize: 13,
    color: '#2563eb',
    fontWeight: '600',
  },
  redeemBtn: {
    backgroundColor: '#0f766e',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  redeemBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  cta: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 28,
  },
  ctaText: {
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e2e8f0',
    borderRadius: 8,
  },
  backBtnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
  },
});
