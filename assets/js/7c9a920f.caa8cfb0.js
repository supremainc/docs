"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["97189"], {
52276: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Include, Xclude} = _components;
  if (!Include) _missingMdxReference("Include", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
    type: "info",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "RS-485 케이블로 슬레이브 장치를 연결하여 제품을 다중 출입문 제어 장치로 사용할 수 있습니다. 슬레이브 장치는 더미 리더로 사용되며 인증은 마스터 장치에서 수행합니다."
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3,facestation_f2,facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["지문 인식 장치가 ", props.product, "의 슬레이브 장치로 구성된 경우 다른 ", props.product, "를 슬레이브 장치로 추가할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["지문 인식 장치가 마스터 장치일 때 ", props.product, "를 슬레이브 장치로 추가할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [props.product, "가 마스터 장치이고 ", props.product, "를 슬레이브 장치로 연결할 때 1대의 ", props.product, "만 슬레이브 장치로 추가할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [props.product, "가 마스터 장치이고 ", props.product, "를 슬레이브 장치로 연결할 때 Secure I/O 2와 DM-20을 각각 1대씩 추가로 연결할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [props.product, "가 마스터 장치이고 ", props.product, "를 슬레이브 장치로 연결할 때 OM-120을 추가로 연결할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3,facestation_f2,biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [props.product_2, "가 마스터 장치일 때 ", props.product, "를 슬레이브 장치로 사용할 수 없으며, 반대의 경우로도 사용할 수 없습니다."]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3,biostation_2a,biolite_n2,bioentry_p2,bioentry_w2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "XPass 또는 XPass 2가 마스터 장치로 연결될 경우 카드 인증만 사용할 수 있습니다."
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "이 제품을 마스터 장치로 사용하는 경우 슬레이브 장치에서는 카드 인증만 사용할 수 있습니다."
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "이 제품을 마스터 장치로 사용할 경우 슬레이브 장치에서는 카드나 QR/바코드 인증만 사용할 수 있습니다."
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2,xpass_q2,xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "하나의 마스터 장치당 최대 31대의 슬레이브 장치를 연결할 수 있습니다."
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2,bioentry_p2,bioentry_r2,biolite_n2,bioentry_w2,xstation_2,biostation_2a,bioentry_w3,biostation_3,facestation_f2,facestation_2,biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "연결할 수 있는 최대 슬레이브 장치 수는 인증 방법, 사용자 수, 장치 수에 따라 달라지며 슬레이브 장치 수는 인증 속도에 영향을 줍니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "하나의 마스터 장치당 최대 31대의 슬레이브 장치를 연결할 수 있습니다. RS-485 대역폭으로 인해 최대 7대의 지문 인식 장치를 연결할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["더 자세한 내용은 슈프리마 기술 지원팀(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "mailto:CS@suprema.co.kr",
          children: "CS@suprema.co.kr"
        }), ")에 문의하세요."]
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
97902: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Input 연결",
  "id": "input-연결",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Include} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "input-연결",
      children: "Input 연결"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-ttl-input-connection-bs3.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-bs3m.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-bew3.png",
        width: "55%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-bs2a.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-fsf2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-bln2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xstation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-xs2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-fs2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-bep2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-bew2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-xp2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-input-connection-xpq2.png",
        width: "70%",
        className: "none"
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
43333: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "네트워크 연결",
  "id": "네트워크-연결",
  "level": 2
}, {
  "value": "TCP/IP",
  "id": "tcpip",
  "level": 3
}, {
  "value": "LAN 연결 (허브와 연결)",
  "id": "lan-연결-허브와-연결",
  "level": 4
}, {
  "value": "LAN 연결 (PC와 직접 연결)",
  "id": "lan-연결-pc와-직접-연결",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, Image, Include} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "네트워크-연결",
      children: "네트워크 연결"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "tcpip",
      children: "TCP/IP"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "lan-연결-허브와-연결",
      children: "LAN 연결 (허브와 연결)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3,facestation_f2,corestation_40,corestation_20,bioentry_w2,biolite_n2,biostation_2a,biostation_3,facestation_2,xpass_s2,xstation_2,biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "일반 타입의 CAT-5 케이블을 사용하여 허브와 연결할 수 있습니다."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2,xpass_2,xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "일반 타입의 CAT-5e 케이블을 사용하여 허브와 연결할 수 있습니다."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-bs3.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-bs3m.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-bew3.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-bs2a.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-fsf2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_20",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-cs20.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_40",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-cs40.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-bln2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xstation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-xs2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-fs2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-bep2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-xp2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-xps2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-xpq2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "bioentry_w2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "PoE를 이용해 전원을 공급하려면 PSE 허브를 사용하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-hub-connection-bew2.png",
        width: "70%",
        className: "none"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "lan-연결-pc와-직접-연결",
      children: "LAN 연결 (PC와 직접 연결)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3,facestation_f2,bioentry_w2,biolite_n2,biostation_2a,biostation_3,facestation_2,xstation_2,biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이 제품은 자동 MDI/MDIX 기능을 가지고 있으므로 크로스 케이블이나 일반 스트레이트 타입의 CAT-5 케이블로 PC와 직접 연결할 수 있습니다."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이 제품은 자동 MDI/MDIX 기능을 가지고 있으므로 일반 타입의 CAT-5 케이블로 PC와 직접 연결할 수 있습니다."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2,xpass_2,corestation_40,corestation_20",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이 제품은 자동 MDI/MDIX 기능을 가지고 있으므로 일반 타입의 CAT-5e 케이블로 PC와 직접 연결할 수 있습니다."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_20",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge, {
          only: true,
          children: "CS-20P"
        }), " 이더넷 케이블을 통해 전원을 공급하는 PoE+를 지원합니다. PoE+ 사용 시에는 Lock 연결을 하나만 지원합니다."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "이 제품은 자동 MDI/MDIX 기능을 가지고 있으므로 크로스 케이블이나 일반 스트레이트 타입의 CAT-5e 케이블로 PC와 직접 연결할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "caution",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "일부 비표준 허브/스위치에서는 자동 MDI/MDIX 기능이 지원되지 않을 수 있습니다."
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge, {
              only: true,
              children: "XPQ2-APB"
            }), " 이더넷 케이블을 통해 전원을 공급하는 PoE를 지원합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-bs3.png",
        width: "60%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-bs3m.png",
        width: "60%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-bew3.png",
        width: "55%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-bs2a.png",
        width: "60%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-fsf2.png",
        width: "65%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_20",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-cs20.png",
        width: "60%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_40",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-cs40.png",
        width: "75%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-bln2.png",
        width: "70%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xstation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-xs2.png",
        width: "65%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-fs2.png",
        width: "70%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-bep2.png",
        width: "65%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-bew2.png",
        width: "70%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-xp2.png",
        width: "65%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-xps2.png",
        width: "70%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-network-direct-connection-xpq2.png",
        width: "60%",
        className: "none",
        alone: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3,facestation_f2,facestation_2,biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "info",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "기가 비트 이더넷 스위치를 사용할 때 아래 정보를 확인하세요."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "CAT-5e 비차폐 꼬임선(UTP)을 사용하세요."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "4 쌍(8 선)을 모두 네트워크 연결로 사용하세요."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "네트워크 케이블의 일부 쌍이나 선을 다른 용도로 사용하지 마세요."
            }), "\n"]
          }), "\n"]
        })]
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
65842: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*BEW2 UL향 합본 문구*/


