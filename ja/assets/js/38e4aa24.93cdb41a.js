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
                alt: "出入口アイコン",
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
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiM5MzM2RkYiLz4KPHBhdGggZD0iTTMzLjc1IDkuMzc1QzMzLjc0NDEgOS4xMjgyMyAzMy42NDM0IDguODkzMjIgMzMuNDY4OCA4LjcxODY3QzMzLjI5NDMgOC41NDQxMyAzMy4wNTkzIDguNDQzNDUgMzIuODEyNSA4LjQzNzVIMTIuMTg3NUMxMS45NDA3IDguNDQzNDUgMTEuNzA1NyA4LjU0NDEzIDExLjUzMTIgOC43MTg2N0MxMS4zNTY2IDguODkzMjIgMTEuMjU1OSA5LjEyODIzIDExLjI1IDkuMzc1VjM1LjYyNUMxMS4yNTU5IDM1Ljg3MTggMTEuMzU2NiAzNi4xMDY4IDExLjUzMTIgMzYuMjgxM0MxMS43MDU3IDM2LjQ1NTkgMTEuOTQwNyAzNi41NTY2IDEyLjE4NzUgMzYuNTYyNUgzMi44MTI1QzMzLjA1OTMgMzYuNTU2NiAzMy4yOTQzIDM2LjQ1NTkgMzMuNDY4OCAzNi4yODEzQzMzLjY0MzQgMzYuMTA2OCAzMy43NDQxIDM1Ljg3MTggMzMuNzUgMzUuNjI1VjkuMzc1Wk0yNC4zNzUgMTMuMTI1SDMwVjE2Ljg3NUgyNC4zNzVWMTMuMTI1Wk0zMCAyMy40Mzc1SDI0LjM3NVYxOS42ODc1SDMwVjIzLjQzNzVaTTE1IDEzLjEyNUgyMC42MjVWMTYuODc1SDE1VjEzLjEyNVpNMTUgMjMuNDM3NVYxOS42ODc1SDIwLjYyNVYyMy40Mzc1SDE1Wk0xOC43NSAzNC42ODc1VjI4LjEyNUMxOC43NTU5IDI3Ljg3ODIgMTguODU2NiAyNy42NDMyIDE5LjAzMTIgMjcuNDY4N0MxOS4yMDU3IDI3LjI5NDEgMTkuNDQwNyAyNy4xOTM0IDE5LjY4NzUgMjcuMTg3NUgyNS4zMTI1QzI1LjU1OTMgMjcuMTkzNCAyNS43OTQzIDI3LjI5NDEgMjUuOTY4OCAyNy40Njg3QzI2LjE0MzQgMjcuNjQzMiAyNi4yNDQxIDI3Ljg3ODIgMjYuMjUgMjguMTI1VjM0LjY4NzVIMTguNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

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
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiMzRTY2RkYiLz4KPHBhdGggZD0iTTMwLjAyNjYgMTYuMDI2NkMzMC4wODQ3IDE1LjYxOTEgMzAuMDQ3MiAxNS4yMDM2IDI5LjkxNyAxNC44MTMxQzI5Ljc4NjggMTQuNDIyNiAyOS41Njc1IDE0LjA2NzggMjkuMjc2NCAxMy43NzY4QzI4Ljk4NTQgMTMuNDg1NyAyOC42MzA1IDEzLjI2NjQgMjguMjQgMTMuMTM2MkMyNy44NDk1IDEzLjAwNiAyNy40MzQxIDEyLjk2ODQgMjcuMDI2NiAxMy4wMjY2SDExLjAyNjZDMTAuNjE5MSAxMi45Njg0IDEwLjIwMzYgMTMuMDA2IDkuODEzMTQgMTMuMTM2MkM5LjQyMjY1IDEzLjI2NjQgOS4wNjc4MiAxMy40ODU3IDguNzc2NzUgMTMuNzc2OEM4LjQ4NTY5IDE0LjA2NzggOC4yNjYzNyAxNC40MjI2IDguMTM2MTcgMTQuODEzMUM4LjAwNTk2IDE1LjIwMzYgNy45Njg0NSAxNS42MTkxIDguMDI2NTkgMTYuMDI2NlYzMC4wMjY2QzcuOTY4NDUgMzAuNDM0MSA4LjAwNTk2IDMwLjg0OTUgOC4xMzYxNyAzMS4yNEM4LjI2NjM3IDMxLjYzMDUgOC40ODU2OSAzMS45ODU0IDguNzc2NzUgMzIuMjc2NEM5LjA2NzgyIDMyLjU2NzUgOS40MjI2NSAzMi43ODY4IDkuODEzMTQgMzIuOTE3QzEwLjIwMzYgMzMuMDQ3MiAxMC42MTkxIDMzLjA4NDcgMTEuMDI2NiAzMy4wMjY2SDI3LjAyNjZDMjcuNDM0MSAzMy4wODQ3IDI3Ljg0OTUgMzMuMDQ3MiAyOC4yNCAzMi45MTdDMjguNjMwNSAzMi43ODY4IDI4Ljk4NTQgMzIuNTY3NSAyOS4yNzY0IDMyLjI3NjRDMjkuNTY3NSAzMS45ODU0IDI5Ljc4NjggMzEuNjMwNSAyOS45MTcgMzEuMjRDMzAuMDQ3MiAzMC44NDk1IDMwLjA4NDcgMzAuNDM0MSAzMC4wMjY2IDMwLjAyNjZWMTYuMDI2NlpNMzIuMDI2NiAxOS4zNzY2VjI2Ljc3NjZMMzYuNTc2NiAyOS40MjY2QzM2Ljg0MSAyOS42MDk5IDM3LjEyNjQgMjkuNzYwOSAzNy40MjY2IDI5Ljg3NjZDMzcuNjYzNyAyOS45NzczIDM3LjkxOSAzMC4wMjg0IDM4LjE3NjYgMzAuMDI2NkMzOC40MzA0IDI5Ljk5NzkgMzguNjgxMyAyOS45NDc3IDM4LjkyNjYgMjkuODc2NkMzOS4yODU1IDI5LjcyODggMzkuNTg2NyAyOS40Njg2IDM5Ljc4NTEgMjkuMTM1QzM5Ljk4MzQgMjguODAxNCA0MC4wNjgyIDI4LjQxMjUgNDAuMDI2NiAyOC4wMjY2VjE4LjAyNjZDNDAuMDY4MiAxNy42NDA3IDM5Ljk4MzQgMTcuMjUxOCAzOS43ODUxIDE2LjkxODJDMzkuNTg2NyAxNi41ODQ2IDM5LjI4NTUgMTYuMzI0NCAzOC45MjY2IDE2LjE3NjZDMzguNjgxMyAxNi4xMDU0IDM4LjQzMDQgMTYuMDU1MyAzOC4xNzY2IDE2LjAyNjZDMzcuOTE5IDE2LjAyNDggMzcuNjYzNyAxNi4wNzU4IDM3LjQyNjYgMTYuMTc2NkMzNy4xMjY0IDE2LjI5MjMgMzYuODQxIDE2LjQ0MzMgMzYuNTc2NiAxNi42MjY2TDMzLjAyNjYgMTguNzI2NlYxOC43NzY2TDMyLjAyNjYgMTkuMzc2NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

}),
16920: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiMzRTY2RkYiLz4KPHBhdGggZD0iTTMwLjAyNjYgMTYuMDI2NkMzMC4wODQ3IDE1LjYxOTEgMzAuMDQ3MiAxNS4yMDM2IDI5LjkxNyAxNC44MTMxQzI5Ljc4NjggMTQuNDIyNiAyOS41Njc1IDE0LjA2NzggMjkuMjc2NCAxMy43NzY4QzI4Ljk4NTQgMTMuNDg1NyAyOC42MzA1IDEzLjI2NjQgMjguMjQgMTMuMTM2MkMyNy44NDk1IDEzLjAwNiAyNy40MzQxIDEyLjk2ODQgMjcuMDI2NiAxMy4wMjY2SDExLjAyNjZDMTAuNjE5MSAxMi45Njg0IDEwLjIwMzYgMTMuMDA2IDkuODEzMTQgMTMuMTM2MkM5LjQyMjY1IDEzLjI2NjQgOS4wNjc4MiAxMy40ODU3IDguNzc2NzUgMTMuNzc2OEM4LjQ4NTY5IDE0LjA2NzggOC4yNjYzNyAxNC40MjI2IDguMTM2MTcgMTQuODEzMUM4LjAwNTk2IDE1LjIwMzYgNy45Njg0NSAxNS42MTkxIDguMDI2NTkgMTYuMDI2NlYzMC4wMjY2QzcuOTY4NDUgMzAuNDM0MSA4LjAwNTk2IDMwLjg0OTUgOC4xMzYxNyAzMS4yNEM4LjI2NjM3IDMxLjYzMDUgOC40ODU2OSAzMS45ODU0IDguNzc2NzUgMzIuMjc2NEM5LjA2NzgyIDMyLjU2NzUgOS40MjI2NSAzMi43ODY4IDkuODEzMTQgMzIuOTE3QzEwLjIwMzYgMzMuMDQ3MiAxMC42MTkxIDMzLjA4NDcgMTEuMDI2NiAzMy4wMjY2SDI3LjAyNjZDMjcuNDM0MSAzMy4wODQ3IDI3Ljg0OTUgMzMuMDQ3MiAyOC4yNCAzMi45MTdDMjguNjMwNSAzMi43ODY4IDI4Ljk4NTQgMzIuNTY3NSAyOS4yNzY0IDMyLjI3NjRDMjkuNTY3NSAzMS45ODU0IDI5Ljc4NjggMzEuNjMwNSAyOS45MTcgMzEuMjRDMzAuMDQ3MiAzMC44NDk1IDMwLjA4NDcgMzAuNDM0MSAzMC4wMjY2IDMwLjAyNjZWMTYuMDI2NlpNMzIuMDI2NiAxOS4zNzY2VjI2Ljc3NjZMMzYuNTc2NiAyOS40MjY2QzM2Ljg0MSAyOS42MDk5IDM3LjEyNjQgMjkuNzYwOSAzNy40MjY2IDI5Ljg3NjZDMzcuNjYzNyAyOS45NzczIDM3LjkxOSAzMC4wMjg0IDM4LjE3NjYgMzAuMDI2NkMzOC40MzA0IDI5Ljk5NzkgMzguNjgxMyAyOS45NDc3IDM4LjkyNjYgMjkuODc2NkMzOS4yODU1IDI5LjcyODggMzkuNTg2NyAyOS40Njg2IDM5Ljc4NTEgMjkuMTM1QzM5Ljk4MzQgMjguODAxNCA0MC4wNjgyIDI4LjQxMjUgNDAuMDI2NiAyOC4wMjY2VjE4LjAyNjZDNDAuMDY4MiAxNy42NDA3IDM5Ljk4MzQgMTcuMjUxOCAzOS43ODUxIDE2LjkxODJDMzkuNTg2NyAxNi41ODQ2IDM5LjI4NTUgMTYuMzI0NCAzOC45MjY2IDE2LjE3NjZDMzguNjgxMyAxNi4xMDU0IDM4LjQzMDQgMTYuMDU1MyAzOC4xNzY2IDE2LjAyNjZDMzcuOTE5IDE2LjAyNDggMzcuNjYzNyAxNi4wNzU4IDM3LjQyNjYgMTYuMTc2NkMzNy4xMjY0IDE2LjI5MjMgMzYuODQxIDE2LjQ0MzMgMzYuNTc2NiAxNi42MjY2TDMzLjAyNjYgMTguNzI2NlYxOC43NzY2TDMyLjAyNjYgMTkuMzc2NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS44NTU1IDI3LjI2ODVMMTkuMDI2OSAyNC40NDA2TDE2LjE5ODcgMjcuMjY4NUMxNi4xMDU5IDI3LjM2MTUgMTUuOTk1NCAyNy40MzUzIDE1Ljg3NCAyNy40ODU2QzE1Ljc1MjYgMjcuNTM1OSAxNS42MjI2IDI3LjU2MTggMTUuNDkxMiAyNy41NjE4QzE1LjM1OTggMjcuNTYxOCAxNS4yMjk4IDI3LjUzNTkgMTUuMTA4NCAyNy40ODU2QzE0Ljk4NyAyNy40MzUzIDE0Ljg3NjYgMjcuMzYxNSAxNC43ODM3IDI3LjI2ODVDMTQuNTk2MiAyNy4wODEgMTQuNDkwNyAyNi44MjY3IDE0LjQ5MDcgMjYuNTYxNUMxNC40OTA3IDI2LjI5NjQgMTQuNTk2MiAyNi4wNDIxIDE0Ljc4MzcgMjUuODU0NkwxNy42MTI4IDIzLjAyNTVMMTQuNzgzNyAyMC4xOTc1QzE0LjY5MDcgMjAuMTA0NyAxNC42MTY3IDE5Ljk5NDQgMTQuNTY2NCAxOS44NzNDMTQuNTE2MSAxOS43NTE2IDE0LjQ5MDIgMTkuNjIxNSAxNC40OTAyIDE5LjQ5MDFDMTQuNDkwMiAxOS4zNTg2IDE0LjUxNjEgMTkuMjI4NSAxNC41NjY0IDE5LjEwNzFDMTQuNjE2NyAxOC45ODU3IDE0LjY5MDcgMTguODc1NCAxNC43ODM3IDE4Ljc4MjVDMTQuODc2NiAxOC42ODk2IDE0Ljk4NyAxOC42MTU4IDE1LjEwODQgMTguNTY1NUMxNS4yMjk4IDE4LjUxNTIgMTUuMzU5OCAxOC40ODkzIDE1LjQ5MTIgMTguNDg5M0MxNS42MjI2IDE4LjQ4OTMgMTUuNzUyNiAxOC41MTUyIDE1Ljg3NCAxOC41NjU1QzE1Ljk5NTQgMTguNjE1OCAxNi4xMDU5IDE4LjY4OTYgMTYuMTk4NyAxOC43ODI1TDE5LjAyNjkgMjEuNjExNUwyMS44NTU1IDE4Ljc4MjVDMjIuMDQzIDE4LjU5NTEgMjIuMjk3MyAxOC40ODk3IDIyLjU2MjUgMTguNDg5N0MyMi44Mjc3IDE4LjQ4OTcgMjMuMDgyIDE4LjU5NTEgMjMuMjY5NSAxOC43ODI1QzIzLjM2MjUgMTguODc1NCAyMy40MzY1IDE4Ljk4NTcgMjMuNDg2OCAxOS4xMDcxQzIzLjUzNzEgMTkuMjI4NSAyMy41NjMgMTkuMzU4NiAyMy41NjMgMTkuNDkwMUMyMy41NjMgMTkuNjIxNSAyMy41MzcxIDE5Ljc1MTYgMjMuNDg2OCAxOS44NzNDMjMuNDM2NSAxOS45OTQ0IDIzLjM2MjUgMjAuMTA0NyAyMy4yNjk1IDIwLjE5NzVMMjAuNDQxNCAyMy4wMjU1TDIzLjI2OTUgMjUuODU0NkMyMy40NTcgMjYuMDQyMSAyMy41NjI1IDI2LjI5NjQgMjMuNTYyNSAyNi41NjE1QzIzLjU2MjUgMjYuODI2NyAyMy40NTcgMjcuMDgxIDIzLjI2OTUgMjcuMjY4NUMyMy4wODIgMjcuNDU2MSAyMi44Mjc3IDI3LjU2MTUgMjIuNTYyNSAyNy41NjE1QzIyLjI5NzMgMjcuNTYxNSAyMi4wNDMgMjcuNDU2MSAyMS44NTU1IDI3LjI2ODVaIiBmaWxsPSIjRkYwMDAwIi8+Cjwvc3ZnPgo=");

}),
18248: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiNGRjVFMDAiLz4KPHBhdGggZD0iTTI4LjYzODcgMTIuMTk0NkMyOC41NzY2IDEyLjEyNjQgMjguNTAxNCAxMi4wNzE2IDI4LjQxNzUgMTIuMDMzNEMyOC4zMzM2IDExLjk5NTMgMjguMjQyOCAxMS45NzQ2IDI4LjE1MDYgMTEuOTcyN0gxNS44NjA0QzE1LjYxMzQgMTEuOTc2OCAxNS4zNzY1IDEyLjA3MTUgMTUuMTk0OCAxMi4yMzg5QzE1LjA1NDIgMTIuMzk4NCAxNC45NzU1IDEyLjYwMzEgMTQuOTczIDEyLjgxNTdWMzYuMjQyNkMxNC45Njg3IDM2LjM0ODggMTQuOTg2MiAzNi40NTQ3IDE1LjAyNDQgMzYuNTUzOUMxNS4wNjI1IDM2LjY1MzEgMTUuMTIwNSAzNi43NDM0IDE1LjE5NDggMzYuODE5NEMxNS4yNzkgMzYuOTEzNSAxNS4zODE0IDM2Ljk4OTYgMTUuNDk1OCAzNy4wNDNDMTUuNjEwMiAzNy4wOTYzIDE1LjczNDIgMzcuMTI1OSAxNS44NjA0IDM3LjEzSDI4LjE1MDZDMjguMjQyOCAzNy4xMjgxIDI4LjMzMzYgMzcuMTA3NCAyOC40MTc1IDM3LjA2OTNDMjguNTAxNCAzNy4wMzExIDI4LjU3NjYgMzYuOTc2MyAyOC42Mzg3IDM2LjkwODFMMjguNzI3NCAzNi44MTk0QzI4LjgxMzIgMzYuNzUwMyAyOC44ODE5IDM2LjY2MjIgMjguOTI4MSAzNi41NjIyQzI4Ljk3NDIgMzYuNDYyMSAyOC45OTY3IDM2LjM1MjcgMjguOTkzNiAzNi4yNDI2VjEyLjgxNTdDMjguOTkwNyAxMi43MDY2IDI4Ljk2NTUgMTIuNTk5MiAyOC45MTk4IDEyLjVDMjguODc0IDEyLjQwMDggMjguODA4NiAxMi4zMTIgMjguNzI3NCAxMi4yMzg5QzI4LjcxNjMgMTIuMjI2IDI4LjcwMjggMTIuMjE1NCAyOC42ODc1IDEyLjIwNzhDMjguNjcyMyAxMi4yMDAyIDI4LjY1NTcgMTIuMTk1NyAyOC42Mzg3IDEyLjE5NDZaTTE2Ljc5MjEgMjQuNTI5MkMxNi43ODkxIDI0LjQwNiAxNi44MTExIDI0LjI4MzUgMTYuODU2OSAyNC4xNjlDMTYuOTAyNiAyNC4wNTQ2IDE2Ljk3MTEgMjMuOTUwNyAxNy4wNTgzIDIzLjg2MzVDMTcuMTQ1NCAyMy43NzY0IDE3LjI0OTMgMjMuNzA3OSAxNy4zNjM3IDIzLjY2MjFDMTcuNDc4MiAyMy42MTY0IDE3LjYwMDcgMjMuNTk0NCAxNy43MjM5IDIzLjU5NzRDMTcuODQ3MSAyMy41OTQgMTcuOTY5NyAyMy42MTU5IDE4LjA4NDIgMjMuNjYxN0MxOC4xOTg2IDIzLjcwNzUgMTguMzAyNSAyMy43NzYyIDE4LjM4OTQgMjMuODYzNkMxOC41NTY4IDI0LjA0NTMgMTguNjUxNiAyNC4yODIyIDE4LjY1NTYgMjQuNTI5MkMxOC42NTg3IDI0LjY1MjQgMTguNjM2NyAyNC43NzQ5IDE4LjU5MDkgMjQuODg5M0MxOC41NDUyIDI1LjAwMzcgMTguNDc2NiAyNS4xMDc3IDE4LjM4OTUgMjUuMTk0OEMxOC4zMDI0IDI1LjI4MTkgMTguMTk4NCAyNS4zNTA0IDE4LjA4NCAyNS4zOTYyQzE3Ljk2OTYgMjUuNDQxOSAxNy44NDcxIDI1LjQ2NCAxNy43MjM5IDI1LjQ2MDlDMTcuNDc2OSAyNS40NTY5IDE3LjI0IDI1LjM2MjEgMTcuMDU4MyAyNS4xOTQ3QzE2Ljk3MDkgMjUuMTA3OCAxNi45MDIyIDI1LjAwMzkgMTYuODU2NCAyNC44ODk1QzE2LjgxMDYgMjQuNzc1IDE2Ljc4ODcgMjQuNjUyNCAxNi43OTIxIDI0LjUyOTJaTTMxLjk2NjMgMTEuMzUxNkMzMS45Njg4IDExLjA1MDEgMzEuOTA2OCAxMC43NTE2IDMxLjc4NDMgMTAuNDc2MUMzMS42NjE5IDEwLjIwMDYgMzEuNDgxOSA5Ljk1NDQ1IDMxLjI1NjQgOS43NTQyN0MzMS4wNDc0IDkuNTI0ODkgMzAuNzk0MyA5LjMzOTkxIDMwLjUxMjMgOS4yMTAzM0MzMC4yMzAyIDkuMDgwNzUgMjkuOTI1IDkuMDA5MjIgMjkuNjE0OCA5SDE0LjM1MThDMTMuNzEzNSA5LjAyNDA2IDEzLjEwOTIgOS4yOTQzOSAxMi42NjU4IDkuNzU0MjdDMTIuNDUxNyA5Ljk2MDk0IDEyLjI4MjEgMTAuMjA5MyAxMi4xNjc3IDEwLjQ4NEMxMi4wNTMyIDEwLjc1ODcgMTEuOTk2MiAxMS4wNTQgMTIuMDAwMyAxMS4zNTE2VjM2LjI0MjZDMTEuOTk3MiAzNi4zNTI3IDEyLjAxOTcgMzYuNDYyMSAxMi4wNjU4IDM2LjU2MjJDMTIuMTEyIDM2LjY2MjIgMTIuMTgwNyAzNi43NTAzIDEyLjI2NjUgMzYuODE5NEMxMi4zNCAzNi45MTQ2IDEyLjQzNCAzNi45OTIgMTIuNTQxNSAzNy4wNDU3QzEyLjY0OTEgMzcuMDk5NSAxMi43Njc0IDM3LjEyODMgMTIuODg3NyAzNy4xM0gxMi45NzY0QzEzLjA5MDkgMzcuMTMxIDEzLjIwMzggMzcuMTAzMSAxMy4zMDQ3IDM3LjA0ODhDMTMuNDA1NSAzNi45OTQ1IDEzLjQ5MSAzNi45MTU2IDEzLjU1MzIgMzYuODE5NEMxMy42NDk0IDM2Ljc1NzIgMTMuNzI4MyAzNi42NzE3IDEzLjc4MjYgMzYuNTcwOUMxMy44MzY5IDM2LjQ3IDEzLjg2NDggMzYuMzU3MSAxMy44NjM4IDM2LjI0MjZWMTIuMjgzM0MxMy44NjAzIDEyLjEwMiAxMy44OTQgMTEuOTIxOSAxMy45NjI2IDExLjc1NEMxNC4wMzEzIDExLjU4NjIgMTQuMTMzNiAxMS40MzQxIDE0LjI2MzEgMTEuMzA3MkMxNC4zOTM5IDExLjE2NzUgMTQuNTUyIDExLjA1NjEgMTQuNzI3NSAxMC45Nzk4QzE0LjkwMyAxMC45MDM1IDE1LjA5MjIgMTAuODYzOSAxNS4yODM2IDEwLjg2MzVIMjguNjgzQzI4Ljg2ODMgMTAuODYxNCAyOS4wNTE4IDEwLjkgMjkuMjIwNSAxMC45NzY3QzI5LjM4OTIgMTEuMDUzNCAyOS41Mzg5IDExLjE2NjIgMjkuNjU5MiAxMS4zMDcyQzI5LjgwMDIgMTEuNDI3NCAyOS45MTMgMTEuNTc3MiAyOS45ODk3IDExLjc0NTlDMzAuMDY2MyAxMS45MTQ1IDMwLjEwNSAxMi4wOTggMzAuMTAyOCAxMi4yODMzVjM2LjI0MjZDMzAuMDk5OCAzNi4zNTI3IDMwLjEyMjIgMzYuNDYyMSAzMC4xNjg0IDM2LjU2MjJDMzAuMjE0NiAzNi42NjIyIDMwLjI4MzMgMzYuNzUwMyAzMC4zNjkxIDM2LjgxOTRDMzAuNDQyNSAzNi45MTQ2IDMwLjUzNjYgMzYuOTkyIDMwLjY0NDEgMzcuMDQ1N0MzMC43NTE3IDM3LjA5OTUgMzAuODcgMzcuMTI4MyAzMC45OTAyIDM3LjEzSDMxLjA3OUMzMS4xOTkyIDM3LjEyODMgMzEuMzE3NSAzNy4wOTk1IDMxLjQyNTEgMzcuMDQ1N0MzMS41MzI2IDM2Ljk5MiAzMS42MjY3IDM2LjkxNDYgMzEuNzAwMSAzNi44MTk0QzMxLjc4NTkgMzYuNzUwMyAzMS44NTQ2IDM2LjY2MjIgMzEuOTAwOCAzNi41NjIyQzMxLjk0NyAzNi40NjIxIDMxLjk2OTQgMzYuMzUyNyAzMS45NjYzIDM2LjI0MjZWMTEuMzUxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

}),
30129: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSI1MSIgcng9IjExIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMCAyNCkiIGZpbGw9IiMzRjNFM0IiLz4KPHBhdGggZD0iTTE3LjE1NTMgMTIuNjkxOEw5LjE4NjUyIDEyLjY5MThMOS4xODY1MiAxMS4zMzk1TDE3LjE1NTMgMTEuMzM5NUwxNy4xNTUzIDEyLjY5MThaTTEzLjg0NyAxNkwxMi40OTQ4IDE2TDEyLjQ5NDggOC4wMzEyNUwxMy44NDcgOC4wMzEyNUwxMy44NDcgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDEgMTEuNVYxMi41TDMzIDEyLjVWMTEuNUw0MSAxMS41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

}),
44678: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAyNCA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjUxIiByeD0iMTEiIGZpbGw9IiMzRjNFM0IiLz4KPHBhdGggZD0iTTExLjMwODIgMTcuMTU1M1Y5LjE4NjUySDEyLjY2MDVWMTcuMTU1M0gxMS4zMDgyWk04IDEzLjg0N1YxMi40OTQ4SDE1Ljk2ODhWMTMuODQ3SDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMzlWNDBIOFYzOUgxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

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