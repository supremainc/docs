"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["19723"], {
90759: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_monitoring_map_mdx_7e7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-monitoring-map-mdx-7e7.json
var site_docs_platform_biostar_x_monitoring_map_mdx_7e7_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-map","title":"맵 모니터링하기","description":"맵 모니터링 기능을 통해 구역과 층별 출입문 및 카메라 현황을 실시간으로 확인하고 제어하는 방법을 안내합니다. GIS 지도와 연동하여 구역 및 층 구조를 시각적으로 관리하며, 출입문 제어와 카메라 영상 재생 등 다양한 기능을 활용할 수 있습니다.","source":"@site/docs/platform/biostar_x/monitoring-map.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-map","permalink":"/docs/platform/biostar_x/monitoring-map","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-map.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-map","title":"맵 모니터링하기","description":"맵 모니터링 기능을 통해 구역과 층별 출입문 및 카메라 현황을 실시간으로 확인하고 제어하는 방법을 안내합니다. GIS 지도와 연동하여 구역 및 층 구조를 시각적으로 관리하며, 출입문 제어와 카메라 영상 재생 등 다양한 기능을 활용할 수 있습니다.","keywords":["모니터링","맵","구역","층"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"고급 출입 통제 제어하기","permalink":"/docs/platform/biostar_x/control-zone"},"next":{"title":"장치 모니터링하기","permalink":"/docs/platform/biostar_x/monitoring-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/monitoring-map.mdx


