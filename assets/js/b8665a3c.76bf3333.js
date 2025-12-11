"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["29306"], {
60129: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_ad_encrypt_mdx_b86_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-ad-encrypt-mdx-b86.json
var site_docs_platform_biostar_x_ad_encrypt_mdx_b86_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ad-encrypt","title":"액티브 디렉토리 암호화 설정","description":"Windows Active Directory 서버와 통신할 때 암호화를 사용할 수 있습니다.","source":"@site/docs/platform/biostar_x/ad-encrypt.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ad-encrypt","permalink":"/docs/platform/biostar_x/ad-encrypt","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ad-encrypt.mdx","tags":[],"version":"current","frontMatter":{"id":"ad-encrypt","title":"액티브 디렉토리 암호화 설정","description":"Windows Active Directory 서버와 통신할 때 암호화를 사용할 수 있습니다.","displayed_sidebar":"biostarx","isTranslationMissing":false},"sidebar":"biostarx"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/ad-encrypt.mdx


const frontMatter = {
	id: 'ad-encrypt',
	title: '액티브 디렉토리 암호화 설정',
	description: 'Windows Active Directory 서버와 통신할 때 암호화를 사용할 수 있습니다.',
	displayed_sidebar: 'biostarx',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "1단계. Active Directory 인증서 서비스 설치",
  "id": "1단계-active-directory-인증서-서비스-설치",
  "level": 2
}, {
  "value": "2단계. LDAPS(LDAP over SSL/TLS) 통신 연결",
  "id": "2단계-ldapsldap-over-ssltls-통신-연결",
  "level": 2
}, {
  "value": "3단계. 루트 인증서 복사",
  "id": "3단계-루트-인증서-복사",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Windows Active Directory 서버와 통신할 때 암호화를 사용할 수 있습니다. 액티브 디렉토리 암호화를 처음 사용할 때 아래 순서에 따라 설정하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1단계-active-directory-인증서-서비스-설치",
      children: "1단계. Active Directory 인증서 서비스 설치"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Windows Active Directory 서버 암호화 통신을 사용하려면 Active Directory 인증서 서비스를 설치해야 합니다. Active Directory 인증서 서비스는 아래 순서에 따라 설치할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows Active Directory 서버가 설치된 PC에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "서버 관리자"
          }), "를 실행한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "관리"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "역할 및 기능 추가"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "시작하기 전"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "설치 유형 선택"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "역할 기반"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "기능 기반 설치"
          }), "를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "대상 서버 선택"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "서버 풀에서 서버 선택"
          }), "을 선택한 뒤 서버를 확인하고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "서버 역할 선택"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory 인증서 서비스"
          }), "를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 화면이 나타나면 내용을 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "기능 추가"
          }), "를 선택하고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory 인증서 서비스"
          }), "의 내용을 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "설치 선택 확인"
          }), " 화면에서 설치를 클릭하세요. 설치가 완료되면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "대상 서버에서 Active Directory 인증서 서비스 구성"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AD CS 구성"
          }), " 창이 나타나면 내용을 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "역할 서비스"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "인증 기관"
          }), "을 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "설정 유형"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "엔터프라이즈 CA"
          }), "를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CA 종류"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "루트 CA"
          }), "를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "개인 키"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "새 개인 키 만들기"
          }), "를 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "암호화"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CA 이름"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "유효 기간"
          }), "을 각각 설정한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "인증서 데이터베이스"
          }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "인증서 데이터베이스 위치"
          }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "인증서 데이터베이스 로그 위치"
          }), "를 설정한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "다음"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "확인"
          }), " 화면에서 설정한 Active Directory 인증서 서비스의 내용을 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "구성"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2단계-ldapsldap-over-ssltls-통신-연결",
      children: "2단계. LDAPS(LDAP over SSL/TLS) 통신 연결"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "시작"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "실행"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["입력 필드에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ldp"
          }), "를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ldp-disconnected"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "연결"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "서버"
          }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "포트"
          }), " 입력 필드에 값을 입력하고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SSL"
          }), "을 선택한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "확인"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3단계-루트-인증서-복사",
      children: "3단계. 루트 인증서 복사"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Windows Active Directory 서버가 설치된 PC에서 명령 프롬프트를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "certutil -ca.cert client.crt"
          }), " 명령어를 입력해 루트 인증서를 복사하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "keytool -import -keystore ad.jks -file client.crt"
          }), " 명령어를 입력해 서버 인증서를 ", (0,jsx_runtime.jsx)(_components.em, {
            children: ".jks"
          }), " 형식으로 변환하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: ".jks"
          }), " 형식 서버 인증서를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 설치 경로에 저장하세요."]
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