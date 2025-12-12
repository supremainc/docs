"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["43909"], {
20993: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2025년 5월 이전에 BioStar Air 출입 통제 서비스를 사용하기 시작한 고객은 현재 Suprema Pass 앱으로 새로 설계된 Airfob Space 앱을 계속 사용할 수 있습니다. 두 앱 모두 동일한 기능을 제공하며 완벽하게 호환됩니다. 기존 사용자는 전환할 필요가 없으며, 모바일 인증 정보가 두 앱 모두에서 원활하게 작동합니다."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
84943: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_11_door_management_managing_registered_doors_mdx_afb_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-11-door-management-managing-registered-doors-mdx-afb.json
var site_docs_platform_biostar_air_11_door_management_managing_registered_doors_mdx_afb_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-registered-doors","title":"등록 출입문 관리하기","description":"BioStar Air에서 등록한 출입문 관리, 출입 장치 구성, 릴레이 설정 및 출입문 스케줄을 구성하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/11-door-management-managing-registered-doors.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-registered-doors","permalink":"/docs/ja/platform/biostar_air/managing-registered-doors","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/11-door-management-managing-registered-doors.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"managing-registered-doors","title":"등록 출입문 관리하기","description":"BioStar Air에서 등록한 출입문 관리, 출입 장치 구성, 릴레이 설정 및 출입문 스케줄을 구성하는 방법을 안내합니다.","keywords":["출입문 관리","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"출입문 관리","permalink":"/docs/ja/platform/biostar_air/manage-door"},"next":{"title":"출입문 그룹 관리하기","permalink":"/docs/ja/platform/biostar_air/managing-door-and-device-groups"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/11-door-management-managing-registered-doors.mdx


const frontMatter = {
	id: 'managing-registered-doors',
	title: '등록 출입문 관리하기',
	description: 'BioStar Air에서 등록한 출입문 관리, 출입 장치 구성, 릴레이 설정 및 출입문 스케줄을 구성하는 방법을 안내합니다.',
	keywords: [
		'출입문 관리',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "등록된 출입문 확인",
  "id": "registeredDoors",
  "level": 2
}, {
  "value": "출입문 관리 도구",
  "id": "doorManagementTools",
  "level": 2
}, {
  "value": "출입문 추가",
  "id": "addingDoor",
  "level": 2
}, {
  "value": "출입문 수정",
  "id": "editingDoors",
  "level": 2
}, {
  "value": "모바일 기기에서 출입문 관리",
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
}, {
  "value": "출입문 리포트 생성",
  "id": "generatingDoorReports",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, IcAirEdit, IcAirFilter, IcAirGroup, IcAirRef, IcAirRemove, IcAirReport, IcAirSchedule, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
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
      children: "BioStar Air의 출입문 관리 기능은 관리자가 출입 및 퇴출 장치 할당, 릴레이 구성, 일정 설정을 통한 출입 지점 구성 방법을 안내합니다. 출입문은 보안, 화재 대피 및 근태 관리(T&A)를 위해 출입을 관리하고 사용자 이동을 추적하는 체계를 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "출입문 등록 및 관리에 대한 동영상 가이드를 시청하려면 다음 영상을 참고하세요."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "g7fUC-9f0qM"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registeredDoors",
      children: "등록된 출입문 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문은 장치 등록 시 자동으로 생성됩니다. 장치 등록 시 마지막 단계에서 ", (0,jsx_runtime.jsx)(Cmd, {
        en: "Create a door with this device",
        children: "이 장치로 출입문 만들기"
      }), " 옵션을 선택하면 출입문이 생성됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["등록된 출입문을 확인하려면 화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_submenu",
        product: "air"
      }), "을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-registered-door-list.png"
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
          }), ": 출입문의 위치에 대한 설명입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), ": 통합 CCTV 기능이 지원되는 경우 연결된 카메라 정보가 표시됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문 목록에서 필터링 옵셥은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column4",
              product: "air"
            }), " 열만 제공합니다. ", (0,jsx_runtime.jsx)(IcAirFilter, {}), " 버튼을 클릭하고 원하는 조건을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar Air 모바일 앱에서 장치 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "register-device",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "doorManagementTools",
      children: "출입문 관리 도구"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 목록에서 하나 또는 여러 개의 출입문을 선택하면 관리자는 다음 도구를 통해 출입문을 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirEdit, {
            width: "24px",
            height: "24px"
          }), ": 출입문 정보를 수정하거나 할당된 장치의 설정을 변경할 수 있습니다. 한 개의 출입문만 선택해야 이 기능을 사용할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#editingDoors",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px"
          }), ": 출입문 목록에서 선택한 출입문의 상태를 업데이트할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRemove, {
            width: "24px",
            height: "24px"
          }), ": 출입문 목록에서 선택한 출입문을 사이트에서 제거합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirSchedule, {
            width: "24px",
            height: "24px"
          }), ": 출입문 열림 및 잠김 상태를 위한 스케줄을 설정합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "managing-door-schedules",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px"
          }), ": 출입문 목록에서 선택한 출입문을 그룹으로 구성할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirReport, {
            width: "24px",
            height: "24px"
          }), ": 출입문 리포트를 생성할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingDoor",
      children: "출입문 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "새 출입문을 추가하려면 다음 단계를 따르세요."
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
          children: ["설치한 카메라가 있다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), "를 할당하세요."]
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
              }), ": 통합 CCTV 기능이 지원되는 경우 이벤트 로그를 위한 CCTV 카메라를 연결할 수 있습니다."]
            }), "\n"]
          }), "\n"]
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
              }), ": 문제 해결을 위해 이 옵션을 활성화하세요."]
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
            children: ["SIO2 보안 모듈 구성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "configuring-the-sio2-secure-module",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "managingDoorsOnMobile",
      children: "모바일 기기에서 출입문 관리"
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
          children: ["출입문 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirReport, {}), " 버튼을 클릭하세요."]
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