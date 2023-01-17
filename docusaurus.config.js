const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mdxMermaid = require('mdx-mermaid');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Web3 Foundation Grants',
  tagline: 'Funding Software Development and Research Efforts related to Polkadot and Kusama.',
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
      respectPrefersColorScheme: false,
    },
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    },
    announcementBar: {
      id: 'announcement',
      content:
        'Check out <a target="_blank" rel="noopener noreferrer" href="https://web3.bamboohr.com/jobs/">our current job openings</a>!',
      backgroundColor: '#000',
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
          docId: 'introduction',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'applications/index',
          position: 'left',
          label: 'List of Grants',
        },
        {
          type: 'doc',
          docId: 'faq',
          label: 'FAQ',
        },
        {
          type: 'doc',
          docId: 'Process/how-to-apply',
          position: 'right',
          label: 'Apply',
        },
        {
          type: 'doc',
          docId: 'contribute',
          position: 'right',
          label: 'Contribute',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More Info',
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
              label: 'Privacy Policy',
              href: './Support%20Docs/privacy_policy',
            },
          ],
        }, 
        {
          title: 'Connect',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/Web3foundation',
            },
            {
              label: 'Grants Community Matrix Channel',
              href: 'https://matrix.to/#/!XpynPDLusWUWfDpaqr:matrix.org?via=web3.foundation&via=matrix.org&via=matrix.parity.io',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Web3 Foundation`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: '9VKKGZO0U1',
      apiKey: '89d564c771c26d6eb84fe9cf608c128d',
      indexName: 'grants-program',
      contextualSearch: true,
      externalUrlRegex: 'https://w3f.github.io',
      searchParameters: {},
      searchPagePath: 'search',
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
            'RFPs/suggestion-template.md'
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
