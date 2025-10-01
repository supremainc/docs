"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5143"], {
28444: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_videos_rule_mdx_170_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-videos-rule-mdx-170.json
var site_docs_platform_biostar_x_settings_videos_rule_mdx_170_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos-rule","title":"카메라 규칙 설정하기","description":"BioStar X에서 VMS와 연동하여 카메라 규칙을 설정하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-videos-rule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos-rule","permalink":"/docs/platform/biostar_x/settings-videos-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos-rule.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos-rule","title":"카메라 규칙 설정하기","description":"BioStar X에서 VMS와 연동하여 카메라 규칙을 설정하는 방법을 안내합니다.","keywords":["카메라","규칙","설정"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"카메라 설정하기","permalink":"/docs/platform/biostar_x/settings-videos-camera"},"next":{"title":"맵 관리하기","permalink":"/docs/platform/biostar_x/settings-map-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-videos-rule.mdx


const frontMatter = {
	id: 'settings-videos-rule',
	title: '카메라 규칙 설정하기',
	description: 'BioStar X에서 VMS와 연동하여 카메라 규칙을 설정하는 방법을 안내합니다.',
	keywords: [
		'카메라',
		'규칙',
		'설정'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "규칙 추가",
  "id": "규칙-추가",
  "level": 2
}, {
  "value": "규칙 정보 입력",
  "id": "규칙-정보-입력",
  "level": 3
}, {
  "value": "비디오 로그 설정",
  "id": "비디오-로그-설정",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "규칙은 카메라와 출입문에서 발생하는 이벤트를 조합해 VMS 서버에 이벤트와 북마크 형식으로 전송하기 위한 설정입니다. 적절한 카메라 규칙 설정을 통해 다음과 같은 보안 관리 기능을 활용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 북마크 생성"
          }), ": 특정 출입 이벤트 발생 시 자동으로 북마크를 생성하여 중요한 영상을 쉽게 찾을 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "효율적인 모니터링"
          }), ": 출입문과 연결된 카메라의 영상을 실시간으로 모니터링하고, 이벤트 발생 시 즉시 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "통합 이벤트 관리"
          }), ": 출입 이벤트와 영상을 연계하여 보안 상황을 종합적으로 파악할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["카메라 규칙 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "어드밴스"
        }), "(Advanced) 라이선스 이상에서 추가 옵션을 통해 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "규칙-추가",
      children: "규칙 추가"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.button",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.addRule.title",
        product: "2"
      }), " 화면이 나타나면 다음 안내에 따라 규칙을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "규칙-정보-입력",
      children: "규칙 정보 입력"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "새로운 규칙의 이름과 설명을 입력하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "video.rule.detail.description",
          product: "2"
        }), " 항목은 선택 사항입니다. 규칙의 용도나 특징을 쉽게 파악할 수 있도록 간단한 설명을 입력하는 용도로 사용하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "비디오-로그-설정",
      children: "비디오 로그 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비디오 로그는"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-video-log.png"
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