"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["868"], {
2510: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_user_group_manage_mdx_e91_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-user-group-manage-mdx-e91.json
var site_docs_platform_biostar_x_user_group_manage_mdx_e91_namespaceObject = JSON.parse('{"id":"platform/biostar_x/user-group-manage","title":"사용자 그룹 관리하기","description":"사용자 그룹을 활용하여 보안성, 관리 효율성, 확장성을 높이고 출입 통제 운영을 최적화하세요.","source":"@site/docs/platform/biostar_x/user-group-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/user-group-manage","permalink":"/docs/platform/biostar_x/user-group-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/user-group-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"user-group-manage","title":"사용자 그룹 관리하기","description":"사용자 그룹을 활용하여 보안성, 관리 효율성, 확장성을 높이고 출입 통제 운영을 최적화하세요.","keywords":["사용자","그룹","출입 통제"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"사용자","permalink":"/docs/platform/biostar_x/how-to-guide-user"},"next":{"title":"사용자 등록하기","permalink":"/docs/platform/biostar_x/add-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/user-group-manage.mdx


const frontMatter = {
	id: 'user-group-manage',
	title: '사용자 그룹 관리하기',
	description: '사용자 그룹을 활용하여 보안성, 관리 효율성, 확장성을 높이고 출입 통제 운영을 최적화하세요.',
	keywords: [
		'사용자',
		'그룹',
		'출입 통제'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "그룹 추가",
  "id": "group-additional",
  "level": 2
}, {
  "value": "최상위 그룹 생성",
  "id": "creating-a-higher-group",
  "level": 3
}, {
  "value": "하위 그룹 생성",
  "id": "creating-a-lower-group",
  "level": 3
}, {
  "value": "그룹 이름 변경",
  "id": "group-name-change",
  "level": 2
}, {
  "value": "그룹 삭제",
  "id": "group-deletion",
  "level": 2
}, {
  "value": "그룹별 사용자 확인하기",
  "id": "viewgroupuser",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 그룹은 공통 속성과 권한을 공유할 수 있습니다. 사용자가 그룹의 멤버가 되면 해당 그룹의 모든 속성을 자동으로 상속받을 수 있습니다. 사용자는 하나의 사용자 그룹에만 속할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "개별 사용자마다 출입 권한을 설정하는 대신, 부서별 또는 역할별 사용자 그룹을 만들어 동일한 권한을 한 번에 적용할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "그룹의 출입 권한을 수정하면 해당 그룹에 속한 모든 사용자에게 자동 적용되므로 관리자의 업무 부담을 줄일 수 있습니다. 조직 변경이나 신규 프로젝트 발생 시 빠르게 권한을 조정할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "그룹별 권한 설정을 통해 불필요한 출입을 방지하고 보안성을 높일 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 그룹의 출입 기록을 별도로 분석할 수 있어 보안 감사 및 로그 관리가 쉬워집니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 그룹은 출입 등급과 연동하여 출입 제한 시간, 출입 제한 구역 등 세부 정책을 적용할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-additional",
      children: "그룹 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "여러 명의 사용자를 효율적으로 관리하기 위해 그룹을 생성하세요. 사용자가 속한 조직 등으로 이름을 등록하면 편리하게 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "그룹 이름은 사용자가 속한 조직 또는 부서 이름으로 등록하면 관리가 편리합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "그룹의 하위 그룹을 최대 8단계까지 순차적으로 생성할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 그룹 이름은 최대 48자까지 입력할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 그룹 목록에서 그룹을 선택하면 해당 그룹에 속한 사용자만 사용자 목록에 표시할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-higher-group",
      children: "최상위 그룹 생성"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " 탭에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.userGroupRootName"
          }), "를 선택하고 마우스 오른쪽 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostartx-user-group-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.addNewGroup"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "그룹이 생성되면 원하는 그룹 이름을 입력하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-lower-group",
      children: "하위 그룹 생성"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " 탭에서 상위 그룹을 선택하고 마우스 오른쪽 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostartx-user-sub-group-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.addNewGroup"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "그룹이 생성되면 원하는 그룹 이름을 입력하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "하위 그룹을 생성할 때는 상위 그룹을 선택해야 하며, 최대 8단계까지 생성할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-name-change",
      children: "그룹 이름 변경"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자가 속한 그룹의 이름을 변경할 수 있습니다. 조직 또는 부서의 이름이 변경되었을 때 그룹 이름도 같이 변경하는 것을 권장합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " 목록에서 이름을 변경할 그룹을 선택하고 마우스 오른쪽 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostartx-user-group-rename.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.renameGroup"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 그룹 이름으로 변경하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), " 목록에서 변경 사항을 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자 그룹 이름은 최대 48자까지 입력할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-deletion",
      children: "그룹 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자가 속한 그룹을 삭제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " 목록에서 삭제할 그룹을 선택하고 마우스 오른쪽 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deleteGroup"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["확인 메시지가 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.dialog.delete.yes"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), " 목록에서 선택한 그룹이 삭제된 것을 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewgroupuser",
      children: "그룹별 사용자 확인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자 그룹에 속한 사용자를 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " 페이지에서 화면 왼쪽 사이드바에서 원하는 사용자 그룹을 선택하세요. 선택한 사용자 그룹의 사용자가 목록에 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostartx-user-group-select-group-user.png"
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