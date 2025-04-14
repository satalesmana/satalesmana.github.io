// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const randomNumber = Math.floor(Math.random() * 10);
const tagline=[
  'Never stop learning, because when you stop learning, you stop growing. - Albert Einstein',
  'Education is the key to unlock the golden door to a world full of knowledge. - Washington Carver',
  'Learning is a lifelong process. It is never too late to pursue knowledge and deeper understanding. - Oliver Wendell Holmes',
  'Education is the most powerful weapon you can use to change the world. - Nelson Mandela',
  'Life is a process of learning, and everything that happens is a lesson to be understood and benefited from. - Elisabeth Kubler-Ross',
  'Education is not preparation for life; education is life itself. - John Dewey',
  'Knowledge is power, and learning is the means to attain it. - Jim Rohn',
  'Wisdom comes from learning from experience. The more you learn, the wiser you become. - Byron Pulsifer',
  'Learning is the best investment you can make in your future. - Benjamin Franklin',
  'Learning is a never-ending journey towards deeper knowledge. - Peter Drucker',
]
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = "satalesmana";
const projectName = "satalesmana.github.io";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lesmana iD',
  tagline: tagline[randomNumber],
  url: `https://${organizationName}.github.io`,
  //baseUrl: `/${projectName}/`,
  baseUrl: `/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  deploymentBranch: 'main',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
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
        title: 'Lesmana iD',
        logo: {
          alt: 'Lesmana',
          src: 'img/logo.png',
        },
        items: [
          {to: '/docs/intro', label: 'Leason', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/satalesmana',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Leason',
            items: [
              {
                label: 'Leason',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
