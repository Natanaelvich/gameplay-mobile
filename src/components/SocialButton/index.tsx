import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { getSocialIcon } from '@/utils/getSocialIcon';

import { Container, IconWrapper, Icon, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
  type: 'discord';
};

const SocialButton = ({ title, type, ...rest }: Props): JSX.Element => {
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={getSocialIcon(type)} />
      </IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
};

export default SocialButton;
