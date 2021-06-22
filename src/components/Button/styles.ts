import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;

  padding: 16px;
  border-radius: ${({ theme }) => theme.border.radius}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary500};
  font-size: ${({ theme }) => theme.sizes.text}px;
  color: ${({ theme }) => theme.colors.heading};
`;
