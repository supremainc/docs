"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["21260"], {
20993: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2025년 5월 이전에 BioStar Air 출입 통제 서비스를 사용하기 시작한 고객은 현재 Suprema Pass 앱으로 새로 설계된 Airfob Space 앱을 계속 사용할 수 있습니다. 두 앱 모두 동일한 기능을 제공하며 완벽하게 호환됩니다. 기존 사용자는 전환할 필요가 없으며, 모바일 인증 정보가 두 앱 모두에서 원활하게 작동합니다."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
31664: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_17_monitoring_monitoring_door_status_mdx_1df_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-17-monitoring-monitoring-door-status-mdx-1df.json
var site_docs_platform_biostar_air_17_monitoring_monitoring_door_status_mdx_1df_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-door-status","title":"출입문 상태 모니터링하기","description":"BioStar Air 웹 포털과 모바일 앱을 사용하여 실시간 출입문 상태를 모니터링하고, 잠금을 원격으로 제어하며, 출입문 접근을 관리하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/17-monitoring-monitoring-door-status.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-door-status","permalink":"/docs/es/platform/biostar_air/monitoring-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/17-monitoring-monitoring-door-status.mdx","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"monitoring-door-status","title":"출입문 상태 모니터링하기","description":"BioStar Air 웹 포털과 모바일 앱을 사용하여 실시간 출입문 상태를 모니터링하고, 잠금을 원격으로 제어하며, 출입문 접근을 관리하는 방법을 안내합니다.","keywords":["모니터링","출입문 상태","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"알림 & 리포트 이력 확인하기","permalink":"/docs/es/platform/biostar_air/monitoring-alert-report-history"},"next":{"title":"비상 호출 사용하기","permalink":"/docs/es/platform/biostar_air/managing-roll-call-fire-muster"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/17-monitoring-monitoring-door-status.mdx


const frontMatter = {
	id: 'monitoring-door-status',
	title: '출입문 상태 모니터링하기',
	description: 'BioStar Air 웹 포털과 모바일 앱을 사용하여 실시간 출입문 상태를 모니터링하고, 잠금을 원격으로 제어하며, 출입문 접근을 관리하는 방법을 안내합니다.',
	keywords: [
		'모니터링',
		'출입문 상태',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "웹 포털에서 모니터링",
  "id": "monitoringWebPortal",
  "level": 2
}, {
  "value": "출입문 상태 표시",
  "id": "doorStatusIndicators",
  "level": 3
}, {
  "value": "출입문 잠금 해제",
  "id": "remotely-unlocking-a-door",
  "level": 3
}, {
  "value": "항상 열림 모드 설정",
  "id": "alwaysOpenMode",
  "level": 3
}, {
  "value": "페쇄 모드 설정",
  "id": "lockMode",
  "level": 3
}, {
  "value": "모바일에서 출입문 상태 모니터링",
  "id": "monitoringDoorStatusMobile",
  "level": 2
}, {
  "value": "출입문 출입 제어",
  "id": "controlling-door-access-app",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, IcAirMore, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcAirMore) _missingMdxReference("IcAirMore", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 시스템에 연결된 출입문의 상태를 실시간으로 모니터링할 수 있습니다. 관리자는 출입문의 잠금 또는 잠금 해제 여부 및 릴레이 센서 상태를 확인하고, 문을 잠그거나 잠금 해제하여 원격으로 출입을 제어할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "출입문 상태 모니터링에 대한 동영상 가이드를 시청하려면 다음 영상을 참고하세요."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "_nxSRwst480"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoringWebPortal",
      children: "웹 포털에서 모니터링"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air 웹 포털에서 출입문 상태를 모니터링할 수 있습니다. 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "monitoring_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_status_submenu",
        product: "air"
      }), "를 클릭하세요. BioStar Air에 등록된 출입문의 목록을 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-door-status.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문은 장치 등록을 통해 등록할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "register-device",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "managing-registered-doors",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "doorStatusIndicators",
      children: "출입문 상태 표시"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "각 출입문에서는 아래 항목을 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column2",
            product: "air"
          }), ": 출입문의 잠금 또는 잠금 해제 상태를 표시합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column3",
            product: "air"
          }), ": 출입문이 물리적으로 열려 있는지 또는 닫혀 있는지 표시합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remotely-unlocking-a-door",
      children: "출입문 잠금 해제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문이 온라인 상태이고 BioStar Air에 연결되어 있다면 원격으로 잠금 해제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column4",
            product: "air"
          }), " 열에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_open_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column2",
            product: "air"
          }), " 열의 상태가 잠금 해제로 변경됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설정된 시간이 지나면 출입문은 다시 잠금 상태로 돌아갑니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["출입문이 열린 상태로 유지되는 시간을 설정하는 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "managing-registered-doors#editingDoors",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alwaysOpenMode",
      children: "항상 열림 모드 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문을 무기한 열림 상태로 유지할 수 있습니다. 방문객 또는 임시 출입이 필요한 경우에 유용하게 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문 목록에서 열림 상태로 유지할 출입문의 가장 오른쪽에 ", (0,jsx_runtime.jsx)(IcAirMore, {
            title: "Control"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status-more-func.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_log_unlock_mode",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column4",
            product: "air"
          }), " 열에 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_control_unlocked_description",
            product: "air"
          }), "로 상태가 변경됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-door-status-control-always-open.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["정상 동작 상태로 되돌리려면 ", (0,jsx_runtime.jsx)(IcAirMore, {
        title: "Control"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "release_icon_tooltip",
        product: "air"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lockMode",
      children: "페쇄 모드 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "현재 스케줄에 관계없이 출입문을 잠금 상태로 유지할 수 있습니다. 보안 강화가 필요한 경우에 유용하게 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문 목록에서 잠금 상태로 유지할 출입문의 가장 오른쪽에 ", (0,jsx_runtime.jsx)(IcAirMore, {
            title: "Control"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status-more-func.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_log_lock_mode",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column4",
            product: "air"
          }), " 열에 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_control_locked_description",
            product: "air"
          }), "로 상태가 변경됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-door-status-control-lock-mode.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["정상 동작 상태로 되돌리려면 ", (0,jsx_runtime.jsx)(IcAirMore, {
        title: "Control"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "release_icon_tooltip",
        product: "air"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoringDoorStatusMobile",
      children: "모바일에서 출입문 상태 모니터링"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 기기에서 BioStar Air 앱을 사용하여 출입문 상태를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-mobile-monitoring-door-status.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 BioStar Air 앱을 실행하고 로그인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["초기 화면 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_submenu",
            product: "air"
          }), " 카드를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air에 등록된 출입문의 목록을 확인할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "controlling-door-access-app",
      children: "출입문 출입 제어"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--20",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-monitoring-door-status-control.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "출입문이 네트워크에 연결되어 있다면 아래 작업을 실행할 수 있습니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door_open_btn",
              product: "air"
            }), ": 출입문을 원격으로 잠금 해제할 수 있습니다."]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문의 가장 오른쪽에 ", (0,jsx_runtime.jsx)(IcAirMore, {
            title: "Control"
          }), " 버튼을 탭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            en: "Door Info and Control",
            children: "출입문 정보 및 제어"
          }), " 옵션이 나타납니다."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_unlock_mode",
                product: "air"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_lock_mode",
                product: "air"
              }), ": 스케줄에 관계없이 출입문을 항상 열림 또는 잠금 모드로 설정합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "release_icon_tooltip",
                product: "air"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_unlock_mode",
                product: "air"
              }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_lock_mode",
                product: "air"
              }), "를 해제하고 정상 동작 상태로 되돌립니다."]
            }), "\n"]
          }), "\n"]
        })]
      })]
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