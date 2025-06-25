"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3222"], {
4043: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_export_import_user_info_mdx_10b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-export-import-user-info-mdx-10b.json
var site_docs_platform_biostar_x_export_import_user_info_mdx_10b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/export-import-user-info","title":"사용자 정보 내보내기/가져오기","description":"사용자 정보를 내보내거나 가져오기를 통해 이전 버전 또는 다른 서버의 사용자 정보를 활용할 수 있습니다.","source":"@site/docs/platform/biostar_x/export-import-user-info.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/export-import-user-info","permalink":"/docs/platform/biostar_x/export-import-user-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/export-import-user-info.mdx","tags":[],"version":"current","frontMatter":{"id":"export-import-user-info","title":"사용자 정보 내보내기/가져오기","description":"사용자 정보를 내보내거나 가져오기를 통해 이전 버전 또는 다른 서버의 사용자 정보를 활용할 수 있습니다.","keywords":["사용자 정보","내보내기","가져오기"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"사용자 출입 이력 추적하기","permalink":"/docs/platform/biostar_x/trace-user-access-log"},"next":{"title":"출입 그룹 관리하기","permalink":"/docs/platform/biostar_x/view-user-by-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/export-import-user-info.mdx


const frontMatter = {
	id: 'export-import-user-info',
	title: '사용자 정보 내보내기/가져오기',
	description: '사용자 정보를 내보내거나 가져오기를 통해 이전 버전 또는 다른 서버의 사용자 정보를 활용할 수 있습니다.',
	keywords: [
		'사용자 정보',
		'내보내기',
		'가져오기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*PIN 등록 > CSV 가져오기*/


const toc = [{
  "value": "CSV 내보내기/가져오기",
  "id": "csv-exportimport",
  "level": 2
}, {
  "value": "CSV 내보내기",
  "id": "csv-export",
  "level": 3
}, {
  "value": "CSV 가져오기",
  "id": "import-csv",
  "level": 3
}, {
  "value": "데이터 파일 내보내기/가져오기",
  "id": "exportimport-data-file",
  "level": 2
}, {
  "value": "데이터 내보내기",
  "id": "export-data",
  "level": 3
}, {
  "value": "데이터 가져오기",
  "id": "import-data",
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
  }, {Cmd, Details, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 정보를 내보내거나 가져오기를 통해 이전 버전 또는 다른 서버의 사용자 정보를 활용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csv-exportimport",
      children: "CSV 내보내기/가져오기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 사용자 정보를 CSV 파일로 저장하거나, 저장된 CSV 파일을 불러올 수 있습니다. CSV 파일을 이용하여 간편하게 사용자 정보를 옮길 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에 추가하지 않은 커스텀 사용자 필드 정보가 있다면 CSV 파일을 올바르게 가져올 수 없습니다. 커스텀 사용자 필드를 추가하는 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#user-and-device-management",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "영어와 한국어를 제외한 다른 언어로 사용자 정보가 입력된 경우 CSV 파일을 UTF-8로 저장하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-export",
      children: "CSV 내보내기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 목록에서 CSV 파일로 저장할 사용자의 체크박스를 클릭하세요. 1명 이상의 사용자를 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로컬의 원하는 경로에 CSV 파일을 저장하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "import-csv",
      children: "CSV 가져오기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.csv"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로컬에 저장된 CSV 파일을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.csv.title"
          }), " 창에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.csv.importStartRow"
          }), "을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.continue"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 파일의 사용자 데이터 필드와 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "의 사용자 데이터 필드가 자동으로 매핑되어 나타납니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.csv.reMapping"
          }), "을 클릭하면 이름이 동일한 필드끼리 재매핑됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 이미 사용자 ID가 등록된 사용자 데이터를 유지할 지 CSV 파일의 정보로 덮어쓰기할 지 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.continue"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-03.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSV 파일의 정보를 가져오는 중 오류가 발생했다면 오류가 발생한 CSV 데이터만 다시 확인하여 업로드할 수 있습니다"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CSV 가져오기를 통해 모바일 출입 카드를 발급할 수 있습니다. 레귤러 사이트를 사용할 경우 가져오기가 완료되면 에어팝 포털(Airfob Portal)에서 모바일 출입 카드당 1개의 크레딧이 차감됩니다. 모바일 출입 카드를 발급하지 않으려면 매핑을 해제하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 파일에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에 이미 등록된 사용자에게 발급한 모바일 출입 카드와 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "동일한"
            }), " 데이터가 존재할 경우 데이터 유지 또는 덮어쓰기할 수 있으며, 이 경우 기존 모바일 출입 카드가 유지됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 파일에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에 이미 등록된 사용자에게 발급한 모바일 출입 카드와 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "다른"
            }), " 데이터가 존재할 경우 데이터를 유지하면 기존 모바일 출입 카드가 유지되며, 덮어쓰기할 경우 해당 사용자에게 새 모바일 출입 카드가 발급됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 가져오기를 통해 모바일 출입 카드를 발급할 때 다이나믹 사이트를 사용할 경우 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mobile_start_datetime"
            }), "과 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mobile_expiry_datetime"
            }), " 필드의 값을 반드시 입력해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " QR은 CSV 가져오기를 통해 발급할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 가져오기를 통해 사용자의 얼굴을 등록할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "enroll-credential-face#import-csv",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSV 가져오기를 통해 사용자의 PIN을 등록할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "을 참고하세요. "]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["저장된 CSV 파일에 새로운 열을 추가하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에서 파일을 가져올 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exportimport-data-file",
      children: "데이터 파일 내보내기/가져오기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["외부 저장매체(USB)에 사용자 정보를 저장하여 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "나 장치에서 가져올 수 있습니다. 최대 500,000명의 사용자 정보를 서버에서 장치로 옮기거나 장치에서 장치로 옮길 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["오래된 펌웨어 버전을 사용하는 장치에서 내보내기한 데이터는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "로 불러올 수 없습니다. 항상 최신 버전의 펌웨어를 사용하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "서로 다른 지문 템플릿 형식을 사용할 경우 데이터를 가져올 수 없습니다. 예를 들어, 슈프리마 지문 템플릿 형식을 사용하는 장치에서 내보내기한 데이터를 ISO 지문 템플릿 형식을 사용하는 장치에서 가져올 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["FaceStation F2에서 얼굴 인식 사용자 데이터를 가져올 때 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 서버에 사진 올리기 또는 모바일 장치를 통해 등록한 얼굴 인식 데이터가 이미 존재할 경우 기존 데이터가 덮어씌워집니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "오래된 펌웨어 버전을 사용하는 장치의 데이터를 불러올 수 없습니다. 장치의 펌웨어를 호환하는 버전으로 업그레이드하세요."
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "호환하는 장치와 펌웨어 버전 보기"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
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
            })]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "export-data",
      children: "데이터 내보내기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 목록에서 내보낼 사용자의 체크박스를 클릭하세요. 1명 이상의 사용자를 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.dataFile"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.dataFile.title"
          }), " 창에서 데이터 파일을 적용할 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.ok"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로컬의 원하는 경로에 데이터 파일을 저장하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "데이터 파일 내보내기는 사용자 정보 중 프로필 사진, ID, 이름, 유효 기간, 출입 그룹, PIN, 개인인증모드, 크리덴셜(얼굴, 지문, 카드, 모바일 카드, 얼굴, QR/Barcode), 1:1 보안 등급 정보를 파일 형태로 저장합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "데이터 파일을 적용할 장치를 정확하게 선택하지 않으면 해당 장치에서 데이터 파일을 인식할 수 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "import-data",
      children: "데이터 가져오기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.dataFile"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로컬에 저장된 데이터 파일(", (0,jsx_runtime.jsx)(_components.em, {
            children: ".tgz"
          }), ")을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "데이터 파일을 가져오는데 성공하면 화면에 메시지가 나타납니다."
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