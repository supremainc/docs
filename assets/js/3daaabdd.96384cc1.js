"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3658"], {
67583: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_visitor_mdx_3da_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-visitor-mdx-3da.json
var site_docs_platform_biostar_x_settings_visitor_mdx_3da_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-visitor","title":"방문자 설정하기","description":"방문자 관리를 위해 방문처와 방문 PC를 구성할 수 있으며, 방문자를 위한 출입 약관 및 안내 문구를 설정할 수 있습니다. 또한 커스텀 방문자 필드를 이용해 방문자에게 요구할 정보를 직접 추가할 수도 있습니다.","source":"@site/docs/platform/biostar_x/settings-visitor.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-visitor","permalink":"/docs/platform/biostar_x/settings-visitor","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-visitor.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-visitor","title":"방문자 설정하기","description":"방문자 관리를 위해 방문처와 방문 PC를 구성할 수 있으며, 방문자를 위한 출입 약관 및 안내 문구를 설정할 수 있습니다. 또한 커스텀 방문자 필드를 이용해 방문자에게 요구할 정보를 직접 추가할 수도 있습니다.","keywords":["방문자 관리","커스텀 필드"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"구역 구성하기","permalink":"/docs/platform/biostar_x/settings-map-manage-area"},"next":{"title":"디렉토리 연동 설정하기","permalink":"/docs/platform/biostar_x/settings-diretory-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-visitor.mdx


const frontMatter = {
	id: 'settings-visitor',
	title: '방문자 설정하기',
	description: '방문자 관리를 위해 방문처와 방문 PC를 구성할 수 있으며, 방문자를 위한 출입 약관 및 안내 문구를 설정할 수 있습니다. 또한 커스텀 방문자 필드를 이용해 방문자에게 요구할 정보를 직접 추가할 수도 있습니다.',
	keywords: [
		'방문자 관리',
		'커스텀 필드'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "방문 설정",
  "id": "settings-visitor",
  "level": 2
}, {
  "value": "방문처 설정",
  "id": "settings-visitor-site",
  "level": 3
}, {
  "value": "방문 PC 설정",
  "id": "settings-visitor-pc",
  "level": 3
}, {
  "value": "방문 PC 선택",
  "id": "settings-visitor-assign-pc",
  "level": 3
}, {
  "value": "방문자 신청 페이지 바로가기",
  "id": "settings-visitor-pc-link",
  "level": 3
}, {
  "value": "약관 &amp; 방문자 설정하기",
  "id": "settings-visitor-terms",
  "level": 2
}, {
  "value": "커스텀 방문자 필드 설정하기",
  "id": "settings-visitor-custom-field",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcEdit, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "방문자 관리를 위해 방문처와 방문 PC를 구성할 수 있으며, 방문자를 위한 출입 약관 및 안내 문구를 설정할 수 있습니다. 또한 커스텀 방문자 필드를 이용해 방문자에게 요구할 정보를 직접 추가할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.visitor",
              product: "2"
            }), " 설정은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "어드밴스"
            }), "(Advanced) 라이선스 이상에서 추가 옵션을 통해 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.visitor",
              product: "2"
            }), " 메뉴를 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.serverMatching.use",
              product: "2"
            }), " 옵션을 활성화해야 합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settings-visitor",
      children: "방문 설정"
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
            sid: "common.visitor",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다음 안내에 따라 방문자 설정을 구성하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "settings-visitor-site",
          children: "방문처 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "각 방문처의 방문 신청용 또는 방문자 관리용 PC에서 사용할 출입 그룹과 카드 사용 여부를 설정할 수 있습니다. 카드를 사용할 경우 카드 종류 및  데이터 형식도 설정할 수 있습니다."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-site-settings.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.configure.th.name",
                product: "2"
              }), ": 방문처의 이름을 입력할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "방문처 이름은 최대 48자까지 입력할 수 있습니다."
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.accessGroup",
                product: "2"
              }), ": 방문자에게 할당할 출입 그룹을 선택할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["방문자를 위한 출입 그룹을 미리 설정해 놓으면 관리가 용이합니다. 출입 그룹 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-access-control-manage-access-group",
                  children: "다음 문서"
                }), "를 참고하세요."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), " ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), ": 카드 사용 여부를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardType",
                product: "2"
              }), ": 방문처에서 사용할 카드 종류를 선택할 수 있습니다. 카드 종류는 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), " ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), "을 설정할 경우에만 활성화됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardEnrol.cardFormat",
                product: "2"
              }), ": 카드 데이터를 읽는 형식을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardEnrol.cardFormat",
                product: "2"
              }), "은 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardType",
                product: "2"
              }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardEnrol.cardTypeWiegand",
                product: "2"
              }), "로 설정할 경우에만 활성화됩니다."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문처 설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.setting.button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "settings-visitor-pc",
          children: "방문 PC 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "방문 신청용 또는 방문자 관리용 PC를 설정할 수 있습니다."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-visit-pc-settings.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.name",
                product: "2"
              }), ": 방문 신청용 또는 방문자 관리용 PC의 이름을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerPrint",
                product: "2"
              }), " ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.enrollment_device.device_name",
                product: "2"
              }), ": 방문자가 지문 인증을 통해 출입할 경우 방문자의 지문을 등록할 장치를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), " ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.enrollment_device.device_name",
                product: "2"
              }), ": 방문자가 카드 인증을 통해 출입할 경우 카드를 발급할 장치를 선택하세요. 카드 장치 이름은 카드 사용을 선택한 방문처를 설정한 경우에만 활성화됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.site",
                product: "2"
              }), ": 해당 방문 PC에서 방문을 관리할 방문처를 선택하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문 PC 설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.setting.button.apply",
            product: "2"
          }), "을 클릭하세요."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "방문 PC 이름은 최대 48자까지 입력할 수 있습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "지문 및 카드 장치를 동시에 사용할 수 있으며 각각 1대씩 선택할 수 있습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "방문처는 PC당 1개만 선택할 수 있습니다."
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "settings-visitor-assign-pc",
          children: "방문 PC 선택"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.pc.setting",
            product: "2"
          }), "에서 설정한 PC를 선택하여 사용 중인 PC에 할당할 수 있습니다."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-visit-pc-select.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.setting.button.apply",
            product: "2"
          }), "을 클릭하세요."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "settings-visitor-pc-link",
          children: "방문자 신청 페이지 바로가기"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문 신청용 PC의 바탕 화면에 방문 신청 페이지 바로가기 아이콘을 생성할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.link.visitPCKIOSK",
            product: "2"
          }), " 항목의 URL 주소를 바탕 화면에 끌어다 놓으세요."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-page-shortcut.png"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "웹 브라우저에서 URL 주소로 접속하면 방문 신청 페이지를 확인할 수 있습니다."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-welcome-screen.png"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settings-visitor-terms",
      children: "약관 & 방문자 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "방문자 출입 약관, 개인정보 처리 방침, 안내 문구 등 방문자 관련 주요 설정을 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-terms-visitor-settings.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "출입 이용 약관"
          }), ": 출입에 대한 이용 약관 및 약관 동의 문구를 입력할 수 있습니다. ", (0,jsx_runtime.jsx)(IcEdit, {}), "을 클릭해 입력 필드를 활성화한 뒤 이용 약관 및 약관 동의 문구를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "출입 약관은 최대 65,535자까지 입력할 수 있습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "약관 동의 문구는 최대 64자까지 입력할 수 있습니다."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "개인 정보 처리 방침"
          }), ": 방문자가 방문 시 제공한 개인 정보에 대한 처리 방침 및 해당 방침에 대한 동의 문구를 입력할 수 있습니다. ", (0,jsx_runtime.jsx)(IcEdit, {}), "을 클릭해 입력 필드를 활성화한 뒤 개인 정보 처리 방침 및 해당 방침에 대한 동의 문구를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "개인 정보 처리 방침은 최대 65,535자까지 입력할 수 있습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "개인 정보 처리 방침에 대한 동의 문구는 최대 64자까지 입력할 수 있습니다."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.periodKeepSensitive",
            product: "2"
          }), ": 방문자가 방문 시 제공한 개인 정보에 대한 보관 기간을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(IcEdit, {}), "을 클릭해 입력 필드를 활성화한 뒤 개인 정보 보관 기간을 일 단위로 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["개인 및 민감 정보 보관 기간이 만료된 방문자 목록은 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.visitor",
                product: "2"
              }), " 메뉴에서 삭제할 수 있습니다."]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.guideAfterRegister",
            product: "2"
          }), ": 방문 신청 완료 시 팝업 화면으로 표시할 안내 문구를 입력할 수 있습니다. ", (0,jsx_runtime.jsx)(IcEdit, {}), "을 클릭해 입력 필드를 활성화한 뒤 안내 문구를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "방문 신청 완료 시 안내 문구는 최대 65,535자까지 입력할 수 있습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "안내 문구를 입력하지 않을 경우 방문 신청 완료 시 안내 문구 팝업 화면이 출력되지 않습니다."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.defaultActivePeriod",
            product: "2"
          }), ": 방문자의 출입에 대한 허가 기간을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(IcEdit, {}), "을 클릭해 입력 필드를 활성화한 뒤 방문자 기본 출입 허가 기간을 일 단위로 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settings-visitor-custom-field",
      children: "커스텀 방문자 필드 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "방문자의 부가 정보를 입력할 필드를 추가할 수 있으며, 추가된 필드는 방문 신청 화면에 나타납니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-custom-visitor-field.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.order",
            product: "2"
          }), ": 사용자 정의로 추가한 입력 필드의 순서를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.name",
            product: "2"
          }), ": 사용자 정의로 추가한 입력 필드의 이름을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type",
            product: "2"
          }), ": 문자 입력 상자, 숫자 입력 상자, 선택 상자를 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.data",
            product: "2"
          }), ":선택 상자 목록에 표시할 선택지를 입력하세요. 각 항목은 세미 콜론(;) 기호로 구분합니다. 데이터는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type",
            product: "2"
          }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.combobox",
            product: "2"
          }), "로 설정한 경우에만 활성화됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "visitor.setting.button.apply",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.textbox",
              product: "2"
            }), "로 추가된 커스텀 방문자 필드에는 숫자와 문자를 입력할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.numericbox",
              product: "2"
            }), "로 추가된 커스텀 방문자 필드에는 숫자만 입력할 수 있으며, 문자는 입력할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.combobox",
              product: "2"
            }), "로 추가된 커스텀 방문자 필드는 방문자가 항목을 선택할 수 있습니다. 커스텀 방문자 필드를 설정할 때 데이터에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 1"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 2"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 3"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 4"
            }), "를 입력하세요."]
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