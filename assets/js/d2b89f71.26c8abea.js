"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8119"], {
48143: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
var site_docs_platform_biostar_x_settings_server_server_mdx_d2b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-server","title":"서버 상세 설정하기","description":"BioStar X 서버의 기본 정보, 사용자 및 장치 관리, 서버 매칭, 시스템 로그 단계, 비주얼 페이스 이미지 저장에 대한 설정을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-server-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-server","permalink":"/docs/platform/biostar_x/settings-server-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-server.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-server","title":"서버 상세 설정하기","description":"BioStar X 서버의 기본 정보, 사용자 및 장치 관리, 서버 매칭, 시스템 로그 단계, 비주얼 페이스 이미지 저장에 대한 설정을 안내합니다.","keywords":["서버 설정","사용자 관리","장치 관리","서버 매칭","시스템 로그"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"서버 설정하기","permalink":"/docs/platform/biostar_x/settings-server"},"next":{"title":"HTTPS 인증서 설정하기","permalink":"/docs/platform/biostar_x/settings-server-https"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-server-server.mdx


const frontMatter = {
	id: 'settings-server-server',
	title: '서버 상세 설정하기',
	description: 'BioStar X 서버의 기본 정보, 사용자 및 장치 관리, 서버 매칭, 시스템 로그 단계, 비주얼 페이스 이미지 저장에 대한 설정을 안내합니다.',
	keywords: [
		'서버 설정',
		'사용자 관리',
		'장치 관리',
		'서버 매칭',
		'시스템 로그'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "기본 정보 설정",
  "id": "basic-setting",
  "level": 2
}, {
  "value": "사용자 및 장치 관리",
  "id": "user-and-device-management",
  "level": 2
}, {
  "value": "AoC 카드 설정",
  "id": "aoc-card-setting",
  "level": 3
}, {
  "value": "기타",
  "id": "other-settings",
  "level": 3
}, {
  "value": "서버 매칭 설정하기",
  "id": "servermatching",
  "level": 2
}, {
  "value": "시스템 로그 단계 설정",
  "id": "systemloglevel",
  "level": 2
}, {
  "value": "비주얼 페이스 이미지 저장하기",
  "id": "storevisualfaceimage",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Details, DocLink, IcDown, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcDown) _missingMdxReference("IcDown", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버의 기본 정보, 사용자 및 장치 관리, 서버 매칭, 시스템 로그 단계, 비주얼 페이스 이미지 저장에 대한 설정을 변경할 수 있습니다."]
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
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.server",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 섹션에서 원하는 항목을 설정하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.general",
                product: "2"
              }), ": IP 주소, 포트 번호, 세션 만료 시간, 이벤트 로그 업로드 방법, 로그 저장 기간을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.userDeviceManagement",
                product: "2"
              }), ": 사용자 및 장치 관리 설정을 변경할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.logLevelManagement",
                product: "2"
              }), ": 시스템 로그 단계 설정을 변경할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.expertSettings.title",
                product: "2"
              }), ": 비주얼 페이스에 실제 이미지와 템플릿을 모두 저장하도록 하거나 실제 이미지는 저장하지 않고 템플릿만 저장하도록 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basic-setting",
      children: "기본 정보 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.general",
        product: "2"
      }), " 섹션에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 기본 정보를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-general.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarIPAdress",
            product: "2"
          }), ": 서버 IP 주소를 설정하세요. 특정 IP 주소를 사용하려면 ", (0,jsx_runtime.jsx)(IcDown, {}), "을 클릭하고 목록에서 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.ipAddress.any",
            product: "2"
          }), "을 선택하면 서버가 자동으로 IP 주소를 할당받습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarPort",
            product: "2"
          }), ": 서버 포트를 변경할 수 있습니다. 원하는 포트 번호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.sessionTimeout",
            product: "2"
          }), ": 세션 만료 시간을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 로그인한 뒤 설정한 시간 동안 조작이 없다면 자동으로 로그아웃됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logUploadType",
            product: "2"
          }), ": 이벤트 로그의 업로드 방법을 선택할 수 있습니다. 서버와 실시간 통신이 어려운 경우 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.manual",
            product: "2"
          }), "으로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logRetainDays",
            product: "2"
          }), ": 로그 저장 기간은 1~120까지 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-and-device-management",
      children: "사용자 및 장치 관리"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.userDeviceManagement",
        product: "2"
      }), " 섹션에서는 사용자와 장치간 동기화 및 인증 방법을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-management.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-sync",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.automaticUserSync",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.automaticUserSync",
        product: "2"
      }), " 옵션에서는 서버와 장치 간에 사용자 정보를 동기화하는 방법을 선택할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.allDevices",
            product: "2"
          }), ": 사용자 정보가 서버와 장치 간에 자동으로 동기화됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.deviceSync",
            product: "2"
          }), ": 서버의 사용자 정보가 서버에 등록된 모든 장치와 동기화됩니다. 단, 장치에서 수정한 사용자 정보는 서버에 동기화되지 않으며 장치에서 추가한 사용자 정보만 서버에 동기화됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.smartSync",
            product: "2"
          }), ": 변경 사항이 있는 출입 그룹에 속한 장치만 서버와 자동 동기화됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), " 옵션을 선택하면 장치에 저장된 사용자 중 출입 그룹에 속하지 않은 사용자는 서버에서 관리할 수 없습니다. 이 옵션을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.device.root"
            }), " 메뉴에서 각 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), "를 클릭해 동기화를 진행하세요. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-using-functions",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), " 옵션을 선택하더라도 아래와 같이 특수한 목적을 위해 지정된 출입 그룹의 경우 장치의 출입 그룹에 상관없이 동기화됩니다."]
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
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), " 옵션을 선택하더라도 장치 관리자로 지정된 사용자는 출입 그룹에 상관없이 동기화됩니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fingerprint-template-format",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.fingerprintTemplateFormat",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.fingerprintTemplateFormat",
        product: "2"
      }), " 옵션에서는 지문 템플릿 형식을 선택할 수 있습니다. 다음 항목에서 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "SUPREMA"
          }), ": 슈프라마 지문 템플릿 형식입니다. 슈프라마 장치에서 지문을 등록할 때 사용합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "ISO"
          }), ": ISO 국제 지문 템플릿 형식입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "ANSI378"
          }), ": 미국 규격 협회(American National Standards Institute, ANSI)에서 정의한 지문 템플릿 형식입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "장치에 사용자 지문 템플릿이 남아 있다면 다른 형식으로 변경할 수 없습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userid-type",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType",
        product: "2"
      }), " 옵션에서는 사용자 아이디 종류를 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType.numeric",
        product: "2"
      }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType.alphanumeric",
        product: "2"
      }), "로 선택할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버에 등록된 장치 목록을 확인하고 호환되는 설정값을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType",
          product: "2"
        }), "를 변경할 수 있는 장치와 펌웨어 버전 보기"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation 펌웨어 1.0.0 이상"
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
            children: "XPass S2 펌웨어 2.4.0 이상"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.alphanumeric",
              product: "2"
            }), "를 선택하면 BioLite Net, BioEntry Plus, BioEntry W 모델에서는 사용할 수 없습니다. 또한, XPass와 XPass S2 모델에 저장된 사용자가 모두 삭제되고, 네트워크를 제외한 모든 설정이 초기화됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.alphanumeric",
              product: "2"
            }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.numeric",
              product: "2"
            }), "로 변경하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에 등록한 모든 사용자 정보를 삭제해야 합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enrollment-device",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.enrollment_device.title",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["지문이나 얼굴, 카드를 등록할 때 자주 사용하는 장치를 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.enrollment_device.title",
        product: "2"
      }), " 옵션에 추가해 편리하게 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.enrollment_device.configure.title",
            product: "2"
          }), " 창이 나타나면 목록에서 원하는 장치의 체크박스를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-management-enroll-device.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택한 장치를 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["추가한 장치 설정을 저장하려면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "등록한 장치가 너무 많아 목록에서 찾기 어렵다면 검색 입력 필드에 키워드를 입력해 장치를 검색하세요. 장치 아이디, 장치 이름, 장치 그룹, IP 주소를 입력할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 정보를 등록할 때 지문 또는 얼굴, 카드 크리덴셜을 등록하기 위한 자세한 내용은 다음 문서를 참고하세요."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-fingerprint"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-face"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-card"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-mobile"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-field",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.custom_field.title",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.custom_field.title",
        product: "2"
      }), " 옵션에서는 사용자의 부가 정보를 입력할 필드를 추가할 수 있습니다. 추가된 필드는 사용자 정보 화면에 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["커스텀 사용자 필드를 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "커스텀 사용자 필드의 이름을 입력하고 유형에서 원하는 항목을 선택하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-management-custome-field.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.numericbox",
                product: "2"
              }), ": 0부터 4294962795까지 입력할 수 있으며, 문자를 입력할 수 없습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.textbox",
                product: "2"
              }), ": 최대 32자의 숫자 및 문자를 입력할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.combobox",
                product: "2"
              }), ": 최대 20개 세부 항목을 32자로 추가할 수 있으며, 각 항목은 세미 콜론(;) 기호로 구분합니다. (예, 선택1;선택2;선택3)"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-server-management-custome-field-select.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.fileupload",
                product: "2"
              }), ": 파일 업로드를 위한 필드를 추가할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "최대 파일 크기는 1MB입니다."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "파일명은 최소 1자~최대 120자까지 가능합니다."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "파일명 제약사항: 파일명은 영숫자, 밑줄(_), 하이픈(-)을 사용하고, 확장자를 구분할 때는 점(.)을 사용합니다."
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["추가한 커스텀 사용자 필드를 저장하려면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["커스텀 사용자 필드의 순서를 변경하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.order",
              product: "2"
            }), " 열의 숫자를 변경하세요. 추가된 필드의 위치가 변경됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["커스텀 사용자 필드를 수정한 후에는 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["커스텀 사용자 필드를 삭제하려면 ", (0,jsx_runtime.jsx)(IcTrash2, {}), " 버튼을 클릭하세요. 삭제된 필드는 복구할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 정보 등록 및 수정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "how-to-guide-user",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aoc-card-setting",
      children: "AoC 카드 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자의 크리덴셜을 카드에 저장하는 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#access_on_card",
        children: "AoC(Access on Card)"
      }), "를 발급할 때 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버에서 개인 정보와 크리덴셜 정보를 삭제하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.deleteCredentialAfterAOC",
        product: "2"
      }), " 옵션을 활성화하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NFC 모바일 카드"
          }), "를 지원하는 장치와 펌웨어 버전 보기"]
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
          }), "를 지원하는 장치와 펌웨어 버전 보기"]
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
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.mobileCredentialCard",
            product: "2"
          }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), "는 동시에 사용할 수 없습니다."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-settings",
      children: "기타"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.eventLogRetainDays",
            product: "2"
          }), ": 출입통제 이벤트 로그를 저장할 기간을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.hideCredentialFaces",
            product: "2"
          }), ": 사용자의 개인 정보 보호를 위해 얼굴 크리덴셜을 등록할 때 미리 보기 이미지를 숨길 수 있습니다. 이 옵션을 활성화하면 사용자의 얼굴 크리덴셜을 등록할 때 미리 보기 화면이 제공되지 않습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "servermatching",
      children: "서버 매칭 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.serverMatching",
        product: "2"
      }), " 섹션에서는 사용자 정보를 장치에서 인증하지 않고 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서 인증할 수 있는 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#server_matching",
        children: "서버 매칭"
      }), " 기능을 설정할 수 있습니다."]
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
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "이 옵션은 PC의 CPU 성능에 따라 달라질 수 있습니다."
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
          }), ": 지문에 대한 서버 매칭 보안 레벨을 설정할 수 있습니다. 보안 등급이 높을 수록 본인 거부율(FRR)이 증가합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching",
          product: "2"
        }), "은 어드밴스(Advanced) 이상의 라이선스에서 기능 추가 옵션(Feature Add-ons)을 활성화했을 때 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "systemloglevel",
      children: "시스템 로그 단계 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevelManagement",
        product: "2"
      }), " 섹션에서는 데이터베이스에 저장되는 시스템 로그의 레벨을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-system-log-level.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["시스템 로그는 미리 지정된 카테고리에 따라 관리하며 로그의 레벨은 ", (0,jsx_runtime.jsx)(Cmd, {
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
      }), "로 구분합니다. 상위 레벨은 하위 레벨의 로그를 모두 포함합니다. 예를 들어, 시스템 로그 단계를 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.trace",
        product: "2"
      }), "으로 선택하면, 하위 레벨인 ", (0,jsx_runtime.jsx)(Cmd, {
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
      }), " 로그를 모두 포함하여 저장합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storevisualfaceimage",
      children: "비주얼 페이스 이미지 저장하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "얼굴을 크리덴셜로 등록할 때 실제 이미지와 템플릿을 모두 저장하도록 하거나 실제 이미지는 저장하지 않고 템플릿만 저장하도록 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "사용하기 전에"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.expertSettings.enableOptionLabel",
          product: "2"
        }), " 옵션을 활성화하기 전에 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.server",
          product: "2"
        }), " 메뉴 내에서 변경한 사항이 있다면 먼저 변경 내용을 저장해야 합니다. 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " 버튼을 클릭하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.title",
            product: "2"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.enableOptionLabel",
            product: "2"
          }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "으로 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-expert.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.enableButton",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.title",
            product: "2"
          }), " 화면으로 진입하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
            product: "2"
          }), " 옵션을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-expert2.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), ": 기본값입니다. 얼굴 크리덴셜의 실제 이미지와 템플릿을 모두 저장합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse",
                product: "2"
              }), ": 얼굴 크리덴셜의 실제 이미지는 저장하지 않고 템플릿만 저장합니다. 이 옵션을 선택하면 나타나는 경고 팝업을 주의 깊게 읽어본 다음 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
            product: "2"
          }), " 옵션 비활성화 시 주의사항"]
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능을 비활성화할 경우 저장된 비주얼 페이스의 이미지가 모두 삭제되며, 앞으로 등록되는 비주얼 페이스도 이미지를 제외한 템플릿만을 저장합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["등록된 비주얼 페이스가 두 가지 타입의 템플릿을 가지고 있지 않은 경우 이 기능을 비활성화할 수 없습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.faceMigration"
            }), " 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "migration-face",
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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