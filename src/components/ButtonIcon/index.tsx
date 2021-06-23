import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';
import { Container, IconWrapper, Icon, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>

      <Title>{title}</Title>
    </Container>
  );
}
