"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8119"], {
8143: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_server_server_mdx_d2b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-server-server-mdx-d2b.json
var site_docs_platform_biostar_x_settings_server_server_mdx_d2b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-server","title":"서버 상세 설정하기","description":"BioStar X 서버 정보와 사용자 관리, 장치 관리, 자동 업그레이드에 대한 설정을 변경할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-server-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-server","permalink":"/docs/platform/biostar_x/settings-server-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-server.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-server","title":"서버 상세 설정하기","description":"BioStar X 서버 정보와 사용자 관리, 장치 관리, 자동 업그레이드에 대한 설정을 변경할 수 있습니다.","keywords":["서버 설정","사용자 관리"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"서버 설정하기","permalink":"/docs/platform/biostar_x/settings-server"},"next":{"title":"HTTPS 인증서 설정하기","permalink":"/docs/platform/biostar_x/settings-server-https"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-server-server.mdx


const frontMatter = {
	id: 'settings-server-server',
	title: '서버 상세 설정하기',
	description: 'BioStar X 서버 정보와 사용자 관리, 장치 관리, 자동 업그레이드에 대한 설정을 변경할 수 있습니다.',
	keywords: [
		'서버 설정',
		'사용자 관리'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "기본 정보 설정하기",
  "id": "general",
  "level": 2
}, {
  "value": "사용자 및 장치 관리하기",
  "id": "user-and-device-management",
  "level": 2
}, {
  "value": "서버 매칭 설정하기",
  "id": "서버-매칭-설정하기",
  "level": 2
}, {
  "value": "시스템 로그 단계 설정하기",
  "id": "시스템-로그-단계-설정하기",
  "level": 2
}, {
  "value": "비주얼 페이스 이미지 저장하기",
  "id": "비주얼-페이스-이미지-저장하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Calloutlists, Cmd, Details, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar X 서버 정보와 사용자 관리, 장치 관리, 자동 업그레이드에 대한 설정을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.server",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 항목을 설정하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "general",
      children: "기본 정보 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar X의 기본 정보를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-general.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarIPAdress",
            product: "2"
          }), ": 서버 IP 주소를 설정할 수 있습니다. 특정 IP 주소를 사용하려면 설정을 변경하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarPort",
            product: "2"
          }), ": 서버 포트를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.sessionTimeout",
            product: "2"
          }), ": 세션 만료 시간을 설정할 수 있습니다. 로그인한 뒤 설정한 시간 동안 BioStar X 조작이 없다면 자동으로 로그아웃됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logUploadType",
            product: "2"
          }), ": 이벤트 로그의 업로드 방법을 선택할 수 있습니다. 서버와 실시간 통신이 어려운 경우 수동으로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logRetainDays",
            product: "2"
          }), ": 로그 저장 기간은 1 ~ 120까지 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-and-device-management",
      children: "사용자 및 장치 관리하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 동기화와 지문 템플릿 형식을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-management.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.automaticUserSync",
            product: "2"
          }), ": 사용자 정보 동기화 방법을 변경할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.syncOption.allDevices",
                product: "2"
              }), "로 설정하면 사용자 정보가 자동으로 서버와 동기화 됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.syncOption.deviceSync",
                product: "2"
              }), "로 설정하면 서버의 사용자 정보가 서버에 등록된 모든 장치와 동기화됩니다. 단, 장치에서 수정한 사용자 정보는 서버에 동기화되지 않으며 장치에서 추가한 사용자 정보만 서버에 동기화됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.syncOption.smartSync",
                product: "2"
              }), "로 설정하면 변경 사항이 있는 출입 그룹에 속한 장치만 자동 동기화됩니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.fingerprintTemplateFormat",
            product: "2"
          }), ": 지문 템플릿 형식을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SUPREMA"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ISO"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ANSI378"
          }), "을 선택할 수 있으며, 장치에 사용자 지문 템플릿이 남아 있다면 다른 형식으로 변경할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType",
            product: "2"
          }), ": 사용자 ID를 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType.numeric",
            product: "2"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType.alphanumeric",
            product: "2"
          }), "로 사용하도록 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType",
            product: "2"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType.alphanumeric",
            product: "2"
          }), "로 설정하면 BioLite Net, BioEntry Plus, BioEntry W를 사용할 수 없습니다. 또한, XPass와 XPass S2에  저장된 사용자가 모두 삭제되고, 네트워크를 제외한 모든 설정이 초기화됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.enrollment_device.title",
            product: "2"
          }), ": 지문이나 카드를 등록할 때 자주 사용하는 장치를 등록용 장치로 설정하여 편리하게 사용할 수 있습니다. 장치를 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), "를 클릭한 뒤 원하는 장치를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title",
            product: "2"
          }), ": 사용자의 부가 정보를 입력할 필드를 추가할 수 있으며, 추가된 필드는 사용자 정보 화면에 나타납니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.numericbox",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.textbox",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.combobox",
            product: "2"
          }), "를 선택할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.combobox",
            product: "2"
          }), "를 선택할 경우 최대 20개 세부 항목을 32자로 추가할 수 있으며, 각 항목은 세미 콜론(;) 기호로 구분합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.deleteCredentialAfterAOC",
            product: "2"
          }), ": 사용자의 크리덴셜을 카드에 저장하는 AoC 카드를 발급할 경우 BioStar X에서 개인 정보와 크리덴셜 정보를 삭제하도록 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.eventLogRetainDays",
            product: "2"
          }), ": 출입통제 이벤트 로그를 저장할 기간을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.hideCredentialFaces",
            product: "2"
          }), ": 사용자의 개인 정보 보호를 위해 얼굴 크리덴셜 등록 시 미리 보기 이미지를 숨길 수 있습니다. 이 옵션을 활성화할 경우 사용자의 얼굴 또는 비주얼 페이스 등록 시 미리 보기 화면이 제공되지 않습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), "로 선택할 경우 장치에 저장된 사용자 중 출입 그룹에 속하지 않은 사용자는 서버에서 관리할 수 없습니다. 이 옵션을 사용할 경우 장치 메뉴에서 각 장치를 선택한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), "를 클릭해 동기화를 진행하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), "로 선택하더라도 아래와 같이 특수한 목적을 위해 지정된 출입 그룹의 경우 장치의 출입 그룹에 상관없이 동기화됩니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "장치 및 엘리베이터에 설정된 이중 인증 출입 그룹"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "안티패스백 구역의 항시 통과 그룹"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "스케줄 잠금 구역의 항시 통과 그룹"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "스케줄 개방 구역의 개방 인증 출입 그룹"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "경비 구역의 경비/해제 그룹"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), "로 선택하더라도 장치 관리자로 지정된 사용자는 출입 그룹에 상관없이 동기화됩니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NFC 모바일 카드"
          }), "를 사용할 수 있는 조건은 아래와 같습니다."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모바일 장치 OS: Android 5.0 Lollipop 이상, Android 10 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 Mobile 2.4.1 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass S2: XPS2M-V2 펌웨어 2.4 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2: BS2-OMPW, BS2-OIPW 펌웨어 1.4 이상, 1.8 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2: BSA2-OMPW, BSA2-OIPW 펌웨어 1.3 이상, 1.7.1 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2: BSL2-OM 펌웨어 1.2 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2: BEW2-OAP, BEW2-ODP 펌웨어 1.1 이상, 1.5 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2: FS2-D, FS2-AWB 펌웨어 1.3.1 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2: BLN2-ODB, BLN2-OAB, BLN2-PAB 펌웨어 1.2 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2: XPD2-MDB, XPD2-GDB, XPD2-GKDB 펌웨어 1.3 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite: FL-DB 펌웨어 1.1 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2: XP2-MDPB, XP2-GDPB, XP2-GKDPB, XP2-MAPB 펌웨어 1.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2: BEP2-OD, BEP2-OA 펌웨어 1.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry R2: BER2-OD 펌웨어 1.1.0 이상"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BLE 모바일 카드"
          }), "를 사용할 수 있는 장치와 조건은 아래와 같습니다."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모바일 장치 OS:  Android 5.0 Lollipop 이상, Android 10 이하 / iOS 9.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 Mobile 2.4.1 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2: FS2-AWB 펌웨어 1.3.1 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2: BLN2-ODB, BLN2-OAB, BLN2-PAB 펌웨어 1.2 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2: XPD2-MDB, XPD2-GDB, XPD2-GKDB 펌웨어 1.3 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite: FL-DB 펌웨어 1.1 이하"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2: XP2-MDPB, XP2-GDPB, XP2-GKDPB, XP2-MAPB 펌웨어 1.0 이상"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.mobileCredentialCard",
              product: "2"
            }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.mobileCredential",
              product: "2"
            }), "는 동시에 사용할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType",
              product: "2"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.alphanumeric",
              product: "2"
            }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.numeric",
              product: "2"
            }), "로 변경할 경우 BioStar X에 등록된 모든 사용자 정보를 삭제해야 합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType",
            product: "2"
          }), "를 변경할 수 있는 장치와 펌웨어 버전은 아래와 같습니다. "]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "CoreStation 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStaion 2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2 펌웨어 1.1.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2 펌웨어 1.2.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2 펌웨어 1.3.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2 펌웨어 1.4.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry R2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 펌웨어 2.4.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "X-Station 2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 3 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "커스텀 사용자 필드의 순서를 변경하면 추가된 필드의 위치가 변경됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.numericbox",
              product: "2"
            }), "로 추가된 커스텀 사용자 필드는 0 부터 4294962795까지 입력할 수 있으며, 문자를 입력할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.textbox",
              product: "2"
            }), "로 추가된 커스텀 사용자 필드는 최대 32 숫자/문자를 입력할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.combobox",
              product: "2"
            }), "로 추가된 커스텀 사용자 필드는 사용자가 추가한 항목을 선택할 수 있습니다. 커스텀 사용자 필드를 설정할 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "선택1"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "선택2"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "선택3"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "선택4"
            }), "를 입력하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "서버-매칭-설정하기",
      children: "서버 매칭 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "서버 매칭을 설정할 수 있습니다. 서버 매칭을 사용하면 사용자 정보를 장치에서 인증하지 않고 BioStar X에서 인증합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["서버 매칭은 어드밴스(Advanced) 이상의 라이선스를 활성화했을 때 나타납니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "licensing",
        children: "다음 문서"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-server-matching.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.use",
            product: "2"
          }), ": 서버 매칭 사용 여부를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.matchingConcurrencyCount",
            product: "2"
          }), ": 한 번에 매칭할 수 있는 최대 서버 매칭 수를 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.serverMatching.matchingConcurrencyCount",
                product: "2"
              }), "는 PC의 CPU 성능에 따라 달라집니다."]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.fastMode",
            product: "2"
          }), ": 지문 매칭 속도를 조절할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.securityLevel",
            product: "2"
          }), ": 지문 및 얼굴에 대한 서버 매칭 보안 레벨을 설정할 수 있습니다. 보안 등급이 높을 수록 본인 거부율(FRR)이 증가합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시스템-로그-단계-설정하기",
      children: "시스템 로그 단계 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스에 저장되는 시스템 로그의 레벨을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-system-log-level.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel",
          product: "2"
        }), ": 시스템 로그는 미리 지정된 카테고리에 따라 관리하며 로그의 레벨은 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.trace",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.debug",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.info",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.warning",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.error",
          product: "2"
        }), "로 구분합니다. 상위 레벨은 하위 레벨의 로그를 모두 포함합니다. 예를 들면, ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.trace",
          product: "2"
        }), "으로 설정할 경우 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.debug",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.info",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.warning",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.error",
          product: "2"
        }), " 로그를 모두 포함하여 저장할 수 있습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비주얼-페이스-이미지-저장하기",
      children: "비주얼 페이스 이미지 저장하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비주얼 페이스에 실제 이미지와 템플릿을 모두 저장하도록 하거나 실제 이미지는 저장하지 않고 템플릿만 저장하도록 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(Calloutlists, {
      children: [(0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.expertSettings.title",
              product: "2"
            }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.expertSettings.enableOptionLabel",
              product: "2"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), "으로 활성화하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-server-expert.png",
            className: "none"
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "caution",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.expertSettings.enableOptionLabel",
                product: "2"
              }), "를 활성화하기 전에 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.server",
                product: "2"
              }), " 메뉴 내에서 변경한 부분이 있을 경우 먼저 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.apply",
                product: "2"
              }), "을 클릭하여 변경 내용을 저장하세요."]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/ico-expert-setting.png",
              ico: true
            }), "을 클릭하여 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.expertSettings.detail.title",
              product: "2"
            }), "으로 진입한 다음 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
              product: "2"
            }), "를 원하는 대로 설정하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-server-expert2.png",
            className: "none"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.use",
                  product: "2"
                }), ": 기본값입니다. 비주얼 페이스에 실제 이미지와 템플릿을 모두 저장합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.notUse",
                  product: "2"
                }), ": 비주얼 페이스에 실제 이미지는 저장하지 않고 템플릿만 저장합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.notUse",
                  product: "2"
                }), "으로 비활성화하려는 경우 나타나는 경고 팝업을 주의 깊게 읽어본 다음 설정하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "비주얼 페이스 이미지 저장하기 옵션 비활성화 시 주의사항"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이 기능을 비활성화할 경우 저장된 비주얼 페이스의 이미지가 모두 삭제되며, 앞으로 등록되는 비주얼 페이스도 이미지를 제외한 템플릿만을 저장합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["등록된 비주얼 페이스가 두 가지 타입의 템플릿을 가지고 있지 않은 경우 이 기능을 비활성화할 수 없습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "비주얼 페이스 마이그레이션"
              }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["이 기능을 비활성화한 후 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "menu.dataImport",
                product: "2"
              }), " 시 유효하지 않은 비주얼 페이스 템플릿이 포함되어 있는 경우 데이터 파일을 가져올 수 없습니다. 문제를 해결하려면 이 기능을 일시적으로 활성화한 후 데이터 파일을 가져오세요."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), "을 클릭하세요."]
      }), "\n"]
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