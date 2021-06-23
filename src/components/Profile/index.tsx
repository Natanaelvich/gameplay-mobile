import React from 'react';
import { View } from 'react-native';

import { Avatar } from '../Avatar';

import { Container, User, Greeting, Username, Message } from './styles';

export function Profile() {
  return (
    <Container>
      <Avatar urlImage="https://github.com/Natanaelvich.png" />
      <View>
        <User>
          <Greeting>Olá,</Greeting>

          <Username>Natanaelvich</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
}
