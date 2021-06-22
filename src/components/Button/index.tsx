import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
};

const Button = ({ title }: Props): JSX.Element => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
