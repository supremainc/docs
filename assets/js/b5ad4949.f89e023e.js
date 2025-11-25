"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35892"], {
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
91713: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_04_user_management_bulk_users_mdx_b5a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-04-user-management-bulk-users-mdx-b5a.json
var site_docs_platform_biostar_air_04_user_management_bulk_users_mdx_b5a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/adding-users-in-bulk","title":"일괄 작업으로 사용자 추가하기","description":"BioStar Air Portal에서 CSV 파일 업로드를 사용하여 여러 사용자를 한 번에 효율적으로 추가하는 방법, 대량 출입 등급을 구성하는 방법, 프로필 이미지를 관리하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/04-user-management-bulk-users.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/adding-users-in-bulk","permalink":"/docs/platform/biostar_air/adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/04-user-management-bulk-users.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"adding-users-in-bulk","title":"일괄 작업으로 사용자 추가하기","description":"BioStar Air Portal에서 CSV 파일 업로드를 사용하여 여러 사용자를 한 번에 효율적으로 추가하는 방법, 대량 출입 등급을 구성하는 방법, 프로필 이미지를 관리하는 방법을 안내합니다.","keywords":["사용자 관리","BioStar Air","대량 사용자"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"사용자 관리하기","permalink":"/docs/platform/biostar_air/user-management-user-list"},"next":{"title":"사용자 그룹 관리하기","permalink":"/docs/platform/biostar_air/managing-user-groups"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/04-user-management-bulk-users.mdx


const frontMatter = {
	id: 'adding-users-in-bulk',
	title: '일괄 작업으로 사용자 추가하기',
	description: 'BioStar Air Portal에서 CSV 파일 업로드를 사용하여 여러 사용자를 한 번에 효율적으로 추가하는 방법, 대량 출입 등급을 구성하는 방법, 프로필 이미지를 관리하는 방법을 안내합니다.',
	keywords: [
		'사용자 관리',
		'BioStar Air',
		'대량 사용자'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "CSV 템플릿 다운로드",
  "id": "downloadCSVTemplate",
  "level": 2
}, {
  "value": "CSV 파일 준비",
  "id": "preparing-the-csv-file",
  "level": 2
}, {
  "value": "주요 입력 필드",
  "id": "keyInputFields",
  "level": 3
}, {
  "value": "커스텀 Wiegand 형식 지원",
  "id": "커스텀-wiegand-형식-지원",
  "level": 3
}, {
  "value": "여러 카드 지원",
  "id": "여러-카드-지원",
  "level": 3
}, {
  "value": "CSV 파일 업로드",
  "id": "uploading-the-csv-file",
  "level": 2
}, {
  "value": "CSV 가져오기 검증",
  "id": "csv-가져오기-검증",
  "level": 3
}, {
  "value": "사용자 프로필 이미지 업로드",
  "id": "uploadProfileImages",
  "level": 2
}, {
  "value": "일괄 업로드 마무리",
  "id": "finalizing-the-bulk-upload",
  "level": 2
}, {
  "value": "문제 해결",
  "id": "문제-해결",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
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
  }, {Cmd, DocLink, IcAirUpface, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirUpface) _missingMdxReference("IcAirUpface", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 관리자가 CSV 파일을 사용하여 여러 사용자를 한 번에 추가할 수 있습니다. 이 기능은 직원 온보딩, 사이트 업그레이드 또는 임시 출입 요구 사항을 효율적으로 처리하는 데 유용합니다."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "여러 사용자를 일괄 추가하는 전체 과정을 단계별로 안내하는 다음 동영상을 참고하세요."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "gOi2nP0Ag5o"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloadCSVTemplate",
      children: "CSV 템플릿 다운로드"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 안내에 따라 CSV 템플릿 파일을 다운로드하세요."
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_btn",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " 패널이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_download_btn_text",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-download-csv-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 템플릿 파일(", (0,jsx_runtime.jsx)(_components.em, {
            children: "biostar-import-user-csv-example.csv"
          }), ")을 로컬에 저장하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparing-the-csv-file",
      children: "CSV 파일 준비"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSV 템플릿을 다운로드하고 각 사용자에 대한 필수 세부 정보를 입력하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keyInputFields",
      children: "주요 입력 필드"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "입력할 주요 필드는 아래와 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header11",
            product: "air",
            className: "bold"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), "에서 그룹 아이디를 확인할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-list-check-ids.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header12",
            product: "air",
            className: "bold"
          }), " : ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), "에서 출입 레벨 아이디를 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "full_access",
            product: "air",
            className: "bold"
          }), "은 항상 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1"
          }), "로 설정됩니다. 쉼표(", (0,jsx_runtime.jsx)(_components.code, {
            children: ","
          }), ")를 구분자로 여러 출입 레벨을 지정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-ac-level-list-check-ids.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header7",
            product: "air",
            className: "bold"
          }), ": 이메일을 통해 초대장을 발송한다면 필수로 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header8",
            product: "air",
            className: "bold"
          }), ": 모바일 SMS를 통해 초대장을 발송한다면 필수로 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header7",
          product: "air",
          className: "bold"
        }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header8",
          product: "air",
          className: "bold"
        }), "는 중복되면 안됩니다. 중복된 값을 입력하고 CSV 파일을 업로드하면 오류가 발생할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "커스텀-wiegand-형식-지원",
      children: "커스텀 Wiegand 형식 지원"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["시설 코드, 세그먼트, 패리티 비트 등의 정보를 포함한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 Wiegand 형식을 자유롭게 구성"
          }), "할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HID Corporate 1000 및 iClass SE, SEOS 형식을 지원합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV 템플릿"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "각 정의된 형식(사용자 정의 또는 기본)은 CSV 파일에서 별도의 열로 표시됩니다."
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_1",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_2",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_3",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_4",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_5",
                  product: "air",
                  className: "bold"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["여러 항목을 단일 필드에 입력할 때는 슬래시(", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), ")로 구분하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["카드 이름 주위에는 작은 따옴표(", (0,jsx_runtime.jsx)(_components.code, {
                children: "'"
              }), ")를 사용할 수 있습니다. 큰 따옴표(", (0,jsx_runtime.jsx)(_components.code, {
                children: "\""
              }), ")를 사용하면 오류가 발생할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "✅ 'CardName' | ❌ \"CardName\""
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "예시"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["시설 코드가 있는 경우: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "1234567-100-'Main Office Card'"
                }), " (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "CardID"
                }), "-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "FacilityCode"
                }), "-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "'CardName'"
                }), ")"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["여러 세그먼트가 있는 경우: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "12-3456-78-'Lab Entry Card'"
                })]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "여러-카드-지원",
      children: "여러 카드 지원"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자당 최대 8개의 CSN 또는 Wiegand 카드 형식을 할당할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV 템플릿"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "단일 카드는 CSN 카드 번호를 입력합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["여러 카드를 등록할 때는 CSN 카드 번호를 슬래시(", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), ")로 구분하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "카드 이름 지정 형식"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CSN"
        }), "-", (0,jsx_runtime.jsx)(_components.code, {
          children: "'Card Name'"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["예시: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "1234567-'Main Entry'"
        }), " / ", (0,jsx_runtime.jsx)(_components.em, {
          children: "7654321-'Back Door'"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploading-the-csv-file",
      children: "CSV 파일 업로드"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSV 파일 준비를 완료하면 업로드하세요."
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_btn",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " 패널이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_csv_text_select_file",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-select-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "앞서 준비한 CSV 파일을 선택하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자의 프로필 이미지가 준비되어 있다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "face_register_upload_face_photo",
              product: "air"
            }), " 옵션을 활성화하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#uploadProfileImages",
              children: "다음 문서"
            }), "를 참고하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_popup_import_users_btn_next",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_data_preview",
            product: "air"
          }), " 섹션에서 첫번째 열의 데이터 정확성을 검토하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-csv-data-preview.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["데이터에 문제가 없다면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "업로드를 완료하면 다음 화면에서 사용자의 이미지를 불러오거나 모바일 카드를 일괄로 발급할 수 있습니다. 원하는 작업을 선택하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-csv-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 파일 이름에는 쉼표(", (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            }), ")를 제외한 특수 문자를 사용할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["업로드할 수 있는 CSV 파일의 최대 크기는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5MB"
            }), "입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_actions_import_title",
              product: "air"
            }), " 패널의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_actions_import_upload_text",
              product: "air"
            }), " 필드에 CSV 파일을 드래그 앤 드롭하여 업로드할 수도 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-가져오기-검증",
      children: "CSV 가져오기 검증"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CSV 업로드 프로세스가 개선되어 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "행별 오류 피드백"
      }), "을 제공하므로 문제 해결이 더 쉬워졌습니다. 업로드 중 오류가 발생하면 오류 내용을 확인할 수 있는 상세 보고서를 제공합니다. 보고서를 다운로드하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_actions_import_download_btn_text",
        product: "air"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-csv-error.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploadProfileImages",
      children: "사용자 프로필 이미지 업로드"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "프로필 이미지는 CSV 파일과 함께 자동으로 업로드하거나 나중에 수동으로 일괄 업로드할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-with-face-photo.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 파일의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header1",
            product: "air",
            className: "bold"
          }), " 열과 일치하는 프로필 이미지 파일을 준비하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예, ", (0,jsx_runtime.jsx)(_components.em, {
            children: "601.jpg"
          }), " 파일은 사용자 아이디 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "601"
          }), "에 해당합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " 패널에서 CSV 파일을 업로드 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_face_photo",
            product: "air"
          }), " 옵션을 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_face_photo_select_folder",
            product: "air"
          }), " 버튼을 클릭한 후 프로필 이미지가 저장된 폴더를 선택하세요."]
        }), "\n"]
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["프로필 이미지가 CSV 파일을 업로드할 때 준비되지 않았다면 사용자 목록의 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "image_upload_action",
          product: "air"
        }), "(", (0,jsx_runtime.jsx)(IcAirUpface, {}), ") 기능을 사용하여 나중에 추가할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-add-bulk-import-user-profile-images.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "finalizing-the-bulk-upload",
      children: "일괄 업로드 마무리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모든 사용자 데이터와 이미지를 업로드하면 시스템이 항목을 처리하고 새 사용자가 할당된 크리덴셜과 함께 사용자 목록에 나타납니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "문제-해결",
      children: "문제 해결"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CSV 업로드와 관련하여 문제가 발생한다면, 일반적인 문제를 해결하는 데 도움이 되는 보다 자세한 문서를 확인하세요. 이 문서에는 데이터를 검증하고 중복을 제거하는 데 도움이 되는 엑셀 수식도 포함되어 있습니다. ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/troubleshooting-adding-users-in-bulk"
      })]
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