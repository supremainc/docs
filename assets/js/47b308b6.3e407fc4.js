"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["33510"], {
58363: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_device_manager_xpd_2_settings_mdx_47b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-device-manager-xpd-2-settings-mdx-47b.json
var site_docs_device_device_manager_xpd_2_settings_mdx_47b_namespaceObject = JSON.parse('{"id":"device/device_manager/xpd2-settings","title":"XPass D2 설정하기","description":"XPass D2에 적용할 설정을 미리 템플릿으로 구성한 뒤 개별 장치에 직접 적용할 수 있습니다.","source":"@site/docs/device/device_manager/xpd2-settings.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/xpd2-settings","permalink":"/device/device_manager/xpd2-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/xpd2-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"xpd2-settings","title":"XPass D2 설정하기","description":"XPass D2에 적용할 설정을 미리 템플릿으로 구성한 뒤 개별 장치에 직접 적용할 수 있습니다.","keywords":["XPass D2","템플릿","장치 검색","장치 연결","펌웨어 업그레이드","장치 재시작","관리자 비밀번호"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"IP 장치 설정하기","permalink":"/device/device_manager/ip-device-settings"},"next":{"title":"부록","permalink":"/device/device_manager/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/device_manager/xpd2-settings.mdx


const frontMatter = {
	id: 'xpd2-settings',
	title: 'XPass D2 설정하기',
	description: 'XPass D2에 적용할 설정을 미리 템플릿으로 구성한 뒤 개별 장치에 직접 적용할 수 있습니다.',
	keywords: [
		'XPass D2',
		'템플릿',
		'장치 검색',
		'장치 연결',
		'펌웨어 업그레이드',
		'장치 재시작',
		'관리자 비밀번호'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "템플릿 추가하기",
  "id": "template-add",
  "level": 2
}, {
  "value": "템플릿 이름 및 관리자 비밀번호 설정",
  "id": "템플릿-이름-및-관리자-비밀번호-설정",
  "level": 3
}, {
  "value": "인터페이스",
  "id": "인터페이스",
  "level": 3
}, {
  "value": "인증",
  "id": "인증",
  "level": 3
}, {
  "value": "위겐드 카드 포맷",
  "id": "위겐드-카드-포맷",
  "level": 3
}, {
  "value": "슈프리마 스마트 카드 레이아웃",
  "id": "슈프리마-스마트-카드-레이아웃",
  "level": 3
}, {
  "value": "커스텀 스마트 카드 레이아웃",
  "id": "커스텀-스마트-카드-레이아웃",
  "level": 3
}, {
  "value": "키패드 설정",
  "id": "키패드-설정",
  "level": 3
}, {
  "value": "기타",
  "id": "기타",
  "level": 3
}, {
  "value": "LED / 버저",
  "id": "led--버저",
  "level": 3
}, {
  "value": "템플릿 적용하기",
  "id": "템플릿-적용하기",
  "level": 2
}, {
  "value": "템플릿 관리하기",
  "id": "템플릿-관리하기",
  "level": 2
}, {
  "value": "템플릿 편집하기",
  "id": "템플릿-편집하기",
  "level": 3
}, {
  "value": "템플릿 삭제하기",
  "id": "템플릿-삭제하기",
  "level": 3
}, {
  "value": "템플릿 내보내기",
  "id": "템플릿-내보내기",
  "level": 3
}, {
  "value": "템플릿 가져오기",
  "id": "템플릿-가져오기",
  "level": 3
}, {
  "value": "장치 검색 및 연결하기",
  "id": "device-search-connect",
  "level": 2
}, {
  "value": "장치 펌웨어 업그레이드하기",
  "id": "device-firmware-upgrade",
  "level": 2
}, {
  "value": "장치 재시작하기",
  "id": "장치-재시작하기",
  "level": 2
}, {
  "value": "관리자 비밀번호 변경하기",
  "id": "admin-password-change",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "XPass D2에 적용할 설정을 미리 템플릿으로 구성한 뒤 개별 장치에 직접 적용할 수 있습니다. PC에서 관리 프로그램에 접속하여 설정을 변경하거나 커맨드 카드를 이용하는 방식에 비해 훨씬 빠르게 설정을 적용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치의 펌웨어 버전이 낮을 경우 일부 설정이 적용되지 않을 수 있습니다. 전체 설정을 적용하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "장치 펌웨어 업그레이드하기"
        }), "를 참고하여 펌웨어를 업그레이드하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-add",
      children: "템플릿 추가하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RS-485 통신, 카드 형식, 키패드 설정, PIN, LED 및 버저 등을 설정한 뒤 템플릿으로 추가할 수 있습니다. 템플릿을 추가하면 여러 대의 개별 장치를 매번 설정하지 않아도 빠르고 간편하게 설정을 적용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 Suprema Device Manager를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 화면에서 XPass D2를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add.svg",
            ico: true,
            alone: true
          }), "을 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-add.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿을 생성할 장치 모델명을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["각 항목을 설정한 후 템플릿을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_295",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "템플릿은 최대 100개까지 추가할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "템플릿-이름-및-관리자-비밀번호-설정",
      children: "템플릿 이름 및 관리자 비밀번호 설정"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-name-pw.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_341",
            product: "dev"
          }), ": 원하는 템플릿 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_074",
            product: "dev"
          }), ": 관리자 비밀번호를 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "관리자 비밀번호는 6~32자의 숫자로 설정할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "관리자 비밀번호를 분실하지 않도록 주의하세요. 관리자 비밀번호를 분실한 경우, 템플릿을 적용한 장치에 연결하려면 해당 장치를 초기화해야 합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["관리자 비밀번호 변경에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#admin-password-change",
              children: "관리자 비밀번호 변경하기"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "인터페이스",
      children: "인터페이스"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-interface.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_038",
            product: "dev"
          }), ": 장치와 마스터 장치의 통신에서 사용할 OSDP 주소를 설정하세요. 0~126의 숫자로 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_298",
            product: "dev"
          }), ": RS-485 전송 속도를 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "인증",
      children: "인증"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-auth-cardtype.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_328",
            product: "dev"
          }), ": 장치에서 사용할 카드 종류를 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_008",
                product: "dev"
              }), ": CSN 카드 종류를 선택하고 바이트 순서를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_201",
                product: "dev"
              }), ": 슈프리마에서 발급한 스마트 카드 종류를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_333",
                product: "dev"
              }), ": 타사에서 발급한 스마트 카드 종류를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_139",
                product: "dev"
              }), ": 모바일 카드 종류를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["바이트 순서를 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_034",
          product: "dev"
        }), "로 설정할 경우 카드 데이터를 처리할 때 큰 바이트 단위에서 작은 바이트 단위 순서로 처리하여 카드의 일련 번호(CSN)를 저장할 때 왼쪽에서 오른쪽으로 순차적으로 처리합니다. ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_030",
          product: "dev"
        }), "는 작은 바이트 단위에서 큰 바이트 단위 순서로 처리하여 카드의 일련 번호(CSN)를 저장합니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "위겐드-카드-포맷",
      children: "위겐드 카드 포맷"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-wiegand-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_354",
            product: "dev"
          }), ": 장치에 지정할 Wiegand 카드 형식을 설정할 수 있습니다. 설정한 형식으로 카드 데이터가 처리됩니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_179",
                product: "dev"
              }), ": 원하는 포맷이 없을 경우 ", (0,jsx_runtime.jsx)(IcAdd, {}), "을 눌러 새로운 위겐드 포맷을 추가할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/xpd2-template-wiegand-card-new.png",
              width: 250
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_253",
                    product: "dev"
                  }), ": 원하는 Wiegand 포맷의 이름을 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_318",
                    product: "dev"
                  }), ": 총 비트 수를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_024",
                    product: "dev"
                  }), ": 사용하려는 ID의 시작 비트와 종료 비트를 입력하세요. ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-add3.svg",
                    ico: true,
                    alone: true
                  }), " ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_319",
                    product: "dev"
                  }), "를 누르면 ID 필드를 추가할 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_350",
                    product: "dev"
                  }), ": 사용하려는 패리티 필드의 위치와 시작 및 종료 비트를 입력하세요. ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-add3.svg",
                    ico: true,
                    alone: true
                  }), " ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_319",
                    product: "dev"
                  }), "를 누르면 패리티 필드를 추가할 수 있습니다."]
                }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "info",
                  children: (0,jsx_runtime.jsx)(_components.p, {
                    children: "패리티 필드를 추가하려면 총 비트를 입력하세요."
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_352",
            product: "dev"
          }), ": Wiegand 신호의 펄스 폭을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_351",
            product: "dev"
          }), ": Wiegand 신호의 펄스 간격을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "슈프리마-스마트-카드-레이아웃",
      children: "슈프리마 스마트 카드 레이아웃"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-suprema-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_151",
            product: "dev"
          }), ": 보조 사이트 키 사용 여부를 설정할 수 있습니다. 보조 사이트 키를 설정하면 카드의 기본 키가 일치하지 않을 때 보조 사이트 키를 사용하여 인증을 수행할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_032",
            product: "dev"
          }), ": MIFARE 카드를 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": 암호화 종류를 Crypto-1 또는 AES-128로 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": 스마트 카드와 장치 사이의 통신을 암호화하는 키입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": 카드의 기본 사이트 키가 일치하지 않을 때 사용하여 인증을 수행할 수 있습니다. 보조 사이트 키 항목은 이전 뎁스의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "를 활성화할 때만 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_214",
                product: "dev"
              }), ": 각 템플릿이 저장될 시작 블록을 선택하세요. 이 블록은 사용자 정보가 저장될 블록의 인덱스이며, 사용자가 이미 스마트 카드를 사용하고 있다면 저장 가능한 블록을 설정하세요. MIFARE만 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_010",
            product: "dev"
          }), ": DESFire 카드를 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_011",
                product: "dev"
              }), ": 타사에서 발급한 DESFire 카드를 사용할 수 있습니다. DESFire만 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": 스마트 카드와 장치 사이의 통신을 암호화하는 키입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": 카드의 기본 사이트 키가 일치하지 않을 때 사용하여 인증을 수행할 수 있습니다. 보조 사이트 키 항목은 이전 뎁스의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "를 활성화할 때만 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_223",
                product: "dev"
              }), ": 애플리케이션 ID를 설정하세요. 파일 ID를 포함하는 일종의 디렉토리 역할을 합니다. DESFire만 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_347",
                product: "dev"
              }), ": 파일 ID를 설정하세요. DESFire만 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": 암호화 종류를 DES/3DES 또는 AES로 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_202",
            product: "dev"
          }), ": 스마트 카드 출력 바이트 순서를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_011",
              product: "dev"
            }), "을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_225",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_349",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_223",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_347",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_222",
              product: "dev"
            }), "의 정보를 정확하게 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), "는 최대 32 바이트의 16진수만 입력할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["바이트 순서를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_034",
              product: "dev"
            }), "로 설정할 경우 카드 데이터를 처리할 때 큰 바이트 단위에서 작은 바이트 단위 순서로 처리하여 카드의 일련 번호(CSN)를 저장할 때 왼쪽에서 오른쪽으로 순차적으로 처리합니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_030",
              product: "dev"
            }), "는 작은 바이트 단위에서 큰 바이트 단위 순서로 처리하여 카드의 일련 번호(CSN)를 저장합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "커스텀-스마트-카드-레이아웃",
      children: "커스텀 스마트 카드 레이아웃"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-custom-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_151",
            product: "dev"
          }), ": 보조 사이트 키 사용 여부를 설정할 수 있습니다. 보조 사이트 키를 설정하면 카드의 기본 키가 일치하지 않을 때 보조 사이트 키를 사용하여 인증을 수행할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_032",
            product: "dev"
          }), ": MIFARE 카드를 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": 암호화 종류를 Crypto-1 또는 AES-128로 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": 스마트 카드와 장치 사이의 통신을 암호화하는 키입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": 카드의 기본 사이트 키가 일치하지 않을 때 사용하여 인증을 수행할 수 있습니다. 보조 사이트 키 항목은 이전 뎁스의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "를 활성화할 때만 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_154",
                product: "dev"
              }), ": 각 템플릿이 저장될 시작 블록을 선택하세요. 이 블록은 사용자 정보가 저장될 블록의 인덱스이며, 사용자가 이미 스마트 카드를 사용하고 있다면 저장 가능한 블록을 설정하세요. MIFARE만 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_145",
                product: "dev"
              }), ": 카드 번호를 읽어들일 시작점을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_110",
                product: "dev"
              }), ": (설정한 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "가 카드의 설정값과 동일한 경우) 읽어들일 카드의 데이터 크기를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_010",
            product: "dev"
          }), ": DESFire 카드를 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_011",
                product: "dev"
              }), ": 타사에서 발급한 DESFire 카드를 사용할 수 있습니다. DESFire만 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": 스마트 카드와 장치 사이의 통신을 암호화하는 키입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": 카드의 기본 사이트 키가 일치하지 않을 때 사용하여 인증을 수행할 수 있습니다. 보조 사이트 키 항목은 이전 뎁스의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "를 활성화할 때만 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_223",
                product: "dev"
              }), ": 애플리케이션 ID를 설정하세요. 파일 ID를 포함하는 일종의 디렉토리 역할을 합니다. DESFire만 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_347",
                product: "dev"
              }), ": 파일 ID를 설정하세요. DESFire만 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": 암호화 종류를 DES/3DES 또는 AES로 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_145",
                product: "dev"
              }), ": 카드 번호를 읽어들일 시작점을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_110",
                product: "dev"
              }), ": (설정한 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "가 카드의 설정값과 동일한 경우) 읽어들일 카드의 데이터 크기를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_146",
            product: "dev"
          }), ": 스마트 카드 출력 바이트 순서를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_011",
              product: "dev"
            }), "을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_225",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_349",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_223",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_347",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_222",
              product: "dev"
            }), "의 정보를 정확하게 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), "는 최대 32 바이트의 16진수만 입력할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["바이트 순서를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_034",
              product: "dev"
            }), "로 설정할 경우 카드 데이터를 처리할 때 큰 바이트 단위에서 작은 바이트 단위 순서로 처리하여 카드의 일련 번호(CSN)를 저장할 때 왼쪽에서 오른쪽으로 순차적으로 처리합니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_030",
              product: "dev"
            }), "는 작은 바이트 단위에서 큰 바이트 단위 순서로 처리하여 카드의 일련 번호(CSN)를 저장합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "키패드-설정",
      children: "키패드 설정"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-keypad.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_335",
            product: "dev"
          }), ": 키패드 사용 여부를 설정할 수 있습니다. 키패드를 활성화하면 키패드로 카드 ID를 입력해 인증할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_219",
            product: "dev"
          }), ": 키패드에 카드 ID를 입력할 때 키를 누를 때마다 값을 전송합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_306",
            product: "dev"
          }), ": 키패드에 카드 ID를 입력할 때 키를 모두 누른 뒤 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#"
          }), " 키를 누르면 전체 값을 한번에 전송합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_327",
            product: "dev"
          }), ": 장치의 인증 모드를 카드 + PIN으로 설정했을 때 사용자가 카드를 입력하면 LED를 동작하여 PIN을 입력하도록 유도할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_147",
            product: "dev"
          }), ": 키패드의 백라이트를 켜거나 끌 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_336",
              product: "dev"
            }), "은 XPD2-GKDB 장치의 템플릿 설정 화면에만 표시됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_147",
              product: "dev"
            }), "는 XPD2-GKDB 하드웨어 V02M, 펌웨어 v1.7.1 이상에서만 지원됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치에서 키패드를 통해 입력된 값은 기본적으로 4 bit 단위로 전송됩니다. 키패드로 입력한 카드 ID는 Wiegand 카드 형식에 따라 카드 ID와 동일하게 전송됩니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "기타",
      children: "기타"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-others.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_150",
          product: "dev"
        }), ": 장치에서 탬퍼 이벤트가 발생할 경우 장치에 저장된 보안 키가 삭제되도록 설정할 수 있습니다. 보안 탬퍼 기능을 사용하려면 활성화하세요."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "led--버저",
      children: "LED / 버저"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/device-manager-led-buzzer.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_272",
            product: "dev"
          }), ": 평상시에 장치 LED에 표시되는 색상을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_325",
            product: "dev"
          }), ": 장치에 카드를 스캔할 때 장치 LED에 표시되는 색상 및 버저음의 재생 횟수를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_262",
            product: "dev"
          }), ": 인증 성공 시 장치 LED에 표시되는 색상 및 버저음의 재생 횟수를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_263",
            product: "dev"
          }), ": 인증 실패 시 장치 LED에 표시되는 색상 및 버저음의 재생 횟수를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "LED는 최대 세 가지 색상이 교차하여 반복적으로 표시되도록 설정할 수 있습니다. 슬롯을 눌러 색상을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-cancel2.svg",
              ico: true,
              alone: true
            }), "을 선택하면 해당 슬롯의 색상을 표시할 순서를 건너뛰고 다음 순서의 슬롯에 설정된 색상이 표시됩니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "템플릿-적용하기",
      children: "템플릿 적용하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "추가한 템플릿은 BLE 통신을 이용해 여러 대의 장치에 동일하게 적용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치의 펌웨어 버전이 낮을 경우 일부 설정이 적용되지 않을 수 있습니다. 전체 설정을 적용하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "장치 펌웨어 업그레이드하기"
        }), "를 참고하여 펌웨어를 업그레이드하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 블루투스 기능을 활성화한 뒤 Suprema Device Manager를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 화면에서 XPass D2를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_343",
            product: "dev"
          }), "를 누르세요. 선택 가능한 템플릿 목록이 나타납니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-choose-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿 목록에서 원하는 템플릿을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_212",
            product: "dev"
          }), "을 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-choose-select-start.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿을 적용할 장치에 모바일 기기의 뒷면을 완전히 접촉하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["템플릿 적용이 완료되면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Suprema Device Manager를 이용해 변경한 설정은 장치에만 적용되며, 서버에 동기화되지 않습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치가 마스터 장치와 연결되어 있거나 Wiegand 출력 설정이 변경된 경우 Suprema Device Manager와 기본 키로 연결할 수 없습니다. Suprema Device Manager와 연결하려면 장치를 초기화하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "템플릿-관리하기",
      children: "템플릿 관리하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "템플릿-편집하기",
      children: "템플릿 편집하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 Suprema Device Manager를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 화면에서 XPass D2를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿 목록에서 편집할 템플릿을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#template-add",
            children: "템플릿 추가하기"
          }), "를 참고하여 템플릿을 편집하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경된 설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_295",
            product: "dev"
          }), "을, 새 템플릿으로 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_178",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "템플릿-삭제하기",
      children: "템플릿 삭제하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 Suprema Device Manager를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 화면에서 XPass D2를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿 목록에서 삭제할 템플릿을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["템플릿을 삭제하려면 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select-del.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "템플릿-내보내기",
      children: "템플릿 내보내기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XPass D2 설정에 대한 템플릿을 앱에서 내보낼 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 Suprema Device Manager를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 화면에서 XPass D2를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-export1.png",
          className: "none",
          width: 840
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["템플릿 목록 화면 상단에서 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "을 누른 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_339",
            product: "dev"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["내보낼 템플릿을 선택한 후 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-check.svg",
            ico: true,
            alone: true
          }), "을 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-export2.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["템플릿은 Suprema Device Manager 애플리케이션 설치 파일과 동일한 위치에 생성된 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "DeviceManager_TemplateFiles"
        }), " 폴더에 저장됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "템플릿-가져오기",
      children: "템플릿 가져오기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XPass D2 설정에 대한 템플릿을 앱으로 가져올 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 Suprema Device Manager를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 화면에서 XPass D2를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-import.png",
          className: "none",
          width: 840
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["템플릿 목록 화면 상단에서 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "을 누른 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_337",
            product: "dev"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "템플릿이 저장된 폴더에서 가져올 템플릿을 선택하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["템플릿은 Suprema Device Manager 애플리케이션 설치 파일과 동일한 위치에 생성된 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "DeviceManager_TemplateFiles"
        }), " 폴더에 저장됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-search-connect",
      children: "장치 검색 및 연결하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "주변에 설치된 XPass D2를 검색하고 연결할 수 있습니다. Suprema Device Manager와 연결하면 장치의 펌웨어를 업그레이드하거나 장치 재시작, 템플릿 비밀번호 변경 등 다양한 기능을 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 블루투스 기능을 활성화한 뒤 Suprema Device Manager를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메인 화면에서 XPass D2를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_285",
            product: "dev"
          }), "을 누르세요. 연결 가능한 장치 목록이 나타납니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-search-device-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 목록에서 장치 ID를 확인하여 장치를 선택하거나, 연결할 장치에 모바일 기기를 가까이 대세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["접속 비밀번호를 입력하세요. 입력한 비밀번호를 화면에 표시하려면 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-password.svg",
            ico: true,
            alone: true
          }), "을 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 연결을 완료하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-firmware-upgrade",
      children: "장치 펌웨어 업그레이드하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 펌웨어를 손쉽게 업그레이드할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어를 업그레이드하려면 모바일 기기에 펌웨어 파일을 내려받아야 합니다. 최신 펌웨어는 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://download.supremainc.com/",
              children: "슈프리마 다운로드 센터"
            }), "에서 다운로드할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어 업그레이드 진행 중에는 장치와 모바일 기기 간의 거리를 1 m 이내로 유지하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "장치 검색 및 연결하기"
          }), "를 참고하여 펌웨어를 업그레이드할 장치와 연결하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_018",
            product: "dev"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-fwupgrade.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "펌웨어 파일이 저장된 경로에서 펌웨어를 선택하세요. 펌웨어 업그레이드가 진행됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["펌웨어 업그레이드를 완료하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-재시작하기",
      children: "장치 재시작하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치를 재시작할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "장치 검색 및 연결하기"
          }), "를 참고하여 재시작할 장치와 연결하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_287",
            product: "dev"
          }), "을 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-restart.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 재시작할 경우 모바일 기기와의 BLE 통신 연결이 해제됩니다. 자동으로 다시 연결하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_276",
            product: "dev"
          }), " 기능을 활성화하세요. 자세한 설정 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "initial-setup#app-settings",
            children: "앱 설정하기"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "admin-password-change",
      children: "관리자 비밀번호 변경하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "템플릿의 관리자 비밀번호를 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "장치 검색 및 연결하기"
          }), "를 참고하여 비밀번호를 변경할 템플릿이 적용된 장치와 연결하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_156",
            product: "dev"
          }), "을 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "현재 비밀번호와 새로 사용할 비밀번호를 입력하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-manager-change-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["비밀번호 변경을 완료하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "을 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "관리자 비밀번호는 6~32자의 숫자로 설정할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "관리자 비밀번호를 분실하지 않도록 주의하세요. 관리자 비밀번호를 분실한 경우, 템플릿을 적용한 장치에 연결하려면 해당 장치를 초기화해야 합니다."
          }), "\n"]
        }), "\n"]
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