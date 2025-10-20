"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9773"], {
2244: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_advanced_ac_intrusion_alarm_mdx_10b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-advanced-ac-intrusion-alarm-mdx-10b.json
var site_docs_platform_biostar_x_settings_advanced_ac_intrusion_alarm_mdx_10b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-intrusion-alarm","title":"경비","description":"경비 설정 방법을 안내합니다. 경비 기능은 침입 감지 시 출입문을 잠그거나 알람을 발생시키는 기능을 제공합니다.","source":"@site/docs/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-intrusion-alarm","permalink":"/docs/platform/biostar_x/settings-advanced-ac-intrusion-alarm","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-intrusion-alarm","title":"경비","description":"경비 설정 방법을 안내합니다. 경비 기능은 침입 감지 시 출입문을 잠그거나 알람을 발생시키는 기능을 제공합니다.","keywords":["고급 출입 통제","경비"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"스케줄 개방","permalink":"/docs/platform/biostar_x/settings-advanced-ac-scheduled-unlock"},"next":{"title":"인터락","permalink":"/docs/platform/biostar_x/settings-advanced-ac-interlock"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx


const frontMatter = {
	id: 'settings-advanced-ac-intrusion-alarm',
	title: '경비',
	description: '경비 설정 방법을 안내합니다. 경비 기능은 침입 감지 시 출입문을 잠그거나 알람을 발생시키는 기능을 제공합니다.',
	keywords: [
		'고급 출입 통제',
		'경비'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "경비 등록",
  "id": "addIntrusionAlarmZone",
  "level": 2
}, {
  "value": "설정 옵션 안내",
  "id": "setting",
  "level": 2
}, {
  "value": "경비 개시 또는 해제 설정",
  "id": "armConfiguration",
  "level": 2
}, {
  "value": "장치에 의한 경비 시작/해제 추가",
  "id": "addArmInput",
  "level": 3
}, {
  "value": "입력 신호에 의한 경비 시작/해제 추가",
  "id": "addArmInputBySignal",
  "level": 3
}, {
  "value": "침입감지 설정",
  "id": "intrusionSetting",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Glossary, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "경비 설정 방법을 안내합니다. 경비 설정은 침입 감지 시 출입문을 잠그거나 알람을 발생시키는 기능을 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "intrusion_alarm_zone"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addIntrusionAlarmZone",
      children: "경비 등록"
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
            sid: "setting.menu.advancedAc.root"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addZone",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion",
            product: "2"
          }), "를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " 섹션에서 추가할 경비 설정의 이름을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-intrusion.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " 섹션에서 경비 설정의 세부 항목을 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.armConfiguration",
            product: "2"
          }), " 섹션에서 경비 개시와 해제에 대한 인증 설정을 추가하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#armConfiguration",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-intrusion-set-arm.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.intrusion.armConfiguration",
              product: "2"
            }), " 섹션은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.info",
              product: "2"
            }), " 섹션에서 출입문을 선택했을 때 표시됩니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.intrusionSetting",
            product: "2"
          }), " 섹션에서 침입 감지 신호를 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#intrusionSetting",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-intrusion-set-intrusion.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.alarm",
            product: "2"
          }), " 섹션에서 특정 이벤트가 발생했을 때 수행할 동작을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정을 완료했다면 화면 가장 아래에 있는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.intrusion.armConfiguration",
          product: "2"
        }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.intrusion.intrusionSetting",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.alarm",
          product: "2"
        }), " 섹션은 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.setting",
          product: "2"
        }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.pause.doorselected",
          product: "2"
        }), " 옵션을 설정해야 사용할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "설정 옵션 안내"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "경비 설정을 위한 세부 항목은 아래와 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone",
            product: "2"
          }), ": 적용 범위를 설정하세요. 경비 설정은 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone.local",
            product: "2"
          }), " 모드만 지원하며, 입실 장치와 RS-485로 연결된 장치들로만 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activatedAndDeactivated",
            product: "2"
          }), ": 설정을 활성화하거나 일시적으로 비활성화할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.doorselected",
            product: "2"
          }), ": 경비 기능을 적용할 출입문을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "armConfiguration",
      children: "경비 개시 또는 해제 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "경비 개시와 해제에 대한 인증 설정을 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-adv-ac-add-intrusion-set-arm.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.delayTime",
            product: "2"
          }), ": 경비 시작이나 경비 해제까지의 지연 시간을 설정할 수 있습니다. 즉, 개시는 인증 후 경비 시작까지의 지연 시간이며, 해제는 침입 감지 후 경보가 발생하기 전까지의 지연 시간입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.accessCard",
            product: "2"
          }), ": 경비 시작이나 해제 권한을 부여한 카드를 추가할 수 있습니다. 경비/해제 카드는 최대 128개까지 등록할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.accessGroup",
            product: "2"
          }), ": 경비 시작이나 해제 권한을 부여한 그룹을 선택할 수 있습니다. 경비/해제 그룹은 최대 128개까지 등록할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.armInput",
            product: "2"
          }), ": 장치에 의한 경비 시작/해제 또는 입력 신호에 의한 경비 시작/해제를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " 버튼을 클릭하고 각 항목을 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addArmInput",
      children: "장치에 의한 경비 시작/해제 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armInput",
        product: "2"
      }), " (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.device",
        product: "2"
      }), ") 옵션에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), " 버튼을 클릭하세요. 경비 기능을 제어할 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armType",
        product: "2"
      }), "를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType",
        product: "2"
      }), "는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.card",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.key",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.cardOrKey",
        product: "2"
      }), "를 선택할 수 있습니다. LCD 화면이 없는 장치는 입력 종류를 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.card",
        product: "2"
      }), "만 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-add-device.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addArmInputBySignal",
      children: "입력 신호에 의한 경비 시작/해제 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armInput",
        product: "2"
      }), " (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.input",
        product: "2"
      }), ") 옵션에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), " 버튼을 클릭하세요. 경비 기능을 제어할 장치를 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.port",
        product: "2"
      }), "를 클릭하여 선택된 장치의 입력 포트를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armType",
        product: "2"
      }), "를 선택한 뒤 스위치 종류와 신호의 지속 시간을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-add-signal.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intrusionSetting",
      children: "침입감지 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["침입 감지 신호를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " 버튼을 클릭하고 아래와 같이 설정하면 BioStation 3 장치의 0번 입력 포트에 연결된 N/O 센서가 100(ms) 동안 신호를 보낸 경우 침입을 감지한 것으로 인식합니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-detect-settings.png"
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