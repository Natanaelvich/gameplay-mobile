import React from 'react';

import illustration from '@/assets/illustration.png';

import SocialButton from '@/components/SocialButton';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

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
        <SocialButton
          title="Entrar com Discord"
          type="discord"
          onPress={handleSignIn}
        />
      </Footer>
    </Container>
  );
};

export default SignIn;
