"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4366"], {
79607: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_lockoverride_mdx_4b8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-lockoverride-mdx-4b8.json
var site_docs_platform_biostar_x_lockoverride_mdx_4b8_namespaceObject = JSON.parse('{"id":"platform/biostar_x/lockoverride","title":"비상 개방 허용하기","description":"비상 상황에서 특정 사용자의 카드 크리덴셜에 출입을 허용하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/lockoverride.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/lockoverride","permalink":"/docs/en/platform/biostar_x/lockoverride","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/lockoverride.mdx","tags":[],"version":"current","frontMatter":{"id":"lockoverride","title":"비상 개방 허용하기","description":"비상 상황에서 특정 사용자의 카드 크리덴셜에 출입을 허용하는 방법을 안내합니다.","keywords":["비상","개방","출입"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"Face Migration","permalink":"/docs/en/platform/biostar_x/migration-face"},"next":{"title":"Monitoring","permalink":"/docs/en/platform/biostar_x/how-to-guide-monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/lockoverride.mdx


const frontMatter = {
	id: 'lockoverride',
	title: '비상 개방 허용하기',
	description: '비상 상황에서 특정 사용자의 카드 크리덴셜에 출입을 허용하는 방법을 안내합니다.',
	keywords: [
		'비상',
		'개방',
		'출입'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "비상 개방 권한 설정하기",
  "id": "비상-개방-권한-설정하기",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "특정 사용자의 출입 카드에 비상 개방 권한을 부여하여 비상 상황에서 출입을 허용할 수 있습니다. 비상 개방 권한이 부여된 사용자는 출입 카드로 모든 출입문을 개방할 수 있으며, 출입문이 개방된 상태에서는 누구나 출입할 수 있습니다. 비상 개방 권한은 사용자를 새로 추가하거나 수정할 때 카드 크리덴셜을 통해서 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["비상 개방 권한을 설정하기 전에 카드 크리덴셜을 우선 추가해야 합니다. 카드 크리덴셜을 추가 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "enroll-credential-card",
        children: "다음 문서"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카드 크리덴셜을 제외한 다른 크리덴셜은 지원하지 않습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치에 따라 비상 개방 기능을 지원하지 않을 수 있습니다. 지원하는 장치와 펌웨어 버전은 아래를 참고하세요."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "BioStation 3 펌웨어 v1.4.0 이상"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비상-개방-권한-설정하기",
      children: "비상 개방 권한 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 목록에서 비상 개방 권한을 설정할 사용자를 더블 클릭하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["또는 사용자를 선택하고 오른쪽 화면에 표시되는 프로필에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 프로필 화면이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.title"
          }), " 섹션으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["비상 개방을 허용할 카드 크리덴셜의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.lockOverride"
          }), " 항목의 체크박스를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-credential-set-emergency-opening.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경고 메시지 창이 나타나면 내용을 확인 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.continue"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-credential-set-emergency-opening-warning.png",
          width: "60%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비상 개방 권한 설정을 완료합니다. 사용자는 비상 개방 권한이 설정된 출입 카드로 모든 출입문을 개방할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비상 개방 권한을 부여할 카드 크리덴셜은 하나 이상 선택할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["비상 개방 권한을 해제하려면 선택한 카드 크리덴셜의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.table.lockOverride"
            }), " 항목의 체크박스를 다시 클릭하세요."]
          }), "\n"]
        }), "\n"]
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