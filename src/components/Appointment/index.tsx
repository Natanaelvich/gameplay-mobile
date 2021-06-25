import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '@/styles/theme';
import { GuildIcon } from '../GuildIcon';

import {
  Container,
  Content,
  Header,
  Title,
  Category,
  PlayersInfo,
  Player,
  Footer,
  DateInfo,
  Date,
  LinearGradientCustom,
} from './styles';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { categories } from '../../utils/categories';

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <Container>
        <LinearGradientCustom colors={[secondary50, secondary70]}>
          <GuildIcon />
        </LinearGradientCustom>

        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <Category>{category.title}</Category>
          </Header>

          <Footer>
            <DateInfo>
              <CalendarSvg />

              <Date>{data.date}</Date>
            </DateInfo>

            <PlayersInfo>
              <PlayerSvg fill={owner ? primary : on} />

              <Player style={{ color: owner ? primary : on }}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Player>
            </PlayersInfo>
          </Footer>
        </Content>
      </Container>
    </RectButton>
  );
}
