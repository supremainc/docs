"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["62333"], {
84181: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_configure_camera_settings_mdx_fc1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-configure-camera-settings-mdx-fc1.json
var site_docs_device_vionyx_webserver_configure_camera_settings_mdx_fc1_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/configure-camera-settings","title":"카메라 설정 변경하기","description":"설치 환경에 맞춰 이미지 품질, 화이트 밸런스, 감도를 조정하고, 설치 타입을 설정하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/configure-camera-settings.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/configure-camera-settings","permalink":"/docs/device/vionyx_webserver/configure-camera-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/configure-camera-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"configure-camera-settings","title":"카메라 설정 변경하기","description":"설치 환경에 맞춰 이미지 품질, 화이트 밸런스, 감도를 조정하고, 설치 타입을 설정하는 방법을 안내합니다.","keywords":["카메라 설정","이미지 품질","화이트 밸런스","감도","설치 타입"],"isTranslationMissing":false},"sidebar":"aicamwebserver","previous":{"title":"비디오 프로필 설정하기","permalink":"/docs/device/vionyx_webserver/configure-video-profile"},"next":{"title":"프라이버시 및 오버레이 설정하기","permalink":"/docs/device/vionyx_webserver/configure-privacy-overlay"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/configure-camera-settings.mdx


const frontMatter = {
	id: 'configure-camera-settings',
	title: '카메라 설정 변경하기',
	description: '설치 환경에 맞춰 이미지 품질, 화이트 밸런스, 감도를 조정하고, 설치 타입을 설정하는 방법을 안내합니다.',
	keywords: [
		'카메라 설정',
		'이미지 품질',
		'화이트 밸런스',
		'감도',
		'설치 타입'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "카메라 설정",
  "id": "카메라-설정",
  "level": 2
}, {
  "value": "이미지 품질 조정",
  "id": "이미지-품질-조정",
  "level": 2
}, {
  "value": "화이트 밸런스 설정",
  "id": "화이트-밸런스-설정",
  "level": 2
}, {
  "value": "감도 설정 (Time Filter)",
  "id": "감도-설정-time-filter",
  "level": 2
}, {
  "value": "역광 설정",
  "id": "역광-설정",
  "level": 2
}, {
  "value": "깜빡임 방지 설정",
  "id": "깜빡임-방지-설정",
  "level": 2
}, {
  "value": "설치 타입 설정",
  "id": "설치-타입-설정",
  "level": 2
}, {
  "value": "카메라 설정 초기화",
  "id": "카메라-설정-초기화",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "카메라가 설치된 환경에서 최적의 영상을 촬영할 수 있도록 카메라 설정을 조정할 수 있습니다. 라이브 뷰에서 설정 결과를 실시간으로 확인하며 이미지 품질, 화이트 밸런스, 감도 필터를 좌우할 수 있습니다. 또한 천장형/벽부형 설치 타입에 따라 AI 기능도 자동으로 제한됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 카메라 설정을 조정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "촬영 환경의 밝기와 색감에 맞춰 이미지 품질을 개선하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "형광등이나 LED 조명의 깜빡임을 줄이고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "저조도 환경에서 노이즈를 최소화하면서 동작 감지를 유지하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설치 위치에 따라 카메라와 AI 기능을 최적화하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "카메라 설정 변경은 설정 옵션을 변경할 때마다 실시간으로 라이브 뷰에 반영되며, 변경 후 자동 저장됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-설정",
      children: "카메라 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "basic",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "camera",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-settings-camera.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "이미지-품질-조정",
      children: "이미지 품질 조정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["촬영 환경에 맞춰 이미지 품질을 조정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "preset",
        product: "cam"
      }), " 섹션의 각 슬라이더를 조절하면 미리보기 화면에 실시간으로 반영됩니다. 1에서 100 사이의 값으로 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "saturation",
            product: "cam"
          }), ": 색상의 선명도를 조정합니다. (기본값: 26)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "sharpness",
            product: "cam"
          }), ": 이미지 경계의 선명도를 조정합니다. (기본값: 55)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "brightness",
            product: "cam"
          }), ": 이미지 전체 밝기를 조정합니다. (기본값: 50)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "contrast",
            product: "cam"
          }), ": 밝은 부분과 어두운 부분의 명암 차이를 조정합니다. (기본값: 50)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "각 설정은 슬라이더를 조작할 때마다 미리보기 화면에 즉시 반영되고, 자동으로 저장됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "화이트-밸런스-설정",
      children: "화이트 밸런스 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라가 촬영 환경의 조명색을 정확하게 표현하도록 화이트 밸런스를 설정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "white_balance",
        product: "cam"
      }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auto",
        product: "cam"
      }), " 옵션을 켜거나 끌 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "on",
            product: "cam"
          }), ": 카메라가 자동으로 색온도를 감지하고 조정합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "off",
            product: "cam"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "red",
            product: "cam"
          }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "blue",
            product: "cam"
          }), " 값을 수동으로 조정합니다. (기본값: 50)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "감도-설정-time-filter",
      children: "감도 설정 (Time Filter)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["센서 노이즈를 줄이거나 빠른 움직임 감지 간 균형을 맞추도록 시간 필터를 조정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "sensitivity",
        product: "cam"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "time_filter",
        product: "cam"
      }), " 슬라이더를 조절하면 노이즈 필터링 강도를 설정할 수 있습니다. (기본값: 55)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "낮음(1~30): 노이즈 필터링이 약해져 빠르게 움직이는 객체 감지에 유리하지만, 저조도 환경에서는 노이즈가 증가할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "중간(31~70): 균형 잡힌 필터링으로 일반적인 촬영 환경에 적합합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "높음(71~100): 노이즈 필터링이 강해져 저조도 환경에서 노이즈를 줄이는 데 유리하지만, 빠르게 움직이는 객체 감지에는 불리할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "역광-설정",
      children: "역광 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라가 역광 환경에서 밝은 영역과 어두운 영역을 동시에 표현하도록 WDR(Wide Dynamic Range, 역광 보정)을 설정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "backlight_setting",
        product: "cam"
      }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "wdr",
        product: "cam"
      }), " 옵션을 켜면 역광 보정을 활성화할 수 있습니다. (기본값: ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "off",
        product: "cam"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WDR"
        }), "(Wide Dynamic Range) 모드는 역광 환경에서 밝은 영역과 어두운 영역을 동시에 표현할 수 있도록 카메라가 자동으로 노출을 조정하는 기능입니다. WDR 모드를 활성화하면, 밝은 영역이 과다 노출되는 것을 방지하고, 어두운 영역의 디테일을 더 잘 표현할 수 있습니다. 일반적으로 역광이 심한 환경에서 촬영할 때 유용합니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "깜빡임-방지-설정",
      children: "깜빡임 방지 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["촬영 환경에 있는 조명과 주파수 불일치로 발생할 수 있는 화면 떨림을 줄이려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "video",
        product: "cam"
      }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "anti_flicker",
        product: "cam"
      }), " 옵션을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "off",
            product: "cam"
          }), ": 깜빡임 방지 기능 사용 안 함"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "50Hz"
          }), ": 50Hz 형광등/LED 환경"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "60Hz"
          }), ": 60Hz 형광등/LED 환경"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "촬영 환경의 조명과 주파수가 일치하는 옵션을 선택하세요. 잘못된 설정일 경우 화면에 떨림이나 줄무늬가 생길 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "설치-타입-설정",
      children: "설치 타입 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라의 설치 위치에 따라 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "mounting_type",
        product: "cam"
      }), "을 설정하세요. 설치 타입에 따라 지원하는 AI 기능이 결정됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ceiling",
            product: "cam"
          }), ": 천장에 설치된 경우 선택합니다. 모든 AI 기능을 사용할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "wall",
            product: "cam"
          }), ": 벽면에 설치된 경우 선택합니다. 얼굴 인식 AI만 사용할 수 있으며, 객체 추적은 할 수 없습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "천장에서 벽면으로 변경할 때"
            }), ", 얼굴 인식만 가능하고 객체 추적 AI는 사용할 수 없다는 확인 팝업이 표시되므로 내용을 검토 후 진행하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "벽면에서 천장으로 변경할 때"
            }), ", 즉시 변경되며, 모든 AI 기능이 자동 활성화됩니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-설정-초기화",
      children: "카메라 설정 초기화"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["모든 카메라 설정을 공장 초기값으로 복원하려면, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reset",
        product: "cam"
      }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "restore_to_default",
        product: "cam"
      }), " 버튼을 클릭하세요."]
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