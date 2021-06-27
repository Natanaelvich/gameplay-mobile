import { FlatList } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Header = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + RFValue(26)}px;
  margin-bottom: ${RFValue(42)}px;
`;

export const Matches = styled(FlatList)`
  margin-top: ${RFValue(24)}px;
  margin-left: ${RFValue(24)}px;
`;
