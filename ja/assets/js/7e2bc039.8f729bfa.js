"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5519"], {
99031: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_control_zone_mdx_7e2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-control-zone-mdx-7e2.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_control_zone_mdx_7e2_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-zone","title":"高度アクセス制御を操作する","description":"高度アクセス制御を操作して詳細情報を確認します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/control-zone.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-zone","permalink":"/docs/ja/platform/biostar_x/control-zone","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-zone.mdx","tags":[],"version":"current","frontMatter":{"id":"control-zone","title":"高度アクセス制御を操作する","description":"高度アクセス制御を操作して詳細情報を確認します。","keywords":["モニタリング","高度なアクセス制御"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"エレベーターを制御","permalink":"/docs/ja/platform/biostar_x/control-elevator"},"next":{"title":"マップをモニタリングする","permalink":"/docs/ja/platform/biostar_x/monitoring-map"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/control-zone.mdx


const frontMatter = {
	id: 'control-zone',
	title: '高度アクセス制御を操作する',
	description: '高度アクセス制御を操作して詳細情報を確認します。',
	keywords: [
		'モニタリング',
		'高度なアクセス制御'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "APB 解除",
  "id": "apb-release",
  "level": 2
}, {
  "value": "アラーム解除",
  "id": "alarm",
  "level": 2
}, {
  "value": "有効化/無効化",
  "id": "zone-revitalizationdisabled",
  "level": 2
}, {
  "value": "警備/警備解除",
  "id": "security-zone-control",
  "level": 2
}, {
  "value": "集合レポートの確認",
  "id": "confirmation-of-muster-reports",
  "level": 2
}, {
  "value": "在室人数制限のモニタリング",
  "id": "monitoring-of-restrictions-on-the-number-of-people",
  "level": 2
}, {
  "value": "詳細情報確認",
  "id": "detail-view",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcDisable, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "高度アクセス制御に設定されたドアまたはデバイスの操作方法を案内します。 提供される機能により、問題発生時に迅速に対応し、効率的に管理できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " タブを開き、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allZones"
          }), " に移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "設定された高度アクセス制御を選択し、右クリックします。 ポップアップメニューで必要な機能を選択できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-zone-popup.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "高度アクセス制御の種類によって提供される機能が異なります。 高度アクセス制御の種類は次のとおりです。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "アンチパスバック"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "火災警報"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "スケジュールロック/開放"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "警備"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "インターロック"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "集合"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "在室人数制限"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "人数点検（ロールコール）"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["各高度アクセス制御の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-release",
      children: "APB 解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "アンチパスバック"
      }), "に設定されたドアまたはデバイスの APB アラームを解除できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearApb"
      }), " をクリックしてください。 画面上部に完了メッセージが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.clearApb"
            }), " 機能は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アンチパスバック"
            }), " でのみ使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "アンチパスバック"
            }), "の設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-apb",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "アンチパスバック"
            }), "の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../reference/glossary#apb",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm",
      children: "アラーム解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアまたはデバイスで発生したアラームを解除できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " をクリックしてください。 画面上部に完了メッセージが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.clearAlarm"
        }), " は在室人数制限機能では使用できません。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zone-revitalizationdisabled",
      children: "有効化/無効化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高度アクセス制御機能を有効化するか、使用しない機能を無効化できます。 無効化された高度アクセス制御には ", (0,jsx_runtime.jsx)(IcDisable, {
        width: "20px",
        height: "20px"
      }), " アイコンが表示されます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.enable"
      }), " または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disable"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-zone-control",
      children: "警備/警備解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアまたはデバイスの警備を設定または解除できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.arm"
            }), " と ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.disarm"
            }), " は警備に設定された高度アクセス制御でのみ使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["警備設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-intrusion-alarm",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "confirmation-of-muster-reports",
      children: "集合レポートの確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["集合に関するレポートを確認するには ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.musterReport"
      }), " をクリックします。 新しいウィンドウが開くと、ユーザーリストと集合機能に設定されたデバイスを通じて、ユーザーの入室・退室時刻や滞在時間超過の有無を確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.musterReport"
            }), " 機能は集合でのみ使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["集合機能の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-muster",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-of-restrictions-on-the-number-of-people",
      children: "在室人数制限のモニタリング"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在室人数制限機能に設定されたデバイスの状態を確認できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.occupancyMonitoring"
      }), " をクリックします。 新しいウィンドウが開いたら ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.advancedAc.root"
      }), " メニューに移動します。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.occupancy.title",
        product: "2"
      }), " リストで状態を確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.occupancyMonitoring"
            }), " 機能は在室人数制限機能に設定された項目でのみ使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["在室人数制限設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-occupancy",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "詳細情報確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高度アクセス制御の詳細情報とイベント発生履歴を確認できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " をクリックしてください。 画面右側のパネルに詳細情報とイベント発生履歴が表示されます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "詳細情報"
          }), "：高度アクセス制御機能の名前と状態、デバイス情報などを確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), "：選択した高度アクセス制御で発生した最近のイベント一覧を確認できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["高度アクセス制御詳細情報セクションの各項目の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac",
          children: "次のドキュメント"
        }), "を参照してください。"]
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