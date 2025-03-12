"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["338"], {
"6545": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_how_to_guide_enroll_credential_mdx_1a6_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-how-to-guide-enroll-credential-mdx-1a6.json
var site_docs_platform_biostar_x_how_to_guide_enroll_credential_mdx_1a6_namespaceObject = JSON.parse('{"id":"platform/biostar_x/how-to-guide-enroll-credential","title":"사용자 크리덴셜 등록하기","description":"지문 및 얼굴, 카드 정보, 비밀번호 등을 크리덴셜로 등록할 수 있습니다.","source":"@site/docs/platform/biostar_x/how-to-guide-enroll-credential.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/how-to-guide-enroll-credential","permalink":"/docs/en/platform/biostar_x/how-to-guide-enroll-credential","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/how-to-guide-enroll-credential.mdx","tags":[],"version":"current","frontMatter":{"id":"how-to-guide-enroll-credential","title":"사용자 크리덴셜 등록하기","description":"지문 및 얼굴, 카드 정보, 비밀번호 등을 크리덴셜로 등록할 수 있습니다.","keywords":["크리덴셜"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"사용자 정보 수정하기","permalink":"/docs/en/platform/biostar_x/how-to-guide-edit-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/how-to-guide-enroll-credential.mdx


const frontMatter = {
	id: 'how-to-guide-enroll-credential',
	title: '사용자 크리덴셜 등록하기',
	description: '지문 및 얼굴, 카드 정보, 비밀번호 등을 크리덴셜로 등록할 수 있습니다.',
	keywords: [
		'크리덴셜'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "지문 등록",
  "id": "enroll-fingerprint",
  "level": 2
}, {
  "value": "얼굴 등록",
  "id": "enroll-face",
  "level": 2
}, {
  "value": "비주얼 페이스 등록",
  "id": "비주얼-페이스-등록",
  "level": 2
}, {
  "value": "출입 카드 등록",
  "id": "출입-카드-등록",
  "level": 2
}, {
  "value": "CSN 카드",
  "id": "csn-카드",
  "level": 3
}, {
  "value": "Wiegand 카드",
  "id": "wiegand-카드",
  "level": 3
}, {
  "value": "Smart Card",
  "id": "smart-card",
  "level": 3
}, {
  "value": "Read Card",
  "id": "read-card",
  "level": 3
}, {
  "value": "모바일 등록",
  "id": "모바일-등록",
  "level": 2
}, {
  "value": "QR/Barcode 등록",
  "id": "qrbarcode-등록",
  "level": 2
}, {
  "value": "Passcode 등록",
  "id": "passcode-등록",
  "level": 2
}, {
  "value": "Access PIN 등록",
  "id": "access-pin-등록",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcAdd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자의 크리덴셜을 등록하는 방법을 안내합니다. 사용자의 지문 및 얼굴, 카드 정보, 비밀번호 등을 크리덴셜로 등록할 수 있습니다. 크리덴셜은 사용자를 새로 추가하거나 수정할 때 등록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Launcher"
      }), " > ", (0,jsx_runtime.jsx)(Cmd, {
        children: "User"
      }), " 페이지로 이동해, 아래 두 가지 방식으로 크리덴션을 등록하거나 추가, 변경할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "새로운 사용자"
          }), ": 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "New User"
          }), " 버튼을 클릭하세요. New User 창의 Credential 섹션에서 크리덴셜을 등록할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "기존 사용자"
          }), ": 사용자 목록에서 사용자를 선택하면 화면 오른쪽에 표시되는 프로필 화면에서 See More 버튼을 클릭하세요. 사용자 정보를 수정할 수 있는 창이 나타나면 Credential 섹션에서 크리덴셜을 등록할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "크리덴셜이란?"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자의 신원을 확인하기 위한 데이터입니다. 일반적으로 디지털 서명, 스마트카드, 바이오 정보, 사용자 이름과 비밀번호 등이 있습니다."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["크리덴셜을 등록하고 ", (0,jsx_runtime.jsx)(Cmd, {
          children: "1:1 Security Level"
        }), " 항목에서 적절한 보안 등급을 설정하세요. 보안 등급이 높을 수록 인증률이 낮거나 본인 거부율(FRR)이 높을 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enroll-fingerprint",
      children: "지문 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "지문 인증을 지원하는 장치를 통해 사용자의 지문 정보를 등록할 수 있습니다. 지문은 지문 스캐너가 설치된 장치에서 스캔할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "지문을 등록하기 전에..."
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자의 지문이 깨끗하고 물기가 없는지 확인하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "상처가 있거나 지문이 희미한 손가락은 등록하지 마세요."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Credential"
      }), " 섹션의 Fingerprint 항목에서 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 버튼을 클릭하세요. 지문 등록 창이 나타나면 각 항목을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Enroll"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Enrollment Device"
          }), ": 지문을 등록할 장치를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "FingerPrint Quality"
          }), ": 지문 등록 품질을 조절할 수 있습니다. 품질 수준에 미치지 않으면 지문 정보를 등록할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "View FingerPrint Image"
          }), ": 토글 버튼을 클릭하면, 지문을 스캔했을 때 원본 이미지를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["지문은 최대 10개까지 등록할 수 있습니다. 각 번호에 한 개의 지문을 등록할 수 있습니다. 원하는 번호를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Scan Fingerprint"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(89)/* ["default"] */.Z) + "",
            width: "400",
            height: "66"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["번호 버튼을 선택해야 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Scan Fingerprint"
            }), " 버튼이 활성화됩니다. 지문을 장치에 스캔하면, 지문 정보가 등록됩니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Duress"
          }), ": 협박 지문으로 등록하려면 이 옵션을 선택하고 지문을 스캔하세요. 누군가에게 협박을 당하거나 강제로 출입문을 열어야 할 때, 해당 지문을 사용하면 알림을 보낼 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Clear"
          }), ": 등록한 지문을 삭제할 수 있습니다. 지문을 삭제하려면 해당 지문 번호를 선택하고 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "일상에서 출입을 위해 사용하는 지문을 협박 지문으로 사용하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "View FingerPrint Image"
            }), " 옵션을 활성화할 때, 지문 이미지를 확인할 수 있지만 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar"
            }), "에 저장하지 않습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지문 인증률이 낮다면 지문 정보를 삭제하고 새로운 지문 정보를 등록하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "좋은 품질의 지문 정보를 얻으려면 지문 인식 센서 표면을 모두 덮을 수 있도록 손가락을 대세요. 검지나 중지의 지문을 등록하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(9682)/* ["default"] */.Z) + "",
              width: "400",
              height: "98"
            })
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enroll-face",
      children: "얼굴 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "얼굴 인증을 지원하는 장치를 통해 사용자의 얼굴 정보를 등록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "얼굴을 등록하기 전에..."
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "얼굴을 등록할 때 장치와 얼굴의 거리를 40 ~ 80cm로 유지하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "표정이 변하지 않도록 주의하세요. (웃는 얼굴, 찡그린 얼굴, 윙크 등)"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 화면의 지시에 따르지 않으면 얼굴 등록이 오래 걸리거나 실패할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "눈이나 눈썹이 가려지지 않도록 주의하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "모자, 마스크, 선글라스, 안대를 착용하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "두 명의 얼굴이 화면에 동시에 나타나지 않도록 주의하세요. 한 번에 한 사람씩 등록하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "안경을 착용한 사용자는 안경 착용 전/후 얼굴을 모두 등록할 것을 권장합니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Credential"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Face"
      }), " 항목에서 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 버튼을 클릭하세요. 얼굴 등록 창이 나타나면 각 항목을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Enroll"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Enrollment Device"
          }), ": 얼굴을 등록할 장치를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Face Pose Variation"
          }), ": 얼굴을 등록할 때 얼굴의 위치, 각도, 거리에 대한 민감도를 설정할 수 있습니다. 정밀한 얼굴 템플릿을 얻으려면 높은 값으로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Add"
          }), ": 얼굴을 추가하려면 버튼을 클릭하세요. 최대 5개의 얼굴을 추가할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Scan Face"
          }), ": 얼굴을 스캔하려면 버튼을 클릭하세요. 버튼을 클릭하고 장치 화면의 지시에 따라 얼굴을 스캔하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Use as Profile Image"
          }), ": 스캔한 얼굴을 프로필 이미지로 사용하려면 옵션을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Clear"
          }), ": 등록한 얼굴을 삭제할 수 있습니다. 삭제하려는 순번 버튼을 선택하고 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "얼굴 인증률이 낮다면 얼굴 정보를 삭제하고 새로운 얼굴 정보를 등록하세요"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비주얼-페이스-등록",
      children: "비주얼 페이스 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비주얼 페이스(Visual Face)는 사용자의 얼굴을 비주얼 카메라로 촬영한 인증 수단입니다. 적외선 카메라로 촬영한 얼굴 정보와 구분되며, 비주얼 페이스를 지원하는 장치에서만 사용할 수 있습니다. 비주얼 페이스는 사용자의 모바일 기기에서 비대면으로 등록할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "비주얼 페이스를 등록하기 전에..."
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치로 등록할 때 장치와 얼굴의 거리는 60 ~ 100cm로 유지하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치로 등록할 때 움직이지 말고 정면으로 서서 얼굴을 등록하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 또는 모바일 기기로 등록할 때 화면의 지시에 따르지 않으면 얼굴 등록이 오래 걸리거나 실패할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "표정이 변하지 않도록 주의하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "마스크, 모자, 안대를 착용하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "고개를 들거나 숙이지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "진한 화장을 하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "눈을 감지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "양쪽 어깨가 모두 나타나도록 하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "두 명의 얼굴이 동시에 나타나지 않도록 주의하세요. 한 번에 한 사람씩 등록하세요."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Credential"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Visual Face"
      }), " 항목에서 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 버튼을 클릭하세요. 비주얼 페이스 등록 창이 나타나면 각 항목을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Enroll"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Enrollment Device"
          }), ": 비주얼 페이스를 등록할 장치를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Add"
          }), ": 비주얼 페이스를 추가하려면 버튼을 클릭하세요. 최대 2개의 비주얼 페이스를 추가할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Scan"
          }), ": 비주얼 페이스를 스캔하려면 버튼을 클릭하세요. 버튼을 클릭하고 장치 화면의 지시에 따라 비주얼 페이스를 스캔하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Upload Image"
          }), ": 비주얼 페이스로 사용할 이미지를 업로드할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "지원하는 이미지 파일의 크기는 최대 10Mb입니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "지원하는 이미지 파일은 JPG, JPEG, PNG 형식입니다."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Use as Profile Image"
          }), ": 스캔한 비주얼 페이스를 프로필 이미지로 사용하려면 옵션을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Delete"
          }), ": 등록한 비주얼 페이스를 삭제할 수 있습니다. 삭제하려는 순번 버튼을 선택하고 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비주얼 페이스를 사용할 수 있는 장치는 아래와 같습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation F2, BioStation 3, BioEntry W3"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비주얼 페이스를 다른 방식으로 불러오거나 모바일 기기 또는 웹캠으로 등록할 수 있습니다. 자세한 내용은 다음 문서를 참고하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "출입-카드-등록",
      children: "출입 카드 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자에게 출입 카드를 할당할 수 있습니다. 장치가 지원하는 카드 종류는 장치의 매뉴얼을 참고하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "USB 에이전트를 이용한 카드 등록"
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "table-fixed",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "카드 종류"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "CSN"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "Wiegand"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "스마트 카드"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "EM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MIFARE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DESFire"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FeliCa"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HID Prox"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HID iCLASS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csn-카드",
      children: "CSN 카드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Credential"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Card"
          }), " 항목에서 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카드 등록 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Card Type"
          }), " 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "CSN"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Registration Option"
          }), " 항목에서 원하는 카드 등록 방식을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Register by Card Reader"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Device"
              }), " 목록에서 카드를 스캔할 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Read Card"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Assign Card"
              }), ": 목록에서 사용자에게 할당하려는 카드를 선택하세요. 입력 필드를 통해 검색할 수도 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Enter Manually"
              }), ": 카드 번호를 직접 입력하거나 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Use User ID"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Enroll"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wiegand-카드",
      children: "Wiegand 카드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Credential"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Card"
          }), " 항목에서 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카드 등록 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Card Type"
          }), " 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Wiegand"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Card Data Format"
          }), " 항목에서 카드 데이터 형식을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Registration Option"
          }), " 항목에서 원하는 카드 등록 방식을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Register by Card Reader"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Device"
              }), " 목록에서 카드를 스캔할 장치를 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Read Card"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Assign Card"
              }), ": 목록에서 사용자에게 할당하려는 카드를 선택하세요. 입력 필드를 통해 검색할 수도 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Enter Manually"
              }), ": 식별 코드(Facility Code)와 카드 ID를 직접 입력하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Enroll"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "Card Data Format"
        }), " 항목에 원하는 카드 데이터 형식이 없다면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "smart-card",
      children: "Smart Card"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "read-card",
      children: "Read Card"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "모바일-등록",
      children: "모바일 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qrbarcode-등록",
      children: "QR/Barcode 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "passcode-등록",
      children: "Passcode 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "access-pin-등록",
      children: "Access PIN 등록"
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
"9682": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/biostarx-enroll-fingerprint-caution-98024b8eaea33e83eea204e7e06a1e0f.png");

}),
"89": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

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