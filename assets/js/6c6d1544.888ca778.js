"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["27191"], {
56818: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_ui_navigation_mdx_6c6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-ui-navigation-mdx-6c6.json
var site_docs_device_vionyx_webserver_ui_navigation_mdx_6c6_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/ui-navigation","title":"사용자 인터페이스 이해하기","description":"ViOnyx Web Server의 웹 인터페이스 구조, 왼쪽 메인 메뉴, 오른쪽 정보 및 도구를 안내합니다.","source":"@site/docs/device/vionyx_webserver/ui-navigation.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/ui-navigation","permalink":"/docs/device/vionyx_webserver/ui-navigation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/ui-navigation.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-navigation","title":"사용자 인터페이스 이해하기","description":"ViOnyx Web Server의 웹 인터페이스 구조, 왼쪽 메인 메뉴, 오른쪽 정보 및 도구를 안내합니다.","keywords":["UI","메뉴","네비게이션","인터페이스"],"isTranslationMissing":false},"sidebar":"aicamwebserver","previous":{"title":"시작하기","permalink":"/docs/device/vionyx_webserver/getting-started"},"next":{"title":"라이브 영상 보기","permalink":"/docs/device/vionyx_webserver/live-basic"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/ui-navigation.mdx


const frontMatter = {
	id: 'ui-navigation',
	title: '사용자 인터페이스 이해하기',
	description: 'ViOnyx Web Server의 웹 인터페이스 구조, 왼쪽 메인 메뉴, 오른쪽 정보 및 도구를 안내합니다.',
	keywords: [
		'UI',
		'메뉴',
		'네비게이션',
		'인터페이스'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "메인 메뉴 바로가기",
  "id": "메인-메뉴-바로가기",
  "level": 2
}, {
  "value": "정보 및 도구",
  "id": "정보-및-도구",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamLive, IcCamPeople, IcCamSet, IcCamSys, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamLive) _missingMdxReference("IcCamLive", true);
  if (!IcCamPeople) _missingMdxReference("IcCamPeople", true);
  if (!IcCamSet) _missingMdxReference("IcCamSet", true);
  if (!IcCamSys) _missingMdxReference("IcCamSys", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ViOnyx Web Server에 로그인하면 상단에 주요 메뉴가 표시됩니다. 각 메뉴를 통해 원하는 기능에 빠르게 접근할 수 있습니다. 이 페이지에서는 웹 서버 인터페이스의 구조와 각 메뉴의 역할을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/vionyx-home-screen.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "메인-메뉴-바로가기",
      children: "메인 메뉴 바로가기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 왼쪽 상단에는 ViOnyx Web Server의 로고와 함께 주요 메뉴 아이콘이 있습니다. 각 메뉴에서 제공하는 기능은 아래와 같습니다."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "menu-icon-table",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "메뉴 아이콘"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "메뉴 이름"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamLive, {
                width: "26px",
                height: "26px",
                title: "Live"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "live",
                product: "cam"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "실시간으로 카메라에서 촬영 중인 영상을 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamSet, {
                width: "26px",
                height: "26px",
                title: "Settings"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings",
                product: "cam"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "카메라와 웹 서버의 설정값을 변경할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamPeople, {
                width: "26px",
                height: "26px",
                title: "People"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "people",
                product: "cam"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "카메라 시스템의 사용자를 추가하고 관리할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamSys, {
                width: "26px",
                height: "26px",
                title: "System"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "system",
                product: "cam"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치 정보, 계정, 오디오, 로그 등 전체 시스템을 관리할 수 있습니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "정보-및-도구",
      children: "정보 및 도구"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 오른쪽 상단에는 카메라 정보와 언어 선택, 사용자 가이드 바로가기, 로그아웃 버튼이 있습니다."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "menu-icon-table",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "메뉴 아이콘"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "메뉴 이름"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/cam-server/ico-header-camera.svg",
                width: "30px",
                alone: true,
                className: "none"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "카메라 정보"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "현재 접속한 카메라의 이름과 상태, IP 주소를 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                style: {
                  fontSize: '18px'
                },
                children: "🌐"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "언어 선택"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "웹 인터페이스의 언어를 변경할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/cam-server/ico-header-guide.svg",
                width: "30px",
                alone: true,
                className: "none"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "사용자 가이드 바로가기"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "사용자 가이드를 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/cam-server/ico-header-logout.svg",
                width: "30px",
                alone: true,
                className: "none"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "로그아웃"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "로그아웃할 수 있습니다."
            })]
          })]
        })]
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