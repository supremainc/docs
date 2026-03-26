"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["66758"], {
45932: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_manage_device_mdx_578_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-manage-device-mdx-578.json
var site_docs_device_vionyx_webserver_manage_device_mdx_578_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/manage-device","title":"카메라 유지 관리하기","description":"카메라를 재부팅하거나 설정을 초기화하여 카메라를 효과적으로 관리하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/manage-device.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/manage-device","permalink":"/docs/en/device/vionyx_webserver/manage-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/manage-device.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-device","title":"카메라 유지 관리하기","description":"카메라를 재부팅하거나 설정을 초기화하여 카메라를 효과적으로 관리하는 방법을 안내합니다.","keywords":["재부팅","초기화","유지 관리","리셋","Factory Reset","Config Reset"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"펌웨어 업데이트하기","permalink":"/docs/en/device/vionyx_webserver/update-firmware"},"next":{"title":"오디오 클립 업로드하기","permalink":"/docs/en/device/vionyx_webserver/upload-audio-clips"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/manage-device.mdx


const frontMatter = {
	id: 'manage-device',
	title: '카메라 유지 관리하기',
	description: '카메라를 재부팅하거나 설정을 초기화하여 카메라를 효과적으로 관리하는 방법을 안내합니다.',
	keywords: [
		'재부팅',
		'초기화',
		'유지 관리',
		'리셋',
		'Factory Reset',
		'Config Reset'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "카메라 재부팅",
  "id": "카메라-재부팅",
  "level": 2
}, {
  "value": "초기화",
  "id": "초기화",
  "level": 2
}, {
  "value": "초기화 방식 비교",
  "id": "초기화-방식-비교",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "카메라를 재부팅하거나 설정을 초기화하여 카메라를 효과적으로 관리할 수 있습니다. 재부팅, 설정 초기화, 공장 초기화 세 가지 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음과 같은 상황에서 카메라 유지 관리 기능을 사용하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "네트워크 설정 변경 후 새로운 설정을 적용하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라의 응답이 느려지거나 성능 저하가 발생했을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시스템이 정상 작동하지 않을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라의 설정을 모두 기본값으로 돌리고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라를 다른 사용자에게 인수인계하기 전에 모든 정보를 삭제하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시스템에 문제가 발생하여 공장 기본값으로 복원해야 할 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "재부팅 또는 초기화 중에 카메라의 전원을 끄지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "공장 초기화"
            }), "는 모든 사용자 데이터, 이벤트 기록, 로그를 영구 삭제합니다. 복구할 수 없으므로 매우 신중하게 진행하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "초기화하기 전에 필요한 데이터를 백업하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-재부팅",
      children: "카메라 재부팅"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라를 재시작하여 설정 변경사항을 적용하거나 시스템 성능을 회복시킵니다. 재부팅은 현재 설정을 유지하면서 시스템을 재초기화하는 방법입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "system",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_info",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_reset",
            product: "cam"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reboot",
            product: "cam"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["재부팅 확인 팝업이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "재부팅 중에는 카메라가 일시적으로 사용할 수 없습니다. 재부팅은 최소 1-2분 소요됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "재부팅 중에 카메라의 전원을 끄지 마세요. 시스템 손상이 발생할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "재부팅 후 카메라의 IP 주소가 변경되었다면 새로운 IP 주소로 접속해야 합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "재부팅이 시작되면 웹 UI 연결이 자동으로 끊깁니다. 이는 정상 동작입니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "초기화",
      children: "초기화"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 설정을 초기화하거나 공장 기본값으로 완전히 복원할 수 있습니다. 두 가지 초기화 방식이 제공되며, 삭제되는 데이터가 다르므로 신중하게 선택해야 합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "초기화-방식-비교",
      children: "초기화 방식 비교"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "방식"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "설명"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "삭제 대상"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "유지 대상"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(Cmd, {
              sid: "config_reset",
              product: "cam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "설정값만 초기화"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "카메라 설정, 네트워크 설정(선택 사항), 비디오 프로필, 규칙, 계정"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "사용자 정보, 얼굴 데이터, 이벤트/로그"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(Cmd, {
              sid: "factory_reset",
              product: "cam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "모든 데이터 삭제 후 공장 기본값 복원"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "모든 설정, 사용자 정보, 이벤트, 로그, 계정"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "config_reset",
        product: "cam",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "설정값만 초기화하고 사용자 정보 및 로그 데이터는 유지합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "system",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_info",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_reset",
            product: "cam"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "config_reset",
            product: "cam"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reset",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["네트워크 설정 초기화를 제외하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "config_reset_excluding_network",
            product: "cam"
          }), " 옵션의 체크박스를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정 초기화 확인 팝업이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "설정 초기화가 진행되고 카메라가 자동으로 재부팅됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "factory_reset",
        product: "cam",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라를 완전히 초기화하여 공장 초기상태로 복원합니다. 이 작업은 되돌릴 수 없습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "공장 초기화는 모든 데이터를 완전히 삭제합니다. 이 작업은 복구할 수 없으므로 매우 신중하게 진행하세요."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "system",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_info",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_reset",
            product: "cam"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "factory_reset",
            product: "cam"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reset",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["네트워크 설정 초기화를 제외하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "config_reset_excluding_network",
            product: "cam"
          }), " 옵션의 체크박스를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["공장 초기화 확인 팝업이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최종 확인 팝업이 나타나면 관리자 비밀번호를 입력하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "공장 초기화 완료 후 아래 항목이 기본값으로 복원됩니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["관리자 ID: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "admin"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "네트워크 설정: DHCP"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "모든 사용자 데이터, 이벤트, 로그: 삭제됨"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "공장 초기화 후 웹 UI에 접속할 때 새로운 기본 비밀번호를 설정해야 합니다."
          }), "\n"]
        }), "\n"]
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