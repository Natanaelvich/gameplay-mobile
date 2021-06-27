import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${RFValue(24)}px;
`;
export const Guilds = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: RFValue(68),
  },
})`
  width: 100%;
`;
