import { theme } from '@/styles/theme';
import React from 'react';

import { View, ActivityIndicator } from 'react-native';

import { styles } from './styles';

export function Load() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
}
