import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.line};
`;

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
  text-align: center;
`;
