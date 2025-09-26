"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4235"], {
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
var site_docs_platform_biostar_air_32_suprema_pass_app_advanced_features_mdx_0fc_namespaceObject = JSON.parse('{"id":"platform/biostar_air/suprema-pass-app-advanced-features","title":"고급 기능","description":"Suprema Pass 앱에서 Bluetooth 및 NFC 인증 모드 구성 방법, PIN 또는 생체 인식 옵션으로 2단계 인증 설정 방법, 액세스 로그 검토 방법, 지원 기능 사용 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/32-suprema-pass-app-advanced-features.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/suprema-pass-app-advanced-features","permalink":"/docs/platform/biostar_air/suprema-pass-app-advanced-features","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/32-suprema-pass-app-advanced-features.mdx","tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"id":"suprema-pass-app-advanced-features","title":"고급 기능","description":"Suprema Pass 앱에서 Bluetooth 및 NFC 인증 모드 구성 방법, PIN 또는 생체 인식 옵션으로 2단계 인증 설정 방법, 액세스 로그 검토 방법, 지원 기능 사용 방법을 안내합니다.","keywords":["고급 기능","Suprema Pass 앱","2단계 인증","액세스 로그","지원 옵션"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"모바일 크리덴셜로 출입문 열기","permalink":"/docs/platform/biostar_air/opening-doors-with-mobile-credentials"},"next":{"title":"감도 설정하기","permalink":"/docs/platform/biostar_air/suprema-pass-app-sensitivity-settings"}}')
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
	description: 'Suprema Pass 앱에서 Bluetooth 및 NFC 인증 모드 구성 방법, PIN 또는 생체 인식 옵션으로 2단계 인증 설정 방법, 액세스 로그 검토 방법, 지원 기능 사용 방법을 안내합니다.',
	keywords: [
		'고급 기능',
		'Suprema Pass 앱',
		'2단계 인증',
		'액세스 로그',
		'지원 옵션'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "기능 개요",
  "id": "feature-overview",
  "level": 2
}, ..._biostarair_customer_notice/* .toc */.RM, {
  "value": "고급 설정으로 이동",
  "id": "accessing-advanced-settings",
  "level": 2
}, {
  "value": "통신 방법",
  "id": "contact-method",
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
  "id": "two-factor-authentication",
  "level": 2
}, {
  "value": "iOS 사용자",
  "id": "setting-up-two-factor-authentication-ios",
  "level": 3
}, {
  "value": "안드로이드 사용자",
  "id": "setting-up-two-factor-authentication-android",
  "level": 3
}, {
  "value": "출입 로그",
  "id": "access-logs",
  "level": 2
}, {
  "value": "지원 센터",
  "id": "support-center",
  "level": 2
}, {
  "value": "버그 보고",
  "id": "bug-report",
  "level": 2
}, {
  "value": "추가 정보",
  "id": "additional-information",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "기능 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Pass 앱은 사용자 경험과 출입 통제 기능을 향상시키기 위한 고급 설정 및 보안 옵션을 포함합니다. 사용자는 인증 방법 구성, 2단계 인증 활성화, 액세스 로그 검토, 문제 보고 및 지원 기능을 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessing-advanced-settings",
      children: "고급 설정으로 이동"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "숨겨진 설정 및 추가 메뉴를 실행하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 상단의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "≡"
          }), " (햄버거) 아이콘을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수정을 원하는 설정으로 이동하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contact-method",
      children: "통신 방법"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "앱은 사용자가 출입 통제 장치와 통신하는 데 선호하는 방법을 선택할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bluetooth",
      children: "블루투스"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자는 두 가지 블루투스 인증 모드 중에서 선택할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Only While App is On-Screen"
          }), ": 앱 화면이 열려 있을 때만 모바일 카드로 인증합니다. 이 모드는 배터리를 절약하지만 출입문에 접근하기 전에 수동으로 앱을 실행해야 합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Background Mode"
          }), ": 앱이 백그라운드에서 실행 중인 경우 휴대폰 화면이 꺼져 있어도 모바일 카드로 인증할 수 있습니다. 이 모드는 더 편리하지만 배터리를 더 소모합니다. 앱이 종료되면 백그라운드 기능을 재개하기 위해 앱을 다시 실행해야 합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFC 호환 장치를 사용하는 안드로이드 사용자는 블루투스와 함께 NFC를 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nfc",
      children: "NFC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NFC 인증은 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "안드로이드 기기에서만"
      }), " 사용할 수 있습니다. 사용자는 더 빠른 출입을 위해 NFC를 단독으로 사용하거나 블루투스와 함께 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "two-factor-authentication",
      children: "이중 인증(2FA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["추가 보안을 위해 사용자는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PIN, 패턴 또는 생체 인식 인증"
      }), "(얼굴 또는 지문)을 사용하여 이중 인증을 활성화할 수 있습니다. 이 기능은 인증 중에 앱 화면이 열려 있어야 하므로 백그라운드 모드와 호환되지 않습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "중요 고려 사항"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PIN 또는 패턴을 잊어버렸다면 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "앱을 재설치하고 모바일 카드를 다시 다운로드해야"
        }), " 합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting-up-two-factor-authentication-ios",
      children: "iOS 사용자"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["블루투스 연결 방법을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Only while App is on Screen"
          }), "으로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Two-Factor Authentication"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Register PIN"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "6자리 PIN을 입력하고 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["성공 알림을 기다린 후 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "생체 인식 인증을 사용할 수 있다면 활성화하고 설정 지침을 따르세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting-up-two-factor-authentication-android",
      children: "안드로이드 사용자"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["블루투스 연결 방법을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Only while App is on Screen"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "NFC only"
          }), "로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Two-Factor Authentication"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Register PIN"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Register Pattern"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "선택한 PIN 또는 패턴을 입력하고 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["성공 알림을 기다린 후 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "생체 인식 인증을 사용할 수 있다면 활성화하고 설정 지침을 따르세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "access-logs",
      children: "출입 로그"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입 로그 기능을 사용하면 사용자의 출입 시도를 추적하고 출입 관련 문제를 해결할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Log"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사이트, 날짜 및 시간을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["성공 및 실패한 출입 시도를 포함한 로그를 확인하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Search"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "support-center",
      children: "지원 센터"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["추가 지원이 필요한 사용자는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "지원 센터"
      }), "로 진입하여 다음을 수행할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "자세한 문서를 검색하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모카(MOCA) 시스템 팀에 지원 티켓을 제출하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-report",
      children: "버그 보고"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "오류가 발생하면 사용자는 기술 분석을 위해 개발자에게 버그 보고서를 제출하라는 요청을 받을 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-information",
      children: "추가 정보"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "앱에 대한 추가 세부 정보는 다음에서 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "App Details"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "App License"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Terms of Service"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Privacy Policy"
          })
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