"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["13805"], {
63285: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_camera_mdx_8c6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-videos-camera-mdx-8c6.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_camera_mdx_8c6_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos-camera","title":"カメラを設定する","description":"VMS連携後にBioStar Xにカメラを追加し、グループ化して効率的に管理する方法を説明します。 リアルタイム監視と映像検索のためのカメラ設定方法を扱います。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-camera.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos-camera","permalink":"/docs/ja/platform/biostar_x/settings-videos-camera","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos-camera.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos-camera","title":"カメラを設定する","description":"VMS連携後にBioStar Xにカメラを追加し、グループ化して効率的に管理する方法を説明します。 リアルタイム監視と映像検索のためのカメラ設定方法を扱います。","keywords":["カメラ","設定","管理","グループ"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"VMS と連携する","permalink":"/docs/ja/platform/biostar_x/settings-video-integration"},"next":{"title":"ビデオルールを設定する","permalink":"/docs/ja/platform/biostar_x/settings-videos-rule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-camera.mdx


const frontMatter = {
	id: 'settings-videos-camera',
	title: 'カメラを設定する',
	description: 'VMS連携後にBioStar Xにカメラを追加し、グループ化して効率的に管理する方法を説明します。 リアルタイム監視と映像検索のためのカメラ設定方法を扱います。',
	keywords: [
		'カメラ',
		'設定',
		'管理',
		'グループ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "カメラの設定と管理",
  "id": "カメラの設定と管理",
  "level": 2
}, {
  "value": "カメラの追加",
  "id": "カメラの追加",
  "level": 3
}, {
  "value": "カメラ情報の編集",
  "id": "カメラ情報の編集",
  "level": 3
}, {
  "value": "カメラの削除",
  "id": "カメラの削除",
  "level": 3
}, {
  "value": "カメラグループの設定と管理",
  "id": "カメラグループの設定と管理",
  "level": 2
}, {
  "value": "カメラグループの追加",
  "id": "カメラグループの追加",
  "level": 3
}, {
  "value": "グループへの複数カメラの追加",
  "id": "グループへの複数カメラの追加",
  "level": 3
}, {
  "value": "カメラグループ名の編集",
  "id": "カメラグループ名の編集",
  "level": 3
}, {
  "value": "カメラグループの削除",
  "id": "カメラグループの削除",
  "level": 3
}, {
  "value": "リスト列を設定する",
  "id": "リスト列を設定する",
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
  }, {Cmd, IcEdit, IcEditUL, IcMoreW, IcTrash, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTrash) _missingMdxReference("IcTrash", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "VMS連携を完了した後、BioStar Xで使用するカメラを選択して設定します。 適切なカメラ設定により、次のセキュリティ管理機能を利用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "選択的モニタリング"
          }), "：VMSのすべてのカメラの中から必要なカメラだけを", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "に追加できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "効率的な管理"
          }), "：カメラをグループ別に構成し、場所や用途に応じて体系的に管理できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["VMSサーバーと連携する方法は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-video-integration",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カメラの設定と管理",
      children: "カメラの設定と管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VMS連携後、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.video.root"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.video.video"
      }), " メニューでカメラを設定および管理できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラの追加",
      children: "カメラの追加"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VMSと連携している場合、VMSサーバーに接続されたカメラを", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "に追加し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " ページでライブ映像と録画映像を再生できます。"]
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addCamera.button",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addCamera",
            product: "2"
          }), " ウィンドウが表示されたら、一覧から除外するカメラを選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["目的のカメラが表示されない場合は、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addCamera.refresh",
            product: "2"
          }), " ボタンをクリックしてカメラ一覧を更新します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カメラをすべて選択したら、画面右下の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カメラ一覧で追加したカメラを確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-camera.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラ情報の編集",
      children: "カメラ情報の編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "追加したカメラの情報を編集できます。 カメラ名、グループ、説明などを変更できます。"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左上の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.table.th.camera",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧から編集するカメラをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カメラ情報が表示されたら、必要な項目を編集します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-edit-camera-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["編集が完了したら、画面右下の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "カメラIDとIPアドレスは編集できません。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラの削除",
      children: "カメラの削除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "追加したカメラを削除できます。"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で削除するカメラの左端にあるチェックボックスをクリックします。 1台以上のカメラを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の", (0,jsx_runtime.jsx)(IcTrash, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.camera.delete",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージを確認し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-delete-camera.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["削除対象のカメラがいずれかのルールに含まれている場合、カメラを削除できません。 そのカメラをルールから削除してから再試行します。 ルールの作成と管理の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-videos-rule",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カメラグループの設定と管理",
      children: "カメラグループの設定と管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラグループの追加",
      children: "カメラグループの追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カメラグループを追加し、複数のカメラをグループ化して管理できます。"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左上の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.table.th.camera",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.camera.all.group",
            product: "2"
          }), " 項目を選択し、右クリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-add-camera-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.contextMenu.add.group",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望するグループ名を入力し、", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " キーを押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カメラグループは8階層までのサブグループを作成できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カメラグループ名は最大48文字まで入力できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カメラ一覧でグループを選択すると、そのグループに属するカメラだけが表示されます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "グループへの複数カメラの追加",
      children: "グループへの複数カメラの追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作成したグループに1台以上のカメラを追加できます。"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧でグループに追加するカメラの左端にあるチェックボックスをクリックします。 1台以上のカメラを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["1台以上を選択すると、画面右上の", (0,jsx_runtime.jsx)(IcEditUL, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.batchEdit",
            product: "2"
          }), " ボタンが有効になります。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.batchEdit",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-batch-edit-camera.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.batchEdit",
            product: "2"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group",
            product: "2"
          }), " 項目の", (0,jsx_runtime.jsx)(IcEdit, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "グループ一覧から目的のグループを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "video.table.th.camera",
          product: "2"
        }), " タブの一覧から項目を選択し、ドラッグ＆ドロップでもカメラをグループに追加できます。"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-video-move-camera-group.png",
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラグループ名の編集",
      children: "カメラグループ名の編集"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.table.th.camera",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "名前を変更するグループを選択し、右クリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.contextMenu.rename.group",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-rename-camera-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望するグループ名を入力し、", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " キーを押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラグループの削除",
      children: "カメラグループの削除"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.table.th.camera",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "名前を変更するグループを選択し、右クリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.contextMenu.delete.group",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["警告メッセージを確認し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "カメラグループにカメラが含まれている場合、グループを削除できません。 グループ内のカメラを別のグループへ移動するか、グループから削除してから再試行します。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "リスト列を設定する",
      children: "リスト列を設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "リストで表示する列を追加、順序を変更、または非表示に設定できます。"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.camera",
            product: "2"
          }), " リストの右上で", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "columnSetting.dialog.header",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "columnSetting.dialog.header",
            product: "2"
          }), " ウィンドウが表示されたら、表示する列のチェックボックスをクリックして追加または非表示設定ができます。 ドラッグ＆ドロップで列の順序を変更することもできます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["列設定をすべて変更したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.ok",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["列設定を初期化するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "columnSetting.button.defaultColumn",
          product: "2"
        }), " をクリックします。"]
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