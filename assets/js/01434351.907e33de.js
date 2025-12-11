"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["89149"], {
4860: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "장치 라이선스를 발급하려면 구입처에 문의하세요."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "장치 라이선스 하나당 한가지의 기능을 사용할 수 있습니다."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "하나의 장치 라이선스 파일에 다수의 장치 라이선스를 포함시킬 수 있습니다. (최대 100개까지 지원)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "장치 라이선스 파일은 암호화 된 파일이므로 임의로 수정할 수 없습니다."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "장치 라이선스는 장치 ID를 기준으로 발급됩니다. 비정상적인 방법으로 장치 ID를 변경할 경우 라이선스에 대한 보증 서비스가 제공되지 않습니다."
      }), "\n"]
    }), "\n"]
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



}),
78257: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_xstation_2_settings_mdx_014_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-xstation-2-settings-mdx-014.json
var site_docs_device_xstation_2_settings_mdx_014_namespaceObject = JSON.parse('{"id":"device/xstation_2/settings","title":"설정","description":"시스템 및 장치 설정 방법을 안내합니다.","source":"@site/docs/device/xstation_2/settings.mdx","sourceDirName":"device/xstation_2","slug":"/device/xstation_2/settings","permalink":"/device/xstation_2/settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xstation_2/settings.mdx","tags":[],"version":"current","frontMatter":{"id":"settings","title":"설정","description":"시스템 및 장치 설정 방법을 안내합니다.","keywords":["화면","소리","통신","장치"],"isTranslationMissing":false},"sidebar":"xstation2","previous":{"title":"인증","permalink":"/device/xstation_2/authentication"},"next":{"title":"이벤트 로그","permalink":"/device/xstation_2/event-log"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_device-license-info.mdx
var _device_license_info = __webpack_require__(4860);
;// CONCATENATED MODULE: ./docs/device/xstation_2/settings.mdx


const frontMatter = {
	id: 'settings',
	title: '설정',
	description: '시스템 및 장치 설정 방법을 안내합니다.',
	keywords: [
		'화면',
		'소리',
		'통신',
		'장치'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*
### 마스터 관리자

마스터 관리자의 인증 수단을 변경할 수 있습니다.

1. <Image src='/img/common/ico-menu2.svg' ico alone />을 누른 뒤 관리자 권한 인증 수단으로 인증하세요.

1. <Cmd sid='ui_280' product='dev' /> → <Cmd sid='ui_128' product='dev' />를 선택하세요.

1. 원하는 인증 수단을 설정하세요.

<div className='grid-container'>

<Image src='/img/device/xs2-master-admin.png' />

<Image src='/img/device/xs2-master-admin-setting-credential2.png' />

</div>

:::info

* 최소 두 종류 이상의 크리덴셜을 등록해야 합니다.

* 이 기능은 펌웨어 v#.#.# 이상의 새 장치에서만 사용할 수 있습니다.

:::

### 관리자 2단계 인증 \{#admin-2-step-authentication}

펌웨어를 업그레이드한 장치는 <Cmd sid='ui_128' product='dev' /> 설정을 제공하지 않지만, <Cmd sid='ui_073' product='dev' /> 옵션을 통해 전체 관리자의 권한을 강화하여 장치의 보안을 향상시킬 수 있습니다.

1. <Image src='/img/common/ico-menu2.svg' ico alone />을 누른 뒤 관리자 권한 인증 수단으로 인증하세요.

1. <Cmd sid='ui_280' product='dev' /> → <Cmd sid='ui_073' product='dev' />을 선택하세요.

<Image src='/img/device/xs2-administrator-two-step-auth.png' />

:::info

* <Cmd sid='ui_073' product='dev' />은 펌웨어를 v#.#.# 이상으로 업그레이드한 뒤 사용할 수 있으며, 펌웨어를 v#.#.# 이상으로 업그레이드한 뒤 하위 버전으로 다운그레이드할 수 없습니다.

* <Cmd sid='ui_073' product='dev' /> 옵션을 활성화하지 않은 상태에서는 1단계 인증이 기본값입니다.

* 모든 관리자에게 두 종류 이상의 크리덴셜이 등록되어 있지 않을 때 활성화 시 설정이 실패하며 에러 메시지가 표시됩니다. 모든 관리자에게 두 종류 이상의 크리덴셜을 등록한 다음 다시 시도하세요.

<Image src='/img/how-to/error-two-step-authentication.png' className='none' width='300px' />

:::

:::caution

<Cmd sid='ui_073' product='dev' />을 활성화한 후 모든 관리자의 크리덴셜을 2종 미만으로 삭제하면, BioStar X에 연결할 수 없는 상황에서 관리자 메뉴에 접근할 수 없게 됩니다. 따라서 관리자 크리덴셜을 삭제할 때는 각별한 주의가 필요합니다.

:::
*/



const toc = [{
  "value": "화면과 소리",
  "id": "화면과-소리",
  "level": 2
}, {
  "value": "통신",
  "id": "통신",
  "level": 2
}, {
  "value": "이더넷",
  "id": "이더넷",
  "level": 3
}, {
  "value": "서버",
  "id": "서버",
  "level": 3
}, {
  "value": "OSDP 통신 설정",
  "id": "osdp-통신-설정",
  "level": 3
}, {
  "value": "장치",
  "id": "장치",
  "level": 2
}, {
  "value": "라이선스",
  "id": "license",
  "level": 3
}, ..._device_license_info/* .toc */.RM, {
  "value": "릴레이",
  "id": "릴레이",
  "level": 3
}, {
  "value": "날짜와 시간",
  "id": "date-time",
  "level": 3
}, {
  "value": "일광절약시간",
  "id": "일광절약시간",
  "level": 3
}, {
  "value": "장치 정보",
  "id": "장치-정보",
  "level": 3
}, {
  "value": "메모리 정보",
  "id": "메모리-정보",
  "level": 3
}, {
  "value": "USB 메모리",
  "id": "usb-메모리",
  "level": 3
}, {
  "value": "보안 탬퍼",
  "id": "보안-탬퍼",
  "level": 3
}, {
  "value": "장치 다시 시작",
  "id": "장치-다시-시작",
  "level": 3
}, {
  "value": "기본값 복원",
  "id": "기본값-복원",
  "level": 3
}, {
  "value": "사용자 ID 종류",
  "id": "사용자-id-종류",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "시스템 및 장치 설정 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "화면과-소리",
      children: "화면과 소리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 화면과 소리에 대한 설정을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_366",
            product: "dev"
          }), "를 누른 뒤 원하는 항목을 변경하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-displaysound.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_364",
                product: "dev"
              }), ": 홈 화면의 배경에 표시할 항목을 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_227",
                product: "dev"
              }), ": 화면에 표시되는 언어를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_284",
                product: "dev"
              }), ": 사용자가 인증할 때 화면에 표시할 개인 메시지 사용 여부를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_284",
                product: "dev"
              }), "는 BioStar Device SDK를 이용하여 설정할 수 있습니다. 설정하지 않은 경우, 장치에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_284",
                product: "dev"
              }), "를 활성화하더라도 인증 성공 시 메시지가 표시되지 않습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_184",
                product: "dev"
              }), ": 사용자가 인증할 때 화면에 표시할 개인 메시지 사용 여부를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_184",
                product: "dev"
              }), "는 BioStar X API를 이용하여 설정할 수 있습니다. 설정하지 않은 경우, 장치에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_184",
                product: "dev"
              }), "를 활성화하더라도 인증 성공 시 메시지가 표시되지 않습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_365",
                product: "dev"
              }), ": 화면 보호기 사용 여부를 설정할 수 있습니다. 화면 보호기를 사용하면 장치를 사용하지 않을 때 화면 밝기를 줄여 불필요한 전력 소모를 줄일 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_131",
                product: "dev"
              }), ": 메뉴 화면이 자동으로 사라지는 시간(초)을 설정할 수 있습니다. 설정한 시간 동안 버튼 입력이 없다면 홈 화면으로 이동합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_135",
                product: "dev"
              }), ": 설정 완료 메시지나 알림 메시지 등이 자동으로 사라지는 시간(초)을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_148",
                product: "dev"
              }), ": 화면의 조명이 꺼지는 시간(초)을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_251",
                product: "dev"
              }), ": 알림음 대신 음성 안내를 사용할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_153",
                product: "dev"
              }), ": 소리 크기를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["BioStar Device SDK에 대한 자세한 정보는 슈프리마 지식 베이스의 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://kb.supremainc.com/bs2sdk/doku.php",
          children: "BioStar Device SDK 페이지"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "통신",
      children: "통신"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이더넷, 서버, OSDP 통신과 같은 장치의 통신 설정을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "이더넷",
      children: "이더넷"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_344",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_252",
            product: "dev"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 설정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-network-ethernet.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_012",
                product: "dev"
              }), ": DHCP 사용 여부를 설정하세요. DHCP 설정을 끄면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_290",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_029",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_068",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_192",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_111",
                product: "dev"
              }), "를 사용자가 수정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_290",
                product: "dev"
              }), ": 장치의 포트를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_029",
                product: "dev"
              }), ": 장치의 IP 주소를 확인할 수 있습니다. 수정하려면 DHCP 설정을 끄세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_068",
                product: "dev"
              }), ": 장치의 게이트웨이를 확인할 수 있습니다. 수정하려면 DHCP 설정을 끄세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_192",
                product: "dev"
              }), ": 장치의 서브넷마스크를 확인할 수 있습니다. 수정하려면 DHCP 설정을 끄세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_111",
                product: "dev"
              }), ": 도메인 네임 서버 주소를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "서버",
      children: "서버"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_344",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_180",
            product: "dev"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 설정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-network-server.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_283",
                product: "dev"
              }), ": 장치에서 입력한 정보를 가진 서버로 직접 연결 신호를 보낼 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_283",
                product: "dev"
              }), " 설정을 켜면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_182",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_183",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_189",
                product: "dev"
              }), "를 사용자가 입력할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_182",
                product: "dev"
              }), ": BioStar X가 설치된 PC의 IP를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_183",
                product: "dev"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_182",
                product: "dev"
              }), " 대신 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_183",
                product: "dev"
              }), "을 입력할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_189",
                product: "dev"
              }), ": BioStar X가 설치된 PC의 포트를 입력하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "osdp-통신-설정",
      children: "OSDP 통신 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_344",
            product: "dev"
          }), "을 누른 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_039",
            product: "dev"
          }), "에서 원하는 항목을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-network-osdp.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_049",
                product: "dev"
              }), ": RS-485 동작 모드를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_297",
                product: "dev"
              }), ": 원하는 통신 속도를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_257",
                product: "dev"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_269",
                product: "dev"
              }), "를 사용할 경우 타사 컨트롤러 또는 장치의 인증 결과를 화면에 표시하도록 선택할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_049",
                product: "dev"
              }), " 모드를 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_088",
                product: "dev"
              }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_205",
                product: "dev"
              }), "로 설정했을 때 사용할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치",
      children: "장치"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "license",
      children: "라이선스"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치 라이선스를 활성화하거나 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_206",
        product: "dev"
      }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_292",
        product: "dev"
      }), "을 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_119",
            product: "dev"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 라이선스를 활성화하려면 라이선스가 저장된 USB를 장치에 연결하고 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-license.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "활성화 할 수 있는 라이선스가 화면에 나타납니다. 원하는 라이선스를 활성화하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-license1.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_device_license_info/* ["default"] */.Ay, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "릴레이",
      children: "릴레이"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_144",
        product: "dev"
      }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_015",
        product: "dev"
      }), "의 입력 포트를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_122",
            product: "dev"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-relay.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_122",
                product: "dev"
              }), ": 릴레이 활성화 여부를 설정할 수 있습니다. 릴레이 설정을 켜면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_144",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_015",
                product: "dev"
              }), "을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_144",
                product: "dev"
              }), ": 정상적으로 사용자 인증이 수행되었을 때 출입문이 열려 있는 시간을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_015",
                product: "dev"
              }), ": 퇴실 버튼이 연결되어 있는 입력 포트를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_274",
                product: "dev"
              }), ": 퇴실 버튼 입력 포트의 스위치(", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_036",
                product: "dev"
              }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_035",
                product: "dev"
              }), ") 종류를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "date-time",
      children: "날짜와 시간"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "날짜와 시간을 설정할 수 있습니다. 정확한 로그 데이터 수집을 위해 알맞게 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_098",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 변경하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-datetime.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_098",
                product: "dev"
              }), ": 현재 날짜와 시간을 확인할 수 있습니다. 직접 수정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_208",
                product: "dev"
              }), "를 끄세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_358",
                product: "dev"
              }), ": 현재 지역의 시간 기준을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_208",
                product: "dev"
              }), ": 서버와 시간을 동기화할 수 있습니다. 서버와 시간을 동기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_208",
                product: "dev"
              }), "를 켜세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_097",
                product: "dev"
              }), ": 날짜 형식을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_062",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_033",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_009",
                product: "dev"
              }), "를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_209",
                product: "dev"
              }), ": 시간 형식을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_238",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_005",
                product: "dev"
              }), "을 선택할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "일광절약시간",
      children: "일광절약시간"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "일광 절약 시간제(DST)를 적용해 장치를 사용할 수 있습니다. 시작 및 종료 일시를 알맞게 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_270",
            product: "dev"
          }), "을 선택한 뒤 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), "을 눌러 일광 절약 시간을 추가하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 변경하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-dst.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_253",
                product: "dev"
              }), ": 일광 절약 시간의 이름을 확인할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_217",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_218",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_216",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_215",
                product: "dev"
              }), ": 일광 절약 시간 적용을 시작할 월, 주, 요일, 시간을 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_094",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_095",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_093",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_092",
                product: "dev"
              }), ": 일광 절약 시간 적용을 종료할 월, 주, 요일, 시간을 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-정보",
      children: "장치 정보"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모델명, 장치 ID, 시리얼 번호, 장치 및 펌웨어의 버전, 커널, MAC 주소를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_289",
            product: "dev"
          }), "를 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_136",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_282",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_210",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_019",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_017",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_332",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_031",
            product: "dev"
          }), " 정보를 확인할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-info.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "메모리-정보",
      children: "메모리 정보"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "메모리 사용 정보를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_134",
            product: "dev"
          }), "를 선택하세요. 장치의 메모리 사용 현황을 확인할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-memory.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usb-메모리",
      children: "USB 메모리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치에 USB 메모리를 연결하여 장치로 사용자 정보를 가져오거나 장치에서 로그 및 사용자 정보를 내보낼 수 있습니다. 펌웨어를 업그레이드할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_061",
            product: "dev"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 선택한 뒤 설정을 변경하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-usb.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_063",
                product: "dev"
              }), ": 연결된 USB 메모리에서 사용자 정보를 가져올 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_100",
                product: "dev"
              }), ": 연결된 USB 메모리에 내보낼 정보를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_353",
                product: "dev"
              }), ": 연결된 USB 메모리에 펌웨어 파일이 저장되어 있다면 펌웨어를 업그레이드할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "펌웨어 업그레이드 진행 중 전원 공급이 중단되지 않도록 주의하세요. 고장의 원인이 됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "보안-탬퍼",
      children: "보안 탬퍼"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "보안 탬퍼 사용 여부를 설정할 수 있습니다. 보안 탬퍼가 발생할 경우 전체 사용자, 전체 로그, 보안 키가 삭제됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["탬퍼 발생 시 전체 사용자, 전체 로그, 보안 키가 삭제되도록 설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_150",
            product: "dev"
          }), " 설정을 켜세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-다시-시작",
      children: "장치 다시 시작"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치를 다시 시작할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_286",
            product: "dev"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 다시 시작하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요. 이전 화면으로 돌아가려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_321",
            product: "dev"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "기본값-복원",
      children: "기본값 복원"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치 설정, 네트워크 설정, 사용자 권한 등이 초기화됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_089",
            product: "dev"
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_304",
                product: "dev"
              }), ": 장치에 저장된 모든 설정을 초기화합니다. 장치 설정을 모두 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_367",
                product: "dev"
              }), "을 누르세요. 이전 화면으로 돌아가려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_321",
                product: "dev"
              }), "를 누르세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_104",
                product: "dev"
              }), ": 네트워크 설정을 제외한 모든 설정을 초기화합니다. 네트워크 설정을 제외한 모든 설정을 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_367",
                product: "dev"
              }), "을 누르세요. 이전 화면으로 돌아가려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_321",
                product: "dev"
              }), "를 누르세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_072",
                product: "dev"
              }), ": 장치에 저장된 모든 정보와 루트 인증서를 삭제하고 설정을 초기화합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_121",
                product: "dev"
              }), ": 장치에 저장된 루트 인증서를 삭제합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_089",
            product: "dev"
          }), "을 실행할 경우 장치가 다시 시작됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "초기화를 실행할 경우 사용자 권한도 같이 초기화 됩니다. 초기화를 실행한 뒤 반드시 사용자 권한을 다시 설정하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "초기화를 실행해도 언어 설정은 변경되지 않습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_072",
              product: "dev"
            }), " 메뉴는 장치에 루트 인증서가 저장되었을 때 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_121",
              product: "dev"
            }), " 메뉴는 장치에 루트 인증서가 저장되어 있고 전체 관리자가 지정되었을 때 사용할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용자-id-종류",
      children: "사용자 ID 종류"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치에 등록할 사용자 ID의 형태를 선택할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_168",
            product: "dev"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_200",
                product: "dev"
              }), ": 사용자 ID를 숫자로만 입력할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_237",
                product: "dev"
              }), ": 사용자 ID를 영문, 숫자, 일부 기호 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "_"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-"
              }), "를 조합하여 입력할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "를 누르세요."]
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