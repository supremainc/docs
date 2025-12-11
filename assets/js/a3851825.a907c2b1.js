"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["96559"], {
54337: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_device_upgrade_firmware_mdx_a38_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-device-upgrade-firmware-mdx-a38.json
var site_docs_platform_biostar_x_settings_device_upgrade_firmware_mdx_a38_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-upgrade-firmware","title":"펌웨어 업그레이드하기","description":"BioStar X와 연결된 장치의 펌웨어 업그레이드 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-device-upgrade-firmware.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-upgrade-firmware","permalink":"/platform/biostar_x/settings-device-upgrade-firmware","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-upgrade-firmware.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-upgrade-firmware","title":"펌웨어 업그레이드하기","description":"BioStar X와 연결된 장치의 펌웨어 업그레이드 방법을 안내합니다.","keywords":["장치","펌웨어","업그레이드"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"장치에 등록한 사용자 관리하기","permalink":"/platform/biostar_x/settings-device-manage-device-users"},"next":{"title":"장치 관리 기능 사용하기","permalink":"/platform/biostar_x/settings-device-using-functions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-device-upgrade-firmware.mdx


const frontMatter = {
	id: 'settings-device-upgrade-firmware',
	title: '펌웨어 업그레이드하기',
	description: 'BioStar X와 연결된 장치의 펌웨어 업그레이드 방법을 안내합니다.',
	keywords: [
		'장치',
		'펌웨어',
		'업그레이드'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "before-start",
  "level": 2
}, {
  "value": "펌웨어 업그레이드",
  "id": "upgrade-firmware",
  "level": 2
}, {
  "value": "한 개 장치의 펌웨어 업그레이드",
  "id": "한-개-장치의-펌웨어-업그레이드",
  "level": 3
}, {
  "value": "여러 장치의 펌웨어 업그레이드",
  "id": "여러-장치의-펌웨어-업그레이드",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "와 연결된 장치는 별도의 연결이나 동작없이 손쉡게 펌웨어를 업그레이드할 수 있습니다. 장치의 펌웨어를 최신 버전으로 유지하면 보안 취약점을 해결하고 새로운 기능을 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치의 펌웨어를 업그레이드하기 전에 새로운 버전의 펌웨어 파일을 먼저 준비하세요. 다운로드한 펌웨어 파일을 아래 경로에 저장하세요. ", (0,jsx_runtime.jsx)(_components.em, {
        children: "firmware"
      }), " 폴더가 없다면 새로 생성하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "C:\\Program Files\\BioStar X\\firmware"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["새로운 버전의 펌웨어 파일은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com",
          children: "슈프리마 다운로드 센터"
        }), "에서 장치 모델명을 검색하고 최신 버전의 펌웨어 파일을 다운로드하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upgrade-firmware",
      children: "펌웨어 업그레이드"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "한-개-장치의-펌웨어-업그레이드",
      children: "한 개 장치의 펌웨어 업그레이드"
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
            sid: "setting.menu.device.root"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 펌웨어를 업그레이드할 장치를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 세부 정보 화면의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.information",
            product: "2"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.firmwareUpgrade",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-info-upgrade-firmware.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치에 대한 펌웨어 업그레이드를 진행합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "여러-장치의-펌웨어-업그레이드",
      children: "여러 장치의 펌웨어 업그레이드"
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
            sid: "setting.menu.device.root"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 펌웨어를 업그레이드할 장치의 가장 왼쪽에 체크박스를 선택하세요. 여러 개의 장치를 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 목록 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.firmwareUpgrade",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-upgrade-firmware.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.firmwareUpgrade",
            product: "2"
          }), " 창이 나타나면 펌웨어 버전을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-upgrade-firmware-popup.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 장치에 대한 펌웨어 업그레이드를 진행합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "button.firmwareUpgrade",
              product: "2"
            }), " 버튼은 장치 목록에서 장치를 선택한 후에만 활성화됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "동일한 RS-485 모드를 가진 장치는 한 번에 여러 개를 동시에 업그레이드할 수 있습니다. 예를 들면, 마스터 장치는 마스터 장치끼리 한 번에 여러 개를 동시에 업그레이드할 수 있으며, 슬레이브 장치는 슬레이브 장치끼리 한 번에 여러 개를 동시에 업그레이드할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "마스터 장치나 마스터가 없는 슬레이브 장치는 한 번에 여러 개를 동시에 업그레이드할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "동일한 마스터 장치에 연결된 슬레이브 장치는 여러 개를 동시에 업그레이드할 수 없습니다."
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