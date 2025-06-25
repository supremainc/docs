"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1377"], {
96: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_manage_account_frontMatter),
  "default": () => (/* binding */ settings_manage_account_MDXContent),
  toc: () => (/* binding */ settings_manage_account_toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_manage_account_mdx_140_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_manage_account_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-manage-account-mdx-140.json
var site_docs_platform_biostar_x_settings_manage_account_mdx_140_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-manage-account","title":"운영 권한 관리하기","description":"등록한 사용자에게 운영 권한을 부여하고 커스텀 권한을 추가 및 설정하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-manage-account.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-manage-account","permalink":"/docs/en/platform/biostar_x/settings-manage-account","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-manage-account.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-manage-account","title":"운영 권한 관리하기","description":"등록한 사용자에게 운영 권한을 부여하고 커스텀 권한을 추가 및 설정하는 방법을 안내합니다.","keywords":["계정","운영 권한","커스텀 권한"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"엘리베이터 삭제하기","permalink":"/docs/en/platform/biostar_x/settings-elevators-delete"},"next":{"title":"커스텀 권한 추가하기","permalink":"/docs/en/platform/biostar_x/settings-adding-custom-account"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/common/_account-list.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.account.administrator",
            product: "2"
          }), ": 모든 메뉴를 사용할 수 있는 관리자 등급입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.account.userOperator",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " 메뉴만 사용할 수 있는 등급입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.account.monitoringOperator",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " 메뉴를 사용할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " 메뉴는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보기"
          }), " 권한만 가집니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.account.taOperator",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.time_attendance",
            product: "2"
          }), " 메뉴를 사용할 수 있으며 사용자 메뉴는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보기"
          }), " 권한만 가집니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.account.visitorOperator",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.visitor",
            product: "2"
          }), " 메뉴만 사용할 수 있는 등급입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사전 정의된 사용자 권한 외 새로운 사용자 권한을 추가하려면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "기본 제공하는 계정의 권한은 수정하거나 삭제할 수 없습니다."
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


;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-manage-account.mdx


const settings_manage_account_frontMatter = {
	id: 'settings-manage-account',
	title: '운영 권한 관리하기',
	description: '등록한 사용자에게 운영 권한을 부여하고 커스텀 권한을 추가 및 설정하는 방법을 안내합니다.',
	keywords: [
		'계정',
		'운영 권한',
		'커스텀 권한'
	],
	isTranslationMissing: true
};
const settings_manage_account_contentTitle = undefined;

const assets = {

};




const settings_manage_account_toc = [{
  "value": "권한 종류 확인하기",
  "id": "권한-종류-확인하기",
  "level": 2
}, ...toc, {
  "value": "사용자에게 운영 권한 부여하기",
  "id": "addUserPermission",
  "level": 2
}, {
  "value": "운영 권한 제외하기",
  "id": "운영-권한-제외하기",
  "level": 2
}, {
  "value": "운영 권한 상세 정보 확인하기",
  "id": "운영-권한-상세-정보-확인하기",
  "level": 2
}];
function settings_manage_account_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcSearch, IcTrash2} = _components;
  if (!Cmd) settings_manage_account_missingMdxReference("Cmd", true);
  if (!IcSearch) settings_manage_account_missingMdxReference("IcSearch", true);
  if (!IcTrash2) settings_manage_account_missingMdxReference("IcTrash2", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["등록한 사용자에게 운영 권한을 부여하고 커스텀 권한을 추가 및 설정하는 방법을 안내합니다. 운영 권한은 사용자가 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Biostar X"
      }), "에서 수행할 수 있는 작업을 제어하는 기능입니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "커스텀 권한"
      }), "은 기본 운영 권한 외에 추가적인 권한을 설정할 수 있는 기능입니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "권한-종류-확인하기",
      children: "권한 종류 확인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), "을 클릭하세요. 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Account"
      }), "를 클릭하세요. 권한 등급에 따라 기본 제공하는 계정을 참고하세요."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addUserPermission",
      children: "사용자에게 운영 권한 부여하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "일반 사용자에게 운영 권한을 부여하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Account"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "계정 목록에서 원하는 계정 종류를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.account.addUser",
            product: "2"
          }), " 옵션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 목록에서 운영 권한을 부여할 사용자를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 사용자를 모두 선택했다면 화면 가장 아래에 있는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자가 많아 찾기 어려울 때 ", (0,jsx_runtime.jsx)(IcSearch, {}), " 버튼을 클릭해 원하는 사용자를 검색하고 선택할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["운영 권한은 사용자 정보를 추가 또는 수정할 때 부여할 수도 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "set-permission",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 정보를 추가 또는 수정할 때 권한을 이미 설정했다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.account.addUser",
              product: "2"
            }), " 옵션에는 추가되어 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "운영-권한-제외하기",
      children: "운영 권한 제외하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자에게 부여한 운영 권한을 제외하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Account"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "계정 목록에서 원하는 계정 종류를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.account.addUser",
            product: "2"
          }), " 옵션에서 운영을 제외할 사용자의 ", (0,jsx_runtime.jsx)(IcTrash2, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 화면 가장 아래에 있는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "운영-권한-상세-정보-확인하기",
      children: "운영 권한 상세 정보 확인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Account"
      }), " 메뉴의 계정 목록에서 계정을 클릭하면 해당 계정의 운영 권한 상세 정보를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": 선택한 운영 권한의 이름입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.accountList.columnDesc",
            product: "2"
          }), ": 권한에 대한 간략한 설명을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.account.menu.detailSetting",
            product: "2"
          }), ": 아이템별 권한이 부여된 그룹을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.account.menu.setting",
            product: "2"
          }), ": 메뉴에 접근할 수 있는 권한을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.account.addUser",
            product: "2"
          }), ": 권한이 부여된 사용자를 확인할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.editRead",
                product: "2"
              }), ": 해당 메뉴의 항목을 추가, 편집, 삭제할 수 있는 권한을 부여합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.read",
                product: "2"
              }), ": 해당 메뉴를 진입하여 설정 내용을 확인만 할 수 있는 권한을 부여합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["특정 사용자에게 권한을 부여하는 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#addUserPermission",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    })]
  });
}
function settings_manage_account_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_manage_account_createMdxContent, {
      ...props
    })
  }) : settings_manage_account_createMdxContent(props);
}
function settings_manage_account_missingMdxReference(id, component) {
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