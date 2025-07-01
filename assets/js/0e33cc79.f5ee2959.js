"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5602"], {
3288: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_install_communication_server_mdx_0e3_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-install-communication-server-mdx-0e3.json
var site_docs_platform_biostar_x_install_communication_server_mdx_0e3_namespaceObject = JSON.parse('{"id":"platform/biostar_x/install-communication-server","title":"커뮤니케이션 서버 설치하기","description":"커뮤니케이션 서버 설치 과정을 안내합니다.","source":"@site/docs/platform/biostar_x/install-communication-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/install-communication-server","permalink":"/docs/platform/biostar_x/install-communication-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/install-communication-server.mdx","tags":[],"version":"current","frontMatter":{"id":"install-communication-server","title":"커뮤니케이션 서버 설치하기","description":"커뮤니케이션 서버 설치 과정을 안내합니다.","keywords":["커뮤니케이션 서버","설치하기"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"업그레이드하기","permalink":"/docs/platform/biostar_x/migration-x"},"next":{"title":"로그인하기","permalink":"/docs/platform/biostar_x/tutorial-login"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/install-communication-server.mdx


const frontMatter = {
	id: 'install-communication-server',
	title: '커뮤니케이션 서버 설치하기',
	description: '커뮤니케이션 서버 설치 과정을 안내합니다.',
	keywords: [
		'커뮤니케이션 서버',
		'설치하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "start-before",
  "level": 2
}, {
  "value": "설치 전 확인 사항",
  "id": "check-before-install",
  "level": 3
}, {
  "value": "설치 안내",
  "id": "install-guide",
  "level": 2
}, {
  "value": "설치 후 확인 사항",
  "id": "check-after-install",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["이 문서에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "커뮤니케이션(Communication) 서버"
      }), "를 설치하는 방법을 안내합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커뮤니케이션 서버는 출입통제 장치들과의 통신을 전담하는 서버입니다. 메인 서버와 별도로 설치하여 많은 수의 장치를 안정적으로 관리할 수 있도록 도와줍니다. 한 대의 커뮤니케이션 서버로 최대 1,000대의 장치를 연결할 수 있으며, 필요에 따라 여러 대의 커뮤니케이션 서버를 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start-before",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커뮤니케이션 서버를 설치하기 전에 다음 사항을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["커뮤니케이션 서버는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서버와 같은 서버에 설치할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["커뮤니케이션 서버는 64비트 운영 체제에서만 설치할 수 있습니다. 시스템 최소 요구 사항에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "system-requirements#communication-server",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-before-install",
      children: "설치 전 확인 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["커뮤니케이션 서버를 설치하기 전에 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), "를 실행해 설치 중 입력해야 하는 정보를 확인하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows에서 ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), " 창이 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICE SETTINGS"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래에 커뮤니케이션 서버 설치 시 입력해야 하는 정보가 나와 있습니다. 각 항목을 확인하고 준비하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "BioStar X Service Manager"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "커뮤니케이션 서버 설치 시 입력 정보"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Server (Main)"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Server Address"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Server IP for Communication"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Coordinator Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Client Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Coordinator Service Port for Communication"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Cache Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Client Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Cache Service Client for Communication"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Server (Main)"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "gRPC Server Port"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["BioStar X Server gRPC ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Server gRPC Port for Communication"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "install-guide",
      children: "설치 안내"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커뮤니케이션 서버를 설치하려면 다음 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://download.supremainc.com/",
            children: "슈프리마 다운로드 센터"
          }), "로 접속해 로그인한 후 설치 패키지(", (0,jsx_runtime.jsx)(_components.em, {
            children: "BioStar X Communications Server.X.Y.X.BB.exe"
          }), ")를 다운로드하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다운로드한 설치 파일을 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용할 언어를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.ok",
            className: "bold"
          }), " 버튼을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-select-language.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["커뮤니케이션 서버를 설치할 경로를 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-set-path.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["개인 정보에 대한 권한과 책임 내용을 확인하고 설치를 계속하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-private-policy.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["커뮤니케이션 서버의 구성 요소를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-select-component.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar X 서버와 연결하기 위해 각 항목을 입력하세요. 설정을 완료하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " 버튼을 클릭하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#check-before-install",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["통신을 위한 포트를 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-port-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설치 준비를 완료했다면 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.btnInstall",
            className: "bold"
          }), " 버튼을 클릭하세요. 설치를 진행합니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-install-step.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설치 완료 메시지를 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.finish",
            className: "bold"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-complete.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["커뮤니케이션 서버 설치를 완료합니다. 설치를 완료하면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 메인 서버에서 커뮤니케이션 서버와 연결되었는지 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-after-install",
      children: "설치 후 확인 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["커뮤니케이션 서버 설치를 완료하면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 메인 서버에서 커뮤니케이션 서버와 연결되었는지 확인할  수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows에서 ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), " 창이 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "COMMUNICATION SERVERS"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["커뮤니케이션 서버 목록에서 설치한 커뮤니케이션 서버의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Server Status"
          }), " 열이 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Connected"
          }), " 상태인지 확인하세요."]
        }), "\n"]
      }), "\n"]
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