"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["56071"], {
12519: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_diretory_integration_frontMatter),
  toc: () => (/* binding */ settings_diretory_integration_toc),
  "default": () => (/* binding */ settings_diretory_integration_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_diretory_integration_mdx_f30_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_diretory_integration_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-diretory-integration-mdx-f30.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_diretory_integration_mdx_f30_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-diretory-integration","title":"ディレクトリ連携を設定する","description":"Microsoft Entra ID と BioStar X を連携し、ユーザーを同期・管理する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-diretory-integration.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-diretory-integration","permalink":"/docs/ja/platform/biostar_x/settings-diretory-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-diretory-integration.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-diretory-integration","title":"ディレクトリ連携を設定する","description":"Microsoft Entra ID と BioStar X を連携し、ユーザーを同期・管理する方法を案内します。","isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"訪問者設定","permalink":"/docs/ja/platform/biostar_x/settings-visitor"},"next":{"title":"リモートアクセスを設定する","permalink":"/docs/ja/platform/biostar_x/settings-remote-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_usergroupfilter.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Head, IcSearch, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Head) _missingMdxReference("Head", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      level: 3,
      hashid: props.hashid,
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.userGroup",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.ADServerConfiguration",
        product: "2"
      }), " セクションで設定を完了し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.Connect",
        product: "2"
      }), " ボタンをクリックすると、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.userGroup",
        product: "2"
      }), " セクションで", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), "からユーザー グループ情報を取得します。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " に同期しないユーザー グループを選択解除します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-directory-usergroup-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Refresh",
            product: "2"
          }), "：ユーザー グループ情報を再読み込みするにはクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcSearch, {}), " ボタンをクリックして目的のユーザー グループを検索できます。"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_usercustomfield.mdx


const _usercustomfield_frontMatter = (/* unused pure expression or super */ null && ({}));
const _usercustomfield_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _usercustomfield_toc = [];
function _usercustomfield_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Head, Image} = _components;
  if (!Cmd) _usercustomfield_missingMdxReference("Cmd", true);
  if (!Head) _usercustomfield_missingMdxReference("Head", true);
  if (!Image) _usercustomfield_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      level: 3,
      hashid: props.hashid,
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.FieldConfiguration",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar X のユーザーフィールドにマッピングする ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " フィールドを設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.FieldConfiguration",
        product: "2"
      }), " セクションで、BioStar X のユーザーフィールドとして使用する ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " のフィールドを選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: `/img/${props.img01}`
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["BioStar X の各ユーザーフィールドは、", (0,jsx_runtime.jsx)("strong", {
          children: props.name
        }), " のユーザー情報と一致する項目にマッピングできるようデフォルト設定されています。 デフォルト設定されたフィールド値ではなく別のフィールド値を選択するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: props.sid,
          product: "2"
        }), " 列の項目をクリックして、目的のフィールド値を選択します。"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: `/img/${props.img02}`
      })]
    })]
  });
}
function _usercustomfield_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_usercustomfield_createMdxContent, {
      ...props
    })
  }) : _usercustomfield_createMdxContent(props);
}
function _usercustomfield_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_sync-with-integ.mdx


