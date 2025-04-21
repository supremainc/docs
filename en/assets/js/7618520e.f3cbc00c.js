"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["6569"], {
"1325": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_check_door_status_mdx_761_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-check-door-status-mdx-761.json
var site_docs_platform_biostar_x_check_door_status_mdx_761_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-door-status","title":"출입문 점검하기","description":"출입문의 상태를 확인하고 상황에 따라 대처하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/check-door-status.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-door-status","permalink":"/docs/en/platform/biostar_x/check-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-door-status.mdx","tags":[],"version":"current","frontMatter":{"id":"check-door-status","title":"출입문 점검하기","description":"출입문의 상태를 확인하고 상황에 따라 대처하는 방법을 안내합니다.","keywords":["모니터링","출입문"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"출입문 모니터링하기","permalink":"/docs/en/platform/biostar_x/monitoring-door"},"next":{"title":"출입문 제어하기","permalink":"/docs/en/platform/biostar_x/control-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/check-door-status.mdx


const frontMatter = {
	id: 'check-door-status',
	title: '출입문 점검하기',
	description: '출입문의 상태를 확인하고 상황에 따라 대처하는 방법을 안내합니다.',
	keywords: [
		'모니터링',
		'출입문'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "출입문 상태 확인",
  "id": "check-the-door-status",
  "level": 2
}, {
  "value": "출입문 열림/잠금 확인",
  "id": "open-the-doorlock-confirmation",
  "level": 2
}, {
  "value": "출입문 잠금 확인",
  "id": "check-the-door-lock",
  "level": 2
}, {
  "value": "카메라 상태 확인",
  "id": "check-the-camera-status",
  "level": 2
}, {
  "value": "경비 상태 확인",
  "id": "check-the-status-of-expenses",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcArm, IcDisarm, IcDoorClose, IcDoorOpen, IcErr, IcNotsync, IcRelayLock, IcRelayUnlock, Image, StatusFail, StatusOK} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcArm) _missingMdxReference("IcArm", true);
  if (!IcDisarm) _missingMdxReference("IcDisarm", true);
  if (!IcDoorClose) _missingMdxReference("IcDoorClose", true);
  if (!IcDoorOpen) _missingMdxReference("IcDoorOpen", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcNotsync) _missingMdxReference("IcNotsync", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusFail) _missingMdxReference("StatusFail", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 및 관련 장비의 상태를 정확하게 파악하는 것은 보안 시스템의 핵심입니다. 이 문서에서는 장치의 상태를 확인하는 방법과 오류 발생 시 대처 방안을 안내합니다. 안내된 아이콘과 상세 설명을 통해 관리자들이 각각 장치의 작동 상태를 한눈에 파악하고, 문제 발생 시 신속하게 대응할 수 있도록 돕습니다"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.header.arena"
      }), "을 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.header.arena"
      }), "을 선택하세요. 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " 탭에서 각 출입문과 연결된 슬레이브 장치의 상태를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-door-status",
      children: "출입문 상태 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 상태를 확인하여 출입문이 정상적으로 작동하는지 확인할 수 있습니다. 출입문 상태는 아래를 참고하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(IcErr, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "커뮤니케이션 서버 오류이거나 연결이 끊긴 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcNotsync, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "동기화 오류가 발생한 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "상태 아이콘을 클릭하면 툴팁을 통해서 상세 정보를 확인할 수 있습니다. 툴팁에 표시된 오류 메시지의 링크를 클릭하면 출입문과 연결된 장치 목록으로 이동할 수 있습니다."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip.png",
        alt: "툴팁 메시지"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "해당 장치에서 마우스 오른쪽 버튼을 클릭하고, 재연결 또는 재시작 옵션을 선택하세요."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip-device.png",
        alt: "장치 목록"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-the-doorlock-confirmation",
      children: "출입문 열림/잠금 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 센서를 통해 출입문이 열려 있는지 확인할 수 있습니다. 출입문 센서의 상태는 아래를 참고하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(IcDoorClose, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "출입문이 닫힌 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcDoorOpen, {
                width: "auto",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "출입문이 열린 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-door-lock",
      children: "출입문 잠금 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "릴레이 상태를 통해 출입문의 잠금 상태를 확인할 수 있습니다. 출입문 릴레이의 상태는 아래를 참고하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(IcRelayLock, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "출입문이 닫힌 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcRelayUnlock, {
                width: "auto",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "출입문이 열린 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-camera-status",
      children: "카메라 상태 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 상태를 확인하여 카메라가 정상적으로 작동하는지 확인할 수 있습니다. 카메라의 상태는 아래를 참고하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(StatusOK, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "카메라가 연결된 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusFail, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "카메라가 꺼져 있거나 연결이 해제된 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-status-of-expenses",
      children: "경비 상태 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문의 경비 상태를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(IcArm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "경비가 활성화된 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcDisarm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "경비가 비활성화된 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "경비 상태는 출입문이 Intrusion Alarm Zone으로 설정했을 때만 표시됩니다."
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