"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["839"], {
"5567": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_user_template_mdx_22f_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-user-template-mdx-22f.json
var site_docs_platform_biostar_x_user_template_mdx_22f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/user-template","title":"사용자 템플릿 관리하기","description":"사용자 템플릿을 활용하면, 신규 사용자 등록을 표준화하고 시간을 절약하여 효율적인 사용자 관리가 가능합니다.","source":"@site/docs/platform/biostar_x/user-template.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/user-template","permalink":"/docs/platform/biostar_x/user-template","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/user-template.mdx","tags":[],"version":"current","frontMatter":{"id":"user-template","title":"사용자 템플릿 관리하기","description":"사용자 템플릿을 활용하면, 신규 사용자 등록을 표준화하고 시간을 절약하여 효율적인 사용자 관리가 가능합니다.","keywords":["사용자 템플릿"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"사용자 삭제하기","permalink":"/docs/platform/biostar_x/delete-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/user-template.mdx


const frontMatter = {
	id: 'user-template',
	title: '사용자 템플릿 관리하기',
	description: '사용자 템플릿을 활용하면, 신규 사용자 등록을 표준화하고 시간을 절약하여 효율적인 사용자 관리가 가능합니다.',
	keywords: [
		'사용자 템플릿'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자 템플릿 생성",
  "id": "사용자-템플릿-생성",
  "level": 2
}, {
  "value": "템플릿으로 사용자 추가",
  "id": "템플릿으로-사용자-추가",
  "level": 2
}, {
  "value": "템플릿 수정",
  "id": "템플릿-수정",
  "level": 2
}, {
  "value": "템플릿 삭제",
  "id": "템플릿-삭제",
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
  }, {Cmd, IcDown} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcDown) _missingMdxReference("IcDown", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 템플릿은 조직 및 부서별 기본 정보를 표준화하여, 신규 사용자 등록 프로세스를 간소화하고 관리 효율을 높일 수 있습니다. 템플릿을 사용해 모든 신규 사용자에 대해 일관된 정보와 권한을 빠르고 정확하게 적용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-템플릿-생성",
      children: "사용자 템플릿 생성"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "User"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Template"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 위에 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "New User Template"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["템플릿 생성 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Information"
          }), "에서 사용자 ID, 이름, 부서, 직책등을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Permission"
          }), " 섹션에서 출입 권한을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["입력을 완료하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Save"
          }), " 버튼을 클릭하면 템플릿이 저장됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "템플릿 목록에 추가한 새 템플릿이 나타나는지 확인하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["부서는 조직 구조를 반영하여 사용자를 구분하는 데 사용됩니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user#information",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["그룹은 여러 사용자를 하나로 묶어 출입 권한을 한 번에 적용하기 위해 사용됩니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "user-group-manage",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "Access Group"
            }), "은 특정 출입 구역에 대한 사용자 권한을 정의하며 사용자에게 일괄적으로 출입 권한을 부여하는 데 사용됩니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "템플릿으로-사용자-추가",
      children: "템플릿으로 사용자 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "추가한 템플릿으로 신규 사용자를 추가하려면 다음 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "User"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "New User"
          }), " 버튼오른쪽에 ", (0,jsx_runtime.jsx)(IcDown, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 템플릿을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿에 설정된 정보를 확인하고, 사용자 ID, 이름, 연락처 등의 나머지 항목을 입력하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Save"
          }), " 버튼을 클릭하면 신규 사용자가 저장됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자 추가에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "add-user",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "템플릿-수정",
      children: "템플릿 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이미 만들어진 사용자 템플릿을 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "User"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Template"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿 목록에서 수정하려는 항목을 더블 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿 수정 창이 나타나면 원하는 항목을 수정하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["수정을 완료하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Save"
          }), " 버튼을 클릭하면 템플릿이 저장됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "템플릿-삭제",
      children: "템플릿 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "불필요한 사용자 템플릿을 삭제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "User"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Template"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿 목록에서 삭제하려는 항목의 가장 왼쪽의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Delete"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["확인 메시지가 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "확인"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "템플릿 목록에서 선택한 템플릿에 삭제됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["목록에서 모든 템플릿을 선택하려면 화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
          children: "Select All"
        }), " 버튼을 클릭하세요."]
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