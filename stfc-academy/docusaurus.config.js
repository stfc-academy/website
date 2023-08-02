// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'stfc.academy',
  tagline: 'STFC Open Source Knowledge Base',
  favicon: 'img/icon.svg',

  url: 'https://stfc.academy/',
  baseUrl: '/',

  organizationName: 'stfc-academy',
  projectName: 'website',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/stfc-academy/website/tree/main/stfc-academy',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'stfc.academy',
        logo: {
          alt: 'stfc.academy',
          src: 'img/icon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: '/community', 
            label: 'Community', 
            position: 'left'
          },
          {
            to: 'https://discord.gg/e4GnPhtwQg',
            label: "Discord",
            position: "left"
          },
          {
            to: '/contribute', 
            label: 'Contribute', 
            position: 'right'
          },
          {
            to: '/Contributors',
            label: "Contributors",
            position: "right"
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/'
              },
              {
                label: 'Game Mechanics',
                to: '/game-mechanics',
              },
              {
                label: 'Guides',
                to: '/guides',
              },
              {
                label: 'Community',
                to: '/community',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Discord',
                to: 'https://discord.gg/e4GnPhtwQg',
              },
              {
                label: 'Contribute',
                to: '/contribute',
              },
              {
                label: 'Contributors',
                to: '/contributors',
              },
            ],
          },
        ],
        copyright: `stfc.academy - Built with Docusaurus`,
      },
      tableOfContents:{
        minHeadingLevel: 2,
        maxHeadingLevel: 5
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
