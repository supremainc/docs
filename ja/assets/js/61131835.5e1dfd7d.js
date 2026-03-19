"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["84704"], {
94476: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_door_status_mdx_611_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-monitoring-door-status-mdx-611.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_door_status_mdx_611_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-door-status","title":"ドアの状態を監視する","description":"BioStar Airのウェブポータルとモバイルアプリを使用して、ドアの状態をリアルタイムで監視し、施錠をリモートで制御し、ドアのアクセスを管理する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-door-status.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-door-status","permalink":"/docs/ja/platform/biostar_air/monitoring-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/monitoring-door-status.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-door-status","title":"ドアの状態を監視する","description":"BioStar Airのウェブポータルとモバイルアプリを使用して、ドアの状態をリアルタイムで監視し、施錠をリモートで制御し、ドアのアクセスを管理する方法を説明します。","keywords":["モニタリング","ドアの状態","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"アラートとレポート履歴の確認用ガイド","permalink":"/docs/ja/platform/biostar_air/monitoring-alert-report-history"},"next":{"title":"ロールコール","permalink":"/docs/ja/platform/biostar_air/managing-roll-call-fire-muster"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-door-status.mdx


const frontMatter = {
	id: 'monitoring-door-status',
	title: 'ドアの状態を監視する',
	description: 'BioStar Airのウェブポータルとモバイルアプリを使用して、ドアの状態をリアルタイムで監視し、施錠をリモートで制御し、ドアのアクセスを管理する方法を説明します。',
	keywords: [
		'モニタリング',
		'ドアの状態',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "出入口の状態モニタリング",
  "id": "monitoringWebPortal",
  "level": 2
}, {
  "value": "ドアの解錠",
  "id": "remotely-unlocking-a-door",
  "level": 3
}, {
  "value": "常時開放モードの設定",
  "id": "alwaysOpenMode",
  "level": 3
}, {
  "value": "施錠モードの設定",
  "id": "lockMode",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, DocLink, IcAirMore, Image, TabItem, Tabs, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirMore) _missingMdxReference("IcAirMore", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airシステムに接続されているドアの状態をリアルタイムで監視できます。 管理者はドアの施錠／解錠状態やリレーセンサーの状態を確認し、ドアを施錠または解錠してリモートでドアのアクセスを制御できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "ドアの状態監視に関するビデオガイドを見るには、以下の動画を参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "_nxSRwst480"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoringWebPortal",
      children: "出入口の状態モニタリング"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar Airのウェブポータルでドアの状態を監視できます。 画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_submenu",
            product: "air"
          }), " をクリックします。 BioStar Airに登録されたドアの一覧を確認できます。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status.png"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "各ドアでは以下の項目を確認できます。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column2",
                product: "air"
              }), "：ドアの施錠/解錠状態を表示します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column3",
                product: "air"
              }), "：ドアが物理的に開いているか閉じているかを表示します。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル端末でBioStar Airアプリを使ってドアの状態を確認できます。"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-monitoring-door-status.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "モバイル端末でBioStar Airアプリを起動してログインします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["初期画面の下部にある ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "monitoring_menu",
                product: "air"
              }), " をタップします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_submenu",
                product: "air"
              }), " カードをタップします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Airに登録されたドアの一覧を確認できます。"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["出入口の登録と管理の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-registered-doors"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remotely-unlocking-a-door",
      children: "ドアの解錠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアがオンラインでBioStar Airに接続されている場合、リモートで解錠できます。"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column4",
                product: "air"
              }), " 列で ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_open_btn",
                product: "air"
              }), " ボタンをクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column2",
                product: "air"
              }), " 列の状態が解錠に変更され、成功メッセージが表示されます。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-monitoring-door-status-open-door.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "設定された時間が経過すると、ドアは再び施錠状態に戻ります。"
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-mobile-monitoring-door-open.png"
            })
          }), (0,jsx_runtime.jsx)(Column, {
            className: "padding--l20",
            children: (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["遠隔で出入口を解錠するには、", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "door_open_btn",
                    product: "air"
                  }), " ボタンをタップします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "画面下部に成功メッセージが表示されます。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "設定された時間が経過すると、ドアは再び施錠状態に戻ります。"
                }), "\n"]
              }), "\n"]
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["出入口が開いたままの時間を設定する方法については、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-registered-doors#editingDoors"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alwaysOpenMode",
      children: "常時開放モードの設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアを無期限に開放状態にできます。 訪問者や一時的な入場が必要な場合に便利です。"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ドア一覧で開放状態にするドアの最も右にある ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " ボタンをクリックします。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-monitoring-door-status-more-func.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_unlock_mode",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column4",
                product: "air"
              }), " 列に ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_control_unlocked_description",
                product: "air"
              }), " として状態が変更されます。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status-control-always-open.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["正常な動作に戻すには ", (0,jsx_runtime.jsx)(IcAirMore, {
            title: "Control"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "release_icon_tooltip",
            product: "air"
          }), " をクリックします。"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-mobile-monitoring-door-status-control.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l20",
            children: [(0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["ドアの最も右にある ", (0,jsx_runtime.jsx)(IcAirMore, {
                    title: "Control"
                  }), " ボタンをタップします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    en: "Door Info and Control",
                    children: "出入口情報と制御"
                  }), " オプションが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
                    en: "Unlock",
                    children: "常時開放モード"
                  }), " をタップします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "画面下部に成功メッセージが表示されます。"
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsxs)(_components.p, {
              children: ["正常な動作に戻すには ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "release_icon_tooltip",
                product: "air"
              }), " をタップします。"]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lockMode",
      children: "施錠モードの設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "現在のスケジュールに関係なくドアを施錠状態に維持できます。 セキュリティを強化する必要がある場合に有用です。"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ドア一覧で施錠状態にするドアの最も右にある ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " ボタンをクリックします。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-monitoring-door-status-more-func.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_lock_mode",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column4",
                product: "air"
              }), " 列に ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_control_locked_description",
                product: "air"
              }), " として状態が変更されます。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status-control-lock-mode.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["正常な動作に戻すには ", (0,jsx_runtime.jsx)(IcAirMore, {
            title: "Control"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "release_icon_tooltip",
            product: "air"
          }), " をクリックします。"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-mobile-monitoring-door-lock-mode.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l20",
            children: [(0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["ドアの最も右にある ", (0,jsx_runtime.jsx)(IcAirMore, {
                    title: "Control"
                  }), " ボタンをタップします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    en: "Door Info and Control",
                    children: "出入口情報と制御"
                  }), " オプションが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "event_log_lock_mode",
                    product: "air"
                  }), " をタップします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "画面下部に成功メッセージが表示されます。"
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsxs)(_components.p, {
              children: ["正常な動作に戻すには ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "release_icon_tooltip",
                product: "air"
              }), " をタップします。"]
            })]
          })]
        })
      })]
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