"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9075"], {
490: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_reference_master_admin_mdx_2f0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reference-master-admin-mdx-2f0.json
var site_docs_reference_master_admin_mdx_2f0_namespaceObject = JSON.parse('{"id":"reference/master-admin","title":"마스터 관리자 기능 소개 및 설정 방법 안내","description":"마스터 관리자 기능의 소개와 설정 방법을 안내합니다.","source":"@site/docs/reference/master-admin.mdx","sourceDirName":"reference","slug":"/reference/master-admin","permalink":"/docs/reference/master-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/reference/master-admin.mdx","tags":[],"version":"current","frontMatter":{"id":"master-admin","title":"마스터 관리자 기능 소개 및 설정 방법 안내","description":"마스터 관리자 기능의 소개와 설정 방법을 안내합니다.","keywords":["마스터 관리자","마스터","Master Admin"],"isTranslationMissing":false},"sidebar":"reference","previous":{"title":"참조 문서","permalink":"/docs/reference/"},"next":{"title":"용어집","permalink":"/docs/reference/glossary"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/reference/faqs.json
var faqs_namespaceObject = JSON.parse('[{"question":"마스터 관리자를 등록하지 않으면 어떻게 되나요?","answer":"마스터 관리자가 등록되지 않은 경우, 장치 설정 저장 시 경고 메시지가 안내되며, 관리자 메뉴 접근에 제한이 발생합니다."},{"question":"기존 장치에서 펌웨어 업그레이드한 장치에서 마스터 관리자 설정이 지원되나요?","answer":"아니요. 기존 장치에서 펌웨어 업그레이드한 장치는 마스터 관리자 설정이 제공되지 않습니다. 단, 관리자 2단계 인증 옵션을 통해 전체 관리자의 권한을 강화하여 장치의 보안을 향상시킬 수 있습니다. <b>관리자 2단계 인증 옵션</b>은 <a href=\'#admin-two-step-authentication\'>다음 문서</a>를 참고하세요."},{"question":"슬레이브 장치에서도 마스터 관리자를 등록할 수 있나요?","answer":"네. 슬레이브 장치에서도 마스터 관리자를 등록할 수 있습니다."}]')
;// CONCATENATED MODULE: ./docs/reference/master-admin.mdx


const frontMatter = {
	id: 'master-admin',
	title: '마스터 관리자 기능 소개 및 설정 방법 안내',
	description: '마스터 관리자 기능의 소개와 설정 방법을 안내합니다.',
	keywords: [
		'마스터 관리자',
		'마스터',
		'Master Admin'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*:::warning

**마스터 관리자 미등록 시 경고 메시지**

마스터 관리자 또는 그에 준하는 설정이 되어 있지 않은 경우, 설정 저장 시 경고 팝업 메시지로 안내합니다.

<Image src='/img/techdochub/no-register-master-admin.png' alone caption />

:::*/



const toc = [{
  "value": "마스터 관리자 기능 설정",
  "id": "마스터-관리자-기능-설정",
  "level": 2
}, {
  "value": "마스터 관리자란?",
  "id": "마스터-관리자란",
  "level": 3
}, {
  "value": "마스터 관리자 지원 제품 안내",
  "id": "마스터-관리자-지원-제품-안내",
  "level": 3
}, {
  "value": "신규 장치와 업그레이드 장치에서 관리자 보안을 향상시키는 방법",
  "id": "신규-장치와-업그레이드-장치에서-관리자-보안을-향상시키는-방법",
  "level": 2
}, {
  "value": "신규 장치",
  "id": "신규-장치",
  "level": 3
}, {
  "value": "신규 장치에서 마스터 관리자 등록하기",
  "id": "신규-장치에서-마스터-관리자-등록하기",
  "level": 4
}, {
  "value": "신규 장치에서 마스터 관리자 관리하기",
  "id": "신규-장치에서-마스터-관리자-관리하기",
  "level": 4
}, {
  "value": "업그레이드 장치",
  "id": "업그레이드-장치",
  "level": 3
}, {
  "value": "업그레이드 장치에서 관리자 2단계 인증 설정하기",
  "id": "admin-two-step-authentication",
  "level": 4
}, {
  "value": "안내 사항",
  "id": "안내-사항",
  "level": 2
}, {
  "value": "자주 묻는 질문",
  "id": "자주-묻는-질문",
  "level": 2
}, {
  "value": "[TBD] BioStar 2에서 마스터 관리자 설정하기",
  "id": "tbd-biostar-2에서-마스터-관리자-설정하기",
  "level": 2
}, {
  "value": "[TBD] 마스터 관리자 일괄 편집하기",
  "id": "tbd-마스터-관리자-일괄-편집하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Details, FaqsItems, Image, Row, Table, Tbody, Td, Th} = _components;
  if (!Details) _missingMdxReference("Details", true);
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "마스터 관리자"
      }), " 기능은 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "전체 관리자 권한을 강화"
      }), "하여, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "장치의 보안을 향상"
      }), "시키고 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "무단 접근 및 설정 변경을 방지"
      }), "하기 위한 기능입니다.", (0,jsx_runtime.jsx)("br", {}), "이 기능을 통해 장치에는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "반드시 마스터 관리자를 등록"
      }), "해야 하며, 등록된 마스터 관리자만 관리자 메뉴에 진입하여 장치 설정을 변경할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "마스터 관리자"
      }), " 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LCD 화면을 통한 사용자 인터페이스가 지원되는 슈프리마 제품"
      }), "에서만 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능은 장치의 보안성을 강화하기 위한 필수 정책입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["마스터 관리자는 여러 명 등록할 수 있으며, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "공장 초기화 시에만 삭제됩니다"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "마스터-관리자-기능-설정",
      children: "마스터 관리자 기능 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "마스터-관리자란",
      children: "마스터 관리자란?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치에 마스터 관리자를 설정하지 않고 사용하는 경우, 누구나 관리자 메뉴에 진입하여 장치 설정을 변경할 수 있습니다. 마스터 관리자 기능은 이러한 보안 취약점을 해결하기 위해 전체 관리자 설정을 강제하는 기능입니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "마스터-관리자-지원-제품-안내",
      children: "마스터 관리자 지원 제품 안내"
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/techdochub/BioStation 3-Front.png",
              className: "none",
              alone: true,
              width: "110px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/techdochub/BioStation 2a-front.png",
              className: "none",
              alone: true,
              width: "150px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/techdochub/BioLite N2-Front.png",
              className: "none",
              alone: true,
              width: "100px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/techdochub/X-Station 2-DPB-APB-Front.png",
              className: "none",
              alone: true,
              width: "100px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/techdochub/X-Station 2-ODPB-OAPB-Front.png",
              className: "none",
              alone: true,
              width: "100px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/techdochub/X-Station 2-QDPB-QAPB-Front.png",
              className: "none",
              alone: true,
              width: "90px"
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 3"
            }), (0,jsx_runtime.jsx)("br", {}), "[BS3-DB]", (0,jsx_runtime.jsx)("br", {}), "[BS3-APWB]"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 2a"
            }), (0,jsx_runtime.jsx)("br", {}), "[BS2A-ODPB]", (0,jsx_runtime.jsx)("br", {}), "[BS2A-OAPWB]"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioLite N2"
            }), (0,jsx_runtime.jsx)("br", {}), "[BLN2-ODB]", (0,jsx_runtime.jsx)("br", {}), "[BLN2-OAB]", (0,jsx_runtime.jsx)("br", {}), "[BLN2-PAB]"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Station 2"
            }), (0,jsx_runtime.jsx)("br", {}), "[XS2-DPB]", (0,jsx_runtime.jsx)("br", {}), "[XS2-APB]"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Station 2"
            }), (0,jsx_runtime.jsx)("br", {}), "[XS2-ODPB]", (0,jsx_runtime.jsx)("br", {}), "[XS2-OAPB]"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Station 2"
            }), (0,jsx_runtime.jsx)("br", {}), "[XS2-QDPB]", (0,jsx_runtime.jsx)("br", {}), "[XS2-QAPB]"]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-장치와-업그레이드-장치에서-관리자-보안을-향상시키는-방법",
      children: "신규 장치와 업그레이드 장치에서 관리자 보안을 향상시키는 방법"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "신규-장치",
      children: "신규 장치"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["신규 장치에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "마스터 관리자"
      }), "를 필수적으로 등록해야하며, 등록하지 않을 경우 장치 사용이 제한됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["신규 장치에서는 최초 부팅 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "마스터 관리자"
            }), " 등록 화면이 나타납니다. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "마스터 관리자"
            }), "를 등록하지 않으면 다음 화면으로 이동할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2와 연결하여 장치 전체 관리자를 할당하더라도 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "마스터 관리자"
            }), "를 등록해야만 모든 기능을 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "신규 장치는 펌웨어 다운그레이드를 할 수 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "신규 장치에서 마스터 관리자 등록하기"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "신규-장치에서-마스터-관리자-등록하기",
        children: "신규 장치에서 마스터 관리자 등록하기"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["신규 장치를 최초 부팅하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "마스터 관리자"
            }), " 등록 화면이 나타납니다."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/techdochub/setting-master-admin-1.png",
            caption: true,
            width: "300px"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "마스터 관리자"
            }), "를 등록하기 위해 최소 두 종류 이상의 크리덴셜을 등록해야 합니다. 원하는 크리덴셜 두 종류를 선택하여 등록하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/techdochub/setting-master-admin-2.png",
            caption: true,
            width: "300px"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "마스터 관리자"
            }), "에 등록할 수 있는 크리덴셜은 다음과 같습니다."]
          }), "\n", (0,jsx_runtime.jsx)(Table, {
            children: (0,jsx_runtime.jsxs)(Tbody, {
              children: [(0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Th, {
                  children: "크리덴셜 종류"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "등록 가능 개수"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "세부 조건"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "카드"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "최대 4개"
                }), (0,jsx_runtime.jsxs)(Td, {
                  children: ["CSN, Wiegand 타입만 지원", (0,jsx_runtime.jsx)("br", {}), "동일 타입 내 중복 등록 불가"]
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "얼굴"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "최대 2개"
                }), (0,jsx_runtime.jsxs)(Td, {
                  children: ["동종 알고리즘 탑재 장치에서만 등록 가능", (0,jsx_runtime.jsx)("br", {}), "IR Face, Visual Face 모델로 구분"]
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "지문"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "최대 2개"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "유효성 검사 기능은 제공하지 않음"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "PIN"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "1개"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "최소 8자리 이상"
                })]
              })]
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "등록 조건"
              })
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "최소 두 종류 이상의 크리덴셜을 등록해야 합니다."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "신규 장치와 업그레이드 장치 모두 동일한 조건이 적용됩니다."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "장치가 지원하는 모든 크리덴셜을 인증 수단으로 사용할 수 있습니다."
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["두 종류 이상의 크리덴셜을 등록한 후, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "완료"
            }), " 버튼을 누르면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "마스터 관리자"
            }), " 등록이 완료됩니다."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/techdochub/setting-master-admin-3.png",
            caption: true,
            width: "300px"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "신규 장치에서 마스터 관리자 관리하기"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "신규-장치에서-마스터-관리자-관리하기",
        children: "신규 장치에서 마스터 관리자 관리하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["신규 장치에서 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "마스터 관리자"
        }), " 설정은 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "설정 → 장치 → 마스터 관리자"
        }), " 메뉴에서 변경할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)("div", {
        className: "grid-container",
        children: [(0,jsx_runtime.jsx)(Image, {
          src: "/img/techdochub/edit-master-admin-1.png",
          caption: true,
          width: "300px"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/techdochub/setting-master-admin-4.png",
          caption: true,
          width: "300px"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "업그레이드-장치",
      children: "업그레이드 장치"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["펌웨어를 업그레이드한 장치는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "마스터 관리자"
      }), " 설정을 제공하지 않지만, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "관리자 2단계 인증"
      }), " 옵션을 통해 전체 관리자의 권한을 강화하여 장치의 보안을 향상시킬 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "관리자 2단계 인증"
            }), " 옵션을 활성화하지 않은 상태에서는 1단계 인증이 기본값입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치에 등록된 관리자의 크리덴셜이 두 종류 이상인 경우에만 2단계 인증을 활성화할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "업그레이드 장치는 펌웨어 다운그레이드를 할 수 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "업그레이드 장치에서 관리자 2단계 인증 설정하기"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "admin-two-step-authentication",
        children: "업그레이드 장치에서 관리자 2단계 인증 설정하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "설정 → 장치 → 관리자 2단계 인증"
        }), " 메뉴에서 관리자 2단계 인증을 활성화할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "관리자 2단계 인증"
          }), " 옵션은 기존에 사용하던 장치에서 펌웨어를 최신 버전으로 업그레이드 한 경우에만 표시됩니다."]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/techdochub/setting-two-step-authentication.png",
        caption: true,
        width: "300px"
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "info",
        children: [(0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "관리자 2단계 인증"
              }), " 옵션은 슬레이브 장치에서는 표시되지 않습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모든 관리자에게 두 종류 이상의 크리덴셜이 등록되어 있지 않을 때 활성화 시 설정이 실패하며 에러 메시지가 표시됩니다."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/techdochub/error-two-step-authentication.png",
          caption: true,
          width: "300px"
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "warning",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "관리자 2단계 인증"
            }), "을 활성화한 후 모든 관리자의 크리덴셜을 2종 미만으로 삭제하면, BioStar 2에 연결할 수 없는 상황에서 관리자 메뉴에 접근할 수 없게 됩니다. 따라서 관리자 크리덴셜을 삭제할 때는 각별한 주의가 필요합니다."]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "안내-사항",
      children: "안내 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "장치 해시키 수동 변경 시"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "장치 해시키를 수동으로 변경할 경우 마스터 관리자의 PIN이 삭제된다는 경고 메시지가 표시되므로 메시지를 확인한 후 변경하세요."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RS-485 통신구간 얼굴 이미지 전송 제한"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RS-485 통신구간에서는 바이오메트릭 크리덴셜 이미지가 전송되지 않으므로, 슬레이브 장치의 마스터 관리자 얼굴 조회 시 대체 이미지를 표시합니다."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "자주-묻는-질문",
      children: "자주 묻는 질문"
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: faqs_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tbd-biostar-2에서-마스터-관리자-설정하기",
      children: "[TBD] BioStar 2에서 마스터 관리자 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "마스터 관리자 기능은 BioStar 2 v2.9.11부터 지원됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어를 업그레이드한 기존 장치는 BioStar 2 관리자 설정에 마스터 관리자 메뉴가 나타나지 않습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tbd-마스터-관리자-일괄-편집하기",
      children: "[TBD] 마스터 관리자 일괄 편집하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "관리자 2단계 인증 및 크리덴셜 등록을 일괄 편집할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일괄 편집 시 등록한 크리덴셜로 덮어쓰여 집니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴, 지문, 카드, PIN을 등록할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "선택된 장치가 크리덴셜을 지원하지 않는 경우, 해당 장치는 편집 실패됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치의 경우에도 최소 2개 조건을 충족해야 하며, 미충족 시 해당 장치만 편집 실패 처리됩니다."
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