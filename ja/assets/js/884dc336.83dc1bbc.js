"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["71619"], {
1600: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_site_additional_settings_mdx_884_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-site-additional-settings-mdx-884.json
var site_docs_platform_biostar_air_site_additional_settings_mdx_884_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-additional-settings","title":"추가 기능 설정하기","description":"QR 코드 리더기, IP 카메라 연동, 웹훅 등 BioStar Air의 확장 기능을 활성화하고 구성하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/site-additional-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-additional-settings","permalink":"/docs/ja/platform/biostar_air/site-additional-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-additional-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-additional-settings","title":"추가 기능 설정하기","description":"QR 코드 리더기, IP 카메라 연동, 웹훅 등 BioStar Air의 확장 기능을 활성화하고 구성하는 방법을 안내합니다.","keywords":["사이트 추가 설정","추가 설정"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"보안 설정하기","permalink":"/docs/ja/platform/biostar_air/site-security-settings"},"next":{"title":"관리자 계정 및 역할 관리하기","permalink":"/docs/ja/platform/biostar_air/managing-administrators"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/site-additional-settings.mdx


const frontMatter = {
	id: 'site-additional-settings',
	title: '추가 기능 설정하기',
	description: 'QR 코드 리더기, IP 카메라 연동, 웹훅 등 BioStar Air의 확장 기능을 활성화하고 구성하는 방법을 안내합니다.',
	keywords: [
		'사이트 추가 설정',
		'추가 설정'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "QR 코드 리더기 사용 여부, ONVIF 카메라 연동, 외부 시스템으로의 이벤트 전송(웹훅) 등\n사이트 운영에 필요한 확장 기능을 활성화하거나 비활성화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_qr_reader_tab",
        product: "air"
      }), " 탭에서 추가 기능을 활성화하거나 비활성화할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-additional-feature.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_qr_label",
            product: "air"
          }), ": QR 코드 리더기를 지원합니다. QR 리더기를 사용하지 않는다면 해당 옵션을 비활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_video_management",
            product: "air"
          }), ": ONVIF 호환 IP 카메라를 지원합니다. BioStar Air와 비디오 감시를 통합하려면 이 기능을 활성화하세요. 기능을 활성화한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting_label",
            product: "air"
          }), " 버튼을 클릭하면 이벤트 로그 재생 시간을 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["비디오 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/ip-camera-support-and-configuration"
            }), "을 참고하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_webhook_title",
            product: "air"
          }), ": 웹훅을 활성화하여 BioStar Air의 이벤트를 외부 시스템으로 전송할 수 있습니다. 이 기능을 활성화한 후 아래 필드를 구성하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-additional-feature-webhook.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_url",
                product: "air"
              }), ": 이벤트를 수신할 외부 서버의 엔드포인트 주소를 입력하세요. 예: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "https://example.com/webhook-endpoint"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_secret",
                product: "air"
              }), ": 웹훅 요청이 신뢰할 수 있는 발신 서버에서 전송되었는지 검증하는 보안 토큰입니다. 발신 서버는 보안 키를 이용해 데이터 본문(Payload)을 SHA256으로 암호화하고, 헤더에 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "X-Signature"
              }), "로 전송합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_form_send_text",
                product: "air"
              }), ": 웹훅이 올바르게 작동하는지 확인할 수 있습니다. 테스트 메시지를 전송하여 외부 서버가 요청을 수신하고 응답하는지 검증하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["필요한 정보를 모두 입력했다면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "save_btn",
                  product: "air"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["입력한 정보를 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_button_reset",
                  product: "air"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n"]
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