import { theme } from '@/styles/theme';
import React from 'react';

import { Container, AvatarImage } from './styles';

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <Container colors={[secondary50, secondary70]}>
      <AvatarImage source={{ uri: urlImage }} />
    </Container>
  );
}
