"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["82320"], {
43878: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_check_door_status_mdx_761_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-check-door-status-mdx-761.json
var site_docs_platform_biostar_x_check_door_status_mdx_761_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-door-status","title":"출입문 상태 확인하기","description":"출입문의 상태를 실시간으로 모니터링하여 보안 시스템을 안정적으로 운영할 수 있습니다. 또한 출입문에 할당된 장치의 이상 상태를 확인할 수 있습니다.","source":"@site/docs/platform/biostar_x/check-door-status.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-door-status","permalink":"/docs/platform/biostar_x/check-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-door-status.mdx","tags":[],"version":"current","frontMatter":{"id":"check-door-status","title":"출입문 상태 확인하기","description":"출입문의 상태를 실시간으로 모니터링하여 보안 시스템을 안정적으로 운영할 수 있습니다. 또한 출입문에 할당된 장치의 이상 상태를 확인할 수 있습니다.","keywords":["모니터링","출입문"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"출입문 모니터링하기","permalink":"/docs/platform/biostar_x/monitoring-door"},"next":{"title":"출입문 제어하기","permalink":"/docs/platform/biostar_x/control-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/door-tree.json
var door_tree_namespaceObject = JSON.parse('[{"name":"모든 출입문 그룹","children":[{"name":"출입문 그룹 A","type":"door-group","children":[{"name":"출입문","type":"door-device","children":[{"name":"출입문 센서","type":"door-sensor"},{"name":"출입문 릴레이","type":"door-relay"},{"name":"경비 상태","type":"door-arm"},{"name":"Camera","type":"door-camera"}]}]}]},{"name":"모든 엘리베이터 그룹","type":"elevator","children":[{"name":"엘리베이터 그룹 B","type":"elevator-group","children":[{"name":"엘리베이터 1","type":"elevator-device","children":[{"name":"엘리베이터 1 - 1층","type":"elevator-floor"},{"name":"엘리베이터 1 - 2층","type":"elevator-floor"}]}]}]},{"name":"모든 고급 출입 통제","type":"access-control","children":[{"name":"출입 통제 설정","type":"access-zone"}]}]')
;// CONCATENATED MODULE: ./docs/platform/biostar_x/check-door-status.mdx


