"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6304"], {
5983: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_device_details_network_mdx_33b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-device-details-network-mdx-33b.json
var site_docs_platform_biostar_x_settings_device_details_network_mdx_33b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-network","title":"네트워크 설정하기","description":"장치의 TCP/IP, RS-485, 서버 통신 등의 네트워크 설정을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-device-details-network.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-network","permalink":"/docs/en/platform/biostar_x/settings-device-details-network","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-network.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-network","title":"네트워크 설정하기","description":"장치의 TCP/IP, RS-485, 서버 통신 등의 네트워크 설정을 안내합니다.","keywords":["장치","네트워크","TCP/IP","RS-485","서버 통신","시리얼 통신","인텔리전트 슬레이브"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"기본 정보 설정하기","permalink":"/docs/en/platform/biostar_x/settings-device-details-info"},"next":{"title":"인증 설정하기","permalink":"/docs/en/platform/biostar_x/settings-device-details-auth"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-device-details-network.mdx


const frontMatter = {
	id: 'settings-device-details-network',
	title: '네트워크 설정하기',
	description: '장치의 TCP/IP, RS-485, 서버 통신 등의 네트워크 설정을 안내합니다.',
	keywords: [
		'장치',
		'네트워크',
		'TCP/IP',
		'RS-485',
		'서버 통신',
		'시리얼 통신',
		'인텔리전트 슬레이브'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "TCP/IP 설정",
  "id": "tcpip-설정",
  "level": 2
}, {
  "value": "유동 IP 설정",
  "id": "유동-ip-설정",
  "level": 3
}, {
  "value": "고정 IP 설정",
  "id": "고정-ip-설정",
  "level": 3
}, {
  "value": "무선 랜 설정",
  "id": "무선-랜-설정",
  "level": 2
}, {
  "value": "서버 통신 설정",
  "id": "서버-통신-설정",
  "level": 2
}, {
  "value": "시리얼 통신 설정",
  "id": "시리얼-통신-설정",
  "level": 2
}, {
  "value": "인텔리전트 슬레이브 설정",
  "id": "인텔리전트-슬레이브-설정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.network",
        product: "2"
      }), " 섹션에서는 등록한 장치의 네트워크 설정을 안내합니다. 장치의 TCP/IP, RS-485, 서버 통신 등의 네트워크를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-network.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 종류에 따라 설정할 수 있는 네트워크 옵션은 다를 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자가 임의로 변경한 사항이 있다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " 버튼을 클릭하세요. 변경 사항을 저장하지 않으면 장치에 적용되지 않습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tcpip-설정",
      children: "TCP/IP 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tcpIpSetting",
        product: "2"
      }), " 그룹에서는 장치의 IP 주소를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치를 등록할 때 IP 주소 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-adding-devices#setipaddress",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "유동-ip-설정",
      children: "유동 IP 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치가 유동 IP를 사용하도록 설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.useDhcp",
        product: "2"
      }), " 그룹을 선택하세요. 장치가 DHCP 서버로부터 IP 주소를 자동으로 할당받습니다. 이 경우 장치의 IP 주소는 변경될 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "고정-ip-설정",
      children: "고정 IP 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치의 IP 주소를 고정으로 설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.useDhcp",
        product: "2"
      }), " 그룹을 선택 해제하세요. 아래의 네트워크 정보를 입력할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipAddress",
            product: "2"
          }), ": 장치의 IP 주소를 입력하세요. IP 주소는 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "xxx.xxx.xxx.xxx"
          }), " 형식으로 입력할 수 있으며 각 옥텟은 0~255 범위의 숫자로만 입력할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.subnetMask",
            product: "2"
          }), ": 장치의 서브넷 마스크를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.gateway",
            product: "2"
          }), ": 장치의 게이트웨이 주소를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.devicePort",
            product: "2"
          }), ": 장치의 포트 번호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.dnsServerAddress",
            product: "2"
          }), ": 장치의 DNS 서버 주소를 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DNS 서버 주소를 입력할 수 있는 장치와 펌웨어 버전 보기"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation L2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation A2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2 펌웨어 1.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite Net 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry Plus 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass S2 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceLite 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "무선-랜-설정",
      children: "무선 랜 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.wlan",
        product: "2"
      }), " 그룹에서는 장치의 무선 랜 설정을 켜거나 끌 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.enable",
        product: "2"
      }), " 옵션을 선택하거나 해제하세요. 세부 항목은 장치에서 설정할 수 있으며, 자세한 내용은 장치의 사용자 가이드를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "무선 랜 설정을 지원하는 장치는 아래를 참고하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation A2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../../device/biostation_3/settings#wireless",
              children: "BioStation 3"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "서버-통신-설정",
      children: "서버 통신 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.server",
        product: "2"
      }), " 그룹에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버와 통신하는 방식을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceToServerConnection",
            product: "2"
          }), ": 이 옵션을 선택하면 장치에서 연결할 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서버의 IP 주소와 포트 번호를 입력할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverIP",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서버의 IP 주소 또는 도메인 주소를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverPort",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서버의 포트 번호를 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["이 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 서버의 IP 주소가 변경될 때 유용하게 사용할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 서버의 IP 주소를 변경하기 전에 여러 개의 장치에서 이 옵션을 미리 설정하면 장치가 자동으로 변경된 IP 주소로 연결합니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.serverIP",
          product: "2"
        }), "에 도메인을 입력할 수 있는 장치와 펌웨어 버전 보기"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation L2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation A2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2 펌웨어 1.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry P2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceLite 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite Net 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry Plus 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass S2 펌웨어 2.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시리얼-통신-설정",
      children: "시리얼 통신 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.serialSetting",
        product: "2"
      }), " 그룹에서는 RS-485 통신 방식으로 연결된 장치의 모드와 전송 속도, 표시할 인증 결과를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.rs485",
            product: "2"
          }), ": RS-485 모드를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.baudRate",
            product: "2"
          }), ": RS-485 통신 속도를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdpAuthResult",
            product: "2"
          }), ": 타사 컨트롤러와 연동해 장치를 사용할 때 장치 화면에 표시할 인증 결과를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpControllerResult",
                product: "2"
              }), ": 타사 컨트롤러의 인증 결과를 장치에 표시할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpDeviceResult",
                product: "2"
              }), ": 장치의 인증 결과를 표시할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.osdpAuthResult",
          product: "2"
        }), " 옵션은 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.rs485",
          product: "2"
        }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.rs485.slave",
          product: "2"
        }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.rs485.default",
          product: "2"
        }), "을 선택했을 때 활성화됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "인텔리전트-슬레이브-설정",
      children: "인텔리전트 슬레이브 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.intelligentPD",
        product: "2"
      }), " 그룹에서는 슈프리마 장치와 타사 컨트롤러를 연결한 환경에서 사용자가 지문으로 인증했을 때, 인증 결과를 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#osdp",
        children: "Open Supervised Device Protocol(OSDP)"
      }), " 카드 데이터로 전송하여 다수의 1:1 또는 1", ":N", " 매칭을 지원합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdUseFailCode",
            product: "2"
          }), ": 인텔리전트 슬레이브를 사용할 때 인증 실패 등 예외 상황이 발생하면, 예외 코드를 10진수(0~18446744073709551615) 또는 16진수(0~FFFFFFFFFFFFFFFF) 형식으로 입력해 정확한 로그를 남길 수 있습니다. 16진수는 숫자 또는 영문자로 입력할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdCardFormat",
            product: "2"
          }), ": 인증을 성공할 때 카드 아이디 또는 사용자 아이디를 출력할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdOsdpID",
            product: "2"
          }), ": 장치의 OSDP 주소를 입력하세요. 0~126 사이의 숫자로 입력할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.ipdUseFailCode",
              product: "2"
            }), "의 데이터 크기는 최대 8바이트까지 입력할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.intelligentPD",
              product: "2"
            }), " 옵션은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.rs485",
              product: "2"
            }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.rs485.default",
              product: "2"
            }), "을 선택했을 때 활성화됩니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.intelligentPD",
          product: "2"
        }), " 옵션을 지원하는 장치와 펌웨어 버전 보기"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W2 펌웨어 1.6.3 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation L2 펌웨어 1.6.1 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry P2 펌웨어 1.4.1 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 2 펌웨어 1.2.3 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 펌웨어 1.1.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 펌웨어 1.4.1 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2 펌웨어 1.1.2 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n"]
      })]
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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