import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 24px;
`;
export const Guilds = styled(FlatList)`
  width: 100%;
`;
