"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["86344"], {
82725: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_live_basic_mdx_a4a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-live-basic-mdx-a4a.json
var site_docs_device_vionyx_webserver_live_basic_mdx_a4a_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/live-basic","title":"라이브 영상 보기","description":"VyOnyx Web Server의 Live 메뉴에서 실시간으로 카메라 영상을 확인하고, 채널과 뷰 모드를 선택하고, 화면을 확대/축소하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/live-basic.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/live-basic","permalink":"/docs/ja/device/vionyx_webserver/live-basic","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/live-basic.mdx","tags":[],"version":"current","frontMatter":{"id":"live-basic","title":"라이브 영상 보기","description":"VyOnyx Web Server의 Live 메뉴에서 실시간으로 카메라 영상을 확인하고, 채널과 뷰 모드를 선택하고, 화면을 확대/축소하는 방법을 안내합니다.","keywords":["실시간","영상","Live","모니터링","뷰 모드"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"사용자 인터페이스 이해하기","permalink":"/docs/ja/device/vionyx_webserver/ui-navigation"},"next":{"title":"AI 이벤트 및 규칙 설정하기","permalink":"/docs/ja/device/vionyx_webserver/configure-ai-events-and-rules"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/live-basic.mdx


const frontMatter = {
	id: 'live-basic',
	title: '라이브 영상 보기',
	description: 'VyOnyx Web Server의 Live 메뉴에서 실시간으로 카메라 영상을 확인하고, 채널과 뷰 모드를 선택하고, 화면을 확대/축소하는 방법을 안내합니다.',
	keywords: [
		'실시간',
		'영상',
		'Live',
		'모니터링',
		'뷰 모드'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Live 뷰 기본 구성",
  "id": "live-뷰-기본-구성",
  "level": 2
}, {
  "value": "채널과 뷰 모드 선택하기",
  "id": "채널과-뷰-모드-선택하기",
  "level": 2
}, {
  "value": "화면 확대 및 축소",
  "id": "화면-확대-및-축소",
  "level": 2
}, {
  "value": "전체 화면 모드",
  "id": "전체-화면-모드",
  "level": 2
}, {
  "value": "영상이 재생되지 않을 때",
  "id": "영상이-재생되지-않을-때",
  "level": 2
}, {
  "value": "네트워크 연결 확인",
  "id": "네트워크-연결-확인",
  "level": 3
}, {
  "value": "재연결 표시",
  "id": "재연결-표시",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
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
  }, {Cmd, Image, Kbd, Num} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  if (!Num) _missingMdxReference("Num", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["VyOnyx Web Server의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "live",
        product: "cam"
      }), " 메뉴에서는 카메라가 촬영 중인 영상을 실시간으로 확인할 수 있습니다. 원하는 채널과 뷰 모드를 선택하고, 화면을 확대하거나 전체 화면으로 볼 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "live-뷰-기본-구성",
      children: "Live 뷰 기본 구성"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "live",
        product: "cam"
      }), " 메뉴에 처음 진입하면 다음과 같은 기본 상태로 영상이 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/vionyx-live-basic.png"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "menu-icon-table",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "항목"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "구성 요소"
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
              children: (0,jsx_runtime.jsx)(Num, {
                num: "1"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/cam-server/ico-content-ai-hide.svg",
                width: "100%",
                alone: true,
                className: "none"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "AI 기능이 비활성화된 상태입니다. 아이콘을 클릭해 AI 기능을 활성화할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Num, {
                num: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CH"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "채널에 따라 제공하는 뷰 모드를 선택할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Num, {
                num: "3"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/cam-server/ico-content-full.svg",
                alone: true,
                className: "none"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "촬영 중인 영상을 전체 화면으로 볼 수 있습니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "채널과-뷰-모드-선택하기",
      children: "채널과 뷰 모드 선택하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VyOnyx Web Server는 여러 채널과 다양한 뷰 모드를 제공합니다. 화면 아래의 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "CH"
      }), " 드롭다운 메뉴에서 원하는 채널과 뷰 모드를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/vionyx-live-basic-select-ch.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "지원하는 채널과 뷰 모드"
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table--viewmode",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "채널"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "뷰 모드"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "예시"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "1ch"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fisheye (Main/Sub)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "기본 채널의 원본 피시아이 렌즈 영상"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/cam-server/vionyx-live-basic-fisheye-view-mode.png",
                width: "50%",
                alone: true
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "2ch"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Quad (Main/Sub)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "파노라마 뷰 채널의 4분할 뷰"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/cam-server/vionyx-live-basic-quad-view-mode.png",
                width: "50%",
                alone: true
              })
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "각 채널의 Main과 Sub는 서로 다른 해상도의 스트림을 제공합니다. Main은 고화질, Sub는 저화질 스트림입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "위 이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "화면-확대-및-축소",
      children: "화면 확대 및 축소"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "마우스를 사용해 화면을 확대하고 축소할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스크롤 업(위로): 화면 확대(줌 인)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스크롤 다운(아래로): 화면 축소(줌 아웃)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "더블클릭: 원래 크기로 복귀(1배)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "1배 ~ 8배까지 화면을 확대할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "화면 확대는 디지털 줌이므로, 높은 배율로 확대하면 영상이 흐릿해질 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "전체-화면-모드",
      children: "전체 화면 모드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["더 큰 영상을 확인하려면 전체 화면 모드를 사용하세요. 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Image, {
        src: "/img/cam-server/ico-content-full.svg",
        alone: true,
        className: "none",
        ico: true
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/vionyx-live-basic-full-screen.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전체 화면 모드에서도 뷰 모드 변경, 줌 기능을 계속 사용할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["전체 화면 모드를 종료하려면 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "ESC"
          }), " 키를 누르거나 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/cam-server/ico-content-full.svg",
            alone: true,
            className: "none",
            ico: true
          }), " 버튼을 다시 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "영상이-재생되지-않을-때",
      children: "영상이 재생되지 않을 때"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "네트워크-연결-확인",
      children: "네트워크 연결 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 영상이 로드되지 않는다면 다음 단계를 따라 네트워크 연결 상태를 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라와 네트워크 연결 상태를 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["웹 브라우저에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "새로고침(F5)"
          }), " 버튼을 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시스템이 자동으로 재연결을 시도합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "재연결-표시",
      children: "재연결 표시"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["네트워크 연결이 끊어지면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connection lost. Reconnecting..."
      }), " 메시지가 표시되며, 시스템이 자동으로 재연결을 시도합니다. 재연결에 실패하면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "retry",
        product: "cam"
      }), " 버튼이 표시됩니다. 버튼을 클릭해 다시 연결을 시도할 수 있습니다."]
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