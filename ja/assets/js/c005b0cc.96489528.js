"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["51636"], {
80560: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_device_manager_getting_started_mdx_c00_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-device-manager-getting-started-mdx-c00.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_device_manager_getting_started_mdx_c00_namespaceObject = JSON.parse('{"id":"device/device_manager/getting-started","title":"はじめに","description":"Device Manager を使用するための最小要件を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/device_manager/getting-started.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/getting-started","permalink":"/docs/ja/device/device_manager/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"はじめに","description":"Device Manager を使用するための最小要件を案内します。","keywords":["概要","最小要件"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"デバイスマネージャー","permalink":"/docs/ja/device/device_manager/"},"next":{"title":"デバイスを初期設定する","permalink":"/docs/ja/device/device_manager/initial-setup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/device_manager/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'はじめに',
	description: 'Device Manager を使用するための最小要件を案内します。',
	keywords: [
		'概要',
		'最小要件'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "最小要件",
  "id": "最小要件",
  "level": 2
}, {
  "value": "モバイルデバイス",
  "id": "モバイルデバイス",
  "level": 3
}, {
  "value": "装置とファームウェア",
  "id": "装置とファームウェア",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Device Manager は、BLE 通信を利用して Suprema の XPass D2、XPass 2、BioEntry W3 を設定できるモバイルアプリケーションです。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/device-manager-system-diagram1.svg",
      className: "none",
      width: 650,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理者は PC でサーバーに接続したり装置を物理的に取り外したりすることなく、モバイルデバイスから装置のネットワーク、サーバー、RS-485 通信、カード形式、キーパッド設定、PIN、LED、ブザーを設定でき、装置の再起動やファームウェアアップグレード、装置設定の初期化などの機能も利用できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "また、XPass D2 では、一度設定した値をテンプレートとして保存し、複数の装置に迅速かつ簡単に適用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Suprema Device Manager を使用すると、他社コントローラーと構成された XPass D2 の設定を現場で直接変更できます。"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/device/device-manager-system-diagram2.svg",
        className: "none",
        width: 900,
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "最小要件",
      children: "最小要件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "モバイルデバイス",
      children: "モバイルデバイス"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "モバイルデバイスが BLE 通信に対応しているか確認してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Android 5.0 Lollipop 以上"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "iOS 9.0 以上"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装置とファームウェア",
      children: "装置とファームウェア"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "互換性のある装置とファームウェアバージョンを確認してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/ja/device/xpass_d2/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "XPass D2"
            })
          }), " ファームウェア 1.1.0 以上"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/ja/device/xpass_2/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "XPass 2"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MDPB、XP2-GDPB、XP2-GKDPB：ファームウェア 1.0.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MAPB：ファームウェア 1.4.1 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MAPB-H：ファームウェア 1.4.3 以上"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/ja/device/bioentry_w3/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioEntry W3"
            })
          }), " ファームウェア 1.0.1 以上"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "互換性のある装置とファームウェアは変更される場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "装置のファームウェアが上記のバージョンより古い場合は、BioStar X でファームウェアをアップグレードしてください。 装置をスレーブ装置として使用している場合、接続されているマスター装置のファームウェアも BioStar 2 2.7.0 以上と互換性のある最新バージョンである必要があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["装置ファームウェアのアップグレードの詳細については、", (0,jsx_runtime.jsx)(_components.a, {
              href: "ip-device-settings#device-firmware-upgrade",
              children: "IP 装置（装置ファームウェアをアップグレードする）"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "xpd2-settings#device-firmware-upgrade",
              children: "XPass D2（装置ファームウェアをアップグレードする）"
            }), " または ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-device-upgrade-firmware",
              children: "BioStar X 管理者マニュアル"
            }), " を参照してください。"]
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