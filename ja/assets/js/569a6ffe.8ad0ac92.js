"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["21648"], {
81077: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_update_device_info_mdx_569_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-update-device-info-mdx-569.json
var site_docs_device_vionyx_webserver_update_device_info_mdx_569_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/update-device-info","title":"카메라 정보 업데이트하기","description":"카메라의 이름, 메모, 위치 정보와 GPS 좌표를 입력하여 카메라를 효과적으로 관리하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/update-device-info.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/update-device-info","permalink":"/docs/ja/device/vionyx_webserver/update-device-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/update-device-info.mdx","tags":[],"version":"current","frontMatter":{"id":"update-device-info","title":"카메라 정보 업데이트하기","description":"카메라의 이름, 메모, 위치 정보와 GPS 좌표를 입력하여 카메라를 효과적으로 관리하는 방법을 안내합니다.","keywords":["카메라","정보","이름","위치","GPS","메모"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"시스템 관리하기","permalink":"/docs/ja/device/vionyx_webserver/system-management"},"next":{"title":"펌웨어 업데이트하기","permalink":"/docs/ja/device/vionyx_webserver/update-firmware"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/update-device-info.mdx


const frontMatter = {
	id: 'update-device-info',
	title: '카메라 정보 업데이트하기',
	description: '카메라의 이름, 메모, 위치 정보와 GPS 좌표를 입력하여 카메라를 효과적으로 관리하는 방법을 안내합니다.',
	keywords: [
		'카메라',
		'정보',
		'이름',
		'위치',
		'GPS',
		'메모'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "카메라 기본 정보 확인",
  "id": "카메라-기본-정보-확인",
  "level": 2
}, {
  "value": "카메라 정보 설정",
  "id": "카메라-정보-설정",
  "level": 2
}, {
  "value": "이름 입력",
  "id": "이름-입력",
  "level": 3
}, {
  "value": "메모 추가",
  "id": "메모-추가",
  "level": 3
}, {
  "value": "위치 정보 입력",
  "id": "위치-정보-입력",
  "level": 3
}, {
  "value": "설정 저장",
  "id": "설정-저장",
  "level": 3
}, {
  "value": "GPS 좌표 설정",
  "id": "gps-좌표-설정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 기본 정보를 확인하고, 장치 이름, 설명, 위치 정보를 입력하여 조직에서 여러 대의 카메라를 효과적으로 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 카메라 정보를 업데이트하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설치한 카메라를 조직 내 구별하기 쉬운 이름으로 변경하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라의 위치나 설치 장소에 대한 추가 정보를 입력하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "GPS 좌표를 입력하여 카메라의 정확한 위치를 기록하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "여러 대의 카메라를 관리할 때 카메라마다 특정 메모나 설명을 추가하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "모델명, 시리얼 번호, 하드웨어 버전 등은 읽기 전용 정보로 편집할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카메라 이름, 메모, 위치 정보는 유니코드를 지원하여 한글, 영문, 숫자, 특수문자를 입력할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-기본-정보-확인",
      children: "카메라 기본 정보 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 모델명, 시리얼 번호, 하드웨어 버전 등 기본 정보를 확인하세요."
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
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-system-device-info.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "info",
        product: "cam"
      }), " 섹션에서 아래 기본 정보를 확인할 수 있습니다. 읽기 전용으로 편집할 수 없습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "model",
            product: "cam"
          }), ": 카메라 모델명"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_sn",
            product: "cam"
          }), ": 카메라 시리얼 번호"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "hw_version",
            product: "cam"
          }), ": 하드웨어 버전"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "kernel",
            product: "cam"
          }), ": 커널 버전"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "open_source_license",
            product: "cam"
          }), ": 오픈 소스 라이선스 정보를 확인하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "view",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-정보-설정",
      children: "카메라 정보 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 이름, 메모, 위치 정보를 입력하여 효과적으로 관리하세요."
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
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "이름-입력",
      children: "이름 입력"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라를 식별하기 쉽도록 사용자 정의 이름을 입력하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "name",
        product: "cam"
      }), " 입력란에 카메라 이름을 입력하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최대 64자까지 입력할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["한글, 영문, 숫자, 특수문자(", (0,jsx_runtime.jsx)(_components.code, {
            children: "."
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "("
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: ")"
          }), ")를 포함할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "예: \"입구-1번\", \"회의실-A\" 등"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "입력한 카메라 이름은 시스템 메뉴 및 웹 UI 여러 곳에서 표시되어 카메라를 쉽게 식별할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "메모-추가",
      children: "메모 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라에 대한 추가 정보나 메모를 입력하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "memo",
        product: "cam"
      }), " 입력란에 메모 또는 설명을 입력하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최대 64자까지 입력할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "예: 설치 부서, 관리자 이름, 설치 날짜 등"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "위치-정보-입력",
      children: "위치 정보 입력"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라의 설치 위치를 텍스트로 입력하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "location",
        product: "cam"
      }), " 입력란에 카메라의 설치 위치를 입력하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최대 64자까지 입력할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "예: '1층 로비 입구', '2층 회의실 대기실'"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "설정-저장",
      children: "설정 저장"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["모든 정보를 입력한 후 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "save",
        product: "cam"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gps-좌표-설정",
      children: "GPS 좌표 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 정확한 지리적 위치를 GPS 좌표로 입력하세요."
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
          children: ["GPS 설정을 활성화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "info",
            product: "cam"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "gps",
            product: "cam"
          }), " 토글 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-system-device-info-gps.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "경도와 위도 정보를 입력하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예: 서울 (37.5665, 126.9780)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "GPS 좌표는 십진법(Decimal Degrees, DD) 형식으로 입력해야 합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["GPS 설정을 비활성화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "gps",
              product: "cam"
            }), " 토글 버튼을 다시 클릭하세요."]
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