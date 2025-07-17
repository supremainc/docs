"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5126"], {
46305: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_initial_setup_guide_mdx_c1e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-initial-setup-guide-mdx-c1e.json
var site_docs_platform_biostar_x_initial_setup_guide_mdx_c1e_namespaceObject = JSON.parse('{"id":"platform/biostar_x/initial-setup-guide","title":"초기 설정 가이드","description":"BioStar X 출입 통제 시스템의 초기 설정부터 운영까지 단계별로 안내합니다.","source":"@site/docs/platform/biostar_x/initial-setup-guide.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/initial-setup-guide","permalink":"/docs/platform/biostar_x/initial-setup-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/initial-setup-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup-guide","title":"초기 설정 가이드","description":"BioStar X 출입 통제 시스템의 초기 설정부터 운영까지 단계별로 안내합니다.","keywords":["초기 설정","장치 등록","출입문 설정","사용자 등록"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"라이선스 키 등록하기","permalink":"/docs/platform/biostar_x/register-license-key"},"next":{"title":"서버 관리하기","permalink":"/docs/platform/biostar_x/manage-server"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/initial-setup-guide.mdx


const frontMatter = {
	id: 'initial-setup-guide',
	title: '초기 설정 가이드',
	description: 'BioStar X 출입 통제 시스템의 초기 설정부터 운영까지 단계별로 안내합니다.',
	keywords: [
		'초기 설정',
		'장치 등록',
		'출입문 설정',
		'사용자 등록'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "장치 등록",
  "id": "장치-등록",
  "level": 2
}, {
  "value": "출입문 등록 및 설정",
  "id": "출입문-등록-및-설정",
  "level": 2
}, {
  "value": "출입 등급 설정",
  "id": "출입-등급-설정",
  "level": 2
}, {
  "value": "출입 그룹 설정",
  "id": "출입-그룹-설정",
  "level": 2
}, {
  "value": "사용자 등록",
  "id": "사용자-등록",
  "level": 2
}, {
  "value": "고급 출입 통제 설정",
  "id": "고급-출입-통제-설정",
  "level": 2
}, {
  "value": "모니터링",
  "id": "모니터링",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {DocLink, Step, Steps} = _components;
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 처음 설치한 후 정상적으로 운영하기 위해 필요한 설정을 단계별로 안내합니다. 각 단계를 순서대로 진행하여 효율적인 출입 통제 환경을 구축하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "장치-등록",
          children: "장치 등록"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 연결할 장치를 등록하세요. 장치에 따른 인증 모드를 따로 구성하거나 각각의 장치에 관리자를 설정할 수 있습니다."]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "또한, 장치에서 발생하는 각종 이벤트(인증 실패, 협박 지문 인증, 안티패스백 위반 등)에 따른 동작을 설정할 수 있습니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-manage-device-group"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-devices"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-wiegand"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-slave-device"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-device-details"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "출입문-등록-및-설정",
          children: "출입문 등록 및 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "장치가 설치된 출입문 정보를 등록하세요. 릴레이, 안티패스백, 이중 인증, 알람 등을 설정할 수 있습니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-manage-door-group"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-door-add"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "출입-등급-설정",
          children: "출입 등급 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "출입 등급은 출입문과 스케줄 정보를 조합하여 생성하며, 하나의 출입 등급에 여러 개의 출입문과 스케줄을 등록할 수 있습니다."
        }), (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/settings-access-control-manage-access-level"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "출입-그룹-설정",
          children: "출입 그룹 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "출입 그룹은 출입 등급(출입문, 스케줄)과 사용자 정보를 조합하여 생성하며, 하나의 출입 그룹에 여러 출입 등급, 사용자를 등록할 수 있습니다."
        }), (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/settings-access-control-manage-access-group"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "사용자-등록",
          children: "사용자 등록"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 정보와 지문 등 출입 통제에 사용될 정보를 등록하세요. 사용자 정보는 장치에서 직접 등록하거나 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "가 동작 중인 서버에서 등록할 수 있습니다. 또한, 장치에서 등록된 사용자 정보를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "로 가져오거나, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에서 등록된 사용자 정보를 장치로 전송할 수 있습니다."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/user-group-manage"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/user-manage"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/add-user"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/enroll-credential"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "고급-출입-통제-설정",
          children: "고급 출입 통제 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "안티패스백, 화재 경보 구역 등을 설정할 수 있으며, 화재 경보 구역은 로컬 구역과 글로벌 구역을 설정할 수 있습니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-advanced-ac"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-map"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "어드밴스"
            }), " 이상의 라이선스에서만 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "다음 문서"
            }), "를 참고하세요."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "모니터링",
          children: "모니터링"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문, 맵, 장치, 이벤트 등 다양한 모니터링 기능을 통해 실시간으로 출입 통제 시스템을 관리할 수 있습니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-door"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-map"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-device"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-event"
            }), "\n"]
          }), "\n"]
        })]
      })]
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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