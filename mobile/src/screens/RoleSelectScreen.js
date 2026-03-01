import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAuth } from '../authStorage';

const EDGES = ['top', 'bottom'];

export function RoleSelectScreen() {
  const navigation = useNavigation();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { token, user } = await getAuth();
      if (!mounted) return;
      setChecking(false);
      if (token) {
        navigation.replace('Main', { token, user });
      }
    })();
    return () => { mounted = false; };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={EDGES}>
      {checking ? (
        <ActivityIndicator size="large" color="#2563eb" />
      ) : (
        <>
          <Text style={styles.title}>Rewards</Text>
          <Text style={styles.subtitle}>Continue as</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Auth', { role: 'user' })}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Continue as User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonOwner]}
            onPress={() => navigation.navigate('Auth', { role: 'owner' })}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Continue as Owner</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonOwner: {
    backgroundColor: '#059669',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
