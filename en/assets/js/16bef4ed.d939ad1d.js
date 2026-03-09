"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["81937"], {
23821: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_elevator_add_edit_delete_mdx_16b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-elevator-add-edit-delete-mdx-16b.json
var site_docs_platform_biostar_air_elevator_add_edit_delete_mdx_16b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/elevator-add-edit-delete","title":"엘리베이터 관리하기","description":"엘리베이터 출입 통제를 구성하여 층별 접근을 관리합니다. OM-120 모듈을 장치에 연결하고, 층 버튼 릴레이를 설정한 후 접근 스케줄을 관리합니다.","source":"@site/docs/platform/biostar_air/elevator-add-edit-delete.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/elevator-add-edit-delete","permalink":"/docs/en/platform/biostar_air/elevator-add-edit-delete","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/elevator-add-edit-delete.mdx","tags":[],"version":"current","frontMatter":{"id":"elevator-add-edit-delete","title":"엘리베이터 관리하기","description":"엘리베이터 출입 통제를 구성하여 층별 접근을 관리합니다. OM-120 모듈을 장치에 연결하고, 층 버튼 릴레이를 설정한 후 접근 스케줄을 관리합니다.","keywords":["엘리베이터","층별 출입 통제","OM-120","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"엘리베이터","permalink":"/docs/en/platform/biostar_air/manage-elevator"},"next":{"title":"층별 출입 권한 설정","permalink":"/docs/en/platform/biostar_air/elevator-set-floor-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/elevator-add-edit-delete.mdx


const frontMatter = {
	id: 'elevator-add-edit-delete',
	title: '엘리베이터 관리하기',
	description: '엘리베이터 출입 통제를 구성하여 층별 접근을 관리합니다. OM-120 모듈을 장치에 연결하고, 층 버튼 릴레이를 설정한 후 접근 스케줄을 관리합니다.',
	keywords: [
		'엘리베이터',
		'층별 출입 통제',
		'OM-120',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "요구사항",
  "id": "요구사항",
  "level": 2
}, {
  "value": "장치와 모듈 연결",
  "id": "장치와-모듈-연결",
  "level": 2
}, {
  "value": "엘리베이터 등록",
  "id": "엘리베이터-등록",
  "level": 2
}, {
  "value": "엘리베이터 수정",
  "id": "엘리베이터-수정",
  "level": 2
}, {
  "value": "엘리베이터 삭제",
  "id": "엘리베이터-삭제",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, IcAirRemove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터 출입 통제를 구성하려면 먼저 출입 통제 장치에 OM-120 모듈을 연결합니다. 그 다음 각 층의 이름과 릴레이 번호를 설정하고, 층별로 접근 가능한 시간대를 스케줄로 제한하여 보안을 강화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "요구사항",
      children: "요구사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터 출입 통제 기능을 활성화하려면 다음 요구사항을 충족해야 합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://supremainc.com/en/hardware/pd_om-120.asp",
            children: "슈프리마 OM-120 모듈"
          }), ": 각 모듈은 최대 12층까지 지원합니다. 최대 12개의 OM-120 모듈을 하나의 출입 통제 장치에 연결하여 최대 144층까지 지원할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OM-120과 연결할 수 있는 슈프리마 또는 에어팝(Airfob) 출입 통제 장치가 필요합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "엘리베이터 제어판에 대한 적절한 배선 작업이 필요합니다. 배선 세부 사항은 엘리베이터 제조업체에 문의하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "층별 출입 스케줄이 우선 적용되며, 휴일 설정으로 일반 출입 규칙을 재정의할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치와-모듈-연결",
      children: "장치와 모듈 연결"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 OM-120 모듈이 연결된 출입 통제 장치를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "module_found_slots_title",
            product: "air"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-device-modules.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치와 연결된 OM-120 모듈을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "엘리베이터-등록",
      children: "엘리베이터 등록"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators.add_elevator_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.title",
            product: "air"
          }), " 패널이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.device_info.field1",
            product: "air"
          }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.device_info.field2",
            product: "air"
          }), "(선택 사항)을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.assign_device_and_modules.title",
            product: "air"
          }), " 섹션에서 출입 인증을 위한 장치와 모듈을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.assign_device_and_modules.field1",
                product: "air"
              }), ": 출입 인증에 사용할 장치를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.assign_device_and_modules.field2",
                product: "air"
              }), ": 엘리베이터 버튼 릴레이를 제어할 OM-120 모듈을 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.assign_device_and_modules.field3",
                product: "air"
              }), ": 인증 완료 후 층 버튼이 활성화된 상태로 유지되는 시간을 설정하세요. 이 시간이 지나면 릴레이는 층 버튼에 신호를 보내지 않습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.floors_configuration.title",
            product: "air"
          }), " 섹션에서 제어할 수 있는 층 수를 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_elevator.floors_configuration.apply_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 층의 이름과 릴레이 번호, 스케줄을 설정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add-config-floor.png",
          alone: true,
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.floors_configuration.floors_table.column1",
                product: "air"
              }), ": 층 이름을 입력하세요. 1층, 로비, 컨퍼런스 층과 같이 식별하기 쉬운 이름을 사용하는 것이 좋습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.floors_configuration.floors_table.column2",
                product: "air"
              }), ": 엘리베이터 제어판에서 각 층의 버튼에 해당하는 릴레이 출력을 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_elevator.floors_configuration.floors_table.column3",
                product: "air"
              }), ": 각 층에 접근할 수 있는 일정을 설정하세요. 예를 들어, 근무 시간 외에는 유지 관리 층에 접근하지 못하도록 제한할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["엘리베이터 설정을 저장하고 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "OM-120 모듈당 최대 12층을 지원합니다. 여러 OM-120 모듈을 데이지 체인 방식으로 연결하여 최대 144층까지 확장할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "add_elevator.floors_configuration.title",
              product: "air"
            }), " 섹션에서 층을 삭제하려면 ", (0,jsx_runtime.jsx)(IcAirRemove, {
              title: "Delete"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["스케줄 등록 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-schedule"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "엘리베이터-수정",
      children: "엘리베이터 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 엘리베이터의 세부 정보를 변경하거나 설정을 수정하려면 다음 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["목록에서 수정할 엘리베이터를 클릭하세요. 또는 엘리베이터의 체크박스를 클릭하고 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_elevator.title",
            product: "air"
          }), " 패널이 나타나면 필요한 정보를 변경하거나 설정을 수정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["수정 사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "엘리베이터-삭제",
      children: "엘리베이터 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 엘리베이터를 삭제하려면 다음 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevators_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 삭제할 엘리베이터의 체크박스를 클릭하세요. 1개 이상의 엘리베이터를 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["목록 상단의 ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경고 메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_yes",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
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