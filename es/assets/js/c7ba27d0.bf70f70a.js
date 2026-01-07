"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35752"], {
99769: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_managing_administrators_mdx_c7b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-managing-administrators-mdx-c7b.json
var site_docs_platform_biostar_air_managing_administrators_mdx_c7b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-administrators","title":"관리자 관리하기","description":"BioStar Air에서 관리자 초대, 역할 등급 지정, 권한 관리, 옵저버(Observer), 오퍼레이터(Operator), 관리자(Administrator) 및 마스터(Master) 역할에 대한 출입 통제 설정 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/managing-administrators.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-administrators","permalink":"/docs/es/platform/biostar_air/managing-administrators","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-administrators.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-administrators","title":"관리자 관리하기","description":"BioStar Air에서 관리자 초대, 역할 등급 지정, 권한 관리, 옵저버(Observer), 오퍼레이터(Operator), 관리자(Administrator) 및 마스터(Master) 역할에 대한 출입 통제 설정 방법을 안내합니다.","keywords":["관리자","역할","출입 통제 설정"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"설정","permalink":"/docs/es/platform/biostar_air/settings"},"next":{"title":"사이트 설정하기","permalink":"/docs/es/platform/biostar_air/site-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/managing-administrators.mdx


const frontMatter = {
	id: 'managing-administrators',
	title: '관리자 관리하기',
	description: 'BioStar Air에서 관리자 초대, 역할 등급 지정, 권한 관리, 옵저버(Observer), 오퍼레이터(Operator), 관리자(Administrator) 및 마스터(Master) 역할에 대한 출입 통제 설정 방법을 안내합니다.',
	keywords: [
		'관리자',
		'역할',
		'출입 통제 설정'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "관리자 보기",
  "id": "viewAdmin",
  "level": 2
}, {
  "value": "관리자 비활성화",
  "id": "deactiveAdmin",
  "level": 2
}, {
  "value": "관리자 역할 변경",
  "id": "changing-an-administrators-role",
  "level": 2
}, {
  "value": "새로운 관리자 초대",
  "id": "inviteNewAdmin",
  "level": 2
}, {
  "value": "관리자 레벨",
  "id": "administrator-levels",
  "level": 2
}, {
  "value": "<Cmd class=\"normal\"></Cmd> (Lowest Level)",
  "id": "observer",
  "level": 3
}, {
  "value": "<Cmd class=\"normal\"></Cmd> (Highest Level)",
  "id": "master",
  "level": 3
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air의 관리자 기능을 사용하면 조직 내 관리자 계정을 관리하고, 역할을 할당하고, 출입 등급을 제어할 수 있습니다. 이를 통해 보안 및 관리 제어를 유지하면서 적합한 담당자에게 적절한 권한을 부여할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "관리자 관리에 대한 동영상 가이드를 시청하려면 다음 영상을 참고하세요."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "pUyNLeTfGRI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewAdmin",
      children: "관리자 보기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_submenu",
        product: "air"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-admin.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_submenu",
        product: "air"
      }), " 메뉴에서는 모든 활성 관리자 목록을 확인할 수 있습니다. 관리자 목록에는 다음 정보를 포함합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이름"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이메일 주소"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전화 번호"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "초대자"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "초대 날짜"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "관리자 권한"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "계정 상태(활성/비활성)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deactiveAdmin",
      children: "관리자 비활성화"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자를 삭제하는 대신 계정을 비활성화할 수 있으며, 필요 시 다시 활성화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 비활성화할 관리자를 찾으세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_admin_account_status",
            product: "air"
          }), " 열에서 토글 스위치를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-deactive.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "column_admin_account_status",
        product: "air"
      }), " 열의 상태가 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_status_disabled",
        product: "air"
      }), " 상태로 변경됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-admin-deactive-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["관리자 비활성화 기능은 관리자의 권한에 따라 제한될 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " 권한을 가진 관리자는 다른 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " 관리자를 비활성화할 수 없습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changing-an-administrators-role",
      children: "관리자 역할 변경"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자는 자신보다 낮은 레벨의 관리자 역할을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 역할을 변경할 관리자를 찾으세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_admin_level",
            product: "air"
          }), " 열에서 새 관리자 레벨을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-change-role.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " 관리자만이 다른 관리자에게 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " 권한을 할당하거나 수정할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inviteNewAdmin",
      children: "새로운 관리자 초대"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "새로운 관리자를 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_invite",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_invitation_title",
            product: "air"
          }), " 창이 나타나면 이메일 주소를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-invite.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_invitation_input2",
            product: "air"
          }), "에서 새로운 관리자에게 할당할 역할을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["초대장을 보내려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "send_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["각 관리자는 고유한 이메일 주소를 가져야 합니다. 필요하다면 별칭 주소(예: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:erik+training@example.com",
              children: "erik+training@example.com"
            }), ")를 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["초대 메일을 받은 관리자는 이메일 내의 링크를 클릭하세요. 계정을 등록하지 않은 관리자는 회원 가입을 진행하세요. 이미 계정이 있는 관리자는 로그인 후 바로 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "사이트"
            }), "에 진입할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "administrator-levels",
      children: "관리자 레벨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air의 각 관리자 레벨은 특정 권한을 가지며, 높은 레벨은 낮은 레벨의 권한을 상속받습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["각 관리자 역할은 BioStar Air 전반에 걸쳐 서로 다른 권한을 가지고 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "observer_role",
          product: "air",
          className: "bold"
        }), "는 가장 제한된 접근을 가지며, 화면에 나타나지 않는 제한된 메뉴가 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "observer",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "observer_role",
        product: "air",
        className: "normal"
      }), " (Lowest Level)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dashboard_menu",
            product: "air"
          }), " 대시보드와 로그를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "볼 수 있습니다"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "내보내고"
          }), " 보고서를 생성할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정, 사용자 또는 장치를 수정할 수 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "없습니다"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메뉴 진입에 제한됩니다. 대부분의 메뉴가 화면에 나타나지 않습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operator",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "operator_role",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_submenu",
            product: "air"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), "을 관리할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 제어 또는 관리 설정에 대한 접근 권한이 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "없습니다"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일상적인 사용자 및 출입 구성을 관리하는 데 적합합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "administrator",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_role",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["새로운 관리자를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "초대할 수 있습니다"
          }), ". 하지만 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "master_role",
            product: "air",
            className: "bold"
          }), " 역할을 할당할 수는 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "전체 장치 제어"
          }), " 권한이 있어 설정을 수정하고 연결된 장치를 관리할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "master_role",
            product: "air",
            className: "bold"
          }), " 역할의 관리자를 삭제하거나 수정할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일반적으로 시스템 관리를 담당하는 IT 담당자에게 역할을 할당할 것을 권장합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "master",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "master_role",
        product: "air",
        className: "normal"
      }), " (Highest Level)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정 및 기능에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "전체 접근"
          }), " 권한이 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Administrators"
          }), "에 의해 삭제되거나 수정될 수 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "없습니다"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "하위 사이트"
          }), "를 생성하여 다양한 위치 또는 조직을 관리할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사이트 설정"
          }), "을 구성할 수 있으며, 여기에는 중요한 시스템 전체 구성도 포함됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다른 관리자가 로그인하기 전에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "약관"
          }), "에 동의할 책임이 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일반적으로 회사 소유자 또는 높은 신뢰를 받는 임원에게 할당할 수 있습니다."
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