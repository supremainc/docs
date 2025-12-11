"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["38549"], {
34075: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    li: "li",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Xclude} = _components;
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
    type: "info",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "구성품은 설치 환경에 따라 달라질 수 있습니다."
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "corestation_20,corestation_40,doorinterface,doormodule,inputmodule,outputmodule,securemodule,extendedmodule,extendedmodule_sc",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "브래킷과 제품을 조립할 때 향상된 보안을 위해 제품 고정용 나사 대신 동봉된 브래킷 고정용 나사(별 모양)를 이용할 수 있습니다."
        }), "\n"]
      })
    })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
29048: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_extendedmodule_sc_getting_started_mdx_e32_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-extendedmodule-sc-getting-started-mdx-e32.json
var site_docs_device_extendedmodule_sc_getting_started_mdx_e32_namespaceObject = JSON.parse('{"id":"device/extendedmodule_sc/getting-started","title":"시작하기","description":"장치 사용을 위한 초기 절차를 안내합니다.","source":"@site/docs/device/extendedmodule_sc/getting-started.mdx","sourceDirName":"device/extendedmodule_sc","slug":"/device/extendedmodule_sc/getting-started","permalink":"/device/extendedmodule_sc/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/extendedmodule_sc/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기","description":"장치 사용을 위한 초기 절차를 안내합니다.","keywords":["구성품","명칭","기능","케이블","커넥터"],"isTranslationMissing":false},"sidebar":"extendedmodule_sc","previous":{"title":"안전을 위한 주의 사항","permalink":"/device/extendedmodule_sc/safety-instructions"},"next":{"title":"설치하기","permalink":"/device/extendedmodule_sc/installation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_getting-started-components-note.mdx
var _getting_started_components_note = __webpack_require__(34075);
;// CONCATENATED MODULE: ./docs/device/extendedmodule_sc/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: '시작하기',
	description: '장치 사용을 위한 초기 절차를 안내합니다.',
	keywords: [
		'구성품',
		'명칭',
		'기능',
		'케이블',
		'커넥터'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*구성품 노트*/



const toc = [{
  "value": "구성품",
  "id": "구성품",
  "level": 2
}, ..._getting_started_components_note/* .toc */.RM, {
  "value": "각 부분의 명칭 및 기능",
  "id": "각-부분의-명칭-및-기능",
  "level": 2
}, {
  "value": "케이블 및 커넥터",
  "id": "케이블-및-커넥터",
  "level": 2
}, {
  "value": "RS-232C",
  "id": "rs-232c",
  "level": 3
}, {
  "value": "RS-485",
  "id": "rs-485",
  "level": 3
}, {
  "value": "USB 확장 포트 연결 케이블",
  "id": "usb-확장-포트-연결-케이블",
  "level": 3
}, {
  "value": "설치 예제",
  "id": "설치-예제",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
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
  }, {Image, Row, Table, Tbody, Td} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "장치 사용을 위한 초기 절차를 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "확장 모듈의 연결은 일반 펌웨어에서 지원되지 않으므로 별도의 커스텀 펌웨어가 필요합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "구성품",
      children: "구성품"
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-extm-sc.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-pinmap-extm-sc.svg",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-screws2.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "확장 모듈"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "핀맵 라벨"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "고정용 나사 x2"
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/cable-rs485-4pin.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/cable-rs485-4pin.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "RS-232C 케이블"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "RS-485 케이블"
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/cable-usb-4pin.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/cable-usb-4pin-short.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "USB 확장 포트 연결 케이블 (BioStation 3)"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "USB 확장 포트 연결 케이블 (BioStation 2a)"
          })]
        })]
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_getting_started_components_note/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "각-부분의-명칭-및-기능",
      children: "각 부분의 명칭 및 기능"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/name-function-each-part-extm-sc.png",
      className: "none",
      width: "80%"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "USB 확장 포트 (5핀)"
          }), ": 장치와 확장 모듈을 연결합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RS-485 (4핀)"
          }), ": RS-485 케이블을 연결합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RS-232C (4핀)"
          }), ": RS-232C 케이블을 연결합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "케이블-및-커넥터",
      children: "케이블 및 커넥터"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-232c",
      children: "RS-232C"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/cable-rs485-4pin.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col3--10-20-70",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "핀"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "명칭"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "색상"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "232 TX"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "파란색"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "232 RX"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노란색"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "232 GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "검은색"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SH GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "회색"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-485",
      children: "RS-485"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/cable-rs485-4pin.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col3--10-20-70",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "핀"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "명칭"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "색상"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "485 TRXP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "파란색"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "485 TRXN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노란색"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "485 GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "검은색"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SH GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "회색"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usb-확장-포트-연결-케이블",
      children: "USB 확장 포트 연결 케이블"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/cable-usb-4pin.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col3--10-20-70",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "핀"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "명칭"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "색상"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MAIN VBUS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "빨간색"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MAIN DM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "흰색"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MAIN DP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "초록색"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NC"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MAIN GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "검은색"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "설치-예제",
      children: "설치 예제"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "확장 모듈의 연결은 일반 펌웨어에서 지원되지 않으므로 별도의 커스텀 펌웨어가 필요합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "슈프리마 장치에 확장 모듈을 장착하면 추가적으로 RS-485와 RS-232C 포트를 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "확장 모듈을 장착할 수 있는 슈프리마 장치는 다음과 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/device/biostation_3/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 3"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/device/biostation_2a/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 2a"
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-example-extm-sc.png",
      className: "none",
      width: "65%"
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