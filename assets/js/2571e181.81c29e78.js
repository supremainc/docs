"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["69512"], {
65488: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_managing_registered_doors_mdx_257_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-managing-registered-doors-mdx-257.json
var site_docs_platform_biostar_air_managing_registered_doors_mdx_257_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-registered-doors","title":"등록 출입문 관리하기","description":"등록된 출입문에 입출입 장치를 할당하고 릴레이를 설정하여 출입 스케줄을 관리합니다. 보안, 화재 대피, 근태 관리를 위해 출입을 통제할 수 있습니다.","source":"@site/docs/platform/biostar_air/managing-registered-doors.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-registered-doors","permalink":"/docs/platform/biostar_air/managing-registered-doors","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-registered-doors.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-registered-doors","title":"등록 출입문 관리하기","description":"등록된 출입문에 입출입 장치를 할당하고 릴레이를 설정하여 출입 스케줄을 관리합니다. 보안, 화재 대피, 근태 관리를 위해 출입을 통제할 수 있습니다.","keywords":["출입문 관리","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"출입문","permalink":"/docs/platform/biostar_air/manage-door"},"next":{"title":"출입문 그룹 관리하기","permalink":"/docs/platform/biostar_air/managing-door-groups"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/managing-registered-doors.mdx


const frontMatter = {
	id: 'managing-registered-doors',
	title: '등록 출입문 관리하기',
	description: '등록된 출입문에 입출입 장치를 할당하고 릴레이를 설정하여 출입 스케줄을 관리합니다. 보안, 화재 대피, 근태 관리를 위해 출입을 통제할 수 있습니다.',
	keywords: [
		'출입문 관리',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "출입문 목록 조회",
  "id": "출입문-목록-조회",
  "level": 2
}, {
  "value": "출입문 정보",
  "id": "출입문-정보",
  "level": 3
}, {
  "value": "추가 기능",
  "id": "추가-기능",
  "level": 3
}, {
  "value": "필터링",
  "id": "deviceFiltering",
  "level": 3
}, {
  "value": "출입문 추가",
  "id": "addingDoor",
  "level": 2
}, {
  "value": "장치와 함께 추가",
  "id": "장치와-함께-추가",
  "level": 3
}, {
  "value": "웹 포털에서 추가",
  "id": "웹-포털에서-추가",
  "level": 3
}, {
  "value": "출입문 수정",
  "id": "editingDoors",
  "level": 2
}, {
  "value": "출입문 리포트 생성",
  "id": "generatingDoorReports",
  "level": 2
}, {
  "value": "모바일 앱에서 출입문 관리",
  "id": "managingDoorsOnMobile",
  "level": 2
}, {
  "value": "출입문 추가",
  "id": "출입문-추가",
  "level": 3
}, {
  "value": "출입문 수정",
  "id": "출입문-수정",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
  }, {Cmd, DocLink, IcAdd, IcAirEdit, IcAirFilter, IcAirGroup, IcAirRef, IcAirRemove, IcAirReport, IcAirSchedule, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirSchedule) _missingMdxReference("IcAirSchedule", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 출입문에 입출입 장치를 할당하고, 릴레이를 구성하며, 출입 스케줄을 설정합니다. 보안, 화재 대피, 근태 관리(T&A)를 위해 체계적으로 출입을 통제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "출입문 등록 및 관리에 대한 동영상 가이드를 시청하려면 다음 영상을 참고하세요."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "g7fUC-9f0qM"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "출입문-목록-조회",
      children: "출입문 목록 조회"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 목록에서는 BioStar Air에 등록된 모든 출입문을 확인할 수 있습니다. 각 출입문의 이름, 할당된 장치, 그룹 등 주요 정보를 확인할 수 있습니다. 또한 개별 출입문을 클릭하여 세부 정보를 확인하고 설정을 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-registered-door-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["등록된 출입문을 확인하려면 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_submenu",
        product: "air"
      }), "을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "출입문-정보",
      children: "출입문 정보"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 목록은 다음과 같은 정보를 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column1",
            product: "air"
          }), ": 출입문 이름입니다. 일반적으로 장치 등록 시 자동 지정되며, 관리자는 출입문 이름을 변경할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column2",
            product: "air"
          }), ": 출입문으로 들어오는 사용자를 인증하는 장치입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column3",
            product: "air"
          }), ": 출입문에서 나가는 사용자를 인증하는 장치입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column4",
            product: "air"
          }), ": 출입문에 할당된 그룹 이름입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column5",
            product: "air"
          }), ": 출입문에 대한 설명입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), ": 출입문과 연결된 카메라 정보가 표시됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), " 열은 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_submenu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_qr_reader_tab",
            product: "air"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_video_management",
            product: "air"
          }), " 기능을 활성화해야 표시됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "추가-기능",
      children: "추가 기능"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "목록에서 하나 또는 여러 개의 출입문을 선택하면 관리자는 제공하는 추가 기능으로 출입문을 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirEdit, {
            width: "24px",
            height: "24px",
            title: "Edit"
          }), ": 출입문 정보를 수정하거나 할당된 장치의 설정을 변경할 수 있습니다. 한 개의 출입문만 선택해야 이 기능을 사용할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#editingDoors"
          }), "을 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px",
            title: "Refresh"
          }), ": 출입문 목록을 새로고침할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRemove, {
            width: "24px",
            height: "24px",
            title: "Delete"
          }), ": 목록에서 선택한 출입문을 제거합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirSchedule, {
            width: "24px",
            height: "24px",
            title: "Schedule Settings"
          }), ": 출입문 열림 및 잠김 상태를 위한 스케줄을 설정합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-door-schedules"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), ": 목록에서 선택한 출입문을 그룹으로 구성할 수 있습니다. 그룹 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-door-groups"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirReport, {
            width: "24px",
            height: "24px",
            title: "Report"
          }), ": 출입문 리포트를 생성할 수 있습니다. 리포트 생성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#generatingDoorReports"
          }), "을 참고하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deviceFiltering",
      children: "필터링"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문 목록에서는 출입문 그룹을 기준으로 필터링하여 조회할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_product_column4",
        product: "air"
      }), " 열의 ", (0,jsx_runtime.jsx)(IcAirFilter, {
        title: "Filter"
      }), " 버튼을 클릭하고 원하는 그룹을 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "popup_ok_btn",
        product: "air"
      }), " 버튼을 클릭하면 선택한 그룹에 속한 출입문만 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["적용한 필터 조건을 초기화하려면 ", (0,jsx_runtime.jsx)(IcAirFilter, {
          title: "Filter"
        }), " 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "column_filter_modal_reset_btn",
          product: "air"
        }), " 버튼을 선택하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingDoor",
      children: "출입문 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치와-함께-추가",
      children: "장치와 함께 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["모바일 앱에서 장치 등록 시 마지막 단계에서 ", (0,jsx_runtime.jsx)(Cmd, {
        en: "Create a door with this device",
        children: "이 장치로 출입문 만들기"
      }), " 옵션을 선택하면 출입문을 생성할 수 있습니다. 모바일 앱으로 장치를 등록하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/manage-device-with-app"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-register-device-as-door.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "웹-포털에서-추가",
      children: "웹 포털에서 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 포털에서 새 출입문을 추가하려면 다음 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.title",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.title",
            product: "air"
          }), " 패널이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.door_name",
            product: "air"
          }), "을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column2",
            product: "air"
          }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column3",
            product: "air"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문 설정을 저장하고 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "출입문의 장치 할당 규칙"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["각 장치는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "하나의 출입문"
            }), "에만 할당할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치가 이미 등록되어 있지만 사용할 수 있는 장치 목록에 나타나지 않는다면, 해당 장치가 다른 출입문에 할당되어 있는지 확인하세요. 다른 장치에 할당되어 있다면 해당 출입문에서 제거한 후 다시 시도하세요."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editingDoors",
      children: "출입문 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문의 세부 정보 및 설정을 수정하려면 다음 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["목록에서 수정할 출입문을 클릭하세요. 또는 출입문 왼쪽의 체크박스를 클릭한 후 상단의 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_door.title",
            product: "air"
          }), " 패널이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.door_name",
            product: "air"
          }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column5",
            product: "air"
          }), "을 수정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_entry_and_exit",
            product: "air"
          }), " 섹션에서 출입문의 사용자 인증을 위한 장치를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column2",
                product: "air"
              }), ": 출입문으로 들어오는 사용자를 인증하는 장치를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column3",
                product: "air"
              }), ": 출입문에서 나가는 사용자를 인증하는 장치를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column6",
                product: "air"
              }), ": 이벤트 로그를 위한 CCTV 카메라를 연결할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["카메라는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings_menu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_submenu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_reader_tab",
              product: "air"
            }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_video_management",
              product: "air"
            }), " 기능을 활성화해야 사용할 수 있습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_auxiliary_device",
            product: "air"
          }), " 섹션에서 릴레이 장치를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.door_relay",
                product: "air"
              }), ": 출입문 잠금을 제어하는 릴레이 장치를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.relay_ignoring_door_sensor",
                product: "air"
              }), ": 출입문 센서를 무시하도록 릴레이를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "추가 설정을 구성하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["설치된 경우 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_exit_btn",
                product: "air"
              }), "으로 설정할 포트를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_door_sensor",
                product: "air"
              }), "로 설정할 포트를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.open_time",
                product: "air"
              }), "에서 출입문이 열린 상태로 유지되는 시간을 설정하세요. (기본값: 3초)"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["수정 사항을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["보안 구역 내에 있는 릴레이를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column3",
              product: "air"
            }), "로 할당할 것을 권장합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column2",
              product: "air"
            }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column3",
              product: "air"
            }), "는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "별도의 네트워크에 연결"
            }), "되어야 합니다. 마스터-슬레이브 구성에서는 Wiegand 또는 RS-485를 통해 연결할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SIO2 보안 모듈 구성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/configuring-the-sio2-secure-module"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generatingDoorReports",
      children: "출입문 리포트 생성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 리포트를 생성하여 관리자의 이메일로 전송할 수 있습니다. 출입문 리포트는 출입문을 통해 출입한 사용자에 대한 정보를 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirReport, {
            title: "Report"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " 창이 나타나면 리포트 이름을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "리포트에 포함할 항목을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["생성한 리포트를 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), "이 생성되며 관리자의 이메일로 다운로드 링크가 전송됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-registered-door-report-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), "에서 생성된 리포트를 검색하거나, 수정, 다운로드, 삭제할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "managingDoorsOnMobile",
      children: "모바일 앱에서 출입문 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자는 BioStar Air 모바일 앱에서 직접 출입문을 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 BioStar Air 앱을 실행하고 로그인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["초기 화면에서 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_tab_management",
            product: "air"
          }), "를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_label",
            product: "air"
          }), " 카드를 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "등록된 모든 출입문을 확인하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "출입문-추가",
      children: "출입문 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["새 출입문을 추가하려면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 버튼을 탭하고 필요한 세부정보를 입력하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "출입문-수정",
      children: "출입문 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 목록에서 출입문을 탭하여 세부 정보를 수정하거나 다음 설정을 구성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "입구 및 출구 장치 할당"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "릴레이 설정"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "퇴출 버튼 및 출입문 센서 구성"
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