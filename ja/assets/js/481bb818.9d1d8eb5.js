"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["92396"], {
29964: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_system_requirements_mdx_481_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-system-requirements-mdx-481.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_system_requirements_mdx_481_namespaceObject = JSON.parse('{"id":"platform/biostar_x/system-requirements","title":"システム最小要件","description":"BioStar X をインストールするためのシステム要件を確認し、組織規模に合わせて最適な環境を構築してください。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/system-requirements.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/system-requirements","permalink":"/docs/ja/platform/biostar_x/system-requirements","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/system-requirements.mdx","tags":[],"version":"current","frontMatter":{"id":"system-requirements","title":"システム最小要件","description":"BioStar X をインストールするためのシステム要件を確認し、組織規模に合わせて最適な環境を構築してください。","keywords":["システム最小要件","オペレーティング システム","データベース","CPU","RAM"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"対応デバイス","permalink":"/docs/ja/platform/biostar_x/supported-device"},"next":{"title":"はじめに","permalink":"/docs/ja/platform/biostar_x/getting-started"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/system-requirements.mdx


const frontMatter = {
	id: 'system-requirements',
	title: 'システム最小要件',
	description: 'BioStar X をインストールするためのシステム要件を確認し、組織規模に合わせて最適な環境を構築してください。',
	keywords: [
		'システム最小要件',
		'オペレーティング システム',
		'データベース',
		'CPU',
		'RAM'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "メインサーバー",
  "id": "main-server",
  "level": 2
}, {
  "value": "SQL Server ライセンス要件",
  "id": "sqlserver-requriements",
  "level": 3
}, {
  "value": "一般的な使用",
  "id": "general",
  "level": 4
}, {
  "value": "BioStar X API の使用",
  "id": "useapi",
  "level": 4
}, {
  "value": "コミュニケーションサーバー",
  "id": "communication-server",
  "level": 2
}, {
  "value": "クライアント",
  "id": "client",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
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
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " は、大規模エンタープライズ環境向けに、安定して拡張可能な統合セキュリティ管理ソリューションを提供します。 システムはメインサーバーとコミュニケーションサーバーで構成される分散アーキテクチャにより、最大 1,000 台以上のデバイスを効率的に管理できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "メインサーバーはシステムの中核管理機能を担当し、コミュニケーションサーバーはデバイス通信を専任することで負荷を分散し、パフォーマンスを最適化します。 管理者はクライアント PC のウェブブラウザーからシステムにアクセスし、すべての管理業務を実行できます。 以下のシステム要件を確認し、組織規模に合わせて最適な環境を構築してください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ライセンス構成および最適化の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://support.supremainc.com",
          children: "Suprema テクニカルサポートチーム"
        }), " までお問い合わせください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "main-server",
      children: "メインサーバー"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["メインサーバーは ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " の中央管理システムがインストールされるサーバーです。 ユーザーがウェブブラウザーで接続してシステムを管理し、ユーザー情報や入退室権限設定などのすべての業務を処理します。 さらに、システム全体の状態を監視し、イベントログやアラームの管理を担当します。"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col5--15-10-25",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "項目"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "小規模組織"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "中規模組織"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "大規模組織"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "使用環境"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイス数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1～50 台"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "51～100 台"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "101～1,000 台"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "6",
              children: "システム環境"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "オペレーティング システム"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Windows 10、Windows 11、Windows Server 2016、Windows Server 2019、Windows Server 2022、Windows Server 2025"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "データベース"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "MariaDB 11.4.4、MS SQL Server 2012 SP3、MS SQL Server 2014 SP2、MS SQL Server 2016 SP1、MS SQL Server 2017、MS SQL Server 2019、MS SQL Server 2022"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.3 GHz 6 Core"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.3 GHz 8 Core"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["最小 2.3 GHz", (0,jsx_runtime.jsx)("br", {}), "推奨 4.0 GHz 16 Core"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "16GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32GB"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["最小 64GB", (0,jsx_runtime.jsx)("br", {}), "推奨 128GB"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SSD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "512GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "512GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1TB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "HDD"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              colSpan: "3",
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.imageLog",
                product: "2"
              }), " 機能を使用する場合、1,000万件のイメージログにつき 200GB が必要です"]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " は 64 ビットのオペレーティングシステムにのみインストールできます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "MS SQL Server のセキュア通信は TLS 1.2 をサポートします。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL Server と ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " を異なる PC にインストールする場合、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " がインストールされている PC に ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://learn.microsoft.com/sql/connect/oledb/download-oledb-driver-for-sql-server",
              children: "Microsoft OLE DB Driver for SQL Server"
            }), " をインストールする必要があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "大規模組織では MS SQL Server データベースの導入を推奨します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["データベースに MS SQL Server を使用し、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X T&A"
            }), " を利用する場合は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://learn.microsoft.com/ko-kr/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16#version-17",
              children: "Microsoft ODBC Driver 17 for SQL Server"
            }), " が必要となるため、環境に適したドライバーをインストールしてください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Mac オペレーティングシステムで提供される Boot Camp の Windows 仮想環境はサポートしていません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Ethernet (TCP/IP) で接続できるデバイスの最大数は 1,000 台です。 コミュニケーションサーバーを追加して、さらにデバイスを接続します。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sqlserver-requriements",
      children: "SQL Server ライセンス要件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["データベースに SQL Server を使用する場合、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " を安定して運用するには、接続されるデバイス数に応じた適切な SQL Server ライセンスが必要です。 各環境の推奨ライセンス構成を参考に、組織の規模とニーズに合ったライセンスを選択してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SQL Server のライセンスの詳細については ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.microsoft.com/sql-server/sql-server-2022-pricing",
          children: "Microsoft SQL Server ライセンス"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "general",
      children: "一般的な使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "組織"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "デバイス数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "コア数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "小規模組織"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1～50 台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 - 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "中規模組織"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 - 300 台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 - 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "大規模組織"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 - 1,000 台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 - 24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "useapi",
      children: "BioStar X API の使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "組織"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "デバイス数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "コア数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "小規模組織"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1～50 台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 - 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "中規模組織"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 - 300 台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 - 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "大規模組織"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300 - 1,000 台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16 - 24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "communication-server",
      children: "コミュニケーションサーバー"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "コミュニケーションサーバーは、入退室管理デバイスとの通信を専任で行うサーバーです。 メインサーバーとは別に設置し、多数のデバイスを安定して管理できるよう支援します。 1 台のコミュニケーションサーバーで最大 1,000 台のデバイスを接続でき、必要に応じて複数台を追加することもできます。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "項目"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "仕様"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "システム環境"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "オペレーティング システム"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Windows 10、Windows 11、Windows Server 2016、Windows Server 2019、Windows Server 2022、Windows Server 2025"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "最小 2.3 GHz、推奨 4.0 GHz 16 Core"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "最小 64GB、推奨 128GB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SSD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1TB"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Ethernet (TCP/IP) で接続できるデバイスの最大数は 1,000 台です。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "client",
      children: "クライアント"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["クライアントは、管理者が Web ブラウザーを介して ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " にアクセスし、システムを運用する PC です。"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "項目"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "小規模組織"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "中規模組織"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "大規模組織"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "システム環境"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.5 GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.5 GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "最小 2.5 GHz"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "16GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "最小 32GB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "GPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "VMS を使用する場合、最低でも NVIDIA GeForce RTX 4060"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "ウェブブラウザー"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Google Chrome バージョン 100 以上"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " は Google Chrome に最適化されています。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のウェブインターフェースはモバイルブラウザーをサポートしていません。"]
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