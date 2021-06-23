import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { theme } from '@/styles/theme';

import { Container, Content, Checkbox, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors;

  // lembrar de consertar o checked type dps
  return (
    <RectButton {...rest}>
      <Container colors={[secondary50, secondary70]}>
        <Content checked={checked}>
          <Checkbox checked={checked} />

          <Icon width={48} height={48} />

          <Title>{title}</Title>
        </Content>
      </Container>
    </RectButton>
  );
}
