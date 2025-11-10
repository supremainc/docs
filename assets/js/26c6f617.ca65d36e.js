"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["33025"], {
20993: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2025년 5월 이전에 BioStar Air 출입 통제 서비스를 사용하기 시작한 고객은 현재 Suprema Pass 앱으로 새로 설계된 Airfob Space 앱을 계속 사용할 수 있습니다. 두 앱 모두 동일한 기능을 제공하며 완벽하게 호환됩니다. 기존 사용자는 전환할 필요가 없으며, 모바일 인증 정보가 두 앱 모두에서 원활하게 작동합니다."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
45617: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_28_device_management_configuring_the_airfob_patch_and_tag_mdx_26c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-28-device-management-configuring-the-airfob-patch-and-tag-mdx-26c.json
var site_docs_platform_biostar_air_28_device_management_configuring_the_airfob_patch_and_tag_mdx_26c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-the-airfob-patch-and-tag","title":"Airfob 패치(Patch)와 태그(Tag) 구성하기","description":"기존 출입 통제 시스템을 BioStar Air로 업그레이드하기 위해 Airfob 패치 및 태그 장치를 구성하고, BLE 모드 설정, 카드 ID 커스텀 출력 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/28-device-management-configuring-the-airfob-patch-and-tag.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-the-airfob-patch-and-tag","permalink":"/docs/platform/biostar_air/configuring-the-airfob-patch-and-tag","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/28-device-management-configuring-the-airfob-patch-and-tag.mdx","tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"id":"configuring-the-airfob-patch-and-tag","title":"Airfob 패치(Patch)와 태그(Tag) 구성하기","description":"기존 출입 통제 시스템을 BioStar Air로 업그레이드하기 위해 Airfob 패치 및 태그 장치를 구성하고, BLE 모드 설정, 카드 ID 커스텀 출력 방법을 안내합니다.","keywords":["Airfob","Patch","Tag","configuration"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"근태 관리(T&A) 설정하기","permalink":"/docs/platform/biostar_air/configuring-ta"},"next":{"title":"SIO2 보안 모듈 구성하기","permalink":"/docs/platform/biostar_air/configuring-the-sio2-secure-module"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/28-device-management-configuring-the-airfob-patch-and-tag.mdx


const frontMatter = {
	id: 'configuring-the-airfob-patch-and-tag',
	title: 'Airfob 패치(Patch)와 태그(Tag) 구성하기',
	description: '기존 출입 통제 시스템을 BioStar Air로 업그레이드하기 위해 Airfob 패치 및 태그 장치를 구성하고, BLE 모드 설정, 카드 ID 커스텀 출력 방법을 안내합니다.',
	keywords: [
		'Airfob',
		'Patch',
		'Tag',
		'configuration'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "장치 개요",
  "id": "device-overview",
  "level": 2
}, ..._biostarair_customer_notice/* .toc */.RM, {
  "value": "호환성",
  "id": "compatibility",
  "level": 2
}, {
  "value": "기능성",
  "id": "functionality",
  "level": 2
}, {
  "value": "구성 단계",
  "id": "configuration-steps",
  "level": 2
}, {
  "value": "앱 실행",
  "id": "access-the-app",
  "level": 3
}, {
  "value": "장치 설정으로 이동",
  "id": "navigate-to-device-settings",
  "level": 3
}, {
  "value": "BLE 모드 활성화",
  "id": "enable-ble-mode",
  "level": 3
}, {
  "value": "카드 ID 출력 방법 설정",
  "id": "set-card-id-output-method",
  "level": 3
}, {
  "value": "출력 방법 선택",
  "id": "choose-the-output-method",
  "level": 3
}, {
  "value": "설정 저장",
  "id": "save-your-settings",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "device-overview",
      children: "장치 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Airfob Patch 및 Tag 장치는 기존 출입 통제 리더기 또는 출입문 잠금을 BioStar Air 모바일 크리덴셜과 호환될 수 있도록 업그레이드했습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Patch"
          }), ": 유선 리더기 및 인터콤에 적합하며, 배선 없이 부착할 수 있는 에너지 하베스팅(Energy-Harvesting) 장치입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Tag"
          }), ": 동전형 셀 배터리를 장착하여 출입문 잠금 장치와 같은 배터리 구동 장치에 적합합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatibility",
      children: "호환성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "두 장치는 MIFARE 1K 기술과 호환되지만 125 KHz '저주파' 리더기 또는 잠금 장치와는 호환하지 않습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionality",
      children: "기능성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 장치는 모바일 기기에서 암호화된 Bluetooth BioStar Air 크리덴셜을 인증하고 MIFARE RFID 신호를 에뮬레이션하여 작동합니다. 테이프를 사용하여 리더기 및 잠금 장치에 부착되며 배선이 필요하지 않습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-steps",
      children: "구성 단계"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tag 또는 Patch를 설치하고 BioStar Air 앱에 등록하세요. 다음 단계를 따라 장치를 구성하세요."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "access-the-app",
          children: "앱 실행"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["모바일 기기에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar Air"
              }), " 앱을 실행하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Tag 또는 Patch 장치를 등록한 사이트에 로그인하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "navigate-to-device-settings",
          children: "장치 설정으로 이동"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["메뉴 바에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Access Point"
              }), "를 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["등록된 장치 목록을 확인하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device"
              }), "를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "구성할 Patch 또는 Tag 장치를 선택하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-ble-mode",
          children: "BLE 모드 활성화"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모바일 기기를 장치에 가까이 가져가세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["앱에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BLE Mode"
              }), "를 활성화하세요."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "set-card-id-output-method",
          children: "카드 ID 출력 방법 설정"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Card ID Output Method"
              }), "로 스크롤하고 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Edit"
              }), "를 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "User Card ID"
              }), " 옆에 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select"
              }), "를 탭하세요."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "choose-the-output-method",
          children: "출력 방법 선택"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "None"
              }), ": 카드 ID를 전송하지 않으려면 이 옵션을 선택하세요. 배터리 수명을 연장하기 위한 근태 관리(T&A) 목적으로 사용할 때 유용합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Fixed Device"
              }), ": 미리 프로그래밍된 고정 카드 ID를 전송합니다. RFID 카드를 개별적으로 프로그래밍해야 하는 도어락이나 인터콤에 유용합니다. 기기 로그에는 이 고정 카드 ID만 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "User Card ID"
              }), ": 각 사용자별로 고유 카드 ID를 전송하며, 출입 통제 시스템의 기존 RFID 카드 번호와 일치합니다. 이를 통해 새로운 실물 카드를 발급하지 않고도 원활하게 통합할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Direct Input"
              }), ": 전송할 카드 ID를 수동으로 지정합니다. 여러 장치에서 하나의 ID를 사용해야 하는 사용자 정의 설정에 유용합니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "save-your-settings",
          children: "설정 저장"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["모바일 기기를 장치 근처에 두고 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Save"
              }), "를 눌러 선택 내용을 확인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "업데이트 완료 메시지가 나타납니다."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 단계를 따르면 Airfob Patch 및 Tag 장치가 특정 출입 통제 요구 사항을 충족하도록 올바르게 구성할 수 있습니다."
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