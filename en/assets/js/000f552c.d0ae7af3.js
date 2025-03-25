"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["9234"], {
"3403": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_control_door_mdx_000_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-control-door-mdx-000.json
var site_docs_platform_biostar_x_control_door_mdx_000_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-door","title":"출입문 제어하기","description":"출입문을 제어하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/control-door.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-door","permalink":"/docs/en/platform/biostar_x/control-door","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-door.mdx","tags":[],"version":"current","frontMatter":{"id":"control-door","title":"출입문 제어하기","description":"출입문을 제어하는 방법을 안내합니다.","keywords":["모니터링","출입문"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"출입문 상태 확인하기","permalink":"/docs/en/platform/biostar_x/check-door-status"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/control-door.mdx


const frontMatter = {
	id: 'control-door',
	title: '출입문 제어하기',
	description: '출입문을 제어하는 방법을 안내합니다.',
	keywords: [
		'모니터링',
		'출입문'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};

/*Remove All -- '적용' 버튼과 다른 기능?*/


const toc = [{
  "value": "출입문 잠금 해제",
  "id": "출입문-잠금-해제",
  "level": 2
}, {
  "value": "출입문 잠금",
  "id": "출입문-잠금",
  "level": 2
}, {
  "value": "출입문 카메라 확인",
  "id": "출입문-카메라-확인",
  "level": 2
}, {
  "value": "알람 해제",
  "id": "알람-해제",
  "level": 2
}, {
  "value": "APB 해제",
  "id": "apb-해제",
  "level": 2
}, {
  "value": "상세 보기",
  "id": "상세-보기",
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
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "출입문을 제어하는 방법을 안내합니다. 출입문을 일정 시간 동안 잠금하거나 출입문과 연결된 카메라를 확인하고, 발생한 알람을 해제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "런처"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "모니터링"
      }), "을 클릭하세요. 제어하길 원하는 출입문을 선택하고 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "출입문-잠금-해제",
      children: "출입문 잠금 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["잠금을 해제한 개방 상태의 출입문은 누구든지 출입할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "개방"
      }), "를 클릭하고 원하는 옵션을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "일시"
          }), ": 한번만 출입문을 개방합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "시간 설정"
          }), ": 일정 시간 동안 출입문을 개방합니다. 원하는 시간을 초(second) 단위로 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "고정"
          }), ": 시간에 상관 없이 출입문을 개방합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "이 기능은 출입 허가가 필요하지 않은 외부 손님이 방문할 때 유용할 수 있습니다. 출입문을 개방한 후에는 반드시 잠금 상태로 변경하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "출입문-잠금",
      children: "출입문 잠금"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문이 잠금 상태가 되면 허가된 사용자만 출입할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "잠금"
      }), "을 클릭하고 원하는 옵션을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "시간 설정"
          }), ": 일정 시간 동안 출입문을 잠금합니다. 원하는 시간을 초(second) 단위로 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "고정"
          }), ": 시간에 상관 없이 출입문을 잠금합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "출입문-카메라-확인",
      children: "출입문 카메라 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문과 연결된 카메라를 확인할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "비디오 열기"
      }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.gnb.monitoring"
      }), " 영역에 카메라 화면이 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "알람-해제",
      children: "알람 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문에서 발생한 알람을 해제할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "알람 해제"
      }), "를 클릭하세요. 화면 오른쪽 위에 알람 해제된 메시지가 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-해제",
      children: "APB 해제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "안티 패스백 위반이 발생했을 때, APB 알람을 해제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "APB 해제"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "APB 해제"
          }), " 창이 나타나면 안티 패스백을 위반한 사용자 목록을 확인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "적용"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 오른쪽 위에 완료 메시지가 표시됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["출입문에 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "안티 패스백"
        }), "을 설정하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "안티 패스백"
        }), "(Anti-Passback, APB)은 출입 통제를 위해 구조적인 방법으로서, 출입문 안쪽/바깥쪽에 출입 통제 장치를 설치하여 구역에 출입할 때 반드시 인증을 통해 출입해야하는 기능입니다. 카드를 사용해 출입할 때 리더기에 카드를 인식하지 않고, 앞 사람을 따라 입실했다면 퇴실할 때 출입문이 열리지 않으며 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "안티 패스백"
        }), " 이벤트가 발생합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "안티 패스백"
        }), "은 Hard APB와 Soft APB로 구분합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "안티 패스백"
        }), " 위반 시 Hard APB는 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "안티 패스백"
        }), " 이벤트를 생성하고 출입할 수 없으며, Soft APB는 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "안티 패스백"
        }), " 이벤트를 생성하고 출입은 가능합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "상세-보기",
      children: "상세 보기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문에 대한 상세 정보와 이벤트 발생 이력을 확인할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "상세 보기"
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
            children: "최근 이벤트"
          }), ": 선택한 출입문에서 발생한 최근 이벤트 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
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