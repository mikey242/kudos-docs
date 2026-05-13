import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Kudos Donations',
  tagline: 'Easy donations and payments for WordPress',
  favicon: 'img/favicon.ico',

  url: 'https://docs.kudosdonations.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  future: {
    faster: true,
    v4: true,
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-M2KWTHG3',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Kudos Donations',
      logo: {
        alt: 'Kudos Donations Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Forums',
              href: 'https://wordpress.org/support/plugin/kudos-donations/',
            },
            {
              label: 'Plugin Page',
              href: 'https://wordpress.org/plugins/kudos-donations/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mikey242/kudos-donations',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kudos Donations`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php'],
    },
    algolia: {
      appId: 'CHWV6ABBQ7',
      apiKey: '623ff72cb18118b6e98f61ebba8f68d2',
      indexName: 'kudosdonations',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
