"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1246"], {
40249: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_add_users_mdx_423_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-add-users-mdx-423.json
var site_docs_device_vionyx_webserver_add_users_mdx_423_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/add-users","title":"사용자 추가하기","description":"얼굴 인식 사용자를 등록하고 얼굴 사진을 등록하는 방법을 안내하세요.","source":"@site/docs/device/vionyx_webserver/add-users.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/add-users","permalink":"/docs/es/device/vionyx_webserver/add-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/add-users.mdx","tags":[],"version":"current","frontMatter":{"id":"add-users","title":"사용자 추가하기","description":"얼굴 인식 사용자를 등록하고 얼굴 사진을 등록하는 방법을 안내하세요.","keywords":["사용자","등록","얼굴","Face User","추가","사진"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"사용자 관리하기","permalink":"/docs/es/device/vionyx_webserver/manage-people"},"next":{"title":"사용자 수정 및 삭제하기","permalink":"/docs/es/device/vionyx_webserver/modify-delete-users"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/add-users.mdx


const frontMatter = {
	id: 'add-users',
	title: '사용자 추가하기',
	description: '얼굴 인식 사용자를 등록하고 얼굴 사진을 등록하는 방법을 안내하세요.',
	keywords: [
		'사용자',
		'등록',
		'얼굴',
		'Face User',
		'추가',
		'사진'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자 기본 정보 입력",
  "id": "사용자-기본-정보-입력",
  "level": 2
}, {
  "value": "얼굴 등록",
  "id": "얼굴-등록",
  "level": 2
}, {
  "value": "얼굴 사진 업로드",
  "id": "얼굴-사진-업로드",
  "level": 3
}, {
  "value": "웹캠으로 얼굴 등록 (Web Cam)",
  "id": "웹캠으로-얼굴-등록-web-cam",
  "level": 3
}, {
  "value": "AI 추천 얼굴 등록",
  "id": "ai-추천-얼굴-등록",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "AI 얼굴 인식을 위한 사용자를 등록할 수 있습니다. 사용자를 추가할 때 기본 정보를 입력하고 세 가지 방식 중 하나로 얼굴 사진을 등록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 사용자를 추가하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "조직에 새로 입사한 사용자를 등록하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자의 얼굴 사진을 촬영하여 얼굴 인식 데이터베이스에 등록하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "여러 명의 사용자를 일괄적으로 추가하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "외부 시스템(ERP, 인사 관리 시스템)과 연동하기 위해 사용자를 등록하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "얼굴 인식 기능을 사용하려면 해당 지역의 관련 규제 법규를 준수해야 하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "최초로 사용자를 추가할 때 얼굴 인식 사용 동의 팝업이 표시됩니다. 동의 기록은 시스템 로그에 저장되며, 동의 후에는 재표시되지 않습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "AI 이벤트 설정에서 미리 동의를 완료했다면 사용자 추가 시 별도의 팝업이 표시되지 않습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-기본-정보-입력",
      children: "사용자 기본 정보 입력"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "최초 사용자 추가 시 얼굴 인식 사용 동의 팝업이 표시되면 확인하고 진행하세요. 동의 완료 후 사용자 추가 다이얼로그에서 기본 정보를 입력하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "people",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-people-list-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["최초 사용자 추가 시 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_analytics_consent_title",
            product: "cam"
          }), " 팝업이 표시되면 내용을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_analytics_consent_agree",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "얼굴 인식 기능을 사용하려면 해당 지역의 관련 규제 법규를 준수해야 하세요. 동의하지 않으면 진행할 수 없습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "face_analytics_consent_title",
                  product: "cam"
                }), " 팝업은 최초 한 번만 표시됩니다."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_new_face_user",
            product: "cam"
          }), " 팝업창이 나타나면 사용자 기본 정보를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-people-list-add-pop-profile.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_id",
            product: "cam"
          }), " 입력란에 사용자 고유 아이디를 입력하세요. 사용자 아이디는 다른 사용자와 중복될 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "name",
            product: "cam"
          }), " 입력란에 사용자 이름을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "최대 64자까지 입력할 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["한글, 영문, 숫자, 특수문자(", (0,jsx_runtime.jsx)(_components.code, {
                children: "*"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "."
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "("
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: ")"
              }), ")를 포함할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "description",
            product: "cam"
          }), " 입력란에 사용자에 대한 설명을 입력하세요. 최대 256자까지 입력할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "custom_field",
            product: "cam"
          }), " 입력란은 사용자 고유의 추가 정보를 최대 64자까지 입력할 수 있습니다. 예를 들어, 부서, 직책, 유저 그룹 등 자유 형식의 메모를 작성할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 기본 정보를 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "신규 사용자는 얼굴 사진 없이 먼저 생성할 수 있습니다. 추후 사용자 상세 페이지에서 얼굴 사진을 추가할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "얼굴-등록",
      children: "얼굴 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자를 새로 추가할 때나 사용자 상세 페이지에서 얼굴을 등록할 수 있습니다. 세 가지 방식이 제공됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "people",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add",
            product: "cam"
          }), " 버튼을 클릭하거나 사용자 목록에서 기존 사용자를 클릭하여 상세 페이지로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 추가 또는 사용자 상세 팝업창의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_credentials",
            product: "cam"
          }), " 섹션에서 얼굴을 등록할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-people-list-face-credential.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_face_button",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "1번 얼굴을 먼저 선택하세요. 2번 얼굴은 선택 사항입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "얼굴 사진 등록 시 얼굴이 검출되지 않으면 'The face cannot be found in the photo or the quality is poor. Please try again with a different photo.' 메시지가 표시됩니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "얼굴-사진-업로드",
      children: "얼굴 사진 업로드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["로컬에 저장된 이미지 파일을 업로드해 얼굴 사진을 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "add_face",
        product: "cam"
      }), " 팝업창에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "my_files",
        product: "cam"
      }), " 옵션을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-people-list-face-credential-upload.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다음 중 원하는 방법으로 얼굴 사진을 업로드하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "로컬에 저장된 이미지 파일을 드래그 앤 드롭으로 업로드 영역에 끌어오세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["로컬에 저장된 이미지 파일을 선택하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "browse",
                product: "cam"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴이 인식되면 사진이 표시됩니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-people-list-face-credential-upload-complete.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["업로드한 사진을 사용자에게 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지원하는 이미지 파일은 PNG, JPEG, JPG 형식입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지원하는 이미지 파일의 최대 크기는 10MB입니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "웹캠으로-얼굴-등록-web-cam",
      children: "웹캠으로 얼굴 등록 (Web Cam)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["웹캠을 사용해 얼굴 사진을 촬영하고 등록할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "add_face",
        product: "cam"
      }), " 팝업창에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "web_cam",
        product: "cam"
      }), " 옵션을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-people-list-face-credential-webcam-2.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "웹캠 촬영 화면이 표시되면 얼굴이 화면 중앙의 원안에 오도록 위치를 조정하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "capture",
            product: "cam"
          }), " 버튼을 클릭하세요. 3초 카운트다운 후 사진을 촬영합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴이 인식되면 사진이 표시됩니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-people-list-face-credential-upload-complete.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["촬영한 사진을 사용자에게 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "다시 촬영하려면 얼굴 사진을 클릭하고 다시 촬영할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-추천-얼굴-등록",
      children: "AI 추천 얼굴 등록"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI 분석을 통해 감지된 미인식 얼굴 목록에서 사용자에 맞는 얼굴을 선택하고 등록할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "add_face",
        product: "cam"
      }), " 팝업창에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ai_shot",
        product: "cam"
      }), " 옵션을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최근 인증된 미인식 얼굴 목록이 표시됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자에 맞는 얼굴을 선택하세요. 한 번에 1개의 얼굴만 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택한 얼굴을 사용자에게 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요."]
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