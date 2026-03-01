import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Directory, File, Paths } from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { API_BASE_URL } from '../config';

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleDateString(undefined, { dateStyle: 'medium' });
  } catch {
    return iso;
  }
}

export function SubmissionsReviewScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const token = params?.token;
  const venueId = params?.venueId || params?.venue?.id;
  const venueName = params?.venue?.name || 'Venue';
  const [list, setList] = useState([]);
  const [approvedList, setApprovedList] = useState([]);
  const [loading, setLoading] = useState(!!token && !!venueId);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [actionId, setActionId] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);
  const [rejectModal, setRejectModal] = useState({ visible: false, id: null, reason: '' });
  const [viewMedia, setViewMedia] = useState({ visible: false, mediaUrl: null, type: null });

  const videoSource = viewMedia.mediaUrl && (viewMedia.type || '').toUpperCase() !== 'PHOTO' ? viewMedia.mediaUrl : null;
  const player = useVideoPlayer(videoSource, (p) => { if (p) p.pause(); });

  const fetchSubmissions = useCallback(async () => {
    if (!token || !venueId) {
      setLoading(false);
      return;
    }
    try {
      const [pendingRes, approvedRes] = await Promise.all([
        fetch(`${API_BASE_URL}/submissions/venue/${venueId}?status=PENDING`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/submissions/venue/${venueId}?status=APPROVED`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      if (!pendingRes.ok) throw new Error('Failed to load submissions');
      if (!approvedRes.ok) throw new Error('Failed to load approved submissions');
      const pendingData = await pendingRes.json();
      const approvedData = await approvedRes.json();
      setList(Array.isArray(pendingData) ? pendingData : []);
      setApprovedList(Array.isArray(approvedData) ? approvedData : []);
      setError(null);
    } catch (e) {
      setError(e?.message || 'Something went wrong');
      setList([]);
      setApprovedList([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [token, venueId]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchSubmissions();
  }, [fetchSubmissions]);

  const handleApprove = async (submission) => {
    if (!token || actionId) return;
    setActionId(submission.id);
    try {
      const res = await fetch(
        `${API_BASE_URL}/submissions/${submission.id}/review`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: 'APPROVED' }),
        }
      );
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d?.message || 'Approve failed');
      }
      setList((prev) => prev.filter((s) => s.id !== submission.id));
      fetchSubmissions();
    } catch (e) {
      Alert.alert('Error', e?.message || 'Could not approve');
    } finally {
      setActionId(null);
    }
  };

  const handleDownload = async (submission) => {
    if (!submission?.mediaUrl || downloadingId) return;
    setDownloadingId(submission.id);
    try {
      const isPhoto = (submission.type || '').toUpperCase() === 'PHOTO';
      const destDir = new Directory(Paths.cache, 'submissions');
      try {
        destDir.create();
      } catch (_) {
        // directory may already exist
      }
      const output = await File.downloadFileAsync(submission.mediaUrl, destDir);
      let localUri = output.uri;
      if (localUri && !localUri.startsWith('file://')) {
        localUri = 'file://' + localUri;
      }
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        try {
          await MediaLibrary.saveToLibraryAsync(localUri);
          Alert.alert('Saved', 'Saved to your gallery.');
          return;
        } catch (saveErr) {
          // Expo Go on Android may not support full media library access; fall back to share
        }
      }
      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(localUri, {
          mimeType: isPhoto ? 'image/jpeg' : 'video/mp4',
          dialogTitle: 'Save submission',
        });
      } else {
        Alert.alert('Saved', 'File saved. In Expo Go, gallery save is limited; use a development build for full gallery access.');
      }
    } catch (e) {
      Alert.alert('Download failed', e?.message || 'Could not save.');
    } finally {
      setDownloadingId(null);
    }
  };

  const openRejectModal = (submission) => {
    setRejectModal({ visible: true, id: submission.id, reason: '' });
  };

  const submitReject = async () => {
    const { id, reason } = rejectModal;
    if (!token || !id) return;
    const trimmed = (reason || '').trim();
    if (!trimmed) {
      Alert.alert('Required', 'Please enter a rejection reason.');
      return;
    }
    setActionId(id);
    try {
      const res = await fetch(
        `${API_BASE_URL}/submissions/${id}/review`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: 'REJECTED', rejectionReason: trimmed }),
        }
      );
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d?.message || 'Reject failed');
      }
      setList((prev) => prev.filter((s) => s.id !== id));
      setRejectModal({ visible: false, id: null, reason: '' });
    } catch (e) {
      Alert.alert('Error', e?.message || 'Could not reject');
    } finally {
      setActionId(null);
    }
  };

  if (!token || !venueId) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backBtnText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Submissions</Text>
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
        <Text style={styles.headerTitle} numberOfLines={1}>Submissions - {venueName}</Text>
      </View>
      {loading && list.length === 0 && approvedList.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#059669" />
        </View>
      ) : error && list.length === 0 && approvedList.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryBtn} onPress={() => { setLoading(true); fetchSubmissions(); }}>
            <Text style={styles.retryBtnText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {list.length > 0 ? (
            <>
              <Text style={styles.sectionTitle}>Pending</Text>
              {list.map((item) => {
                const isPhoto = (item.type || '').toUpperCase() === 'PHOTO';
                const isBusy = actionId === item.id;
                return (
                  <View key={item.id} style={styles.card}>
                    <View style={styles.mediaRow}>
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
                      <View style={styles.cardMeta}>
                        <Text style={styles.userText}>
                          {item.user?.username || item.user?.email || 'User'}
                        </Text>
                        <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
                        <Text style={styles.typeText}>{isPhoto ? 'Photo' : 'Video'}</Text>
                      </View>
                    </View>
                    <View style={styles.actions}>
                      <TouchableOpacity
                        style={styles.viewBtn}
                        onPress={() => setViewMedia({ visible: true, mediaUrl: item.mediaUrl, type: item.type })}
                      >
                        <Text style={styles.viewBtnText}>View</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.approveBtn, isBusy && styles.btnDisabled]}
                        onPress={() => handleApprove(item)}
                        disabled={!!actionId}
                      >
                        {isBusy ? (
                          <ActivityIndicator size="small" color="#fff" />
                        ) : (
                          <Text style={styles.approveBtnText}>Approve</Text>
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.rejectBtn, isBusy && styles.btnDisabled]}
                        onPress={() => openRejectModal(item)}
                        disabled={!!actionId}
                      >
                        <Text style={styles.rejectBtnText}>Reject</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </>
          ) : null}
          {approvedList.length > 0 ? (
            <>
              <Text style={[styles.sectionTitle, list.length > 0 && styles.sectionTitleSpaced]}>Approved</Text>
              {approvedList.map((item) => {
                const isPhoto = (item.type || '').toUpperCase() === 'PHOTO';
                const isDownloading = downloadingId === item.id;
                return (
                  <View key={item.id} style={styles.card}>
                    <View style={styles.mediaRow}>
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
                      <View style={styles.cardMeta}>
                        <Text style={styles.userText}>
                          {item.user?.username || item.user?.email || 'User'}
                        </Text>
                        <Text style={styles.dateText}>{formatDate(item.createdAt)}</Text>
                        <Text style={styles.typeText}>{isPhoto ? 'Photo' : 'Video'}</Text>
                        {item.pointsAwarded != null ? (
                          <Text style={styles.pointsText}>+{item.pointsAwarded} pts</Text>
                        ) : null}
                      </View>
                    </View>
                    <View style={styles.actions}>
                      <TouchableOpacity
                        style={styles.viewBtn}
                        onPress={() => setViewMedia({ visible: true, mediaUrl: item.mediaUrl, type: item.type })}
                      >
                        <Text style={styles.viewBtnText}>View</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.downloadBtn, isDownloading && styles.btnDisabled]}
                        onPress={() => handleDownload(item)}
                        disabled={!!downloadingId}
                      >
                        {isDownloading ? (
                          <ActivityIndicator size="small" color="#fff" />
                        ) : (
                          <Text style={styles.downloadBtnText}>Download</Text>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </>
          ) : null}
          {list.length === 0 && approvedList.length === 0 ? (
            <View style={styles.emptyWrap}>
              <Text style={styles.emptyText}>No pending submissions.</Text>
            </View>
          ) : null}
        </ScrollView>
      )}

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

      <Modal
        visible={rejectModal.visible}
        transparent
        animationType="fade"
        onRequestClose={() => setRejectModal((m) => ({ ...m, visible: false }))}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Rejection reason</Text>
            <TextInput
              style={styles.modalInput}
              value={rejectModal.reason}
              onChangeText={(text) => setRejectModal((m) => ({ ...m, reason: text }))}
              placeholder="Required - e.g. Image not relevant"
              multiline
              numberOfLines={3}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.modalCancel}
                onPress={() => setRejectModal({ visible: false, id: null, reason: '' })}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalSubmit}
                onPress={submitReject}
                disabled={actionId !== null}
              >
                {actionId ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.modalSubmitText}>Reject</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
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
  backBtn: { paddingVertical: 6, paddingRight: 12 },
  backBtnText: { fontSize: 16, color: '#059669', fontWeight: '500' },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: '600', color: '#111' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  errorText: { fontSize: 16, color: '#64748b', marginBottom: 16 },
  retryBtn: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#059669', borderRadius: 8 },
  retryBtnText: { fontSize: 15, fontWeight: '600', color: '#fff' },
  scroll: { flex: 1 },
  listContent: { padding: 16, paddingBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111', marginBottom: 12 },
  sectionTitleSpaced: { marginTop: 24 },
  pointsText: { fontSize: 12, color: '#059669', fontWeight: '600', marginTop: 4 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  mediaRow: { flexDirection: 'row', marginBottom: 12 },
  thumb: { width: 72, height: 72, borderRadius: 8, backgroundColor: '#f1f5f9' },
  videoPlaceholder: { justifyContent: 'center', alignItems: 'center' },
  videoLabel: { fontSize: 12, color: '#94a3b8' },
  cardMeta: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  userText: { fontSize: 16, fontWeight: '600', color: '#111' },
  dateText: { fontSize: 12, color: '#64748b', marginTop: 4 },
  typeText: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  actions: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  viewBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563eb',
  },
  viewBtnText: { fontSize: 14, fontWeight: '600', color: '#fff' },
  downloadBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f766e',
  },
  downloadBtnText: { fontSize: 14, fontWeight: '600', color: '#fff' },
  approveBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#059669',
  },
  approveBtnText: { fontSize: 14, fontWeight: '600', color: '#fff' },
  rejectBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#dc2626',
  },
  rejectBtnText: { fontSize: 14, fontWeight: '600', color: '#fff' },
  btnDisabled: { opacity: 0.6 },
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 24,
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: '600', color: '#111', marginBottom: 12 },
  modalInput: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  modalActions: { flexDirection: 'row', gap: 12 },
  modalCancel: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
  modalCancelText: { fontSize: 15, fontWeight: '600', color: '#64748b' },
  modalSubmit: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#dc2626',
  },
  modalSubmitText: { fontSize: 15, fontWeight: '600', color: '#fff' },
});
