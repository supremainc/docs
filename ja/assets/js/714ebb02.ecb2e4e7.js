"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["11849"], {
88134: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_qrbarcode_mdx_714_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-qrbarcode-mdx-714.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_qrbarcode_mdx_714_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-qrbarcode","title":"QR/バーコードを登録する","description":"BioStar X QR の生成および外部で発行された QR/バーコードをユーザー認証手段として登録する手順を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-qrbarcode.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-qrbarcode","permalink":"/docs/ja/platform/biostar_x/enroll-credential-qrbarcode","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-qrbarcode.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-qrbarcode","title":"QR/バーコードを登録する","description":"BioStar X QR の生成および外部で発行された QR/バーコードをユーザー認証手段として登録する手順を案内します。","keywords":["QRコード","バーコード","登録","クレデンシャル","認証"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"モバイルアクセスカードを登録する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-mobile"},"next":{"title":"PINを登録する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-pin"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-qrbarcode.mdx


const frontMatter = {
	id: 'enroll-credential-qrbarcode',
	title: 'QR/バーコードを登録する',
	description: 'BioStar X QR の生成および外部で発行された QR/バーコードをユーザー認証手段として登録する手順を案内します。',
	keywords: [
		'QRコード',
		'バーコード',
		'登録',
		'クレデンシャル',
		'認証'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "BioStar X QR",
  "id": "biostarxqr",
  "level": 2
}, {
  "value": "QR/バーコード",
  "id": "qrbarcode",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザー認証手段として QR コードまたはバーコードを登録する方法を案内します。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " で直接生成した QR コードと外部で発行された QR/バーコードを登録できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "QR/Barcode 認証を使用できるスキャナーを搭載したデバイスは下記を参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "X-Station 2 (XS2-QDPB, XS2-QAPB)"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "QR/Barcode 認証を使用できるカメラを搭載したデバイスは下記のリストを参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 (XS2-ODPB, XS2-OAPB, XS2-DPB, XS2-APB) ファームウェア 1.2.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 (BS3-DB, BS3-APWB) ファームウェア 1.1.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["カメラで QR/Barcode 認証を使用するには、別途デバイスライセンスが必要です。 詳細については ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-license-device-license",
                  children: "次のドキュメント"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostarxqr",
      children: "BioStar X QR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暗号化された PIN を含む QR コードをユーザーに発行して入退室を許可できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "始める前に"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar QR"
            }), " を使用する前に、SMTP 設定を含むメール情報の設定を完了してください。 詳細については ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-email-setting",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar QR"
            }), " を発行するには、必ずユーザー情報にメールアドレスを登録する必要があります。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user-basic-info",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addQr",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.qr",
            product: "2"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.qrType",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.biostarQr"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-biostarqr.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.inputType",
            product: "2"
          }), " オプションを選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.random.cardid",
                product: "2"
              }), "：カード ID を自動生成します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.manual.input",
                product: "2"
              }), "：カード ID を直接入力します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "その後、ユーザーが入退室認証を行う際に QR コードを発行し、ユーザー情報に登録されたメールアドレスへ送信します。 ユーザーはメールに含まれる QR コードをデバイスでスキャンして入退室できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["重複したカード ID の生成を防ぐため、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.intrusion.inputType",
          product: "2"
        }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user.random.cardid",
          product: "2"
        }), " を設定することを推奨します。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qrbarcode",
      children: "QR/バーコード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "外部の他の発行元で発行された QR/バーコードをユーザーに登録できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addQr",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.qr",
            product: "2"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.qrType",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.qrBarcode.title"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-qrbarcode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enterManually",
            product: "2"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardId",
            product: "2"
          }), " オプションに既に発行された QR/バーコード ID を直接入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "user.cardId",
          product: "2"
        }), " オプションには、英字、数字、特殊記号を含めて最大 32 文字まで入力できます。"]
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