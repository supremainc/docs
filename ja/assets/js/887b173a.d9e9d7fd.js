"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["99721"], {
52552: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_sio_2_secure_module_mdx_887_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-configuring-the-sio-2-secure-module-mdx-887.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_sio_2_secure_module_mdx_887_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-the-sio2-secure-module","title":"SIO2 セキュリティモジュールの構成","description":"SIO2 セキュリティモジュールを構成して、入退室管理システムのセキュリティを強化する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-sio2-secure-module.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-the-sio2-secure-module","permalink":"/docs/ja/platform/biostar_air/configuring-the-sio2-secure-module","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/configuring-the-sio2-secure-module.mdx","tags":[],"version":"current","frontMatter":{"id":"configuring-the-sio2-secure-module","title":"SIO2 セキュリティモジュールの構成","description":"SIO2 セキュリティモジュールを構成して、入退室管理システムのセキュリティを強化する方法を説明します。","keywords":["SIO2","セキュリティモジュール","構成"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"IPカメラのサポートおよび設定","permalink":"/docs/ja/platform/biostar_air/ip-camera-support-and-configuration"},"next":{"title":"E200 QRスキャナの配線と設定","permalink":"/docs/ja/platform/biostar_air/e200-qr-scanner"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-sio2-secure-module.mdx


const frontMatter = {
	id: 'configuring-the-sio2-secure-module',
	title: 'SIO2 セキュリティモジュールの構成',
	description: 'SIO2 セキュリティモジュールを構成して、入退室管理システムのセキュリティを強化する方法を説明します。',
	keywords: [
		'SIO2',
		'セキュリティモジュール',
		'構成'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "BioStar Air ポータルで SIO2 を有効化する",
  "id": "how-to-activate-sio2-in-the-biostar-air-portal",
  "level": 2
}, {
  "value": "リーダーの登録",
  "id": "register-the-reader",
  "level": 3
}, {
  "value": "デバイス接続の確認",
  "id": "check-device-connection",
  "level": 3
}, {
  "value": "SIO2 をドアに割り当てる",
  "id": "assign-sio2-to-a-door",
  "level": 3
}, {
  "value": "SIO2 を有効化する",
  "id": "enable-sio2",
  "level": 3
}, {
  "value": "リレーおよびセンサーの構成",
  "id": "configure-relay-and-sensors",
  "level": 3
}, {
  "value": "設定の保存",
  "id": "save-the-settings",
  "level": 3
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
  }, {Cmd, Image, StatusOK, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SIO2 セキュリティモジュール"
      }), "は、BioStar Airと互換性のあるデバイスとリレーの間を仲介し、入退室管理システムのセキュリティを強化します。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RS485 케이블"
      }), "を介してリーダーと通信し、暗号化された通信によりセキュリティ違反を防ぎます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SIO2 セキュリティモジュール"
        }), "の正確な設置手順は、製品パッケージに同梱されている配線図を参照してください。 環境により設置方法が異なる場合があるため、Supremaの代理店に専門的なサポートを依頼してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-activate-sio2-in-the-biostar-air-portal",
      children: "BioStar Air ポータルで SIO2 を有効化する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SIO2 セキュリティモジュールを正常に統合し、入退室管理システムのセキュリティを強化するには、次の手順に従って ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "add_doors.sio2",
        product: "air"
      }), " オプションを有効にしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "SIO2 を設置しても、BioStar Air ポータルで設定を変更しないと動作しないことがあります。"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "register-the-reader",
          children: "リーダーの登録"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "リーダー、SIO2、およびドアリレーが正常に接続されていることを確認してください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar Air アプリ"
              }), "を使ってサイトにリーダーを登録してください。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "check-device-connection",
          children: "デバイス接続の確認"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com/",
                children: "BioStar Air ポータル"
              }), "にアクセスしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["デバイス一覧で該当デバイスが", (0,jsx_runtime.jsx)(_components.strong, {
                children: "緑"
              }), "(", (0,jsx_runtime.jsx)(StatusOK, {}), ")で表示され、接続が完了していることを確認してください。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "assign-sio2-to-a-door",
          children: "SIO2 をドアに割り当てる"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_submenu",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "一覧からデバイスが接続されているドアをクリックしてください。 デバイスが登録されると、ドアが自動的に作成されます。"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-sio2",
          children: "SIO2 を有効化する"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "edit_door.title",
                product: "air"
              }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
                children: "補助デバイス"
              }), " セクションに移動してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.sio2",
                product: "air"
              }), " オプションを有効にしてください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-edit-door-sio2-enable.png"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configure-relay-and-sensors",
          children: "リレーおよびセンサーの構成"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-edit-door-sio2-settings.png",
          caption: true
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.door_relay",
                product: "air"
              }), " では ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Relay 0"
              }), " を選択してください。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "SIO2 モジュールには1つのドアリレーポートのみがあります。"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_door_sensor",
                product: "air"
              }), " で、接続されている SIO2 の入力ポート番号を選択してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_exit_btn",
                product: "air"
              }), " が接続されている場合は、SIO2 の該当する入力ポートを選択してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["別のタイプの出口デバイスを使用する場合は、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column3",
                product: "air"
              }), " を選択してください。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "save-the-settings",
          children: "設定の保存"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["設定を適用するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "これで SIO2 セキュリティモジュールは正常に動作します。"
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