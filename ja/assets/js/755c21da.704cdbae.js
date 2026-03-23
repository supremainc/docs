"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["68106"], {
79742: (function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = (/* unused pure expression or super */ null && ([]));
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ..._provideComponents(),
    ...props.components
  }, {Badge, Include, Xclude} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Include) _missingMdxReference("Include", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return _jsxs(_components.admonition, {
    type: "info",
    children: [_jsx(Xclude, {
      product: "facestation_f2,biostation_3_max",
      children: _jsxs(_components.ul, {
        children: ["\n", _jsxs(_components.li, {
          children: ["장치를 설치할 최적의 높이는 ", props.height, " cm입니다."]
        }), "\n"]
      })
    }), _jsx(Include, {
      product: "facestation_f2",
      children: _jsxs(_components.ul, {
        children: ["\n", _jsxs(_components.li, {
          children: ["\n", _jsx(_components.p, {
            children: "장치를 설치할 최적의 높이는 아래와 같습니다."
          }), "\n", _jsxs(_components.ul, {
            children: ["\n", _jsxs(_components.li, {
              children: ["\n", _jsxs(_components.p, {
                children: [_jsx(Badge, {
                  only: true,
                  children: "FSF2-ODB"
                }), ": ", props.height1, " cm"]
              }), "\n"]
            }), "\n", _jsxs(_components.li, {
              children: ["\n", _jsxs(_components.p, {
                children: [_jsx(Badge, {
                  only: true,
                  children: "FSF2-DB, FSF2-AB"
                }), ": ", props.height2, " cm"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), _jsx(Include, {
      product: "biostation_3_max",
      children: _jsxs(_components.ul, {
        children: ["\n", _jsxs(_components.li, {
          children: ["\n", _jsx(_components.p, {
            children: "장치를 설치할 최적의 높이는 아래와 같습니다."
          }), "\n", _jsxs(_components.ul, {
            children: ["\n", _jsxs(_components.li, {
              children: ["\n", _jsxs(_components.p, {
                children: [_jsx(Badge, {
                  only: true,
                  children: "BS3M-ODB, BS3M-OAPB"
                }), ": ", props.height1, " cm"]
              }), "\n"]
            }), "\n", _jsxs(_components.li, {
              children: ["\n", _jsxs(_components.p, {
                children: [_jsx(Badge, {
                  only: true,
                  children: "BS3M-DB, BS3M-APB"
                }), ": ", props.height2, " cm"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: "장치를 직사 광선이나 자외선에 직접 노출된 장소에 설치하지 마세요."
        }), "\n"]
      }), "\n", _jsxs(_components.li, {
        children: ["\n", _jsx(_components.p, {
          children: "사용자가 얼굴을 인증할 때 얼굴에 직사광선이 닿지 않도록 설치 위치를 조정하세요."
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ..._provideComponents(),
    ...props.components
  };
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
64902: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_installation_mdx_755_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-installation-mdx-755.json
var site_docs_device_vionyx_installation_mdx_755_namespaceObject = JSON.parse('{"id":"device/vionyx/installation","title":"설치 및 연결","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","source":"@site/docs/device/vionyx/installation.mdx","sourceDirName":"device/vionyx","slug":"/device/vionyx/installation","permalink":"/docs/ja/device/vionyx/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"설치 및 연결","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","keywords":["브래킷","전원","네트워크","입력","릴레이"],"isTranslationMissing":true},"sidebar":"vionyx","previous":{"title":"시작하기","permalink":"/docs/ja/device/vionyx/getting-started"},"next":{"title":"웹 서버 접속 및 설정","permalink":"/docs/ja/device/vionyx/web-server-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_installation-bracket-notes.mdx
var _installation_bracket_notes = __webpack_require__(79742);
;// CONCATENATED MODULE: ./docs/device/vionyx/installation.mdx


const frontMatter = {
	id: 'installation',
	title: '설치 및 연결',
	description: '설치에 필요한 전체 과정과 연결 예시를 제공합니다.',
	keywords: [
		'브래킷',
		'전원',
		'네트워크',
		'입력',
		'릴레이'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "설치 전 주의사항",
  "id": "설치-전-주의사항",
  "level": 2
}, {
  "value": "케이블 연결 및 설정",
  "id": "케이블-연결-및-설정",
  "level": 2
}, {
  "value": "전체 연결 구성도",
  "id": "전체-연결-구성도",
  "level": 3
}, {
  "value": "전원 연결",
  "id": "전원-연결",
  "level": 3
}, {
  "value": "네트워크 연결",
  "id": "네트워크-연결",
  "level": 3
}, {
  "value": "TCP/IP: LAN 연결 (허브와 연결)",
  "id": "tcpip-lan-연결-허브와-연결",
  "level": 4
}, {
  "value": "네트워크 포트 및 서비스",
  "id": "네트워크-포트-및-서비스",
  "level": 4
}, {
  "value": "RS-485 연결",
  "id": "rs-485-연결",
  "level": 3
}, {
  "value": "I/O (ALARM IN, RELAY) 연결",
  "id": "io-alarm-in-relay-연결",
  "level": 3
}, {
  "value": "AUDIO 연결",
  "id": "audio-연결",
  "level": 3
}, {
  "value": "외부 메모리 및 장치 연결",
  "id": "외부-메모리-및-장치-연결",
  "level": 2
}, {
  "value": "카메라 설치하기",
  "id": "카메라-설치하기",
  "level": 2
}, {
  "value": "제품 장착 위치(높이) 설정",
  "id": "제품-장착-위치높이-설정",
  "level": 3
}, {
  "value": "설치하기",
  "id": "설치하기",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
  }, {Image, Magnify} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Magnify) _missingMdxReference("Magnify", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "설치에 필요한 전체 과정과 연결 예시를 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "설치-전-주의사항",
      children: "설치 전 주의사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라를 설치하기 전, 아래의 주의 사항들을 반드시 숙지하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 무게의 5배를 견딜 수 있는 장소에 설치하셔야 합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "케이블이 부적절한 곳에 끼이거나 전선의 피복이 손상될 경우 제품의 손상이나 화재로 이어질 수 있으므로 주의하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라를 설치할 때, 다른 사람이 설치 장소에 접근하는 일이 없도록 해야 합니다. 그리고 귀중품이 아래에 놓여 있다면 즉시 치우세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "무리한 힘을 가하여 억지로 제품을 설치할 경우 오동작으로 인해 카메라에 손상을 줄 수 있습니다. 규격에 맞지 않는 도구를 사용하여 강제로 조립할 경우 제품이 파손될 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "케이블-연결-및-설정",
      children: "케이블 연결 및 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "전체-연결-구성도",
      children: "전체 연결 구성도"
    }), "\n", (0,jsx_runtime.jsx)(Magnify, {
      src: "/img/device/system-cs20.svg",
      width: "80%",
      zoomFactor: .4,
      mgWidth: 500,
      mgHeight: 500
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "전원-연결",
      children: "전원 연결"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-power-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "전원 장치(또는 어댑터)와 PoE+ 전원 장치를 함께 연결하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "네트워크-연결",
      children: "네트워크 연결"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tcpip-lan-연결-허브와-연결",
      children: "TCP/IP: LAN 연결 (허브와 연결)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일반 타입의 CAT-5e 케이블을 사용하여 허브와 연결할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이더넷 케이블을 통해 전원을 공급하는 PoE+를 지원합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-network-hub-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "네트워크-포트-및-서비스",
      children: "네트워크 포트 및 서비스"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 제품은 네트워크 통신 및 원활한 서비스 운영을 위해 아래와 같은 포트를 사용합니다."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "프로토콜"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "서비스"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "서버와 장치 간의 통신 서비스 및 장치 운영 상태 전환 서비스를 위해 사용됩니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "UDP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "네트워크 상에서 장치를 검색하기 위한 장치 검색 서비스에 사용됩니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "상기 포트는 제품의 정상적인 네트워크 기능 제공을 위해 사용되며, 방화벽 또는 네트워크 보안 설정 시 해당 포트의 사용이 허용되어야 합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-485-연결",
      children: "RS-485 연결"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-rs485-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "io-alarm-in-relay-연결",
      children: "I/O (ALARM IN, RELAY) 연결"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "별도의 I/O 장치를 연결하지 않고 제품을 직접 출입문 잠금 장치, 퇴실 버튼, 출입문 센서 등에 연결할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-io-inout-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "출입문 잠금 장치가 작동할 때 발생하는 역전류로부터 릴레이를 보호하기 위해 그림과 같이 출입문 잠금 장치 배선 양쪽에 다이오드를 설치하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "제품과 출입문 잠금 장치는 별도의 전원을 사용하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "슈프리마의 지능형 장치에는 편의를 제공하기 위해 별도의 컨트롤러 없이 독립형으로 연결하여 출입문을 직접 열거나 잠글 수 있도록 하는 릴레이가 내장되어 있습니다. 그러나 향상된 보안이 요구되는 출입통제 애플리케이션의 경우 잠재적으로 출입문 잠금 해제를 유발할 수 있는 변조 공격을 방지하기 위해 장치에 내장된 릴레이를 사용하지 않는 것이 좋습니다. 이러한 애플리케이션의 경우 잠금 제어를 위해 출입문 내부의 안전한 위치에 설치된 슈프리마의 Secure I/O 2, DM-20, CoreStation과 같은 별도의 릴레이 장치를 사용할 것을 권장합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "다이오드의 설치 방향에 주의하세요. 다이오드는 출입문 잠금 장치와 가깝게 설치하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "audio-연결",
      children: "AUDIO 연결"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "오디오 입력(LINE IN): 오디오 소스를 연결하세요. 제품 전면에 내장 마이크가 지원됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "오디오 출력(LINE OUT): 앰프에 연결하세요. 이 제품에는 내장 오디오 앰프가 없으므로 별도의 앰프와 스피커를 준비하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-audio-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "외부-메모리-및-장치-연결",
      children: "외부 메모리 및 장치 연결"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "USB: Wi-Fi, BLE 등 USB (Type-A) 기반 액세서리를 삽입하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Micro SD 카드: Micro SD 카드를 삽입하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-설치하기",
      children: "카메라 설치하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "제품-장착-위치높이-설정",
      children: "제품 장착 위치(높이) 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "제품을 장착할 위치를 정하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-recommended-fsf2.png",
      className: "none",
      width: "35%",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치를 설치할 최적의 높이는 124 cm입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치를 직사 광선이나 자외선에 직접 노출된 장소에 설치하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자가 얼굴을 인증할 때 얼굴에 직사광선이 닿지 않도록 설치 위치를 조정하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "설치하기",
      children: "설치하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제공된 T10 별 모양 드라이버를 사용하여 나사를 반시계 방향으로 풀고 카메라의 커버를 분리하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation1-vionyx.svg",
          className: "none",
          width: "20%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "마운트 플레이트의 고정 나사를 반시계 방향으로 풀어 마운트 플레이트와 카메라 본체를 분리하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation2-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "촬영 방향을 고려하여 설치할 위치에 마운트 플레이트를 대고 나사 홀과 케이블 홀의 위치를 표시한 후 타공하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation3-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "천장이 아닌 벽면에 설치할 경우, 마운트 플레이트의 빨간색 삼각형이 12시 방향에 위치하도록 설치하세요."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "고정용 나사를 사용하여 마운트 플레이트를 단단히 고정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation4-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "연결할 케이블(전원, 네트워크, 오디오/알람 케이블 등)을 마운트 플레이트의 홀을 통해 빼내세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation5-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 본체에 Micro SD 카드 또는 USB (Type-A)를 삽입하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 본체에서 이더넷 케이블용 방수 고무, 방수 고무 홀 플러그를 분리하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation6-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 본체의 알맞은 홀로 케이블을 통과시키세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation7-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "마운트 플레이트의 고정 나사가 끝까지 풀어졌는지 확인한 후, 카메라 본체를 인쇄된 각인의 중심(삼각형)에 맞춰 결합하고 브래킷 고정 나사를 시계 방향으로 돌려 고정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation8-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "카메라의 각도가 잘못된 경우, 카메라 본체를 좌우로 회전하여 최대 15도(좌우 각 8도)까지 설치 각도를 보정할 수 있습니다."
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation9-vionyx.svg",
            className: "none",
            width: "50%",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "T10 별 모양 드라이버를 사용하여 브래킷 고정 나사를 다시 한번 단단히 조이세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation10-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 케이블을 알맞는 포트에 연결하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation11-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "이더넷 케이블 연결하기"
            })
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation11-1-vionyx.svg",
            className: "none",
            width: "30%",
            alone: true
          }), (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "이더넷 케이블에 이더넷 케이블용 방수 고무를 끼우세요."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "이더넷 홀에 이더넷 케이블용 방수 고무를 끼우세요."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "이더넷 케이블용 방수 고무에 조인트(Joint)와 너트를 체결하세요."
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "그 외 케이블 연결하기"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "방수 고무 홀 플러그를 분리한 홀에 연결 케이블의 방수 고무를 끼우세요."
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation11-2-vionyx.svg",
            className: "none",
            width: "30%",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "커버를 카메라 본체 위로 눌러 끼운 후, T10 별 모양 드라이버를 사용하여 3개의 나사를 단단히 고정하세요."
        }), "\n", (0,jsx_runtime.jsxs)("div", {
          className: "grid-container",
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation12-vionyx.svg",
            className: "none",
            width: "50%",
            alone: true
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation13-vionyx.svg",
            className: "none",
            width: "50%",
            alone: true
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "커버의 AI 로고가 마운트 플레이트의 빨간색 삼각형 기준 6시 방향에 위치하도록 하세요."
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation14-vionyx.svg",
            className: "none",
            width: "30%",
            alone: true
          })]
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