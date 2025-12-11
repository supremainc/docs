"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1143"], {
91519: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_biostation_3_release_notes_130_mdx_e2e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-3-release-notes-130-mdx-e2e.json
var site_docs_device_biostation_3_release_notes_130_mdx_e2e_namespaceObject = JSON.parse('{"id":"device/biostation_3/release-notes/130","title":"펌웨어 버전 1.3.0","description":"릴리즈2024-06-28","source":"@site/docs/device/biostation_3/release-notes/130.mdx","sourceDirName":"device/biostation_3/release-notes","slug":"/device/biostation_3/release-notes/130","permalink":"/device/biostation_3/release-notes/130","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/release-notes/130.mdx","tags":[],"version":"current","frontMatter":{"id":"130","title":"펌웨어 버전 1.3.0","isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"펌웨어 버전 1.3.1","permalink":"/device/biostation_3/release-notes/131"},"next":{"title":"펌웨어 버전 1.2.1","permalink":"/device/biostation_3/release-notes/121"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/biostation_3/release-notes/130.mdx


const frontMatter = {
	id: 130,
	title: '펌웨어 버전 1.3.0',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.3.0 (빌드 번호 1.3.0_240514)';

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
        id: "펌웨어-버전-130-빌드-번호-130_240514",
        children: "펌웨어 버전 1.3.0 (빌드 번호 1.3.0_240514)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2024-06-28"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "XPass D2 신규 BLE 칩 펌웨어(빌드 번호: 1.7.0_220921) 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "장치의 BLE 칩이 변경됨에 따라 펌웨어가 기존 장치 및 신규 장치의 BLE 칩과 모두 호환하도록 지원"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "커스텀 스마트 카드 레이아웃"
          }), " 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 부팅 후 1분 동안 SEOS 설정 카드를 CSN으로 인식하지 않도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "QR 인증 관련 이벤트 코드 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "커스텀 스마트 카드 레이아웃"
          }), "에 FeliCa 카드 추가 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 유효기간을 최대 '", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2037-12-31"
          }), "'까지 설정할 수 있도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "인텔리전트 슬레이브"
          }), "를 사용할 경우 타사 컨트롤러의 인증 성공/실패 결과를 장치 화면에 표시하는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "컨트롤러 결과 표시"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 타사 컨트롤러와 Wiegand로 연결했을 때 컨트롤러로부터 반복적으로 입력되는 인증에 대한 신호를 무시하는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "반복 신호 무시 시간"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IP 인터폰"
          }), " 화면 UI 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IP 인터폰"
          }), "의 SIP 서버 설정 시 SIP 전송 방법을 선택할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SIP 서버 전송"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IP 인터폰"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RTSP"
          }), " 사용 시 장치에서 송출되는 영상의 해상도를 선택할 수 있는 기능 지원"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "IP 인터폰 비디오 해상도"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "RTSP 비디오 해상도"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SDK에서 GetLogWithFilter 함수를 이용해 사용자 정보 업데이트 성공 이벤트 로그를 가져올 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치의 인증 결과 화면에서 사용자 ID, 이름이 표시되는 방법을 선택할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "인증 결과 표시 옵션"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "확장 개인 인증 모드"
          }), "의 두 번째 크리덴셜을 지문으로 설정한 사용자가 인증에 실패했을 때 표시되는 팝업 메시지 개선"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 저장 가능한 최대 내선 번호 수가 초과되어도 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "내선 추가"
            }), " 아이콘이 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "마스크 검출"
            }), " 기능이 ", (0,jsx_runtime.jsx)("b", {
              children: "사용 (소프트)"
            }), "으로 설정되어있고 마스크 확인 방식이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "인증 후 확인"
            }), "으로 설정된 장치에 마스크를 착용하지 않은 얼굴로 인증하는 경우 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "간헐적으로 인증 모드 오류 발생"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "연속으로 얼굴을 인증할 경우 장치가 멈추는 문제"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["무선 AP 전원이 꺼진 상태에서 장치를 재시작한 후 AP 전원을 켜면 무선 네트워크가 자동으로 다시 연결되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "인증 모드"
            }), "가 카드 / QR 코드로 설정되어있고 마스크 확인 방식이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "확인 후 인증"
            }), "으로 설정된 장치에 마스크를 착용하고 인증한 후 QR로 인증하면 간헐적으로 QR 인증에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["IP 인터폰 통화 중에 BioStar 2에서 장치 설정을 변경하면 통화 종료 후 카드 인증이 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 슬레이브로 연결된 상태에서 DESFire AoC로 인증할 경우 인증이 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "릴레이"
            }), "를 설정한 경우 모바일 카드로 출입문이 열리지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일반 사용자가 이벤트 로그 확인 중 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "메뉴 표시 시간"
            }), "이 지나 장치 화면이 꺼진 후 얼굴로 인증하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), " 화면이 유지되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "경비 구역"
            }), "을 설정한 상태에서 홈 화면의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "경비/해제"
            }), " 버튼을 눌렀을 때 인증 가이드 메시지가 잘못 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["무선 네트워크를 사용하는 환경에서 무선 네트워크 연결이 반복적으로 끊어질 경우 RF카드 인증에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["32자로 저장된 사용자 ID가 특정 이벤트 로그에서 31자까지만 표기되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["네트워크가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "무선 LAN"
            }), "으로 연결된 상태에서 장치를 재시작했을 때 이전에 연결했던 무선 네트워크에 자동으로 재연결되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["네트워크가 무선 LAN으로 연결된 상태에서 이더넷 연결로 변경한 후 다시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "무선 LAN"
            }), "으로 진입하면 무선 AP 목록이 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "무선 LAN"
            }), " 연결 시 무한 로딩이 지속되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["네트워크가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "무선 LAN"
            }), "으로 연결된 상태에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이더넷"
            }), " 연결로 변경한 후 다시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "무선 LAN"
            }), "으로 변경하면 이전에 연결했던 무선 네트워크에 자동으로 재연결되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "공장 초기화"
            }), " 진행 시 이미지 로그가 삭제되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 서버와 연결되지 않은 상태에서 32자리 사용자 ID를 가진 사용자가 장치에 인증했을 경우, 장치가 서버와 다시 연결된 후에도 BioStar 2에 인증 이벤트 로그가 업데이트되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 저장된 지문 수가 1", ":N", " 최대치를 넘겨 추가되었을 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 등록현황"
            }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "지문 수"
            }), "가 비정상적으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["연결한 무선 네트워크의 Wi-Fi 신호 세기가 무선 LAN 목록과 홈 화면의 WLAN 아이콘에서 다르게 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "인증 모드"
            }), "가 ID + 얼굴/PIN으로 설정된 장치의 홈 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ID 입력"
            }), " 아이콘을 터치해 ID를 입력한 후 나타나는 얼굴/PIN 입력 화면에서 왼쪽 상단의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ID 입력"
            }), " 아이콘을 터치해 PIN 입력하면 인증에 성공하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에서 삭제된 이미지 로그가 서버에 계속 업로드되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 BioStar 2의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "대기 장치"
            }), " 목록에 있을 때 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "장치"
            }), " →** 서버** 설정을 꺼도 BioStar 2의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "대기 장치"
            }), " 목록에 장치가 표시되고, 장치 상단에 BioStar 2 아이콘이 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Wiegand 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "출력 모드"
            }), "가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "항시 통과"
            }), "로 설정되어있고, 마스크 확인 방식이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "확인만"
            }), "으로 설정된 장치에서 마스크 확인이 완료된 후에도 얼굴 인증 과정이 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["API로 사진을 업로드하여 비주얼 페이스 등록 시 사진에 검은 여백이 생기며 간헐적으로 인증에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SDK에서 BS2_SetFaceConfig 함수를 이용해 장치에서 얼굴 인증 시 작동 모드를 설정할 때 유효하지 않은 값을 입력하면 무한 재부팅되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SDK를 사용하여 유효하지 않은 ID의 스케줄을 생성한 경우 장치가 정상적으로 부팅되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 저장된 얼굴 수가 1", ":N", " 최대치를 넘겨 추가되었을 경우, 얼굴 인증으로 관리자 로그인이 가능한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 → 서버"
            }), " 모드를 사용 중일 때 DHCP 서버에 연결이 실패할 경우 서버 IP 주소가 초기화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
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