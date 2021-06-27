import { Load } from '@/components/Load';
import { api } from '@/services/api';
import React, { useEffect, useState } from 'react';
import { GuildProps } from '../../components/Guild';

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import * as S from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <S.Container>
      {loading ? (
        <Load />
      ) : (
        <S.Guilds
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelect(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          ListHeaderComponent={() => <ListDivider isCentered />}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        />
      )}
    </S.Container>
  );
}
