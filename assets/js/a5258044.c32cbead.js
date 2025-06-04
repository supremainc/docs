"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3078"], {
805: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_device_details_info_mdx_a52_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-device-details-info-mdx-a52.json
var site_docs_platform_biostar_x_settings_device_details_info_mdx_a52_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-info","title":"기본 정보 설정하기","description":"장치의 이름과 그룹, 표준 시간대, 하드웨어 및 펌웨어 버전 등을 확인하고 설정하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-device-details-info.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-info","permalink":"/docs/platform/biostar_x/settings-device-details-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-info.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-info","title":"기본 정보 설정하기","description":"장치의 이름과 그룹, 표준 시간대, 하드웨어 및 펌웨어 버전 등을 확인하고 설정하는 방법을 안내합니다.","keywords":["장치","정보"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"장치 세부 기능 설정하기","permalink":"/docs/platform/biostar_x/settings-device-details"},"next":{"title":"네트워크 설정하기","permalink":"/docs/platform/biostar_x/settings-device-details-network"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-device-details-info.mdx


const frontMatter = {
	id: 'settings-device-details-info',
	title: '기본 정보 설정하기',
	description: '장치의 이름과 그룹, 표준 시간대, 하드웨어 및 펌웨어 버전 등을 확인하고 설정하는 방법을 안내합니다.',
	keywords: [
		'장치',
		'정보'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "장치 이름 변경",
  "id": "장치-이름-변경",
  "level": 2
}, {
  "value": "장치 그룹 변경",
  "id": "장치-그룹-변경",
  "level": 2
}, {
  "value": "펌웨어 업그레이드",
  "id": "펌웨어-업그레이드",
  "level": 2
}, {
  "value": "장치의 날짜 및 시간 설정",
  "id": "장치의-날짜-및-시간-설정",
  "level": 2
}, {
  "value": "잠금 장치 해제",
  "id": "잠금-장치-해제",
  "level": 2
}, {
  "value": "장치 초기화",
  "id": "장치-초기화",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.information",
        product: "2"
      }), " 섹션에서는 장치의 기본 정보를 설정할 수 있습니다. 장치의 이름과 그룹, 표준 시간대, 하드웨어 및 펌웨어 버전 등을 확인할 수 있습니다. 장치의 이름과 그룹을 변경하거나 장치의 펌웨어를 업그레이드할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래는 장치에 설정된 기본 정보로 사용자가 변경할 수 없는 항목입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceId",
            product: "2"
          }), ": 장치의 아이디를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceType",
            product: "2"
          }), ": 장치의 종류를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.productName",
            product: "2"
          }), ": 장치의 모델 이름을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.kernelVersion",
            product: "2"
          }), ": 장치의 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#kernel",
            children: "커널"
          }), " 버전을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.hwVersion",
            product: "2"
          }), ": 장치의 하드웨어 버전을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자가 임의로 변경한 사항이 있다면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " 버튼을 클릭하세요. 변경 사항을 저장하지 않으면 장치에 적용되지 않습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-이름-변경",
      children: "장치 이름 변경"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["기본 설정된 장치의 이름을 변경할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.name",
        product: "2"
      }), " 항목에서 원하는 장치 이름을 입력하세요. 장치 이름은 최대 48자까지 입력할 수 있습니다. 장치 이름은 장치 목록에서 장치를 식별하는 데 사용합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-그룹-변경",
      children: "장치 그룹 변경"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치가 속한 그룹을 변경할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.group",
        product: "2"
      }), " 항목에서 원하는 장치 그룹을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["새로운 장치 그룹을 생성하거나 그룹 이름 변경 및 삭제에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-device-group",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "펌웨어-업그레이드",
      children: "펌웨어 업그레이드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치의 펌웨어 버전을 확인하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.firmwareVersion",
        product: "2"
      }), " 항목을 확인하세요. 펌웨어를 업그레이드하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.firmwareUpgrade",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치의 펌웨어 업그레이드에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-device-upgrade-firmware",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치의-날짜-및-시간-설정",
      children: "장치의 날짜 및 시간 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래의 옵션을 통해 장치의 날짜와 시간을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeZone",
            product: "2"
          }), ": 장치가 위치한 표준 시간대를 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeSync",
            product: "2"
          }), ": 장치의 시간 정보를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서버의 시간과 동기화할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dst",
            product: "2"
          }), ": 사용자가 설정한 일광 절약 시간을 장치에 적용할 수 있습니다. 새 일광 절약 시간을 추가하려면 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.date",
            product: "2"
          }), ": 장치의 날짜와 시간을 수동으로 설정할 수 있습니다. 날짜와 시간을 모두 설정했다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.setTime",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이 기능은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.timeSync",
              product: "2"
            }), " 옵션을 선택하지 않았을 때 사용할 수 있습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dateFormat",
            product: "2"
          }), ": 장치에 표시되는 날짜 형식을 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.getTime",
            product: "2"
          }), ": 장치에 설정된 시간을 불러올 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "설정한 날짜와 시간은 이벤트 로그와 실시간에 로그에 기록됩니다. 장치의 날짜와 시간이 정확하지 않으면 로그 기록이 잘못될 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "잠금-장치-해제",
      children: "잠금 장치 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["작업 조건 및 동작에 의해 장치가 잠겼을 때 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.locked",
        product: "2"
      }), " 항목의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.unlock",
        product: "2"
      }), " 버튼을 클릭하세요. 장치의 잠금을 해제할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-초기화",
      children: "장치 초기화"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치의 설정을 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.factoryDefault",
        product: "2"
      }), " 항목에서 아래 기능 중 하나를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset",
            product: "2"
          }), ": 장치의 모든 설정을 초기화합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset.withoutNetwork",
            product: "2"
          }), ": 네트워크 설정은 유지하고 나머지 설정을 초기화합니다."]
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