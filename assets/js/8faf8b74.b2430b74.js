"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7260"], {
47825: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_view_users_mdx_8fa_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-view-users-mdx-8fa.json
var site_docs_platform_biostar_x_view_users_mdx_8fa_namespaceObject = JSON.parse('{"id":"platform/biostar_x/view-users","title":"사용자 탐색하기","description":"사용자 목록 조회, 검색, 정렬 및 관리 기능을 사용하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/view-users.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/view-users","permalink":"/docs/platform/biostar_x/view-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/view-users.mdx","tags":[],"version":"current","frontMatter":{"id":"view-users","title":"사용자 탐색하기","description":"사용자 목록 조회, 검색, 정렬 및 관리 기능을 사용하는 방법을 안내합니다.","keywords":["사용자","검색"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"사용자 고급 설정하기","permalink":"/docs/platform/biostar_x/set-user-advanced"},"next":{"title":"사용자 관리하기","permalink":"/docs/platform/biostar_x/user-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/view-users.mdx


const frontMatter = {
	id: 'view-users',
	title: '사용자 탐색하기',
	description: '사용자 목록 조회, 검색, 정렬 및 관리 기능을 사용하는 방법을 안내합니다.',
	keywords: [
		'사용자',
		'검색'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자 목록 보기",
  "id": "view-user-list",
  "level": 2
}, {
  "value": "보기 옵션 선택",
  "id": "select-view-options",
  "level": 2
}, {
  "value": "사용자 목록 페이지 이동",
  "id": "user-list-page-moves",
  "level": 3
}, {
  "value": "사용자 목록 표시 개수 변경",
  "id": "change-number-of-users-list-indications",
  "level": 3
}, {
  "value": "사용자 목록 정렬",
  "id": "user-list-alignment",
  "level": 3
}, {
  "value": "사용자 검색",
  "id": "user-search",
  "level": 2
}, {
  "value": "일반 검색",
  "id": "general-search",
  "level": 3
}, {
  "value": "고급 검색",
  "id": "advanced-search",
  "level": 3
}, {
  "value": "사용자 목록 열(Column) 설정",
  "id": "user-list-column-settings",
  "level": 2
}, {
  "value": "사용자 목록 인쇄",
  "id": "print-user-list",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdvSearch, IcAscend, IcBw, IcDescend, IcFirst, IcFw, IcLast, IcMoreW, IcTips, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdvSearch) _missingMdxReference("IcAdvSearch", true);
  if (!IcAscend) _missingMdxReference("IcAscend", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcDescend) _missingMdxReference("IcDescend", true);
  if (!IcFirst) _missingMdxReference("IcFirst", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!IcLast) _missingMdxReference("IcLast", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTips) _missingMdxReference("IcTips", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록 페이지에서 등록된 사용자를 조회하고 관리하는 방법을 안내합니다. 일반 검색과 고급 검색을 통해 원하는 사용자를 빠르게 찾을 수 있으며, 목록 정렬, 열 설정, 인쇄 등의 기능을 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " 페이지에 접근하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), "를 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), "를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-user-list",
      children: "사용자 목록 보기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록 페이지에서는 사용자의 기본 정보와 상태를 확인할 수 있으며, 각 사용자의 상세 정보를 열람하거나 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록은 등록된 사용자를 모두 표시하며, 각 사용자의 아이디, 이름, 이메일 주소, 사용 기간, 등록한 크레덴셜 현황, 상태를 기본으로 확인할 수 있습니다. 사용자는 등록한 순으로 목록에 표시됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["개별 사용자의 상세 정보를 확인하려면 사용자 목록에서 원하는 사용자를 클릭하세요. 사용자의 프로필 정보가 화면 오른쪽에 표시됩니다. 사용자 프로필 정보에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " 버튼을 클릭하면 사용자의 상세 정보를 수정할 수 있는 페이지로 이동합니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-list-view-profile.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 상세 정보를 수정하려면 사용자 목록에서 원하는 사용자를 더블 클릭하세요. 사용자의 상세 정보를 수정할 수 있는 페이지로 이동합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 정보 수정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "edit-user",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 목록에서 열(Column) 레이아웃을 변경할 수 있습니다. 열 레이아웃 변경에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#user-list-column-settings",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "select-view-options",
      children: "보기 옵션 선택"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 오른쪽 상단의 도구 버튼을 이용해 사용자 목록의 보기 옵션을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-list-page-moves",
      children: "사용자 목록 페이지 이동"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록에는 기본 10명의 사용자를 표시합니다. 화면 상단의 버튼을 클릭해 다른 페이지로 이동할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-pagenation.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFirst, {}), " : 사용자 목록의 첫 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFw, {}), " : 사용자 목록의 이전 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcBw, {}), " : 사용자 목록의 다음 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcLast, {}), " : 사용자 목록의 마지막 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 페이지로 이동하려면 숫자 입력 필드에 페이지 번호를 입력하고 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " 키를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-number-of-users-list-indications",
      children: "사용자 목록 표시 개수 변경"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록에 표시되는 사용자 수를 변경할 수 있습니다. 화면 오른쪽 상단의 목록 선택 상자에서 원하는 사용자 수를 선택하세요. 선택할 수 있는 옵션은 50명, 100명, 200명입니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-select-row.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-list-alignment",
      children: "사용자 목록 정렬"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자 목록의 정렬 기준을 변경할 수 있습니다. 목록 상단의 열 제목을 클릭하면 오름차순 또는 내림차순으로 정렬할 수 있습니다. 예를 들어, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.table.firstName"
      }), " 열 제목을 클릭하면 사용자의 이름을 기준으로 오름차순 또는 내림차순으로 정렬됩니다. 이때 클릭한 항목에는 오름차순(", (0,jsx_runtime.jsx)(IcAscend, {}), ") 또는 내림차순(", (0,jsx_runtime.jsx)(IcDescend, {}), ") 아이콘이 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-order.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-search",
      children: "사용자 검색"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "특정 사용자를 검색하는 방법을 안내합니다. 사용자 목록 페이지에서 검색 기능을 사용하여 원하는 사용자를 빠르게 찾을 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "검색 시 사용하는 키워드는 대소문자를 구분하지 않습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자의 기본 정보가 입력되어 있어야 검색할 수 있습니다. 사용자의 기본 정보 입력에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user-basic-info",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "general-search",
      children: "일반 검색"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자의 아이디, 이름을 기준으로 검색할 수 있습니다. 화면 상단의 검색 입력 필드에 원하는 키워드를 입력하고 ", (0,jsx_runtime.jsx)(Kbd, {
        children: "Enter"
      }), " 키를 누르세요. 해당 키워드와 일치하는 사용자가 목록에 표시됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
        children: "All Users"
      }), " 항목에서 검색된 사용자의 수를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-search-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-search",
      children: "고급 검색"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자의 아이디, 이름, 이메일 주소, 전화번호 등을 특정해 검색할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 상단의 검색 입력 필드 옆에 있는 ", (0,jsx_runtime.jsx)(IcAdvSearch, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["고급 검색 창이 열리면, 원하는 검색 조건을 입력하고 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " 키를 누르거나 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.search"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-advanced-search.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["입력 필드 중 ", (0,jsx_runtime.jsx)(IcTips, {}), " 아이콘이 표시된 항목은 개인 정보 DB 암호화로 인해 전문만 검색할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["고급 검색 창에서 입력한 조건을 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.clearAll"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-list-column-settings",
      children: "사용자 목록 열(Column) 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록에서 표시되는 열(Column) 설정을 변경할 수 있습니다. 열 설정을 통해 표시할 열을 선택하거나 열의 순서를 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.columnLayout"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), " 창이 나타나면 원하는 열을 선택하거나 선택 해제하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-list-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "열의 순서를 변경하려면 원하는 열을 클릭한 채로 드래그하여 위치를 변경하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["열 레이아웃 설정을 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.dialog.columnSetting.reset"
        }), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "print-user-list",
      children: "사용자 목록 인쇄"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "현재 보고 있는 사용자 목록을 PDF 또는 SVG 파일로 저장할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.print"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.dialog.header",
            product: "2"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.fileFormat",
            product: "2"
          }), " 옵션에서 원하는 포맷을 선택하고 나머지 옵션을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-print-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.print"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "브라우저를 통해 열리는 PDF 또는 SVG 파일을 인쇄할 수 있습니다."
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