"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["79755"], {
6688: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_tna_rule_shift_overtime_mdx_aae_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-tna-rule-shift-overtime-mdx-aae.json
var site_docs_platform_biostar_x_tna_rule_shift_overtime_mdx_aae_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-shift-overtime","title":"기타 근무 규칙 설정하기","description":"일일 근무 규칙에 연장 근무 시간 규칙을 추가하지 않았을 때 유용하게 사용할 수 있는 기타 근무 규칙 추가 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/tna-rule-shift-overtime.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-shift-overtime","permalink":"/platform/biostar_x/tna-rule-shift-overtime","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-shift-overtime.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-shift-overtime","title":"기타 근무 규칙 설정하기","description":"일일 근무 규칙에 연장 근무 시간 규칙을 추가하지 않았을 때 유용하게 사용할 수 있는 기타 근무 규칙 추가 방법을 안내합니다.","keywords":["기타 근무 규칙","연장 근무"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"주간 근무 규칙 설정하기","permalink":"/platform/biostar_x/tna-rule-shift-schedule"},"next":{"title":"근무 스케줄 설정하기","permalink":"/platform/biostar_x/tna-rule-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/tna-rule-shift-overtime.mdx


const frontMatter = {
	id: 'tna-rule-shift-overtime',
	title: '기타 근무 규칙 설정하기',
	description: '일일 근무 규칙에 연장 근무 시간 규칙을 추가하지 않았을 때 유용하게 사용할 수 있는 기타 근무 규칙 추가 방법을 안내합니다.',
	keywords: [
		'기타 근무 규칙',
		'연장 근무'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "설정 옵션 안내",
  "id": "설정-옵션-안내",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), "에 연장 근무 시간 규칙을 추가하지 않았을 때 유용하게 사용할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), "에서 설정하는 연장 근무는 시작 시간과 종료 시간을 갖고 있으나 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), "은 정규 근무 시간 범위를 넘어선 총 시간을 계산합니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), "은 일별/주별/월별 총 연장 근무 시간으로 관리할 때 편리하게 사용할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), "을 설정하면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), "에 추가된 연장 근무 시간 규칙 대신 적용됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.addRule",
        product: "2",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.addRule",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-overtime.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.addRule",
            product: "2"
          }), " 화면이 나타나면 각 항목을 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설정을 저장하려면 화면 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이어서 근무 스케줄을 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.applyAndAddShift",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설정을 저장한 후 다른 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "rule.rule",
              product: "2"
            }), "을 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "설정-옵션-안내",
      children: "설정 옵션 안내"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), "을 설정하세요. 일별, 주별, 월별 단위로 적용할 연장 근무 규칙을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-overtime-adding.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.name",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), "의 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.description",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), "에 대한 설명을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.overtime",
            product: "2"
          }), ": 일별, 주별, 월별 단위로 정규 근무 시간 이후 적용할 연장 근무 규칙을 선택하세요. 일정 시간 이후에 다른 연장 근무 규칙을 적용할 수 있습니다. 최대 연장 근무 시간을 설정하여 근로자가 일할 수 있는 연장 근무 시간을 제한할 수도 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "tip",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["아래와 같이 설정하면 정규 근무 시간이 오전 8시에서 오후 5시일 때 오후 5시부터 오후 11시까지 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overtime(1.5)"
            }), " 시간 규칙이 적용되며, 오후 11시부터 오전 2시까지 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overtime(2)"
            }), " 시간 규칙이 적용됩니다. 또한, 하루 일할 수 있는 최대 초과 근무 시간이 9시간으로 제한되어 오전 2시까지 일한 기록만 사용하여 하루 급여를 계산합니다."]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-overtime-example.png"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "총 근무 시간은 휴식 시간이나 식사 시간을 포함하지 않습니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.weekendOvertime",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.holidayOvertime",
            product: "2"
          }), ": 주말 또는 휴일에 적용할 근무 규칙을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "payCode.payCode",
                product: "2"
              }), ": 적용할 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "tab.payCode",
                product: "2",
                className: "normal"
              }), "을 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.dayStartTime",
                product: "2"
              }), ": 근무 시작 시간을 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "rule.firstInLastOut",
                product: "2"
              }), ": 가장 처음 사용자가 인증한 시간을 출근 시간으로 기록하며, 가장 마지막에 사용자가 인증한 시간을 퇴근 시간으로 기록합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "tna-rule-schedule",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "기간, 사용자, 기타 근무 규칙, 휴가 일정을 구성하여 근무 스케줄 설정 방법을 안내합니다."
        })
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