"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["51068"], {
7962: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_credential_smart_format_frontMatter),
  toc: () => (/* binding */ settings_credential_smart_format_toc),
  "default": () => (/* binding */ settings_credential_smart_format_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_smart_format_mdx_d0c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_credential_smart_format_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-smart-format-mdx-d0c.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_smart_format_mdx_d0c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-smart-format","title":"スマートカード形式を設定する","description":"MIFARE、iCLASS、DESFire、iCLASS Seos などのスマートカードのレイアウトを設定できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-smart-format.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-smart-format","permalink":"/docs/ja/platform/biostar_x/settings-credential-smart-format","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-smart-format.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-smart-format","title":"スマートカード形式を設定する","description":"MIFARE、iCLASS、DESFire、iCLASS Seos などのスマートカードのレイアウトを設定できます。","keywords":["スマートカード","カード形式","設定"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Wiegandカード形式を設定する","permalink":"/docs/ja/platform/biostar_x/settings-credential-wiegand-format"},"next":{"title":"モバイルアクセスカードを管理する","permalink":"/docs/ja/platform/biostar_x/settings-credential-mobile-access-card"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_smart-cardtype.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,custom-mifare",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.encryptionType",
            product: "2"
          }), "：暗号化タイプを", (0,jsx_runtime.jsx)(Cmd, {
            children: "SL1"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SL3"
          }), " に設定します。"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "desfire,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.format.desfireAvd",
            product: "2"
          }), "：サードパーティが発行したDESFireカードを使用します。 DESFireのみ設定します。"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,custom-mifare,iclass,desfire,custom-desfire,iclassseos",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), "：スマートカードとカードリーダー間の通信を暗号化するキーです。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), "：カードのプライマリサイトキーが一致しない場合に使用して認証を実行します。 補助サイトキーを入力するには、セクション上部の", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), "オプションを有効にします。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,iclass",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.startBlockIndex",
            product: "2"
          }), "：各テンプレートを保存する開始ブロックを選択します。 このブロックはユーザー情報を保存するブロックのインデックスです。既にスマートカードを使用している場合は、保存可能なブロックを設定します。"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "custom-mifare,custom-iclass",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.blockIndex",
            product: "2"
          }), "：各テンプレートを保存する開始ブロックを選択します。 このブロックはユーザー情報を保存するブロックのインデックスです。既にスマートカードを使用している場合は、保存可能なブロックを設定します。"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "desfire,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.appId",
              product: "2"
            }), "：アプリケーションIDを設定します。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.fileId",
              product: "2"
            }), "を含む一種のディレクトリとして機能します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.fileId",
              product: "2"
            }), "：ファイルIDを設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.encryptionType",
              product: "2"
            }), "：暗号化タイプを", (0,jsx_runtime.jsx)(Cmd, {
              children: "DES/3DES"
            }), " または ", (0,jsx_runtime.jsx)(Cmd, {
              children: "AES"
            }), " に設定します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "custom-mifare,custom-iclass,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.skipBytes",
              product: "2"
            }), "：カード番号を読み取る開始位置を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.dataSize",
              product: "2"
            }), "：（設定した", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), " と ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), " がカードの設定値と一致する場合）読み取るカードのデータサイズを設定します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "iclassseos",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.ADF",
            product: "2"
          }), "：デジタル資格情報が保存されるADFアドレスです。"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "felica",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.systemCode",
              product: "2"
            }), "：FeliCaカードを読み取るためのシステムコードを16進数で最大4桁入力します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.serviceCode",
              product: "2"
            }), "：FeliCaカードを読み取るためのサービスコードを16進数で最大4桁入力します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.idField",
              product: "2"
            }), "：カードの特定領域を読み取れるように設定します。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.addplus",
              product: "2"
            }), " ボタンをクリックして、読み取り対象の最大8ブロックを設定します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.blockNumber",
              product: "2"
            }), "：カードを読み取るブロックを設定します。 (0 ～ 150)"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-smart-format.mdx


const settings_credential_smart_format_frontMatter = {
	id: 'settings-credential-smart-format',
	title: 'スマートカード形式を設定する',
	description: 'MIFARE、iCLASS、DESFire、iCLASS Seos などのスマートカードのレイアウトを設定できます。',
	keywords: [
		'スマートカード',
		'カード形式',
		'設定'
	],
	isTranslationMissing: false
};
const settings_credential_smart_format_contentTitle = undefined;

const assets = {

};




