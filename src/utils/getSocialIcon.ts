import discord from '@/assets/discord.png';

export function getSocialIcon(type: string): any {
  switch (type) {
    case 'discord':
      return discord;

    default:
      return discord;
  }
}
