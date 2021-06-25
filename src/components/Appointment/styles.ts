import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 13px;
  margin-left: 7px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 18px;
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 13px;
  margin-right: 24px;
`;

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Player = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  font-size: 13px;
  margin-left: 7px;
  margin-right: 24px;
`;

export const LinearGradientCustom = styled(LinearGradient)`
  height: 68px;
  width: 64px;
  border-radius: 8px;
  margin-right: 20px;
`;
