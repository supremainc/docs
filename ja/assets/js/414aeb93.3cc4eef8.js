"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24339"], {
38731: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_ta_mdx_414_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-configuring-ta-mdx-414.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_ta_mdx_414_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-ta","title":"勤怠管理（T&A）の設定","description":"BioStar Airで勤怠管理の設定を構成する方法、モバイル勤怠追跡を有効にする方法、デバイスに勤怠管理を割り当てる方法、勤怠記録をエクスポートする方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-ta.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-ta","permalink":"/docs/ja/platform/biostar_air/configuring-ta","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/configuring-ta.mdx","tags":[],"version":"current","frontMatter":{"id":"configuring-ta","title":"勤怠管理（T&A）の設定","description":"BioStar Airで勤怠管理の設定を構成する方法、モバイル勤怠追跡を有効にする方法、デバイスに勤怠管理を割り当てる方法、勤怠記録をエクスポートする方法を説明します。","keywords":["T&A","勤怠","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"カスタムWiegandカード形式を設定する","permalink":"/docs/ja/platform/biostar_air/custom-wiegand-card-formats"},"next":{"title":"勤怠レポートを構成する","permalink":"/docs/ja/platform/biostar_air/reports-time-attendance-reports"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-ta.mdx


const frontMatter = {
	id: 'configuring-ta',
	title: '勤怠管理（T&A）の設定',
	description: 'BioStar Airで勤怠管理の設定を構成する方法、モバイル勤怠追跡を有効にする方法、デバイスに勤怠管理を割り当てる方法、勤怠記録をエクスポートする方法を説明します。',
	keywords: [
		'T&A',
		'勤怠',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "勤怠イベント",
  "id": "tna_events",
  "level": 2
}, {
  "value": "勤怠管理の設定",
  "id": "settingTna",
  "level": 2
}, {
  "value": "デバイスで勤怠機能を設定する",
  "id": "configuringTnaDevices",
  "level": 2
}, {
  "value": "勤怠ログの表示およびエクスポート",
  "id": "viewing-and-exporting-t-and-a-logs",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirColumn, IcAirDown, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirColumn) _missingMdxReference("IcAirColumn", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Airは交代勤務と休憩時間を記録し、基本的な", (0,jsx_runtime.jsx)(_components.strong, {
        children: "勤怠管理"
      }), "(T&A)の追跡機能を提供します。外部勤怠管理システムと連携したりエクスポートしたりできます。 BioStar Airは完全な勤怠管理システムを提供するわけではありませんが、イベントログの記録や給与・勤怠管理システムとのAPI連携をサポートします。 また基本的な", (0,jsx_runtime.jsx)(_components.strong, {
        children: "勤務時間"
      }), "レポートを生成できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "勤怠管理の設定に関する動画ガイドを視聴するには、次のビデオを参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "Que_LV25W04"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tna_events",
      children: "勤怠イベント"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーは以下の勤怠イベントを記録できます。 勤怠イベントはイベントログに記録され、CSVファイルとしてエクスポートしたりAPIを介して取得したりできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "シフト開始"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "シフト終了"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "休憩開始"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "休憩終了"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settingTna",
      children: "勤怠管理の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "勤怠管理の設定を有効にし、詳細設定を構成するには次の手順に従ってください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面上部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_tab_setting",
            product: "air"
          }), " タブをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-tab-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), " 機能を有効にします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["確認ダイアログが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_settings_confirm_btn",
            product: "air"
          }), "をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), " 機能で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-tab-settings-enable-tna.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_table_head1",
            product: "air"
          }), " のラベルを設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "例：シフト開始、シフト終了、休憩開始、休憩終了"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-tab-settings-tna-mng.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_table_head1",
            product: "air"
          }), " に対するイベント種別が ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clock-In"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clock-Out"
          }), " かを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuringTnaDevices",
      children: "デバイスで勤怠機能を設定する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "site_profile_input8",
        product: "air"
      }), " 機能を有効にすると、これを使用するデバイスを指定できます。"]
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
          children: "デバイス一覧から勤怠管理機能を設定するデバイスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_device_edit_tna_title",
            product: "air"
          }), " セクションに移動します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-device-set-tna.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "new_device_edit_tna_toogle",
            product: "air"
          }), " オプションのトグルボタンをクリックして勤怠管理機能を有効にします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_edit_tna_mode_label",
              product: "air"
            }), "を", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_edit_tna_mode_option6",
              product: "air"
            }), "に設定すると、入退室認証時に勤怠の選択を必須にできる", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_edit_tna_mobile_required_label",
              product: "air"
            }), "オプションを利用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["勤怠イベントのラベルは", (0,jsx_runtime.jsx)(_components.strong, {
              children: "サイト"
            }), "レベルで管理され、デバイスごとに変更できません。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device_edit_tna_title",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_edit_tna_mode_label",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスはさまざまな方法で勤怠イベントを記録できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_edit_tna_mode_label",
        product: "air"
      }), "で希望する勤怠管理モードを選択してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option2",
            product: "air"
          }), "：画面に勤怠キーを表示し、認証時にユーザーが勤怠イベントを選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option3",
            product: "air"
          }), "：設定されたスケジュールに従って出勤および退勤時間を記録します。 例えば、8:00 AM ～ 12:00 PM の間に記録されたイベントは ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clock-In"
          }), " として、1:00 PM ～ 5:00 PM の間に記録されたイベントは ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clock-Out"
          }), " として記録されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option4",
            product: "air"
          }), "：ユーザーが最後に使用した勤怠イベントを継続して使用できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option5",
            product: "air"
          }), "：固定の勤怠コードをデバイスに割り当てます。 そのデバイスで認証されるたびに同じ勤怠イベントが記録されます。 このオプションにより、該当デバイスを出勤用または退勤用に使用できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_option6",
            product: "air"
          }), "：ユーザーは認証する前に勤怠コードを選択する必要があります。 選択した勤怠イベントは入退室ログとともに記録されます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["機種によって対応している勤怠管理モードが異なる場合があります。 詳細は", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/device-info-settings"
        }), "の機種別勤怠モードを参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-and-exporting-t-and-a-logs",
      children: "勤怠ログの表示およびエクスポート"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "勤怠イベントはイベントログに記録され、これを確認したりCSVファイルとしてエクスポートしたりできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ログテーブルで", (0,jsx_runtime.jsx)(_components.strong, {
            children: "T&A"
          }), "列(column)を探してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-event-log-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ログテーブル上部の", (0,jsx_runtime.jsx)(IcAirColumn, {
            title: "Customize"
          }), "ボタンをクリックし、カスタマイズして", (0,jsx_runtime.jsx)(_components.strong, {
            children: "T&A"
          }), "列が見やすい位置に移動してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-event-log-list-column-set.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["データをCSVファイルとしてダウンロードするには、", (0,jsx_runtime.jsx)(IcAirDown, {
            title: "Download"
          }), "ボタンをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_csv",
            product: "air"
          }), "を選択してください。"]
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