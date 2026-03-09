"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9751"], {
18363: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_integration_quickstart_mdx_19b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-integration-quickstart-mdx-19b.json
var site_docs_platform_biostar_air_integration_quickstart_mdx_19b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/integration-quickstart","title":"빠른 시작하기","description":"BioStar Air 데모 환경 구성, 호환 장치 등록, API 키 발급 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/integration-quickstart.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/integration-quickstart","permalink":"/docs/platform/biostar_air/integration-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/integration-quickstart.mdx","tags":[],"version":"current","frontMatter":{"id":"integration-quickstart","title":"빠른 시작하기","description":"BioStar Air 데모 환경 구성, 호환 장치 등록, API 키 발급 방법을 안내합니다.","keywords":["API 통합","빠른 시작","BioStar Air","데모"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"개발자","permalink":"/docs/platform/biostar_air/developer-guide"},"next":{"title":"API 인증하기","permalink":"/docs/platform/biostar_air/api-authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/integration-quickstart.mdx


const frontMatter = {
	id: 'integration-quickstart',
	title: '빠른 시작하기',
	description: 'BioStar Air 데모 환경 구성, 호환 장치 등록, API 키 발급 방법을 안내합니다.',
	keywords: [
		'API 통합',
		'빠른 시작',
		'BioStar Air',
		'데모'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사전 요구 사항",
  "id": "pre-requisites",
  "level": 2
}, {
  "value": "데모 환경과 API 키 설정",
  "id": "demo-setup",
  "level": 2
}, {
  "value": "회원 가입 및 로그인",
  "id": "회원-가입-및-로그인",
  "level": 3
}, {
  "value": "데모 애플리케이션 생성",
  "id": "데모-애플리케이션-생성",
  "level": 3
}, {
  "value": "API 키 발급",
  "id": "api-키-발급",
  "level": 3
}, {
  "value": "데모 포털 로그인",
  "id": "데모-포털-로그인",
  "level": 3
}, {
  "value": "장치 등록",
  "id": "registerDevices",
  "level": 2
}, {
  "value": "장치 관리",
  "id": "장치-관리",
  "level": 2
}, {
  "value": "Demo vs Production",
  "id": "demo-vs-production",
  "level": 2
}, {
  "value": "도움이 필요하세요?",
  "id": "need-help",
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
  }, {IcAdd, Step, Steps} = _components;
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 데모 사이트를 설정하고 호환 장치를 연결·등록하여 클라우드 API 통합을 테스트하는 방법을 안내합니다. BioStar 2에서 작업한 경험이 있다면 많은 개념이 친숙하게 느껴질 것입니다. BioStar Air는 완전한 클라우드 기반 시스템입니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-requisites",
      children: "사전 요구 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "시작하기 전에 다음 사항을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["공장 초기화된 펌웨어를 설치한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air 호환 장치"
          }), "를 준비하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-AIR, XS2-AIR, BEW3-AIR, BS3-AIR, BLN2-AIR"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치는 공인 슈프리마 대리점을 통해 구매할 수 있습니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치는 이더넷을 통해 인터넷에 연결되어 있어야 합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "네트워크에서 아웃바운드 액세스를 허용하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Port 443 (HTTPS)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Port 5671 (MQTT over TLS)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-setup",
      children: "데모 환경과 API 키 설정"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "회원-가입-및-로그인",
          children: "회원 가입 및 로그인"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.biostarair.com/login",
                children: "BioStar Air Developer"
              }), "로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "회원 가입"
              }), "을 클릭하고 양식을 작성한 후 승인을 기다리세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "승인이 완료되면 크리덴셜을 사용해 로그인하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "데모-애플리케이션-생성",
          children: "데모 애플리케이션 생성"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "API"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Management"
              }), "로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "+ Register"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["애플리케이션 유형을 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Demo"
              }), "로 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["애플리케이션 이름을 입력하고 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["데모 사이트 로그인 크리덴셜(이메일 및 비밀번호)이 포함된 엑셀 파일을 다운로드하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Download"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "api-키-발급",
          children: "API 키 발급"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Application Management"
              }), "에서 등록한 애플리케이션을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "API Management"
              }), "로 스크롤하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Add"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이름을 입력하고 확인하세요. 생성된 키를 저장하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "데모-포털-로그인",
          children: "데모 포털 로그인"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://demo.airfobspace.com/login",
                children: "Demo Portal"
              }), "로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "엑셀 파일의 이메일 및 비밀번호로 로그인하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "방금 생성한 API 키를 입력하세요."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registerDevices",
      children: "장치 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 기기에 BioStar Air Demo App(안드로이드 전용)을 사용하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다음 링크를 클릭해 모바일 앱을 다운로드하세요. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://moca-public-file-share.s3.ap-northeast-2.amazonaws.com/DeviceRegistration.zip",
            children: "DeviceRegistration.zip"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "엑셀 파일의 크리덴셜로 로그인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "안드로이드 환경의 모바일 기기를 리더기 근처(BLE 범위)로 가져가세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "All Menu"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Devices"
              }), "에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["장치를 검색하고 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치에서 소리가 나고 재부팅되며 등록된 장치 목록에 나타납니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "장치는 모바일 앱을 통해서만 등록할 수 있습니다. 웹 포털에서는 등록할 수 없습니다. API 기반 등록에는 파트너에게 제공되지 않는 암호화 인증서가 필요합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-관리",
      children: "장치 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "데모 앱 또는 데모 웹 포털에서 장치를 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Demo App"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo Web Portal"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://demo.airfobspace.com/login",
            children: "https://demo.airfobspace.com/login"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-vs-production",
      children: "Demo vs Production"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["테스트를 위한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo"
          }), " 사이트는 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developers.biostarair.com/login",
            children: "개발자 포털"
          }), "을 통해 생성됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Production"
          }), " 사이트는 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com/",
            children: "파트너 포털"
          }), "을 통해 생성되며 사이트 ID, 사용자 이메일 및 비밀번호가 필요합니다. Production 사이트는 승인된 판매자 또는 슈프리마 지사만 생성할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 ID와 계정 ID는 다릅니다. 혼동하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "여러 사이트를 관리한다면 비밀번호를 안전하게 저장하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "항상 최신 Bearer 토큰을 사용하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "브라우저에서 복사한 Bearer 토큰은 Postman에서 재사용할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "need-help",
      children: "도움이 필요하세요?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["슈프리마 기술 지원 포털에서 티켓을 여세요. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://support.supremainc.com",
        children: "https://support.supremainc.com"
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