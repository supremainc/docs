"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["319"], {
3515: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_control_elevator_mdx_cd2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-control-elevator-mdx-cd2.json
var site_docs_platform_biostar_x_control_elevator_mdx_cd2_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-elevator","title":"엘리베이터 제어하기","description":"엘리베이터를 제어하고 상세 정보를 확인하세요.","source":"@site/docs/platform/biostar_x/control-elevator.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-elevator","permalink":"/docs/platform/biostar_x/control-elevator","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-elevator.mdx","tags":[],"version":"current","frontMatter":{"id":"control-elevator","title":"엘리베이터 제어하기","description":"엘리베이터를 제어하고 상세 정보를 확인하세요.","keywords":["모니터링","엘리베이터"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"엘리베이터 점검하기","permalink":"/docs/platform/biostar_x/check-elevator-status"},"next":{"title":"구역 점검하기","permalink":"/docs/platform/biostar_x/check-zone-status"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/control-elevator.mdx


const frontMatter = {
	id: 'control-elevator',
	title: '엘리베이터 제어하기',
	description: '엘리베이터를 제어하고 상세 정보를 확인하세요.',
	keywords: [
		'모니터링',
		'엘리베이터'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "알람 해제",
  "id": "clear-alarm",
  "level": 2
}, {
  "value": "상세 정보 확인",
  "id": "detail-view",
  "level": 2
}, {
  "value": "층 출입 제어",
  "id": "floor-access-control",
  "level": 2
}, {
  "value": "층 개방",
  "id": "floor-open",
  "level": 3
}, {
  "value": "층 해제",
  "id": "floor-unlock",
  "level": 3
}, {
  "value": "층 잠금",
  "id": "floor-lock",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터를 제어하는 방법을 안내합니다. 제공하는 기능을 통해 엘리베이터를 제어하거나 상세 정보를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), "을 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " 탭에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allElevatorGroups"
          }), "으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 그룹의 엘리베이터를 선택하고 오른쪽 마우스 버튼을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["엘리베이터 설정 및 그룹 구성 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clear-alarm",
      children: "알람 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["해당 엘리베이터에서 발생한 알람을 해제할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), "를 클릭하세요. 화면 오른쪽 위에 완료 메시지가 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "상세 정보 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["엘리베이터에 대한 상세 정보와 이벤트 발생 이력을 확인할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), "를 클릭하세요. 화면 오른쪽에 엘리베이터 상세 정보와 이벤트 발생 이력이 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "엘리베이터 상세 정보"
          }), ": 엘리베이터의 이름, 위치, 상태 정보 등을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": 선택한 엘리베이터에서 발생한 최근 이벤트 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["엘리베이터 상세 정보 섹션의 각 항목에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "floor-access-control",
      children: "층 출입 제어"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터로 이동할 수 있는 층을 제어할 수 있습니다. 엘리베이터에 설정된 층의 릴레이를 클릭하고 오른쪽 마우스 버튼을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-open",
      children: "층 개방"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["개방 상태의 층은 누구든지 출입할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.unlock"
      }), "을 클릭하고 원하는 옵션을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockOnce"
          }), ": 한 번만 층을 개방합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockPermanent"
          }), ": 시간에 상관없이 층을 개방합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["외부 손님이 방문할 때 선택한 층을 일시적으로 개방하여 편리하게 출입할 수 있습니다. 층을 개방한 후에는 반드시 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), " 상태로 변경하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-unlock",
      children: "층 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["선택한 층을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " 상태로 변경하면 허가된 사용자만 출입할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-lock",
      children: "층 잠금"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["선택한 층을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " 상태로 변경하면 아무도 출입할 수 없습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), "을 클릭하세요."]
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