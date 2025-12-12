"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["29971"], {
20993: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2025년 5월 이전에 BioStar Air 출입 통제 서비스를 사용하기 시작한 고객은 현재 Suprema Pass 앱으로 새로 설계된 Airfob Space 앱을 계속 사용할 수 있습니다. 두 앱 모두 동일한 기능을 제공하며 완벽하게 호환됩니다. 기존 사용자는 전환할 필요가 없으며, 모바일 인증 정보가 두 앱 모두에서 원활하게 작동합니다."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
6341: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_16_monitoring_airfob_pro_monitoring_event_logs_and_audit_logs_mdx_bf6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-16-monitoring-airfob-pro-monitoring-event-logs-and-audit-logs-mdx-bf6.json
var site_docs_platform_biostar_air_16_monitoring_airfob_pro_monitoring_event_logs_and_audit_logs_mdx_bf6_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-event-and-audit-logs","title":"이벤트 및 변경 로그 사용하기","description":"BioStar Air에서 이벤트 로그와 변경 로그를 모니터링 및 분석하고, 필터 적용, 데이터 내보내기 및 관리 활동 추적 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/16-monitoring-airfob-pro-monitoring-event-logs-and-audit-logs.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-event-and-audit-logs","permalink":"/docs/ja/platform/biostar_air/monitoring-event-and-audit-logs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/16-monitoring-airfob-pro-monitoring-event-logs-and-audit-logs.mdx","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"monitoring-event-and-audit-logs","title":"이벤트 및 변경 로그 사용하기","description":"BioStar Air에서 이벤트 로그와 변경 로그를 모니터링 및 분석하고, 필터 적용, 데이터 내보내기 및 관리 활동 추적 방법을 안내합니다.","keywords":["모니터링","이벤트 로그","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"경비 구역 관리","permalink":"/docs/ja/platform/biostar_air/manage-alarm-zone"},"next":{"title":"출입문 상태 모니터링","permalink":"/docs/ja/platform/biostar_air/monitoring-door-status"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/16-monitoring-airfob-pro-monitoring-event-logs-and-audit-logs.mdx


const frontMatter = {
	id: 'monitoring-event-and-audit-logs',
	title: '이벤트 및 변경 로그 사용하기',
	description: 'BioStar Air에서 이벤트 로그와 변경 로그를 모니터링 및 분석하고, 필터 적용, 데이터 내보내기 및 관리 활동 추적 방법을 안내합니다.',
	keywords: [
		'모니터링',
		'이벤트 로그',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "로그 정렬 및 관리",
  "id": "로그-정렬-및-관리",
  "level": 2
}, {
  "value": "로그 필터링",
  "id": "filtering-event-logs",
  "level": 3
}, {
  "value": "리포트 설정",
  "id": "generatingReports",
  "level": 3
}, {
  "value": "개인정보 마스킹 처리",
  "id": "dataMasking",
  "level": 3
}, {
  "value": "도구 모음 사용",
  "id": "usingToolbar",
  "level": 3
}, {
  "value": "모바일에서 이벤트 로그 사용",
  "id": "usingEventLogsOnMobile",
  "level": 2
}];
function _createMdxContent(props) {
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
  }, {Cmd, IcAirColumn, IcAirDown, IcAirLogfilter, IcAirMask, IcAirRef, IcAirReport, IcAirReportApp, IcSearch, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirColumn) _missingMdxReference("IcAirColumn", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirLogfilter) _missingMdxReference("IcAirLogfilter", true);
  if (!IcAirMask) _missingMdxReference("IcAirMask", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirReportApp) _missingMdxReference("IcAirReportApp", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "클라우드 출입 통제 플랫폼의 주요 장점 중 하나는 언제 어디서나 사이트 활동을 모니터링할 수 있는 기능입니다. 이 문서는 BioStar Air에서 이벤트 로그와 감사 로그를 모니터링하고 분석하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "이벤트 로그 및 변경 로그에 대한 동영상 가이드를 시청하려면 다음 영상을 참고하세요."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "nwIEYyK-uAg"
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "event_logs_submenu",
        product: "air",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이벤트 로그를 확인하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "event_logs_submenu",
        product: "air"
      }), "로 이동하세요. 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "monitoring_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "event_logs_submenu",
        product: "air"
      }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "event_logs_submenu",
        product: "air"
      }), " 화면에는 이벤트 발생 시간 및 이벤트 이름, 출입문 이름, 장치 구분명, 사용자 유형, 사용자 이름 등과 같은 세부 정보가 포함된 테이블 목록을 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["변경 로그를 확인하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air"
      }), "로 이동하세요. 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "monitoring_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air"
      }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air"
      }), " 화면에서는 관리자가 수행한 작업을 추적하는 로그를 확인할 수 있습니다. 변경 로그에는 작업 시간 및 이메일 주소, 관리자 권한, 작업 유형, 메뉴 경로, 작업 세부 정보와 같은 정보가 포함된 테이블 목록을 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-auditlog-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "로그-정렬-및-관리",
      children: "로그 정렬 및 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_filter_modal_title",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["테이블의 열을 사용자 지정하여 원하는 정보를 표시하거나 숨길 수 있습니다. 순서를 변경해 자주 사용하는 열을 앞쪽에 배치할 수도 있습니다. 이벤트 로그 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirColumn, {}), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_filter_modal_title",
        product: "air"
      }), " 창이 나타납니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list-custom-table.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "표시하거나 숨기려는 열의 체크박스를 선택하거나 선택 해제하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "열의 순서를 변경하려면 해당 열을 클릭한 상태에서 원하는 위치로 드래그하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), "을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), "을 저장하지 않고 로그 목록에 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_apply_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), "의 변경 사항을 취소하고 처음 상태로 되돌리려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_reset_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_save_btn",
              product: "air"
            }), " 버튼을 클릭하면 설정이 저장되어 다른 메뉴로 이동한 후에도 유지됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_apply_btn",
              product: "air"
            }), " 버튼을 클릭하면 변경 사항이 현재 목록에만 적용되며, 다른 메뉴로 이동하면 이전 설정으로 되돌아갑니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), "에서는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_title",
              product: "air"
            }), " 기능을 지원하지 않습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filtering-event-logs",
      children: "로그 필터링"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["로그를 필터링해 원하는 정보를 빠르게 찾을 수 있습니다. 로그 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirLogfilter, {
        width: "20",
        height: "20",
        title: "Filter"
      }), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "logs_filters_action_btn",
        product: "air"
      }), " 창이 나타나면 각 항목에서 원하는 값을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_save_btn",
              product: "air"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action2",
              product: "air"
            }), " 버튼을 클릭하면 설정이 저장되어 다른 메뉴로 이동한 후에도 유지됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_apply_btn",
              product: "air"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action3",
              product: "air"
            }), " 버튼을 클릭하면 변경 사항이 현재 목록에만 적용되며, 다른 메뉴로 이동하면 이전 설정으로 되돌아갑니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["변경 사항을 취소하고 처음 상태로 되돌리려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_reset_btn",
              product: "air"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action1",
              product: "air"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generatingReports",
      children: "리포트 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "로그 데이터를 필터링하여 특정 기간 동안 발생한 이벤트에 대한 리포트를 생성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirReport, {
            width: "20",
            height: "20",
            title: "Report"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " 창이 나타나면 리포트 이름을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-setting.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "리포트에 포함할 항목을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정한 리포트를 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), "에 설정한 이름으로 리포트가 생성됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-added.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["생성된 리포트를 다운로드하려면 리포트 이름 옆의 ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Download"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_title",
            product: "air"
          }), " 창이 나타나면 이벤트를 조회할 기간을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_button_title",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-download.png",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자의 이메일로 다운로드 링크가 전송됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), "에서 생성한 리포트를 검색하거나 수정, 다운로드, 삭제할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dataMasking",
      children: "개인정보 마스킹 처리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "로그에서 개인정보를 마스킹 처리하여 민감한 정보를 보호할 수 있습니다. 개인정보 마스킹 처리를 활성화하면 사용자 이름, 이메일 주소 및 전화번호와 같은 정보가 부분적으로 숨겨집니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["개인정보 마스킹 처리를 활성화하려면 로그 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirMask, {
        width: "20",
        height: "20",
        title: "Apply Masking"
      }), " 버튼을 클릭하세요. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "apply_masking_title",
        product: "air"
      }), " 옵션을 활성화하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "save_btn",
        product: "air"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-apply-masking.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usingToolbar",
      children: "도구 모음 사용"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "로그 목록 상단의 도구 모음을 사용하여 로그를 보다 효율적으로 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 날짜별로 정렬하려면 날짜 및 시간 범위를 선택한 후  ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_apply_btn",
            product: "air"
          }), " 버튼을 클릭하세요. 날짜를 재설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_reset_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-set-datetime.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), "에서는 시작일과 종료일을 선택하면 로그가 자동 필터링됩니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "search_placeholder",
            product: "air"
          }), " 입력 필드에서 특정 키워드를 입력하여 로그를 검색할 수 있습니다. RF 카드 아이디, 사용자 아이디 및 이메일, 이름 중 하나를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), "에서는 검색 기능을 지원하지 않습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 CSV 또는 PDF 파일로 저장하려면 ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Export"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 새로 고침하려면 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirRef, {
            width: "20",
            height: "20",
            title: "Refresh"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["특정 시간 간격으로 새로 고침하려면 목록 왼쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auto_refresh_btn",
            product: "air"
          }), "에서 5초 또는 1분을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-auto-refresh.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), "에서는 새로고침 기능을 지원하지 않습니다."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usingEventLogsOnMobile",
      children: "모바일에서 이벤트 로그 사용"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-mobile-monitoring-eventlog.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 BioStar Air 앱을 실행하고 로그인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["초기 화면 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " 카드를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 로그 목록을 스크롤하여 내용을 확인할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "logs_filters_action_btn",
              product: "air"
            }), ": 이벤트 로그를 필터링할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcSearch, {
              width: "20",
              height: "20",
              title: "Search"
            }), ": 특정 키워드를 검색할 수 있습니다. RF 카드 아이디, 사용자 아이디 및 이메일, 이름 중 하나를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAirReportApp, {
              width: "20",
              height: "20",
              title: "Report"
            }), ": 리포트를 생성할 수 있습니다. 리포트 생성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#generatingReports",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAirDown, {
              width: "20",
              height: "20",
              title: "Download"
            }), ": 리포트를 CSV 또는 PDF 파일 형식으로 다운로드할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAirMask, {
              width: "20",
              height: "20",
              title: "Apply Masking"
            }), ": 개인정보 마스킹 처리를 적용할 수 있습니다."]
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