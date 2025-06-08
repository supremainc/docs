"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6744"], {
1660: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_control_door_slave_device_mdx_adb_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-control-door-slave-device-mdx-adb.json
var site_docs_platform_biostar_x_control_door_slave_device_mdx_adb_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-door-slave-device","title":"슬레이브 장치 제어하기","description":"출입문과 연결된 슬레이브 장치를 제어하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/control-door-slave-device.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-door-slave-device","permalink":"/docs/platform/biostar_x/control-door-slave-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-door-slave-device.mdx","tags":[],"version":"current","frontMatter":{"id":"control-door-slave-device","title":"슬레이브 장치 제어하기","description":"출입문과 연결된 슬레이브 장치를 제어하는 방법을 안내합니다.","keywords":["모니터링","출입문","슬레이브 장치"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"출입문 제어하기","permalink":"/docs/platform/biostar_x/control-door"},"next":{"title":"엘리베이터 점검하기","permalink":"/docs/platform/biostar_x/check-elevator-status"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/control-door-slave-device.mdx


const frontMatter = {
	id: 'control-door-slave-device',
	title: '슬레이브 장치 제어하기',
	description: '출입문과 연결된 슬레이브 장치를 제어하는 방법을 안내합니다.',
	keywords: [
		'모니터링',
		'출입문',
		'슬레이브 장치'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "출입문 릴레이 장치 제어",
  "id": "control-relay",
  "level": 2
}, {
  "value": "릴레이 개방",
  "id": "relay-open",
  "level": 3
}, {
  "value": "릴레이 해제",
  "id": "relay-release",
  "level": 3
}, {
  "value": "릴레이 잠금",
  "id": "relay-lock",
  "level": 3
}, {
  "value": "출입문 경비 장치 제어",
  "id": "control-arm",
  "level": 2
}, {
  "value": "출입문 카메라 장치 제어",
  "id": "control-camera",
  "level": 2
}, {
  "value": "카메라 영상 확인",
  "id": "camera-video",
  "level": 3
}, {
  "value": "카메라 상세 정보 확인",
  "id": "camera-detail",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Glossary} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "출입문과 연결된 슬레이브 장치를 손쉽게 제어할 수 있도록 이 문서에서는 장치별 제어 방법을 안내합니다. 출입문 릴레이를 통한 잠금/해제, 카메라 영상 및 상세 정보 확인, 그리고 경비 상태 조작 등 다양한 기능을 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.door.doorRelay",
          className: "normal"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.arm",
          className: "normal"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "을 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "을 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " 탭에서 출입문을 선택하세요. 하위 목록에서 연결된 슬레이브 장치를 선택하고, 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-relay",
      children: "출입문 릴레이 장치 제어"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문과 연결된 릴레이 장치를 제어할 수 있습니다. 릴레이 장치에서 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "relay"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-open",
      children: "릴레이 개방"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문과 연결된 릴레이 장치를 통해 출입문의 잠금을 해제할 수 있습니다. 개방 상태의 출입문은 누구든지 출입할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.unlock"
      }), "을 클릭하고 원하는 옵션을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockOnce"
          }), ": 한 번만 출입문을 개방합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockTimed"
          }), ": 일정 시간 동안 출입문을 개방합니다. 원하는 시간을 초(second) 단위로 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockPermanent"
          }), ": 시간에 상관없이 출입문을 개방합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["이 기능을 통해 외부 손님이 방문할 때 출입문을 일시적으로 개방하여 편리하게 출입할 수 있습니다. 출입문을 개방한 후에는 반드시 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), " 상태로 변경하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-release",
      children: "릴레이 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문과 연결된 릴레이 장치를 통해 출입문을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " 상태로 변경하면 허가된 사용자만 출입할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-lock",
      children: "릴레이 잠금"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문과 연결된 릴레이 장치를 통해 출입문을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " 상태로 변경하면 아무도 출입할 수 없습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), "을 클릭하고 원하는 옵션을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockTimed"
          }), ": 일정 시간 동안 출입문을 잠금 상태로 변경합니다. 원하는 시간을 초(second) 단위로 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.lockPermanent"
          }), ": 시간에 상관없이 출입문을 잠금 상태로 변경합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-arm",
      children: "출입문 경비 장치 제어"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문과 연결된 경비 장치를 통해 출입문의 경비 상태를 일시적으로 해제할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-camera",
      children: "출입문 카메라 장치 제어"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문과 연결된 카메라 장치를 제어할 수 있습니다. 카메라 장치의 영상을 실시간으로 확인하거나 상세 정보를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera-video",
      children: "카메라 영상 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라 장치의 영상을 실시간으로 확인하려면, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "비디오 열기"
      }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " 섹션에서 비디오를 재생할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능은 출입문에 카메라가 연결되어 있어야 사용할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문에 카메라 장치를 연결하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera-detail",
      children: "카메라 상세 정보 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라의 상세 정보를 확인하려면, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), "를 클릭하세요. 화면 오른쪽에 카메라의 상세 정보가 표시됩니다."]
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