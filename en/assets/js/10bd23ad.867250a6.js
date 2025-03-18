"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["222"], {
"6506": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_export_import_user_info_mdx_10b_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-export-import-user-info-mdx-10b.json
var site_docs_platform_biostar_x_export_import_user_info_mdx_10b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/export-import-user-info","title":"사용자 정보 내보내기/불러오기","description":"사용자 정보를 내보내거나 불러오는 방법에 대해 안내합니다. 이 기능을 통해 이전 버전 또는 다른 서버의 사용자 정보를 활용할 수 있습니다.","source":"@site/docs/platform/biostar_x/export-import-user-info.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/export-import-user-info","permalink":"/docs/en/platform/biostar_x/export-import-user-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/export-import-user-info.mdx","tags":[],"version":"current","frontMatter":{"id":"export-import-user-info","title":"사용자 정보 내보내기/불러오기","description":"사용자 정보를 내보내거나 불러오는 방법에 대해 안내합니다. 이 기능을 통해 이전 버전 또는 다른 서버의 사용자 정보를 활용할 수 있습니다.","keywords":["사용자 정보","내보내기","불러오기","CSV"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"사용자 출입 이력 추적하기","permalink":"/docs/en/platform/biostar_x/trace-user-access-log"},"next":{"title":"사용자 템플릿 관리하기","permalink":"/docs/en/platform/biostar_x/user-template"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/export-import-user-info.mdx


