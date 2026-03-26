"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["19713"], {
77785: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_add_operators_mdx_149_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-add-operators-mdx-149.json
var site_docs_device_vionyx_webserver_add_operators_mdx_149_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/add-operators","title":"운영자 추가하기","description":"카메라 운영을 위한 추가 관리자(운영자) 계정을 추가하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/add-operators.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/add-operators","permalink":"/docs/ja/device/vionyx_webserver/add-operators","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/add-operators.mdx","tags":[],"version":"current","frontMatter":{"id":"add-operators","title":"운영자 추가하기","description":"카메라 운영을 위한 추가 관리자(운영자) 계정을 추가하는 방법을 안내합니다.","keywords":["운영자","관리자","계정","추가","권한","Operator"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"관리자 계정 비밀번호 업데이트하기","permalink":"/docs/ja/device/vionyx_webserver/update-admin-password"},"next":{"title":"시스템 로그 확인하기","permalink":"/docs/ja/device/vionyx_webserver/view-system-logs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/add-operators.mdx


const frontMatter = {
	id: 'add-operators',
	title: '운영자 추가하기',
	description: '카메라 운영을 위한 추가 관리자(운영자) 계정을 추가하는 방법을 안내합니다.',
	keywords: [
		'운영자',
		'관리자',
		'계정',
		'추가',
		'권한',
		'Operator'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "운영자 권한 종류",
  "id": "운영자-권한-종류",
  "level": 2
}, {
  "value": "운영자 추가",
  "id": "운영자-추가",
  "level": 2
}, {
  "value": "운영자 권한 변경",
  "id": "운영자-권한-변경",
  "level": 2
}, {
  "value": "운영자 비활성화",
  "id": "운영자-비활성화",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "관리자 외에 제한된 권한을 가진 운영자(Operator) 계정을 추가할 수 있습니다. 운영자는 관리자를 대신하여 카메라의 일부 기능을 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음과 같은 상황에서 운영자를 추가하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 운영을 위해 추가 담당자를 배정하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 권한만 제한적으로 부여하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "여러 명이 협력하여 카메라를 관리해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "팀 구성원에게 읽기 전용 또는 편집 권한을 부여하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "최대 10명까지 운영자를 추가할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "운영자는 다른 운영자를 추가할 수 없습니다. 관리자만 운영자를 추가할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["운영자 비밀번호는 관리자 비밀번호와 동일한 규칙을 따릅니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "device/vionyx_webserver/update-admin-password"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "각 운영자는 자신의 계정 정보만 변경할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "운영자-권한-종류",
      children: "운영자 권한 종류"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "운영자를 추가할 때 다음 2가지 권한 중 하나를 선택해야 합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "read_only",
            product: "cam",
            className: "bold"
          }), ": 모든 카메라 설정과 로그를 조회할 수 있으며, 설정을 변경할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "read_write",
            product: "cam",
            className: "bold"
          }), ": 관리자 메뉴를 제외한 모든 메뉴에 접근할 수 있으며, 카메라 서정을 변경할 수 잇습니다. 자신의 비밀번호를 변경할 수 있으나 다른 운영자나 관리자 계정의 비밀번호는 변경할 수 없습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "운영자-추가",
      children: "운영자 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "system",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "account_management",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-system-account-manage.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "operator",
            product: "cam"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_button",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_operator",
            product: "cam"
          }), " 팝업창이 나타나면 필요한 정보를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-system-add-operator.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "id",
                product: "cam"
              }), ": 운영자의 고유 아이디를 입력하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "최대 64자까지 입력할 수 있습니다."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "한글, 영문, 숫자를 포함할 수 있습니다."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["특수문자(", (0,jsx_runtime.jsx)(_components.code, {
                    children: "_"
                  }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "."
                  }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "-"
                  }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "("
                  }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                    children: ")"
                  }), ")를 사용할 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "다른 운영자와 중복될 수 없습니다."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "password",
                product: "cam"
              }), ": 운영자의 비밀번호를 입력합니다. 관리자 비밀번호와 동일한 규칙을 따릅니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
                docId: "device/vionyx_webserver/update-admin-password"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "confirm_password",
                product: "cam"
              }), ": 비밀번호를 다시 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "permission",
                product: "cam"
              }), ": 운영자의 권한을 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "enabled",
                product: "cam"
              }), ": 운영자의 계정을 활성화 또는 비활성화할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 정보를 입력한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "새로운 운영자를 추가하면 목록에 새로운 계정이 표시됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "운영자를 추가한 후 해당 계정으로 로그인하여 권한이 올바르게 적용되었는지 확인하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "운영자의 아이디와 비밀번호를 안전하게 운영자에게 전달하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "운영자-권한-변경",
      children: "운영자 권한 변경"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "추가된 운영자의 권한을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "system",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "account_management",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "operator",
            product: "cam"
          }), " 섹션에서 권한을 변경할 운영자를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["운영자 편집 팝업창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "permission",
            product: "cam"
          }), " 선택 항목에서 원하는 권한으로 변경하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "운영자-비활성화",
      children: "운영자 비활성화"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "운영자의 계정을 일시적으로 비활성화할 수 있습니다. 계정을 삭제하지 않고 접근만 차단합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "system",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "account_management",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "operator",
            product: "cam"
          }), " 섹션에서 비활성화할 운영자를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["운영자 편집 팝업창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "enabled",
            product: "cam"
          }), " 항목에서 토글 버튼을 클릭하여 계정을 비활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "운영자 계정이 비활성화되어 더 이상 로그인할 수 없습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비활성화된 계정은 나중에 다시 활성화할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "운영자가 이미 로그인된 상태라면, 다음 로그인을 시도할 때 접근이 거부됩니다."
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