"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["10838"], {
82602: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_visitor_register_manage_mdx_c8f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-visitor-register-manage-mdx-c8f.json
var site_docs_platform_biostar_x_visitor_register_manage_mdx_c8f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/visitor-register-manage","title":"방문 신청 관리하기","description":"방문 신청을 승인하거나 수정, 추가, 삭제할 수 있습니다.","source":"@site/docs/platform/biostar_x/visitor-register-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/visitor-register-manage","permalink":"/platform/biostar_x/visitor-register-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/visitor-register-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"visitor-register-manage","title":"방문 신청 관리하기","description":"방문 신청을 승인하거나 수정, 추가, 삭제할 수 있습니다.","keywords":["방문 신청","관리"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"방문 신청하기","permalink":"/platform/biostar_x/visitor-register"},"next":{"title":"체크인 방문자 관리하기","permalink":"/platform/biostar_x/visitor-register-checkin-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/visitor-register-manage.mdx


const frontMatter = {
	id: 'visitor-register-manage',
	title: '방문 신청 관리하기',
	description: '방문 신청을 승인하거나 수정, 추가, 삭제할 수 있습니다.',
	keywords: [
		'방문 신청',
		'관리'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "방문 승인",
  "id": "방문-승인",
  "level": 2
}, {
  "value": "승인 및 카드 등록",
  "id": "approve-and-register-card",
  "level": 3
}, {
  "value": "지문 검색으로 방문자 승인",
  "id": "지문-검색으로-방문자-승인",
  "level": 2
}, {
  "value": "방문자 추가",
  "id": "방문자-추가",
  "level": 2
}, {
  "value": "방문자 삭제",
  "id": "방문자-삭제",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
      children: "방문 신청을 승인하거나 수정할 수 있습니다. 관리자가 직접 방문자를 추가하거나 삭제할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "방문-승인",
      children: "방문 승인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "방문 신청 내역을 확인하고 방문자의 출입을 승인하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "방문자 목록에서 방문을 승인할 방문자를 클릭하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문자의 방문 정보를 확인한 후 수정 필요한 항목은 수정 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.edit",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.status.checkIn",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), "의 내용을 확인하고 방문을 승인하려면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.checkin",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문을 신청할 때 방문자 출입 이용 약관에 동의하지 않은 신청자의 경우 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.checkin",
              product: "2"
            }), " 버튼이 비활성화됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.term.watch",
              product: "2"
            }), " 버튼을 클릭해 방문자에게 출입 이용 약관을 제공하고, 약관 동의를 받으세요. 방문자 출입 이용 약관에 동의하지 않는다면 방문이 제한됩니다."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/visitor-register-manage-view-term.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문 PC에 카드 등록 장치가 설정되어 있다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.button.approveAndRegisterCard",
              product: "2"
            }), " 버튼이 활성화됩니다. 방문자의 방문을 승인하고 출입 카드를 발급하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.button.approveAndRegisterCard",
              product: "2"
            }), " 버튼을 클릭하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#approve-and-register-card",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문 PC에 카드 사용을 설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.visitor"
            }), " 메뉴에서 아래와 같은 최소 설정이 필요합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-visitor-settings-use-card.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.site",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.setting",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.card",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.use",
                  product: "2"
                }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.cardType",
                  product: "2"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.pc.management",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.pc.setting",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.card",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.server.enrollment_device.device_name",
                  product: "2"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "approve-and-register-card",
      children: "승인 및 카드 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "방문 신청을 승인하고 출입 카드를 발급하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), " 화면에서 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.approveAndRegisterCard",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카드 등록 창이 나타나면 원하는 등록 방법을 선택하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.registerByCardReader",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enterManually",
              product: "2"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.registerByCardReader",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "방문 PC에 연결된 장치로 카드 정보를 스캔하여 등록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registerByCardReader",
            product: "2"
          }), "으로 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card-reader.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["등록할 카드를 장치에 스캔하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카드를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.enterManually",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카드 번호를 직접 입력하여 등록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enterManually",
            product: "2"
          }), "으로 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card-manual.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardId",
            product: "2"
          }), "를 직접 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카드를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "지문-검색으로-방문자-승인",
      children: "지문 검색으로 방문자 승인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "지문을 등록한 방문자를 지문으로 검색한 후 승인 처리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문 신청 목록에서 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.searchVisitorByFingerprint",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-list-search-fingerprint.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "지문 스캔 장치에 방문자의 지문을 스캔하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["지문과 일치하는 방문자가 검색되면 확인 메시지가 나타납니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.registerInformation",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-list-search-fingerprint-confirm.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문자의 방문 정보를 확인한 후 수정 필요한 항목은 수정 후 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.edit",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.status.checkIn",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), "의 내용을 확인하고 방문을 승인하려면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.checkin",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "방문자-추가",
      children: "방문자 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자가 직접 방문자를 추가하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문자 목록에서 왼쪽 상단의 ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addVisitor",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.visitor",
            product: "2"
          }), " 섹션에서 방문자의 이름과 전화번호를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-visitor-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.host",
            product: "2"
          }), " 섹션에서 방문 대상 담당자의 이름과 전화번호를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-admin-info.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이름 또는 전화번호를 입력하면 입력 정보와 일치하는 사용자 목록이 표시됩니다. 원하는 사용자를 지정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.choose",
              product: "2"
            }), " 버튼을 클릭하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.accessInfo",
            product: "2"
          }), " 섹션에서 출입 그룹 및 방문 기간을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-access-info.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문 PC에 할당한 방문처의 출입 그룹만 선택할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-site",
              children: "다음 문서"
            }), "를 참고하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " 섹션에서 출입 수단을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-credential.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), ": 카드 인증을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.request",
                product: "2"
              }), "으로 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerPrint",
                product: "2"
              }), ": 지문 인증을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.addFingerprint",
                product: "2"
              }), " 버튼을 클릭한 후 방문자의 지문을 등록하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문자 추가를 완료하려면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이름은 최대 48자까지 입력할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문자 정보 입력에 커스텀 필드를 추가하려면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-custom-field",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "방문자-삭제",
      children: "방문자 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "방문 신청 목록에서 삭제할 방문자의 체크박스를 클릭하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-remove-visitor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.deleteVisitor",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["확인 메시지가 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "button.func.deleteVisitor",
              product: "2"
            }), " 버튼은 방문자의 체크박스를 클릭하면 활성화됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "방문자는 방문 신청 목록에서만 삭제할 수 있습니다."
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