const toc = [{
  "value": "전원 연결",
  "id": "전원-연결",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Include, Row, Table, Tbody, Td, Th, Thead, Xclude} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  if (!Thead) _missingMdxReference("Thead", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "전원-연결",
      children: "전원 연결"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/bew3-power-connetion.png",
        width: "45%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-bs3.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-bs2a.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-fsf2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_20",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-cs20.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_40",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-cs40.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "doorinterface",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-di24.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-bln2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xstation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-xs2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-fs2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-bep2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-bew2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "doormodule",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-dm20.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "inputmodule",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-im120.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "outputmodule",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-om120.png",
        width: "30%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "securemodule",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-sio2.png",
        width: "45%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-xp2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-xps2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-xpq2.png",
        width: "55%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-power-connection-bs3m.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "bioentry_w3,bioentry_w2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Listed Class 2 전원 장치 사용을 권장합니다."
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "bioentry_w2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "장치의 전원 장치는 외부 12VDC Listed Class 2 전원 장치 또는 UL294B PoE 전원 장치를 사용해야 합니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "ULC S319를 만족하기 위해 'PSC-100A' 전원 공급 장치 및 'Casil CA 1270' 배터리를 연결해야 합니다."
            }), "\n"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "bioentry_w3,biostation_2a,biostation_3,xstation_2,bioentry_w2,xpass_q2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "전원 장치(또는 어댑터)와 PoE 전원 장치를 함께 연결하지 마세요."
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "corestation_20,corestation_40,doormodule,inputmodule,outputmodule,securemodule",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "출입 통제 장치와 제품에 연결하는 전원은 반드시 분리하여 사용하세요."
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "doorinterface",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "리더와 제품에 연결하는 전원은 반드시 분리하여 사용하세요."
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "전원 어댑터는 IEC/EN 62368-1 승인을 받은 제품으로 단말기의 소모 전력 이상의 제품을 사용하세요. 전원 어댑터에 다른 기기를 연결하여 사용하려면 단말기의 소모 전력과 다른 기기에 필요한 소모 전력을 합한 전류 용량 이상의 어댑터를 사용해야 합니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["최대 소모전류 규격은 제품 사양의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "product-specifications#specs.power",
                children: "전원"
              }), "을 참고하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
        product: "corestation_20,corestation_40,doorinterface,inputmodule,outputmodule,securemodule",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Secure I/O 2, 전기정(전기식 잠금장치), 제품은 반드시 개별 전원을 사용하세요. 전원을 함께 연결하여 사용하면 장치가 오작동할 수 있습니다."
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "biostation_3,facestation_f2,bioentry_w3,biostation_3_max",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "전원 연결 시 제품과 전원 장치 간의 거리에 주의하세요. 제품과 전원 장치는 최대한 가깝게 설치해야 합니다. 올바르게 연결하지 않을 경우 제품이 오작동할 수 있으므로 주의하세요. 제품과 전원 장치의 거리가 먼 경우 16 AWG 또는 18 AWG 케이블을 사용할 것을 권장합니다. 사용하는 케이블의 규격과 설치 환경에 따라 연결할 수 있는 거리가 다를 수 있습니다. 이 제품은 DC 24V와 DC 12V 전원을 모두 지원하므로, 각 케이블 규격에 따른 최대 연장 길이를 확인하여 전원을 올바르게 연결하세요."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Table, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Thead, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Th, {
                    rowspan: "2",
                    children: "케이블 규격"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Th, {
                    colspan: "2",
                    children: "최대 연장 길이"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Th, {
                    children: "DC 12V"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Th, {
                    children: "DC 24V"
                  })]
                })]
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tbody, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "16 AWG"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "50 m"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "150 m"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "18 AWG"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "30 m"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "136 m"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "20 AWG"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "20 m"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "90 m"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "facestation_2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "전원 연결 시 제품과 전원 장치 간의 거리에 주의하세요. 제품과 전원 장치는 최대한 가깝게 설치해야 합니다. 올바르게 연결하지 않을 경우 제품이 오작동할 수 있으므로 주의하세요. 제품과 전원 장치의 거리가 먼 경우 16 AWG 또는 18 AWG 케이블을 사용할 것을 권장합니다. 사용하는 케이블의 규격과 설치 환경에 따라 연결할 수 있는 거리가 다를 수 있습니다."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Table, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Thead, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Th, {
                    rowspan: "2",
                    children: "케이블 규격"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Th, {
                    colspan: "2",
                    children: "최대 연장 길이"
                  })]
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tbody, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "16 AWG"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "150 m"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "18 AWG"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "136 m"
                  })]
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "20 AWG"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Td, {
                    children: "90 m"
                  })]
                })]
              })]
            }), "\n"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "전원 어댑터를 사용할 경우 전원 케이블의 길이를 임의로 연장하지 마세요."
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "biostation_3,xstation_2,facestation_2,bioentry_w3,facestation_f2,biostation_3_max",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "CAT5 UTP 2-Wire 케이블을 전원 공급 용도로 사용하지 마세요."
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "bioentry_w2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "알람 신호는 릴레이 접점 방식으로 AC OK 및 배터리 저전압 상태 핀을 통해 전송됩니다."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "overflow-x",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                      style: {
                        textAlign: "center"
                      },
                      children: "기능"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                      style: {
                        textAlign: "center"
                      },
                      children: "설명"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                      style: {
                        textAlign: "center"
                      },
                      children: "릴레이 상태"
                    })]
                  })
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      rowSpan: "2",
                      style: {
                        textAlign: "center"
                      },
                      children: "AC 전원 확인"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      style: {
                        textAlign: "center"
                      },
                      children: "AC 전원 켜짐"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      style: {
                        textAlign: "center"
                      },
                      children: "단락"
                    })]
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      style: {
                        textAlign: "center"
                      },
                      children: "AC 전원 꺼짐"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      style: {
                        textAlign: "center"
                      },
                      children: "단선"
                    })]
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      rowSpan: "2",
                      style: {
                        textAlign: "center"
                      },
                      children: "배터리 저전압 상태"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      style: {
                        textAlign: "center"
                      },
                      children: "배터리 전압이 11 V 이하일 때"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      style: {
                        textAlign: "center"
                      },
                      children: "단락"
                    })]
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      style: {
                        textAlign: "center"
                      },
                      children: "배터리 전압이 11 V 이상일 때"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                      style: {
                        textAlign: "center"
                      },
                      children: "단선"
                    })]
                  })]
                })]
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "알람 신호 기능을 사용하려면 외부 전원 소스가 필요합니다. 최대 인가 전압은 30 V이며, 최대 싱크 전류는 1 A입니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "PoE 전원은 National Electrical Code, ANSI / NFPA 70, Article 725.121, 클래스 2 및 클래스 3 회로의 전원을 준수해야합니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "5e 케이블 연결은 권장하는 최소 성능 범주입니다. 성능 범주는 설치 현장에서 요구되는 전송 속도와 일치해야 합니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "PSE 또는 전력 인젝터와 PD 사이에 연결할 수 있는 최소 도체 게이지는 패치 코드의 경우 26 AWG(0.13 mm2)입니다. 수평 또는 라이저 케이블의 경우 24 AWG(0.21 mm2)입니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "PoE를 이용해 전원을 공급할 경우 UL294B 또는 UL294 8th Edition을 준수해야 합니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "IEEE 802.3 (at 또는 af) 사양의 준수는 이 요구 사항의 일환으로 치부되지 않습니다."
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_20,corestation_40,doorinterface,inputmodule,outputmodule",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "info",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "전원 장애를 막기 위해 무정전 전원 장치(UPS)를 연결하여 사용할 것을 권장합니다."
        })
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
35078: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "릴레이 연결",
  "id": "릴레이-연결",
  "level": 2
}, {
  "value": "Fail Safe Lock",
  "id": "fail-safe-lock",
  "level": 3
}, {
  "value": "Fail Secure Lock",
  "id": "fail-secure-lock",
  "level": 3
}, {
  "value": "자동문 연결",
  "id": "자동문-연결",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Include, PageBreak} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  if (!PageBreak) _missingMdxReference("PageBreak", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "릴레이-연결",
      children: "릴레이 연결"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "fail-safe-lock",
      children: "Fail Safe Lock"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Fail Safe Lock을 사용하려면 아래 그림과 같이 N/C 릴레이를 연결하세요. Fail Safe Lock은 평상 시 릴레이 회로에 전류가 흐르며, 릴레이가 동작하여 전류를 일시적으로 차단하면 출입문이 열립니다. 정전이 되거나 외부 요인으로 장치의 전원이 끊길 경우 출입문이 열립니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-bs3.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-bs3m.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-bew3.png",
        width: "55%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-bs2a.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-fsf2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-bln2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xstation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-xs2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-fs2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-bep2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-bew2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-xp2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-xps2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-safe-lock-xpq2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "출입문 잠금 장치가 작동할 때 발생하는 역전류로부터 릴레이를 보호하기 위해 그림과 같이 출입문 잠금 장치 배선 양쪽에 다이오드를 설치하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "제품과 출입문 잠금 장치는 별도의 전원을 사용하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "슈프리마의 지능형 장치에는 편의를 제공하기 위해 별도의 컨트롤러 없이 독립형으로 연결하여 출입문을 직접 열거나 잠글 수 있도록 하는 릴레이가 내장되어 있습니다. 그러나 향상된 보안이 요구되는 출입통제 애플리케이션의 경우 잠재적으로 출입문 잠금 해제를 유발할 수 있는 변조 공격을 방지하기 위해 장치에 내장된 릴레이를 사용하지 않는 것이 좋습니다. 이러한 애플리케이션의 경우 잠금 제어를 위해 출입문 내부의 안전한 위치에 설치된 슈프리마의 Secure I/O 2, DM-20, CoreStation과 같은 별도의 릴레이 장치를 사용할 것을 권장합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다이오드의 설치 방향에 주의하세요. 다이오드는 출입문 잠금 장치와 가깝게 설치하세요."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PageBreak, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "fail-secure-lock",
      children: "Fail Secure Lock"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Fail Secure Lock을 사용하려면 아래 그림과 같이 N/O 릴레이를 연결하세요. Fail Secure Lock은 평상 시 릴레이 회로에 전류가 흐르지 않으며, 릴레이가 동작하여 전류가 흐르면 출입문이 열립니다. 정전이 되거나 외부 요인으로 장치의 전원이 끊길 경우 출입문이 잠깁니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-bs3.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-bs3m.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-bew3.png",
        width: "55%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-bs2a.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-fsf2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-bln2.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xstation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-xs2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-fs2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-bep2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-bew2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-xp2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-xps2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-relay-fail-secure-lock-xpq2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "출입문 잠금 장치가 작동할 때 발생하는 역전류로부터 릴레이를 보호하기 위해 그림과 같이 출입문 잠금 장치 배선 양쪽에 다이오드를 설치하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "제품과 출입문 잠금 장치는 별도의 전원을 사용하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "슈프리마의 지능형 장치에는 편의를 제공하기 위해 별도의 컨트롤러 없이 독립형으로 연결하여 출입문을 직접 열거나 잠글 수 있도록 하는 릴레이가 내장되어 있습니다. 그러나 향상된 보안이 요구되는 출입통제 애플리케이션의 경우 잠재적으로 출입문 잠금 해제를 유발할 수 있는 변조 공격을 방지하기 위해 장치에 내장된 릴레이를 사용하지 않는 것이 좋습니다. 이러한 애플리케이션의 경우 잠금 제어를 위해 출입문 내부의 안전한 위치에 설치된 슈프리마의 Secure I/O 2, DM-20, CoreStation과 같은 별도의 릴레이 장치를 사용할 것을 권장합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다이오드의 설치 방향에 주의하세요. 다이오드는 출입문 잠금 장치와 가깝게 설치하세요."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PageBreak, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "자동문-연결",
      children: "자동문 연결"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-bs3.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-bs3m.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-bew3.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-bs2a.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-fsf2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-bln2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xstation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-xs2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-fs2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-bep2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-bew2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-xp2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-xps2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-automatic-door-xpq2.png",
        width: "70%",
        className: "none"
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
71651: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Secure I/O 2 연결",
  "id": "secure-io-2-연결",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Include} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "secure-io-2-연결",
      children: "Secure I/O 2 연결"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "제품에 I/O 장치인 Secure I/O 2를 RS-485로 연결할 수 있습니다. 제품과 Secure I/O 2의 연결이 끊기거나 외부 요인에 의해 제품의 전원이 차단되더라도 보안을 유지할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "RS-485 케이블은 AWG24, 꼬임선(Twisted Pair), 최대 길이 1.2 km를 사용하세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "RS-485 케이블은 특성 임피던스가 120 Ω인 케이블을 사용하는 것을 권장합니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "RS-485 데이지 체인으로 연결할 경우 종단 저항(120Ω)을 데이지 체인 연결의 양 끝에 연결하세요. 중간 선로에 연결할 경우 신호 레벨이 작아져 통신 성능이 떨어지므로 반드시 데이지 체인 연결의 양 끝에 연결하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-bs3.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-bs3m.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-bew3.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-bs2a.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-fsf2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-bln2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xstation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-xs2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-fs2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-bep2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-bew2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-xp2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-xpq2.png",
        width: "80%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-sio2-connection-xps2.png",
        width: "80%",
        className: "none"
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
90530: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "독립형 연결",
  "id": "독립형-연결",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Include} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "독립형-연결",
      children: "독립형 연결"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "별도의 I/O 장치를 연결하지 않고 제품을 직접 출입문 잠금 장치, 퇴실 버튼, 출입문 센서 등에 연결할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-bs3.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-bs3m.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-bew3.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_2a",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-bs2a.png",
        width: "60%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-fsf2.png",
        width: "65%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biolite_n2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-bln2.png",
        width: "70%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xstation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-xs2.png",
        width: "80%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-fs2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_p2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-bep2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "bioentry_w2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-bew2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-xp2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_s2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-xps2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "xpass_q2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-standalone-connection-xpq2.png",
        width: "75%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "슈프리마의 지능형 장치에는 편의를 제공하기 위해 별도의 컨트롤러 없이 독립형으로 연결하여 출입문을 직접 열거나 잠글 수 있도록 하는 릴레이가 내장되어 있습니다. 그러나 향상된 보안이 요구되는 출입통제 애플리케이션의 경우 잠재적으로 출입문 잠금 해제를 유발할 수 있는 변조 공격을 방지하기 위해 장치에 내장된 릴레이를 사용하지 않는 것이 좋습니다. 이러한 애플리케이션의 경우 잠금 제어를 위해 출입문 내부의 안전한 위치에 설치된 슈프리마의 Secure I/O 2, DM-20, CoreStation과 같은 별도의 릴레이 장치를 사용할 것을 권장합니다."
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
14682: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Wiegand 연결",
  "id": "wiegand-연결",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Include} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "wiegand-연결",
      children: "Wiegand 연결"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_20,doorinterface",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-wiegand-in-connection-cs20.png",
        width: "45%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "corestation_40",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-wiegand-in-connection-cs40.png",
        width: "45%",
        className: "none"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "doormodule",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Wiegand 장치를 연결하여 사용할 경우 제품과 12 V, 3.1 A 전원을 연결하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
        src: "/img/device/installation-wiegand-in-connection-dm20.png",
        width: "65%",
        className: "none"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "info",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["제품에 Wiegand 장치를 연결하면 12 V, 최대 1.5 A의 전원을 사용할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "WIEGAND 0"
          }), "에 1.0 A가 필요한 장치를 연결하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "WIEGAND 1"
          }), "에서는 500 mA만 사용할 수 있습니다."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "biostation_3,bioentry_w3,biostation_2a,facestation_2,bioentry_w2,xpass_s2,biostation_3_max",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Wiegand 입력 장치로 사용"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "biostation_3",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-in-connection-bs3.png",
          width: "60%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "biostation_3_max",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-in-connection-bs3m.png",
          width: "60%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "bioentry_w3",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-in-connection-bew3.png",
          width: "45%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "biostation_2a",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-in-connection-bs2a.png",
          width: "60%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "facestation_2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-in-connection-fs2.png",
          width: "55%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "bioentry_w2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-in-connection-bew2.png",
          width: "40%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "xpass_s2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-in-connection-xps2.png",
          width: "45%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Wiegand 출력 장치로 사용"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "biostation_3",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-out-connection-bs3.png",
          width: "60%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "biostation_3_max",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-out-connection-bs3m.png",
          width: "60%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "bioentry_w3",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-out-connection-bew3.png",
          width: "45%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "biostation_2a",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-out-connection-bs2a.png",
          width: "60%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "facestation_2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-out-connection-fs2.png",
          width: "55%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "bioentry_w2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-out-connection-bew2.png",
          width: "40%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "xpass_s2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-out-connection-xps2.png",
          width: "45%",
          className: "none"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Include, {
      product: "facestation_f2,biolite_n2,xstation_2,bioentry_p2,xpass_2,xpass_q2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Wiegand 입력 또는 출력 장치로 사용"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "facestation_f2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-in-out-connection-fsf2.png",
          width: "50%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "biolite_n2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-inout-connection-bln2.png",
          width: "50%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "xstation_2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-inout-connection-xs2.png",
          width: "55%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "bioentry_p2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-inout-connection-bep2.png",
          width: "65%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "xpass_2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-inout-connection-xp2.png",
          width: "65%",
          className: "none"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        product: "xpass_q2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/device/installation-wiegand-inout-connection-xpq2.png",
          width: "70%",
          className: "none"
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
79742: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, Include, Xclude} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Include) _missingMdxReference("Include", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
    type: "info",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "facestation_f2,biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["장치를 설치할 최적의 높이는 ", props.height, " cm입니다."]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_f2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "장치를 설치할 최적의 높이는 아래와 같습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge, {
                  only: true,
                  children: "FSF2-ODB"
                }), ": ", props.height1, " cm"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge, {
                  only: true,
                  children: "FSF2-DB, FSF2-AB"
                }), ": ", props.height2, " cm"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "biostation_3_max",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "장치를 설치할 최적의 높이는 아래와 같습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge, {
                  only: true,
                  children: "BS3M-ODB, BS3M-OAPB"
                }), ": ", props.height1, " cm"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge, {
                  only: true,
                  children: "BS3M-DB, BS3M-APB"
                }), ": ", props.height2, " cm"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "장치를 직사 광선이나 자외선에 직접 노출된 장소에 설치하지 마세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "사용자가 얼굴을 인증할 때 얼굴에 직사광선이 닿지 않도록 설치 위치를 조정하세요."
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
133: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_biostation_3_installation_mdx_7c9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-3-installation-mdx-7c9.json
var site_docs_device_biostation_3_installation_mdx_7c9_namespaceObject = JSON.parse('{"id":"device/biostation_3/installation","title":"설치하기","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","source":"@site/docs/device/biostation_3/installation.mdx","sourceDirName":"device/biostation_3","slug":"/device/biostation_3/installation","permalink":"/docs/device/biostation_3/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"설치하기","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","keywords":["브래킷","전원","네트워크","입력","릴레이","독립형","Secure I/O","Wiegand"],"isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"시작하기","permalink":"/docs/device/biostation_3/getting-started"},"next":{"title":"사용하기","permalink":"/docs/device/biostation_3/using-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_installation-bracket-notes.mdx
var _installation_bracket_notes = __webpack_require__(79742);
// EXTERNAL MODULE: ./docs/common/_device-power-connection.mdx
var _device_power_connection = __webpack_require__(65842);
// EXTERNAL MODULE: ./docs/common/_device-network-connection.mdx
var _device_network_connection = __webpack_require__(43333);
// EXTERNAL MODULE: ./docs/common/_device-input-connetion.mdx
var _device_input_connetion = __webpack_require__(97902);
// EXTERNAL MODULE: ./docs/common/_device-relay-connection.mdx
var _device_relay_connection = __webpack_require__(35078);
// EXTERNAL MODULE: ./docs/common/_device-standalone-connection.mdx
var _device_standalone_connection = __webpack_require__(90530);
// EXTERNAL MODULE: ./docs/common/_device-connection-standalone-secure-notes.mdx
var _device_connection_standalone_secure_notes = __webpack_require__(52276);
// EXTERNAL MODULE: ./docs/common/_device-secure-io2-connection.mdx
var _device_secure_io2_connection = __webpack_require__(71651);
// EXTERNAL MODULE: ./docs/common/_device-wiegand-connection.mdx
var _device_wiegand_connection = __webpack_require__(14682);
;// CONCATENATED MODULE: ./docs/device/biostation_3/installation.mdx


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
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*## 전원 연결*/
/*## 네트워크 연결*/
/*## Input 연결*/
/*## 릴레이 연결*/
/*## 독립형 연결*/
/*공통 노트*/
/*## Secure I/O 2 연결*/
/*공통 노트*/
/*## Wiegand 연결*/











const toc = [{
  "value": "브래킷 및 제품 고정",
  "id": "브래킷-및-제품-고정",
  "level": 2
}, ..._installation_bracket_notes/* .toc */.RM, ..._device_power_connection/* .toc */.RM, ..._device_network_connection/* .toc */.RM, ..._device_input_connetion/* .toc */.RM, ..._device_relay_connection/* .toc */.RM, ..._device_standalone_connection/* .toc */.RM, ..._device_connection_standalone_secure_notes/* .toc */.RM, ..._device_secure_io2_connection/* .toc */.RM, ..._device_connection_standalone_secure_notes/* .toc */.RM, ..._device_wiegand_connection/* .toc */.RM];
function _createMdxContent(props) {
  const _components = {
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
          children: "제공된 드릴링 템플릿을 이용하여 제품을 장착할 위치를 정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-recommended-bs3.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_installation_bracket_notes/* ["default"] */.Ay, {
          height: 136
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제품을 장착할 위치에 고정용 나사를 이용하여 브래킷을 단단히 고정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device1-bs3.svg",
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
                src: "/img/device/installation-wall1-bs3.png",
                className: "none",
                width: "60%"
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
                        children: "200 mm"
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
                        children: "180 mm"
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
                        children: "150 mm"
                      })]
                    })]
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(Column, {
              className: "text--center",
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/device/installation-wall2-bs3.png",
                className: "none",
                width: "60%"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "모바일 출입카드를 사용할 경우 BLE 신호 간섭을 피하기 위해 장치 사이에 최소 1 m 이상의 거리를 두고 설치하세요."
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "케이블 커버를 장착한 뒤 커버에 끼워져 있는 6개의 나사를 돌려 단단히 고정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device2-bs3.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IP65 등급을 만족하기 위해 제품과 케이블을 연결한 뒤 반드시 케이블 커버를 사용해야 합니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "고정된 브래킷 위에 제품을 장착하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device3-bs3.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제품 고정용 나사를 돌려 제품과 브래킷을 조립하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device4-bs3.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "브래킷과 제품을 조립할 때 향상된 보안을 위해 제품 고정용 나사 대신 동봉된 브래킷 고정용 나사(별 모양)를 이용할 수 있습니다."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_power_connection/* ["default"] */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_network_connection/* ["default"] */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_input_connetion/* ["default"] */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_relay_connection/* ["default"] */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_standalone_connection/* ["default"] */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_connection_standalone_secure_notes/* ["default"] */.Ay, {
      product: "BioStation 3",
      product_2: "FaceStation F2"
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_secure_io2_connection/* ["default"] */.Ay, {}), "\n", "\n", (0,jsx_runtime.jsx)(_device_connection_standalone_secure_notes/* ["default"] */.Ay, {
      product: "BioStation 3",
      product_2: "FaceStation F2"
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_device_wiegand_connection/* ["default"] */.Ay, {})]
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