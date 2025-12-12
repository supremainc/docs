"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["72755"], {
56699: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biostation_2_a_user_mdx_a13_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-biostation-2-a-user-mdx-a13.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biostation_2_a_user_mdx_a13_namespaceObject = JSON.parse('{"id":"device/biostation_2a/user","title":"ユーザー","description":"ユーザーの登録、編集、削除および管理方法について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/biostation_2a/user.mdx","sourceDirName":"device/biostation_2a","slug":"/device/biostation_2a/user","permalink":"/docs/ja/device/biostation_2a/user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_2a/user.mdx","tags":[],"version":"current","frontMatter":{"id":"user","title":"ユーザー","description":"ユーザーの登録、編集、削除および管理方法について説明します。","keywords":["登録","編集","削除","管理"],"isTranslationMissing":false},"sidebar":"biostation2a","previous":{"title":"管理者メニュー","permalink":"/docs/ja/device/biostation_2a/admin-menu"},"next":{"title":"認証","permalink":"/docs/ja/device/biostation_2a/authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/biostation_2a/user.mdx


const frontMatter = {
	id: 'user',
	title: 'ユーザー',
	description: 'ユーザーの登録、編集、削除および管理方法について説明します。',
	keywords: [
		'登録',
		'編集',
		'削除',
		'管理'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ユーザー情報の登録",
  "id": "registering-user-information",
  "level": 2
}, {
  "value": "ユーザー情報の編集",
  "id": "ユーザー情報の編集",
  "level": 2
}, {
  "value": "ユーザーの一括削除",
  "id": "ユーザーの一括削除",
  "level": 2
}, {
  "value": "ユーザー登録状況の確認",
  "id": "ユーザー登録状況の確認",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcBw, IcDown, IcFw, IcUp, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcDown) _missingMdxReference("IcDown", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!IcUp) _missingMdxReference("IcUp", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーの登録、編集、削除および管理方法について説明します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registering-user-information",
      children: "ユーザー情報の登録"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生体認証情報を含むユーザー情報を登録できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "を押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_173",
            product: "dev"
          }), "を選択してから ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-user-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["目的の項目を選択してから ", (0,jsx_runtime.jsx)(IcBw, {}), " ボタンを押してください。 項目を設定して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押すと、ユーザー情報が登録されます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_020",
                product: "dev"
              }), "：1~4294967295 の数字を入力してユーザーIDを登録できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_168",
                product: "dev"
              }), " を ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_237",
                product: "dev"
              }), " に設定した場合、英数字と記号 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "_"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-"
              }), " の組み合わせをIDとして使用でき、最大32文字まで入力できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_253",
                product: "dev"
              }), "：数字ボタンを使用してユーザー名を入力できます。 ", (0,jsx_runtime.jsx)(IcUp, {}), (0,jsx_runtime.jsx)(IcDown, {}), " ボタンを押してアルファベットや数字を選択でき、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "F1"
              }), "/", (0,jsx_runtime.jsx)(_components.strong, {
                children: "F2"
              }), " を押すとさらに多くの文字を確認できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_040",
                product: "dev"
              }), "：使用するPINを入力できます。 PIN を入力してから ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " を押してください。 確認のためもう一度 PIN を入力してから ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " を押してください。 PINの流出を防ぐため、8～16桁の数字を入力してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_312",
                product: "dev"
              }), "：ユーザー認証用の指紋を登録できます。 登録したい指の指紋をスキャンした後、同じ指の指紋をもう一度スキャンしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_322",
                product: "dev"
              }), "：ユーザー認証用のカードを登録できます。 ユーザーに割り当てるカードをスキャンしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_172",
                product: "dev"
              }), "：ユーザーに割り当てる権限を選択できます。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: "設定されているユーザー権限によって使用できるメニューが異なります。"
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_075",
                      product: "dev"
                    }), "：一般ユーザーレベルで、メニューは使用できません。"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_300",
                      product: "dev"
                    }), "：すべてのメニューを利用できます。"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_194",
                      product: "dev"
                    }), "：", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_256",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_366",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_280",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_344",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_255",
                      product: "dev"
                    }), " メニューを利用できます。"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_171",
                      product: "dev"
                    }), "：", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_166",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_255",
                      product: "dev"
                    }), " メニューを利用できます。"]
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_213",
                product: "dev"
              }), "：ユーザーアカウントの使用開始日を設定できます。 数字ボタンを押して日付を入力してください。 ", (0,jsx_runtime.jsx)(IcFw, {}), " ボタンで入力した日付を削除できます。 ", (0,jsx_runtime.jsx)(IcBw, {}), " ボタンで区切り記号を入力できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_129",
                product: "dev"
              }), "：ユーザーアカウントの使用停止日を設定できます。 数字ボタンを押して日付を入力してください。 ", (0,jsx_runtime.jsx)(IcFw, {}), " ボタンで入力した日付を削除できます。 ", (0,jsx_runtime.jsx)(IcBw, {}), " ボタンで区切り記号を入力できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), "：1:1 認証用のセキュリティレベルを設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_363",
                product: "dev"
              }), "：デュレス指紋として登録する場合は選択してください。 誰かに脅迫されて強制的に扉を開けなければならない場合、この指紋で認証すると BioStar X にアラーム信号を送ることができます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_064",
                product: "dev"
              }), "：ユーザーごとに認証方法を変更できます。 目的の項目を選択してから ", (0,jsx_runtime.jsx)(IcFw, {}), (0,jsx_runtime.jsx)(IcBw, {}), " ボタンで設定を変更できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ユーザー情報の編集",
      children: "ユーザー情報の編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー管理者または全体管理者が登録済みのユーザー情報を編集できます。 ユーザーの指紋やカードを追加でき、PINおよび権限を修正できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "を押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_170",
            product: "dev"
          }), "を選択してから ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-user-edt.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用する検索手段を選択してから ", (0,jsx_runtime.jsx)(IcBw, {}), " ボタンを押してください。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_020",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_253",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_312",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_322",
            product: "dev"
          }), "でユーザーを検索できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["検索手段を選択せずに ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), " を押すと、すべてのユーザー一覧が表示されます。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["編集するユーザーを選択してから ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "F2"
          }), " を押してください。 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-user-information",
            children: "ユーザー情報の登録"
          }), " を参照して情報を修正してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ユーザーを削除するには ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "F3"
            }), " を押してから ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), " を押してください。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_320",
          product: "dev"
        }), " は BioStar X で登録できます。 出入グループの登録の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../platform/biostar_x/settings-access-control-manage-access-group#addAccessGroup",
          children: "BioStar X 管理者マニュアル"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ユーザーの一括削除",
      children: "ユーザーの一括削除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登録済みのすべてのユーザーを一度に削除できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "を押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_176",
            product: "dev"
          }), "を選択してから ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-delete-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべてのユーザーを削除するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。 前の画面に戻るには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ユーザー登録状況の確認",
      children: "ユーザー登録状況の確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登録されているユーザー、指紋、カードの数を一目で確認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "を押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_175",
            product: "dev"
          }), "を選択してから ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。 ユーザー登録状況を確認できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-user-usage.png"
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