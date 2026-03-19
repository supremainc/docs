"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["95576"], {
83303: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_custom_wiegand_card_formats_mdx_70e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-custom-wiegand-card-formats-mdx-70e.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_custom_wiegand_card_formats_mdx_70e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/custom-wiegand-card-formats","title":"カスタムWiegandカード形式を設定する","description":"既存のアクセス制御システムから円滑にマイグレーションするためのファシリティコード、IDセグメント、パリティビット、ビット割り当てなどについて、BioStar Air v2.10でカスタムWiegandカード形式を作成および構成する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/custom-wiegand-card-formats.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/custom-wiegand-card-formats","permalink":"/docs/ja/platform/biostar_air/custom-wiegand-card-formats","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/custom-wiegand-card-formats.mdx","tags":[],"version":"current","frontMatter":{"id":"custom-wiegand-card-formats","title":"カスタムWiegandカード形式を設定する","description":"既存のアクセス制御システムから円滑にマイグレーションするためのファシリティコード、IDセグメント、パリティビット、ビット割り当てなどについて、BioStar Air v2.10でカスタムWiegandカード形式を作成および構成する方法を案内します。","keywords":["Wiegand","カード形式","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"アラートとレポートの設定","permalink":"/docs/ja/platform/biostar_air/settings-alert-report"},"next":{"title":"勤怠管理（T&A）の設定","permalink":"/docs/ja/platform/biostar_air/configuring-ta"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/custom-wiegand-card-formats.mdx


const frontMatter = {
	id: 'custom-wiegand-card-formats',
	title: 'カスタムWiegandカード形式を設定する',
	description: '既存のアクセス制御システムから円滑にマイグレーションするためのファシリティコード、IDセグメント、パリティビット、ビット割り当てなどについて、BioStar Air v2.10でカスタムWiegandカード形式を作成および構成する方法を案内します。',
	keywords: [
		'Wiegand',
		'カード形式',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Wiegandカード形式一覧",
  "id": "cardFormatMenu",
  "level": 2
}, {
  "value": "カード形式を追加する",
  "id": "カード形式を追加する",
  "level": 2
}, {
  "value": "カード形式を編集する",
  "id": "editCardFormat",
  "level": 2
}, {
  "value": "カード形式を削除する",
  "id": "deleteCardFormat",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirRemove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "既存のアクセス制御システムから円滑にマイグレーションするためのファシリティコード、IDセグメント、パリティビット、ビット割り当てなどについて、BioStar Air v2.10でカスタムWiegandカード形式を作成および構成する方法を案内します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cardFormatMenu",
      children: "Wiegandカード形式一覧"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_format_submenu",
        product: "air"
      }), " をクリックします。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wiegand形式"
      }), "および", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SIA"
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HID形式"
      }), "を含む、特別なカード形式を作成、管理、参照できます。 既存のカードが提供されているアクセス制御ソリューションからマイグレーションするサイトで役立ちます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-card-format.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Airに含まれるデフォルト形式を含め、登録されているすべてのWiegandカード形式を参照できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カード形式の名前、説明、総ビット数、ビットプレビューおよび詳細なビット割り当てを確認できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "名前、説明、総ビット数および詳細なビット割り当てを含めて、新しいカスタムカード形式を構成できます。 システムは視覚的確認のためのビットプレビューを提供します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カード形式を追加する",
      children: "カード形式を追加する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デフォルトのWiegandカード形式に加えて、新しいカスタムWiegandカード形式を追加できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_format_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_title_popup_add",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_title_popup_add",
            product: "air"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_label_detail",
            product: "air"
          }), " セクションで名前と説明（省略可）、総ビット数を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-card-format-add-wiegand.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["総ビット数を入力すると、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_label_bit_preview",
            product: "air"
          }), "が有効になり、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_label_bit_assignment",
            product: "air"
          }), " セクションでビット割り当てを構成します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-card-format-add-wiegand-assign-bit.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_bit_preview_facility_code",
                product: "air"
              }), "：識別コードを使用するにはトグルスイッチをクリックして有効にします。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_start_bit",
                product: "air"
              }), " と ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_end_bit",
                product: "air"
              }), " を入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_bit_preview_id",
                product: "air"
              }), "：開始ビットと終了ビットを指定して1つ以上のIDセグメントを追加します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_bit_preview_parity_bit",
                product: "air"
              }), ": 開始ビットと終了ビットを指定して、奇数/偶数のパリティビットを追加します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新しいカード形式を追加するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editCardFormat",
      children: "カード形式を編集する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "既存のWiegandカード形式を編集するには、次の手順に従います。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_format_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "編集するカード形式をクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_title_popup_edit",
            product: "air"
          }), " ウィンドウが表示されたら、必要な項目を修正します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-card-format-edit-wiegand.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["編集したカード形式を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteCardFormat",
      children: "カード形式を削除する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_format_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "削除するカード形式のチェックボックスをクリックします。 1つ以上のカード形式を選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧上部の", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_yes",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "デフォルトで提供される5つのWiegandカード形式は削除できません。"
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