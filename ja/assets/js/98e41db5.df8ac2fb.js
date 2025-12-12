"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["18000"], {
53521: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_area_mdx_98e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-map-manage-area-mdx-98e.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_area_mdx_98e_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-map-manage-area","title":"エリアを構成する","description":"フロアと施設の構成を完了すると、エリアを構成できます。 管理しているセキュリティエリアをマップで管理・確認できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-area.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-map-manage-area","permalink":"/docs/ja/platform/biostar_x/settings-map-manage-area","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-map-manage-area.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-map-manage-area","title":"エリアを構成する","description":"フロアと施設の構成を完了すると、エリアを構成できます。 管理しているセキュリティエリアをマップで管理・確認できます。","keywords":["マップ","エリア","フロア","施設"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"施設を構成","permalink":"/docs/ja/platform/biostar_x/settings-map-manage-facility"},"next":{"title":"訪問者設定","permalink":"/docs/ja/platform/biostar_x/settings-visitor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-area.mdx


const frontMatter = {
	id: 'settings-map-manage-area',
	title: 'エリアを構成する',
	description: 'フロアと施設の構成を完了すると、エリアを構成できます。 管理しているセキュリティエリアをマップで管理・確認できます。',
	keywords: [
		'マップ',
		'エリア',
		'フロア',
		'施設'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "エリアを追加",
  "id": "add-area",
  "level": 2
}, {
  "value": "エリアを編集",
  "id": "edit-area",
  "level": 2
}, {
  "value": "エリアを再設定",
  "id": "エリアを再設定",
  "level": 3
}, {
  "value": "施設/ドア/カメラの削除",
  "id": "施設ドアカメラの削除",
  "level": 3
}, {
  "value": "カメラ撮影範囲の設定",
  "id": "カメラ撮影範囲の設定",
  "level": 3
}, {
  "value": "エリアを削除",
  "id": "エリアを削除",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcCurP, IcFremove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcCurP) _missingMdxReference("IcCurP", true);
  if (!IcFremove) _missingMdxReference("IcFremove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["フロアと施設の構成を完了すると、エリアを構成できます。 管理しているセキュリティエリアをマップで管理・確認できます。 エリアを構成すると、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " ページから当該エリアの施設およびフロアに入り、モニタリングできます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-open-map.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "エリアを構成する前にフロアと施設を登録してください。 フロアと施設の登録の詳細は次のドキュメントを参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-map-manage-floor"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-map-manage-facility"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["マップモニタリングの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-map",
              children: "以下"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["マップ設定およびマップモニタリング機能は、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アドバンス"
            }), "（Advanced）ライセンス以上で追加オプションとして利用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-area",
      children: "エリアを追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "現在管理しているセキュリティエリアをマップで設定および管理できます。"
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["エリア一覧画面の右上にある ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.table.action.newArea"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-area.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.page.title"
          }), " 画面の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.information.section.title"
          }), " セクションで、追加するエリアの名前と説明を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.configuration.section.title"
          }), " セクションのマップで追加するエリアの位置を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["マップ上で右クリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.setArea"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "希望する形状でエリアを設定します。 クリックで開始し、ドラッグしてエリアを設定できます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-drawing.gif",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["エリアを再設定するには、設定済みのエリアを削除する必要があります。 当該エリアを削除するには ", (0,jsx_runtime.jsx)(IcFremove, {}), " をクリックします。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定したエリアに施設を追加するには、右クリックして ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "map.menu.add.facility"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-02.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "エリアを追加する際は、少なくとも1つの施設またはドア・カメラを設定する必要があります。"
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["ドアを追加するには、右クリックして ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.area.label.addDoor"
                }), " を選択します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["カメラを追加するには、右クリックして ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.area.label.addCamera"
                }), " を選択します。"]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.addFacility"
          }), " ウィンドウが表示されたら、追加する施設を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-03.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアまたはカメラを追加する場合も同様に、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.area.label.addDoor"
            }), " または ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.area.label.addCamera"
            }), " ウィンドウが表示されます。 追加する項目を選択し、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.apply"
            }), " をクリックします。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["エリア設定が完了したら、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["マップ左上の入力フィールドで目的の位置を検索できます。 現在位置に戻るには ", (0,jsx_runtime.jsx)(IcCurP, {}), " をクリックします。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-map-area-find-point.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "エリア追加時、マップでは1つの多角形でエリアを設定できます。 エリアを設定する際は、開始点と終点を必ず同じ位置にしてください。 エリアを設定した後に形状を変更することはできません。 エリアを変更するには、エリアを削除して再度追加する必要があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "追加した施設・ドア・カメラの位置は、マップ上でドラッグ＆ドロップして変更できます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-area",
      children: "エリアを編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "既存のエリアを削除して再設定するか、施設・ドア・カメラを追加または削除できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "エリアを再設定",
      children: "エリアを再設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "マップでエリアを再設定するには、既存のエリアを削除してから再度追加する必要があります。"
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "エリア一覧で再設定するエリアを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.configuration.section.title"
          }), " セクションのマップで既存エリアの左上にある ", (0,jsx_runtime.jsx)(IcFremove, {}), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-reset.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["マップ上で右クリックし、ポップアップメニューから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.setArea"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望する形状でエリアを設定し保存するには、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "施設ドアカメラの削除",
      children: "施設/ドア/カメラの削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["マップで削除したい施設・ドア・カメラをクリックします。 ", (0,jsx_runtime.jsx)(IcFremove, {}), " アイコンが表示されます。 アイコンをクリックすると、選択した施設を削除できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-area-x-btn.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラ撮影範囲の設定",
      children: "カメラ撮影範囲の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["マップでカメラの撮影範囲を設定できます。 カメラが配置されたアイコンを右クリックし、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.area.button.addCoverage"
      }), " を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-area-camera-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "撮影範囲を変更するには、緑色領域の撮影範囲をクリックしたまま希望の方向へドラッグします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-camera-rot.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "撮影範囲を調整するには、範囲の端をクリックしたまま希望のサイズにドラッグします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-camera-adjust.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["撮影範囲を削除するには ", (0,jsx_runtime.jsx)(IcFremove, {}), " アイコンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "ユーザーが設定した内容はセキュリティ管理の利便性のための機能であり、実際のカメラ撮影範囲を反映しません。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "エリアを削除",
      children: "エリアを削除"
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "エリア一覧で削除するエリアのチェックボックスをクリックします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["確認メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.yes"
          }), " ボタンをクリックします。"]
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