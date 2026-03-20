"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24746"], {
83557: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_elevator_set_floor_access_mdx_ac5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-elevator-set-floor-access-mdx-ac5.json
var site_docs_platform_biostar_air_elevator_set_floor_access_mdx_ac5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/elevator-set-floor-access","title":"층별 출입 권한 설정","description":"엘리베이터를 등록하고, 사용자와 그룹별로 접근 가능한 층을 설정하세요. 층 레벨을 정의하고 스케줄과 휴일 정책을 적용하여 층별 출입을 제어합니다.","source":"@site/docs/platform/biostar_air/elevator-set-floor-access.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/elevator-set-floor-access","permalink":"/docs/platform/biostar_air/elevator-set-floor-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/elevator-set-floor-access.mdx","tags":[],"version":"current","frontMatter":{"id":"elevator-set-floor-access","title":"층별 출입 권한 설정","description":"엘리베이터를 등록하고, 사용자와 그룹별로 접근 가능한 층을 설정하세요. 층 레벨을 정의하고 스케줄과 휴일 정책을 적용하여 층별 출입을 제어합니다.","keywords":["층별 출입 권한","엘리베이터","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"엘리베이터 관리하기","permalink":"/docs/platform/biostar_air/elevator-add-edit-delete"},"next":{"title":"출입 권한","permalink":"/docs/platform/biostar_air/manage-access-authority"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/elevator-set-floor-access.mdx


const frontMatter = {
	id: 'elevator-set-floor-access',
	title: '층별 출입 권한 설정',
	description: '엘리베이터를 등록하고, 사용자와 그룹별로 접근 가능한 층을 설정하세요. 층 레벨을 정의하고 스케줄과 휴일 정책을 적용하여 층별 출입을 제어합니다.',
	keywords: [
		'층별 출입 권한',
		'엘리베이터',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터를 등록하고, 층 레벨을 정의하여 사용자와 그룹이 접근할 수 있는 층을 제한합니다. 각 층 레벨별로 출입 스케줄(예: 업무 시간 내)과 휴일 정책을 설정하여 보안과 접근성을 함께 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_submenu",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_title_add_button",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add-floor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_floor_levels_add_floors_title",
            product: "air"
          }), " 패널이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_list_column_name",
            product: "air"
          }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_floor_levels_description_column",
            product: "air"
          }), "(선택 사항)을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 보안팀, 청소 인력"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add-floor-config.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_floor_levels_add_floors",
            product: "air"
          }), " 섹션에서 층 레벨을 적용할 층을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_label",
            product: "air"
          }), " 섹션에서 출입 스케줄을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 청소 인력의 경우 업무 시간 외에만 출입을 허용하세요."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["필요하다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_label_holiday_grp",
            product: "air"
          }), "을 추가해 특정 일자의 출입을 제한하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["층 레벨을 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["층 레벨 추가 및 수정, 삭제에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/manage-floor-level"
        }), "를 참고하세요."]
      })
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