"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5214"], {
4929: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_enroll_credential_securitylevel_mdx_5a4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-enroll-credential-securitylevel-mdx-5a4.json
var site_docs_platform_biostar_x_enroll_credential_securitylevel_mdx_5a4_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-securitylevel","title":"보안 수준 설정하기","description":"장치에서 설정한 바이오 메트릭 1:N 보안 등급과 상관없이 사용자에게 별도의 보안 등급을 부여할 수 있습니다.","source":"@site/docs/platform/biostar_x/enroll-credential-securitylevel.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-securitylevel","permalink":"/docs/en/platform/biostar_x/enroll-credential-securitylevel","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-securitylevel.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-securitylevel","title":"보안 수준 설정하기","description":"장치에서 설정한 바이오 메트릭 1:N 보안 등급과 상관없이 사용자에게 별도의 보안 등급을 부여할 수 있습니다.","keywords":["크리덴셜","보안","보안 수준"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"Enroll User\'s Credential","permalink":"/docs/en/platform/biostar_x/enroll-credential"},"next":{"title":"지문 등록하기","permalink":"/docs/en/platform/biostar_x/enroll-credential-fingerprint"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/enroll-credential-securitylevel.mdx


const frontMatter = {
	id: 'enroll-credential-securitylevel',
	title: '보안 수준 설정하기',
	description: '장치에서 설정한 바이오 메트릭 1:N 보안 등급과 상관없이 사용자에게 별도의 보안 등급을 부여할 수 있습니다.',
	keywords: [
		'크리덴셜',
		'보안',
		'보안 수준'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치에서 설정한 바이오 메트릭 1", ":N", " 보안 등급과 상관없이 사용자에게 별도의 보안 등급을 부여할 수 있습니다. 장치의 1", ":N", " 보안 등급을 높게 설정해 자주 인증에 실패하는 사용자가 있다면, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.fingerSecurityLevel",
        product: "2"
      }), "을 낮게 설정하여 인증 실패를 완화할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-securitylevle.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "user.fingerSecurityLevel",
        product: "2"
      }), " 항목에서 원하는 수준을 설정하세요. 설정할 수 있는 값은 아래를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.deviceDefault",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.lowest",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.low",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.normal",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.high",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.highest",
          product: "2"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.permission",
              product: "2"
            }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.privateMode",
              product: "2"
            }), " 항목을 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Biometric"
            }), "으로 설정했다면, 입력된 사용자를 알 수 없기 때문에 1:1 보안 등급을 적용할 수 없으며, 사용자 특정이 가능한 카드 또는 ID로 인증 모드를 설정했을 때만 1:1 보안 등급을 적용할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.privateMode",
              product: "2"
            }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "set-permission#privateAuthMode",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["적절한 보안 등급을 설정하세요. 보안 등급이 높을수록 지문 인증률이 낮거나 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../reference/glossary#frr",
              children: "본인 거부율(FRR)"
            }), "이 높을 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
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