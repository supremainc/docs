"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["480"], {
8753: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_migration_visual_face_mdx_42b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-migration-visual-face-mdx-42b.json
var site_docs_platform_biostar_x_migration_visual_face_mdx_42b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/migration-face","title":"얼굴 마이그레이션","description":"BioStar X 이전 버전에서 등록한 얼굴을 최신 알고리즘으로 업그레이드하여 인식 성능을 향상할 수 있습니다.","source":"@site/docs/platform/biostar_x/migration-visual-face.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/migration-face","permalink":"/docs/platform/biostar_x/migration-face","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/migration-visual-face.mdx","tags":[],"version":"current","frontMatter":{"id":"migration-face","title":"얼굴 마이그레이션","description":"BioStar X 이전 버전에서 등록한 얼굴을 최신 알고리즘으로 업그레이드하여 인식 성능을 향상할 수 있습니다.","keywords":["얼굴","마이그레이션","얼굴 인식"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"다중 인증으로 로그인하기","permalink":"/docs/platform/biostar_x/login-with-mfa"},"next":{"title":"모니터링","permalink":"/docs/platform/biostar_x/how-to-guide-monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/migration-visual-face.mdx


const frontMatter = {
	id: 'migration-face',
	title: '얼굴 마이그레이션',
	description: 'BioStar X 이전 버전에서 등록한 얼굴을 최신 알고리즘으로 업그레이드하여 인식 성능을 향상할 수 있습니다.',
	keywords: [
		'얼굴',
		'마이그레이션',
		'얼굴 인식'
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
  "value": "지원 장치 및 펌웨어 버전",
  "id": "지원-장치-및-펌웨어-버전",
  "level": 3
}, {
  "value": "얼굴 템플릿 타입 관련 유의 사항",
  "id": "얼굴-템플릿-타입-관련-유의-사항",
  "level": 3
}, {
  "value": "장치 관련 유의 사항",
  "id": "장치-관련-유의-사항",
  "level": 3
}, {
  "value": "마이그레이션하기",
  "id": "마이그레이션하기",
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
  }, {Cmd, Details, IcMoreW} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 이전 버전에서 등록한 얼굴을 최신 알고리즘으로 업그레이드하여 인식 성능을 향상할 수 있습니다. 사용자를 동기화할 때 얼굴에서 실제 이미지를 제외한 템플릿만 전송하도록 프로토콜을 개선하여 동기화 소요 시간을 대폭 단축하고 개인 정보 관련 문제 발생을 방지할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "얼굴 마이그레이션 기능을 실행하기 전에 다음 사항을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "얼굴 마이그레이션이란?"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["BioStar X 서버에 이미 저장되어 있던 사용자의 실제 이미지로 두 가지 유형의 얼굴 템플릿을 생성하는 기능입니다. 사용자 동기화 시 얼굴을 템플릿으로만 동기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          children: "얼굴 마이그레이션"
        }), "을 진행해야 합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "지원-장치-및-펌웨어-버전",
      children: "지원 장치 및 펌웨어 버전"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "얼굴을 템플릿으로 동기화할 수 있는 장치 목록은 아래 목록을 참고하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FaceStation F2 펌웨어 v2.2.0 이상"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3 펌웨어 v1.3.1 이상"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioEntry W3 펌웨어 v1.0.0 이상"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "FaceStation F2 v1.x.x 펌웨어 지원 중단 안내"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["FaceStation F2의 1.x.x 버전 펌웨어를 사용 중이라면, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "의 얼굴 마이그레이션 기능을 사용할 수 없습니다. FaceStation F2를 최신 펌웨어로 업그레이드하세요. 최신 펌웨어는 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com/",
          children: "슈프리마 다운로드 센터"
        }), "에서 다운로드할 수 있습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "얼굴-템플릿-타입-관련-유의-사항",
      children: "얼굴 템플릿 타입 관련 유의 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FaceStation F2와 BioStation 3, BioEntry W3는 서로 얼굴 템플릿 타입이 다릅니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NPU 타입"
          }), ": BioStation 3, BioEntry W3"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GPU 타입"
          }), ": FaceStation F2"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "얼굴 템플릿 타입이 다른 장치 간 동기화 소요 시간"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "얼굴 마이그레이션"
            }), "을 하기 전, FaceStation F2만 연결하여 사용하던 환경에 BioStation 3나 BioEntry W3를 추가하여 동기화하면 템플릿 타입이 달라 실제 이미지에서 NPU 타입 템플릿을 추출하므로, 서버에 등록된 얼굴의 개수에 따라 상당한 시간이 소요될 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X에서 얼굴 등록 권장"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "얼굴 이미지 저장하기"
            }), " 옵션을 사용하지 않는 상태에서 얼굴을 등록한 경우, BioStar 2에는 템플릿만 동기화되기 때문에 얼굴 템플릿 타입이 다른 장치에 동기화할 수 없게 되므로 얼굴는 BioStar 2에서 등록하는 것을 권장합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-관련-유의-사항",
      children: "장치 관련 유의 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서 내보낸 사용자 데이터 파일은 실제 이미지 없이 템플릿만 가지고 있으므로 기존 펌웨어를 사용 중인 FaceStation F2 및 BioStation 3에 사용자 데이터 파일을 가져올 수 없습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "따라서 FaceStation F2 및 BioStation 3에서 데이터 파일 내보내기 시에는 아래의 버전 이상에서만 데이터 파일을 내보낼 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FaceStation F2 펌웨어 v2.2.0 이상"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3 펌웨어 v1.3.1 이상"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["FaceStation F2, BioStation 3를 사용한다면 최신 버전의 펌웨어로 업그레이드할 것을 권장합니다. 최신 펌웨어는 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com/",
          children: "슈프리마 다운로드 센터"
        }), "에서 다운로드할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "마이그레이션하기",
      children: "마이그레이션하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 목록에서 얼굴을 마이그레이션할 사용자의 가장 왼쪽에 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcMoreW, {}), " 버튼을 선택하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "얼굴 마이그레이션"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경고 팝업창의 내용을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "얼굴 마이그레이션을 진행합니다. 얼굴 마이그레이션을 완료하면 총 얼굴 수, 성공 및 실패 건수를 확인할 수 있는 팝업창이 나타납니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["마이그레이션 성공 후, 장치에 사용자 정보를 동기화하여 변경 사항을 적용하세요. 장치에 사용자 정보를 전송하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "transfer-user-info-to-device",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["얼굴 마이그레이션에 실패하면, 실패한 사용자 목록을 CSV 파일로 다운로드할 수 있습니다. 마이그레이션에 실패한 얼굴을 일괄 삭제하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "얼굴 마이그레이션"
            }), "은 관리자 계정으로 진행할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "마이그레이션을 진행되는 동안 현재 페이지를 벗어나지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자에 따라 등록된 얼굴 이미지의 크기가 클수록 템플릿 생성 시 시간이 다소 오래 소요될 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "얼굴 1,000개 기준 소요 시간은 약 18분이며 서버의 성능에 따라 달라질 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자의 얼굴 이미지를 서버에 저장하지 않고 템플릿만 저장하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
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