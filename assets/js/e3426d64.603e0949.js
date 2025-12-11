"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["27230"], {
28792: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_corestation_setup_manager_settings_mdx_e34_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-corestation-setup-manager-settings-mdx-e34.json
var site_docs_device_corestation_setup_manager_settings_mdx_e34_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/settings","title":"설정","description":"관리자 계정 및 웹 서버 네트워크 설정 방법을 안내합니다.","source":"@site/docs/device/corestation_setup_manager/settings.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/settings","permalink":"/device/corestation_setup_manager/settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/settings.mdx","tags":[],"version":"current","frontMatter":{"id":"settings","title":"설정","description":"관리자 계정 및 웹 서버 네트워크 설정 방법을 안내합니다.","keywords":["관리자 계정","네트워크"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"모니터링","permalink":"/device/corestation_setup_manager/monitoring"},"next":{"title":"부록","permalink":"/device/corestation_setup_manager/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/corestation_setup_manager/settings.mdx


const frontMatter = {
	id: 'settings',
	title: '설정',
	description: '관리자 계정 및 웹 서버 네트워크 설정 방법을 안내합니다.',
	keywords: [
		'관리자 계정',
		'네트워크'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "관리자 계정 편집하기",
  "id": "관리자-계정-편집하기",
  "level": 2
}, {
  "value": "웹 서버 네트워크",
  "id": "웹-서버-네트워크",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcEdit, Image} = _components;
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "관리자 계정 및 웹 서버 네트워크 설정 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "관리자-계정-편집하기",
      children: "관리자 계정 편집하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager의 관리자 계정을 편집할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SETTINGS"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Admin Account"
          }), " → ", (0,jsx_runtime.jsx)(IcEdit, {}), (0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/settings-admin-accounts.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "initial-setup",
            children: "장치 초기 설정"
          }), "을 참고하여 각 항목을 편집한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/settings-edit-user.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "웹-서버-네트워크",
      children: "웹 서버 네트워크"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager의 네트워크 정보를 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SETTINGS"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 항목을 설정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/settings-webserver-network.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)("div", {
          className: "overflow-x col2--20-80",
          children: (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "명칭"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "기능 설명"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "IP Address"
                  })
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["CoreStation Setup Manager의 IP 주소를 편집하세요.", (0,jsx_runtime.jsx)("br", {}), "- 고정 IP만 사용할 수 있습니다. DHCP는 지원되지 않습니다."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Gateway"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "CoreStation Setup Manager의 게이트웨이를 편집하세요."
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Subnet Mask"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "CoreStation Setup Manager의 서브넷 마스크를 편집하세요."
                })]
              })]
            })]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "를 클릭하세요. 장치가 재시작됩니다."]
        }), "\n"]
      }), "\n"]
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