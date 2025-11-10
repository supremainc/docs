"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["76566"], {
88283: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_card_printer_mdx_413_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-card-printer-mdx-413.json
var site_docs_platform_biostar_x_settings_card_printer_mdx_413_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-card-printer","title":"카드 인쇄하기","description":"BioStar X와 cardPresso를 연동하여 사용자가 원하는 디자인의 카드를 인쇄할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-card-printer.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-card-printer","permalink":"/docs/platform/biostar_x/settings-card-printer","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-card-printer.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-card-printer","title":"카드 인쇄하기","description":"BioStar X와 cardPresso를 연동하여 사용자가 원하는 디자인의 카드를 인쇄할 수 있습니다.","keywords":["cardPresso","카드 프린터"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"모바일 출입 카드 관리하기","permalink":"/docs/platform/biostar_x/settings-credential-mobile-access-card"},"next":{"title":"이메일 설정하기","permalink":"/docs/platform/biostar_x/settings-email-setting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-card-printer.mdx


const frontMatter = {
	id: 'settings-card-printer',
	title: '카드 인쇄하기',
	description: 'BioStar X와 cardPresso를 연동하여 사용자가 원하는 디자인의 카드를 인쇄할 수 있습니다.',
	keywords: [
		'cardPresso',
		'카드 프린터'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*New → Shortcut*/


const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "cardPresso 설치 및 설정하기",
  "id": "installing-configuring-cardPresso",
  "level": 3
}, {
  "value": "cardPresso를 BioStar X에 연결하기",
  "id": "cardpresso를-biostar-x에-연결하기",
  "level": 2
}, {
  "value": "카드 템플릿 테스트 인쇄하기",
  "id": "카드-템플릿-테스트-인쇄하기",
  "level": 2
}, {
  "value": "사용자별 카드 템플릿 인쇄하기",
  "id": "printing-card-template-per-user",
  "level": 2
}, {
  "value": "커스텀 사용자 필드 추가하기",
  "id": "adding-custom-user-fields",
  "level": 2
}, {
  "value": "카드 템플릿 속성 ID",
  "id": "card-template-attribute-ids",
  "level": 2
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
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "와 cardPresso를 연동하여 사용자가 원하는 디자인의 카드를 인쇄할 수 있습니다. cardPresso는 카드 디자인 및 인쇄를 위한 전문 소프트웨어입니다. cardPresso를 사용하면 다양한 카드 템플릿을 생성하고 사용자 정보를 카드에 맞게 배치할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 카드 프린터 기능을 사용하려면 cardPresso 프로그램을 설치하고 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "와 연결해야 합니다. cardPresso 프로그램의 웹 인쇄 서버 기능을 사용하려면 cardPresso XXL edition 라이선스가 필요합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["cardPresso 프로그램의 라이선스 유형에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.cardpresso.com/cardpresso-software/editions/",
              children: "cardPresso Editions"
            }), " 페이지를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "웹 인쇄 서버 기능은 Windows 운영체제에서만 지원됩니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installing-configuring-cardPresso",
      children: "cardPresso 설치 및 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cardPresso 프로그램을 설치하고 웹 인쇄 서버를 설정하려면 아래 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "설치 버전에 따라 메뉴 경로나 화면이 다를 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["웹 인쇄 서버로 운영할 PC의 운영체제에 맞는 최신 버전의 cardPresso를 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.cardpresso.com/downloads-cp",
            children: "cardPresso Download"
          }), "에서 다운로드하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "프로그램을 설치하고 cardPresso에서 발급한 라이선스를 활성화하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cardPresso를 실행한 후 카드 템플릿을 제작하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/cardpresso-new-card-template.png",
          alone: true,
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["제작한 카드 템플릿을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 설치한 서버의 원하는 경로에 저장하세요. (예, ", (0,jsx_runtime.jsx)(_components.em, {
            children: "C:\\template\\example.card"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["cardPresso를 설치한 PC의 바탕 화면에서 마우스 오른쪽 버튼을 클릭한 후 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "새로 만들기"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "바로 가기"
          }), "를 클릭하세요. "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "항목 위치 입력"
          }), " 필드에 아래와 같이 입력한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"C:\\Program Files (x86)\\cardPresso\\cardPresso.exe\" /PRINTSERVER\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cardpresso-print-server-short-cut.png",
          width: 400
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "설치 환경에 따라 cardPresso가 설치된 경로가 다를 수 있습니다. cardPresso가 설치된 경로를 확인한 후, 위 경로를 알맞게 수정하세요."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["바로 가기 이름을 입력한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "마침"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "바탕화면에 생성한 cardPresso 웹 인쇄 서버 바로가기 아이콘을 더블 클릭하여 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["cardPresso 웹 인쇄 서버 창이 나타나면, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "설정"
          }), " 아이콘을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-installation2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "주소"
              }), ": 웹 인쇄 서버로 동작하는 PC의 IP 주소를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "포트"
              }), ": cardPresso에서 인쇄 동작을 수신하는데 사용하는 포트 번호입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "허용된 사용자 그룹"
              }), ": 웹 인쇄 서버에 접근할 권한이 있는 사용자 그룹을 선택하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정이 완료되면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "저장"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["오른쪽 하단에 있는 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-card-printer-play.png",
            ico: true,
            alone: true
          }), "을 클릭하여 서비스를 시작하세요. 알맞게 설정된 경우 아이콘이 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-card-printer-stop.png",
            ico: true,
            alone: true
          }), "로 변경되고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "listen OK"
          }), " 메시지가 나타납니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-installation3.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "카드 인쇄가 완료되기 전까지 창을 닫지 마세요."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cardpresso를-biostar-x에-연결하기",
      children: "cardPresso를 BioStar X에 연결하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["cardPresso를 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 연결하려면 아래와 같이 설정하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.cardpressoSetting",
            product: "2"
          }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "으로 설정한 뒤 각 항목을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.id",
                product: "2"
              }), ": cardPresso 로그인 ID를 입력하세요. (기본값: ADMIN)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.password",
                product: "2"
              }), ": cardPresso 로그인 암호를 입력하세요. (기본값: admin)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.ipAddress",
                product: "2"
              }), ": 웹 인쇄 서버로 동작하는 PC의 IP 주소를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.ipAddressPort",
                product: "2"
              }), ": cardPresso에서 인쇄 동작을 수신하는데 사용하는 포트 번호입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.printerName",
                product: "2"
              }), ": 카드 프린터로 사용할 프린터 이름을 입력하세요. Windows의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "제어판"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "장치 및 프린터"
              }), "에서 확인할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.cardTemplate",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAdd",
                product: "2"
              }), "를 클릭해 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.cardTemplate",
                product: "2"
              }), "을 추가할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.card_template.configure.th.name",
                product: "2"
              }), " 항목에 카드 템플릿의 파일명과 확장자가 포함된 전체 경로를 입력하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "카드 템플릿의 파일명은 영문, 숫자, 특수 기호로 설정할 수 있습니다."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "최대 20개의 카드 템플릿을 지원합니다."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "경로 예시: C:\\template\\example.card"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.printTestLabel",
                product: "2"
              }), ": 카드 템플릿을 테스트 인쇄할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 완료하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카드-템플릿-테스트-인쇄하기",
      children: "카드 템플릿 테스트 인쇄하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Administrator 정보를 가진 카드 템플릿을 테스트 인쇄할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["인쇄하려는 카드 템플릿을 선택한 후, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.testPrint",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer1.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Administrator 정보를 가진 카드 템플릿이 인쇄됩니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "printing-card-template-per-user",
      children: "사용자별 카드 템플릿 인쇄하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자별 정보를 가진 카드 템플릿으로 카드를 인쇄할 수 있습니다."
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
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), " 창이 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["양식을 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.printCard",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "사용자 정보는 영문, 숫자, 특수 기호로 입력할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["인쇄하려는 카드 템플릿을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.print",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user1.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카드 인쇄 여부를 묻는 팝업창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.ok",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user2.png",
          className: "none"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "새 사용자가 생성되고 사용자 정보를 가진 카드 템플릿으로 카드가 인쇄됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-custom-user-fields",
      children: "커스텀 사용자 필드 추가하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커스텀 사용자 필드를 추가한 카드 템플릿으로 카드를 인쇄할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.server"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.userDeviceManagement",
            product: "2"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title",
            product: "2"
          }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " 버튼을 클릭해 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.name",
            product: "2"
          }), "을 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type",
            product: "2"
          }), "을 선택하세요. 추가한 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title",
            product: "2"
          }), "의 순서대로 카드 템플릿의 속성 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ID"
          }), "가 결정됩니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-custom-user.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar X 속성 ID 기준으로 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "순서 1"
          }), "은 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CUSTOM1"
          }), "과 같습니다. BioStar X 속성 ID에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#card-template-attribute-ids",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 완료하면 화면 가장 아래에 있는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["cardPresso 프로그램에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "파일"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "템플릿 열기"
          }), "를 클릭해 카드 템플릿 파일을 여세요. 새로운 속성을 추가하고 BioStar X 속성 ID 순서에 알맞은 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "XML 항목 ID 이름"
          }), "으로 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ID"
          }), "를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정이 완료되면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "파일"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "저장"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "로 돌아와 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " 페이지에서 카드 템플릿을 적용할 사용자를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["추가한 커스텀 사용자 필드 항목을 확인할 수 있습니다. 해당 양식에 맞게 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.printCard",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-custom-user1.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["인쇄하려는 카드 템플릿을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.print",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user1.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카드 인쇄 여부를 묻는 팝업창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.ok",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user2.png",
          className: "none"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 정보가 저장되고 커스텀 사용자 필드를 추가한 카드 템플릿으로 카드가 인쇄됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "card-template-attribute-ids",
      children: "카드 템플릿 속성 ID"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서 지원하는 속성 ID는 아래와 같습니다. 카드 템플릿 생성 시, 속성 ID를 알맞은 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "XML 항목 ID 이름"
      }), "으로 입력하세요."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x cols3--20-40-40",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "목록"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "BioStar X 사용자 데이터"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "XML 항목 ID 이름"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "User ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "ID"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "User Name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "NAME"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Email"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "EMAIL"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Department"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "DEPARTMENT"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Telephone"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "TELEPHONE"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "User Group"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "GROUP"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Profile Photo"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "PHOTO"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM1"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM2"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM3"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "11"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM4"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "12"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM5"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "13"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM6"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "14"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM7"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "15"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM8"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "16"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM9"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "17"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Custom Field 10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM10"
            })]
          })]
        })]
      })
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