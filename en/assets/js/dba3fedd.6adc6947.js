"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6600"], {
2060: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_view_user_by_access_mdx_dba_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-view-user-by-access-mdx-dba.json
var site_docs_platform_biostar_x_view_user_by_access_mdx_dba_namespaceObject = JSON.parse('{"id":"platform/biostar_x/view-user-by-access","title":"출입 권한별 사용자 확인하기","description":"출입 권한별로 등록된 사용자를 확인하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/view-user-by-access.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/view-user-by-access","permalink":"/docs/en/platform/biostar_x/view-user-by-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/view-user-by-access.mdx","tags":[],"version":"current","frontMatter":{"id":"view-user-by-access","title":"출입 권한별 사용자 확인하기","description":"출입 권한별로 등록된 사용자를 확인하는 방법을 안내합니다.","keywords":["사용자","출입 권한"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"사용자 템플릿 관리하기","permalink":"/docs/en/platform/biostar_x/user-template"},"next":{"title":"다중 인증으로 로그인하기","permalink":"/docs/en/platform/biostar_x/login-with-mfa"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/view-user-by-access.mdx


const frontMatter = {
	id: 'view-user-by-access',
	title: '출입 권한별 사용자 확인하기',
	description: '출입 권한별로 등록된 사용자를 확인하는 방법을 안내합니다.',
	keywords: [
		'사용자',
		'출입 권한'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "출입 권한별 사용자 확인",
  "id": "출입-권한별-사용자-확인",
  "level": 2
}, {
  "value": "출입 그룹 목록 보기",
  "id": "출입-그룹-목록-보기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Column, Columns, IcMoreB, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcMoreB) _missingMdxReference("IcMoreB", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "출입-권한별-사용자-확인",
      children: "출입 권한별 사용자 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입 권한 그룹별로 등록한 사용자를 확인하는 방법을 안내합니다. 사용자의 출입 권한을 확인하고 사용자의 정보를 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["트리 구조 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.accessExplorer"
          }), " 탭을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-access-explorer.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "All Access Groups"
          }), "에서 원하는 출입 권한 그룹을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 출입 권한 그룹에 속한 사용자를 사용자 목록에서 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "트리 구조 메뉴는 아래와 같은 구조로 구성되어 있습니다."
      }), (0,jsx_runtime.jsxs)(Columns, {
        children: [(0,jsx_runtime.jsx)(Column, {
          children: (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-user-access-explorer-tree-level.png"
          })
        }), (0,jsx_runtime.jsxs)(Column, {
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All Access Groups"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Access Group: 출입 권한 그룹"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Access Level: 출입 레벨"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                        children: "Door: 출입문"
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                        children: "Schedule: 스케줄"
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Floor Level: 층 레벨"
                  }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                        children: "Elevator: 엘리베이터"
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                        children: "Schedule: 스케줄"
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "출입-그룹-목록-보기",
      children: "출입 그룹 목록 보기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입 그룹 목록을 그룹별, 레벨별, 출입문과 스케쥴별로 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.accessExplorer"
      }), " 탭의 상위에 ", (0,jsx_runtime.jsx)(IcMoreB, {}), " 버튼을 클릭하고 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "View"
      }), "를 클릭하세요. 원하는 항목을 선택해 목록을 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-access-explorer-view.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Parent Access Group"
          }), ": 최상위 출입 권한 그룹을 기준으로 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Access Group"
          }), ": 모든 출입 권한 기준으로 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Access Level"
          }), ": 출입 레벨 기준으로 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Door & Schedule"
          }), ": 출입문과 스케줄 기준으로 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
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