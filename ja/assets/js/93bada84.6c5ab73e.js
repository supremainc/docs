"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["89222"], {
61374: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Include, Xclude} = _components;
  if (!Include) _missingMdxReference("Include", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "顔を登録する際は、装置と顔の距離を60〜100 cmに保ってください。"
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "顔を登録する際は、装置と顔の距離を40〜80 cmに保ってください。"
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "表情を変えないように注意してください。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "マスク、帽子、アイマスクを着用しないでください。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "マスクを着用した顔を登録しないでください。 マスクを着用した顔と着用していない顔の両方を登録すると、誤認識率が高くなる可能性があります。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "頭を上げたり下げたりしないでください。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "濃い化粧をしないでください。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "目を閉じないでください。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "画面に両肩が収まるようにしてください。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "動かず正面を向いて顔を登録してください。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "2人の顔が画面に同時に映らないように注意してください。 一度に1人ずつ登録してください。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "画面の指示に従わないと、顔登録に時間がかかったり失敗したりすることがあります。"
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
88054: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_facestation_2_user_mdx_93b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-facestation-2-user-mdx-93b.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_facestation_2_user_mdx_93b_namespaceObject = JSON.parse('{"id":"device/facestation_2/user","title":"ユーザー","description":"ユーザーの登録、編集、削除および管理方法について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/facestation_2/user.mdx","sourceDirName":"device/facestation_2","slug":"/device/facestation_2/user","permalink":"/docs/ja/device/facestation_2/user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_2/user.mdx","tags":[],"version":"current","frontMatter":{"id":"user","title":"ユーザー","description":"ユーザーの登録、編集、削除および管理方法について説明します。","keywords":["登録","編集","削除","管理"],"isTranslationMissing":false},"sidebar":"facestation2","previous":{"title":"管理者メニュー","permalink":"/docs/ja/device/facestation_2/admin-menu"},"next":{"title":"認証","permalink":"/docs/ja/device/facestation_2/authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_enrolling-face-warning.mdx
var _enrolling_face_warning = __webpack_require__(61374);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/facestation_2/user.mdx


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
}, ..._enrolling_face_warning/* .toc */.RM, {
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーの登録、編集、削除および管理方法について説明します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registering-user-information",
      children: "ユーザー情報の登録"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生体認証情報を含むユーザー情報を登録できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), "をクリックします。 顔登録ウィザードが開始されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-user-enroll-face.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_108",
            product: "dev"
          }), "をクリックして顔登録ウィザードを続行します。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_065",
            product: "dev"
          }), "をクリックしてスキップし、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "手順 5"
          }), "を確認します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_108",
            product: "dev"
          }), "をクリックしたら、画面の指示に従って顔を登録します。 顔登録は全3段階で行います。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "正面の顔登録"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/fs2-user-enroll-face1.svg",
              className: "none",
              alone: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "顔を上下に動かす"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/fs2-user-enroll-face2.svg",
              className: "none",
              alone: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "顔を左右に動かす"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/fs2-user-enroll-face3.svg",
              className: "none",
              alone: true
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "顔登録ウィザードでは、ユーザーの顔のみを登録します。 顔登録が完了したら、そのユーザーを選択して追加情報を設定します。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "顔を登録するときは次の点に注意してください。"
            })
          }), (0,jsx_runtime.jsx)(_enrolling_face_warning/* ["default"] */.Ay, {})]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_065",
            product: "dev"
          }), "をクリックしたら、必要な項目を選択して設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-user-add.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-photo2.svg",
                ico: true,
                alone: true
              }), "：ユーザーの写真を登録します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "名前"
              }), "：ユーザー名を入力できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ID"
              }), "：1～4294967295 の数字を入力してユーザーIDを登録します。 ", (0,jsx_runtime.jsx)(Cmd, {
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
                sid: "ui_228",
                product: "dev"
              }), "：ユーザー認証用の顔を登録します。 ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), "をクリックして、画面の指示に従い顔を登録します。 ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), "をクリックして顔を追加登録します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_322",
                product: "dev"
              }), "：ユーザー認証用のカードを登録できます。 ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), "をクリックしてから、ユーザーに割り当てるカードをRFカードリーダーにスキャンします。 ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), "をクリックしてカードを追加登録します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_040",
                product: "dev"
              }), "：使用するPINを入力できます。 使用するPINを入力した後、確認のためもう一度PINを入力し、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_037",
                product: "dev"
              }), "をクリックします。 PINは漏えい防止のため4～16桁の数字を入力してください。"]
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
                sid: "ui_230",
                product: "dev"
              }), "：ユーザーの顔グループを選択します。 顔グループは", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_078",
                product: "dev"
              }), "がオンの場合にのみ利用でき、BioStar Xでのみ登録します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_320",
                product: "dev"
              }), "：ユーザーの入退室グループを確認します。 入退室グループはBioStar Xでのみ登録します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_064",
                product: "dev"
              }), "：個人認証モードを設定します。 個人認証モードでは、ユーザーごとに顔を含む認証方式を組み合わせます。 使用しない場合は、デバイスの基本認証モードが適用されます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "をクリックしてユーザー情報登録を完了します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ユーザー情報の編集",
      children: "ユーザー情報の編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー管理者または全体管理者が登録済みのユーザー情報を編集できます。 ユーザーの顔やカードを追加したり、PINおよび権限を修正したりできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-search.svg",
            ico: true,
            alone: true
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用する検索条件を選択します。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_299",
            product: "dev"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_167",
            product: "dev"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_253",
            product: "dev"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_228",
            product: "dev"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_322",
            product: "dev"
          }), "でユーザーを検索します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "編集するユーザーを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-user-information",
            children: "ユーザー情報登録"
          }), "を参照して情報を編集し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "をクリックします。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-delete.svg",
              ico: true,
              alone: true
            }), "を選択して", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_367",
              product: "dev"
            }), "をクリックし、ユーザーを削除します。"]
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
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), "を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_303",
            product: "dev"
          }), "を選択してチェックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべてのユーザーを削除するには", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ユーザー登録状況の確認",
      children: "ユーザー登録状況の確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登録済みのユーザー数、顔数、カード数を一目で確認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-info2.svg",
            ico: true,
            alone: true
          }), "をクリックします。 ユーザー登録状況を確認できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-user-usage.png"
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