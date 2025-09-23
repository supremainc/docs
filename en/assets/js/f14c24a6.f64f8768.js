"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1430"], {
82601: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (MDXContent),
  d$: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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
      product: "corestation_20,corestation_40,doorinterface",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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
53530: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_device_corestation_40_getting_started_mdx_f14_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-corestation-40-getting-started-mdx-f14.json
var site_docs_device_corestation_40_getting_started_mdx_f14_namespaceObject = JSON.parse('{"id":"device/corestation_40/getting-started","title":"시작하기","description":"장치 사용을 위한 초기 절차를 안내합니다.","source":"@site/docs/device/corestation_40/getting-started.mdx","sourceDirName":"device/corestation_40","slug":"/device/corestation_40/getting-started","permalink":"/docs/en/device/corestation_40/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_40/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기","description":"장치 사용을 위한 초기 절차를 안내합니다.","keywords":["구성품","명칭","기능","케이블","커넥터"],"isTranslationMissing":true},"sidebar":"corestation40","previous":{"title":"안전을 위한 주의사항","permalink":"/docs/en/device/corestation_40/safety-instructions"},"next":{"title":"설치하기","permalink":"/docs/en/device/corestation_40/installation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
// EXTERNAL MODULE: ./docs/common/_getting-started-components-note.mdx
var _getting_started_components_note = __webpack_require__(82601);
;// CONCATENATED MODULE: ./docs/device/corestation_40/getting-started.mdx


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
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "구성품",
  "id": "구성품",
  "level": 2
}, ..._getting_started_components_note/* toc */.d$, {
  "value": "액세서리",
  "id": "액세서리",
  "level": 2
}, {
  "value": "각 부분의 명칭 및 기능",
  "id": "각-부분의-명칭-및-기능",
  "level": 2
}, {
  "value": "통신 상태 LED",
  "id": "통신-상태-led",
  "level": 3
}, {
  "value": "출입통제 등급",
  "id": "출입통제-등급",
  "level": 3
}, {
  "value": "CoreStation 상태 LED",
  "id": "corestation-상태-led",
  "level": 3
}, {
  "value": "설치 예제",
  "id": "설치-예제",
  "level": 3
}, {
  "value": "시스템 구성도",
  "id": "시스템-구성도",
  "level": 3
}, {
  "value": "전체 연결 구성도",
  "id": "전체-연결-구성도",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image, Magnify, PageBreak, Row, Table, Tbody, Td} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Magnify) _missingMdxReference("Magnify", true);
  if (!PageBreak) _missingMdxReference("PageBreak", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "장치 사용을 위한 초기 절차를 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "구성품",
      children: "구성품"
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            rowspan: 3,
            colspan: 2,
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-device-cs40.svg",
              className: "none",
              height: 350,
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-quick-guide.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsx)(Row, {
          className: "center",
          children: (0,jsx_runtime.jsx)(Td, {
            children: "퀵 가이드"
          })
        }), (0,jsx_runtime.jsx)(Row, {
          className: "center white",
          children: (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-oss-guide.svg",
              className: "none",
              alone: true
            })
          })
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            colspan: 2,
            children: "CoreStation 40"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "오픈소스라이선스 가이드"
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-screws12.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-spacer6.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-diode4.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "고정용 나사 x12"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "스페이서 x6"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "다이오드 x4"
          })]
        })]
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_getting_started_components_note/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "액세서리",
      children: "액세서리"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이 제품은 액세서리로 함체(ENCR-10)를 함께 구매할 수 있습니다. 함체에는 전원 상태 LED 보드, 전원 분배 보드, 전원 공급 장치, 탬퍼가 포함되어 있습니다. CoreStation을 함체에 설치하는 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "installation#install-enclosure",
        children: "함체 설치"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/component-encr10.svg",
      width: "30%",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ENCR-10은 벽에 고정하여 사용할 수 있도록 설계되었습니다. 설치 높이에 제한 없이 안전하고 사용하기에 편리한 위치에 설치하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ENCR-10 구성품에는 함체 고정용 나사, CoreStation 고정용 나사, 전원 장치 연결용 나사가 포함되어 있습니다. 각 나사의 용도에 맞추어 올바르게 사용하세요."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "함체 고정용 나사(직경: 4 mm, 길이: 25 mm) x 4"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "CoreStation 고정용 나사(직경: 3 mm, 길이: 5 mm) x 6"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "전원 장치 케이블 고정용 나사(직경: 3 mm, 길이: 8 mm) x 1"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "각-부분의-명칭-및-기능",
      children: "각 부분의 명칭 및 기능"
    }), "\n", (0,jsx_runtime.jsx)(Magnify, {
      src: "/img/device/product-part-cs40.svg",
      width: "100%",
      zoomFactor: .4,
      mgWidth: 500,
      mgHeight: 500
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "No."
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "이름"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "No."
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "이름"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "HOST RS-485"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RESET"
            }), " 버튼"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "HOST RS-485"
            }), " 종단 저항 스위치"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "21"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "AUX IN (0, 1)"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "INIT"
            }), " 버튼"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CoreStation 전원 연결(DC 12V IN)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ETHERNET"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "23"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RELAY 3"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RELAY 1"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "24"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SUPERVISED INPUT (6:7)"
            }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input (6:7)"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SUPERVISED INPUT (2:3)"
            }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input (2:3)"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "25"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "OUTPUT (6:7)"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "OUTPUT (2:3)"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "26"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "WIEGAND 3"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "WIEGAND 1"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12VDC 출력"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12VDC 출력"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "28"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485 3"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485 1"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "29"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485 3"
            }), " 종단 저항 스위치"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485 1"
            }), " 종단 저항 스위치"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CoreStation 상태 LED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RELAY 0"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "31"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RELAY 2"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SUPERVISED INPUT (0:1)"
            }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input (0:1)"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "32"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SUPERVISED INPUT (4:5)"
            }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input (4:5)"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "OUTPUT (0:1)"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "33"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "OUTPUT (4:5)"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "15"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "WIEGAND 0"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "34"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "WIEGAND 2"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12VDC 출력"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12VDC 출력"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "17"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485 0"
            }), " 연결"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "36"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485 2"
            }), " 연결"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "18"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485 0"
            }), " 종단 저항 스위치"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "37"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485 2"
            }), " 종단 저항 스위치"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTC 배터리"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치와 연동된 제품을 초기화한 뒤 다른 장치에 연결하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "INIT"
            }), " 버튼을 2초 이상 누르세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "제품과 Wiegand 장치를 연결할 때 Wiegand 장치의 전원으로 제품의 전원 출력(12V, 최대 1.5A)을 사용할 수 있습니다. 200mA를 소모하는 Wiegand 장치를 3대 연결하면 남아 있는 전원 출력 단자에 최대 900mA를 소모하는 장치를 연결할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "RTC 배터리 용량은 226mah이며, 기대 수명은 설치 환경 및 동작 방법에 따라 다를 수 있습니다. RTC 배터리 교체 시에는 CR2032를 준수하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "통신-상태-led",
      children: "통신 상태 LED"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "LED"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "상태"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HOST RS-485 TX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "주황색 점멸: RS-485 데이터를 송신 중인 상태"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HOST RS-485 RX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "초록색 점멸: RS-485 데이터를 수신 중인 상태"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RELAY (0 ~ 3)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색 점등: 릴레이 동작"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "2",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SUPERVISED INPUT (0 ~ 7)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Input을 사용할 때", (0,jsx_runtime.jsx)("br", {}), "- 초록색 점등: Normal Close", (0,jsx_runtime.jsx)("br", {}), "- 꺼짐: Normal Open"]
          })]
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Supervised Input을 사용할 때", (0,jsx_runtime.jsx)("br", {}), "- 초록색 점등: Normal Close(합선), Normal Open, 스위치 켜짐", (0,jsx_runtime.jsx)("br", {}), "- 꺼짐: 스위치 꺼짐"]
          })
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AUX IN (0, 1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "주황색 점등: AUX 신호를 수신 중인 상태"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "출입통제-등급",
      children: "출입통제 등급"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "기능"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "등급"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destructive Attack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ⅰ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Line Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ⅰ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Endurance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ⅳ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standby Power"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ⅰ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single Point Locking Device with Key Locks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ⅰ"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "corestation-상태-led",
      children: "CoreStation 상태 LED"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation의 상태는 제품 전면부의 왼쪽에 위치한 STATUS LED 1 / 2로 확인할 수 있으며, 이더넷, RS-485 0, RS-485 1, RS-485 2, RS-485 3, RS-485 HOST, 시스템의 상태를 1초씩 순서대로 보여줍니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "항목"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LED 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LED 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "상태"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "6",
            children: "이더넷"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "유동 IP 연결 실패"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "유동 IP 연결 대기 중"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "하늘색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "고정 IP 연결 성공"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "유동 IP 연결 성공"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "자홍색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "고정 IP 연결 실패"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "꺼짐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HW 오류"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "4",
            children: "RS-485 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 없음"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 연결 해제"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 정상"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "꺼짐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HW 오류"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "4",
            children: "RS-485 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "초록색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 없음"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "초록색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 연결 해제"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "초록색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 정상"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "초록색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "꺼짐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HW 오류"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "4",
            children: "RS-485 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "하늘색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 없음"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "하늘색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 연결 해제"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "하늘색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 정상"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "하늘색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "꺼짐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HW 오류"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "4",
            children: "RS-485 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 없음"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 연결 해제"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 정상"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "꺼짐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HW 오류"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "4",
            children: "RS-485 HOST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "자홍색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 없음"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "자홍색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 연결 해제"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "자홍색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "슬레이브 장치 정상"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "자홍색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "꺼짐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HW 오류"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "8",
            children: "시스템"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "흰색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "빨간색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "시스템 잠금 (장치의 작업 조건 및 동작)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "흰색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "노란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "시스템 잠금 (BioStar 2의 작업 조건 및 동작)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "흰색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "초록색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BioStar 2 연결 성공"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "흰색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "하늘색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BioStar 2 연결 성공 + 탬퍼 켜짐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "흰색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "파란색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "탬퍼 켜짐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "흰색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "자홍색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "시스템 잠금 (장치의 작업 조건 및 동작) + 탬퍼 켜짐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "흰색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "흰색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "시스템 잠금 (BioStar 2의 작업 조건 및 동작) + 탬퍼 켜짐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "자홍색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "자홍색"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "데이터베이스 마이그레이션 동작 중"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "설치-예제",
      children: "설치 예제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation은 바이오메트릭 인증을 수행할 수 있는 중앙 집중식 출입통제 시스템입니다. 엔터프라이즈급 시스템용으로 설계된 CoreStation은 최대 500,000 명의 사용자 정보를 저장할 수 있으며, 초당 400,000 지문 매칭을 수행할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar 2와 연동하여 출입통제와 근태관리를 모두 사용할 수 있으며, RS-485(OSDP), Wiegand, Suprevised input, AUX와 같은 다양한 인터페이스를 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-example-cs40.png",
      width: "80%",
      className: "none print"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "시스템-구성도",
      children: "시스템 구성도"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation 20은 3개의 RS-485 포트를 지원하며, Door Interface를 데이지 체인으로 연결하면 최대 34개의 출입문을 구성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/system-configuration-cs40.svg",
      width: "100%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "전체-연결-구성도",
      children: "전체 연결 구성도"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "안정적인 CoreStation의 사용을 위해 전용 함체를 사용할 것을 권장합니다. 함체에는 LED 제어 보드, 전원 제어 보드, 전원 장치, 배터리, 탬퍼가 포함되어 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/cs40-led-status.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/cs40-wiring.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "A 스위치로 제어되는 소켓에 연결하지 마세요."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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