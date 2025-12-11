"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["70576"], {
39230: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_linkpass_credentials_mdx_db9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-linkpass-credentials-mdx-db9.json
var site_docs_platform_biostar_air_linkpass_credentials_mdx_db9_namespaceObject = JSON.parse('{"id":"platform/biostar_air/linkpass-credentials","title":"LinkPass 크리덴셜","description":"BioStar Air의 클라우드 기반 출입문 제어를 통해 게스트 출입, 배달 등 앱이 없는 임시 사용자를 위해 LinkPass 크리덴셜을 발급하고 관리하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/linkpass-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/linkpass-credentials","permalink":"/platform/biostar_air/linkpass-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/linkpass-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"linkpass-credentials","title":"LinkPass 크리덴셜","description":"BioStar Air의 클라우드 기반 출입문 제어를 통해 게스트 출입, 배달 등 앱이 없는 임시 사용자를 위해 LinkPass 크리덴셜을 발급하고 관리하는 방법을 안내합니다.","keywords":["LinkPass","크리덴셜","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"BioStar Air 앱에서 사용자 관리 및 추가하기","permalink":"/platform/biostar_air/managing-adding-users"},"next":{"title":"등록 장치 관리하기","permalink":"/platform/biostar_air/managing-registered-devices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/linkpass-credentials.mdx


const frontMatter = {
	id: 'linkpass-credentials',
	title: 'LinkPass 크리덴셜',
	description: 'BioStar Air의 클라우드 기반 출입문 제어를 통해 게스트 출입, 배달 등 앱이 없는 임시 사용자를 위해 LinkPass 크리덴셜을 발급하고 관리하는 방법을 안내합니다.',
	keywords: [
		'LinkPass',
		'크리덴셜',
		'BioStar Air'
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
  "value": "LinkPass 기능 사용 안내",
  "id": "navigating-to-the-feature",
  "level": 2
}, {
  "value": "단계별 사용 안내",
  "id": "step-by-step-instructions",
  "level": 2
}, {
  "value": "사용자가 LinkPass를 사용하는 방법",
  "id": "how-users-use-linkpass",
  "level": 2
}, {
  "value": "일반적인 문제 및 고려 사항",
  "id": "common-issues-and-considerations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "기능 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LinkPass는 BioStar Air에서 앱 없이 사용할 수 있는 모바일 크리덴셜입니다. 관리자는 앱을 설치하거나 BLE/NFC를 사용하지 않고도 사용자에게 출입 권한을 부여할 수 있습니다. LinkPass는 BioStar Air 클라우드를 통해 작동하며 보안 웹 링크를 통해 활성화되므로, 고객 출입, 배달, 또는 주차장 게이트나 로비와 같은 보안 등급이 낮은 출입구에서 사용하기에 적합합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-the-feature",
      children: "LinkPass 기능 사용 안내"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LinkPass 크리덴셜을 발급하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Admin Portal"
          }), "에 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Users"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "새 사용자를 생성하거나 기존 사용자를 편집하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Card Detail"
          }), " 섹션으로 스크롤하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Web Card"
          }), "를 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LinkPass"
          }), "의 체크박스를 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-instructions",
      children: "단계별 사용 안내"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Admin Portal"
          }), "로 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Users"
          }), " 탭으로 이동하여 기존 사용자를 선택하거나 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "+ Add User"
          }), "를 클릭하여 새 사용자를 생성하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 세부 정보 보기에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Card Detail"
          }), " 섹션으로 스크롤하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Web Card"
          }), " 옵션을 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LinkPass"
          }), "의 체크박스를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["크리덴셜 링크를 받을 수 있는 고유한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "이메일 주소"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "전화번호"
          }), "를 사용자에게 할당하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["적절한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "출입 등급"
          }), "을 할당하고 사용자의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "유효 기간"
          }), "을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["크리덴셜을 발급하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자에게 고유한 LinkPass URL이 포함된 초대장을 이메일 또는 SMS로 전송합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-users-use-linkpass",
      children: "사용자가 LinkPass를 사용하는 방법"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이메일 또는 SMS로 전송 받은 사용자는 메시지의 LinkPass URL을 여세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["웹 페이지에는 사용자에게 할당된 모든 출입문이 표시되며, 각 출입문에는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "열기"
          }), " 버튼이 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "열기"
          }), "를 클릭하면 클라우드 기반 잠금 해제 명령이 리더기로 전송되어 출입문을 열 수 있습니다. BLE 또는 NFC가 필요하지 않습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-issues-and-considerations",
      children: "일반적인 문제 및 고려 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "크리덴셜 범위"
          }), ": LinkPass 자격 증명은 사용자에게 할당된 다른 자격 증명과 동일한 출입문에 대한 접근을 허용합니다. 따라서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보안 구역 접근 권한이 있는 사용자에게 LinkPass 자격 증명을 발급하지 마세요"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "앱 필요 없음"
          }), ": LinkPass는 웹 브라우저를 통해 작동하므로 모바일 앱, Bluetooth 또는 NFC가 필요하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "클라우드 기반 액세스"
          }), ": LinkPass 명령은 BioStar Air 클라우드를 통해 전송되며 인터넷에 연결된 모든 곳에서 활성화할 수 있습니다. 위치 공유 또는 위치 추적 기능은 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "리더기 연결성"
          }), ": 출입문 리더기에서 LinkPass가 올바르게 작동하려면 온라인 상태여야 하며 BioStar Air에 연결되어 있어야 합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용 사례 권장 사항"
          }), ": LinkPass는 임시 방문자, 배달 및 로비 또는 주차 게이트와 같은 보안 등급이 낮은 지역에 적합합니다."]
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