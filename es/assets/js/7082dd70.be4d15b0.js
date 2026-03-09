"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["10642"], {
7369: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_how_to_upgrade_firmware_mdx_708_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-how-to-upgrade-firmware-mdx-708.json
var site_docs_platform_biostar_air_how_to_upgrade_firmware_mdx_708_namespaceObject = JSON.parse('{"id":"platform/biostar_air/how-to-upgrade-firmware","title":"펌웨어 업그레이드","description":"웹 포털과 모바일 앱을 통해 장치 펌웨어를 일괄 또는 개별적으로 업그레이드하는 방법을 안내합니다. BioStar Air의 버전 확인 및 문제 해결 팁도 포함되어 있습니다.","source":"@site/docs/platform/biostar_air/how-to-upgrade-firmware.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/how-to-upgrade-firmware","permalink":"/docs/es/platform/biostar_air/how-to-upgrade-firmware","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/how-to-upgrade-firmware.mdx","tags":[],"version":"current","frontMatter":{"id":"how-to-upgrade-firmware","title":"펌웨어 업그레이드","description":"웹 포털과 모바일 앱을 통해 장치 펌웨어를 일괄 또는 개별적으로 업그레이드하는 방법을 안내합니다. BioStar Air의 버전 확인 및 문제 해결 팁도 포함되어 있습니다.","keywords":["firmware","upgrade","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"에어팝 패치(Patch)와 태그(Tag) 구성하기","permalink":"/docs/es/platform/biostar_air/configuring-the-airfob-patch-and-tag"},"next":{"title":"바이오인식 장치와 크리덴셜","permalink":"/docs/es/platform/biostar_air/biometric-readers-and-credentials"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/how-to-upgrade-firmware.mdx


const frontMatter = {
	id: 'how-to-upgrade-firmware',
	title: '펌웨어 업그레이드',
	description: '웹 포털과 모바일 앱을 통해 장치 펌웨어를 일괄 또는 개별적으로 업그레이드하는 방법을 안내합니다. BioStar Air의 버전 확인 및 문제 해결 팁도 포함되어 있습니다.',
	keywords: [
		'firmware',
		'upgrade',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "개별 장치 업그레이드",
  "id": "upgradingFirmwareAdeviceViaWebPortal",
  "level": 2
}, {
  "value": "여러 장치 한 번에 업그레이드",
  "id": "upgradingFirmwareInBulkViaWebPortal",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirFw, Image, StatusOK, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirFw) _missingMdxReference("IcAirFw", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air의 펌웨어를 업그레이드하여 장치의 성능을 향상시키고 보안을 강화하며 새로운 기능을 활용할 수 있습니다. 이 과정은 간단하며 BioStar Air 웹 포털이나 BioStar Air 모바일 앱을 통해 실행할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["BioStar Air 모바일 앱에서 펌웨어를 업그레이드하려면 ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/manage-device-with-app#upgradingFirmwareViaMobileApp"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["펌웨어 업데이트하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "장치는 온라인 상태"
          }), "여야 합니다. 장치 목록의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_product_column",
            product: "air"
          }), " 열에서 장치 상태를 확인하세요. 장치 이미지 옆에 녹색 점(", (0,jsx_runtime.jsx)(StatusOK, {}), ")이 표시되면 온라인 상태입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["펌웨어 업데이트 중에는 장치가 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "일시적으로 오프라인 상태"
          }), "가 되지만 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3~5분"
          }), " 이내에 다시 연결됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "펌웨어 업데이트 중에는 장치가 일시적으로 오프라인이 되므로, 업무 시간 외에 실행하기를 권장합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["새 펌웨어가 업데이트되면 알림을 받을 수 있도록 설정할 수 있습니다. 알림 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/settings-alert-report#addAlert"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-registered-devices"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upgradingFirmwareAdeviceViaWebPortal",
      children: "개별 장치 업그레이드"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "webportal",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air"
          }), " 포털에 로그인한 후 다음 단계를 따라 펌웨어를 업그레이드하세요."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치 목록에서 펌웨어 업그레이드할 장치를 클릭하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_title",
                product: "air"
              }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_detail",
                product: "air"
              }), " 섹션으로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "firmware_update_btn",
                product: "air"
              }), " 버튼을 클릭하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-mng-fw-upgrade.png",
              caption: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치에 따라 최신 펌웨어 버전을 선택하고 업데이트를 확인하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 앱에서 펌웨어를 업그레이드하는 과정을 안내합니다."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-device-fw-update.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모바일 기기에서 BioStar Air 앱을 실행하고 로그인하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "devices_card",
                product: "air"
              }), " 카드를 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치 목록에서 펌웨어 업그레이드할 장치를 탭하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "firmware_update_btn",
                product: "air"
              }), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["최신 펌웨어 버전을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "btn_ok",
                product: "air"
              }), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["메시지 창이 나타나면 내용을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_btn_confirm",
                product: "air"
              }), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "펌웨어 업그레이드는 5~10분 정도 소요될 수 있으며, 장치를 사용할 수 없습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "장치의 전원을 끄지 마세요."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "펌웨어 업그레이드를 완료한 후 장치는 자동 재시작합니다."
              }), "\n"]
            }), "\n"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upgradingFirmwareInBulkViaWebPortal",
      children: "여러 장치 한 번에 업그레이드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 목록의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_fw_column",
            product: "air"
          }), " 열에서 각 장치의 현재 버전을 확인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 펌웨어 버전별로 정렬하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_fw_column",
            product: "air"
          }), " 열의 오른쪽에 있는 화살표 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-fw-column-align.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "업그레이드할 각 장치 왼쪽의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirFw, {
            width: "24px",
            height: "24px",
            title: "Update Firmware"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-fw-update.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "update_fw_text",
            product: "air"
          }), " 창이 나타나면 최신 펌웨어 버전을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["메시지 창이 나타나면 내용을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_btn_confirm",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어 업그레이드는 5~10분 정도 소요될 수 있으며, 장치를 사용할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치의 전원을 끄지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어 업그레이드를 완료한 후 장치는 자동 재시작합니다."
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