"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["78097"], {
73367: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_daylight_saving_time_mdx_26f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-daylight-saving-time-mdx-26f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_daylight_saving_time_mdx_26f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/daylight-saving-time","title":"サマータイム（DST）の設定","description":"BioStar Airで自動および手動のDST設定を構成する方法、デバイスでDSTを有効にする方法、および複数のロケーションでタイムゾーン調整を管理する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/daylight-saving-time.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/daylight-saving-time","permalink":"/docs/ja/platform/biostar_air/daylight-saving-time","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/daylight-saving-time.mdx","tags":[],"version":"current","frontMatter":{"id":"daylight-saving-time","title":"サマータイム（DST）の設定","description":"BioStar Airで自動および手動のDST設定を構成する方法、デバイスでDSTを有効にする方法、および複数のロケーションでタイムゾーン調整を管理する方法を案内します。","keywords":["サマータイム","DST","タイムゾーン"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"追加サイトの設定","permalink":"/docs/ja/platform/biostar_air/service-configuration"},"next":{"title":"メールテンプレートのカスタマイズ","permalink":"/docs/ja/platform/biostar_air/customizing-email-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/daylight-saving-time.mdx


const frontMatter = {
	id: 'daylight-saving-time',
	title: 'サマータイム（DST）の設定',
	description: 'BioStar Airで自動および手動のDST設定を構成する方法、デバイスでDSTを有効にする方法、および複数のロケーションでタイムゾーン調整を管理する方法を案内します。',
	keywords: [
		'サマータイム',
		'DST',
		'タイムゾーン'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ステップ1: DSTプロファイルを作成する",
  "id": "addingNewdst",
  "level": 2
}, {
  "value": "新しいプロファイルを追加",
  "id": "新しいプロファイルを追加",
  "level": 3
}, {
  "value": "既存のDST構成を編集する",
  "id": "editingDstConfiguration",
  "level": 3
}, {
  "value": "プロファイルの削除",
  "id": "deleteDstProfile",
  "level": 3
}, {
  "value": "ステップ2: サイトの時刻を設定する",
  "id": "setSiteTime",
  "level": 2
}, {
  "value": "ステップ3: デバイスでDSTを有効にする",
  "id": "enablingDstForDevices",
  "level": 2
}, {
  "value": "チェックリスト",
  "id": "checklist",
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
  }, {Cmd, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "サマータイム（Daylight Saving Time、DST）を設定することで、サイトの時刻の調整方法を構成できます。 これは、特に複数のタイムゾーンにまたがるデバイスやログがあるサイトを管理する際に、一貫して正確な時刻の追跡を確保するために重要です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Airで正確な時刻管理を行うには、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3箇所でDSTを設定する"
      }), "必要があります："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DSTプロファイル"
          }), "：各タイムゾーンごとにDSTの開始と終了日時を定義します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "サイトの時刻"
          }), "：サイトとイベントログに適用されるタイムゾーンを設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "デバイスの時刻"
          }), "：各デバイスが正しく時刻を調整するように設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "サマータイムを採用しているタイムゾーンにある場合、これら3つの設定すべてが正しく構成されている必要があります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "日光節約時間（Daylight Saving Time、DST）の設定に関するビデオガイドを見るには、次のビデオを参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "e51UOKLECz8"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "event_logs_submenu",
          product: "air",
          className: "normal"
        }), "を確認する際は、以下の点に注意してください。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスの時刻が設定されている場合、イベントログのタイムスタンプは各デバイスのDST時間に合わせて調整されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サイトの時刻が設定されている場合、タイムスタンプはデバイスごとではなくサイトのDST構成に従って調整されます。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingNewdst",
      children: "ステップ1: DSTプロファイルを作成する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DSTプロファイルは、特定のタイムゾーンにおけるDSTの開始日時と終了日時を定義します。 サイトやデバイスがある各タイムゾーンごとにDSTプロファイルを作成する必要があります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "新しいプロファイルを追加",
      children: "新しいプロファイルを追加"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_saving_time_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_add_DST",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-dst.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dst_add_modal_title",
            product: "air"
          }), "パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_timezone",
            product: "air"
          }), "で希望する項目を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dst_add_modal_subtitle_setting_dst",
            product: "air"
          }), "で自動または手動による構成を選択してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "自動構成"
              }), ": 選択したタイムゾーンのDST構成が自動的に追加されます。 DSTの開始・終了日は、当該タイムゾーンの標準ルールに従って設定されます。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-settings-dst-add-auto.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "手動構成"
              }), ": 手動で設定するには、該当タイムゾーンの適切な開始時刻と終了時刻を設定してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-settings-dst-add-manual.png"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "date_label",
                    product: "air"
                  }), "：DSTが開始および終了する日付を選択できます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "dropdown_label_week",
                    product: "air"
                  }), "：DSTが開始および終了する週を選択できます。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DSTプロファイルを保存するには、下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editingDstConfiguration",
      children: "既存のDST構成を編集する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_saving_time_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧から編集するDSTプロファイルをクリックしてください。 またはチェックボックスをクリックし、上部の ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dst_update_modal_title",
            product: "air"
          }), "パネルが表示されたら、開始時刻と終了時刻を修正します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-dst-edit.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteDstProfile",
      children: "プロファイルの削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_saving_time_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で削除するDSTプロファイルのチェックボックスをクリックしてください。 1つ以上のプロファイルを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面上部の ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_group_yes_btn",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setSiteTime",
      children: "ステップ2: サイトの時刻を設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "サイトの時間はシステム全体で使用されるデフォルトのタイムゾーンを決定します。 この設定の影響を受ける項目は以下のとおりです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "イベントログおよび記録のタイムスタンプ"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "レポートおよび監視データ"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新しいデバイスを登録する際に適用されるデフォルトのタイムゾーン"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下の手順に従ってサイトのタイムゾーンを設定し、DSTを有効にしてください。"
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
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_tab_setting",
            product: "air"
          }), " タブをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input4",
            product: "air"
          }), " で希望するタイムゾーンを選択してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-setting-timezone.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["選択したタイムゾーンでDSTが適用される場合は、 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), " オプションを有効にしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["DSTが適用されるタイムゾーンで ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_field_dst_usage",
          product: "air"
        }), " オプションを有効にしないと、システムが自動で時刻を調整せず、イベントログに誤った時刻が表示される可能性があります。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enablingDstForDevices",
      children: "ステップ3: デバイスでDSTを有効にする"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airに接続されている各デバイスは内蔵時計を保持しており、入退室管理や勤怠記録に使用されます。 DSTが適用されるタイムゾーンにあるデバイスでは、必ずDST設定を行ってください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3のような画面付きのデバイスは、ユーザーに時刻を表示します。 XPass 2のような画面のないデバイスも内部で時刻を維持し、入退室管理や勤怠記録に使用します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面の有無にかかわらず、すべてのデバイスでDSTを設定する必要があります。そうしないと、イベントログ、入退室記録、勤怠データが正確に記録されません。"
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
          children: "一覧からDST設定を適用するデバイスをクリックしてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_timezone",
            product: "air"
          }), " セクションで希望するタイムゾーンを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), " オプションを有効にします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-edit-timezone.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "DSTを適用するタイムゾーンでは、この設定はデフォルトで有効になります。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "デバイスの時刻が正しく設定されていないと、以下のような問題が発生する可能性があります："
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "入室拒否エラー"
            }), "：入室時間が07:00からに設定されている場合、デバイスが06:00と認識するとユーザーの入室が拒否されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "スケジュールエラー"
            }), "：予約された時間の施錠/解錠が正確でない可能性があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "記録エラー"
            }), "：イベントログと勤怠記録の時刻が実際の時刻と一致しません。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checklist",
      children: "チェックリスト"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "夏時間が適用される地域で正確な時刻管理を保証するには、次の3つの手順をすべて完了したことを確認してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DSTプロファイルの作成"
          }), "：タイムゾーンごとに必要なDSTプロファイルを作成しましたか？"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "サイトの時刻設定"
          }), "：サイトのタイムゾーンを設定し、 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), " オプションを有効にしましたか？"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "デバイスのDST適用"
          }), "：各デバイスのタイムゾーンを設定し、 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), " オプションを有効にしましたか？"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "これら3つがすべて正しく設定されていれば、イベントログやアクセス時間、勤怠記録はすべて正しい時刻で表示されます。"
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