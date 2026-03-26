"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["78704"], {
44078: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_configure_network_mdx_625_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-configure-network-mdx-625.json
var site_docs_device_vionyx_webserver_configure_network_mdx_625_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/configure-network","title":"네트워크 설정하기","description":"IPv4 주소를 자동 또는 수동으로 설정하고, 웹 UI와 영상 스트리밍 포트를 구성하며, CLUe 클라우드 서비스에 연결하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/configure-network.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/configure-network","permalink":"/docs/es/device/vionyx_webserver/configure-network","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/configure-network.mdx","tags":[],"version":"current","frontMatter":{"id":"configure-network","title":"네트워크 설정하기","description":"IPv4 주소를 자동 또는 수동으로 설정하고, 웹 UI와 영상 스트리밍 포트를 구성하며, CLUe 클라우드 서비스에 연결하는 방법을 안내합니다.","keywords":["네트워크","IPv4","DHCP","Static","포트","CLUe","클라우드"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"날짜와 시간 설정하기","permalink":"/docs/es/device/vionyx_webserver/configure-date-time"},"next":{"title":"사용자 관리하기","permalink":"/docs/es/device/vionyx_webserver/manage-people"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/configure-network.mdx


const frontMatter = {
	id: 'configure-network',
	title: '네트워크 설정하기',
	description: 'IPv4 주소를 자동 또는 수동으로 설정하고, 웹 UI와 영상 스트리밍 포트를 구성하며, CLUe 클라우드 서비스에 연결하는 방법을 안내합니다.',
	keywords: [
		'네트워크',
		'IPv4',
		'DHCP',
		'Static',
		'포트',
		'CLUe',
		'클라우드'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "IP 주소 자동 설정",
  "id": "ip-주소-자동-설정",
  "level": 2
}, {
  "value": "고정 IP 주소 설정",
  "id": "고정-ip-주소-설정",
  "level": 2
}, {
  "value": "포트 설정",
  "id": "포트-설정",
  "level": 2
}, {
  "value": "CLUe 클라우드 연결",
  "id": "clue-클라우드-연결",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "네트워크 설정에서는 장치의 IPv4 주소, 서브넷, 게이트웨이, DNS 서버를 구성하고, 웹 UI와 실시간 영상 스트리밍에 사용되는 포트를 설정하며, Suprema CLUe 클라우드 서비스 연결을 관리합니다. 네트워크 환경에 맞게 자동 할당(DHCP) 또는 수동 설정(Static) 중 하나를 선택하여 구성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 네트워크 설정을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DHCP가 지원되는 네트워크 환경에서 자동으로 IP 주소를 받아 구성하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 IP 주소로 고정하여 안정적인 네트워크 접근이 필요할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기본 포트가 다른 장치와 충돌하거나 보안상 필요로 포트를 변경할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Suprema CLUe 클라우드에 장치를 등록하여 원격 관리가 필요할 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "네트워크 설정 변경, 특히 IP 주소 변경 시 기존 연결이 끊어질 수 있습니다. 변경된 IP 주소로 다시 접속해야 합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ip-주소-자동-설정",
      children: "IP 주소 자동 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DHCP는 네트워크에서 IP 주소를 자동으로 할당하는 방식입니다. 대부분의 일반적인 네트워크 환경에서 설정 없이 자동으로 구성됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "network",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "network",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ip_type",
            product: "cam"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "dhcp",
            product: "cam"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-settings-network-dhcp.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DNS"
          }), " 서버 주소가 필요하다면, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "dns_1",
            product: "cam"
          }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "dns_2",
            product: "cam"
          }), " 입력란에 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "mtu",
            product: "cam"
          }), " 입력란에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MTU"
          }), "(Maximum Transmission Unit) 값을 필요에 따라 조정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기본값은 1500입니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "1280에서 1500 사이의 값으로 설정할 수 있습니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["네트워크 설정을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정이 정상 저장되면 자동 할당된 IP 주소가 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ip_address",
        product: "cam"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "subnet_mask",
        product: "cam"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "gateway",
        product: "cam"
      }), " 입력란에 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "DHCP 모드가 기본값으로 설정되어 있으며, 대부분의 표준 네트워크 환경에서 별도 설정 없이 자동으로 작동합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "고정-ip-주소-설정",
      children: "고정 IP 주소 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "네트워크 환경에 따라 특정 IP 주소로 고정하여 안정적인 네트워크 접근이 필요할 때 수동으로 IP 주소를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "network",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "network",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ip_type",
            product: "cam"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "static",
            product: "cam"
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-settings-network-static.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ip_address",
            product: "cam"
          }), " 입력란에 할당받은 IPv4 주소를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예: 192.168.111.11"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "subnet_mask",
            product: "cam"
          }), " 입력란에 서브넷 마스크를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예: 255.255.255.0"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "gateway",
            product: "cam"
          }), " 입력란에 게이트웨이 주소를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dns_1",
            product: "cam"
          }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "dns_2",
            product: "cam"
          }), " 입력란에 DNS 서버 주소를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "mtu",
            product: "cam"
          }), " 입력란의 값을 필요에 따라 조정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기본값은 1500입니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "1280에서 1500 사이의 값으로 설정할 수 있습니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["네트워크 설정을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["각 입력란에 올바른 형식의 주소를 입력하지 않으면 입력란 주변에 빨간색 테두리가 표시되고, ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "save",
          product: "cam"
        }), " 버튼이 비활성화됩니다. 모든 입력란을 올바르게 입력한 후 다시 시도하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "포트-설정",
      children: "포트 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "port",
        product: "cam"
      }), " 섹션에서는 웹 UI 접속(HTTP, HTTPS)과 영상 스트리밍(RTSP)에 사용되는 포트 번호를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "network",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "network",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "port",
            product: "cam"
          }), " 섹션에서 필요한 포트를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-settings-network-port.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "http",
                product: "cam"
              }), ": 웹 UI에 암호화 없이 접속하는 포트(기본값: 80)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "https",
                product: "cam"
              }), ": 웹 UI에 암호화하여 접속하는 포트(기본값: 443)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "rtsp",
                product: "cam"
              }), ": RTSP 프로토콜로 영상을 스트리밍하는 포트(기본값: 554)"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["포트 설정을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "각 포트 입력란에 1~65535 범위의 번호를 입력할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "동일한 포트 번호를 여러 개 설정할 수 없습니다. 각 포트는 고유한 번호를 가져야 합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "포트 설정이 기본값과 다른 경우, 웹 UI 접속 주소에 포트 번호를 명시해야 합니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["HTTP 포트가 8000인 경우: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "http://{ip_address}:8000"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["HTTPS 포트가 8443인 경우: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "https://{ip_address}:8443"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clue-클라우드-연결",
      children: "CLUe 클라우드 연결"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "슈프리마 CLUe는 클라우드 기반 원격 관리 서비스입니다. CLUe에 연결하면 인터넷을 통해 원격에서 장치를 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "network",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "network",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "cloud",
            product: "cam"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "clue",
            product: "cam"
          }), " 토글을 클릭해 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시스템이 인터넷 연결과 CLUe 서버 연결을 확인합니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["연결 성공: ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "clue_enabled",
                product: "cam"
              }), " 메시지가 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["인터넷 연결 실패: ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "clue_disabled",
                product: "cam"
              }), " 메시지가 표시됩니다. 인터넷 연결을 확인한 후 다시 시도하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "clue",
              product: "cam"
            }), " 옵션을 비활성화하면 CLUe 서버와의 연결이 끊어지고, 클라우드를 통한 원격 관리를 할 수 없습니다. 하지만 CLUe 서버 측의 등록 정보는 유지됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CLUe 연결 성공 및 실패는 시스템 로그에 기록됩니다."
          }), "\n"]
        }), "\n"]
      })
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