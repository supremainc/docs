"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8479"], {
26033: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_map_manage_floor_mdx_dd0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-map-manage-floor-mdx-dd0.json
var site_docs_platform_biostar_x_settings_map_manage_floor_mdx_dd0_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-map-manage-floor","title":"층 구성하기","description":"구역과 시설을 구성하기 전에 층을 구성하세요. 층 이미지에 출입문과 카메라를 배치해 시각적으로 확인할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-map-manage-floor.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-map-manage-floor","permalink":"/docs/platform/biostar_x/settings-map-manage-floor","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-map-manage-floor.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-map-manage-floor","title":"층 구성하기","description":"구역과 시설을 구성하기 전에 층을 구성하세요. 층 이미지에 출입문과 카메라를 배치해 시각적으로 확인할 수 있습니다.","keywords":["맵","층","시설","출입문","카메라","배치도","이미지"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"맵 관리하기","permalink":"/docs/platform/biostar_x/settings-map-management"},"next":{"title":"시설 구성하기","permalink":"/docs/platform/biostar_x/settings-map-manage-facility"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-map-manage-floor.mdx


const frontMatter = {
	id: 'settings-map-manage-floor',
	title: '층 구성하기',
	description: '구역과 시설을 구성하기 전에 층을 구성하세요. 층 이미지에 출입문과 카메라를 배치해 시각적으로 확인할 수 있습니다.',
	keywords: [
		'맵',
		'층',
		'시설',
		'출입문',
		'카메라',
		'배치도',
		'이미지'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "층 추가",
  "id": "add-floor",
  "level": 2
}, {
  "value": "층 구성 수정",
  "id": "층-구성-수정",
  "level": 2
}, {
  "value": "출입문/카메라 삭제",
  "id": "출입문카메라-삭제",
  "level": 3
}, {
  "value": "카메라 촬영 범위 설정",
  "id": "카메라-촬영-범위-설정",
  "level": 3
}, {
  "value": "층 이미지 삭제",
  "id": "층-이미지-삭제",
  "level": 3
}, {
  "value": "층 삭제하기",
  "id": "delete-floor",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamrot, IcCrop, IcFremove, IcLrot, IcRrot, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamrot) _missingMdxReference("IcCamrot", true);
  if (!IcCrop) _missingMdxReference("IcCrop", true);
  if (!IcFremove) _missingMdxReference("IcFremove", true);
  if (!IcLrot) _missingMdxReference("IcLrot", true);
  if (!IcRrot) _missingMdxReference("IcRrot", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["구역과 시설을 구성하기 전에 층을 구성하세요. 해당 층의 배치도를 이미지로 업로드하고, 출입문과 카메라를 배치하여 시각적으로 관리할 수 있습니다. 층을 구성하면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " 페이지에서 해당 층의 출입문과 카메라를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-add-floor-example.png",
      alone: true,
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["층을 구성하기 전에 출입문을 먼저 등록하세요. 출입문 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-door-add",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["맵 모니터링에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-map",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["맵 설정 및 맵 모니터링 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "어드밴스"
            }), " 이상의 라이선스에서만 사용할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-floor",
      children: "층 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "층의 배치도 또는 3D 조감도 이미지를 업로드하여 층을 추가하고 출입문과 카메라를 배치할 수 있습니다."
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.floor"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["층 목록 화면의 오른쪽 상단에 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "+ New Floor"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.page.title"
          }), " 화면의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.information.section.title"
          }), " 섹션에서 추가하려는 층의 이름과 설명을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.section.title"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Floor Plan"
          }), " 버튼을 클릭하거나 업로드할 이미지를 드래그하여 업로드하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Add Floor Plan"
          }), " 창에서 업로드한 이미지를 확인하고 설정을 완료하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-01.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["이미지를 회전하려면 ", (0,jsx_runtime.jsx)(IcLrot, {}), " 또는 ", (0,jsx_runtime.jsx)(IcRrot, {}), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["이미지를 자르려면 ", (0,jsx_runtime.jsx)(IcCrop, {}), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이미지 설정을 완료하면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정 섹션에 업로드한 이미지에 출입문을 추가하려면 이미지의 원하는 위치에서 오른쪽 마우스 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add Door"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-02.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Add Door"
          }), " 창이 나타나면 등록된 출입문 중 하나를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-03.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Apply"
          }), " 버튼을 클릭하면 출입문을 이미지에 배치합니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-04.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["업로드한 이미지에 카메라를 추가하려면 이미지의 원하는 위치에서 오른쪽 마우스 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add Camera"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-05.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Add Camera"
          }), " 창이 나타나면 등록된 카메라 중 하나를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Apply"
          }), " 버튼을 클릭하면 카메라를 이미지에 배치합니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-06.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "실제 층에 배치된 출입문과 카메라를 추가로 배치하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정을 완료하고 설정한 층을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "층-구성-수정",
      children: "층 구성 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문과 카메라를 추가한 층의 배치도를 수정할 수 있습니다. 층의 배치도를 수정하면 출입문과 카메라의 위치를 변경하거나 삭제할 수 있습니다."
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.floor"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "층 목록에서 수정하려는 층을 클릭하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["모든 설정을 완료하고 설정한 층을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.apply"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "출입문카메라-삭제",
      children: "출입문/카메라 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["층의 이미지에서 삭제하려는 출입문 또는 카메라를 클릭하세요. ", (0,jsx_runtime.jsx)(IcFremove, {}), " 아이콘이 나타납니다. 아이콘을 클릭하면 선택한 출입문 또는 카메라를 삭제할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카메라-촬영-범위-설정",
      children: "카메라 촬영 범위 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "층의 이미지에서 마우스 오른쪽 버튼으로 카메라를 클릭하세요. 촬영 범위가 표시됩니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-floor-camera-setting-01.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["촬영 범위를 변경하려면 ", (0,jsx_runtime.jsx)(IcCamrot, {}), " 아이콘을 클릭한 상태에서 원하는 방향으로 드래그하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-floor-camera-rotation.gif",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "촬영 범위를 조정하려면 범위의 끝 모서리 부분을 클릭한 상태에서 원하는 크기로 드래그하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-floor-camera-adjust.gif",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["촬영 범위를 삭제하려면 ", (0,jsx_runtime.jsx)(IcFremove, {}), " 아이콘을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자가 설정한 사항은 보안 관리의 편의성을 위해 제공하는 기능일 뿐, 실제 카메라의 촬영 범위를 반영하지 않습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "층-이미지-삭제",
      children: "층 이미지 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["층의 이미지를 삭제하려면 층 이미지에서 마우스 오른쪽 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Delete Floor Plan"
      }), "을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-floor",
      children: "층 삭제하기"
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.floor"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "층 목록에서 삭제하려는 층의 체크박스를 클릭하세요. 1개 이상의 층을 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "층 목록에서 선택한 층이 삭제됩니다. 선택한 층은 복구할 수 없습니다."
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