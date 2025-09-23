"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7046"], {
99020: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_device_biostation_2_a_user_mdx_c75_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-2-a-user-mdx-c75.json
var site_docs_device_biostation_2_a_user_mdx_c75_namespaceObject = JSON.parse('{"id":"device/biostation_2a/user","title":"사용자","description":"사용자 등록, 수정, 삭제 및 관리 방법을 설명합니다.","source":"@site/docs/device/biostation_2a/user.mdx","sourceDirName":"device/biostation_2a","slug":"/device/biostation_2a/user","permalink":"/docs/en/device/biostation_2a/user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_2a/user.mdx","tags":[],"version":"current","frontMatter":{"id":"user","title":"사용자","description":"사용자 등록, 수정, 삭제 및 관리 방법을 설명합니다.","keywords":["등록","수정","삭제","관리"],"isTranslationMissing":true},"sidebar":"biostation2a","previous":{"title":"관리자 메뉴","permalink":"/docs/en/device/biostation_2a/admin-menu"},"next":{"title":"인증","permalink":"/docs/en/device/biostation_2a/authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/device/biostation_2a/user.mdx


const frontMatter = {
	id: 'user',
	title: '사용자',
	description: '사용자 등록, 수정, 삭제 및 관리 방법을 설명합니다.',
	keywords: [
		'등록',
		'수정',
		'삭제',
		'관리'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자 정보 등록",
  "id": "registering-user-information",
  "level": 2
}, {
  "value": "사용자 정보 편집",
  "id": "사용자-정보-편집",
  "level": 2
}, {
  "value": "사용자 전체 삭제",
  "id": "사용자-전체-삭제",
  "level": 2
}, {
  "value": "사용자 등록현황 보기",
  "id": "사용자-등록현황-보기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcBw, IcDown, IcFw, IcUp, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcDown) _missingMdxReference("IcDown", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!IcUp) _missingMdxReference("IcUp", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 등록, 수정, 삭제 및 관리 방법을 설명합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registering-user-information",
      children: "사용자 정보 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "지문을 포함한 사용자 정보를 등록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "사용자"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "사용자 등록"
          }), "을 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-user-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 항목을 선택한 뒤 ", (0,jsx_runtime.jsx)(IcBw, {}), " 버튼을 누르세요. 항목을 설정한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 누르면 사용자 정보가 등록됩니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "ID"
              }), ": 1~4294967295 숫자를 입력해 사용자 ID를 등록할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                children: "사용자 ID 종류"
              }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "영숫자"
              }), "로 설정한 경우 영숫자와 기호 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "_"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-"
              }), "의 조합을 ID로 사용할 수 있으며, 최대 32자까지 입력할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "이름"
              }), ": 숫자 버튼을 이용하여 사용자 이름을 입력할 수 있습니다. ", (0,jsx_runtime.jsx)(IcUp, {}), "/", (0,jsx_runtime.jsx)(IcDown, {}), " 버튼을 눌러 알파벳이나 숫자를 선택할 수 있으며 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "F1"
              }), "/", (0,jsx_runtime.jsx)(_components.strong, {
                children: "F2"
              }), "를 누르면 더 많은 문자를 확인할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "PIN"
              }), ": 사용하려는 PIN을 입력할 수 있습니다. PIN을 입력한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "를 누르세요. 확인을 위해 한 번 더 PIN을 입력한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "를 누르세요. PIN은 유출 방지를 위해 4~16자리 숫자를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "지문"
              }), ": 사용자 인증을 위한 지문을 등록할 수 있습니다. 등록할 손가락의 지문을 스캔한 뒤 동일한 손가락의 지문을 한 번 더 스캔하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "카드"
              }), ": 사용자 인증을 위한 카드를 등록할 수 있습니다. 사용자에게 할당할 카드를 스캔하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "사용자 권한"
              }), ": 사용자에게 할당할 권한을 선택할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: "설정된 사용자 권한에 따라 사용할 수 있는 메뉴가 다릅니다."
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "권한 없음"
                    }), ": 일반 사용자 등급이며 메뉴를 사용할 수 없습니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "전체 관리자"
                    }), ": 모든 메뉴를 사용할 수 있습니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "설정 관리자"
                    }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "인증"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "화면과 소리"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "장치"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "통신"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "이벤트 로그"
                    }), " 메뉴를 사용할 수 있습니다."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      children: "사용자 관리자"
                    }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "사용자"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      children: "이벤트 로그"
                    }), " 메뉴를 사용할 수 있습니다."]
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "시작 날짜"
              }), ": 사용자 계정 사용을 시작할 날짜를 설정할 수 있습니다. 숫자 버튼을 눌러 날짜를 입력하세요. ", (0,jsx_runtime.jsx)(IcFw, {}), " 버튼으로 입력한 날짜를 삭제할 수 있으며. ", (0,jsx_runtime.jsx)(IcBw, {}), " 버튼으로 구분 기호를 입력할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "만료 날짜"
              }), ": 사용자 계정 사용을 중지할 날짜를 설정할 수 있습니다. 숫자 버튼을 눌러 날짜를 입력하세요. ", (0,jsx_runtime.jsx)(IcFw, {}), " 버튼으로 입력한 날짜를 삭제할 수 있으며. ", (0,jsx_runtime.jsx)(IcBw, {}), " 버튼으로 구분 기호를 입력할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "보안 등급"
              }), ": 1:1 인증을 위한 보안 등급을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "협박 지문"
              }), ": 협박 지문으로 등록하려면 선택하세요. 누군가에게 협박을 당하거나 강제로 출입문을 열어야 할 경우 이 지문으로 인증하면 BioStar 2에 알람 신호를 보낼 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "개인 인증 모드"
              }), ": 사용자에 따른 인증 방식을 변경할 수 있습니다. 원하는 항목을 선택한 뒤 ", (0,jsx_runtime.jsx)(IcFw, {}), "/", (0,jsx_runtime.jsx)(IcBw, {}), " 버튼으로 설정을 변경할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-정보-편집",
      children: "사용자 정보 편집"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 관리자나 전체 관리자가 등록된 사용자 정보를 수정할 수 있습니다. 사용자의 지문이나 카드를 추가할 수 있으며, PIN 및 권한을 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "사용자"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "사용자 검색"
          }), "을 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-user-edt.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용할 검색 수단을 선택한 뒤 ", (0,jsx_runtime.jsx)(IcBw, {}), " 버튼을 누르세요. ", (0,jsx_runtime.jsx)(Cmd, {
            children: "ID"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            children: "이름"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            children: "지문"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            children: "카드"
          }), "로 사용자를 검색할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["검색 수단을 선택하지 않고 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), "를 누르면 모든 사용자 목록이 나타납니다."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["수정하려는 사용자를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "F2"
          }), "를 누르세요. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-user-information",
            children: "사용자 정보 등록"
          }), "을 참고하여 정보를 수정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["사용자를 삭제하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "F3"
            }), "를 누른 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), "를 누르세요."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "출입 그룹"
        }), "은 BioStar 2에서 등록할 수 있습니다. 출입 그룹 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../platform/biostar_x/settings-access-control-manage-access-group#addAccessGroup",
          children: "BioStar 2 관리자 설명서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-전체-삭제",
      children: "사용자 전체 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 모든 사용자를 한 번에 삭제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "사용자"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "사용자 삭제"
          }), "를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 누르세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-delete-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["전체 사용자를 삭제하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 누르세요. 이전 화면으로 돌아가려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-등록현황-보기",
      children: "사용자 등록현황 보기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 사용자, 지문, 카드 수를 한 눈에 볼 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "사용자"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "사용자 등록현황"
          }), "을 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 누르세요. 사용자 등록현황을 확인할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-user-usage.png"
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