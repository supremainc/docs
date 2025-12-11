"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49986"], {
97485: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_bioentry_p_2_release_notes_152_mdx_d53_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-bioentry-p-2-release-notes-152-mdx-d53.json
var site_docs_device_bioentry_p_2_release_notes_152_mdx_d53_namespaceObject = JSON.parse('{"id":"device/bioentry_p2/release-notes/152","title":"펌웨어 버전 1.5.2","description":"릴리즈2024-05-09","source":"@site/docs/device/bioentry_p2/release-notes/152.mdx","sourceDirName":"device/bioentry_p2/release-notes","slug":"/device/bioentry_p2/release-notes/152","permalink":"/device/bioentry_p2/release-notes/152","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/bioentry_p2/release-notes/152.mdx","tags":[],"version":"current","frontMatter":{"id":"152","title":"펌웨어 버전 1.5.2","isTranslationMissing":false},"sidebar":"bioentryp2","previous":{"title":"BioEntry P2 릴리스 노트","permalink":"/device/bioentry_p2/release-notes/"},"next":{"title":"펌웨어 버전 1.5.1","permalink":"/device/bioentry_p2/release-notes/151"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/bioentry_p2/release-notes/152.mdx


const frontMatter = {
	id: 152,
	title: '펌웨어 버전 1.5.2',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.5.2 (빌드 번호 1.5.2_240508)';

const assets = {

};



const toc = [{
  "value": "신규 기능 및 개선",
  "id": "신규-기능-및-개선",
  "level": 2
}, {
  "value": "버그 수정",
  "id": "버그-수정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "펌웨어-버전-152-빌드-번호-152_240508",
        children: "펌웨어 버전 1.5.2 (빌드 번호 1.5.2_240508)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2024-05-09"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioEntry P2 모델 중 BEP2-OA는 SE프로세서를 통해 HID iCLASS 카드 타입을 지원합니다.", (0,jsx_runtime.jsx)("br", {}), "신규 SE 프로세서가 적용된 장치의 경우 펌웨어를 v1.4.4 이상으로 업그레이드한 뒤 하위 버전으로 다운그레이드할 수 없으며, 하위 버전에서 커스터마이징한 펌웨어도 다운그레이드할 수 없습니다. 기존 SE 프로세서가 적용된 장치는 하위 버전으로 다운그레이드할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SW 기반 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "위조 지문 검출"
            }), " 기능이 추가된 장치의 경우 펌웨어를 v1.5.1 이상으로 업그레이드한 뒤 하위 버전으로 다운그레이드할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 펌웨어 다운그레이드 가능 여부는 장치의 시리얼 번호를 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://supremainc.com",
              children: "슈프리마 홈페이지"
            }), "에 문의하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SDK에서 GetLogWithFilter 함수를 이용해 사용자 정보 업데이트 성공 이벤트 로그를 가져올 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BioStation 2a (BS2A-ODPB, BS2A-OAPWB)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "장치 해시키 수동 관리"
          }), " 사용 여부와 상관없이 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보안 탬퍼"
          }), " 기능을 사용할 수 있도록 개선"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["iClass AoC 카드와 지문을 동시에 인증하면 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["32자로 저장된 사용자 ID가 특정 이벤트 로그에서 31자까지만 표기되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 서버와 연결되지 않은 상태에서 32자리 사용자 ID를 가진 사용자가 장치에 인증했을 경우, 장치가 서버와 다시 연결된 후에도 BioStar 2에 인증 이벤트 로그가 업데이트되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어 업그레이드 후 기존에 사용 중이던 카드가 인증에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2의 장치 상세 페이지에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "서버와 시간 동기화"
            }), " 설정을 해제하고 장치 시간을 가져온 다음, 장치 시간을 이전 시간으로 변경하고 시간을 적용하면 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
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