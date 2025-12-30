"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["74235"], {
20993: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2025년 5월 이전에 BioStar Air 출입 통제 서비스를 사용하기 시작한 고객은 현재 Suprema Pass 앱으로 새로 설계된 Airfob Space 앱을 계속 사용할 수 있습니다. 두 앱 모두 동일한 기능을 제공하며 완벽하게 호환됩니다. 기존 사용자는 전환할 필요가 없으며, 모바일 인증 정보가 두 앱 모두에서 원활하게 작동합니다."
    })
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
41371: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_32_suprema_pass_app_advanced_features_mdx_0fc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-32-suprema-pass-app-advanced-features-mdx-0fc.json
var site_docs_platform_biostar_air_32_suprema_pass_app_advanced_features_mdx_0fc_namespaceObject = JSON.parse('{"id":"platform/biostar_air/suprema-pass-app-advanced-features","title":"고급 기능","description":"슈프리마 패스 앱에서 Bluetooth 및 NFC 인증 모드 구성 방법, PIN 또는 생체 인식 옵션으로 2단계 인증 설정 방법, 액세스 로그 검토 방법, 지원 기능 사용 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/32-suprema-pass-app-advanced-features.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/suprema-pass-app-advanced-features","permalink":"/docs/platform/biostar_air/suprema-pass-app-advanced-features","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/32-suprema-pass-app-advanced-features.mdx","tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"id":"suprema-pass-app-advanced-features","title":"고급 기능","description":"슈프리마 패스 앱에서 Bluetooth 및 NFC 인증 모드 구성 방법, PIN 또는 생체 인식 옵션으로 2단계 인증 설정 방법, 액세스 로그 검토 방법, 지원 기능 사용 방법을 안내합니다.","keywords":["고급 기능","슈프리마 패스 앱","2단계 인증","액세스 로그","지원 옵션"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"모바일 크리덴셜로 출입문 열기","permalink":"/docs/platform/biostar_air/opening-doors-with-mobile-credentials"},"next":{"title":"민감도 설정하기","permalink":"/docs/platform/biostar_air/suprema-pass-app-sensitivity-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/32-suprema-pass-app-advanced-features.mdx


const frontMatter = {
	id: 'suprema-pass-app-advanced-features',
	title: '고급 기능',
	description: '슈프리마 패스 앱에서 Bluetooth 및 NFC 인증 모드 구성 방법, PIN 또는 생체 인식 옵션으로 2단계 인증 설정 방법, 액세스 로그 검토 방법, 지원 기능 사용 방법을 안내합니다.',
	keywords: [
		'고급 기능',
		'슈프리마 패스 앱',
		'2단계 인증',
		'액세스 로그',
		'지원 옵션'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "연결 방식 설정",
  "id": "connectingSetting",
  "level": 2
}, {
  "value": "블루투스",
  "id": "bluetooth",
  "level": 3
}, {
  "value": "NFC",
  "id": "nfc",
  "level": 3
}, {
  "value": "이중 인증(2FA)",
  "id": "twoFactorAuth",
  "level": 2
}, {
  "value": "iOS 사용자",
  "id": "ios",
  "level": 3
}, {
  "value": "안드로이드 사용자",
  "id": "android",
  "level": 3
}, {
  "value": "출입 로그",
  "id": "accesslogs",
  "level": 2
}, {
  "value": "지원 센터",
  "id": "supportCenter",
  "level": 2
}, {
  "value": "고급 설정",
  "id": "고급-설정",
  "level": 2
}, {
  "value": "추가 기능",
  "id": "additionalFeatures",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcHamberg, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "슈프리마 패스 앱은 사용자 경험과 출입 통제 기능을 향상시키기 위한 고급 설정 및 보안 옵션을 포함합니다. 사용자는 인증 방법 구성, 2단계 인증 활성화, 액세스 로그 검토, 문제 보고 및 지원 기능을 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connectingSetting",
      children: "연결 방식 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자가 출입 통제 장치와 통신하는 데 선호하는 연결 방식을 선택할 수 있습니다. 슈프리마 패스 앱 초기화면에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcHamberg, {}), " 아이콘을 탭한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "연결 방식"
      }), "에서 원하는 모드를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-connection-mode.png",
      width: "50%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bluetooth",
      children: "블루투스"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자는 두 가지 블루투스 인증 모드 중에서 선택할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "앱 실행 시"
          }), ": 모바일 기기에서 앱이 열려 있을 때만 모바일 카드로 인증할 수 있습니다. 이 모드는 배터리를 절약하지만 출입문에 접근하기 전에 수동으로 앱을 실행해야 합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "백그라운드 모드"
          }), ": 앱이 백그라운드에서 실행 중인 경우 모바일 기기의 화면이 꺼져 있어도 모바일 카드로 인증할 수 있습니다. 이 모드는 더 편리하지만 배터리를 더 소모합니다. 앱이 종료되면 백그라운드 기능을 재개하기 위해 앱을 다시 실행해야 합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nfc",
      children: "NFC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFC 인증은 안드로이드 기기에서만 사용할 수 있습니다. 사용자는 더 빠른 출입을 위해 NFC를 단독으로 사용하거나 블루투스와 함께 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "NFC 호환 장치를 사용하는 안드로이드 사용자는 블루투스와 함께 NFC를 사용할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "twoFactorAuth",
      children: "이중 인증(2FA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["추가 보안을 위해 사용자는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PIN, 패턴 또는 생체 인식 인증"
      }), "(얼굴 또는 지문)을 사용하여 이중 인증을 활성화할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-twofactor.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이 기능은 출입 인증 중에 앱 화면이 열려 있어야 하므로 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "백그라운드 모드"
            }), " 연결 방식에서는 지원하지 않습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PIN 또는 패턴을 잊어버렸다면 앱을 재설치하고 모바일 카드를 다시 활성화해야 합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "모바일 기기에 따라 지원하는 기능은 다를 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ios",
      children: "iOS 사용자"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["슈프리마 패스 앱 초기화면에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcHamberg, {}), " 아이콘을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["연결 방식을 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "앱 실행 시"
          }), "로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "이중 인증"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "PIN 번호 등록"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "6자리 PIN 번호를 입력하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["성공 알림 메시지가 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PIN 번호를 변경하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "PIN 번호 변경"
            }), "을 탭한 후 새 PIN 번호를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["생체 인식 기능을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "생체 인증"
            }), "을 활성화하고 설정 안내를 따르세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android",
      children: "안드로이드 사용자"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["슈프리마 패스 앱 초기화면에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcHamberg, {}), " 아이콘을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["연결 방식을 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "앱 실행 시"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "NFC"
          }), "로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "이중 인증"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "PIN 번호"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "PIN 번호 등록"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "패턴"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "패턴 등록"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "선택한 PIN 번호 또는 패턴을 입력하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["성공 알림 메시지가 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PIN 번호를 변경하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "PIN 번호 변경"
            }), "을 탭한 후 새 PIN 번호를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["패턴을 변경하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "패턴 변경"
            }), "을 탭한 후 새 패턴을 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["생체 인식 기능을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "생체 인증"
            }), "를 활성화하고 설정 안내를 따르세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accesslogs",
      children: "출입 로그"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입 기록을 통해서 사용자의 출입 시도를 추적하고 출입 관련 문제를 해결할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-access-log.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["슈프리마 패스 앱 초기화면에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcHamberg, {}), " 아이콘을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "출입 기록"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사이트를 선택하고, 시작일과 종료일을 설정하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "검색"
          }), " 버튼을 탭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "supportCenter",
      children: "지원 센터"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["추가 지원이 필요한 사용자는 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "지원 센터"
      }), "로 진입하여 도움을 받을 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-support.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["슈프리마 패스 앱 초기화면에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcHamberg, {}), " 아이콘을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "더보기"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "지원 센터"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "슈프리마 Technical Support"
          }), " 페이지로 이동합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "궁금한 사항을 검색하거나 자주 묻는 질문을 확인하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지원이 필요하다면 오른쪽 하단의 채팅 아이콘을 탭하여 모카(MOCA) 시스템 팀에 지원 티켓을 제출할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "고급-설정",
      children: "고급 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["슈프리마 패스 앱 초기화면에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcHamberg, {}), " 아이콘을 탭한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "더보기"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        children: "고급 설정"
      }), "에서 다음 추가 기능을 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-advanced.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "위치 설정"
          }), ": 사용자의 위치에 따라 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "글로벌"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "EU"
          }), " 서버 중 하나를 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            children: "자동"
          }), "을 선택하면 앱이 위치를 감지하여 적절한 서버를 선택합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "블루투스 인증"
          }), ": 모바일 기가가 움직이지 않을 때 블루투스 인증이 작동하지 않도록 하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "원하지 않는 문 열림 방지"
          }), " 옵션을 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "민감도 설정"
          }), ": 모바일 기기와 에어팝(Airfob) 장치 간의 블루투스 인식 감도를 조정할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "suprema-pass-app-sensitivity-settings",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additionalFeatures",
      children: "추가 기능"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["슈프리마 패스 앱 초기화면에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcHamberg, {}), " 아이콘을 탭한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "더보기"
      }), "에서 다음 추가 기능을 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "테마"
          }), ": 앱의 색상 모드를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            children: "라이트"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "다크"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            children: "시스템"
          }), " 모드를 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "버그 리포트"
          }), ": 오류 발생 상황과 재현 방법 등의 세부 내용을 작성하여 개발자에게 버그 보고서를 제출할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "앱 상세정보"
          }), ": 모바일 기기의 모델 이름, OS 버전, BLE 지원 및 상태 등의 관련 정보를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "앱 라이선스"
          }), ": 슈프리마 패스 앱에 적용되는 오픈 소스 라이선스 정보를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "이용 약관"
          }), ": BioStar Air 플랫폼의 이용 약관을 확인할 수 있습니다."]
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