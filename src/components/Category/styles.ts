import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ViewProps } from 'react-native';

// type Props = ViewProps & {
//   checked?: boolean;
// };

export const Container = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Content = styled.View`
  width: 100px;
  height: 116px;
  background-color: ${({ theme }) => theme.colors.secondary40};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  opacity: ${({ checked }) => (checked ? 1 : 0.4)};
`;

export const Checkbox = styled.View`
  width: ${({ checked }) => (checked ? 10 : 12)}px;
  height: ${({ checked }) => (checked ? 10 : 12)}px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary : theme.colors.secondary100};
  align-self: flex-end;
  margin-right: 7px;
  border-color: ${({ checked, theme }) =>
    checked ? '#fff' : theme.colors.secondary50};
  border-width: ${({ checked, theme }) => (checked ? 0 : 2)}px;
  border-radius: 3px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title500};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
`;
