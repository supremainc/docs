"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["31758"], {
20767: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_backup_mdx_349_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-system-backup-mdx-349.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_backup_mdx_349_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-system-backup","title":"システムをバックアップする","description":"システムバックアップメニューを使用すると、BioStar X のデータベース、各種設定、キーなどの主要情報をバックアップできます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-backup.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-system-backup","permalink":"/docs/ja/platform/biostar_x/settings-system-system-backup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-system-backup.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-system-backup","title":"システムをバックアップする","description":"システムバックアップメニューを使用すると、BioStar X のデータベース、各種設定、キーなどの主要情報をバックアップできます。","keywords":["システムバックアップ","バックアップ","自動バックアップ","手動バックアップ","データ保護","復元"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"監査トレイルを管理する​","permalink":"/docs/ja/platform/biostar_x/settings-system-audit-trail"},"next":{"title":"システムを復元する","permalink":"/docs/ja/platform/biostar_x/settings-system-system-restore"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-backup.mdx


const frontMatter = {
	id: 'settings-system-system-backup',
	title: 'システムをバックアップする',
	description: 'システムバックアップメニューを使用すると、BioStar X のデータベース、各種設定、キーなどの主要情報をバックアップできます。',
	keywords: [
		'システムバックアップ',
		'バックアップ',
		'自動バックアップ',
		'手動バックアップ',
		'データ保護',
		'復元'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "手動バックアップ",
  "id": "手動バックアップ",
  "level": 2
}, {
  "value": "自動バックアップの設定",
  "id": "自動バックアップの設定",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のデータベース、各種設定、キーなどの主要情報をバックアップできます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.backup",
        product: "2"
      }), " 機能は、サーバーデータの損失を防止したり、新しい PC へ移行する際に使用します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "サポートされるバックアップ方式は次のとおりです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "手動バックアップ"
          }), "：ユーザーが手動でバックアップファイルを作成します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "自動バックアップ"
          }), "：システムが設定された周期でバックアップファイルを自動生成します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["以前の PC でバックアップした ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のバックアップファイルを使用して新しい PC で ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " を復元する場合、ライセンスの再発行が必要です。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SQL Server データベースと ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " が別々のサーバーにインストールされている場合、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のシステムバックアップと復元は使用できません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["システム復元の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-system-restore",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手動バックアップ",
      children: "手動バックアップ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーがバックアップファイルを直接作成できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "ページで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.general",
            product: "2"
          }), " セクションで、バックアップファイルの保存パスと最大バックアップ数を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-system-backup-general.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.filePath",
                product: "2"
              }), "：バックアップファイルの保存パスを入力します。 保存パスには、既に作成済みのディレクトリパスを入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.numberFileToKeep",
                product: "2"
              }), "：最大バックアップ数を設定します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "backup.backupNow",
            product: "2"
          }), " をクリックしてバックアップファイルを作成します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["バックアップファイルは ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "backup.filePath",
        product: "2"
      }), " オプションで指定したパスに ", (0,jsx_runtime.jsx)(_components.em, {
        children: "zip"
      }), " 形式で保存されます。 ファイル名は ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BioStar_X_Backup_YYYYMMDD_HHMMSS.zip"
      }), " 形式で生成されます。 ここで ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYYMMDD"
      }), " はバックアップ日、", (0,jsx_runtime.jsx)(_components.code, {
        children: "HHMMSS"
      }), " はバックアップ時刻を示します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "最大バックアップ数を超えると、最も古いバックアップファイルから自動的に削除されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "backup.numberFileToKeep",
              product: "2"
            }), " には 1 ～ 100 の数値のみ入力できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自動バックアップの設定",
      children: "自動バックアップの設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自動バックアップを設定すると、システムが設定した周期でバックアップファイルを作成します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "ページで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.autoBackup",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.frequency",
            product: "2"
          }), " オプションを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-system-backup-automatic.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.daily",
                product: "2"
              }), "：毎日自動バックアップします。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), " オプションでバックアップ時刻を設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.weekly",
                product: "2"
              }), "：毎週自動バックアップします。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.day",
                product: "2"
              }), " オプションで自動バックアップする曜日を設定し、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), " オプションでバックアップ時刻を設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.monthly",
                product: "2"
              }), "：毎月自動バックアップします。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.date",
                product: "2"
              }), " オプションで自動バックアップする日付を設定し、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), " オプションでバックアップ時刻を設定します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックして設定を保存します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["バックアップファイルは ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.backup.general",
        product: "2"
      }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "backup.filePath",
        product: "2"
      }), " オプションで指定したパスに ", (0,jsx_runtime.jsx)(_components.em, {
        children: "zip"
      }), " 形式で保存されます。 ファイル名は ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BioStar_X_Backup_YYYYMMDD_HHMMSS.zip"
      }), " 形式で生成されます。 ここで ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYYMMDD"
      }), " はバックアップ日、", (0,jsx_runtime.jsx)(_components.code, {
        children: "HHMMSS"
      }), " はバックアップ時刻を示します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["自動バックアップの頻度を ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "backup.monthly",
              product: "2"
            }), " に設定し、日付を 29、30、31 日に指定すると、その日付が存在しない月には自動バックアップを実行しません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["時刻は ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.preferences.root"
            }), " で設定した標準タイムゾーンを基準にします。 標準タイムゾーン設定の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-preferences#language-timezone",
              children: "次のドキュメント"
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