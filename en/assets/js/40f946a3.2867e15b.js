"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4418"], {
6129: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_adding_devices_mdx_40f_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-adding-devices-mdx-40f.json
var site_docs_platform_biostar_x_settings_adding_devices_mdx_40f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-adding-devices","title":"장치 등록하기","description":"BioStar X에 장치를 등록하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-adding-devices.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-adding-devices","permalink":"/docs/en/platform/biostar_x/settings-adding-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-adding-devices.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-adding-devices","title":"장치 등록하기","description":"BioStar X에 장치를 등록하는 방법을 안내합니다.","keywords":["장치","장치 추가"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"장치 그룹 관리하기","permalink":"/docs/en/platform/biostar_x/settings-manage-device-group"},"next":{"title":"Wiegand 장치 등록하기","permalink":"/docs/en/platform/biostar_x/settings-adding-wiegand"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-adding-devices.mdx


const frontMatter = {
	id: 'settings-adding-devices',
	title: '장치 등록하기',
	description: 'BioStar X에 장치를 등록하는 방법을 안내합니다.',
	keywords: [
		'장치',
		'장치 추가'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "간편 등록하기",
  "id": "quickadd-device",
  "level": 2
}, {
  "value": "IP 주소 설정",
  "id": "setipaddress",
  "level": 3
}, {
  "value": "장치 검색 옵션",
  "id": "devicesearchoptions",
  "level": 3
}, {
  "value": "고급 검색",
  "id": "advancedsearch",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcEdit, IcMoreW, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 장치를 등록하는 방법을 안내합니다. 장치를 등록하면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서 해당 장치의 상태를 모니터링하고 관리할 수 있습니다. 장치를 검색하기 전에 장치가 올바르게 연결되어 있는지 확인하세요. 여러 개의 장치를 한번에 추가할 때 각 장치의 위치, ID, IP 주소 등을 미리 알아두면 편리합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치를 새로 등록할 때 장치의 키 값을 서버의 데이터 암호화 키 값으로 변경합니다. 키 변환 시 장치의 모든 사용자 데이터가 삭제됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 저장된 모든 설정 정보 및 사용자 정보를 삭제한 뒤 다시 전송하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " 옵션은 장치 목록에서 장치를 선택하고 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 클릭하면 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["대기 장치 그룹의 모든 대기 장치를 등록하려면 그룹 이름에서 마우스 오른쪽 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addAllWaitingDevices",
              product: "2"
            }), "를 클릭하세요. 장치를 각각 등록하려면 장치 이름에서 마우스 오른쪽 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addWaitingDevice",
              product: "2"
            }), "를 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "와 장치에 사용자 ID 종류가 다르게 설정되어 있다면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 사용자 ID 설정에 따라 장치 설정을 변경하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 사용자 ID 종류가 영숫자로 설정된 경우 일부 장치를 사용할 수 없거나 제약 사항이 발생할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 등록하고 세부 정보를 설정하려면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quickadd-device",
      children: "간편 등록하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "와 같은 네트워크에 있는 장치를 자동으로 검색하고 등록할 수 있습니다."]
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
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.searchDevice",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.searchDevice",
            product: "2"
          }), " 창이 나타나면 등록할 수 있는 모든 장치 목록이 표시됩니다. 원하는 장치가 목록에 없다면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.search",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "등록할 장치를 선택하거나 등록하지 않을 장치는 선택을 해제하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["등록할 장치의 이름을 변경하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.name",
            product: "2"
          }), " 열에서 ", (0,jsx_runtime.jsx)(IcEdit, {}), " 버튼을 클릭한 뒤 변경하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device-rename.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["등록할 장치의 그룹을 설명하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.group",
            product: "2"
          }), " 열에서 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택한 장치에 대한 설정을 모두 완료했다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치 목록에 추가한 장치가 나타납니다. 추가한 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.syncDevice",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-sync-device.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["IP 주소를 사용할 수 없거나 변경이 필요한 장치는 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.setIp",
          product: "2"
        }), " 버튼을 클릭해 변경할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "##setipaddress",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setipaddress",
      children: "IP 주소 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["새로 등록하려는 장치의 IP 주소를 변경할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.searchDevice",
        product: "2"
      }), " 창의 왼쪽 하단에 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.setIp",
        product: "2"
      }), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.setIp",
        product: "2"
      }), " 창이 나타나면 장치 목록에서 IP 주소를 변경할 장치를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-set-ip.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useDhcp",
            product: "2"
          }), ": 장치가 DHCP를 통해 IP 주소를 자동으로 할당받도록 설정합니다. 이 옵션을 선택하면 장치가 네트워크에 연결될 때마다 IP 주소가 변경될 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IP 주소와 서브넷 마스크, 게이트웨이 등을 수동으로 입력하려면 옵션을 선택 해제하세요."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceToServerConnection",
            product: "2"
          }), ": 장치에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서버로 연결하도록 설정하려면 이 옵션을 선택하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 설치한 서버의 IP 주소와 포트 번호를 입력해야 합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["IP 설정을 모두 완료하고 변경 사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " 버튼을 클릭하세요. 변경 사항을 취소하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.cancel",
          product: "2"
        }), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "devicesearchoptions",
      children: "장치 검색 옵션"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.searchDevice",
        product: "2"
      }), " 창 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcSet, {}), " 버튼을 클릭하면 장치 검색 옵션을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-add-device-option.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.showNewDevicesOnly",
            product: "2"
          }), ": 새로 검색된 장치만 검색 목록에 표시하려면 이 옵션을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.timeout",
            product: "2"
          }), ": 일정 시간 동안 응답하지 않는 장치를 검색 목록에서 제외하려면 원하는 시간을 설정하세요. 초 단위로 설정할 수 있으며, 기본값은 3초입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advancedsearch",
      children: "고급 검색"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "특정 장치의 IP 주소와 포트 번호를 지정하여 등록할 수 있습니다."
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
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.advancedSearch",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.advancedSearch",
            product: "2"
          }), " 창이 나타나면 등록할 장치의 IP 주소와 포트 번호를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-advanced-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.search",
            product: "2"
          }), " 버튼을 클릭하면 입력한 조건과 일치하는 장치가 목록에 표시됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-advanced-search-result.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치 목록에 추가한 장치가 나타납니다. 추가한 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.syncDevice",
        product: "2"
      }), " 버튼을 클릭하세요."]
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