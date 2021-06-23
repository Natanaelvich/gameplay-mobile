import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;

  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.line};
`;

export const Icon = styled.Image``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.title500};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.heading};
`;
