"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["23104"], {
17342: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_floor_mdx_4bd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-map-manage-floor-mdx-4bd.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_floor_mdx_4bd_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-map-manage-floor","title":"フロアを構成する","description":"区域と設備を構成する前にフロアを構成してください。 フロア画像に出入口とカメラを配置して視覚的に確認できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-floor.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-map-manage-floor","permalink":"/docs/ja/platform/biostar_x/settings-map-manage-floor","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-map-manage-floor.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-map-manage-floor","title":"フロアを構成する","description":"区域と設備を構成する前にフロアを構成してください。 フロア画像に出入口とカメラを配置して視覚的に確認できます。","keywords":["マップ","フロア","施設","ドア","カメラ","配置図","画像"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"マップ管理","permalink":"/docs/ja/platform/biostar_x/settings-map-management"},"next":{"title":"施設を構成","permalink":"/docs/ja/platform/biostar_x/settings-map-manage-facility"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-floor.mdx


const frontMatter = {
	id: 'settings-map-manage-floor',
	title: 'フロアを構成する',
	description: '区域と設備を構成する前にフロアを構成してください。 フロア画像に出入口とカメラを配置して視覚的に確認できます。',
	keywords: [
		'マップ',
		'フロア',
		'施設',
		'ドア',
		'カメラ',
		'配置図',
		'画像'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "フロアを追加",
  "id": "add-floor",
  "level": 2
}, {
  "value": "フロア構成を編集",
  "id": "フロア構成を編集",
  "level": 2
}, {
  "value": "出入口／カメラを削除",
  "id": "出入口カメラを削除",
  "level": 3
}, {
  "value": "カメラ撮影範囲の設定",
  "id": "カメラ撮影範囲の設定",
  "level": 3
}, {
  "value": "フロア画像を削除",
  "id": "フロア画像を削除",
  "level": 3
}, {
  "value": "フロアを削除",
  "id": "delete-floor",
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
  }, {Cmd, IcCrop, IcFremove, IcLrot, IcRrot, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCrop) _missingMdxReference("IcCrop", true);
  if (!IcFremove) _missingMdxReference("IcFremove", true);
  if (!IcLrot) _missingMdxReference("IcLrot", true);
  if (!IcRrot) _missingMdxReference("IcRrot", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["区域と設備を構成する前にフロアを構成してください。 該当フロアの配置図を画像としてアップロードし、出入口とカメラを配置して視覚的に管理できます。 フロアを構成すると、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " ページで該当フロアの出入口とカメラを確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-settings-map-add-floor-example.png",
      alone: true,
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["フロアを構成する前に、先に出入口を登録してください。 ドア登録の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-door-add",
              children: "次のドキュメント"
            }), " を参照してください。"]
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
      id: "add-floor",
      children: "フロアを追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "フロアの配置図または3D鳥瞰図画像をアップロードしてフロアを追加し、出入口とカメラを配置できます。"
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
            sid: "setting.menu.map.floor"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["フロア一覧画面の右上で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.table.actions.newFloor"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.page.title"
          }), " 画面の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.information.section.title"
          }), " セクションで、追加するフロアの名前と説明を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.section.title"
          }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.button.floorPlan"
          }), " ボタンをクリックするか、アップロードする画像をドラッグしてアップロードします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addFloorPlan"
          }), " ウィンドウでアップロードした画像を確認し、設定を進めます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-01.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画像を回転するには、", (0,jsx_runtime.jsx)(IcLrot, {}), " または ", (0,jsx_runtime.jsx)(IcRrot, {}), " ボタンをクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画像を切り取るには、", (0,jsx_runtime.jsx)(IcCrop, {}), " ボタンをクリックします。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画像の設定を完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.section.title"
          }), " セクションにアップロードした画像に出入口を追加するには、画像の任意の位置で右クリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addDoor"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addDoor"
          }), " ウィンドウが表示されたら、登録済みの出入口のいずれかを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-03.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["出入口を画像に配置するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-04.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["アップロードした画像にカメラを追加するには、画像の任意の位置で右クリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addCamera"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addCamera"
          }), " ウィンドウが表示されたら、登録済みのカメラのいずれかを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-05.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カメラを画像に配置するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-06.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "実際のフロアに配置されている出入口とカメラを追加で配置してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定を完了し、設定したフロアを保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "フロアに配置された出入口とカメラの位置を変更するには、該当する出入口またはカメラをクリックしたまま、目的の位置へドラッグします。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["フロアに配置された出入口とカメラのアイコンおよび状態の詳細は、", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-map#component-and-options",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "フロア構成を編集",
      children: "フロア構成を編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "出入口とカメラを追加したフロアの配置図を編集できます。 フロアの配置図を編集すると、出入口とカメラの位置を変更または削除できます。"
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
            sid: "setting.menu.map.floor"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "フロア一覧で編集するフロアをクリックします。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["すべての設定を完了し、設定したフロアを保存するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.apply"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "出入口カメラを削除",
      children: "出入口／カメラを削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["フロア画像で削除したい出入口またはカメラの ", (0,jsx_runtime.jsx)(IcFremove, {}), " アイコンをクリックします。 該当する出入口またはカメラを削除できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラ撮影範囲の設定",
      children: "カメラ撮影範囲の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["フロア画像で撮影範囲を設定するカメラを右クリックします。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.area.button.addCoverage"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-floor-add-camera-coverage.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "撮影範囲を変更するには、緑色の領域へマウスポインターを移動します。 マウスポインターが十字形に変わったら、マウスを押したまま目的の位置へドラッグします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-floor-camera-rotation.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "撮影範囲を調整するには、範囲の端をクリックしたまま希望のサイズにドラッグします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-floor-camera-adjust.png",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "フロア画像を削除",
      children: "フロア画像を削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["フロア画像を削除するには、フロア画像上で右クリックし、ポップアップメニューから ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.floor.contextMenu.deleteFloor"
      }), " を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-remove-floor.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-floor",
      children: "フロアを削除"
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
            sid: "setting.menu.map.floor"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "フロア一覧で削除するフロアのチェックボックスをクリックします。 1つ以上のフロアを選択できます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-remove-floor-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "フロア一覧で選択したフロアが削除されます。 選択したフロアは復元できません。"
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