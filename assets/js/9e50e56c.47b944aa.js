"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6576"], {
6428: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_20_settings_managing_administrators_in_airfob_space_mdx_9e5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-20-settings-managing-administrators-in-airfob-space-mdx-9e5.json
var site_docs_platform_biostar_air_20_settings_managing_administrators_in_airfob_space_mdx_9e5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-administrators","title":"관리자 관리하기","description":"BioStar Air에서 관리자 초대, 역할 수준 지정, 권한 관리, Observer, Operator, Administrator 및 Master 역할에 대한 출입 통제 설정 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/20-settings-managing-administrators-in-airfob-space.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-administrators","permalink":"/docs/platform/biostar_air/managing-administrators","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/20-settings-managing-administrators-in-airfob-space.mdx","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"id":"managing-administrators","title":"관리자 관리하기","description":"BioStar Air에서 관리자 초대, 역할 수준 지정, 권한 관리, Observer, Operator, Administrator 및 Master 역할에 대한 출입 통제 설정 방법을 안내합니다.","keywords":["관리자","역할","출입 통제 설정"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"보고서 구성하기","permalink":"/docs/platform/biostar_air/configuring-reports"},"next":{"title":"사이트 설정하기","permalink":"/docs/platform/biostar_air/site-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/20-settings-managing-administrators-in-airfob-space.mdx


const frontMatter = {
	id: 'managing-administrators',
	title: '관리자 관리하기',
	description: 'BioStar Air에서 관리자 초대, 역할 수준 지정, 권한 관리, Observer, Operator, Administrator 및 Master 역할에 대한 출입 통제 설정 방법을 안내합니다.',
	keywords: [
		'관리자',
		'역할',
		'출입 통제 설정'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "기능 개요",
  "id": "feature-overview",
  "level": 2
}, {
  "value": "관리자 섹션으로 이동하기",
  "id": "navigating-to-admins-section",
  "level": 2
}, {
  "value": "관리자 관리",
  "id": "managing-administrators",
  "level": 2
}, {
  "value": "관리자 보기",
  "id": "viewing-administrators",
  "level": 3
}, {
  "value": "관리자 비활성화",
  "id": "deactivating-an-administrator",
  "level": 3
}, {
  "value": "관리자 역할 변경",
  "id": "changing-an-administrators-role",
  "level": 3
}, {
  "value": "새로운 관리자 초대",
  "id": "inviting-a-new-administrator",
  "level": 3
}, {
  "value": "관리자 레벨",
  "id": "administrator-levels",
  "level": 2
}, {
  "value": "1. Observer (Lowest Level)",
  "id": "observer",
  "level": 3
}, {
  "value": "2. Operator",
  "id": "operator",
  "level": 3
}, {
  "value": "3. Administrator",
  "id": "administrator",
  "level": 3
}, {
  "value": "4. Master (Highest Level)",
  "id": "master",
  "level": 3
}, {
  "value": "관리자 접근 개요",
  "id": "admin-access-overview",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {YouTube} = _components;
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "기능 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air의 관리자 기능을 사용하면 조직 내 관리자 계정을 관리하고, 역할을 할당하고, 출입 레벨을 제어할 수 있습니다. 이를 통해 보안 및 관리 제어를 유지하면서 적합한 담당자에게 적절한 권한을 부여할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-admins-section",
      children: "관리자 섹션으로 이동하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["왼쪽 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용 가능한 옵션에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Admins"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "pUyNLeTfGRI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "managing-administrators",
      children: "관리자 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "viewing-administrators",
      children: "관리자 보기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자 메뉴에서는 모든 활성 관리자 목록을 볼 수 있습니다. 여기에는 아래 항목이 포함됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이름"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이메일 주소"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "관리자 수준"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "계정 상태 (활성/비활성)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deactivating-an-administrator",
      children: "관리자 비활성화"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자를 삭제하는 대신 계정을 비활성화할 수 있으며, 이를 통해 나중에 다시 활성화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 관리자를 찾으세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비활성화 옵션을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비활성화를 확인하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "changing-an-administrators-role",
      children: "관리자 역할 변경"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자보다 높은 관리자 레벨이 있는 경우 역할을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 관리자를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "새 관리자 레벨을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "업데이트를 확인하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "마스터 관리자만이 다른 마스터 관리자를 할당하거나 수정할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inviting-a-new-administrator",
      children: "새로운 관리자 초대"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "새로운 관리자를 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Invite Administrator"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이메일 주소를 입력하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "관리자 역할을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "초대장을 보냅니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["각 관리자는 고유한 이메일 주소를 가져야 합니다. 필요하다면 별칭 주소(예: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:erik+training@example.com",
          children: "erik+training@example.com"
        }), ")를 사용할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "administrator-levels",
      children: "관리자 레벨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air의 각 관리자 레벨은 특정 권한을 가지며, 높은 레벨은 낮은 레벨의 권한을 상속받습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observer",
      children: "1. Observer (Lowest Level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["대시보드와 로그를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "볼 수 있습니다"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "내보내고"
          }), " 보고서를 생성할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정, 사용자 또는 장치를 수정할 수 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "없습니다"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메뉴 진입에 제한됩니다. 대부분의 메뉴가 화면에 나타나지 않습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operator",
      children: "2. Operator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "출입 레벨"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 그룹"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "일정"
          }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "휴일 그룹"
          }), "을 관리할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 제어 또는 관리 설정에 대한 접근 권한이 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "없습니다"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일상적인 사용자 및 출입 구성을 관리하는 데 적합합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "administrator",
      children: "3. Administrator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["새로운 관리자를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "초대할 수 있습니다"
          }), ". 하지만 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Master Administrator"
          }), " 역할을 할당할 수는 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "전체 장치 제어"
          }), " 권한이 있어 설정을 수정하고 연결된 장치를 관리할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Master Administrator"
          }), "를 삭제하거나 수정할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일반적으로 시스템 관리를 담당하는 IT 직원이 사용합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "master",
      children: "4. Master (Highest Level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정 및 기능에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "전체 접근"
          }), " 권한이 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Administrators"
          }), "에 의해 삭제되거나 수정될 수 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "없습니다"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "하위 사이트"
          }), "를 생성하여 다양한 위치 또는 조직을 관리할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사이트 설정"
          }), "을 구성할 수 있으며, 여기에는 중요한 시스템 전체 구성도 포함됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다른 관리자가 로그인하기 전에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "약관"
          }), "에 동의할 책임이 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일반적으로 회사 소유자 또는 높은 신뢰를 받는 임원에게 할당할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "admin-access-overview",
      children: "관리자 접근 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "각 관리자 수준은 BioStar Air 전반에 걸쳐 서로 다른 권한을 가지고 있습니다. Observer는 가장 제한된 접근을 가지며, 화면에 나타나지 않는 제한된 메뉴가 있습니다."
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