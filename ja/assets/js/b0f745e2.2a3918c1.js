"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["97805"], {
69069: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_mdx_b0f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-control-door-mdx-b0f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_mdx_b0f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-door","title":"出入ドアを制御する","description":"出入ドアを制御し、詳細情報を確認してください。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-door","permalink":"/docs/ja/platform/biostar_x/control-door","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-door.mdx","tags":[],"version":"current","frontMatter":{"id":"control-door","title":"出入ドアを制御する","description":"出入ドアを制御し、詳細情報を確認してください。","keywords":["モニタリング","ドア"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ドア状態を確認","permalink":"/docs/ja/platform/biostar_x/check-door-status"},"next":{"title":"スレーブ装置を制御する","permalink":"/docs/ja/platform/biostar_x/control-door-slave-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door.mdx


const frontMatter = {
	id: 'control-door',
	title: '出入ドアを制御する',
	description: '出入ドアを制御し、詳細情報を確認してください。',
	keywords: [
		'モニタリング',
		'ドア'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*이런 경우 화면에 탭을 추가하고 <Cmd sid='arena.tree.contextMenu.openVideo' />를 다시 클릭하세요.*/


const toc = [{
  "value": "ドア開放",
  "id": "door-open",
  "level": 2
}, {
  "value": "ドア解除",
  "id": "door-unlock",
  "level": 2
}, {
  "value": "ドアロック",
  "id": "door-lock",
  "level": 2
}, {
  "value": "ドアカメラ確認",
  "id": "door-camera",
  "level": 2
}, {
  "value": "アラーム解除",
  "id": "alarm-reset",
  "level": 2
}, {
  "value": "APB解除",
  "id": "apb-reset",
  "level": 2
}, {
  "value": "警備設定および解除",
  "id": "警備設定および解除",
  "level": 2
}, {
  "value": "詳細情報確認",
  "id": "detail-view",
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
  }, {Cmd, Glossary, IcArm, IcDisarm, IcRelayLock, IcRelayUnlock, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!IcArm) _missingMdxReference("IcArm", true);
  if (!IcDisarm) _missingMdxReference("IcDisarm", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "出入ドアを制御する方法を説明します。 出入ドアを一定時間ロックしたり、出入ドアに接続されたカメラを確認したり、発生したアラームを解除できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "出入ドアをリモートで制御して、出入を管理してください。 特定時間、出入ドアを解放またはロック状態に設定できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "出入ドアに接続されたカメラを通じてリアルタイムで出入状況をモニタリングできます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#apb",
            children: "アンチパスバック"
          }), " 機能により、不正侵入をブロックし、入退室履歴を正確に管理できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " を選択してください。 制御したい出入ドアを選択し、右クリックしてください。 ポップアップメニューで必要な機能を選択できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアの状態をモニタリングまたは制御するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.logUploadType",
              product: "2"
            }), " 機能を有効にする必要があります。 この機能は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.server"
            }), " のメニュー経路にある ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.general",
              product: "2"
            }), " セクションで有効化できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.openVideo"
            }), " オプションは、VMSと連携しており、ドアとカメラが連係されている必要があります。 また、この機能は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アドバンス"
            }), " (Advanced) 以上のライセンスで追加オプションとして利用できます。 ライセンスポリシーの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "以下"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-open",
      children: "ドア開放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["開放状態のドアは誰でも出入りできます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.unlock"
      }), " をクリックし、必要なオプションを選択してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockOnce"
          }), "：ドアを一度だけ開放します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockTimed"
          }), "：一定時間ドアを開放します。 希望する時間を秒（second）単位で入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockPermanent"
          }), "：時間に関係なくドアを開放します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアを開放すると、ドアリレーアイコンが ", (0,jsx_runtime.jsx)(IcRelayLock, {}), " から ", (0,jsx_runtime.jsx)(IcRelayUnlock, {}), " に変わります。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["外部の来客時にドアを一時的に開放して、便利に出入りできます。 ドアを開放した後は、必ず ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), " 状態に戻してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-unlock",
      children: "ドア解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " 状態にすると、許可されたユーザーだけが出入りできます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " をクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-lock",
      children: "ドアロック"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " 状態にすると、誰も出入りできません。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " をクリックし、必要なオプションを選択してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockTimed"
          }), "：一定時間ドアをロック状態にします。 希望する時間を秒（second）単位で入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.lockPermanent"
          }), "：時間に関係なくドアをロック状態にします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-camera",
      children: "ドアカメラ確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアに接続されたカメラを確認できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " をクリックしてください。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " セクションのビデオタイルに選択したカメラの映像を追加して再生できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["また、目的のカメラを選択して右クリックしてください。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " をクリックすると、選択したカメラの映像を追加して再生できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-camera-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ドアに接続されているカメラが1台以上ある場合、最初に接続されたカメラがビデオタイルに表示されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ビデオタイルは画面左上から順に追加され、現在の画面に追加スペースがない場合はエラーメッセージが表示されます。 "
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ビデオモニタリングの詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アドバンス"
            }), "（Advanced）ライセンス以上で、追加オプションにより使用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm-reset",
      children: "アラーム解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアで発生したアラームを解除できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " をクリックしてください。 画面右上にアラームメッセージが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-reset",
      children: "APB解除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "アンチパスバック違反が発生した場合、APBアラームを解除できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.clearApb"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.clearApb"
          }), " ウィンドウが表示されたら、アンチパスバック違反ユーザーの一覧を確認します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-door-monitoring-disable-apb.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザーを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面右上に完了メッセージが表示されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Glossary, {
            termid: "apb"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["出入口に", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アンチパスバック"
            }), "を設定する方法の詳細は、", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-door-add#antipassback",
              children: "以下の文書"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "警備設定および解除",
      children: "警備設定および解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["出入口が警備モードに設定されている場合、警備を有効化または解除します。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), " をクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-arm-status.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["警備状態のドアでは、警備状態アイコンが ", (0,jsx_runtime.jsx)(IcDisarm, {}), " から ", (0,jsx_runtime.jsx)(IcArm, {}), " に変わります。 このとき、該当するアクセス制御設定にも ", (0,jsx_runtime.jsx)(IcArm, {}), " アイコンが適用されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["この機能は、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "アドバンス"
        }), "（Advanced）ライセンスで追加オプションを購入するか、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "エンタープライズ"
        }), "（Enterprise）ライセンス以上で利用できます。 ライセンスポリシーの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing",
          children: "以下"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "詳細情報確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアの詳細情報とイベント発生履歴を確認できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " をクリックしてください。 画面右側にドアの詳細情報とイベント発生履歴が表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-view-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ドアの詳細情報"
          }), "：ドアの名前、位置、状態、接続されているサブデバイス情報などを確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), "：選択したドアで発生した最近のイベント一覧を確認できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ドア詳細情報セクションの各項目について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-door-add",
          children: "次の文書"
        }), "を参照してください。"]
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