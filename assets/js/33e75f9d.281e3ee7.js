"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["37220"], {
45195: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_monitoring_event_mdx_33e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-monitoring-event-mdx-33e.json
var site_docs_platform_biostar_x_monitoring_event_mdx_33e_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-event","title":"이벤트 모니터링하기","description":"이벤트 모니터링 기능을 통해 실시간 이벤트를 확인하고 관리하는 방법을 안내합니다. 알람 이벤트, 경고 이벤트, 필터링 및 상태 관리 등 다양한 기능을 활용해 효율적으로 이벤트를 처리하세요.","source":"@site/docs/platform/biostar_x/monitoring-event.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-event","permalink":"/platform/biostar_x/monitoring-event","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-event.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-event","title":"이벤트 모니터링하기","description":"이벤트 모니터링 기능을 통해 실시간 이벤트를 확인하고 관리하는 방법을 안내합니다. 알람 이벤트, 경고 이벤트, 필터링 및 상태 관리 등 다양한 기능을 활용해 효율적으로 이벤트를 처리하세요.","keywords":["모니터링","이벤트 모니터링","실시간 이벤트","알람 이벤트","경고 이벤트","이벤트 필터링"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"비디오 모니터링하기","permalink":"/platform/biostar_x/monitoring-video"},"next":{"title":"데이터","permalink":"/platform/biostar_x/how-to-guide-data"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/monitoring-event.mdx


