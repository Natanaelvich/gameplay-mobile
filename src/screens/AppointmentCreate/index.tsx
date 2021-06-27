import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { View, Platform, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { COLLECTION_APPOINTMENTS } from '@/configs/database';
import { useTheme } from 'styled-components';
import * as S from './styles';

import { CategorySelect } from '../../components/CategorySelect';
import { ModalView } from '../../components/ModalView';
import { Background } from '../../components/Background';
import { SmallInput } from '../../components/SmallInput';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from '../../components/TextArea';
import { GuildProps } from '../../components/Guild';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';

export function AppointmentCreate() {
  const navigation = useNavigation();

  const theme = useTheme();

  const [category, setCategory] = useState('');
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment]),
    );

    navigation.navigate('Home');
  }

  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />

          <S.Label marginBottom margin>
            Categoria
          </S.Label>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <S.Form>
            <RectButton onPress={handleOpenGuilds}>
              <S.Select>
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <S.Image />
                )}

                <S.SelectBody>
                  <S.Label>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </S.Label>
                </S.SelectBody>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </S.Select>
            </RectButton>

            <S.Field>
              <View>
                <S.Label marginBottom>Dia e mês</S.Label>

                <S.Column>
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <S.Divider>/</S.Divider>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </S.Column>
              </View>

              <View>
                <S.Label marginBottom>Hora e minuto</S.Label>

                <S.Column>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <S.Divider>:</S.Divider>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
                </S.Column>
              </View>
            </S.Field>

            <S.Field>
              <S.Label marginBottom>Descrição</S.Label>

              <S.CaracteresLimit>Max 100 caracteres</S.CaracteresLimit>
            </S.Field>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <S.Footer>
              <Button title="Agendar" onPress={handleSave} />
            </S.Footer>
          </S.Form>
        </ScrollView>
      </Background>

      <ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </S.Container>
  );
}
