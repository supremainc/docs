"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2265"], {
1984: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_enroll_credential_authmode_mdx_c42_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-enroll-credential-authmode-mdx-c42.json
var site_docs_platform_biostar_x_enroll_credential_authmode_mdx_c42_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-authmode","title":"인증 모드 설정하기","description":"장치 기본값 또는 개인별 맞춤 인증 모드를 설정하여 사용자마다 다른 인증 방식을 적용하세요.","source":"@site/docs/platform/biostar_x/enroll-credential-authmode.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-authmode","permalink":"/docs/platform/biostar_x/enroll-credential-authmode","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-authmode.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-authmode","title":"인증 모드 설정하기","description":"장치 기본값 또는 개인별 맞춤 인증 모드를 설정하여 사용자마다 다른 인증 방식을 적용하세요.","keywords":["인증 모드","설정","개인 인증","확장 인증","장치 기본값"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"보안 수준 설정하기","permalink":"/docs/platform/biostar_x/enroll-credential-securitylevel"},"next":{"title":"지문 등록하기","permalink":"/docs/platform/biostar_x/enroll-credential-fingerprint"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/enroll-credential-authmode.mdx


const frontMatter = {
	id: 'enroll-credential-authmode',
	title: '인증 모드 설정하기',
	description: '장치 기본값 또는 개인별 맞춤 인증 모드를 설정하여 사용자마다 다른 인증 방식을 적용하세요.',
	keywords: [
		'인증 모드',
		'설정',
		'개인 인증',
		'확장 인증',
		'장치 기본값'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "장치 기본값",
  "id": "장치-기본값",
  "level": 2
}, {
  "value": "개인 인증 모드",
  "id": "개인-인증-모드",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자별로 인증 방식을 유연하게 설정할 수 있습니다. 장치에서 설정한 기본 인증 방식을 사용하거나, 각 사용자에게 맞는 개별 인증 모드를 지정할 수 있습니다. 또한 얼굴과 지문을 모두 포함한 확장 인증 모드를 통해 보안 수준을 높일 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-기본값",
      children: "장치 기본값"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.authMode",
        product: "2"
      }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.deviceDefault",
        product: "2"
      }), "으로 설정하면 장치에서 설정한 방식에 따라 인증할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-default.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "개인-인증-모드",
      children: "개인 인증 모드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.authMode",
        product: "2"
      }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.privateMode",
        product: "2"
      }), "로 설정하면 사용자마다 인증 방식을 다르게 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-private.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " 버튼을 클릭하면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.addNewAuthMode",
        product: "2"
      }), " 창이 나타납니다. 원하는 인증 방식을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-private-add.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.authMode.toggle",
            product: "2"
          }), ": 확장 인증 모드 사용 여부를 설정하세요. 확장 인증 모드를 사용하면 얼굴과 지문을 모두 포함하여 인증 모드를 조합할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.authMode",
            product: "2"
          }), ": 사용할 인증 모드를 드래그 앤 드랍으로 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정한 인증 모드를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.toggle",
              product: "2"
            }), " 옵션은 FaceStation F2, BioStation 3, BioEntry W3 모델에서 지원합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.includeDeviceDefaultAuthMode",
              product: "2"
            }), "으로 설정하면 장치에서 설정된 인증 모드와 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에서 설정한 개인 인증 모드를 모두 사용할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-new-user-credential-authmod-note-image.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.excludeDeviceDefaultAuthMode",
              product: "2"
            }), "으로 설정하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에서 설정한 개인 인증 모드만 사용할 수 있습니다."]
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