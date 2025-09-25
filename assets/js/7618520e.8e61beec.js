"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6569"], {
93213: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_check_door_status_mdx_761_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-check-door-status-mdx-761.json
var site_docs_platform_biostar_x_check_door_status_mdx_761_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-door-status","title":"출입문 상태 확인하기","description":"BioStar X에서 출입문과 연결된 장치의 상태를 실시간으로 모니터링하고 문제 발생 시 해결하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/check-door-status.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-door-status","permalink":"/docs/platform/biostar_x/check-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-door-status.mdx","tags":[],"version":"current","frontMatter":{"id":"check-door-status","title":"출입문 상태 확인하기","description":"BioStar X에서 출입문과 연결된 장치의 상태를 실시간으로 모니터링하고 문제 발생 시 해결하는 방법을 안내합니다.","keywords":["모니터링","출입문"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"출입문 모니터링하기","permalink":"/docs/platform/biostar_x/monitoring-door"},"next":{"title":"출입문 제어하기","permalink":"/docs/platform/biostar_x/control-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/door-tree.json
var door_tree_namespaceObject = JSON.parse('[{"name":"모든 출입문 그룹","children":[{"name":"출입문 그룹 A","type":"door-group","children":[{"name":"출입문","type":"door-device","children":[{"name":"출입문 센서","type":"door-sensor"},{"name":"출입문 릴레이","type":"door-relay"},{"name":"경비 상태","type":"door-arm"},{"name":"Camera","type":"door-camera"}]}]}]},{"name":"모든 엘리베이터 그룹","type":"elevator","children":[{"name":"엘리베이터 그룹 B","type":"elevator-group","children":[{"name":"엘리베이터 1","type":"elevator-device","children":[{"name":"엘리베이터 1 - 1층","type":"elevator-floor"},{"name":"엘리베이터 1 - 2층","type":"elevator-floor"}]}]}]},{"name":"모든 고급 출입 통제","type":"access-control","children":[{"name":"출입 통제 구역","type":"access-zone"}]}]')
;// CONCATENATED MODULE: ./docs/platform/biostar_x/check-door-status.mdx


const frontMatter = {
	id: 'check-door-status',
	title: '출입문 상태 확인하기',
	description: 'BioStar X에서 출입문과 연결된 장치의 상태를 실시간으로 모니터링하고 문제 발생 시 해결하는 방법을 안내합니다.',
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
  "id": "트리-구조-알아보기",
  "level": 2
}, {
  "value": "상태 확인하기",
  "id": "상태-확인하기",
  "level": 2
}, {
  "value": "연결 오류 확인",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcArm, IcCamFail, IcCamOk, IcDisable, IcDisarm, IcErr, IcNotsync, IcRelayLock, IcRelayUnlock, Image, StatusNormal, StatusOK, Treeview} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcArm) _missingMdxReference("IcArm", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  if (!IcDisarm) _missingMdxReference("IcDisarm", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcNotsync) _missingMdxReference("IcNotsync", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusNormal) _missingMdxReference("StatusNormal", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!Treeview) _missingMdxReference("Treeview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문과 연결된 장치의 상태를 실시간으로 모니터링하여 보안 시스템을 안정적으로 운영할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "에서 제공하는 상태 아이콘을 통해 장치 연결 상태, 출입문 잠금 상태, 카메라 작동 상태 등을 한눈에 확인하고, 문제 발생 시 즉시 대응하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "을 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "을 선택하세요. 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " 탭에서 각 출입문과 연결된 슬레이브 장치의 상태를 확인할 수 있습니다."]
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
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "트리-구조-알아보기",
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
            children: ["출입 통제 구역 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac",
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
      children: "연결 오류 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 또는 엘리베이터 상태를 확인하여 정상 작동 여부를 확인할 수 있습니다. 연결 오류 상태는 아래를 참고하세요."
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
              children: "커뮤니케이션 서버 오류이거나 연결이 끊긴 상태입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcNotsync, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "동기화 오류가 발생한 상태입니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "상태 아이콘을 클릭하면 툴팁을 통해서 상세 정보를 확인할 수 있습니다. 툴팁에 표시된 오류 메시지의 링크를 클릭하면 출입문 또는 엘리베이터와 연결된 장치 목록으로 이동할 수 있습니다."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip.png",
        alt: "툴팁 메시지"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["해당 장치에서 마우스 오른쪽 버튼을 클릭하고, ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reconnect"
        }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reboot"
        }), " 옵션을 선택하세요."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip-device.png",
        alt: "장치 목록"
      })]
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
              children: "출입문이 닫힌 상태입니다."
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
      children: "출입문 또는 출입 통제 구역의 경비 상태를 확인할 수 있습니다."
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
              children: "비활성화된 구역의 아이콘입니다. 비활성화된 구역은 알람이 발생하지 않습니다."
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
          children: "경비 구역"
        }), "으로 설정했을 때만 표시됩니다. 경비 구역 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac-intrusion-alarm",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "엘리베이터-상태-확인",
      children: "엘리베이터 상태 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터의 잠금 상태를 확인할 수 있습니다."
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
              children: "엘리베이터 잠금 해제 상태입니다."
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
              children: "엘리베이터 잠금 상태입니다."
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