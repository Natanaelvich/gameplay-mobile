import { KeyboardAvoidingView } from 'react-native';
import styled, { css } from 'styled-components/native';

type LabelProps = {
  margin?: boolean;
};

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
`;
export const Label = styled.Text<LabelProps>`
  font-size: 18px;
  font-family: ${props => props.theme.fonts.title700};
  color: ${props => props.theme.colors.heading};

  ${({ margin }) =>
    margin &&
    css`
      margin-left: 24px;
      margin-top: 36px;
      margin-bottom: 18px;
    `}
`;
export const Form = styled.View`
  padding: 0 24px;
  margin-top: 32px;
`;
export const Select = styled.View`
  flex-direction: row;
  width: 100%;
  height: 68px;
  border-color: ${props => props.theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  padding-right: 25px;
  overflow: hidden;
`;
export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;
export const Image = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${props => props.theme.colors.secondary40};
  border-color: ${props => props.theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
`;
export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;
export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  font-family: ${props => props.theme.fonts.text500};
  color: ${props => props.theme.colors.highlight};
`;
export const CaracteresLimit = styled.Text`
  font-family: ${props => props.theme.fonts.text400};
  font-size: 13px;
  color: ${props => props.theme.colors.highlight};
`;
export const Footer = styled.View`
  margin: 20px 0;
  margin-bottom: 56px;
`;
