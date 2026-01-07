"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["69833"], {
88144: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_04_1_troubleshooting_adding_users_in_bulk_mdx_184_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-04-1-troubleshooting-adding-users-in-bulk-mdx-184.json
var site_docs_platform_biostar_air_04_1_troubleshooting_adding_users_in_bulk_mdx_184_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-adding-users-in-bulk","title":"일괄 사용자 추가 문제","description":"BioStar Air 포털을 사용하여 사용자를 일괄 추가할 때 발생하는 일반적인 문제를 해결하는 방법을 알아보세요.","source":"@site/docs/platform/biostar_air/04-1-troubleshooting-adding-users-in-bulk.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-adding-users-in-bulk","permalink":"/docs/es/platform/biostar_air/troubleshooting-adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/04-1-troubleshooting-adding-users-in-bulk.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting-adding-users-in-bulk","title":"일괄 사용자 추가 문제","description":"BioStar Air 포털을 사용하여 사용자를 일괄 추가할 때 발생하는 일반적인 문제를 해결하는 방법을 알아보세요.","keywords":["문제 해결","대량 사용자","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"API 통합","permalink":"/docs/es/platform/biostar_air/integration-quickstart"},"next":{"title":"위치 서비스를 활성화해야 하나요?","permalink":"/docs/es/platform/biostar_air/location-services-issues"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/04-1-troubleshooting-adding-users-in-bulk.mdx


const frontMatter = {
	id: 'troubleshooting-adding-users-in-bulk',
	title: '일괄 사용자 추가 문제',
	description: 'BioStar Air 포털을 사용하여 사용자를 일괄 추가할 때 발생하는 일반적인 문제를 해결하는 방법을 알아보세요.',
	keywords: [
		'문제 해결',
		'대량 사용자',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CSV 파일 준비",
  "id": "csv-파일-준비",
  "level": 2
}, {
  "value": "CSV 템플릿 다운로드",
  "id": "csv-템플릿-다운로드",
  "level": 3
}, {
  "value": "CSV 템플릿의 정확한 형식 사용",
  "id": "csv-템플릿의-정확한-형식-사용",
  "level": 3
}, {
  "value": "날짜 (<Cmd class=\"normal\"></Cmd> / <Cmd class=\"normal\"></Cmd>)",
  "id": "날짜---",
  "level": 4
}, {
  "value": "크리덴셜 요구 사항",
  "id": "크리덴셜-요구-사항",
  "level": 4
}, {
  "value": "사전 검증을 위한 엑셀 수식",
  "id": "excelFormulas",
  "level": 2
}, {
  "value": "이메일 또는 전화번호 중복 검증",
  "id": "이메일-또는-전화번호-중복-검증",
  "level": 3
}, {
  "value": "날짜 형식 검증",
  "id": "날짜-형식-검증",
  "level": 3
}, {
  "value": "이메일 형식 검증",
  "id": "이메일-형식-검증",
  "level": 3
}, {
  "value": "에러가 발생하나요?",
  "id": "common-errors",
  "level": 2
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "여러 고객과 파트너가 사용자 목록을 일괄 방식으로 추가할 때 문제를 보고했습니다. 대부분의 문제는 잘못된 형식의 CSV 파일에서 발생합니다. 일괄 추가 기능이 예상대로 작동하도록 아래 지침을 정확히 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "v2.10부터 BioStar Air는 잘못된 항목이 포함된 CSV 파일을 업로드할 경우 검증 보고서를 반환합니다. 오류를 수정한 후 파일을 다시 업로드하세요."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-add-bulk-import-user-csv-error.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csv-파일-준비",
      children: "CSV 파일 준비"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-템플릿-다운로드",
      children: "CSV 템플릿 다운로드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_btn",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " 패널이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_download_btn_text",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 템플릿 파일(", (0,jsx_runtime.jsx)(_components.em, {
            children: "biostar-import-user-csv-example.csv"
          }), ")을 로컬에 저장하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-템플릿의-정확한-형식-사용",
      children: "CSV 템플릿의 정확한 형식 사용"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "열(column)을 수동으로 추가하거나 삭제하지 마세요"
          }), ". 예기치 않은 열(column)이 있다면 오류가 발생할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["추가 필드(예: 직원 ID 또는 부서)를 포함해야 한다면, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_setting_templ_action",
            product: "air"
          }), " 기능을 이용해 해당 필드를 추가하세요. 필드를 추가하면 다운로드한 CSV 파일에 해당 열이 자동으로 포함됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "각 열의 요구 사항을 참고하여 데이터를 올바르게 입력하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header1",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 사용자의 고유한 숫자 ID입니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header1",
            product: "air",
            className: "bold"
          }), " 열은 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "비워둘 수 있으며"
          }), " 시스템에서 자동으로 값을 할당합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 아이디를 직접 작성하는 경우"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "숫자만"
              }), " 사용하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "고유한 값"
              }), "을 사용하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "문자, 공백, 하이픈 또는 특수 문자를 포함하지 마세요."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["문자를 포함한 회사별 직원 ID를 사용하려 한다면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header1",
          product: "air",
          className: "bold"
        }), " 필드를 사용하지 마세요. 대신 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_setting_templ_action",
          product: "air"
        }), " 기능을 사용해 별도의 커스텀 사용자 필드를 만드세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header7",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["유효한 이메일 형식을 사용하세요. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#excelFormulas",
            children: "유효성 검사 수식"
          }), "을 참고하여 이메일 형식을 검증할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "공백은 포함할 수 없습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["골뱅이 문자(", (0,jsx_runtime.jsx)(_components.code, {
                children: "@"
              }), ", at sign)를 포함해야 합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["도메인에는 마침표(", (0,jsx_runtime.jsx)(_components.code, {
                children: "."
              }), ") 및 최상위 도메인을 포함해야 합니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "예시: example.com, gmail.com, suprema.co.kr"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "주소 뒤에 추가 마침표가 없어야 합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "특수 문자 또는 숨겨진 문자가 없어야 합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이메일 주소여야 합니다. '제공하지 않음' 또는 '제공되지 않음'과 같은 오류가 발생할 수 있습니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이메일 주소는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "고유해야 합니다"
          }), ". 파일 내 또는 기존 사용자 간에 중복을 허용하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "아래 크리덴셜을 발급받는다면 이메일 주소는 필수로 입력해야 합니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_mobile",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option4",
              product: "air"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RFID 카드만 가지고 있는 사용자는 이메일 주소를 입력할 필요가 없습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header8",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 SMS를 통해 크리덴셜을 전달하지 않는다면 선택 사항입니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이메일 주소와 마찬가지로 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "고유해야"
          }), " 하며, 파일 내 또는 기존 사용자 간에 중복을 허용하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "크리덴셜 전달을 전달할 때는 이메일을 권장합니다. SMS 메시지는 추가 요금이 발생합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "날짜---",
      children: ["날짜 (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header5",
        product: "air",
        className: "normal"
      }), " / ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header6",
        product: "air",
        className: "normal"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모든 날짜 필드는 아래와 같은 정확한 형식을 따라야 합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-plaintext",
        children: "YYYY-MM-DDTHH:MM:SS.sssZ\n\nExample:\n1995-05-09T00:00:00.000Z\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["'Z'를 누락하거나, 대시(", (0,jsx_runtime.jsx)(_components.code, {
        children: "—"
      }), ") 대신 슬래시(", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), ")를 사용하거나, 시간을 생략하는 등 사소한 차이도 업로드를 실패할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "크리덴셜-요구-사항",
      children: "크리덴셜 요구 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "크리덴셜 형식"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "이메일 또는 전화번호"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_rf",
              product: "air"
            }), " Only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "아니요."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_mobile",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option4",
              product: "air"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "예, 하나가 필요합니다."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "크리덴셜은 이메일 주소 또는 전화번호로 전달되어야 합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["둘 다 제공할 수 있지만 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모바일 형식의 크리덴셜"
          }), "에는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "최소 하나가 필요"
          }), "합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이메일은 무료입니다. SMS는 요금이 부과됩니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "excelFormulas",
      children: "사전 검증을 위한 엑셀 수식"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["데이터를 업로드하기 전에 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "helper columns"
      }), "에서 다음 수식을 사용하여 데이터를 확인할 것을 권장합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "이메일-또는-전화번호-중복-검증",
      children: "이메일 또는 전화번호 중복 검증"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Detect Duplicate Emails or Phone Numbers\"",
        children: "=IF(E2=\"\", \"\", IF(COUNTIF(E$2:E2, E2)>1, \"Duplicate\", \"First Occurrence\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "날짜-형식-검증",
      children: "날짜 형식 검증"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate ISO 8601 Date Format (Column Q)\"",
        children: "=IF(Q2=\"\", \"\", IF(AND(LEN(Q2)=24, \n  ISNUMBER(VALUE(MID(Q2,1,4))), MID(Q2,5,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,6,2))), MID(Q2,8,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,9,2))), MID(Q2,11,1)=\"T\", \n  ISNUMBER(VALUE(MID(Q2,12,2))), MID(Q2,14,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,15,2))), MID(Q2,17,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,18,2))), MID(Q2,20,1)=\".\", \n  ISNUMBER(VALUE(MID(Q2,21,3))), RIGHT(Q2,1)=\"Z\"), \n  \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "이메일-형식-검증",
      children: "이메일 형식 검증"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate Email Format (Column E)\"",
        children: "=IF(TRIM(E2)=\"\", \"\", IF(AND(\n  ISNUMBER(FIND(\"@\", E2)),\n  ISNUMBER(FIND(\".\", E2)),\n  FIND(\"@\", E2) > 1,\n  FIND(\".\", E2, FIND(\"@\", E2)) > FIND(\"@\", E2) + 1,\n  LEN(E2) - LEN(SUBSTITUTE(E2, \"@\", \"\")) = 1,\n  ISERROR(FIND(\" \", E2))\n), \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-errors",
      children: "에러가 발생하나요?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "올바른 템플릿을 다운로드하고 추가 열을 추가하지 않았습니까?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 크리덴셜을 받는 사용자에 대한 모든 필수 필드가 작성되었습니까?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이메일 주소와 전화번호가 파일 및 기존 사용자 간에 고유합니까?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "날짜 및 이메일 형식이 위에 지정된 대로 정확합니까?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "서비스팀은 파일 수정 서비스를 제공하지 않습니다. 파일이 업로드되지 않으면 위의 검증 도구를 사용하여 문제를 파악하고 해결하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 문서는 서비스 팀의 수동 문제 해결 없이도 업로드를 성공적으로 완료할 수 있도록 돕기 위해 작성되었습니다."
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