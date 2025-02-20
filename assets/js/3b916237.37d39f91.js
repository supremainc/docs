"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["422"], {
"9745": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_2_getting_started_mdx_3b9_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-2-getting-started-mdx-3b9.json
var site_docs_platform_biostar_2_getting_started_mdx_3b9_namespaceObject = JSON.parse('{"id":"platform/biostar2/getting-started","title":"시작하기 전에","description":"BioStar 2를 시작하기 전에 알아야 할 내용을 안내합니다.","source":"@site/docs/platform/biostar2/getting-started.mdx","sourceDirName":"platform/biostar2","slug":"/platform/biostar2/getting-started","permalink":"/docs/platform/biostar2/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar2/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기 전에","description":"BioStar 2를 시작하기 전에 알아야 할 내용을 안내합니다.","keywords":["설치 안내"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"개요","permalink":"/docs/platform/biostar2/"},"next":{"title":"시스템 최소 요구 사항","permalink":"/docs/platform/biostar2/system-requirements"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar2/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: '시작하기 전에',
	description: 'BioStar 2를 시작하기 전에 알아야 할 내용을 안내합니다.',
	keywords: [
		'설치 안내'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "설치 전 참고 사항",
  "id": "before",
  "level": 2
}, {
  "value": "데이터베이스 확인하기",
  "id": "checkdb",
  "level": 2
}, {
  "value": "MariaDB",
  "id": "mariadb",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Column, Columns} = _components;
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), "를 시작하기 전에 알아야 할 내용을 안내합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), "는 32비트 운영 체제와 64비트 운영 체제를 지원합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), "를 설치하려는 PC의 시스템 종류를 확인한 후 설치하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before",
      children: "설치 전 참고 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), "를 설치하기 전에 다음 사항을 확인하고 설치를 진행하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2.9.2"
          }), " 버전부터는 32비트 운영체제를 위한 설치 파일을 제공하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 1"
          }), "이 설치된 PC에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), "를 설치하지 마세요. 프로그램 성능에 문제가 발생할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2.2.1"
          }), "이나 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.2.2"
          }), " 버전을 설치한 상태에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2.3.0"
          }), "을 설치하면 SQLite에 저장된 모든 정보를 새로운 MariaDB로 마이그레이션합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), " 최신 버전으로의 업그레이드는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.6.0"
          }), " 버전부터 지원됩니다. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2.6.0"
          }), " 버전 이하에서 최신 버전으로 업그레이드하려면 다음 차례로 설치하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "현재 버전"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "업그레이드 순서"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2.2.1 > 2.3 > 2.4 > 2.4.1 > 2.5.0 > 2.6.4 > Latest version"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2.2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                rowSpan: "3",
                children: "2.3 > 2.4 > 2.4.1 > 2.5.0 > 2.6.4 > Latest version"
              })]
            }), (0,jsx_runtime.jsx)(_components.tr, {
              children: (0,jsx_runtime.jsx)(_components.td, {
                children: "2.2.1"
              })
            }), (0,jsx_runtime.jsx)(_components.tr, {
              children: (0,jsx_runtime.jsx)(_components.td, {
                children: "2.2.2"
              })
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2.3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2.4 > 2.4.1 > 2.5.0 > 2.6.4 > Latest version"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2.4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "2.4.1 > 2.5.0 > 2.6.4 > Latest version"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2.5"
              }), (0,jsx_runtime.jsx)(_components.td, {
                rowSpan: "2",
                children: "2.6.4 > Latest version"
              })]
            }), (0,jsx_runtime.jsx)(_components.tr, {
              children: (0,jsx_runtime.jsx)(_components.td, {
                children: "2.6"
              })
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2.6.4 버전 이상"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Latest version"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows 8.1을 사용하는 경우 다음 링크를 참고해 KB2919355 업데이트를 설치하세요. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://support.microsoft.com/help/2919355/windows-rt-8-1--windows-8-1--and-windows-server-2012-r2-update-april-2",
            children: "Link 1"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL 2012 Express를 사용할 경우 다음 링크를 참고해 서비스 팩 3를 설치하세요. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/download/details.aspx?id=49996",
            children: "Link 2"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL 2014 Express를 사용할 경우 다음 링크를 참고해 서비스 팩 2를 설치하세요. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=53168",
            children: "Link 3"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL Server와 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), "가 서로 다른 PC에 설치되어 있는 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), "를 설치한 PC에 Native Client를 설치해야 합니다. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=50402",
            children: "Link 4"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL Server를 사용할 경우 서버 및 각 테이블의 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collation"
          }), " 옵션을 CI(Case-insensitive)로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기존 버전의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), "에서 데이터베이스를 백업할 때 모든 서비스를 사용 중지한 후 진행하세요. 또한, AC 데이터베이스와 TA 데이터베이스를 함께 백업하고, 복원하지 않으면 TA 데이터베이스를 사용할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), " 데이터베이스를 백업하려면 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar 2(x64)\\util"
          }), " 폴더의 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "enckey"
          }), " 파일과 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar 2(x64)"
          }), " 폴더의 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "system.conf"
          }), ", ", (0,jsx_runtime.jsx)(_components.em, {
            children: "setting.conf"
          }), " 파일도 반드시 함께 백업하세요. 그렇지 않으면, 데이터베이스를 사용할 수 없게 됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), "가 사용하는 포트의 기본 값은 아래와 같습니다. 다른 프로그램에서 동일한 포트를 점유한다면, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2"
          }), "가 정상 구동되지 않을 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsx)(Column, {
              className: "text--left",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "HTTP 포트: 80"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "웹소켓 포트: 9002"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "데이터베이스 포트: 3312"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "근태 HTTPS 포트: 3002"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "FastCGI 포트: 9000"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "통합 게이트웨이 HTTPS 포트: 5002"
                  }), "\n"]
                }), "\n"]
              })
            }), (0,jsx_runtime.jsx)(Column, {
              className: "text--left",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "HTTPS 포트: 443"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "API 포트: 9010"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "근태 HTTP 포트: 3000"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "근태 클라우드 포트: 52001"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "통합 게이트웨이 HTTP 포트: 5000"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "리포트 HTTP 포트: 4213"
                  }), "\n"]
                }), "\n"]
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checkdb",
      children: "데이터베이스 확인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), "를 설치하기 전에 사용자가 직접 구성한 데이터베이스를 사용한다면 아래 사항을 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mariadb",
      children: "MariaDB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "my.cnf"
          }), " 파일에서 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[mysql]"
          }), " 항목 하단의 옵션을 아래와 같이 변경하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='my.cnf'",
            children: "character-set-server=utf8\ncollation-server=utf8_unicode_ci\nmax_connections = 600\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "my.cnf"
          }), " 파일에서 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[mysql]"
          }), " 항목 하단에 아래 옵션을 추가하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='my.cnf'",
            children: "log_bin_trust_function_creators = 1\ngroup_concat_max_len = 102400\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "루트(root) 권한으로 MariaDB에 접속해 아래 명령어를 실행하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title='SQL'",
            children: "GRANT SUPER ON . TO user_id@'localhost' IDENTIFIED BY \"password\";\nGRANT SUPER ON . TO user_id@'%' IDENTIFIED BY \"password\";\n"
          })
        }), "\n"]
      }), "\n"]
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
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