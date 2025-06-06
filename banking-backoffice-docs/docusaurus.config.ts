import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Banking Back Office Documentation',
  tagline: 'Comprehensive guide for banking professionals',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-bank-docs.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-bank', // Usually your GitHub org/user name.
  projectName: 'banking-backoffice-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/your-bank/banking-backoffice-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'Banking Updates & News',
          blogDescription: 'Latest updates and announcements for the banking back office system',
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/your-bank/banking-backoffice-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banking-social-card.jpg',
    navbar: {
      title: 'Banking Back Office',
      logo: {
        alt: 'Banking Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          href: 'https://github.com/your-bank/banking-backoffice-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'User Management',
              to: '/docs/user-management',
            },
            {
              label: 'Account Operations',
              to: '/docs/account-operations',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Help Desk',
              href: 'https://your-bank.com/support',
            },
            {
              label: 'Training Portal',
              href: 'https://your-bank.com/training',
            },
            {
              label: 'Contact IT',
              href: 'mailto:it-support@your-bank.com',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Updates',
              to: '/blog',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/your-bank/banking-backoffice-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Bank, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
