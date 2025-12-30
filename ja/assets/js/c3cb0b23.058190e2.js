"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["98078"], {
4789: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_sip_intercom_for_biostaion_3_mdx_c3c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-sip-intercom-for-biostaion-3-mdx-c3c.json
var site_docs_platform_biostar_air_sip_intercom_for_biostaion_3_mdx_c3c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/sip-intercom-for-biostation3","title":"BioStation 3 SIP 인터폰","description":"BioStation 3에서 양방향 오디오 통화, DTMF 명령을 통한 원격 도어 제어 및 BioStar Air 웹 및 모바일 앱을 통한 통화 수신을 위한 SIP 인터폰 기능을 구성하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/sip-intercom-for-biostaion3.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/sip-intercom-for-biostation3","permalink":"/docs/ja/platform/biostar_air/sip-intercom-for-biostation3","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/sip-intercom-for-biostaion3.mdx","tags":[],"version":"current","frontMatter":{"id":"sip-intercom-for-biostation3","title":"BioStation 3 SIP 인터폰","description":"BioStation 3에서 양방향 오디오 통화, DTMF 명령을 통한 원격 도어 제어 및 BioStar Air 웹 및 모바일 앱을 통한 통화 수신을 위한 SIP 인터폰 기능을 구성하는 방법을 안내합니다.","keywords":["SIP","Intercom","BioStation 3"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"근태 보고서","permalink":"/docs/ja/platform/biostar_air/reports-time-attendance-reports"},"next":{"title":"IP 카메라 지원 및 설정하기","permalink":"/docs/ja/platform/biostar_air/ip-camera-support-and-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/sip-intercom-for-biostaion3.mdx


const frontMatter = {
	id: 'sip-intercom-for-biostation3',
	title: 'BioStation 3 SIP 인터폰',
	description: 'BioStation 3에서 양방향 오디오 통화, DTMF 명령을 통한 원격 도어 제어 및 BioStar Air 웹 및 모바일 앱을 통한 통화 수신을 위한 SIP 인터폰 기능을 구성하는 방법을 안내합니다.',
	keywords: [
		'SIP',
		'Intercom',
		'BioStation 3'
	],
	isTranslationMissing: true
};
const contentTitle = 'SIP 인터폰 설정';

const assets = {

};



const toc = [{
  "value": "SIP",
  "id": "sip",
  "level": 2
}, {
  "value": "전화 받기",
  "id": "전화-받기",
  "level": 2
}, {
  "value": "원격 출입문 제어",
  "id": "원격-출입문-제어",
  "level": 2
}, {
  "value": "구성 단계",
  "id": "구성-단계",
  "level": 2
}, {
  "value": "장치 설정",
  "id": "장치-설정",
  "level": 3
}, {
  "value": "계정 설정",
  "id": "계정-설정",
  "level": 3
}, {
  "value": "검증된 SIP 공급자",
  "id": "검증된-sip-공급자",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Step, Steps} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "sip-인터폰-설정",
        children: "SIP 인터폰 설정"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar Air v2.10"
      }), "부터는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStation 3"
      }), "(BS3)에서 SIP 인터폰 기능을 지원합니다. 이를 통해 리더기와 관리자 간의 양방향 음성 통화는 물론 원격으로 출입문을 잠금 해제할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "이 기능을 사용하려면 SIP 서버가 필요하며, 별도로 구매 및 구성해야 합니다. 슈프리마는 SIP 서비스를 제공하지 않습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sip",
      children: "SIP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "세션 시작 프로토콜"
      }), "(", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Session Initiation Protocol, SIP"
      }), ")은 IP 네트워크를 통해 실시간 음성 및 비디오 통화를 시작, 유지 및 종료하는 데 널리 사용되는 통신 프로토콜입니다. 이 경우 SIP는 BioStation 3가 인터폰 엔드포인트로 작동하여 호환되는 SIP 서비스를 통해 전화를 걸고 받을 수 있도록 합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "전화-받기",
      children: "전화 받기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3에서 수신된 전화는 아래의 방식으로 받을 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Web"
          }), ": 웹 브라우저에서 직접 통화 수신"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Mobile App"
          }), " (iOS / Android): 이동 중에도 통화 수신"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "원격-출입문-제어",
      children: "원격 출입문 제어"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SIP 전화를 받을 때, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DTMF 명령"
      }), "을 사용하여 출입문을 열 수 있습니다:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "물리적 SIP 전화"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air 모바일 앱"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air Web 인터페이스"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "구성-단계",
      children: "구성 단계"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치 설정 및 관리자 계정 설정에서 구성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "장치-설정",
          children: "장치 설정"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["BioStar Air 포털에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "장치 관리"
              }), "로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStation 3"
              }), "를 장치 목록에서 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "다음 SIP 서버 세부정보를 입력하세요."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Server Address"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Port"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Login Credentials"
                  }), " (username and password)"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-intercom-configuration-edit-device.png",
          alone: true,
          className: "none"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "계정-설정",
          children: "계정 설정"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "통화를 수신해야 하는 각 관리자는 BioStar Air 포털 또는 모바일 앱에 로그인해야 합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Account Settings"
              }), "에서 장치 구성에 사용된 동일한 SIP 로그인 정보를 추가합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "로그인 정보 추가를 통해 BioStation 3의 통화를 브라우저나 앱으로 라우팅할 수 있습니다."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-intercom-configuration-account-setting.png",
          alone: true,
          className: "none"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-intercom-configuration-edit-device.png",
          alone: true,
          className: "none"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "검증된-sip-공급자",
      children: "검증된 SIP 공급자"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3는 아래 공급자와 함께 잘 작동하는 것으로 테스트 및 확인하였습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RingCentral"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FreePBX"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linphone"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Linhome"
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