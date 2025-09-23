"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4920"], {
5275: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_device_facestation_f_2_authentication_mdx_670_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-facestation-f-2-authentication-mdx-670.json
var site_docs_device_facestation_f_2_authentication_mdx_670_namespaceObject = JSON.parse('{"id":"device/facestation_f2/authentication","title":"인증","description":"지원하는 인증 방식과 인증 절차를 설명합니다.","source":"@site/docs/device/facestation_f2/authentication.mdx","sourceDirName":"device/facestation_f2","slug":"/device/facestation_f2/authentication","permalink":"/docs/device/facestation_f2/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"인증","description":"지원하는 인증 방식과 인증 절차를 설명합니다.","keywords":["인증 모드","인증 옵션","PIN","얼굴","근태"],"isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"사용자","permalink":"/docs/device/facestation_f2/user"},"next":{"title":"설정","permalink":"/docs/device/facestation_f2/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/device/facestation_f2/authentication.mdx


const frontMatter = {
	id: 'authentication',
	title: '인증',
	description: '지원하는 인증 방식과 인증 절차를 설명합니다.',
	keywords: [
		'인증 모드',
		'인증 옵션',
		'PIN',
		'얼굴',
		'근태'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "인증 모드",
  "id": "인증-모드",
  "level": 2
}, {
  "value": "인증 모드 등록",
  "id": "registering-auth-mode",
  "level": 3
}, {
  "value": "인증 모드 편집",
  "id": "인증-모드-편집",
  "level": 3
}, {
  "value": "인증 모드 삭제",
  "id": "인증-모드-삭제",
  "level": 3
}, {
  "value": "서버 매칭",
  "id": "서버-매칭",
  "level": 2
}, {
  "value": "얼굴",
  "id": "face",
  "level": 2
}, {
  "value": "지문 <Badge>FSF2-ODB</Badge>",
  "id": "fingerprint",
  "level": 2
}, {
  "value": "근태",
  "id": "근태",
  "level": 2
}, {
  "value": "인증 결과 표시 옵션",
  "id": "인증-결과-표시-옵션",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Badge, Cmd, Column, Columns, Image} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "지원하는 인증 방식과 인증 절차를 설명합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "인증-모드",
      children: "인증 모드"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 인증 모드를 설정할 수 있습니다. 얼굴, 지문, PIN, 카드, ID를 조합하여 인증 모드로 사용할 수 있으며, 각 인증 모드마다 사용할 스케줄을 설정할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "지문 인증은 FSF2-ODB 제품에서만 사용할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-auth-mode",
      children: "인증 모드 등록"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "인증"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "인증 모드"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), "을 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add1.svg",
            ico: true,
            alone: true
          }), "을 선택한 뒤 하는 인증 방법을 선택하세요. 인증 방법을 추가로 설정하려면 같은 방법으로 선택한 뒤 조합하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "스케줄"
          }), "을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["선택한 인증 방법을 순서대로 모두 인증하도록 조합하거나, 선택한 인증 방법 중 일부만 선택해 인증하도록 조합할 수 있습니다. 예를 들어, ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-card.png",
                  ico: true,
                  alone: true
                }), " + ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-face-bs3.png",
                  ico: true,
                  alone: true
                }), " + ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-pin-bs3.png",
                  ico: true,
                  alone: true
                }), "으로 조합할 경우 카드, 얼굴, PIN을 모두 인증해야 하며, ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-card.png",
                  ico: true,
                  alone: true
                }), " + ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-face-bs3.png",
                  ico: true,
                  alone: true
                }), " / ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-pin-bs3.png",
                  ico: true,
                  alone: true
                }), "으로 조합할 경우 카드로 인증한 뒤 얼굴 또는 PIN을 입력해야 합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "스케줄"
                }), "은 BioStar 2에서 설정할 수 있습니다. 설정한 스케줄이 없다면 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "사용 안함"
                }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "항상 사용"
                }), "만 선택할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "스케줄"
                }), " 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-schedule",
                  children: "BioStar 2 관리자 설명서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "인증-모드-편집",
      children: "인증 모드 편집"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "인증"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "인증 모드"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수정할 인증 모드를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-auth-mode",
            children: "인증 모드 등록"
          }), "을 참고하여 인증 모드를 수정한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "인증-모드-삭제",
      children: "인증 모드 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "인증"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "인증 모드"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 삭제할 항목을 선택하세요. 여러 개를 선택할 수도 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택한 항목을 삭제하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), "를 누른 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "확인"
          }), "을 누르세요. 이전 화면으로 돌아가려면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "취소"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "서버-매칭",
      children: "서버 매칭"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "서버 매칭을 설정할 수 있습니다. 서버 매칭을 사용하면 장치가 아닌 BioStar 2에서 사용자 인증을 수행합니다. 서버 매칭은 장치에 사용자 정보가 너무 많은 경우 또는 장치를 출입문 외부에 설치할 경우에 유용하게 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "인증"
          }), "을 누른 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "서버 매칭"
          }), "을 활성화하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Badge, {
              only: true,
              children: "FSF2-ODB"
            }), "\n", (0,jsx_runtime.jsx)(Cmd, {
              children: "서버 매칭 (지문, 카드, ID)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Badge, {
                only: true,
                children: "FSF2-DB, FSF2-AB"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                children: "서버 매칭 (카드, ID)"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "서버 매칭"
            }), "은 지문, 카드, ID만 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "서버 매칭"
            }), "을 사용할 경우 장치와 BioStar 2에서 서버 매칭을 활성화해야 합니다. BioStar 2 서버 매칭 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-server-server#servermatching",
              children: "BioStar 2 관리자 설명서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "face",
      children: "얼굴"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "얼굴 인증에 대한 설정을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "인증"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "얼굴"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 변경하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fsf2-auth.png",
          width: 300
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "조명 밝기"
              }), ": 장치 조명의 밝기를 수동으로 조절할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "보통"
              }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "높음"
              }), "으로 밝기를 설정하거나 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "사용 안 함"
              }), "을 선택하여 조명을 끌 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "모션 센서 감도"
              }), ": 장치 주변에 움직임을 감지하는 감도를 설정합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "모션 센서 감도"
              }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "끔"
              }), "으로 설정한 경우, 얼굴을 인증하려면 화면을 터치한 뒤 인증을 진행하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "등록 대기 시간"
              }), ": 설정한 시간 동안 얼굴을 등록하지 못하면 얼굴 등록이 취소됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "인증 대기 시간"
              }), ": 설정한 시간 동안 인증을 완료하지 못하면 인증에 실패합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "등록얼굴 중복검사"
              }), ": 얼굴 등록 시 중복 얼굴 여부를 검사할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "얼굴 검출 설정"
              }), ": 얼굴 인증 시 장치가 얼굴을 검출할 영역의 위치와 크기를 설정할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: ["최적의 성능을 위해 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "얼굴 검출 설정"
                }), "의 하위 옵션은 기본 설정 값 사용을 권장합니다. 각 옵션의 기본 값은 다음과 같습니다."]
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "최대 얼굴 회전 각도: 15"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "얼굴 인식 거리: 최소 30 cm, 최대 100 cm"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "얼굴 인식 영역 넓히기: 비활성화"
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "ToM 등록"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                children: "ToM 등록"
              }), "을 활성화하면 BioStar 2에서 발급받은 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "템플릿 온 모바일"
              }), "을 등록할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "템플릿 온 모바일"
              }), "은 사용자의 바이오 메트릭 템플릿을 모바일 기기에 저장하는 모바일 액세스 카드로 BioStar 2 서버, Airfob Portal과 장치에 사용자 데이터를 저장하지 않고도 바이오 메트릭으로 인증할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "템플릿 온 모바일"
                }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/enroll-credential-mobile#template-on-mobile",
                  children: "BioStar 2 관리자 설명서"
                }), "를 참고하세요."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "비주얼 페이스 이미지 저장하기"
              }), ": 비주얼 페이스에 실제 이미지와 템플릿을 모두 저장하도록 하거나 실제 이미지는 저장하지 않고 템플릿만 저장하도록 설정할 수 있습니다. 비활성화할 경우 저장된 비주얼 페이스의 이미지가 모두 삭제되며, 앞으로 등록되는 비주얼 페이스도 이미지를 제외한 템플릿만을 저장합니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "이 설정을 비활성화한 후에는 BioStar 2 v2.9.7 이상에 연결하여 사용하세요."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "보안 등급"
              }), ": 1", ":N", " 인증을 위한 보안 등급을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "작동 모드"
              }), ": 얼굴 인증 시 장치의 작동 모드를 설정할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "퓨전 매칭"
                  }), ": 비주얼 및 적외선 매칭이 모두 동작하여 얼굴 인증의 정확도를 높일 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "빠른 인증"
                  }), ": 사용자는 장치의 인증 범위 안에서 걸어가면서도 얼굴을 인증하는 등 빠르게 인증을 수행할 수 있습니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "위조 얼굴 검출"
              }), ": 사진 등의 위조 얼굴을 이용한 사용자 인증을 방지할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "작동 모드"
              }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "퓨전 매칭"
              }), "으로 설정할 때 활성화됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "고급 설정"
              }), ": 마스크 검출, 열화상 카메라 기능 등 얼굴 인증에 대한 고급 설정을 변경할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "확인 모드"
                  }), ": 용도에 따라 확인 모드를 설정할 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "인증 실패 알림"
                  }), ": 마스크 미착용 또는 기준 온도 초과로 인한 인증 실패 시 알림 여부를 설정할 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "마스크 검출"
                  }), ": 마스크 검출 사용 여부를 설정할 수 있습니다."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        children: "사용(하드)"
                      }), ": 마스크를 착용하지 않은 사용자는 인증 거부되며 마스크 미착용 이벤트가 로그로 기록됩니다."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        children: "사용(소프트)"
                      }), ": 마스크를 착용하지 않은 사용자도 인증할 수 있으나 마스크 미착용 이벤트가 로그로 기록됩니다."]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "열화상 카메라"
              }), ": 열화상 카메라 사용 여부를 설정할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "사용(하드)"
                  }), ": 기준 온도 범위를 초과한 사용자는 인증 거부되며 기준 온도 초과 이벤트가 로그로 기록됩니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "사용(소프트)"
                  }), ": 기준 온도 범위를 초과한 사용자도 인증할 수 있으나 온도 초과 이벤트가 로그로 기록됩니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "마스크 검출"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "열화상 카메라"
            }), "를 사용할 경우 장치의 용도에 따라 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "확인 모드"
            }), "를 설정할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "인증 후 확인"
                }), ": 인증을 수행한 뒤 사용자의 마스크 착용 여부를 확인하거나 온도를 측정합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "확인 후 인증"
                }), ": 사용자의 마스크 착용 여부를 확인하거나 온도를 측정한 뒤 인증을 수행합니다. 이 모드를 사용할 경우 마스크를 착용하지 않거나 기준 온도를 초과하는 사용자는 인증을 수행할 수 없습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "확인만"
                }), ": 장치를 마스크 착용 여부를 확인하거나 온도를 측정하는 용도로만 사용할 수 있습니다. 이 모드를 사용할 경우 인증과 관계없이 마스크를 착용하거나 기준 온도 이하의 사용자는 모두 출입할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "열화상 카메라"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "사용"
            }), "으로 설정할 경우 열화상 카메라에 대한 고급 설정 옵션이 활성화됩니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "섭씨/화씨"
                }), ": 온도 표시 단위를 설정할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "낮은 기준 온도"
                }), ": 출입을 제한할 최저 기준 온도를 설정할 수 있습니다. 표면 온도가 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "낮은 기준 온도"
                }), "보다 낮은 사용자는 인증 거부됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "낮은 기준 온도"
                }), "는 1℃~45℃의 범위에서 설정할 수 있으며, ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "높은 기준 온도"
                }), "보다 높게 설정할 수 없습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "높은 기준 온도"
                }), ": 출입을 제한할 최고 기준 온도를 설정할 수 있습니다. 표면 온도가 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "높은 기준 온도"
                }), "보다 높은 사용자는 인증 거부됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "높은 기준 온도"
                }), "는 1℃~45℃의 범위에서 설정할 수 있으며, ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "낮은 기준 온도"
                }), "보다 낮게 설정할 수 없습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "온도 로그 저장"
                }), ": 사용자의 온도 로그 저장 여부를 설정할 수 있습니다. 이 옵션을 사용할 경우 인증 성공 여부 및 사용자의 온도 값을 로그로 저장하며, 사용하지 않을 경우 인증 성공 여부 로그만 저장합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "열화상 영상 표시"
                }), ": 장치 화면에 적외선 영상 표시 여부를 설정할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "동적 ROI"
                }), ": 장치가 사용자의 온도를 측정할 관심 영역(ROI)을 자동으로 감지하도록 설정할 수 있습니다. 예를 들어, 주변에 기타 조명이 설치되어 있는 경우 이 옵션을 활성화하면 열화상 카메라가 해당 조명이 아닌 사용자의 온도를 감지해 측정합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "카메라 설정"
                }), ": 정확한 측정을 위해 카메라의 세부 옵션을 설정하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "열화상 카메라"
            }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "사용"
            }), "으로 설정할 경우 설치 환경에 따라 정확한 측정을 위해 열화상 카메라의 세부 옵션을 설정할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "온도 측정 거리(cm)"
                }), ": 사용자와 열화상 카메라 사이의 거리를 설정하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "적외선 방사율"
                }), ": 적외선 방사율을 설정하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI X(%)"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI Y(%)"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI 폭(%)"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI 높이(%)"
                }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "동적 ROI"
                }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "사용 안 함"
                }), "으로 설정할 경우 수동으로 ROI(관심 영역)를 설정할 수 있습니다. ROI 위치와 크기를 조절하여 열화상 카메라가 온도를 측정할 영역을 수동으로 설정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI X(%)"
                }), "는 관심 영역의 좌우 위치를 의미하며, 이 값이 커질수록 관심 영역은 화면의 오른쪽으로 이동합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI Y(%)"
                }), "는 관심 영역의 상하 위치를 의미하며, 이 값이 커질수록 관심 영역은 위쪽으로 이동합니다. ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI 폭(%)"
                }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI 높이(%)"
                }), "는 관심 영역의 크기를 의미하며, 두 값이 커질수록 온도를 측정할 영역이 넓어집니다. 예를 들어, ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI X(%)"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI Y(%)"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI 폭(%)"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI 높이(%)"
                }), " 값을 기본 값에서 각각 40, 15, 70, 40으로 변경할 경우 관심 영역은 아래과 같이 변경됩니다."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-roi1.png",
                width: 200,
                alone: true
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "ROI를 기본 값으로 설정한 경우"
              })]
            }), (0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-roi2.png",
                width: 200,
                alone: true
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "ROI X(%), ROI Y(%), ROI 폭(%), ROI 높이(%) 값을 각각 40, 15, 70, 40으로 변경한 경우"
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "온도 보정"
                }), ": 장치 사용 환경 및 주변 온도를 고려하여 열화상 카메라가 자체적으로 온도를 보정하도록 설정할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "온도 보정값"
                }), ": 제품 사용 환경에 따라 온도를 일정한 값만큼 높거나 낮게 측정하도록 보정할 수 있습니다. 예를 들어, 온도 값이 항상 0.1℃씩 높게 측정되는 환경에서는 온도 보정값을 -0.1로 설정하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "FW"
                }), ": 열화상 카메라가 정상적으로 연결된 경우 해당 카메라의 펌웨어 버전이 표시됩니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["최적의 성능을 위해 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "카메라 설정"
            }), "의 하위 옵션은 기본 설정 값 사용을 권장합니다. 각 옵션의 기본 값은 다음과 같습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "온도 측정 거리(cm)"
                }), ": 100"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "적외선 방사율"
                }), ": 0.98"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI X(%)"
                }), ": 30"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI Y(%)"
                }), ": 25"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI 폭(%)"
                }), ": 50"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "ROI 높이(%)"
                }), ": 55"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ROI를 기본 설정 값으로 사용할 경우 인증 시 화면의 ROI 영역에 아래와 같이 노란색 가이드가 표시됩니다. 사용자가 해당 영역에 얼굴이 오도록 맞추어 인증할 경우 정확한 온도를 측정할 수 있습니다. 설정 값을 수동으로 변경하거나 동적 ROI를 설정할 경우 노란색 가이드는 표시되지 않습니다."
          }), "\n", (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-static-roi.png",
                width: 200,
                alone: true
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "ROI를 기본 값으로 설정한 경우"
              })]
            }), (0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-dynamic-roi.png",
                width: 200,
                alone: true
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "ROI 설정 값을 변경하거나 동적 ROI를 사용할 경우"
              })]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "슬레이브 장치에서는 마스크 인증 및 열화상 카메라 기능을 사용할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "열화상 카메라는 TCM10-FSF2를 지원합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "fingerprint",
      children: ["지문 ", (0,jsx_runtime.jsx)(Badge, {
        only: true,
        children: "FSF2-ODB"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "지문 인증에 대한 설정을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "인증"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "지문"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 변경할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/auth-fingerprint.png",
      width: 300
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "보안 등급"
          }), ": 1", ":N", " 인증을 위한 보안 등급을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "매칭 대기 시간"
          }), ": 지문 매칭 시 대기 시간을 설정할 수 있습니다. 설정한 시간 동안 인증을 완료하지 못하면 인증에 실패합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "이미지 표시"
          }), ": 지문을 스캔했을 때 원본 이미지를 볼 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "센서 감도"
          }), ": 지문 인식 센서의 민감도를 설정할 수 있습니다. 센서 감도를 높여 정밀한 지문 정보를 얻으려면 센서 감도를 높게 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(Cmd, {
            children: ["1", ":N", " Fast 모드"]
          }), ": 지문 인증 속도를 설정할 수 있습니다. 자동을 선택하면 장치에 등록된 총 지문 템플릿의 개수에 따라 인증 속도가 설정됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "템플릿 형식"
          }), ": 지문 템플릿 형식을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Suprema"
          }), "가 기본으로 설정되어 있으며, 템플릿 형식을 변경할 경우 이전에 저장된 모든 지문을 사용할 수 없으므로 변경 시 유의하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "센서 모드"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            children: "자동 켜짐"
          }), "으로 설정하면 지문 센서가 사용자의 손가락을 인식하여 켜집니다. ", (0,jsx_runtime.jsx)(Cmd, {
            children: "항상 켜짐"
          }), "으로 설정하면 지문을 스캔하지 않을 때에도 항상 센서가 켜져 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "위조 지문 검출"
          }), ": 위조 지문 검사 등급을 설정할 수 있습니다. 위조 지문 검사 등급이 높을수록 실제 사람 지문에 대한 거부율도 높아질 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "등록 품질 검사"
          }), ": 높은 품질의 지문 정보를 저장하기 위해 스캔한 지문의 품질을 검사할 수 있습니다. 활성화하면 지문 품질이 낮을 경우 사용자에게 알려주어 지문을 올바르게 스캔하도록 도와줍니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "등록지문 중복검사"
          }), ": 지문 등록 시 중복 지문 여부를 검사할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "근태",
      children: "근태"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "근태 모드 등록 방법을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "인증"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "근태"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 항목을 설정하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/auth-tna.png",
      width: 300
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "근태 모드"
          }), ": 근태 모드를 사용할 방법을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "근태 코드"
          }), ": 근태 이벤트를 등록할 수 있습니다. 근태 이벤트를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "근태 코드"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), "을 선택한 뒤 화면에 표시할 아이콘, 근태 이벤트 이름, 스케줄을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "근태 등록 필요"
          }), ": 사용자가 인증할 때 근태 이벤트를 반드시 선택하도록 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            children: "근태 모드"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "수동변경"
          }), "으로 설정했을 때 사용할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "근태 고정 키"
          }), ": 관리자가 선택한 근태 이벤트만 사용하도록 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            children: "근태 모드"
          }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "고정"
          }), "으로 설정했을 때 사용할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "작업 코드"
          }), ": 작업 코드 사용 여부를 선택할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "인증-결과-표시-옵션",
      children: "인증 결과 표시 옵션"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "인증 결과 표시 옵션을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "인증"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "인증 결과 표시"
          }), " 옵션에서 원하는 항목을 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/auth-result-display-option.png",
      width: 300
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "사용자 ID 표시"
          }), ": 장치의 인증 결과 화면에서 사용자 ID가 표시되는 방법을 선택할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "전체 표시"
              }), ": 사용자 ID를 모두 표시합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "첫 문자만 표시"
              }), ": 사용자 ID의 첫 문자만 표시합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "표시하지 않기"
              }), ": 사용자 ID를 표시하지 않습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "사용자 이름 표시"
          }), ": 장치의 인증 결과 화면에서 사용자 이름이 표시되는 방법을 선택할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "전체 표시"
              }), ": 사용자 이름을 모두 표시합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "첫 문자만 표시"
              }), ": 사용자 이름의 첫 문자만 표시합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "표시하지 않기"
              }), ": 사용자 이름을 표시하지 않습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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