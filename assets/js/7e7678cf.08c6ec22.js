"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5382"], {
86775: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_monitoring_map_mdx_7e7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-monitoring-map-mdx-7e7.json
var site_docs_platform_biostar_x_monitoring_map_mdx_7e7_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-map","title":"맵 모니터링하기","description":"맵 모니터링 기능을 통해 구역과 층별 출입문 및 카메라 현황을 실시간으로 확인하고 제어하는 방법을 안내합니다. 구글 지도와 연동하여 구역 및 층 구조를 시각적으로 관리하며, 출입문 제어와 카메라 영상 재생 등 다양한 기능을 활용할 수 있습니다.","source":"@site/docs/platform/biostar_x/monitoring-map.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-map","permalink":"/docs/platform/biostar_x/monitoring-map","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-map.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-map","title":"맵 모니터링하기","description":"맵 모니터링 기능을 통해 구역과 층별 출입문 및 카메라 현황을 실시간으로 확인하고 제어하는 방법을 안내합니다. 구글 지도와 연동하여 구역 및 층 구조를 시각적으로 관리하며, 출입문 제어와 카메라 영상 재생 등 다양한 기능을 활용할 수 있습니다.","keywords":["모니터링","맵","구역","층"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"구역 제어하기","permalink":"/docs/platform/biostar_x/control-zone"},"next":{"title":"장치 모니터링하기","permalink":"/docs/platform/biostar_x/monitoring-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/monitoring-map.mdx


const frontMatter = {
	id: 'monitoring-map',
	title: '맵 모니터링하기',
	description: '맵 모니터링 기능을 통해 구역과 층별 출입문 및 카메라 현황을 실시간으로 확인하고 제어하는 방법을 안내합니다. 구글 지도와 연동하여 구역 및 층 구조를 시각적으로 관리하며, 출입문 제어와 카메라 영상 재생 등 다양한 기능을 활용할 수 있습니다.',
	keywords: [
		'모니터링',
		'맵',
		'구역',
		'층'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "구성 요소 및 옵션 기능",
  "id": "component-and-options",
  "level": 2
}, {
  "value": "구성 요소",
  "id": "component",
  "level": 3
}, {
  "value": "옵션 기능",
  "id": "options",
  "level": 3
}, {
  "value": "상태 점검하기",
  "id": "상태-점검하기",
  "level": 3
}, {
  "value": "맵 열기",
  "id": "open-map",
  "level": 2
}, {
  "value": "맵 크기 조절 및 위치 이동",
  "id": "resize-map",
  "level": 2
}, {
  "value": "층으로 진입하기",
  "id": "entry-floor",
  "level": 2
}, {
  "value": "다른 층으로 이동하기",
  "id": "move-to-another-floor",
  "level": 2
}, {
  "value": "카메라 제어하기",
  "id": "control-camera",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    img: "img",
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
  }, {Cmd, IcAlert, IcBack, IcCamFail, IcCamOk, IcClose, IcErr, IcMapmore, IcMove, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlert) _missingMdxReference("IcAlert", true);
  if (!IcBack) _missingMdxReference("IcBack", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcMapmore) _missingMdxReference("IcMapmore", true);
  if (!IcMove) _missingMdxReference("IcMove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "맵 모니터링 기능을 통해 구역과 구역 내 층별 출입문, 카메라 현황을 실시간으로 확인하고, 제어하는 방법을 안내합니다. 맵 모니터링은 구글 지도와 연동된 시각적 인터페이스를 통해 구역(Area)과 층(Floor)을 손쉽게 탐색하며, 출입문 제어, 카메라 영상 재생 등 다양한 기능을 활용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " 페이지는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), "을 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), "을 선택하여 진입할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서는 한 개의 구역(Area)에 여러 개의 층을 구성할 수 있습니다. 한 개의 층(Floor)에는 도면을 기준으로 출입문(Door), 카메라(Camera)를 설정해 모니터링할 수 있습니다. 아래 그림을 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Area structure",
        src: (__webpack_require__(22178)/* ["default"] */.Z) + "",
        width: "2743",
        height: "1771"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["그림과 같이 구성한 지역을 구글 지도와 연동하여 지도 위의 구역(Area) → 층(Floor) 순으로 접근하여 출입문과 카메라를 모니터링하고 제어할 수 있습니다. 이러한 구조는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " 페이지의 사이드바에서도 같은 구조로 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Monitoring sidebar",
        src: (__webpack_require__(23712)/* ["default"] */.Z) + "",
        width: "400",
        height: "395"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["맵을 구성하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "component-and-options",
      children: "구성 요소 및 옵션 기능"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "component",
      children: "구성 요소"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "맵 또는 층에 표시되는 구성 요소는 구역(Area)과 구역과 연결된 카메라를 확인할 수 있습니다. 구역을 통해서 층(Floor)으로 접근할 수 있습니다. 층에는 출입문과 카메라를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-map-main.png"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "구성 요소"
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
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "구역 아이콘",
                src: (__webpack_require__(16465)/* ["default"] */.Z) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "구역"
              }), "(Area): 구역을 클릭하면 해당 구역에 설정된 층(Floor)으로 진입할 수 있습니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "출입문 아이콘",
                src: (__webpack_require__(40590)/* ["default"] */.Z) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "출입문"
              }), ": 출입문을 클릭하면 해당 출입문을 제어할 수 있는 팝업 메뉴가 표시됩니다. 제공하는 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "control-door",
                children: "다음 문서"
              }), "를 참고하세요."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "카메라 아이콘",
                src: (__webpack_require__(99232)/* ["default"] */.Z) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "카메라"
              }), ": 카메라를 클릭하면 해당 구역의 영상을 재생할 수 있습니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "카메라 오류 아이콘",
                src: (__webpack_require__(15109)/* ["default"] */.Z) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "카메라 오류"
              }), ": 카메라가 연결되지 않았거나, 전원이 꺼져 있는 경우에 표시됩니다."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "options",
      children: "옵션 기능"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "맵 또는 층에서 제공하는 옵션 기능은 아래와 같습니다."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "기능"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: [(0,jsx_runtime.jsx)(_components.img, {
                alt: "확대/축소",
                src: (__webpack_require__(40281)/* ["default"] */.Z) + "",
                width: "24",
                height: "51"
              }), " / ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "확대/축소",
                src: (__webpack_require__(19301)/* ["default"] */.Z) + "",
                width: "51",
                height: "24"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "맵의 왼쪽 위, 오른쪽 아래에 위치한 버튼을 클릭해 확대/축소할 수 있습니다. 또는 마우스 휠을 사용하여 맵을 확대하거나 축소할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcMapmore, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "버튼을 클릭하면 추가 기능을 이용할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcClose, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "비디오 타일에 위치한 맵 또는 층을 닫으려면 오른쪽 위에 버튼을 클릭하세요."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcMove, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "아이콘을 클릭한 상태에서 드래그하면 맵을 다른 위치로 이동할 수 있습니다."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "맵 위에서 마우스를 클릭한 상태로 드래그하면 위치를 이동할 수 있습니다. 기본 동작 방식은 구글 지도 환경과 동일합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["맵을 더블 클릭하면 전체 화면으로 확대됩니다. 다시 더블 클릭하거나 ", (0,jsx_runtime.jsx)(Kbd, {
              children: "ESC"
            }), " 키를 누르면 원래 크기로 돌아갑니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "상태-점검하기",
      children: "상태 점검하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 왼쪽 사이드바에서 각 구역의 출입문과 카메라 상태를 점검할 수 있습니다. 각 아이콘별 상태는 아래를 참고하세요."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
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
              children: (0,jsx_runtime.jsx)(IcAlert, {
                width: "40px",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "출입문에서 알람이 발생한 상태입니다. 배회 감지, 침입 감지 등이 발생하면 해당 아이콘이 표시됩니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-map",
      children: "맵 열기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["모든 구역에 설정된 각 구역이 구글 지도와 연동되어 있다면, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " 섹션에 맵을 표시할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면 왼쪽 사이드바에서 맵으로 확인할 구역을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "마우스 오른쪽 버튼을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openMap"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " 섹션의 비디오 타일에 선택한 구역의 맵이 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-open-map.png",
      alt: "맵 열기"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "화면 왼쪽 사이드바에서 해당 구역을 더블 클릭해도 맵을 열 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resize-map",
      children: "맵 크기 조절 및 위치 이동"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "맵의 크기를 조절하려면 지도 상에서 빈 구역을 클릭하세요. 각 모서리에 크기를 조절할 수 있는 핸들이 표시됩니다. 핸들을 클릭한 상태에서 드래그하여 원하는 크기로 조절하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-resize.gif"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["크기를 조절한 상태에서 맵을 다른 위치로 이동하려면 맵 위에 ", (0,jsx_runtime.jsx)(IcMove, {}), " 아이콘을 클릭한 상태에서 원하는 위치로 드래그하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-move.gif"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entry-floor",
      children: "층으로 진입하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "맵에서 층으로 진입하려면 구역(Area)을 클릭하세요. 팝업 메뉴에 진입할 수 있는 층 목록이 표시되면 원하는 층을 선택하세요. 선택한 층의 도면과 출입문, 카메라를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/monitoring-map-select-floor.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입문을 클릭하면 해당 출입문을 제어할 수 있는 팝업 메뉴가 표시됩니다. 제공하는 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "control-door",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-map-floor-control-door.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라를 더블 클릭하면 해당 구역의 영상을 재생할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-map-select-floor-play-video.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["층(Floor)에 출입문과 카메라를 설정하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["구역이 표시되는 맵으로 이동하려면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(IcBack, {}), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["영상 제어 방법 및 영상에 표시되는 도구에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video#control-video",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "move-to-another-floor",
      children: "다른 층으로 이동하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다른 층으로 이동하려면 맵 왼쪽 상단의 선택 옵션을 클릭하고, 목록에서 이동하길 원하는 층을 선택하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-select-floor-list-box.png",
      alt: "다른 층 선택하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["구역이 표시되는 맵으로 이동하려면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(IcBack, {}), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-camera",
      children: "카메라 제어하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["비디오 타일에 카메라 영상을 배치하고 재생하려면, 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.map.title"
          }), " 목록에서 카메라를 더블 클릭하세요. 또는 마우스 오른쪽 버튼을 클릭하고 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카메라의 이름, 위치 등과 같은 상세 정보를 확인하려면 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.map.title"
          }), " 목록에서 카메라를 선택하고 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.viewDetail"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비디오 타일에는 화면 왼쪽 상단부터 차례로 추가되며, 현재 화면에 추가할 공간이 없으면 에러 메시지가 표시됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["영상 제어 방법 및 영상에 표시되는 도구에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video#control-video",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
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
16465: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiM5MzM2RkYiLz4KPHBhdGggZD0iTTMzLjc1IDkuMzc1QzMzLjc0NDEgOS4xMjgyMyAzMy42NDM0IDguODkzMjIgMzMuNDY4OCA4LjcxODY3QzMzLjI5NDMgOC41NDQxMyAzMy4wNTkzIDguNDQzNDUgMzIuODEyNSA4LjQzNzVIMTIuMTg3NUMxMS45NDA3IDguNDQzNDUgMTEuNzA1NyA4LjU0NDEzIDExLjUzMTIgOC43MTg2N0MxMS4zNTY2IDguODkzMjIgMTEuMjU1OSA5LjEyODIzIDExLjI1IDkuMzc1VjM1LjYyNUMxMS4yNTU5IDM1Ljg3MTggMTEuMzU2NiAzNi4xMDY4IDExLjUzMTIgMzYuMjgxM0MxMS43MDU3IDM2LjQ1NTkgMTEuOTQwNyAzNi41NTY2IDEyLjE4NzUgMzYuNTYyNUgzMi44MTI1QzMzLjA1OTMgMzYuNTU2NiAzMy4yOTQzIDM2LjQ1NTkgMzMuNDY4OCAzNi4yODEzQzMzLjY0MzQgMzYuMTA2OCAzMy43NDQxIDM1Ljg3MTggMzMuNzUgMzUuNjI1VjkuMzc1Wk0yNC4zNzUgMTMuMTI1SDMwVjE2Ljg3NUgyNC4zNzVWMTMuMTI1Wk0zMCAyMy40Mzc1SDI0LjM3NVYxOS42ODc1SDMwVjIzLjQzNzVaTTE1IDEzLjEyNUgyMC42MjVWMTYuODc1SDE1VjEzLjEyNVpNMTUgMjMuNDM3NVYxOS42ODc1SDIwLjYyNVYyMy40Mzc1SDE1Wk0xOC43NSAzNC42ODc1VjI4LjEyNUMxOC43NTU5IDI3Ljg3ODIgMTguODU2NiAyNy42NDMyIDE5LjAzMTIgMjcuNDY4N0MxOS4yMDU3IDI3LjI5NDEgMTkuNDQwNyAyNy4xOTM0IDE5LjY4NzUgMjcuMTg3NUgyNS4zMTI1QzI1LjU1OTMgMjcuMTkzNCAyNS43OTQzIDI3LjI5NDEgMjUuOTY4OCAyNy40Njg3QzI2LjE0MzQgMjcuNjQzMiAyNi4yNDQxIDI3Ljg3ODIgMjYuMjUgMjguMTI1VjM0LjY4NzVIMTguNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

}),
23712: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-example-83c033a246fd3a83889a4111c4e2ced2.png");

}),
22178: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-34e6e5894383ca21f6ca09be824d7f61.png");

}),
99232: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiMzRTY2RkYiLz4KPHBhdGggZD0iTTMwLjAyNjYgMTYuMDI2NkMzMC4wODQ3IDE1LjYxOTEgMzAuMDQ3MiAxNS4yMDM2IDI5LjkxNyAxNC44MTMxQzI5Ljc4NjggMTQuNDIyNiAyOS41Njc1IDE0LjA2NzggMjkuMjc2NCAxMy43NzY4QzI4Ljk4NTQgMTMuNDg1NyAyOC42MzA1IDEzLjI2NjQgMjguMjQgMTMuMTM2MkMyNy44NDk1IDEzLjAwNiAyNy40MzQxIDEyLjk2ODQgMjcuMDI2NiAxMy4wMjY2SDExLjAyNjZDMTAuNjE5MSAxMi45Njg0IDEwLjIwMzYgMTMuMDA2IDkuODEzMTQgMTMuMTM2MkM5LjQyMjY1IDEzLjI2NjQgOS4wNjc4MiAxMy40ODU3IDguNzc2NzUgMTMuNzc2OEM4LjQ4NTY5IDE0LjA2NzggOC4yNjYzNyAxNC40MjI2IDguMTM2MTcgMTQuODEzMUM4LjAwNTk2IDE1LjIwMzYgNy45Njg0NSAxNS42MTkxIDguMDI2NTkgMTYuMDI2NlYzMC4wMjY2QzcuOTY4NDUgMzAuNDM0MSA4LjAwNTk2IDMwLjg0OTUgOC4xMzYxNyAzMS4yNEM4LjI2NjM3IDMxLjYzMDUgOC40ODU2OSAzMS45ODU0IDguNzc2NzUgMzIuMjc2NEM5LjA2NzgyIDMyLjU2NzUgOS40MjI2NSAzMi43ODY4IDkuODEzMTQgMzIuOTE3QzEwLjIwMzYgMzMuMDQ3MiAxMC42MTkxIDMzLjA4NDcgMTEuMDI2NiAzMy4wMjY2SDI3LjAyNjZDMjcuNDM0MSAzMy4wODQ3IDI3Ljg0OTUgMzMuMDQ3MiAyOC4yNCAzMi45MTdDMjguNjMwNSAzMi43ODY4IDI4Ljk4NTQgMzIuNTY3NSAyOS4yNzY0IDMyLjI3NjRDMjkuNTY3NSAzMS45ODU0IDI5Ljc4NjggMzEuNjMwNSAyOS45MTcgMzEuMjRDMzAuMDQ3MiAzMC44NDk1IDMwLjA4NDcgMzAuNDM0MSAzMC4wMjY2IDMwLjAyNjZWMTYuMDI2NlpNMzIuMDI2NiAxOS4zNzY2VjI2Ljc3NjZMMzYuNTc2NiAyOS40MjY2QzM2Ljg0MSAyOS42MDk5IDM3LjEyNjQgMjkuNzYwOSAzNy40MjY2IDI5Ljg3NjZDMzcuNjYzNyAyOS45NzczIDM3LjkxOSAzMC4wMjg0IDM4LjE3NjYgMzAuMDI2NkMzOC40MzA0IDI5Ljk5NzkgMzguNjgxMyAyOS45NDc3IDM4LjkyNjYgMjkuODc2NkMzOS4yODU1IDI5LjcyODggMzkuNTg2NyAyOS40Njg2IDM5Ljc4NTEgMjkuMTM1QzM5Ljk4MzQgMjguODAxNCA0MC4wNjgyIDI4LjQxMjUgNDAuMDI2NiAyOC4wMjY2VjE4LjAyNjZDNDAuMDY4MiAxNy42NDA3IDM5Ljk4MzQgMTcuMjUxOCAzOS43ODUxIDE2LjkxODJDMzkuNTg2NyAxNi41ODQ2IDM5LjI4NTUgMTYuMzI0NCAzOC45MjY2IDE2LjE3NjZDMzguNjgxMyAxNi4xMDU0IDM4LjQzMDQgMTYuMDU1MyAzOC4xNzY2IDE2LjAyNjZDMzcuOTE5IDE2LjAyNDggMzcuNjYzNyAxNi4wNzU4IDM3LjQyNjYgMTYuMTc2NkMzNy4xMjY0IDE2LjI5MjMgMzYuODQxIDE2LjQ0MzMgMzYuNTc2NiAxNi42MjY2TDMzLjAyNjYgMTguNzI2NlYxOC43NzY2TDMyLjAyNjYgMTkuMzc2NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

}),
15109: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiMzRTY2RkYiLz4KPHBhdGggZD0iTTMwLjAyNjYgMTYuMDI2NkMzMC4wODQ3IDE1LjYxOTEgMzAuMDQ3MiAxNS4yMDM2IDI5LjkxNyAxNC44MTMxQzI5Ljc4NjggMTQuNDIyNiAyOS41Njc1IDE0LjA2NzggMjkuMjc2NCAxMy43NzY4QzI4Ljk4NTQgMTMuNDg1NyAyOC42MzA1IDEzLjI2NjQgMjguMjQgMTMuMTM2MkMyNy44NDk1IDEzLjAwNiAyNy40MzQxIDEyLjk2ODQgMjcuMDI2NiAxMy4wMjY2SDExLjAyNjZDMTAuNjE5MSAxMi45Njg0IDEwLjIwMzYgMTMuMDA2IDkuODEzMTQgMTMuMTM2MkM5LjQyMjY1IDEzLjI2NjQgOS4wNjc4MiAxMy40ODU3IDguNzc2NzUgMTMuNzc2OEM4LjQ4NTY5IDE0LjA2NzggOC4yNjYzNyAxNC40MjI2IDguMTM2MTcgMTQuODEzMUM4LjAwNTk2IDE1LjIwMzYgNy45Njg0NSAxNS42MTkxIDguMDI2NTkgMTYuMDI2NlYzMC4wMjY2QzcuOTY4NDUgMzAuNDM0MSA4LjAwNTk2IDMwLjg0OTUgOC4xMzYxNyAzMS4yNEM4LjI2NjM3IDMxLjYzMDUgOC40ODU2OSAzMS45ODU0IDguNzc2NzUgMzIuMjc2NEM5LjA2NzgyIDMyLjU2NzUgOS40MjI2NSAzMi43ODY4IDkuODEzMTQgMzIuOTE3QzEwLjIwMzYgMzMuMDQ3MiAxMC42MTkxIDMzLjA4NDcgMTEuMDI2NiAzMy4wMjY2SDI3LjAyNjZDMjcuNDM0MSAzMy4wODQ3IDI3Ljg0OTUgMzMuMDQ3MiAyOC4yNCAzMi45MTdDMjguNjMwNSAzMi43ODY4IDI4Ljk4NTQgMzIuNTY3NSAyOS4yNzY0IDMyLjI3NjRDMjkuNTY3NSAzMS45ODU0IDI5Ljc4NjggMzEuNjMwNSAyOS45MTcgMzEuMjRDMzAuMDQ3MiAzMC44NDk1IDMwLjA4NDcgMzAuNDM0MSAzMC4wMjY2IDMwLjAyNjZWMTYuMDI2NlpNMzIuMDI2NiAxOS4zNzY2VjI2Ljc3NjZMMzYuNTc2NiAyOS40MjY2QzM2Ljg0MSAyOS42MDk5IDM3LjEyNjQgMjkuNzYwOSAzNy40MjY2IDI5Ljg3NjZDMzcuNjYzNyAyOS45NzczIDM3LjkxOSAzMC4wMjg0IDM4LjE3NjYgMzAuMDI2NkMzOC40MzA0IDI5Ljk5NzkgMzguNjgxMyAyOS45NDc3IDM4LjkyNjYgMjkuODc2NkMzOS4yODU1IDI5LjcyODggMzkuNTg2NyAyOS40Njg2IDM5Ljc4NTEgMjkuMTM1QzM5Ljk4MzQgMjguODAxNCA0MC4wNjgyIDI4LjQxMjUgNDAuMDI2NiAyOC4wMjY2VjE4LjAyNjZDNDAuMDY4MiAxNy42NDA3IDM5Ljk4MzQgMTcuMjUxOCAzOS43ODUxIDE2LjkxODJDMzkuNTg2NyAxNi41ODQ2IDM5LjI4NTUgMTYuMzI0NCAzOC45MjY2IDE2LjE3NjZDMzguNjgxMyAxNi4xMDU0IDM4LjQzMDQgMTYuMDU1MyAzOC4xNzY2IDE2LjAyNjZDMzcuOTE5IDE2LjAyNDggMzcuNjYzNyAxNi4wNzU4IDM3LjQyNjYgMTYuMTc2NkMzNy4xMjY0IDE2LjI5MjMgMzYuODQxIDE2LjQ0MzMgMzYuNTc2NiAxNi42MjY2TDMzLjAyNjYgMTguNzI2NlYxOC43NzY2TDMyLjAyNjYgMTkuMzc2NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS44NTU1IDI3LjI2ODVMMTkuMDI2OSAyNC40NDA2TDE2LjE5ODcgMjcuMjY4NUMxNi4xMDU5IDI3LjM2MTUgMTUuOTk1NCAyNy40MzUzIDE1Ljg3NCAyNy40ODU2QzE1Ljc1MjYgMjcuNTM1OSAxNS42MjI2IDI3LjU2MTggMTUuNDkxMiAyNy41NjE4QzE1LjM1OTggMjcuNTYxOCAxNS4yMjk4IDI3LjUzNTkgMTUuMTA4NCAyNy40ODU2QzE0Ljk4NyAyNy40MzUzIDE0Ljg3NjYgMjcuMzYxNSAxNC43ODM3IDI3LjI2ODVDMTQuNTk2MiAyNy4wODEgMTQuNDkwNyAyNi44MjY3IDE0LjQ5MDcgMjYuNTYxNUMxNC40OTA3IDI2LjI5NjQgMTQuNTk2MiAyNi4wNDIxIDE0Ljc4MzcgMjUuODU0NkwxNy42MTI4IDIzLjAyNTVMMTQuNzgzNyAyMC4xOTc1QzE0LjY5MDcgMjAuMTA0NyAxNC42MTY3IDE5Ljk5NDQgMTQuNTY2NCAxOS44NzNDMTQuNTE2MSAxOS43NTE2IDE0LjQ5MDIgMTkuNjIxNSAxNC40OTAyIDE5LjQ5MDFDMTQuNDkwMiAxOS4zNTg2IDE0LjUxNjEgMTkuMjI4NSAxNC41NjY0IDE5LjEwNzFDMTQuNjE2NyAxOC45ODU3IDE0LjY5MDcgMTguODc1NCAxNC43ODM3IDE4Ljc4MjVDMTQuODc2NiAxOC42ODk2IDE0Ljk4NyAxOC42MTU4IDE1LjEwODQgMTguNTY1NUMxNS4yMjk4IDE4LjUxNTIgMTUuMzU5OCAxOC40ODkzIDE1LjQ5MTIgMTguNDg5M0MxNS42MjI2IDE4LjQ4OTMgMTUuNzUyNiAxOC41MTUyIDE1Ljg3NCAxOC41NjU1QzE1Ljk5NTQgMTguNjE1OCAxNi4xMDU5IDE4LjY4OTYgMTYuMTk4NyAxOC43ODI1TDE5LjAyNjkgMjEuNjExNUwyMS44NTU1IDE4Ljc4MjVDMjIuMDQzIDE4LjU5NTEgMjIuMjk3MyAxOC40ODk3IDIyLjU2MjUgMTguNDg5N0MyMi44Mjc3IDE4LjQ4OTcgMjMuMDgyIDE4LjU5NTEgMjMuMjY5NSAxOC43ODI1QzIzLjM2MjUgMTguODc1NCAyMy40MzY1IDE4Ljk4NTcgMjMuNDg2OCAxOS4xMDcxQzIzLjUzNzEgMTkuMjI4NSAyMy41NjMgMTkuMzU4NiAyMy41NjMgMTkuNDkwMUMyMy41NjMgMTkuNjIxNSAyMy41MzcxIDE5Ljc1MTYgMjMuNDg2OCAxOS44NzNDMjMuNDM2NSAxOS45OTQ0IDIzLjM2MjUgMjAuMTA0NyAyMy4yNjk1IDIwLjE5NzVMMjAuNDQxNCAyMy4wMjU1TDIzLjI2OTUgMjUuODU0NkMyMy40NTcgMjYuMDQyMSAyMy41NjI1IDI2LjI5NjQgMjMuNTYyNSAyNi41NjE1QzIzLjU2MjUgMjYuODI2NyAyMy40NTcgMjcuMDgxIDIzLjI2OTUgMjcuMjY4NUMyMy4wODIgMjcuNDU2MSAyMi44Mjc3IDI3LjU2MTUgMjIuNTYyNSAyNy41NjE1QzIyLjI5NzMgMjcuNTYxNSAyMi4wNDMgMjcuNDU2MSAyMS44NTU1IDI3LjI2ODVaIiBmaWxsPSIjRkYwMDAwIi8+Cjwvc3ZnPgo=");

}),
40590: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiNGRjVFMDAiLz4KPHBhdGggZD0iTTI4LjYzODcgMTIuMTk0NkMyOC41NzY2IDEyLjEyNjQgMjguNTAxNCAxMi4wNzE2IDI4LjQxNzUgMTIuMDMzNEMyOC4zMzM2IDExLjk5NTMgMjguMjQyOCAxMS45NzQ2IDI4LjE1MDYgMTEuOTcyN0gxNS44NjA0QzE1LjYxMzQgMTEuOTc2OCAxNS4zNzY1IDEyLjA3MTUgMTUuMTk0OCAxMi4yMzg5QzE1LjA1NDIgMTIuMzk4NCAxNC45NzU1IDEyLjYwMzEgMTQuOTczIDEyLjgxNTdWMzYuMjQyNkMxNC45Njg3IDM2LjM0ODggMTQuOTg2MiAzNi40NTQ3IDE1LjAyNDQgMzYuNTUzOUMxNS4wNjI1IDM2LjY1MzEgMTUuMTIwNSAzNi43NDM0IDE1LjE5NDggMzYuODE5NEMxNS4yNzkgMzYuOTEzNSAxNS4zODE0IDM2Ljk4OTYgMTUuNDk1OCAzNy4wNDNDMTUuNjEwMiAzNy4wOTYzIDE1LjczNDIgMzcuMTI1OSAxNS44NjA0IDM3LjEzSDI4LjE1MDZDMjguMjQyOCAzNy4xMjgxIDI4LjMzMzYgMzcuMTA3NCAyOC40MTc1IDM3LjA2OTNDMjguNTAxNCAzNy4wMzExIDI4LjU3NjYgMzYuOTc2MyAyOC42Mzg3IDM2LjkwODFMMjguNzI3NCAzNi44MTk0QzI4LjgxMzIgMzYuNzUwMyAyOC44ODE5IDM2LjY2MjIgMjguOTI4MSAzNi41NjIyQzI4Ljk3NDIgMzYuNDYyMSAyOC45OTY3IDM2LjM1MjcgMjguOTkzNiAzNi4yNDI2VjEyLjgxNTdDMjguOTkwNyAxMi43MDY2IDI4Ljk2NTUgMTIuNTk5MiAyOC45MTk4IDEyLjVDMjguODc0IDEyLjQwMDggMjguODA4NiAxMi4zMTIgMjguNzI3NCAxMi4yMzg5QzI4LjcxNjMgMTIuMjI2IDI4LjcwMjggMTIuMjE1NCAyOC42ODc1IDEyLjIwNzhDMjguNjcyMyAxMi4yMDAyIDI4LjY1NTcgMTIuMTk1NyAyOC42Mzg3IDEyLjE5NDZaTTE2Ljc5MjEgMjQuNTI5MkMxNi43ODkxIDI0LjQwNiAxNi44MTExIDI0LjI4MzUgMTYuODU2OSAyNC4xNjlDMTYuOTAyNiAyNC4wNTQ2IDE2Ljk3MTEgMjMuOTUwNyAxNy4wNTgzIDIzLjg2MzVDMTcuMTQ1NCAyMy43NzY0IDE3LjI0OTMgMjMuNzA3OSAxNy4zNjM3IDIzLjY2MjFDMTcuNDc4MiAyMy42MTY0IDE3LjYwMDcgMjMuNTk0NCAxNy43MjM5IDIzLjU5NzRDMTcuODQ3MSAyMy41OTQgMTcuOTY5NyAyMy42MTU5IDE4LjA4NDIgMjMuNjYxN0MxOC4xOTg2IDIzLjcwNzUgMTguMzAyNSAyMy43NzYyIDE4LjM4OTQgMjMuODYzNkMxOC41NTY4IDI0LjA0NTMgMTguNjUxNiAyNC4yODIyIDE4LjY1NTYgMjQuNTI5MkMxOC42NTg3IDI0LjY1MjQgMTguNjM2NyAyNC43NzQ5IDE4LjU5MDkgMjQuODg5M0MxOC41NDUyIDI1LjAwMzcgMTguNDc2NiAyNS4xMDc3IDE4LjM4OTUgMjUuMTk0OEMxOC4zMDI0IDI1LjI4MTkgMTguMTk4NCAyNS4zNTA0IDE4LjA4NCAyNS4zOTYyQzE3Ljk2OTYgMjUuNDQxOSAxNy44NDcxIDI1LjQ2NCAxNy43MjM5IDI1LjQ2MDlDMTcuNDc2OSAyNS40NTY5IDE3LjI0IDI1LjM2MjEgMTcuMDU4MyAyNS4xOTQ3QzE2Ljk3MDkgMjUuMTA3OCAxNi45MDIyIDI1LjAwMzkgMTYuODU2NCAyNC44ODk1QzE2LjgxMDYgMjQuNzc1IDE2Ljc4ODcgMjQuNjUyNCAxNi43OTIxIDI0LjUyOTJaTTMxLjk2NjMgMTEuMzUxNkMzMS45Njg4IDExLjA1MDEgMzEuOTA2OCAxMC43NTE2IDMxLjc4NDMgMTAuNDc2MUMzMS42NjE5IDEwLjIwMDYgMzEuNDgxOSA5Ljk1NDQ1IDMxLjI1NjQgOS43NTQyN0MzMS4wNDc0IDkuNTI0ODkgMzAuNzk0MyA5LjMzOTkxIDMwLjUxMjMgOS4yMTAzM0MzMC4yMzAyIDkuMDgwNzUgMjkuOTI1IDkuMDA5MjIgMjkuNjE0OCA5SDE0LjM1MThDMTMuNzEzNSA5LjAyNDA2IDEzLjEwOTIgOS4yOTQzOSAxMi42NjU4IDkuNzU0MjdDMTIuNDUxNyA5Ljk2MDk0IDEyLjI4MjEgMTAuMjA5MyAxMi4xNjc3IDEwLjQ4NEMxMi4wNTMyIDEwLjc1ODcgMTEuOTk2MiAxMS4wNTQgMTIuMDAwMyAxMS4zNTE2VjM2LjI0MjZDMTEuOTk3MiAzNi4zNTI3IDEyLjAxOTcgMzYuNDYyMSAxMi4wNjU4IDM2LjU2MjJDMTIuMTEyIDM2LjY2MjIgMTIuMTgwNyAzNi43NTAzIDEyLjI2NjUgMzYuODE5NEMxMi4zNCAzNi45MTQ2IDEyLjQzNCAzNi45OTIgMTIuNTQxNSAzNy4wNDU3QzEyLjY0OTEgMzcuMDk5NSAxMi43Njc0IDM3LjEyODMgMTIuODg3NyAzNy4xM0gxMi45NzY0QzEzLjA5MDkgMzcuMTMxIDEzLjIwMzggMzcuMTAzMSAxMy4zMDQ3IDM3LjA0ODhDMTMuNDA1NSAzNi45OTQ1IDEzLjQ5MSAzNi45MTU2IDEzLjU1MzIgMzYuODE5NEMxMy42NDk0IDM2Ljc1NzIgMTMuNzI4MyAzNi42NzE3IDEzLjc4MjYgMzYuNTcwOUMxMy44MzY5IDM2LjQ3IDEzLjg2NDggMzYuMzU3MSAxMy44NjM4IDM2LjI0MjZWMTIuMjgzM0MxMy44NjAzIDEyLjEwMiAxMy44OTQgMTEuOTIxOSAxMy45NjI2IDExLjc1NEMxNC4wMzEzIDExLjU4NjIgMTQuMTMzNiAxMS40MzQxIDE0LjI2MzEgMTEuMzA3MkMxNC4zOTM5IDExLjE2NzUgMTQuNTUyIDExLjA1NjEgMTQuNzI3NSAxMC45Nzk4QzE0LjkwMyAxMC45MDM1IDE1LjA5MjIgMTAuODYzOSAxNS4yODM2IDEwLjg2MzVIMjguNjgzQzI4Ljg2ODMgMTAuODYxNCAyOS4wNTE4IDEwLjkgMjkuMjIwNSAxMC45NzY3QzI5LjM4OTIgMTEuMDUzNCAyOS41Mzg5IDExLjE2NjIgMjkuNjU5MiAxMS4zMDcyQzI5LjgwMDIgMTEuNDI3NCAyOS45MTMgMTEuNTc3MiAyOS45ODk3IDExLjc0NTlDMzAuMDY2MyAxMS45MTQ1IDMwLjEwNSAxMi4wOTggMzAuMTAyOCAxMi4yODMzVjM2LjI0MjZDMzAuMDk5OCAzNi4zNTI3IDMwLjEyMjIgMzYuNDYyMSAzMC4xNjg0IDM2LjU2MjJDMzAuMjE0NiAzNi42NjIyIDMwLjI4MzMgMzYuNzUwMyAzMC4zNjkxIDM2LjgxOTRDMzAuNDQyNSAzNi45MTQ2IDMwLjUzNjYgMzYuOTkyIDMwLjY0NDEgMzcuMDQ1N0MzMC43NTE3IDM3LjA5OTUgMzAuODcgMzcuMTI4MyAzMC45OTAyIDM3LjEzSDMxLjA3OUMzMS4xOTkyIDM3LjEyODMgMzEuMzE3NSAzNy4wOTk1IDMxLjQyNTEgMzcuMDQ1N0MzMS41MzI2IDM2Ljk5MiAzMS42MjY3IDM2LjkxNDYgMzEuNzAwMSAzNi44MTk0QzMxLjc4NTkgMzYuNzUwMyAzMS44NTQ2IDM2LjY2MjIgMzEuOTAwOCAzNi41NjIyQzMxLjk0NyAzNi40NjIxIDMxLjk2OTQgMzYuMzUyNyAzMS45NjYzIDM2LjI0MjZWMTEuMzUxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

}),
19301: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSI1MSIgcng9IjExIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMCAyNCkiIGZpbGw9IiMzRjNFM0IiLz4KPHBhdGggZD0iTTE3LjE1NTMgMTIuNjkxOEw5LjE4NjUyIDEyLjY5MThMOS4xODY1MiAxMS4zMzk1TDE3LjE1NTMgMTEuMzM5NUwxNy4xNTUzIDEyLjY5MThaTTEzLjg0NyAxNkwxMi40OTQ4IDE2TDEyLjQ5NDggOC4wMzEyNUwxMy44NDcgOC4wMzEyNUwxMy44NDcgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDEgMTEuNVYxMi41TDMzIDEyLjVWMTEuNUw0MSAxMS41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

}),
40281: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAyNCA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjUxIiByeD0iMTEiIGZpbGw9IiMzRjNFM0IiLz4KPHBhdGggZD0iTTExLjMwODIgMTcuMTU1M1Y5LjE4NjUySDEyLjY2MDVWMTcuMTU1M0gxMS4zMDgyWk04IDEzLjg0N1YxMi40OTQ4SDE1Ljk2ODhWMTMuODQ3SDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMzlWNDBIOFYzOUgxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

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