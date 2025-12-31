"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["31307"], {
67179: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_how_to_master_admin_mdx_9fc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-how-to-master-admin-mdx-9fc.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_how_to_master_admin_mdx_9fc_namespaceObject = JSON.parse('{"id":"how-to/master-admin","title":"マスター管理者機能の概要と設定方法","description":"管理者権限を強化してデバイスのセキュリティを向上させるマスター管理者設定ガイドを提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/how-to/master-admin.mdx","sourceDirName":"how-to","slug":"/how-to/master-admin","permalink":"/docs/ja/how-to/master-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/how-to/master-admin.mdx","tags":[],"version":"current","frontMatter":{"id":"master-admin","title":"マスター管理者機能の概要と設定方法","description":"管理者権限を強化してデバイスのセキュリティを向上させるマスター管理者設定ガイドを提供します。","keywords":["マスター管理者","マスター","マスター管理者"],"isTranslationMissing":false},"sidebar":"howto","previous":{"title":"ハウツー記事","permalink":"/docs/ja/how-to/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/how-to/faqs.json
var faqs_namespaceObject = JSON.parse('[{"question":"マスター管理者を登録しないとどうなりますか？","answer":"マスター管理者が登録されていない新しいデバイスでは、認証や設定変更はできません。ただし、デバイスをBioStarに接続してマスター管理者を登録することは可能です。"},{"question":"既存デバイスをファームウェアアップグレードした場合、そのデバイスでマスター管理者設定はサポートされますか？","answer":"いいえ。既存デバイスをファームウェアアップグレードしたデバイスでは、マスター管理者設定は提供されません。ただし、管理者二段階認証オプションを使用して全管理者の権限を強化し、デバイスのセキュリティを向上させることができます。詳細は <a href=\'#admin-two-step-authentication\'>管理者二段階認証オプション</a> を参照してください。"},{"question":"スレーブデバイスでもマスター管理者を登録できますか？","answer":"はい。スレーブデバイスでもマスター管理者を登録できます。"}]')
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/how-to/master-admin.mdx


const frontMatter = {
	id: 'master-admin',
	title: 'マスター管理者機能の概要と設定方法',
	description: '管理者権限を強化してデバイスのセキュリティを向上させるマスター管理者設定ガイドを提供します。',
	keywords: [
		'マスター管理者',
		'マスター',
		'マスター管理者'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*:::warning

**マスター管理者未登録時の警告メッセージ**

マスター管理者またはそれに準じた設定が行われていない場合、設定を保存する際に警告ポップアップメッセージで通知します。

<Image src='/img/how-to/no-register-master-admin.png' alone caption />

:::*/



const toc = [{
  "value": "マスター管理者を設定する",
  "id": "マスター管理者を設定する",
  "level": 2
}, {
  "value": "マスター管理者とは？",
  "id": "マスター管理者とは",
  "level": 3
}, {
  "value": "マスター管理者対応製品案内",
  "id": "マスター管理者対応製品案内",
  "level": 3
}, {
  "value": "新しいデバイスまたはファームウェアをアップグレードした既存デバイスで管理者セキュリティを強化する",
  "id": "新しいデバイスまたはファームウェアをアップグレードした既存デバイスで管理者セキュリティを強化する",
  "level": 2
}, {
  "value": "新しいデバイス",
  "id": "新しいデバイス",
  "level": 3
}, {
  "value": "新しいデバイスでマスター管理者を登録する",
  "id": "新しいデバイスでマスター管理者を登録する",
  "level": 4
}, {
  "value": "新しいデバイスでマスター管理者を管理する",
  "id": "新しいデバイスでマスター管理者を管理する",
  "level": 4
}, {
  "value": "デバイスをアップグレードする",
  "id": "admin-two-step-authentication",
  "level": 3
}, {
  "value": "アップグレードデバイスで管理者の二段階認証を設定する",
  "id": "アップグレードデバイスで管理者の二段階認証を設定する",
  "level": 4
}, {
  "value": "ご案内事項",
  "id": "ご案内事項",
  "level": 2
}, {
  "value": "よくある質問",
  "id": "よくある質問",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Details, FaqsItems, Image, Row, Table, Tbody, Td, Th} = _components;
  if (!Details) _missingMdxReference("Details", true);
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "マスター管理者"
      }), "機能は、デバイスの", (0,jsx_runtime.jsx)(_components.strong, {
        children: "完全な管理者権限を強化"
      }), "し、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "デバイスのセキュリティを向上"
      }), "させ、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "不正アクセスおよび設定変更を防止"
      }), "するための機能です。", (0,jsx_runtime.jsx)("br", {}), "新しいデバイスでは、この機能を使用して", (0,jsx_runtime.jsx)(_components.strong, {
        children: "必ずマスター管理者を登録"
      }), "する必要があり、登録されたマスター管理者のみが管理者メニューにアクセスしてデバイス設定を変更できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "マスター管理者"
      }), " 機能は ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LCD画面を介したユーザーインターフェースに対応するSuprema製品"
      }), " でのみ使用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "この機能はデバイスのセキュリティを強化するための必須ポリシーです。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["マスター管理者は直接削除できず、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "工場出荷時リセット時のみ削除されます"
            }), "。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "マスター管理者を設定する",
      children: "マスター管理者を設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "マスター管理者とは",
      children: "マスター管理者とは？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスに管理者を設定せずに使用すると、誰でも管理メニューに入りデバイス設定を変更できます。 マスター管理者機能は、このようなセキュリティ脆弱性を解決するために、全体管理者の設定を強制する機能です。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "マスター管理者対応製品案内",
      children: "マスター管理者対応製品案内"
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/BioStation 3-Front.png",
              className: "none",
              alone: true,
              width: "130px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/BioStation 2a-front.png",
              className: "none",
              alone: true,
              width: "200px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/BioLite N2-Front.png",
              className: "none",
              alone: true,
              width: "110px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/X-Station 2-Front.png",
              className: "none",
              alone: true,
              width: "300px"
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 3"
            }), (0,jsx_runtime.jsx)("br", {}), "ファームウェア バージョン 1.4.0 以上"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 2a"
            }), (0,jsx_runtime.jsx)("br", {}), "ファームウェア バージョン 1.2.0 以上"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioLite N2"
            }), (0,jsx_runtime.jsx)("br", {}), "ファームウェア バージョン 1.7.0 以上"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Station 2"
            }), (0,jsx_runtime.jsx)("br", {}), "ファームウェア バージョン 1.4.0 以上"]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "新しいデバイスまたはファームウェアをアップグレードした既存デバイスで管理者セキュリティを強化する",
      children: "新しいデバイスまたはファームウェアをアップグレードした既存デバイスで管理者セキュリティを強化する"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "新しいデバイス",
      children: "新しいデバイス"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["新しいデバイスでは、最初に", (0,jsx_runtime.jsx)(_components.strong, {
        children: "マスター管理者"
      }), "を必ず登録する必要があり、登録しない場合はデバイスの使用が制限されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["新しいデバイスでは、初回起動時に", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), "登録画面が表示されます。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "マスター管理者"
            }), "を登録しないと、次の画面に進むことはできません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2に接続してデバイス全体の管理者を割り当てても、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "マスター管理者"
            }), "を登録しなければ、すべての機能を使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "新しいデバイスはファームウェアをダウングレードできません。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "新しいデバイスでマスター管理者を登録する"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "新しいデバイスでマスター管理者を登録する",
        children: "新しいデバイスでマスター管理者を登録する"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["新しいデバイスでは、初回起動時に", (0,jsx_runtime.jsx)(_components.strong, {
              children: "マスター管理者"
            }), "登録画面が表示されます。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-1.png",
            caption: true,
            width: "300px"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "マスター管理者"
            }), "を登録するには、少なくとも 2 種類以上のクレデンシャルを登録する必要があります。 必要な2種類のクレデンシャルを選択して登録してください。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-2.png",
            caption: true,
            width: "300px"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "マスター管理者"
            }), "に登録できるクレデンシャルは次のとおりです。"]
          }), "\n", (0,jsx_runtime.jsx)(Table, {
            children: (0,jsx_runtime.jsxs)(Tbody, {
              children: [(0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Th, {
                  children: "クレデンシャルの種類"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "登録可能数"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "詳細条件"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "カード"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "最大4個"
                }), (0,jsx_runtime.jsxs)(Td, {
                  children: ["CSN、Wiegandタイプのみ対応", (0,jsx_runtime.jsx)("br", {}), "同一タイプ内での重複登録は不可"]
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "顔"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "最大2個"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "同じアルゴリズムを搭載したデバイスでのみ登録可能"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "指紋"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "最大2個"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "-"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "PIN"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "1個"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "8桁以上"
                })]
              })]
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "登録条件"
              })
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "少なくとも 2 種類以上のクレデンシャルを登録する必要があります。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "新規デバイスとファームウェアをアップグレードしたデバイスの両方に同じ条件が適用されます。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "デバイスがサポートするすべてのクレデンシャルを認証手段として使用できます。"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["2種類以上のクレデンシャルを登録した後、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            }), "ボタンを押すと", (0,jsx_runtime.jsx)(_components.strong, {
              children: "マスター管理者"
            }), "の登録が完了します。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-3.png",
            caption: true,
            width: "300px"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "新しいデバイスでマスター管理者を管理する"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "新しいデバイスでマスター管理者を管理する",
        children: "新しいデバイスでマスター管理者を管理する"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["新しいデバイスでは、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Master Admin"
        }), "設定を", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings → Device → Master Admin"
        }), "メニューで変更します。"]
      }), (0,jsx_runtime.jsxs)("div", {
        className: "grid-container",
        children: [(0,jsx_runtime.jsx)(Image, {
          src: "/img/how-to/edit-master-admin-1.png",
          caption: true,
          width: "300px"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/how-to/setting-master-admin-4.png",
          caption: true,
          width: "300px"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "admin-two-step-authentication",
      children: "デバイスをアップグレードする"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ファームウェアをアップグレードしたデバイスには ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Admin"
      }), " 設定がありませんが、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin 2-step Authentication"
      }), " オプションを使用してすべての管理者の権限を強化し、デバイスのセキュリティを向上させることができます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Admin 2-step Authentication"
            }), " オプションを有効にしていない場合、1段階認証がデフォルトになります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスに登録されている管理者のクレデンシャルが2種類以上の場合のみ、2段階認証を有効にします。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "アップグレードされたデバイスではファームウェアをダウングレードできません。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "アップグレードしたデバイスで管理者の2段階認証を設定する"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "アップグレードデバイスで管理者の二段階認証を設定する",
        children: "アップグレードデバイスで管理者の二段階認証を設定する"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings → Device → Admin 2-step Authentication"
        }), " メニューで管理者 2段階認証を有効にします。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Admin 2-step Authentication"
          }), " オプションは、既に使用しているデバイスのファームウェアを最新バージョンにアップグレードした場合にのみ表示されます。"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/how-to/setting-two-step-authentication.png",
        caption: true,
        width: "300px"
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "info",
        children: [(0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["すべての管理者に2種類以上のクレデンシャルが登録されていない場合、有効化に失敗し、エラーメッセージが表示されます。", (0,jsx_runtime.jsx)("br", {}), "すべての管理者に2種類以上のクレデンシャルを登録してから、再試行してください。"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/how-to/error-two-step-authentication.png",
          caption: true,
          width: "300px"
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "warning",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Admin 2-step Authentication"
            }), "を有効化した後、すべての管理者のクレデンシャルを2種類未満に削除すると、BioStar 2 に接続できない状況では管理者メニューにアクセスできなくなります。 そのため、管理者クレデンシャルを削除する際は十分に注意してください。"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ご案内事項",
      children: "ご案内事項"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "デバイスハッシュキーを手動で変更する場合"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "デバイスハッシュキーを手動で変更する場合、マスター管理者のPINが削除されるという警告メッセージが表示されます。メッセージを確認してから変更してください。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RS-485通信区間での顔画像送信制限"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RS-485通信区間ではバイオメトリッククレデンシャルの画像が送信されないため、スレーブデバイスで登録済みマスター管理者の顔を参照するときは代替画像が表示されます。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "よくある質問",
      children: "よくある質問"
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: faqs_namespaceObject
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