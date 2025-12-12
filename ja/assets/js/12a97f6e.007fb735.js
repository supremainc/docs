"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["23257"], {
28630: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_authmode_mdx_12a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-authmode-mdx-12a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_authmode_mdx_12a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-authmode","title":"認証モードを設定する","description":"デバイスのデフォルト認証モードまたはユーザー別にカスタマイズした認証モードを設定して、ユーザーごとに異なる認証方法を適用します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-authmode.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-authmode","permalink":"/docs/ja/platform/biostar_x/enroll-credential-authmode","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-authmode.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-authmode","title":"認証モードを設定する","description":"デバイスのデフォルト認証モードまたはユーザー別にカスタマイズした認証モードを設定して、ユーザーごとに異なる認証方法を適用します。","keywords":["認証モード","設定","個人認証","拡張認証","デバイスデフォルト"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"セキュリティレベルを設定する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-securitylevel"},"next":{"title":"指紋を登録する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-fingerprint"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-authmode.mdx


const frontMatter = {
	id: 'enroll-credential-authmode',
	title: '認証モードを設定する',
	description: 'デバイスのデフォルト認証モードまたはユーザー別にカスタマイズした認証モードを設定して、ユーザーごとに異なる認証方法を適用します。',
	keywords: [
		'認証モード',
		'設定',
		'個人認証',
		'拡張認証',
		'デバイスデフォルト'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "デバイスデフォルト",
  "id": "デバイスデフォルト",
  "level": 2
}, {
  "value": "個人認証モード",
  "id": "個人認証モード",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーごとに柔軟に認証方法を設定できます。 デバイスで設定したデフォルトの認証方法を使用するか、各ユーザーに適した個別の認証モードを指定できます。 また、顔と指紋を組み合わせた拡張認証モードによりセキュリティレベルを高めることができます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイスデフォルト",
      children: "デバイスデフォルト"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.authMode",
        product: "2"
      }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.deviceDefault",
        product: "2"
      }), " に設定すると、デバイスで設定した方式で認証できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-default.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "個人認証モード",
      children: "個人認証モード"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.authMode",
        product: "2"
      }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.privateMode",
        product: "2"
      }), " に設定すると、ユーザーごとに認証方法を個別に設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-private.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " をクリックすると、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.addNewAuthMode",
        product: "2"
      }), " ウィンドウが表示されます。 希望する認証方法を設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-authmod-private-add.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.authMode.toggle",
            product: "2"
          }), "：拡張認証モードの使用可否を設定します。 拡張認証モードを使用すると、顔と指紋を含む認証モードを組み合わせることができます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.authMode",
            product: "2"
          }), "：使用する認証モードをドラッグ＆ドロップで設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-authmod-private-join.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["設定した認証モードを登録するには ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.toggle",
              product: "2"
            }), " オプションは FaceStation F2、BioStation 3、BioEntry W3 モデルでサポートされています。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.includeDeviceDefaultAuthMode",
              product: "2"
            }), " に設定すると、デバイスで設定された認証モードと ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " で設定した個別認証モードの両方を使用できます。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-new-user-credential-authmod-note-image.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.excludeDeviceDefaultAuthMode",
              product: "2"
            }), " に設定すると、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " で設定した個別認証モードのみを使用できます。"]
          }), "\n"]
        }), "\n"]
      })
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