"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9234"], {
4787: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_control_door_mdx_000_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-control-door-mdx-000.json
var site_docs_platform_biostar_x_control_door_mdx_000_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-door","title":"출입문 제어하기","description":"출입문을 제어하고 상세 정보를 확인하세요.","source":"@site/docs/platform/biostar_x/control-door.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-door","permalink":"/docs/en/platform/biostar_x/control-door","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-door.mdx","tags":[],"version":"current","frontMatter":{"id":"control-door","title":"출입문 제어하기","description":"출입문을 제어하고 상세 정보를 확인하세요.","keywords":["모니터링","출입문"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"출입문 점검하기","permalink":"/docs/en/platform/biostar_x/check-door-status"},"next":{"title":"슬레이브 장치 제어하기","permalink":"/docs/en/platform/biostar_x/control-door-slave-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/control-door.mdx


const frontMatter = {
	id: 'control-door',
	title: '출입문 제어하기',
	description: '출입문을 제어하고 상세 정보를 확인하세요.',
	keywords: [
		'모니터링',
		'출입문'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};

/*이런 경우 화면에 탭을 추가하고 <Cmd sid='arena.tree.contextMenu.openVideo' />를 다시 클릭하세요.*/


const toc = [{
  "value": "출입문 개방",
  "id": "door-open",
  "level": 2
}, {
  "value": "출입문 해제",
  "id": "door-unlock",
  "level": 2
}, {
  "value": "출입문 잠금",
  "id": "door-lock",
  "level": 2
}, {
  "value": "출입문 카메라 확인",
  "id": "door-camera",
  "level": 2
}, {
  "value": "알람 해제",
  "id": "alarm-reset",
  "level": 2
}, {
  "value": "APB 해제",
  "id": "apb-reset",
  "level": 2
}, {
  "value": "상세 정보 확인",
  "id": "detail-view",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Glossary, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "출입문을 제어하는 방법을 안내합니다. 출입문을 일정 시간 동안 잠금 하거나 출입문과 연결된 카메라를 확인하고, 발생한 알람을 해제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문을 원격으로 제어하여 출입을 관리하세요. 특정 시간 동안 출입문을 개방하거나 잠금 상태로 설정할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문과 연결된 카메라를 통해 실시간으로 출입 상황을 모니터링할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문을 잠금 상태로 유지함으로써 허가된 사용자만 출입할 수 있도록 보안을 강화할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#apb",
            children: "안티 패스백"
          }), " 기능을 통해 무단출입을 방지하고, 출입 기록을 정확하게 관리할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "을 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "을 선택하세요. 제어하길 원하는 출입문을 선택하고 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-open",
      children: "출입문 개방"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["개방 상태의 출입문은 누구든지 출입할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
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
        children: ["외부 손님이 방문할 때 출입문을 일시적으로 개방하여 편리하게 출입할 수 있습니다. 출입문을 개방한 후에는 반드시 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), " 상태로 변경하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-unlock",
      children: "출입문 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " 상태로 변경하면 허가된 사용자만 출입할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-lock",
      children: "출입문 잠금"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문을 ", (0,jsx_runtime.jsx)(Cmd, {
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
      id: "door-camera",
      children: "출입문 카메라 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문과 연결된 카메라를 확인할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " 섹션의 비디오 타일에 선택한 카메라의 영상이 추가됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control-open-video.png",
      alt: "비디오 열기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["비디오를 선택한 상태에서는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " 도구를 통해 출입문을 제어할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control.png",
      alt: "출입문 제어"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.map.doorControl"
            }), " 도구는 출입문에 카메라가 연계되어 있어야 사용할 수 있습니다. 선택한 카메라가 출입문과 연계되어 있지 않으면 사용할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비디오 타일에는 화면 왼쪽 상단부터 차례로 추가되며, 현재 화면에 추가할 공간이 없으면 에러 메시지가 표시됩니다. "
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문에 카메라를 연계하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["비디오 모니터링에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm-reset",
      children: "알람 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문에서 발생한 알람을 해제할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), "를 클릭하세요. 화면 오른쪽 위에 알람 메시지가 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-reset",
      children: "APB 해제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "안티 패스백 위반이 발생했을 때, APB 알람을 해제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.clearApb"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.clearApb"
          }), " 창이 나타나면 안티 패스백을 위반한 사용자 목록을 확인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 오른쪽 위에 완료 메시지가 표시됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Glossary, {
            termid: "apb"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "안티 패스백"
            }), "을 설정하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "상세 정보 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문에 대한 상세 정보와 이벤트 발생 이력을 확인할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), "를 클릭하세요. 화면 오른쪽에 출입문 상세 정보와 이벤트 발생 이력이 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "출입문 상세 정보"
          }), ": 출입문의 이름, 위치, 상태, 연결된 서브 장치 정보 등을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": 선택한 출입문에서 발생한 최근 이벤트 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["출입문 상세 정보 섹션의 각 항목에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
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