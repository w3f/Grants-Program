const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mdxMermaid = require('mdx-mermaid');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Web3 Foundation Grants',
  tagline: 'Funding software development and research efforts related to Polkadot, Kusama, Substrate and ink!.',
  url: 'https://w3f.github.io',
  baseUrl: '/Grants-Program/',
  onBrokenLinks: 'warn',    // Revert back to 'throw' once initial release is up
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Web3Foundation.png',
  organizationName: 'w3f', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'Grants-Program', // Usually your repo name.

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    announcementBar: {
      id: 'announcement',
      content:
        '<h4>Check out <a target="_blank" rel="noopener noreferrer" href="https://web3.bamboohr.com/jobs/">our current job openings</a>!</h4>',
      backgroundColor: '#E6007A',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'W3F Grants Program',
      logo: {
        alt: 'W3F Grants Program',
        src: 'img/Web3Foundation.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'Introduction/index',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'Applications/index',
          position: 'left',
          label: 'List of Grants',
        },
        {
          type: 'doc',
          docId: 'FAQ',
          label: 'FAQ',
        },
        {
          type: 'doc',
          docId: 'Process/index',
          position: 'right',
          label: 'Apply',
        },
        {
          type: 'doc',
          docId: 'Contribute',
          position: 'right',
          label: 'Contribute',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/w3f/Grants-Program',
            },
            {
              label: 'Website',
              href: 'https://web3.foundation/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Web3foundation',
            },
            {
              label: 'Grants Program Matrix channel',
              href: 'https://twitter.com/Web3foundation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Web3 Foundation. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', 
          // editUrl: 'https://github.com/w3f/grants/edit/master/',
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          beforeDefaultRehypePlugins: [
          ],
          beforeDefaultRemarkPlugins: [
          ],
          remarkPlugins: [
            mdxMermaid
          ],
          rehypePlugins: [
          ],
          exclude: [
            'Applications/application-template.md',
            'Applications/example-project.md',
            'rfps/suggestion-template.md'
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              symlinks: false,
            }
          };
        }
      };
    },
  ],
};
