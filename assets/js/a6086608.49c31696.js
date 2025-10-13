"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8435"], {
60269: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_ui_launcher_mdx_a60_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-ui-launcher-mdx-a60.json
var site_docs_platform_biostar_x_ui_launcher_mdx_a60_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-launcher","title":"런처","description":"런처 페이지의 사용자 인터페이스(User Interface)를 안내합니다.","source":"@site/docs/platform/biostar_x/ui-launcher.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-launcher","permalink":"/docs/platform/biostar_x/ui-launcher","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-launcher.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-launcher","title":"런처","description":"런처 페이지의 사용자 인터페이스(User Interface)를 안내합니다.","keywords":["런처","UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"보조 데이터베이스 추가하기","permalink":"/docs/platform/biostar_x/add-sub-db"},"next":{"title":"사용자","permalink":"/docs/platform/biostar_x/how-to-guide-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/ui-launcher.mdx


const frontMatter = {
	id: 'ui-launcher',
	title: '런처',
	description: '런처 페이지의 사용자 인터페이스(User Interface)를 안내합니다.',
	keywords: [
		'런처',
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
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지는 로그인 후 처음 접할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 시작 페이지로, 사용자가 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 주요 기능에 접근할 수 있는 중심 허브 역할을 합니다. 이 페이지는 사용자가 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 모든 기능을 쉽게 탐색하고 사용할 수 있도록 설계되었습니다. 런처 페이지의 UI 구성 요소를 살펴보면 다음과 같습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-launcher.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " 페이지로 이동할 수 있는 링크를 제공합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), ": 사용자 그룹 관리, 사용자 관리, 사용자 템플릿 관리, 출입 권한별 사용자 확인 등 다양한 기능을 통해 사용자를 효율적으로 관리하고, 권한을 통해 보안을 강화할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-user",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), ": 출입문과 관련한 장치, 엘리베이터, 구역을 모니터링합니다. 관련한 기능들을 제어하고 실시간 영상을 통해 모니터링할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-monitoring",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), ": 사용자와 관련한 다양한 데이터 및 통계 정보를 확인할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-data",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에서 제공하는 다양한 데이터를 통해 사용자가 선택한 데이터 기반의 위젯을 추가하고, 배치하여 원하는 대시보드를 구성할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-dashboard",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), ": 장치 및 구역, 사용자에 따른 권한, 언어, 시간 등 다양한 설정을 통해 사용자의 환경에 최적화된 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 구성할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-settings",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 상단 헤더 영역에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "ui-common",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "화면 하단에는 플러그인 추가를 통해 설치된 기능을 이용할 수 있습니다. 플러그인 기능을 사용하려면 플러그인 라이선스가 필요합니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["플러그인 사용에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "plugins",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "licensing",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
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