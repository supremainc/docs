"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["26286"], {
7965: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_doors_mdx_955_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-registered-doors-mdx-955.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_doors_mdx_955_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-registered-doors","title":"登録済みドアの管理","description":"登録済みのドアに入退室用デバイスを割り当て、リレーを設定して入退室スケジュールを管理します。 セキュリティ、避難、勤怠管理のために入退室を制御できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-doors.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-registered-doors","permalink":"/docs/ja/platform/biostar_air/managing-registered-doors","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-registered-doors.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-registered-doors","title":"登録済みドアの管理","description":"登録済みのドアに入退室用デバイスを割り当て、リレーを設定して入退室スケジュールを管理します。 セキュリティ、避難、勤怠管理のために入退室を制御できます。","keywords":["ドア管理","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ドア","permalink":"/docs/ja/platform/biostar_air/manage-door"},"next":{"title":"ドアグループを管理する","permalink":"/docs/ja/platform/biostar_air/managing-door-groups"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-doors.mdx


const frontMatter = {
	id: 'managing-registered-doors',
	title: '登録済みドアの管理',
	description: '登録済みのドアに入退室用デバイスを割り当て、リレーを設定して入退室スケジュールを管理します。 セキュリティ、避難、勤怠管理のために入退室を制御できます。',
	keywords: [
		'ドア管理',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ドア一覧",
  "id": "ドア一覧",
  "level": 2
}, {
  "value": "ドア情報",
  "id": "ドア情報",
  "level": 3
}, {
  "value": "追加機能",
  "id": "追加機能",
  "level": 3
}, {
  "value": "フィルタリング",
  "id": "deviceFiltering",
  "level": 3
}, {
  "value": "ドアの追加",
  "id": "addingDoor",
  "level": 2
}, {
  "value": "デバイスと一緒に追加する",
  "id": "デバイスと一緒に追加する",
  "level": 3
}, {
  "value": "Webポータルで追加",
  "id": "webポータルで追加",
  "level": 3
}, {
  "value": "ドアの編集",
  "id": "editingDoors",
  "level": 2
}, {
  "value": "ドアレポートの生成",
  "id": "generatingDoorReports",
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
  }, {Cmd, DocLink, IcAirEdit, IcAirFilter, IcAirGroup, IcAirRef, IcAirRemove, IcAirReport, IcAirSchedule, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirSchedule) _missingMdxReference("IcAirSchedule", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "登録済みのドアに入退室デバイスを割り当て、リレーを構成し、入退室スケジュールを設定します。 セキュリティ、避難、勤怠管理（T&A）のために、体系的に入退室を制御できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "ドアの登録と管理に関するビデオガイドを見るには、次のビデオを参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "g7fUC-9f0qM"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ドア一覧",
      children: "ドア一覧"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドア一覧では、BioStar Airに登録されたすべてのドアを一目で確認できます。 各ドアの名前、割り当てられたデバイス、グループなどの主要な情報を確認できます。 また、各ドアをクリックして詳細を確認し、設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-registered-door-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["登録済みドアを確認するには、画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_submenu",
        product: "air"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ドア情報",
      children: "ドア情報"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドア一覧には次の情報が表示されます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column1",
            product: "air"
          }), "：ドアの名前です。 通常はデバイス登録時に自動で割り当てられ、管理者はドア名を変更できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column2",
            product: "air"
          }), "：入室するユーザーを認証するデバイスです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column3",
            product: "air"
          }), "：退室するユーザーを認証するデバイスです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column4",
            product: "air"
          }), "：ドアに割り当てられたグループ名です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column5",
            product: "air"
          }), "：ドアに関する説明です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), "：ドアに接続されているカメラ情報が表示されます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), " 列は ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_submenu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_qr_reader_tab",
            product: "air"
          }), "で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_video_management",
            product: "air"
          }), " 機能を有効にする必要があります。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "追加機能",
      children: "追加機能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一覧で1つまたは複数のドアを選択すると、管理者は以下の追加機能を使ってドアを管理できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirEdit, {
            width: "24px",
            height: "24px",
            title: "Edit"
          }), "：ドア情報を編集したり、割り当てられたデバイスの設定を変更できます。 この機能を使用するには、1つのドアのみを選択する必要があります。 詳細については ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#editingDoors"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px",
            title: "Refresh"
          }), "：ドア一覧を更新できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRemove, {
            width: "24px",
            height: "24px",
            title: "Delete"
          }), "：一覧で選択したドアを削除します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirSchedule, {
            width: "24px",
            height: "24px",
            title: "Schedule Settings"
          }), "：ドアの開閉状態のスケジュールを設定します。 詳細については ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-door-schedules"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), "：一覧で選択したドアをグループ化できます。 グループ管理の詳細については ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-door-groups"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirReport, {
            width: "24px",
            height: "24px",
            title: "Report"
          }), "：ドアレポートを生成できます。 レポート作成の詳細については ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#generatingDoorReports"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deviceFiltering",
      children: "フィルタリング"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドア一覧では、ドアグループで絞り込んで表示できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_product_column4",
        product: "air"
      }), " 列の ", (0,jsx_runtime.jsx)(IcAirFilter, {
        title: "Filter"
      }), " ボタンをクリックして、目的のグループを選択してください。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "popup_ok_btn",
        product: "air"
      }), " をクリックすると、選択したグループに属するドアのみが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["適用したフィルター条件を初期化するには、", (0,jsx_runtime.jsx)(IcAirFilter, {
          title: "Filter"
        }), " ボタンをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "column_filter_modal_reset_btn",
          product: "air"
        }), " ボタンを選択してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingDoor",
      children: "ドアの追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "デバイスと一緒に追加する",
      children: "デバイスと一緒に追加する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["モバイルアプリでデバイスを登録する際、最終段階で ", (0,jsx_runtime.jsx)(Cmd, {
        en: "Create a door with this device",
        children: "このデバイスでドアを作成する"
      }), " オプションを選択すると、ドアが作成されます。 モバイルアプリでデバイスを登録する方法の詳細は、", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/manage-device-with-app"
      }), " を参照してください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-register-device-as-door.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "webポータルで追加",
      children: "Webポータルで追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air ポータルで新しいドアを追加するには、次の手順に従ってください。"
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.title",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.title",
            product: "air"
          }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.door_name",
            product: "air"
          }), " を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column2",
            product: "air"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column3",
            product: "air"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ドア設定を保存して追加するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ドアのデバイス割り当てルール"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["各デバイスは", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1つのドア"
            }), "のみに割り当てることができます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスが既に登録されているのに利用可能なデバイス一覧に表示されない場合は、そのデバイスが他のドアに割り当てられていないか確認してください。 他のドアに割り当てられている場合は、そのドアから削除してから再試行してください。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editingDoors",
      children: "ドアの編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアの詳細と設定を編集するには、次の手順に従います。"
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧で編集するドアをクリックします。 または、ドアの左にあるチェックボックスをクリックしてから、画面上部の左側サイドバーの ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_door.title",
            product: "air"
          }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.door_name",
            product: "air"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column5",
            product: "air"
          }), " を編集します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_entry_and_exit",
            product: "air"
          }), " セクションでドアのユーザー認証用デバイスを選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column2",
                product: "air"
              }), "：入室するユーザーを認証するデバイスを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column3",
                product: "air"
              }), "：退室するユーザーを認証するデバイスを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column6",
                product: "air"
              }), "：イベントログ用のCCTVカメラを接続できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["カメラを使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings_menu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_submenu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_reader_tab",
              product: "air"
            }), " の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_video_management",
              product: "air"
            }), " 機能を有効にする必要があります。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_auxiliary_device",
            product: "air"
          }), " セクションでリレー装置を設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.door_relay",
                product: "air"
              }), "：ドアロックを制御するリレー装置を選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.relay_ignoring_door_sensor",
                product: "air"
              }), "：ドアセンサーを無視するようにリレーを設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "追加の設定を構成します。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["設置されている場合は、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_exit_btn",
                product: "air"
              }), " に設定するポートを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_door_sensor",
                product: "air"
              }), " に設定するポートを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.open_time",
                product: "air"
              }), " でドアが開いた状態を保つ時間を設定します。 （既定値：3秒）"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を適用するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["セキュリティエリア内にあるリレーを ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column3",
              product: "air"
            }), " に割り当てることを推奨します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column2",
              product: "air"
            }), " と ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column3",
              product: "air"
            }), " は", (0,jsx_runtime.jsx)(_components.strong, {
              children: "別々のネットワークに接続"
            }), "されている必要があります。 マスター・スレーブ構成では Wiegand または RS-485 経由で接続できません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SIO2セキュリティモジュールの構成に関する詳細は、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/configuring-the-sio2-secure-module"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generatingDoorReports",
      children: "ドアレポートの生成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアレポートを生成して管理者のメールに送信できます。 ドアレポートはドアを通過したユーザーに関する情報を提供します。"
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ドア一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirReport, {
            title: "Report"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " ウィンドウが表示されたら、レポート名を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "レポートに含める項目を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["作成したレポートを保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), " が作成され、管理者のメールにダウンロードリンクが送信されます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-registered-door-report-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), " で作成されたリポートを検索、編集、ダウンロード、削除できます。"]
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