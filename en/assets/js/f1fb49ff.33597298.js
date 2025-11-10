"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["53358"], {
62242: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_corestation_setup_manager_initial_setup_mdx_f1f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-corestation-setup-manager-initial-setup-mdx-f1f.json
var site_docs_device_corestation_setup_manager_initial_setup_mdx_f1f_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/initial-setup","title":"장치 초기 설정하기","description":"CoreStation Setup Manager 사용을 위한 초기 절차를 안내합니다.","source":"@site/docs/device/corestation_setup_manager/initial-setup.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/initial-setup","permalink":"/docs/en/device/corestation_setup_manager/initial-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/initial-setup.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup","title":"장치 초기 설정하기","description":"CoreStation Setup Manager 사용을 위한 초기 절차를 안내합니다.","keywords":["CoreStation","초기 설정","인증서 설치","관리자 등록"],"isTranslationMissing":true},"sidebar":"corestation_setup_manager","previous":{"title":"시작하기","permalink":"/docs/en/device/corestation_setup_manager/getting-started"},"next":{"title":"장치 구성","permalink":"/docs/en/device/corestation_setup_manager/configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/corestation_setup_manager/initial-setup.mdx


const frontMatter = {
	id: 'initial-setup',
	title: '장치 초기 설정하기',
	description: 'CoreStation Setup Manager 사용을 위한 초기 절차를 안내합니다.',
	keywords: [
		'CoreStation',
		'초기 설정',
		'인증서 설치',
		'관리자 등록'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager는 웹 기반 서비스를 제공합니다. 따라서 CoreStation을 이용해 중앙 집중형 출입통제 시스템을 구축할 때 배선을 완료한 뒤 어디서나 웹 브라우저를 통해 CoreStation Setup Manager에 접속하여 CoreStation의 연결 상태를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager를 처음 사용하는 경우, CoreStation을 연결하고 초기 설정을 진행하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation에 케이블 연결을 완료하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "웹 브라우저를 실행하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "크롬 75 버전 이상인 웹 브라우저를 사용하세요."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["웹 브라우저의 주소 입력 필드에 기본 IP 주소 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://169.254.0.1:3001"
          }), "를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그인 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download https certification"
          }), "을 클릭하세요. CoreStation Setup Manager에 처음 접속할 경우 HTTPS를 올바르게 사용하기 위해 인증서를 설치해야 합니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/initial-main.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "cs_client.crt"
          }), " 파일을 실행하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "파일 열기"
          }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보안 경고"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "열기"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "인증서"
          }), " 창에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "인증서 설치"
          }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "인증서 가져오기 마법사"
          }), "가 실행됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["계속하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["인증서 저장소를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "마침"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "확인"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 ID와 로그인 비밀번호를 입력하세요. 최초 접속 시의 사용자 ID와 로그인 비밀번호는 모두 'admin'입니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["관리자 계정을 등록하려면 각 항목을 설정한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/initial-setup-new-user.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "명칭"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "기능 설명"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "ID"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["ID는 자동으로 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "0"
                }), "으로 설정되며 변경할 수 없습니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Name"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["관리자 이름을 입력하세요.", (0,jsx_runtime.jsx)("br", {}), "- 이름은 최대 48자까지 입력할 수 있습니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Operator Level"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Operator Level은 자동으로 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Administrator"
                }), "로 설정되며 변경할 수 없습니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Login ID"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["로그인 ID를 입력하세요.", (0,jsx_runtime.jsx)("br", {}), "- 로그인 ID는 최대 32자까지 입력할 수 있습니다."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Password"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["로그인 비밀번호를 입력하세요.", (0,jsx_runtime.jsx)("br", {}), "- 로그인 비밀번호는 7~32자의 영숫자와 기호의 조합으로 입력하세요."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Confirm Password"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "확인을 위해 로그인 비밀번호를 다시 입력하세요."
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로그인 화면으로 전환됩니다. 등록한 관리자 계정으로 로그인하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "관리자 계정은 CoreStation Setup Manager에 최초 접속할 때만 설정할 수 있으며, 한 명의 사용자만 지정할 수 있습니다. 등록이 완료되면 최초 접속 시 사용한 기본 사용자 ID와 로그인 비밀번호는 더 이상 사용할 수 없습니다. 또한, 관리자 계정은 공장 초기화를 포함한 모든 설정을 확인하고 편집할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CoreStation Setup Manager 1.01 버전부터는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 1"
            }), " 관리자 등급의 명칭이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Administrator"
            }), "로 변경되었으며, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 2"
            }), " ~ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 3"
            }), " 등급의 관리자 계정은 더 이상 지원하지 않습니다."]
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