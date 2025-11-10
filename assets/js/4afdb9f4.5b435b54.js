"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["85850"], {
92539: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_corestation_setup_manager_configuration_mdx_4af_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-corestation-setup-manager-configuration-mdx-4af.json
var site_docs_device_corestation_setup_manager_configuration_mdx_4af_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/configuration","title":"장치 구성","description":"장치의 설정과 관리를 안내합니다.","source":"@site/docs/device/corestation_setup_manager/configuration.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/configuration","permalink":"/docs/device/corestation_setup_manager/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"configuration","title":"장치 구성","description":"장치의 설정과 관리를 안내합니다.","keywords":["장치 구성","슬레이브","정보","네트워크","인증","고급 설정"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"장치 초기 설정하기","permalink":"/docs/device/corestation_setup_manager/initial-setup"},"next":{"title":"모니터링","permalink":"/docs/device/corestation_setup_manager/monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/corestation_setup_manager/configuration.mdx


const frontMatter = {
	id: 'configuration',
	title: '장치 구성',
	description: '장치의 설정과 관리를 안내합니다.',
	keywords: [
		'장치 구성',
		'슬레이브',
		'정보',
		'네트워크',
		'인증',
		'고급 설정'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "슬레이브 장치 검색 및 등록",
  "id": "슬레이브-장치-검색-및-등록",
  "level": 2
}, {
  "value": "장치 재시작",
  "id": "장치-재시작",
  "level": 2
}, {
  "value": "장치 설정 및 정보 수정",
  "id": "장치-설정-및-정보-수정",
  "level": 2
}, {
  "value": "정보",
  "id": "정보",
  "level": 3
}, {
  "value": "네트워크",
  "id": "네트워크",
  "level": 3
}, {
  "value": "인증",
  "id": "인증",
  "level": 3
}, {
  "value": "고급 설정",
  "id": "고급-설정",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 설정과 관리를 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "슬레이브-장치-검색-및-등록",
      children: "슬레이브 장치 검색 및 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation에 슬레이브 장치를 추가하여 손쉽게 출입통제 시스템의 네트워크를 확장할 수 있습니다. CoreStation(마스터 장치)과 슬레이브 장치는 RS-485로 연결할 수 있으며, 장치뿐만 아니라 Secure I/O와 같은 부가 장치도 연결하여 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Device List의 CoreStation을 마우스 오른쪽 버튼으로 클릭한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Search Slave Device"
          }), "를 클릭하세요. CoreStation에 연결된 슬레이브 장치 목록이 나타납니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-search-slave-device1.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["슬레이브로 등록할 장치를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add"
          }), "를 클릭하세요. 또는 개별 포트를 선택하여 슬레이브 장치를 추가할 수도 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-search-slave-device2.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-재시작",
      children: "장치 재시작"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치를 다시 시작할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Device List의 CoreStation을 마우스 오른쪽 버튼으로 클릭한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reboot"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-reboot.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-설정-및-정보-수정",
      children: "장치 설정 및 정보 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation의 세부 정보를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 항목을 설정하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 모두 완료하고 변경 사항을 저장하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "정보",
      children: "정보"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-information.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "명칭"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "기능 설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Name"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치 이름을 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device ID"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치 ID를 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Type"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치 종류를 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Firmware Version"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Firmware Upgrade"
              }), "를 클릭한 후 업그레이드할 펌웨어 파일을 선택하면 새로운 버전의 펌웨어를 설치할 수 있습니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Kernel Version"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "커널 버전을 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Hardware Version"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "하드웨어 버전을 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Factory Default"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치에 저장된 모든 정보와 루트 인증서를 삭제하고 설정을 초기화할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Restore to Default"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["장치의 설정을 초기화할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ALL"
              }), ": 모든 설정을 초기화합니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "without Network"
              }), ": 네트워크 설정을 제외한 모든 설정을 초기화합니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Locked"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["작업 조건 및 동작에 의해 장치가 잠겼을 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Unlock"
              }), " 버튼을 사용할 수 있습니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Time Zone"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치의 표준 시간대를 설정할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Display Date"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["날짜와 시간을 수동으로 설정할 수 있습니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Get Time"
              }), ": 장치에 설정된 시간을 불러오려면 클릭하세요.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Set Time"
              }), ": CoreStation Setup Manager에 설정된 시간을 장치에 적용하려면 클릭하세요."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Factory Default"
        }), " 메뉴는 장치에 루트 인증서가 저장되었을 때 사용할 수 있습니다. 공장 초기화를 실행하면 관리자 계정이 삭제됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "네트워크",
      children: "네트워크"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-network.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "명칭"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "기능 설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Use DHCP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치가 유동 IP 주소를 사용하도록 설정하려면 선택하세요. 이 항목을 선택하면 고정 IP 주소를 할당할 수 없습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "IP Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치의 IP 주소를 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Gateway"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치의 게이트웨이를 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "DNS Server Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치의 DSN 서버 주소를 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Subnet Mask"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치의 서브넷 마스크를 확인할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Port"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치가 사용할 포트를 입력하세요."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device to Server Connection"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이 옵션을 선택하면 BioStar X 서버 정보를 입력하여 장치에서 서버로 연결할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar X 서버의 IP 주소 또는 도메인 주소를 입력하세요."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Port"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar X 서버의 포트를 입력하세요."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "RS485"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "마스터 모드만 사용할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Baud Rate"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "각 RS-485 포트의 전송 속도를 설정할 수 있습니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "인증",
      children: "인증"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-auth.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "명칭"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "기능 설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["1", ":N", " Security Level"]
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "지문을 인증할 때 사용할 보안 등급을 설정할 수 있습니다. 보안 등급이 높을수록 본인 거부율(FRR)이 높아지지만 타인 수락율(FAR)이 낮아집니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["1", ":N", " Fast Mode"]
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["지문 인증 속도를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Auto"
              }), "를 선택하면 장치에 등록된 총 지문 템플릿 수에 따라 인증 속도가 설정됩니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Template Format"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "설정된 지문 템플릿 형식을 확인할 수 있습니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "바이오메트릭 인증은 CoreStation에서만 지원됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "고급-설정",
      children: "고급 설정"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-advanced.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "명칭"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "기능 설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AC Fail"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "전원 입력 신호를 모니터링하는 AUX 포트를 설정할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Tamper"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "탬퍼가 연결된 AUX 포트를 설정할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fire"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "화재 감지 신호를 모니터링하는 AUX 포트를 설정할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Configuration"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CoreStation의 Supervised Input 포트를 Input 포트로 사용하도록 설정할 수 있으며, Supervised Input에 사용할 저항값을 설정할 수 있습니다. 저항값은 1 kΩ, 2.2 kΩ, 4.7 kΩ, 10 kΩ을 설정할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Secure Tamper"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치에서 탬퍼 이벤트가 발생할 경우 장치에 저장된 전체 사용자 정보, 전체 로그, 보안키가 삭제되도록 설정할 수 있습니다."
            })]
          })]
        })]
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