"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["899"], {
15062: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_user_management_user_list_mdx_2e5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-user-management-user-list-mdx-2e5.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_user_management_user_list_mdx_2e5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/user-management-user-list","title":"ユーザー管理","description":"BioStar Airに登録されているユーザーを効率的に管理できます。 ユーザー一覧の表示、フィルタリング、詳細情報の編集、グループおよび出入レベルの割り当て、クレデンシャルの発行、一括操作やレポート作成などの機能を通じて、組織内のすべてのユーザーを管理できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/user-management-user-list.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/user-management-user-list","permalink":"/docs/ja/platform/biostar_air/user-management-user-list","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/user-management-user-list.mdx","tags":[],"version":"current","frontMatter":{"id":"user-management-user-list","title":"ユーザー管理","description":"BioStar Airに登録されているユーザーを効率的に管理できます。 ユーザー一覧の表示、フィルタリング、詳細情報の編集、グループおよび出入レベルの割り当て、クレデンシャルの発行、一括操作やレポート作成などの機能を通じて、組織内のすべてのユーザーを管理できます。","keywords":["BioStar Air","ユーザー管理","ユーザー一覧","クレデンシャル","出入レベル","ユーザーグループ","レポート"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ユーザーの追加","permalink":"/docs/ja/platform/biostar_air/adding-individual-users"},"next":{"title":"ユーザーを一括で追加する","permalink":"/docs/ja/platform/biostar_air/adding-users-in-bulk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/user-management-user-list.mdx


const frontMatter = {
	id: 'user-management-user-list',
	title: 'ユーザー管理',
	description: 'BioStar Airに登録されているユーザーを効率的に管理できます。 ユーザー一覧の表示、フィルタリング、詳細情報の編集、グループおよび出入レベルの割り当て、クレデンシャルの発行、一括操作やレポート作成などの機能を通じて、組織内のすべてのユーザーを管理できます。',
	keywords: [
		'BioStar Air',
		'ユーザー管理',
		'ユーザー一覧',
		'クレデンシャル',
		'出入レベル',
		'ユーザーグループ',
		'レポート'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ユーザー一覧の表示",
  "id": "ユーザー一覧の表示",
  "level": 2
}, {
  "value": "ユーザー情報",
  "id": "ユーザー情報",
  "level": 3
}, {
  "value": "フィルタリング",
  "id": "userFiltering",
  "level": 3
}, {
  "value": "追加機能",
  "id": "additionalFunctions",
  "level": 3
}, {
  "value": "ユーザー情報の編集",
  "id": "editUserDetails",
  "level": 2
}, {
  "value": "ユーザーグループの管理",
  "id": "manageUserGroups",
  "level": 2
}, {
  "value": "グループへのユーザー割り当て",
  "id": "assigning-users-to-a-group",
  "level": 3
}, {
  "value": "グループの解除または移動",
  "id": "disableGroup",
  "level": 3
}, {
  "value": "ユーザー状態管理",
  "id": "manageUserStatus",
  "level": 2
}, {
  "value": "個別ユーザー",
  "id": "個別ユーザー",
  "level": 3
}, {
  "value": "一括操作",
  "id": "一括操作",
  "level": 3
}, {
  "value": "ユーザー削除",
  "id": "deleteUser",
  "level": 2
}, {
  "value": "個別ユーザー",
  "id": "deleteSingleUser",
  "level": 3
}, {
  "value": "一括削除",
  "id": "deleteMultipleUsers",
  "level": 3
}, {
  "value": "ユーザーリポートの作成",
  "id": "userReport",
  "level": 2
}, {
  "value": "ユーザー検索",
  "id": "searchUsers",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, DocLink, IcAdd, IcAirActive, IcAirDown, IcAirEdit, IcAirFaceLink, IcAirFilter, IcAirFilterReset, IcAirGroup, IcAirLock, IcAirMask, IcAirMore, IcAirMtag, IcAirReissue, IcAirRemove, IcAirReport, IcAirSuspend, IcAirUpface, IcAirUtemplate, IcBw, Image, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirActive) _missingMdxReference("IcAirActive", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirFaceLink) _missingMdxReference("IcAirFaceLink", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirFilterReset) _missingMdxReference("IcAirFilterReset", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirLock) _missingMdxReference("IcAirLock", true);
  if (!IcAirMask) _missingMdxReference("IcAirMask", true);
  if (!IcAirMore) _missingMdxReference("IcAirMore", true);
  if (!IcAirMtag) _missingMdxReference("IcAirMtag", true);
  if (!IcAirReissue) _missingMdxReference("IcAirReissue", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirSuspend) _missingMdxReference("IcAirSuspend", true);
  if (!IcAirUpface) _missingMdxReference("IcAirUpface", true);
  if (!IcAirUtemplate) _missingMdxReference("IcAirUtemplate", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧は、組織の出入管理を担当する管理者にとって必須のツールです。 ユーザーのグループ化による組織管理、リアルタイムの有効化／一時停止による入社や退職の社員への即時対応、さまざまなクレデンシャルの統合管理、有効期限の監視によるセキュリティ強化、フィルタリングやレポート作成による報告・監査対応まで、あらゆるユーザー管理業務を行えます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ユーザー一覧の表示",
      children: "ユーザー一覧の表示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧では、BioStar Air に登録されたすべてのユーザーを一目で確認できます。 各ユーザーの詳細を確認し、フィルターや並べ替え機能を活用して特定のユーザーを簡単に見つけることができます。 また、ユーザー一覧から直接ユーザーの編集、削除、グループ割り当てなどの操作を行うことができます。"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " をクリックします。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-overview.png"
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user.png",
              className: "none"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Airアプリでユーザー管理機能を利用できます。"
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["モバイル機器で ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar Air"
                  }), " アプリを起動してください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["画面下部のナビゲーションバーで ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "site_setting_tab_management",
                    product: "air"
                  }), " をタップします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_submenu",
                    product: "air"
                  }), " をタップします。"]
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.p, {
              children: "ユーザーリストが表示されます。 新しいユーザーを追加したり、既存ユーザーの詳細情報を編集できます。"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ユーザー情報",
      children: "ユーザー情報"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧のテーブルで提供される情報は以下のとおりです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column8",
            product: "air"
          }), "：ユーザーが一般ユーザーか一時ユーザーかを示します。 一般および一時ユーザーの詳細は ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/user-card-types"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column1",
            product: "air"
          }), "：ユーザーの名前です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_info_id",
            product: "air"
          }), "：ユーザーの固有 ID です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column2",
            product: "air"
          }), "：ユーザーに付与されたクレデンシャルを示します。 クレデンシャルの種類の詳細は ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/user-card-types"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column3",
            product: "air"
          }), "：ユーザーに付与されたクレデンシャルの有効期限です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column4",
            product: "air"
          }), "：該当ユーザーの有効化または無効化の状態を示します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), "：ユーザーが所属するグループです。 ユーザーグループの詳細は ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-user-groups"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column6",
            product: "air"
          }), "：ユーザーに割り当てた出入レベルです。 出入レベルの詳細は ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-access-level"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column7",
            product: "air"
          }), "：ユーザーが出入できるフロアに関する権限です。 フロアレベルの詳細は ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-floor-level"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userFiltering",
      children: "フィルタリング"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー一覧の上部ヘッダー領域でフィルター機能を利用できます。 ヘッダー領域の ", (0,jsx_runtime.jsx)(IcAirFilter, {
            title: "Filter"
          }), " ボタンをクリックすると、条件を設定できます。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-filtering.png"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["適用したフィルター条件を初期化するには、ユーザー一覧上部の ", (0,jsx_runtime.jsx)(IcAirFilterReset, {
              title: "Clear Filters"
            }), " ボタンをクリックしてください。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["モバイルアプリでは、ユーザー一覧を任意の基準でフィルタリングして表示できます。 ユーザー一覧の右上にある ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "logs_filters_action_btn",
            product: "air"
          }), " をタップします。 ユーザーは以下の基準でフィルタリングできます。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-filter.png",
          className: "none",
          width: "60%"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column8",
                product: "air"
              }), "：通常または一時ユーザーでフィルタリングします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column2",
                product: "air"
              }), "：クレデンシャルの種類でフィルタリングします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column4",
                product: "air"
              }), "：有効状態でフィルタリングします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column5",
                product: "air"
              }), "：ユーザーグループでフィルタリングします。"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additionalFunctions",
      children: "追加機能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧上部で提供される機能は以下のとおりです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), "：選択したユーザーにグループを割り当てたり、除外・移動したりできます。 詳細は ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#manageUserGroups"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirLock, {
            width: "24px",
            height: "24px",
            title: "Set Access"
          }), "：選択したユーザーの出入レベルを変更できます。 アクセスレベル管理の詳細は ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-access-level"
          }), " を参照してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-tool-aclevel.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirMtag, {
            width: "24px",
            height: "24px",
            title: "Mobile Consecutive Tag"
          }), "：選択したユーザーが待ち時間なしで連続してモバイルカードをタップできるように設定できます。 Suprema Pass アプリは 2.9.0 以上でサポートされています。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-tool-mobile-tag.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUtemplate, {
            width: "24px",
            height: "24px",
            title: "User Template"
          }), "：選択したユーザーにユーザーテンプレートを適用できます。 既定のユーザー情報に加えて必要な情報を追加できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-template.png",
          width: "43%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirDown, {
            width: "24px",
            height: "24px",
            title: "Download"
          }), "：選択したユーザー情報を PDF または CSV ファイルにエクスポートできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUpface, {
            width: "24px",
            height: "24px",
            title: "Image Upload"
          }), "：ユーザー画像を一括アップロードできます。 アップロードする画像ファイルの名前はユーザーIDと一致している必要があります。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例：601.jpg ファイルはユーザーID 601 に対応します。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ファイル形式の要件"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["対応形式: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".jpg"
                }), ", ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".jpeg"
                }), ", ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".png"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["ファイルサイズ制限: 画像ごとに ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "1MB"
                })]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFaceLink, {
            width: "26px",
            height: "26px",
            title: "Send Face Registration Link"
          }), "：選択したユーザーに顔登録リンクをメールまたはSMSで送信できます。 ユーザーがリンクをクリックしてウェブページで顔を登録すると、顔認証で出入できる権限が付与されます。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "メールまたは携帯電話番号が登録されていないユーザーにはリンクを送信できません。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFilterReset, {
            width: "26px",
            height: "26px",
            title: "Clear Filters"
          }), "：ユーザー一覧に適用されているフィルターをリセットします。 この機能はフィルターが適用されている状態で利用できます。 フィルタリングの適用方法の詳細は、", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#userFiltering"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirReport, {
            width: "26px",
            height: "26px",
            title: "Report"
          }), "：ユーザーのレポートを設定できます。 リポートの作成が完了すると、管理者のメールに送信されます。 レポート設定の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#userReport"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirMask, {
            width: "24px",
            height: "24px",
            title: "Apply Masking"
          }), "：ユーザー一覧で個人情報保護のために氏名やIDなどをマスク（", (0,jsx_runtime.jsx)(_components.code, {
            children: "***"
          }), "）できます。 この機能は、個人情報保護が必要な環境で役立ちます。 トグルボタンで機能を有効にし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), "をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-masking.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editUserDetails",
      children: "ユーザー情報の編集"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーの詳細を編集するか、クレデンシャルを変更するには、次の手順に従ってください。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "一覧で編集するユーザーをクリックします。"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-list.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ユーザー詳細の右上にある ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " ボタンをクリックします。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_edit_header",
                product: "air"
              }), " ウィンドウが表示されたら、必要な詳細を編集します。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-details-edit-info.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["編集が完了したら、右下の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " ボタンをクリックします。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-edit.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "モバイルアプリでユーザーの詳細情報を編集するには、次の手順に従ってください。"
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "ユーザー一覧で編集するユーザーをタップします。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["右上の ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " をタップします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_edit_header",
                    product: "air"
                  }), " 画面で必要な情報を編集します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["変更を保存するには ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "save_btn",
                    product: "air"
                  }), " をタップします。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["クレデンシャルを発行するには ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "add_user_card_activate_btn",
                    product: "air"
                  }), " を使用します。"]
                }), "\n"]
              }), "\n"]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ユーザー情報の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/adding-individual-users"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageUserGroups",
      children: "ユーザーグループの管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーをユーザーグループに割り当てる、移動する、またはグループから除外する方法をご案内します。 ユーザーグループの作成と管理の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/managing-user-groups"
      }), "を参照してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "assigning-users-to-a-group",
          children: "グループへのユーザー割り当て"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーグループを作成した後、ユーザー一覧からユーザーを追加できます。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ユーザー一覧で、先に作成したグループに割り当てるユーザーのチェックボックスをクリックします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ユーザー一覧の左上にある ", (0,jsx_runtime.jsx)(IcAirGroup, {
                title: "Manage Groups"
              }), " をクリックしてください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-group-assign.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_user_groups_header",
                product: "air"
              }), " ウィンドウが表示されたら、ユーザーを割り当てる親グループまたはサブグループを選択します。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-group-assign-popup.png",
              width: "50%"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["選択を完了してグループ設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_grops_ok_btn",
                product: "air"
              }), "をクリックしてください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー一覧の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), " 列で、ユーザーが新しいグループに割り当てられていることを確認できます。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-assign-result.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " に戻ると、該当グループの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_table_col2",
            product: "air"
          }), " が更新されていることを確認できます。"]
        }), (0,jsx_runtime.jsx)(_components.h3, {
          id: "disableGroup",
          children: "グループの解除または移動"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーをグループから除外するか、別のグループに移動できます。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ユーザー一覧で、グループから解除または移動するユーザーのチェックボックスをクリックします。"
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "グループを移動する場合は、同じグループのユーザーを選択してから操作を進めます。"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ユーザー一覧の左上にある ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_user_groups_header",
                product: "air"
              }), " ウィンドウが表示されたら、次のいずれかを行います。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "グループを解除する場合は、選択したグループのチェックボックスをオフにします。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "グループを移動する場合は、選択したグループのチェックボックスをオンにし、移動先のグループを選択します。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["グループ設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_grops_ok_btn",
                product: "air"
              }), "をクリックしてください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー一覧の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), " 列でユーザーのグループ変更を確認できます。"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["モバイルアプリでユーザーグループを管理できます。 ユーザー一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " をタップします。 ユーザーグループの一覧を確認できます。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-group.png",
          className: "none",
          width: "60%"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["グループに所属するユーザーを表示するには、対象グループの右側にある ", (0,jsx_runtime.jsx)(IcBw, {}), " をタップします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["新しいグループを追加するには、右上の ", (0,jsx_runtime.jsx)(IcAdd, {
                title: "Add"
              }), " をタップしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["グループ名を編集するには、対象のグループを長押しし、下部の ", (0,jsx_runtime.jsx)(IcAirEdit, {
                title: "Edit"
              }), " をタップしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["グループを削除するには、対象のグループを長押ししてから下部の ", (0,jsx_runtime.jsx)(IcAirRemove, {
                title: "Remove"
              }), " をタップしてください。 1つ以上のグループを選択して削除できます。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーグループ管理の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/managing-user-groups"
            }), "を参照してください。"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageUserStatus",
      children: "ユーザー状態管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーの出入権限を有効化または一時停止できます。 また、クレデンシャルを再発行することもできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "個別ユーザー",
      children: "個別ユーザー"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ユーザー一覧で状態を変更するユーザーをクリックします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ユーザー詳細の上部で希望する機能を選択します。"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-details-manage-status.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirActive, {
                width: "24px",
                height: "24px",
                title: "Activate"
              }), "：ユーザーの出入権限を有効にします。 新規ユーザーの初期有効化または一時停止されたユーザーの再有効化時に使用します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirReissue, {
                width: "24px",
                height: "24px",
                title: "Reissue"
              }), "：クレデンシャルを再発行します。 この機能は、ユーザーのクレデンシャルが期限切れになった場合やクレデンシャルが使用できず新しく発行する場合に使用できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirSuspend, {
                width: "24px",
                height: "24px",
                title: "Suspend"
              }), "：ユーザーの出入をブロックします。 この機能はユーザーが有効化されている状態で使用できます。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-action.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["モバイルアプリのユーザー一覧で、ユーザーをタップします。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_detail",
                product: "air"
              }), " 画面で ", (0,jsx_runtime.jsx)("span", {
                className: "rect green",
                children: (0,jsx_runtime.jsx)(IcAirMore, {})
              }), " をタップします。 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ユーザーアクション"
              }), " メニューが表示されます。"]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_activate_action",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "after_suspend_user_reactivate_action",
                    product: "air"
                  }), ": ユーザーのアクセス権を有効にします。 新規ユーザーの初期有効化または一時停止されたユーザーの再有効化時に使用します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_reactivate_action",
                    product: "air"
                  }), "：ユーザーのクレデンシャルを再発行します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "suspend_action",
                    product: "air"
                  }), "：ユーザーを一時的に無効にします。 一時停止されたユーザーは入退室できません。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "delete_action",
                    product: "air"
                  }), "：ユーザーをシステムから削除します。"]
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "after_suspend_user_reactivate_action",
                  product: "air"
                }), " オプションは一時停止されたユーザーにのみ表示されます。"]
              })
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一括操作",
      children: "一括操作"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ユーザー一覧で状態を変更するユーザーのチェックボックスをクリックします。 1 人以上のユーザーを選択できます。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左上の ", (0,jsx_runtime.jsx)(IcAirMore, {}), " ボタンをクリックし、ポップアップメニューで希望する操作を選択します。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-user-batch-action.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_activate_action",
                product: "air"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "after_suspend_user_reactivate_action",
                product: "air"
              }), ": ユーザーのアクセス権を有効にします。 新規ユーザーの初期有効化または一時停止されたユーザーの再有効化時に使用します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_reactivate_action",
                product: "air"
              }), "：クレデンシャルを再発行します。 この機能は、ユーザーのクレデンシャルが期限切れになった場合やクレデンシャルが使用できず新しく発行する場合に使用できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "suspend_action",
                product: "air"
              }), "：ユーザーの出入をブロックします。 この機能はユーザーが有効化されている状態で使用できます。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-bulk-action.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["モバイルアプリのユーザー一覧で、状態を変更するユーザーを長押しします。 追加で状態を変更するユーザーを選択します。 画面下部の", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ユーザーアクション"
              }), "メニューで、希望する機能をタップします。"]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_activate_action",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "after_suspend_user_reactivate_action",
                    product: "air"
                  }), ": ユーザーのアクセス権を有効にします。 新規ユーザーの初期有効化または一時停止されたユーザーの再有効化時に使用します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_reactivate_action",
                    product: "air"
                  }), "：ユーザーのクレデンシャルを再発行します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "suspend_action",
                    product: "air"
                  }), "：ユーザーを一時的に無効にします。 一時停止されたユーザーは入退室できません。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "delete_action",
                    product: "air"
                  }), "：ユーザーをシステムから削除します。"]
                }), "\n"]
              }), "\n"]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "after_suspend_user_reactivate_action",
          product: "air"
        }), " オプションは一時停止されたユーザーにのみ表示されます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteUser",
      children: "ユーザー削除"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "削除されたユーザーは復元できません。 削除する前に必ず確認してください。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteSingleUser",
      children: "個別ユーザー"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で削除するユーザーをクリックします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー詳細で ", (0,jsx_runtime.jsx)("span", {
            className: "air-remove",
            children: (0,jsx_runtime.jsx)(IcAirRemove, {})
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-details-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["警告メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_user_yes_btn",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteMultipleUsers",
      children: "一括削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で削除するユーザーのチェックボックスをクリックします。 1 人以上のユーザーを選択できます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-select.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左上の ", (0,jsx_runtime.jsx)(IcAirMore, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_action",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-select-remove-opt.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["警告メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_user_yes_btn",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userReport",
      children: "ユーザーリポートの作成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーリポートを生成して管理者のメールに送信できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー一覧上部の ", (0,jsx_runtime.jsx)(IcAirReport, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " ウィンドウが表示されたら、レポート名を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-report-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各フィルターオプションでレポートに含める項目を選択します。"
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
      src: "/img/air/bsair-user-report-setting-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), " で作成されたリポートを検索、編集、ダウンロード、削除できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchUsers",
      children: "ユーザー検索"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧右上の検索入力フィールドで特定のユーザーを素早く見つけることができます。 ユーザー名、ID、電話番号で検索できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-list-search.png"
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