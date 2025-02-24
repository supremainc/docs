"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["118"], {
"4247": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_2_express_install_mdx_5a3_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-2-express-install-mdx-5a3.json
var site_docs_platform_biostar_2_express_install_mdx_5a3_namespaceObject = JSON.parse('{"id":"platform/biostar2/express-install","title":"간편 설치","description":"BioStar 2를 빠르게 설치하는 방법을 안내합니다.","source":"@site/docs/platform/biostar2/express-install.mdx","sourceDirName":"platform/biostar2","slug":"/platform/biostar2/express-install","permalink":"/docs/en/platform/biostar2/express-install","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar2/express-install.mdx","tags":[],"version":"current","frontMatter":{"id":"express-install","title":"간편 설치","description":"BioStar 2를 빠르게 설치하는 방법을 안내합니다.","keywords":["간편 설치"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"Tutorial","permalink":"/docs/en/platform/biostar2/tutorial"},"next":{"title":"사용자 정의 설치","permalink":"/docs/en/platform/biostar2/custom-install"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar2/express-install.mdx


const frontMatter = {
	id: 'express-install',
	title: '간편 설치',
	description: 'BioStar 2를 빠르게 설치하는 방법을 안내합니다.',
	keywords: [
		'간편 설치'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), "를 빠르게 설치하는 방법을 안내합니다. 아래 과정은 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "신규 설치"
      }), " 방식을 전제로 안내하고 있습니다. 업그레이드 또는 사용자 정의 설치로 진행하려면 다음 문서를 참조하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://download.supremainc.com/",
            children: "슈프리마 다운로드 센터"
          }), "로 접속해 로그인한 후 설치 패키지(", (0,jsx_runtime.jsx)(_components.em, {
            children: "BioStar 2 Setup(x64).X.Y.Z.BB.exe"
          }), ")를 다운로드하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다운로드한 설치 파일을 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용할 언어를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.ok"
          }), " 버튼을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-install-select-language.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설치를 계속하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.agree"
          }), "를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-install-agree.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["관리자 계정 암호를 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-install-input-admin-pw.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.expressInstall"
          }), " 옵션을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-install-select-quick.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["데이터베이스의 루트(root) 계정 암호를 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-install-input-db-pw.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), "를 설치할 경로를 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next"
          }), "을 클릭하세요"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["암호화 키를 저장할 경로를 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["데이터베이스에 저장되는 개인 정보 관리 권한 및 책임에 대한 안내를 읽고 설치를 계속하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar 2의 통신을 위한 포트를 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar 2의 구성 요소를 선택한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next"
          }), "을 클릭하세요. USB Device Agent를 선택하면 BioMini, BioMini Plus 2, DUALi DE-620을 사용하기 위한 USB Agent와 드라이버를 함께 설치합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설치 준비를 완료했다면 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.btnInstall"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["부가 프로그램 설치 여부를 선택한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.complete"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면의 지시에 따라 설치를 완료하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다운로드한 파일명에서 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X.Y.Z"
            }), "는 버전 정보이며, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BB"
            }), "는 빌드 번호입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["관리자 계정 암호는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2"
            }), "를 설치한 다음 처음 로그인할 때 사용합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "관리자 또는 데이터베이스의 루트(root) 계정 암호를 분실하지 않도록 주의하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "데이터베이스의 루트(root) 계정 암호는 AC, TA, Video DB 초기 암호로 사용합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "암호를 분실하면 버전 업그레이드 및 DB 백업/복원이 불가능할 수 있습니다."
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