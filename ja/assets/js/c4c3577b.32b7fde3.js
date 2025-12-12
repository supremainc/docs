"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["17196"], {
32668: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_slave_device_mdx_c4c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-control-door-slave-device-mdx-c4c.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_slave_device_mdx_c4c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-door-slave-device","title":"スレーブ装置を制御する","description":"ドアに接続された装置を制御する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door-slave-device.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-door-slave-device","permalink":"/docs/ja/platform/biostar_x/control-door-slave-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-door-slave-device.mdx","tags":[],"version":"current","frontMatter":{"id":"control-door-slave-device","title":"スレーブ装置を制御する","description":"ドアに接続された装置を制御する方法を案内します。","keywords":["モニタリング","ドア","スレーブ装置"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"出入ドアを制御する","permalink":"/docs/ja/platform/biostar_x/control-door"},"next":{"title":"エレベーターを制御","permalink":"/docs/ja/platform/biostar_x/control-elevator"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door-slave-device.mdx


const frontMatter = {
	id: 'control-door-slave-device',
	title: 'スレーブ装置を制御する',
	description: 'ドアに接続された装置を制御する方法を案内します。',
	keywords: [
		'モニタリング',
		'ドア',
		'スレーブ装置'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ドアリレー装置の制御",
  "id": "control-relay",
  "level": 2
}, {
  "value": "リレー開放",
  "id": "relay-open",
  "level": 3
}, {
  "value": "リレー解除",
  "id": "relay-release",
  "level": 3
}, {
  "value": "リレー施錠",
  "id": "relay-lock",
  "level": 3
}, {
  "value": "ドア警備装置の制御",
  "id": "control-arm",
  "level": 2
}, {
  "value": "ドアカメラ装置の制御",
  "id": "control-camera",
  "level": 2
}, {
  "value": "カメラ映像の確認",
  "id": "camera-video",
  "level": 3
}, {
  "value": "カメラ詳細情報の確認",
  "id": "camera-detail",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Glossary, IcRelayLock, IcRelayUnlock, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ドアに接続された装置を簡単に制御できるよう、本ドキュメントでは装置ごとの制御方法を案内します。 ドアリレーでの施錠/解錠、カメラ映像および詳細情報の確認、警備状態の操作など、さまざまな機能を利用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " タブでドアを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "サブリストで接続された装置を選択し、右クリックしてください。 ポップアップメニューで必要な機能を選択できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-relay",
      children: "ドアリレー装置の制御"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアに接続されたリレー装置を制御できます。 リレー装置で右クリックしてください。 ポップアップメニューで必要な機能を選択できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-relay-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "relay"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-open",
      children: "リレー開放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアに接続されたリレー装置を通じてドアの施錠を解除できます。 開放状態のドアは誰でも出入りできます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
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
      children: ["ドアリレーを開放すると、ドアリレーアイコンが ", (0,jsx_runtime.jsx)(IcRelayLock, {}), " から ", (0,jsx_runtime.jsx)(IcRelayUnlock, {}), " に変わります。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["この機能により、外部の来訪者があるときにドアを一時的に開放し、便利に出入りできます。 ドアを開放した後は、必ず ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), " 状態に戻してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-release",
      children: "リレー解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアに接続されたリレー装置を通じてドアを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " 状態に変更すると、許可されたユーザーだけが出入りできます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " をクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-lock",
      children: "リレー施錠"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアに接続されたリレー装置を通じてドアを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " 状態に変更すると、誰も出入りできません。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
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
      id: "control-arm",
      children: "ドア警備装置の制御"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアに接続された警備装置を通じて、ドアを警備状態に設定または解除できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-arm-popup.png",
      className: "none"
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
      id: "control-camera",
      children: "ドアカメラ装置の制御"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアに接続されたカメラ装置を制御できます。 カメラ装置の映像をリアルタイムで確認したり、詳細情報を確認したりできます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-camera-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "この機能を使用するには、ドアにカメラが接続されている必要があります。 ドアとカメラの連携方法については［次のドキュメント］(settings-videos-rule) を参照してください。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera-video",
      children: "カメラ映像の確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["カメラ装置の映像をリアルタイムで確認するには、ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " をクリックしてください。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " セクションのビデオタイルに選択したカメラの映像を追加して再生できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-camera-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera-detail",
      children: "カメラ詳細情報の確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["カメラの詳細情報を確認するには、ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " をクリックしてください。 画面の右側にカメラの詳細情報が表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-camera-details.png"
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