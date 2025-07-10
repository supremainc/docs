// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import ConfigLocalized from './docusaurus.config.localized.json';
const {rehypeExtendedTable} = require("rehype-extended-table");

const isDev = process.env.NODE_ENV === 'development';
const locale = process.env.DOCUSAURUS_CURRENT_LOCALE; // 현재 로케일

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const defaultLocale = 'ko';

function getLocalizedConfigValue(key) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`,
    );
  }
  return value;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: getLocalizedConfigValue('title'),
  tagline: getLocalizedConfigValue('tagline'),
  favicon: 'https://kb.supremainc.com/knowledge/lib/exe/fetch.php?media=wiki:favicon.ico',
  // Set the production url of your site here
  url: 'https://supremainc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',
  noIndex: false,
  future: {
    v4: true,
    experimental_faster: true
  },
  organizationName: 'Suprema.inc', // Usually your GitHub org/user name.
  projectName: 'suprema.docs', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    }
  },
  themes: [
    '@saucelabs/theme-github-codeblock',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/supremainc/docs/tree/main/',
          routeBasePath: '/',
          exclude: [
            'common/**.{md,mdx}',
            '_unused/**.{md,mdx}',
            '**/_*.{md,mdx}'
          ],
          rehypePlugins: [ rehypeExtendedTable ],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'always',
          priority: 0.5,
          ignorePatterns: ['/tags/**']
        },
        svgr: {
          svgrConfig: {
            /* SVGR config */
          },
        },
      }),
    ]
  ],
  plugins: [
    [ 'docusaurus-plugin-sass', {} ],
    [ 'docusaurus-plugin-image-zoom', {}]
  ],
  markdown: {
    parseFrontMatter: async (params) => {
      // Reuse the default parser
      const result = await params.defaultParseFrontMatter(params);
      const isPartial = params.filePath.includes("/_") || params.filePath.includes("\\_");
      if (isPartial) {
        return result;
      }
      // TODO fix weird undefined case!
      const isDefaultLocale =
        process.env.DOCUSAURUS_CURRENT_LOCALE === "undefined" ||
        typeof process.env.DOCUSAURUS_CURRENT_LOCALE === "undefined" ||
        process.env.DOCUSAURUS_CURRENT_LOCALE === "ko";
      const isI18n = params.filePath.includes("/i18n/") || params.filePath.includes("\\i18n\\");
      if (isDefaultLocale) {
        result.frontMatter.isTranslationMissing = false;
      } else {
        result.frontMatter.isTranslationMissing = !isI18n;
      }
      return result;
    }
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/sns_img02.jpg',
      announcementBar: {
        id: 'annoucementbar',
        content: getLocalizedConfigValue('announcementBar'),
        backgroundColor: '#FFB27D',
        textColor: '#091E42',
        isCloseable: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Suprema Docs',
          src: 'img/suprema-logo.svg',
          srcDark: 'img/suprema-logo-white.svg',
          width: '120px',
        },
        items: [
          {
            type: 'doc',
            label: 'BioStar X',
            position: 'right',
            docId: 'platform/biostar_x/index'
          },
          {
            type: 'dropdown',
            label: 'Devices',
            position: 'right',
            items: [
              {
                type: 'doc',
                label: 'BioStation 3',
                docId: 'device/biostation_3/index'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Integrations',
            position: 'right',
            items: [
              {
                type: 'doc',
                label: 'Paxton',
                docId: 'integration/paxton_2.0/introduction'
              }
            ]
          },
          {
            type: 'doc',
            label: 'Reference',
            position: 'right',
            docId: 'reference/index'
          },
          {
            type: 'doc',
            label: 'Legal',
            position: 'right',
            docId: 'legal/disclaimers'
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Suprema Security & biometrics',
          src: 'img/suprema-logo-bottom.svg',
          width: '173px',
        },
        links: [
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          }
        ],
        copyright: getLocalizedConfigValue('copyright'),
      },
      prism: {
        additionalLanguages: [ 'ini', 'sql' ]
      },
      zoom: {
        selector: '.markdown :not(em, div) > img:not(.ico)',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      },
      algolia: {
        appId: '11LXF9EJH7',
        apiKey: '4882650c3591013a4db2f9211c31c4f4',
        indexName: 'supremaincio',
        contextualSearch: true,
        searchParameters: {
          attributesToHighlight: [],
          attributesToSnippet: [
            'content:20', 'hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'hierarchy.lvl4', 'sidelvl2', 'sidelvl3', 'sidelvl4'
          ],
          snippetEllipsisText: '…'
        },
        searchPagePath: 'search',
      }
    }),
};

export default config;
