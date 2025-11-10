"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39028"], {
75871: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_device_manager_getting_started_mdx_ad4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-device-manager-getting-started-mdx-ad4.json
var site_docs_device_device_manager_getting_started_mdx_ad4_namespaceObject = JSON.parse('{"id":"device/device_manager/getting-started","title":"시작하기","description":"Device Manager 사용을 위한 최소 요구 사항을 안내합니다.","source":"@site/docs/device/device_manager/getting-started.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/getting-started","permalink":"/docs/device/device_manager/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기","description":"Device Manager 사용을 위한 최소 요구 사항을 안내합니다.","keywords":["소개","최소 요구 사항"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"Device Manager","permalink":"/docs/device/device_manager/"},"next":{"title":"장치 초기 설정하기","permalink":"/docs/device/device_manager/initial-setup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/device_manager/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: '시작하기',
	description: 'Device Manager 사용을 위한 최소 요구 사항을 안내합니다.',
	keywords: [
		'소개',
		'최소 요구 사항'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "최소 요구 사항",
  "id": "최소-요구-사항",
  "level": 2
}, {
  "value": "모바일 기기",
  "id": "모바일-기기",
  "level": 3
}, {
  "value": "장치 및 펌웨어",
  "id": "장치-및-펌웨어",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Device Manager는 BLE 통신을 이용해 슈프리마의 XPass D2와 XPass 2, BioEntry W3를 설정할 수 있는 모바일 애플리케이션입니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/device-manager-system-diagram1.svg",
      className: "none",
      width: 650,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자가 PC에서 서버에 접속하거나 장치를 물리적으로 분리하지 않고 모바일 기기에서 장치의 네트워크, 서버, RS-485 통신, 카드 형식, 키패드 설정, PIN, LED 및 버저를 설정할 수 있으며, 장치 재시작이나 펌웨어 업그레이드, 장치 설정 초기화와 같은 기능도 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "또한, XPass D2의 경우 한번 설정한 값을 템플릿으로 저장하여 다수의 장치에 빠르고 간편하게 적용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Suprema Device Manager를 사용하면 타사 컨트롤러와 구성한 XPass D2의 설정을 현장에서 바로 변경할 수 있습니다."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/device/device-manager-system-diagram2.svg",
        className: "none",
        width: 900,
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "최소-요구-사항",
      children: "최소 요구 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "모바일-기기",
      children: "모바일 기기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 기기의 BLE 통신 지원 여부를 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Android 5.0 Lollipop 운영 체제 이상"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "iOS 9.0 이상"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-및-펌웨어",
      children: "장치 및 펌웨어"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "호환되는 장치와 펌웨어 버전을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "XPass D2 펌웨어 1.1.0 버전 이상"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "XPass 2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MDPB, XP2-GDPB, XP2-GKDPB: 펌웨어 1.0.0 버전 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MAPB: 펌웨어 1.4.1 버전 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-MAPB-H: 펌웨어 1.4.3 버전 이상"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioEntry W3 펌웨어 1.0.1 버전 이상"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "호환되는 장치 및 펌웨어는 변경될 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치의 펌웨어가 위 목록의 버전보다 하위 버전인 경우, BioStar X에서 장치의 펌웨어를 업그레이드하세요. 장치를 슬레이브 장치로 사용 중인 경우, 연결된 마스터 장치의 펌웨어도 BioStar X.7.0 이상과 호환 가능한 최신 버전이어야 합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 펌웨어 업그레이드에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "ip-device-settings#device-firmware-upgrade",
              children: "IP 장치(장치 펌웨어 업그레이드하기)"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "xpd2-settings#device-firmware-upgrade",
              children: "XPass D2(장치 펌웨어 업그레이드하기)"
            }), " 또는 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-device-upgrade-firmware",
              children: "BioStar X 관리자 설명서"
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