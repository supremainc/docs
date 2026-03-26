"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24697"], {
43409: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_set_ai_rule_mdx_70d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-set-ai-rule-mdx-70d.json
var site_docs_device_vionyx_webserver_set_ai_rule_mdx_70d_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/set-ai-rule","title":"AI 규칙(Rule) 설정하기","description":"AI 이벤트가 발생할 때 실행할 동작을 규칙으로 설정합니다. 규칙 생성, 조건 선택, 오디오와 웹훅 동작 설정, 저장과 운영 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/set-ai-rule.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/set-ai-rule","permalink":"/docs/device/vionyx_webserver/set-ai-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/set-ai-rule.mdx","tags":[],"version":"current","frontMatter":{"id":"set-ai-rule","title":"AI 규칙(Rule) 설정하기","description":"AI 이벤트가 발생할 때 실행할 동작을 규칙으로 설정합니다. 규칙 생성, 조건 선택, 오디오와 웹훅 동작 설정, 저장과 운영 방법을 안내합니다.","keywords":["AI","규칙"],"isTranslationMissing":false},"sidebar":"aicamwebserver","previous":{"title":"AI 이벤트 수정 및 삭제하기","permalink":"/docs/device/vionyx_webserver/edit-delete-ai-event"},"next":{"title":"카메라 설정하기","permalink":"/docs/device/vionyx_webserver/configure-camera-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/set-ai-rule.mdx


const frontMatter = {
	id: 'set-ai-rule',
	title: 'AI 규칙(Rule) 설정하기',
	description: 'AI 이벤트가 발생할 때 실행할 동작을 규칙으로 설정합니다. 규칙 생성, 조건 선택, 오디오와 웹훅 동작 설정, 저장과 운영 방법을 안내합니다.',
	keywords: [
		'AI',
		'규칙'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "AI 규칙 생성",
  "id": "ai-규칙-생성",
  "level": 2
}, {
  "value": "규칙 생성 시작",
  "id": "규칙-생성-시작",
  "level": 3
}, {
  "value": "규칙 이름 입력",
  "id": "규칙-이름-입력",
  "level": 3
}, {
  "value": "조건 설정",
  "id": "조건-설정",
  "level": 3
}, {
  "value": "오디오 동작 설정",
  "id": "오디오-동작-설정",
  "level": 3
}, {
  "value": "웹훅 동작 설정",
  "id": "웹훅-동작-설정",
  "level": 3
}, {
  "value": "규칙 저장하기",
  "id": "규칙-저장하기",
  "level": 3
}, {
  "value": "AI 규칙 활성화/비활성화",
  "id": "ai-규칙-활성화비활성화",
  "level": 2
}, {
  "value": "AI 규칙 수정",
  "id": "ai-규칙-수정",
  "level": 2
}, {
  "value": "AI 규칙 삭제",
  "id": "ai-규칙-삭제",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcCamTrash, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcCamTrash) _missingMdxReference("IcCamTrash", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "AI 규칙을 사용하면 이벤트 유형과 조건에 따라 오디오 재생 또는 웹훅 전송을 자동으로 실행할 수 있습니다. 이 문서에서는 규칙을 생성하고 운영하는 전체 절차를 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 AI 규칙을 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 AI 이벤트가 발생할 때 외부 서버로 웹훅을 전송하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 AI 이벤트가 발생할 때 장치에서 오디오를 재생하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 유형별로 다른 후속 동작을 자동화하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "규칙 설정을 시작하기 전에 아래 사항을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AI 이벤트가 먼저 생성되어 있어야 합니다. 다음 문서를 참고하여 AI 이벤트를 생성하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "device/vionyx_webserver/configure-people-tracking"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "device/vionyx_webserver/configure-intrusion"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "device/vionyx_webserver/configure-line-crossing"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "device/vionyx_webserver/configure-counting-people"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "오디오를 사용할 때 재생할 오디오 클립을 미리 준비하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "웹훅을 사용할 때 수신 URL을 미리 준비하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai-규칙-생성",
      children: "AI 규칙 생성"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "규칙-생성-시작",
          children: "규칙 생성 시작"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings",
                product: "cam"
              }), " 메뉴를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ai_and_event",
                product: "cam"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "rule_settings",
                product: "cam"
              }), "를 클릭하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/cam-server/ai-rule-settings-list.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_button",
                product: "cam"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_rule_page_title",
                product: "cam"
              }), " 화면이 나타나면 규칙 이름을 입력하고, 조건과 동작을 설정하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/cam-server/ai-rule-settings-add-rule.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "규칙-이름-입력",
          children: "규칙 이름 입력"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "name",
            product: "cam"
          }), " 입력란에 규칙 이름을 입력하세요. 규칙 이름은 필수 항목입니다. 최대 64자까지 입력할 수 있습니다."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "조건-설정",
          children: "조건 설정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["조건은 AI 이벤트가 발생했을 때 규칙이 실행될지 결정하는 요소입니다. 안내에 따라 조건을 설정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "type",
            product: "cam"
          }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event",
            product: "cam"
          }), " 옵션은 AI 이벤트 생성 시 설정한 내용에 따라 표시됩니다."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "channel",
                product: "cam"
              }), ": 채널은 CH 1로 고정되어 있습니다. Fisheye 뷰만 지원합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "type",
                product: "cam"
              }), ": AI 이벤트 유형을 선택하세요. 다음 중 하나를 선택할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ai_analysis_people_tracking",
                  product: "cam"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ai_analysis_intrusion",
                  product: "cam"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ai_analysis_line_crossing",
                  product: "cam"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ai_analysis_people_counting",
                  product: "cam"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event",
                product: "cam"
              }), ": 규칙이 실행될 AI 이벤트를 선택하세요. 이벤트 목록에는 선택한 유형에 해당하는 AI 이벤트가 표시됩니다. 이벤트 표시는 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "(ID:N) event_name"
              }), " 형식으로 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "entry_area",
                product: "cam"
              }), ": 선택한 이벤트에 따라 진입 영역에 대한 조건을 추가할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_type",
                product: "cam"
              }), ": 규칙 실행 여부를 결정하는 이벤트 유형을 선택하세요. 선택한 이벤트 유형에 따라 규칙이 실행됩니다."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "진입 영역을 선택하지 않았거나 진입 영역이 없을 때, 얼굴 인식이 자동 선택되며 해제할 수 없습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "진입 영역을 선택했을 때, 얼굴 인식 또는 진입 영역 중 최소 1개를 선택하세요."
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "오디오-동작-설정",
          children: "오디오 동작 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "오디오 동작은 AI 이벤트가 발생했을 때 카메라에서 오디오를 재생하는 기능입니다. 토글 버튼을 클릭해 오디오 동작을 활성화하세요."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/ai-rule-settings-add-rule-action-audio.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "audio_clip",
                product: "cam"
              }), ": 재생할 오디오 클립을 선택하세요. 오디오 클립은 시스템에 업로드된 오디오 클립 목록에서 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "repeat",
                product: "cam"
              }), ": 오디오 재생 반복 여부를 설정하세요. 반복을 활성화하면 오디오 클립이 반복 재생됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "schedule",
                product: "cam"
              }), ": 규칙이 실행되고 오디오를 재생할 시간을 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["오디오 동작을 설정하기 전에 오디오 클립을 미리 준비해야 합니다. 오디오 클립은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "system",
              product: "cam"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audio",
              product: "cam"
            }), " 메뉴에서 업로드할 수 있습니다."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "웹훅-동작-설정",
          children: "웹훅 동작 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "웹훅 동작은 AI 이벤트가 발생했을 때 외부 서버로 웹훅을 전송하는 기능입니다. 토글 버튼을 클릭해 웹훅 동작을 활성화하세요."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/ai-rule-settings-add-rule-action-webhook.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "method",
                product: "cam"
              }), ": 웹훅 전송 방식을 선택하세요. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "POST"
              }), " 방식만 지원합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "URL"
              }), ": 웹훅을 수신할 URL을 입력하세요. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "http://"
              }), " 또는 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "https://"
              }), "로 시작하는 유효한 주소여야 합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "header",
                product: "cam"
              }), ": 웹훅에 포함할 HTTP 헤더를 설정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_button",
                product: "cam"
              }), " 버튼을 클릭해 헤더를 추가할 수 있습니다. 각 헤더는 키-값 쌍으로 입력해야 합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "body",
                product: "cam"
              }), ": 웹훅에 포함할 HTTP 본문을 설정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_button",
                product: "cam"
              }), " 버튼을 클릭해 본문 항목을 추가할 수 있습니다. 각 본문 항목은 키-값 쌍으로 입력해야 합니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "사용자 정의 항목은 비워 둘 수 없으며, 최대 10개까지 추가할 수 있습니다."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "schedule",
                product: "cam"
              }), ": 규칙이 실행되고 웹훅을 전송할 시간을 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "웹훅 발신 기록과 응답 코드는 장애 분석을 위해 시스템 로그에서 확인할 수 있습니다."
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "규칙-저장하기",
          children: "규칙 저장하기"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["규칙 설정을 모두 완료하고 규칙을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요. 저장된 규칙은 규칙 목록에서 확인할 수 있습니다. 규칙 목록에서는 규칙 이름, 유형, 이벤트, 일정을 확인할 수 있습니다."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/ai-rule-settings-added-list.png"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai-규칙-활성화비활성화",
      children: "AI 규칙 활성화/비활성화"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "규칙 목록에서 각 규칙 항목 가장 왼쪽의 토글 버튼을 클릭하면, 해당 규칙을 활성화하거나 비활성화할 수 있습니다. 활성화된 규칙은 AI 이벤트가 발생했을 때 설정된 동작이 실행됩니다. 비활성화된 규칙은 AI 이벤트가 발생해도 동작이 실행되지 않습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/ai-rule-settings-added-list-enable-disable.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "규칙 목록에서 활성화 여부를 한눈에 구분할 수 있습니다. 파란색 토글로 표시된 규칙은 활성화 상태이고, 회색 토글로 표시된 규칙은 비활성화 상태입니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai-규칙-수정",
      children: "AI 규칙 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["규칙 목록에서 각 규칙 항목을 클릭하면 규칙 세부 정보를 확인하거나 편집할 수 있습니다. 규칙 세부 정보 화면에서 조건과 동작을 수정한 후, 변경 사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "update",
        product: "cam"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/ai-rule-settings-edit.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai-규칙-삭제",
      children: "AI 규칙 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["규칙 목록에서 각 규칙 항목 가장 오른쪽의 ", (0,jsx_runtime.jsx)(IcCamTrash, {
        title: "delete"
      }), " 버튼을 클릭하면 해당 규칙을 삭제할 수 있습니다. 삭제된 규칙은 복구할 수 없습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/ai-rule-settings-added-list-delete.png"
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