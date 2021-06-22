import styled from 'styled-components/native';

type ActivityProps = {
  color: string;
};

export const Container = styled.View`
  flex: 1;
`;

export const Activity = styled.ActivityIndicator<ActivityProps>`
  color: ${({ theme, color }) => color || theme.colors.primary};
`;