const frontMatter = {
	id: 'check-door-status',
	title: '출입문 상태 확인하기',
	description: '출입문의 상태를 실시간으로 모니터링하여 보안 시스템을 안정적으로 운영할 수 있습니다. 또한 출입문에 할당된 장치의 이상 상태를 확인할 수 있습니다.',
	keywords: [
		'모니터링',
		'출입문'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "트리 구조 알아보기",
  "id": "door-tree-structure",
  "level": 2
}, {
  "value": "상태 확인하기",
  "id": "상태-확인하기",
  "level": 2
}, {
  "value": "연결 오류 및 알람 확인",
  "id": "check-the-error-status",
  "level": 3
}, {
  "value": "출입문 잠금 확인",
  "id": "check-the-door-lock",
  "level": 3
}, {
  "value": "카메라 상태 확인",
  "id": "check-the-camera-status",
  "level": 3
}, {
  "value": "경비 상태 확인",
  "id": "check-the-security-status",
  "level": 3
}, {
  "value": "엘리베이터 상태 확인",
  "id": "엘리베이터-상태-확인",
  "level": 3
}, {
  "value": "그룹 목록 확장/축소",
  "id": "그룹-목록-확장축소",
  "level": 2
}, {
  "value": "최상위 그룹",
  "id": "최상위-그룹",
  "level": 3
}, {
  "value": "하위 그룹",
  "id": "하위-그룹",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAlert, IcArm, IcCamFail, IcCamOk, IcDisable, IcDisarm, IcErr, IcRelayLock, IcRelayUnlock, Image, StatusNormal, StatusOK, Treeview} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlert) _missingMdxReference("IcAlert", true);
  if (!IcArm) _missingMdxReference("IcArm", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  if (!IcDisarm) _missingMdxReference("IcDisarm", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusNormal) _missingMdxReference("StatusNormal", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!Treeview) _missingMdxReference("Treeview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문의 상태를 실시간으로 모니터링하여 보안 시스템을 안정적으로 운영할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "에서 제공하는 상태 아이콘을 통해 출입문에 할당된 장치의 이상 상태를 한눈에 확인하고, 문제 발생 시 즉시 대응하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "을 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "을 선택하세요. 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " 탭에서 각 출입문의 상태를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문과 연결된 장치를 올바르게 구성했는지 확인하세요. 장치가 네트워크에 연결되어 있고, 최신 펌웨어로 업데이트되어 있는지 점검하는 것이 중요합니다. 문제가 발생할 경우, 장치의 전원 상태와 네트워크 연결 상태를 먼저 확인하는 것이 좋습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 추가 및 구성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-devices",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문 추가 및 구성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문의 상태를 모니터링하거나 제어하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.logUploadType",
              product: "2"
            }), " 기능이 활성화되어 있어야 합니다. 이 기능은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.server"
            }), " 메뉴 경로의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.general",
              product: "2"
            }), " 섹션에서 활성화할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMS 서버와 연동해 카메라를 출입문과 연결하는 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "어드밴스"
            }), "(Advanced) 라이선스 이상에서 추가 옵션을 통해 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-tree-structure",
      children: "트리 구조 알아보기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " 탭에서 트리 구조는 아래와 같은 구조로 구성되어 있습니다."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(Treeview, {
      data: door_tree_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 추가 및 구성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-devices",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문 추가 및 구성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["엘리베이터 추가 및 구성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-elevators",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["고급 출입 통제 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문과 카메라를 연동하려면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "상태-확인하기",
      children: "상태 확인하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-error-status",
      children: "연결 오류 및 알람 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 또는 엘리베이터 상태를 확인하여 정상 작동 여부를 확인할 수 있습니다. 각 아이콘별 상태는 아래를 참고하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(IcErr, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치 연결 끊김, 커뮤니케이션 서버 오류, 동기화 오류 등 장치 이상 상태를 표시합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcAlert, {
                width: "40px",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "출입문 알람(강제 문열림, 장시간 문열림, APB, 화재 알람, 비상 개방) 또는 AI 영상 분석 알람(배회 감지, 침입 감지 등)이 발생한 상태를 표시합니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "상태 아이콘을 클릭하면 툴팁을 통해서 상세 정보를 확인할 수 있습니다. 툴팁에 표시된 오류 메시지의 링크를 클릭하면 출입문 또는 엘리베이터와 연결된 장치 목록으로 이동할 수 있습니다."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip.png"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["해당 장치에서 마우스 오른쪽 버튼을 클릭하고, ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reconnect"
        }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reboot"
        }), " 옵션을 선택하세요."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip-device.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "출입문 또는 엘리베이터에서 발생하는 알람은 다음 설정을 통해 구성할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-door-add#alarm",
                  children: "출입문 알람 설정"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-elevators-add#alarm",
                  children: "엘리베이터 알람 설정"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-advanced-ac",
                  children: "고급 출입 통제 설정"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["비디오 규칙에서 출입문과 카메라를 연결하여 알람을 설정할 수 있습니다. 비디오 규칙 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMS 서버와 연동 시 영상에 대한 AI 이벤트 알람을 설정하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "로 알람을 전송할 수도 있습니다. 자세한 내용은 VMS 서버의 매뉴얼을 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["알람 해제에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event#acknowledge-alarm-and-record-action",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-door-lock",
      children: "출입문 잠금 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 릴레이 상태를 통해 출입문의 잠금 상태를 확인할 수 있습니다. 출입문 릴레이의 상태는 아래를 참고하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(IcRelayLock, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "출입문이 잠긴 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcRelayUnlock, {
                width: "auto",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "출입문이 열린 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-camera-status",
      children: "카메라 상태 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라의 상태를 확인하여 카메라가 정상적으로 작동하는지 확인할 수 있습니다. 카메라의 상태는 아래를 참고하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(IcCamOk, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "카메라가 연결된 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamFail, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "카메라가 꺼져 있거나 연결이 해제된 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-security-status",
      children: "경비 상태 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 또는 고급 출입 통제 설정의 경비 상태를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(IcDisable, {
                width: "auto",
                height: "30px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "비활성화된 설정의 아이콘입니다. 비활성화된 설정은 알람이 발생하지 않습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcArm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "경비가 활성화된 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcDisarm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "경비가 비활성화된 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["경비 상태는 출입문을 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "경비"
        }), "으로 설정했을 때만 표시됩니다. 경비 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac-intrusion-alarm",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "엘리베이터-상태-확인",
      children: "엘리베이터 상태 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터를 통한 층 접근 제어 상태를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태 아이콘"
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
              children: (0,jsx_runtime.jsx)(StatusNormal, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "엘리베이터를 통해 해당 층이 잠긴 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusOK, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "엘리베이터를 통해 해당 층이 해제된 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "그룹-목록-확장축소",
      children: "그룹 목록 확장/축소"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "최상위 그룹 또는 하위 그룹을 통해서 목록을 확장하거나 축소할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-group-expand-collapse.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "최상위-그룹",
      children: "최상위 그룹"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " 탭에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allDoorGroups"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allElevatorGroups"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allZones"
          }), "를 선택하고 마우스 오른쪽 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.expandAll"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.collapseAll"
          }), " 옵션을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 최상위 그룹을 기준으로 모든 하위 목록을 확장하거나 축소할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "하위-그룹",
      children: "하위 그룹"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 최상의 그룹의 하위 그룹 목록을 확장하거나 축소하려면 하위 그룹을 선택하고 마우스 오른쪽 버튼을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.expandBelow"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.collapseBelow"
          }), " 옵션을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 하위 그룹의 목록을 확장하거나 축소할 수 있습니다."
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