"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["2868"], {
"332": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_add_user_basic_info_mdx_bd4_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-add-user-basic-info-mdx-bd4.json
var site_docs_platform_biostar_x_add_user_basic_info_mdx_bd4_namespaceObject = JSON.parse('{"id":"platform/biostar_x/add-user-basic-info","title":"사용자 기본 정보 입력하기","description":"사용자의 기본 정보 입력에 대한 자세한 내용은 안내합니다.","source":"@site/docs/platform/biostar_x/add-user-basic-info.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/add-user-basic-info","permalink":"/docs/en/platform/biostar_x/add-user-basic-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/add-user-basic-info.mdx","tags":[],"version":"current","frontMatter":{"id":"add-user-basic-info","title":"사용자 기본 정보 입력하기","description":"사용자의 기본 정보 입력에 대한 자세한 내용은 안내합니다.","keywords":["사용자","사용자 그룹"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"사용자 등록하기","permalink":"/docs/en/platform/biostar_x/add-user"},"next":{"title":"사용자 권한 설정하기","permalink":"/docs/en/platform/biostar_x/set-permission"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/add-user-basic-info.mdx


const frontMatter = {
	id: 'add-user-basic-info',
	title: '사용자 기본 정보 입력하기',
	description: '사용자의 기본 정보 입력에 대한 자세한 내용은 안내합니다.',
	keywords: [
		'사용자',
		'사용자 그룹'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcCamera, IcTrash, IcUpload, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamera) _missingMdxReference("IcCamera", true);
  if (!IcTrash) _missingMdxReference("IcTrash", true);
  if (!IcUpload) _missingMdxReference("IcUpload", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.information"
      }), " 섹션에서 사용자의 기본 정보를 입력하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사진"
          }), ": 사용자의 사진을 등록하세요. 웹캡으로 사진을 촬영하거나 PC에서 사진을 업로드할 수 있습니다. 프로필에 마우스를 오버하면 사용할 수 있는 도구가 표시됩니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcCamera, {}), ": PC에 웹캡이 연결되어 있다면 버튼을 클릭해 사진을 촬영하고 등록할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcUpload, {}), ": PC에 저장된 이미지 파일을 업로드할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcTrash, {}), ": 현재 적용된 사진을 삭제할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.id"
          }), ": 사용자에게 부여할 고유 ID를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.firstName"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.lastName"
          }), ": 사용자의 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.email"
          }), ": 이메일을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.phone"
          }), ": 전화번호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.department"
          }), ": 사용자가 소속된 부서를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.title"
          }), ": 사용자의 직함을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.group"
          }), ": 사용자의 그룹을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.period"
          }), ": 사용자 계정을 사용할 기간을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.status"
          }), ": 사용자 계정을 사용하지 않도록 임시로 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 이름은 특수 기호를 포함하여 최대 48자까지 입력할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["특수 기호: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "~"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "!"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "@"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "#"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "$"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "%"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "^"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "&"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "("
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: ")"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "_"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "="
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "+"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "["
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "]"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "{"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "}"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: ";"
              }), " ", (0,jsx_runtime.jsx)("code", {
                children: "`"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "모바일 출입 카드에 사용자의 사진, 부서, 직함을 표시하려면, 반드시 사진을 추가하고 부서와 직함을 입력하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["직함 및 부서명은 특수 기호 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "공백"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_"
            }), "를 포함해 최대 64자까지 입력할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "모바일 출입 카드를 사용한다면, 발송 방법에 따라 이메일 전송 시 사용자의 이메일을, 문자 메시지 전송 시 사용자의 전화번호를 반드시 입력하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비주얼 페이스 모바일 등록, 보안 QR을 사용하려면 반드시 사용자의 이메일 주소를 입력하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 그룹 추가 및 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.userTemplate.table.customField"
            }), " 추가 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "set-permission",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " 섹션에서 사용자의 출입 권한 설정 방법을 확인하세요."]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "enroll-credential",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.title"
          }), " 섹션에서 사용자 크리덴션을 등록하고 출입 인증 방식을 설정하세요."]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "edit-user",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 정보를 수정하는 방법을 확인하세요."
        })
      })]
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