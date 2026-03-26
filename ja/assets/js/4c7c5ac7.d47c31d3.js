"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["26887"], {
83520: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_edit_delete_ai_event_mdx_4c7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-edit-delete-ai-event-mdx-4c7.json
var site_docs_device_vionyx_webserver_edit_delete_ai_event_mdx_4c7_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/edit-delete-ai-event","title":"AI 이벤트 수정 및 삭제하기","description":"생성한 AI 이벤트의 설정을 수정하거나 불필요한 이벤트를 삭제할 수 있습니다.","source":"@site/docs/device/vionyx_webserver/edit-delete-ai-event.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/edit-delete-ai-event","permalink":"/docs/ja/device/vionyx_webserver/edit-delete-ai-event","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/edit-delete-ai-event.mdx","tags":[],"version":"current","frontMatter":{"id":"edit-delete-ai-event","title":"AI 이벤트 수정 및 삭제하기","description":"생성한 AI 이벤트의 설정을 수정하거나 불필요한 이벤트를 삭제할 수 있습니다.","keywords":["AI 이벤트","관리","설정","삭제"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"인원 카운팅 이벤트 설정하기","permalink":"/docs/ja/device/vionyx_webserver/configure-counting-people"},"next":{"title":"AI 규칙(Rule) 설정하기","permalink":"/docs/ja/device/vionyx_webserver/set-ai-rule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/edit-delete-ai-event.mdx


const frontMatter = {
	id: 'edit-delete-ai-event',
	title: 'AI 이벤트 수정 및 삭제하기',
	description: '생성한 AI 이벤트의 설정을 수정하거나 불필요한 이벤트를 삭제할 수 있습니다.',
	keywords: [
		'AI 이벤트',
		'관리',
		'설정',
		'삭제'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "AI 이벤트 설정 수정하기",
  "id": "ai-이벤트-설정-수정하기",
  "level": 2
}, {
  "value": "AI 이벤트 삭제하기",
  "id": "ai-이벤트-삭제하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamTrash, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamTrash) _missingMdxReference("IcCamTrash", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "생성한 AI 이벤트의 설정을 수정하거나 더 이상 필요하지 않은 이벤트를 삭제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai-이벤트-설정-수정하기",
      children: "AI 이벤트 설정 수정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ai_and_event",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ai_analysis",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/manage-ai-event-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수정하려는 AI 이벤트를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "오른쪽 패널에서 AI 이벤트의 설정을 원하는 대로 수정하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정을 완료한 후 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "update",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이전 화면으로 돌아가며, AI 이벤트 목록에서 수정된 이벤트를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai-이벤트-삭제하기",
      children: "AI 이벤트 삭제하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ai_and_event",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ai_analysis",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/manage-ai-event-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["삭제하려는 AI 이벤트의 오른쪽에 있는 ", (0,jsx_runtime.jsx)(IcCamTrash, {
            title: "delete",
            alone: true
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경고 메시지 팝업이 나타나면 내용을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "삭제한 AI 이벤트는 복구할 수 없습니다. 삭제하기 전에 AI 이벤트가 연동된 규칙(Rule)이 있다면 규칙도 함께 삭제됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "AI 이벤트 삭제 시 시스템 로그에 삭제 이벤트가 기록됩니다."
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