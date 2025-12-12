"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["27701"], {
65905: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.smtpServer",
            product: "2"
          }), "：SMTP サーバー名を入力します。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), "：SMTP の説明を入力します。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.smtpServerAddr",
            product: "2"
          }), "：SMTP サーバーアドレスを入力します。 SMTP サーバーアドレスは ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "smtp.{email-service-provider}.com"
          }), " のような形式で、SMTP サーバーとして使用するメールの設定画面で確認できます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.portDefault25",
            product: "2"
          }), "：SMTP サーバーのポート番号を入力します。 SMTP サービスプロバイダーのメール設定画面で確認できます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.userName",
            product: "2"
          }), "：SMTP サービスのアカウントを入力します。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.password",
            product: "2"
          }), "：SMTP サービスのアカウントパスワードを入力します。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.securityType",
            product: "2"
          }), "：セキュリティタイプを選択します。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.sender",
            product: "2"
          }), "：送信元のメールアドレスを入力します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "SMTP の詳細についてはシステム管理者にお問い合わせください。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "SMTP サーバーを 2 段階認証が設定されたメールアカウントで使用する場合、そのアカウントのパスワードを変更するときは次の点に注意してください。"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "2 段階認証を設定すると、SMTP パスワードにはそのメールアカウントのパスワードではなく、2 段階認証で生成されたアプリパスワードが使用されます。"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "このとき、そのメールアカウントのパスワードが変更されるとアプリパスワードは自動的に削除され、SMTP パスワードは使用できなくなります。"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "そのメールアカウントのパスワードを変更した場合は、アプリパスワードを再生成してから SMTP パスワードを再設定します。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
67513: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_settings_mdx_a7f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-settings-mdx-a7f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_settings_mdx_a7f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-settings","title":"勤怠管理を設定する","description":"勤怠管理に使用する端末を登録したり、通知メール送信用の送信者情報を設定できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-settings.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-settings","permalink":"/docs/ja/platform/biostar_x/tna-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-settings","title":"勤怠管理を設定する","description":"勤怠管理に使用する端末を登録したり、通知メール送信用の送信者情報を設定できます。","keywords":["勤怠","設定"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"勤怠記録を修正する","permalink":"/docs/ja/platform/biostar_x/tna-report-edit"},"next":{"title":"訪問者の申請と管理","permalink":"/docs/ja/platform/biostar_x/visitor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_settings-email-settings.mdx
var _settings_email_settings = __webpack_require__(65905);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-settings.mdx


const frontMatter = {
	id: 'tna-settings',
	title: '勤怠管理を設定する',
	description: '勤怠管理に使用する端末を登録したり、通知メール送信用の送信者情報を設定できます。',
	keywords: [
		'勤怠',
		'設定'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "勤怠管理設定に移動",
  "id": "勤怠管理設定に移動",
  "level": 2
}, {
  "value": "勤怠管理設定項目",
  "id": "勤怠管理設定項目",
  "level": 2
}, ..._settings_email_settings/* .toc */.RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "勤怠管理に使用する端末を登録したり、通知メール送信用の送信者情報を設定できます。 CSV エクスポートで勤怠レポートを出力する際に、ドキュメントの区切り文字を設定することもできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "勤怠管理設定に移動",
      children: "勤怠管理設定に移動"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(IcSet, {}), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-access-btn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各項目を設定してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "勤怠管理設定項目",
      children: "勤怠管理設定項目"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.devices",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["勤怠管理に使用できる端末の一覧です。 端末を勤怠管理用に登録するには、対象端末を選択して ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.register",
        product: "2"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-unregister-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.registerDevices",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "現在使用中の勤怠管理端末の一覧です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登録を解除するには、対象端末を選択して ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.unregister",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-settings-register-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登録済み端末の勤怠設定を編集するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.setting",
            product: "2"
          }), " ボタンをクリックします。 勤怠設定の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-device-details-advanced#attendance-management",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-initial-setting-device-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.typeCode",
            product: "2"
          }), " は、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.tna.eventKey",
            product: "2"
          }), " と勤怠イベント種別をマッピングする設定です。 勤怠イベントの種類は次のとおりです。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_CHECK_IN",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_CHECK_OUT",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_BREAK_START",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_BREAK_END",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_MEAL_START",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_MEAL_END",
              product: "2"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "端末が接続されている状態でのみ、端末の勤怠設定を編集できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.device.root"
            }), " メニューで登録した端末を削除すると、登録された勤怠管理端末も自動的に削除されます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "senderInfo",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.triggerAction.senderInfor",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通知メールを送信する際に使用する送信者情報を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.edit",
        product: "2"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-sender-info.png"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_settings_email_settings/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.export",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "button.downloadToCsv",
        product: "2"
      }), " 機能で勤怠レポートを出力する際に、ドキュメントの区切り文字を選択できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-export-csv.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-3",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna.settings.punchlogs.optionTitle",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["勤怠記録を保存する期間を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna.settings.punchlogs.storeDays",
        product: "2"
      }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), " に設定し、期間を入力します。 設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna.settings.apply",
        product: "2"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-save-period.png"
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