"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6782"], {
32528: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_tna_report_mdx_180_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-tna-report-mdx-180.json
var site_docs_platform_biostar_x_tna_report_mdx_180_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-report","title":"근태 기록 확인하기","description":"시스템을 통해 수집된 사용자의 근태 이벤트로 근태 보고서를 생성할 수 있으며, 시간 기록을 편집하거나 CSV 파일이나 PDF파일로 내보내기할 수 있습니다.","source":"@site/docs/platform/biostar_x/tna-report.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-report","permalink":"/docs/platform/biostar_x/tna-report","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-report.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-report","title":"근태 기록 확인하기","description":"시스템을 통해 수집된 사용자의 근태 이벤트로 근태 보고서를 생성할 수 있으며, 시간 기록을 편집하거나 CSV 파일이나 PDF파일로 내보내기할 수 있습니다.","keywords":["근태 기록","보고서"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"근무 스케줄 설정하기","permalink":"/docs/platform/biostar_x/tna-rule-schedule"},"next":{"title":"근태 기록 수정하기","permalink":"/docs/platform/biostar_x/tna-report-edit"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/tna-report.mdx


const frontMatter = {
	id: 'tna-report',
	title: '근태 기록 확인하기',
	description: '시스템을 통해 수집된 사용자의 근태 이벤트로 근태 보고서를 생성할 수 있으며, 시간 기록을 편집하거나 CSV 파일이나 PDF파일로 내보내기할 수 있습니다.',
	keywords: [
		'근태 기록',
		'보고서'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*Working alarm time Report*/


const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "다국어 보고서 사용하기 전에",
  "id": "다국어-보고서-사용하기-전에",
  "level": 3
}, {
  "value": "보고서 업데이트 전에",
  "id": "보고서-업데이트-전에",
  "level": 3
}, {
  "value": "근태 기록 확인",
  "id": "근태-기록-확인",
  "level": 2
}, {
  "value": "근태 보고서 생성",
  "id": "근태-보고서-생성",
  "level": 3
}, {
  "value": "필터 조건 설정",
  "id": "필터-조건-설정",
  "level": 3
}, {
  "value": "보고서 기간 설정",
  "id": "보고서-기간-설정",
  "level": 3
}, {
  "value": "보고서 내보내기",
  "id": "보고서-내보내기",
  "level": 3
}, {
  "value": "경고 근무 시간 보고서 생성",
  "id": "경고-근무-시간-보고서-생성",
  "level": 2
}, {
  "value": "이메일 자동 발신 설정",
  "id": "이메일-자동-발신-설정",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcSearch, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "시스템을 통해 수집된 사용자의 근태 이벤트로 근태 보고서를 생성할 수 있으며, 시간 기록을 편집하거나 CSV 파일이나 PDF파일로 내보내기할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "미리 설정된 7 개의 보고서 필터를 이용하여 간편하게 사용할 수 있으며, 관리자가 직접 필터를 설정할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "다국어-보고서-사용하기-전에",
      children: "다국어 보고서 사용하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서는 한국어와 영어를 기본 지원합니다. 다국어 보고서를 사용하려면 다음 안내에 따라 원하는 언어를 설정하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다음 경로로 이동하세요. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "C:\\Program Files\\BioStar X\\plugin\\ta\\dist\\setup\\report_fonts"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용하려는 언어 이름으로 폴더를 생성하세요. 언어 이름은 ISO 639-1 규격을 참고하세요. 예를 들어, 스페인어를 사용하려면 폴더 이름을 \"es\"로 생성하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "생성한 폴더로 글꼴을 복사하여 붙여넣기를 하세요. 하나의 트루 타입 글꼴만 지원합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "보고서-업데이트-전에",
      children: "보고서 업데이트 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "는 MariaDB를 기본 데이터베이스로 사용합니다. MS SQL Server 데이터베이스를 사용한다면 아래 사항을 먼저 확인하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 MS SQL Server 데이터베이스와 사용할 때, 등록된 사용자의 수가 많은 경우 보고서를 업데이트할 때마다 PC의 메모리 사용량이 누적될 수 있습니다. MS SQL Server 데이터베이스의 최대 서버 메모리를 다시 설정하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Microsoft SQL Server Management Studio"
          }), "를 실행하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["개체 탐색기에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "의 데이터베이스를 마우스 오른쪽 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "속성"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "메모리"
          }), "를 클릭한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "최대 서버 메모리"
          }), " 항목의 값을 줄이세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 설치 시 MariaDB 및 MS SQL Server 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "custom-install",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "근태-기록-확인",
      children: "근태 기록 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "근태-보고서-생성",
      children: "근태 보고서 생성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 사용자의 근태 기록 보고서를 생성하는 방법을 안내합니다."
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
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.title",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면 왼쪽 사이드바에서 원하는 보고서 필터 항목을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.userGroup",
            product: "2"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), " 항목에서 ", (0,jsx_runtime.jsx)(IcSearch, {}), " 버튼을 클릭한 후 그룹 또는 사용자를 지정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["보고서를 생성하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.updateReport",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면 하단에 보고서 목록이 나타나면 원하는 항목을 클릭하여 세부 정보를 확인할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-update-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "필터-조건-설정",
      children: "필터 조건 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "필터 조건을 설정하여 새로운 근태 기록 보고서를 생성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-filter-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": 보고서 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportType",
            product: "2"
          }), ": 원하는 보고서 종류를 선택하세요. 제공하는 보고서 종류는 아래와 같습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "report.daily",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.dailySummary",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individual",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individualSummary",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.leave",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.exception",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.modifiedPunchLogHistory",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.workweek",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.report.condition.reportType",
              product: "2"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individual",
              product: "2"
            }), "로 선택하면 사용자의 출입 기록 출력 여부를 설정할 수 있습니다."]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-report-individual-types.png"
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "report.individual.optionSummary",
                  product: "2"
                }), ": 보고서에 사용자의 출근 및 퇴근 기록만 출력합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "report.individual.optionDetail",
                  product: "2"
                }), ": 보고서에 사용자의 모든 출입 기록을 출력합니다."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "grid.columnSetting",
            product: "2"
          }), ": 보고서 테이블의 열 순서를 변경하거나 숨길 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-filter-setting-column.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["열 순서를 변경한 후 기본 설정으로 복원하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.defaultColumn",
              product: "2"
            }), " 버튼을 클릭하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report.filter",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportType",
            product: "2"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report.leave",
            product: "2"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report.exception",
            product: "2"
          }), "로 설정했을 때만 활성화되며, 부재 기록이나 예외 기록의 세부 조건을 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.userGroup",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), ": 보고서를 생성할 사용자 그룹이나 사용자를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.saveFilter.button",
            product: "2"
          }), ": 설정한 근태 보고서를 필터로 저장할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-filter-saving.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "보고서-기간-설정",
      children: "보고서 기간 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "보고서 기간 설정 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-period-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["보고서 기간을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.daily",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.weekly",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.monthly",
        product: "2"
      }), "로 설정할 수 있습니다. 특정 기간의 보고서를 생성하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.custom",
        product: "2"
      }), "를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "보고서-내보내기",
      children: "보고서 내보내기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.downloadToCsv",
            product: "2"
          }), ": 생성한 보고서를 CSV 파일로 저장할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.exportPdf",
            product: "2"
          }), ": 생성한 보고서를 PDF 파일로 저장할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "경고-근무-시간-보고서-생성",
      children: "경고 근무 시간 보고서 생성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "지정된 근무 시간에 도달한 사용자의 근태 보고서를 생성하거나, 이메일로 관리자에게 알려줄 수 있습니다. 경고 근무 시간 보고서는 주별로 생성됩니다."
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
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.title",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바의 필터 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "경고 근무 시간 보고서"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-working-alarm.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.filterConditions",
            product: "2"
          }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportPeriod",
            product: "2"
          }), "의 각 항목을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["보고서를 생성하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.updateReport",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["지정된 근무 시간에 도달한 사용자에 대한 알림을 관리자에게 이메일로 보내려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ta.report.condition.autoEmail",
          product: "2"
        }), "을 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#autoEmail",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "이메일-자동-발신-설정",
      children: "이메일 자동 발신 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "지정된 근무 시간에 도달한 사용자에 대한 알람 이메일을 자동으로 관리자에게 보낼 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-working-alarm-auto-email.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.email",
            product: "2"
          }), ": 관리자에게 이메일을 자동으로 보내려면 체크박스를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.dst.dayOfWeek",
            product: "2"
          }), ": 관리자에게 이메일을 보낼 요일을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.time",
            product: "2"
          }), ": 관리자에게 이메일을 보낼 시간을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.recipient",
            product: "2"
          }), ": 이메일을 받을 관리자를 지정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.edit",
            product: "2"
          }), " 버튼을 클릭하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.recipient",
            product: "2"
          }), " 팝업창이 나타납니다. 이메일 주소를 입력하세요. 1명 이상의 관리자를 지정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-working-alarm-auto-email-receipt.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.report.condition.autoEmail",
              product: "2"
            }), " 기능을 설정하려면 필터 조건을 설정한 후 필터를 저장해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["자동 발신한 이메일의 보낸 사람 정보는 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.setting",
              product: "2"
            }), "(", (0,jsx_runtime.jsx)(IcSet, {}), ") → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.triggerAction.senderInfor",
              product: "2"
            }), "에서 설정할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-settings#senderInfo",
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