const frontMatter = {
	id: 'export-import-user-info',
	title: '사용자 정보 내보내기/불러오기',
	description: '사용자 정보를 내보내거나 불러오는 방법에 대해 안내합니다. 이 기능을 통해 이전 버전 또는 다른 서버의 사용자 정보를 활용할 수 있습니다.',
	keywords: [
		'사용자 정보',
		'내보내기',
		'불러오기',
		'CSV'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CSV 파일 활용",
  "id": "csv-파일-활용",
  "level": 2
}, {
  "value": "CSV 파일로 내보내기",
  "id": "csv-파일로-내보내기",
  "level": 3
}, {
  "value": "CSV 파일로 불러오기",
  "id": "csv-파일로-불러오기",
  "level": 3
}, {
  "value": "데이터 파일 활용",
  "id": "데이터-파일-활용",
  "level": 2
}, {
  "value": "데이터 파일로 내보내기",
  "id": "데이터-파일로-내보내기",
  "level": 3
}, {
  "value": "데이터 파일로 불러오기",
  "id": "데이터-파일로-불러오기",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcMore} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMore) _missingMdxReference("IcMore", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 정보를 내보내거나 불러오는 방법에 대해 안내합니다. 이 기능을 통해 이전 버전 또는 다른 서버의 사용자 정보를 활용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "데이터 백업 및 복원"
          }), ": 사용자 정보를 안전하게 백업할 수 있으며, 필요 시 데이터를 복원할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "서버 간 데이터 이전"
          }), ": 다른 서버로 사용자 정보를 쉽게 이전할 수 있어, 서버 교체나 업그레이드 시 유용합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "데이터 통합"
          }), ": 여러 소스에서 사용자 정보를 수집하여 하나의 서버에 통합할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "효율적인 관리"
          }), ": 대량의 사용자 정보를 일괄적으로 관리할 수 있어, 시간과 노력을 절약할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자 정보는 CSV 파일과 데이터 파일(", (0,jsx_runtime.jsx)(_components.em, {
        children: ".tgz"
      }), ") 형식으로 내보내거나 불러올 수 있습니다. 사용자의 환경에 따라 선호하는 방식을 선택해 진행하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CSV 파일 불러오기와 데이터 파일 불러오기 차이점"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSV 파일 불러오기"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "단순 텍스트 기반의 CSV 형식으로, 사용자 목록의 선택된 정보만 포함합니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "사용자 정보를 백업 또는 복원을 위한 소규모 업데이트나 단순 데이터 관리에 적합합니다."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "데이터 파일 불러오기"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["프로필 사진, 인증 모드, 지문, 얼굴 등 다양한 인증 정보를 포함하는 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "*.tgz"
                }), " 압축 파일 형식입니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "대량의 사용자 정보를 장치로 직접 전송하거나, 복합 인증 데이터를 포함할 때 사용하세요."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csv-파일-활용",
      children: "CSV 파일 활용"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록에서 선택한 사용자 정보를 CSV 파일로 저장하거나, CSV 파일에서 사용자 정보를 불러올 수 있습니다. CSV 파일을 이용해 간편하게 사용자 정보를 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 파일을 불러오기 전에, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에 추가되지 않은 커스텀 사용자 필드 정보가 있다면 CSV 파일을 올바르게 가져올 수 없습니다. 커스텀 사용자 필드 추가에 대한 자세한 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "영어와 한국어를 제외한 다른 언어로 사용자 정보를 입력했다면 CSV 파일을 UTF-8 형식으로 저장하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-파일로-내보내기",
      children: "CSV 파일로 내보내기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "User"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록에서 내보내려는 사용자의 가장 왼쪽에 체크 박스를 클릭하세요. 모든 사용자를 선택하려면 사용자 목록 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Select All"
          }), " 체크 박스를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 더보기(", (0,jsx_runtime.jsx)(IcMore, {}), ") 버튼을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Export"
          }), " > ", (0,jsx_runtime.jsx)(Cmd, {
            children: "CSV"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자의 로컬 드라이브에 CSV 파일이 다운로드됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-파일로-불러오기",
      children: "CSV 파일로 불러오기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "User"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 더보기(", (0,jsx_runtime.jsx)(IcMore, {}), ") 버튼을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Import"
          }), " > ", (0,jsx_runtime.jsx)(Cmd, {
            children: "CSV"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 파일을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "열기"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["불러오기 시작 행을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.next"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CSV 파일의 사용자 데이터 필드와 BioStar X의 사용자 데이터 필드가 자동 매핑되어 표시됩니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.reMapping"
          }), " 버튼을 클릭하면 이름이 동일한 필드까지 재매핑할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이미 사용자 아이디가 등록된 사용자 데이터를 유지할지 CSV 파일의 정보로 덮어쓸지 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.next"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "불러올 CSV 파일에 새로운 열을 추가하면 사용자 정보를 불러올 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CSV 불러오기를 통해 모바일 출입 카드를 발급할 수 있습니다. 레귤러 사이트에서 불러오기를 완료하면 에어팝 포털(Airfob Portal)에서 모바일 출입 카드당 1개의 크레딧이 차감됩니다. 모바일 출입 카드를 발급하지 않으려면 매핑을 해제하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CSV 파일에 이미 등록된 사용자에게 발급된 모바일 출입 카드와 동일한 데이터가 있다면, 데이터를 유지하거나 덮어쓸 수 있습니다. 데이터를 유지하면 기존 모바일 출입 카드의 데이터가 유지됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CSV 파일에 이미 등록된 사용자에게 발급된 모바일 출입 카드와 다른 데이터가 있다면, 데이터를 유지하면 기존 모바일 출입 카드가 유지되고, 덮어쓸 경우 해당 사용자에게 새 모바일 출입 카드를 발급됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 불러오기를 통해 모바일 출입 카드를 발급할 때 다이나믹 사이트를 사용한다면, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mobile_start_datetime"
            }), " 및 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mobile_expiry_datetime"
            }), " 필드의 값을 반드시 입력해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2 QR"
            }), "은 CSV 불러오기를 통해 발급할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 불러오기를 통해 사용자의 비주얼 페이스를 등록할 수 있습니다. 비주얼 페이스 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "enroll-credential#enroll-visualface",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 불러오기를 통해 사용자의 PIN을 등록할 수 있습니다. PIN 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "enroll-credential#enroll-accesspin",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "데이터-파일-활용",
      children: "데이터 파일 활용"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["외부 저장매체(USB)에 사용자 정보를 저장해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 또는 장치로 불러올 수 있습니다. 최대 500,000명의 사용자 정보를 서버에서 장치로 옮기거나 장치에서 장치로 옮길 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["오래된 펌웨어 버전을 사용하는 장치에서 내보내기한 데이터는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "로 불러올 수 없습니다. 항상 최신 버전의 펌웨어를 사용하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 최신 버전을 사용한다면 오래된 펌웨어 버전을 사용하는 장치에서 데이터를 불러올 수 없습니다. 장치의 펌웨어를 호환하는 버전으로 업그레이드하세요. 호환하는 장치와 펌웨어 버전은 아래를 참고하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 2 펌웨어 1.9.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation A2 펌웨어 1.8.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation 2 펌웨어 1.4.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 펌웨어 2.2.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 펌웨어 1.3.1 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 2a 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "서로 다른 지문 템플릿 형식을 사용한다면 데이터를 가져올 수 없습니다. 예를 들어, 슈프리마 지문 템플릿 형식을 사용하는 장치에서 내보내기한 데이터를 ISO 지문 템플릿 형식을 사용하는 장치에서 가져올 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["FaceStation F2에서 비주얼 페이스가 등록된 사용자 데이터를 가져올 때, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 서버나 모바일 장치를 통해 이미 등록된 비주얼 페이스 데이터가 있다면 기존 데이터가 새 데이터로 대체될 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "데이터-파일로-내보내기",
      children: "데이터 파일로 내보내기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "User"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록에서 내보내려는 사용자의 가장 왼쪽에 체크 박스를 클릭하세요. 모든 사용자를 선택하려면 사용자 목록 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Select All"
          }), " 체크 박스를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 더보기(", (0,jsx_runtime.jsx)(IcMore, {}), ") 버튼을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Export"
          }), " > ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Data File"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "내보내기 창이 나타나면 데이터 파일을 적용할 장치를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.acknowledge"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자의 로컬 드라이브에 데이터 파일(", (0,jsx_runtime.jsx)(_components.em, {
        children: "*.tgz"
      }), ")이 다운로드됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "데이터 파일을 불러올 장치는 USB 포트를 지원하는 장치만 선택할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "내보내기 창에서 선택한 장치와 데이터 파일을 적용할 장치가 일치해야 합니다. 그렇지 않으면 장치에서 데이터 파일을 인식할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "데이터 파일을 내보낼 때, 아래 사용자 정보를 파일 형태로 저장합니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "프로필 사진"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "ID"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "이름"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "유효 기간"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "출입 그룹별"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "PIN"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "개인인증모드"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "크리덴셜(얼굴, 지문, 카드, 모바일 카드, 비주얼 페이스, BioStar 2 QR, QR/Barcode)"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "1:1 보안 등급"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "데이터-파일로-불러오기",
      children: "데이터 파일로 불러오기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "User"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 더보기(", (0,jsx_runtime.jsx)(IcMore, {}), ") 버튼을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Import"
          }), " > ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Data File"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["데이터 파일(", (0,jsx_runtime.jsx)(_components.em, {
            children: "*.tgz"
          }), ")을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "열기"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "데이터 파일 불러오기를 성공하면 완료 메시지가 표시됩니다."
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
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