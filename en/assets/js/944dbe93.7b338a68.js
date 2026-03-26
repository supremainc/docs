"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["87872"], {
30669: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_configure_date_time_mdx_944_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-configure-date-time-mdx-944.json
var site_docs_device_vionyx_webserver_configure_date_time_mdx_944_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/configure-date-time","title":"날짜와 시간 설정하기","description":"시간대를 설정하고 수동 입력 또는 NTP 서버를 통해 정확한 시간을 유지하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/configure-date-time.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/configure-date-time","permalink":"/docs/en/device/vionyx_webserver/configure-date-time","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/configure-date-time.mdx","tags":[],"version":"current","frontMatter":{"id":"configure-date-time","title":"날짜와 시간 설정하기","description":"시간대를 설정하고 수동 입력 또는 NTP 서버를 통해 정확한 시간을 유지하는 방법을 안내합니다.","keywords":["날짜","시간","NTP","시간대","시간 동기화"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"프라이버시 및 오버레이 설정하기","permalink":"/docs/en/device/vionyx_webserver/configure-privacy-overlay"},"next":{"title":"네트워크 설정하기","permalink":"/docs/en/device/vionyx_webserver/configure-network"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/configure-date-time.mdx


const frontMatter = {
	id: 'configure-date-time',
	title: '날짜와 시간 설정하기',
	description: '시간대를 설정하고 수동 입력 또는 NTP 서버를 통해 정확한 시간을 유지하는 방법을 안내합니다.',
	keywords: [
		'날짜',
		'시간',
		'NTP',
		'시간대',
		'시간 동기화'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시간대 설정",
  "id": "시간대-설정",
  "level": 2
}, {
  "value": "수동으로 시간 설정",
  "id": "수동으로-시간-설정",
  "level": 2
}, {
  "value": "자동 동기화 시간 설정",
  "id": "자동-동기화-시간-설정",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "날짜와 시간 설정을 통해 카메라의 시간을 정확하게 유지할 수 있습니다. 시간대를 선택하고 수동으로 시간을 설정하거나 NTP 서버를 통해 자동으로 시간을 동기화할 수 있습니다. 정확한 시간은 영상 타임스탬프 및 AI 이벤트 기록의 신뢰성을 보장합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 날짜와 시간 설정을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 설치 후 시간대를 운영 지역에 맞게 설정하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수동으로 정확한 시간을 입력하여 카메라 시간을 동기화하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NTP 서버를 통해 장시간 정확한 시간을 자동으로 유지하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "여러 카메라의 시간을 통일하여 영상 분석 및 추적을 용이하게 하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "카메라의 시간이 부정확하면 AI 이벤트 기록, 비디오 타임스탬프, 시스템 로그의 신뢰성이 떨어질 수 있습니다. 정기적으로 시간 설정을 확인하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시간대-설정",
      children: "시간대 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "먼저 카메라가 운영될 지역의 시간대를 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "basic",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "date_time",
            product: "cam"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "date",
            product: "cam"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "time_zone",
            product: "cam"
          }), "에서 지역을 선택하세요. (예: GMT+09:00 Seoul)"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-settings-date-time.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["시간대에 따른 서머 타임을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_savings",
            product: "cam"
          }), " 옵션의 체크박스를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정한 시간대를 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "기본값은 (GMT+09:00) Seoul로 설정되어 있습니다. 운영 지역이 다르면 반드시 시간대를 변경하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "수동으로-시간-설정",
      children: "수동으로 시간 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 시간을 수동으로 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "basic",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "date_time",
            product: "cam"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "time",
            product: "cam"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manual",
            product: "cam"
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-settings-date-time-manual.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "날짜 필드에 현재 날짜를 입력하거나 달력 아이콘을 클릭해 날짜를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시간 필드에 현재 시각을 입력하거나 시계 아이콘을 클릭해 시간을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["수동 시간 설정을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["시간 설정을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PC의 시간을 카메라에 자동으로 적용하려면, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "pc_viewer_time_apply",
              product: "cam"
            }), " 옵션을 활성화하세요. 브라우저의 시스템 시간이 카메라에 적용됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "수동 모드와 NTP 자동 동기화는 동시에 활성화할 수 없습니다. 수동 모드를 선택하면 NTP 자동 동기화는 비활성화됩니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "자동-동기화-시간-설정",
      children: "자동 동기화 시간 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NTP 서버를 통해 카메라의 시간을 자동으로 정확하게 유지할 수 있습니다. 장시간 운영할 때 권장됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "basic",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "date_time",
            product: "cam"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "time",
            product: "cam"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ntp_server_sync",
            product: "cam"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-settings-date-time-sync-mode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ntp_address_1",
            product: "cam"
          }), " (필수) 필드에 NTP 서버 주소를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "URL 형식: time.windows.com, time.nist.gov 등"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IP 주소: 192.0.2.1 등"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(선택) 필요하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ntp_address_2",
            product: "cam"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ntp_address_3",
            product: "cam"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ntp_address_4",
            product: "cam"
          }), "에 추가 NTP 서버를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "최대 4개 서버까지 설정할 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "주소 1이 응답하지 않으면 자동으로 다음 서버로 전환됩니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["시간 설정을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "설정 완료 후 카메라는 자동으로 NTP 서버와 동기화되며, 주기적으로 시간을 갱신합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "NTP 서버 우선순위:"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "주소 1 (첫 번째) → 주소 2 → 주소 3 → 주소 4 순서로 연결 시도"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "우선순위 서버가 응답하지 않으면 자동으로 다음 서버를 시도"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "권장 NTP 서버:"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "time.windows.com (Windows 공용 NTP)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "time.nist.gov (NIST 공용 NTP)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "pool.ntp.org (NTP Pool 프로젝트)"
        }), "\n"]
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