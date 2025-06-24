"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1709"], {
6117: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_device_connection_manager_mdx_e63_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-device-connection-manager-mdx-e63.json
var site_docs_platform_biostar_x_settings_device_connection_manager_mdx_e63_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-connection-manager","title":"장치 연결 관리 설정하기","description":"BioStar X에서 통신 서버를 통해 많은 수의 장치를 연결하고 관리하는 방법을 안내합니다. 최대 3,000대의 네트워크 장치를 여러 서버로 나누어 관리할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-device-connection-manager.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-connection-manager","permalink":"/docs/platform/biostar_x/settings-device-connection-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-connection-manager.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-connection-manager","title":"장치 연결 관리 설정하기","description":"BioStar X에서 통신 서버를 통해 많은 수의 장치를 연결하고 관리하는 방법을 안내합니다. 최대 3,000대의 네트워크 장치를 여러 서버로 나누어 관리할 수 있습니다.","keywords":["장치 연결 관리자","Communication 서버","설정"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"USB 에이전트 설정하기","permalink":"/docs/platform/biostar_x/settings-device-usb-agent"},"next":{"title":"출입문 관리하기","permalink":"/docs/platform/biostar_x/settings-manage-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-device-connection-manager.mdx


const frontMatter = {
	id: 'settings-device-connection-manager',
	title: '장치 연결 관리 설정하기',
	description: 'BioStar X에서 통신 서버를 통해 많은 수의 장치를 연결하고 관리하는 방법을 안내합니다. 최대 3,000대의 네트워크 장치를 여러 서버로 나누어 관리할 수 있습니다.',
	keywords: [
		'장치 연결 관리자',
		'Communication 서버',
		'설정'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "주요 기능",
  "id": "주요-기능",
  "level": 2
}, {
  "value": "다른 서버로 장치 이동하기",
  "id": "다른-서버로-장치-이동하기",
  "level": 2
}];
function _createMdxContent(props) {
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
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.deviceConnectionManager.settingMenuTitle",
        product: "2"
      }), "는 회사나 대형 건물에서 많은 수의 장치를 효율적으로 관리하기 위해 만들어진 기능입니다. 기존에는 하나의 서버에서 최대 1,000대의 장치만 연결할 수 있었지만, 이제 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "커뮤니케이션"
      }), "(Communication) 서버를 여러 대의 컴퓨터에 설치하여 최대 3,000대의 네트워크 장치를 관리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "디바이스 매니저"
            }), " 라이선스를 활성화했을 때 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "커뮤니케이션 서버의 사양과 설치에 대한 자세한 내용은 다음 문서를 참고하세요."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "system-requirements#communication-server",
                  children: "커뮤니케이션 서버 사양"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "커뮤니케이션 서버 설치 안내"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "주요-기능",
      children: "주요 기능"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "서버 확장"
          }), ": 메인 컴퓨터 외에 추가 컴퓨터에 통신 서버를 설치하여 더 많은 장치 연결할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "여러 서버 운영"
          }), ": 최대 3개의 서버를 함께 사용하여 총 3,000대 장치 지원합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "편리한 장치 관리"
          }), ": 새 장치를 추가할 때 어느 서버에 연결할지 선택할 수 있으며, 기존 장치를 다른 서버로 옮길 수도 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "대용량 환경 지원"
          }), ": 큰 규모의 사업장이나 건물에서 요구하는 많은 장치를 안정적으로 운영할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커뮤니케이션 서버는 BioStar X의 통합 서버에서 장치와의 연결 기능만을 분리한 전용 서비스입니다. 장치와의 안정적인 통신에만 집중하여 전체 시스템의 성능을 향상시킵니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "다른-서버로-장치-이동하기",
      children: "다른 서버로 장치 이동하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "메인 서버 또는 다른 커뮤니케이션 서버에 등록된 장치를 다른 커뮤니케이션 서버로 이동할 수 있습니다. 이 기능은 장치의 연결 상태를 유지하면서 서버 간에 장치를 이동할 수 있도록 도와줍니다."
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
            children: "Device"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Device Connection Manager"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["왼쪽에 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.followerSelectLabel",
            product: "2"
          }), " 항목에서 이동시키려는 장치가 등록된 서버를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 이동시키려는 장치를 선택하세요. 여러 개의 장치를 선택할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "특정 장치를 검색하려면 상단의 입력 필드에 문자열을 입력하세요. 장치 이름, 시리얼 번호로 검색할 수 있습니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["오른쪽에 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.selectedSelectLabel",
            product: "2"
          }), " 항목에서 장치를 이동시킬 대상 서버를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 이동하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.moveButtonTitle",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메시지 창에서 이동될 총 장치 수, TCP/IP 연결 장치 수, 이동할 서버 이름 및 IP 주소를 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이동을 완료하면 메시지 창을 통해 이동된 총 장치 수, TCP/IP 연결 장치 수, 이동된 서버 이름 및 IP 주소를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이동을 실패한 장치가 있다면 메시지 창에 이동 실패한 장치 수와 TCP/IP 연결 장치 수를 확인할 수 있습니다. 이동 실패한 장치 목록 및 실패 사유를 CSV 파일로 확인하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.download",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "연결된 확장 서버가 없다면 화면 오른쪽에 대상 서버는 표시되지 않습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "서버를 선택하면 해당 서버에 Wiegand, RS-485 연결 장치를 포함한 등록된 모든 장치를 확인할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 또는 장치 그룹을 선택하면 장치에 연결된 하위 장치와 그룹에 포함된 장치들도 함께 이동합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "TCP/IP 통신으로 연결하지 않은 장치들은 이동할 수 없습니다."
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