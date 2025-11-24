"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39283"], {
34150: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "마스터 관리자 설정하기",
  "id": "마스터-관리자-설정하기",
  "level": 2
}, {
  "value": "새 장치에서 마스터 관리자 등록하기",
  "id": "새-장치에서-마스터-관리자-등록하기",
  "level": 3
}, {
  "value": "안내 사항",
  "id": "안내-사항",
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
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Include, Row, Table, Tbody, Td, Th} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "마스터-관리자-설정하기",
      children: "마스터 관리자 설정하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
        sid: "ui_128",
        product: "dev"
      }), " 기능은 장치의 전체 관리자 권한을 강화하여, 장치의 보안을 향상시키고 무단 접근 및 설정 변경을 방지하기 위한 기능입니다. 새 장치에는 이 기능을 통해 반드시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "마스터 관리자를 등록"
      }), "해야 하며, 등록된 마스터 관리자만 관리자 메뉴에 진입하여 장치 설정을 변경할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "마스터 관리자란?"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "장치에 관리자를 설정하지 않고 사용하는 경우, 누구나 관리자 메뉴에 진입하여 장치 설정을 변경할 수 있습니다. 마스터 관리자 기능은 이러한 보안 취약점을 해결하기 위해 전체 관리자 설정을 강제하는 기능입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["마스터 관리자는 직접 삭제할 수 없으며 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_072",
              product: "dev"
            }), " 시에만 삭제됩니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "새-장치에서-마스터-관리자-등록하기",
      children: "새 장치에서 마스터 관리자 등록하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["새 장치에서는 처음부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
        sid: "ui_128",
        product: "dev"
      }), "를 필수적으로 등록해야하며, 등록하지 않을 경우 장치 사용이 제한됩니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["새 장치에서는 최초 부팅 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_128",
              product: "dev"
            }), " 등록 화면이 나타납니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_128",
              product: "dev"
            }), "를 등록하지 않으면 다음 화면으로 이동할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["BioStar X와 연결하여 장치 전체 관리자를 할당하더라도 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_128",
              product: "dev"
            }), "를 등록해야만 모든 기능을 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "새 장치는 펌웨어 다운그레이드를 할 수 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["새 장치를 최초 부팅하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_128",
              product: "dev"
            }), " 등록 화면이 나타납니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-1.png",
            width: "300px"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["새 장치를 최초 부팅하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_128",
              product: "dev"
            }), " 등록 화면이 나타납니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "OK"
            }), "를 눌러 등록을 시작하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
            src: "/img/device/bln2-master-admin-setting-main.png"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["새 장치를 최초 부팅하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_128",
              product: "dev"
            }), " 등록 화면이 나타납니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "OK"
            }), "를 눌러 등록을 시작하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
            src: "/img/device/bs2a-master-admin-setting-main.png"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "ui_128",
            product: "dev"
          }), "를 등록하기 위해 최소 두 종류 이상의 크리덴셜을 등록해야 합니다. 원하는 크리덴셜 두 종류를 선택하여 등록하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
          product: "biostation_3",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-2.png",
            width: "300px"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
          product: "biolite_n2",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
            src: "/img/device/bln2-master-admin-setting-credential1.png"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
          product: "biostation_2a",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
            src: "/img/device/bs2a-master-admin-setting-credential1.png"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "ui_128",
            product: "dev"
          }), "에 등록할 수 있는 크리덴셜은 다음과 같습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Table, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Th, {
                children: "크리덴셜 종류"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Th, {
                children: "등록 가능 개수"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Th, {
                children: "세부 조건"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "카드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "최대 4개"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Td, {
                children: ["CSN, Wiegand 타입만 지원", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "동일 타입 내 중복 등록 불가"]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "얼굴"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "최대 2개"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "동종 알고리즘 탑재 장치에서만 등록 가능"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "지문"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "최대 2개"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "-"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "PIN"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "1개"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                children: "최소 8자리 이상"
              })]
            })]
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "등록 조건"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "최소 두 종류 이상의 크리덴셜을 등록해야 합니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "새 장치와 펌웨어 업그레이드 장치 모두 동일한 조건이 적용됩니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "장치가 지원하는 모든 크리덴셜을 인증 수단으로 사용할 수 있습니다."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        start: "3",
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["두 종류 이상의 크리덴셜을 등록한 후, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_373",
              product: "dev"
            }), " 버튼을 누르면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_128",
              product: "dev"
            }), " 등록이 완료됩니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-3.png",
            width: "300px"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        start: "3",
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["두 종류 이상의 크리덴셜을 등록한 후, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_037",
              product: "dev"
            }), " 항목을 선택하고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "OK"
            }), "를 누르면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_128",
              product: "dev"
            }), " 등록이 완료됩니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
            src: "/img/device/bln2-master-admin-setting-credential2.png"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        start: "3",
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["두 종류 이상의 크리덴셜을 등록한 후, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_037",
              product: "dev"
            }), " 항목을 선택하고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "OK"
            }), "를 누르면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "ui_128",
              product: "dev"
            }), " 등록이 완료됩니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
            src: "/img/device/bs2a-master-admin-setting-credential2.png"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "안내-사항",
      children: "안내 사항"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "장치 해시키 수동 변경 시"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "장치 해시키를 수동으로 변경할 경우 마스터 관리자의 PIN이 삭제된다는 경고 메시지가 표시되므로 메시지를 확인한 후 변경하세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "RS-485 통신구간 얼굴 이미지 전송 제한"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "RS-485 통신구간에서는 바이오메트릭 크리덴셜 이미지가 전송되지 않으므로, 슬레이브 장치에서 등록된 마스터 관리자 얼굴 조회 시 대체 이미지를 표시합니다."
        }), "\n"]
      }), "\n"]
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
69312: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Include, Xclude} = _components;
  if (!Include) _missingMdxReference("Include", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "얼굴을 등록할 때 장치와 얼굴의 거리를 60~100 cm로 유지하세요."
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "얼굴을 등록할 때 장치와 얼굴의 거리를 40~80 cm로 유지하세요."
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "표정이 변하지 않도록 주의하세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "마스크, 모자, 안대를 착용하지 마세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "마스크를 착용한 얼굴을 등록하지 마세요. 마스크를 착용한 얼굴과 착용하지 않은 얼굴을 모두 등록할 경우 오인식률이 높아질 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "고개를 들거나 숙이지 마세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "진한 화장을 하지 마세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "눈을 감지 마세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "화면에 양쪽 어깨가 모두 나타나도록 하세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "움직이지 말고, 정면으로 서서 얼굴을 등록하세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "두 명의 얼굴이 화면에 동시에 나타나지 않도록 주의하세요. 한 번에 한 사람씩 등록하세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "화면의 지시에 따르지 않을 경우 얼굴 등록이 오래 걸리거나 실패할 수 있습니다."
        }), "\n"]
      }), "\n"]
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
62844: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84429);
/* ESM import */var _enrolling_face_warning_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69312);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));






