import React from 'react';

import illustration from '@/assets/illustration.png';

import SocialButton from '@/components/SocialButton';

import {
  Container,
  Header,
  Illustration,
  Content,
  Title,
  SubTitle,
  Footer,
} from './styles';

const SignIn = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <Illustration source={illustration} />
      </Header>

      <Content>
        <Title>
          Conecte-se e{'\n'}organize suas{'\n'}jogatinas
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </SubTitle>
      </Content>

      <Footer>
        <SocialButton title="Entrar com Discord" type="discord" />
      </Footer>
    </Container>
  );
};

export default SignIn;
