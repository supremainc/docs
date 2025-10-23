"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5804"], {
7391: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_system_system_backup_mdx_edc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-system-system-backup-mdx-edc.json
var site_docs_platform_biostar_x_settings_system_system_backup_mdx_edc_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-system-backup","title":"시스템 백업하기","description":"시스템 백업 메뉴를 사용하면 BioStar X의 데이터베이스, 각종 설정, 키 등 주요 정보를 백업할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-system-system-backup.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-system-backup","permalink":"/docs/platform/biostar_x/settings-system-system-backup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-system-backup.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-system-backup","title":"시스템 백업하기","description":"시스템 백업 메뉴를 사용하면 BioStar X의 데이터베이스, 각종 설정, 키 등 주요 정보를 백업할 수 있습니다.","keywords":["시스템 백업","backup","자동 백업","수동 백업","데이터 보호","복원"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"감사 추적 관리하기","permalink":"/docs/platform/biostar_x/settings-system-audit-trail"},"next":{"title":"시스템 복원하기","permalink":"/docs/platform/biostar_x/settings-system-system-restore"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-system-system-backup.mdx


const frontMatter = {
	id: 'settings-system-system-backup',
	title: '시스템 백업하기',
	description: '시스템 백업 메뉴를 사용하면 BioStar X의 데이터베이스, 각종 설정, 키 등 주요 정보를 백업할 수 있습니다.',
	keywords: [
		'시스템 백업',
		'backup',
		'자동 백업',
		'수동 백업',
		'데이터 보호',
		'복원'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "수동 백업",
  "id": "수동-백업",
  "level": 2
}, {
  "value": "자동 백업 설정",
  "id": "자동-백업-설정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 데이터베이스, 각종 설정, 키 등 주요 정보를 백업할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.backup",
        product: "2"
      }), " 기능을 사용하면 서버의 데이터 손실을 방지하거나 새로운 PC로 이전할 때 사용하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "지원하는 백업 방식은 아래와 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "수동 백업"
          }), ": 사용자가 수동으로 백업 파일을 생성합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 백업"
          }), ": 시스템에서 정해진 주기마다 백업 파일을 자동 생성합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이전 PC에서 백업한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 백업 파일로 새 PC에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 복원을 진행하면 라이선스를 재발급 받아야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SQL Server 데이터베이스와 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "가 서로 다른 서버에 설치되어 있다면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 시스템 백업 및 복원을 사용할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["시스템 복원에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-system-restore",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "수동-백업",
      children: "수동 백업"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자가 직접 백업 파일을 생성할 수 있습니다."
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
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.general",
            product: "2"
          }), " 섹션에서 백업 파일을 저장할 경로와 최대 백업 파일 수를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-system-backup-general.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.filePath",
                product: "2"
              }), ": 백업 파일을 저장할 경로를 입력하세요. 저장 경로는 이미 생성되어 있는 디렉토리 경로를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.numberFileToKeep",
                product: "2"
              }), ": 최대 백업 파일 수를 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["백업 파일을 생성하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "backup.backupNow",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["백업 파일은 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "backup.filePath",
        product: "2"
      }), " 옵션에 지정된 경로에 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "zip"
      }), " 파일 형식으로 저장됩니다. 파일 이름은 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BioStar_X_Backup_YYYYMMDD_HHMMSS.zip"
      }), " 형식으로 생성됩니다. 여기서 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYYMMDD"
      }), "는 백업 날짜, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HHMMSS"
      }), "는 백업 시간입니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "최대 백업 수를 초과할 경우 가장 오래된 백업 파일부터 자동으로 삭제됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "backup.numberFileToKeep",
              product: "2"
            }), "는 1 ~ 100 사이의 숫자만 입력할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "자동-백업-설정",
      children: "자동 백업 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "자동 백업을 설정하면 시스템에서 정해진 주기마다 백업 파일을 생성합니다."
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
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.autoBackup",
            product: "2"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.frequency",
            product: "2"
          }), " 옵션을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-system-backup-automatic.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.daily",
                product: "2"
              }), ": 매일 자동으로 백업합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), " 옵션에서 백업 시간을 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.weekly",
                product: "2"
              }), ": 매주 자동으로 백업합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.day",
                product: "2"
              }), " 옵션에서 자동으로 백업할 요일을 설정하고, ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), " 옵션에서 백업 시간을 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.monthly",
                product: "2"
              }), ": 매월 자동으로 백업합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.date",
                product: "2"
              }), " 옵션에서 자동으로 백업할 날짜를 설정하고, ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), " 옵션에서 백업 시간을 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["백업 파일은 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.backup.general",
        product: "2"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "backup.filePath",
        product: "2"
      }), " 옵션에 지정된 경로에 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "zip"
      }), " 파일 형식으로 저장됩니다. 파일 이름은 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BioStar_X_Backup_YYYYMMDD_HHMMSS.zip"
      }), " 형식으로 생성됩니다. 여기서 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYYMMDD"
      }), "는 백업 날짜, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HHMMSS"
      }), "는 백업 시간입니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["자동 백업 빈도를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "backup.monthly",
              product: "2"
            }), "으로 선택하고, 날짜를 29, 30, 31일로 설정하면 해당 날짜가 없는 달에는 자동 백업을 실행하지 않습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["시간은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.preferences.root"
            }), "에서 설정한 표준 시간대를 기준으로 합니다. 표준 시간대 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-preferences#language-timezone",
              children: "다음 문서"
            }), "를 참고하세요."]
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