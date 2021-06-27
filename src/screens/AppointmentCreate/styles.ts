import { KeyboardAvoidingView } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type LabelProps = {
  margin?: boolean;
  marginBottom?: boolean;
};

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
`;
export const Label = styled.Text<LabelProps>`
  font-size: ${RFValue(18)}px;
  font-family: ${props => props.theme.fonts.title700};
  color: ${props => props.theme.colors.heading};

  ${({ margin }) =>
    margin &&
    css`
      margin-left: ${RFValue(24)}px;
      margin-top: ${RFValue(36)}px;
      margin-bottom: ${RFValue(18)}px;
    `}

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${RFValue(18)}px;
    `}
`;
export const Form = styled.View`
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFValue(32)}px;
`;
export const Select = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(68)}px;
  border-color: ${props => props.theme.colors.secondary50};
  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(8)}px;
  align-items: center;
  padding-right: ${RFValue(25)}px;
  overflow: hidden;
`;
export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;
export const Image = styled.View`
  width: ${RFValue(64)}px;
  height: ${RFValue(68)}px;
  background-color: ${props => props.theme.colors.secondary40};
  border-color: ${props => props.theme.colors.secondary50};
  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(8)}px;
`;
export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(30)}px;
`;
export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Divider = styled.Text`
  margin-right: ${RFValue(4)}px;
  font-size: ${RFValue(15)}px;
  font-family: ${props => props.theme.fonts.text500};
  color: ${props => props.theme.colors.highlight};
`;
export const CaracteresLimit = styled.Text`
  font-family: ${props => props.theme.fonts.text400};
  font-size: ${RFValue(13)}px;
  color: ${props => props.theme.colors.highlight};
`;
export const Footer = styled.View`
  margin: ${RFValue(20)}px 0;
  margin-bottom: ${RFValue(56)}px;
`;
