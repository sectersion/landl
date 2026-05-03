import { DiscordLogo } from "@/components/Icons";

export const siteConfig = {
  name: 'Create: Lift & Logic',
  tagline: 'A Technical Minecraft Server',
  description: 'An industrial-grade technical Minecraft server featuring advanced automation, aerospace, and infrastructure.',
} as const;

export const downloadLinks = {
  curseforge: process.env.NEXT_PUBLIC_CURSEFORGE_URL || 'https://www.curseforge.com/minecraft/modpacks/create-lift-logic',
  modrinth: process.env.NEXT_PUBLIC_MODRINTH_URL || 'https://modrinth.com/modpack/create-lift-logic',
} as const;

export const discordLink = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/createliftlogic';

export const coreTech = {
  automation: {
    title: 'Automation',
    items: [
      'Applied Energistics 2',
      'Mekanism',
    ],
    description: 'Advanced item storage, processing, and automation systems.',
    icon: '⚙️',
  },
  aerospace: {
    title: 'Aerospace',
    items: [
      'Create Aeronautics',
      'Northstar',
    ],
    description: 'Cutting-edge flight and rocket technologies.',
    icon: '🚀',
  },
  infrastructure: {
    title: 'Infrastructure',
    items: [
      'Dedicated Linux Environment',
    ],
    description: 'High-performance hosting with 99.9% uptime guarantee.',
    icon: '🌐',
  },
} as const;

export const joinSteps = [
  'Download the modpack profile from CurseForge or Modrinth.',
  'Join our Discord community server.',
  'Post your IGN (In-Game Name) in the #whitelist channel to get access.',
] as const;
