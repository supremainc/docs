"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["21573"], {
82136: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_site_security_settings_mdx_970_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-site-security-settings-mdx-970.json
var site_docs_platform_biostar_air_site_security_settings_mdx_970_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-security-settings","title":"보안 설정하기","description":"관리자 계정 잠금, 2차 인증, 비밀번호 정책, 모바일 크리덴셜 유효 시간 등 BioStar Air 사이트의 보안 수준을 높이는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/site-security-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-security-settings","permalink":"/docs/en/platform/biostar_air/site-security-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-security-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-security-settings","title":"보안 설정하기","description":"관리자 계정 잠금, 2차 인증, 비밀번호 정책, 모바일 크리덴셜 유효 시간 등 BioStar Air 사이트의 보안 수준을 높이는 방법을 안내합니다.","keywords":["사이트 보안","보안 설정"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"고급 설정하기","permalink":"/docs/en/platform/biostar_air/site-advanced-settings"},"next":{"title":"추가 기능 설정하기","permalink":"/docs/en/platform/biostar_air/site-additional-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/site-security-settings.mdx


const frontMatter = {
	id: 'site-security-settings',
	title: '보안 설정하기',
	description: '관리자 계정 잠금, 2차 인증, 비밀번호 정책, 모바일 크리덴셜 유효 시간 등 BioStar Air 사이트의 보안 수준을 높이는 방법을 안내합니다.',
	keywords: [
		'사이트 보안',
		'보안 설정'
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
      children: "무단 접근을 방지하고 사이트를 안전하게 운영하려면 보안 정책을 적절히 구성해야 합니다.\n비활성 관리자 계정 잠금, 이메일 2차 인증, 비밀번호 변경 주기 설정 등을 통해\n사이트 보안 수준을 강화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_security",
        product: "air"
      }), " 탭에서 사이트 보안과 관련한 설정을 구성할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-security.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input1",
            product: "air"
          }), ": 90일 이상 접속하지 않은 관리자 계정을 잠금 상태로 변경할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input2",
            product: "air"
          }), ": 관리자 계정으로 로그인할 때마다 이메일 2차 인증을 요구할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input3",
            product: "air"
          }), ": 다른 출입 권한이 선택되지 않은 경우, 신규 사용자에게 '전체 출입 권한'을 기본 부여합니다. 이 설정을 비활성화하면 수동으로 출입 레벨을 할당해야 합니다. 임시 사용자는 위 설정이 활성화되어 있어도 자동으로 전체 출입 권한을 허용하지 않습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입 레벨 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-access-level"
            }), "를 참고하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input4",
            product: "air"
          }), ": 30일 또는 60일, 90일마다 비밀번호를 재설정하도록 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input6",
            product: "air"
          }), ": 모바일 기기에 네트워크 연결이 없더라도 모바일 크리덴셜이 유효한 시간을 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "기본값은 5분이며, 1분에서 8일 사이로 설정할 수 있습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "보안과 편의성의 균형을 맞추는 데 유용하며, 특히 네트워크 연결이 제한된 원격 사이트에서 유용합니다."
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