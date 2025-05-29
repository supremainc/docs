"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3821"], {
2168: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_getting_started_mdx_b09_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-getting-started-mdx-b09.json
var site_docs_platform_biostar_x_getting_started_mdx_b09_namespaceObject = JSON.parse('{"id":"platform/biostar_x/getting-started","title":"시작하기 전에","description":"BioStar X를 시작하기 전에 알아야 할 내용을 안내합니다.","source":"@site/docs/platform/biostar_x/getting-started.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/getting-started","permalink":"/docs/en/platform/biostar_x/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기 전에","description":"BioStar X를 시작하기 전에 알아야 할 내용을 안내합니다.","keywords":["설치 안내","MariaDB","SQL Server","데이터베이스"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"개요","permalink":"/docs/en/platform/biostar_x/overview"},"next":{"title":"시스템 최소 요구 사항","permalink":"/docs/en/platform/biostar_x/system-requirements"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: '시작하기 전에',
	description: 'BioStar X를 시작하기 전에 알아야 할 내용을 안내합니다.',
	keywords: [
		'설치 안내',
		'MariaDB',
		'SQL Server',
		'데이터베이스'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "설치 전 참고 사항",
  "id": "before",
  "level": 2
}, {
  "value": "데이터베이스 확인",
  "id": "checkdb",
  "level": 2
}, {
  "value": "MariaDB",
  "id": "mariadb",
  "level": 3
}, {
  "value": "MS SQL Server",
  "id": "ms-sql-server",
  "level": 3
}, {
  "value": "포트 설정",
  "id": "port-setting",
  "level": 4
}, {
  "value": "사용자 및 데이터베이스 생성",
  "id": "create-a-user-and-database",
  "level": 4
}, {
  "value": "Windows Authentication 데이터베이스 설정",
  "id": "windows-authentication-database-settings",
  "level": 4
}, {
  "value": "사전 설정",
  "id": "preliminary-setting",
  "level": 5
}, {
  "value": "Active Directory 계정으로 MS SQL Windows Authentication을 사용하기 위한 설정",
  "id": "settings-for-using-ms-sql",
  "level": 5
}, {
  "value": "데이터베이스 설정",
  "id": "database-setting",
  "level": 5
}, {
  "value": "다음 단계",
  "id": "next-step",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
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
  }, {Column, Columns, Step, Steps} = _components;
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "를 시작하기 전에 알아야 할 내용을 안내합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "는 32비트 운영 체제와 64비트 운영 체제를 지원합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "를 설치하려는 PC의 시스템 사양을 확인한 후 설치하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before",
      children: "설치 전 참고 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
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
            children: "BioStar X"
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
            children: "BioStar X"
          }), " 최신 버전으로의 업그레이드는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.6.0"
          }), " 버전부터 지원됩니다. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar 2.6.0"
          }), " 버전 이하에서 최신 버전으로 업그레이드하려면 다음 차례로 설치하세요."]
        }), "\n", (0,jsx_runtime.jsx)("div", {
          className: "overflow-x",
          children: (0,jsx_runtime.jsxs)(_components.table, {
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
          })
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
            children: "BioStar X"
          }), "가 서로 다른 PC에 설치되어 있는 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
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
            children: "BioStar X"
          }), "에서 데이터베이스를 백업할 때 모든 서비스를 사용 중지한 후 진행하세요. 또한, AC 데이터베이스와 TA 데이터베이스를 함께 백업하고, 복원하지 않으면 TA 데이터베이스를 사용할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
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
            children: "BioStar X"
          }), "가 사용하는 포트의 기본값은 아래와 같습니다. 다른 프로그램에서 동일한 포트를 점유한다면, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
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
                    children: "웹 소켓 포트: 9002"
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
      children: "데이터베이스 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ms-sql-server",
      children: "MS SQL Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모든 데이터베이스 및 테이블의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Collation"
            }), " 옵션을 대소문자로 구분하지 않는 CI(Case-insensitive)로 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["데이터베이스 이름에는 숫자, 영문(대소문자 구분), 특수 기호 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_"
            }), "만 사용할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "port-setting",
      children: "포트 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server 구성 관리자"
          }), "를 실행한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL EXPRESS에 대한 프로토콜"
          }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TCP/IP 프로토콜"
          }), "을 사용하려는 포트 번호로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설정을 적용하려면 SQL Server 서비스를 재시작하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "create-a-user-and-database",
      children: "사용자 및 데이터베이스 생성"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Management Studio"
          }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server 인증"
          }), "을 이용하여 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "sa"
          }), " 계정으로 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "보안"
          }), "에서 마우스 오른쪽 버튼을 클릭한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "새 로그인"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "로그인 이름"
          }), " 필드에 원하는 이름을 입력한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server 인증"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "암호"
          }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "암호 확인"
          }), " 필드에 사용하려는 암호를 입력한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "암호 정책 강제 적용"
          }), "을 해제하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "확인"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "데이터베이스"
          }), "에서 마우스 오른쪽 버튼을 클릭한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "새 데이터베이스"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "데이터베이스 이름"
          }), " 필드에 원하는 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "소유자"
          }), " 필드에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3"
          }), "단계에서 설정한 로그인 이름을 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "데이터베이스 파일"
        }), " 섹션에서 아래와 같이 설정할 것을 권장합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기(MB)"
            }), ": 3000"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "자동 증가/최대 크기"
            }), ": 10MB 단위, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "제한 없음"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션이 많은 환경에서는 로그를 주기적으로 백업하여 로그 파일의 크기가 증가하지 않도록 주의하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "windows-authentication-database-settings",
      children: "Windows Authentication 데이터베이스 설정"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "preliminary-setting",
          children: "사전 설정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Microsoft Windows Active Directory"
          }), "를 사용한다면 Windows Authentication 데이터베이스를 설정하기 전에 아래와 같이 사전 설정을 완료하세요."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Management Studio"
              }), "에 관리자 계정으로 로그인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "보안"
              }), "에서 마우스 오른쪽 버튼을 클릭한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "새 로그인"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Windows 인증"
              }), "을 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "검색"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 또는 그룹 선택"
              }), " 창에서 위치를 클릭한 뒤 Active Directory 경로를 선택하고 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "확인"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "선택할 개체 이름 입력"
              }), " 필드에 사용자 이름을 입력한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "이름 확인"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "확인"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "페이지 선택"
              }), " 항목에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "서버 역할"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), "을 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "확인"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "페이지 선택"
              }), " 항목에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 매핑"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "master"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), "를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "기본 스키마"
              }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "dbo"
              }), "로 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "확인"
              }), "을 클릭하여 저장하세요."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "settings-for-using-ms-sql",
          children: "Active Directory 계정으로 MS SQL Windows Authentication을 사용하기 위한 설정"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "services.msc"
              }), "를 실행하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["SQL Server 데이터베이스의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "속성"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "로그온"
              }), " 창에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "계정 지정"
              }), "을 선택한 뒤 도메인 사용자로 로그인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Windows 방화벽에 1433 포트를 예외로 추가하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["SQL Server에 비어 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " 데이터베이스를 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " 인증으로 생성하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["SQL Server에 도메인 사용자가 Windows Authentication을 사용하도록 설정하고 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " 데이터베이스에 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), "을 제외한 나머지 모든 권한을 할당하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["로컬 컴퓨터를 제외한 모든 서비스를 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "services.msc"
              }), "에서 연결하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "도메인 사용자를 로컬 서비스 컴퓨터에서 관리자로 설정하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MS SQL ODBC를 연결하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "database-setting",
          children: "데이터베이스 설정"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server 구성 관리자"
              }), "를 실행한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Native Client"
              }), " 하위의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "클라이언트 프로토콜"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP/IP"
              }), "를 선택한 뒤 기본 포트를 확인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server 네트워크 구성"
              }), " 하위의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL EXPRESS에 대한 프로토콜"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP/IP"
              }), "에서 ODBC 포트가 기본 포트와 동일하게 설정되었는지 확인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Management Studio"
              }), "에 관리자 계정으로 접속하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "보안"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "로그인"
              }), "을 클릭한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "NT AUTHORITY\\SYSTEM"
              }), "을 더블 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "페이지 선택"
              }), " 항목에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "서버 역할"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "public"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), "을 선택해 체크한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "확인"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "페이지 선택"
              }), " 항목에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 매핑"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " 데이터베이스를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "확인"
              }), "을 클릭하여 저장하세요."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-step",
      children: "다음 단계"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 설치하기 위한 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "system-requirements",
            children: "시스템의 최소 사양"
          }), "을 알아보세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 빠르게 설치하는 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tutorial-express-install",
            children: "다음 문서"
          }), "에서 확인할 수 있습니다."]
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