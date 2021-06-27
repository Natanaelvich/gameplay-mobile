import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(360)}px;
`;
export const Content = styled.View`
  margin-top: -${RFValue(40)}px;
  padding: 0 ${RFValue(50)}px;
`;
export const Title = styled.Text`
  color: ${props => props.theme.colors.heading};
  text-align: center;
  font-size: ${RFValue(40)}px;
  margin-bottom: ${RFValue(16)}px;
  font-family: ${props => props.theme.fonts.title700};
  line-height: ${RFValue(40)}px;
`;
export const Subtitle = styled.Text`
  color: ${props => props.theme.colors.heading};
  font-size: ${RFValue(15)}px;
  text-align: center;
  margin-bottom: ${RFValue(64)}px;
  font-family: ${props => props.theme.fonts.title500};
  line-height: ${RFValue(25)}px;
`;
