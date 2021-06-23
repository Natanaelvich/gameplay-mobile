import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary40};
  margin: 21px 0;
  align-self: flex-end;
`;
