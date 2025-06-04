"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6945"], {
2567: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_device_biostation_3_authentication_mdx_4bd_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-3-authentication-mdx-4bd.json
var site_docs_device_biostation_3_authentication_mdx_4bd_namespaceObject = JSON.parse('{"id":"device/biostation_3/authentication","title":"인증","description":"지원하는 인증 방식과 인증 절차를 설명합니다.","source":"@site/docs/device/biostation_3/authentication.mdx","sourceDirName":"device/biostation_3","slug":"/device/biostation_3/authentication","permalink":"/docs/device/biostation_3/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"인증","description":"지원하는 인증 방식과 인증 절차를 설명합니다.","keywords":["인증 모드","인증 옵션","PIN","얼굴","근태"],"isTranslationMissing":false},"sidebar":"bioStation3","previous":{"title":"사용자","permalink":"/docs/device/biostation_3/user"},"next":{"title":"설정","permalink":"/docs/device/biostation_3/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/device/biostation_3/authentication.mdx


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
  "value": "인증 옵션",
  "id": "인증-옵션",
  "level": 2
}, {
  "value": "서버 매칭",
  "id": "서버-매칭",
  "level": 3
}, {
  "value": "QR 인증",
  "id": "qr-인증",
  "level": 3
}, {
  "value": "PIN",
  "id": "pin",
  "level": 2
}, {
  "value": "인증 결과 표시 옵션",
  "id": "인증-결과-표시-옵션",
  "level": 2
}, {
  "value": "얼굴",
  "id": "얼굴",
  "level": 2
}, {
  "value": "근태",
  "id": "근태",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "지원하는 인증 방식과 인증 절차를 설명합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "인증-모드",
      children: "인증 모드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치의 인증 모드를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        children: "얼굴"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        children: "PIN"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        children: "카드 / QR 코드"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        children: "ID"
      }), "를 조합하여 인증 모드로 사용할 수 있으며, 각 인증 모드마다 사용할 스케줄을 설정할 수도 있습니다."]
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
          }), "를 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add.svg",
            ico: true,
            alone: true
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add1.svg",
            ico: true,
            alone: true
          }), "을 누르면 추가할 수 있는 크리덴셜이 화면에 나타납니다. 원하는 크리덴셜을 추가하세요. 크리덴셜이 추가된 상태에서 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-cancel.svg",
            ico: true,
            alone: true
          }), "을 누르면 추가한 크리덴셜을 삭제할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-authmode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 인증 모드를 설정한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "스케줄"
          }), "을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)("div", {
          className: "overflow-x",
          children: (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "구분"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "설명"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "얼굴"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face.png",
                    ico: true,
                    alone: true
                  }), ": 얼굴만 사용하는 모드입니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin.png",
                    ico: true,
                    alone: true
                  }), ": 얼굴로 인증한 뒤 PIN을 입력하는 모드입니다."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "카드 / QR 코드"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card.png",
                    ico: true,
                    alone: true
                  }), ": 카드 / QR코드만 사용하는 모드입니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face.png",
                    ico: true,
                    alone: true
                  }), ": 카드 / QR코드로 인증한 뒤 얼굴로 인증하는 모드입니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin.png",
                    ico: true,
                    alone: true
                  }), ": 카드 / QR코드로 인증한 뒤 PIN을 입력하는 모드입니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face.png",
                    ico: true,
                    alone: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin.png",
                    ico: true,
                    alone: true
                  }), ": 카드 / QR코드로 인증한 뒤 얼굴로 인증하거나 PIN을 입력하는 모드입니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin.png",
                    ico: true,
                    alone: true
                  }), ": 카드 / QR코드로 인증한 뒤 얼굴 인증과 PIN 입력을 모두 사용하는 모드입니다."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "ID"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face.png",
                    ico: true,
                    alone: true
                  }), ": ID를 입력한 뒤 얼굴로 인증하는 모드입니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin.png",
                    ico: true,
                    alone: true
                  }), ": ID를 입력한 뒤 PIN을 입력하는 모드입니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face.png",
                    ico: true,
                    alone: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin.png",
                    ico: true,
                    alone: true
                  }), ": ID를 입력한 뒤 얼굴로 인증하거나 PIN을 입력하는 모드입니다.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin.png",
                    ico: true,
                    alone: true
                  }), ": ID를 입력한 뒤 얼굴 인증과 PIN 입력을 모두 사용하는 모드입니다."]
                })]
              })]
            })]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "스케줄"
                }), "은 BioStar 2에서 설정할 수 있습니다. 설정한 스케줄이 없다면 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "항상 사용"
                }), "만 선택할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "스케줄"
                }), " 설정에 대한 자세한 내용은 BioStar 2 관리자 설명서를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "QR 코드"
                }), " 인증을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "인증"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "인증 옵션"
                }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "QR 인증"
                }), "이 활성화 되어있어야 하며, 별도의 장치 라이선스가 필요합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings#license",
                  children: "라이선스"
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
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "인증-옵션",
      children: "인증 옵션"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "서버-매칭",
      children: "서버 매칭"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "서버 매칭을 설정할 수 있습니다."
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
            children: "인증 옵션"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "서버 매칭 (카드, ID)"
          }), "를 활성화하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-auth-option.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "서버 매칭 (카드, ID)"
            }), ": 서버 매칭을 설정하면 장치에서 사용자 인증을 수행하지 않고, BioStar 2에서 사용자 인증을 수행합니다. 서버 매칭은 장치에 사용자 정보가 너무 많을 때나 사용자 크리덴셜 정보가 저장된 장치를 외부에 노출하고 싶지 않을 때 유용하게 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "서버 매칭"
                }), "은 카드, ID만 사용할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "서버 매칭"
                }), "을 사용할 경우 장치와 BioStar 2에서 서버 매칭을 활성화해야 합니다. BioStar 2 서버 매칭 설정에 대한 자세한 내용은 BioStar 2 관리자 설명서를 참고하세요."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qr-인증",
      children: "QR 인증"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QR코드 인증을 설정할 수 있습니다."
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
            children: "인증 옵션"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "QR 인증"
          }), "을 활성화하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-auth-option-qr.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "QR 인증"
              }), ": 장치의 카메라를 통한 QR 코드 인증 사용 여부를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "카드를 QR로 인증하기"
              }), ": 사용자에게 발급한 CSN 카드 또는 Wiegand 카드와 동일한 데이터의 QR코드로 인증할 수 있도록 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "QR 인증"
              }), "이 활성화되어있는 경우에만 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "QR 인증"
            }), "을 사용하려면 별도의 장치 라이선스가 필요합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings#license",
              children: "라이선스"
            }), "를 참고하세요."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pin",
      children: "PIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비밀번호 입력 시 스크램블 키패드 사용 여부를 설정할 수 있습니다."
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
            children: "PIN"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "스크램블 키패드"
          }), " 사용 여부를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-pin.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "스크램블 키패드"
            }), ": 비밀번호를 입력할 때 숫자 키의 위치가 무작위로 섞여 비밀번호 유출을 방지할 수 있습니다."]
          }), "\n"]
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
          }), "을 누른 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "인증 결과 표시 옵션"
          }), "에서 원하는 항목을 변경하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-auth-result-display-option.png"
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
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "얼굴",
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
          src: "/img/device/device-auth.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
                }), "에 대한 자세한 내용은 BioStar 2 관리자 설명서를 참고하세요."]
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
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "위조 얼굴 검출 성능을 개선하여 iBeta Level 1 ISO 30107-3 제시형 공격 탐지 시험에 통과하였습니다."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["햇빛이 강한 환경에서는 ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "위조 얼굴 검출"
                    }), " 기능을 ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "보통"
                    }), "으로 사용하는 것을 권장합니다."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "고급 설정"
              }), ": 마스크 검출 등 얼굴 인증에 대한 고급 설정을 변경할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "마스크 검출"
                  }), ": 마스크 검출 사용 여부를 설정할 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    children: "검출 모드"
                  }), ": 마스크 착용 여부를 확인하는 방식을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                    children: "마스크 검출"
                  }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                    children: "사용"
                  }), "으로 설정할 경우 활성화됩니다."]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "마스크 착용 (하드)"
                    }), ": 마스크를 착용하지 않은 사용자는 인증이 거부되며, 마스크 미착용 이벤트가 로그로 기록됩니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "마스크 착용 (소프트)"
                    }), ": 마스크를 착용하지 않은 사용자도 인증할 수 있으나 마스크 미착용 이벤트가 로그로 기록됩니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "마스크 미착용"
                    }), ": 마스크를 착용하지 않은 사용자만 인증할 수 있으며, 이 모드를 사용할 경우 마스크 확인 모드가 ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "인증 전 확인"
                    }), "으로 고정됩니다."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "마스크 검출 등급"
              }), ": 마스크 착용을 감지하는 감도를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "마스크 검출"
              }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "사용"
              }), "으로 설정할 경우 활성화됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "확인 모드"
              }), ": 장치의 용도에 따라 확인 모드를 설정할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "인증 후 확인"
                    }), ": 인증을 수행한 뒤 사용자의 마스크 착용 여부를 확인합니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "인증 전 확인"
                    }), ": 사용자의 마스크 착용 여부를 확인한 뒤 인증을 수행합니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "확인만"
                    }), ": 장치를 마스크 착용 여부를 확인하는 용도로만 사용할 수 있습니다. 이 모드를 사용할 경우 인증과 관계없이 마스크를 착용한 사용자는 모두 출입할 수 있습니다."]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n"]
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
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-auth2.png"
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
                src: "/img/common/ico-add.svg",
                ico: true,
                alone: true
              }), "을 선택한 뒤 화면에 표시할 아이콘, ", (0,jsx_runtime.jsx)(Cmd, {
                children: "근태 이벤트 이름"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                children: "스케줄"
              }), "을 설정하세요."]
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