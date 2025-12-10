"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["10619"], {
394: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_before_start_mdx_27c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-before-start-mdx-27c.json
var site_docs_platform_biostar_x_before_start_mdx_27c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/before-start","title":"시작하기 전에","description":"BioStar X를 시작하기 전에 알아야 할 내용을 안내합니다.","source":"@site/docs/platform/biostar_x/before-start.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/before-start","permalink":"/docs/platform/biostar_x/before-start","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/before-start.mdx","tags":[],"version":"current","frontMatter":{"id":"before-start","title":"시작하기 전에","description":"BioStar X를 시작하기 전에 알아야 할 내용을 안내합니다.","keywords":["설치 안내","MariaDB","SQL Server","데이터베이스"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"개요","permalink":"/docs/platform/biostar_x/overview"},"next":{"title":"지원 장치","permalink":"/docs/platform/biostar_x/supported-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/before-start.mdx


const frontMatter = {
	id: 'before-start',
	title: '시작하기 전에',
	description: 'BioStar X를 시작하기 전에 알아야 할 내용을 안내합니다.',
	keywords: [
		'설치 안내',
		'MariaDB',
		'SQL Server',
		'데이터베이스'
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
  "value": "소규모 조직 (10 GB 이하)",
  "id": "소규모-조직-10-gb-이하",
  "level": 4
}, {
  "value": "중규모 조직 (10 ~ 500 GB)",
  "id": "중규모-조직-10--500-gb",
  "level": 4
}, {
  "value": "대규모 조직 (500 GB 이상)",
  "id": "대규모-조직-500-gb-이상",
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
  "id": "settingsforusingmssql",
  "level": 5
}, {
  "value": "데이터베이스 설정",
  "id": "database-setting",
  "level": 5
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, NextItem, NextStep, Step, Steps} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
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
        }), "는 64비트 운영 체제를 지원합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: "BioStar X"
          }), "는 64bit 운영체제에서만 설치할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL 2012 Express를 사용한다면 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/download/details.aspx?id=49996",
            children: "서비스 팩 3"
          }), "를 설치하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL 2014 Express를 사용한다면 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=53168",
            children: "서비스 팩 2"
          }), "를 설치하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MS SQL Server를 사용할 경우 서버 및 각 테이블의 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collation"
          }), " 옵션을 CI(Case-insensitive)로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이전 버전의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에서 데이터베이스를 백업할 때 모든 서비스를 사용 중지한 후 진행하세요. 또한, AC 데이터베이스와 TA 데이터베이스를 함께 백업하고, 복원하지 않으면 TA 데이터베이스를 사용할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 데이터베이스를 백업하려면 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar X\\util"
          }), " 폴더의 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "enckey"
          }), " 파일과 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar X"
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
          }), "가 사용하는 포트의 기본값은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "service-settings",
            children: "다음 문서"
          }), "를 참고하세요. 다른 프로그램에서 동일한 포트를 점유한다면, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "가 정상 구동되지 않을 수 있습니다."]
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
        }), " 섹션에서 아래 권장값으로 설정하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "자동 증가"
        }), "는 퍼센트 대신 고정 크기(MB/GB)로 설정하되, 지나치게 작은 단위로 잦은 증가가 일어나지 않도록 주의하세요."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-before-start-new-database.png",
        caption: true
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "소규모-조직-10-gb-이하",
        children: "소규모 조직 (10 GB 이하)"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["데이터: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기"
            }), " 1 ~ 5 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "자동 증가"
            }), " 100 ~ 512 MB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기"
            }), " 512 MB ~ 2 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "자동 증가"
            }), " 100 ~ 512 MB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TempDB: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기"
            }), " 512 MB ~ 1 GB"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예: 데이터 2 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 증가"
          }), " 256 MB) / 로그 1 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 증가"
          }), " 128 MB) / TempDB 512 MB"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "중규모-조직-10--500-gb",
        children: "중규모 조직 (10 ~ 500 GB)"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["데이터: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기"
            }), " 10 ~ 50 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "자동 증가"
            }), " 512 MB ~ 1 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기"
            }), " 5 ~ 10 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "자동 증가"
            }), " 512 MB ~ 1 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TempDB: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기"
            }), " 2 ~ 8 GB"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예: 데이터 20 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 증가"
          }), " 1 GB) / 로그 5 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 증가"
          }), " 512 MB) / TempDB 4 GB"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "대규모-조직-500-gb-이상",
        children: "대규모 조직 (500 GB 이상)"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["데이터: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기"
            }), " 100 GB 이상, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "자동 증가"
            }), " 1 ~ 4 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기"
            }), " 20 ~ 100 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "자동 증가"
            }), " 1 ~ 4 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TempDB: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "처음 크기"
            }), " 8 ~ 32 GB"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예: 데이터 100 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 증가"
          }), " 2 GB) / 로그 50 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 증가"
          }), " 2 GB) / TempDB 16 GB"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "자동 증가"
            }), "를 매우 작은 단위로 설정하거나 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "최대 크기"
            }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "무제한"
            }), "으로 설정하지 말고, 예상 증가량에 따라 적절히 설정하거나 모니터링하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "트랜잭션이 많은 환경에서는 로그를 주기적으로 백업하여 로그 파일의 크기가 증가하지 않도록 주의하세요."
          }), "\n"]
        }), "\n"]
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
          id: "settingsforusingmssql",
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
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "system-requirements",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 설치하기 위한 시스템의 최소 사양을 알아보세요."]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "express-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "처음 설치하는 사용자를 위한 간편 설치 방법을 안내합니다."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "custom-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자가 이미 설치한 데이터베이스와 연동하기 위한 사용자 정의 설치 방식을 안내합니다."
        })
      })]
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