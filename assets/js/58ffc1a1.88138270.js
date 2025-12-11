"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["88075"], {
34749: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_system_system_restore_mdx_58f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-system-system-restore-mdx-58f.json
var site_docs_platform_biostar_x_settings_system_system_restore_mdx_58f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-system-restore","title":"시스템 복원하기","description":"시스템 백업 파일을 사용하여 BioStar X의 데이터베이스, 설정, 라이선스 등을 이전 상태로 복원하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-system-system-restore.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-system-restore","permalink":"/docs/platform/biostar_x/settings-system-system-restore","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-system-restore.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-system-restore","title":"시스템 복원하기","description":"시스템 백업 파일을 사용하여 BioStar X의 데이터베이스, 설정, 라이선스 등을 이전 상태로 복원하는 방법을 안내합니다.","keywords":["시스템 복원","restore","백업 복원","데이터 복구","BioStar X Restore"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"시스템 백업하기","permalink":"/docs/platform/biostar_x/settings-system-system-backup"},"next":{"title":"시스템 보안 강화하기","permalink":"/docs/platform/biostar_x/settings-system-security"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-system-system-restore.mdx


const frontMatter = {
	id: 'settings-system-system-restore',
	title: '시스템 복원하기',
	description: '시스템 백업 파일을 사용하여 BioStar X의 데이터베이스, 설정, 라이선스 등을 이전 상태로 복원하는 방법을 안내합니다.',
	keywords: [
		'시스템 복원',
		'restore',
		'백업 복원',
		'데이터 복구',
		'BioStar X Restore'
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
    code: "code",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcInfo, Image, Start} = _components;
  if (!IcInfo) _missingMdxReference("IcInfo", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서 문제가 발생했거나 이전 상태로 되돌려야 할 때 시스템 백업 파일을 사용하여 복원할 수 있습니다. 복원 기능을 사용하면 데이터베이스, 각종 설정, 라이선스 정보 등을 백업 시점의 상태로 되돌릴 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["복원 작업을 진행하면 현재 시점의 데이터가 백업 시점으로 되돌아 갑니다. 복원하기 전에 현재 상태의 백업을 생성하는 것을 권장합니다. 현재 상태의 백업을 생성하려면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-system-backup",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "복원 작업을 진행할 때 복원 대상의 서버 IP 주소가 백업 받은 서버 IP 주소와 다를 경우 복원 작업이 실패할 수 있습니다. 복원 작업을 진행하기 전에 서버 IP 주소를 확인하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SQL Server 데이터베이스와 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "가 서로 다른 서버에 설치되어 있다면 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 시스템 백업 및 복원을 사용할 수 없습니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows에서 ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Restore"
          }), "를 실행하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["프로그램 경로: ", (0,jsx_runtime.jsx)(_components.em, {
              children: "C:\\Program Files\\BioStar X\\biostar-restore.exe"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Select File"
          }), " 버튼을 클릭하고 복원할 백업 파일을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/setting-system-restore.png",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["복원을 시작하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Restore"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Starting Biostar services...Done"
      }), " 메시지가 나타나면 복원이 완료된 상태입니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 접속해 복원된 데이터를 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["백업 시점의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 버전과 현재 버전이 다를 경우 복원을 진행할 수 없습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 버전을 확인하려면 화면 오른쪽 최상단의 ", (0,jsx_runtime.jsx)(IcInfo, {}), " 버튼을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-system-restore-check-ver.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["백업 시점의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 버전을 확인하려면 백업 파일의 압축을 해제하고, ", (0,jsx_runtime.jsx)(_components.em, {
              children: "sysbackup.conf"
            }), " 파일의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "biostarVersion"
            }), " 값을 확인하세요."]
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