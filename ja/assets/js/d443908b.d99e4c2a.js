"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5482"], {
45801: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_before_start_mdx_d44_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-before-start-mdx-d44.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_before_start_mdx_d44_namespaceObject = JSON.parse('{"id":"platform/biostar_x/before-start","title":"開始する前に","description":"BioStar X を開始する前に知っておくべき事項を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/before-start.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/before-start","permalink":"/docs/ja/platform/biostar_x/before-start","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/before-start.mdx","tags":[],"version":"current","frontMatter":{"id":"before-start","title":"開始する前に","description":"BioStar X を開始する前に知っておくべき事項を案内します。","keywords":["インストール案内","MariaDB","SQL Server","データベース"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"概要","permalink":"/docs/ja/platform/biostar_x/overview"},"next":{"title":"対応デバイス","permalink":"/docs/ja/platform/biostar_x/supported-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/before-start.mdx


const frontMatter = {
	id: 'before-start',
	title: '開始する前に',
	description: 'BioStar X を開始する前に知っておくべき事項を案内します。',
	keywords: [
		'インストール案内',
		'MariaDB',
		'SQL Server',
		'データベース'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "インストール前の注意事項",
  "id": "before",
  "level": 2
}, {
  "value": "データベースの確認",
  "id": "checkdb",
  "level": 2
}, {
  "value": "MariaDB",
  "id": "mariadb",
  "level": 3
}, {
  "value": "MS SQL Server",
  "id": "ms-sql-server",
  "level": 3
}, {
  "value": "ポート設定",
  "id": "port-setting",
  "level": 4
}, {
  "value": "ユーザーとデータベースの作成",
  "id": "create-a-user-and-database",
  "level": 4
}, {
  "value": "小規模組織 (10 GB 以下)",
  "id": "小規模組織-10-gb-以下",
  "level": 4
}, {
  "value": "中規模組織 (10～500 GB)",
  "id": "中規模組織-10500-gb",
  "level": 4
}, {
  "value": "大規模組織 (500 GB 以上)",
  "id": "大規模組織-500-gb-以上",
  "level": 4
}, {
  "value": "Windows 認証データベース設定",
  "id": "windows-authentication-database-settings",
  "level": 4
}, {
  "value": "事前設定",
  "id": "preliminary-setting",
  "level": 5
}, {
  "value": "Active Directory アカウントで MS SQL Windows Authentication を使用するための設定",
  "id": "settingsforusingmssql",
  "level": 5
}, {
  "value": "データベース設定",
  "id": "database-setting",
  "level": 5
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, NextItem, NextStep, Step, Steps} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " を開始する前に知っておくべき事項を案内します。 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " は 64 ビットオペレーティングシステムをサポートします。 インストールする前に、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " をインストールする PC のシステム仕様を確認してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before",
      children: "インストール前の注意事項"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " をインストールする前に、次の事項を確認してからインストールを進めてください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " は 64 ビットオペレーティングシステムにのみインストールできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL 2012 Express を使用する場合は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/download/details.aspx?id=49996",
            children: "サービス パック 3"
          }), " をインストールしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL 2014 Express を使用する場合は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=53168",
            children: "サービス パック 2"
          }), " をインストールしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL Server を使用する場合は、サーバーと各テーブルの ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collation"
          }), " オプションを CI（大文字小文字を区別しない）に設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["旧バージョンの ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " でデータベースをバックアップする際は、すべてのサービスを停止してから実行してください。 また、AC データベースと TA データベースを同時にバックアップして復元しないと、TA データベースを使用できません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " データベースをバックアップする際は、", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar X\\util"
          }), " フォルダーの ", (0,jsx_runtime.jsx)(_components.em, {
            children: "enckey"
          }), " ファイルと ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar X"
          }), " フォルダーの ", (0,jsx_runtime.jsx)(_components.em, {
            children: "system.conf"
          }), "、", (0,jsx_runtime.jsx)(_components.em, {
            children: "setting.conf"
          }), " ファイルも必ず一緒にバックアップしてください。 これを行わないと、データベースが使用できなくなります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " が使用するポートのデフォルト値は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "service-settings",
            children: "次のドキュメント"
          }), " を参照してください。 他のプログラムが同じポートを占有している場合、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " が正常に動作しない可能性があります。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checkdb",
      children: "データベースの確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " をインストールする前に、ユーザーが独自に構成したデータベースを使用する場合は、以下の事項を確認してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mariadb",
      children: "MariaDB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "my.cnf"
          }), " ファイルの ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[mysql]"
          }), " セクションの下にあるオプションを次のように変更してください。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='my.cnf'",
            children: "character-set-server=utf8\ncollation-server=utf8_unicode_ci\nmax_connections = 600\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "my.cnf"
          }), " ファイルの ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[mysql]"
          }), " セクションの下に次のオプションを追加してください。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='my.cnf'",
            children: "log_bin_trust_function_creators = 1\ngroup_concat_max_len = 102400\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "root 権限で MariaDB に接続し、次のコマンドを実行してください。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title='SQL'",
            children: "GRANT SUPER ON . TO user_id@'localhost' IDENTIFIED BY \"password\";\nGRANT SUPER ON . TO user_id@'%' IDENTIFIED BY \"password\";\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ms-sql-server",
      children: "MS SQL Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["すべてのデータベースとテーブルの ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Collation"
            }), " オプションを、大文字小文字を区別しない CI（Case-insensitive）に設定してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["データベース名には、数字、英字（大文字小文字を区別）、特殊記号 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), " と ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_"
            }), " のみを使用できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "port-setting",
      children: "ポート設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server 構成マネージャー"
          }), " を起動し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL EXPRESS に対するプロトコル"
          }), " の ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TCP/IP プロトコル"
          }), " を使用したいポート番号に設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "設定を適用するには、SQL Server サービスを再起動してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "create-a-user-and-database",
      children: "ユーザーとデータベースの作成"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Management Studio"
          }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server 認証"
          }), " を使用して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "sa"
          }), " アカウントでログインしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "セキュリティ"
          }), " を右クリックし、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "新しいログイン"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ログイン名"
          }), " フィールドに任意の名前を入力し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server 認証"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "パスワード"
          }), " と ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "パスワード確認"
          }), " フィールドに使用するパスワードを入力し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "パスワード ポリシーの適用を強制"
          }), " を無効にしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "データベース"
          }), " を右クリックし、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "新しいデータベース"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "データベース名"
          }), " フィールドに任意の名前を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "所有者"
          }), " フィールドに手順 3 で設定したログイン名を入力してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "データベース ファイル"
        }), " セクションで、以下の推奨値に設定します。 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "自動増加"
        }), " はパーセンテージではなく固定サイズ (MB/GB) で設定し、あまりにも小さい単位で頻繁に増加しないよう注意してください。"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-before-start-new-database.png",
        caption: true
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "小規模組織-10-gb-以下",
        children: "小規模組織 (10 GB 以下)"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["データ：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "初期サイズ"
            }), " 1～5 GB、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "自動増加"
            }), " 100～512 MB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ログ：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "初期サイズ"
            }), " 512 MB～2 GB、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "自動増加"
            }), " 100～512 MB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TempDB：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "初期サイズ"
            }), " 512 MB～1 GB"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["例：データ 2 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "自動増加"
          }), " 256 MB) / ログ 1 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "自動増加"
          }), " 128 MB) / TempDB 512 MB"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "中規模組織-10500-gb",
        children: "中規模組織 (10～500 GB)"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["データ：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "初期サイズ"
            }), " 10～50 GB、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "自動増加"
            }), " 512 MB～1 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ログ：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "初期サイズ"
            }), " 5～10 GB、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "自動増加"
            }), " 512 MB～1 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TempDB：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "初期サイズ"
            }), " 2～8 GB"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["例：データ 20 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "自動増加"
          }), " 1 GB) / ログ 5 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "自動増加"
          }), " 512 MB) / TempDB 4 GB"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "大規模組織-500-gb-以上",
        children: "大規模組織 (500 GB 以上)"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["データ：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "初期サイズ"
            }), " 100 GB 以上、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "自動増加"
            }), " 1～4 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ログ：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "初期サイズ"
            }), " 20～100 GB、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "自動増加"
            }), " 1～4 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TempDB：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "初期サイズ"
            }), " 8～32 GB"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["例：データ 100 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "自動増加"
          }), " 2 GB) / ログ 50 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "自動増加"
          }), " 2 GB) / TempDB 16 GB"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "自動増加"
            }), " を極端に小さい単位で設定したり、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "最大サイズ"
            }), " を ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "無制限"
            }), " に設定したりせず、予想される増加量に応じて適切に設定するか、モニタリングしてください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "トランザクションが多い環境では、ログを定期的にバックアップしてログ ファイルのサイズが増加しないよう注意してください。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "windows-authentication-database-settings",
      children: "Windows 認証データベース設定"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "preliminary-setting",
          children: "事前設定"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Microsoft Windows Active Directory"
          }), " を使用する場合は、Windows 認証データベースを設定する前に、以下の事前設定を完了してください。"]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Management Studio"
              }), " に管理者アカウントでログインしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "セキュリティ"
              }), " を右クリックし、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "新しいログイン"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Windows 認証"
              }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "検索"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ユーザーまたはグループの選択"
              }), " ウィンドウで [場所] をクリックし、Active Directory のパスを選択して ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "選択するオブジェクト名を入力してください"
              }), " フィールドにユーザー名を入力し、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "名前の確認"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "[ページの選択]"
              }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "サーバー ロール"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "[ページの選択]"
              }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ユーザー マッピング"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "master"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "既定のスキーマ"
              }), " を ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "dbo"
              }), " に設定してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " をクリックして保存してください。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "settingsforusingmssql",
          children: "Active Directory アカウントで MS SQL Windows Authentication を使用するための設定"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "services.msc"
              }), " を実行してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["SQL Server データベースの ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "プロパティ"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ログオン"
              }), " 画面で ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "アカウント指定"
              }), " を選択し、ドメイン ユーザーでログインしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Windows ファイアウォールに 1433 ポートを例外として追加してください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["SQL Server に空の ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " データベースを ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " 権限で作成してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["SQL Server でドメイン ユーザーが Windows Authentication を使用できるように設定し、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " データベースに ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " 以外のすべての権限を割り当てます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ローカル コンピューターを除くすべてのサービスを ", (0,jsx_runtime.jsx)(_components.em, {
                children: "services.msc"
              }), " で接続します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ドメイン ユーザーをローカル サービス コンピューターの管理者に設定します。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MS SQL ODBC を接続します。"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "database-setting",
          children: "データベース設定"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server 構成マネージャー"
              }), " を起動し、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Native Client"
              }), " 配下の ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "クライアント プロトコル"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP/IP"
              }), " を選択し、既定ポートを確認します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server ネットワーク構成"
              }), " 配下の ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL EXPRESS に対するプロトコル"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP/IP"
              }), " で ODBC ポートが既定ポートと同じに設定されていることを確認します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Management Studio"
              }), " に管理者アカウントで接続します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "セキュリティ"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ログイン"
              }), " をクリックし、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "NT AUTHORITY\\SYSTEM"
              }), " をダブルクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "[ページの選択]"
              }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "サーバー ロール"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "public"
              }), " と ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " を選択してチェックし、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "[ページの選択]"
              }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ユーザー マッピング"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " データベースを選択し、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " をクリックして保存します。"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "system-requirements",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " をインストールするためのシステム最小要件を確認します。"]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "express-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "初めてインストールするユーザー向けの簡易インストール手順を案内します。"
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "custom-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "既にインストール済みのデータベースと連携するためのカスタムインストール手順を案内します。"
        })
      })]
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