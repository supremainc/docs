"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["50339"], {
2923: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_device_with_app_mdx_53b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-manage-device-with-app-mdx-53b.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_device_with_app_mdx_53b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-device-with-app","title":"デバイスの登録と削除","description":"BioStar Airモバイルアプリで、デバイスの登録・削除やファームウェアのアップグレード方法をご案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-device-with-app.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-device-with-app","permalink":"/docs/ja/platform/biostar_air/manage-device-with-app","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-device-with-app.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-device-with-app","title":"デバイスの登録と削除","description":"BioStar Airモバイルアプリで、デバイスの登録・削除やファームウェアのアップグレード方法をご案内します。","keywords":["BioStar Air","デバイス登録","モバイルアプリ"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"デバイス","permalink":"/docs/ja/platform/biostar_air/manage-device"},"next":{"title":"登録済みデバイスの管理","permalink":"/docs/ja/platform/biostar_air/managing-registered-devices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-device-with-app.mdx


const frontMatter = {
	id: 'manage-device-with-app',
	title: 'デバイスの登録と削除',
	description: 'BioStar Airモバイルアプリで、デバイスの登録・削除やファームウェアのアップグレード方法をご案内します。',
	keywords: [
		'BioStar Air',
		'デバイス登録',
		'モバイルアプリ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "デバイス登録",
  "id": "デバイス登録",
  "level": 2
}, {
  "value": "デバイスの削除",
  "id": "removingDevice",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, IcAirRemove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスをBioStar Airに追加するには、BioStar Airモバイルアプリを使用する必要があります。 モバイルアプリでは、無線接続を使って新しいデバイスを登録したり、既存のデバイスを削除したり、ファームウェアをアップグレードしたりできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイス登録",
      children: "デバイス登録"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airモバイルアプリを使用してデバイスを登録してください。 デバイスの登録はBluetooth Low Energy（BLE）で行われ、登録されたデバイスはBioStar Airポータルで管理できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-register-device-step.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル端末でBioStar Airアプリを起動してログインします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "devices_card",
            product: "air"
          }), " カードをタップします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(IcAdd, {}), " ボタンをタップします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイス検索画面で登録するデバイスの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " ボタンをタップします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイス登録ウィンドウが表示されたら ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_btn_ok",
            product: "air"
          }), " ボタンをタップします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイス一覧に戻り、追加されたデバイスを確認します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ウェブポータルではデバイスを登録できません。 デバイスは必ずBioStar Airモバイルアプリで登録する必要があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスを登録する際は、デバイスとモバイル端末を近くに置き、モバイル端末のBluetooth機能を有効にしてください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["登録したデバイスをドアに設定しない場合は、デバイス登録ウィンドウで ", (0,jsx_runtime.jsx)(Cmd, {
              en: "Create a door with this device",
              children: "이 장치로 출입문 만들기"
            }), " オプションのチェックを外します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "removingDevice",
      children: "デバイスの削除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airポータルのデバイス一覧でデバイスがオフラインの場合は、モバイルアプリを使用してデバイスを削除できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-remove-device-step.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル端末で BioStar Air アプリを起動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "devices_card",
            product: "air"
          }), " カードをタップします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で削除するデバイスを長押しします。 追加で削除するデバイスを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右下の ", (0,jsx_runtime.jsx)(IcAirRemove, {}), " ボタンをタップします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ポップアップメッセージウィンドウで、接続されている出入り口を削除するか選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_delete",
            product: "air"
          }), " をタップします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "X-Station 2以外のデバイスはBioStar Airポータルから削除できます。 ただし、デバイスはオンラインである必要があります。 BioStar Airモバイルアプリを使用してデバイスを削除することを推奨します。"
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