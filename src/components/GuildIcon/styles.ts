import { theme } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 66,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 62,
    height: 66,
  },
});
