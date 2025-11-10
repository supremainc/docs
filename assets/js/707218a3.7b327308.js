"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["88083"], {
35265: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_device_manager_ip_device_settings_mdx_707_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-device-manager-ip-device-settings-mdx-707.json
var site_docs_device_device_manager_ip_device_settings_mdx_707_namespaceObject = JSON.parse('{"id":"device/device_manager/ip-device-settings","title":"IP 장치 설정하기","description":"IP 장치의 설정을 변경할 수 있습니다.","source":"@site/docs/device/device_manager/ip-device-settings.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/ip-device-settings","permalink":"/docs/device/device_manager/ip-device-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/ip-device-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"ip-device-settings","title":"IP 장치 설정하기","description":"IP 장치의 설정을 변경할 수 있습니다.","keywords":["IP 장치","네트워크","서버","RS-485","기타","LED/버저","장치 설정","장치 연결","펌웨어 업그레이드","장치 재시작","설정 초기화","비밀번호 변경"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"장치 초기 설정하기","permalink":"/docs/device/device_manager/initial-setup"},"next":{"title":"XPass D2 설정하기","permalink":"/docs/device/device_manager/xpd2-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/device_manager/ip-device-settings.mdx


const frontMatter = {
	id: 'ip-device-settings',
	title: 'IP 장치 설정하기',
	description: 'IP 장치의 설정을 변경할 수 있습니다.',
	keywords: [
		'IP 장치',
		'네트워크',
		'서버',
		'RS-485',
		'기타',
		'LED/버저',
		'장치 설정',
		'장치 연결',
		'펌웨어 업그레이드',
		'장치 재시작',
		'설정 초기화',
		'비밀번호 변경'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "장치 설정 변경하기",
  "id": "장치-설정-변경하기",
  "level": 2
}, {
  "value": "네트워크 설정",
  "id": "네트워크-설정",
  "level": 3
}, {
  "value": "서버",
  "id": "서버",
  "level": 3
}, {
  "value": "RS-485",
  "id": "rs-485",
  "level": 3
}, {
  "value": "기타",
  "id": "기타",
  "level": 3
}, {
  "value": "LED / 버저",
  "id": "led--버저",
  "level": 3
}, {
  "value": "장치 연결하기",
  "id": "connect-device",
  "level": 2
}, {
  "value": "장치 펌웨어 업그레이드하기",
  "id": "device-firmware-upgrade",
  "level": 2
}, {
  "value": "장치 재시작하기",
  "id": "장치-재시작하기",
  "level": 2
}, {
  "value": "설정 초기화하기",
  "id": "설정-초기화하기",
  "level": 2
}, {
  "value": "네트워크 제외 장치 설정 초기화하기",
  "id": "네트워크-제외-장치-설정-초기화하기",
  "level": 2
}, {
  "value": "장치 비밀번호 변경하기",
  "id": "장치-비밀번호-변경하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcFilter, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcFilter) _missingMdxReference("IcFilter", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "IP 장치의 설정을 변경할 수 있습니다. PC에서 관리 프로그램에 접속하여 설정을 변경하거나 커맨드 카드를 이용하는 방식에 비해 빠르고 편리하게 설정을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치의 펌웨어 버전이 낮을 경우 일부 설정이 적용되지 않을 수 있습니다. 전체 설정을 적용하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "다음 문서"
        }), "를 참고하여 펌웨어를 업그레이드하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-설정-변경하기",
      children: "장치 설정 변경하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 네트워크, 서버, RS-485, LED 및 버저, 기타 설정을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "바이오인식 장치는 네트워크 및 서버 설정만 지원합니다."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 블루투스 기능을 활성화한 뒤 Suprema Device Manager를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 화면에서 IP 장치를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "연결 가능한 장치 목록에서 장치 ID를 확인하여 장치를 선택하거나, 연결할 장치에 모바일 기기를 가까이 대세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 비밀번호를 설정한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요. 입력한 비밀번호를 화면에 표시하려면 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-password.svg",
            ico: true
          }), "을 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "장치 비밀번호는 6~32자의 숫자로 설정할 수 있습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "장치 비밀번호를 분실하지 않도록 주의하세요. 장치 비밀번호를 분실한 경우, 장치에 연결하려면 해당 장치를 초기화해야 합니다."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["각 항목을 설정한 후 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_288",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "네트워크-설정",
      children: "네트워크 설정"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-network.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_355",
            product: "dev"
          }), ": 장치가 사용할 포트를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_012",
            product: "dev"
          }), ": 장치가 유동 IP를 사용하도록 설정하려면 활성화하세요. 이 옵션을 활성화하면 네트워크 정보를 직접 입력할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_029",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_068",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_191",
            product: "dev"
          }), ": 장치의 네트워크 정보를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_013",
            product: "dev"
          }), ": DNS 서버 주소를 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "서버",
      children: "서버"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-server.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_188",
            product: "dev"
          }), ": 서버 통신 방식을 설정할 수 있습니다. 서버에서 장치를 검색하여 연결하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_181",
            product: "dev"
          }), "를 선택하세요. 장치에서 연결할 서버 정보를 설정하도록 하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_281",
            product: "dev"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_182",
            product: "dev"
          }), ": 서버의 IP 주소를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_183",
            product: "dev"
          }), ": 서버의 도메인 주소를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_189",
            product: "dev"
          }), ": 서버의 포트를 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-485",
      children: "RS-485"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-rs485.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_050",
            product: "dev"
          }), ": RS-485 모드를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_298",
            product: "dev"
          }), ": RS-485 전송 속도를 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "기타",
      children: "기타"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-others.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_132",
            product: "dev"
          }), ": 메모리 사용 현황을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_150",
            product: "dev"
          }), ": 장치에서 탬퍼 이벤트가 발생할 경우 장치에 저장된 전체 사용자 정보, 전체 로그, 보안 키가 삭제되도록 설정할 수 있습니다. 보안 탬퍼 기능을 사용하려면 활성화하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "led--버저",
      children: "LED / 버저"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/device-manager-led-buzzer.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_272",
            product: "dev"
          }), ": 평상시에 장치 LED에 표시되는 색상을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_325",
            product: "dev"
          }), ": 장치에 카드를 스캔할 때 장치 LED에 표시되는 색상 및 버저음의 재생 횟수를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_262",
            product: "dev"
          }), ": 인증 성공 시 장치 LED에 표시되는 색상 및 버저음의 재생 횟수를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_263",
            product: "dev"
          }), ": 인증 실패 시 장치 LED에 표시되는 색상 및 버저음의 재생 횟수를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "LED는 최대 세 가지 색상이 교차하여 반복적으로 표시되도록 설정할 수 있습니다. 슬롯을 눌러 색상을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-cancel2.svg",
              ico: true
            }), "을 선택하면 해당 슬롯의 색상을 표시할 순서를 건너뛰고 다음 순서의 슬롯에 설정된 색상이 표시됩니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connect-device",
      children: "장치 연결하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "주변에 설치된 IP 장치를 검색하고 연결할 수 있습니다. Suprema Device Manager와 연결하면 장치의 펌웨어를 업그레이드하거나 장치 재시작, 설정 초기화, 네트워크를 제외한 장치 설정 초기화, 관리자 비밀번호 변경 등 다양한 기능을 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 블루투스 기능을 활성화한 뒤 Suprema Device Manager를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 화면에서 IP 장치를 선택하세요. 연결 가능한 장치 목록이 나타납니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-connect.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 장치 ID를 확인하여 장치를 선택하거나, 연결할 장치에 모바일 기기를 가까이 대세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["접속 비밀번호를 입력하세요. 입력한 비밀번호를 화면에 표시하려면 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-password.svg",
            ico: true
          }), "을 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 연결을 완료하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_291",
          product: "dev"
        }), ": 장치 목록 화면 상단에서 ", (0,jsx_runtime.jsx)(IcFilter, {}), "을 눌러 원하는 장치만 목록에 표시되도록 설정할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-firmware-upgrade",
      children: "장치 펌웨어 업그레이드하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 펌웨어를 손쉽게 업그레이드할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어를 업그레이드하려면 모바일 기기에 펌웨어 파일을 내려받아야 합니다. 최신 펌웨어는 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://download.supremainc.com/",
              children: "슈프리마 다운로드 센터"
            }), "에서 다운로드할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어 업그레이드 진행 중에는 장치와 모바일 기기 간의 거리를 1 m 이내로 유지하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "장치 연결하기"
          }), "를 참고하여 펌웨어를 업그레이드할 장치와 연결하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_018",
            product: "dev"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-fwupgrade.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "펌웨어 파일이 저장된 경로에서 펌웨어를 선택하세요. 펌웨어 업그레이드가 진행됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["펌웨어 업그레이드를 완료하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-재시작하기",
      children: "장치 재시작하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치를 재시작할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "장치 연결하기"
          }), "를 참고하여 재시작할 장치와 연결하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_287",
            product: "dev"
          }), "을 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-restart.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 재시작할 경우 모바일 기기와의 BLE 통신 연결이 해제됩니다. 자동으로 다시 연결하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_276",
            product: "dev"
          }), " 기능을 활성화하세요. 자세한 설정 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "initial-setup#app-settings",
            children: "앱 설정하기"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "설정-초기화하기",
      children: "설정 초기화하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치 설정을 초기화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "장치 연결하기"
          }), "를 참고하여 설정을 초기화할 장치와 연결하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_195",
            product: "dev"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-restore-default.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 초기화할 경우 장치에 적용된 모든 설정이 기본값으로 복원됩니다. 계속하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "네트워크-제외-장치-설정-초기화하기",
      children: "네트워크 제외 장치 설정 초기화하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "네트워크 설정을 제외한 장치 설정을 초기화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "장치 연결하기"
          }), "를 참고하여 네트워크 설정을 제외한 장치 설정을 초기화할 장치와 연결하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_105",
            product: "dev"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-restore-default-network.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["네트워크 제외 장치 설정을 초기화할 경우 네트워크를 제외한 나머지 설정은 초기화됩니다. 계속하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-비밀번호-변경하기",
      children: "장치 비밀번호 변경하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 비밀번호를 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "장치 연결하기"
          }), "를 참고하여 비밀번호를 변경할 장치와 연결하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_156",
            product: "dev"
          }), "을 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-change-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "현재 비밀번호와 새로 사용할 비밀번호를 입력하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-manager-change-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["비밀번호 변경을 완료하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 비밀번호는 6~32자의 숫자로 설정할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 비밀번호를 분실하지 않도록 주의하세요. 장치 비밀번호를 분실한 경우, 장치에 연결하려면 해당 장치를 초기화해야 합니다."
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