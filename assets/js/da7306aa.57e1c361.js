"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8042"], {
7223: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_data_automatic_report_schedule_mdx_da7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-data-automatic-report-schedule-mdx-da7.json
var site_docs_platform_biostar_x_data_automatic_report_schedule_mdx_da7_namespaceObject = JSON.parse('{"id":"platform/biostar_x/data-automatic-report-schedule","title":"자동 생성 스케줄 설정하기","description":"유동 기간으로 설정하여 생성한 커스텀 리포트를 자동으로 생성하도록 스케줄을 설정할 수 있습니다.","source":"@site/docs/platform/biostar_x/data-automatic-report-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/data-automatic-report-schedule","permalink":"/docs/platform/biostar_x/data-automatic-report-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/data-automatic-report-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"data-automatic-report-schedule","title":"자동 생성 스케줄 설정하기","description":"유동 기간으로 설정하여 생성한 커스텀 리포트를 자동으로 생성하도록 스케줄을 설정할 수 있습니다.","keywords":["자동 리포트","스케줄"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"리포트 생성하기","permalink":"/docs/platform/biostar_x/data-generate-reports"},"next":{"title":"리포트 저장 경로 설정하기","permalink":"/docs/platform/biostar_x/data-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/data-automatic-report-schedule.mdx


const frontMatter = {
	id: 'data-automatic-report-schedule',
	title: '자동 생성 스케줄 설정하기',
	description: '유동 기간으로 설정하여 생성한 커스텀 리포트를 자동으로 생성하도록 스케줄을 설정할 수 있습니다.',
	keywords: [
		'자동 리포트',
		'스케줄'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "정보 설정하기",
  "id": "정보-설정하기",
  "level": 2
}, {
  "value": "리포트 및 스케줄 설정하기",
  "id": "리포트-및-스케줄-설정하기",
  "level": 2
}, {
  "value": "리포트 형식 설정하기",
  "id": "리포트-형식-설정하기",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["유동 기간으로 설정하여 생성한 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.customReport",
        product: "2"
      }), "를 자동으로 생성하도록 스케줄을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.mainMenu.schedule",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addSchedule",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 항목을 설정하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "정보-설정하기",
      children: "정보 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "자동 생성 스케줄의 기본 정보를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-information.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.scheduleName",
          product: "2"
        }), ": 스케줄의 이름을 입력하세요."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "리포트-및-스케줄-설정하기",
      children: "리포트 및 스케줄 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "리포트별 자동 생성 스케줄을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-report-schedule.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.report",
            product: "2"
          }), ": 자동 생성할 커스텀 리포트를 선택할 수 있습니다. 유동 기간으로 설정된 커스텀 리포트만 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.frequency",
            product: "2"
          }), ": 리포트를 자동 생성할 주기를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.generateTime",
            product: "2"
          }), ": 리포트를 자동 생성할 시간을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "리포트-형식-설정하기",
      children: "리포트 형식 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "리포트별 형식을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-report-format.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.outputType",
            product: "2"
          }), ": 리포트의 자동 생성 방식을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.reportTitle",
            product: "2"
          }), ": 리포트 이름을 모든 페이지에 제목으로 표시하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.showTitle",
            product: "2"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.header",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.showHeader",
            product: "2"
          }), "를 선택하면 리포트 생성 시 헤더를 표시할 수 있습니다. 헤더를 모든 페이지에 표시하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.onEveryPage",
            product: "2"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "리포트별로 생성되는 헤더는 다를 수 있습니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.footer",
            product: "2"
          }), ": 페이지 번호 표시 여부를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.fileFormat",
            product: "2"
          }), ": 리포트를 내보낼 파일 형식을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.apply",
          product: "2"
        }), "을 클릭하세요."]
      }), "\n"]
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
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