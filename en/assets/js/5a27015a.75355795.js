"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4108"], {
1689: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_map_manage_area_mdx_5a2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-map-manage-area-mdx-5a2.json
var site_docs_platform_biostar_x_settings_map_manage_area_mdx_5a2_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-map-manage-area","title":"구역 구성하기","description":"층과 시설을 구성하고 구역을 구성할 수 있습니다. 보안 관리하고 있는 구역을 지도를 통해 관리하고 확인할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-map-manage-area.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-map-manage-area","permalink":"/docs/en/platform/biostar_x/settings-map-manage-area","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-map-manage-area.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-map-manage-area","title":"구역 구성하기","description":"층과 시설을 구성하고 구역을 구성할 수 있습니다. 보안 관리하고 있는 구역을 지도를 통해 관리하고 확인할 수 있습니다.","keywords":["맵","구역","층","시설"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"시설 구성하기","permalink":"/docs/en/platform/biostar_x/settings-map-manage-facility"},"next":{"title":"Manage Credentials","permalink":"/docs/en/platform/biostar_x/settings-credential-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-map-manage-area.mdx


const frontMatter = {
	id: 'settings-map-manage-area',
	title: '구역 구성하기',
	description: '층과 시설을 구성하고 구역을 구성할 수 있습니다. 보안 관리하고 있는 구역을 지도를 통해 관리하고 확인할 수 있습니다.',
	keywords: [
		'맵',
		'구역',
		'층',
		'시설'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "구역 추가",
  "id": "add-area",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, DocLink, IcCurP, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcCurP) _missingMdxReference("IcCurP", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["층과 시설을 구성하고 구역을 구성할 수 있습니다. 보안 관리하고 있는 구역을 지도를 통해 관리하고 확인할 수 있습니다. 구역을 구성하면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " 페이지에서 해당 구역의 시설과 층으로 진입하여 모니터링할 수 있는 기능을 제공합니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-open-map.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "구역을 구성하기 전에 층과 시설을 먼저 등록하세요. 층과 시설 등록에 대한 자세한 내용은 다음 문서를 참고하세요."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-map-manage-floor"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-map-manage-facility"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["맵 모니터링에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-map",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-area",
      children: "구역 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "현재 관리하고 있는 보안 지역의 구역을 지도를 통해 설정하고 관리할 수 있습니다."
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["구역 목록 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "New Area"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.page.title"
          }), " 화면의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.information.section.title"
          }), " 섹셕에서 추가하려는 구역의 이름과 설명을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.configuration.section.title"
          }), " 섹션의 지도에서 추가할 구역의 위치를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["지도에서 마우스 오른쪽 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.setArea"
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 형태로 구역을 설정하세요. 마우스를 클릭해 시작하고 드래그하여 구역을 설정할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-drawing.gif"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정한 구역에 시설을 추가하려면 마우스 오른쪽 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add Facility"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-02.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "구역을 추가할 때는 적어도 하나의 시설 또는 출입문, 카메라를 설정해야 합니다."
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["출입문을 추가하려면 마우스 오른쪽 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.area.label.addDoor"
                }), "를 선택하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["카메라를 추가하려면 마우스 오른쪽 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.area.label.addCamera"
                }), "를 선택하세요."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.addFacility"
          }), " 창이 나타나면 추가할 시설을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["구역 설정을 완료하면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["지도에서 왼쪽 상단의 입력 필드를 통해 원하는 위치를 검색할 수 있습니다. 현재 위치로 돌아가려면 ", (0,jsx_runtime.jsx)(IcCurP, {}), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "구역을 추가할 때 지도에서는 하나의 다각형을 통해서 구역을 설정할 수 있습니다. 구역을 설정할 때는 반드시 시작점과 끝점을 동일하게 설정해야 합니다. 구역을 설정한 후에는 구역의 모양을 변경할 수 없습니다. 구역을 수정하려면 구역을 삭제하고 다시 추가해야 합니다."
          }), "\n"]
        }), "\n"]
      })
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