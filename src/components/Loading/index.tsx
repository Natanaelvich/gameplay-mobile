import { theme } from '@/styles/theme';
import React from 'react';

import { Container, Activity } from './styles';

type Props = {
  size: 'small' | 'large';
  color?: string;
};

const Loading = ({
  size,
  color = theme.colors.primary,
}: Props): JSX.Element => {
  return (
    <Container>
      <Activity size={size} color={color} />
    </Container>
  );
};

export default Loading;
