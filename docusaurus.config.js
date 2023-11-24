const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mdxMermaid = require('mdx-mermaid');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Web3 Foundation Grants',
  tagline: 'Funding Software Development and Research Efforts related to Polkadot and Kusama.',
  url: 'https://grants.web3.foundation',
  baseUrl: '/',
  onBrokenLinks: 'warn',    // Revert back to 'throw' once initial release is up
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
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
        'Check out our newly created <a target="_blank" rel="noopener noreferrer" href="https://futures.web3.foundation/">Decentralized Futures Program</a>!',
      backgroundColor: '#000',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'Grants Program',
      logo: {
        alt: 'W3F Grants Program',
        src: 'img/w3f_logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'docs/introduction',
          position: 'right',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'applications/index',
          position: 'right',
          label: 'List of Grants',
        },
        {
          type: 'doc',
          docId: 'docs/faq',
          position: 'right',
          label: 'FAQ',
        },
        {
          type: 'doc',
          docId: 'docs/Process/how-to-apply',
          position: 'right',
          label: 'Apply',
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
              to: 'docs/Support%20Docs/privacy_policy',
            },
            {
              label: 'Legal Disclosures',
              to: 'https://web3.foundation/legal-disclosures/',
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
          path: '.',
          routeBasePath: '/', 
          editUrl: 'https://github.com/w3f/Grants-Program/edit/master/',
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
            'applications/application-template.md',
            'applications/example-project.md',
            'applications/maintenance/maintenance-template.md',
            'applications/application-template-research.md',
            'docs/RFPs/suggestion-template.md',
            '.docusaurus/**',
            '.github/**',
            '.vscode/**',
            'build/**',
            'node_modules/**',
            'src/**',
            'static/**',
            'babel.config.js',
            '.gitignore',
            'LICENSE',
            'package-lock.json',
            'package.json',
            'sidebars.js',
            'README.md'
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
