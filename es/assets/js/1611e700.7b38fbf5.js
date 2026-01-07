"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["58325"], {
46329: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_account_settings_mdx_161_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-account-settings-mdx-161.json
var site_docs_platform_biostar_air_account_settings_mdx_161_namespaceObject = JSON.parse('{"id":"platform/biostar_air/account-settings","title":"계정 설정하기","description":"BioStar Air 계정 정보 변경, 알림 설정, SIP 인터폰 설정, 계정 삭제 방법을 알아보세요.","source":"@site/docs/platform/biostar_air/account-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/account-settings","permalink":"/docs/es/platform/biostar_air/account-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/account-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"account-settings","title":"계정 설정하기","description":"BioStar Air 계정 정보 변경, 알림 설정, SIP 인터폰 설정, 계정 삭제 방법을 알아보세요.","keywords":["계정 설정","프로필","알림","SIP 인터폰","계정 관리"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"커스텀 Wiegand 카드 형식 설정하기","permalink":"/docs/es/platform/biostar_air/custom-wiegand-card-formats"},"next":{"title":"모바일 앱","permalink":"/docs/es/platform/biostar_air/managing-sites-with-app"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/account-settings.mdx


const frontMatter = {
	id: 'account-settings',
	title: '계정 설정하기',
	description: 'BioStar Air 계정 정보 변경, 알림 설정, SIP 인터폰 설정, 계정 삭제 방법을 알아보세요.',
	keywords: [
		'계정 설정',
		'프로필',
		'알림',
		'SIP 인터폰',
		'계정 관리'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "계정 설정 접근",
  "id": "accessAccountSettings",
  "level": 2
}, {
  "value": "계정 정보 변경",
  "id": "changeAccountInfo",
  "level": 2
}, {
  "value": "알림 설정",
  "id": "setAlertPreferences",
  "level": 2
}, {
  "value": "IP 인터폰 설정",
  "id": "ip-인터폰-설정",
  "level": 2
}, {
  "value": "탈퇴 또는 계정 삭제",
  "id": "manageAccount",
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
  }, {Cmd, IcAirEdit, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서에서는 BioStar Air 계정 정보 변경, 알림 수신 방식 설정, SIP 인터폰 관리, 사이트 탈퇴 및 계정 삭제 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessAccountSettings",
      children: "계정 설정 접근"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air 포털"
          }), "에 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면 오른쪽 상단의 사용자 프로필 아이콘을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["드롭다운 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-bs3-sip-account-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " 창이 나타나면 원하는 옵션을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "account",
                product: "air"
              }), ": 사용자 이름, 비밀번호, 전화번호 등을 수정할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#changeAccountInfo",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.alerts",
                product: "air"
              }), ": 알림 수신 방식을 설정할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#setAlertPreferences",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_title",
                product: "air"
              }), ": SIP 인터폰 설정 정보를 관리할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "sip-intercom-for-biostation3",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_tab_management",
                product: "air"
              }), ": 사이트를 탈퇴하거나 계정을 삭제할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#manageAccount",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경 사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changeAccountInfo",
      children: "계정 정보 변경"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "account",
        product: "air"
      }), " 탭에서는 현재 접속한 사용자의 정보를 변경할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-account-settings-account.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자의 이름, 비밀번호, 전화번호를 변경할 수 있습니다. 각 항목의 ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "session_timeout_label",
            product: "air"
          }), ": 선택한 시간이 지나면 자동으로 로그아웃됩니다. 원하는 시간을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setAlertPreferences",
      children: "알림 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alerts",
        product: "air"
      }), " 탭에서는 알림 수신 방식을 설정할 수 있습니다. 모든 알림을 수신하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "all_service_alerts",
        product: "air"
      }), " 옵션을 활성화하세요. 원치 않는 알림은 개별적으로 비활성화할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-account-settings-alert-report.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "앱 알림 수신을 동의했으나 알림이 오지 않는다면 모바일 설정을 확인하세요. iOS 또는 안드로이드 기기에서 앱 알림을 허용해야 합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자는 서비스 알림 수신을 거부할 수 있으며, 거부하여도 서비스 이용에 제한이 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ip-인터폰-설정",
      children: "IP 인터폰 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device_intercom_title",
        product: "air"
      }), " 탭에서는 SIP 인터폰 설정 정보를 관리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-bs3-sip-account-settings-intercom.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SIP 인터폰 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "sip-intercom-for-biostation3",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageAccount",
      children: "탈퇴 또는 계정 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_management",
        product: "air"
      }), " 탭에서는 사이트를 탈퇴하거나 계정을 삭제할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-account-settings-management.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "leave_site",
            product: "air"
          }), ": 사이트를 탈퇴할 수 있습니다. 사이트를 탈퇴한 후 다시 사이트에 가입하려면 해당 사이트 관리자에게 초대를 받아야 합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "account_settings_option_3",
            product: "air"
          }), ": 계정을 영구적으로 삭제할 수 있습니다. 계정을 삭제하면 모든 개인 정보와 설정이 영구적으로 삭제되며 복구할 수 없습니다."]
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