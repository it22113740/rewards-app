import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const DEFAULT_LAT = 12.9716;
const DEFAULT_LNG = 77.5946;
const DEFAULT_DELTA = 0.05;

function parseNum(s, fallback) {
  const n = parseFloat(String(s).trim());
  return Number.isFinite(n) ? n : fallback;
}

export function MapPicker({ latitude, longitude, onSelect, style, height = 220 }) {
  const initialLat = useMemo(() => {
    const n = parseNum(latitude, DEFAULT_LAT);
    return n >= -90 && n <= 90 ? n : DEFAULT_LAT;
  }, [latitude]);
  const initialLng = useMemo(() => {
    const n = parseNum(longitude, DEFAULT_LNG);
    return n >= -180 && n <= 180 ? n : DEFAULT_LNG;
  }, [longitude]);

  const [region, setRegion] = useState({
    latitude: initialLat,
    longitude: initialLng,
    latitudeDelta: DEFAULT_DELTA,
    longitudeDelta: DEFAULT_DELTA,
  });
  const [markerCoord, setMarkerCoord] = useState({
    latitude: initialLat,
    longitude: initialLng,
  });

  const onMapPress = useCallback(
    (e) => {
      const { latitude: lat, longitude: lng } = e.nativeEvent.coordinate;
      setMarkerCoord({ latitude: lat, longitude: lng });
      onSelect?.({ latitude: lat, longitude: lng });
    },
    [onSelect]
  );

  const onMarkerDragEnd = useCallback(
    (e) => {
      const { latitude: lat, longitude: lng } = e.nativeEvent.coordinate;
      setMarkerCoord({ latitude: lat, longitude: lng });
      onSelect?.({ latitude: lat, longitude: lng });
    },
    [onSelect]
  );

  const hasValidCoords =
    Number.isFinite(parseNum(latitude, NaN)) && Number.isFinite(parseNum(longitude, NaN));

  return (
    <View style={[styles.wrap, style, { height }]}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
        onPress={onMapPress}
        mapType="standard"
        showsUserLocation={false}
      >
        <Marker
          coordinate={markerCoord}
          draggable
          onDragEnd={onMarkerDragEnd}
          title="Venue location"
        />
      </MapView>
      <View style={styles.hint}>
        <Text style={styles.hintText}>
          Tap the map or drag the pin to set the venue location
        </Text>
        {hasValidCoords && (
          <Text style={styles.coordsText} numberOfLines={1}>
            {parseNum(latitude).toFixed(6)}, {parseNum(longitude).toFixed(6)}
          </Text>
        )}
      </View>
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
  hint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  hintText: {
    fontSize: 11,
    color: '#fff',
  },
  coordsText: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 2,
  },
});
