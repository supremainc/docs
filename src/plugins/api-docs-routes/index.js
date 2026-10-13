// API 레퍼런스(/developer/{api})의 라우트를 만드는 플러그인.
// 엔드포인트마다 /developer/{api}/{slug} 라우트를 등록해, 빌드 시 각 엔드포인트의 HTML을 미리 렌더링한다.
// 크롤러가 JavaScript를 실행하지 않아도 파라미터, 스키마, 예시를 읽을 수 있게 하기 위함이다.
//
// /developer/{api}는 사이드바를 그리는 레이아웃 라우트이고, 각 엔드포인트는 그 하위 라우트다.
// 항목을 이동해도 레이아웃이 다시 마운트되지 않으므로 사이드바의 스크롤 위치와 필터 입력이 유지된다.

const fs = require('fs');
const path = require('path');
const { normalizeUrl } = require('@docusaurus/utils');
const { API_DOCS } = require('../../components/ApiDocs/apis');
const { buildSlugIndex } = require('../../components/ApiDocs/slug');

module.exports = function apiDocsRoutesPlugin(context) {
  const { siteDir, baseUrl } = context;

  return {
    name: 'api-docs-routes',

    async loadContent() {
      return API_DOCS.map(api => {
        const collectionPath = path.join(siteDir, api.collection);
        const collection = JSON.parse(fs.readFileSync(collectionPath, 'utf8'));
        const index = buildSlugIndex(collection);
        if (index.duplicates.length > 0) {
          throw new Error(
            `[api-docs-routes] ${api.id}: 같은 폴더 안에 이름이 같은 항목이 있습니다. Postman 컬렉션에서 이름을 바꾸세요.\n` +
            index.duplicates.map(s => `  - ${s}`).join('\n'),
          );
        }
        return { api, collectionPath, slugs: index.allSlugs() };
      });
    },

    async contentLoaded({ content, actions }) {
      for (const { api, collectionPath, slugs } of content) {
        const basePath = normalizeUrl([baseUrl, api.path]);
        actions.addRoute({
          path: basePath,
          exact: false,
          component: '@site/src/components/ApiDocs/ApiDocsLayout',
          modules: { collection: collectionPath },
          props: { api, basePath },
          routes: [
            { path: basePath, exact: true, component: '@site/src/components/ApiDocs/ApiDocsEntry', props: { slug: null } },
            ...slugs.map(slug => ({
              path: normalizeUrl([basePath, slug]),
              exact: true,
              component: '@site/src/components/ApiDocs/ApiDocsEntry',
              props: { slug },
            })),
          ],
        });
      }
    },

    getPathsToWatch() {
      return API_DOCS.map(api => path.join(siteDir, api.collection));
    },
  };
};
