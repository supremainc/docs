"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["15076"], {
82455: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_view_system_logs_mdx_2a1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-view-system-logs-mdx-2a1.json
var site_docs_device_vionyx_webserver_view_system_logs_mdx_2a1_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/view-system-logs","title":"시스템 로그 확인하기","description":"카메라의 접속, 이벤트, 시스템 로그를 조회하고 내보내는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/view-system-logs.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/view-system-logs","permalink":"/docs/device/vionyx_webserver/view-system-logs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/view-system-logs.mdx","tags":[],"version":"current","frontMatter":{"id":"view-system-logs","title":"시스템 로그 확인하기","description":"카메라의 접속, 이벤트, 시스템 로그를 조회하고 내보내는 방법을 안내합니다.","keywords":["로그","시스템 로그","이벤트 로그","접속 로그","CSV","내보내기"],"isTranslationMissing":false},"sidebar":"aicamwebserver","previous":{"title":"운영자 추가하기","permalink":"/docs/device/vionyx_webserver/add-operators"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/view-system-logs.mdx


const frontMatter = {
	id: 'view-system-logs',
	title: '시스템 로그 확인하기',
	description: '카메라의 접속, 이벤트, 시스템 로그를 조회하고 내보내는 방법을 안내합니다.',
	keywords: [
		'로그',
		'시스템 로그',
		'이벤트 로그',
		'접속 로그',
		'CSV',
		'내보내기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "로그 확인",
  "id": "로그-확인",
  "level": 2
}, {
  "value": "로그 유형",
  "id": "로그-유형",
  "level": 2
}, {
  "value": "로그 내보내기",
  "id": "로그-내보내기",
  "level": 2
}, {
  "value": "로그 보관 및 관리",
  "id": "로그-보관-및-관리",
  "level": 2
}, {
  "value": "로그 자동 삭제",
  "id": "로그-자동-삭제",
  "level": 3
}, {
  "value": "중요 로그 보관 방법",
  "id": "중요-로그-보관-방법",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 다양한 활동 기록을 로그로 확인할 수 있습니다. 사용자 접속 기록, 이벤트 발생 기록, 시스템 운영 기록 등 3가지 로그 유형을 조회하고 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음과 같은 상황에서 로그를 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라에 누가 언제 접속했는지 확인하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 이벤트의 발생 기록을 추적하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 시스템의 부팅, 재부팅 등 주요 작업을 확인하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안 감시 목적으로 접속 기록을 점검하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "문제 해결을 위해 시스템 로그를 수집하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "로그는 장치 메모리 사이즈에 따라 자동으로 보존됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "각 로그 유형의 보존 기간은 약 1개월입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "메모리가 가득 차면 가장 오래된 로그부터 자동 삭제합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "시스템 로그는 관리자와 읽기/쓰기 권한을 가진 운영자만 조회할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "로그-확인",
      children: "로그 확인"
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
            sid: "system_logs",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-system-log.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그 목록 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "log_type",
            product: "cam"
          }), "에서 원하는 로그 유형을 선택할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-system-log-filter.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "previous",
          product: "cam"
        }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "next",
          product: "cam"
        }), " 버튼을 클릭해 로그 페이지를 이동할 수 있습니다. 한 페이지당 최대 50개의 로그 항목이 표시됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "로그-유형",
      children: "로그 유형"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "로그는 다음 3가지 유형으로 구분됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "access",
            product: "cam"
          }), ": 사용자가 카메라 웹 인터페이스에 접속한 기록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "event",
            product: "cam"
          }), ": 이벤트 발생, Webhook 발신, 규칙 실행 등의 기록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "system",
            product: "cam"
          }), ": 카메라의 부팅, 재부팅, 초기화 등 시스템 운영 기록을 확인할 수 있습니다. 이 로그는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "관리자만 조회 가능"
          }), "합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "로그-내보내기",
      children: "로그 내보내기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "로그를 CSV 형식으로 다운로드하여 외부에서 분석하거나 보관할 수 있습니다."
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
            sid: "system_logs",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "log_type",
            product: "cam"
          }), "에서 내보내려는 로그 유형을 선택하세요. 전체를 내보내려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "all_logs",
            product: "cam"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "csv_export",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["확인 메시지가 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전체 기간 동안의 로그 목록을 CSV 파일로 다운로드할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 파일명은 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "system-logs-YYYYMMDD_HHMMSS.csv"
            }), " 형식입니다. 예: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "system-logs-20240326_153000.csv"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "웹 브라우저의 기본 다운로드 폴더에 저장되거나 사용자가 선택한 경로에 저장할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "로그-보관-및-관리",
      children: "로그 보관 및 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "로그-자동-삭제",
      children: "로그 자동 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 메모리 용량이 가득 차면 가장 오래된 로그부터 자동으로 삭제됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "로그 유형"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "보존 기간"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "System Logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "약 1개월"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "약 1개월"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event Logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "약 1개월"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "중요-로그-보관-방법",
      children: "중요 로그 보관 방법"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "중요한 로그를 장기간 보관하고 싶다면 다음과 같이 하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "정기적으로 로그를 CSV로 내보내세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "내보낸 파일을 외부 저장소(NAS, 클라우드 스토리지 등)에 보관하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "파일에 내보낸 날짜와 로그 기간을 명시하세요."
        }), "\n"]
      }), "\n"]
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