const settings_credential_smart_format_toc = [{
  "value": "スマートカードを追加",
  "id": "addSmartformat",
  "level": 2
}, {
  "value": "スマートカードの種類",
  "id": "smartCardType",
  "level": 2
}, {
  "value": "設定オプションの案内",
  "id": "setting",
  "level": 2
}, {
  "value": "基本情報の設定",
  "id": "基本情報の設定",
  "level": 3
}, {
  "value": "スマートカード設定",
  "id": "スマートカード設定",
  "level": 3
}, {
  "value": "Suprema スマートカード",
  "id": "suprema-スマートカード",
  "level": 4
}, ...toc, ...toc, ...toc, ...toc, {
  "value": "レイアウト",
  "id": "layout",
  "level": 5
}, {
  "value": "カスタムスマートカード",
  "id": "カスタムスマートカード",
  "level": 4
}, ...toc, ...toc, ...toc];
function settings_credential_smart_format_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) settings_credential_smart_format_missingMdxReference("Cmd", true);
  if (!Details) settings_credential_smart_format_missingMdxReference("Details", true);
  if (!Image) settings_credential_smart_format_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "MIFARE、iCLASS、DESFire、iCLASS Seos などのスマートカードのレイアウトを設定できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addSmartformat",
      children: "スマートカードを追加"
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
          children: ["画面左のサイドバーで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.cardFormat"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のカード形式リストで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.smartCard",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-smart.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addSmartCard",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.addNewSmartCard",
            product: "2"
          }), " 画面が表示されたら、各項目を設定します。 詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#smartCardType",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-smart-format-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smartCardType",
      children: "スマートカードの種類"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.smartCardType",
        product: "2"
      }), " オプションで、希望するスマートカードの種類を設定できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.supremaSmartCard",
          product: "2"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-smart-format-type.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.customSmartCard",
          product: "2"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-custom-smart-format-type.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カスタムスマートカードは MIFARE、DESFire、FeliCa のみをサポートします。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FeliCa は BioStation 3 ファームウェア 1.3.0 以降でのみサポートされます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "設定オプションの案内"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.info",
        product: "2"
      }), " セクションでカードレイアウトを設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-smart-format-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), " と ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), " は 16 進数のみをサポートします。 画面右側のフィールドにキー値を入力し、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.convertToHex",
              product: "2"
            }), " をクリックします。 変換された値をサイトキーとして使用します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.convertToHex",
              product: "2"
            }), " は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.smartCardType",
              product: "2"
            }), " オプションが ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.supremaSmartCard",
              product: "2"
            }), " の場合にのみ使用できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本情報の設定",
      children: "基本情報の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), "：スマートカード名を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.secondaryKey",
            product: "2"
          }), "：補助サイトキーの使用有無を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.active",
            product: "2"
          }), " に設定すると、補助サイトキーを設定できます。 補助サイトキーを設定すると、カードの基本サイトキーが一致しない場合に補助サイトキーを使用して認証を行います。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credential-cart-secondary-key.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "スマートカード設定",
      children: "スマートカード設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "スマートカードの構造を設定できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "suprema-スマートカード",
      children: "Suprema スマートカード"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.primaryKey",
        product: "2"
      }), " と ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.secondaryKey",
        product: "2"
      }), " は 16 進数のみをサポートします。 各入力フィールドにキー値を入力した後、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.convertToHex",
        product: "2"
      }), " をクリックします。 変換された値をサイトキーとして使用します。"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "MIFARE"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-mifare.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "mifare"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "iCLASS"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-iclass.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "iclass"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DESFire"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-desfire.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "desfire"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "iClass Seos"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-iclassseos.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "iclassseos"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "layout",
      children: "レイアウト"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー情報、顔情報、指紋情報が記録されるレイアウトを編集できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.numberOfTemplate",
            product: "2"
          }), "：レイアウトに含める指紋テンプレート数を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.templateSize",
            product: "2"
          }), "：指紋テンプレートが使用するバイト数を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.useFace",
            product: "2"
          }), "：顔テンプレートの使用有無を選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.faceTemplateSize",
            product: "2"
          }), "：顔テンプレートが使用するバイト数を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.cardFormat.useFace",
          product: "2"
        }), " は FaceStation F2、BioStation 3、BioEntry W3 モデルで使用できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "カスタムスマートカード",
      children: "カスタムスマートカード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カスタムスマートカードは MIFARE、DESFire、FeliCa のみをサポートします。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "FeliCa は BioStation 3 ファームウェア 1.3.0 以降でのみサポートされます。"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "MIFARE"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-mifare.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "custom-mifare"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DesFire"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-desfire.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "custom-desfire"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "Felica"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-felica.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "felica"
      })]
    })]
  });
}
function settings_credential_smart_format_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_credential_smart_format_createMdxContent, {
      ...props
    })
  }) : settings_credential_smart_format_createMdxContent(props);
}
function settings_credential_smart_format_missingMdxReference(id, component) {
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