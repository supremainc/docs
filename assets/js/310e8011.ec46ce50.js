"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["21105"], {
32034: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_user_management_user_list_mdx_310_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-user-management-user-list-mdx-310.json
var site_docs_platform_biostar_air_user_management_user_list_mdx_310_namespaceObject = JSON.parse('{"id":"platform/biostar_air/user-management-user-list","title":"사용자 관리하기","description":"BioStar Air에 등록된 사용자를 효율적으로 관리합니다. 사용자 목록 조회, 필터링, 세부 정보 편집, 그룹 및 출입 레벨 할당, 크리덴셜 발급, 일괄 작업 및 리포트 생성 등의 기능을 통해 조직 내 모든 사용자를 관리할 수 있습니다.","source":"@site/docs/platform/biostar_air/user-management-user-list.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/user-management-user-list","permalink":"/docs/platform/biostar_air/user-management-user-list","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/user-management-user-list.mdx","tags":[],"version":"current","frontMatter":{"id":"user-management-user-list","title":"사용자 관리하기","description":"BioStar Air에 등록된 사용자를 효율적으로 관리합니다. 사용자 목록 조회, 필터링, 세부 정보 편집, 그룹 및 출입 레벨 할당, 크리덴셜 발급, 일괄 작업 및 리포트 생성 등의 기능을 통해 조직 내 모든 사용자를 관리할 수 있습니다.","keywords":["BioStar Air","사용자 관리","사용자 목록","크리덴셜","출입 레벨","사용자 그룹","리포트"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"사용자 추가하기","permalink":"/docs/platform/biostar_air/adding-individual-users"},"next":{"title":"일괄 작업으로 사용자 추가하기","permalink":"/docs/platform/biostar_air/adding-users-in-bulk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/user-management-user-list.mdx


const frontMatter = {
	id: 'user-management-user-list',
	title: '사용자 관리하기',
	description: 'BioStar Air에 등록된 사용자를 효율적으로 관리합니다. 사용자 목록 조회, 필터링, 세부 정보 편집, 그룹 및 출입 레벨 할당, 크리덴셜 발급, 일괄 작업 및 리포트 생성 등의 기능을 통해 조직 내 모든 사용자를 관리할 수 있습니다.',
	keywords: [
		'BioStar Air',
		'사용자 관리',
		'사용자 목록',
		'크리덴셜',
		'출입 레벨',
		'사용자 그룹',
		'리포트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자 목록 조회",
  "id": "사용자-목록-조회",
  "level": 2
}, {
  "value": "사용자 정보",
  "id": "사용자-정보",
  "level": 3
}, {
  "value": "필터링",
  "id": "userFiltering",
  "level": 3
}, {
  "value": "추가 기능",
  "id": "additionalFunctions",
  "level": 3
}, {
  "value": "사용자 정보 수정",
  "id": "editUserDetails",
  "level": 2
}, {
  "value": "사용자 그룹 관리",
  "id": "manageUserGroups",
  "level": 2
}, {
  "value": "그룹에 사용자 할당하기",
  "id": "assigning-users-to-a-group",
  "level": 3
}, {
  "value": "그룹 해제 또는 이동",
  "id": "disableGroup",
  "level": 3
}, {
  "value": "사용자 상태 관리",
  "id": "manageUserStatus",
  "level": 2
}, {
  "value": "개별 사용자",
  "id": "개별-사용자",
  "level": 3
}, {
  "value": "일괄 작업",
  "id": "일괄-작업",
  "level": 3
}, {
  "value": "사용자 삭제",
  "id": "deleteUser",
  "level": 2
}, {
  "value": "개별 사용자",
  "id": "deleteSingleUser",
  "level": 3
}, {
  "value": "일괄 삭제",
  "id": "deleteMultipleUsers",
  "level": 3
}, {
  "value": "사용자 리포트 생성",
  "id": "userReport",
  "level": 2
}, {
  "value": "사용자 검색",
  "id": "searchUsers",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, DocLink, IcAdd, IcAirActive, IcAirDown, IcAirEdit, IcAirFaceLink, IcAirFilter, IcAirFilterReset, IcAirGroup, IcAirLock, IcAirMask, IcAirMore, IcAirMtag, IcAirReissue, IcAirRemove, IcAirReport, IcAirSuspend, IcAirUpface, IcAirUtemplate, IcBw, Image, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirActive) _missingMdxReference("IcAirActive", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirFaceLink) _missingMdxReference("IcAirFaceLink", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirFilterReset) _missingMdxReference("IcAirFilterReset", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirLock) _missingMdxReference("IcAirLock", true);
  if (!IcAirMask) _missingMdxReference("IcAirMask", true);
  if (!IcAirMore) _missingMdxReference("IcAirMore", true);
  if (!IcAirMtag) _missingMdxReference("IcAirMtag", true);
  if (!IcAirReissue) _missingMdxReference("IcAirReissue", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirSuspend) _missingMdxReference("IcAirSuspend", true);
  if (!IcAirUpface) _missingMdxReference("IcAirUpface", true);
  if (!IcAirUtemplate) _missingMdxReference("IcAirUtemplate", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록은 조직의 출입 통제를 담당하는 관리자를 위한 필수 관리 도구입니다. 사용자 그룹화를 통한 조직 관리, 실시간 활성화/일시 정지로 신입 또는 퇴사 직원 즉시 대응, 다양한 크리덴셜 통합 관리, 유효 기간 모니터링을 통한 보안 강화, 필터링과 리포트 생성을 통한 보고 및 감사 대비까지 모든 사용자 관리 작업을 수행할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-목록-조회",
      children: "사용자 목록 조회"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록에서는 BioStar Air에 등록된 모든 사용자를 한눈에 확인할 수 있습니다. 각 사용자의 세부 정보를 보고, 필터링 및 정렬 기능을 활용하여 특정 사용자를 쉽게 찾을 수 있습니다. 또한, 사용자 목록에서 직접 사용자 편집, 삭제, 그룹 할당 등의 작업을 수행할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-overview.png"
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user.png",
              className: "none"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Air 앱에서 사용자 관리 기능을 사용할 수 있습니다."
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["모바일 기기에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar Air"
                  }), " 앱을 실행하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["화면 하단의 탐색바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "site_setting_tab_management",
                    product: "air"
                  }), "를 탭하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_submenu",
                    product: "air"
                  }), " 버튼을 탭하세요."]
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 목록이 나타납니다. 새로운 사용자를 추가하거나 기존 사용자의 세부 정보를 편집할 수 있습니다."
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용자-정보",
      children: "사용자 정보"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록의 테이블에서 제공하는 정보는 아래와 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column8",
            product: "air"
          }), ": 사용자가 일반 사용자인지 임시 사용자인지 나타냅니다. 일반 및 임시 사용자에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/user-card-types"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column1",
            product: "air"
          }), ": 사용자의 이름입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_info_id",
            product: "air"
          }), ": 사용자의 고유 아이디입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column2",
            product: "air"
          }), ": 사용자에게 발급한 크리덴셜을 나타냅니다. 크리덴셜의 종류에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/user-card-types"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column3",
            product: "air"
          }), ": 사용자에게 발급한 크리덴셜의 유효 기간입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column4",
            product: "air"
          }), ": 해당 사용자의 활성화 또는 비활성화 상태를 나타냅니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), ": 사용자가 속한 그룹입니다. 사용자 그룹에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-user-groups"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column6",
            product: "air"
          }), ": 사용자에게 할당한 출입 레벨입니다. 출입 레벨에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-access-level"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column7",
            product: "air"
          }), ": 사용자가 출입할 수 있는 층에 대한 권한입니다. 층 레벨에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-floor-level"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userFiltering",
      children: "필터링"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록의 상단 헤더 영역에서 필터링 기능을 이용할 수 있습니다. 헤더 영역의 ", (0,jsx_runtime.jsx)(IcAirFilter, {
            title: "Filter"
          }), " 버튼을 클릭하면 원하는 조건을 설정할 수 있습니다."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-filtering.png"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["적용한 필터 조건을 초기화하려면 사용자 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirFilterReset, {
              title: "Clear Filters"
            }), " 버튼을 클릭하세요."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["모바일 앱에서 사용자 목록의 사용자를 원하는 기준으로 필터링하여 볼 수 있습니다. 사용자 목록 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "logs_filters_action_btn",
            product: "air"
          }), "를 탭하세요. 사용자는 아래 기준으로 필터링할 수 있습니다."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-filter.png",
          className: "none",
          width: "60%"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column8",
                product: "air"
              }), ": 일반 또는 임시 사용자로 필터링합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column2",
                product: "air"
              }), ": 크리덴셜 종류에 따라 필터링합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column4",
                product: "air"
              }), ": 활성화 상태에 따라 필터링합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column5",
                product: "air"
              }), ": 사용자 그룹에 따라 필터링합니다."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additionalFunctions",
      children: "추가 기능"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록 상단에서 제공하는 기능은 아래와 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), ": 선택한 사용자에게 그룹을 할당하거나 제외, 이동할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#manageUserGroups"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirLock, {
            width: "24px",
            height: "24px",
            title: "Set Access"
          }), ": 선택한 사용자의 출입 레벨을 변경할 수 있습니다. 출입 레벨 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-access-level"
          }), "를 참고하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-tool-aclevel.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirMtag, {
            width: "24px",
            height: "24px",
            title: "Mobile Consecutive Tag"
          }), ": 선택한 사용자에게 대기 시간 없이 연속으로 모바일 카드를 태그할 수 있도록 설정할 수 있습니다. 슈프리마 패스 앱은 2.9.0 버전 이상에서 지원합니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-tool-mobile-tag.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUtemplate, {
            width: "24px",
            height: "24px",
            title: "User Template"
          }), ": 선택한 사용자에게 사용자 템플릿을 적용할 수 있습니다. 기본 설정된 사용자 정보 외에 필요한 다른 정보를 추가할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-template.png",
          width: "43%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirDown, {
            width: "24px",
            height: "24px",
            title: "Download"
          }), ": 선택한 사용자 정보를 PDF 또는 CSV 파일로 내보낼 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUpface, {
            width: "24px",
            height: "24px",
            title: "Image Upload"
          }), ": 사용자 이미지를 일괄 업로드할 수 있습니다. 업로드하는 이미지 파일의 이름은 사용자 아이디와 일치해야 합니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "예, 601.jpg 파일은 사용자 아이디 601에 해당합니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "파일 형식 요구사항"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["지원되는 형식: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".jpg"
                }), ", ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".jpeg"
                }), ", ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".png"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["파일 크기 제한: 이미지당 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "1MB"
                })]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFaceLink, {
            width: "26px",
            height: "26px",
            title: "Send Face Registration Link"
          }), ": 선택한 사용자에게 얼굴 등록 링크를 이메일 또는 문자 메시지로 전송할 수 있습니다. 사용자가 링크를 클릭해 웹 페이지에서 얼굴을 등록하면, 얼굴 인증을 통해 출입할 수 있는 권한이 부여됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "이메일과 휴대폰 번호가 등록되어 있지 않은 사용자에게는 링크를 전송할 수 없습니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFilterReset, {
            width: "26px",
            height: "26px",
            title: "Clear Filters"
          }), ": 사용자 목록에 적용된 필터를 초기화합니다. 이 기능은 필터링이 적용된 상태에서 사용할 수 있습니다. 필터링 적용 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#userFiltering"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirReport, {
            width: "26px",
            height: "26px",
            title: "Report"
          }), ": 사용자 리포트를 설정할 수 있습니다. 리포트를 생성을 완료하면 관리자의 이메일로 전송됩니다. 리포트 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#userReport"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirMask, {
            width: "24px",
            height: "24px",
            title: "Apply Masking"
          }), ": 사용자 목록에서 개인 정보 보호를 위해 이름, 아이디 등의 정보를 마스킹(", (0,jsx_runtime.jsx)(_components.code, {
            children: "***"
          }), ")할 수 있습니다. 이 기능은 개인 정보 보호가 필요한 환경에서 유용합니다. 토글 버튼을 선택해 기능을 활성화하고, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-masking.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editUserDetails",
      children: "사용자 정보 수정"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "사용자의 세부 정보를 수정하거나 크리덴셜을 변경하려면 다음 단계를 따르세요."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "목록에서 수정할 사용자를 클릭하세요."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-list.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["사용자 세부 정보 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " 버튼을 클릭하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_edit_header",
                product: "air"
              }), " 창이 나타나면 필요한 세부 정보를 수정하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-details-edit-info.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["수정을 완료하면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-edit.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "모바일 앱에서 사용자 세부 정보를 수정하려면 다음 단계를 따르세요."
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "사용자 목록에서 정보를 수정할 사용자를 탭하세요."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " 버튼을 탭하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_edit_header",
                    product: "air"
                  }), " 화면에서 필요한 정보를 수정하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["수정 사항을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "save_btn",
                    product: "air"
                  }), " 버튼을 탭하세요."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["크리덴셜을 발급하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "add_user_card_activate_btn",
                    product: "air"
                  }), " 버튼을 사용하세요."]
                }), "\n"]
              }), "\n"]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자 정보에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/adding-individual-users"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageUserGroups",
      children: "사용자 그룹 관리"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자를 사용자 그룹에 할당하거나 이동, 제외하는 방법을 안내합니다. 사용자 그룹 생성 및 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/managing-user-groups"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "assigning-users-to-a-group",
          children: "그룹에 사용자 할당하기"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 그룹을 생성한 후 사용자 목록에서 사용자를 추가할 수 있습니다."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 목록에서 앞서 생성한 그룹에 할당할 사용자의 체크박스를 클릭하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["사용자 목록 왼쪽 상단의 ", (0,jsx_runtime.jsx)(IcAirGroup, {
                title: "Manage Groups"
              }), " 버튼을 클릭하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-group-assign.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_user_groups_header",
                product: "air"
              }), " 창이 나타나면 사용자를 할당할 상위 그룹 또는 하위 그룹을 선택하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-group-assign-popup.png",
              width: "50%"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["선택을 완료하고 그룹 설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_grops_ok_btn",
                product: "air"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), " 열에서 사용자가 새 그룹에 할당된 것을 확인할 수 있습니다."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-assign-result.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), "으로 돌아가면 해당 그룹의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_table_col2",
            product: "air"
          }), "가 업데이트된 것을 확인할 수 있습니다."]
        }), (0,jsx_runtime.jsx)(_components.h3, {
          id: "disableGroup",
          children: "그룹 해제 또는 이동"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자를 그룹에서 제외하거나 다른 그룹으로 이동할 수 있습니다."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 목록에서 그룹에서 해제하거나 이동할 사용자의 체크박스를 클릭하세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "그룹 이동 시에는 동일한 그룹의 사용자를 선택한 후 진행하세요."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["사용자 목록 왼쪽 상단의 ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_user_groups_header",
                product: "air"
              }), " 창이 나타나면 다음 중 하나를 수행하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "그룹을 해제할 때는 선택된 그룹의 체크박스를 비활성화하세요."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "그룹을 이동할 때는 선택된 그룹의 체크박스를 활성화하고, 이동할 그룹을 선택하세요."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["그룹 설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_grops_ok_btn",
                product: "air"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), " 열에서 사용자의 그룹 변경 사항을 확인할 수 있습니다."]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["모바일 앱에서 사용자 그룹을 관리할 수 있습니다. 사용자 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " 버튼을 탭하세요. 사용자 그룹 목록을 확인할 수 있습니다."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-group.png",
          className: "none",
          width: "60%"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["그룹에 속한 사용자를 보려면 원하는 그룹의 오른쪽에 ", (0,jsx_runtime.jsx)(IcBw, {}), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["새로운 그룹을 추가하려면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcAdd, {
                title: "Add"
              }), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["그룹 이름을 수정하려면 원하는 그룹을 길게 터치하고 하단의 ", (0,jsx_runtime.jsx)(IcAirEdit, {
                title: "Edit"
              }), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["그룹을 삭제하려면 원하는 그룹을 길게 터치한 후 하단의 ", (0,jsx_runtime.jsx)(IcAirRemove, {
                title: "Remove"
              }), " 버튼을 탭하세요. 하나 이상의 그룹을 선택해 삭제할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 그룹 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/managing-user-groups"
            }), "를 참고하세요."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageUserStatus",
      children: "사용자 상태 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자의 출입 권한을 활성화하거나 일시 정지할 수 있습니다. 또한 크리덴셜을 재발급할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "개별-사용자",
      children: "개별 사용자"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 목록에서 상태를 변경할 사용자를 클릭하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 세부 정보 상단에서 원하는 기능을 선택하세요."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-details-manage-status.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirActive, {
                width: "24px",
                height: "24px",
                title: "Activate"
              }), ": 사용자의 출입 권한을 활성화합니다. 새 사용자의 초기 활성화 또는 일시 정지된 사용자의 재활성화 시 사용하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirReissue, {
                width: "24px",
                height: "24px",
                title: "Reissue"
              }), ": 크리덴셜을 다시 발급합니다. 이 기능은 사용자의 크리덴셜이 만료되었거나, 크리덴셜을 사용할 수 없어 새로 발급할 때 사용할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirSuspend, {
                width: "24px",
                height: "24px",
                title: "Suspend"
              }), ": 사용자의 출입을 차단합니다. 이 기능은 사용자가 활성화된 상태일 때 사용할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-action.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["모바일 앱에서 사용자 목록에서 사용자를 탭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_detail",
                product: "air"
              }), " 화면에서 ", (0,jsx_runtime.jsx)("span", {
                className: "rect green",
                children: (0,jsx_runtime.jsx)(IcAirMore, {})
              }), " 버튼을 탭하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 액션"
              }), " 메뉴가 나타납니다."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_activate_action",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "after_suspend_user_reactivate_action",
                    product: "air"
                  }), ": 사용자의 출입 권한을 활성화합니다. 새 사용자의 초기 활성화 또는 일시 정지된 사용자의 재활성화 시 사용하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_reactivate_action",
                    product: "air"
                  }), ": 사용자의 크리덴셜을 재발급합니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "suspend_action",
                    product: "air"
                  }), ": 사용자를 일시적으로 비활성화합니다. 일시 중지된 사용자는 출입할 수 없습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "delete_action",
                    product: "air"
                  }), ": 사용자를 시스템에서 삭제합니다."]
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "after_suspend_user_reactivate_action",
                  product: "air"
                }), " 옵션은 일시 중지된 사용자에게만 표시됩니다."]
              })
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "일괄-작업",
      children: "일괄 작업"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 목록에서 상태를 변경할 사용자의 체크박스를 클릭하세요. 1명 이상의 사용자를 선택할 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(IcAirMore, {}), " 버튼을 클릭하고 팝업 메뉴에서 원하는 작업을 선택하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-user-batch-action.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_activate_action",
                product: "air"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "after_suspend_user_reactivate_action",
                product: "air"
              }), ": 사용자의 출입 권한을 활성화합니다. 새 사용자의 초기 활성화 또는 일시 정지된 사용자의 재활성화 시 사용하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_reactivate_action",
                product: "air"
              }), ": 크리덴셜을 다시 발급합니다. 이 기능은 사용자의 크리덴셜이 만료되었거나, 크리덴셜을 사용할 수 없어 새로 발급할 때 사용할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "suspend_action",
                product: "air"
              }), ": 사용자의 출입을 차단합니다. 이 기능은 사용자가 활성화된 상태일 때 사용할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-bulk-action.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["모바일 앱에서 사용자 목록에서 상태를 변경할 사용자를 길게 터치하세요. 추가로 상태를 변경할 사용자를 선택하세요. 화면 하단의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 액션"
              }), " 메뉴에서 원하는 기능을 탭하세요."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_activate_action",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "after_suspend_user_reactivate_action",
                    product: "air"
                  }), ": 사용자의 출입 권한을 활성화합니다. 새 사용자의 초기 활성화 또는 일시 정지된 사용자의 재활성화 시 사용하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_reactivate_action",
                    product: "air"
                  }), ": 사용자의 크리덴셜을 재발급합니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "suspend_action",
                    product: "air"
                  }), ": 사용자를 일시적으로 비활성화합니다. 일시 중지된 사용자는 출입할 수 없습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "delete_action",
                    product: "air"
                  }), ": 사용자를 시스템에서 삭제합니다."]
                }), "\n"]
              }), "\n"]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "after_suspend_user_reactivate_action",
          product: "air"
        }), " 옵션은 일시 중지된 사용자에게만 표시됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteUser",
      children: "사용자 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "삭제한 사용자는 복구할 수 없습니다. 삭제하기 전에 반드시 확인하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteSingleUser",
      children: "개별 사용자"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 삭제할 사용자를 클릭하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 세부 정보에서 ", (0,jsx_runtime.jsx)("span", {
            className: "air-remove",
            children: (0,jsx_runtime.jsx)(IcAirRemove, {})
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-details-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경고 메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_user_yes_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteMultipleUsers",
      children: "일괄 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 삭제할 사용자의 체크박스를 클릭하세요. 1명 이상의 사용자를 선택할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-select.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(IcAirMore, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_action",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-select-remove-opt.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경고 메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_user_yes_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userReport",
      children: "사용자 리포트 생성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 리포트를 생성하여 관리자의 이메일로 전송할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirReport, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " 창이 나타나면 리포트 이름을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-report-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 필터 옵션에서 리포트에 포함할 항목을 선택하세요."
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
      src: "/img/air/bsair-user-report-setting-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), "에서 생성된 리포트를 검색하거나, 수정, 다운로드, 삭제할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchUsers",
      children: "사용자 검색"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록 오른쪽 상단의 검색 입력 필드를 통해 특정 사용자를 빠르게 찾을 수 있습니다. 사용자 이름, 아이디, 전화번호를 기준으로 검색할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-list-search.png"
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