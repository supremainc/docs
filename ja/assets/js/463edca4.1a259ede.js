"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["81270"], {
38877: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ manage_holiday_group_frontMatter),
  toc: () => (/* binding */ manage_holiday_group_toc),
  "default": () => (/* binding */ manage_holiday_group_MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_manage_holiday_group_mdx_463_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ manage_holiday_group_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-manage-holiday-group-mdx-463.json
var site_docs_platform_biostar_air_manage_holiday_group_mdx_463_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-holiday-group","title":"휴일 그룹 관리하기","description":"휴일을 그룹으로 구성하여 출입 통제에 적용하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/manage-holiday-group.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-holiday-group","permalink":"/docs/ja/platform/biostar_air/manage-holiday-group","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-holiday-group.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-holiday-group","title":"휴일 그룹 관리하기","description":"휴일을 그룹으로 구성하여 출입 통제에 적용하는 방법을 안내합니다.","keywords":["출입 권한 관리","휴일 그룹","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"출입 권한","permalink":"/docs/ja/platform/biostar_air/manage-access-authority"},"next":{"title":"스케줄 관리하기","permalink":"/docs/ja/platform/biostar_air/manage-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/common/_add-holiday-group.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(_components.ol, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "holiday_groups_submenu",
          product: "air"
        }), "를 클릭하세요."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "holiday_group_add_btn",
          product: "air"
        }), " 버튼을 클릭하세요."]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-holiday.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "holiday_group_add_title",
          product: "air"
        }), " 패널이 나타나면 그룹 이름을 입력하세요."]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-holiday-add.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "add_holidays_title",
          product: "air"
        }), " 섹션에서 휴일 이름과 날짜를 지정하고 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), " 버튼을 클릭하세요."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["날짜가 고정된 공휴일을 추가하려면 이름과 날짜를 설정하고, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "holiday_group_checkbox_annually",
              product: "air"
            }), " 옵션을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["매년 반복되지만 일정한 기간을 갖는 휴일이라면 이름과 날짜를 설정하고, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "holiday_group_checkbox_duration",
              product: "air"
            }), " 옵션을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "같은 방식으로 다른 휴일을 추가하세요."
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-holiday-add-new-day.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["휴일 그룹 설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "save_btn",
          product: "air"
        }), " 버튼을 클릭하세요."]
      }), "\n"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./docs/platform/biostar_air/manage-holiday-group.mdx


const manage_holiday_group_frontMatter = {
	id: 'manage-holiday-group',
	title: '휴일 그룹 관리하기',
	description: '휴일을 그룹으로 구성하여 출입 통제에 적용하는 방법을 안내합니다.',
	keywords: [
		'출입 권한 관리',
		'휴일 그룹',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const manage_holiday_group_contentTitle = undefined;

const assets = {

};




const manage_holiday_group_toc = [{
  "value": "휴일 그룹 추가",
  "id": "휴일-그룹-추가",
  "level": 2
}, ...toc, {
  "value": "휴일 그룹 수정",
  "id": "휴일-그룹-수정",
  "level": 2
}, {
  "value": "휴일 그룹 삭제",
  "id": "휴일-그룹-삭제",
  "level": 2
}];
function manage_holiday_group_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) manage_holiday_group_missingMdxReference("Cmd", true);
  if (!IcAirEdit) manage_holiday_group_missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) manage_holiday_group_missingMdxReference("IcAirRemove", true);
  if (!Image) manage_holiday_group_missingMdxReference("Image", true);
  if (!YouTube) manage_holiday_group_missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air에서 휴일 그룹은 특정 날짜나 기간 동안 출입 규칙을 조정하는 데 사용됩니다. 휴일 그룹을 설정하면 관리자는 공휴일이나 특별한 날에 출입 권한을 제한하거나 변경할 수 있습니다. 이를 통해 보안 수준을 유지하면서도 유연한 출입 통제를 구현할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "출입 통제 관리에 대한 동영상 가이드를 시청하려면 다음 영상을 참고하세요."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "IkTP75lCHN4"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "휴일-그룹-추가",
      children: "휴일 그룹 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "휴일 그룹은 매년 반복되는 공휴일과 특정 기간의 휴일을 정의하여 해당 기간 동안 출입 권한을 제한하거나 변경하는 데 사용됩니다."
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "휴일 그룹은 스케줄 보다 우선합니다. 항상 출입이 필요한 사용자에게는 제한 없는 출입 권한을 부여하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "한 개의 출입문에는 한 개의 휴일 그룹만 적용할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "휴일-그룹-수정",
      children: "휴일 그룹 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["목록에서 수정할 휴일 그룹을 클릭하세요. 또는 휴일 그룹의 체크박스를 클릭해 선택한 후 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_holiday_group_title",
            product: "air"
          }), " 패널이 나타나면 원하는 항목을 수정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-access-mng-holiday-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["수정 사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "휴일-그룹-삭제",
      children: "휴일 그룹 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 휴일 그룹의 체크박스를 클릭하세요. 1개 이상의 휴일 그룹을 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["목록 상단의 ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경고 메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_yes",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function manage_holiday_group_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(manage_holiday_group_createMdxContent, {
      ...props
    })
  }) : manage_holiday_group_createMdxContent(props);
}
function manage_holiday_group_missingMdxReference(id, component) {
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