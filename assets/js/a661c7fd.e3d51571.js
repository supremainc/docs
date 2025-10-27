"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5646"], {
58311: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_tna_rule_schedule_mdx_a66_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-tna-rule-schedule-mdx-a66.json
var site_docs_platform_biostar_x_tna_rule_schedule_mdx_a66_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-schedule","title":"근무 스케줄 설정하기","description":"설정된 주간 근무 규칙, 기타 근무 규칙, 기간, 휴일을 사용자에게 지정하여 근무 스케줄을 생성 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/tna-rule-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-schedule","permalink":"/docs/platform/biostar_x/tna-rule-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-schedule","title":"근무 스케줄 설정하기","description":"설정된 주간 근무 규칙, 기타 근무 규칙, 기간, 휴일을 사용자에게 지정하여 근무 스케줄을 생성 방법을 안내합니다.","keywords":["근무 스케줄","근무 규칙"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"기타 근무 규칙 설정하기","permalink":"/docs/platform/biostar_x/tna-rule-shift-overtime"},"next":{"title":"근태 기록 확인하기","permalink":"/docs/platform/biostar_x/tna-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/tna-rule-schedule.mdx


const frontMatter = {
	id: 'tna-rule-schedule',
	title: '근무 스케줄 설정하기',
	description: '설정된 주간 근무 규칙, 기타 근무 규칙, 기간, 휴일을 사용자에게 지정하여 근무 스케줄을 생성 방법을 안내합니다.',
	keywords: [
		'근무 스케줄',
		'근무 규칙'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "근무 스케줄",
  "id": "근무-스케줄",
  "level": 2
}, {
  "value": "근무 스케줄 추가",
  "id": "근무-스케줄-추가",
  "level": 3
}, {
  "value": "설정 옵션 안내",
  "id": "설정-옵션-안내",
  "level": 3
}, {
  "value": "근무 스케줄 수정",
  "id": "근무-스케줄-수정",
  "level": 3
}, {
  "value": "근무 스케줄 삭제",
  "id": "근무-스케줄-삭제",
  "level": 3
}, {
  "value": "임시 스케줄 추가",
  "id": "임시-스케줄-추가",
  "level": 2
}, {
  "value": "부재 추가 및 삭제",
  "id": "부재-추가-및-삭제",
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
  }, {Cmd, DocLink, IcEdit, IcSearch, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정된 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), ", 기간, 휴일을 사용자에게 지정하여 근무 스케줄을 생성할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "생성된 근무 스케줄에 임시 스케줄이나 개인 휴가도 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["스케줄을 생성하기 전에 사용할 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "tab.payCode",
          product: "2",
          className: "normal"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "tab.shift",
          product: "2",
          className: "normal"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "tab.shift",
          product: "2",
          className: "normal"
        }), ", 휴일을 올바르게 생성했는지 확인하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "근무 규칙 설정에 대한 자세한 내용을 다음 문서를 참고하세요."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-paycode"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-day"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-schedule"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-overtime"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["휴일 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule#addHolidaySchedule",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "근무-스케줄",
      children: "근무 스케줄"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "근무-스케줄-추가",
      children: "근무 스케줄 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 안내에 따라 등록한 사용자의 근무 스케줄을 추가하세요."
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
            sid: "ta.schedule",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addSchedule",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addSchedule",
            product: "2"
          }), " 화면이 나타나면 각 항목을 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설정을 저장하려면 화면 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설정을 저장한 후 다른 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.schedule",
              product: "2"
            }), "을 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "설정-옵션-안내",
      children: "설정 옵션 안내"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "근무 스케줄 설정 옵션을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-schedule-template-adding.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.name",
            product: "2"
          }), ": 근무 스케줄의 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.description",
            product: "2"
          }), ": 근무 스케줄에 대한 설명을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), ": 설정한 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), "을 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), "을 설정하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), "에 설정한 초과 근무 시간 규칙이 적용되지 않습니다. 사용하지 않으려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["원하는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "rule.rule",
              product: "2",
              className: "normal"
            }), "이 없다면 추가할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-overtime",
              children: "다음 문서"
            }), "를 참고하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2"
          }), ": 설정한 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2",
            className: "normal"
          }), "을 선택하세요. 한번 설정한 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2",
            className: "normal"
          }), "은 수정할 수 없습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["원하는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "scheduleTemplate.scheduleTemplate",
              product: "2",
              className: "normal"
            }), "이 없다면 추가할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-schedule",
              children: "다음 문서"
            }), "를 참고하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.period",
            product: "2"
          }), ": 근태 이벤트를 수집할 기간을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "시작 날짜는 한 번 설정하면 나중에 변경할 수 없습니다. 종료 날짜는 나중에 변경할 수 있으며, 설정된 날짜보다 이전 날짜로 변경하면 변경된 기간만큼의 부재 이벤트가 삭제됩니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.holiday",
            product: "2"
          }), ": 설정한 휴가 일정을 선택하세요. 용하지 않으려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["원하는 휴가 일정이 없다면 추가할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule#addHolidaySchedule",
              children: "다음 문서"
            }), "를 참고하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.users",
            product: "2"
          }), ": 규칙을 적용할 사용자를 추가하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["전체 근무 스케줄에 포함된 사용자 수는 등록한 근태 관리 라이선스가 지원하는 최대 사용자 수를 초과할 수 없습니다. 각 라이선스당 최대 사용자는 ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/licensing"
        }), "을 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "근무-스케줄-수정",
      children: "근무 스케줄 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "등록한 근무 스케줄 수정 방법을 안내합니다."
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
            sid: "tna.scheduleTemplate",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " 목록에서 수정할 항목을 클릭하세요. 또는 화면 왼쪽 사이드바에서 수정할 항목의 ", (0,jsx_runtime.jsx)(IcEdit, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 항목을 수정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "근무-스케줄-삭제",
      children: "근무 스케줄 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "등록한 근무 스케줄 삭제 방법을 안내합니다."
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
            sid: "tna.scheduleTemplate",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " 목록에서 삭제할 항목의 체크박스를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.deleteSchedule",
            product: "2"
          }), " 버튼을 클릭하세요. 또는 화면 왼쪽 사이드바에서 삭제할 항목의 ", (0,jsx_runtime.jsx)(IcTrash2, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["확인 메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "임시-스케줄-추가",
      children: "임시 스케줄 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이미 등록한 스케줄이 있다면 사용자에게 임시로 다른 근무 규칙을 적용할 수 있습니다."
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
            sid: "ta.schedule",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면 왼쪽 목록에서 스케줄에 할당된 사용자를 선택하면 달력이 표시됩니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "달력에서 임시 스케줄을 추가할 날짜를 클릭하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addTemporarySchedule",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addTemporarySchedule",
            product: "2"
          }), " 설정창이 나타나면 각 항목을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다른 사용자에게도 동일한 근무 스케줄을 적용하려면 ", (0,jsx_runtime.jsx)(IcSearch, {}), " 버튼을 클릭한 후 사용자를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정한 근무 규칙을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자에게 적용한 임시 스케줄을 삭제하려면 달력에서 설정된 임시 스케줄을 클릭하세요. 확인 메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.yes",
          product: "2"
        }), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "부재-추가-및-삭제",
      children: "부재 추가 및 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자의 부재 일정을 추가할 수 있습니다."
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
            sid: "ta.schedule",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면 왼쪽 목록에서 스케줄에 할당된 사용자를 선택하면 달력이 표시됩니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "달력에서 사용자의 부재 일정을 추가할 날짜를 클릭하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addLeave",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "leave.editLeave",
            product: "2"
          }), " 설정창이 나타나면 각 항목을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-leave-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다른 사용자에게도 동일한 부재 일정을 적용하려면 ", (0,jsx_runtime.jsx)(IcSearch, {}), " 버튼을 클릭한 후 사용자를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정한 부재 일정을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["원하는 부재 관리 시간 규칙이 없다면 추가할 수 있습니다. 시간 규칙 추가에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-paycode",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자에게 적용한 부재 일정을 삭제하려면 달력에서 설정된 부재 일정의 ", (0,jsx_runtime.jsx)(IcTrash2, {}), " 버튼을 클릭하세요. 확인 메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.yes",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-schedule-remove-leave-item.png",
            alone: true
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