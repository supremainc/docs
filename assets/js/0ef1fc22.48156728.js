"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2689"], {
4449: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_dashboard_adding_widget_mdx_0ef_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-dashboard-adding-widget-mdx-0ef.json
var site_docs_platform_biostar_x_dashboard_adding_widget_mdx_0ef_namespaceObject = JSON.parse('{"id":"platform/biostar_x/dashboard-adding-widget","title":"위젯 추가하기","description":"대시보드에 위젯을 추가하여 원하는 정보를 확인할 수 있습니다.","source":"@site/docs/platform/biostar_x/dashboard-adding-widget.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/dashboard-adding-widget","permalink":"/docs/platform/biostar_x/dashboard-adding-widget","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/dashboard-adding-widget.mdx","tags":[],"version":"current","frontMatter":{"id":"dashboard-adding-widget","title":"위젯 추가하기","description":"대시보드에 위젯을 추가하여 원하는 정보를 확인할 수 있습니다.","keywords":["대시보드","위젯"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"대시보드","permalink":"/docs/platform/biostar_x/how-to-guide-dashboard"},"next":{"title":"위젯 수정하기","permalink":"/docs/platform/biostar_x/dashboard-edit-widget"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/dashboard-adding-widget.mdx


const frontMatter = {
	id: 'dashboard-adding-widget',
	title: '위젯 추가하기',
	description: '대시보드에 위젯을 추가하여 원하는 정보를 확인할 수 있습니다.',
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
  "value": "위젯 종류",
  "id": "위젯-종류",
  "level": 2
}, {
  "value": "차트",
  "id": "차트",
  "level": 3
}, {
  "value": "카운터",
  "id": "카운터",
  "level": 3
}, {
  "value": "텍스트",
  "id": "텍스트",
  "level": 3
}, {
  "value": "실시간 이벤트",
  "id": "실시간-이벤트",
  "level": 3
}, {
  "value": "실시간 출입 모니터링",
  "id": "실시간-출입-모니터링",
  "level": 3
}, {
  "value": "시스템 사용 현황",
  "id": "시스템-사용-현황",
  "level": 3
}, {
  "value": "출입문 제어",
  "id": "출입문-제어",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcSet2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet2) _missingMdxReference("IcSet2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
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
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이미 위젯이 추가 되어있는 경우에는 ", (0,jsx_runtime.jsx)(IcSet2, {}), " 아이콘을 클릭해 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dashboardSettings",
              product: "2"
            }), "으로 진입한 다음 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.addWidget",
              product: "2"
            }), "를 클릭하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes",
            product: "2"
          }), "을 선택한 다음 위젯에 따라 필수 항목을 입력 또는 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "위젯-종류",
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
      id: "차트",
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
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.chartColorSchemes",
              product: "2"
            }), "을 선택할 때 보여지는 차트의 값은 실제 값이 아닌 미리보기를 위한 임의의 값입니다."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카운터",
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
      id: "텍스트",
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
      id: "실시간-이벤트",
      children: "실시간 이벤트"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar X에서 발생하는 이벤트를 실시간으로 보여줍니다. 특정 이벤트, 사용자, 출입문, 장치를 필터링해서 이벤트를 확인할 수 있습니다."
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
      id: "실시간-출입-모니터링",
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
      id: "시스템-사용-현황",
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
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "출입문-제어",
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["위젯의 설정을 마친 다음 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.apply",
          product: "2"
        }), "을 클릭하면 위젯 표시 영역에 위젯이 생성됩니다. 원하는대로 크기를 조절한 다음 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.apply",
          product: "2"
        }), "을 클릭하면 위젯이 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.dashboard"
        }), "에 추가됩니다."]
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