"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["7250"], {
"4485": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_control_zone_mdx_f5b_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-control-zone-mdx-f5b.json
var site_docs_platform_biostar_x_control_zone_mdx_f5b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-zone","title":"구역 제어하기","description":"구역을 제어하고 상세 정보를 확인하세요.","source":"@site/docs/platform/biostar_x/control-zone.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-zone","permalink":"/docs/platform/biostar_x/control-zone","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-zone.mdx","tags":[],"version":"current","frontMatter":{"id":"control-zone","title":"구역 제어하기","description":"구역을 제어하고 상세 정보를 확인하세요.","keywords":["모니터링","구역"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"구역 점검하기","permalink":"/docs/platform/biostar_x/check-zone-status"},"next":{"title":"맵 모니터링하기","permalink":"/docs/platform/biostar_x/monitoring-map"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/control-zone.mdx


const frontMatter = {
	id: 'control-zone',
	title: '구역 제어하기',
	description: '구역을 제어하고 상세 정보를 확인하세요.',
	keywords: [
		'모니터링',
		'구역'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "APB 해제",
  "id": "apb-release",
  "level": 2
}, {
  "value": "알람 해제",
  "id": "alarm",
  "level": 2
}, {
  "value": "구역 활성화/비활성화",
  "id": "zone-revitalizationdisabled",
  "level": 2
}, {
  "value": "경비 구역 제어",
  "id": "security-zone-control",
  "level": 2
}, {
  "value": "소집 구역 보고서 확인",
  "id": "confirmation-of-muster-reports",
  "level": 2
}, {
  "value": "재실 인원 제한 구역 모니터링",
  "id": "monitoring-of-restrictions-on-the-number-of-people",
  "level": 2
}, {
  "value": "상세 정보 확인",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcDisable} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "구역을 제어하는 방법을 안내합니다. 제공하는 기능을 통해 문제 발생 시 빠르게 대처할 수 있고, 구역을 효율적으로 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.header.arena"
          }), "을 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.header.arena"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " 탭에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allZones"
          }), "으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 구역을 선택하고 오른쪽 마우스 버튼을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "구역의 종류에 따라 제공하는 기능이 다릅니다. 구역의 종류는 다음과 같습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "안티패스백"
            }), " 구역"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "화재 경보 구역"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "스케쥴 잠금/개방 구역"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "경비 구역"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "인터락 구역"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "소집 구역"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "재실 인원 제한 구역"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["각 구역에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-release",
      children: "APB 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "안티패스백"
      }), " 구역의 APB 알람을 해제할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearApb"
      }), "를 클릭하세요. 화면 오른쪽 위에 완료 메시지가 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.clearApb"
            }), " 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "안티패스백"
            }), " 구역에서만 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["구역에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "안티패스백"
            }), "을 설정하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "안티패스백"
            }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../reference/glossary#apb",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm",
      children: "알람 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["해당 구역에서 발생한 알람을 해제할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), "를 클릭하세요. 화면 오른쪽 위에 완료 메시지가 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.clearAlarm"
        }), " 기능은 재실 인원 제한 구역에서는 사용할 수 없습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zone-revitalizationdisabled",
      children: "구역 활성화/비활성화"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["구역을 활성화하거나 사용하지 않는 구역은 비활성화할 수 있습니다. 비활성화된 구역은 ", (0,jsx_runtime.jsx)(IcDisable, {
        width: "20px",
        height: "20px"
      }), " 아이콘이 표시됩니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.enable"
      }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disable"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-zone-control",
      children: "경비 구역 제어"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["경비 구역의 경비 상태를 제어할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.arm"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.disarm"
            }), " 기능은 경비 구역에서만 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["경비 구역 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "confirmation-of-muster-reports",
      children: "소집 구역 보고서 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["소집 구역에 대한 보고서를 확인하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.musterReport"
      }), "를 클릭하세요. 새 창이 열리면 소집 구역에 대한 보고서를 확인할 수 있는 페이지로 이동합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.musterReport"
            }), " 기능은 소집 구역에서만 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["소집 구역 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-of-restrictions-on-the-number-of-people",
      children: "재실 인원 제한 구역 모니터링"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["재실 인원 제한 구역에 대한 상태를 확인할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.occupancyMonitoring"
      }), "을 클릭하세요. 새 창이 열리면 재실 인원 제한 구역을 모니터링하는 페이지로 이동합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.occupancyMonitoring"
            }), " 기능은 재실 인원 제한 구역에서만 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["재실 인원 제한 구역 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "상세 정보 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["구역에 대한 상세 정보와 이벤트 발생 이력을 확인할 수 있습니다. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), "를 클릭하세요. 화면 오른쪽에 구역 상세 정보와 이벤트 발생 이력이 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "구역 상세 정보"
          }), ": 구역의 이름, 위치, 상태 정보 등을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": 선택한 구역에서 발생한 최근 이벤트 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["구역 상세 정보 섹션의 각 항목에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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