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
const __DOCUSAURUS_MERMAID_LAYOUT_ELK_ENABLED__ = false;

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
  favicon: 'https://supremainc.com/ko/asset/images/common/Website_favicon.png',
  // Set the production url of your site here
  url: 'https://supremainc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',
  noIndex: false,
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
    },
    experimental_faster: true
  },
  organizationName: 'Suprema.inc', // Usually your GitHub org/user name.
  projectName: 'suprema.docs', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'log',
  onDuplicateRoutes: 'warn',
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
      ja: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
      },
    }
  },
  headTags: [
    // <meta name="algolia-site-verification"  content="07FFA029DF50324E" />
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
            '**/_*.{md,mdx}'
          ],
          rehypePlugins: [ rehypeExtendedTable ],
        },
        pages: {
          exclude: [
            '_backup/**.{js,jsx,ts,tsx,md,mdx}',
            'cover/**.{js,jsx,ts,tsx,md,mdx}',
            'back/**.{js,jsx,ts,tsx,md,mdx}',
          ]
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'always',
          priority: 0.5,
          ignorePatterns: [
            '/tags/**',
            'back/**',
            'cover/**',
            'products/**'
          ]
        },
        svgr: {
          svgrConfig: {
            /* SVGR config */
            role: 'img',
            titleProp: true,
          },
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [{
          spec: './openapi/bsxapi-with-samples.yaml',
          // route: '/api/bsxapi',
          id: 'bsxapi',
        }],
        theme: {
          primaryColor: '#3578e5',
        },
      }
    ],
  ],
  plugins: [
    // Redocusaurus Prism 주입 문제 해결 플러그인
    [ './src/plugins/fix-prism', {} ],
    // MSAL 인증 플러그인은 프로덕션 환경에서만 활성화
    ...(!isDev ? [['./src/plugins/msal-auth', {}]] : []),
    [ 'docusaurus-plugin-sass', {} ],
    [ 'docusaurus-plugin-image-zoom', {}],
  ],
  markdown: {
    mermaid: true,
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
    hooks: {
      onBrokenMarkdownLinks: 'warn'
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
          // {
          //   type: 'doc',
          //   label: 'BioStar X',
          //   position: 'right',
          //   docId: 'platform/biostar_x/index'
          // },
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
                label: 'BioStation 3',
                docId: 'device/biostation_3/index'
              },
              {
                type: 'doc',
                label: 'FaceStation F2',
                docId: 'device/facestation_f2/index'
              },
              {
                type: 'doc',
                label: 'FaceStation 2',
                docId: 'device/facestation_2/index'
              },
              {
                type: 'doc',
                label: 'BioLite N2',
                docId: 'device/biolite_n2/index'
              },
              {
                type: 'doc',
                label: 'BioEntry W2',
                docId: 'device/bioentry_w2/index'
              },
              {
                type: 'doc',
                label: 'BioEntry P2',
                docId: 'device/bioentry_p2/index'
              },
              {
                type: 'doc',
                label: 'BioEntry R2',
                docId: 'device/bioentry_r2/index'
              },
              {
                type: 'doc',
                label: 'X-Station 2',
                docId: 'device/xstation_2/index'
              },
              {
                type: 'doc',
                label: 'XPass Q2',
                docId: 'device/xpass_q2/index'
              },
              {
                type: 'doc',
                label: 'XPass 2',
                docId: 'device/xpass_2/index'
              },
              {
                type: 'doc',
                label: 'XPass D2',
                docId: 'device/xpass_d2/index'
              },
              {
                type: 'doc',
                label: 'XPass S2',
                docId: 'device/xpass_s2/index'
              },
              {
                type: 'doc',
                label: 'CoreStation 20',
                docId: 'device/corestation_20/index'
              },
              {
                type: 'doc',
                label: 'CoreStation',
                docId: 'device/corestation_40/index'
              },
              {
                type: 'doc',
                label: 'Enclosure',
                docId: 'device/enclosure/index'
              },
              {
                type: 'doc',
                label: 'Door Interface',
                docId: 'device/doorinterface/index'
              },
              {
                type: 'doc',
                label: 'Input Module',
                docId: 'device/inputmodule/index'
              },
              {
                type: 'doc',
                label: 'Output Module',
                docId: 'device/outputmodule/index'
              },
              {
                type: 'doc',
                label: 'Door Module',
                docId: 'device/doormodule/index'
              },
              {
                type: 'doc',
                label: 'Secure Module',
                docId: 'device/securemodule/index'
              },
              {
                type: 'doc',
                label: 'Extended Module',
                docId: 'device/extendedmodule/index'
              },
              {
                type: 'doc',
                label: 'Extended Module-SC',
                docId: 'device/extendedmodule_sc/index'
              },
              {
                type: 'doc',
                label: 'Device Manager',
                docId: 'device/device_manager/index'
              },
              {
                type: 'doc',
                label: 'CoreStation Setup Manager',
                docId: 'device/corestation_setup_manager/index'
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
            label: 'API',
            position: 'right',
            to: '/api/bsxapi'
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
        additionalLanguages: [ 'powershell', 'bash' ],
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
      },
      zoom: {
        selector: '.markdown :not(em, div) > img:not(.ico):not(.useMap)',
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
            'content:35', 'hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'hierarchy.lvl4', 'sidelvl2', 'sidelvl3', 'sidelvl4'
          ],
          snippetEllipsisText: '…'
        },
        searchPagePath: 'search'
      }
    })
};

export default config;
