"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["65361"], {
17380: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_managing_door_schedules_mdx_267_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-managing-door-schedules-mdx-267.json
var site_docs_platform_biostar_air_managing_door_schedules_mdx_267_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-door-schedules","title":"출입문 스케줄 관리하기","description":"시간대별로 출입문 자동 잠금을 설정하고, 잠김 해제 시간을 구성하며, 인증 기반 출입 통제 옵션을 관리합니다. 스케줄을 통해 안전하고 통제된 출입을 보장합니다.","source":"@site/docs/platform/biostar_air/managing-door-schedules.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-door-schedules","permalink":"/docs/platform/biostar_air/managing-door-schedules","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-door-schedules.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-door-schedules","title":"출입문 스케줄 관리하기","description":"시간대별로 출입문 자동 잠금을 설정하고, 잠김 해제 시간을 구성하며, 인증 기반 출입 통제 옵션을 관리합니다. 스케줄을 통해 안전하고 통제된 출입을 보장합니다.","keywords":["출입문 스케줄","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"출입문 그룹 관리하기","permalink":"/docs/platform/biostar_air/managing-door-groups"},"next":{"title":"엘리베이터","permalink":"/docs/platform/biostar_air/manage-elevator"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/managing-door-schedules.mdx


const frontMatter = {
	id: 'managing-door-schedules',
	title: '출입문 스케줄 관리하기',
	description: '시간대별로 출입문 자동 잠금을 설정하고, 잠김 해제 시간을 구성하며, 인증 기반 출입 통제 옵션을 관리합니다. 스케줄을 통해 안전하고 통제된 출입을 보장합니다.',
	keywords: [
		'출입문 스케줄',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "열림(잠김 해제) 스케줄 구성",
  "id": "configuringUnlockSchedules",
  "level": 2
}, {
  "value": "잠김 스케줄 구성",
  "id": "configuring-lock-schedules",
  "level": 2
}, {
  "value": "새 스케줄 등록",
  "id": "registeringNewSchedules",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirSchedule, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirSchedule) _missingMdxReference("IcAirSchedule", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문 스케줄을 설정하여 시간대별로 출입문을 자동으로 잠그고 열 수 있습니다. 잠김 및 잠김 해제 시간을 구성하고, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "최초 인증 후 열림"
      }), "과 같은 고급 옵션을 활용하여 안전하고 통제된 출입을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "스케줄은 인터넷이 연결되어 있는 출입문과 장치에만 적용할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "휴일 그룹은 별도로 구성되지 않는 한 잠김 해제 스케줄을 무시합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비상 상황에 대비해 제한없는 출입 권한을 가진 관리자가 적어도 한 명 이상 있어야 합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuringUnlockSchedules",
      children: "열림(잠김 해제) 스케줄 구성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "열림 스케줄은 출입문이 인증 없이 열려 있는 시간입니다. 다음 안내에 따라 열림 스케줄을 구성하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 열림 스케줄을 구성할 출입문의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirSchedule, {
            title: "Schedule Settings"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "unlock",
            product: "air"
          }), " 탭에서 미리 정의된 스케줄을 선택하거나 새 스케줄을 만드세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-unlock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["열림 스케줄을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "unlock_after_first_auth",
              product: "air"
            }), " 옵션을 활성화하면 사용자가 최초로 인증한 후 선택한 스케줄에 따라 출입문의 열림 상태를 유지할 수 있습니다. 이 옵션은 출입문이 첫 번째 직원이 도착할 때까지 잠김 상태를 유지해야 하는 사무실 및 소매점에서 유용하게 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["스케줄 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#registeringNewSchedules"
            }), "을 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-lock-schedules",
      children: "잠김 스케줄 구성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "잠김 스케줄은 출입문이 잠김 상태를 유지하는 시간을 설정하고 유효한 크리덴셜이 있어도 출입할 수 없는 시간입니다. 다음 안내에 따라 잠김 스케줄을 구성하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 잠김 스케줄을 구성할 출입문의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirSchedule, {
            title: "Schedule Settings"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock",
            product: "air"
          }), " 탭에서 미리 정의된 스케줄을 선택하거나 새 스케줄을 만드세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-lock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["잠김 스케줄을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "잠김 스케줄은 표준 접근 권한을 무시하므로 사용자는 잠김 시간 동안 출입문을 열림(잠김 해제) 상태로 변경할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["새 스케줄 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#registeringNewSchedules"
            }), "을 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registeringNewSchedules",
      children: "새 스케줄 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "새 스케줄을 아래의 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), " 창에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_create_schedules",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-add-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["스케줄 추가 화면으로 이동하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_name",
            product: "air"
          }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_description",
            product: "air"
          }), "(선택 사항)을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_section_title_time_intervals",
            product: "air"
          }), " 섹션에서 인증 없이 출입문이 열려 있어야 하는 요일과 시간을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["스케줄을 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["스케줄을 새로 등록한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_submenu",
        product: "air"
      }), "으로 돌아와 출입문 스케줄을 구성하세요."]
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