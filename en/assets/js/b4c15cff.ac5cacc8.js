"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6063"], {
7182: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_ui_user_mdx_b4c_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-ui-user-mdx-b4c.json
var site_docs_platform_biostar_x_ui_user_mdx_b4c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-user","title":"사용자","description":"사용자 페이지의 사용자 인터페이스(User Interface)를 안내합니다.","source":"@site/docs/platform/biostar_x/ui-user.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-user","permalink":"/docs/en/platform/biostar_x/ui-user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-user.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-user","title":"사용자","description":"사용자 페이지의 사용자 인터페이스(User Interface)를 안내합니다.","keywords":["사용자","UI"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"런처","permalink":"/docs/en/platform/biostar_x/ui-launcher"},"next":{"title":"열(Column) 레이아웃","permalink":"/docs/en/platform/biostar_x/columnlayout"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/ui-user.mdx


const frontMatter = {
	id: 'ui-user',
	title: '사용자',
	description: '사용자 페이지의 사용자 인터페이스(User Interface)를 안내합니다.',
	keywords: [
		'사용자',
		'UI'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자",
  "id": "user",
  "level": 2
}, {
  "value": "사용자 템플릿",
  "id": "user-template",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Calloutlists, Cmd, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " 페이지의 사용자 인터페이스(User Interface)를 안내합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user",
      children: "사용자"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " 페이지의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.sidebar.user"
      }), " 메뉴에서는 사용자 그룹 관리, 사용자 관리, 출입 권한별 사용자 확인 등 다양한 기능을 통해 사용자를 효율적으로 관리하고, 권한을 통해 보안을 강화할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " 페이지의 UI 구성 요소를 살펴보면 다음과 같습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-ui-user.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "검색 입력 필드에 키워드를 입력하면 사이드 바에서 제공하는 메뉴를 검색하여 목록에 필터링할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 관리 기능과 사용자를 빠르게 추가할 수 있는 템플릿 기능을 제공합니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.sidebar.user"
                }), ": 사용자를 추가하고 크리덴셜을 추가할 수 있습니다. 여러 사용자의 크리덴셜을 한 번에 추가 및 관리할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "how-to-guide-user",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.sidebar.template"
                }), ": 사용자 템플릿을 사용해 모든 신규 사용자에 대해 일관된 정보와 권한을 빠르고 정확하게 적용할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "user-template",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 그룹 또는 출입 권한 그룹을 확인할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["사용자 그룹에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "user-group-manage",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["출입 권한 그룹에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "view-user-by-access",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "검색 입력 필드에 키워드를 입력하면 사용자 그룹 또는 출입 권한 그룹을 검색하여 목록에 필터링할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사이드 메뉴에서 선택한 사용자 그룹의 사용자 수를 확인할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 목록의 표시된 모든 사용자를 선택하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.selectAll"
            }), " 버튼을 클릭하세요. 선택한 사용자 수는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.selected"
            }), "에 표시됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["키워드를 입력해 사용자를 검색할 수 있습니다. 사용자 검색에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#user-search",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 오른쪽 상단에 제공하는 페이지 이동 버튼을 클릭해 다음 또는 이전 사용자 목록을 확인할 수 있습니다. 또는 원하는 페이지를 지정해 이동할 수도 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#select-view-options",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-more-white.svg",
              ico: true,
              alone: true
            }), " 버튼을 클릭하면 사용자와 관련한 다양한 기능을 사용할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.export.title"
                }), ": 사용자 목록을 CSV 파일 또는 Data 파일 형식으로로 저장할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.import.title"
                }), ": 사용자 목록을 CSV 파일 또는 Data 파일 형식으로 불러거나 얼굴 인식 정보를 불러올 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.resendMobileAccess"
                }), ": 모바일로 출입 권한을 재전송할 수 있습니다. 사용자가 모바일로 출입 권한을 받지 못했거나, 모바일 기기를 변경한 경우에 사용할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.sendFaceMobileEnrollLink"
                }), ": 사용자가 모바일 애플리케이션으로 얼굴을 등록할 수 있는 링크를 이메일로 보낼 수 있습니다. 사용자가 모바일 애플리케이션을 설치한 후 얼굴 등록을 할 수 있도록 안내할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.resendQR"
                }), ": QR 코드를 인증 수단으로 사용하는 사용자에게 QR 코드를 재전송할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.faceMigration"
                }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " 이전 버전에서 등록한 비주얼 페이스를 최신 알고리즘으로 업그레이드하여 인식 성능을 향상할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "migration-visual-face",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.columnLayout"
                }), ": 사용자 목록에서 열(column)의 헤더 항목을 변경할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "columnlayout",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.print"
                }), ": 사용자 목록을 인쇄할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 등록 및 일괄 수정, 삭제 기능을 이용할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.user.newUser"
                }), ": 새로운 사용자를 등록할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "add-user",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                type: "note",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["사용자 템플릿 기능을 사용해 사용자를 등록하려면 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "user-template",
                    children: "다음 문서"
                  }), "를 참고하세요."]
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.batchEdit"
                }), ": 한 번에 여러 사용자의 정보나 출입 권한을 수정할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "edit-user#user-information-collective-modification",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.delete"
                }), ": 선택한 사용자를 삭제할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "delete-user",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-template",
      children: "사용자 템플릿"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "team.sidebar.template"
      }), " 은 조직 및 부서별 기본 정보를 표준화하여, 신규 사용자 등록 프로세스를 간소화하고 관리 효율을 높일 수 있는 기능입니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-ui-user-template.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "검색 입력 필드에 키워드를 입력하면 사이드 바에서 제공하는 메뉴를 검색하여 목록에 필터링할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "목록에 표시된 사용자 템플릿의 수를 확인할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모든 사용자 템플릿을 선택하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.selectAll"
            }), " 버튼을 클릭하세요. 선택한 사용자 템플릿의 개수가 버튼의 오른쪽에 표시됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 오른쪽 상단에 제공하는 페이지 이동 버튼을 클릭해 다음 또는 이전 사용자 목록을 확인할 수 있습니다. 또는 원하는 페이지를 지정해 이동할 수도 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "키워드를 입력해 사용자 템플릿을 검색할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-more-white.svg",
              ico: true,
              alone: true
            }), " 버튼을 클릭하면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.columnLayout"
            }), " 기능을 사용할 수 있습니다. 사용자 템플릿 목록에서 열(column)의 헤더 항목을 변경할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "columnlayout",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["새로운 사용자 템플릿을 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.dialog.newTemplate"
            }), " 버튼을 클릭하세요. 사용자 템플릿을 삭제하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.delete"
            }), " 버튼을 클릭하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "user-template",
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