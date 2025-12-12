"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35908"], {
41410: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_schedule_mdx_f30_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-schedule-mdx-f30.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_schedule_mdx_f30_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-schedule","title":"勤務スケジュールを設定する","description":"設定済みの週間勤務ルール、その他の勤務ルール、期間、休日をユーザーに割り当てて勤務スケジュールを作成する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-schedule","permalink":"/docs/ja/platform/biostar_x/tna-rule-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-schedule","title":"勤務スケジュールを設定する","description":"設定済みの週間勤務ルール、その他の勤務ルール、期間、休日をユーザーに割り当てて勤務スケジュールを作成する方法を案内します。","keywords":["勤務スケジュール","勤務規則"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"その他の勤務規則を設定する","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-overtime"},"next":{"title":"勤怠記録を確認する","permalink":"/docs/ja/platform/biostar_x/tna-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-schedule.mdx


const frontMatter = {
	id: 'tna-rule-schedule',
	title: '勤務スケジュールを設定する',
	description: '設定済みの週間勤務ルール、その他の勤務ルール、期間、休日をユーザーに割り当てて勤務スケジュールを作成する方法を案内します。',
	keywords: [
		'勤務スケジュール',
		'勤務規則'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "勤務スケジュール",
  "id": "勤務スケジュール",
  "level": 2
}, {
  "value": "勤務スケジュールを追加する",
  "id": "勤務スケジュールを追加する",
  "level": 3
}, {
  "value": "設定オプションガイド",
  "id": "設定オプションガイド",
  "level": 3
}, {
  "value": "勤務スケジュールを編集する",
  "id": "勤務スケジュールを編集する",
  "level": 3
}, {
  "value": "勤務スケジュールを削除する",
  "id": "勤務スケジュールを削除する",
  "level": 3
}, {
  "value": "臨時スケジュールを追加する",
  "id": "臨時スケジュールを追加する",
  "level": 2
}, {
  "value": "不在の追加および削除",
  "id": "不在の追加および削除",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcEdit, IcSearch, IcTnaExpand, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcTnaExpand) _missingMdxReference("IcTnaExpand", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["設定済みの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), "、期間、休日をユーザーに割り当てて勤務スケジュールを作成できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作成した勤務スケジュールには、臨時スケジュールや個人休暇も追加できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["スケジュールを作成する前に、使用する ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "tab.payCode",
          product: "2",
          className: "normal"
        }), "、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "tab.shift",
          product: "2",
          className: "normal"
        }), "、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "tab.shift",
          product: "2",
          className: "normal"
        }), "、休日が正しく作成されているか確認してください。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "勤務ルール設定の詳細については、次のドキュメントを参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-paycode"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-day"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-schedule"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-overtime"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["休日設定の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule#addHolidaySchedule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "勤務スケジュール",
      children: "勤務スケジュール"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "勤務スケジュールを追加する",
      children: "勤務スケジュールを追加する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下の手順に従って、登録したユーザーの勤務スケジュールを追加してください。"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addSchedule",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addSchedule",
            product: "2"
          }), " 画面が表示されたら、各項目を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["設定を保存するには、画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["設定を保存後、別の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.schedule",
              product: "2"
            }), " を追加するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "設定オプションガイド",
      children: "設定オプションガイド"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "勤務スケジュールの設定オプションを説明します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-schedule-template-adding.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.name",
            product: "2"
          }), "：勤務スケジュールの名前を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.description",
            product: "2"
          }), "：勤務スケジュールの説明を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), "：設定した ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), " を選択します。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), " を設定すると、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), " で設定した残業時間ルールは適用されません。 使用しない場合は ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["希望する ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "rule.rule",
              product: "2",
              className: "normal"
            }), " がない場合は、追加できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-overtime",
              children: "次のドキュメント"
            }), "を参照してください。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2"
          }), "：設定した ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " を選択します。 一度設定した ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " は編集できません。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["希望する ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "scheduleTemplate.scheduleTemplate",
              product: "2",
              className: "normal"
            }), " がない場合は、追加できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-schedule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.period",
            product: "2"
          }), "：勤怠イベントを収集する期間を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "開始日は一度設定すると後で変更できません。 終了日は後で変更できますが、設定された日付より前に変更すると、変更された期間分の不在イベントが削除されます。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.holiday",
            product: "2"
          }), "：設定した休暇スケジュールを選択します。 使用しない場合は ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["希望する休暇スケジュールがない場合は、追加できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule#addHolidaySchedule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.users",
            product: "2"
          }), "：ルールを適用するユーザーを追加します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["すべての勤務スケジュールに含まれるユーザー数は、登録済みの勤怠管理ライセンスがサポートする最大ユーザー数を超えることはできません。 ライセンスごとの最大ユーザー数については ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/licensing"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "勤務スケジュールを編集する",
      children: "勤務スケジュールを編集する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登録済みの勤務スケジュールを編集する方法を案内します。"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " リストで編集する項目をクリックします。 または画面左のサイドバーで、編集する項目の ", (0,jsx_runtime.jsx)(IcEdit, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["対象項目を編集し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "勤務スケジュールを削除する",
      children: "勤務スケジュールを削除する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登録済みの勤務スケジュールを削除する方法を案内します。"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " リストで削除する項目のチェックボックスをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.deleteSchedule",
            product: "2"
          }), " ボタンをクリックします。 または画面左のサイドバーで、削除する項目の ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["確認メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "臨時スケジュールを追加する",
      children: "臨時スケジュールを追加する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "既に登録されているスケジュールがある場合、ユーザーに一時的に別の勤務ルールを適用できます。"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のリストで目的のスケジュールの ", (0,jsx_runtime.jsx)(IcTnaExpand, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "スケジュールに割り当てられたユーザーリストが表示され、臨時スケジュールを適用するユーザーを選択するとカレンダーが表示されます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カレンダーで臨時スケジュールを追加する日付をクリックします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addTemporarySchedule",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addTemporarySchedule",
            product: "2"
          }), " 設定ウィンドウが表示されたら、各項目を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["他のユーザーにも同じ勤務スケジュールを適用する場合は、", (0,jsx_runtime.jsx)(IcSearch, {}), " ボタンをクリックしてユーザーを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定した勤務ルールを適用するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ユーザーに適用した臨時スケジュールを削除するには、カレンダーで設定された臨時スケジュールをクリックします。 確認メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.yes",
          product: "2"
        }), " ボタンをクリックします。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "不在の追加および削除",
      children: "不在の追加および削除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーの不在スケジュールを追加できます。"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のリストで目的のスケジュールの ", (0,jsx_runtime.jsx)(IcTnaExpand, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "スケジュールに割り当てられているユーザーの一覧が表示され、不在スケジュールを適用するユーザーを選択するとカレンダーが表示されます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カレンダーでユーザーの不在スケジュールを追加する日付をクリックします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addLeave",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "leave.editLeave",
            product: "2"
          }), " 設定ウィンドウが表示されたら、各項目を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-leave-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["他のユーザーにも同じ不在スケジュールを適用する場合は、", (0,jsx_runtime.jsx)(IcSearch, {}), " ボタンをクリックしてユーザーを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定した不在スケジュールを適用するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["必要な不在管理時間ルールがない場合は、追加できます。 時間ルールの追加について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-paycode",
              children: "以下のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーに適用した不在スケジュールを削除するには、カレンダーで設定済みの不在スケジュールの ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ボタンをクリックします。 確認メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.yes",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-schedule-remove-leave-item.png",
            alone: true
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