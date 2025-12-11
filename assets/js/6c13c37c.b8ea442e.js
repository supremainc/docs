"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["36771"], {
39500: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_xpass_2_release_notes_142_mdx_6c1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-xpass-2-release-notes-142-mdx-6c1.json
var site_docs_device_xpass_2_release_notes_142_mdx_6c1_namespaceObject = JSON.parse('{"id":"device/xpass_2/release-notes/142","title":"펌웨어 버전 1.4.2","description":"릴리즈2024-10-28","source":"@site/docs/device/xpass_2/release-notes/142.mdx","sourceDirName":"device/xpass_2/release-notes","slug":"/device/xpass_2/release-notes/142","permalink":"/device/xpass_2/release-notes/142","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xpass_2/release-notes/142.mdx","tags":[],"version":"current","frontMatter":{"id":"142","title":"펌웨어 버전 1.4.2","isTranslationMissing":false},"sidebar":"xpass2","previous":{"title":"펌웨어 버전 1.4.3","permalink":"/device/xpass_2/release-notes/143"},"next":{"title":"펌웨어 버전 1.4.1","permalink":"/device/xpass_2/release-notes/141"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/xpass_2/release-notes/142.mdx


const frontMatter = {
	id: 142,
	title: '펌웨어 버전 1.4.2',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.4.2 (빌드 번호 1.4.2_241025)';

const assets = {

};



const toc = [{
  "value": "신규 기능 및 개선",
  "id": "신규-기능-및-개선",
  "level": 2
}, {
  "value": "버그 수정",
  "id": "버그-수정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "펌웨어-버전-142-빌드-번호-142_241025",
        children: "펌웨어 버전 1.4.2 (빌드 번호 1.4.2_241025)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2024-10-28"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "신규 BLE 칩이 적용된 장치의 경우 펌웨어를 v1.3.1 이상으로 업그레이드 한 뒤 하위 버전으로 다운그레이드 할 수 없습니다. 기존 BLE 칩이 적용된 장치는 하위 버전으로 다운그레이드 할 수 있습니다."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치의 신규 BLE 칩 적용 여부 및 펌웨어 다운그레이드 가능 여부는 장치의 시리얼 번호를 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://supremainc.com",
          children: "슈프리마 홈페이지"
        }), "에 문의하십시오."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Device Manager 애플리케이션을 통한 장치 펌웨어 업그레이드 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "슬레이브 장치의 전송 속도를 설정할 수 있는 기능 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SDK에서 GetLogWithFilter 함수를 이용해 사용자 정보 업데이트 성공 이벤트 로그를 가져올 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RS-485 통신 품질 개선"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 로그가 가득 찬 상태에서 새로운 이벤트가 발생하는 경우 새로 생성된 이벤트와 함께 의도치 않은 로그를 가져오는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 iOS에서 Device Manager 애플리케이션 v1.1.8 실행 시 장치가 연결되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "키패드로 카드 ID 입력"
            }), " 옵션이 활성화된 상태에서 키패드를 사용해 등록되지 않은 카드 ID를 입력했을 때 이벤트 로그에 카드 ID 값이 다르게 기록되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 서버와 연결되지 않은 상태에서 32자리 사용자 ID를 가진 사용자가 장치에 인증했을 경우, 장치가 서버와 다시 연결된 후에도 BioStar 2에 인증 이벤트 로그가 업데이트되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["32자로 저장된 사용자 ID가 특정 이벤트 로그에서 31자까지만 표기되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어 업그레이드 후 기존에 사용 중이던 카드가 인증에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "서버와 시간 동기화"
            }), " 옵션을 해제한 후 장치의 시간을 변경할 경우 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485"
            }), " 모드가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "슬레이브"
            }), "로 설정된 상태에서 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "바이트 순서"
            }), "가 설정한대로 저장되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "슈프리마 스마트 카드 레이아웃"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "기본 사이트 키"
            }), "만 설정되어 있고, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "보조 사이트 키"
            }), "만 설정된 상태에서 장치를 재시작할 경우, 장치가 커스텀 스마트 카드를 CSN 카드로 인식하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["신규 SE 칩 펌웨어를 사용하는 환경에서 일부 스마트 카드 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "보조 사이트 키"
            }), "로 설정된 DESFire 스마트 카드가 CSN 카드로 인식되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DESFire 고급 설정"
            }), "을 사용하여 설정된 커스텀 스마트 카드가 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
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