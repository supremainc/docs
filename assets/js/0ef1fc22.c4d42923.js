"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["50369"], {
94728: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_dashboard_adding_widget_mdx_0ef_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-dashboard-adding-widget-mdx-0ef.json
var site_docs_platform_biostar_x_dashboard_adding_widget_mdx_0ef_namespaceObject = JSON.parse('{"id":"platform/biostar_x/dashboard-adding-widget","title":"위젯 추가하기","description":"대시보드는 사용자가 원하는 정보를 자유롭게 배치할 수 있는 사용자 정의형 모니터링 화면입니다.","source":"@site/docs/platform/biostar_x/dashboard-adding-widget.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/dashboard-adding-widget","permalink":"/docs/platform/biostar_x/dashboard-adding-widget","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/dashboard-adding-widget.mdx","tags":[],"version":"current","frontMatter":{"id":"dashboard-adding-widget","title":"위젯 추가하기","description":"대시보드는 사용자가 원하는 정보를 자유롭게 배치할 수 있는 사용자 정의형 모니터링 화면입니다.","keywords":["대시보드","위젯"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"대시보드","permalink":"/docs/platform/biostar_x/how-to-guide-dashboard"},"next":{"title":"위젯 수정하기","permalink":"/docs/platform/biostar_x/dashboard-edit-widget"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/dashboard-adding-widget.mdx


const frontMatter = {
	id: 'dashboard-adding-widget',
	title: '위젯 추가하기',
	description: '대시보드는 사용자가 원하는 정보를 자유롭게 배치할 수 있는 사용자 정의형 모니터링 화면입니다.',
	keywords: [
		'대시보드',
		'위젯'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "위젯 추가",
  "id": "add-widgets",
  "level": 2
}, {
  "value": "위젯 종류",
  "id": "widget-types",
  "level": 2
}, {
  "value": "차트",
  "id": "chart",
  "level": 3
}, {
  "value": "카운터",
  "id": "bar",
  "level": 3
}, {
  "value": "텍스트",
  "id": "text",
  "level": 3
}, {
  "value": "실시간 이벤트",
  "id": "realtime-events",
  "level": 3
}, {
  "value": "실시간 출입 모니터링",
  "id": "real-time-access-monitoring",
  "level": 3
}, {
  "value": "시스템 사용 현황",
  "id": "system-usage-status",
  "level": 3
}, {
  "value": "출입문 제어",
  "id": "door-control",
  "level": 3
}, {
  "value": "위젯 데이터 새로고침 간격 설정",
  "id": "widget-refresh-interval",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcSet2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet2) _missingMdxReference("IcSet2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 대시보드는 사용자가 원하는 정보를 자유롭게 배치할 수 있는 사용자 정의형 모니터링 화면입니다. 다양한 위젯을 추가하여 출입 통제 시스템의 주요 정보를 업무 환경에 맞게 구성할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "추가할 수 있는 위젯 종류는 아래와 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "차트"
          }), ": 출입 이벤트 데이터를 막대/선/원형 차트로 시각화"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "카운터"
          }), ": 일간/주간 이벤트 발생 수를 숫자로 표시"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "실시간 이벤트"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에서 발생하는 모든 이벤트를 실시간 모니터링"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "실시간 출입 모니터링"
          }), ": 특정 장치의 인증 성공 사용자 정보를 실시간 표시"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "시스템 사용 현황"
          }), ": 사용자, 장치, 출입문 등의 등록 현황을 숫자로 표시"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "출입문 제어"
          }), ": 선택한 출입문의 상태 확인 및 원격 제어"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "텍스트"
          }), ": 공지사항이나 위젯 타이틀 등 사용자 정의 텍스트 배치"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "대시보드에 배치한 위젯을 통해서 아래와 같은 이점을 얻을 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "맞춤형 구성"
          }), ": 업무에 필요한 정보만 선별하여 한 화면에 배치"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "실시간 모니터링"
          }), ": 출입 이벤트와 시스템 상태를 즉시 확인"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "직관적인 시각화"
          }), ": 차트와 카운터를 통한 데이터의 시각적 표현"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "효율적인 관리"
          }), ": 모니터링과 제어 기능을 통합하여 업무 효율성 향상"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-widgets",
      children: "위젯 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), "에 위젯을 추가하여 원하는 정보를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addWidget",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-dashboard-add-widget.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addNewWidget",
            product: "2"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetType",
            product: "2"
          }), "에서 원하는 항목을 선택하고 필수 항목을 입력 또는 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-dashboard-add-widget-type.png",
          width: 400
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["위젯 설정을 완료하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "위젯 표시 영역에 위젯이 생성되면 크기를 조절하거나 원하는 위치에 배치하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정을 완료하면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["이미 위젯이 추가 되어있다면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcSet2, {}), " 아이콘을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.dashboardSettings",
          product: "2"
        }), " 모드로 진입하면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.addWidget",
          product: "2"
        }), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "widget-types",
      children: "위젯 종류"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 위젯 별로 위젯 크기 기본값이 다르게 설정되어 있으며 기본값에서 가장 보기 좋게 최적화되어 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모든 위젯은 우측 하단부를 드래그하여 크기를 조절할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-adjust-win-size.png",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chart",
      children: "차트"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "원하는 차트 데이터를 선택하여 발생한 이벤트 수를 차트로 나타낼 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-chart.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.chartData",
            product: "2"
          }), ": 일간, 주간 이벤트 목록 중에서 원하는 차트 데이터를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartType",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.verticalBar",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.horizontalBar",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.line",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.pie",
            product: "2"
          }), " 중에 원하는 타입을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartColorSchemes",
            product: "2"
          }), ": 다섯 가지의 색상 조합 중에 원하는 색상을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.chartColorSchemes",
          product: "2"
        }), "을 선택할 때 보여지는 차트의 값은 실제 값이 아닌 미리보기를 위한 임의의 값입니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bar",
      children: "카운터"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "원하는 카운터 데이터를 선택하여 발생한 이벤트 수를 숫자로 나타낼 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-counter.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.counterData",
            product: "2"
          }), ": 일간, 주간 이벤트 목록 중에서 원하는 카운터 데이터를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text",
      children: "텍스트"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), "의 위젯 영역에 사용자가 원하는 텍스트를 입력하여 배치할 수 있습니다. 생성 후 필요한 위치에 배치하여 위젯의 타이틀로 사용하거나 공지사항 등으로 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-text.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text",
          product: "2"
        }), " 위젯 생성 시 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text.removeBackground",
          product: "2"
        }), " 옵션을 체크하면 배경에 투명도가 적용됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "realtime-events",
      children: "실시간 이벤트"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서 발생하는 이벤트를 실시간으로 보여줍니다. 특정 이벤트, 사용자, 출입문, 장치를 필터링해서 이벤트를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-real-time-event.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause",
            product: "2"
          }), ": 실시간 이벤트를 정지할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play",
            product: "2"
          }), ": 중지한 실시간 이벤트를 다시 시작할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear",
            product: "2"
          }), ": 인증 기록을 전체 삭제할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다른 페이지로 이동했다가 다시 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.dashboard"
        }), "로 돌아올 경우 목록이 비워지고 다시 이벤트가 기록됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-time-access-monitoring",
      children: "실시간 출입 모니터링"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["하나의 장치를 선택하여 선택한 장치에 인증을 성공한 사용자의 프로필 사진 및 정보(", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.user",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.date",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.device",
        product: "2"
      }), ")를 실시간으로 보여줍니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-checkpoint.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause",
            product: "2"
          }), ": 실시간 출입 모니터링을 정지할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play",
            product: "2"
          }), ": 중지한 실시간 출입 모니터링을 다시 시작할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear",
            product: "2"
          }), ": 인증 기록을 전체 삭제할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.checkpoint",
          product: "2"
        }), "은 최대 5명까지 기록됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-usage-status",
      children: "시스템 사용 현황"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar X의 다양한 사용 현황을 숫자로 나타냅니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-system-usage.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["나타낼 수 있는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.widgetTypes.systemUsage",
        product: "2"
      }), "은 다음과 같습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.users",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.cards",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.fingerprint",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.visualFace",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.face",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.qrBarcode",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.mobileAccessCard",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.devices",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.doors",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.zones",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.accessGroups",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.userGroups",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.deviceGroups",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user.credential.IRFace",
          product: "2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "door-control",
      children: "출입문 제어"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "하나의 출입문을 선택하여 선택한 출입문의 상태를 확인하고 제어할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-door-control.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.doorControl.actionsBtn",
        product: "2"
      }), " 버튼으로 제어할 수 있는 항목은 다음과 같습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.open",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.normalize",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.lock",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.unlock",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.clearAlarm",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.clearAPB",
          product: "2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.doorControl",
          product: "2"
        }), " 위젯의 이름은 출입문의 이름으로 자동 지정되며 수정할 수 없습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "widget-refresh-interval",
      children: "위젯 데이터 새로고침 간격 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "대시보드에 추가된 위젯의 데이터 새로고침 간격을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcSet2, {}), " 아이콘을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.dashboardSettings",
            product: "2"
          }), " 모드로 진입하면 화면 하단에 일반 설정에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.autoRefreshInterval",
            product: "2"
          }), "를 설정하세요."]
        }), "\n"]
      }), "\n"]
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