"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["782"], {
"9607": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_ui_common_mdx_f14_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-ui-common-mdx-f14.json
var site_docs_platform_biostar_x_ui_common_mdx_f14_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-common","title":"공통 사용자 인터페이스 이해하기","description":"BioStar X의 공통으로 사용되는 사용자 인터페이스(User Interface)를 안내합니다.","source":"@site/docs/platform/biostar_x/ui-common.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-common","permalink":"/docs/platform/biostar_x/ui-common","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-common.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-common","title":"공통 사용자 인터페이스 이해하기","description":"BioStar X의 공통으로 사용되는 사용자 인터페이스(User Interface)를 안내합니다.","keywords":["UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"UI 알아보기","permalink":"/docs/platform/biostar_x/ui-overview"},"next":{"title":"런처","permalink":"/docs/platform/biostar_x/ui-launcher"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/ui-common.mdx


const frontMatter = {
	id: 'ui-common',
	title: '공통 사용자 인터페이스 이해하기',
	description: 'BioStar X의 공통으로 사용되는 사용자 인터페이스(User Interface)를 안내합니다.',
	keywords: [
		'UI'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Calloutlists, Cmd, IcAccout, IcAibtn, IcHelp, IcSvTime, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAccout) _missingMdxReference("IcAccout", true);
  if (!IcAibtn) _missingMdxReference("IcAibtn", true);
  if (!IcHelp) _missingMdxReference("IcHelp", true);
  if (!IcSvTime) _missingMdxReference("IcSvTime", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 사용자 인터페이스(User Interface, 이하 UI)는 사용자가 시스템을 쉽게 탐색하고 사용할 수 있도록 설계되었습니다. 이 문서에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 공통 UI 구성 요소를 안내합니다. 이 문서를 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 UI를 이해하고, 시스템을 보다 효율적으로 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면의 헤더 영역은 모든 페이지에서 공통으로 사용되며, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 다양한 기능에 접근할 수 있는 링크 버튼을 제공합니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-header.png"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X 로고"
            }), ": 사용자가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.launcher"
            }), " 페이지로 돌아갈 수 있는 링크 버튼입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "바로가기"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에서 제공하는 주요 페이지로 이동할 수 있는 링크를 제공합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.action"
            }), ": 서버 사용자가 설정한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "액션"
            }), "(Action) 기능을 실행할 수 있습니다. 버튼을 클릭하면 액션 목록이 나타납니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcSvTime, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "서버 시간"
            }), ": 운영 중인 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 서버의 서버 시간을 확인할 수 있습니다. 마우스를 버튼 위로 오버하면 현재 서버 시간이 표시됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAccout, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 계정"
            }), ": 현재 로그인한 사용자의 계정 정보를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcHelp, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "도움말"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 도움말 페이지로 이동할 수 있는 링크 버튼입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAibtn, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI 프롬프트"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 AI 프롬프트 기능을 사용할 수 있는 버튼입니다. 버튼을 클릭하면 AI 프롬프트 창이 나타납니다. 사용자의 질문에 답변하고 원하는 기능을 실행할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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