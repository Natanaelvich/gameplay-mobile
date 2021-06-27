import React from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import { useAuth } from '@/hooks/useAuth';
import { theme } from '@/styles/theme';
import IllustrationImg from '../../assets/illustration.png';
import * as S from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert('Houve um problema', error.message);
    }
  }

  return (
    <Background>
      <S.Container>
        <S.Image source={IllustrationImg} resizeMode="stretch" />

        <S.Content>
          <S.Title>
            Conecte-se {'\n'}e organize suas {'\n'}
            jogatinas
          </S.Title>

          <S.Subtitle>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </S.Subtitle>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </S.Content>
      </S.Container>
    </Background>
  );
}
