"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4155"], {
82906: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_modify_delete_users_mdx_17d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-modify-delete-users-mdx-17d.json
var site_docs_device_vionyx_webserver_modify_delete_users_mdx_17d_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/modify-delete-users","title":"사용자 수정 및 삭제하기","description":"등록된 사용자의 정보를 편집하고, 사용자를 삭제하며, 사용자 이벤트 로그를 확인하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/modify-delete-users.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/modify-delete-users","permalink":"/docs/device/vionyx_webserver/modify-delete-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/modify-delete-users.mdx","tags":[],"version":"current","frontMatter":{"id":"modify-delete-users","title":"사용자 수정 및 삭제하기","description":"등록된 사용자의 정보를 편집하고, 사용자를 삭제하며, 사용자 이벤트 로그를 확인하는 방법을 안내합니다.","keywords":["사용자","수정","삭제","편집","이벤트","로그"],"isTranslationMissing":false},"sidebar":"aicamwebserver","previous":{"title":"사용자 추가하기","permalink":"/docs/device/vionyx_webserver/add-users"},"next":{"title":"사용자 목록에서 검색 및 보기","permalink":"/docs/device/vionyx_webserver/search-view-users"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/modify-delete-users.mdx


const frontMatter = {
	id: 'modify-delete-users',
	title: '사용자 수정 및 삭제하기',
	description: '등록된 사용자의 정보를 편집하고, 사용자를 삭제하며, 사용자 이벤트 로그를 확인하는 방법을 안내합니다.',
	keywords: [
		'사용자',
		'수정',
		'삭제',
		'편집',
		'이벤트',
		'로그'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자 정보 수정",
  "id": "사용자-정보-수정",
  "level": 2
}, {
  "value": "사용자 삭제",
  "id": "사용자-삭제",
  "level": 2
}, {
  "value": "개별 사용자 삭제",
  "id": "개별-사용자-삭제",
  "level": 3
}, {
  "value": "여러 사용자 일괄 삭제",
  "id": "여러-사용자-일괄-삭제",
  "level": 3
}, {
  "value": "사용자 이벤트 로그 확인",
  "id": "사용자-이벤트-로그-확인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamTrash, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamTrash) _missingMdxReference("IcCamTrash", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 사용자의 정보를 편집하거나 얼굴을 추가/변경할 수 있습니다. 또한 더 이상 필요하지 않은 사용자를 삭제할 수 있으며, 사용자의 활동 이력을 이벤트 로그로 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 사용자 수정 및 삭제하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자의 이름, 소속 부서 등 정보를 변경해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자의 얼굴 사진을 업데이트하거나 새로운 얼굴을 추가해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자가 퇴사하거나 시스템에서 제거해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자의 인증 기록 및 변경 이력을 확인하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "삭제 작업은 되돌릴 수 없습니다. 사용자를 삭제하기 전에 필요한 데이터를 백업하고 신중하게 확인하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-정보-수정",
      children: "사용자 정보 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 사용자의 정보를 편집하거나 얼굴을 추가/변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "people",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 목록에서 수정할 사용자를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 상세 정보 팝업이 나타나면 필요한 정보를 수정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-people-edit-detail.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_id",
                product: "cam"
              }), ": 수정 불가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "name",
                product: "cam"
              }), ": 수정 가능"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "description",
                product: "cam"
              }), ": 수정 가능"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "custom_field",
                product: "cam"
              }), ": 수정 가능 (중복 불가)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "face_credentials",
                product: "cam"
              }), ": 얼굴 추가/변경/삭제 가능"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 정보 수정을 완료하면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "apply",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "수정을 완료하면 오른쪽 상단에 성공 메시지가 나타나며 사용자 목록으로 돌아갑니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["얼굴 사진은 개별적으로 삭제할 수 있습니다. 해당 얼굴 사진 아래의 ", (0,jsx_runtime.jsx)(IcCamTrash, {
          title: "delete"
        }), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-삭제",
      children: "사용자 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "더 이상 필요하지 않은 사용자를 삭제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "개별-사용자-삭제",
      children: "개별 사용자 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "people",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록에서 삭제할 사용자의 가장 오른쪽에 있는 ", (0,jsx_runtime.jsx)(IcCamTrash, {
            title: "delete"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-people-list-delete.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["삭제 확인 메시지가 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 오른쪽 상단에 삭제 확인 메시지가 나타나며 사용자 목록에서 해당 사용자가 제거됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "여러-사용자-일괄-삭제",
      children: "여러 사용자 일괄 삭제"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "people",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 목록에서 삭제할 사용자의 가장 왼쪽에 있는 체크박스를 클릭하세요. 여러 사용자를 선택할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-people-list-batch-delete.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 삭제 버튼이 표시되면, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["삭제 확인 메시지가 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ok",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "화면 오른쪽 상단에 삭제 확인 메시지가 나타나며 사용자 목록에서 해당 사용자가 제거됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-이벤트-로그-확인",
      children: "사용자 이벤트 로그 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 사용자의 활동 이력을 이벤트 로그로 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "people",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 목록에서 이벤트 로그를 확인할 사용자를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 상세 정보 팝업이 나타나면 오른쪽에 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs",
            product: "cam"
          }), "에서 이벤트 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-people-edit-detail.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "오른쪽 상단에서 달력 아이콘을 사용하여 특정 날짜의 이벤트를 조회할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/cam-server/cam-webserver-people-event-log-date.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이벤트 로그는 자동 기록되며, 사용자의 모든 중요한 활동을 추적할 수 있습니다."
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