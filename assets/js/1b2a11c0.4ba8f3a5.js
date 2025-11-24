"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["58135"], {
86992: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_enroll_credential_fingerprint_mdx_1b2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-enroll-credential-fingerprint-mdx-1b2.json
var site_docs_platform_biostar_x_enroll_credential_fingerprint_mdx_1b2_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-fingerprint","title":"지문 등록하기","description":"출입을 위한 인증 수단으로 사용자의 지문을 등록해 사용할 수 있습니다. 지문 인증을 지원하는 장치를 통해 사용자의 지문 정보를 등록하세요.","source":"@site/docs/platform/biostar_x/enroll-credential-fingerprint.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-fingerprint","permalink":"/docs/platform/biostar_x/enroll-credential-fingerprint","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-fingerprint.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-fingerprint","title":"지문 등록하기","description":"출입을 위한 인증 수단으로 사용자의 지문을 등록해 사용할 수 있습니다. 지문 인증을 지원하는 장치를 통해 사용자의 지문 정보를 등록하세요.","keywords":["지문","등록","크리덴셜","인증","바이오메트릭"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"인증 모드 설정하기","permalink":"/docs/platform/biostar_x/enroll-credential-authmode"},"next":{"title":"IR 페이스 등록하기","permalink":"/docs/platform/biostar_x/enroll-credential-ir-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/enroll-credential-fingerprint.mdx


const frontMatter = {
	id: 'enroll-credential-fingerprint',
	title: '지문 등록하기',
	description: '출입을 위한 인증 수단으로 사용자의 지문을 등록해 사용할 수 있습니다. 지문 인증을 지원하는 장치를 통해 사용자의 지문 정보를 등록하세요.',
	keywords: [
		'지문',
		'등록',
		'크리덴셜',
		'인증',
		'바이오메트릭'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Num} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Num) _missingMdxReference("Num", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "출입을 위한 인증 수단으로 사용자의 지문을 등록해 사용할 수 있습니다. 지문 인증을 지원하는 장치를 통해 사용자의 지문 정보를 등록하세요. 지문은 지문 스캐너가 설치된 장치에서 스캔할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "지문을 등록하기 전에…"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자의 지문이 깨끗하고 물기가 없는지 확인하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "상처가 있거나 지문이 희미한 손가락은 등록하지 마세요."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.credential",
        product: "2"
      }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addFingerprint",
        product: "2"
      }), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.header.fingerprint",
        product: "2"
      }), " 창이 나타나면 각 항목을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.enroll",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-finger.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device",
            product: "2"
          }), ": 지문을 등록할 장치를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quality",
            product: "2"
          }), ": 지문 등록 품질을 조절할 수 있습니다. 설정한 품질 수준에 미치지 않으면 지문 정보를 등록할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.viewImage",
            product: "2"
          }), ": 지문을 스캔했을 때 원본 이미지를 ", (0,jsx_runtime.jsx)(Num, {
            num: "1"
          }), " 영역에서 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), ": 지문을 추가하려면 버튼을 클릭하세요. 지문은 최대 10개까지 등록할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.scan",
            product: "2"
          }), ": 추가한 지문 번호를 선택하고 버튼을 클릭하세요. 지문 스캐너나 장치 센서에 손가락을 대고 지문을 스캔하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-finger-nth.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.delete",
            product: "2"
          }), ": 등록한 지문을 삭제할 수 있습니다. 삭제할 지문 번호를 선택하고 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.chkDuplicated",
            product: "2"
          }), ": 이미 등록한 지문인지 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.duress",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#duress",
            children: "협박 지문"
          }), "으로 등록하려면 이 옵션을 선택하고 지문을 스캔하세요. 누군가에게 협박을 당하거나 강제로 출입문을 열어야 할 때, 해당 지문을 사용해 알림을 보낼 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "일상 출입을 위해 사용하는 지문을 협박 지문으로 사용하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.viewImage",
              product: "2"
            }), " 옵션을 활성화할 때, 지문 이미지를 확인할 수 있지만 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 서버에 저장하지 않습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지문 인증률이 낮다면 지문 정보를 삭제하고 새로운 지문 정보를 등록하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "좋은 품질의 지문 정보를 얻으려면 지문 인식 센서 표면을 모두 덮을 수 있도록 손가락을 대세요. 검지나 중지의 지문을 등록하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(32830)/* ["default"] */.A) + "",
              width: "400",
              height: "98"
            })
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
32830: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/biostarx-enroll-fingerprint-caution-98024b8eaea33e83eea204e7e06a1e0f.png");

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