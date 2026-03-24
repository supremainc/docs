"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["68106"], {
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
var site_docs_device_vionyx_installation_mdx_755_namespaceObject = JSON.parse('{"id":"device/vionyx/installation","title":"설치 및 연결하기","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","source":"@site/docs/device/vionyx/installation.mdx","sourceDirName":"device/vionyx","slug":"/device/vionyx/installation","permalink":"/docs/device/vionyx/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"설치 및 연결하기","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","keywords":["마운트 플레이트","전원","네트워크","입력","릴레이"],"isTranslationMissing":false},"sidebar":"vionyx","previous":{"title":"시작하기","permalink":"/docs/device/vionyx/getting-started"},"next":{"title":"웹 서버 접속 및 설정","permalink":"/docs/device/vionyx/web-server-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx/installation.mdx


const frontMatter = {
	id: 'installation',
	title: '설치 및 연결하기',
	description: '설치에 필요한 전체 과정과 연결 예시를 제공합니다.',
	keywords: [
		'마운트 플레이트',
		'전원',
		'네트워크',
		'입력',
		'릴레이'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "카메라 설치하기",
  "id": "카메라-설치하기",
  "level": 2
}, {
  "value": "설치 전 주의사항",
  "id": "설치-전-주의사항",
  "level": 3
}, {
  "value": "설치하기",
  "id": "설치하기",
  "level": 3
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
  "value": "ALARM IN, RELAY 입출력 연결",
  "id": "alarm-in-relay-입출력-연결",
  "level": 3
}, {
  "value": "AUDIO 연결",
  "id": "audio-연결",
  "level": 3
}, {
  "value": "Micro SD 카드 및 USB 장치 연결",
  "id": "micro-sd-카드-및-usb-장치-연결",
  "level": 2
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
  }, {Image, Magnify, Row, Table, Tbody, Td, Th, Thead} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Magnify) _missingMdxReference("Magnify", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  if (!Thead) _missingMdxReference("Thead", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "설치에 필요한 전체 과정과 연결 예시를 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-설치하기",
      children: "카메라 설치하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 절차에 따라 카메라를 안전하게 설치하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "설치-전-주의사항",
      children: "설치 전 주의사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라를 설치하기 전, 아래의 주의 사항들을 반드시 숙지하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카메라 무게의 최소 5배의 하중을 견딜 수 있는 장소에 설치하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "케이블이 부적절한 곳에 끼이거나 전선의 피복이 손상될 경우 제품 파손이나 화재로 이어질 수 있으므로 주의하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카메라를 설치할 때, 다른 사람이 설치 장소에 접근하지 못하도록 통제하세요. 설치 장소 아래에 귀중품이나 파손 위험이 있는 물건이 있다면 사전에 치우세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "무리한 힘을 가하여 억지로 조립할 경우 제품 오동작 및 파손의 원인이 될 수 있습니다. 반드시 규격에 맞는 도구를 사용하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "방수/방진 관련 유의사항"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "본 제품은 IP66 및 IP67 등급을 충족하여 방수/방진 기능을 제공하지만 직접적인 물 분사나 침수가 지속되는 환경에는 설치하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "설치 중 커버를 열었을 때 내부에 수분이나 먼지가 유입되지 않도록 주의하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "케이블 연결 시 제공된 방수 부품을 올바르게 체결해야 합니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "설치하기",
      children: "설치하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "본 카메라는 넓은 시야각 확보를 위해 기본적으로 천장 설치를 권장합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "직사광선이나 자외선에 직접 노출된 장소에 설치하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "AI 기반 얼굴 및 객체 인식 성능이 저하될 수 있으므로, 렌즈에 직사광선이 직접 닿거나 역광이 심한 곳은 피하여 설치 위치를 조정하세요."
          }), "\n"]
        }), "\n"]
      })
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
          children: "카메라 본체의 Micro SD 카드 슬롯에 Micro SD 카드를 삽입하세요. USB (Type-A) 기반 기타 액세서리를 연결할 경우, USB 포트에 액세서리를 연결하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "촬영 방향을 고려하여 설치할 위치에 마운트 플레이트를 대고 나사 홀과 케이블 홀의 위치를 표시한 후 타공하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation3-vionyx.png",
          className: "none",
          width: "60%",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "천장이 아닌 벽면에 설치할 경우, 마운트 플레이트의 빨간색 삼각형이 12시 방향(북쪽)에 위치하도록 설치하세요."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "연결할 케이블(전원, 네트워크, 오디오/알람 케이블 등)을 마운트 플레이트의 알맞은 홀로 통과시키세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation5-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
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
          children: "카메라 본체에서 이더넷 케이블용 방수 고무, 방수 고무 홀 플러그를 분리한 후 필요한 케이블을 본체에 결합하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation6-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
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
                children: "이더넷 케이블에 분리한 이더넷 케이블용 방수 고무를 끼우세요."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "본체의 이더넷 홀에 이더넷 케이블용 방수 고무를 결합하세요."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "이더넷 케이블용 방수 고무에 조인트와 너트를 체결하세요."
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "그 외 케이블 연결하기"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "본체의 방수 고무 홀 플러그를 분리한 홀에 연결 케이블을 통과시키고 방수 고무를 결합하세요."
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation11-2-vionyx.svg",
            className: "none",
            width: "30%",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "마운트 플레이트의 고정 나사를 끝까지 풀고, 카메라 본체를 인쇄된 각인의 중심(빨간색 삼각형)에 맞춰 결합한 후 브래킷 고정 나사를 시계 방향으로 돌려 고정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation8-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "카메라 각도의 조정이 필요한 경우, 카메라 본체를 좌우로 회전하여 최대 15도(좌우 각 8도)까지 설치 각도를 조정할 수 있습니다."
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
          children: "커버를 카메라 본체 위에 결합하고 T10 별 모양 드라이버를 사용하여 3개의 나사를 단단히 고정하세요."
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
            children: "커버의 AI 로고가 마운트 플레이트의 빨간색 삼각형 기준 6시 방향(남쪽)에 위치하도록 하세요."
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation14-vionyx.svg",
            className: "none",
            width: "30%",
            alone: true
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "커버 고정 시 나사를 완전히 조이지 않을 경우 방수에 문제가 발생할 수 있습니다. (IP66/IP67)"
          })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "제품의 USB 단자는 카메라의 설치 편의성을 위한 확장용 단자이며 촬영/감시용으로는 부적합합니다."
      })
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
            children: "전원 장치(또는 어댑터)와 PoE+ 전원 장치를 동시에 연결하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "전원 어댑터는 IEC/EN 62368-1 승인을 받은 제품으로, 카메라의 최대 소모 전력 이상의 출력을 가진 제품을 사용하세요. 전원 어댑터에 다른 기기를 함께 연결하여 사용하려면 카메라와 다른 기기의 소모 전력을 합한 용량 이상의 어댑터를 사용해야 합니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["최대 소모 전류 규격은 제품 사양의 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "product-specifications#specs.power",
                children: "전원"
              }), "을 참고하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "전원 연결 시 제품과 전원 장치 간의 거리에 주의하세요. 제품과 전원 장치는 최대한 가깝게 설치해야 합니다. 올바르게 연결하지 않을 경우 제품이 오작동할 수 있으므로 주의하세요. 제품과 전원 장치의 거리가 먼 경우 16 AWG 또는 18 AWG 케이블을 사용할 것을 권장합니다. 사용하는 케이블의 규격과 설치 환경에 따라 연결할 수 있는 거리가 다를 수 있습니다. 이 제품은 DC 12V 전원을 지원하므로, 각 케이블 규격에 따른 최대 연장 길이를 확인하여 전원을 올바르게 연결하세요."
          }), "\n", (0,jsx_runtime.jsxs)(Table, {
            children: [(0,jsx_runtime.jsx)(Thead, {
              children: (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Th, {
                  children: "케이블 규격"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "최대 연장 길이"
                })]
              })
            }), (0,jsx_runtime.jsxs)(Tbody, {
              children: [(0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "16 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "50 m"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "18 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "30 m"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "20 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "20 m"
                })]
              })]
            })]
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
          children: "일반적인 CAT-5e 케이블을 사용하여 허브와 연결할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이더넷 케이블을 통해 데이터와 전원을 동시에 공급하는 PoE+를 지원합니다."
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
        children: "상기 포트는 제품의 정상적인 네트워크 기능 제공을 위해 사용되므로, 방화벽 또는 네트워크 보안 설정 시 해당 포트의 사용이 허용되어야 합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-485-연결",
      children: "RS-485 연결"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RS-485 통신을 통해 외부 장치와 연결할 수 있습니다. 배선 시 극성(A/B)에 주의하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-rs485-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alarm-in-relay-입출력-연결",
      children: "ALARM IN, RELAY 입출력 연결"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "별도의 I/O 장치 없이 제품의 내장 릴레이를 사용하여 외부 알람 장치(경광등, 사이렌 등), 출입문 잠금 장치, 퇴실 버튼, 출입문 센서 등에 직접 연결할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-io-inout-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "출입문 잠금 장치나 경광등이 작동할 때 발생하는 역전류로부터 릴레이를 보호하기 위해, 그림과 같이 배선 양쪽에 다이오드를 설치하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "제품과 연결된 외부 장치(출입문 잠금 장치 등)는 별도의 전원을 사용하세요."
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
        children: "다이오드의 설치 방향에 주의하세요. 다이오드는 연결된 외부 장치와 최대한 가깝게 설치하세요."
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
      id: "micro-sd-카드-및-usb-장치-연결",
      children: "Micro SD 카드 및 USB 장치 연결"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Micro SD 카드: 영상 저장을 위한 Micro SD 카드를 삽입하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "USB: USB (Type-A) 기반 기타 액세서리를 연결하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Micro SD/SDHC/SDXC 카드 권장 사양"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "권장 용량: 16GB ~ 1TB"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "본 제품은 다음 제조사 제품군의 메모리 카드 사용을 권장합니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "제조사: Samsung, SanDisk, Transcend"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "제품군: High endurance, Pro endurance"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카드 제조사별/종류별 호환성은 차이가 날 수 있습니다."
          }), "\n"]
        }), "\n"]
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