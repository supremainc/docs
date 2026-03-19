"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["55829"], {
32462: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_roll_call_fire_muster_mdx_7e2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-roll-call-fire-muster-mdx-7e2.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_roll_call_fire_muster_mdx_7e2_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-roll-call-fire-muster","title":"ロールコール","description":"BioStar Airで集結地点の設定、ロールコールの開始、ユーザーの安全状態の追跡、ロールコール履歴レポートの作成方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-roll-call-fire-muster.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-roll-call-fire-muster","permalink":"/docs/ja/platform/biostar_air/managing-roll-call-fire-muster","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-roll-call-fire-muster.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-roll-call-fire-muster","title":"ロールコール","description":"BioStar Airで集結地点の設定、ロールコールの開始、ユーザーの安全状態の追跡、ロールコール履歴レポートの作成方法を案内します。","keywords":["ロールコール","ロールコール","火災集結地点","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ドアの状態を監視する","permalink":"/docs/ja/platform/biostar_air/monitoring-door-status"},"next":{"title":"サイトを設定する","permalink":"/docs/ja/platform/biostar_air/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-roll-call-fire-muster.mdx


const frontMatter = {
	id: 'managing-roll-call-fire-muster',
	title: 'ロールコール',
	description: 'BioStar Airで集結地点の設定、ロールコールの開始、ユーザーの安全状態の追跡、ロールコール履歴レポートの作成方法を案内します。',
	keywords: [
		'ロールコール',
		'ロールコール',
		'火災集結地点',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "集結地点の設定",
  "id": "settingMusterPoints",
  "level": 2
}, {
  "value": "モバイルでロールコールを開始する",
  "id": "startingRollcallonMobile",
  "level": 2
}, {
  "value": "ユーザーを安全とマークする",
  "id": "marking-users-safe",
  "level": 3
}, {
  "value": "ロールコールの完了",
  "id": "completingRollCall",
  "level": 3
}, {
  "value": "ロールコール履歴の表示",
  "id": "viewingRollCallHistory",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
  }, {Cmd, Column, Columns, DocLink, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airのロールコールおよび火災避難案内機能により、緊急時にどの従業員が安全に建物から避難したかを追跡できます。 集結地点を設定し、BioStar Airのモバイルアプリを使用すると、管理者はすべてのユーザーを迅速に把握し、ロールコール履歴レポートを作成できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "混乱を避けるため、ユーザーグループに集結地点が正しく割り当てられていることを確認してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "実際の緊急時に備え、ロールコール機能を定期的にテストしてください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "出入記録により、出席を確認できます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "ロールコールと集結地点に関する動画ガイドを視聴するには、次の動画を参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "F0dnR7VmfAo"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingMusterPoints",
      children: "集結地点の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "集結地点は、ユーザーが緊急時に自身の安全を示すためにクレデンシャルを認証できる指定場所です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "advanced_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "roll_call_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_muster_point_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-adv-rollcall.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_muster_point_title",
            product: "air"
          }), " パネルが表示されたら、名前と説明（任意）を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-adv-rollcall-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_muster_point_devices_title",
            product: "air"
          }), " セクションで、集結地点に割り当てるデバイスグループまたはデバイスを追加します。 デバイスグループまたはデバイスのチェックボックスをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-adv-rollcall-add-device-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_muster_point_user_groups_title",
            product: "air"
          }), " セクションで、集結地点に到着した際に報告すべきユーザーグループを選択します。 ユーザーグループのチェックボックスをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-adv-rollcall-add-user-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["集結地点の設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "集結地点に関するベストプラクティス"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "集結地点の名前と説明は、明確で分かりやすく指定してください。 例：'東側駐車場'または'本館ロビー'のように指定できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["集結地点に複数のデバイスを追加する場合は、個別のデバイスを選択するよりもデバイスグループを選択することを推奨します。 デバイスグループを使用すると、複数のデバイスを一度に管理できます。 デバイスグループ管理の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-group"
            }), "をご参照ください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["複数の建物がある大規模キャンパスでは、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "関連するユーザーのみ"
            }), "を特定の集結地点に割り当ててください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "有線の入退室制御デバイスはモバイルとカード認証の両方をサポートしますが、Airfob TagやAirfob Patchはモバイルクレデンシャルのみをサポートします。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "startingRollcallonMobile",
      children: "モバイルでロールコールを開始する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airモバイルアプリでロールコールを開始し、出席を確認します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-mobile-adv-rollcall.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル端末でBioStar Airアプリを起動してログインします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
            en: "All Menu",
            children: "すべてのメニュー"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "roll_call_submenu",
            product: "air"
          }), " を順にタップします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            en: "Roll Call Start",
            children: "ロールコール開始"
          }), " ボタンをタップします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "集結場所に集まるべきすべてのユーザーの一覧が表示されます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "marking-users-safe",
      children: "ユーザーを安全とマークする"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--20",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-adv-rollcall-start.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "管理者またはユーザーは、以下の方法で自身を安全とマークできます。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["管理者はモバイルアプリでユーザー名の横にある", (0,jsx_runtime.jsx)(_components.strong, {
                children: "チェックマーク"
              }), "ボタンを長押しして、ユーザーを安全にチェックできます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ユーザーは指定された集結地点でデバイスに自身のクレデンシャルをタグ付けします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ユーザーは", (0,jsx_runtime.jsx)(_components.strong, {
                children: "集結グループ"
              }), "でフィルタできます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "検索機能を使用して特定の個人を探せます。"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "completingRollCall",
      children: "ロールコールの完了"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--20",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-adv-rollcall-complete.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "以下の条件を満たしたら、ロールコールを完了します。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "すべてのユーザーが集結地点に到着し、安全とマークされたとき"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "管理者がすべてのユーザーを手動で安全とマークしたとき"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "24時間経過したとき"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewingRollCallHistory",
      children: "ロールコール履歴の表示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以前に実施したロールコールの履歴を確認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "advanced_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "roll_call_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "roll_call_history_tab",
            product: "air"
          }), " タブをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-adv-rollcall-history.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "詳細を確認するには、完了したロールコール項目をクリックします。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-adv-rollcall-history-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ロールコール中に記録されたすべての入退室イベントの一覧を確認できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーが安全とマークされているか確認されていないかの詳細を確認できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ロールコールの開始および完了時間を確認できます。"
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