const frontMatter = {
	id: 'monitoring-map',
	title: '맵 모니터링하기',
	description: '맵 모니터링 기능을 통해 구역과 층별 출입문 및 카메라 현황을 실시간으로 확인하고 제어하는 방법을 안내합니다. GIS 지도와 연동하여 구역 및 층 구조를 시각적으로 관리하며, 출입문 제어와 카메라 영상 재생 등 다양한 기능을 활용할 수 있습니다.',
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAlert, IcBack, IcCamFail, IcCamOk, IcClose, IcErr, IcFLockDr, IcFUlockDr, IcMapmore, IcMove, IcZoom, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlert) _missingMdxReference("IcAlert", true);
  if (!IcBack) _missingMdxReference("IcBack", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcFLockDr) _missingMdxReference("IcFLockDr", true);
  if (!IcFUlockDr) _missingMdxReference("IcFUlockDr", true);
  if (!IcMapmore) _missingMdxReference("IcMapmore", true);
  if (!IcMove) _missingMdxReference("IcMove", true);
  if (!IcZoom) _missingMdxReference("IcZoom", true);
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
      }), "에서는 한 개의 구역(Area)에 여러 개의 시설(Facility)을 구성할 수 있습니다. 각 시설에는 여러 개의 층을 구성할 수 있습니다. 한 개의 층(Floor)에는 도면을 기준으로 출입문(Door), 카메라(Camera)를 설정해 모니터링할 수 있습니다. 아래 그림을 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Area structure",
        src: (__webpack_require__(69796)/* ["default"] */.A) + "",
        width: "2743",
        height: "1771"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["그림과 같이 구성한 지역을 GIS 지도와 연동하여 지도 위의 구역(Area) → 시설(Facility) → 층(Floor) 순으로 접근하여 출입문과 카메라를 모니터링하고 제어할 수 있습니다. 이러한 구조는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " 페이지의 사이드바에서도 같은 구조로 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Monitoring sidebar",
        src: (__webpack_require__(43593)/* ["default"] */.A) + "",
        width: "400",
        height: "395"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["맵을 구성하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-map-management",
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
      children: "맵에 표시되는 구성 요소는 구역(Area)과 시설(Facility), 시설에 연결된 카메라를 확인할 수 있습니다. 시설을 통해서 층(Floor)으로 접근할 수 있습니다. 층에는 출입문과 카메라를 확인할 수 있습니다."
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
                alt: "시설 아이콘",
                src: (__webpack_require__(2684)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "시설"
              }), "(Facility): 맵에 배치된 시설을 클릭하면 해당 시설에 설정된 층(Floor)으로 진입할 수 있습니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "출입문 아이콘",
                src: (__webpack_require__(18248)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "출입문"
              }), ": 맵에 배치된 출입문을 클릭하면 해당 출입문을 제어할 수 있는 팝업 메뉴가 표시됩니다. 제공하는 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
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
                src: (__webpack_require__(21006)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "카메라"
              }), ": 카메라를 클릭하면 해당 시설 또는 층의 영상을 재생할 수 있습니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "카메라 오류 아이콘",
                src: (__webpack_require__(16920)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "카메라 오류"
              }), ": 카메라가 연결되지 않았거나, 전원이 꺼져 있는 경우에 표시됩니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcFUlockDr, {
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "열린 출입문"
              }), ": 층(Floor)에 배치된 출입문이 열린 상태입니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcFLockDr, {
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "잠긴 출입문"
              }), ": 층(Floor)에 배치된 출입문이 잠긴 상태입니다."]
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
                src: (__webpack_require__(44678)/* ["default"] */.A) + "",
                width: "24",
                height: "51"
              }), " / ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "확대/축소",
                src: (__webpack_require__(30129)/* ["default"] */.A) + "",
                width: "51",
                height: "24"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "맵의 왼쪽 상단, 오른쪽 하단에 위치한 버튼을 클릭해 확대/축소할 수 있습니다. 또는 마우스 휠을 사용하여 맵을 확대하거나 축소할 수 있습니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcZoom, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "층의 오른쪽 하단에 위치한 버튼을 클릭해 확대/축소할 수 있습니다."
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
            children: "맵 위에서 마우스를 클릭한 상태로 드래그하면 위치를 이동할 수 있습니다. 마우스 휠을 사용해 확대하거나 축소할 수 있습니다."
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
      children: "화면 왼쪽 사이드바에서 각 시설 또는 층의 출입문과 카메라 상태를 점검할 수 있습니다. 각 아이콘별 상태는 아래를 참고하세요."
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
      children: ["구역이 GIS 지도와 연동되어 있다면, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " 섹션에 맵을 표시할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면 왼쪽 사이드바에서 맵으로 확인할 시설을 선택하세요."
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
            children: "화면 왼쪽 사이드바에서 해당 시설을 더블 클릭해도 맵을 열 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이미지는 예시 화면입니다. 실제 화면과 다를 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["GIS 지도와 연동하여 구역을 구성하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-area",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resize-map",
      children: "맵 크기 조절 및 위치 이동"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "맵의 크기를 조절하려면 지도 상에서 빈 영역을 클릭하세요. 각 모서리에 크기를 조절할 수 있는 핸들이 표시됩니다. 핸들을 클릭한 상태에서 드래그하여 원하는 크기로 조절하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-resize.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["크기를 조절한 상태에서 맵을 다른 위치로 이동하려면 맵 위에 ", (0,jsx_runtime.jsx)(IcMove, {}), " 아이콘을 클릭한 상태에서 원하는 위치로 드래그하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-move.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entry-floor",
      children: "층으로 진입하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "맵에서 층으로 진입하려면 시설(Facility)을 클릭하세요. 팝업 메뉴에 진입할 수 있는 층 목록이 표시되면 원하는 층을 선택하세요. 선택한 층의 도면과 출입문, 카메라를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["또는 화면 왼쪽 사이드바에서 층을 더블 클릭하거나 마우스 오른쪽 버튼을 클릭하고 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openMap"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-select-floor.png",
      alone: true
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
          children: "카메라를 더블 클릭하면 실시간 영상을 재생할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/monitoring-map-select-floor-play-video.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["층(Floor)에 출입문과 카메라를 설정하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-floor",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["시설이 표시되는 맵으로 이동하려면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(IcBack, {}), " 버튼을 클릭하세요."]
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
      src: "/img/common/monitoring-map-select-floor-list-box.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["시설이 표시되는 맵으로 이동하려면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(IcBack, {}), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["맵 왼쪽 상단의 층 선택 옵션은 시설(Facility)에 설정되어 있는 층(Floor)만 표시합니다. 해당 층이 시설에 설정되어 있지 않으면 목록에 표시되지 않습니다. 시설에 층을 설정하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-facility",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-camera",
      children: "카메라 제어하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "맵 또는 층에서 카메라를 제어하려면 카메라 아이콘을 클릭하세요. 팝업 메뉴에서 원하는 기능을 선택하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-map-camera-popup.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.playVideo"
              }), ": 카메라 영상을 실시간으로 확인할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.showCoverage"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.hideCoverage"
              }), ": 카메라의 촬영 범위를 표시하거나 숨길 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.door.viewDetail"
              }), ": 카메라의 상세 정보를 확인할 수 있습니다. 화면 오른쪽 패널에 카메라의 이름, 그룹, 아이디, IP 주소 등을 표시합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["비디오 타일에 카메라 영상을 배치하고 재생하려면, 화면 왼쪽 사이드바의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.map.title"
          }), " 목록에서 카메라를 더블 클릭하세요. 또는 마우스 오른쪽 버튼을 클릭하고 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-map-open-camera.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카메라의 이름, 그룹 등과 같은 상세 정보를 확인하려면 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
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
2684: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjOTMzNkZGIi8+DQo8cGF0aCBkPSJNMzMuNzUgOS4zNzVDMzMuNzQ0MSA5LjEyODIzIDMzLjY0MzQgOC44OTMyMiAzMy40Njg4IDguNzE4NjdDMzMuMjk0MyA4LjU0NDEzIDMzLjA1OTMgOC40NDM0NSAzMi44MTI1IDguNDM3NUgxMi4xODc1QzExLjk0MDcgOC40NDM0NSAxMS43MDU3IDguNTQ0MTMgMTEuNTMxMiA4LjcxODY3QzExLjM1NjYgOC44OTMyMiAxMS4yNTU5IDkuMTI4MjMgMTEuMjUgOS4zNzVWMzUuNjI1QzExLjI1NTkgMzUuODcxOCAxMS4zNTY2IDM2LjEwNjggMTEuNTMxMiAzNi4yODEzQzExLjcwNTcgMzYuNDU1OSAxMS45NDA3IDM2LjU1NjYgMTIuMTg3NSAzNi41NjI1SDMyLjgxMjVDMzMuMDU5MyAzNi41NTY2IDMzLjI5NDMgMzYuNDU1OSAzMy40Njg4IDM2LjI4MTNDMzMuNjQzNCAzNi4xMDY4IDMzLjc0NDEgMzUuODcxOCAzMy43NSAzNS42MjVWOS4zNzVaTTI0LjM3NSAxMy4xMjVIMzBWMTYuODc1SDI0LjM3NVYxMy4xMjVaTTMwIDIzLjQzNzVIMjQuMzc1VjE5LjY4NzVIMzBWMjMuNDM3NVpNMTUgMTMuMTI1SDIwLjYyNVYxNi44NzVIMTVWMTMuMTI1Wk0xNSAyMy40Mzc1VjE5LjY4NzVIMjAuNjI1VjIzLjQzNzVIMTVaTTE4Ljc1IDM0LjY4NzVWMjguMTI1QzE4Ljc1NTkgMjcuODc4MiAxOC44NTY2IDI3LjY0MzIgMTkuMDMxMiAyNy40Njg3QzE5LjIwNTcgMjcuMjk0MSAxOS40NDA3IDI3LjE5MzQgMTkuNjg3NSAyNy4xODc1SDI1LjMxMjVDMjUuNTU5MyAyNy4xOTM0IDI1Ljc5NDMgMjcuMjk0MSAyNS45Njg4IDI3LjQ2ODdDMjYuMTQzNCAyNy42NDMyIDI2LjI0NDEgMjcuODc4MiAyNi4yNSAyOC4xMjVWMzQuNjg3NUgxOC43NVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==");

}),
43593: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-example-83c033a246fd3a83889a4111c4e2ced2.png");

}),
69796: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-ad4ae185a1ecc1918cfb680e0d0a82ca.png");

}),
21006: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjM0U2NkZGIi8+DQo8cGF0aCBkPSJNMzAuMDI2NiAxNi4wMjY2QzMwLjA4NDcgMTUuNjE5MSAzMC4wNDcyIDE1LjIwMzYgMjkuOTE3IDE0LjgxMzFDMjkuNzg2OCAxNC40MjI2IDI5LjU2NzUgMTQuMDY3OCAyOS4yNzY0IDEzLjc3NjhDMjguOTg1NCAxMy40ODU3IDI4LjYzMDUgMTMuMjY2NCAyOC4yNCAxMy4xMzYyQzI3Ljg0OTUgMTMuMDA2IDI3LjQzNDEgMTIuOTY4NCAyNy4wMjY2IDEzLjAyNjZIMTEuMDI2NkMxMC42MTkxIDEyLjk2ODQgMTAuMjAzNiAxMy4wMDYgOS44MTMxNCAxMy4xMzYyQzkuNDIyNjUgMTMuMjY2NCA5LjA2NzgyIDEzLjQ4NTcgOC43NzY3NSAxMy43NzY4QzguNDg1NjkgMTQuMDY3OCA4LjI2NjM3IDE0LjQyMjYgOC4xMzYxNyAxNC44MTMxQzguMDA1OTYgMTUuMjAzNiA3Ljk2ODQ1IDE1LjYxOTEgOC4wMjY1OSAxNi4wMjY2VjMwLjAyNjZDNy45Njg0NSAzMC40MzQxIDguMDA1OTYgMzAuODQ5NSA4LjEzNjE3IDMxLjI0QzguMjY2MzcgMzEuNjMwNSA4LjQ4NTY5IDMxLjk4NTQgOC43NzY3NSAzMi4yNzY0QzkuMDY3ODIgMzIuNTY3NSA5LjQyMjY1IDMyLjc4NjggOS44MTMxNCAzMi45MTdDMTAuMjAzNiAzMy4wNDcyIDEwLjYxOTEgMzMuMDg0NyAxMS4wMjY2IDMzLjAyNjZIMjcuMDI2NkMyNy40MzQxIDMzLjA4NDcgMjcuODQ5NSAzMy4wNDcyIDI4LjI0IDMyLjkxN0MyOC42MzA1IDMyLjc4NjggMjguOTg1NCAzMi41Njc1IDI5LjI3NjQgMzIuMjc2NEMyOS41Njc1IDMxLjk4NTQgMjkuNzg2OCAzMS42MzA1IDI5LjkxNyAzMS4yNEMzMC4wNDcyIDMwLjg0OTUgMzAuMDg0NyAzMC40MzQxIDMwLjAyNjYgMzAuMDI2NlYxNi4wMjY2Wk0zMi4wMjY2IDE5LjM3NjZWMjYuNzc2NkwzNi41NzY2IDI5LjQyNjZDMzYuODQxIDI5LjYwOTkgMzcuMTI2NCAyOS43NjA5IDM3LjQyNjYgMjkuODc2NkMzNy42NjM3IDI5Ljk3NzMgMzcuOTE5IDMwLjAyODQgMzguMTc2NiAzMC4wMjY2QzM4LjQzMDQgMjkuOTk3OSAzOC42ODEzIDI5Ljk0NzcgMzguOTI2NiAyOS44NzY2QzM5LjI4NTUgMjkuNzI4OCAzOS41ODY3IDI5LjQ2ODYgMzkuNzg1MSAyOS4xMzVDMzkuOTgzNCAyOC44MDE0IDQwLjA2ODIgMjguNDEyNSA0MC4wMjY2IDI4LjAyNjZWMTguMDI2NkM0MC4wNjgyIDE3LjY0MDcgMzkuOTgzNCAxNy4yNTE4IDM5Ljc4NTEgMTYuOTE4MkMzOS41ODY3IDE2LjU4NDYgMzkuMjg1NSAxNi4zMjQ0IDM4LjkyNjYgMTYuMTc2NkMzOC42ODEzIDE2LjEwNTQgMzguNDMwNCAxNi4wNTUzIDM4LjE3NjYgMTYuMDI2NkMzNy45MTkgMTYuMDI0OCAzNy42NjM3IDE2LjA3NTggMzcuNDI2NiAxNi4xNzY2QzM3LjEyNjQgMTYuMjkyMyAzNi44NDEgMTYuNDQzMyAzNi41NzY2IDE2LjYyNjZMMzMuMDI2NiAxOC43MjY2VjE4Ljc3NjZMMzIuMDI2NiAxOS4zNzY2WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");

}),
16920: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjM0U2NkZGIi8+DQo8cGF0aCBkPSJNMzAuMDI2NiAxNi4wMjY2QzMwLjA4NDcgMTUuNjE5MSAzMC4wNDcyIDE1LjIwMzYgMjkuOTE3IDE0LjgxMzFDMjkuNzg2OCAxNC40MjI2IDI5LjU2NzUgMTQuMDY3OCAyOS4yNzY0IDEzLjc3NjhDMjguOTg1NCAxMy40ODU3IDI4LjYzMDUgMTMuMjY2NCAyOC4yNCAxMy4xMzYyQzI3Ljg0OTUgMTMuMDA2IDI3LjQzNDEgMTIuOTY4NCAyNy4wMjY2IDEzLjAyNjZIMTEuMDI2NkMxMC42MTkxIDEyLjk2ODQgMTAuMjAzNiAxMy4wMDYgOS44MTMxNCAxMy4xMzYyQzkuNDIyNjUgMTMuMjY2NCA5LjA2NzgyIDEzLjQ4NTcgOC43NzY3NSAxMy43NzY4QzguNDg1NjkgMTQuMDY3OCA4LjI2NjM3IDE0LjQyMjYgOC4xMzYxNyAxNC44MTMxQzguMDA1OTYgMTUuMjAzNiA3Ljk2ODQ1IDE1LjYxOTEgOC4wMjY1OSAxNi4wMjY2VjMwLjAyNjZDNy45Njg0NSAzMC40MzQxIDguMDA1OTYgMzAuODQ5NSA4LjEzNjE3IDMxLjI0QzguMjY2MzcgMzEuNjMwNSA4LjQ4NTY5IDMxLjk4NTQgOC43NzY3NSAzMi4yNzY0QzkuMDY3ODIgMzIuNTY3NSA5LjQyMjY1IDMyLjc4NjggOS44MTMxNCAzMi45MTdDMTAuMjAzNiAzMy4wNDcyIDEwLjYxOTEgMzMuMDg0NyAxMS4wMjY2IDMzLjAyNjZIMjcuMDI2NkMyNy40MzQxIDMzLjA4NDcgMjcuODQ5NSAzMy4wNDcyIDI4LjI0IDMyLjkxN0MyOC42MzA1IDMyLjc4NjggMjguOTg1NCAzMi41Njc1IDI5LjI3NjQgMzIuMjc2NEMyOS41Njc1IDMxLjk4NTQgMjkuNzg2OCAzMS42MzA1IDI5LjkxNyAzMS4yNEMzMC4wNDcyIDMwLjg0OTUgMzAuMDg0NyAzMC40MzQxIDMwLjAyNjYgMzAuMDI2NlYxNi4wMjY2Wk0zMi4wMjY2IDE5LjM3NjZWMjYuNzc2NkwzNi41NzY2IDI5LjQyNjZDMzYuODQxIDI5LjYwOTkgMzcuMTI2NCAyOS43NjA5IDM3LjQyNjYgMjkuODc2NkMzNy42NjM3IDI5Ljk3NzMgMzcuOTE5IDMwLjAyODQgMzguMTc2NiAzMC4wMjY2QzM4LjQzMDQgMjkuOTk3OSAzOC42ODEzIDI5Ljk0NzcgMzguOTI2NiAyOS44NzY2QzM5LjI4NTUgMjkuNzI4OCAzOS41ODY3IDI5LjQ2ODYgMzkuNzg1MSAyOS4xMzVDMzkuOTgzNCAyOC44MDE0IDQwLjA2ODIgMjguNDEyNSA0MC4wMjY2IDI4LjAyNjZWMTguMDI2NkM0MC4wNjgyIDE3LjY0MDcgMzkuOTgzNCAxNy4yNTE4IDM5Ljc4NTEgMTYuOTE4MkMzOS41ODY3IDE2LjU4NDYgMzkuMjg1NSAxNi4zMjQ0IDM4LjkyNjYgMTYuMTc2NkMzOC42ODEzIDE2LjEwNTQgMzguNDMwNCAxNi4wNTUzIDM4LjE3NjYgMTYuMDI2NkMzNy45MTkgMTYuMDI0OCAzNy42NjM3IDE2LjA3NTggMzcuNDI2NiAxNi4xNzY2QzM3LjEyNjQgMTYuMjkyMyAzNi44NDEgMTYuNDQzMyAzNi41NzY2IDE2LjYyNjZMMzMuMDI2NiAxOC43MjY2VjE4Ljc3NjZMMzIuMDI2NiAxOS4zNzY2WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0yMS44NTU1IDI3LjI2ODVMMTkuMDI2OSAyNC40NDA2TDE2LjE5ODcgMjcuMjY4NUMxNi4xMDU5IDI3LjM2MTUgMTUuOTk1NCAyNy40MzUzIDE1Ljg3NCAyNy40ODU2QzE1Ljc1MjYgMjcuNTM1OSAxNS42MjI2IDI3LjU2MTggMTUuNDkxMiAyNy41NjE4QzE1LjM1OTggMjcuNTYxOCAxNS4yMjk4IDI3LjUzNTkgMTUuMTA4NCAyNy40ODU2QzE0Ljk4NyAyNy40MzUzIDE0Ljg3NjYgMjcuMzYxNSAxNC43ODM3IDI3LjI2ODVDMTQuNTk2MiAyNy4wODEgMTQuNDkwNyAyNi44MjY3IDE0LjQ5MDcgMjYuNTYxNUMxNC40OTA3IDI2LjI5NjQgMTQuNTk2MiAyNi4wNDIxIDE0Ljc4MzcgMjUuODU0NkwxNy42MTI4IDIzLjAyNTVMMTQuNzgzNyAyMC4xOTc1QzE0LjY5MDcgMjAuMTA0NyAxNC42MTY3IDE5Ljk5NDQgMTQuNTY2NCAxOS44NzNDMTQuNTE2MSAxOS43NTE2IDE0LjQ5MDIgMTkuNjIxNSAxNC40OTAyIDE5LjQ5MDFDMTQuNDkwMiAxOS4zNTg2IDE0LjUxNjEgMTkuMjI4NSAxNC41NjY0IDE5LjEwNzFDMTQuNjE2NyAxOC45ODU3IDE0LjY5MDcgMTguODc1NCAxNC43ODM3IDE4Ljc4MjVDMTQuODc2NiAxOC42ODk2IDE0Ljk4NyAxOC42MTU4IDE1LjEwODQgMTguNTY1NUMxNS4yMjk4IDE4LjUxNTIgMTUuMzU5OCAxOC40ODkzIDE1LjQ5MTIgMTguNDg5M0MxNS42MjI2IDE4LjQ4OTMgMTUuNzUyNiAxOC41MTUyIDE1Ljg3NCAxOC41NjU1QzE1Ljk5NTQgMTguNjE1OCAxNi4xMDU5IDE4LjY4OTYgMTYuMTk4NyAxOC43ODI1TDE5LjAyNjkgMjEuNjExNUwyMS44NTU1IDE4Ljc4MjVDMjIuMDQzIDE4LjU5NTEgMjIuMjk3MyAxOC40ODk3IDIyLjU2MjUgMTguNDg5N0MyMi44Mjc3IDE4LjQ4OTcgMjMuMDgyIDE4LjU5NTEgMjMuMjY5NSAxOC43ODI1QzIzLjM2MjUgMTguODc1NCAyMy40MzY1IDE4Ljk4NTcgMjMuNDg2OCAxOS4xMDcxQzIzLjUzNzEgMTkuMjI4NSAyMy41NjMgMTkuMzU4NiAyMy41NjMgMTkuNDkwMUMyMy41NjMgMTkuNjIxNSAyMy41MzcxIDE5Ljc1MTYgMjMuNDg2OCAxOS44NzNDMjMuNDM2NSAxOS45OTQ0IDIzLjM2MjUgMjAuMTA0NyAyMy4yNjk1IDIwLjE5NzVMMjAuNDQxNCAyMy4wMjU1TDIzLjI2OTUgMjUuODU0NkMyMy40NTcgMjYuMDQyMSAyMy41NjI1IDI2LjI5NjQgMjMuNTYyNSAyNi41NjE1QzIzLjU2MjUgMjYuODI2NyAyMy40NTcgMjcuMDgxIDIzLjI2OTUgMjcuMjY4NUMyMy4wODIgMjcuNDU2MSAyMi44Mjc3IDI3LjU2MTUgMjIuNTYyNSAyNy41NjE1QzIyLjI5NzMgMjcuNTYxNSAyMi4wNDMgMjcuNDU2MSAyMS44NTU1IDI3LjI2ODVaIiBmaWxsPSIjRkYwMDAwIi8+DQo8L3N2Zz4NCg==");

}),
18248: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjRkY1RTAwIi8+DQo8cGF0aCBkPSJNMjguNjM4NyAxMi4xOTQ2QzI4LjU3NjYgMTIuMTI2NCAyOC41MDE0IDEyLjA3MTYgMjguNDE3NSAxMi4wMzM0QzI4LjMzMzYgMTEuOTk1MyAyOC4yNDI4IDExLjk3NDYgMjguMTUwNiAxMS45NzI3SDE1Ljg2MDRDMTUuNjEzNCAxMS45NzY4IDE1LjM3NjUgMTIuMDcxNSAxNS4xOTQ4IDEyLjIzODlDMTUuMDU0MiAxMi4zOTg0IDE0Ljk3NTUgMTIuNjAzMSAxNC45NzMgMTIuODE1N1YzNi4yNDI2QzE0Ljk2ODcgMzYuMzQ4OCAxNC45ODYyIDM2LjQ1NDcgMTUuMDI0NCAzNi41NTM5QzE1LjA2MjUgMzYuNjUzMSAxNS4xMjA1IDM2Ljc0MzQgMTUuMTk0OCAzNi44MTk0QzE1LjI3OSAzNi45MTM1IDE1LjM4MTQgMzYuOTg5NiAxNS40OTU4IDM3LjA0M0MxNS42MTAyIDM3LjA5NjMgMTUuNzM0MiAzNy4xMjU5IDE1Ljg2MDQgMzcuMTNIMjguMTUwNkMyOC4yNDI4IDM3LjEyODEgMjguMzMzNiAzNy4xMDc0IDI4LjQxNzUgMzcuMDY5M0MyOC41MDE0IDM3LjAzMTEgMjguNTc2NiAzNi45NzYzIDI4LjYzODcgMzYuOTA4MUwyOC43Mjc0IDM2LjgxOTRDMjguODEzMiAzNi43NTAzIDI4Ljg4MTkgMzYuNjYyMiAyOC45MjgxIDM2LjU2MjJDMjguOTc0MiAzNi40NjIxIDI4Ljk5NjcgMzYuMzUyNyAyOC45OTM2IDM2LjI0MjZWMTIuODE1N0MyOC45OTA3IDEyLjcwNjYgMjguOTY1NSAxMi41OTkyIDI4LjkxOTggMTIuNUMyOC44NzQgMTIuNDAwOCAyOC44MDg2IDEyLjMxMiAyOC43Mjc0IDEyLjIzODlDMjguNzE2MyAxMi4yMjYgMjguNzAyOCAxMi4yMTU0IDI4LjY4NzUgMTIuMjA3OEMyOC42NzIzIDEyLjIwMDIgMjguNjU1NyAxMi4xOTU3IDI4LjYzODcgMTIuMTk0NlpNMTYuNzkyMSAyNC41MjkyQzE2Ljc4OTEgMjQuNDA2IDE2LjgxMTEgMjQuMjgzNSAxNi44NTY5IDI0LjE2OUMxNi45MDI2IDI0LjA1NDYgMTYuOTcxMSAyMy45NTA3IDE3LjA1ODMgMjMuODYzNUMxNy4xNDU0IDIzLjc3NjQgMTcuMjQ5MyAyMy43MDc5IDE3LjM2MzcgMjMuNjYyMUMxNy40NzgyIDIzLjYxNjQgMTcuNjAwNyAyMy41OTQ0IDE3LjcyMzkgMjMuNTk3NEMxNy44NDcxIDIzLjU5NCAxNy45Njk3IDIzLjYxNTkgMTguMDg0MiAyMy42NjE3QzE4LjE5ODYgMjMuNzA3NSAxOC4zMDI1IDIzLjc3NjIgMTguMzg5NCAyMy44NjM2QzE4LjU1NjggMjQuMDQ1MyAxOC42NTE2IDI0LjI4MjIgMTguNjU1NiAyNC41MjkyQzE4LjY1ODcgMjQuNjUyNCAxOC42MzY3IDI0Ljc3NDkgMTguNTkwOSAyNC44ODkzQzE4LjU0NTIgMjUuMDAzNyAxOC40NzY2IDI1LjEwNzcgMTguMzg5NSAyNS4xOTQ4QzE4LjMwMjQgMjUuMjgxOSAxOC4xOTg0IDI1LjM1MDQgMTguMDg0IDI1LjM5NjJDMTcuOTY5NiAyNS40NDE5IDE3Ljg0NzEgMjUuNDY0IDE3LjcyMzkgMjUuNDYwOUMxNy40NzY5IDI1LjQ1NjkgMTcuMjQgMjUuMzYyMSAxNy4wNTgzIDI1LjE5NDdDMTYuOTcwOSAyNS4xMDc4IDE2LjkwMjIgMjUuMDAzOSAxNi44NTY0IDI0Ljg4OTVDMTYuODEwNiAyNC43NzUgMTYuNzg4NyAyNC42NTI0IDE2Ljc5MjEgMjQuNTI5MlpNMzEuOTY2MyAxMS4zNTE2QzMxLjk2ODggMTEuMDUwMSAzMS45MDY4IDEwLjc1MTYgMzEuNzg0MyAxMC40NzYxQzMxLjY2MTkgMTAuMjAwNiAzMS40ODE5IDkuOTU0NDUgMzEuMjU2NCA5Ljc1NDI3QzMxLjA0NzQgOS41MjQ4OSAzMC43OTQzIDkuMzM5OTEgMzAuNTEyMyA5LjIxMDMzQzMwLjIzMDIgOS4wODA3NSAyOS45MjUgOS4wMDkyMiAyOS42MTQ4IDlIMTQuMzUxOEMxMy43MTM1IDkuMDI0MDYgMTMuMTA5MiA5LjI5NDM5IDEyLjY2NTggOS43NTQyN0MxMi40NTE3IDkuOTYwOTQgMTIuMjgyMSAxMC4yMDkzIDEyLjE2NzcgMTAuNDg0QzEyLjA1MzIgMTAuNzU4NyAxMS45OTYyIDExLjA1NCAxMi4wMDAzIDExLjM1MTZWMzYuMjQyNkMxMS45OTcyIDM2LjM1MjcgMTIuMDE5NyAzNi40NjIxIDEyLjA2NTggMzYuNTYyMkMxMi4xMTIgMzYuNjYyMiAxMi4xODA3IDM2Ljc1MDMgMTIuMjY2NSAzNi44MTk0QzEyLjM0IDM2LjkxNDYgMTIuNDM0IDM2Ljk5MiAxMi41NDE1IDM3LjA0NTdDMTIuNjQ5MSAzNy4wOTk1IDEyLjc2NzQgMzcuMTI4MyAxMi44ODc3IDM3LjEzSDEyLjk3NjRDMTMuMDkwOSAzNy4xMzEgMTMuMjAzOCAzNy4xMDMxIDEzLjMwNDcgMzcuMDQ4OEMxMy40MDU1IDM2Ljk5NDUgMTMuNDkxIDM2LjkxNTYgMTMuNTUzMiAzNi44MTk0QzEzLjY0OTQgMzYuNzU3MiAxMy43MjgzIDM2LjY3MTcgMTMuNzgyNiAzNi41NzA5QzEzLjgzNjkgMzYuNDcgMTMuODY0OCAzNi4zNTcxIDEzLjg2MzggMzYuMjQyNlYxMi4yODMzQzEzLjg2MDMgMTIuMTAyIDEzLjg5NCAxMS45MjE5IDEzLjk2MjYgMTEuNzU0QzE0LjAzMTMgMTEuNTg2MiAxNC4xMzM2IDExLjQzNDEgMTQuMjYzMSAxMS4zMDcyQzE0LjM5MzkgMTEuMTY3NSAxNC41NTIgMTEuMDU2MSAxNC43Mjc1IDEwLjk3OThDMTQuOTAzIDEwLjkwMzUgMTUuMDkyMiAxMC44NjM5IDE1LjI4MzYgMTAuODYzNUgyOC42ODNDMjguODY4MyAxMC44NjE0IDI5LjA1MTggMTAuOSAyOS4yMjA1IDEwLjk3NjdDMjkuMzg5MiAxMS4wNTM0IDI5LjUzODkgMTEuMTY2MiAyOS42NTkyIDExLjMwNzJDMjkuODAwMiAxMS40Mjc0IDI5LjkxMyAxMS41NzcyIDI5Ljk4OTcgMTEuNzQ1OUMzMC4wNjYzIDExLjkxNDUgMzAuMTA1IDEyLjA5OCAzMC4xMDI4IDEyLjI4MzNWMzYuMjQyNkMzMC4wOTk4IDM2LjM1MjcgMzAuMTIyMiAzNi40NjIxIDMwLjE2ODQgMzYuNTYyMkMzMC4yMTQ2IDM2LjY2MjIgMzAuMjgzMyAzNi43NTAzIDMwLjM2OTEgMzYuODE5NEMzMC40NDI1IDM2LjkxNDYgMzAuNTM2NiAzNi45OTIgMzAuNjQ0MSAzNy4wNDU3QzMwLjc1MTcgMzcuMDk5NSAzMC44NyAzNy4xMjgzIDMwLjk5MDIgMzcuMTNIMzEuMDc5QzMxLjE5OTIgMzcuMTI4MyAzMS4zMTc1IDM3LjA5OTUgMzEuNDI1MSAzNy4wNDU3QzMxLjUzMjYgMzYuOTkyIDMxLjYyNjcgMzYuOTE0NiAzMS43MDAxIDM2LjgxOTRDMzEuNzg1OSAzNi43NTAzIDMxLjg1NDYgMzYuNjYyMiAzMS45MDA4IDM2LjU2MjJDMzEuOTQ3IDM2LjQ2MjEgMzEuOTY5NCAzNi4zNTI3IDMxLjk2NjMgMzYuMjQyNlYxMS4zNTE2WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");

}),
30129: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHk9IjI0IiB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHJ4PSIxMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDAgMjQpIiBmaWxsPSIjM0YzRTNCIi8+DQo8cGF0aCBkPSJNMTcuMTU1MyAxMi42OTE4TDkuMTg2NTIgMTIuNjkxOEw5LjE4NjUyIDExLjMzOTVMMTcuMTU1MyAxMS4zMzk1TDE3LjE1NTMgMTIuNjkxOFpNMTMuODQ3IDE2TDEyLjQ5NDggMTZMMTIuNDk0OCA4LjAzMTI1TDEzLjg0NyA4LjAzMTI1TDEzLjg0NyAxNloiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNDEgMTEuNVYxMi41TDMzIDEyLjVWMTEuNUw0MSAxMS41WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");

}),
44678: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAyNCA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSI1MSIgcng9IjExIiBmaWxsPSIjM0YzRTNCIi8+DQo8cGF0aCBkPSJNMTEuMzA4MiAxNy4xNTUzVjkuMTg2NTJIMTIuNjYwNVYxNy4xNTUzSDExLjMwODJaTTggMTMuODQ3VjEyLjQ5NDhIMTUuOTY4OFYxMy44NDdIOFoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTYgMzlWNDBIOFYzOUgxNloiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==");

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