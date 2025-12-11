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
var site_docs_platform_biostar_air_04_user_management_bulk_users_mdx_b5a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/adding-users-in-bulk","title":"일괄 작업으로 사용자 추가하기","description":"BioStar Air Portal에서 CSV 파일 업로드를 사용하여 여러 사용자를 한 번에 효율적으로 추가하는 방법, 대량 출입 등급을 구성하는 방법, 프로필 이미지를 관리하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/04-user-management-bulk-users.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/adding-users-in-bulk","permalink":"/platform/biostar_air/adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/04-user-management-bulk-users.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"adding-users-in-bulk","title":"일괄 작업으로 사용자 추가하기","description":"BioStar Air Portal에서 CSV 파일 업로드를 사용하여 여러 사용자를 한 번에 효율적으로 추가하는 방법, 대량 출입 등급을 구성하는 방법, 프로필 이미지를 관리하는 방법을 안내합니다.","keywords":["사용자 관리","BioStar Air","대량 사용자"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"개별 사용자 추가하기","permalink":"/platform/biostar_air/adding-individual-users"},"next":{"title":"일괄 사용자 추가 문제 해결하기","permalink":"/platform/biostar_air/troubleshooting-adding-users-in-bulk"}}')
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




const toc = [{
  "value": "기능 개요",
  "id": "feature-overview",
  "level": 2
}, ..._biostarair_customer_notice/* .toc */.RM, {
  "value": "사용자 관리로 이동",
  "id": "navigating-to-bulk-user-upload",
  "level": 2
}, {
  "value": "CSV 파일 준비",
  "id": "preparing-the-csv-file",
  "level": 2
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
  "id": "uploading-user-profile-images",
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
  }, {DocLink, YouTube} = _components;
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "기능 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 관리자가 CSV 파일을 사용하여 여러 사용자를 한 번에 추가할 수 있습니다. 이 기능은 직원 온보딩, 사이트 업그레이드 또는 임시 출입 요구 사항을 효율적으로 처리하는 데 유용합니다."
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "gOi2nP0Ag5o"
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-bulk-user-upload",
      children: "사용자 관리로 이동"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "여러 사용자를 일괄 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar Air 포털에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Management"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Users"
          }), "를 클릭하면 사용자 목록이 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Download CSV Template"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparing-the-csv-file",
      children: "CSV 파일 준비"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSV 템플릿을 다운로드하고 각 사용자에 대한 필수 세부 정보를 입력하세요. 주요 필드는 다음과 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User Group ID"
          }), ": BioStar Air 포털의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Group"
          }), " 화면에서 이 정보를 가져옵니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Level ID"
          }), ": BioStar Air 포털의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Levels"
          }), " 화면에서 이 정보를 가져옵니다. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Full access"
          }), "는 항상 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1"
          }), "로 설정됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Email Address"
          }), ": 이메일을 통해 초대장을 발송하는 경우 필수입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mobile Phone Number"
          }), ": 모바일을 통해 초대장을 발송하는 경우 필수입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "이메일 주소와 전화 번호는 중복되면 안됩니다. 중복된 값은 업로드 오류가 발생할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "커스텀-wiegand-형식-지원",
      children: "커스텀 Wiegand 형식 지원"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["시설 코드, 세그먼트, 패리티 비트 등 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "모든 Wiegand 형식을 자유롭게 구성"
          }), "할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HID Corporate 1000 및 iClass SE, SEOS 형식을 지원합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV 업로드 템플릿"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "각 정의된 형식(사용자 정의 또는 기본)은 별도의 열로 표시됩니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "예시"
              }), ":"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["시설 코드가 있는 경우: ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "1234567-100-'Main Office Card'"
                  }), " (CardID-FacilityCode-'CardName')"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["여러 세그먼트가 있는 경우: ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "12-3456-78-'Lab Entry Card'"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["여러 항목을 단일 필드에 입력할 때는 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), "로 구분합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["카드 이름 주위에는 작은 따옴표 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'"
              }), "를 사용할 수 있습니다. 큰 따옴표 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "\""
              }), "를 사용하면 오류가 발생하므로 피해야 합니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "✅ 'CardName' | ❌ \"CardName\""
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "여러-카드-지원",
      children: "여러 카드 지원"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자당 최대 8개의 카드를 할당할 수 있습니다. (CSN 또는 Wiegand)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CSV 업로드 형식:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "단일 카드: CSN을 입력합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["여러 카드: CSN을 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), "로 구분합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["카드 이름 지정 형식: ", (0,jsx_runtime.jsx)(_components.em, {
                children: "CSN-'Card Name'"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["예, ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "1234567-'Main Entry'"
                }), " / ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "7654321-'Back Door'"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploading-the-csv-file",
      children: "CSV 파일 업로드"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSV 파일을 준비가 완료되면 업로드하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["파일을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Upload CSV"
          }), " 창으로 드래그 앤 드롭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "정확성을 확인하려면 미리보기 창에서 열 데이터를 검토하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "데이터에 문제가 없다면 업로드하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-가져오기-검증",
      children: "CSV 가져오기 검증"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CSV 업로드 프로세스가 개선되어 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "행별 오류 피드백"
      }), "을 제공하므로 문제 해결이 더 쉬워졌습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploading-user-profile-images",
      children: "사용자 프로필 이미지 업로드"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "프로필 이미지는 CSV 파일과 함께 자동으로 업로드할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 이미지 파일 이름이 CSV 파일의 사용자 아이디와 일치하는지 확인하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["예, ", (0,jsx_runtime.jsx)(_components.em, {
              children: "601.jpg"
            }), "는 사용자 아이디 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "601"
            }), "에 해당합니다."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 이미지를 선택하고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bulk User Images"
          }), " 업로드 영역으로 드래그하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이미지가 CSV 업로드 시점에 준비되지 않았다면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Image Upload"
          }), " 버튼을 사용하여 나중에 추가할 수 있습니다."]
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
              children: ".png"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["파일 크기 제한: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1MB per image"
            })]
          }), "\n"]
        }), "\n"]
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