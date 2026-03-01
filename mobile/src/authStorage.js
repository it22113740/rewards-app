import * as SecureStore from 'expo-secure-store';

const KEY_TOKEN = 'authToken';
const KEY_USER = 'authUser';

export async function saveAuth(token, user) {
  try {
    if (token) await SecureStore.setItemAsync(KEY_TOKEN, token);
    if (user) await SecureStore.setItemAsync(KEY_USER, JSON.stringify(user));
  } catch (e) {
    // SecureStore not available (e.g. web) or write failed
  }
}

export async function getAuth() {
  try {
    const token = await SecureStore.getItemAsync(KEY_TOKEN);
    const userJson = await SecureStore.getItemAsync(KEY_USER);
    const user = userJson ? JSON.parse(userJson) : null;
    return { token, user };
  } catch (e) {
    return { token: null, user: null };
  }
}

export async function clearAuth() {
  try {
    await SecureStore.deleteItemAsync(KEY_TOKEN);
    await SecureStore.deleteItemAsync(KEY_USER);
  } catch (e) {}
}
