"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7587"], {
81259: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ tna_settings_frontMatter),
  toc: () => (/* binding */ tna_settings_toc),
  "default": () => (/* binding */ tna_settings_MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_tna_settings_mdx_5bc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ tna_settings_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-tna-settings-mdx-5bc.json
var site_docs_platform_biostar_x_tna_settings_mdx_5bc_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-settings","title":"근태 관리 설정하기","description":"근태 관리에 사용할 장치를 등록하거나 알림 이메일을 발신할 때 사용할 발신자 정보를 설정할 수 있습니다.","source":"@site/docs/platform/biostar_x/tna-settings.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-settings","permalink":"/docs/en/platform/biostar_x/tna-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-settings","title":"근태 관리 설정하기","description":"근태 관리에 사용할 장치를 등록하거나 알림 이메일을 발신할 때 사용할 발신자 정보를 설정할 수 있습니다.","keywords":["근태","설정"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"근태 기록 수정하기","permalink":"/docs/en/platform/biostar_x/tna-report-edit"},"next":{"title":"Explore UI","permalink":"/docs/en/platform/biostar_x/ui-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/common/_settings-email-settings.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.smtpServer",
            product: "2"
          }), ": SMTP 서버 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), ": SMTP에 대한 설명을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.smtpServerAddr",
            product: "2"
          }), ": SMTP 서버 주소를 입력하세요. SMTP 서버 주소는 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "smtp.{email-service-provider}.com"
          }), "과 같은 형태이며, SMTP 서버로 사용할 이메일의 설정 화면에서 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.portDefault25",
            product: "2"
          }), ": SMTP 서버의 포트 번호를 입력하세요. SMTP 서비스 공급자의 이메일 설정 화면에서 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.userName",
            product: "2"
          }), ": SMTP 서비스의 계정을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.password",
            product: "2"
          }), ": SMTP 서비스의 계정 암호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.securityType",
            product: "2"
          }), ": 보안 종류를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.sender",
            product: "2"
          }), ": 보낸 사람의 이메일 주소를 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "SMTP에 대한 자세한 내용은 시스템 관리자에게 문의하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "SMTP 서버를 2단계 인증이 설정된 이메일 계정으로 사용할 경우 해당 계정의 비밀번호 변경 시 다음 사항에 유의하세요."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "2단계 인증을 설정하면 SMTP 암호는 해당 이메일 계정의 비밀번호가 아닌 2단계 인증으로 생성된 앱 비밀번호를 사용합니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "이때 해당 이메일 계정의 비밀번호가 변경되면 앱 비밀번호는 자동으로 삭제되며, SMTP 암호는 사용할 수 없게 됩니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "해당 이메일 계정의 비밀번호 변경 시 앱 비밀번호를 다시 생성한 뒤 SMTP 암호를 다시 설정하세요."
              }), "\n"]
            }), "\n"]
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


;// CONCATENATED MODULE: ./docs/platform/biostar_x/tna-settings.mdx


const tna_settings_frontMatter = {
	id: 'tna-settings',
	title: '근태 관리 설정하기',
	description: '근태 관리에 사용할 장치를 등록하거나 알림 이메일을 발신할 때 사용할 발신자 정보를 설정할 수 있습니다.',
	keywords: [
		'근태',
		'설정'
	],
	isTranslationMissing: true
};
const tna_settings_contentTitle = undefined;

const assets = {

};




const tna_settings_toc = [{
  "value": "근태 관리 설정 진입",
  "id": "근태-관리-설정-진입",
  "level": 2
}, {
  "value": "근태 관리 설정 항목",
  "id": "근태-관리-설정-항목",
  "level": 2
}, ...toc];
function tna_settings_createMdxContent(props) {
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
  }, {Cmd, IcSet, Image} = _components;
  if (!Cmd) tna_settings_missingMdxReference("Cmd", true);
  if (!IcSet) tna_settings_missingMdxReference("IcSet", true);
  if (!Image) tna_settings_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "근태 관리에 사용할 장치를 등록하거나 알림 이메일을 발신할 때 사용할 발신자 정보를 설정할 수 있습니다. CSV 내보내기로 근태 보고서를 내보낼 때 문서의 구분자를 설정할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "근태-관리-설정-진입",
      children: "근태 관리 설정 진입"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(IcSet, {}), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-access-btn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 항목을 설정하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "근태-관리-설정-항목",
      children: "근태 관리 설정 항목"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.devices",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["근태 관리할 수 있는 장치 목록입니다. 근태 관리 장치로 등록하려면 원하는 장치를 선택한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.register",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-unregister-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.registerDevices",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "현재 사용 중인 근태 관리 장치 목록입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["등록을 해제하려면 원하는 장치를 선택한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.unregister",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-settings-register-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["등록한 장치의 근태 설정을 편집하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.setting",
            product: "2"
          }), " 버튼을 클릭하세요. 근태 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-device-details-advanced#attendance-management",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-initial-setting-device-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.typeCode",
            product: "2"
          }), "은 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.tna.eventKey",
            product: "2"
          }), "와 근태 이벤트 종류를 매핑하는 설정입니다. 근태 이벤트 종류는 아래와 같습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_CHECK_IN",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_CHECK_OUT",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_BREAK_START",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_BREAK_END",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_MEAL_START",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_MEAL_END",
              product: "2"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치와 연결된 상태에서만 장치의 근태 설정을 편집할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.device.root"
            }), " 메뉴에서 등록한 장치를 삭제하면, 등록된 근태 관리 장치도 자동 삭제됩니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "senderInfo",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.triggerAction.senderInfor",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["알림 이메일을 발신할 때 사용할 발신자 정보를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.edit",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-sender-info.png"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.export",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "button.downloadToCsv",
        product: "2"
      }), " 기능으로 근태 보고서를 내보낼 때 문서의 구분자를 선택할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-export-csv.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-3",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna.settings.punchlogs.optionTitle",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["근태 기록을 저장할 기간을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna.settings.punchlogs.storeDays",
        product: "2"
      }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), "으로 설정하고 기간을 입력하세요. 설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna.settings.apply",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-save-period.png"
    })]
  });
}
function tna_settings_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(tna_settings_createMdxContent, {
      ...props
    })
  }) : tna_settings_createMdxContent(props);
}
function tna_settings_missingMdxReference(id, component) {
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