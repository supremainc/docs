"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["47823"], {
52135: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_diff_unlock_lock_schedule_mdx_9d5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-diff-unlock-lock-schedule-mdx-9d5.json
var site_docs_platform_biostar_air_diff_unlock_lock_schedule_mdx_9d5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/diff-unlock-lock-schedule","title":"열림 스케줄과 잠김 스케줄 차이 이해하기","description":"BioStar Air의 열림 스케줄과 잠김 스케줄의 차이를 비교하고 각각의 사용 사례를 소개합니다.","source":"@site/docs/platform/biostar_air/diff-unlock-lock-schedule.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/diff-unlock-lock-schedule","permalink":"/docs/ja/platform/biostar_air/diff-unlock-lock-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/diff-unlock-lock-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"diff-unlock-lock-schedule","title":"열림 스케줄과 잠김 스케줄 차이 이해하기","description":"BioStar Air의 열림 스케줄과 잠김 스케줄의 차이를 비교하고 각각의 사용 사례를 소개합니다.","keywords":["열림 스케줄","잠김 스케줄","스케줄","출입 제어"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"비디오 재생 관련 문제 해결","permalink":"/docs/ja/platform/biostar_air/video-troubleshooting"},"next":{"title":"v2.11","permalink":"/docs/ja/platform/biostar_air/release-notes/v2_11"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/diff-unlock-lock-schedule.mdx


const frontMatter = {
	id: 'diff-unlock-lock-schedule',
	title: '열림 스케줄과 잠김 스케줄 차이 이해하기',
	description: 'BioStar Air의 열림 스케줄과 잠김 스케줄의 차이를 비교하고 각각의 사용 사례를 소개합니다.',
	keywords: [
		'열림 스케줄',
		'잠김 스케줄',
		'스케줄',
		'출입 제어'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "스케줄이 필요한 경우",
  "id": "스케줄이-필요한-경우",
  "level": 2
}, {
  "value": "<Cmd class=\"bold\"></Cmd> vs <Cmd class=\"bold\"></Cmd>",
  "id": "-vs-",
  "level": 2
}, {
  "value": "열림 스케줄",
  "id": "열림-스케줄",
  "level": 2
}, {
  "value": "작동 방식",
  "id": "작동-방식",
  "level": 3
}, {
  "value": "사용 사례",
  "id": "사용-사례",
  "level": 3
}, {
  "value": "최초 인증 후 열림 (선택 사항)",
  "id": "최초-인증-후-열림-선택-사항",
  "level": 3
}, {
  "value": "작동 방식",
  "id": "작동-방식-1",
  "level": 4
}, {
  "value": "사용 사례",
  "id": "사용-사례-1",
  "level": 4
}, {
  "value": "잠김 스케줄",
  "id": "잠김-스케줄",
  "level": 2
}, {
  "value": "작동 방식",
  "id": "작동-방식-2",
  "level": 3
}, {
  "value": "사용 사례",
  "id": "사용-사례-2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
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
  }, {Cmd, DocLink} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "스케줄이-필요한-경우",
      children: "스케줄이 필요한 경우"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "출입문 스케줄은 없어도 괜찮습니다"
      }), ". 대부분의 시설에서는 기본 출입 제어만으로 충분합니다. 인증된 사용자가 크리덴셜을 제시하면 자동으로 출입문이 열리므로, 추가 스케줄 설정 없이도 정상 작동합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래의 상황에서 스케줄을 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 시간에 누구든지 자유롭게 출입할 수 있도록 해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 시간에 모든 사용자의 출입을 차단해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시간대별로 출입 정책을 다르게 적용해야 할 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      }), "의 혼동을 피하려면 각각의 작동 방식과 사용 시점을 명확히 이해해야 합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["출입문 스케줄 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-door-schedules"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-vs-",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), " vs ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      })]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "구분"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "열림 스케줄"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "잠김 스케줄"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "스케줄 시간 중 상태"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "항상 열림"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "항상 잠김"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "인증 필요 여부"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "불필요, 누구든지 자유롭게 출입"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "크리덴셜 인증으로 열 수 없음"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "수동 개방"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "가능"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "사이트 관리자만 가능"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "릴레이 작동"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "계속 작동함"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "작동하지 않음"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "사이트 관리자는 BioStar Air 관리자 포털 또는 모바일 앱에서 지정된 관리자를 의미합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "열림-스케줄",
      children: "열림 스케줄"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "작동-방식",
      children: "작동 방식"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "스케줄 시간 동안 출입문이 항상 열려있으며, 릴레이가 계속 작동합니다. 인증이 필요하지 않으므로 누구든지 자유롭게 출입할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용-사례",
      children: "사용 사례"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "공용 공간의 주 출입문"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "주거 단지 내 공용 편의 시설"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "업무 시간 중 사무실 로비 출입문"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "최초-인증-후-열림-선택-사항",
      children: "최초 인증 후 열림 (선택 사항)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "작동-방식-1",
      children: "작동 방식"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스케줄이 시작되면 출입문이 잠긴 상태로 시작합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "첫 인증 후 첫 번째 인증된 사용자가 크리덴셜을 제시한 순간 출입문이 열립니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스케줄이 끝날 때까지 모든 사용자가 자유롭게 출입할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["최초 인증 후 열림 상태 유지 옵션(", (0,jsx_runtime.jsx)(Cmd, {
          sid: "unlock_after_first_auth",
          product: "air"
        }), ")에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-door-schedules#configuringUnlockSchedules"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "사용-사례-1",
      children: "사용 사례"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "직원이 도착한 후에 고객 입장을 허용하는 소매점"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "첫 직원이 건물을 열면 이후 다른 직원들은 자유롭게 출입할 수 있는 사무실"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시설 담당자가 출입을 개시하면 회원은 자유롭게 이용할 수 있는 멤버십 시설"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "잠김-스케줄",
      children: "잠김 스케줄"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "작동-방식-2",
      children: "작동 방식"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "스케줄 시간 동안 출입문이 항상 잠겨있으며, 릴레이가 작동하지 않습니다. 유효한 크리덴셜을 제시해도 인증으로 열 수 없으며, 사이트 관리자만 수동으로 개방할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용-사례-2",
      children: "사용 사례"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 시간 이후에 엄격히 폐쇄해야 하는 구역"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수영장 또는 체육관, 기타 출입 제한 구역과 같은 시설"
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