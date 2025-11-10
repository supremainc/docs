"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["69952"], {
83544: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "공장 초기화",
  "id": "factory-reset",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "factory-reset",
      children: "공장 초기화"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "장치에 저장된 모든 정보와 루트 인증서를 삭제하고 설정을 초기화합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "전원을 켜세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "초기화 버튼을 빠르게 세 번 누르세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["장치의 LED가 ", props.name, "으로 깜박거릴 때 초기화 버튼을 한 번 더 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "장치에 저장된 루트 인증서가 존재하지 않을 경우 공장 초기화를 진행할 수 없습니다."
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



}),
51221: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_bioentry_r_2_installation_mdx_a35_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-bioentry-r-2-installation-mdx-a35.json
var site_docs_device_bioentry_r_2_installation_mdx_a35_namespaceObject = JSON.parse('{"id":"device/bioentry_r2/installation","title":"설치하기","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","source":"@site/docs/device/bioentry_r2/installation.mdx","sourceDirName":"device/bioentry_r2","slug":"/device/bioentry_r2/installation","permalink":"/docs/en/device/bioentry_r2/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/bioentry_r2/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"설치하기","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","keywords":["브래킷","전원","네트워크","입력","릴레이","독립형","Secure I/O","Wiegand"],"isTranslationMissing":true},"sidebar":"bioentryr2","previous":{"title":"시작하기","permalink":"/docs/en/device/bioentry_r2/getting-started"},"next":{"title":"제품 사양","permalink":"/docs/en/device/bioentry_r2/product-specifications"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_device-factory-reset.mdx
var _device_factory_reset = __webpack_require__(83544);
;// CONCATENATED MODULE: ./docs/device/bioentry_r2/installation.mdx


const frontMatter = {
	id: 'installation',
	title: '설치하기',
	description: '설치에 필요한 전체 과정과 연결 예시를 제공합니다.',
	keywords: [
		'브래킷',
		'전원',
		'네트워크',
		'입력',
		'릴레이',
		'독립형',
		'Secure I/O',
		'Wiegand'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};

/*## 공장 초기화*/



const toc = [{
  "value": "브래킷 및 제품 고정",
  "id": "브래킷-및-제품-고정",
  "level": 2
}, {
  "value": "전원 연결",
  "id": "전원-연결",
  "level": 2
}, {
  "value": "RS-485 연결 초기화",
  "id": "rs485-reset",
  "level": 2
}, {
  "value": "RS-485 전송 속도 재설정",
  "id": "rs-485-전송-속도-재설정",
  "level": 2
}, ..._device_factory_reset/* .toc */.RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Column, Columns, Image} = _components;
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "설치에 필요한 전체 과정과 연결 예시를 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "브래킷-및-제품-고정",
      children: "브래킷 및 제품 고정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제공된 드릴링 템플릿을 이용하여 제품을 장착할 위치를 정하세요. 제품을 장착할 위치에 고정용 나사를 이용하여 브래킷을 단단히 고정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device1-bep2.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "제품을 콘크리트 벽에 설치할 경우 드릴로 구멍을 뚫어 PVC 앵커를 끼운 뒤 고정용 나사로 고정하세요."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "RF 신호 간섭을 피하기 위해 최소 이격 거리를 확인하여 설치하세요."
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/installation-wall1-bep2.png",
                className: "none",
                width: "50%"
              }), (0,jsx_runtime.jsx)("div", {
                className: "overflow-x",
                children: (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "벽 두께"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "거리"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "100 mm"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "250 mm"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "120 mm"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "250 mm"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "150 mm"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "180 mm"
                      })]
                    })]
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(Column, {
              className: "text--center",
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/device/installation-wall2-bep2.png",
                className: "none",
                width: "50%"
              })
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "고정된 브래킷 위에 제품을 장착하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device2-bep2.png",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제품 고정용 나사를 돌려 제품과 브래킷을 조립하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device3-bep2.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "브래킷과 제품을 조립할 때 향상된 보안을 위해 제품 고정용 나사 대신 동봉된 브래킷 고정용 나사(별 모양)를 이용할 수 있습니다."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "전원-연결",
      children: "전원 연결"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-power-connection-ber2.png",
      width: "60%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "전원 어댑터는 IEC/EN 62368-1 승인을 받은 제품으로 단말기의 소모 전력 이상의 제품을 사용하세요. 전원 어댑터에 다른 기기를 연결하여 사용하려면 단말기의 소모 전력과 다른 기기에 필요한 소모 전력을 합한 전류 용량 이상의 어댑터를 사용해야 합니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["최대 소모전류 규격은 제품 사양의 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "product-specifications#specs.power",
                children: "전원"
              }), "을 참고하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "전원 어댑터를 사용할 경우 전원 케이블의 길이를 임의로 연장하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Secure I/O 2, 전기정(전기식 잠금장치), 제품은 반드시 개별 전원을 사용하세요. 전원을 함께 연결하여 사용하면 장치가 오작동할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "RS-485 케이블은 AWG24, 꼬임선(Twisted Pair), 최대 길이 1.2 km를 사용하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "RS-485 케이블은 특성 임피던스가 120 Ω인 케이블을 사용하는 것을 권장합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "RS-485 데이지 체인으로 연결할 경우 종단 저항(120Ω)을 데이지 체인 연결의 양 끝에 연결하세요. 중간 선로에 연결할 경우 신호 레벨이 작아져 통신 성능이 떨어지므로 반드시 데이지 체인 연결의 양 끝에 연결하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 또는 XPass 2가 마스터 장치로 연결될 경우 카드 인증만 사용할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rs485-reset",
      children: "RS-485 연결 초기화"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전원을 켜세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "초기화 버튼을 1초 이상 누르세요. LED가 초록색으로 표시됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비프음이 울리면 RS-485 연결 초기화가 완료됩니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "마스터 장치에 이미 연결된 장치를 다른 마스터 장치에 연결하려면 해당 장치의 RS-485 연결을 초기화해야 합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rs-485-전송-속도-재설정",
      children: "RS-485 전송 속도 재설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "원하는 통신 속도를 선택하여 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전원을 켜세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "초기화 버튼을 2초 이상 누르세요. 설정 모드로 진입하면 LED가 초록색으로 깜빡입니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치의 LED가 초록색으로 깜빡일 때, 초기화 버튼을 원하는 횟수만큼 누르세요. 누른 횟수에 따라 전송 속도가 설정되며, LED 색상으로 설정된 속도를 확인할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)("div", {
          className: "overflow-x",
          children: (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "누름 횟수"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "전송 속도"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "LED 색상"
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
                  children: "9600"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "하늘색"
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
                  children: "19200"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "파란색"
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
                  children: "38400"
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
                  children: "4"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "57600"
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
                  children: "5"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "115200"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "빨간색"
                })]
              })]
            })]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설정한 전송 속도의 LED 색상이 5초 동안 깜빡입니다. 비프음이 울리면 전송 속도 설정이 완료됩니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "설정 모드 진입 후 초기화 버튼을 누르지 않으면 전송 속도가 자동으로 115200으로 설정됩니다."
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_factory_reset/* ["default"] */.Ay, {
      name: "초록색"
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