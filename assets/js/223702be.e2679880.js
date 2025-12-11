"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["22161"], {
12093: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_biostation_3_release_notes_101_mdx_223_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-3-release-notes-101-mdx-223.json
var site_docs_device_biostation_3_release_notes_101_mdx_223_namespaceObject = JSON.parse('{"id":"device/biostation_3/release-notes/101","title":"펌웨어 버전 1.0.1","description":"릴리즈2022-10-21","source":"@site/docs/device/biostation_3/release-notes/101.mdx","sourceDirName":"device/biostation_3/release-notes","slug":"/device/biostation_3/release-notes/101","permalink":"/device/biostation_3/release-notes/101","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/release-notes/101.mdx","tags":[],"version":"current","frontMatter":{"id":"101","title":"펌웨어 버전 1.0.1","isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"펌웨어 버전 1.0.2","permalink":"/device/biostation_3/release-notes/102"},"next":{"title":"펌웨어 버전 1.0.0","permalink":"/device/biostation_3/release-notes/100"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/biostation_3/release-notes/101.mdx


const frontMatter = {
	id: 101,
	title: '펌웨어 버전 1.0.1',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.0.1 (빌드 번호 1.0.1_221020)';

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
        id: "펌웨어-버전-101-빌드-번호-101_221020",
        children: "펌웨어 버전 1.0.1 (빌드 번호 1.0.1_221020)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2022-10-21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "저조도 사용 환경에 대한 행동 감지 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비주얼 페이스 매칭 알고리즘 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치에 표시되는 모든 팝업 메시지가 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "메시지 표시 시간"
          }), "에 설정된 시간에 따라 동작하도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "릴레이"
          }), " 메뉴의 한국어 용어 일부 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RTSP"
          }), " 메뉴의 한국어, 영어 용어 일부 수정"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 리소스나 펌웨어를 업그레이드할 때 장치에 아무런 정보가 출력되지 않아 업그레이드 진행 상태를 확인할 수 없던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 다수의 사용자를 장치에 동기화한 후 장치를 재시작했을 때 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 등록현황"
            }), "에 비주얼 페이스의 개수가 동기화한 개수와 다르게 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슬레이브로 연결된 장치에 로고 이미지를 추가한 후 장치 상세 페이지로 진입하면 Invalid payload 오류가 발생하고 RS-485의 연결이 해제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 해시키 수동 관리"
            }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용"
            }), "으로 설정하고 마이그레이션을 진행했을 때 장치에서 모든 사용자가 삭제되지만, 별도의 삭제 알림 팝업이 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 간헐적으로 멈춘 후 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "무선 LAN"
            }), " 메뉴에 진입했을 때 새로운 SSID가 나타나지 않고 이전에 검색되었던 SSID만 나타나는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2를 사용하여 장치에 얼굴 또는 카드를 등록할 때 스캔 화면이 보이지 않고 화면보호기 상태가 유지되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 1개의 내선 번호만 저장된 상태에서 메인화면의 콜 버튼을 눌렀을 때 저장된 1개의 내선 번호로 바로 연결되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 편집"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "확장 개인 인증 모드"
            }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ID"
            }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "지문"
            }), "/", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PIN"
            }), "으로 선택한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), "를 누르면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "확장 개인 인증 모드"
            }), " 목록에서 지문 아이콘이 얼굴 아이콘으로 잘못 표기되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 슬레이브로 연결된 상태에서 개인 인증 모드가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "카드"
            }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "얼굴"
            }), "로 설정된 AoC로 인증할 경우 인증 실패가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2를 통해 장치를 재시작했을 때 알림음만 출력되고 재시작 팝업 메시지가 나타나지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["USB로 펌웨어 업그레이드 시 성공, 실패 팝업 메시지가 나타나지 않고 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 관리"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Always"
            }), "를 제외한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄"
            }), "로 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 코드"
            }), "를 생성하고, 장치에서 해당 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 코드"
            }), "를 선택하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄"
            }), " 표시 부분이 공백으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "메모리 정보"
            }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DRAM 사용량"
            }), "에서 사용 중인 메모리가 잘못 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슬레이브로 연결된 장치에서 메뉴로 진입하면 경고음이 아닌 일반 메뉴 터치음이 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자"
            }), " 메뉴에서 비주얼 페이스를 등록할 때 1번째 얼굴을 등록한 다음 2번째 얼굴을 스캔하는 과정에서 스캔 대기 시간이 초과할 경우 1번째에 등록했던 얼굴이 나타나는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["네트워크가 무선 LAN으로 연결된 상태에서 이더넷 연결로 변경한 후 다시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "무선 LAN"
            }), "으로 진입하면 무선 AP 목록이 표시되지 않는 현상 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Wiegand ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "입출력"
            }), " 설정이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "출력"
            }), "으로 되어 있을 때 장치가 간헐적으로 멈추는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IP 인터폰"
            }), " 설정에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "표시 이름"
            }), "의 허용 글자 수가 최대치를 초과하여 저장되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "인증 모드"
            }), "에서 설정되어있는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "인증 모드"
            }), "를 선택하여 편집 화면으로 진입하면 터치음이 출력되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 슬레이브로 연결되어 있는 상태에서 간헐적으로 연결이 끊긴 상태로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 메인화면에서 콜 버튼을 눌러 내선 번호 목록이 표시된 상태에서 BioStar 2를 통해 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IP 인터폰"
            }), "을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용 안 함"
            }), "으로 변경했을 경우 내선 번호에 전화를 걸면 오류가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "인증 모드"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄"
            }), "을 설정하는 화면에서 생성된 스케줄이 중복되어 보여지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "공장 초기화"
            }), " 진행 시 로딩이 진행되다가 장치가 멈추는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "언어"
            }), " 설정을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 정의"
            }), "로 적용했을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사운드"
            }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "음성 안내"
            }), " 메뉴 부분이 공백으로 보이는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["RS-485로 연결된 마스터 장치에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "표준 시간대"
            }), "를 변경했을 때 슬레이브 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "표준 시간대"
            }), "가 변경되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["NFC로 설정된 모바일 카드로 인증할 때 인증이 실패되고 간헐적으로 장치가 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 검색에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "검색 조건"
            }), "을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "카드"
            }), "로 선택하고 등록되지 않은 카드를 스캔했을 때 올바른 문구가 나타나지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), " 검색 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "검색 조건"
            }), "을 설정하는 팝업이 장치에 설정된 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "메뉴 표시 시간"
            }), "이 지나도 사라지지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "표준 시간대"
            }), "를 변경했을 때 이벤트 로그가 남지 않던 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "설정"
            }), " 메뉴에 진입되어있는 상태에서 BioStar 2를 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "비주얼 페이스"
            }), "를 스캔할 경우 스캔이 완료된 후에도 장치에서 스캔 화면이 종료되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "이더넷"
            }), " 설정 화면에서 하단의 빈 공간을 터치하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "전송 속도"
            }), " 선택 팝업이 나타나는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다른 사용자와 중복된 카드가 등록되어있는 사용자를 BioStar 2에서 장치로 전송할 경우 사용자가 장치에서 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["마스터-슬레이브로 연결된 장치를 각각 펌웨어 업그레이드했을 때, 슬레이브 장치는 정상적으로 완료되나 마스터 장치는 멈춰버리는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RTSP"
            }), "를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용 안 함"
            }), "으로 설정한 후에도 RTSP 연결 종료 이벤트 로그가 생성되지 않고 RTSP 아이콘이 삭제되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설정 오류로 인해 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "기본값 복원"
            }), " 시 재시작되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "날짜와 시간"
            }), "이 올바르게 표기되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 추가 시 카드 스캔 화면에서 카드 입력 없이 대기할 경우 백라이트가 꺼지지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "시작 시간"
            }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "끝 시간"
            }), "으로 검색 시 조회되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "인증 모드 편집"
            }), "에서 선택한 스케줄이 표기되지 않고 다른 스케줄이 표기되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자에 카드 등록 시 설정되지 않은 Wiegand 포맷의 카드를 스캔한 후 기본 인식되도록 설정된 카드를 스캔하면 스캔 되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["수신처가 통화를 종료한 후에도 장치에서는 통화 상태 화면이 유지되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Wi-Fi 지원 모델일 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "대시보드"
            }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 정보"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "무선 MAC"
            }), " 항목이 나타나지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["카드 스캔 화면에서 백그라운드가 터치되고 얼굴이 인증되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 카드 등록 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스마트 카드 쓰기"
            }), "를 선택한 후 스캔 대기 중에 장치가 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["마스터-슬레이브로 장치가 연결된 상태에서 BioStar 2로 슬레이브 장치의 펌웨어를 업그레이드하는 경우 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "슬레이브 장치의 연결이 끊기며 펌웨어 업그레이드가 실패하는 문제"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "마스터 장치의 재시작이 실패하는 문제"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), "를 반복적으로 검색할 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), " 버튼이 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["간헐적으로 이미지 로그가 비정상적으로 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["다수의 사운드 파일을 연속 재생 시 스피커가 반복적으로 켜지고 꺼지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 잠겨 있는 상태에서 펌웨어를 업그레이드할 경우 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 장치로 비주얼 페이스를 전송할 때 무선 LAN 연결이 간헐적으로 끊어지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["IP 인터폰 통화 중 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "메뉴 표시 시간"
            }), "에 설정된 시간에 화면이 꺼지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["전체 로그 삭제 시 이벤트 로그만 삭제되고 이미지 로그는 삭제되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 정보"
            }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAC"
            }), " 항목을 길게 터치했을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "VFMCore"
            }), " 버전 정보가 표기되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "스마트 카드"
            }), " 발급 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "개인 인증 모드"
            }), "에 지문/얼굴을 포함하여 발급할 경우 특정 카드에서 간헐적으로 발급이 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
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