const _sync_with_integ_frontMatter = (/* unused pure expression or super */ null && ({}));
const _sync_with_integ_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _sync_with_integ_toc = [];
function _sync_with_integ_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Head, Image} = _components;
  if (!Cmd) _sync_with_integ_missingMdxReference("Cmd", true);
  if (!Head) _sync_with_integ_missingMdxReference("Head", true);
  if (!Image) _sync_with_integ_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      level: 3,
      hashid: props.hashid,
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.SyncDataFromADServer",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " で変更されたユーザー情報を同期する機能です。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.SyncDataFromADServer",
            product: "2"
          }), "：希望する同期方式を選択し、同期間隔を設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.manual",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.SyncNow",
                product: "2"
              }), " ボタンをクリックするたびに ", (0,jsx_runtime.jsx)("strong", {
                children: props.name
              }), " からユーザー情報を取得して同期します。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-setting-directory-sync-manual.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.auto",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.autosyncInterval",
                product: "2"
              }), " 項目で設定した間隔で ", (0,jsx_runtime.jsx)("strong", {
                children: props.name
              }), " からユーザー情報を取得して同期します。 同期間隔は分単位で設定できます。 最小設定値は ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "30"
              }), " 分、最大設定値は ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "10,080"
              }), " 分（7 日）です。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-setting-directory-sync-auto.png"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.lastSynchronized",
            product: "2"
          }), "：直近の同期日時を確認できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.SyncNow",
              product: "2"
            }), " ボタンをクリックすると警告メッセージが表示されます。 メッセージを確認して続行する場合は ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.continue",
              product: "2"
            }), " ボタンを、キャンセルする場合は ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.cancel",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-setting-directory-sync-warn-message.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["同期機能で連携する際に特定のユーザーを同期対象から除外するには ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#exclude-integration",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["同期方式が ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.auto",
              product: "2"
            }), " の状態でも、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.SyncNow",
              product: "2"
            }), " ボタンをクリックすると即時同期できます。"]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function _sync_with_integ_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_sync_with_integ_createMdxContent, {
      ...props
    })
  }) : _sync_with_integ_createMdxContent(props);
}
function _sync_with_integ_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-diretory-integration.mdx


const settings_diretory_integration_frontMatter = {
	id: 'settings-diretory-integration',
	title: 'ディレクトリ連携を設定する',
	description: 'Microsoft Entra ID と BioStar X を連携し、ユーザーを同期・管理する方法を案内します。',
	isTranslationMissing: false
};
const settings_diretory_integration_contentTitle = undefined;

const assets = {

};






