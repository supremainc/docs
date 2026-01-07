"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["26171"], {
20848: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_e_200_qr_scanner_mdx_5e9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-e-200-qr-scanner-mdx-5e9.json
var site_docs_platform_biostar_air_e_200_qr_scanner_mdx_5e9_namespaceObject = JSON.parse('{"id":"platform/biostar_air/e200-qr-scanner","title":"E200 QR Scanner 배선 및 구성","description":"최적의 성능을 위해 BioStar Air 장치의 배선 및 구성 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/e200-qr-scanner.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/e200-qr-scanner","permalink":"/docs/ja/platform/biostar_air/e200-qr-scanner","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/e200-qr-scanner.mdx","tags":[],"version":"current","frontMatter":{"id":"e200-qr-scanner","title":"E200 QR Scanner 배선 및 구성","description":"최적의 성능을 위해 BioStar Air 장치의 배선 및 구성 방법을 안내합니다.","keywords":["배선","구성","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"BioStation 3 SIP 인터폰","permalink":"/docs/ja/platform/biostar_air/sip-intercom-for-biostation3"},"next":{"title":"IP 카메라 지원 및 설정","permalink":"/docs/ja/platform/biostar_air/ip-camera-support-and-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/e200-qr-scanner.mdx


const frontMatter = {
	id: 'e200-qr-scanner',
	title: 'E200 QR Scanner 배선 및 구성',
	description: '최적의 성능을 위해 BioStar Air 장치의 배선 및 구성 방법을 안내합니다.',
	keywords: [
		'배선',
		'구성',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Step 1: 배선",
  "id": "wiring",
  "level": 2
}, {
  "value": "Step 2: QR 리더기 활성화",
  "id": "enable-qr-reader",
  "level": 2
}, {
  "value": "Step 3: QR 스캐너 구성",
  "id": "configure-qr-scanner",
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
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "wiring",
      children: "Step 1: 배선"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같이 동봉된 어댑터 케이블을 사용하여 E200 시리즈 QR 스캐너를 연결하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["녹색 단자 블록에는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1에서 4"
          }), "까지 라벨이 붙은 핀이 있으며, 커넥터의 앞면을 바라볼 때 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "오른쪽에서 왼쪽"
          }), "으로 배치됩니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "Pin"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "배선색"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "기능"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Black"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Negative / Ground"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Red"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Positive (V+)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Yellow (white stripe)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXN"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Blue (white stripe)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXP"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "다른 많은 커넥터와는 배선 방향이 정반대입니다. 배선하기 전에 방향을 다시 한 번 확인하세요."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["QR 스캐너 하단의 CON 포트에 4핀 커넥터를 연결하세요. 이 커넥터는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "편극성"
          }), "(홈이 있음)이므로 한 방향으로만 맞습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-hardware-qr-reader-diagram.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable-qr-reader",
      children: "Step 2: QR 리더기 활성화"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air 포털"
          }), "(웹 또는 앱)에 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 E200 QR 스캐너를 연결한 장치를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_device_info",
            product: "air"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_qr_reader",
            product: "air"
          }), " 옵션을 활성화하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-details-qr-reader.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경 사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "QR 리더기를 활성화하면 동일한 리더기에서 다른 RS-485 연결 장치(예, SIO2)를 사용할 수 없습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configure-qr-scanner",
      children: "Step 3: QR 스캐너 구성"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["기본적으로 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "E200 QR 스캐너"
      }), "는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "115,200"
      }), "의 전송 속도로 설정되어 있습니다. 슈프리마 장치와 함께 사용하려면 전송 속도를 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9,600"
      }), "으로 변경해야 합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["QR 스캐너를 장치에 연결하고 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "아래 바코드를 스캔"
      }), "하여 새로운 전송 속도를 적용하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-hardware-qr-reader-barcode.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["배선이 올바르고 슈프리마 장치가 네트워크에 연결되어 있다면, BioStar Air를 통해 제공된 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "다이나믹 QR 크리덴셜"
      }), "을 사용할 수 있습니다."]
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