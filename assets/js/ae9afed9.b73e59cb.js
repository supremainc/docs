"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6032"], {
2832: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_system_audit_trail_mdx_ae9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-system-audit-trail-mdx-ae9.json
var site_docs_platform_biostar_x_settings_system_audit_trail_mdx_ae9_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-audit-trail","title":"감사 추적 관리하기","description":"사용자의 접속 정보뿐만 아니라 시스템에서 변경되는 모든 정보를 모두 추적할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-system-audit-trail.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-audit-trail","permalink":"/docs/platform/biostar_x/settings-system-audit-trail","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-audit-trail.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-audit-trail","title":"감사 추적 관리하기","description":"사용자의 접속 정보뿐만 아니라 시스템에서 변경되는 모든 정보를 모두 추적할 수 있습니다.","keywords":["감사 추적","시스템 변경 이력","audit trail","로그 관리","보안 감사","시스템 모니터링"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"시스템 설정하기","permalink":"/docs/platform/biostar_x/settings-system"},"next":{"title":"시스템 백업하기","permalink":"/docs/platform/biostar_x/settings-system-system-backup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-system-audit-trail.mdx


const frontMatter = {
	id: 'settings-system-audit-trail',
	title: '감사 추적 관리하기',
	description: '사용자의 접속 정보뿐만 아니라 시스템에서 변경되는 모든 정보를 모두 추적할 수 있습니다.',
	keywords: [
		'감사 추적',
		'시스템 변경 이력',
		'audit trail',
		'로그 관리',
		'보안 감사',
		'시스템 모니터링'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "감사 추적 사용하기",
  "id": "audit-trail-guide",
  "level": 2
}, {
  "value": "추적되는 동작 유형",
  "id": "method",
  "level": 3
}, {
  "value": "권한 등급별 분류",
  "id": "permision",
  "level": 3
}, {
  "value": "기간 설정 조회",
  "id": "기간-설정-조회",
  "level": 2
}, {
  "value": "사전 정의된 기간으로 조회",
  "id": "사전-정의된-기간으로-조회",
  "level": 3
}, {
  "value": "사용자 정의 기간으로 조회",
  "id": "사용자-정의-기간으로-조회",
  "level": 3
}, {
  "value": "필터 설정",
  "id": "필터-설정",
  "level": 2
}, {
  "value": "필터 저장",
  "id": "필터-저장",
  "level": 2
}, {
  "value": "페이지 탐색",
  "id": "페이지-탐색",
  "level": 2
}, {
  "value": "CSV 내보내기",
  "id": "csv-내보내기",
  "level": 2
}, {
  "value": "열 설정",
  "id": "열-설정",
  "level": 2
}, {
  "value": "주요 추적 항목",
  "id": "audit-trail-items",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Column, Columns, Details, IcEditUL, IcMoreW, IcTrash2, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.system.auditTrail"
      }), " 기능은 시스템에서 발생하는 모든 활동을 기록하고 추적하는 기능입니다. 사용자의 로그인/로그아웃, 설정 변경, 시스템 관리 작업 등 모든 활동이 기록되어 보안 감사와 시스템 모니터링에 활용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "보안 감사"
          }), ": 비인가 접속 시도나 권한 남용 탐지할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "문제 해결"
          }), ": 시스템 오류 발생 시점과 설정 변경 이력 추적할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "규정 준수"
          }), ": 접근 기록 보관 및 감사 보고서 작성할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audit-trail-guide",
      children: "감사 추적 사용하기"
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
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.auditTrail"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "감사 추적 목록이 화면에 표시됩니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["주요 추적 항목에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#audit-trail-items",
        children: "다음 문서"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method",
      children: "추적되는 동작 유형"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.1",
            product: "2"
          }), ": 새로운 항목 생성"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.3",
            product: "2"
          }), ": 기존 항목 변경"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.4",
            product: "2"
          }), ": 항목 제거"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.2",
            product: "2"
          }), ": 시스템 기능 실행 (로그인, 장치 제어 등)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "permision",
      children: "권한 등급별 분류"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.1",
            product: "2"
          }), ": 모든 시스템 기능 접근"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.2",
            product: "2"
          }), ": 사용자 관리 기능"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.3",
            product: "2"
          }), ": 모니터링 기능"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.253",
            product: "2"
          }), ": 비디오 관련 기능"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.254",
            product: "2"
          }), ": 근태 관리 기능"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.255",
            product: "2"
          }), ": 제한된 기능 접근"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "기간-설정-조회",
      children: "기간 설정 조회"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "조회할 기간을 설정하여 특정 기간의 감사 추적 이력을 확인하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사전-정의된-기간으로-조회",
      children: "사전 정의된 기간으로 조회"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 필터 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.one_month",
        product: "2"
      }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.three_month",
        product: "2"
      }), "을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용자-정의-기간으로-조회",
      children: "사용자 정의 기간으로 조회"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["상세한 기간 설정이 필요한 경우, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.datetime",
        product: "2"
      }), " 옵션에서 시작 날짜와 종료 날짜를 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "필터-설정",
      children: "필터 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "감사 추적 목록을 효율적으로 탐색하기 위해 다양한 조건으로 필터링하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " 섹션에서 다음 옵션들을 설정할 수 있습니다. 필터 옵션은 감사 추적 목록의 컬럼 항목과 일치합니다. 단, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.content",
        product: "2"
      }), " 컬럼은 필터링할 수 없습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.datetime",
            product: "2"
          }), ": 이벤트가 발생한 날짜와 시간"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user",
            product: "2"
          }), ": 이벤트를 수행한 사용자 아이디"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.bioStarOperator",
            product: "2"
          }), ": 사용자의 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#permision",
            children: "권한 등급"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.ip",
            product: "2"
          }), ": 사용자가 접속한 IP 주소"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모바일 기기를 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에 접속하면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "auditTrail.ip.mobile",
              product: "2"
            }), " 문구를 추가 표시합니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.menu",
            product: "2"
          }), ": 변경된 항목의 메뉴 카테고리"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.target",
            product: "2"
          }), ": 변경된 대상"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.method",
            product: "2"
          }), ": 수행된 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#method",
            children: "동작"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.content",
            product: "2"
          }), ": 이벤트 발생 시의 상세 내용"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "필터-저장",
      children: "필터 저장"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["필터를 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ta.report.condition.saveFilter.button",
        product: "2"
      }), " 버튼을 클릭하면 화면 왼쪽 필터 목록에 설정한 필터를 저장할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-add-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["필터 이름을 수정하려면 ", (0,jsx_runtime.jsx)(IcEditUL, {}), " 버튼을 클릭하세요. 필터 이름을 입력하고 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " 키를 누르면 필터 이름이 변경됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["필터를 삭제하려면 ", (0,jsx_runtime.jsx)(IcTrash2, {}), " 버튼을 클릭하세요. 필터 목록에서 해당 필터가 삭제됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "페이지-탐색",
      children: "페이지 탐색"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "페이지를 이동하거나 한 페이지에 표시할 목록 개수를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-first-page.png",
            ico: true,
            alone: true
          }), ": 처음 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-previous-page.png",
            ico: true,
            alone: true
          }), ": 이전 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-nav-page.png",
            ico: true,
            alone: true
          }), ": 이동하려는 페이지 번호를 입력하고 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " 키를 누르면 해당 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-next-page.png",
            ico: true,
            alone: true
          }), ": 다음 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-last-page.png",
            ico: true,
            alone: true
          }), ": 마지막 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-audit-trail-rows-page.png",
            ico: true
          }), ": 한 페이지에 표시할 목록 개수를 선택할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csv-내보내기",
      children: "CSV 내보내기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "감사 추적 목록을 CSV 파일로 내보내 외부 분석 도구에서 활용하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.filter.title",
            product: "2"
          }), " 섹션에서 필요한 경우 필터를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["섹션 오른쪽의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.user.csv_export",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "필터링을 설정한 경우, 필터링된 결과만 CSV 파일로 내보내집니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "열-설정",
      children: "열 설정"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-audit-trail-column-setting.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["감사 추적 목록의 컬럼의 위치를 변경하거나 숨길 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.filter.title",
            product: "2"
          }), " 섹션의 가장 오른쪽에 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.columnSetting",
            product: "2"
          }), "을 클릭하세요."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "열 목록에서 숨기고 싶은 항목의 체크박스 선택을 해제하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "열의 순서를 변경하려면 원하는 항목을 드래그하여 위치를 변경할 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["열 설정을 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "columnSetting.button.defaultColumn",
                product: "2"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audit-trail-items",
      children: "주요 추적 항목"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "감사 추적에서 기록하는 모든 활동을 카테고리별로 정리했습니다. 각 항목을 클릭하여 세부 내용을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "시스템 접속"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "로그인"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.login",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "다중 인증 로그인"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.fingerprint_login",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "로그아웃"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.logout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "로그인 실패 횟수 초과"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.maximum_invalid_attempts",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "사용자 정보"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "기본 정보"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.login_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.email",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.phone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "인증 정보"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.password",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.pin",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.fingerprint_templates",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.faces",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.visual_faces",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.cards",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "권한 및 그룹"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.permission",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.access_groups",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.private_operation_modes",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 상태"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.disabled",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.start_datetime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.expiry_datetime",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "데이터 관리"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_import",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_export",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.data_import",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.data_export",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 연동"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.export",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.remove",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "기타"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.photo",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_custom_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.security_level",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.report",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "관리"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_export.absence",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.delete.absence",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.migration_visualface",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.visualface_import",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "이메일 기능"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.emailSentSuccess",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.emailSentFail",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "출입 통제"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입문 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.door_group_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입문 장치"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.entry_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.exit_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.relay_output_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.sensor_input_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.exit_button_input_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입문 제어"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_duration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_once",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_timeout",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.dual_authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.unconditional_lock",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입문 동작"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_apb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_apb_ex",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_timed_apb_ex",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입그룹"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.access_levels",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.user_groups",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.users",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "출입등급"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.access_level_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "엘리베이터 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.elevator_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.floors",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.active_timeout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "엘리베이터 장치"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.control_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.reader_devices",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.module_devices",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.tamper_device",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "엘리베이터 제어"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.dual_authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.trigger_actions",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "엘리베이터 동작"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.clear_apb",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "층등급"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.floor_level_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "장치 관리"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 기본 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.device_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.timezone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "인증 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.fingerprint",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.face",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.card",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "인터페이스 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.display",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.imageLogEventInfo",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.use_image_log",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "통신 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.lan",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.server",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.rs485",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wlan",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wiegand",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wiegand_io",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.usb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.voip",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "기능 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.system",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.tna",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.trigger_actions",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.camera_frequency",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 관리"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.export",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 제어"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.connect",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.disconnect",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.sync",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.deleteNsync",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.discover_wiegand",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "시스템 관리"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.factory_reset",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.reset",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.update",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.sync_time",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.license",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 상태"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.locked",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.delete",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "구역 관리"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "구역 기본 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.zone_type",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.enable",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.is_global",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "안티패스백 구역"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.antipassback",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_apb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_apb_ex",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "화재경보 구역"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.fire_alarm",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄 제어 구역"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.forced_lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.forced_unlock",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "재실 인원 관리"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.increase_occupancy",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.decrease_occupancy",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.set_occupancy",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "구역 제어"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_alarm",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "시스템 설정"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "서버 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_addr",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_port",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.https",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.session_timeout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "보안 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.secure_communication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.password_strength",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_matching",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "동기화 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.log_sync_method",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.user_sync_method",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.enrollment_device_list",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.fingerprint_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.support_mobile_credential",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.use_photo_log",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "라이선스"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.licenses",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "클라우드 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.cloud.use_cloud",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.cloud.server_address",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.cloud.sub_domain",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.cloud.email",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.cloud.http_port",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.cloud.version",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "기본 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.language",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.date_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.time_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.time_zone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.daily_schedules",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.holiday_schedules",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.start_date",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.use_daily_iteration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.days_of_iteration",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "휴일 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.setting.holidays",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "경보 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.event_type.alert_on",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.event_type.alert_off",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "이미지 로그 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.image_filter.EventFilterCollection",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.image_filter.CutoffOption",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "모바일 크리덴셜"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.mobileCredential.use",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.mobileCredential.notUse",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "얼굴 그룹 매칭"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.face_group.use_face_group",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.face_group.device_ids",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.face_group.face_groups",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "고급 보안 설정"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "스마트 카드 - DESFire"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_app_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_file_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_encryption_type",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "스마트 카드 - iClass"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_second_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_start_block_index",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "스마트 카드 - MIFARE"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_second_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_start_block_index",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_mifare_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_mifare_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "스마트 카드 - Mobile"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mobile_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mobile_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "스마트 카드 - 일반"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.number_of_template",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.template_size",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wiegand 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.length",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.id_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_positions",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_types",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.use_facility_code",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "작업 조건 및 동작"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.trigger",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.action",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.schedule_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 권한"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.operator",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.permission_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 필드"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.custom_fields.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.custom_fields.id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "신호 설정"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.delay",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.count",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.on_duration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.off_duration",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "데이터 관리"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "시스템 백업"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.systemBackup",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "비디오 관리"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.video.camera",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.video.rule",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "방문자 관리"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.visitor",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.visitor.setting",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "그래픽 맵"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.graphicMap",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "포트 관리"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.port",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "일광 절약 시간"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 지정 인터페이스"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.quick_action",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
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