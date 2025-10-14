"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9458"], {
26879: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_monitoring_device_mdx_3a5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-monitoring-device-mdx-3a5.json
var site_docs_platform_biostar_x_monitoring_device_mdx_3a5_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-device","title":"장치 모니터링하기","description":"모든 구역과 출입문에 연결된 장치 및 카메라를 실시간으로 모니터링하세요. 장치와 카메라의 상태 점검, 상세 정보 확인, 카메라 영상 재생 등 다양한 기능을 통해 효율적으로 관리할 수 있습니다.","source":"@site/docs/platform/biostar_x/monitoring-device.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-device","permalink":"/docs/platform/biostar_x/monitoring-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-device.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-device","title":"장치 모니터링하기","description":"모든 구역과 출입문에 연결된 장치 및 카메라를 실시간으로 모니터링하세요. 장치와 카메라의 상태 점검, 상세 정보 확인, 카메라 영상 재생 등 다양한 기능을 통해 효율적으로 관리할 수 있습니다.","keywords":["모니터링","장치","카메라"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"맵 모니터링하기","permalink":"/docs/platform/biostar_x/monitoring-map"},"next":{"title":"비디오 모니터링하기","permalink":"/docs/platform/biostar_x/monitoring-video"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/monitoring-device.mdx


const frontMatter = {
	id: 'monitoring-device',
	title: '장치 모니터링하기',
	description: '모든 구역과 출입문에 연결된 장치 및 카메라를 실시간으로 모니터링하세요. 장치와 카메라의 상태 점검, 상세 정보 확인, 카메라 영상 재생 등 다양한 기능을 통해 효율적으로 관리할 수 있습니다.',
	keywords: [
		'모니터링',
		'장치',
		'카메라'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "장치 및 카메라 상태 점검",
  "id": "장치-및-카메라-상태-점검",
  "level": 2
}, {
  "value": "장치 제어",
  "id": "장치-제어",
  "level": 2
}, {
  "value": "장치 재연결",
  "id": "장치-재연결",
  "level": 3
}, {
  "value": "장치 재시작",
  "id": "장치-재시작",
  "level": 3
}, {
  "value": "장치 잠금",
  "id": "장치-잠금",
  "level": 3
}, {
  "value": "작업 중지",
  "id": "작업-중지",
  "level": 3
}, {
  "value": "장치 상세 보기",
  "id": "장치-상세-보기",
  "level": 3
}, {
  "value": "카메라 제어",
  "id": "카메라-제어",
  "level": 2
}, {
  "value": "카메라 영상 재생",
  "id": "카메라-영상-재생",
  "level": 3
}, {
  "value": "카메라 상세 보기",
  "id": "카메라-상세-보기",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamFail, IcCamOk, Image, StatusFail, StatusOK} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusFail) _missingMdxReference("StatusFail", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "장치 및 카메라 모니터링 기능을 사용하는 방법을 안내합니다. 장치와 카메라의 상태를 점검하고, 상세 정보를 확인하며, 카메라 영상을 실시간으로 재생하는 등 다양한 기능을 활용할 수 있습니다. 또한, 최근 발생한 이벤트를 확인하여 장치와 카메라의 상태를 효율적으로 관리하는 방법을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " 페이지는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), "을 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), "을 선택하여 진입할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-및-카메라-상태-점검",
      children: "장치 및 카메라 상태 점검"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.device.title"
      }), " 탭을 클릭하세요. 모든 장치와 카메라의 상태를 점검할 수 있습니다. 장치와 카메라의 상태는 아래를 참고하세요."]
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
              children: "장치가 정상 연결된 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusFail, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치가 꺼져 있거나 연결이 해제된 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamOk, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "카메라가 연결된 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamFail, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "카메라가 꺼져 있거나 연결이 해제된 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-제어",
      children: "장치 제어"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 왼쪽 사이드바의 장치 목록에서 원하는 장치를 선택하고 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-device-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-재연결",
      children: "장치 재연결"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치가 꺼져 있거나 연결이 해제된 상태인 경우, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.reconnect"
      }), "을 클릭하세요. 장치가 다시 연결되면 상태 아이콘이 ", (0,jsx_runtime.jsx)(StatusOK, {}), "로 변경됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reconnect"
        }), " 기능은 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.deviceToServerConnection",
          product: "2"
        }), " 옵션으로 연결된 장치는 지원하지 않습니다. 장치 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-adding-devices#setipaddress",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-재시작",
      children: "장치 재시작"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치를 재시작하려면, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.reboot"
      }), "을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-잠금",
      children: "장치 잠금"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 잠그려면, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deviceLock"
          }), "을 클릭하세요. 화면 상단에 장치 장치 잠금이 실행 중임을 알리는 메시지가 나타납니다. 잠금이 완료되면 메시지가 사라집니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 잠금을 해제하려면, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deviceUnlock"
          }), "를 클릭하세요. 화면 상단에 장치 잠금 해제가 실행 중임을 알리는 메시지가 나타납니다. 잠금 해제가 완료되면 메시지가 사라집니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "작업-중지",
      children: "작업 중지"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["진행 중인 작업을 중지하려면, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.stopAction"
      }), "를 클릭하세요. 화면 상단에 작업 중지 성공 메시지가 나타납니다. 작업 중지가 완료되면 메시지가 사라집니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-상세-보기",
      children: "장치 상세 보기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치의 상세 정보를 확인하려면, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), "를 클릭하세요. 또는  장치를 더블 클릭하세요. 화면 오른쪽에 장치의 상세 정보가 나타납니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-device-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치의 ID 및 그룹, 모델명, 기동 시간, IP 주소 등의 정보를 확인할 수 있습니다. 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.recentEvent"
      }), " 목록에서는 최근 발생한 이벤트를 시간 역순으로 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-제어",
      children: "카메라 제어"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 왼쪽 사이드바의 카메라 목록에서 원하는 카메라를 선택하고 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카메라-영상-재생",
      children: "카메라 영상 재생"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["비디오 타일에 카메라 영상을 배치하고 실시간으로 모니터링하려면, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "비디오 타일에 카메라 영상을 추가하는 방법은 아래와 같은 방식도 지원합니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "화면 왼쪽 사이드바의 카메라 목록에서 영상을 재생할 카메라를 더블 클릭하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카메라를 비디오 타일 영역으로 드래그 앤 드롭 방식으로 영상을 추가할 수도 있습니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비디오 타일에는 화면 왼쪽 상단부터 차례로 추가되며, 현재 화면에 추가할 공간이 없으면 에러 메시지가 표시됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["영상 제어 방법 및 영상에 표시되는 도구에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카메라-상세-보기",
      children: "카메라 상세 보기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라의 상세 정보를 확인하려면, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), "를 클릭하세요. 카메라의 그룹, 설명, 아이디와 IP 주소를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-details.png"
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