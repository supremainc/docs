"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4102"], {
84514: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_server_https_mdx_a38_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-server-https-mdx-a38.json
var site_docs_platform_biostar_x_settings_server_https_mdx_a38_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-https","title":"HTTPS 인증서 설치하기","description":"BioStar X를 HTTPS로 연결하려면 BioStar X가 설치된 IP 주소를 등록하여 인증서를 설치해야 합니다.","source":"@site/docs/platform/biostar_x/settings-server-https.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-https","permalink":"/docs/platform/biostar_x/settings-server-https","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-https.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-https","title":"HTTPS 인증서 설치하기","description":"BioStar X를 HTTPS로 연결하려면 BioStar X가 설치된 IP 주소를 등록하여 인증서를 설치해야 합니다.","keywords":["HTTPS","인증서"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"서버 상세 설정하기","permalink":"/docs/platform/biostar_x/settings-server-server"},"next":{"title":"라이선스 활성화하기","permalink":"/docs/platform/biostar_x/settings-license"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-server-https.mdx


const frontMatter = {
	id: 'settings-server-https',
	title: 'HTTPS 인증서 설치하기',
	description: 'BioStar X를 HTTPS로 연결하려면 BioStar X가 설치된 IP 주소를 등록하여 인증서를 설치해야 합니다.',
	keywords: [
		'HTTPS',
		'인증서'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "인증서 설치가 필요한 경우",
  "id": "인증서-설치가-필요한-경우",
  "level": 2
}, {
  "value": "인증서 설치",
  "id": "인증서-설치",
  "level": 2
}, {
  "value": "서버 설정에서 인증서 설치",
  "id": "서버-설정에서-인증서-설치",
  "level": 2
}, {
  "value": "VMS 서버의 인증서 설치",
  "id": "vms-certification",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar X를 HTTPS로 연결하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "가 설치된 IP 주소를 등록하여 인증서를 설치해야 합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "인증서-설치가-필요한-경우",
      children: "인증서 설치가 필요한 경우"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTPS 인증서가 설치되지 않은 상태에서 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 접속하면 웹 브라우저에서 다음과 같은 보안 경고가 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-not-secure.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이러한 경고는 브라우저가 서버의 신원을 확인할 수 없기 때문에 나타납니다. 인증서를 설치하면 브라우저가 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버를 신뢰하게 되어 보안 경고 없이 안전한 HTTPS 연결을 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "인증서-설치",
      children: "인증서 설치"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["올바른 네트워크 연결을 위해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 사용하기 전에 인증서를 설치하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 로그인 페이지로 접속하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auth.login-page.certificate-download-button.button"
          }), " 링크를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-login-down-https-cert.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), " 파일을 로컬에 저장하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다운로드한 파일의 압축을 해제하고, ", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.exe"
          }), " 파일을 실행하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment Certification"
          }), " 창이 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "가 설치된 PC의 IP 주소를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Address"
          }), "에 입력한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-certification.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 기본 포트 번호는 443입니다. 포트 번호를 변경했다면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            }), "에 변경한 포트 번호를 입력하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["보안 경고 메시지를 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "예"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["웹 브라우저를 다시 시작한 뒤 등록한 IP 주소를 입력해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 페이지로 이동하세요. 주소 표시줄 왼쪽의 아이콘을 클릭했을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "이 연결은 안전합니다"
      }), " 메시지가 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-secure.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enrollment Certification"
        }), "에서 입력하는 IP 주소는 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "에 설정된 IP 주소와 동일해야 합니다. ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.server.root"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.server.server"
        }), " 메뉴 경로의 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.biostarIPAdress",
          product: "2"
        }), " 항목에서 확인할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "서버-설정에서-인증서-설치",
      children: "서버 설정에서 인증서 설치"
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
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.certDownload",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-https.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), " 파일을 로컬에 저장하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다운로드한 파일의 압축을 해제한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), " 파일을 실행하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment Certification"
          }), " 창이 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "가 설치된 PC의 IP 주소를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Address"
          }), "에 입력한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-certification.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 기본 포트 번호는 443입니다. 포트 번호를 변경했다면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            }), "에 변경한 포트 번호를 입력하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["보안 경고 메시지를 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "예"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["웹 브라우저를 다시 시작한 뒤 등록한 IP 주소를 입력해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 페이지로 이동하세요. 주소 표시줄 왼쪽의 아이콘을 클릭했을 때 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "이 연결은 안전합니다"
      }), " 메시지가 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-secure.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-certification",
      children: "VMS 서버의 인증서 설치"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " 페이지에서 VMS의 녹화 영상을 재생할 때 브라우저에서 '안전하지 않음' 경고가 표시되거나 영상 로드 에러가 발생한다면, 클라이언트 PC에서 VMS 서버의 인증서를 설치해야 합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VMS 서버는 일반적으로 Chain 형태의 PEM 인증서를 사용하므로, 인증서 설치 시 Chain Type 옵션을 선택해야 합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "VMS 서버에서 IP 주소 기반의 인증서를 생성하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "VMS 서버에서 IP 주소 기반의 인증서를 생성하는 방법은 사용하는 VMS 제품의 매뉴얼을 참고하세요."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "VMS 서버를 재부팅하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 설치한 클라이언트 PC에서 로그인 화면 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), "에서 HTTPS 인증서 설치 프로그램(", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), ")을 다운로드하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다운로드한 파일의 압축을 해제한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), " 파일을 실행하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment Certification"
          }), " 창이 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다음 정보를 입력하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-vms-certification.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              }), ": VMS 서버의 IP 주소"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port"
              }), ": VMS 서버의 포트 번호"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Chain Type"
              }), ": 체크박스를 선택해 VMS용 Chain 인증서 설치"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["보안 경고 메시지를 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "예"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["웹 브라우저를 다시 시작한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " 페이지에서 VMS 서버의 녹화 영상이 정상 재생되는지 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), " 페이지의 비디오 모니터링에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMS 서버와 연동하는 기능은 기능 추가 옵션을 별도로 구매해야 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
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