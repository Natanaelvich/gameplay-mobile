import { FlatList } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234;
`;
export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0 24px;
  margin-bottom: 30;
`;
export const Title = styled.Text`
  font-size: 28;
  font-family: ${props => props.theme.fonts.title700};
  color: ${props => props.theme.colors.heading};
`;
export const Subtitle = styled.Text`
  font-size: 13;
  font-family: ${props => props.theme.fonts.text400};
  color: ${props => props.theme.colors.heading};
  line-height: 21;
`;
export const Members = styled(FlatList)`
  margin-left: 24;
  margin-top: 27;
`;
export const Footer = styled.View`
  padding: 0 24px;
  padding: 20px 0;
  margin-bottom: ${getBottomSpace()}px;
`;
export const EmptyContainer = styled.View`
  align-items: center;
`;
export const EmptyText = styled.Text`
  font-family: ${props => props.theme.fonts.text500};
  color: ${props => props.theme.colors.heading};
`;
