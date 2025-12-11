"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["62748"], {
93644: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_biostation_3_release_notes_140_mdx_05b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-3-release-notes-140-mdx-05b.json
var site_docs_device_biostation_3_release_notes_140_mdx_05b_namespaceObject = JSON.parse('{"id":"device/biostation_3/release-notes/140","title":"펌웨어 버전 1.4.0","description":"릴리즈2025-09-09","source":"@site/docs/device/biostation_3/release-notes/140.mdx","sourceDirName":"device/biostation_3/release-notes","slug":"/device/biostation_3/release-notes/140","permalink":"/device/biostation_3/release-notes/140","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/release-notes/140.mdx","tags":[],"version":"current","frontMatter":{"id":"140","title":"펌웨어 버전 1.4.0","isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"펌웨어 버전 1.4.1","permalink":"/device/biostation_3/release-notes/141"},"next":{"title":"펌웨어 버전 1.3.1","permalink":"/device/biostation_3/release-notes/131"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/biostation_3/release-notes/140.mdx


const frontMatter = {
	id: 140,
	title: '펌웨어 버전 1.4.0',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.4.0 (빌드 번호 1.4.0_250909)';

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
    a: "a",
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
        id: "펌웨어-버전-140-빌드-번호-140_250909",
        children: "펌웨어 버전 1.4.0 (빌드 번호 1.4.0_250909)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2025-09-09"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어가 v1.4.0인 제품을 사용하는 경우, 반드시 v1.4.1로 업그레이드한 후 사용하세요.", (0,jsx_runtime.jsx)("br", {}), "중요한 보안 및 안정성 개선이 포함되어 있으므로, 반드시 최신 버전으로 업그레이드한 후 사용해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어를 v1.4.0 이상으로 업그레이드한 뒤 하위 버전으로 다운그레이드할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 펌웨어 다운그레이드 가능 여부 및 신규 BLE 칩 적용 여부는 장치의 시리얼 번호를 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://supremainc.com",
              children: "슈프리마 홈페이지"
            }), "에 문의하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["비상 시 특정 카드를 사용하여 출입문을 개방할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "비상 개방"
          }), " 카드 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "수동 잠김"
          }), "으로 설정된 출입문에 인증 시 인증 실패 이벤트가 발생하고 상태 메시지가 표시되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["전체 관리자 권한을 갖는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "마스터 관리자"
          }), " 설정 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "글로벌 사이버 보안 표준 및 최신 보안 요구사항 반영"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar X에서 장치의 여러 상태를 실시간으로 확인할 수 있도록 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["특정 사용자에게 기본 출입문 열림 시간보다 더 긴 시간 동안 출입문이 열리도록 하는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "연장된 출입문 열림 시간"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["관리자가 출입문의 상태를 변경한 뒤 일정 시간이 지나면 출입문을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보통"
          }), " 상태로 복구하는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "출입문 모드 우회"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치의 메뉴에서 연결된 출입문의 릴레이를 제어할 수 있도록 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "저조도 및 강한 외부광 환경에서 얼굴 인증과 위조 얼굴 검출 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RTSP를 Genetec Security Center에서 재생할 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "서버 개인 메시지"
          }), " 기능을 지원하는 장치를 구분하도록 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "규제 인증 및 라이선스"
          }), " 메뉴 내 제품 전원 사양 수정"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "24V - 1.2A → 24V - 0.7A"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "12V - 2.5A → 12V - 1A"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "반복 신호 무시 시간"
          }), " 기능이 작동할 때 이벤트를 기록하지 않도록 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최신 카드를 인식할 수 있도록 구분 코드 추가"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DESFire EV3"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "보안 탬퍼"
          }), " 기능을 지원하는 장치를 구분하도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SDK를 사용하여 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "마스크 미착용"
          }), " 옵션 설정 시 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "확인 후 인증"
          }), " 이외 설정값을 저장하도록 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MIFARE Plus EV1 카드의 보안 수준 호환성을 위해 SL1, SL3, SL1/SL3 혼합 모드 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SL1: MIFARE Classic 호환 모드"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SL3: AES 기반 고급 보안 모드"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버와 장치 간 시간 동기화 관련 동작 개선"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 ID에 숫자 1397969777001397969777 문자열을 추가해 생성한 사용자를 관리자로 설정하고, 메뉴 진입 시 인증되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 ID에 숫자 1397969777001397969777 문자열을 추가해 생성한 사용자에게 발급된 AoC를 사용 정지 처리했음에도 인증이 정상적으로 성공하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태 모드"
            }), "가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "수동 변경"
            }), "일 때 복잡한 구조의 QR 코드를 사용해 인증에 실패 후, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "근태"
            }), " 선택 없이 QR 코드로 재인증하면 인증에 성공하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["RS-485로 연결된 슬레이브 장치에서 BS2_GetDeviceCapabilities 함수 호출 시 잘못된 값이 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["커스텀 스마트 카드를 인증할 때 사용자 ID 값이 잘못 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["네트워크 상태가 정상일 때 불필요한 자동 연결이 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DESFire 고급 설정"
            }), "을 사용하여 설정된 커스텀 스마트 카드가 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["서버에서 변경한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스크램블 키패드"
            }), " 설정이 정상적으로 적용되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["신규 SE 칩 펌웨어를 사용하는 환경에서 일부 스마트 카드 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["31대의 슬레이브 장치 연결 후 마스터 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["카드가 2개 이상 등록되어있는 사용자가 Wiegand 출력 장치에 카드 인증 시 인증한 카드가 아닌 다른 카드의 ID가 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 반전된 QR 코드의 이미지를 인식하지 못하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슬레이브로 연결된 DM-20의 특정 Supervised Input 포트에서 경비 시작/해제 시 비정상적으로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Wiegand 포맷 25비트 이하의 카드 데이터를 인식하지 못하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자"
            }), " 메뉴를 계속해서 터치하면 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["비밀번호를 설정하지 않은 숨겨진 무선 네트워크(Wi-Fi)에 연결할 수 없는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["발급된 템플릿 온 모바일을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스마트 카드 쓰기"
            }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "카드 포맷"
            }), " 시 태그하면 실패음이 발생하면서 인증이 정상적으로 이루어지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SDK에서 getOperator 함수 사용 시 데이터베이스가 마이그레이션되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["발급된 스마트 카드의 카드 ID가 32자리인 경우, Wiegand 리더에 인증 시 카드 데이터가 정상적으로 인식되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에서 USB 메모리에 사용자 정보를 내보내기할 때 비정상적으로 재시작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자가 이벤트 로그 조회 중 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "메뉴 표시 시간"
            }), "이 지나 장치 화면이 꺼지고 다시 진입하면 동일한 이벤트 로그가 중복 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
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