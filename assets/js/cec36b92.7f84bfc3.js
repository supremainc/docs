"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["72529"], {
43766: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_configure_intrusion_mdx_cec_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-configure-intrusion-mdx-cec.json
var site_docs_device_vionyx_webserver_configure_intrusion_mdx_cec_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/configure-intrusion","title":"출입 제한 구역 감지 이벤트 설정하기","description":"설정한 구역의 출입 이벤트를 실시간으로 감지하고, 얼굴 인식으로 등록 직원과 미인가자를 자동 구분합니다.","source":"@site/docs/device/vionyx_webserver/configure-intrusion.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/configure-intrusion","permalink":"/docs/device/vionyx_webserver/configure-intrusion","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/configure-intrusion.mdx","tags":[],"version":"current","frontMatter":{"id":"configure-intrusion","title":"출입 제한 구역 감지 이벤트 설정하기","description":"설정한 구역의 출입 이벤트를 실시간으로 감지하고, 얼굴 인식으로 등록 직원과 미인가자를 자동 구분합니다.","keywords":["AI 분석","출입자 동선","얼굴 인식"],"isTranslationMissing":false},"sidebar":"aicamwebserver","previous":{"title":"사람 추적 이벤트로 출입자 동선 파악하기","permalink":"/docs/device/vionyx_webserver/configure-people-tracking"},"next":{"title":"라인 통과 감지 이벤트 설정하기","permalink":"/docs/device/vionyx_webserver/configure-line-crossing"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/configure-intrusion.mdx


