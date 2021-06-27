import React, { useCallback, useEffect, useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';
import { Platform, Alert, Share } from 'react-native';

import { AppointmentProps } from '@/components/Appointment';
import { api } from '@/services/api';
import { Load } from '@/components/Load';
import { useTheme } from 'styled-components';
import BannerImg from '../../assets/banner.png';

import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Member, MemberProps } from '../../components/Member';
import { Header } from '../../components/Header';

import * as S from './styles';

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  const theme = useTheme();

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const fetchGuildWidget = useCallback(async () => {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`,
      );
      setWidget(response.data);
    } catch (error) {
      Alert.alert(
        'Verifique as configurações do servidor. Será que o Widget está habilitado?',
      );
    } finally {
      setLoading(false);
    }
  }, [guildSelected]);

  function handleShareInvitation() {
    const message =
      Platform.OS === 'ios'
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, [fetchGuildWidget]);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected?.guild?.owner && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      <S.Banner source={BannerImg}>
        <S.BannerContent>
          <S.Title> {guildSelected?.guild?.name}</S.Title>

          <S.Subtitle>{guildSelected?.description}</S.Subtitle>
        </S.BannerContent>
      </S.Banner>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${
              widget?.members?.length ? widget?.members?.length : 0
            }`}
          />

          <S.Members
            data={widget?.members || []}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            ListEmptyComponent={() => (
              <S.EmptyContainer>
                <S.EmptyText>Não há ninguém online agora.</S.EmptyText>
              </S.EmptyContainer>
            )}
          />
        </>
      )}
      {guildSelected?.guild?.owner && (
        <S.Footer>
          <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild} />
        </S.Footer>
      )}
    </Background>
  );
}
