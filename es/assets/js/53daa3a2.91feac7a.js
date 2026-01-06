"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1756"], {
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
91051: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_29_troubleshooting_my_mobile_card_isnt_working_mdx_53d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-29-troubleshooting-my-mobile-card-isnt-working-mdx-53d.json
var site_docs_platform_biostar_air_29_troubleshooting_my_mobile_card_isnt_working_mdx_53d_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-suprema-pass-app","title":"모바일 카드가 작동하지 않아요","description":"슈프리마 패스 앱에서 모바일 카드 인증 문제, Bluetooth 및 위치 권한 문제, 연결 실패 해결 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/29-troubleshooting-my-mobile-card-isnt-working.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-suprema-pass-app","permalink":"/docs/es/platform/biostar_air/troubleshooting-suprema-pass-app","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/29-troubleshooting-my-mobile-card-isnt-working.mdx","tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"id":"troubleshooting-suprema-pass-app","title":"모바일 카드가 작동하지 않아요","description":"슈프리마 패스 앱에서 모바일 카드 인증 문제, Bluetooth 및 위치 권한 문제, 연결 실패 해결 방법을 안내합니다.","keywords":["문제 해결","모바일 카드","Airfob"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"위치 서비스를 활성화해야 하나요?","permalink":"/docs/es/platform/biostar_air/location-services-issues"},"next":{"title":"비디오 재생 관련 문제 해결","permalink":"/docs/es/platform/biostar_air/video-troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/29-troubleshooting-my-mobile-card-isnt-working.mdx


const frontMatter = {
	id: 'troubleshooting-suprema-pass-app',
	title: '모바일 카드가 작동하지 않아요',
	description: '슈프리마 패스 앱에서 모바일 카드 인증 문제, Bluetooth 및 위치 권한 문제, 연결 실패 해결 방법을 안내합니다.',
	keywords: [
		'문제 해결',
		'모바일 카드',
		'Airfob'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "BioStar Air 관리자에게 문의",
  "id": "contactbsairAdmin",
  "level": 2
}, {
  "value": "모바일 카드가 삭제되었나요?",
  "id": "mobileCardDeleted",
  "level": 2
}, {
  "value": "단계별 문제 해결 안내",
  "id": "troubleshootingSteps",
  "level": 2
}, {
  "value": "슈프리마 패스 앱에서 오류 메시지가 나타났나요?",
  "id": "슈프리마-패스-앱에서-오류-메시지가-나타났나요",
  "level": 3
}, {
  "value": "모바일 기기의 블루투스가 켜져 있나요?",
  "id": "모바일-기기의-블루투스가-켜져-있나요",
  "level": 3
}, {
  "value": "슈프리마 패스 앱의 위치 권한을 허용하세요",
  "id": "슈프리마-패스-앱의-위치-권한을-허용하세요",
  "level": 3
}, {
  "value": "무선 네트워크와 Wi-Fi 연결을 확인하세요",
  "id": "무선-네트워크와-wi-fi-연결을-확인하세요",
  "level": 3
}, {
  "value": "선택한 연결 방법을 사용했나요?",
  "id": "선택한-연결-방법을-사용했나요",
  "level": 3
}, {
  "value": "인증 시 모바일 기기에 진동이 발생했나요?",
  "id": "인증-시-모바일-기기에-진동이-발생했나요",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcFunc, IcHamberg, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcFunc) _missingMdxReference("IcFunc", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 카드가 장치와 인증되었지만 출입문이 열리지 않는다면 다음 안내를 따라 문제를 해결하세요."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contactbsairAdmin",
      children: "BioStar Air 관리자에게 문의"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사이트 관리자는 모바일 카드 재발급, 일시적인 모바일 기기 문제 및 설정 문제를 도와줄 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-contact-admin.png",
      width: "78%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모바일 기기의 슈프리마 패스 앱에서 모바일 카드 아래에 위치한 ", (0,jsx_runtime.jsx)(IcFunc, {}), " 아이콘을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["하단의 패널이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "관리자에게 문의하기"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "팝업창이 나타나면 제목과 내용을 작성하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["메시지를 관리자에게 전송하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "보내기"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobileCardDeleted",
      children: "모바일 카드가 삭제되었나요?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 기기를 변경하거나 슈프리마 패스 앱을 재설치했다면 보안상의 이유로 모든 모바일 카드가 삭제됩니다. 다음은 모바일 카드 재발급 문의처입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Company Spaces"
          }), ": HR, IT, 보안 또는 운영팀"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shared Spaces"
          }), ": 지역 관리자 또는 고객 서비스 팀"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshootingSteps",
      children: "단계별 문제 해결 안내"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "슈프리마-패스-앱에서-오류-메시지가-나타났나요",
          children: "슈프리마 패스 앱에서 오류 메시지가 나타났나요?"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "출입문이 열리지 않는다면 슈프리마 패스 앱에서 다시 인증을 시도하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "에러 메시지가 나타나면 스크린샷을 캡쳐해 사이트 관리자에게 공유하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "모바일-기기의-블루투스가-켜져-있나요",
          children: "모바일 기기의 블루투스가 켜져 있나요?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 카드는 모바일 기기와 출입 통제 장치 간의 블루투스 통신에 의존합니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "블루투스가 켜져 있는지 확인하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "블루투스를 껐다가 다시 켜보세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "필요하다면 모바일 기기를 재시작하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "슈프리마-패스-앱의-위치-권한을-허용하세요",
          children: "슈프리마 패스 앱의 위치 권한을 허용하세요"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "블루투스 및 NFC 인증에는 위치 권한이 필요합니다."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["모바일 기기의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "설정"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "앱"
              }), "으로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "슈프리마 패스"
              }), " 앱을 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "권한"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "위치"
              }), "에서 위치 액세스 권한을을 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "항상 허용"
              }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "앱 사용 중에만 허용"
              }), "으로 설정하세요."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "무선-네트워크와-wi-fi-연결을-확인하세요",
          children: "무선 네트워크와 Wi-Fi 연결을 확인하세요"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 카드 인증을 위해서는 안정적인 무선 네트워크 또는 Wi-Fi 연결이 필요합니다."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "선택한-연결-방법을-사용했나요",
          children: "선택한 연결 방법을 사용했나요?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "슈프리마 패스 앱에서 연결 방식을 확인하세요."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["슈프리마 패스 앱 초기화면에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcHamberg, {}), " 아이콘을 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "연결 방식"
              }), "에서 인증 모드를 확인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "백그라운드 모드"
              }), "를 사용한다면 앱이 백그라운드에서 열려 있어야 합니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "인증-시-모바일-기기에-진동이-발생했나요",
          children: "인증 시 모바일 기기에 진동이 발생했나요?"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모바일 기기가 진동했지만 출입문이 열리지 않았다면 슈프리마 패스 앱을 열고 다시 인증을 시도하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "에러 메시지가 나타나면 스크린샷을 캡쳐해 사이트 관리자에게 공유하세요."
            }), "\n"]
          }), "\n"]
        })]
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