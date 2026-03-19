"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["75268"], {
78067: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_door_schedules_mdx_0d4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-door-schedules-mdx-0d4.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_door_schedules_mdx_0d4_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-door-schedules","title":"出入口スケジュールの管理","description":"時間帯ごとに出入口の自動施錠を設定し、解錠時刻を指定したり、認証に基づく入退室制御のオプションを管理したりできます。 スケジュールによって、入退室の安全性と管理性を確保します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-door-schedules.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-door-schedules","permalink":"/docs/ja/platform/biostar_air/managing-door-schedules","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-door-schedules.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-door-schedules","title":"出入口スケジュールの管理","description":"時間帯ごとに出入口の自動施錠を設定し、解錠時刻を指定したり、認証に基づく入退室制御のオプションを管理したりできます。 スケジュールによって、入退室の安全性と管理性を確保します。","keywords":["出入口スケジュール","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ドアグループを管理する","permalink":"/docs/ja/platform/biostar_air/managing-door-groups"},"next":{"title":"エレベーター","permalink":"/docs/ja/platform/biostar_air/manage-elevator"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-door-schedules.mdx


const frontMatter = {
	id: 'managing-door-schedules',
	title: '出入口スケジュールの管理',
	description: '時間帯ごとに出入口の自動施錠を設定し、解錠時刻を指定したり、認証に基づく入退室制御のオプションを管理したりできます。 スケジュールによって、入退室の安全性と管理性を確保します。',
	keywords: [
		'出入口スケジュール',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "スケジュールが必要な場合",
  "id": "スケジュールが必要な場合",
  "level": 2
}, {
  "value": "<Cmd class=\"bold\"></Cmd> と <Cmd class=\"bold\"></Cmd>",
  "id": "-と-",
  "level": 3
}, {
  "value": "開錠スケジュール",
  "id": "開錠スケジュール",
  "level": 2
}, {
  "value": "利用例",
  "id": "利用例",
  "level": 3
}, {
  "value": "開錠スケジュールの設定",
  "id": "configuringUnlockSchedules",
  "level": 3
}, {
  "value": "施錠スケジュール",
  "id": "施錠スケジュール",
  "level": 2
}, {
  "value": "利用例",
  "id": "利用例-1",
  "level": 3
}, {
  "value": "施錠スケジュールの構成",
  "id": "configuring-lock-schedules",
  "level": 3
}, {
  "value": "新しいスケジュールの登録",
  "id": "registeringNewSchedules",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirSchedule, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirSchedule) _missingMdxReference("IcAirSchedule", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["出入口のスケジュールを設定すると、時間帯ごとに自動で施錠・解錠できます。 施錠および解錠の時刻を設定し、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "初回認証後に解錠"
      }), "などの高度なオプションを利用して、安全で管理された入退室を実現します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "スケジュールは、インターネットに接続されている出入口および機器にのみ適用できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "休日グループは別途構成されていない限り、解錠スケジュールを無視します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "緊急時に備えて、制限のない入退室権限を持つ管理者を少なくとも1人以上配置する必要があります。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "スケジュールが必要な場合",
      children: "スケジュールが必要な場合"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ドアのスケジュールは必須ではありません"
      }), "。 ほとんどの施設では基本的なアクセス制御だけで十分です。 認証済みのユーザーが資格情報を提示すると自動的にドアが開くため、追加のスケジュール設定がなくても正常に動作します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次のような場合にスケジュールを設定してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特定の時間帯に誰でも自由に出入りできるようにしたい場合"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特定の時間にすべてのユーザーの出入りを禁止したい場合"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "時間帯ごとにアクセス方針を変えて適用したい場合"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), "と ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      }), "の混同を避けるため、それぞれの動作と使用タイミングを明確に理解してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-と-",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), " と ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      })]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "区分"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "開錠スケジュール"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "施錠スケジュール"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "スケジュール適用中の状態"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "常時開錠"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "常時施錠"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "認証の要否"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "不要、誰でも自由に出入り可能"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "資格情報認証では開錠できない"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "手動開錠"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "可能"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "サイト管理者のみ可能"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "リレー動作"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "作動し続ける"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "作動しない"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "サイト管理者は、BioStar Air 管理ポータルまたはモバイルアプリで指定された管理者を指します。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開錠スケジュール",
      children: "開錠スケジュール"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "スケジュールの時間帯中はドアが常に開いており、リレーは作動し続けます。 認証は不要なので、誰でも自由に出入りできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "利用例",
      children: "利用例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "共用スペースのメイン入口"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "住宅団地内の共用施設"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "勤務時間中のオフィスロビーの入口"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuringUnlockSchedules",
      children: "開錠スケジュールの設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次の手順に従って解錠スケジュールを構成します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "出入口一覧で、解錠スケジュールを設定するドアのチェックボックスをクリックしてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["出入口一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirSchedule, {
            title: "Schedule Settings"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "unlock",
            product: "air"
          }), " タブで事前定義されたスケジュールを選択するか、新しいスケジュールを作成します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-unlock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["解錠スケジュールを適用するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "unlock_after_first_auth",
              product: "air"
            }), " オプションを有効にすると、ユーザーが初回に認証した後、選択したスケジュールに従ってドアの解錠状態を維持できます。 このオプションは、次のようなケースで有効です。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "従業員が到着してから顧客の入店を許可する小売店"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "最初の従業員が建物を開錠すれば、その後は他の従業員が自由に出入りできるオフィス"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "担当者が開錠すれば会員が自由に利用できる会員制施設"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["スケジュール登録の詳細は ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#registeringNewSchedules"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "施錠スケジュール",
      children: "施錠スケジュール"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "スケジュール時間中はドアが常に施錠され、リレーは作動しません。 有効なクレデンシャルを提示しても認証で解錠できず、サイト管理者のみが手動で解錠できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "利用例-1",
      children: "利用例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特定の時間以降厳格に閉鎖しなければならない区域"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "プールやジム、その他出入り制限のある施設"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuring-lock-schedules",
      children: "施錠スケジュールの構成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次の手順に従って施錠スケジュールを構成します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "出入口一覧で、施錠スケジュールを設定するドアのチェックボックスをクリックしてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["出入口一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirSchedule, {
            title: "Schedule Settings"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock",
            product: "air"
          }), " タブで事前定義されたスケジュールを選択するか、新しいスケジュールを作成します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-lock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["施錠スケジュールを適用するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "施錠スケジュールは標準のアクセス権を無視するため、ユーザーは施錠時間中にドアを解錠状態に変更することはできません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["新しいスケジュールの登録に関する詳細は ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#registeringNewSchedules"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registeringNewSchedules",
      children: "新しいスケジュールの登録"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下の手順に従って新しいスケジュールを登録します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), " ウィンドウで、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_create_schedules",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-add-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["スケジュール追加画面に移動したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_name",
            product: "air"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_description",
            product: "air"
          }), "(任意)を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_section_title_time_intervals",
            product: "air"
          }), " セクションで、認証なしでドアが開いている必要がある曜日と時間を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["スケジュールを登録するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["スケジュールを新規登録した後、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_submenu",
        product: "air"
      }), " に戻って、出入口のスケジュールを設定してください。"]
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