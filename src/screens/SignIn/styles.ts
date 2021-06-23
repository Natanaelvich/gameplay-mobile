import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary100};
`;

export const Header = styled.View``;

export const Illustration = styled.Image``;

export const Content = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  margin-top: -50px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  margin-top: 16px;
`;

export const Footer = styled.View`
  margin-top: 48px;
  width: 100%;
  padding: 0 50px;
`;
