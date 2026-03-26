"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["91666"], {
81973: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_update_firmware_mdx_dc9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-update-firmware-mdx-dc9.json
var site_docs_device_vionyx_webserver_update_firmware_mdx_dc9_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/update-firmware","title":"펌웨어 업데이트하기","description":"최신 펌웨어 파일을 선택하여 카메라의 펌웨어를 업데이트하고 새로운 기능과 보안 패치를 적용하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/update-firmware.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/update-firmware","permalink":"/docs/ja/device/vionyx_webserver/update-firmware","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/update-firmware.mdx","tags":[],"version":"current","frontMatter":{"id":"update-firmware","title":"펌웨어 업데이트하기","description":"최신 펌웨어 파일을 선택하여 카메라의 펌웨어를 업데이트하고 새로운 기능과 보안 패치를 적용하는 방법을 안내합니다.","keywords":["펌웨어","업데이트","버전","파일","최신"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"카메라 정보 업데이트하기","permalink":"/docs/ja/device/vionyx_webserver/update-device-info"},"next":{"title":"카메라 유지 관리하기","permalink":"/docs/ja/device/vionyx_webserver/manage-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/update-firmware.mdx


const frontMatter = {
	id: 'update-firmware',
	title: '펌웨어 업데이트하기',
	description: '최신 펌웨어 파일을 선택하여 카메라의 펌웨어를 업데이트하고 새로운 기능과 보안 패치를 적용하는 방법을 안내합니다.',
	keywords: [
		'펌웨어',
		'업데이트',
		'버전',
		'파일',
		'최신'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "현재 펌웨어 버전 확인",
  "id": "현재-펌웨어-버전-확인",
  "level": 2
}, {
  "value": "펌웨어 업데이트",
  "id": "펌웨어-업데이트",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "펌웨어 업데이트 기능을 통해 카메라의 펌웨어를 최신 버전으로 업데이트할 수 있습니다. 펌웨어 업데이트로 새로운 기능, 성능 개선, 보안 패치를 적용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 펌웨어를 업데이트하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "새로운 기능을 사용하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안 패치를 적용하여 카메라를 보호하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라의 성능을 개선하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기술 지원팀에서 권장하는 펌웨어 버전이 있을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어 업데이트 중에는 카메라가 재시작되며, 이 기간 동안 카메라는 사용할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어 업데이트를 시작하기 전에 장치에 충분한 전원이 공급되고 있는지 확인하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슈프리마 기술 지원팀에서 제공하는 공식 펌웨어 파일(", (0,jsx_runtime.jsx)(_components.code, {
              children: ".bin"
            }), ")만 사용하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "현재-펌웨어-버전-확인",
      children: "현재 펌웨어 버전 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라에 설치된 현재 펌웨어 버전을 확인하세요."
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
            sid: "device_info",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-system-firmware.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "firmware_reset",
        product: "cam"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "version",
        product: "cam"
      }), " 에서 현재 설치된 펌웨어 버전을 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "펌웨어-업데이트",
      children: "펌웨어 업데이트"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "새로운 펌웨어 파일을 선택하여 장치를 업데이트하세요."
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
            sid: "device_info",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_reset",
            product: "cam"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "update",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_update",
            product: "cam"
          }), " 팝업이 나타나면 슈프리마에서 제공하는 펌웨어 파일(", (0,jsx_runtime.jsx)(_components.code, {
            children: ".bin"
          }), " 파일)을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-system-firmware-update.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["파일 확장자는 반드시 ", (0,jsx_runtime.jsx)(_components.code, {
                children: ".bin"
              }), "이어야 합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["업로드 영역에 파일을 드래그하거나 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "choose_file",
                product: "cam"
              }), " 버튼을 클릭해 파일을 선택할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["파일을 선택하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_upload",
            product: "cam"
          }), " 버튼이 활성화됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["펌웨어 업데이트를 진행하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_upload",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["업로드가 완료되면 재부팅 확인 팝업이 나타납니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭해 카메라를 재시작하고 펌웨어 업데이트를 완료하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["카메라가 재부팅한 후 웹 UI에 다시 접속하세요. 새로운 펌웨어 버전을 확인하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_info",
              product: "cam"
            }), "로 이동하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어 업데이트가 시작된 후에는 취소할 수 없습니다. 업데이트가 완료될 때까지 기다려야 합니다."
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