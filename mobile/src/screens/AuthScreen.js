import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API_BASE_URL } from '../config';
import { saveAuth } from '../authStorage';

const MODE_LOGIN = 'login';
const MODE_REGISTER = 'register';

export function AuthScreen() {
  const { role } = useRoute().params || { role: 'user' };
  const navigation = useNavigation();
  const [mode, setMode] = useState(MODE_LOGIN);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Shared
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // User register
  const [username, setUsername] = useState('');
  // Owner register
  const [gmail, setGmail] = useState('');
  const [address, setAddress] = useState('');

  const isOwner = role === 'owner';
  const title = isOwner ? 'Owner' : 'User';

  const doLogin = useCallback(async () => {
    setError('');
    if (!email.trim() || !password) {
      setError('Email and password are required.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.message || 'Login failed.');
        return;
      }
      const token = data?.accessToken;
      if (token) {
        await saveAuth(token, data?.user);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main', params: { token, user: data?.user } }],
        });
      } else {
        setError('Invalid response from server.');
      }
    } catch (e) {
      setError(e?.message || 'Network error.');
    } finally {
      setLoading(false);
    }
  }, [email, password, navigation]);

  const doRegister = useCallback(async () => {
    setError('');
    if (isOwner) {
      if (!gmail.trim() || !address.trim() || !password) {
        setError('Email, address and password are required.');
        return;
      }
      if (password.length < 8) {
        setError('Password must be at least 8 characters.');
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/auth/register/owner`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            gmail: gmail.trim(),
            address: address.trim(),
            password,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setError(data?.message || 'Registration failed.');
          return;
        }
        const token = data?.accessToken;
        if (token) {
          await saveAuth(token, data?.user);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Main', params: { token, user: data?.user } }],
          });
        } else {
          setError('Invalid response from server.');
        }
      } catch (e) {
        setError(e?.message || 'Network error.');
      } finally {
        setLoading(false);
      }
    } else {
      if (!username.trim() || !email.trim() || !password) {
        setError('Username, email and password are required.');
        return;
      }
      if (password.length < 8) {
        setError('Password must be at least 8 characters.');
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/auth/register/user`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: username.trim(),
            email: email.trim(),
            password,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setError(data?.message || 'Registration failed.');
          return;
        }
        const token = data?.accessToken;
        if (token) {
          await saveAuth(token, data?.user);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Main', params: { token, user: data?.user } }],
          });
        } else {
          setError('Invalid response from server.');
        }
      } catch (e) {
        setError(e?.message || 'Network error.');
      } finally {
        setLoading(false);
      }
    }
  }, [
    isOwner,
    username,
    email,
    password,
    gmail,
    address,
    navigation,
  ]);

  const onSubmit = mode === MODE_LOGIN ? doLogin : doRegister;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={styles.keyboard}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>{title}</Text>

          <View style={styles.toggle}>
            <Pressable
              style={[styles.toggleBtn, mode === MODE_LOGIN && styles.toggleBtnActive]}
              onPress={() => { setMode(MODE_LOGIN); setError(''); }}
            >
              <Text style={[styles.toggleText, mode === MODE_LOGIN && styles.toggleTextActive]}>
                Log in
              </Text>
            </Pressable>
            <Pressable
              style={[styles.toggleBtn, mode === MODE_REGISTER && styles.toggleBtnActive]}
              onPress={() => { setMode(MODE_REGISTER); setError(''); }}
            >
              <Text style={[styles.toggleText, mode === MODE_REGISTER && styles.toggleTextActive]}>
                Sign up
              </Text>
            </Pressable>
          </View>

          {error ? <Text style={styles.error}>{error}</Text> : null}

          {mode === MODE_REGISTER && !isOwner && (
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
              editable={!loading}
            />
          )}
          {mode === MODE_REGISTER && isOwner && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Email (Gmail)"
                value={gmail}
                onChangeText={setGmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!loading}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
                editable={!loading}
              />
            </>
          )}
          {(!isOwner || mode === MODE_LOGIN) && (
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!loading}
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            editable={!loading}
          />

          <Pressable
            style={[styles.submit, loading && styles.submitDisabled]}
            onPress={onSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.submitText}>
                {mode === MODE_LOGIN ? 'Log in' : 'Sign up'}
              </Text>
            )}
          </Pressable>

          {mode === MODE_LOGIN ? (
            <Pressable
              style={styles.forgotLink}
              onPress={() => navigation.navigate('ForgotPassword', { role })}
              disabled={loading}
            >
              <Text style={styles.forgotLinkText}>Forgot password?</Text>
            </Pressable>
          ) : null}

          <Pressable
            style={styles.back}
            onPress={() => navigation.goBack()}
            disabled={loading}
          >
            <Text style={styles.backText}>← Back to role selection</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboard: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 80,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    marginBottom: 24,
  },
  toggle: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f1f5f9',
    borderRadius: 10,
    padding: 4,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  toggleBtnActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleText: {
    fontSize: 15,
    color: '#64748b',
    fontWeight: '500',
  },
  toggleTextActive: {
    color: '#111',
  },
  error: {
    color: '#dc2626',
    fontSize: 14,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  submit: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  submitDisabled: {
    opacity: 0.7,
  },
  submitText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  forgotLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  forgotLinkText: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '500',
  },
  back: {
    marginTop: 20,
    alignItems: 'center',
  },
  backText: {
    color: '#64748b',
    fontSize: 15,
  },
});
