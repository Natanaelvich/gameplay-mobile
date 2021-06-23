import React from 'react';

import { GuildImg } from './styles';

export function GuildIcon() {
  return (
    <GuildImg
      source={{
        uri: 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-icone.png',
      }}
      resizeMode="cover"
    />
  );
}
