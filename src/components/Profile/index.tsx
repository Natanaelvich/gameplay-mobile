import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import { View } from 'react-native';

import { Avatar } from '../Avatar';

import { Container, User, Greeting, Username, Message } from './styles';

export function Profile() {
  const { user } = useAuth();

  return (
    <Container>
      <Avatar urlImage={user.avatar} />
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