const settings_diretory_integration_toc = [{
  "value": "Entra ID と連携する",
  "id": "intergratewithentraid",
  "level": 2
}, ...toc, ..._usercustomfield_toc, ..._sync_with_integ_toc, {
  "value": "Active Directory と連携する",
  "id": "integratewithactivedirectory",
  "level": 2
}, ...toc, ..._usercustomfield_toc, ..._sync_with_integ_toc, {
  "value": "設定結果を確認する",
  "id": "checksettings",
  "level": 2
}, {
  "value": "ディレクトリ連携を除外する",
  "id": "excludeintegration",
  "level": 2
}, {
  "value": "ディレクトリ連携を解除する",
  "id": "disableIntegration",
  "level": 2
}];
function settings_diretory_integration_createMdxContent(props) {
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
  }, {Cmd, IcCopy2, Image, Step, Steps} = _components;
  if (!Cmd) settings_diretory_integration_missingMdxReference("Cmd", true);
  if (!IcCopy2) settings_diretory_integration_missingMdxReference("IcCopy2", true);
  if (!Image) settings_diretory_integration_missingMdxReference("Image", true);
  if (!Step) settings_diretory_integration_missingMdxReference("Step", true);
  if (!Steps) settings_diretory_integration_missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Microsoft Entra ID"
      }), "（以下 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), "）または ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "アクティブ ディレクトリ"
      }), "（Active Directory）と ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " を連携し、ユーザーを同期・管理する方法を案内します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), " と連携すると、以下の便利な機能を利用できます。 これにより、セキュリティと利便性を向上できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " が提供するシングル サインオン（SSO）機能を使用して、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " アカウントで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " にログインできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " が提供する Lightweight Directory Access Protocol（LDAP）認証を使用して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " にログインできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " で構成したユーザーおよびグループを ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " と同期できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " で使用される役職・部署・グループなどのユーザー情報を ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のカスタムフィールドにマッピングできます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entra ID"
        }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Directory"
        }), " 設定機能は、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "アドバンス"
        }), " ライセンス以上で追加オプションとして利用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intergratewithentraid",
      children: "Entra ID と連携する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に管理者 ID でログインします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
            sid: "setting.menu.directoryIntegration.root"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), " 項目で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.AdServerNew",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-integ-entraid.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下の案内に従って各項目を設定します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "EntraidServer",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " のサーバー情報を入力し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Connect",
            product: "2"
          }), " ボタンをクリックします。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-server.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ClientID",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), " で登録したアプリケーションの ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "クライアント ID"
              }), "（", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client ID"
              }), "）を入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ClientSecret",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), " で登録したアプリケーションの ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "証明書とシークレット"
              }), "（", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Certificates & secrets"
              }), "）に追加した ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "クライアント シークレット"
              }), "（", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client secrets"
              }), "）を入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.PrimaryDomain",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), " で組織を作成するときに入力した既定のドメイン名を入力します。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), " でアプリケーションを登録する方法は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app",
                  children: "以下のリンク"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "証明書とシークレット"
                }), " を設定する方法は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://learn.microsoft.com/entra/identity-platform/how-to-add-credentials?tabs=client-secret",
                  children: "以下のリンク"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "テナント ID"
                }), " は ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), " で登録したアプリケーションの ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "概要"
                }), "（", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), "）で確認できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.PrimaryDomain",
                  product: "2"
                }), " の情報は ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), " の ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "概要"
                }), " (Overview) で確認できます。"]
              }), "\n", (0,jsx_runtime.jsx)(Image, {
                src: "/img/biostarx-setting-directory-primary-domain.png"
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(MDXContent, {
          hashid: "usergroupfilterEntraid",
          name: "Entra ID"
        })
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_usercustomfield_MDXContent, {
          hashid: "userfieldEntraid",
          name: "Entra ID",
          img01: "biostarx-setting-directory-userfield.png",
          img02: "biostarx-setting-directory-userfield-select-other.png",
          sid: "settings.activeDirectory.FieldNameEI"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Entra ID"
            }), " と連携する場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.userId",
              product: "2"
            }), " フィールドはマッピングできません。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.userId",
              product: "2"
            }), " は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " が自動生成して適用します。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "setssoEntraid",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleEI",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID SSO"
          }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " にログインできるようにするには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleEI",
            product: "2"
          }), " 項目を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), " に変更します。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-login-with-entraid.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.RedirectionUri",
            product: "2"
          }), " 項目のリダイレクト URL をコピー（", (0,jsx_runtime.jsx)(IcCopy2, {}), "）し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " ポータルの SSO リダイレクト設定に貼り付けます。 ユーザーが ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " でのログインに成功すると、このアドレスへリダイレクトされます。"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), " にアプリケーションを登録し、リダイレクト URI を追加する方法については次のリンクを参照してください。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app",
                      children: "Microsoft Entra ID へのアプリケーション登録"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "https://learn.microsoft.com/entra/identity-platform/how-to-add-redirect-uri",
                      children: "アプリにリダイレクト URI を追加"
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["リダイレクト URL は ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), " で登録したアプリケーションの ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "概要"
                }), "（", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), "）で確認できます。"]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(_sync_with_integ_MDXContent, {
          hashid: "syncdatafromEntraid",
          name: "Entra ID"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.directoryIntegration.root"
        }), " の設定をすべて完了したら、画面最下部の ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " ボタンをクリックして保存します。 設定結果を確認するには ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#checksettings",
          children: "次のドキュメント"
        }), " を参照してください。"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-directory-btn-apply.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integratewithactivedirectory",
      children: "Active Directory と連携する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に管理者 ID でログインします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
            sid: "setting.menu.directoryIntegration.root"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), " 項目で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.AdServerOld",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-integ-ad.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下の案内に従って各項目を設定します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Active Directory は Windows Server 2008 R2 以降のシステム環境で使用できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Active Directory サーバーを使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.setting",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server",
              product: "2"
            }), " メニューで ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType",
              product: "2"
            }), " 項目を ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.alphanumeric",
              product: "2"
            }), " に設定する必要があります。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ADserver",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " のサーバー情報を入力し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Connect",
            product: "2"
          }), " ボタンをクリックします。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-ad-server.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ServerAddress",
                product: "2"
              }), "：Windows Active Directory サーバーのアドレスを入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.UserName",
                product: "2"
              }), "：Windows Active Directory のログイン ID を入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.Password",
                product: "2"
              }), "：Windows Active Directory のログインパスワードを入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.DomainNode",
                product: "2"
              }), "：Windows Active Directory の既定ドメイン名を入力します。 既定ドメイン名は下記の手順で確認できます。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Active Directory 管理センター"
                  }), " を起動します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["ユーザーデータが保存されているノード（Node）を右クリックし、", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "プロパティ"
                  }), " を選択します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "プロパティ"
                  }), " ウィンドウで ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "拡張"
                  }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "属性エディター"
                  }), " をクリックします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "distinguishedName"
                  }), " の値を確認します。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.secureTransfer",
                product: "2"
              }), "：Windows Active Directory サーバーと通信するときに暗号化を使用できます。 Active Directory 証明書サービスをインストールし、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.keystorePassword",
                product: "2"
              }), " を設定するには ", (0,jsx_runtime.jsx)(_components.a, {
                href: "ad-encrypt",
                children: "次のドキュメント"
              }), " を参照してください。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.keystorePassword",
                  product: "2"
                }), "：Windows Active Directory サーバーの暗号化キー ストアのパスワードを入力します。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.secureTransfer",
                  product: "2"
                }), " 項目を ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.info.enabled",
                  product: "2"
                }), " に設定すると入力できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(MDXContent, {
          hashid: "usergroupfilterAD",
          name: "Active Directory"
        })
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(_usercustomfield_MDXContent, {
          hashid: "userfieldAD",
          name: "Active Directory",
          img01: "biostarx-setting-directory-userfield-ad.png",
          img02: "biostarx-setting-directory-userfield-select-other-ad.png",
          sid: "settings.activeDirectory.FieldNameAD"
        })
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "setssoAD",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleAD",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Active Directory サーバーのユーザー ID でログインできるようにするには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleAD",
            product: "2"
          }), " 項目を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), " に変更します。 Active Directory サーバーの ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sAMAccountName"
          }), " フィールドの値が ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のログイン ID にマッピングされます。"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sAMAccountName"
            }), " フィールドには特殊文字を含めることはできません。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のログイン ID ポリシーに合致しない場合、ログインに失敗することがあります。"]
          })
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-login-with-ad.png"
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(_sync_with_integ_MDXContent, {
          hashid: "syncdatafromAd",
          name: "Active Directory"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.directoryIntegration.root"
        }), " の設定をすべて完了したら、画面最下部の ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " ボタンをクリックして保存します。 設定結果を確認するには ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#checksettings",
          children: "次のドキュメント"
        }), " を参照してください。"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-directory-btn-apply.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checksettings",
      children: "設定結果を確認する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), " との連携設定を完了したら、画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " ボタンをクリックします。 以下の項目を参考に同期された設定を確認します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), " メニューで同期されたユーザーの一覧を確認します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " のログイン設定を完了した後、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " にログインするときに ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "login.entraidLoginBtn",
            product: "2"
          }), " ボタンが表示されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-entraid-login.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "excludeintegration",
      children: "ディレクトリ連携を除外する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.directoryIntegration.root"
      }), " 機能を使用して ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), " と連携する場合、ディレクトリサービスに存在しないユーザーは ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " から削除されることがあります。 削除したくないユーザーがいる場合、次の方法で連携から除外できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に管理者 ID でログインします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), " メニューに移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.user.allUserGroups",
            product: "2"
          }), " 一覧で連携から除外するユーザーをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["選択したユーザーの詳細画面が表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.adsync.exclude",
            product: "2"
          }), " 項目のチェックボックスをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-advance-exclude-sync.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["選択したユーザーは ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.directoryIntegration.root"
      }), " 機能を使用するときに連携から除外されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disableIntegration",
      children: "ディレクトリ連携を解除する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.title",
        product: "2"
      }), " 機能を無効にする場合、次の手順に従います。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に管理者 ID でログインします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.directoryIntegration.root"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), " 項目で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.notUse",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-unset.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alert.warning",
            product: "2"
          }), " メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.continue",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-unset-warn-message.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.activeDirectory.title",
          product: "2"
        }), " 機能を ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.activeDirectory.notUse",
          product: "2"
        }), " に設定すると、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Entra ID"
        }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Directory"
        }), " と連携しているすべての設定が解除されます。 連携されたユーザーおよびグループ情報は削除されませんが、以降は同期されません。 連携を解除する前に必ず確認してください。"]
      })
    })]
  });
}
function settings_diretory_integration_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_diretory_integration_createMdxContent, {
      ...props
    })
  }) : settings_diretory_integration_createMdxContent(props);
}
function settings_diretory_integration_missingMdxReference(id, component) {
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