const frontMatter = {
	id: 'monitoring-event',
	title: '이벤트 모니터링하기',
	description: '이벤트 모니터링 기능을 통해 실시간 이벤트를 확인하고 관리하는 방법을 안내합니다. 알람 이벤트, 경고 이벤트, 필터링 및 상태 관리 등 다양한 기능을 활용해 효율적으로 이벤트를 처리하세요.',
	keywords: [
		'모니터링',
		'이벤트 모니터링',
		'실시간 이벤트',
		'알람 이벤트',
		'경고 이벤트',
		'이벤트 필터링'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*예시 이미지 추가*/
/*알림 이벤트와 경고 이벤트의 차이*/


const toc = [{
  "value": "이벤트 목록 확인하기",
  "id": "event-list",
  "level": 2
}, {
  "value": "색상에 따른 이벤트 구분",
  "id": "event-color",
  "level": 2
}, {
  "value": "알람 이벤트 확인",
  "id": "alarm-event",
  "level": 2
}, {
  "value": "실시간 이벤트",
  "id": "real-time-event",
  "level": 2
}, {
  "value": "이벤트 필터링",
  "id": "filter-event",
  "level": 2
}, {
  "value": "필터 적용",
  "id": "apply-filter",
  "level": 3
}, {
  "value": "필터링 해제",
  "id": "removefilter",
  "level": 3
}, {
  "value": "이벤트 목록 비우기",
  "id": "cleareventlist",
  "level": 2
}, {
  "value": "알람 확인 및 조치 사항 기록",
  "id": "acknowledge-alarm-and-record-action",
  "level": 2
}, {
  "value": "알람 이벤트에 대한 조치 사항 기록",
  "id": "recordactionforalarmevent",
  "level": 3
}, {
  "value": "알람 이벤트 인지 여부 보류",
  "id": "deferalarmeventacknowledgment",
  "level": 3
}, {
  "value": "이벤트 목록에서 알람 이벤트 확인",
  "id": "이벤트-목록에서-알람-이벤트-확인",
  "level": 3
}, {
  "value": "확인하지 않은 알람 이벤트 보기",
  "id": "확인하지-않은-알람-이벤트-보기",
  "level": 2
}, {
  "value": "이벤트 목록 열 설정",
  "id": "이벤트-목록-열-설정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAlarm, IcClose, IcFilter, IcMoreB, IcPause, IcPlay, IcVidLog, IcViewAlert, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlarm) _missingMdxReference("IcAlarm", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFilter) _missingMdxReference("IcFilter", true);
  if (!IcMoreB) _missingMdxReference("IcMoreB", true);
  if (!IcPause) _missingMdxReference("IcPause", true);
  if (!IcPlay) _missingMdxReference("IcPlay", true);
  if (!IcVidLog) _missingMdxReference("IcVidLog", true);
  if (!IcViewAlert) _missingMdxReference("IcViewAlert", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["모니터링 페이지에서 화면 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " 섹션에서는 실시간으로 발생하는 이벤트를 확인하고 관리할 수 있습니다. 이벤트의 상태, 알람 이벤트 처리, 필터링, 색상 구분 등 다양한 기능을 통해 효율적으로 이벤트를 관리할 수 있습니다. 특히, 출입문, 장치, 사용자와 연관된 이벤트를 실시간으로 모니터링하고 필요한 조치를 빠르게 수행할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-list",
      children: "이벤트 목록 확인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " 섹션에서는 발생한 이벤트를 실시간으로 확인할 수 있습니다. 이벤트는 아래 정보를 포함합니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.date"
          }), ": 이벤트가 발생한 날짜와 시각입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.door"
          }), ": 이벤트가 발생한 출입문입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.device"
          }), ": 이벤트가 발생한 장치입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.user"
          }), ": 이벤트를 발생시킨 사용자입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.event"
          }), ": 이벤트 상세 내용입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.status"
          }), ": 이벤트 상태입니다. 활성화된 이벤트의 경우 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.preview.event.active"
          }), " 상태로 표시됩니다. 알람 이벤트에는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " 버튼이 표시됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " 버튼을 클릭하면 해당 이벤트는 해소됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-alarm-active.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.view"
          }), ": 이벤트에 출입문과 연결된 카메라의 영상 정보를 포함하고 있다면 비디오 아이콘(", (0,jsx_runtime.jsx)(IcVidLog, {}), ")이 표시됩니다. 아이콘을 클릭하면 영상을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "개별 이벤트를 클릭하면 화면 오른쪽에 상세 정보가 나타납니다. 상세 정보에는 이벤트 발생 시각과 구역, 출입문, 장치, 사용자 그룹, 사용자, 포트, 이벤트 상세 내용이 포함됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이벤트에 출입문과 연결된 카메라의 영상 또는 이미지 정보를 포함하고 있다면 비디오 및 이미지 로그를 같이 확인할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-color",
      children: "색상에 따른 이벤트 구분"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이벤트 목록에서 발생한 이벤트는 색상으로 구분할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-types.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "색상 없음"
          }), ": 일반 이벤트입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#ffa200'
            },
            children: "주황색"
          }), ": 주의 이벤트입니다. 출입이 허용되지 않은 구역에 사용자가 출입을 시도했거나, 출입문이 열려 있는 경우와 같이 주의가 필요한 이벤트입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#ff0000'
            },
            children: "빨간색"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#alarm",
            children: "알람"
          }), " 이벤트입니다. 시스템에서 발생한 이벤트 중 조치가 필요한 경고 이벤트입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#6dae00'
            },
            children: "녹색"
          }), ": 해소된 알람 이벤트입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm-event",
      children: "알람 이벤트 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " 섹션 목록에서 알람 이벤트만 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " 섹션 상단 오른쪽에 ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.alarmEvents"
      }), " 버튼을 클릭하세요. 이벤트 목록에 알람 이벤트만 표시됩니다. 알람 이벤트는 빨간색으로 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-view-only-alarm.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["알람 이벤트를 포함한 모든 이벤트를 확인하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.title"
        }), " 섹션 상단 오른쪽에 ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.toolbar.allEvents"
        }), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-time-event",
      children: "실시간 이벤트"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " 섹션의 이벤트 목록에서는 실시간으로 발생하는 이벤트를 확인할 수 있습니다. 실시간 이벤트를 중지하고 싶다면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " 섹션 상단 오른쪽에 ", (0,jsx_runtime.jsx)(IcPause, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.pause"
      }), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(IcPlay, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.play"
      }), " 버튼을 클릭하면 실시간 이벤트를 재개합니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-pause.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filter-event",
      children: "이벤트 필터링"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apply-filter",
      children: "필터 적용"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자가 원하는 조건으로 이벤트 목록을 필터링할 수 있습니다. 이를 통해 원하는 조건의 이벤트를 빠르게 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " 섹션 목록의 각 헤더 컬럼에 ", (0,jsx_runtime.jsx)(IcFilter, {}), " 아이콘을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "필터 창이 나타나면 왼쪽 목록에서 원하는 항목을 클릭하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-02.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택한 항목을 해제하려면 ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcClose, {})
          }), " 버튼을 클릭하세요. 모든 항목을 해제하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.removeAll"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정을 완료했다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이벤트 목록에 설정한 조건의 이벤트만 표시됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "필터 창의 검색 입력 필드를 통해서 원하는 항목을 빠르게 검색할 수도 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["각 헤더 컬럼별로 원하는 조건을 여러 개 설정할 수 있습니다. 한 개 이상의 조건을 설정하면 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AND"
            }), " 조건을 적용합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "각 헤더 컬럼별로 필터링할 수 있는 항목은 다를 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["필터링 조건을 설정하면 헤더 컬럼의 ", (0,jsx_runtime.jsx)("span", {
              className: "text-blue-500",
              children: (0,jsx_runtime.jsx)(IcFilter, {})
            }), " 아이콘 색상이 파란색으로 변경됩니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removefilter",
      children: "필터링 해제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "적용한 필터 조건을 해제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " 섹션 목록의 필터를 적용한 헤더 컬럼에 ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcFilter, {})
          }), " 아이콘을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["필터 창이 나타나면 오른쪽 목록에서 해제할 항목의 오른쪽에 ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcClose, {})
          }), " 버튼을 클릭하세요. 모든 필터를 해제하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.removeAll"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["해제할 조건을 모두 설정했다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "필터 창의 검색 입력 필드를 통해서 원하는 항목을 빠르게 검색할 수도 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "필터링 조건이 해제되면 헤더 컬럼의 아이콘 색상이 원래대로 전환됩니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cleareventlist",
      children: "이벤트 목록 비우기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " 섹션 목록에서 이벤트를 지울 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " 섹션 오른쪽 상단에 ", (0,jsx_runtime.jsx)(IcMoreB, {}), " 버튼을 클릭하고 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.clearEvents"
      }), "를 선택하세요. 이벤트 목록에 불필요한 이벤트가 많이 쌓여 있다면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.clearEvents"
      }), " 기능을 사용해 정리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-remove.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acknowledge-alarm-and-record-action",
      children: "알람 확인 및 조치 사항 기록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 강제 열림과 같은 알람 이벤트가 발생하면 알람 메시지 창이 표시됩니다. 알람 메시지 창에는 발생한 알람 이벤트의 상세 내용이 포함됩니다. 이때 관리자는 발생한 알람 이벤트에 대한 인지 여부와 조치 내용을 기록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-alert-message.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.ignoreAll"
        }), " 버튼은 알람 이벤트가 2개 이상 발생했을 때만 표시됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recordactionforalarmevent",
      children: "알람 이벤트에 대한 조치 사항 기록"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["메시지 입력 필드에 알람 이벤트에 대한 조치 사항을 입력하세요. 최대 500자까지 입력할 수 있습니다. 조치 사항을 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " 버튼을 클릭하세요. 알람 이벤트에 대한 인지 여부와 조치 사항이 기록됩니다. 알람 메시지 창은 닫힙니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deferalarmeventacknowledgment",
      children: "알람 이벤트 인지 여부 보류"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.ignore"
      }), " 버튼을 클릭해 알람 이벤트에 대한 인지 여부를 보류할 수도 있습니다. 조치 사항은 기록할 수 있습니다. 알람 메시지 창은 닫힙니다. 보류한 알람 이벤트는 이벤트 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.preview.event.active"
      }), " 상태로 표시되고, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " 버튼을 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-alarm-active.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "이벤트-목록에서-알람-이벤트-확인",
      children: "이벤트 목록에서 알람 이벤트 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이벤트 목록의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.status"
      }), " 컬럼에 표시된 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " 버튼을 클릭하면 발생한 알람 이벤트에 대한 인지 여부와 조치 내용을 기록할 수 있습니다. 입력을 완료하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-alert-acknowledge.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "확인하지-않은-알람-이벤트-보기",
      children: "확인하지 않은 알람 이벤트 보기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아직 확인하지 않은 알람 이벤트를 한 번에 확인하고 조치 사항을 기록할 수 있는 기능을 제공합니다. 동일한 알람 이벤트가 여러 개 발생했을 때 유용하게 이용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " 섹션 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcViewAlert, {}), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-view-alerts-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.activeAlarm.activeAlarmEvents"
          }), " 창이 나타나면 왼쪽 목록에서 조치 사항을 기록할 알람 이벤트를 선택하세요. 모든 이벤트를 선택하려면 헤더 컬럼 가장 왼쪽의 체크박스를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-view-alerts-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.activeAlarm.memo"
          }), " 입력 필드에 알람 이벤트에 대한 조치 사항을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 이벤트에 대한 조치 사항을 기록합니다. 알람 이벤트 팝업 창은 닫힙니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["알람 이벤트 목록에서 한 개 이상의 이벤트를 선택해야 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.acknowledge"
        }), " 버튼이 활성화됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "이벤트-목록-열-설정",
      children: "이벤트 목록 열 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이벤트 목록에서 표시할 열을 추가하거나 순서 변경, 숨김 설정을 할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " 섹션의 오른쪽 상단에서 ", (0,jsx_runtime.jsx)(IcMoreB, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.columnLayout"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.columnLayout"
          }), " 창이 나타나면 표시할 열의 체크박스를 클릭해 추가하거나 숨김 설정을 할 수 있습니다. 드래그 앤 드롭으로 열의 순서를 변경할 수도 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-column-layout-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["열 설정을 모두 변경했으면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["열 설정을 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "columnSetting.button.defaultColumn",
          product: "2"
        }), " 버튼을 클릭하세요."]
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