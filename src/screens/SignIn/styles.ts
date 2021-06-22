import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View``;

export const Illustration = styled.Image``;

export const Content = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary700};
  font-size: ${({ theme }) => theme.sizes.heading}px;
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  margin-top: -50px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary400};
  font-size: ${({ theme }) => theme.sizes.text}px;
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  margin-top: 16px;
`;

export const Footer = styled.View`
  margin-top: 48px;
  width: 100%;
  padding: 0 50px;
`;
