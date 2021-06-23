import { theme } from '@/styles/theme';
import React, { ReactNode } from 'react';

import { Container } from './styles';

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return <Container colors={[secondary80, secondary100]}>{children}</Container>;
}
