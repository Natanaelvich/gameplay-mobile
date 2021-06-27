import { FlatList } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  padding: 24px 0;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 42px;
`;

export const Matches = styled(FlatList)`
  margin-top: 24px;
  margin-left: 24px;
`;
