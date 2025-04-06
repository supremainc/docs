"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["4024"], {
"3724": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_monitoring_video_mdx_89b_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-monitoring-video-mdx-89b.json
var site_docs_platform_biostar_x_monitoring_video_mdx_89b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-video","title":"비디오 모니터링하기","description":"비디오 모니터링 기능의 주요 작업(영상 추가, 크기 조정, 위치 변경, 알람 확인 등)을 단계적으로 안내합니다.","source":"@site/docs/platform/biostar_x/monitoring-video.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-video","permalink":"/docs/platform/biostar_x/monitoring-video","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-video.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-video","title":"비디오 모니터링하기","description":"비디오 모니터링 기능의 주요 작업(영상 추가, 크기 조정, 위치 변경, 알람 확인 등)을 단계적으로 안내합니다.","keywords":["모니터링","비디오"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"구역 제어하기","permalink":"/docs/platform/biostar_x/control-zone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/monitoring-video.mdx


const frontMatter = {
	id: 'monitoring-video',
	title: '비디오 모니터링하기',
	description: '비디오 모니터링 기능의 주요 작업(영상 추가, 크기 조정, 위치 변경, 알람 확인 등)을 단계적으로 안내합니다.',
	keywords: [
		'모니터링',
		'비디오'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*이런 경우 화면에 탭을 추가하고 <Cmd sid='arena.tree.contextMenu.openVideo' />를 다시 클릭하세요.*/
/*크기를 늘린 영상은 이동되지 않습니다. ???*/


const toc = [{
  "value": "영상 추가하기",
  "id": "add-video",
  "level": 2
}, {
  "value": "영상 제어하기",
  "id": "영상-제어하기",
  "level": 2
}, {
  "value": "출입문 제어 도구",
  "id": "door-control-tool",
  "level": 2
}, {
  "value": "영상 알람 확인하기",
  "id": "check-the-video-alarm",
  "level": 2
}, {
  "value": "비디오 타일 레이아웃 설정",
  "id": "video-tile-layout-setting",
  "level": 2
}, {
  "value": "영상 크기 변경",
  "id": "change-video-size",
  "level": 3
}, {
  "value": "영상 크기 확대",
  "id": "video-size-enlargement",
  "level": 3
}, {
  "value": "영상 위치 변경하기",
  "id": "changing-the-video-location",
  "level": 3
}, {
  "value": "전체 화면 보기",
  "id": "full-screen",
  "level": 2
}, {
  "value": "영상 닫기",
  "id": "close-the-video",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Column, Columns, IcClose, IcFullscreen, IcPause, IcPlay, IcRestorscreen, Image, Num} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFullscreen) _missingMdxReference("IcFullscreen", true);
  if (!IcPause) _missingMdxReference("IcPause", true);
  if (!IcPlay) _missingMdxReference("IcPlay", true);
  if (!IcRestorscreen) _missingMdxReference("IcRestorscreen", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Num) _missingMdxReference("Num", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "비디오 모니터링 기능을 통해 출입문, 구역, 장치와 연계된 카메라 영상을 실시간으로 확인하고 제어할 수 있습니다. 이 문서에서는 비디오 타일을 활용하여 카메라 영상을 추가하고, 크기 조정, 위치 변경, 전체 화면 보기 등 다양한 작업을 수행하는 방법을 안내합니다. 또한, 알람 상태 확인 및 해제와 같은 관리 기능을 통해 보안 상황에 신속히 대응할 수 있도록 지원합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "비디오 타일"
        }), "은 화면 중앙에 위치한 카메라 영상 표시 영역입니다. 여러 개의 카메라 영상을 동시에 배치하고 모니터링할 수 있는 인터페이스 구성 요소입니다. 사용자는 비디오 타일에서 영상의 크기를 조정하거나 위치를 변경하고, 필요에 따라 영상을 닫거나 전체 화면으로 전환할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-video",
      children: "영상 추가하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비디오 타일에 카메라 영상을 추가하여 모니터링할 수 있습니다. 비디오 타일은 화면 가운데 위치하며, 여러 개의 카메라 영상을 동시에 모니터링할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.map.title"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.device.title"
          }), " 탭에서 영상을 확인할 카메라 장치를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "마우스 오른쪽 버튼을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 카메라의 영상을 화면 가운데 비디오 타일에 배치할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control-open-video.png",
      alt: "비디오 열기"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사이드바의 출입문 목록에서 카메라를 선택하고 비디오 타일 영역으로 드래그 앤 드롭 방식으로 영상을 추가할 수도 있습니다."
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/monitoring-door-control-open-video-drag-drop.png",
            alt: "Drag and drop"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비디오 타일에는 화면 왼쪽 상단부터 차례로 추가되며, 현재 화면에 추가할 공간이 없으면 에러 메시지가 표시됩니다. "
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문에 카메라를 연계하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "영상-제어하기",
      children: "영상 제어하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비디오 타일에 배치한 영상은 기본적으로 실시간 재생됩니다. 영상의 재생 도구를 통해 영상을 멈추거나 과거 시간의 영상을 조회할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-player.png",
      alt: "플레이어"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "1"
          }), ": 영상의 재생 위치를 조정할 수 있는 슬라이더입니다. 슬라이더를 드래그하여 과거 시간의 영상을 조회할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "2"
          }), " ", (0,jsx_runtime.jsx)(IcPlay, {}), " / ", (0,jsx_runtime.jsx)(IcPause, {}), ": 버튼을 클릭하면 영상을 일시 정지하거나 재생할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Num, {
            num: "3"
          }), ": 현재 영상을 실시간 재생하고 있음을 나타내는 아이콘입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-control-tool",
      children: "출입문 제어 도구"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["영상을 추가한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " 도구를 활용해 추가 작업을 수행할 수 있습니다. 출입문과 연계된 카메라를 선택하면 출입문을 제어할 수 있는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " 도구가 활성화됩니다. 출입문을 개방하거나 잠금, 해제, 알람 해제 등의 기능을 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control.png",
      alt: "출입문 제어"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능은 출입문에 카메라가 연계되어 있어야 사용할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.map.doorControl"
            }), " 도구에서 사용할 수 있는 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "control-door",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문에 카메라를 연계하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-video-alarm",
      children: "영상 알람 확인하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라와 연계된 출입문 중 하나가 알람 상태가 되면 영상에 알람 아이콘이 표시됩니다. 알람 아이콘이 3초간 표시된 후 사라졌다가 다시 표시됩니다. 연계된 출입문의 알람을 모두 해제해야 알람 아이콘이 사라집니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-alarm.png",
      alt: "알람"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출입문의 알람을 해제하려면 출입문 목록에서 오른쪽 마우스 버튼을 클릭하고, 팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), "를 클릭하세요. 또는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " 도구에서  ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 영상의 화면 상단에 성공 또는 실패 메시지가 표시됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["화면 아래에 이벤트 목록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "video-tile-layout-setting",
      children: "비디오 타일 레이아웃 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비디오 타일에 배치한 영상은 크기를 변경하거나 원하는 위치로 변경할 수 있습니다. 중요도에 따라 영상의 크기를 조정하고 위치를 변경하여 모니터링하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-video-size",
      children: "영상 크기 변경"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "영상의 크기를 변경할 비디오를 클릭하면 선택한 영상의 프레임이 활성화됩니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-adjust-size-01.png",
          alt: "영상 선택"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "프레임의 경계 위로 마우스 커서를 가져가면, 크기를 조절할 수 있는 커서 모양으로 변경됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모서리를 클릭하고 원하는 크기로 드래그하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-adjust-size-02.png",
          alt: "영상 크기 조절"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "배치된 타일의 크기에 비례하여 영상의 크기를 조절할 수 있습니다. 반대로 영상의 크기를 줄일 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-adjust-size-03.png",
      alt: "영상 크기 조절"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-size-enlargement",
      children: "영상 크기 확대"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "영상을 비디오 타일 전체 크기로 확대하려면 영상을 더블 클릭하세요. 영상이 비디오 타일의 크기로 확대됩니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/monitoring-video-extend.gif"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "changing-the-video-location",
      children: "영상 위치 변경하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "위치를 변경할 영상을 클릭하고 원하는 위치로 드래그하세요. 선택한 영상의 위치를 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-move-position.png",
      alt: "영상 위치 변경"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "full-screen",
      children: "전체 화면 보기"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "align-left",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-fullscreen.png",
          alt: "전체 화면"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["비디오 타일에 배치된 영상을 전체 화면으로 보려면 영상의 오른쪽 상단에 있는 ", (0,jsx_runtime.jsx)(IcFullscreen, {}), " 버튼을 클릭하세요."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["전체 화면을 종료하려면 화면 오른쪽 위에 ", (0,jsx_runtime.jsx)(IcRestorscreen, {}), " 버튼을 클릭하세요. 또는 키보드의 ", (0,jsx_runtime.jsx)("kbd", {
            children: "ESC"
          }), " 키를 누르세요."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close-the-video",
      children: "영상 닫기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["비디오 타일에 배치된 영상을 닫으려면 영상의 오른쪽 상단에 있는 ", (0,jsx_runtime.jsx)(IcClose, {}), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-close.png",
      alt: "영상 닫기"
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
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