import React from 'react';
import { View } from 'react-native';

import { Avatar } from '../Avatar';

import { Container, User, Greeting, Username, Message } from './styles';

export function Profile() {
  return (
    <Container>
      <Avatar urlImage="https://github.com/cybercris.png" />
      <View>
        <User>
          <Greeting>Olá,</Greeting>

          <Username>Cristiano</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
}
