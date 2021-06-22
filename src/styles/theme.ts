export const theme = {
  colors: {
    primary: '#E61C44',
    secondary: '#495BCC',
    line: '#991F36',
    green: '#32BD50',
    heading: '#DDE3F0',
    body: '#ABB1CC',
    shape: '#243189',
    background: '#0E1647',
  },

  sizes: {
    heading: 32,
    heading2: 20,
    textLg: 17,
    text: 15,
    textSm: 12,
  },

  fonts: {
    primary400: 'Inter_400Regular',
    primary500: 'Inter_500Medium',
    secondary400: 'Rajdhani_400Regular',
    secondary500: 'Rajdhani_500Medium',
    secondary700: 'Rajdhani_700Bold',
  },

  border: {
    radius: 8,
  },
};

export type ThemeType = typeof theme;
