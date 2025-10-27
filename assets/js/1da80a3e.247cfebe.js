"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["959"], {
26469: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_tna_rule_setting_mdx_1da_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-tna-rule-setting-mdx-1da.json
var site_docs_platform_biostar_x_tna_rule_setting_mdx_1da_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-setting","title":"근무 규칙 설정하기","description":"근무 스케줄을 시간, 일, 주간 단위로 설정하여 근태 관리 규칙을 구성하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/tna-rule-setting.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-setting","permalink":"/docs/platform/biostar_x/tna-rule-setting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-setting.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-setting","title":"근무 규칙 설정하기","description":"근무 스케줄을 시간, 일, 주간 단위로 설정하여 근태 관리 규칙을 구성하는 방법을 안내합니다.","keywords":["근무 규칙","근태 관리"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"근태 관리 사용하기","permalink":"/docs/platform/biostar_x/tna"},"next":{"title":"시간 규칙 설정하기","permalink":"/docs/platform/biostar_x/tna-rule-shift-paycode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/tna-rule-setting.mdx


const frontMatter = {
	id: 'tna-rule-setting',
	title: '근무 규칙 설정하기',
	description: '근무 스케줄을 시간, 일, 주간 단위로 설정하여 근태 관리 규칙을 구성하는 방법을 안내합니다.',
	keywords: [
		'근무 규칙',
		'근태 관리'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "<Cmd class=\"bold\"></Cmd> 설정",
  "id": "-설정",
  "level": 2
}, {
  "value": "<Cmd class=\"bold\"></Cmd> 설정",
  "id": "-설정-1",
  "level": 2
}, {
  "value": "<Cmd class=\"bold\"></Cmd> 설정",
  "id": "-설정-2",
  "level": 2
}, {
  "value": "<Cmd class=\"bold\"></Cmd> 설정",
  "id": "-설정-3",
  "level": 2
}, {
  "value": "근무 스케줄 설정",
  "id": "근무-스케줄-설정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "근무 스케줄을 시간, 일, 주간 단위로 설정하여 근태 관리 규칙을 구성하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "근무 규칙을 처음 등록하다면 아래 순서에 따라 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsxs)(_components.h2, {
          id: "-설정",
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
            product: "2",
            className: "bold"
          }), " 설정"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 기록 관리, 초과 근무, 부재에 대한 시간 규칙을 설정할 수 있습니다. 시간당 가중치를 설정할 수 있으며, 한 눈에 알아보기 쉽도록 색상을 지정하여 표시할 수 있습니다."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsxs)(_components.h2, {
          id: "-설정-1",
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "bold"
          }), " 설정"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "하루(24시간) 단위의 근무 규칙을 설정할 수 있습니다. 근무 규칙은 시간에 따른 시간 규칙 설정, 하루 시작 시간 설정, 시간 반올림 규칙 등을 포함합니다."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsxs)(_components.h2, {
          id: "-설정-2",
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "bold"
          }), " 설정"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "설정된 하루 단위의 근무 규칙으로 주간 근무 규칙을 설정할 수 있습니다. 주별, 일별 주간 근무 규칙을 설정할 수 있습니다."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsxs)(_components.h2, {
          id: "-설정-3",
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "bold"
          }), " 설정"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["일일 근무 규칙에 초과 근무 시간 규칙을 추가하지 않았을 때 유용하게 사용할 수 있습니다. 일일 근무 규칙에서 설정하는 초과 근무는 시작 시간과 종료 시간을 갖고 있으나 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), "은 정규 근무 시간 범위를 넘어선 총 시간을 계산합니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), "은 일별/주별/월별 총 초과 근무 시간으로 관리할 때 편리하게 사용할 수 있으며 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), "을 설정하면 근무 규칙에 추가된 초과 근무 시간 규칙 대신 적용됩니다."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "근무-스케줄-설정",
          children: "근무 스케줄 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "이전 단계에서 설정한 근무 스케줄을 적용할 기간, 사용자. 기타 근무 규칙, 휴가 일정을 설정할 수 있습니다."
        })]
      })]
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