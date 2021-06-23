import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '@/styles/theme';
import { Container } from './styles';

export function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </Container>
  );
}
