"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["87036"], {
55445: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_tna_report_edit_mdx_5fe_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-tna-report-edit-mdx-5fe.json
var site_docs_platform_biostar_x_tna_report_edit_mdx_5fe_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-report-edit","title":"근태 기록 수정하기","description":"생성된 보고서에서 근태 기록 수정 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/tna-report-edit.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-report-edit","permalink":"/platform/biostar_x/tna-report-edit","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-report-edit.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-report-edit","title":"근태 기록 수정하기","description":"생성된 보고서에서 근태 기록 수정 방법을 안내합니다.","keywords":["근태 기록","수정"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"근태 기록 확인하기","permalink":"/platform/biostar_x/tna-report"},"next":{"title":"근태 관리 설정하기","permalink":"/platform/biostar_x/tna-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/tna-report-edit.mdx


const frontMatter = {
	id: 'tna-report-edit',
	title: '근태 기록 수정하기',
	description: '생성된 보고서에서 근태 기록 수정 방법을 안내합니다.',
	keywords: [
		'근태 기록',
		'수정'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "목록에서 수정하기",
  "id": "목록에서-수정하기",
  "level": 2
}, {
  "value": "달력에서 수정하기",
  "id": "달력에서-수정하기",
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
  }, {Calloutlists, Cmd, IcBw, IcCalc, IcEdit, IcFw, IcList, IcRefresh, IcTrash2, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcCalc) _missingMdxReference("IcCalc", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!IcList) _missingMdxReference("IcList", true);
  if (!IcRefresh) _missingMdxReference("IcRefresh", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "생성된 보고서 테이블을 클릭하면 근태 기록을 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["근태 기록을 수정하려면 보고서를 먼저 생성해야 합니다. 보고서 생성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-report",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "근태 스케줄이 등록되지 않은 사용자의 출퇴근 기록은 수정할 수 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "생성된 보고서 목록에서 기록을 수정할 항목을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 방법에 따라 근태 기록을 수정하거나 부재를 추가하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "목록에서-수정하기",
      children: "목록에서 수정하기"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-edit-list.png"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      className: "svg-none-style",
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timeCard.dateRange",
              product: "2"
            }), ": 목록으로 표시할 근태 기록의 기간을 설정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "일별 근태 기록"
            }), ": 일별 근태 기록을 확인할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["출근/퇴근 시간을 클릭하면 근태 기록을 추가/수정/삭제할 수 있습니다. 출근/퇴근 시간을 클릭한 뒤 ", (0,jsx_runtime.jsx)(IcEdit, {}), " 버튼을 클릭하면 이미 등록된 근태 기록을 수정할 수 있으며, 변경 사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.apply",
                  product: "2"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["부재를 추가하려면 ", (0,jsx_runtime.jsx)(IcEdit, {}), " 버튼을 클릭하세요. 휴가를 추가하려면 부재로 설정된 시간 규칙이 필요합니다. 추가된 사용자 부재의 ", (0,jsx_runtime.jsx)(IcTrash2, {}), "을 클릭하면 삭제할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 기록 요약"
            }), ": 설정한 기간에 따른 근태 기록을 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "새로고침"
            }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "달력으로 보기"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcRefresh, {}), ": 근태 기록 목록을 새로고침합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcCalc, {}), ": 근태 기록을 달력 형식으로 확인할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["시간 규칙 생성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "tna-rule-shift-paycode",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "달력에서-수정하기",
      children: "달력에서 수정하기"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-edit-calendar.png"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      className: "svg-none-style",
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 종류"
            }), ": 이벤트 종류를 선택해 달력에 표시하거나 숨길 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "월"
            }), ": 이전 달이나 다음 달로 이동하려면 ", (0,jsx_runtime.jsx)(IcFw, {}), " 또는 ", (0,jsx_runtime.jsx)(IcBw, {}), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "일별 근태 기록"
            }), ": 일별 근태 기록을 확인할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["근무 시간(흰색)을 클릭하면 근태 기록을 추가/수정/삭제할 수 있습니다. ", (0,jsx_runtime.jsx)(IcEdit, {}), " 버튼을 클릭하면 이미 등록된 근태 기록을 수정할 수 있으며, 변경 사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.apply",
                  product: "2"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["근무 규칙(회색)을 클릭하면 사용자 부재 관리를 추가할 수 있습니다. 사용자 부재를 추가하려면 부재로 설정된 시간 규칙이 필요합니다. 추가된 사용자 부재의 ", (0,jsx_runtime.jsx)(IcTrash2, {}), "을 클릭하면 삭제할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 기록 요약"
            }), ": 월별 근태 기록을 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "새로고침"
            }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "목록으로 보기"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcRefresh, {}), ": 근태 기록 목록을 새로고침합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcList, {}), ": 근태 기록을 목록 형식으로 확인할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["시간 규칙 생성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "tna-rule-shift-paycode",
          children: "다음 문서"
        }), "를 참고하세요."]
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