"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["26353"], {
77239: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_batch_import_face_mdx_482_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-batch-import-face-mdx-482.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_batch_import_face_mdx_482_namespaceObject = JSON.parse('{"id":"platform/biostar_x/batch-import-face","title":"顔を一括登録する ","description":"ユーザーの顔を一括登録する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/batch-import-face.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/batch-import-face","permalink":"/docs/ja/platform/biostar_x/batch-import-face","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/batch-import-face.mdx","tags":[],"version":"current","frontMatter":{"id":"batch-import-face","title":"顔を一括登録する ","description":"ユーザーの顔を一括登録する方法を説明します。","keywords":["顔","登録","一括","クレデンシャル","認証"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"多要素認証でログインする","permalink":"/docs/ja/platform/biostar_x/login-with-mfa"},"next":{"title":"顔マイグレーション","permalink":"/docs/ja/platform/biostar_x/migration-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/batch-import-face.mdx


const frontMatter = {
	id: 'batch-import-face',
	title: '顔を一括登録する ',
	description: 'ユーザーの顔を一括登録する方法を説明します。',
	keywords: [
		'顔',
		'登録',
		'一括',
		'クレデンシャル',
		'認証'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "CSVファイルのインポートで登録",
  "id": "import-csv",
  "level": 2
}, {
  "value": "顔をインポート",
  "id": "import-face",
  "level": 2
}, {
  "value": "モバイルデバイスで顔を登録",
  "id": "mobile-device",
  "level": 2
}, {
  "value": "開始する前に",
  "id": "開始する前に-1",
  "level": 3
}, {
  "value": "顔登録リンクを送信",
  "id": "顔登録リンクを送信",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーの顔を一括登録する方法を説明します。 CSVファイルのインポート機能を使用するか、ユーザーIDと同じファイル名の顔写真を読み込み登録することで、複数のユーザーの顔を一度に登録できます。 また、複数のユーザーにメールで顔登録リンクを送信し、モバイルデバイスで直接顔を登録させることもできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顔の一括登録を開始する前に、ユーザーの顔画像を準備してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "顔画像ファイルはすべて同じフォルダーに保存しておく必要があります。 顔画像ファイル名はユーザーIDと同じである必要があります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "対応する画像ファイルのサイズは最大10MBです。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "対応する画像ファイル形式はJPG、JPEG、PNGです。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "import-csv",
      children: "CSVファイルのインポートで登録"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSVインポート機能でユーザーの顔を一括登録できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー一覧で顔を登録するユーザーのチェックボックスをクリックしてください。 1 人以上のユーザーを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " をクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSVエクスポートウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.download"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ローカルの任意のパスにCSVファイルを保存します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSVファイルを開き、", (0,jsx_runtime.jsx)(_components.code, {
            children: "face_image_file1"
          }), "、", (0,jsx_runtime.jsx)(_components.code, {
            children: "face_image_file2"
          }), " 列を追加してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "追加した列に顔画像ファイル名（拡張子を含む）を入力して保存してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の", (0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.csv"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "編集したCSVファイルを選択してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSVインポートウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.importStartRow"
          }), " を設定し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すでに ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に登録されているユーザーデータを保持するか、CSVファイルの情報で上書きするかを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-03.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.visualFaceImageFolder",
            product: "2"
          }), " 項目で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.browse",
            product: "2"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-face-import-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["顔画像が保存されているパスを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.upload",
            product: "2"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSVインポートを完了するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSVファイルの情報をインポート中にエラーが発生した場合、エラーが発生したCSVデータのみを再確認してアップロードできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "インポートするCSVファイルと顔画像ファイルは同じパスに置くことを推奨します。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "import-face",
      children: "顔をインポート"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーIDと一致するファイル名の顔写真を読み込み、顔認証用として登録できます。 開始する前にユーザーの顔画像ファイルを準備してください。 顔画像ファイル名はユーザーIDと同じである必要があります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " をクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.face"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceImport.title"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.browse"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-face-import.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "顔画像が保存されているパスを選択してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceImport.newImport"
          }), " オプションで、顔画像をインポートする方法を選択してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.visualFaceImport.default"
              }), "：顔画像ファイル名とユーザーIDが一致する画像をインポートします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.visualFaceImport.createUser"
              }), "：登録済みのユーザーIDと顔画像ファイル名が一致する場合はその画像をインポートし、一致しない場合はファイル名をユーザーIDとして新規ユーザーを作成し、顔認証手段として登録します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFileImport.duplicateUser"
          }), " オプションで、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.duplicateUser.preserve",
            product: "2"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.duplicateUser.overwrite",
            product: "2"
          }), " を選択してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.csvImport.duplicateUser.preserve"
              }), "：登録済みユーザーの顔画像を保持します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.csvImport.duplicateUser.overwrite"
              }), "：登録済みユーザーの顔画像を新しい顔画像で上書きします。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["インポートした顔画像をプロフィール画像として使用する場合は、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.visualFace.useAsProfileImage"
          }), " オプションをクリックして有効にしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.start"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顔写真ファイルのインポート中にエラーが発生すると、エラーが発生した写真の一覧が表示されます。 一覧を確認して再試行してください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "顔画像はユーザーIDごとに1枚のみインポートできます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobile-device",
      children: "モバイルデバイスで顔を登録"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーにメールで顔登録リンクを送信できます。 ユーザーはモバイルデバイスでそのリンクにアクセスし、顔を直接登録できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "開始する前に-1",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["モバイル顔登録機能を使用する前に、SMTP設定を含むメール情報設定を完了してください。 詳細については ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-email-setting",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["モバイル顔登録機能は ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.remoteAccess.root"
          }), " 機能を有効にすると使用できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.remoteAccess.root"
          }), " の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-remote-access",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "顔登録リンクを送信",
      children: "顔登録リンクを送信"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー一覧で顔を登録するユーザーのチェックボックスをクリックしてください。 1 人以上のユーザーを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " をクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.sendFaceMobileEnrollLink"
          }), " を選択してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-mobile-link.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.ok"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-mobile-link-warning.png",
          width: "60%"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択したユーザーのメールアドレスに顔登録リンクを送信します。 ユーザーがアップロードを完了すると、ユーザー情報に顔情報が追加されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "monitoring.auditTrail",
              product: "2"
            }), " でメール送信の成否を確認できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-audit-trail",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "顔登録モバイルリンクからアクセスするページに表示される言語は、モバイル端末で使用しているブラウザーの言語設定に従います。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーが受信した顔登録モバイルリンクにアクセスすると、以下のように顔登録サービスが起動します。 画面の指示に従って進めてください。"
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-new-user-credential-face-mobile-app.png",
            className: "none"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "対応する画像ファイルのサイズは最大10MBです。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "対応する画像ファイル形式はJPG、JPEG、PNGです。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "送信された顔登録モバイルリンクは24時間後に失効します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "顔写真のアップロードが完了し、モバイル顔登録に成功すると、登録成功のメッセージが表示されます。 登録に失敗した場合は、登録失敗メッセージと失敗理由が表示され、ユーザーは別の写真を使用して顔登録を再試行できます。"
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