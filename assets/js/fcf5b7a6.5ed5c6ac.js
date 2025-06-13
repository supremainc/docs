"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5510"], {
1706: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_door_add_mdx_fcf_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-door-add-mdx-fcf.json
var site_docs_platform_biostar_x_settings_door_add_mdx_fcf_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-door-add","title":"출입문 등록하기","description":"출입 통제에 사용할 출입문을 설정하세요. 출입문에 따른 입실/퇴실 장치를 선택하거나 안티패스백을 설정하여 보안을 강화할 수 있으며 알람을 구성할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-door-add.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-door-add","permalink":"/docs/platform/biostar_x/settings-door-add","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-door-add.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-door-add","title":"출입문 등록하기","description":"출입 통제에 사용할 출입문을 설정하세요. 출입문에 따른 입실/퇴실 장치를 선택하거나 안티패스백을 설정하여 보안을 강화할 수 있으며 알람을 구성할 수 있습니다.","keywords":["출입문","보안","출입 통제"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"출입문 그룹 관리하기","permalink":"/docs/platform/biostar_x/settings-manage-door-group"},"next":{"title":"출입문 정보 수정하기","permalink":"/docs/platform/biostar_x/settings-door-edit-info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-door-add.mdx


const frontMatter = {
	id: 'settings-door-add',
	title: '출입문 등록하기',
	description: '출입 통제에 사용할 출입문을 설정하세요. 출입문에 따른 입실/퇴실 장치를 선택하거나 안티패스백을 설정하여 보안을 강화할 수 있으며 알람을 구성할 수 있습니다.',
	keywords: [
		'출입문',
		'보안',
		'출입 통제'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "before-start",
  "level": 2
}, {
  "value": "출입문 등록",
  "id": "adding-door",
  "level": 2
}, {
  "value": "기본 정보 설정",
  "id": "info",
  "level": 3
}, {
  "value": "출입문 설정",
  "id": "configdoor",
  "level": 3
}, {
  "value": "부가 옵션 설정",
  "id": "option",
  "level": 3
}, {
  "value": "안티패스백 설정",
  "id": "antipassback",
  "level": 3
}, {
  "value": "시간 제한 안티패스백 설정",
  "id": "timed-apb",
  "level": 3
}, {
  "value": "알람 설정",
  "id": "alarm",
  "level": 3
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "출입문을 등록하고 설정하는 방법을 안내합니다. 출입문별로 입실·퇴실 장치를 연결하고, 안티패스백과 이중 인증 등 보안 기능을 설정하여 체계적인 출입 관리 환경을 구축할 수 있습니다. 또한 출입문 상태에 따른 알람 설정으로 보안 사고를 사전에 예방할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문을 등록하기 전에 출입 통제를 위한 출입 등급, 출입 그룹, 층 등급을 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문을 등록하기 전에 장치를 등록하세요. 장치 등록에 대한 자세한 내용은 다음 문서를 참고하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-adding-devices",
                children: "장치 등록하기"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-adding-wiegand",
                children: "Wiegand 장치 등록하기"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-adding-slave-device",
                children: "슬레이브 장치 등록하기"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-door",
      children: "출입문 등록"
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
            children: "Door"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-door-adding.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.addNewDoor",
            product: "2"
          }), " 화면이 나타나면 각 섹션 항목을 차례로 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.information",
                product: "2"
              }), ": 출입문의 기본 정보를 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#info",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.configuration",
                product: "2"
              }), ": 출입문과 연결된 장치와 입실 및 퇴실 버튼, 출입문 센서를 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#configdoor",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.option",
                product: "2"
              }), ": 부가 옵션을 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#option",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.antiPassBack",
                product: "2"
              }), ": 출입 이력을 관리하고 보안을 강화하기 위한 안티패스백 기능을 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#antipassback",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "timedAPB.title",
                product: "2"
              }), ": 안티패스백 기능의 초기화 시간을 설정할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#timed-apb",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.alarm",
                product: "2"
              }), ": 안티패스백 위반이 발생했을 때 경보를 울리거나 장치를 사용하지 못하도록 설정할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#alarm",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 모두 완료했다면 화면 가장 아래에 있는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "info",
      children: "기본 정보 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.information",
        product: "2"
      }), " 섹션에서는 출입문의 이름 및 그룹, 설명을 입력하거나 변경할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": 출입문의 이름을 입력하세요. 출입문의 위치를 특정할 수 있는 이름을 입력하면 편리하게 관리할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group",
            product: "2"
          }), ": 출입문 그룹을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), ": 출입문에 대한 간단한 설명을 입력하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "출입문 이름은 최대 48자까지 입력할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문 그룹 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door-group",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configdoor",
      children: "출입문 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.configuration",
        product: "2"
      }), " 섹션에서는 출입문과 연결된 장치와 퇴실 버튼, 출입문 세선 등을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-configuration.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.entryDevice",
            product: "2"
          }), ": 입실할 때 사용할 장치를 선택하세요. 장치가 목록에 없다면 먼저 장치를 등록하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.doorRelay",
            product: "2"
          }), ": 출입문 잠금 장치로 동작할 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#relay",
            children: "릴레이"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitButton",
            product: "2"
          }), ": 퇴실 버튼으로 사용할 포트를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/C"
              }), "(", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#nc",
                children: "Normally Closed"
              }), ") 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/O"
              }), "(", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#no",
                children: "Normally Open"
              }), ")으로 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.simulateUnlockSupported",
                product: "2"
              }), ": 퇴실 버튼 입력 시 출입문 열림 요청 로그는 발생하지만 릴레이는 동작하지 않도록 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.doorSensor",
            product: "2"
          }), ": 출입문 상태를 확인할 때 사용할 포트를 선택하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), "으로 설정하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.alarm",
            product: "2"
          }), " 섹션을 사용할 수 없습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/C"
              }), "(", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#nc",
                children: "Normally Closed"
              }), ") 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/O"
              }), "(", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#no",
                children: "Normally Open"
              }), ")으로 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbUseDoorSensor",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbUseDoorSensor",
                product: "2"
              }), " 옵션을 사용할 때 출입문 센서 사용 여부를 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title",
              product: "2"
            }), "이 활성화되어 있다면 이 옵션은 사용할 수 없습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitDevice",
            product: "2"
          }), ": 퇴실할 때 사용할 장치를 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice",
              product: "2"
            }), "로 무선 도어락을 선택했다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice",
              product: "2"
            }), "에도 무선 도어락을 선택해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice",
              product: "2"
            }), "로 무선 도어락을 선택했다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.doorRelay",
              product: "2"
            }), " 옵션은 사용할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation 모델은 입실 장치나 퇴실 장치로 사용할 수 없습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option",
      children: "부가 옵션 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.option",
        product: "2"
      }), " 섹션에서는 출입문에 대한 부가 옵션을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-aditional-option.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.open",
            product: "2"
          }), ": 출입문 열림에 대한 옵션을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openTime",
                product: "2"
              }), ": 인증 완료 후 출입문이 열린 상태로 유지되는 시간을 설정하세요. 이 시간이 지나면 출입문이 자동으로 잠깁니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce",
                product: "2"
              }), ": 출입문이 닫힌 것을 출입문 센서가 감지하면 출입문이 잠깁니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor",
                product: "2"
              }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnceOn",
                product: "2"
              }), "으로 설정하면 사용할 수 없습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor",
                product: "2"
              }), ": 자동문을 출입문으로 사용하면 출입문 센서의 상태와 상관없이 릴레이를 동작할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce",
                product: "2"
              }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnceOn",
                product: "2"
              }), "으로 설정하면 사용할 수 없습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.openTime",
              product: "2"
            }), "은 사용하는 출입문 잠금 장치의 종류에 따라 다를 수 있습니다."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.dualAuthentication",
            product: "2"
          }), ": 두 사람(일반 사용자와 관리자)이 크리덴셜을 인증하여 출입문을 열도록 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), ": 이중 인증을 사용할 장치를 선택하세요. 이중 인증을 사용하지 않으려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.none",
                product: "2"
              }), "을 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.schedule",
                product: "2"
              }), ": 이중 인증을 사용할 스케줄을 선택하세요. 원하는 스케줄이 없다면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAddSchedule",
                product: "2"
              }), "를 클릭해 추가할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType",
                product: "2"
              }), ": 관리자 인증 순서를 설정하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "door.dualAuthentication.approvalType.none",
                    product: "2"
                  }), ": 인증 그룹과 관계 없이 두 명의 인증이 필요합니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "door.dualAuthentication.approvalType.last",
                    product: "2"
                  }), ": 일반 사용자가 인증하고 설정된 인증 그룹에 포함된 사용자가 인증해야 합니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.approvalGroup",
                product: "2"
              }), ": 관리자가 속한 그룹을 설정하세요. 이 옵션은 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType",
                product: "2"
              }), "을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.last",
                product: "2"
              }), "으로 선택했을 때 사용할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.authenticationTimeout",
                product: "2"
              }), ": 첫 번째 인증 후 두 번째 인증까지의 대기 시간을 설정하세요. 설정된 시간 내에 두 번째 인증이 완료되지 않으면 출입문이 열리지 않습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["재실 인원 제한 구역에 설정된 장치의 이중 인증을 변경하려면 다음 메뉴에서 설정을 수정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shell.header.setting"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Advanced ACS"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "zone.occupancy.title",
                  product: "2"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "zone.occupancy.title",
                  product: "2"
                }), " 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["스케줄 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiTailSensor",
            product: "2"
          }), ": 인증하지 않은 사람이 인증한 사람을 따라 출입하는 테일게이팅을 감지하도록 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.sensor",
              product: "2"
            }), ": 테일게이팅을 감지할 센서를 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "antipassback",
      children: "안티패스백 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#apb",
        children: "안티패스백"
      }), "은 출입 이력을 관리하고 보안을 강화하기 위해 사용합니다. 사용자가 출입 카드로 입실 후 다른 사용자에게 카드를 넘겨주는 악용 사례를 막을 수 있으며, 외부인이 출입 권한을 가진 사용자를 뒤따라 들어올 때 나가지 못하도록 막을 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["아래를 참고하여 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.antiPassBack",
        product: "2"
      }), " 섹션에서 설정을 완료하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.type",
            product: "2"
          }), ": 안티패스백 종류를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.none",
                product: "2"
              }), ": 안티패스백 기능을 사용하지 않습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.soft",
                product: "2"
              }), ": 안티패스백을 위반하면 출입은 가능하지만 경보를 울리거나 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "에 로그를 생성합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.hard",
                product: "2"
              }), ": 안티패스백을 위반하면 출입할 수 없으며 경보를 울리거나 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "에 로그를 생성합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime",
            product: "2"
          }), ": 안티패스백 기능이 초기화될 때까지의 시간을 설정하세요. 최대 7일(10080분)까지 설정할 수 있으며, 0으로 설정하면 초기화되지 않습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["입실 장치와 퇴실 장치가 모두 설치된 경우 사용할 수 있으며, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.configuration",
              product: "2"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice",
              product: "2"
            }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.none",
              product: "2"
            }), "으로 설정하면 사용할 수 없습니다. 퇴실 장치 설정 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#configdoor",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack",
              product: "2"
            }), " 섹션을 활성화하려면 RS-485로 구성된 마스터 장치와 슬레이브 장치가 필요합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title",
              product: "2"
            }), " 섹션이 활성화되어 있으면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack",
              product: "2"
            }), "을 사용할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timed-apb",
      children: "시간 제한 안티패스백 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자가 출입 인증 후 동일한 장치에서 다시 인증을 시도할 때, 안티패스백 기능이 작동하여 즉시 재인증할 수 없습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timedAPB.title",
        product: "2"
      }), " 섹션에서는 안티패스백 기능의 초기화 시간을 설정하여 사용자의 빈번한 입실을 효과적으로 제한할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.field",
            product: "2"
          }), ": 시간 제한 안티패스백 기능을 사용할 장치를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime",
            product: "2"
          }), ": 안티패스백 기능이 초기화될 때까지의 시간을 설정하세요. 입력 단위는 분(min)이며 기본값은 10분입니다. 최대 60분까지 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apb.bypassGroup",
            product: "2"
          }), ": 시간 제한 안티패스백 기능을 제한받지 않고 항상 통과할 수 있는 출입 그룹을 선택할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alarm",
      children: "알람 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "door.alarm",
        product: "2"
      }), " 섹션에서는 출입문이 강제로 열리거나, 열린 채로 방치되었거나 안티패스백 위반이 발생했을 때 경보를 울리거나 장치를 사용하지 못하도록 막을 수 있습니다. 원하는 항목에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " 버튼을 클릭해 알람을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpen",
            product: "2"
          }), ": 출입문이 열린 채로 방치되었을 때 알람 동작을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpenTime",
            product: "2"
          }), ": 장시간 출입문이 열렸을 경우 경보를 울리는 시간을 설정하세요. 출입문이 열려 있을 수 있는 최대 시간을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.forcedOpen",
            product: "2"
          }), ": 강제로 출입문이 열렸을 때 알람 동작을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiPassBack",
            product: "2"
          }), ": 안티패스백 위반이 발생했을 때 알람 동작을 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "door.antiPassBack",
          product: "2"
        }), " 옵션은 퇴실 장치가 등록되어 있어야 설정할 수 있습니다."]
      })
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