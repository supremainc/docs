"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["53046"], {
26888: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_settings_alert_report_mdx_92b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-settings-alert-report-mdx-92b.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_settings_alert_report_mdx_92b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/settings-alert-report","title":"アラートとレポートの設定","description":"BioStar Airでイベントの通知と自動レポートを設定する手順を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/settings-alert-report.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/settings-alert-report","permalink":"/docs/ja/platform/biostar_air/settings-alert-report","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/settings-alert-report.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-alert-report","title":"アラートとレポートの設定","description":"BioStar Airでイベントの通知と自動レポートを設定する手順を案内します。","keywords":["BioStar Air","アラートの設定","レポートの設定","システムアラート","ユーザーレポート"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"メールテンプレートのカスタマイズ","permalink":"/docs/ja/platform/biostar_air/customizing-email-templates"},"next":{"title":"カスタムWiegandカード形式を設定する","permalink":"/docs/ja/platform/biostar_air/custom-wiegand-card-formats"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/settings-alert-report.mdx


const frontMatter = {
	id: 'settings-alert-report',
	title: 'アラートとレポートの設定',
	description: 'BioStar Airでイベントの通知と自動レポートを設定する手順を案内します。',
	keywords: [
		'BioStar Air',
		'アラートの設定',
		'レポートの設定',
		'システムアラート',
		'ユーザーレポート'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "アラートの追加",
  "id": "addAlert",
  "level": 2
}, {
  "value": "条件の設定",
  "id": "conditionSettings",
  "level": 3
}, {
  "value": "イベントログ",
  "id": "eventLog",
  "level": 4
}, {
  "value": "システム",
  "id": "system",
  "level": 4
}, {
  "value": "通知対象の設定",
  "id": "alertTargetSettings",
  "level": 3
}, {
  "value": "送信方法の設定",
  "id": "alertSendMethodSettings",
  "level": 3
}, {
  "value": "レポート作成",
  "id": "reportGeneration",
  "level": 2
}, {
  "value": "条件設定",
  "id": "reportConditionSettings",
  "level": 3
}, {
  "value": "通知対象の設定",
  "id": "reportAlertTargetSettings",
  "level": 3
}, {
  "value": "送信方法の設定",
  "id": "reportAlertSendMethodSettings",
  "level": 3
}, {
  "value": "アラートおよびレポートの編集",
  "id": "editAlertReport",
  "level": 2
}, {
  "value": "アラートおよびレポートの削除",
  "id": "deleteAlertReport",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "アラートとレポートを設定すると、システムイベントやセキュリティ状況を自動で検知して追跡できます。 この文書では、BioStar Airでアラートとレポートの設定を構成する方法を案内します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "アラートおよびレポートの設定により、次の効果が得られます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "セキュリティ脅威やシステムの問題を即座に検知し、管理者にリアルタイムで通知します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "システム状況やユーザーの活動に関するレポートを自動生成して管理効率を高めます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addAlert",
      children: "アラートの追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "サイトで発生する特定のイベントログやシステムに関する通知を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.event_log_type",
            product: "air"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.system_type",
            product: "air"
          }), " のいずれかのタブを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-alert-add-event-log.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conditionSettings",
      children: "条件の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "eventLog",
      children: "イベントログ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.event_log_type",
        product: "air"
      }), " タブで、イベント種類に応じて通知発生条件を設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-alert-event-log-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.events_block_title",
            product: "air"
          }), "：通知を設定するイベント種類を選択します。 事前定義された ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.preset_events_block_title",
            product: "air"
          }), " を選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_label",
            product: "air"
          }), "：ドアを選択します。 選択したドアでイベントが発生した場合に通知を送信します。 1つ以上のドアを選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.frequency_and_duration_label",
            product: "air"
          }), "：設定した時間内に特定の頻度でイベントが発生した場合に通知を送信します。 例えば、5分間に3回以上イベントが発生した場合に通知を送信するよう設定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "system",
      children: "システム"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-alert-system-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.system_type",
        product: "air"
      }), " タブでシステムの状態に応じて通知発生条件を設定できます。選択できるオプションは次のとおりです。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_credit_reminders",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_credit_site_suspension",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_credit_sms_less_than_10",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_apb_battery",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_fw_availabel",
          product: "air"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alertTargetSettings",
      children: "通知対象の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_target",
        product: "air"
      }), " で通知を受け取る対象を設定できます。 管理者権限別にユーザーを選択したり、個別のユーザーを選択できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alertSendMethodSettings",
      children: "送信方法の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_send_by",
        product: "air"
      }), " で通知の送信手段を選択します。 メール、SMS、アプリのプッシュ通知の方法で通知を送信できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SMS送信を利用するには、SMSクレジットをチャージする必要があります。 残りのSMSクレジットは", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "credit_center_submenu",
          product: "air"
        }), "で確認できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reportGeneration",
      children: "レポート作成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特定の時間間隔でレポートを自動生成して管理者に送信できます。 イベントログの発生状況およびユーザー状況に関するレポートを作成できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.report_type",
            product: "air"
          }), " タブを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-alert-add-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reportConditionSettings",
      children: "条件設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "レポートの種類と作成周期を設定します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "name_column",
            product: "air"
          }), "：作成するレポートの種類を選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_user_tna",
                product: "air"
              }), "：選択した期間のユーザーの勤怠状況に関するレポートを作成します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_audit_trail",
                product: "air"
              }), "：選択した期間の変更履歴に関するレポートを作成します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_event_log",
                product: "air"
              }), "：選択した期間のイベントログの発生状況に関するレポートを作成します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_user",
                product: "air"
              }), "：選択した期間のユーザー状況に関するレポートを作成します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "label_title_schedule",
            product: "air"
          }), "：レポート作成の頻度を選択してください。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "weekly_option",
            product: "air"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monthly_option",
            product: "air"
          }), " の中から選択できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reportAlertTargetSettings",
      children: "通知対象の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_target",
        product: "air"
      }), " で通知を受け取る対象を設定できます。 管理者権限別にユーザーを選択したり、個別のユーザーを選択できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reportAlertSendMethodSettings",
      children: "送信方法の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_send_by",
        product: "air"
      }), " で通知の送信手段を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["レポートは", (0,jsx_runtime.jsx)(_components.strong, {
          children: "メールのみで送信"
        }), "できます。 SMSやアプリのプッシュ通知で送信することはできません。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editAlertReport",
      children: "アラートおよびレポートの編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧から編集するアラートまたはレポートをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.edit_alert_header",
            product: "air"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.edit_report_header",
            product: "air"
          }), " パネルが表示されたら、必要な項目を編集します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteAlertReport",
      children: "アラートおよびレポートの削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で編集するアラートまたはレポートのチェックボックスをクリックします。 1つ以上の項目を選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧の左上にある", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), "ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_delete",
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