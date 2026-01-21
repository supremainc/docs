"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["58870"], {
63382: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_map_mdx_38e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-map-mdx-38e.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_map_mdx_38e_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-map","title":"マップをモニタリングする","description":"マップモニタリング機能を使用して、エリアおよびフロアごとのドアとカメラの状況をリアルタイムで確認し、制御する方法を説明します。 GIS マップと連携してエリアおよびフロア構造を視覚的に管理し、ドア制御やカメラ映像の再生など多彩な機能を利用できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-map.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-map","permalink":"/docs/ja/platform/biostar_x/monitoring-map","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-map.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-map","title":"マップをモニタリングする","description":"マップモニタリング機能を使用して、エリアおよびフロアごとのドアとカメラの状況をリアルタイムで確認し、制御する方法を説明します。 GIS マップと連携してエリアおよびフロア構造を視覚的に管理し、ドア制御やカメラ映像の再生など多彩な機能を利用できます。","keywords":["モニタリング","マップ","エリア","フロア"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"高度アクセス制御を操作する","permalink":"/docs/ja/platform/biostar_x/control-zone"},"next":{"title":"デバイスをモニタリングする","permalink":"/docs/ja/platform/biostar_x/monitoring-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-map.mdx


const frontMatter = {
	id: 'monitoring-map',
	title: 'マップをモニタリングする',
	description: 'マップモニタリング機能を使用して、エリアおよびフロアごとのドアとカメラの状況をリアルタイムで確認し、制御する方法を説明します。 GIS マップと連携してエリアおよびフロア構造を視覚的に管理し、ドア制御やカメラ映像の再生など多彩な機能を利用できます。',
	keywords: [
		'モニタリング',
		'マップ',
		'エリア',
		'フロア'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "構成要素とオプション",
  "id": "component-and-options",
  "level": 2
}, {
  "value": "構成要素",
  "id": "component",
  "level": 3
}, {
  "value": "オプション",
  "id": "options",
  "level": 3
}, {
  "value": "状態を確認する",
  "id": "状態を確認する",
  "level": 3
}, {
  "value": "マップを開く",
  "id": "open-map",
  "level": 2
}, {
  "value": "マップのサイズ調整と位置移動",
  "id": "resize-map",
  "level": 2
}, {
  "value": "フロアに入る",
  "id": "entry-floor",
  "level": 2
}, {
  "value": "別のフロアへ移動する",
  "id": "move-to-another-floor",
  "level": 2
}, {
  "value": "カメラを制御する",
  "id": "control-camera",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
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
  }, {Cmd, IcAlert, IcBack, IcCamFail, IcCamOk, IcClose, IcErr, IcFLockDr, IcFUlockDr, IcMapmore, IcMove, IcZoom, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlert) _missingMdxReference("IcAlert", true);
  if (!IcBack) _missingMdxReference("IcBack", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcFLockDr) _missingMdxReference("IcFLockDr", true);
  if (!IcFUlockDr) _missingMdxReference("IcFUlockDr", true);
  if (!IcMapmore) _missingMdxReference("IcMapmore", true);
  if (!IcMove) _missingMdxReference("IcMove", true);
  if (!IcZoom) _missingMdxReference("IcZoom", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "マップモニタリング機能を使用して、エリアおよびそのフロアごとのドアとカメラの状況をリアルタイムで確認し、制御する方法を説明します。 マップモニタリングは Google マップと連携したビジュアルインターフェースを通じて、エリア (Area) とフロア (Floor) を簡単に探索し、ドア制御やカメラ映像再生などの多様な機能を利用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " ページには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " を選択してアクセスできます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " では、1 つのエリアに複数の施設（Facility）を構成できます。 各施設には複数のフロアを構成できます。 1 つのフロアでは、図面を基準にドアとカメラを設定してモニタリングできます。 次の図を参照してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Area structure",
        src: (__webpack_require__(69796)/* ["default"] */.A) + "",
        width: "2743",
        height: "1771"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["図のように構成した地域をGISマップと連携し、マップ上のエリア（Area）→ 施設（Facility）→ 階（Floor）の順に移動して、ドアとカメラを監視および制御します。 この構造は、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " ページのサイドバーでも同じように確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Monitoring sidebar",
        src: (__webpack_require__(43593)/* ["default"] */.A) + "",
        width: "400",
        height: "395"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["マップの構成方法の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-map-management",
          children: "次の文書"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "component-and-options",
      children: "構成要素とオプション"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "component",
      children: "構成要素"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "マップに表示される構成要素は、エリア（Area）、施設（Facility）、および施設に接続されたカメラです。 施設からフロア (Floor) にアクセスできます。 フロアではドアとカメラを確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-map-main.png"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "構成要素"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "施設アイコン",
                src: (__webpack_require__(2684)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "施設"
              }), " (Facility)：マップに配置された施設をクリックすると、その施設に設定されているフロア (Floor) へ入ることができます。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "ドアアイコン",
                src: (__webpack_require__(18248)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ドア"
              }), "：マップに配置されたドアをクリックすると、そのドアを制御できるポップアップメニューが表示されます。 提供される機能の詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "control-door",
                children: "次の文書"
              }), "を参照してください。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "カメラアイコン",
                src: (__webpack_require__(21006)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "カメラ"
              }), "：カメラをクリックすると、その施設またはフロアの映像を再生できます。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "カメラエラーアイコン",
                src: (__webpack_require__(16920)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "カメラエラー"
              }), "：カメラが接続されていない、または電源がオフになっている場合に表示されます。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcFUlockDr, {
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "開いているドア"
              }), "：フロア (Floor) に配置されたドアが開いている状態です。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcFLockDr, {
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "施錠されたドア"
              }), "：フロア (Floor) に配置されたドアが施錠されている状態です。"]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "options",
      children: "オプション"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "マップまたはフロアで提供されるオプションは次のとおりです。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "機能"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: [(0,jsx_runtime.jsx)(_components.img, {
                alt: "拡大/縮小",
                src: (__webpack_require__(44678)/* ["default"] */.A) + "",
                width: "24",
                height: "51"
              }), " / ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "拡大/縮小",
                src: (__webpack_require__(30129)/* ["default"] */.A) + "",
                width: "51",
                height: "24"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "マップ左上または右下にあるボタンをクリックして拡大／縮小できます。 また、マウスホイールでマップを拡大／縮小できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcZoom, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "フロアの右下にあるボタンをクリックすると、拡大／縮小できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcMapmore, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ボタンをクリックすると、追加機能を利用できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcClose, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ビデオタイル上のマップまたはフロアを閉じるには、右上のボタンをクリックします。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcMove, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "アイコンをクリックしたままドラッグすると、マップを別の位置へ移動できます。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "マップ上でマウスをクリックしたままドラッグすると位置を移動できます。 マウスホイールで拡大または縮小できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["マップをダブルクリックすると全画面表示に拡大されます。 もう一度ダブルクリックするか、", (0,jsx_runtime.jsx)(Kbd, {
              children: "ESC"
            }), " キーを押すと元のサイズに戻ります。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状態を確認する",
      children: "状態を確認する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面左のサイドバーで各施設またはフロアのドアとカメラの状態を確認できます。 各アイコンの状態は以下を参照してください。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "ステータスアイコン"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcErr, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "通信サーバーのエラー、または接続が切断されています。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcAlert, {
                width: "40px",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ドアでアラームが発生している状態です。 徘徊検知、侵入検知などが発生すると該当アイコンが表示されます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamOk, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラが接続されています。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamFail, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラの電源がオフ、または接続が解除されています。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-map",
      children: "マップを開く"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["エリアが GIS マップと連携している場合、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), "セクションにマップを表示できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画面左のサイドバーで、マップで確認する施設を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "マウスの右ボタンをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openMap"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["選択したエリアのマップが ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " セクションのビデオタイルに表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-open-map.png",
      alt: "マップを開く"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "画面左のサイドバーでその施設をダブルクリックしてもマップを開けます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "画像は例示用の画面です。 実際の画面とは異なる場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["GIS マップと連携してエリアを構成する方法の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-area",
              children: "次のドキュメント"
            }), "を参照します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resize-map",
      children: "マップのサイズ調整と位置移動"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "マップのサイズを調整するには、地図上の空白部分をクリックします。 各コーナーにサイズ調整用ハンドルが表示されます。 ハンドルをクリックしたままドラッグして、目的のサイズに調整します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-resize.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["サイズを調整した後にマップを別の位置へ移動するには、マップ上の", (0,jsx_runtime.jsx)(IcMove, {}), "アイコンをクリックしたまま目的の位置へドラッグします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-move.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entry-floor",
      children: "フロアに入る"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "マップからフロアへ入るには、Facility をクリックします。 ポップアップメニューにアクセス可能なフロアの一覧が表示されたら、目的のフロアを選択します。 選択したフロアの図面、ドア、カメラを確認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["または、画面左のサイドバーでフロアをダブルクリックするか、右クリックしてポップアップメニューから", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openMap"
      }), "をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-select-floor.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ドアをクリックすると、そのドアを制御できるポップアップメニューが表示されます。 提供される機能の詳細は", (0,jsx_runtime.jsx)(_components.a, {
            href: "control-door",
            children: "次の文書"
          }), "を参照してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-map-floor-control-door.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カメラをダブルクリックすると、ライブ映像を再生できます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/monitoring-map-select-floor-play-video.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["フロアにドアとカメラを設定する方法の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-floor",
              children: "次のドキュメント"
            }), "を参照します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["施設が表示されるマップに戻るには、左上の", (0,jsx_runtime.jsx)(IcBack, {}), "ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["映像の制御方法および映像に表示されるツールの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video#control-video",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "画像は例示用の画面です。 実際の画面とは異なる場合があります。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "move-to-another-floor",
      children: "別のフロアへ移動する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "別のフロアへ移動するには、マップ左上の選択オプションをクリックし、一覧から移動したいフロアを選択します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/monitoring-map-select-floor-list-box.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["施設が表示されるマップに戻るには、左上の", (0,jsx_runtime.jsx)(IcBack, {}), "ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["マップ左上のフロア選択オプションには、Facility に設定されているフロアのみが表示されます。 そのフロアが Facility に設定されていない場合、リストに表示されません。 Facility にフロアを設定する方法の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-facility",
              children: "次のドキュメント"
            }), "を参照します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-camera",
      children: "カメラを制御する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "マップまたはフロアでカメラを制御するには、カメラアイコンをクリックします。 ポップアップメニューから目的の機能を選択します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-map-camera-popup.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.playVideo"
              }), "：カメラ映像をリアルタイムで確認できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.showCoverage"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.hideCoverage"
              }), "：カメラの撮影範囲を表示または非表示にできます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.door.viewDetail"
              }), "：カメラの詳細情報を確認できます。 画面右のパネルにカメラの名前、グループ、ID、IPアドレスなどが表示されます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ビデオタイルにカメラ映像を配置して再生するには、画面左のサイドバーにある ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.map.title"
          }), " リストでカメラをダブルクリックします。 またはマウスの右ボタンをクリックし、ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-map-open-camera.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カメラの名前、グループなどの詳細情報を確認するには、ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.viewDetail"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ビデオタイルは画面左上から順に追加され、現在の画面に追加スペースがない場合はエラーメッセージが表示されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["映像の制御方法および映像に表示されるツールの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video#control-video",
              children: "次の文書"
            }), "を参照してください。"]
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
2684: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjOTMzNkZGIi8+DQo8cGF0aCBkPSJNMzMuNzUgOS4zNzVDMzMuNzQ0MSA5LjEyODIzIDMzLjY0MzQgOC44OTMyMiAzMy40Njg4IDguNzE4NjdDMzMuMjk0MyA4LjU0NDEzIDMzLjA1OTMgOC40NDM0NSAzMi44MTI1IDguNDM3NUgxMi4xODc1QzExLjk0MDcgOC40NDM0NSAxMS43MDU3IDguNTQ0MTMgMTEuNTMxMiA4LjcxODY3QzExLjM1NjYgOC44OTMyMiAxMS4yNTU5IDkuMTI4MjMgMTEuMjUgOS4zNzVWMzUuNjI1QzExLjI1NTkgMzUuODcxOCAxMS4zNTY2IDM2LjEwNjggMTEuNTMxMiAzNi4yODEzQzExLjcwNTcgMzYuNDU1OSAxMS45NDA3IDM2LjU1NjYgMTIuMTg3NSAzNi41NjI1SDMyLjgxMjVDMzMuMDU5MyAzNi41NTY2IDMzLjI5NDMgMzYuNDU1OSAzMy40Njg4IDM2LjI4MTNDMzMuNjQzNCAzNi4xMDY4IDMzLjc0NDEgMzUuODcxOCAzMy43NSAzNS42MjVWOS4zNzVaTTI0LjM3NSAxMy4xMjVIMzBWMTYuODc1SDI0LjM3NVYxMy4xMjVaTTMwIDIzLjQzNzVIMjQuMzc1VjE5LjY4NzVIMzBWMjMuNDM3NVpNMTUgMTMuMTI1SDIwLjYyNVYxNi44NzVIMTVWMTMuMTI1Wk0xNSAyMy40Mzc1VjE5LjY4NzVIMjAuNjI1VjIzLjQzNzVIMTVaTTE4Ljc1IDM0LjY4NzVWMjguMTI1QzE4Ljc1NTkgMjcuODc4MiAxOC44NTY2IDI3LjY0MzIgMTkuMDMxMiAyNy40Njg3QzE5LjIwNTcgMjcuMjk0MSAxOS40NDA3IDI3LjE5MzQgMTkuNjg3NSAyNy4xODc1SDI1LjMxMjVDMjUuNTU5MyAyNy4xOTM0IDI1Ljc5NDMgMjcuMjk0MSAyNS45Njg4IDI3LjQ2ODdDMjYuMTQzNCAyNy42NDMyIDI2LjI0NDEgMjcuODc4MiAyNi4yNSAyOC4xMjVWMzQuNjg3NUgxOC43NVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==");

}),
43593: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-example-83c033a246fd3a83889a4111c4e2ced2.png");

}),
69796: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-ad4ae185a1ecc1918cfb680e0d0a82ca.png");

}),
21006: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjM0U2NkZGIi8+DQo8cGF0aCBkPSJNMzAuMDI2NiAxNi4wMjY2QzMwLjA4NDcgMTUuNjE5MSAzMC4wNDcyIDE1LjIwMzYgMjkuOTE3IDE0LjgxMzFDMjkuNzg2OCAxNC40MjI2IDI5LjU2NzUgMTQuMDY3OCAyOS4yNzY0IDEzLjc3NjhDMjguOTg1NCAxMy40ODU3IDI4LjYzMDUgMTMuMjY2NCAyOC4yNCAxMy4xMzYyQzI3Ljg0OTUgMTMuMDA2IDI3LjQzNDEgMTIuOTY4NCAyNy4wMjY2IDEzLjAyNjZIMTEuMDI2NkMxMC42MTkxIDEyLjk2ODQgMTAuMjAzNiAxMy4wMDYgOS44MTMxNCAxMy4xMzYyQzkuNDIyNjUgMTMuMjY2NCA5LjA2NzgyIDEzLjQ4NTcgOC43NzY3NSAxMy43NzY4QzguNDg1NjkgMTQuMDY3OCA4LjI2NjM3IDE0LjQyMjYgOC4xMzYxNyAxNC44MTMxQzguMDA1OTYgMTUuMjAzNiA3Ljk2ODQ1IDE1LjYxOTEgOC4wMjY1OSAxNi4wMjY2VjMwLjAyNjZDNy45Njg0NSAzMC40MzQxIDguMDA1OTYgMzAuODQ5NSA4LjEzNjE3IDMxLjI0QzguMjY2MzcgMzEuNjMwNSA4LjQ4NTY5IDMxLjk4NTQgOC43NzY3NSAzMi4yNzY0QzkuMDY3ODIgMzIuNTY3NSA5LjQyMjY1IDMyLjc4NjggOS44MTMxNCAzMi45MTdDMTAuMjAzNiAzMy4wNDcyIDEwLjYxOTEgMzMuMDg0NyAxMS4wMjY2IDMzLjAyNjZIMjcuMDI2NkMyNy40MzQxIDMzLjA4NDcgMjcuODQ5NSAzMy4wNDcyIDI4LjI0IDMyLjkxN0MyOC42MzA1IDMyLjc4NjggMjguOTg1NCAzMi41Njc1IDI5LjI3NjQgMzIuMjc2NEMyOS41Njc1IDMxLjk4NTQgMjkuNzg2OCAzMS42MzA1IDI5LjkxNyAzMS4yNEMzMC4wNDcyIDMwLjg0OTUgMzAuMDg0NyAzMC40MzQxIDMwLjAyNjYgMzAuMDI2NlYxNi4wMjY2Wk0zMi4wMjY2IDE5LjM3NjZWMjYuNzc2NkwzNi41NzY2IDI5LjQyNjZDMzYuODQxIDI5LjYwOTkgMzcuMTI2NCAyOS43NjA5IDM3LjQyNjYgMjkuODc2NkMzNy42NjM3IDI5Ljk3NzMgMzcuOTE5IDMwLjAyODQgMzguMTc2NiAzMC4wMjY2QzM4LjQzMDQgMjkuOTk3OSAzOC42ODEzIDI5Ljk0NzcgMzguOTI2NiAyOS44NzY2QzM5LjI4NTUgMjkuNzI4OCAzOS41ODY3IDI5LjQ2ODYgMzkuNzg1MSAyOS4xMzVDMzkuOTgzNCAyOC44MDE0IDQwLjA2ODIgMjguNDEyNSA0MC4wMjY2IDI4LjAyNjZWMTguMDI2NkM0MC4wNjgyIDE3LjY0MDcgMzkuOTgzNCAxNy4yNTE4IDM5Ljc4NTEgMTYuOTE4MkMzOS41ODY3IDE2LjU4NDYgMzkuMjg1NSAxNi4zMjQ0IDM4LjkyNjYgMTYuMTc2NkMzOC42ODEzIDE2LjEwNTQgMzguNDMwNCAxNi4wNTUzIDM4LjE3NjYgMTYuMDI2NkMzNy45MTkgMTYuMDI0OCAzNy42NjM3IDE2LjA3NTggMzcuNDI2NiAxNi4xNzY2QzM3LjEyNjQgMTYuMjkyMyAzNi44NDEgMTYuNDQzMyAzNi41NzY2IDE2LjYyNjZMMzMuMDI2NiAxOC43MjY2VjE4Ljc3NjZMMzIuMDI2NiAxOS4zNzY2WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");

}),
16920: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjM0U2NkZGIi8+DQo8cGF0aCBkPSJNMzAuMDI2NiAxNi4wMjY2QzMwLjA4NDcgMTUuNjE5MSAzMC4wNDcyIDE1LjIwMzYgMjkuOTE3IDE0LjgxMzFDMjkuNzg2OCAxNC40MjI2IDI5LjU2NzUgMTQuMDY3OCAyOS4yNzY0IDEzLjc3NjhDMjguOTg1NCAxMy40ODU3IDI4LjYzMDUgMTMuMjY2NCAyOC4yNCAxMy4xMzYyQzI3Ljg0OTUgMTMuMDA2IDI3LjQzNDEgMTIuOTY4NCAyNy4wMjY2IDEzLjAyNjZIMTEuMDI2NkMxMC42MTkxIDEyLjk2ODQgMTAuMjAzNiAxMy4wMDYgOS44MTMxNCAxMy4xMzYyQzkuNDIyNjUgMTMuMjY2NCA5LjA2NzgyIDEzLjQ4NTcgOC43NzY3NSAxMy43NzY4QzguNDg1NjkgMTQuMDY3OCA4LjI2NjM3IDE0LjQyMjYgOC4xMzYxNyAxNC44MTMxQzguMDA1OTYgMTUuMjAzNiA3Ljk2ODQ1IDE1LjYxOTEgOC4wMjY1OSAxNi4wMjY2VjMwLjAyNjZDNy45Njg0NSAzMC40MzQxIDguMDA1OTYgMzAuODQ5NSA4LjEzNjE3IDMxLjI0QzguMjY2MzcgMzEuNjMwNSA4LjQ4NTY5IDMxLjk4NTQgOC43NzY3NSAzMi4yNzY0QzkuMDY3ODIgMzIuNTY3NSA5LjQyMjY1IDMyLjc4NjggOS44MTMxNCAzMi45MTdDMTAuMjAzNiAzMy4wNDcyIDEwLjYxOTEgMzMuMDg0NyAxMS4wMjY2IDMzLjAyNjZIMjcuMDI2NkMyNy40MzQxIDMzLjA4NDcgMjcuODQ5NSAzMy4wNDcyIDI4LjI0IDMyLjkxN0MyOC42MzA1IDMyLjc4NjggMjguOTg1NCAzMi41Njc1IDI5LjI3NjQgMzIuMjc2NEMyOS41Njc1IDMxLjk4NTQgMjkuNzg2OCAzMS42MzA1IDI5LjkxNyAzMS4yNEMzMC4wNDcyIDMwLjg0OTUgMzAuMDg0NyAzMC40MzQxIDMwLjAyNjYgMzAuMDI2NlYxNi4wMjY2Wk0zMi4wMjY2IDE5LjM3NjZWMjYuNzc2NkwzNi41NzY2IDI5LjQyNjZDMzYuODQxIDI5LjYwOTkgMzcuMTI2NCAyOS43NjA5IDM3LjQyNjYgMjkuODc2NkMzNy42NjM3IDI5Ljk3NzMgMzcuOTE5IDMwLjAyODQgMzguMTc2NiAzMC4wMjY2QzM4LjQzMDQgMjkuOTk3OSAzOC42ODEzIDI5Ljk0NzcgMzguOTI2NiAyOS44NzY2QzM5LjI4NTUgMjkuNzI4OCAzOS41ODY3IDI5LjQ2ODYgMzkuNzg1MSAyOS4xMzVDMzkuOTgzNCAyOC44MDE0IDQwLjA2ODIgMjguNDEyNSA0MC4wMjY2IDI4LjAyNjZWMTguMDI2NkM0MC4wNjgyIDE3LjY0MDcgMzkuOTgzNCAxNy4yNTE4IDM5Ljc4NTEgMTYuOTE4MkMzOS41ODY3IDE2LjU4NDYgMzkuMjg1NSAxNi4zMjQ0IDM4LjkyNjYgMTYuMTc2NkMzOC42ODEzIDE2LjEwNTQgMzguNDMwNCAxNi4wNTUzIDM4LjE3NjYgMTYuMDI2NkMzNy45MTkgMTYuMDI0OCAzNy42NjM3IDE2LjA3NTggMzcuNDI2NiAxNi4xNzY2QzM3LjEyNjQgMTYuMjkyMyAzNi44NDEgMTYuNDQzMyAzNi41NzY2IDE2LjYyNjZMMzMuMDI2NiAxOC43MjY2VjE4Ljc3NjZMMzIuMDI2NiAxOS4zNzY2WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0yMS44NTU1IDI3LjI2ODVMMTkuMDI2OSAyNC40NDA2TDE2LjE5ODcgMjcuMjY4NUMxNi4xMDU5IDI3LjM2MTUgMTUuOTk1NCAyNy40MzUzIDE1Ljg3NCAyNy40ODU2QzE1Ljc1MjYgMjcuNTM1OSAxNS42MjI2IDI3LjU2MTggMTUuNDkxMiAyNy41NjE4QzE1LjM1OTggMjcuNTYxOCAxNS4yMjk4IDI3LjUzNTkgMTUuMTA4NCAyNy40ODU2QzE0Ljk4NyAyNy40MzUzIDE0Ljg3NjYgMjcuMzYxNSAxNC43ODM3IDI3LjI2ODVDMTQuNTk2MiAyNy4wODEgMTQuNDkwNyAyNi44MjY3IDE0LjQ5MDcgMjYuNTYxNUMxNC40OTA3IDI2LjI5NjQgMTQuNTk2MiAyNi4wNDIxIDE0Ljc4MzcgMjUuODU0NkwxNy42MTI4IDIzLjAyNTVMMTQuNzgzNyAyMC4xOTc1QzE0LjY5MDcgMjAuMTA0NyAxNC42MTY3IDE5Ljk5NDQgMTQuNTY2NCAxOS44NzNDMTQuNTE2MSAxOS43NTE2IDE0LjQ5MDIgMTkuNjIxNSAxNC40OTAyIDE5LjQ5MDFDMTQuNDkwMiAxOS4zNTg2IDE0LjUxNjEgMTkuMjI4NSAxNC41NjY0IDE5LjEwNzFDMTQuNjE2NyAxOC45ODU3IDE0LjY5MDcgMTguODc1NCAxNC43ODM3IDE4Ljc4MjVDMTQuODc2NiAxOC42ODk2IDE0Ljk4NyAxOC42MTU4IDE1LjEwODQgMTguNTY1NUMxNS4yMjk4IDE4LjUxNTIgMTUuMzU5OCAxOC40ODkzIDE1LjQ5MTIgMTguNDg5M0MxNS42MjI2IDE4LjQ4OTMgMTUuNzUyNiAxOC41MTUyIDE1Ljg3NCAxOC41NjU1QzE1Ljk5NTQgMTguNjE1OCAxNi4xMDU5IDE4LjY4OTYgMTYuMTk4NyAxOC43ODI1TDE5LjAyNjkgMjEuNjExNUwyMS44NTU1IDE4Ljc4MjVDMjIuMDQzIDE4LjU5NTEgMjIuMjk3MyAxOC40ODk3IDIyLjU2MjUgMTguNDg5N0MyMi44Mjc3IDE4LjQ4OTcgMjMuMDgyIDE4LjU5NTEgMjMuMjY5NSAxOC43ODI1QzIzLjM2MjUgMTguODc1NCAyMy40MzY1IDE4Ljk4NTcgMjMuNDg2OCAxOS4xMDcxQzIzLjUzNzEgMTkuMjI4NSAyMy41NjMgMTkuMzU4NiAyMy41NjMgMTkuNDkwMUMyMy41NjMgMTkuNjIxNSAyMy41MzcxIDE5Ljc1MTYgMjMuNDg2OCAxOS44NzNDMjMuNDM2NSAxOS45OTQ0IDIzLjM2MjUgMjAuMTA0NyAyMy4yNjk1IDIwLjE5NzVMMjAuNDQxNCAyMy4wMjU1TDIzLjI2OTUgMjUuODU0NkMyMy40NTcgMjYuMDQyMSAyMy41NjI1IDI2LjI5NjQgMjMuNTYyNSAyNi41NjE1QzIzLjU2MjUgMjYuODI2NyAyMy40NTcgMjcuMDgxIDIzLjI2OTUgMjcuMjY4NUMyMy4wODIgMjcuNDU2MSAyMi44Mjc3IDI3LjU2MTUgMjIuNTYyNSAyNy41NjE1QzIyLjI5NzMgMjcuNTYxNSAyMi4wNDMgMjcuNDU2MSAyMS44NTU1IDI3LjI2ODVaIiBmaWxsPSIjRkYwMDAwIi8+DQo8L3N2Zz4NCg==");

}),
18248: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjRkY1RTAwIi8+DQo8cGF0aCBkPSJNMjguNjM4NyAxMi4xOTQ2QzI4LjU3NjYgMTIuMTI2NCAyOC41MDE0IDEyLjA3MTYgMjguNDE3NSAxMi4wMzM0QzI4LjMzMzYgMTEuOTk1MyAyOC4yNDI4IDExLjk3NDYgMjguMTUwNiAxMS45NzI3SDE1Ljg2MDRDMTUuNjEzNCAxMS45NzY4IDE1LjM3NjUgMTIuMDcxNSAxNS4xOTQ4IDEyLjIzODlDMTUuMDU0MiAxMi4zOTg0IDE0Ljk3NTUgMTIuNjAzMSAxNC45NzMgMTIuODE1N1YzNi4yNDI2QzE0Ljk2ODcgMzYuMzQ4OCAxNC45ODYyIDM2LjQ1NDcgMTUuMDI0NCAzNi41NTM5QzE1LjA2MjUgMzYuNjUzMSAxNS4xMjA1IDM2Ljc0MzQgMTUuMTk0OCAzNi44MTk0QzE1LjI3OSAzNi45MTM1IDE1LjM4MTQgMzYuOTg5NiAxNS40OTU4IDM3LjA0M0MxNS42MTAyIDM3LjA5NjMgMTUuNzM0MiAzNy4xMjU5IDE1Ljg2MDQgMzcuMTNIMjguMTUwNkMyOC4yNDI4IDM3LjEyODEgMjguMzMzNiAzNy4xMDc0IDI4LjQxNzUgMzcuMDY5M0MyOC41MDE0IDM3LjAzMTEgMjguNTc2NiAzNi45NzYzIDI4LjYzODcgMzYuOTA4MUwyOC43Mjc0IDM2LjgxOTRDMjguODEzMiAzNi43NTAzIDI4Ljg4MTkgMzYuNjYyMiAyOC45MjgxIDM2LjU2MjJDMjguOTc0MiAzNi40NjIxIDI4Ljk5NjcgMzYuMzUyNyAyOC45OTM2IDM2LjI0MjZWMTIuODE1N0MyOC45OTA3IDEyLjcwNjYgMjguOTY1NSAxMi41OTkyIDI4LjkxOTggMTIuNUMyOC44NzQgMTIuNDAwOCAyOC44MDg2IDEyLjMxMiAyOC43Mjc0IDEyLjIzODlDMjguNzE2MyAxMi4yMjYgMjguNzAyOCAxMi4yMTU0IDI4LjY4NzUgMTIuMjA3OEMyOC42NzIzIDEyLjIwMDIgMjguNjU1NyAxMi4xOTU3IDI4LjYzODcgMTIuMTk0NlpNMTYuNzkyMSAyNC41MjkyQzE2Ljc4OTEgMjQuNDA2IDE2LjgxMTEgMjQuMjgzNSAxNi44NTY5IDI0LjE2OUMxNi45MDI2IDI0LjA1NDYgMTYuOTcxMSAyMy45NTA3IDE3LjA1ODMgMjMuODYzNUMxNy4xNDU0IDIzLjc3NjQgMTcuMjQ5MyAyMy43MDc5IDE3LjM2MzcgMjMuNjYyMUMxNy40NzgyIDIzLjYxNjQgMTcuNjAwNyAyMy41OTQ0IDE3LjcyMzkgMjMuNTk3NEMxNy44NDcxIDIzLjU5NCAxNy45Njk3IDIzLjYxNTkgMTguMDg0MiAyMy42NjE3QzE4LjE5ODYgMjMuNzA3NSAxOC4zMDI1IDIzLjc3NjIgMTguMzg5NCAyMy44NjM2QzE4LjU1NjggMjQuMDQ1MyAxOC42NTE2IDI0LjI4MjIgMTguNjU1NiAyNC41MjkyQzE4LjY1ODcgMjQuNjUyNCAxOC42MzY3IDI0Ljc3NDkgMTguNTkwOSAyNC44ODkzQzE4LjU0NTIgMjUuMDAzNyAxOC40NzY2IDI1LjEwNzcgMTguMzg5NSAyNS4xOTQ4QzE4LjMwMjQgMjUuMjgxOSAxOC4xOTg0IDI1LjM1MDQgMTguMDg0IDI1LjM5NjJDMTcuOTY5NiAyNS40NDE5IDE3Ljg0NzEgMjUuNDY0IDE3LjcyMzkgMjUuNDYwOUMxNy40NzY5IDI1LjQ1NjkgMTcuMjQgMjUuMzYyMSAxNy4wNTgzIDI1LjE5NDdDMTYuOTcwOSAyNS4xMDc4IDE2LjkwMjIgMjUuMDAzOSAxNi44NTY0IDI0Ljg4OTVDMTYuODEwNiAyNC43NzUgMTYuNzg4NyAyNC42NTI0IDE2Ljc5MjEgMjQuNTI5MlpNMzEuOTY2MyAxMS4zNTE2QzMxLjk2ODggMTEuMDUwMSAzMS45MDY4IDEwLjc1MTYgMzEuNzg0MyAxMC40NzYxQzMxLjY2MTkgMTAuMjAwNiAzMS40ODE5IDkuOTU0NDUgMzEuMjU2NCA5Ljc1NDI3QzMxLjA0NzQgOS41MjQ4OSAzMC43OTQzIDkuMzM5OTEgMzAuNTEyMyA5LjIxMDMzQzMwLjIzMDIgOS4wODA3NSAyOS45MjUgOS4wMDkyMiAyOS42MTQ4IDlIMTQuMzUxOEMxMy43MTM1IDkuMDI0MDYgMTMuMTA5MiA5LjI5NDM5IDEyLjY2NTggOS43NTQyN0MxMi40NTE3IDkuOTYwOTQgMTIuMjgyMSAxMC4yMDkzIDEyLjE2NzcgMTAuNDg0QzEyLjA1MzIgMTAuNzU4NyAxMS45OTYyIDExLjA1NCAxMi4wMDAzIDExLjM1MTZWMzYuMjQyNkMxMS45OTcyIDM2LjM1MjcgMTIuMDE5NyAzNi40NjIxIDEyLjA2NTggMzYuNTYyMkMxMi4xMTIgMzYuNjYyMiAxMi4xODA3IDM2Ljc1MDMgMTIuMjY2NSAzNi44MTk0QzEyLjM0IDM2LjkxNDYgMTIuNDM0IDM2Ljk5MiAxMi41NDE1IDM3LjA0NTdDMTIuNjQ5MSAzNy4wOTk1IDEyLjc2NzQgMzcuMTI4MyAxMi44ODc3IDM3LjEzSDEyLjk3NjRDMTMuMDkwOSAzNy4xMzEgMTMuMjAzOCAzNy4xMDMxIDEzLjMwNDcgMzcuMDQ4OEMxMy40MDU1IDM2Ljk5NDUgMTMuNDkxIDM2LjkxNTYgMTMuNTUzMiAzNi44MTk0QzEzLjY0OTQgMzYuNzU3MiAxMy43MjgzIDM2LjY3MTcgMTMuNzgyNiAzNi41NzA5QzEzLjgzNjkgMzYuNDcgMTMuODY0OCAzNi4zNTcxIDEzLjg2MzggMzYuMjQyNlYxMi4yODMzQzEzLjg2MDMgMTIuMTAyIDEzLjg5NCAxMS45MjE5IDEzLjk2MjYgMTEuNzU0QzE0LjAzMTMgMTEuNTg2MiAxNC4xMzM2IDExLjQzNDEgMTQuMjYzMSAxMS4zMDcyQzE0LjM5MzkgMTEuMTY3NSAxNC41NTIgMTEuMDU2MSAxNC43Mjc1IDEwLjk3OThDMTQuOTAzIDEwLjkwMzUgMTUuMDkyMiAxMC44NjM5IDE1LjI4MzYgMTAuODYzNUgyOC42ODNDMjguODY4MyAxMC44NjE0IDI5LjA1MTggMTAuOSAyOS4yMjA1IDEwLjk3NjdDMjkuMzg5MiAxMS4wNTM0IDI5LjUzODkgMTEuMTY2MiAyOS42NTkyIDExLjMwNzJDMjkuODAwMiAxMS40Mjc0IDI5LjkxMyAxMS41NzcyIDI5Ljk4OTcgMTEuNzQ1OUMzMC4wNjYzIDExLjkxNDUgMzAuMTA1IDEyLjA5OCAzMC4xMDI4IDEyLjI4MzNWMzYuMjQyNkMzMC4wOTk4IDM2LjM1MjcgMzAuMTIyMiAzNi40NjIxIDMwLjE2ODQgMzYuNTYyMkMzMC4yMTQ2IDM2LjY2MjIgMzAuMjgzMyAzNi43NTAzIDMwLjM2OTEgMzYuODE5NEMzMC40NDI1IDM2LjkxNDYgMzAuNTM2NiAzNi45OTIgMzAuNjQ0MSAzNy4wNDU3QzMwLjc1MTcgMzcuMDk5NSAzMC44NyAzNy4xMjgzIDMwLjk5MDIgMzcuMTNIMzEuMDc5QzMxLjE5OTIgMzcuMTI4MyAzMS4zMTc1IDM3LjA5OTUgMzEuNDI1MSAzNy4wNDU3QzMxLjUzMjYgMzYuOTkyIDMxLjYyNjcgMzYuOTE0NiAzMS43MDAxIDM2LjgxOTRDMzEuNzg1OSAzNi43NTAzIDMxLjg1NDYgMzYuNjYyMiAzMS45MDA4IDM2LjU2MjJDMzEuOTQ3IDM2LjQ2MjEgMzEuOTY5NCAzNi4zNTI3IDMxLjk2NjMgMzYuMjQyNlYxMS4zNTE2WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");

}),
30129: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHk9IjI0IiB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHJ4PSIxMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDAgMjQpIiBmaWxsPSIjM0YzRTNCIi8+DQo8cGF0aCBkPSJNMTcuMTU1MyAxMi42OTE4TDkuMTg2NTIgMTIuNjkxOEw5LjE4NjUyIDExLjMzOTVMMTcuMTU1MyAxMS4zMzk1TDE3LjE1NTMgMTIuNjkxOFpNMTMuODQ3IDE2TDEyLjQ5NDggMTZMMTIuNDk0OCA4LjAzMTI1TDEzLjg0NyA4LjAzMTI1TDEzLjg0NyAxNloiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNDEgMTEuNVYxMi41TDMzIDEyLjVWMTEuNUw0MSAxMS41WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");

}),
44678: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAyNCA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSI1MSIgcng9IjExIiBmaWxsPSIjM0YzRTNCIi8+DQo8cGF0aCBkPSJNMTEuMzA4MiAxNy4xNTUzVjkuMTg2NTJIMTIuNjYwNVYxNy4xNTUzSDExLjMwODJaTTggMTMuODQ3VjEyLjQ5NDhIMTUuOTY4OFYxMy44NDdIOFoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTYgMzlWNDBIOFYzOUgxNloiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==");

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