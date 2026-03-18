"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["65361"], {
17380: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_managing_door_schedules_mdx_267_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-managing-door-schedules-mdx-267.json
var site_docs_platform_biostar_air_managing_door_schedules_mdx_267_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-door-schedules","title":"출입문 스케줄 관리하기","description":"시간대별로 출입문 자동 잠금을 설정하고, 잠김 해제 시간을 구성하며, 인증 기반 출입 통제 옵션을 관리합니다. 스케줄을 통해 안전하고 통제된 출입을 보장합니다.","source":"@site/docs/platform/biostar_air/managing-door-schedules.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-door-schedules","permalink":"/docs/platform/biostar_air/managing-door-schedules","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-door-schedules.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-door-schedules","title":"출입문 스케줄 관리하기","description":"시간대별로 출입문 자동 잠금을 설정하고, 잠김 해제 시간을 구성하며, 인증 기반 출입 통제 옵션을 관리합니다. 스케줄을 통해 안전하고 통제된 출입을 보장합니다.","keywords":["출입문 스케줄","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"출입문 그룹 관리하기","permalink":"/docs/platform/biostar_air/managing-door-groups"},"next":{"title":"엘리베이터","permalink":"/docs/platform/biostar_air/manage-elevator"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/managing-door-schedules.mdx


const frontMatter = {
	id: 'managing-door-schedules',
	title: '출입문 스케줄 관리하기',
	description: '시간대별로 출입문 자동 잠금을 설정하고, 잠김 해제 시간을 구성하며, 인증 기반 출입 통제 옵션을 관리합니다. 스케줄을 통해 안전하고 통제된 출입을 보장합니다.',
	keywords: [
		'출입문 스케줄',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "스케줄이 필요한 경우",
  "id": "스케줄이-필요한-경우",
  "level": 2
}, {
  "value": "<Cmd class=\"bold\"></Cmd> vs <Cmd class=\"bold\"></Cmd>",
  "id": "-vs-",
  "level": 3
}, {
  "value": "열림 스케줄",
  "id": "열림-스케줄",
  "level": 2
}, {
  "value": "사용 사례",
  "id": "사용-사례",
  "level": 3
}, {
  "value": "열림 스케줄 구성",
  "id": "configuringUnlockSchedules",
  "level": 3
}, {
  "value": "잠김 스케줄",
  "id": "잠김-스케줄",
  "level": 2
}, {
  "value": "사용 사례",
  "id": "사용-사례-1",
  "level": 3
}, {
  "value": "잠김 스케줄 구성",
  "id": "configuring-lock-schedules",
  "level": 3
}, {
  "value": "새 스케줄 등록",
  "id": "registeringNewSchedules",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirSchedule, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirSchedule) _missingMdxReference("IcAirSchedule", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문 스케줄을 설정하여 시간대별로 출입문을 자동으로 잠그고 열 수 있습니다. 잠김 및 잠김 해제 시간을 구성하고, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "최초 인증 후 열림"
      }), "과 같은 고급 옵션을 활용하여 안전하고 통제된 출입을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "스케줄은 인터넷이 연결되어 있는 출입문과 장치에만 적용할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "휴일 그룹은 별도로 구성되지 않는 한 잠김 해제 스케줄을 무시합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비상 상황에 대비해 제한없는 출입 권한을 가진 관리자가 적어도 한 명 이상 있어야 합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "스케줄이-필요한-경우",
      children: "스케줄이 필요한 경우"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "출입문 스케줄은 없어도 괜찮습니다"
      }), ". 대부분의 시설에서는 기본 출입 제어만으로 충분합니다. 인증된 사용자가 크리덴셜을 제시하면 자동으로 출입문이 열리므로, 추가 스케줄 설정 없이도 정상 작동합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래의 상황에서 스케줄을 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 시간에 누구든지 자유롭게 출입할 수 있도록 해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 시간에 모든 사용자의 출입을 차단해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시간대별로 출입 정책을 다르게 적용해야 할 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      }), "의 혼동을 피하려면 각각의 작동 방식과 사용 시점을 명확히 이해해야 합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-vs-",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "unlock_schedule",
        product: "air",
        className: "bold"
      }), " vs ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "lock_schedule",
        product: "air",
        className: "bold"
      })]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "구분"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "열림 스케줄"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "잠김 스케줄"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "스케줄 시간 중 상태"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "항상 열림"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "항상 잠김"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "인증 필요 여부"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "불필요, 누구든지 자유롭게 출입"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "크리덴셜 인증으로 열 수 없음"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "수동 개방"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "가능"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "사이트 관리자만 가능"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "릴레이 작동"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "계속 작동함"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "작동하지 않음"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "사이트 관리자는 BioStar Air 관리자 포털 또는 모바일 앱에서 지정된 관리자를 의미합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "열림-스케줄",
      children: "열림 스케줄"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "스케줄 시간 동안 출입문이 항상 열려있으며, 릴레이가 계속 작동합니다. 인증이 필요하지 않으므로 누구든지 자유롭게 출입할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용-사례",
      children: "사용 사례"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "공용 공간의 주 출입문"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "주거 단지 내 공용 편의 시설"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "업무 시간 중 사무실 로비 출입문"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuringUnlockSchedules",
      children: "열림 스케줄 구성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 안내에 따라 열림 스케줄을 구성하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 열림 스케줄을 구성할 출입문의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirSchedule, {
            title: "Schedule Settings"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "unlock",
            product: "air"
          }), " 탭에서 미리 정의된 스케줄을 선택하거나 새 스케줄을 만드세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-unlock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["열림 스케줄을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
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
              sid: "unlock_after_first_auth",
              product: "air"
            }), " 옵션을 활성화하면 사용자가 최초로 인증한 후 선택한 스케줄에 따라 출입문의 열림 상태를 유지할 수 있습니다. 이 옵션은 아래와 같은 사례에서 유용하게 활용할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "직원이 도착한 후에 고객 입장을 허용하는 소매점"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "첫 직원이 건물을 열면 이후 다른 직원들은 자유롭게 출입할 수 있는 사무실"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "시설 담당자가 출입을 개시하면 회원은 자유롭게 이용할 수 있는 멤버십 시설"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["스케줄 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#registeringNewSchedules"
            }), "을 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "잠김-스케줄",
      children: "잠김 스케줄"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "스케줄 시간 동안 출입문이 항상 잠겨있으며, 릴레이가 작동하지 않습니다. 유효한 크리덴셜을 제시해도 인증으로 열 수 없으며, 사이트 관리자만 수동으로 개방할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용-사례-1",
      children: "사용 사례"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 시간 이후에 엄격히 폐쇄해야 하는 구역"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수영장 또는 체육관, 기타 출입 제한 구역과 같은 시설"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuring-lock-schedules",
      children: "잠김 스케줄 구성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 안내에 따라 잠김 스케줄을 구성하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 잠김 스케줄을 구성할 출입문의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirSchedule, {
            title: "Schedule Settings"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock",
            product: "air"
          }), " 탭에서 미리 정의된 스케줄을 선택하거나 새 스케줄을 만드세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-lock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["잠김 스케줄을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "잠김 스케줄은 표준 접근 권한을 무시하므로 사용자는 잠김 시간 동안 출입문을 열림(잠김 해제) 상태로 변경할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["새 스케줄 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#registeringNewSchedules"
            }), "을 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registeringNewSchedules",
      children: "새 스케줄 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "새 스케줄을 아래의 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_title",
            product: "air"
          }), " 창에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "lock_unlock_create_schedules",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-setting-add-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["스케줄 추가 화면으로 이동하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_name",
            product: "air"
          }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_description",
            product: "air"
          }), "(선택 사항)을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-schedule-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_section_title_time_intervals",
            product: "air"
          }), " 섹션에서 인증 없이 출입문이 열려 있어야 하는 요일과 시간을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["스케줄을 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["스케줄을 새로 등록한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_submenu",
        product: "air"
      }), "으로 돌아와 출입문 스케줄을 구성하세요."]
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