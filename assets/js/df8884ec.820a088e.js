"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16922"], {
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
56157: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_xpass_d_2_getting_started_mdx_df8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-xpass-d-2-getting-started-mdx-df8.json
var site_docs_device_xpass_d_2_getting_started_mdx_df8_namespaceObject = JSON.parse('{"id":"device/xpass_d2/getting-started","title":"시작하기","description":"장치 사용을 위한 초기 절차를 안내합니다.","source":"@site/docs/device/xpass_d2/getting-started.mdx","sourceDirName":"device/xpass_d2","slug":"/device/xpass_d2/getting-started","permalink":"/device/xpass_d2/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xpass_d2/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기","description":"장치 사용을 위한 초기 절차를 안내합니다.","keywords":["구성품","명칭","기능","케이블","커넥터"],"isTranslationMissing":false},"sidebar":"xpassd2","previous":{"title":"안전을 위한 주의 사항","permalink":"/device/xpass_d2/safety-instructions"},"next":{"title":"설치하기","permalink":"/device/xpass_d2/installation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_getting-started-components-note.mdx
var _getting_started_components_note = __webpack_require__(34075);
;// CONCATENATED MODULE: ./docs/device/xpass_d2/getting-started.mdx


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
  "value": "케이블",
  "id": "케이블",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {Badge, Column, Columns, Image, Row, Table, Tbody, Td} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
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
    }), "\n", (0,jsx_runtime.jsxs)(Table, {
      className: "component",
      children: [(0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-device-xpd2-mdb.svg",
              className: "none",
              width: 90,
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-wall-bracket-xpd2-mdb.svg",
              className: "none",
              width: 80,
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-device-xpd2-gdb.svg",
              className: "none",
              width: 100,
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-wall-bracket-xpd2-gdb.svg",
              className: "none",
              width: 90,
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "XPass D2 멀리언 타입 (XPD2-MDB)"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "벽걸이용 브래킷 (XPD2-MDB)"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "XPass D2 갱 박스 타입 (XPD2-GDB)"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "벽걸이용 브래킷 (XPD2-GDB)"
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-device-xpd2-gkdb.svg",
              className: "none",
              width: 100,
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-wall-bracket-xpd2-gkdb.svg",
              className: "none",
              width: 90,
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-fixing-screws2.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-bracket-fixing-screw.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "XPass D2 키패드 타입 (XPD2-GKDB)"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "벽걸이용 브래킷 (XPD2-GKDB)"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "고정용 나사 x2"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "브래킷 고정용 나사(별 모양)"
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-resistor.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-shrink-tube.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-quick-guide.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-oss-guide.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "120 Ω 저항"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "수축 튜브"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "퀵 가이드"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "오픈소스라이선스 가이드"
          })]
        })]
      })]
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_getting_started_components_note/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "각-부분의-명칭-및-기능",
      children: "각 부분의 명칭 및 기능"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/name-function-each-part-xpd2.png",
      width: "80%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LED 상태 표시등"
          }), ": 제품의 작동 상태가 표시됩니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "초록색: 인증 성공"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "빨간색: 인증 실패"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "파란색/하늘색 점멸: 정상 동작 상태"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "파란색/초록색 점멸: 네트워크 설정 초기화 시"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "초록색 점멸: 입력 대기 상태"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "초록색/흰색 점멸: 슈프리마 AirFob Pass (BLE) 애플리케이션과 연결 중인 상태"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "흰색 점멸: Device Manager 애플리케이션과 연결 중인 상태"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RF 카드 및 모바일 출입카드 인식부"
          }), ": 출입을 위해 RF 카드 또는 모바일 출입카드를 인식시키는 부분입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "모바일 출입카드 인식부"
          }), ": 출입을 위해 모바일 출입카드를 인식시키는 부분입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "초기화 버튼"
          }), ": 장치에 저장된 모든 정보와 인증서를 삭제하고 설정을 초기화합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "installation#factory-reset",
            children: "공장 초기화"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "케이블"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전원 / RS-485 / Wiegand 출력 / LED 입력 / Beep 입력 / 탬퍼"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "키패드"
          }), ": ", (0,jsx_runtime.jsx)(Badge, {
            only: true,
            children: "XPD2-GKDB"
          }), " 카드 ID를 직접 입력하여 인증할 때 사용합니다. 직접 입력 방식으로 인증하려면 BioStar X에서 인증 방법 설정을 변경하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "0~9"
              }), ": 숫자를 입력할 때 사용합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-star.svg",
                ico: true,
                alone: true
              }), ": Wiegand 카드 ID를 입력할 때 FC 코드와 ID를 구분하기 위해 사용합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-pound.svg",
                ico: true,
                alone: true
              }), ": 입력을 종료할 때 사용합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "케이블",
      children: "케이블"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/cables-layout-xpd2.png",
          className: "none",
          width: 500,
          alone: true
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "핀"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "명칭"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "색상"
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
                style: {
                  textAlign: "center"
                },
                children: "PWR +VDC"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "빨간색"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "GND"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "검은색 (흰띠)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "485 TRXN"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "노란색 (검은띠)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "485 TRXP"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "파란색 (흰띠)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "5"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "WG D0"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "초록색"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "6"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "WG D1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "흰색"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "7"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "LED RED"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "주황색"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "8"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "LED GRN"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "갈색"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "9"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "BEEP"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "보라색"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "10"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "TMPR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "회색"
              })]
            })]
          })]
        })
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