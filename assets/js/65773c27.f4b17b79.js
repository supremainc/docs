"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24426"], {
84462: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_site_advanced_settings_mdx_657_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-site-advanced-settings-mdx-657.json
var site_docs_platform_biostar_air_site_advanced_settings_mdx_657_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-advanced-settings","title":"고급 설정하기","description":"BioStar Air 사이트의 고급 설정으로 시스템을 조직의 요구사항에 맞게 구성하세요. 시간대, 근태 관리, 모바일 인증, 리더 호환성 등 다양한 옵션을 설정할 수 있습니다.","source":"@site/docs/platform/biostar_air/site-advanced-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-advanced-settings","permalink":"/docs/platform/biostar_air/site-advanced-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-advanced-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-advanced-settings","title":"고급 설정하기","description":"BioStar Air 사이트의 고급 설정으로 시스템을 조직의 요구사항에 맞게 구성하세요. 시간대, 근태 관리, 모바일 인증, 리더 호환성 등 다양한 옵션을 설정할 수 있습니다.","keywords":["고급 설정","구성하기"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"기본 설정하기","permalink":"/docs/platform/biostar_air/site-basic-settings"},"next":{"title":"보안 설정하기","permalink":"/docs/platform/biostar_air/site-security-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/site-advanced-settings.mdx


const frontMatter = {
	id: 'site-advanced-settings',
	title: '고급 설정하기',
	description: 'BioStar Air 사이트의 고급 설정으로 시스템을 조직의 요구사항에 맞게 구성하세요. 시간대, 근태 관리, 모바일 인증, 리더 호환성 등 다양한 옵션을 설정할 수 있습니다.',
	keywords: [
		'고급 설정',
		'구성하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "고급 옵션을 구성하여 BioStar Air를 조직의 업무 환경에 맞게 최적화하세요. 시간대와 일광 절약 시간을 설정하고, 근태 관리를 활성화하며, 모바일 인증 방식과 이벤트 로그 표시 방법을 조정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_setting",
        product: "air"
      }), " 탭에서 사이트의 설정을 구성할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input4",
            product: "air"
          }), ": 시간대는 언제든지 변경할 수 있습니다. 설정한 시간대에 따라  로그 및 이벤트를 기록합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/daylight-saving-time"
          }), "를 참고하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_field_dst_usage",
              product: "air"
            }), ": 특정 지역에서 적용되는 일광 절약 시간을 활성화하거나 비활성화하세요."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), ": 근태 관리(T&A) 기능을 활성화할 수 있습니다. 근태 관리 기능을 활성화한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), " 버튼을 클릭해 세부 설정을 구성하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/configuring-ta"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_report",
            product: "air"
          }), ": 근태 보고서(T&A Report)를 생성할 수 있습니다. 근태 보고서 기능을 활성화한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), " 버튼을 클릭해 보고서 생성 조건을 구성하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/reports-time-attendance-reports"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input7",
            product: "air"
          }), ": 일정 거리 떨어진 출입문을 원격으로 열 수 있는 롱터치(Long Touch) 기능을 활성화할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_ble_background",
            product: "air"
          }), ": 슈프리마 패스 앱이 백그라운드 모드일 때 모바일 카드를 사용할 수 있도록 허용합니다. 이 설정을 활성화하면 사용자가 앱을 열지 않고도 출입문을 열 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "display_face_preview_setting",
            product: "air"
          }), ": 얼굴 크리덴셜을 발급할 때 얼굴 사진 미리보기를 표시할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input5",
            product: "air"
          }), ": 이벤트 로그의 시간 표시 방법을 설정합니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_time_display_setting1",
                product: "air"
              }), ": 각 장치의 설정에서 구성한 시간대를 기준으로 이벤트 로그를 표시합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_time_display_setting2",
                product: "air"
              }), ": 사이트의 시간대에 따라 로그를 표시합니다. 모든 장치가 한 위치에 있는 사이트에 유용합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_profile_input4",
                product: "air"
              }), " 옵션을 참고하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "new_setting_label_msb",
            product: "air"
          }), ": 에어팝 패치(Airfob Patch)를 타사 리더기와 함께 사용할 때 카드 데이터를 전송하는 방법을 설정합니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "패치 장치 전용 설정으로, 패치를 부착하는 타사 장치의 타입에 맞게 설정할 수 있습니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "validity_period_label",
            product: "air"
          }), ": 모바일 크리덴셜의 기본 유효 기간을 설정합니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["관리자는 개별 사용자의 크리덴셜에 대해 별도의 만료 날짜를 설정할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/adding-individual-users#setting-access-levels-and-validity"
            }), "를 참고하세요."]
          })
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