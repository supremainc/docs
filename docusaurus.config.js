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
  url: 'https://docs.supremainc.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
    },
    experimental_faster: true
  },
  organizationName: 'Suprema.inc', // Usually your GitHub org/user name.
  projectName: 'suprema.docs', // Usually your repo name.
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
  headTags: [
    // <meta name="algolia-site-verification"  content="07FFA029DF50324E" />
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '07FFA029DF50324E',
      }
    }
  ],
  themes: [
    '@saucelabs/theme-github-codeblock',
    '@docusaurus/theme-mermaid'
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
            'device/xstation_2/**.{md,mdx}',
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
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
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
    // MSAL 인증 플러그인은 프로덕션 환경에서만 활성화
    ...(!isDev ? [['./src/plugins/msal-auth', {}]] : []),
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
    },
    mermaid: true
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/sns_img02.jpg',
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
          src: 'https://supremainc.github.io/docs/img/suprema-logo.svg',
          srcDark: 'https://supremainc.github.io/docs/img/suprema-logo-white.svg',
          width: '120px',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Platforms',
            position: 'right',
            items: [
              {
                type: 'doc',
                label: 'BioStar X',
                docId: 'platform/biostar_x/index'
              },
              {
                type: 'doc',
                label: 'BioStar Air',
                docId: 'platform/biostar_air/index'
              }
            ]
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
              },
              {
                type: 'doc',
                label: 'BioEntry W3',
                docId: 'device/bioentry_w3/index'
              },
              {
                type: 'doc',
                label: 'BioStation 2a',
                docId: 'device/biostation_2a/index'
              },
              {
                type: 'doc',
                label: 'FaceStation F2',
                docId: 'device/facestation_f2/index'
              },
              {
                type: 'doc',
                label: 'BioLite N2',
                docId: 'device/biolite_n2/index'
              },
              // {
              //   type: 'doc',
              //   label: 'X-Station 2',
              //   docId: 'device/xstation_2/index'
              // },
              {
                type: 'doc',
                label: 'CoreStation',
                docId: 'device/corestation_40/index'
              },
              {
                type: 'doc',
                label: 'CoreStation 20',
                docId: 'device/corestation_20/index'
              },
              {
                type: 'doc',
                label: 'Door Interface',
                docId: 'device/doorinterface/index'
              }
            ]
          },
          {
            type: 'doc',
            label: 'How-to Articles',
            position: 'right',
            docId: 'how-to/index'
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
          src: 'https://supremainc.github.io/docs/img/suprema-logo-bottom.svg',
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
        additionalLanguages: [ 'ini', 'sql', 'excel-formula', 'python', 'csharp', 'c', 'http', 'java' ]
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
        appId: 'G6Y3H2PNC3',
        apiKey: '92bd6ee7b06d5a3ec46d8056d39e710a',
        indexName: 'SPDocs',
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
