"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24434"], {
69874: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_custom_wiegand_card_formats_mdx_0b1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-custom-wiegand-card-formats-mdx-0b1.json
var site_docs_platform_biostar_air_custom_wiegand_card_formats_mdx_0b1_namespaceObject = JSON.parse('{"id":"platform/biostar_air/custom-wiegand-card-formats","title":"커스텀 Wiegand 카드 형식","description":"기존 출입 통제 시스템에서 원활하게 마이그레이션하기 위한 시설 코드, ID 세그먼트, 패리티 비트, 비트 할당을 비롯하여 BioStar Air v2.10에서 사용자 정의 Wiegand 카드 형식을 만들고 구성하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/custom-wiegand-card-formats.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/custom-wiegand-card-formats","permalink":"/docs/ja/platform/biostar_air/custom-wiegand-card-formats","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/custom-wiegand-card-formats.mdx","tags":[],"version":"current","frontMatter":{"id":"custom-wiegand-card-formats","title":"커스텀 Wiegand 카드 형식","description":"기존 출입 통제 시스템에서 원활하게 마이그레이션하기 위한 시설 코드, ID 세그먼트, 패리티 비트, 비트 할당을 비롯하여 BioStar Air v2.10에서 사용자 정의 Wiegand 카드 형식을 만들고 구성하는 방법을 안내합니다.","keywords":["Wiegand","카드 형식","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"알림 및 리포트 설정하기","permalink":"/docs/ja/platform/biostar_air/settings-alert-report"},"next":{"title":"모바일 앱에서 사이트 관리하기","permalink":"/docs/ja/platform/biostar_air/managing-sites-with-phone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/custom-wiegand-card-formats.mdx


const frontMatter = {
	id: 'custom-wiegand-card-formats',
	title: '커스텀 Wiegand 카드 형식',
	description: '기존 출입 통제 시스템에서 원활하게 마이그레이션하기 위한 시설 코드, ID 세그먼트, 패리티 비트, 비트 할당을 비롯하여 BioStar Air v2.10에서 사용자 정의 Wiegand 카드 형식을 만들고 구성하는 방법을 안내합니다.',
	keywords: [
		'Wiegand',
		'카드 형식',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "카드 형식으로 이동",
  "id": "카드-형식으로-이동",
  "level": 2
}, {
  "value": "카드 형식",
  "id": "카드-형식",
  "level": 2
}, {
  "value": "Wiegand 카드 형식 추가",
  "id": "wiegand-카드-형식-추가",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
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
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "v2.10"
      }), "(2025년 8월)에서는 Wiegand 카드 형식을 이제 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStation 3"
      }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioEntry W3"
      }), " 장치에서 지원합니다. 모든 BioStar Air 호환 리더기는 2025년 말까지 지원될 예정입니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카드-형식으로-이동",
      children: "카드 형식으로 이동"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air 포털에서 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Card Format"
      }), "으로 이동하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카드-형식",
      children: "카드 형식"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wiegand 형식"
      }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SIA"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HID 형식"
      }), "을 포함한, 특별한 카드 형식을 생성 및 관리, 조회할 수 있습니다. 이 기능은 이미 카드가 제공된 기존 출입 통제 솔루션에서 마이그레이션하는 사이트에서 유용하게 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "기능"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "설명"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "카드 형식 목록"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BioStar Air에 포함된 기본 형식을 포함해 등록된 모든 Wiegand 카드 형식을 조회할 수 있습니다."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wiegand 카드 형식 상세 조회"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "카드 형식의 이름, 설명, 총 비트 수, 비트 미리보기 및 세부 비트 할당을 확인할 수 있습니다."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wiegand 카드 형식 추가"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "이름, 설명, 총 비트 수 및 세부 비트 할당을 포함하여 새로운 사용자 정의 카드 형식을 구성할 수 있습니다. 시스템은 시각적 확인을 위한 비트 미리보기를 제공합니다."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegand-카드-형식-추가",
      children: "Wiegand 카드 형식 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detail"
          }), ": 형식에 대한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "이름"
          }), "을 입력하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "설명"
          }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "총 비트"
          }), " 항목은 선택 사항입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bit Preview"
          }), ": 형식의 모든 비트에 대한 시각적 표현을 확인하고, 시설 코드, ID, 패리티 비트 및 할당되지 않은 비트에 대한 할당을 확인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bit Assignment"
          }), " 설정:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Facility Code"
              }), ": 비트 범위를 활성화/비활성화하고 할당합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ID"
              }), ": 시작 및 종료 비트와 함께 하나 이상의 ID 세그먼트를 추가합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Parity Bit"
              }), ": 홀수/짝수 패리티 비트를 정의된 시작 및 종료 범위와 함께 추가합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["새로운 카드 형식을 추가하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wiegand 카드 형식 추가"
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-custom-wiegand-card-format-01.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-custom-wiegand-card-format-02.png",
      alone: true
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