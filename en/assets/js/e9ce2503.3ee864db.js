"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3453"], {
2377: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_remote_access_mdx_e9c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-remote-access-mdx-e9c.json
var site_docs_platform_biostar_x_settings_remote_access_mdx_e9c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-remote-access","title":"리모트 액세스 설정하기","description":"ngrok 서비스를 통해 리모트 액세스를 설정하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-remote-access.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-remote-access","permalink":"/docs/en/platform/biostar_x/settings-remote-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-remote-access.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-remote-access","title":"리모트 액세스 설정하기","description":"ngrok 서비스를 통해 리모트 액세스를 설정하는 방법을 안내합니다.","keywords":["리모트","액세스","ngrok"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"Directory Integration Settings","permalink":"/docs/en/platform/biostar_x/settings-diretory-integration"},"next":{"title":"플러그인","permalink":"/docs/en/platform/biostar_x/plugins"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-remote-access.mdx


const frontMatter = {
	id: 'settings-remote-access',
	title: '리모트 액세스 설정하기',
	description: 'ngrok 서비스를 통해 리모트 액세스를 설정하는 방법을 안내합니다.',
	keywords: [
		'리모트',
		'액세스',
		'ngrok'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "언제 사용하나요?",
  "id": "언제-사용하나요",
  "level": 2
}, {
  "value": "리모트 액세스 설정",
  "id": "리모트-액세스-설정",
  "level": 2
}, {
  "value": "리모트 액세스 라이선스 활성화",
  "id": "리모트-액세스-라이선스-활성화",
  "level": 3
}, {
  "value": "리모트 액세스 활성화",
  "id": "리모트-액세스-활성화",
  "level": 3
}, {
  "value": "ngrok 설정 정보 입력",
  "id": "ngrok-설정-정보-입력",
  "level": 3
}, {
  "value": "엔드포인트 URL 접속",
  "id": "엔드포인트-url-접속",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["리모트 액세스(Remote Access)는 ngrok 서비스를 통해 외부 네트워크에서 내부 네트워크로 안전하게 접속할 수 있는 기능입니다. 이 기능을 사용하면 방화벽 설정이나 포트 포워딩 없이도 원격지에서 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버에 접속할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["리모트 액세스(Remote Access) 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "어드밴스"
            }), "(Advanced) 라이선스 이상에서 추가 옵션을 통해 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "리모트 액세스 라이선스를 구매하면 슈프리마에서는 리모트 액세스 라이선스 발급 및 리모트 액세스 사용을 위한 ngrok 슈프리마 사이트의 bot 계정, 엔드포인트를 생성하고 라이선스 문서를 사용자에게 제공합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "리모트 액세스(Remote Access) 기능은 제3자 서비스인 ngrok의 터널링을 통해 제공됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStar X는 단순히 ngrok API를 호출하여 연결을 지원할 뿐, 인터넷 연결의 보안성, 안전성, 연속성은 ngrok 서비스에 전적으로 의존합니다. 따라서 본 기능 사용 중 발생할 수 있는 보안 사고, 데이터 손실, 시스템 침해 등에 대하여 슈프리마는 어떠한 책임도 지지 않습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "언제-사용하나요",
      children: "언제 사용하나요?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음과 같은 상황에서 리모트 액세스 기능을 사용하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["외부 네트워크에서 사내 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서버에 접속해야 할 때"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "방화벽이나 NAT 환경으로 인해 직접 접속이 어려운 경우"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "복잡한 네트워크 설정 없이 간편하게 원격 접속을 구성하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "임시로 외부 접속 권한을 제공해야 하는 경우"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "리모트-액세스-설정",
      children: "리모트 액세스 설정"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "리모트-액세스-라이선스-활성화",
          children: "리모트 액세스 라이선스 활성화"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " 관리자 아이디로 로그인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
                sid: "setting.menu.license.root"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.license.biostarXLicense"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["슈프리마에서 전달한 리모트 액세스 라이선스 키와 관리자 이름을 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.license.button.activate",
                product: "2"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["라이선스 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-license-biostar-x-license",
              children: "다음 문서"
            }), "를 참고하세요."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "리모트-액세스-활성화",
          children: "리모트 액세스 활성화"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " 관리자 아이디로 로그인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
                sid: "setting.menu.remoteAccess.root"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.section.title"
              }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.remoteAccess.root"
              }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use"
              }), "으로 변경하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-remote-access.png"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ngrok-설정-정보-입력",
          children: "ngrok 설정 정보 입력"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "슈프리마에서 전달받은 ngrok 설정 정보를 입력하세요."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.ngrokUserId"
              }), ": ngrok 계정을 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.tunnelToken"
              }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Authtoken"
              }), "을 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.hostURL"
              }), ": 엔드포인트 URL을 입력하세요. URL은 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "your-name.bsx.ngrok.app"
              }), " 형식입니다."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 정보를 입력한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요. 경고 메시지 창이 나타나면 내용을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.remoteAccess.button.agree"
          }), " 버튼을 클릭하세요."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "엔드포인트-url-접속",
      children: "엔드포인트 URL 접속"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정을 완료하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.remoteAccess.field.hostURL"
      }), " 항목에 입력한 엔드포인트 URL을 통해 외부 네트워크에서 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버에 접속할 수 있는지 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "외부 네트워크에서 엔드포인트 URL을 통해 접속할 수 없다면 라이선스를 발급받은 영업점 또는 대리점에 문의하세요."
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