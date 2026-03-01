import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const DEFAULT_LAT = 12.9716;
const DEFAULT_LNG = 77.5946;
const DELTA = 0.005;

function parseNum(s, fallback) {
  const n = parseFloat(String(s).trim());
  return Number.isFinite(n) ? n : fallback;
}

export function VenueMapView({ latitude, longitude, style, height = 200 }) {
  const lat = useMemo(() => {
    const n = parseNum(latitude, DEFAULT_LAT);
    return n >= -90 && n <= 90 ? n : DEFAULT_LAT;
  }, [latitude]);
  const lng = useMemo(() => {
    const n = parseNum(longitude, DEFAULT_LNG);
    return n >= -180 && n <= 180 ? n : DEFAULT_LNG;
  }, [longitude]);

  const region = useMemo(
    () => ({
      latitude: lat,
      longitude: lng,
      latitudeDelta: DELTA,
      longitudeDelta: DELTA,
    }),
    [lat, lng]
  );

  return (
    <View style={[styles.wrap, style, { height }]}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={region}
        mapType="standard"
        scrollEnabled
        zoomEnabled
        pitchEnabled={false}
      >
        <Marker coordinate={{ latitude: lat, longitude: lng }} title="Venue" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#e2e8f0',
  },
});
