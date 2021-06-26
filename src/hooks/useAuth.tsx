/* eslint-disable import/no-unresolved */
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_USERS } from '@/configs/database';
import { api } from '../services/api';

const { DISCORD_REDIRECT_URI } = process.env;
const { DISCORD_SCOPE } = process.env;
const { DISCORD_RESPONSE_TYPE } = process.env;
const { DISCORD_CLIENT_ID } = process.env;
const { DISCORD_CDN_IMAGE } = process.env;

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
  singOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
    error?: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${DISCORD_REDIRECT_URI}&response_type=${DISCORD_RESPONSE_TYPE}&scope=${DISCORD_SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');

        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${DISCORD_CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token,
        };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }
    } catch {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  async function singOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USERS);
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        singOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
