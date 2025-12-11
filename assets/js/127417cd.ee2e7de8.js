"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["88003"], {
97741: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_biostation_3_release_notes_131_mdx_127_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-3-release-notes-131-mdx-127.json
var site_docs_device_biostation_3_release_notes_131_mdx_127_namespaceObject = JSON.parse('{"id":"device/biostation_3/release-notes/131","title":"펌웨어 버전 1.3.1","description":"릴리즈2024-09-03","source":"@site/docs/device/biostation_3/release-notes/131.mdx","sourceDirName":"device/biostation_3/release-notes","slug":"/device/biostation_3/release-notes/131","permalink":"/device/biostation_3/release-notes/131","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/release-notes/131.mdx","tags":[],"version":"current","frontMatter":{"id":"131","title":"펌웨어 버전 1.3.1","isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"펌웨어 버전 1.4.0","permalink":"/device/biostation_3/release-notes/140"},"next":{"title":"펌웨어 버전 1.3.0","permalink":"/device/biostation_3/release-notes/130"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/biostation_3/release-notes/131.mdx


const frontMatter = {
	id: 131,
	title: '펌웨어 버전 1.3.1',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.3.1 (빌드 번호 1.3.1_240902)';

const assets = {

};



const toc = [{
  "value": "신규 기능 및 개선",
  "id": "신규-기능-및-개선",
  "level": 2
}, {
  "value": "버그 수정",
  "id": "버그-수정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "펌웨어-버전-131-빌드-번호-131_240902",
        children: "펌웨어 버전 1.3.1 (빌드 번호 1.3.1_240902)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2024-09-03"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["저장된 내선 번호의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "표시 이름"
          }), "이 긴 경우 발생하는 문제 개선"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "내선 번호 목록에서 긴 내선 번호에 말줄임표가 표시되도록 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["통화 연결 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "표시 이름"
              }), "의 중간 부분만 표시되는 문제 개선"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "통화 중 화면에서 긴 표시 이름이 줄넘김 되도록 개선"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["얼굴 인증 내 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "고급 설정"
          }), " 화면 UI 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RTSP"
          }), " 로그인 비밀번호 설정 시 필요한 조건에 대한 취약점 강화"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "비주얼 페이스 이미지 저장하기"
          }), " 기능 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "비주얼 페이스에 실제 이미지와 템플릿을 모두 저장하도록 하거나 실제 이미지는 저장하지 않고 템플릿만 저장하도록 설정할 수 있는 기능 지원"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["PIN을 입력할 때 숫자 키의 위치가 무작위로 변경되는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "스크램블 키패드"
          }), "를 활성화하거나 비활성화할 수 있는 옵션 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "인증"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스크램블 키패드"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근거리에서 얼굴 인증 시 발생하는 오인증을 줄이기 위해 근거리에서 얼굴 인증을 방지하는 기능 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "위조 얼굴 검출 성능 개선"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "위조 얼굴 검출 성능을 개선하여 iBeta Level 1 ISO 30107-3 제시형 공격 탐지 시험에 통과하였습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["햇빛이 강한 환경에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "위조 얼굴 검출"
                }), " 기능을 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "보통"
                }), "으로 사용하는 것을 권장합니다."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "장치 정보"
          }), " 내에 위조 얼굴 검출의 알고리즘 버전을 확인할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FAS_IR_SP"
          }), " 항목 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["얼굴 인증 시 마스크를 착용한 사용자는 인증을 거부하도록 설정할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "마스크 미착용"
          }), " 옵션 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치에서 네트워크 정보를 직접 입력하여 무선 네트워크를 추가하고 연결할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "무선 네트워크 수동 연결"
          }), " 기능 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "연결한 무선 네트워크의 Wi-Fi 신호 강도를 주기적으로 확인하여 홈 화면의 Wi-Fi 신호 강도 아이콘이 갱신되도록 개선"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "유효기간"
            }), " 설정 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "종료일"
            }), "을 초과하여 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "시작일"
            }), "을 설정했을 때 에러 메시지가 출력되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "유효기간"
            }), " 설정 내 일부 용어 수정 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 메뉴를 설정할 때 나타나는 키패드가 메뉴를 가려 보이지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 생성한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄"
            }), "의 이름이 긴 경우, 스케줄 설정이 필요한 메뉴에서 스케줄명이 UI와 겹쳐보이는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "서버 편집"
            }), "에서 입력한 서버 주소가 긴 경우, 서버 URL 텍스트와 화면 UI가 겹쳐 보이는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["초기화한 장치를 RS-485를 사용하여 슬레이브로 연결했을 때 슬레이브 장치의 LED 상태 표시등이 파란색/초록색으로 점멸되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["간헐적으로 얼굴 인증 내 설정 값이 저장되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 얼굴 인증 모드가 없는 상태에서 얼굴 크리덴셜 사용자 5만명을 등록한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "얼굴 인증"
            }), " 모드를 설정했을 때 사용자 메뉴에 진입하는 경우 메뉴가 멈추는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["내선 목록에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "내선"
            }), " 삭제 시 설정해놓았던 다른 내선 번호의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "표시 이름"
            }), "이 사라지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 언어를 변경했으나 일부 메뉴에서 설정한 언어로 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이벤트 로그 확인 중 BioStar 2를 통해 장치에서 얼굴을 스캔한 후 사용자 메뉴에 진입했을 때, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), " 화면이 유지되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["내선 번호 선택 화면에서 백그라운드 화면 하단이 터치되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 등록 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ID"
            }), "에 지원하지 않는 키를 입력하면 문자 커서가 한 칸씩 앞으로 이동하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 슬레이브로 연결된 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "음성 안내"
            }), "를 활성화한 후 슬레이브 장치에서 사용자 메뉴에 진입했을 때, 인증 실패 음성 안내가 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이벤트 로그 상세보기 화면에서 백그라운드 우측 상단이 터치되며 이벤트 로그 검색 또는 전체 삭제 팝업 메시지가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IP 인터폰"
            }), " 통화 중 BioStar 2를 통해 장치에서 얼굴을 스캔하거나 카드 스캔이 가능한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "경비"
            }), " 상태에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IP 인터폰"
            }), " 통화 중에 경비 진입 해제 시 홈 화면이 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 ID"
            }), "가 긴 경우, 이벤트 로그 상세 보기 화면에서 사용자 ID 명과 화면 UI가 겹쳐 보이는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이미지 로그"
            }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용"
            }), "으로 설정한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "템플릿 온 모바일"
            }), " 관련 로그 발생 시 장치에서 이미지 로그 아이콘이 올바르게 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["iClass AoC 카드와 지문을 동시에 인증하면 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "시간 제한 안티패스백"
            }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "초기화 시간"
            }), "을 0으로 설정하면 안티패스백이 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IP 인터폰"
            }), " 통화 중일 때 화면상에 1397969777통화 중1397969777이 아닌 1397969777연결 중1397969777으로 잘못 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 저장할 수 있는 최대 내선 번호 수만큼 내선을 저장했을 때 통화 연결 화면 하단에 공백이 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이전에 연결했던 무선 네트워크에 자동으로 재연결되었을 때 홈 화면의 WLAN 아이콘이 회색으로 표기되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Wiegand 카드 형식의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "식별 코드"
            }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ID 필드"
            }), "에 비트 간격을 설정해두고 사용자 등록에서 카드를 스캔했을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "식별 코드"
            }), "가 잘못된 값으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "슈프리마 스마트 카드 레이아웃"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "기본 사이트 키"
            }), "만 설정되어 있고, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "보조 사이트 키"
            }), "만 설정된 상태에서 장치를 재시작할 경우, 장치가 커스텀 스마트 카드를 CSN 카드로 인식하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["짧은 길이의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS 서버 주소"
            }), "를 입력할 경우 DNS 서버와 정상적으로 연결되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SDK를 사용하여 장치의 얼굴 센서 민감도를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "높음"
            }), "으로 설정해도 장치의 모션 센서가 간헐적으로 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SDK를 사용하여 장치의 RS-485 모드를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용안함"
            }), "으로 설정했을 때 장치가 멈추는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "작업 조건 및 동작"
            }), "에 BioStar 2와 연결이 끊길 경우 장치가 비활성화 되도록 설정되어 있는 상태에서 장치에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "재연결"
            }), "을 시도했을 때 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "1397969777BioStar 2 연결 해제1397969777와 1397969777장치 잠금1397969777 로그가 반복적으로 출력되는 문제"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "장치와 서버 간 연결이 끊긴 후 재연결되지 않는 문제"
              }), "\n"]
            }), "\n"]
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