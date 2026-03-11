"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["75555"], {
3011: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_change_ip_mdx_9c8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-change-ip-mdx-9c8.json
var site_docs_platform_biostar_x_change_ip_mdx_9c8_namespaceObject = JSON.parse('{"id":"platform/biostar_x/change-ip","title":"메인 서버의 IP 주소 변경하기","description":"BioStar X 메인 서버 설치 후 IP 주소를 변경하는 방법을 안내합니다. Windows 서버 IP 변경부터 BioStar X Service Manager를 통한 적용, 커뮤니케이션 서버 설정까지 전체 절차를 포함합니다.","source":"@site/docs/platform/biostar_x/change-ip.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/change-ip","permalink":"/docs/platform/biostar_x/change-ip","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/change-ip.mdx","tags":[],"version":"current","frontMatter":{"id":"change-ip","title":"메인 서버의 IP 주소 변경하기","description":"BioStar X 메인 서버 설치 후 IP 주소를 변경하는 방법을 안내합니다. Windows 서버 IP 변경부터 BioStar X Service Manager를 통한 적용, 커뮤니케이션 서버 설정까지 전체 절차를 포함합니다.","keywords":["IP 주소 변경","BioStar X Service Manager","메인 서버","커뮤니케이션 서버"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"서비스 설정","permalink":"/docs/platform/biostar_x/service-settings"},"next":{"title":"포트 변경하기","permalink":"/docs/platform/biostar_x/change-port"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/change-ip.mdx


const frontMatter = {
	id: 'change-ip',
	title: '메인 서버의 IP 주소 변경하기',
	description: 'BioStar X 메인 서버 설치 후 IP 주소를 변경하는 방법을 안내합니다. Windows 서버 IP 변경부터 BioStar X Service Manager를 통한 적용, 커뮤니케이션 서버 설정까지 전체 절차를 포함합니다.',
	keywords: [
		'IP 주소 변경',
		'BioStar X Service Manager',
		'메인 서버',
		'커뮤니케이션 서버'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*Microsoft Support https://support.microsoft.com/en-us/windows/essential-network-settings-and-tasks-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9*/


const toc = [{
  "value": "메인 서버의 IP 주소 변경",
  "id": "메인-서버의-ip-주소-변경",
  "level": 2
}, {
  "value": "변경된 IP 주소 적용",
  "id": "변경된-ip-주소-적용",
  "level": 2
}, {
  "value": "커뮤니케이션 서버",
  "id": "커뮤니케이션-서버",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "서버의 네트워크 환경이 변경되었거나 초기 설정 후 IP 주소를 변경해야 할 때 이 문서를 참고하세요. BioStar X 메인 서버의 IP을 안전하게 변경하고 연결된 커뮤니케이션 서버를 재구성하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["메인 서버의 IP 주소 변경 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X v1.0.2"
        }), " 이상에서 지원합니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "메인-서버의-ip-주소-변경",
      children: "메인 서버의 IP 주소 변경"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 설치한 서버에서 먼저 IP 주소를 변경하세요. 외부 네트워크와 연결된 랜 카드의 IP 주소를 변경해야 합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Windows에서 IP 주소 변경에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://support.microsoft.com/ko-kr/windows/windows%EC%9D%98-%ED%95%84%EC%88%98-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EC%9E%91%EC%97%85-f21a9bbc-c582-55cd-35e0-73431160a1b9",
          children: "Microsoft 고객 지원"
        }), "에서 확인할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "변경된-ip-주소-적용",
      children: "변경된 IP 주소 적용"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 안내에 따라 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 설치한 서버의 IP 주소를 변경하세요."]
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
          children: ["웹브라우저를 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "MAIN SERVER IP"
          }), " 메뉴를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-change-ip.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["랜 카드의 IP 주소를 변경한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Service Manager"
            }), "에 진입하면 로딩 화면이 나타납니다. 1~2분 정도 기다린 후 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Main Server IP"
            }), " 화면이 표시됩니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Main Server IP Address"
          }), " 항목에서 변경할 IP 주소를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["메시지 창이 나타나면 현재 IP 주소와 변경할 IP 주소를 확인한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-change-ip-warning-message.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["IP 주소 변경이 완료되면 성공 메시지가 나타납니다. ", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-change-ip-success-message.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IP 주소를 변경하면 모든 서비스가 재시작됩니다. IP 주소 변경을 완료하면 웹 브라우저를 통해 변경된 IP 주소로 정상 접속되는지 확인하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["변경할 IP 주소는 수동으로 입력할 수 없으며, ", (0,jsx_runtime.jsx)(Cmd, {
          children: "Main Server IP Address"
        }), " 항목에 표시된 IP 주소 중에서 선택할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "커뮤니케이션-서버",
      children: "커뮤니케이션 서버"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커뮤니케이션 서버를 추가로 설치했다면 변경한 메인 서버의 IP 주소로 커뮤니케이션 서버의 설정을 변경해야 합니다. 커뮤니케이션 서버를 설치한 서버에서 진행하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "C:\\Program Files\\BioStar X Communications Server"
          }), " 경로로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "CertRegisterWinUI.exe"
          }), " 파일을 실행하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Address"
          }), " 입력 필드에 변경한 메인 서버의 IP 주소 및 포트 번호(기본값: 21810)를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-change-ip-enroll-cert.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["메인 서버에 대한 IP 주소 변경이 완료되면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Certificate registration successful!"
      }), " 메시지가 나타납니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "커뮤니케이션 서버를 설치하지 않았다면 이 단계를 건너뛰세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar X를 설치한 메인 서버의 포트 번호를 변경했다면, 메인 서버에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Service Manager"
            }), "를 실행하고 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "SERVICE SETTINGS"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              children: "BioStar X Coordinator Service"
            }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Client Port"
            }), " 값을 확인하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/biostarx-sm-coordinator-s.png",
            alone: true
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["커뮤니케이션 서버 설치에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "install-communication-server",
              children: "다음 문서"
            }), "를 참고하세요."]
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