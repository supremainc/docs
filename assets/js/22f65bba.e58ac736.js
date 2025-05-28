"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5839"], {
7759: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_user_template_mdx_22f_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-user-template-mdx-22f.json
var site_docs_platform_biostar_x_user_template_mdx_22f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/user-template","title":"사용자 템플릿 관리하기","description":"사용자 템플릿을 활용하면, 신규 사용자 등록을 표준화하고 시간을 절약하여 효율적인 사용자 관리가 가능합니다.","source":"@site/docs/platform/biostar_x/user-template.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/user-template","permalink":"/docs/platform/biostar_x/user-template","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/user-template.mdx","tags":[],"version":"current","frontMatter":{"id":"user-template","title":"사용자 템플릿 관리하기","description":"사용자 템플릿을 활용하면, 신규 사용자 등록을 표준화하고 시간을 절약하여 효율적인 사용자 관리가 가능합니다.","keywords":["사용자 템플릿"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"사용자 정보 내보내기/가져오기","permalink":"/docs/platform/biostar_x/export-import-user-info"},"next":{"title":"출입 권한별 사용자 확인하기","permalink":"/docs/platform/biostar_x/view-user-by-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
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
  "id": "create-a-user-template",
  "level": 2
}, {
  "value": "템플릿으로 사용자 추가",
  "id": "add-user-as-a-template",
  "level": 2
}, {
  "value": "템플릿 수정",
  "id": "template-modification",
  "level": 2
}, {
  "value": "템플릿 삭제",
  "id": "delete-template",
  "level": 2
}, {
  "value": "보기 옵션 선택",
  "id": "select-view-options",
  "level": 2
}, {
  "value": "템플릿 목록 페이지 이동",
  "id": "template-list-page-moves",
  "level": 3
}, {
  "value": "템플릿 목록 표시 개수 변경",
  "id": "change-number-of-users-list-indications",
  "level": 3
}, {
  "value": "템플릿 검색하기",
  "id": "search-template",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcBw, IcDown, IcFirst, IcFw, IcLast, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcDown) _missingMdxReference("IcDown", true);
  if (!IcFirst) _missingMdxReference("IcFirst", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!IcLast) _missingMdxReference("IcLast", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 템플릿은 조직 및 부서별 기본 정보를 표준화하여, 신규 사용자 등록 프로세스를 간소화하고 관리 효율을 높일 수 있습니다. 템플릿을 사용해 모든 신규 사용자에 대해 일관된 정보와 권한을 빠르고 정확하게 적용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "create-a-user-template",
      children: "사용자 템플릿 생성"
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
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.sidebar.template"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 위에 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.userTemplate.newTemplate"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["템플릿 생성 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.information"
          }), "에서 템플릿 이름, 이메일, 부서 등을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-new-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " 섹션에서 출입 그룹을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["입력을 완료하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " 버튼을 클릭하면 템플릿이 저장됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "템플릿 목록에서 추가한 새 템플릿을 확인하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["부서는 조직 구조를 반영하여 사용자를 구분하는 데 사용됩니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user-basic-info",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["그룹은 여러 사용자를 하나로 묶어 출입 권한을 한 번에 적용하기 위해 사용됩니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "user-group-manage",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.accessGroup"
            }), "은 특정 출입 구역에 대한 사용자 권한을 정의하며 사용자에게 일괄적으로 출입 권한을 부여하는 데 사용됩니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-user-as-a-template",
      children: "템플릿으로 사용자 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "추가한 템플릿으로 신규 사용자를 추가하려면 다음 단계를 따르세요."
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
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), " 버튼 오른쪽에 ", (0,jsx_runtime.jsx)(IcDown, {}), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-add-user-from-template.png"
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
            sid: "common.save"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록에서 템플릿으로 추가한 신규 사용자를 확인하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자 추가에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "add-user",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-modification",
      children: "템플릿 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이미 만들어진 사용자 템플릿을 수정할 수 있습니다."
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
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.sidebar.template"
          }), "을 클릭하세요."]
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
            sid: "common.save"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "수정한 내용이 템플릿에 반영됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-template",
      children: "템플릿 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "불필요한 사용자 템플릿을 삭제할 수 있습니다."
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
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.sidebar.template"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿 목록에서 삭제하려는 항목의 가장 왼쪽에 체크박스를 클릭하세요. 1개 이상의 템플릿을 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["확인 메시지가 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "템플릿 목록에서 선택한 템플릿이 삭제됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "team.userTemplate.title"
        }), " 목록에서 모든 템플릿을 선택하려면 화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.selectAll"
        }), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "select-view-options",
      children: "보기 옵션 선택"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 오른쪽 상단의 도구 버튼을 이용해 사용자 템플릿 목록의 보기 옵션을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자 템플릿 목록에서 열(column)의 헤더 항목을 변경할 수 있습니다 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "team.menu.columnLayout"
        }), " 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "columnlayout",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "template-list-page-moves",
      children: "템플릿 목록 페이지 이동"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "템플릿 목록에는 기본 10개의 템플릿을 표시합니다. 화면 상단의 버튼을 클릭해 다른 페이지로 이동할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-template-list-pagenation.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFirst, {}), " : 사용자 템플릿 목록의 첫 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFw, {}), " : 사용자 템플릿 목록의 이전 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcBw, {}), " : 사용자 템플릿 목록의 다음 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcLast, {}), " : 사용자 템플릿 목록의 마지막 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 페이지로 이동하려면 숫자 입력 필드에 페이지 번호를 입력하고 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " 키를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-number-of-users-list-indications",
      children: "템플릿 목록 표시 개수 변경"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "템플릿 목록에 표시되는 개수를 변경할 수 있습니다. 화면 오른쪽 상단의 목록 선택 상자에서 원하는 표시 개수를 선택하세요. 선택할 수 있는 옵션은 10, 25, 50, 100입니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-template-list-select-row.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "search-template",
      children: "템플릿 검색하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["템플릿 목록에서 원하는 템플릿을 검색할 수 있습니다. 화면 오른쪽 상단의 검색 입력 필드에 키워드를 입력하고 ", (0,jsx_runtime.jsx)(Kbd, {
        children: "Enter"
      }), " 키를 누르세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-template-list-search.png"
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