import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import { Alert, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Avatar } from '../Avatar';

import { Container, User, Greeting, Username, Message } from './styles';

export function Profile() {
  const { user, singOut } = useAuth();

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => singOut(),
      },
    ]);
  }

  return (
    <Container>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <User>
          <Greeting>Olá,</Greeting>

          <Username>{user.firstName}</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
}
