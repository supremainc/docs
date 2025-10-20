"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4274"], {
86283: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_device_details_advanced_mdx_8d4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-device-details-advanced-mdx-8d4.json
var site_docs_platform_biostar_x_settings_device_details_advanced_mdx_8d4_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-advanced","title":"고급 설정하기","description":"고급 설정 섹션에서 마스터 관리자, 장치 관리자, 화면/소리, 작업 조건 및 동작 등을 설정할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-device-details-advanced.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-advanced","permalink":"/docs/platform/biostar_x/settings-device-details-advanced","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-advanced.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-advanced","title":"고급 설정하기","description":"고급 설정 섹션에서 마스터 관리자, 장치 관리자, 화면/소리, 작업 조건 및 동작 등을 설정할 수 있습니다.","keywords":["장치","고급"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"인증 설정하기","permalink":"/docs/platform/biostar_x/settings-device-details-auth"},"next":{"title":"열화상 및 마스크 설정하기","permalink":"/docs/platform/biostar_x/settings-device-details-thermal-mask"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-device-details-advanced.mdx


const frontMatter = {
	id: 'settings-device-details-advanced',
	title: '고급 설정하기',
	description: '고급 설정 섹션에서 마스터 관리자, 장치 관리자, 화면/소리, 작업 조건 및 동작 등을 설정할 수 있습니다.',
	keywords: [
		'장치',
		'고급'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "마스터 관리자 추가",
  "id": "master-administrator",
  "level": 2
}, {
  "value": "2단계 인증 설정",
  "id": "two-step-authentication",
  "level": 2
}, {
  "value": "관리자 추가",
  "id": "administrator",
  "level": 2
}, {
  "value": "근태 관리",
  "id": "attendance-management",
  "level": 2
}, {
  "value": "화면 및 소리 설정",
  "id": "screen-and-sound-settings",
  "level": 2
}, {
  "value": "작업 조건 및 동작 설정",
  "id": "triggerAction",
  "level": 2
}, {
  "value": "이미지 로그 설정",
  "id": "image-log-settings",
  "level": 2
}, {
  "value": "Wiegand 설정",
  "id": "wiegang-settings",
  "level": 2
}, {
  "value": "보안 탬퍼 설정",
  "id": "tamper-settings",
  "level": 2
}, {
  "value": "아날로그 인터폰 설정",
  "id": "analog-intercom-settings",
  "level": 2
}, {
  "value": "카메라 설정",
  "id": "camera-settings",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, IcAdd, IcEdit, IcSearch, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.advanced",
        product: "2"
      }), " 섹션에서 설정할 수 있는 항목에 대해 안내합니다. 마스터 관리자, 관리자 권한 관리, 근태 이벤트, 화면 및 소리, 작업 조건 및 동작, 이미지 로그, Wiegand, 보안 탬퍼 등 다양한 고급 기능의 설정 방법과 각 옵션의 의미를 확인할 수 있습니다. 환경에 맞는 설정을 적용해 효율적으로 장치를 관리하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 종류에 따라 설정할 수 있는 네트워크 옵션은 다를 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자가 임의로 변경한 사항이 있다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " 버튼을 클릭하세요. 변경 사항을 저장하지 않으면 장치에 적용되지 않습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "master-administrator",
      children: "마스터 관리자 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), " 기능은 장치의 전체 관리자 권한을 강화하여, 장치의 보안을 향상시키고 무단 접근 및 설정 변경을 방지하기 위한 기능입니다. 새 장치는 이 기능을 통해 반드시 마스터 관리자를 등록해야 하며, 등록된 마스터 관리자만 관리자 메뉴에 진입하여 설정을 변경할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.advanced",
        product: "2"
      }), " →  ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.administrator",
        product: "2"
      }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), " 메뉴에서 원하는 크리덴셜 2종류를 선택하여 등록하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-adv-admin-master-admin.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), "에 등록할 수 있는 크리덴셜은 다음과 같습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "크리덴셜 종류"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "등록 가능 개수"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "세부 조건"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "카드"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "최대 4개"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSN, Wiegand 타입만 지원하며, 동일 타입 내 중복 등록할 수 없습니다."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "얼굴"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "최대 2개"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "동종 알고리즘 탑재 장치에서만 등록할 수 있습니다."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "지문"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "최대 2개"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1개"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "최소 8자리 이상의 숫자를 입력할 수 있습니다."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["등록한 크리덴셜을 변경하려면 해당 크리덴셜 오른쪽에 ", (0,jsx_runtime.jsx)(IcEdit, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["등록한 크리덴셜을 삭제하려면 해당 크리덴셜 오른쪽에 ", (0,jsx_runtime.jsx)(IcTrash2, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
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
            children: "새 장치와 펌웨어 업그레이드 장치 모두 동일한 조건이 적용됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치가 지원하는 모든 크리덴셜을 인증 수단으로 사용할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능은 LCD 화면을 통한 사용자 인터페이스가 지원되는 슈프리마 제품에서만 사용할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어를 업그레이드한 기존 장치는 BioStar 2의 장치 설정에 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title",
              product: "2"
            }), " 메뉴가 나타나지 않습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어를 업그레이드한 기존 장치는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title",
              product: "2"
            }), " 설정을 제공하지 않지만, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title",
              product: "2"
            }), " 옵션을 통해 전체 관리자의 권한을 강화하여 장치의 보안을 향상시킬 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title",
              product: "2"
            }), " 설정 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#two-step-authentication",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이 기능을 지원하는 장치 및 펌웨어 버전에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../how-to/master-admin",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "two-step-authentication",
      children: "2단계 인증 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["펌웨어를 업그레이드한 기존 장치는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), " 설정을 제공하지 않지만, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title",
        product: "2"
      }), " 옵션을 통해 전체 관리자의 권한을 강화하여 장치의 보안을 향상시킬 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-adv-two-step.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title",
        product: "2"
      }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.use",
        product: "2"
      }), "으로 설정하면, 장치의 전체 관리자 인증 시 두 종류 이상의 크리덴셜을 사용해야 합니다. 예를 들어, 카드와 PIN을 모두 등록한 경우, 전체 관리자 인증 시 카드 스캔과 PIN 입력을 모두 해야만 인증을 성공할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "모든 관리자에게 두 종류 이상의 크리덴셜이 등록되어 있지 않을 때 활성화 시 설정이 실패하며 에러 메시지가 표시됩니다. 모든 관리자에게 두 종류 이상의 크리덴셜을 등록한 다음 다시 시도하세요."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-device-adv-error-admin.png"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치에 전체 관리자가 설정되어 있지 않은 경우 다음과 같은 팝업 메시지가 나타납니다. ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.advanced",
          product: "2"
        }), " →  ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.administrator",
          product: "2"
        }), "에서 모든 권한에 관리자를 추가하세요."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-device-adv-warning-admin.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.masterAdmin.twoStepAuth.title",
          product: "2"
        }), "을 활성화한 후 모든 관리자의 크리덴셜을 2종 미만으로 삭제하면, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "에 연결할 수 없는 상황일 때 장치에서 관리자 메뉴에 접근할 수 없게 됩니다. 따라서 관리자 크리덴셜을 삭제할 때는 각별한 주의가 필요합니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "administrator",
      children: "관리자 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.administrator",
        product: "2"
      }), " 그룹에서는 장치의 관리자를 등급별로 관리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-administrator.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["등급별 관리자를 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), " 버튼을 클릭하세요. 사용자 목록이 나타나면 원하는 사용자를 선택하세요. 사용자 목록에서 ", (0,jsx_runtime.jsx)(IcSearch, {}), " 버튼을 클릭하면 원하는 사용자를 검색할 수도 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "각 등급별 사용 권한은 아래를 참고하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "등급"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "사용자 정보 관리"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "장치 설정"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.all",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.user",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "❌"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.configuration",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "❌"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "관리자는 최대 1,000명까지 추가해 관리할 수 있습니다. 추가할 수 있는 관리자 수는 장치 펌웨어 버전에 따라 달라질 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["등록한 사용자를 검색하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.admin.searchTitle",
              product: "2"
            }), "에서 ", (0,jsx_runtime.jsx)(IcSearch, {}), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "장치 설정"
            }), "은 장치의 화면 및 소리, 네트워크, RS-485 등의 설정을 변경할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["관리자를 삭제하려면 해당 관리자의 오른쪽에 ", (0,jsx_runtime.jsx)(IcTrash2, {}), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["각 장치에 설정된 관리자는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 권한에 영향을 미치지 않습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendance-management",
      children: "근태 관리"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tna",
        product: "2"
      }), " 그룹에서는 장치의 근태 이벤트 이름을 변경하거나 근태 모드를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-tna.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaMode",
            product: "2"
          }), ": 근태 이벤트 등록 방법을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.unused",
                product: "2"
              }), ": 근태 이벤트를 기록할 수 없습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.byUser",
                product: "2"
              }), ": 사용자가 인증할 때 원하는 근태 이벤트를 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), ": 설정한 스케줄에 따라 근태 이벤트가 자동으로 변경됩니다. 근태 이벤트에 적용할 스케줄을 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.lastChoice",
                product: "2"
              }), ": 사용자가 마지막으로 사용한 근태 이벤트를 계속 사용할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.fixed",
                product: "2"
              }), ": 선택한 근태 이벤트만 사용할 수 있습니다. 고정으로 사용할 근태 이벤트를 선택하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaRequired",
            product: "2"
          }), ": 사용자가 인증할 때 반드시 근태 이벤트를 등록하도록 설정하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이 옵션은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.tnaMode",
              product: "2"
            }), " 옵션이 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.byUser",
              product: "2"
            }), "으로 설정되었을 때 사용할 수 있습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaEvent",
            product: "2"
          }), ": 근태 이벤트의 이름을 수정하거나 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaMode",
            product: "2"
          }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.tna.mode.bySchedule",
            product: "2"
          }), "으로 설정했을 때 사용되는 스케줄을 추가할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.eventKey",
                product: "2"
              }), ": 근태 등록에 사용할 수 있는 키 목록입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.label",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.eventKey",
                product: "2"
              }), "에 따른 근태 이벤트 이름을 변경할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.schedule",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.tnaMode",
                product: "2"
              }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), "으로 설정하면 자동으로 변경할 스케줄을 설정할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-setting-device-edit-advanced-tna-auto.png"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["LCD 화면이 없는 장치는 근태 모드를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.fixed",
              product: "2"
            }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.bySchedule",
              product: "2"
            }), "으로 설정할 수 있으며, 고정된 근태 이벤트를 등록하거나 미리 설정된 스케줄에 따라 변경되는 근태 이벤트를 등록할 수 있습니다. 지원하는 장치 종류는 BioEntry P2, BioEntry W2, XPass D2, XPass 2입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["새 스케줄 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "screen-and-sound-settings",
      children: "화면 및 소리 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 화면이나 소리에 대한 설정을 변경할 수 있습니다. 장치에 따라 설정할 수 있는 옵션은 다를 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioEntry P2, BioEntry W2, XPass D2, XPass 2"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), ": 소리를 켜거나 끌 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.ledBuzzer",
              product: "2"
            }), ": LED나 버저를 작동할 이벤트 항목을 선택하고 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.keypadBackLight",
              product: "2"
            }), ": 키패드 백라이트를 켜거나 끌 수 있습니다. 이 옵션을 활성화하면 키패드 후면의 조명이 켜집니다. 어두운 환경에서도 키를 쉽게 식별할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.keypadBackLight",
            product: "2"
          }), " 옵션은 XPass D2 하드웨어 V02M, 펌웨어 1.7.1 버전 이상에서 사용할 수 있습니다."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioStation 2, BioStation L2, BioLite N2, FaceLite"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.language",
              product: "2"
            }), ": 장치의 화면에 표시할 언어를 설정하세요. 장치에 언어 리소스 파일을 전송하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.updateResource",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), ": 장치에서 발생하는 기본 소리 크기를 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.menuTimeout",
              product: "2"
            }), ": 메뉴 화면에서 대기 화면으로 변경되는 시간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.theme",
              product: "2"
            }), ": 장치의 홈 화면 스타일을 변경하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.backlightTimeout",
              product: "2"
            }), ": 화면 조명이 자동으로 꺼지는 시간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.msgTimeout",
              product: "2"
            }), ": 메시지가 자동으로 사라지는 시간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVoice",
              product: "2"
            }), ": 알림음 대신 음성 안내를 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.background",
              product: "2"
            }), ": 장치의 홈 화면 배경에 표시할 항목을 설정하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.logo",
                  product: "2"
                }), ": 사용자가 등록한 이미지를 장치의 홈 화면에 표시할 수 있습니다. 원하는 이미지를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.notice",
                  product: "2"
                }), ": 관리자가 입력한 내용을 홈 화면에 표시할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.slideShow",
                  product: "2"
                }), ": 사용자가 등록한 최대 10장의 이미지를 슬라이드쇼로 홈 화면에 표시할 수 있습니다. 원하는 이미지를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["변경 사항을 장치에 실시간으로 반영하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " 버튼을 클릭하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["배경화면 종류를 변경할 경우 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " 버튼을 클릭해도 장치에 적용되지 않습니다. 화면 가장 아래에 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.apply",
                    product: "2"
                  }), " 버튼을 클릭하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.notice",
                    product: "2"
                  }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.slideShow",
                    product: "2"
                  }), " 옵션은 BioStation 2 모델에서 지원합니다."]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), ": 장치에서 시작, 인증 성공, 인증 실패 이벤트가 발생할 때 재생할 효과음을 설정하세요. 파일 크기가 500Kb 이하인 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "*.wav"
            }), " 파일을 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.browse",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["변경 사항을 장치에 실시간으로 반영하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.update",
                product: "2"
              }), " 버튼을 클릭하세요."]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioStation 3, BioStation A2, FaceStation 2, FaceStation F2, X-Station 2"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.language",
              product: "2"
            }), ": 장치의 화면에 표시할 언어를 설정하세요. 장치에 언어 리소스 파일을 전송하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.updateResource",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), ": 장치에서 발생하는 기본 소리 크기를 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.speakerVolume",
              product: "2"
            }), ": IP 인터폰 기능을 사용할 때 장치에서 출력되는 소리 크기를 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.micVolume",
              product: "2"
            }), ": IP 인터폰 기능을 사용할 때 장치로 입력되는 소리 크기를 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.menuTimeout",
              product: "2"
            }), ": 메뉴 화면에서 대기 화면으로 변경되는 시간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.backlightTimeout",
              product: "2"
            }), ": 화면 조명이 자동으로 꺼지는 시간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.msgTimeout",
              product: "2"
            }), ": 메시지가 자동으로 사라지는 시간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.serverPrivateMsg",
              product: "2"
            }), ": 사용자가 인증할 때 화면에 표시할 개인 메시지 사용 여부를 설정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useScreenSaver",
              product: "2"
            }), ": 장치를 사용하지 않을 때 LCD 화면 밝기를 줄여 불피요한 전력 소모를 줄일 수 있습니다. 이 기능을 활성화하지 않은 경우 장치에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useScreenSaver",
              product: "2"
            }), " 옵션을 활성화더라도 인증 성공 메시지가 표시되지 않습니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "이 옵션은 FaceStation 2, FaceStation F2, X-Station 2, BioStation 3 모델에서 지원합니다."
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVoice",
              product: "2"
            }), ": 알림음 대신 음성 안내를 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.homeScreen",
              product: "2"
            }), ": 장치의 홈 화면 배경에 표시할 항목을 설정하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.normal",
                  product: "2"
                }), ": 기본 이미지를 홈 화면에 표시합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.logo",
                  product: "2"
                }), ": 사용자가 등록한 이미지를 장치의 홈 화면에 표시할 수 있습니다. 원하는 이미지를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " 버튼을 클릭하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.notice",
                  product: "2"
                }), ": 관리자가 입력한 내용을 홈 화면에 표시할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["변경 사항을 장치에 실시간으로 반영하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " 버튼을 클릭하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["배경화면 종류를 변경할 경우 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " 버튼을 클릭해도 장치에 적용되지 않습니다. 화면 가장 아래에 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.apply",
                    product: "2"
                  }), " 버튼을 클릭하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["홈 화면을 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.logo",
                    product: "2"
                  }), "로 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.slideShow",
                    product: "2"
                  }), "로 설정하면 최대 10장의 이미지를 슬라이드쇼로 홈 화면에 표시할 수 있습니다. 원하는 이미지를 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.add",
                    product: "2"
                  }), " 버튼을 클릭하세요."]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), ": 장치에서 시작, 인증 성공, 인증 실패 이벤트가 발생할 때 재생할 효과음을 설정하세요. 파일 크기가 500Kb 이하인 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "*.wav"
            }), " 파일을 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.browse",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["변경 사항을 장치에 실시간으로 반영하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.update",
                product: "2"
              }), " 버튼을 클릭하세요."]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "triggerAction",
      children: "작업 조건 및 동작 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.triggerNAction",
        product: "2"
      }), " 그룹에서는 각 상황에 따른 작업 조건과 동작을 설정할 수 있습니다. 예를 들어, 인증에 실패하면 모든 알람을 울리거나, RS-485 연결이 끊어지면 장치를 사용하지 못하도록 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["작업 조건과 동작은 이벤트를 선택하여 등록할 수도 있고, 사용자가 원하는 작업 조건이나 동작을 설정할 수도 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.triggerNAction",
        product: "2"
      }), " 그룹에서 오른쪽에 ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.add",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-triggernaction.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triggerAction",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "triggerAction.trigger",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "미리 설정한 이벤트를 선택하거나 사용자 정의 조건을 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.event",
            product: "2"
          }), ": 미리 설정한 이벤트를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.input",
            product: "2"
          }), ": 옵션 내 각 항목을 선택해 사용자 정의 조건을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.break_glass",
            product: "2"
          }), ": 옵션 내 각 항목을 선택해 사용자 정의 조건을 설정하세요. 입력에 대한 별도의 동작 없이 입력만 감지하도록 설정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.trigger",
              product: "2"
            }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.event",
              product: "2"
            }), "로 설정한 경우 이벤트 목록에서 하나의 이벤트만 선택할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.input",
              product: "2"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), " 옵션을 선택하여 사용자 정의 조건을 설정할 때 원하는 스케줄이 없다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.plusAddSchedule",
              product: "2"
            }), "를 클릭하세요. 스케줄 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), " 옵션을 선택하여 사용자 정의 조건을 설정할 때 원하는 이벤트 이름이 없다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.addNewBreakGlassEvent",
              product: "2"
            }), "를 클릭하세요. 해당 이벤트가 발생하면 이벤트 로그 및 실시간 로그에 설정한 이벤트 이름이 표시됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이벤트 이름은 최대 64자까지 입력할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triggeraction",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "triggerAction.action",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "미리 설정된 동작을 선택하거나 사용자 정의 동작을 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.output",
              product: "2"
            }), " 옵션을 선택해 사용자 정의 동작을 설정할 때 원하는 신호 설정이 없다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.addSignal",
              product: "2"
            }), "를 클릭하여 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.trigger",
              product: "2"
            }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), "으로 선택했다면, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.action",
              product: "2"
            }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.portNone",
              product: "2"
            }), "으로 설정할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "image-log-settings",
      children: "이미지 로그 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.imageLog",
        product: "2"
      }), " 그룹에서는 장치에서 사용할 이미지 로그 이벤트와 스케줄을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.imageLog",
            product: "2"
          }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "으로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.configuration",
            product: "2"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), "를 클릭해 원하는 이벤트와 스케줄을 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-imagelog.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능은 BioStation A2, FaceStation 2, FaceStation F2, X-Station 2, BioStation 3 모델에서 지원합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이미지 로그의 기본 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-image-log",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegang-settings",
      children: "Wiegand 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Wiegand"
      }), " 그룹에서는 Wiegand 장치의 입출력 관련 세부 항목을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-wiegand.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandInOut",
            product: "2"
          }), ": 입출력 모드를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseWidth",
            product: "2"
          }), ": Wiegand 신호의 펄스 폭을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.inOutFormat",
            product: "2"
          }), ": 장치에 지정할 Wiegand 형식을 변경하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseInterval",
            product: "2"
          }), ": Wiegand 신호의 펄스 간격을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.out",
            product: "2"
          }), ": Wiegand 신호 출력 모드를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.card.wiegand.out.normal",
                product: "2"
              }), ": 설정된 Wiegand 형식으로 카드를 스캔합니다. 오류 코드를 설정할 수 있으며 Wiegand를 사용하는 카드 인증을 실패했을 때 전송할 값을 선택할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.card.wiegand.out.bypass",
                product: "2"
              }), ": Wiegand 인증과 관계없이 CSN을 전송합니다. 출입문 제어 기능이 없는 장치로 사용할 때 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.outputInfo",
            product: "2"
          }), ": 인증 시 장치에 출력되는 정보를 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Wiegand 형식 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-credential-wiegand-format",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tamper-settings",
      children: "보안 탬퍼 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치에서 탬퍼 이벤트가 발생할 경우 장치에 저장된 전체 사용자 정보, 전체 로그, 보안 키를 삭제하도록 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tamperOn",
        product: "2"
      }), " 기능을 활성화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tamperOn.on",
        product: "2"
      }), "으로 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-tamper.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analog-intercom-settings",
      children: "아날로그 인터폰 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["아날로그 인터폰 사용 여부를 설정할 수 있습니다. 장치에 연결된 인터폰을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.intercom.title",
        product: "2"
      }), " 그룹에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.use",
        product: "2"
      }), "을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "이 기능은 BioStation 2 모델만 지원합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "camera-settings",
      children: "카메라 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라 주파수를 설정할 수 있습니다. 형광등을 사용하는 환경에서 주파수를 잘못 설정하면 이미지에 깜빡임이 발생할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.camera",
        product: "2"
      }), " 그룹에서 해당 지역의 주파수를 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능은 펌웨어 2.1.4 버전 이상의 FaceStation F2 모델과 BioStation A2 모델에서 지원합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카메라 주파수는 지리적인 위치마다 다르게 사용합니다. 미국은 60Hz를 일반적으로 사용하며 대부분의 다른 지역은 50Hz를 사용합니다. 해당 지역의 카메라 주파수는 대리점에 문의하세요."
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