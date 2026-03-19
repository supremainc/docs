"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3570"], {
18775: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_elevator_add_edit_delete_mdx_fa5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-elevator-add-edit-delete-mdx-fa5.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_elevator_add_edit_delete_mdx_fa5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/elevator-add-edit-delete","title":"エレベーター管理","description":"エレベーターの入退室制御を設定して、階ごとのアクセスを管理します。 OM-120モジュールを機器に接続し、階ボタンのリレー設定を行ってから、アクセスのスケジュールを管理します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/elevator-add-edit-delete.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/elevator-add-edit-delete","permalink":"/docs/ja/platform/biostar_air/elevator-add-edit-delete","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/elevator-add-edit-delete.mdx","tags":[],"version":"current","frontMatter":{"id":"elevator-add-edit-delete","title":"エレベーター管理","description":"エレベーターの入退室制御を設定して、階ごとのアクセスを管理します。 OM-120モジュールを機器に接続し、階ボタンのリレー設定を行ってから、アクセスのスケジュールを管理します。","keywords":["エレベーター","階ごとの入退室制御","OM-120","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"エレベーター","permalink":"/docs/ja/platform/biostar_air/manage-elevator"},"next":{"title":"階別アクセス権の設定","permalink":"/docs/ja/platform/biostar_air/elevator-set-floor-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/elevator-add-edit-delete.mdx


const frontMatter = {
	id: 'elevator-add-edit-delete',
	title: 'エレベーター管理',
	description: 'エレベーターの入退室制御を設定して、階ごとのアクセスを管理します。 OM-120モジュールを機器に接続し、階ボタンのリレー設定を行ってから、アクセスのスケジュールを管理します。',
	keywords: [
		'エレベーター',
		'階ごとの入退室制御',
		'OM-120',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "要件",
  "id": "要件",
  "level": 2
}, {
  "value": "デバイスとモジュールの接続",
  "id": "デバイスとモジュールの接続",
  "level": 2
}, {
  "value": "エレベーター登録",
  "id": "エレベーター登録",
  "level": 2
}, {
  "value": "エレベーター編集",
  "id": "エレベーター編集",
  "level": 2
}, {
  "value": "エレベーター削除",
  "id": "エレベーター削除",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, IcAirRemove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "エレベーターの入退室制御を構成するには、まず入退室制御装置にOM-120モジュールを接続します。 次に各階の名称とリレー番号を設定し、各階ごとにアクセス可能な時間帯をスケジュールで制限することで、セキュリティを強化できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "要件",
      children: "要件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "エレベーター出入制御機能を有効にするには、次の要件を満たす必要があります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://supremainc.com/en/hardware/pd_om-120.asp",
            children: "Suprema OM-120モジュール"
          }), ": 各モジュールは最大12階まで対応します。 最大12台のOM-120モジュールを1つの出入制御デバイスに接続し、最大144階まで対応できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OM-120を接続できるBioStar Air対応のデバイスが必要です。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "エレベーター制御盤への適切な配線作業が必要です。 配線の詳細はエレベーターの製造元にお問い合わせください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "階別のアクセススケジュールが優先され、休日設定によって通常のアクセスルールを上書きできます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイスとモジュールの接続",
      children: "デバイスとモジュールの接続"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイス一覧でOM-120モジュールが接続された出入制御デバイスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "module_found_slots_title",
            product: "air"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-device-modules.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスに接続されているOM-120モジュールを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "エレベーター登録",
      children: "エレベーター登録"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators.add_elevator_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.title",
            product: "air"
          }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.device_info.field1",
            product: "air"
          }), " および ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.device_info.field2",
            product: "air"
          }), "(オプション) を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.assign_device_and_modules.title",
            product: "air"
          }), " セクションで出入認証に使用するデバイスとモジュールを選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.assign_device_and_modules.field1",
                product: "air"
              }), "：出入認証に使用するデバイスを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.assign_device_and_modules.field2",
                product: "air"
              }), "：エレベーターボタンリレーを制御するOM-120モジュールを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.assign_device_and_modules.field3",
                product: "air"
              }), "：認証完了後に階ボタンが有効な状態を維持する時間を設定します。 この時間を過ぎると、リレーは階ボタンに信号を送りません。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.floors_configuration.title",
            product: "air"
          }), " セクションで制御する階数を入力し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.floors_configuration.apply_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各階の名前、リレー番号、スケジュールを設定します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add-config-floor.png",
          alone: true,
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.floors_configuration.floors_table.column1",
                product: "air"
              }), "：階の名前を入力します。 1階、ロビー、会議室の階など、識別しやすい名前を使用してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.floors_configuration.floors_table.column2",
                product: "air"
              }), "：エレベーター制御盤で各階のボタンに対応するリレー出力を選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.floors_configuration.floors_table.column3",
                product: "air"
              }), "：各階にアクセスできるスケジュールを設定します。 例えば、勤務時間外はメンテナンス階へのアクセスを制限できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["エレベーター設定を保存して登録するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "OM-120モジュールあたり最大12階を対応します。 複数のOM-120モジュールをデイジーチェーン方式で接続して、最大144階まで拡張できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "add_elevator.floors_configuration.title",
              product: "air"
            }), " セクションで階を削除するには、", (0,jsx_runtime.jsx)(IcAirRemove, {
              title: "Delete"
            }), " ボタンをクリックしてください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["スケジュール登録方法に関する詳細は、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-schedule"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "エレベーター編集",
      children: "エレベーター編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登録済みのエレベーターの詳細を変更するか、設定を編集するには、次の手順に従ってください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧から編集するエレベーターをクリックします。 またはエレベーターのチェックボックスをクリックし、一覧上部の", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_elevator.title",
            product: "air"
          }), " パネルが表示されたら、必要な情報を変更するか設定を編集します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "エレベーター削除",
      children: "エレベーター削除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登録されたエレベーターを削除するには、次の手順に従ってください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で削除するエレベーターのチェックボックスをクリックします。 1台以上のエレベーターを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧上部の", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["警告メッセージのウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_yes",
            product: "air"
          }), " をクリックします。"]
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