const frontMatter = {
	id: 'configure-intrusion',
	title: '출입 제한 구역 감지 이벤트 설정하기',
	description: '설정한 구역의 출입 이벤트를 실시간으로 감지하고, 얼굴 인식으로 등록 직원과 미인가자를 자동 구분합니다.',
	keywords: [
		'AI 분석',
		'출입자 동선',
		'얼굴 인식'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "언제 사용하나요?",
  "id": "언제-사용하나요",
  "level": 2
}, {
  "value": "침입 감지 이벤트 생성",
  "id": "침입-감지-이벤트-생성",
  "level": 2
}, {
  "value": "이벤트 생성 시작",
  "id": "이벤트-생성-시작",
  "level": 3
}, {
  "value": "이벤트 이름 설정",
  "id": "이벤트-이름-설정",
  "level": 3
}, {
  "value": "침입 영역 설정",
  "id": "침입-영역-설정",
  "level": 3
}, {
  "value": "얼굴 영역 설정(선택 사항)",
  "id": "얼굴-영역-설정선택-사항",
  "level": 3
}, {
  "value": "이벤트 발생 조건 설정",
  "id": "이벤트-발생-조건-설정",
  "level": 3
}, {
  "value": "설정 저장",
  "id": "설정-저장",
  "level": 3
}, {
  "value": "라이브에서 확인",
  "id": "라이브에서-확인",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamReset, IcCamTrash, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamReset) _missingMdxReference("IcCamReset", true);
  if (!IcCamTrash) _missingMdxReference("IcCamTrash", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "침입 감지 이벤트를 설정하면 관리자가 정의한 구역에 사람이 출입할 때마다 실시간으로 이벤트를 발생합니다. 선택적으로 얼굴 영역을 추가하면 해당 영역에서 얼굴을 우선적으로 추적하며, 등록된 사용자는 자동으로 신원을 인식합니다. 보안이 필요한 구역에 미인가자의 침입을 신속하게 감지하고 대응할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "언제-사용하나요",
      children: "언제 사용하나요?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안이 필요한 구역에 미인가자의 침입 감지"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "업무시간 외 또는 제한된 구역에 누군가 접근했을 때 실시간 알림 받기"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "등록된 직원만 출입 가능한 구역에 미등록자의 진입 여부 확인"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "고위험 구역의 출입 현황 기록 및 추적"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "침입-감지-이벤트-생성",
      children: "침입 감지 이벤트 생성"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["침입 감지 이벤트를 생성하면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "live",
        product: "cam"
      }), " 메뉴에서 특정 구역에 사람이 침입하는 것을 감지하여 이벤트를 발생시킬 수 있습니다. 또한 얼굴 영역을 설정하면 해당 영역에서 얼굴을 우선적으로 추적할 수 있으며, 등록된 사용자는 신원을 자동 인식합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "이벤트-생성-시작",
          children: "이벤트 생성 시작"
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
                sid: "ai_analysis",
                product: "cam"
              }), "를 클릭하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/cam-server/ai-analysis-events.png"
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
                sid: "select_ai_analysis_type",
                product: "cam"
              }), " 창에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ai_analysis_intrusion",
                product: "cam"
              }), "를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "next",
                product: "cam"
              }), " 버튼을 클릭하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/cam-server/ai-analysis-events-add-intrusion.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "face_analytics_consent_title",
                product: "cam"
              }), " 팝업이 표시되면 내용을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "face_analytics_consent_agree",
                product: "cam"
              }), " 버튼을 클릭하세요."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "얼굴 인식 기능을 사용하려면 해당 지역의 관련 규제 법규를 준수해야 합니다. 동의하지 않으면 진행할 수 없습니다."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "face_analytics_consent_title",
                      product: "cam"
                    }), " 팝업은 최초 한 번만 표시됩니다. 이후 AI 이벤트 생성 시에는 동의한 것으로 간주합니다."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["오른쪽 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ai_analysis_intrusion",
                product: "cam"
              }), " 패널에서 필요한 설정을 완료하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/cam-server/ai-analysis-events-add-intrusion-settings.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "이벤트-이름-설정",
          children: "이벤트 이름 설정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "name",
            product: "cam"
          }), " 입력란에서 AI 이벤트 이름을 입력하세요. 이름은 최대 64자까지 입력할 수 있습니다."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "침입-영역-설정",
          children: "침입 영역 설정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["침입 영역을 설정하세요. 카메라가 설정한 영역의 출입을 감지합니다. 최소 1개를 설정해야 하며, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_button",
            product: "cam"
          }), " 버튼을 클릭해 최대 10개까지 추가할 수 있습니다. 라이브 뷰에 주황색 상자가 표시되며, 마우스로 모서리 또는 점을 드래그하여 원하는 형태로 조정할 수 있습니다. 가운데 영역을 드래그하여 위치를 이동할 수도 있습니다."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/ai-analysis-events-add-intrusion-settings-entry-area.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "name",
                product: "cam"
              }), ": 침입 영역의 이름을 수정할 수 있습니다. 알기 쉽게 이름을 지정하세요. 침입 영역의 이름은 라이브 뷰에서 마우스 오버 시 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "face_matching",
                product: "cam"
              }), ": 침입 영역에서 감지되는 사람의 신원을 자동으로 확인하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "on",
                product: "cam"
              }), "으로 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["설정한 침입 영역의 모양과 크기를 초기화하려면 ", (0,jsx_runtime.jsx)(IcCamReset, {
                  title: "reset"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["추가한 침입 영역을 삭제하려면 ", (0,jsx_runtime.jsx)(IcCamTrash, {
                  title: "delete"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "얼굴-영역-설정선택-사항",
          children: "얼굴 영역 설정(선택 사항)"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["얼굴을 감지할 영역을 설정하세요. 설정하면 해당 영역에서 얼굴을 우선 추적합니다. 얼굴 영역에서 감지된 사람을 인증된 사용자와 미인가자로 구분하여 승인된 출입자와 미인가자를 명확하게 파악할 수 있습니다. 얼굴 영역과 침입 영역은 겹쳐서 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_button",
            product: "cam"
          }), " 버튼을 클릭해 최대 10개까지 설정할 수 있습니다. 라이브 뷰에 파란색 상자가 표시되며, 마우스로 모서리 또는 점을 드래그하여 원하는 형태로 조정할 수 있습니다. 가운데 영역을 드래그하여 위치를 이동할 수도 있습니다."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/ai-analysis-events-add-intrusion-settings-face-area.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "name",
              product: "cam"
            }), ": 얼굴 영역의 이름을 수정할 수 있습니다. 알기 쉽게 이름을 지정하세요. 얼굴 영역의 이름은 라이브 뷰에서 마우스 오버 시 표시됩니다."]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["등록된 사용자는 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "live",
                  product: "cam"
                }), " 메뉴에서 신원을 자동 인식해 이름이 표시됩니다. 등록되지 않은 사용자는 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "unknown_face",
                  product: "cam"
                }), "으로 표시됩니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["설정한 얼굴 영역의 모양과 크기를 초기화하려면 ", (0,jsx_runtime.jsx)(IcCamReset, {
                  title: "reset"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["추가한 얼굴 영역을 삭제하려면 ", (0,jsx_runtime.jsx)(IcCamTrash, {
                  title: "delete"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "이벤트-발생-조건-설정",
          children: "이벤트 발생 조건 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 발생 조건을 설정하세요. 진입 또는 퇴장 감지 여부, 이벤트 발생 지연 시간을 설정할 수 있습니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_condition",
                product: "cam"
              }), ": 진입(Entry) 또는 퇴장(Exit) 감지 여부를 선택하세요. 둘 다 선택할 수도 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "every_delay",
                product: "cam"
              }), ": 이벤트 발생 지연 시간을 설정하세요. 설정한 시간을 초과했을 때만 이벤트가 발생하며, 최대 60초까지 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "설정-저장",
          children: "설정 저장"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정을 완료한 후 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 버튼을 클릭하세요. 이전 화면으로 돌아가며, 새로 생성된 AI 이벤트가 목록에 추가됩니다."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/ai-analysis-events-add-intrusion-settings-complete.png"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "라이브에서-확인",
      children: "라이브에서 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "live",
        product: "cam"
      }), " 메뉴를 클릭하세요. 카메라 영상의 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Image, {
        src: "/img/cam-server/ico-content-ai-show.svg",
        alt: "AI On",
        alone: true,
        ico: true
      }), " 아이콘이 켜져 있는지 확인하세요. 설정한 침입 영역과 얼굴 영역이 영상에 오버레이로 표시됩니다. 사람이 침입 영역에 들어오거나 나갈 때마다 이벤트가 발생합니다. 얼굴 영역을 설정했다면 카메라가 해당 영역에서 얼굴을 감지하며, 등록된 사용자는 자동으로 신원이 인식되어 이름을 표시합니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/ai-analysis-events-intrusion-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["등록되지 않은 사용자는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "unknown_face",
              product: "cam"
            }), "로 표시됩니다. 등록된 사용자는 이름과 함께 표시합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "조명이 부족하거나 역광이 있으면 카메라가 얼굴을 인식하지 못할 수 있습니다. 촬영 공간의 조명을 개선하거나 카메라의 위치와 각도를 조정하여 얼굴이 잘 보이도록 하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "얼굴이 카메라로 향해야 인식됩니다. 옆모습 또는 뒷모습은 인식이 어려울 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["너무 많은 이벤트가 발생하면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "every_delay",
              product: "cam"
            }), " 옵션값을 조정하세요. 이벤트 발생 지연 시간을 늘리면 이벤트 빈도를 줄일 수 있습니다."]
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