import { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useVideoPlayer, VideoView } from 'expo-video';

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleDateString(undefined, { dateStyle: 'medium' });
  } catch {
    return iso;
  }
}

function statusStyle(s) {
  const status = (s || '').toLowerCase();
  if (status === 'approved') return styles.badgeApproved;
  if (status === 'rejected') return styles.badgeRejected;
  return styles.badgePending;
}

export function MySubmissionsByVenueScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const venue = params?.venue ?? {};
  const submissions = useMemo(
    () => (Array.isArray(params?.submissions) ? params.submissions : []),
    [params?.submissions]
  );
  const [viewMedia, setViewMedia] = useState({ visible: false, mediaUrl: null, type: null });

  const videoSource = viewMedia.mediaUrl && (viewMedia.type || '').toUpperCase() !== 'PHOTO' ? viewMedia.mediaUrl : null;
  const player = useVideoPlayer(videoSource, (p) => { if (p) p.pause(); });

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtnWrap} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{venue.name || 'Venue'}</Text>
      </View>
      <FlatList
        data={submissions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => {
          const isPhoto = (item.type || '').toUpperCase() === 'PHOTO';
          const status = (item.status || 'PENDING').toUpperCase();
          const statusLabel = status === 'APPROVED' ? 'Approved' : status === 'REJECTED' ? 'Rejected' : 'Pending';
          return (
            <View style={styles.card}>
              <View style={styles.row}>
                {isPhoto ? (
                  <Image
                    source={{ uri: item.mediaUrl }}
                    style={styles.thumb}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={[styles.thumb, styles.videoPlaceholder]}>
                    <Text style={styles.videoLabel}>Video</Text>
                  </View>
                )}
                <View style={styles.cardBody}>
                  <Text style={styles.typeText}>{isPhoto ? 'Photo' : 'Video'}</Text>
                  <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
                  <Text style={[styles.badge, statusStyle(item.status)]}>{statusLabel}</Text>
                  {item.pointsAwarded != null && (
                    <Text style={styles.pointsText}>+{item.pointsAwarded} pts</Text>
                  )}
                  {item.rejectionReason ? (
                    <Text style={styles.reasonText} numberOfLines={2}>{item.rejectionReason}</Text>
                  ) : null}
                  <TouchableOpacity
                    style={styles.viewBtn}
                    onPress={() => setViewMedia({ visible: true, mediaUrl: item.mediaUrl, type: item.type })}
                  >
                    <Text style={styles.viewBtnText}>View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyText}>No submissions for this venue.</Text>
          </View>
        }
      />

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
              player={player}
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
  backBtnWrap: { paddingVertical: 6, paddingRight: 12 },
  backBtnText: { fontSize: 16, color: '#2563eb', fontWeight: '500' },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '600', color: '#111' },
  listContent: { padding: 16, paddingBottom: 24 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  row: { flexDirection: 'row' },
  thumb: { width: 64, height: 64, borderRadius: 8, backgroundColor: '#f1f5f9' },
  videoPlaceholder: { justifyContent: 'center', alignItems: 'center' },
  videoLabel: { fontSize: 12, color: '#94a3b8' },
  cardBody: { flex: 1, marginLeft: 12 },
  typeText: { fontSize: 15, fontWeight: '600', color: '#111', marginBottom: 2 },
  dateText: { fontSize: 12, color: '#94a3b8', marginBottom: 6 },
  badge: {
    fontSize: 12,
    fontWeight: '600',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  badgePending: { backgroundColor: '#fef3c7', color: '#b45309' },
  badgeApproved: { backgroundColor: '#d1fae5', color: '#047857' },
  badgeRejected: { backgroundColor: '#fee2e2', color: '#b91c1c' },
  pointsText: { fontSize: 13, color: '#2563eb', fontWeight: '600', marginTop: 4 },
  reasonText: { fontSize: 12, color: '#b91c1c', marginTop: 4, fontStyle: 'italic' },
  viewBtn: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#2563eb',
  },
  viewBtnText: { fontSize: 14, fontWeight: '600', color: '#fff' },
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
  mediaModalVideoBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  mediaModalVideoText: { fontSize: 18, color: '#fff', marginBottom: 16 },
  mediaModalOpenBtn: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: '#2563eb',
    borderRadius: 8,
  },
  mediaModalOpenBtnText: { fontSize: 16, fontWeight: '600', color: '#fff' },
  emptyWrap: { paddingVertical: 32 },
  emptyText: { fontSize: 16, color: '#64748b' },
});
