"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4677"], {
89241: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_advanced_ac_roll_call_frontMatter),
  toc: () => (/* binding */ settings_advanced_ac_roll_call_toc),
  "default": () => (/* binding */ settings_advanced_ac_roll_call_MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_advanced_ac_roll_call_mdx_9b9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_advanced_ac_roll_call_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-advanced-ac-roll-call-mdx-9b9.json
var site_docs_platform_biostar_x_settings_advanced_ac_roll_call_mdx_9b9_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-roll-call","title":"인원 점검(Roll Call) 구역","description":"인원 점검(Roll Call) 구역 설정 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-advanced-ac-roll-call.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-roll-call","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-roll-call","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-roll-call.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-roll-call","title":"인원 점검(Roll Call) 구역","description":"인원 점검(Roll Call) 구역 설정 방법을 안내합니다.","keywords":["고급 출입 통제","인원 점검"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"Occupancy limit zone","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-occupancy"},"next":{"title":"비디오 설정하기","permalink":"/docs/en/platform/biostar_x/settings-videos"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/common/_explore-list-pages.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "목록 페이지 탐색",
  "id": "목록-페이지-탐색",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcBw2, IcFirst2, IcFw2, IcLast2, Image} = _components;
  if (!IcBw2) _missingMdxReference("IcBw2", true);
  if (!IcFirst2) _missingMdxReference("IcFirst2", true);
  if (!IcFw2) _missingMdxReference("IcFw2", true);
  if (!IcLast2) _missingMdxReference("IcLast2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "목록-페이지-탐색",
      children: "목록 페이지 탐색"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "페이지를 이동하거나 한 페이지에 표시할 목록 개수를 설정할 수 있습니다. 화면 오른쪽 상단의 페이지 이동 도구를 사용하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-access-control-status-pagenation.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFirst2, {}), ": 첫 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFw2, {}), ": 이전 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcBw2, {}), ": 다음 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcLast2, {}), ": 마지막 페이지로 이동합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 페이지로 이동하려면 숫자 입력 필드에 페이지 번호를 입력하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "한 페이지에 표시할 목록 개수를 설정하려면 행 선택 상자를 클릭하세요."
        }), "\n"]
      }), "\n"]
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


;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-advanced-ac-roll-call.mdx


const settings_advanced_ac_roll_call_frontMatter = {
	id: 'settings-advanced-ac-roll-call',
	title: '인원 점검(Roll Call) 구역',
	description: '인원 점검(Roll Call) 구역 설정 방법을 안내합니다.',
	keywords: [
		'고급 출입 통제',
		'인원 점검'
	],
	isTranslationMissing: true
};
const settings_advanced_ac_roll_call_contentTitle = undefined;

const assets = {

};




const settings_advanced_ac_roll_call_toc = [{
  "value": "인원 점검 구역 등록",
  "id": "addRollcallZone",
  "level": 2
}, {
  "value": "설정 옵션 안내",
  "id": "setting",
  "level": 3
}, {
  "value": "구역 활성/비활성화",
  "id": "activateDeactivateOccupancyZone",
  "level": 2
}, {
  "value": "구역 삭제",
  "id": "deleteOccupancyZone",
  "level": 2
}, ...toc];
function settings_advanced_ac_roll_call_createMdxContent(props) {
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
  }, {Cmd, DocLink} = _components;
  if (!Cmd) settings_advanced_ac_roll_call_missingMdxReference("Cmd", true);
  if (!DocLink) settings_advanced_ac_roll_call_missingMdxReference("DocLink", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "인원 점검(Roll Call)은 특정 시점과 구역 내 출입 기록을 기반으로 인원 목록을 신속하게 생성하고 현재 위치를 파악하는 기능입니다. 위급 상황이 발생할 때, 사용자가 미리 지정된 구역의 입실 또는 퇴실 장치를 통해 인증해 인원 점검 구역으로 도착했는지를 파악할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비상 대응, 안전 확인, 구조대 정보 제공 등을 위해 사용할 수 있습니다. 이를 통해 출입 기록을 효율적으로 활용하여 인원 현황을 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["인원 점검 구역 설정은 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "어드밴스"
        }), "(Advanced) 라이선스 이상에서 추가 옵션을 통해 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addRollcallZone",
      children: "인원 점검 구역 등록"
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
            sid: "setting.menu.advancedAc.root"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addZone",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.rollCall",
            product: "2"
          }), "을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " 섹션에서 추가할 인원 점검 구역의 이름과 설명을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.configuration",
            product: "2"
          }), " 섹션에서 인원 점검 구역의 세부 항목을 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정을 완료했다면 화면 가장 아래에 있는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.name",
          product: "2"
        }), "은 최대 48자까지 입력할 수 있으며, 다른 구역과 동일한 이름으로 설정할 수 없습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting",
      children: "설정 옵션 안내"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "인원 점검 구역 설정을 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone",
            product: "2"
          }), ": 구역의 적용 범위를 확인할 수 있습니다. 인원 점검 구역은 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone.global",
            product: "2"
          }), " 모드만 지원하며 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 등록된 모든 장치로 구역을 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activated",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.deactivate",
            product: "2"
          }), ": 구역 설정을 활성화하거나 일시적으로 비활성화할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.rollCall.manualStatusChange",
            product: "2"
          }), ": 수동으로 상태를 변경할 수 있도록 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.entryDevices",
            product: "2"
          }), ": 입실할 때 사용할 장치를 선택하세요. 등록된 장치 목록에서 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.exitDevices",
            product: "2"
          }), ": 퇴실할 때 사용할 장치를 선택하세요. 등록된 장치 목록에서 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.users",
            product: "2"
          }), ": 구역에 입실할 수 있는 사용자 그룹 또는 개별 사용자를 선택할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["동일한 장치를 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.entryDevices",
              product: "2"
            }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.exitDevices",
              product: "2"
            }), "로 동시에 설정할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.entryDevices",
              product: "2"
            }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.exitDevices",
              product: "2"
            }), "는 최대 128개까지 선택할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.dualAuthentication",
              product: "2"
            }), "을 설정한 장치는 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.entryDevices",
              product: "2"
            }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.exitDevices",
              product: "2"
            }), "로 설정할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 등록에 대한 자세한 내용은 다음 문서를 참고하세요."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-adding-devices"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-adding-wiegand"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-adding-slave-device"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "activateDeactivateOccupancyZone",
      children: "구역 활성/비활성화"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비활성화된 인원 점검 구역을 활성화하거나 활성화된 구역을 비활성화할 수 있습니다."
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
            sid: "setting.menu.advancedAc.root"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["구역 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.rollCall",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "인원 점검 구역 목록 중 활성 또는 비활성화할 구역의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activate",
            product: "2"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.deactivate",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteOccupancyZone",
      children: "구역 삭제"
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
            sid: "setting.menu.advancedAc.root"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["구역 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.rollCall",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "인원 점검 구역 목록 중 삭제할 구역의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.deleteZone",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경고 메시지가 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.continue",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function settings_advanced_ac_roll_call_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_advanced_ac_roll_call_createMdxContent, {
      ...props
    })
  }) : settings_advanced_ac_roll_call_createMdxContent(props);
}
function settings_advanced_ac_roll_call_missingMdxReference(id, component) {
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