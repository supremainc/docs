"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["27337"], {
51096: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_videos_mdx_5c8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-videos-mdx-5c8.json
var site_docs_platform_biostar_x_settings_videos_mdx_5c8_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos","title":"비디오 설정하기","description":"BioStar X와 VMS를 연동하여 통합 영상 보안 관리 시스템을 구축하는 방법을 단계별로 안내합니다. VMS 서버 연동부터 카메라 설정, 규칙 구성까지 전체 과정을 다룹니다.","source":"@site/docs/platform/biostar_x/settings-videos.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos","permalink":"/docs/platform/biostar_x/settings-videos","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos","title":"비디오 설정하기","description":"BioStar X와 VMS를 연동하여 통합 영상 보안 관리 시스템을 구축하는 방법을 단계별로 안내합니다. VMS 서버 연동부터 카메라 설정, 규칙 구성까지 전체 과정을 다룹니다.","keywords":["비디오","VMS","연동","카메라","설정","규칙"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"인원 점검(Roll Call)","permalink":"/docs/platform/biostar_x/settings-advanced-ac-roll-call"},"next":{"title":"VMS 연동하기","permalink":"/docs/platform/biostar_x/settings-video-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-videos.mdx


const frontMatter = {
	id: 'settings-videos',
	title: '비디오 설정하기',
	description: 'BioStar X와 VMS를 연동하여 통합 영상 보안 관리 시스템을 구축하는 방법을 단계별로 안내합니다. VMS 서버 연동부터 카메라 설정, 규칙 구성까지 전체 과정을 다룹니다.',
	keywords: [
		'비디오',
		'VMS',
		'연동',
		'카메라',
		'설정',
		'규칙'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "비디오 설정 개요",
  "id": "비디오-설정-개요",
  "level": 2
}, {
  "value": "VMS 서버 연동하기",
  "id": "vms-서버-연동하기",
  "level": 3
}, {
  "value": "카메라 설정하기",
  "id": "카메라-설정하기",
  "level": 3
}, {
  "value": "규칙 설정하기",
  "id": "규칙-설정하기",
  "level": 3
}, {
  "value": "주요 기능",
  "id": "주요-기능",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 비디오 설정 기능을 통해 출입 통제와 영상 보안을 통합 관리할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), "(VMS)과 연동하여 실시간 영상 모니터링, 이벤트 연계 녹화, 자동 북마크 생성 등 강력한 보안 관리 기능을 활용하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["비디오 설정 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "어드밴스"
        }), "(Advanced) 라이선스 이상에서 추가 옵션을 통해 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비디오-설정-개요",
      children: "비디오 설정 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비디오 설정은 다음 3단계로 구성됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "vms-서버-연동하기",
          children: "VMS 서버 연동하기"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS 서버와 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 간의 연결을 설정하고 인증서를 구성합니다. 통합 영상 보안 관리 시스템을 구축하는 필수 단계입니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-video-integration",
            children: "다음 문서"
          }), "를 참고하세요."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "카메라-설정하기",
          children: "카메라 설정하기"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS에 연결된 카메라 중 필요한 카메라를 선택하고, 효율적인 관리를 위한 그룹을 구성하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-camera",
            children: "다음 문서"
          }), "를 참고하세요."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "규칙-설정하기",
          children: "규칙 설정하기"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출입 이벤트와 영상을 연계하는 규칙을 생성하여 자동 북마크, 이벤트 기록 등의 고급 기능을 활용합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-rule",
            children: "다음 문서"
          }), "를 참고하세요."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "주요-기능",
      children: "주요 기능"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "통합 모니터링"
          }), ": 출입 통제와 영상 보안을 하나의 인터페이스에서 관리할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 이벤트 기록"
          }), ": 출입 이벤트 발생 시 관련 영상을 자동으로 기록하고 태그를 생성합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "효율적인 검색"
          }), ": 북마크와 이벤트 태그를 통한 빠른 영상 검색 및 증거 수집이 가능합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "실시간 대응"
          }), ": 보안 상황 발생 시 즉시 관련 카메라 영상 확인할 수 있습니다."]
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