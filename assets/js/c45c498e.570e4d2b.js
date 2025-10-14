"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9523"], {
2825: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_data_generate_reports_mdx_c45_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-data-generate-reports-mdx-c45.json
var site_docs_platform_biostar_x_data_generate_reports_mdx_c45_namespaceObject = JSON.parse('{"id":"platform/biostar_x/data-generate-reports","title":"리포트 생성하기","description":"원하는 포맷에 맞게 리포트를 생성할 수 있습니다.","source":"@site/docs/platform/biostar_x/data-generate-reports.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/data-generate-reports","permalink":"/docs/platform/biostar_x/data-generate-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/data-generate-reports.mdx","tags":[],"version":"current","frontMatter":{"id":"data-generate-reports","title":"리포트 생성하기","description":"원하는 포맷에 맞게 리포트를 생성할 수 있습니다.","keywords":["리포트","템플릿"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"데이터","permalink":"/docs/platform/biostar_x/how-to-guide-data"},"next":{"title":"자동 생성 스케줄 설정하기","permalink":"/docs/platform/biostar_x/data-automatic-report-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/data-generate-reports.mdx


const frontMatter = {
	id: 'data-generate-reports',
	title: '리포트 생성하기',
	description: '원하는 포맷에 맞게 리포트를 생성할 수 있습니다.',
	keywords: [
		'리포트',
		'템플릿'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "모든 이벤트 조회",
  "id": "모든-이벤트-조회",
  "level": 2
}, {
  "value": "기간 설정",
  "id": "기간-설정",
  "level": 3
}, {
  "value": "조회 조건 설정",
  "id": "조회-조건-설정",
  "level": 3
}, {
  "value": "조회 조건 해제",
  "id": "조회-조건-해제",
  "level": 3
}, {
  "value": "이벤트 영상 확인하기",
  "id": "이벤트-영상-확인하기",
  "level": 3
}, {
  "value": "CSV 내보내기",
  "id": "csv-내보내기",
  "level": 3
}, {
  "value": "경보 이력 조회",
  "id": "경보-이력-조회",
  "level": 2
}, {
  "value": "기간 설정",
  "id": "기간-설정-1",
  "level": 3
}, {
  "value": "조회 조건 설정",
  "id": "조회-조건-설정-1",
  "level": 3
}, {
  "value": "조회 조건 해제",
  "id": "조회-조건-해제-1",
  "level": 3
}, {
  "value": "사용자 리포트 조회",
  "id": "사용자-리포트-조회",
  "level": 2
}, {
  "value": "커스텀 리포트 생성",
  "id": "custom-report",
  "level": 2
}, {
  "value": "리포트 관리",
  "id": "report-management",
  "level": 2
}, {
  "value": "리포트 저장",
  "id": "리포트-저장",
  "level": 3
}, {
  "value": "리포트 파일 저장",
  "id": "리포트-파일-저장",
  "level": 3
}, {
  "value": "리포트 인쇄",
  "id": "리포트-인쇄",
  "level": 3
}, {
  "value": "리포트 삭제",
  "id": "리포트-삭제",
  "level": 3
}, {
  "value": "열 설정",
  "id": "열-설정",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, IcBw2, IcClose, IcFilter2, IcFirst2, IcFw2, IcLast2, IcMoreW, IcRepTrash, IcRepoEdit, IcReportVid, IcSearch, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcBw2) _missingMdxReference("IcBw2", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFilter2) _missingMdxReference("IcFilter2", true);
  if (!IcFirst2) _missingMdxReference("IcFirst2", true);
  if (!IcFw2) _missingMdxReference("IcFw2", true);
  if (!IcLast2) _missingMdxReference("IcLast2", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcRepTrash) _missingMdxReference("IcRepTrash", true);
  if (!IcRepoEdit) _missingMdxReference("IcRepoEdit", true);
  if (!IcReportVid) _missingMdxReference("IcReportVid", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서 발생한 모든 이벤트를 조회하거나 경보 이력만 조회할 수 있습니다. 사용자가 원하는 조건에 맞게 필터링하여 커스텀 리포트를 생성할 수도 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), "를 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), "를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "모든-이벤트-조회",
      children: "모든 이벤트 조회"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서 발생한 모든 이벤트를 조회할 수 있습니다. 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.events"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.allEvents"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-generate-report.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["조회된 목록에서 이전 또는 다음 페이지를 확인하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcFw2, {}), " 또는 ", (0,jsx_runtime.jsx)(IcBw2, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에 표시할 행의 수를 변경하려면 화면 오른쪽 상단의 드랍다운 메뉴를 클릭하고 원하는 값을 선택하세요. 최소 25행부터 최대 200행까지 선택할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-rows.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "기간-설정",
      children: "기간 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.header.customReport.period"
      }), " 항목에서 원하는 기간을 설정할 수 있습니다. 날짜 영역을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-select-period.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "오늘 날짜를 기준으로 1일부터 6달까지 사전 정의된 기간을 선택할 수 있습니다. 원하는 기간을 선택하면 해당 기간에 발생한 이벤트가 목록에 자동 표시됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.rollCall.userDefined"
          }), "을 선택하면 원하는 기간을 직접 설정할 수도 있습니다. 기간 선택 창이 나타나면 시작 날짜와 종료 날짜, 시간을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.ok"
          }), " 버튼을 클릭하세요. 설정한 기간에 발생한 이벤트가 목록에 자동 표시됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-custom-period.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["오늘 날짜를 선택하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.dialog.rollCall.today"
            }), " 버튼을 클릭하세요."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "조회-조건-설정",
      children: "조회 조건 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "조회 목록의 헤더 부분에서 원하는 조건을 설정하여 목록을 필터링할 수 있습니다. 날짜를 제외한 모든 항목에 조건을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이벤트 목록의 헤더 부분에서 원하는 컬럼의 ", (0,jsx_runtime.jsx)(IcFilter2, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "필터 조건 창이 나타나면 원하는 항목을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택을 완료했으면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCondition",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 조건에 맞는 이벤트만 목록에 표시됩니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-filtered.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "조회-조건-해제",
      children: "조회 조건 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정한 조회 조건을 해제하려면 헤더 부분 아래에 설정된 조건에서 ", (0,jsx_runtime.jsx)(IcClose, {}), " 버튼을 클릭하세요. 설정한 조건이 해제되고 모든 이벤트가 목록에 다시 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-disable-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "이벤트-영상-확인하기",
      children: "이벤트 영상 확인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이벤트 목록에서 특정 이벤트가 발생한 장치에 카메라가 연결되어 있다면 해당 이벤트의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.column.customReport.view"
      }), " 컬럼에 ", (0,jsx_runtime.jsx)(IcReportVid, {}), " 아이콘이 표시됩니다. 아이콘을 클릭하면 팝업창을 통해 해당 이벤트가 발생한 시점의 영상을 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-video-log.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["카메라 규칙 설정에서 한 개 이상의 카메라를 연결했다면 첫 번째 카메라의 영상을 재생합니다. 카메라 규칙 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "어드밴스"
            }), "(Advanced) 라이선스 이상에서 추가 옵션을 통해 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문과 카메라 연동에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-내보내기",
      children: "CSV 내보내기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["조회된 이벤트 목록을 CSV 파일로 내보낼 수 있습니다. 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "menu.csvDownload",
        product: "2"
      }), "를 클릭하세요. 사용자의 PC에 CSV 파일을 다운로드할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["CSV 파일의 이름 형식은 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Report_YYYYMMDD_hash.csv"
        }), "입니다. (예, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Report_20251002_94a85b7519664378b4b39b879f1e81b7.csv"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "경보-이력-조회",
      children: "경보 이력 조회"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["경보(알람) 이력만 조회할 수 있습니다. 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.events"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.alertHistory"
      }), "을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-lists.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["조회된 목록에서 이전 또는 다음 페이지를 확인하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcFw2, {}), " 또는 ", (0,jsx_runtime.jsx)(IcBw2, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["조회된 목록에서 첫 페이지 또는 마지막 페이지로 이동하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcFirst2, {}), " 또는 ", (0,jsx_runtime.jsx)(IcLast2, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에 표시할 행의 수를 변경하려면 화면 오른쪽 상단의 드랍다운 메뉴를 클릭하고 원하는 값을 선택하세요. 최소 25행부터 최대 200행까지 선택할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-rows.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["이벤트 모니터링에서 경보(알람) 이벤트 확인에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "monitoring-event",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "기간-설정-1",
      children: "기간 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["원하는 기간을 설정하고 해당 기간에 발생한 경보 이력을 조회할 수 있습니다. 조회 목록의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportHeader.datetime",
        product: "2"
      }), " 컬럼에서 ", (0,jsx_runtime.jsx)(IcFilter2, {}), " 버튼을 클릭하세요. 기간 선택 창이 나타나면 시작 날짜와 종료 날짜, 시간을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.button.ok"
      }), " 버튼을 클릭하세요. 설정한 기간에 발생한 이벤트가 목록에 자동 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-set-custom-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["오늘 날짜를 선택하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "data.dialog.rollCall.today"
        }), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "조회-조건-설정-1",
      children: "조회 조건 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "조회 목록의 헤더 부분에서 원하는 조건을 설정하여 목록을 필터링할 수 있습니다. 날짜를 제외한 모든 항목에 조건을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이벤트 목록의 헤더 부분에서 원하는 컬럼의 ", (0,jsx_runtime.jsx)(IcFilter2, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "필터 조건 창이 나타나면 원하는 항목을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택을 완료했으면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCondition",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 조건에 맞는 이벤트만 목록에 표시됩니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-events-filtered.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "조회-조건-해제-1",
      children: "조회 조건 해제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정한 조회 조건을 해제하려면 헤더 부분 아래에 설정된 조건에서 ", (0,jsx_runtime.jsx)(IcClose, {}), " 버튼을 클릭하세요. 설정한 조건이 해제되고 모든 이벤트가 목록에 다시 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-events-disable-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-리포트-조회",
      children: "사용자 리포트 조회"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자 관련 템플릿을 선택하여 리포트를 생성할 수 있습니다. 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.user"
      }), " 하위에서 원하는 템플릿을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--30",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-user-report.png"
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersInformation"
              }), ": 사용자 상세 정보를 목록 형식으로 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersInDevice"
              }), ": 장치에 등록된 사용자의 정보를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.userDetail"
              }), ": 사용자 상세 정보를 카드 형식으로 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.userPhotoGallery"
              }), ": 사용자 프로필 사진을 갤러리 형식으로 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersWithoutCredential"
              }), ": 크리덴셜을 설정하지 않은 사용자를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.privateAuthModeByUser"
              }), ": 사용자의 개인 인증 모드 설정 정보를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.numberOfCredentialsByUser"
              }), ": 사용자에게 설정된 크리덴셜 개수를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.allCards"
              }), ": 등록된 카드를 기준으로 사용자를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.unassignedCards"
              }), ": 사용자에게 할당되지 않은 카드를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.blacklistCards"
              }), ": 사용 정지된 카드를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.expiredUsers"
              }), ": 유효 기간이 만료된 사용자를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersToBeExpiredInNDays"
              }), ": N일 이내에 유효 기간이 만료되는 사용자를 조회할 수 있습니다. 일 수는 리포트를 생성하기 전에 직접 입력할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.report.idleUsersWithValue"
              }), ": 최근 N개월 동안 출입 기록이 없는 사용자를 조회할 수 있습니다. 개월 수는 리포트를 생성하기 전에 직접 입력할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.inactiveUsers"
              }), ": 비활성화된 사용자를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["생성한 리포트는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.savedReports"
            }), " 하위에 저장할 수 있습니다. 리포트 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.button.saveReport"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["리포트 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#report-management",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-report",
      children: "커스텀 리포트 생성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "원하는 조건에 맞게 필터링하여 커스텀 리포트를 생성할 수 있습니다. 생성한 리포트는 템플릿으로 저장하여 추후 동일한 조건으로 리포트를 생성할 때 유용하게 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.sidebar.events"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.sidebar.customReport"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.customReport.events"
          }), " 창에서 원하는 이벤트를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-filter.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 이벤트 선택을 완료하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-select-items.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["검색(", (0,jsx_runtime.jsx)(IcSearch, {}), ") 입력 필드에서 원하는 항목을 검색할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["가장 오른쪽 목록에서 ", (0,jsx_runtime.jsx)(IcRepTrash, {}), " 버튼을 클릭하면 선택한 항목을 제외할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["조회 기간을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-period.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.static"
              }), ": 특정 날짜와 시간을 설정해 조회 기간을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.dynamic"
              }), ": 오늘 날짜를 기준으로 시작일, 종료일, 시간을 설정할 수 있습니다. 반복적으로 일정 기간의 리포트를 생성할 때 유용합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자, 출입문, 장치를 기준으로 그룹별, 개별적으로 조건을 설정할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-select-filters.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["오른쪽 목록에서 ", (0,jsx_runtime.jsx)(IcRepTrash, {}), " 버튼을 클릭하면 선택한 항목을 제외할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 조건을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "열 설정 창에서 리포트에 표시할 컬럼을 선택하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-columns.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 컬럼 선택을 완료하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.button.generate"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커스텀 리포트 생성을 완료합니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["리포트 제목, 이벤트 항목, 기간, 필터 조건을 수정하려면, 리포트 상단 영역에서 ", (0,jsx_runtime.jsx)(IcRepoEdit, {}), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["리포트 제목은 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.savedReports"
            }), " 하위에서도 변경할 수 있습니다. 제목을 변경할 커스텀 리포트를 선택하고 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.renameSavedReport"
            }), "을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-data-custom-report-rename.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["리포트 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#report-management",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "report-management",
      children: "리포트 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "리포트-저장",
      children: "리포트 저장"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["생성한 리포트를 템플릿으로 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.saveReport"
      }), " 버튼을 클릭하세요. 저장한 리포트는 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.savedReports"
      }), " 하위에서 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-saved.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "리포트-파일-저장",
      children: "리포트 파일 저장"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["리포트를 PDF 또는 CSV 파일로 내보내려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.export"
      }), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.exportReport"
      }), " 창이 나타나면 각 항목을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.export"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-export.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "리포트-인쇄",
      children: "리포트 인쇄"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PC와 연결된 프린터로 리포트를 인쇄하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.print"
      }), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.printReport"
      }), " 창이 나타나면 각 항목을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.print"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-print.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "웹 브라우저의 새 탭을 통해 인쇄 미리보기 화면이 나타납니다. 화면 오른쪽 상단의 인쇄 버튼을 클릭하면 인쇄를 시작할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "리포트-삭제",
      children: "리포트 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["저장한 리포트를 삭제하려면 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.savedReports"
      }), " 하위에서 삭제할 리포트를 선택하고 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.deleteSavedReport"
      }), "를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-remove.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "열-설정",
      children: "열 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "리포트에 표시되는 열(Column) 설정을 변경할 수 있습니다. 열 설정을 통해 표시할 열을 선택하거나 열의 순서를 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["리포트 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.customReport.columns"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), " 창이 나타나면 원하는 열을 선택하거나 선택 해제하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-column-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "열의 순서를 변경하려면 원하는 열을 클릭한 채로 드래그하여 위치를 변경하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["열 레이아웃 설정을 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.button.defaultColumn",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "생성한 리포트에 따라 선택 또는 선택 해제할 수 있는 열이 다를 수 있습니다."
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