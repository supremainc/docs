"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39236"], {
25758: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_release_notes_bs_3_release_notes_mdx_18c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-release-notes-bs-3-release-notes-mdx-18c.json
var site_docs_platform_biostar_air_release_notes_bs_3_release_notes_mdx_18c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/release-notes/bs3-release-notes","title":"BioStation 3 Air 펌웨어","description":"펌웨어 버전 2.10.2 (빌드 번호 2.10.2_251024)","source":"@site/docs/platform/biostar_air/release-notes/bs3-release-notes.mdx","sourceDirName":"platform/biostar_air/release-notes","slug":"/platform/biostar_air/release-notes/bs3-release-notes","permalink":"/docs/platform/biostar_air/release-notes/bs3-release-notes","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/release-notes/bs3-release-notes.mdx","tags":[],"version":"current","frontMatter":{"id":"bs3-release-notes","title":"BioStation 3 Air 펌웨어","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"BioEntry W3 Air 펌웨어","permalink":"/docs/platform/biostar_air/release-notes/bew3-release-notes"},"next":{"title":"XPass 2 Air 펌웨어","permalink":"/docs/platform/biostar_air/release-notes/xp2-release-notes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/release-notes/bs3-release-notes.mdx


const frontMatter = {
	id: 'bs3-release-notes',
	title: 'BioStation 3 Air 펌웨어',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "펌웨어 버전 2.10.2 (빌드 번호 2.10.2_251024)",
  "id": "펌웨어-버전-2102-빌드-번호-2102_251024",
  "level": 2
}, {
  "value": "신규 기능 및 개선",
  "id": "신규-기능-및-개선",
  "level": 3
}, {
  "value": "버그 수정",
  "id": "버그-수정",
  "level": 3
}, {
  "value": "펌웨어 버전 2.10.0 (빌드 번호 2.10.0_250724)",
  "id": "펌웨어-버전-2100-빌드-번호-2100_250724",
  "level": 2
}, {
  "value": "Suprema 장치용 최초 펌웨어 생성",
  "id": "suprema-장치용-최초-펌웨어-생성",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Separator} = _components;
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "펌웨어-버전-2102-빌드-번호-2102_251024",
      children: "펌웨어 버전 2.10.2 (빌드 번호 2.10.2_251024)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리스", (0,jsx_runtime.jsx)(Separator, {}), "2025-10-31"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "암호화 방식이 개선으로 인해, 이전 버전으로 펌웨어를 다운그레이드할 경우 장치를 다시 등록해야 합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 자동 동기화 안정성 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 설정 데이터 암호화 강화"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Video Gateway 기능 추가"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "간헐적인 부팅 실패 문제 수정"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "T&A 필요"
          }), " 옵션이 활성화되어 있고 얼굴 인증이 비활성화된 경우 T&A 확인 화면이 자동으로 닫히지 않던 문제 수정"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("hr", {
      style: {
        margin: '4rem 0'
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "펌웨어-버전-2100-빌드-번호-2100_250724",
      children: "펌웨어 버전 2.10.0 (빌드 번호 2.10.0_250724)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리스", (0,jsx_runtime.jsx)(Separator, {}), "2025-07-24"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "suprema-장치용-최초-펌웨어-생성",
      children: "Suprema 장치용 최초 펌웨어 생성"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
84429: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),

}]);