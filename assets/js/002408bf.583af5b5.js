"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["30534"], {
18302: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_suprema_pass_app_sensitivity_settings_mdx_002_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-suprema-pass-app-sensitivity-settings-mdx-002.json
var site_docs_platform_biostar_air_suprema_pass_app_sensitivity_settings_mdx_002_namespaceObject = JSON.parse('{"id":"platform/biostar_air/suprema-pass-app-sensitivity-settings","title":"민감도 설정하기","description":"슈프리마 패스 앱에서 블루투스 인식 감도를 조정하여 의도치 않은 인증 방지, 인식 거리 개선, Apple Pay 간섭 문제 해결 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/suprema-pass-app-sensitivity-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/suprema-pass-app-sensitivity-settings","permalink":"/docs/platform/biostar_air/suprema-pass-app-sensitivity-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/suprema-pass-app-sensitivity-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"suprema-pass-app-sensitivity-settings","title":"민감도 설정하기","description":"슈프리마 패스 앱에서 블루투스 인식 감도를 조정하여 의도치 않은 인증 방지, 인식 거리 개선, Apple Pay 간섭 문제 해결 방법을 안내합니다.","keywords":["감도 설정","블루투스"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"고급 기능 설정하기","permalink":"/docs/platform/biostar_air/suprema-pass-app-advanced-features"},"next":{"title":"개발자","permalink":"/docs/platform/biostar_air/developer-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/suprema-pass-app-sensitivity-settings.mdx


const frontMatter = {
	id: 'suprema-pass-app-sensitivity-settings',
	title: '민감도 설정하기',
	description: '슈프리마 패스 앱에서 블루투스 인식 감도를 조정하여 의도치 않은 인증 방지, 인식 거리 개선, Apple Pay 간섭 문제 해결 방법을 안내합니다.',
	keywords: [
		'감도 설정',
		'블루투스'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "감도 설정 조정 방법",
  "id": "how-to-adjust-the-sensitivity-setting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, IcHamberg, IcMinus, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!IcMinus) _missingMdxReference("IcMinus", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "민감도 설정"
      }), " 기능을 사용하면 사용자는 모바일 기기와 BioStar Air와 호환되는 장치 간의 블루투스 인식 감도를 조정할 수 있습니다. 이 기능은 원활한 인증을 보장하고 원치 않는 접근 시도나 인증 실패를 줄이는 데 유용합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "모바일 기기 모델마다 블루투스 신호 강도가 다르기 때문에 사용자는 서로 다른 인식 거리를 경험할 수 있습니다. 또한 벽, 간섭 또는 BioStar Air와 호환되는 장치의 배치와 같은 환경적 요인이 블루투스 인식에 영향을 줄 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-adjust-the-sensitivity-setting",
      children: "감도 설정 조정 방법"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자는 모바일 기기의 블루투스 강도와 개인적 선호도에 따라 블루투스 인증 민감도를 미세하게 조정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-advanced-sensitivity.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["슈프리마 패스 앱 초기화면에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " 아이콘을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "더보기"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "고급 설정"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "민감도 설정"
          }), "을 탭한 후 슬라이더를 이동하여 감도를 조정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["의도하지 않은 인증을 방지하려면 ", (0,jsx_runtime.jsx)(IcMinus, {}), " 방향으로 슬라이더를 이동해 감도를 낮추세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "예, 모바일 기기가 책상에 있을 때"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증을 실패하면 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 방향으로 슬라이더를 이동해 감도를 높이세요. 단, 모바일 기기가 BioStar Air와 호환되는 장치에 매우 가까이 있어야 합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "iOS 사용자 팁"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Apple Pay를 사용하는 아이폰을 BioStar Air와 호환되는 장치에 가까이 가져가면 Apple Pay가 실행됩니다. 이는 모바일 기기의 NFC 영역이 모바일 카드 인증과 함께 감지되기 때문입니다."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "해결 방법"
        }), ": 감도 설정을 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 방향으로 조정하면 BioStar Air와 호환되는 장치가 모바일 기기의 블루투스 신호를 더 일찍 인식하여 장치에 물리적으로 접촉할 필요가 없습니다. 이를 통해 Apple Pay가 트리거되는 것을 방지하면서 원활하게 출입할 수 있습니다."]
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