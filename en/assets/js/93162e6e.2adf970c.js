"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1379"], {
81341: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_batch_import_face_mdx_931_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-batch-import-face-mdx-931.json
var site_docs_platform_biostar_x_batch_import_face_mdx_931_namespaceObject = JSON.parse('{"id":"platform/biostar_x/batch-import-face","title":"얼굴 일괄 등록하기","description":"사용자의 얼굴을 일괄 등록할 수 있는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/batch-import-face.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/batch-import-face","permalink":"/docs/en/platform/biostar_x/batch-import-face","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/batch-import-face.mdx","tags":[],"version":"current","frontMatter":{"id":"batch-import-face","title":"얼굴 일괄 등록하기","description":"사용자의 얼굴을 일괄 등록할 수 있는 방법을 안내합니다.","keywords":["얼굴","등록","일괄","크리덴셜","인증"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"Login in with Multi-Factor Authentication","permalink":"/docs/en/platform/biostar_x/login-with-mfa"},"next":{"title":"Face Migration","permalink":"/docs/en/platform/biostar_x/migration-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/batch-import-face.mdx


const frontMatter = {
	id: 'batch-import-face',
	title: '얼굴 일괄 등록하기',
	description: '사용자의 얼굴을 일괄 등록할 수 있는 방법을 안내합니다.',
	keywords: [
		'얼굴',
		'등록',
		'일괄',
		'크리덴셜',
		'인증'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "CSV 파일로 가져와 등록",
  "id": "import-csv",
  "level": 2
}, {
  "value": "얼굴 가져오기",
  "id": "import-face",
  "level": 2
}, {
  "value": "모바일 장치로 얼굴 등록",
  "id": "mobile-device",
  "level": 2
}, {
  "value": "시작하기 전에",
  "id": "시작하기-전에-1",
  "level": 3
}, {
  "value": "얼굴 등록 링크 전송",
  "id": "얼굴-등록-링크-전송",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자의 얼굴을 일괄 등록할 수 있는 방법을 안내합니다. CSV 파일로 가져오기 기능을 사용하거나 사용자 아이디와 일치하는 파일 이름을 가진 얼굴 사진을 불러와 등록해 여러 명의 사용자 얼굴을 한 번에 등록할 수 있습니다. 또는 여러 명의 사용자에게 이메일로 얼굴 등록 링크를 전송해 모바일 장치에서 직접 얼굴을 등록할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "얼굴 일괄 등록을 시작하기 전에 사용자의 얼굴 이미지를 준비하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "지원하는 이미지 파일의 크기는 최대 10MB입니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "지원하는 이미지 파일의 형식은 JPG, JPEG, PNG입니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "import-csv",
      children: "CSV 파일로 가져와 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSV 가져오기 기능으로 사용자의 얼굴을 일괄 등록할 수 있습니다."
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
          children: "사용자 목록에서 얼굴을 등록할 사용자의 체크박스를 클릭하세요. 1명 이상의 사용자를 선택할 수 있습니다."
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 내보내기 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.download"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로컬의 원하는 경로에 CSV 파일을 저장하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 파일을 열어 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "face_image_file1"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "face_image_file2"
          }), " 열을 추가하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "추가한 열에 얼굴 이미지의 파일명을 확장자를 포함해 입력하고 저장하세요."
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
          children: "수정한 CSV 파일을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 가져오기 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.importStartRow"
          }), "을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 이미 등록된 사용자 데이터를 유지할 지 CSV 파일의 정보로 덮어쓰기할 지 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-03.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.visualFaceImageFolder",
            product: "2"
          }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.browse",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-face-import-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["얼굴 이미지가 저장된 경로를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.upload",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSV 가져오기를 완료하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSV 파일의 정보를 가져오는 중 오류가 발생했다면 오류가 발생한 CSV 데이터만 다시 확인하여 업로드할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "가져올 CSV 파일과 얼굴 이미지 파일은 동일한 경로를 사용할 것을 권장합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "import-face",
      children: "얼굴 가져오기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 아이디와 일치하는 파일 이름을 가진 얼굴 사진을 불러와 얼굴 인증으로 등록할 수 있습니다. 시작하기 전에 사용자 얼굴 이미지 파일을 준비하세요. 얼굴 이미지 파일의 이름은 사용자 아이디와 동일해야 합니다."
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
            sid: "team.menu.import.face"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceImport.title"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.browse"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-face-import.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴 이미지가 저장된 경로를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceImport.newImport"
          }), " 옵션에서 얼굴 이미지를 불러올 방식을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.visualFaceImport.default"
              }), ": 얼굴 이미지 파일명과 사용자 아이디가 일치하는 이미지를 가져옵니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.visualFaceImport.createUser"
              }), ": 등록된 사용자 아이디와 얼굴 이미지 파일명이 일치하면 이미지를 불러오고, 일치하지 않으면 해당 파일 이름을 사용자 아이디로 사용해 신규 사용자를 생성하고 얼굴 인증 수단으로 등록합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFileImport.duplicateUser"
          }), " 옵션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.duplicateUser.preserve",
            product: "2"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.duplicateUser.overwrite",
            product: "2"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.csvImport.duplicateUser.preserve"
              }), ": 등록된 사용자의 얼굴 이미지를 유지합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.csvImport.duplicateUser.overwrite"
              }), ": 등록된 사용자의 얼굴 이미지를 새로 가져오는 얼굴 이미지로 덮어씁니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["가져오는 얼굴 이미지를 프로필 이미지로 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.visualFace.useAsProfileImage"
          }), " 옵션을 클릭해 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.start"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "얼굴 사진 파일을 가져오는 중 오류가 발생하면 오류가 발생한 사진의 목록이 나타납니다. 목록을 확인하고 다시 시도하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "얼굴 이미지는 한 명의 사용자 아이디당 1개까지 가져올 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobile-device",
      children: "모바일 장치로 얼굴 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자에게 이메일로 얼굴 등록 링크를 전송할 수 있습니다. 사용자는 모바일 장치에서 해당 링크로 접속하여 얼굴을 직접 등록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "시작하기-전에-1",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모바일로 얼굴 등록 기능을 사용하기 전에 SMTP 설정을 포함한 이메일 정보 설정을 완료하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-email-setting",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모바일로 얼굴 등록 기능은 에어팝 포털과 연동해야 사용할 수 있습니다. 에어팝 포털 연동 및 모바일 출입 카드 사용에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-credential-mobile-access-card",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "얼굴-등록-링크-전송",
      children: "얼굴 등록 링크 전송"
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
          children: "사용자 목록에서 얼굴을 등록할 사용자의 체크박스를 클릭하세요. 1명 이상의 사용자를 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.sendFaceMobileEnrollLink"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-mobile-link.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["메시지 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.ok"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-mobile-link-warning.png",
          width: "60%"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 사용자의 이메일로 얼굴 등록 링크를 전송합니다. 사용자가 업로드 완료하면 사용자 정보에 얼굴 정보가 추가됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "monitoring.auditTrail",
              product: "2"
            }), "에서 이메일 전송 성공 여부를 확인할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-audit-trail",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "얼굴 등록 모바일 링크를 수신하는 사용자가 외부 이메일 애플리케이션을 사용한다면, 이메일 애플리케이션의 언어를 해당 국가의 언어로 설정해야 합니다. 언어에 따라 유니코드를 지원하지 않을 경우 이메일상에서 텍스트가 비정상적으로 출력될 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자가 전송 받은 얼굴 등록 모바일 링크로 접속하면 아래와 같이 얼굴 등록 서비스가 실행됩니다. 화면의 안내에 따라 진행하세요."
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-new-user-credential-face-mobile-app.png",
            className: "none"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지원하는 이미지 파일의 크기는 최대 10MB입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지원하는 이미지 파일의 형식은 JPG, JPEG, PNG입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "전송된 얼굴 등록 모바일 링크는 24시간 뒤 만료됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "얼굴 사진을 업로드하여 얼굴 모바일 등록에 성공하면 등록 성공 메시지가 화면에 나타납니다. 등록에 실패한 경우 등록 실패 메시지와 실패 사유가 표시되며, 사용자는 다른 사진을 이용하여 얼굴 등록을 다시 시도할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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