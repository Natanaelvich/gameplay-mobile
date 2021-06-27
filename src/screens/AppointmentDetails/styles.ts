import { FlatList } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;
export const Banner = styled.ImageBackground`
  width: 100%;
  height: ${RFValue(234)}px;
`;
export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0 ${RFValue(24)}px;
  margin-bottom: ${RFValue(30)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${props => props.theme.fonts.title700};
  color: ${props => props.theme.colors.heading};
`;
export const Subtitle = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${props => props.theme.fonts.text400};
  color: ${props => props.theme.colors.heading};
  line-height: ${RFValue(21)}px;
`;
export const Members = styled(FlatList)`
  margin-left: ${RFValue(24)}px;
  margin-top: ${RFValue(27)}px;
`;
export const Footer = styled.View`
  padding: ${RFValue(20)}px ${RFValue(24)}px;
  margin-bottom: ${RFValue(getBottomSpace())}px;
`;
export const EmptyContainer = styled.View`
  align-items: center;
`;
export const EmptyText = styled.Text`
  font-family: ${props => props.theme.fonts.text500};
  color: ${props => props.theme.colors.heading};
`;
