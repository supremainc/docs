"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["46528"], {
92918: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_extendedmodule_installation_mdx_264_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-extendedmodule-installation-mdx-264.json
var site_docs_device_extendedmodule_installation_mdx_264_namespaceObject = JSON.parse('{"id":"device/extendedmodule/installation","title":"설치하기","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","source":"@site/docs/device/extendedmodule/installation.mdx","sourceDirName":"device/extendedmodule","slug":"/device/extendedmodule/installation","permalink":"/docs/en/device/extendedmodule/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/extendedmodule/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"설치하기","description":"설치에 필요한 전체 과정과 연결 예시를 제공합니다.","keywords":["브래킷","전원","네트워크","입력","릴레이","독립형","Secure I/O","Wiegand"],"isTranslationMissing":true},"sidebar":"extendedmodule","previous":{"title":"시작하기","permalink":"/docs/en/device/extendedmodule/getting-started"},"next":{"title":"제품 사양","permalink":"/docs/en/device/extendedmodule/product-specifications"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/extendedmodule/installation.mdx


const frontMatter = {
	id: 'installation',
	title: '설치하기',
	description: '설치에 필요한 전체 과정과 연결 예시를 제공합니다.',
	keywords: [
		'브래킷',
		'전원',
		'네트워크',
		'입력',
		'릴레이',
		'독립형',
		'Secure I/O',
		'Wiegand'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "BioStation 3에 설치하기",
  "id": "biostation-3에-설치하기",
  "level": 2
}, {
  "value": "BioStation 2a에 설치하기",
  "id": "biostation-2a에-설치하기",
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
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "설치에 필요한 전체 과정과 연결 예시를 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostation-3에-설치하기",
      children: "BioStation 3에 설치하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "제품에 확장 모듈을 설치하기 위해서는 확장 브래킷(별매품)이 필요합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "확장 브래킷 구매는 슈프리마 제품 구매처에 문의하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "확장 브래킷에 확장 모듈을 장착할 위치를 확인하고 고정용 나사를 이용하여 확장 모듈을 장착하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm1.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "확장 모듈에 사용하고자 하는 케이블을 연결하고 하단 홈에 끼워 케이블을 정리하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "그림과 같이 MAIN USB 케이블은 안쪽에 두고 RS-232C 케이블과 RS-485 케이블은 하단의 홈을 통해 뒷면으로 꺼내두세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SAM 카드를 사용하려는 경우 SAM 카드 슬롯에 SAM 카드를 장착하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm2.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "필요에 따라 아래 표시된 부분들을 니퍼나 펜치로 꺾어서 배선 공간을 확장할 수 있습니다."
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/installation-bs3-extm3.svg",
            className: "none",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "확장 모듈 주변의 홈에 맞춰 실리콘 고무 덮개를 장착하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm4.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IP65 등급을 만족하기 위해서는 케이블을 연결한 뒤 반드시 실리콘 고무 덮개를 장착해야 합니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "동봉되어 있는 양면테이프를 확장 브래킷 뒷면에 부착하고 제품을 장착할 위치에 부착한 다음, 고정용 나사를 이용하여 확장 브래킷을 단단히 고정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm5.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "장치를 설치할 최적의 높이는 136 cm입니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "장치를 직사광선이나 자외선에 직접 노출된 장소에 설치하지 마세요."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "사용자가 얼굴을 인증할 때 얼굴에 직사광선이 닿지 않도록 설치 위치를 조정하세요."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "확장 브래킷 위에 고정용 나사를 이용하여 벽면 브래킷을 단단히 고정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm6.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제품과 MAIN USB 케이블을 연결하고 케이블커버를 조립하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm7.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IP65 방수, 방진 등급을 만족하기 위해서는 제품과 케이블을 연결한 뒤 반드시 케이블 커버를 사용해야 합니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "고정된 벽면 브래킷 위에 제품을 장착하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm8.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제품 고정용 나사를 돌려 제품과 벽면 브래킷을 조립하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm9.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "브래킷과 제품을 조립할 때 향상된 보안을 위해 제품 고정용 나사 대신 동봉된 브래킷 고정용 나사(별 모양)를 이용할 수 있습니다."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostation-2a에-설치하기",
      children: "BioStation 2a에 설치하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제공된 드릴링 템플릿을 이용하여 벽면 브래킷을 장착할 위치를 정하세요. 제품을 장착할 위치에 고정용 나사를 이용하여 벽면 브래킷을 단단히 고정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device1-bs2a.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제품에 MAIN USB 케이블을 연결하고 확장 모듈을 장착할 위치를 확인한 후 고정용 나사를 이용하여 확장 모듈을 장착하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs2a-extm1.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "확장 모듈에 사용하고자 하는 케이블을 연결하고 하단 홈에 끼워 케이블을 정리하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SAM 카드를 사용하려는 경우 SAM 카드 슬롯에 SAM 카드를 장착하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs2a-extm2.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "케이블 커버를 조립한 뒤 고정된 벽면 브래킷 위에 제품을 장착하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs2a-extm3.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IP65 방수, 방진 등급을 만족하기 위해서는 제품과 케이블을 연결한 뒤 반드시 케이블 커버를 사용해야 합니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제품 고정용 나사를 돌려 제품과 벽면 브래킷을 조립하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device3-bs2a.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "브래킷과 제품을 조립할 때 향상된 보안을 위해 제품 고정용 나사 대신 동봉된 브래킷 고정용 나사(별 모양)를 이용할 수 있습니다."
          })
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