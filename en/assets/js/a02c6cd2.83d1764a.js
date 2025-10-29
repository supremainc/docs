"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4031"], {
17265: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_virtual_device_event_log_mdx_a02_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-virtual-device-event-log-mdx-a02.json
var site_docs_platform_biostar_x_settings_virtual_device_event_log_mdx_a02_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-virtual-device-event-log","title":"가상 장치 이벤트 로그 연동하기","description":"가상 장치를 등록하고 외부 시스템에서 발생한 이벤트 로그를 BioStar X에 기록하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-virtual-device-event-log.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-virtual-device-event-log","permalink":"/docs/en/platform/biostar_x/settings-virtual-device-event-log","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-virtual-device-event-log.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-virtual-device-event-log","title":"가상 장치 이벤트 로그 연동하기","description":"가상 장치를 등록하고 외부 시스템에서 발생한 이벤트 로그를 BioStar X에 기록하는 방법을 안내합니다.","keywords":["가상 장치","이벤트 로그","API","연동"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"Set up Remote Access","permalink":"/docs/en/platform/biostar_x/settings-remote-access"},"next":{"title":"Plugin","permalink":"/docs/en/platform/biostar_x/plugins"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-virtual-device-event-log.mdx


const frontMatter = {
	id: 'settings-virtual-device-event-log',
	title: '가상 장치 이벤트 로그 연동하기',
	description: '가상 장치를 등록하고 외부 시스템에서 발생한 이벤트 로그를 BioStar X에 기록하는 방법을 안내합니다.',
	keywords: [
		'가상 장치',
		'이벤트 로그',
		'API',
		'연동'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "언제 사용하나요?",
  "id": "언제-사용하나요",
  "level": 2
}, {
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "가상 장치 등록",
  "id": "가상-장치-등록",
  "level": 2
}, {
  "value": "장치 그룹 관리",
  "id": "장치-그룹-관리",
  "level": 3
}, {
  "value": "가상 장치 제약 사항",
  "id": "가상-장치-제약-사항",
  "level": 3
}, {
  "value": "API를 통한 이벤트 로그 기록",
  "id": "api를-통한-이벤트-로그-기록",
  "level": 2
}, {
  "value": "지원 이벤트 유형",
  "id": "지원-이벤트-유형",
  "level": 3
}, {
  "value": "API Parameters",
  "id": "api-parameters",
  "level": 3
}, {
  "value": "이벤트 로그 조회",
  "id": "이벤트-로그-조회",
  "level": 2
}, {
  "value": "감사 추적",
  "id": "감사-추적",
  "level": 2
}, {
  "value": "문제 해결",
  "id": "문제-해결",
  "level": 2
}, {
  "value": "<Cmd class=\"normal\"></Cmd> 버튼이 보이지 않는 경우",
  "id": "-버튼이-보이지-않는-경우",
  "level": 3
}, {
  "value": "API 호출이 실패하는 경우",
  "id": "api-호출이-실패하는-경우",
  "level": 3
}, {
  "value": "이벤트가 조회되지 않는 경우",
  "id": "이벤트가-조회되지-않는-경우",
  "level": 3
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
    pre: "pre",
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
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["가상 장치 기능을 사용하면, 근태 관리 기능을 연동할 때 모바일 앱이나 타사 서비스에서 발생한 출근, 퇴근 등의 이벤트를 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 직접 기록할 수 있습니다. 실제 물리적 장치 없이도 이벤트 로그를 체계적으로 관리할 수 있어 외부 시스템과의 연동에 유용합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "언제-사용하나요",
      children: "언제 사용하나요?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음과 같은 상황에서 가상 장치 이벤트 로그 연동 기능을 사용하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["외부 근태 관리 시스템의 이벤트를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에서 통합 관리해야 할 때"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모바일 앱이나 외부 시스템에서 발생한 출입 기록(Punch Log)을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 직접 저장해야 할 때(데이터베이스 연동 없이 출근/퇴근 이벤트 기록)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["타사 애플리케이션이나 서비스에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " API를 통해 직접 이벤트를 전송해야 할 때"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "이벤트 로그 API"
      }), " 라이선스가 활성화되어 있어야 합니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "licensing#features-add-ons",
        children: "다음 문서"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["라이선스 적용에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-license-biostar-x-license",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "가상-장치-등록",
      children: "가상 장치 등록"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.root"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 목록에서 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 클릭한 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addVirtualDevice",
            product: "2"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-device-add-virtual-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addVirtualDevice",
            product: "2"
          }), " 화면이 나타나면 설정 정보를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-device-add-virtual-device-settings.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.name",
                product: "2"
              }), ": 가상 장치의 이름을 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.group",
                product: "2"
              }), ": 가상 장치를 할당할 그룹을 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.deviceId",
                product: "2"
              }), ": 가상 장치의 고유 ID를 입력하세요. 기존 장치 ID와 겹치지 않는 범위 내에서 지정해야 합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.description",
                product: "2"
              }), ": 가상 장치에 대한 설명을 입력하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["가상 장치를 등록하려면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
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
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceId",
              product: "2"
            }), "는 100000~999999 범위 내에서 지정할 수 있습니다. 기존 슈프리마 장치 ID와 겹치지 않는 범위 내에서 지정해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이미 생성한 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceId",
              product: "2"
            }), "의 값은 수정할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-그룹-관리",
      children: "장치 그룹 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "가상 장치도 일반 장치와 동일하게 장치 그룹 기능을 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기존 장치들과 동일한 그룹에 배치할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "그룹 권한이 있으면 해당 그룹 내 가상 장치에도 권한을 부여할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치 그룹에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-device-group",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "가상-장치-제약-사항",
      children: "가상 장치 제약 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "가상 장치는 다음 메뉴에서만 표시됩니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.setting"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.device.root"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.arena"
              }), " 메뉴의 모든 이벤트 로그 조회 및 이벤트 로그 미리보기"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.data"
              }), " 메뉴의 이벤트 로그 조회"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["가상 장치는 출입문 및 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.advancedAc.root"
          }), "에서 출입 제어 기능을 사용할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna",
            product: "2"
          }), " 설정을 위한 장치로 지정할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " 메뉴의 사이드바에서 장치 목록으로 표시되지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 제어 기능을 사용할 수 없습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "멀티 커뮤니케이션 서버"
          }), " 라이선스의 장치 수에 포함되지 않습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api를-통한-이벤트-로그-기록",
      children: "API를 통한 이벤트 로그 기록"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "지원-이벤트-유형",
      children: "지원 이벤트 유형"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 이벤트 유형만 기록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "출입 허용"
          }), " (Access granted)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "출입 거부"
          }), " (Access denied)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-parameters",
      children: "API Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이벤트 로그 기록 시 다음 파라미터를 제공해야 합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "파라미터"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "설명"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "필수 여부"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Granted 또는 Access Denied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "필수"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Datetime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "이벤트 발생 시간"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "필수"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "등록된 가상 장치 ID만 허용"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "필수"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "사용자 ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "필수"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T&A Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "지정된 값으로만 입력 가능"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "선택"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "단일 API 호출로 하나의 가상 장치에 대한 여러 이벤트 로그를 한번에 기록할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["API 사용에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://bs2api.biostar2.com/",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "이벤트-로그-조회",
      children: "이벤트 로그 조회"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "가상 장치를 통해 기록된 이벤트 로그는 메뉴에서 조회할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), ": 모든 이벤트 조회 및 필터, 이벤트 프리뷰"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), ": 모든 이벤트 조회 및 필터"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), " 메뉴에서 이벤트 조회에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.data"
            }), " 메뉴에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "data-generate-reports",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "감사-추적",
      children: "감사 추적"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이벤트 로그 기록 시 아래 예시와 같이 감사 추적이 기록됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Access Granted, 2025/08/05 03:37:49, 12층 출입문 외부, Administrator(1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이벤트를 일괄로 기록하더라도 각 이벤트마다 개별 감사 추적 항목이 생성됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.system.auditTrail"
            }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-audit-trail",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "문제-해결",
      children: "문제 해결"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-버튼이-보이지-않는-경우",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.addVirtualDevice",
        product: "2",
        className: "normal"
      }), " 버튼이 보이지 않는 경우"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "이벤트 로그 API"
      }), " 라이선스를 활성화했는지 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-호출이-실패하는-경우",
      children: "API 호출이 실패하는 경우"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "이벤트 로그 API"
          }), " 라이선스를 활성화했는지 확인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 ID가 등록된 가상 장치인지 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API 파라미터 형식이 올바른지 확인하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "이벤트가-조회되지-않는-경우",
      children: "이벤트가 조회되지 않는 경우"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기록한 장치가 올바른 가상 장치 ID인지 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 필터에서 해당 가상 장치가 선택되어 있는지 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 기록 시 오류가 발생하지 않았는지 감사 추적을 확인하세요."
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