const toc = [{
  "value": "올바른 얼굴 등록 및 인증 방법",
  "id": "올바른-얼굴-등록-및-인증-방법",
  "level": 2
}, {
  "value": "얼굴 등록 시 주의 사항",
  "id": "cautions-enrolling-faces",
  "level": 3
}, ..._enrolling_face_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */.RM, {
  "value": "얼굴 인증 시 주의 사항",
  "id": "cautions-authenticating-face",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "올바른-얼굴-등록-및-인증-방법",
      children: "올바른 얼굴 등록 및 인증 방법"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "cautions-enrolling-faces",
      children: "얼굴 등록 시 주의 사항"
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_enrolling_face_warning_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "cautions-authenticating-face",
      children: "얼굴 인증 시 주의 사항"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "장치의 화면 중앙에 얼굴이 나타나도록 하세요. 위치 가이드가 표시될 경우 화면의 안내에 따라 얼굴을 인증하세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "모자, 마스크, 선글라스, 안대 등으로 얼굴의 일부를 가릴 경우 인증에 실패할 수 있습니다. 눈썹과 얼굴을 모두 장치가 인식할 수 있도록 얼굴을 가리지 마세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["장치와의 거리가 ", props.name, " 떨어진 위치에서 인증하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "장치의 화면에 양쪽 어깨가 모두 나타나도록 하세요. 좌우 어깨의 대칭이 맞지 않을 경우 인증에 실패할 수 있습니다. 움직이지 말고, 정면으로 서서 얼굴을 인증하세요."
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */.R)(),
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
98329: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "케이블 및 커넥터",
  "id": "케이블-및-커넥터",
  "level": 2
}, {
  "value": "전원",
  "id": "전원",
  "level": 3
}, {
  "value": "릴레이",
  "id": "릴레이",
  "level": 3
}, {
  "value": "RS-485",
  "id": "rs-485",
  "level": 3
}, {
  "value": "Input",
  "id": "input",
  "level": 3
}, {
  "value": "Wiegand 입력",
  "id": "wiegand-입력",
  "level": 3
}, {
  "value": "Wiegand 출력",
  "id": "wiegand-출력",
  "level": 3
}, {
  "value": "Wiegand 입출력",
  "id": "wiegand-입출력",
  "level": 3
}, {
  "value": "이더넷",
  "id": "이더넷",
  "level": 3
}, {
  "value": "리더, 락 전원 출력",
  "id": "리더-락-전원-출력",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Include, Xclude} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "케이블-및-커넥터",
      children: "케이블 및 커넥터"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "전원",
      children: "전원"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "bioentry_p2,xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/cable-power.svg",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2,xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/cable-power-bidirect.svg",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "overflow-x col3--10-20-70",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "핀"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "명칭"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "색상"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "1"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "PWR +VDC"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "빨간색(흰띠)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "2"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "PWR GND"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "검은색(흰띠)"
            })]
          })]
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "릴레이",
      children: "릴레이"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
      src: "/img/device/cable-relay-3pin.svg",
      className: "none",
      alone: true
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "overflow-x col3--10-20-70",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "핀"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "명칭"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "색상"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "1"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "RLY NO"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "흰색"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "2"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "RLY COM"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "파란색"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "3"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "RLY NC"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "주황색"
            })]
          })]
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "rs-485",
      children: "RS-485"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
      src: "/img/device/cable-rs485-4pin.svg",
      className: "none",
      alone: true
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "overflow-x col3--10-20-70",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "핀"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "명칭"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "색상"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "1"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "485 TRXP"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "파란색"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "2"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "485 TRXN"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "노란색"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "3"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "485 GND"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "검은색"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "4"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "SH GND"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "회색"
            })]
          })]
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "input",
      children: "Input"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "biostation_3,biostation_2a,xpass_q2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/cable-input-5pin.svg",
        className: "none",
        alone: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "overflow-x col3--10-20-70",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "핀"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "명칭"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "색상"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "INPUT0"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "빨간색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "2"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "INPUT1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "노란색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "3"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "INPUT2"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "주황색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "4"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "INPUT GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "검은색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "5"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "SH GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "회색"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "facestation_f2,facestation_2,bioentry_p2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/cable-input-4pin.svg",
        className: "none",
        alone: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "overflow-x col3--10-20-70",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "핀"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "명칭"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "색상"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "INPUT0"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "빨간색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "2"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "INPUT1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "노란색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "3"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "INPUT GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "검은색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "4"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "SH GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "회색"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "biostation_3,biostation_2a",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "wiegand-입력",
        children: "Wiegand 입력"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/cable-wiegand-4pin.svg",
        className: "none",
        alone: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "overflow-x col3--10-20-70",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "핀"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "명칭"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "색상"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "WG D0"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "초록색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "2"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "WG D1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "흰색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "3"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "WG GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "검은색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "4"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "SH GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "회색"
              })]
            })]
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "wiegand-출력",
        children: "Wiegand 출력"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/cable-wiegand-4pin.svg",
        className: "none",
        alone: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "overflow-x col3--10-20-70",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "핀"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "명칭"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "색상"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "WG D0"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "초록색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "2"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "WG D1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "흰색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "3"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "WG GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "검은색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "4"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "SH GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "회색"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "facestation_f2,facestation_2,bioentry_p2,xpass_q2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "wiegand-입출력",
        children: "Wiegand 입출력"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/cable-wiegand-4pin.svg",
        className: "none",
        alone: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "overflow-x col3--10-20-70",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "핀"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "명칭"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "색상"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "WG D0"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "초록색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "2"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "WG D1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "흰색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "3"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "WG GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "검은색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "4"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "SH GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "회색"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "bioentry_p2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "이더넷",
        children: "이더넷"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/cable-ethernet-4pin.svg",
        className: "none",
        alone: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "overflow-x col3--10-20-70",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "핀"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "명칭"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "색상"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "ENET RXN"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "노란색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "2"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "ENET RXP"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "초록색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "3"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "ENET TXN"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "빨간색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "4"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "ENET TXP"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "검은색"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "xpass_q2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "리더-락-전원-출력",
        children: "리더, 락 전원 출력"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/cable-dcout.svg",
        className: "none",
        alone: true
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "overflow-x col3--10-20-70",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "핀"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "명칭"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "색상"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "1"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "DC OUT"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "빨간색 (검은 띠)"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "2"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "DC GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "검은색"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "3"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "DC GND"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
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
88537: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_biostation_3_getting_started_mdx_b3d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-3-getting-started-mdx-b3d.json
var site_docs_device_biostation_3_getting_started_mdx_b3d_namespaceObject = JSON.parse('{"id":"device/biostation_3/getting-started","title":"시작하기","description":"장치 사용을 위한 초기 절차를 안내합니다.","source":"@site/docs/device/biostation_3/getting-started.mdx","sourceDirName":"device/biostation_3","slug":"/device/biostation_3/getting-started","permalink":"/docs/device/biostation_3/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기","description":"장치 사용을 위한 초기 절차를 안내합니다.","keywords":["구성품","명칭","기능","케이블","커넥터"],"isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"안전을 위한 주의 사항","permalink":"/docs/device/biostation_3/safety-instructions"},"next":{"title":"설치하기","permalink":"/docs/device/biostation_3/installation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_getting-started-components-note.mdx
var _getting_started_components_note = __webpack_require__(34075);
// EXTERNAL MODULE: ./docs/common/_getting-started-cables-and-connectors.mdx
var _getting_started_cables_and_connectors = __webpack_require__(98329);
// EXTERNAL MODULE: ./docs/common/_device-master-admin-settings.mdx
var _device_master_admin_settings = __webpack_require__(34150);
// EXTERNAL MODULE: ./docs/common/_face-enrollment-authentication-method.mdx
var _face_enrollment_authentication_method = __webpack_require__(62844);
;// CONCATENATED MODULE: ./docs/device/biostation_3/getting-started.mdx


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
/*케이블 및 커넥터*/
/*마스터 관리자 설정하기*/
/*올바른 얼굴 등록 및 인증 방법*/






const toc = [{
  "value": "구성품",
  "id": "구성품",
  "level": 2
}, ..._getting_started_components_note/* .toc */.RM, {
  "value": "각 부분의 명칭 및 기능",
  "id": "각-부분의-명칭-및-기능",
  "level": 2
}, ..._getting_started_cables_and_connectors/* .toc */.RM, ..._device_master_admin_settings/* .toc */.RM, ..._face_enrollment_authentication_method/* .toc */.RM, {
  "value": "QR 코드 및 장치 라이선스에 대한 참고 사항",
  "id": "qr-코드-및-장치-라이선스에-대한-참고-사항",
  "level": 2
}, {
  "value": "올바른 QR 코드 인증 방법",
  "id": "올바른-qr-코드-인증-방법",
  "level": 3
}, {
  "value": "장치 라이선스 참고 사항",
  "id": "장치-라이선스-참고-사항",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Row, Table, Tbody, Td} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
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
              src: "/img/device/component-device-bs3.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-wall-bracket-bs3.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-drilling-template-bs3.svg",
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
              src: "/img/device/component-connection-cables-bs3.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "BioStation 3"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "벽걸이용 브래킷"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "드릴링 템플릿"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "퀵 가이드"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "연결 케이블"
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-diode1.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-resistor.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-pvc-anchors2.svg",
              className: "none",
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
            children: "다이오드"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "120 Ω 저항"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "PVC 앵커 x2"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "고정용 나사 x2"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "브래킷 고정용 나사(별 모양)"
          })]
        })]
      })]
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_getting_started_components_note/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "각-부분의-명칭-및-기능",
      children: "각 부분의 명칭 및 기능"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/name-function-each-part-bs3.png",
      className: "none",
      width: "60%"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "마이크"
          }), ": 인터폰 연결 시 사용자의 음성을 전달합니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "마이크를 가리거나 막으면 음성 전달이 원활하지 않을 수 있습니다."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "적외선 카메라"
          }), ": 적외선 이미지를 촬영합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "비주얼 카메라"
          }), ": 실제 이미지를 촬영합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "디스플레이"
          }), ": 동작을 위한 UI를 제공합니다."]
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
              children: "파란색: 정상 동작 상태"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "파란색/초록색 점멸:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_012",
                    product: "dev"
                  }), "를 사용으로 설정 시 IP 주소를 받아오지 못하는 상태"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_205",
                    product: "dev"
                  }), " 모드일 때 마스터 장치와 연결이 끊어진 상태"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "빨간색/보라색 점멸: 장치 잠금 상태"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "노란색 점멸: 입력 대기 상태"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "스피커"
          }), ": 소리를 들을 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "이더넷"
          }), ": 이더넷 케이블을 연결합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Input (5핀)"
          }), ": Input 케이블을 연결합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "USB 확장 포트 (5핀)"
          }), ": 기타 액세서리 제품을 연결할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wiegand 출력 (4핀)"
          }), ": Wiegand 출력 케이블을 연결합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wiegand 입력 (4핀)"
          }), ": Wiegand 입력 케이블을 연결합니다."]
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
            children: "릴레이 (3핀)"
          }), ": 릴레이 케이블을 연결합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "전원 (2핀)"
          }), ": 전원 케이블을 연결합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "USB (Type-C) 메모리 슬롯"
          }), ": USB 메모리를 연결합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_getting_started_cables_and_connectors/* ["default"] */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_master_admin_settings/* ["default"] */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_face_enrollment_authentication_method/* ["default"] */.Ay, {
      name: "60~100 cm"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qr-코드-및-장치-라이선스에-대한-참고-사항",
      children: "QR 코드 및 장치 라이선스에 대한 참고 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "올바른-qr-코드-인증-방법",
      children: "올바른 QR 코드 인증 방법"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자에게 QR 코드를 발급하여 인증 수단으로 사용할 수 있습니다. 인식률을 높이기 위해 화면의 안내에 따라 올바르게 QR 코드를 스캔하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/qr-scanning-bs3.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치의 카메라와 QR 코드 사이의 거리를 30~40 cm로 유지하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "QR 코드를 장치의 스캔 화면 중앙에 오도록 위치시키세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 장치에 내려받은 QR 코드로 인증할 경우 화면이 잘 보이도록 모바일 장치의 밝기를 조정하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-라이선스-참고-사항",
      children: "장치 라이선스 참고 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "QR 인증을 사용하려면 별도의 장치 라이선스가 필요합니다. 장치 라이선스를 발급하려면 구입처에 문의하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 라이선스 파일은 암호화된 파일이므로 임의로 수정할 수 없습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 라이선스는 장치 ID를 기준으로 발급됩니다. 비정상적인 방법으로 장치 ID를 변경할 경우 라이선스에 대한 보증 서비스가 제공되지 않습니다."
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