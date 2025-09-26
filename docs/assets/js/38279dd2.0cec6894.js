"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3367"], {
18042: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_triger_and_action_mdx_382_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-triger-and-action-mdx-382.json
var site_docs_platform_biostar_x_settings_triger_and_action_mdx_382_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-triger-and-action","title":"작업 조건 및 동작 설정하기","description":"장치, 출입문, 구역에서 특정 이벤트가 발생했을 때 사용자가 원하는 동작을 장치나 BioStar X가 수행하도록 설정할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-triger-and-action.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-triger-and-action","permalink":"/docs/platform/biostar_x/settings-triger-and-action","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-triger-and-action.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-triger-and-action","title":"작업 조건 및 동작 설정하기","description":"장치, 출입문, 구역에서 특정 이벤트가 발생했을 때 사용자가 원하는 동작을 장치나 BioStar X가 수행하도록 설정할 수 있습니다.","keywords":["작업","동작"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"스케줄 설정하기","permalink":"/docs/platform/biostar_x/settings-schedule"},"next":{"title":"이벤트 로그 가져오기","permalink":"/docs/platform/biostar_x/settings-event-log-import"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-triger-and-action.mdx


const frontMatter = {
	id: 'settings-triger-and-action',
	title: '작업 조건 및 동작 설정하기',
	description: '장치, 출입문, 구역에서 특정 이벤트가 발생했을 때 사용자가 원하는 동작을 장치나 BioStar X가 수행하도록 설정할 수 있습니다.',
	keywords: [
		'작업',
		'동작'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "이름 입력",
  "id": "이름-입력",
  "level": 2
}, {
  "value": "스케줄 설정",
  "id": "스케줄-설정",
  "level": 2
}, {
  "value": "퀵 액션으로 사용하기",
  "id": "퀵-액션으로-사용하기",
  "level": 2
}, {
  "value": "장치, 출입문, 고급 출입 통제 선택",
  "id": "select-device-door-advanced-ac",
  "level": 2
}, {
  "value": "작업 조건 이벤트 설정",
  "id": "작업-조건-이벤트-설정",
  "level": 2
}, {
  "value": "동작 설정",
  "id": "동작-설정",
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
  }, {Cmd, IcSet2, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet2) _missingMdxReference("IcSet2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치, 출입문, 구역에서 특정 이벤트가 발생했을 때 사용자가 원하는 동작을 장치나 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "가 수행하도록 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.triggerAndAction.root"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addTriggerAndAction",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면의 안내에 따라 세부 항목을 설정하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-trigger-and-action-add.png"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "이름-입력",
          children: "이름 입력"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": 작업 조건 및 동작 이름을 입력하세요."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "스케줄-설정",
          children: "스케줄 설정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.schedule",
            product: "2"
          }), ": 작업 조건 및 동작이 적용될 스케줄을 설정하세요."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "triggerAction.input",
                  product: "2"
                }), "을 선택해 사용자 정의 조건을 설정할 때 원하는 스케줄이 없다면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.plusAddSchedule",
                  product: "2"
                }), "를 클릭하여 설정하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["스케줄 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-schedule",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "퀵-액션으로-사용하기",
          children: "퀵 액션으로 사용하기"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction",
            product: "2"
          }), "을 설정하면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 메인 화면에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction",
            product: "2"
          }), " 버튼으로 한번에 다수의 출입문을 제어할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.quickAction",
            product: "2"
          }), " 체크박스를 클릭하세요."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["이 기능은 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "triggerAction.schedule",
                  product: "2"
                }), " 옵션이 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Always"
                }), "일 때만 사용할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction",
                  product: "2"
                }), "은 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shell.header.setting"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Custom Interface"
                }), "에서 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction",
                  product: "2"
                }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-custom-interface",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "select-device-door-advanced-ac",
          children: "장치, 출입문, 고급 출입 통제 선택"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이벤트 신호를 보낼 항목을 선택하세요. 각 장치는 여러 개를 선택할 수 있으며, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "와의 연결이 끊어져도 독립적으로 동작합니다."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "고급 출입 통제"
            }), " 항목은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "어드밴스"
            }), " 이상의 라이선스에서만 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "다음 문서"
            }), "를 참고하세요."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "작업-조건-이벤트-설정",
          children: "작업 조건 이벤트 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "조건 이벤트를 설정하세요. 하나 이상의 이벤트를 선택해야 합니다."
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#select-device-door-advanced-ac",
              children: "이전 단계"
            }), "에서 선택한 옵션에 따라 각각 다른 이벤트 목록이 활성화됩니다."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "동작-설정",
          children: "동작 설정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["동작을 수행할 장치를 선택하세요. 동작을 수행할 장치, 출입문, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "의 동작을 선택할 수 있습니다."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.action",
            product: "2"
          }), " 섹션에서는 선택한 조건 이벤트가 발생했을 때 전송할 신호를 설정할 수 있습니다. 이메일로 로그를 전달 받으려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에서 설정할 수 있습니다."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.device",
                  product: "2"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.door",
                  product: "2"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "BioStar X"
                }), " 탭을 클릭하면 동작 섹션의 내용이 변경됩니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["이메일 서버 정보를 설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "BioStar X"
                }), " 탭에서 ", (0,jsx_runtime.jsx)(IcSet2, {}), " 아이콘을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.triggerAction.smtpOption",
                  product: "2"
                }), " 창이 나타나면 이메일 서버 정보를 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.apply",
                  product: "2"
                }), " 버튼을 클릭하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-email-setting#email-contents-setting",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "이메일 서버 정보에 대한 자세한 내용은 시스템 관리자에게 문의하세요."
              }), "\n"]
            }), "\n"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["모든 설정을 완료했다면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " 버튼을 클릭하세요."]
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