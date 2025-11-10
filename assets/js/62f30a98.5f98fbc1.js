"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["60989"], {
5627: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_service_settings_mdx_62f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-service-settings-mdx-62f.json
var site_docs_platform_biostar_x_service_settings_mdx_62f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/service-settings","title":"서비스 설정","description":"BioStar X Service Manager의 Service Settings에서는 시스템의 핵심 서비스들을 구성하고 관리할 수 있습니다.","source":"@site/docs/platform/biostar_x/service-settings.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/service-settings","permalink":"/docs/platform/biostar_x/service-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/service-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"service-settings","title":"서비스 설정","description":"BioStar X Service Manager의 Service Settings에서는 시스템의 핵심 서비스들을 구성하고 관리할 수 있습니다.","keywords":["Service Settings","Service Manager","BioStar X"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"서버 시작 및 종료","permalink":"/docs/platform/biostar_x/manage-server"},"next":{"title":"포트 변경하기","permalink":"/docs/platform/biostar_x/change-port"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/service-settings.mdx


const frontMatter = {
	id: 'service-settings',
	title: '서비스 설정',
	description: 'BioStar X Service Manager의 Service Settings에서는 시스템의 핵심 서비스들을 구성하고 관리할 수 있습니다.',
	keywords: [
		'Service Settings',
		'Service Manager',
		'BioStar X'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "설정 변경이 필요한 상황",
  "id": "when-to-change",
  "level": 2
}, {
  "value": "설정 변경 방법",
  "id": "how-to-change",
  "level": 2
}, {
  "value": "서비스 구성",
  "id": "service-composition",
  "level": 2
}, {
  "value": "BioStar X Core Web Service",
  "id": "biostar-x-core-web-service",
  "level": 3
}, {
  "value": "BioStar X Core Service",
  "id": "biostar-x-core-service",
  "level": 3
}, {
  "value": "Unified Gateway Service",
  "id": "unified-gateway-service",
  "level": 3
}, {
  "value": "BioStar X Coordinator Service",
  "id": "biostar-x-coordinator-service",
  "level": 3
}, {
  "value": "BioStar X Server (Main)",
  "id": "biostar-x-server-(main)",
  "level": 3
}, {
  "value": "BioStar X Cache Service",
  "id": "biostar-x-cache-service",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "BioStar X Service Manager"
      }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Service Settings"
      }), " 메뉴에서는 시스템의 핵심 서비스들을 구성하고 관리할 수 있습니다. 각 서비스는 독립적으로 설정되며, 네트워크 포트와 버전 정보를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Service Settings"
      }), "는 아래의 주요 서비스로 구성됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Core Web Service"
          }), ": 웹 인터페이스 서비스"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Core Service"
          }), ": 시스템 핵심 기능 및 API 통신 서비스"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Unified Gateway Service"
          }), ": 역방향 프록시 기반 통합 게이트웨이 서비스"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Coordinator Service"
          }), ": 분산 시스템 구성 정보 관리 및 서비스 간 동기화"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Server (Main)"
          }), ": 메인 서버 서비스"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Cache Service"
          }), ": 데이터 캐싱 및 시스템 성능 향상"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-change",
      children: "설정 변경이 필요한 상황"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음과 같은 상황에서 서비스 설정을 변경해야 할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "포트 충돌 해결"
          }), ": 다른 애플리케이션이 동일한 포트를 사용하여 충돌이 발생할 때"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "보안 정책 준수"
          }), ": 조직의 네트워크 보안 정책에 따라 특정 포트 범위만 허용될 때"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "방화벽 설정"
          }), ": 기업 방화벽에서 허용하는 포트로 변경해야 할 때"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "서버 환경 변경"
          }), ": 서버 IP 주소 변경이나 네트워크 구성 변경 시"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "성능 최적화"
          }), ": 트래픽 분산이나 로드 밸런싱을 위한 포트 분리가 필요할 때"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-change",
      children: "설정 변경 방법"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICE SETTINGS"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "변경하려는 서비스 섹션으로 이동하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "필요한 포트 번호나 주소를 수정하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경사항을 적용하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Apply"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "서비스 설정을 변경한 후 변경 사항을 적용하려면 관련 서비스를 재시작하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "포트 번호 변경 시 다른 서비스나 애플리케이션과 충돌이 발생하지 않도록 주의하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "service-composition",
      children: "서비스 구성"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-core-web-service",
      children: "BioStar X Core Web Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "웹 기반 사용자 인터페이스를 담당하는 서비스입니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cws.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "HTTPS Port"
          }), ": 웹 인터페이스 접속 포트 (기본값: 5002)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "WebServerThrift Port"
          }), ": Thrift 프로토콜 기반 웹서버 통신 포트 (기본값: 9310)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "CloudNgrok Port"
          }), ": 클라우드 터널링 서비스 통신 포트 (기본값: 52000)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-core-service",
      children: "BioStar X Core Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "시스템의 핵심 기능과 외부 API 통신을 처리하는 메인 서비스입니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-core-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "WebSocket Port"
          }), ": 실시간 양방향 통신을 위한 웹소켓 포트 (기본값: 9002)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "API Port"
          }), ": REST API 통신 포트 (기본값: 9010)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "WebServerFastCgi Port"
          }), ": FastCGI 프로토콜 기반 웹서버 통신 포트 (기본값: 9000)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Rpc Port"
          }), ": 원격 프로시저 호출(RPC) 통신 포트 (기본값: 51218)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unified-gateway-service",
      children: "Unified Gateway Service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["역방향 프록시(Reverse Proxy) 방식을 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버에 대한 요청을 효율적으로 처리하고, iframe의 보안 취약점을 개선하며, SSL 인증서 오류를 최소화합니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-ugs.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "HTTPS Port"
        }), ": 통합 게이트웨이 HTTPS 통신 포트 (기본값: 443)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-coordinator-service",
      children: "BioStar X Coordinator Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "분산 시스템의 구성 정보 관리, 서비스 상태 모니터링 및 서비스 간 동기화를 담당하는 서비스입니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-coordinator-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "Client Port"
        }), ": 클라이언트 연결을 위한 통신 포트 (기본값: 21810)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "Client Port"
            }), " 값을 변경하면, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows Services"
            }), "(", (0,jsx_runtime.jsx)(_components.em, {
              children: "services.msc"
            }), ")에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Coordinator Service"
            }), " 서비스를 찾아 수동으로 재시작하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Coordinator Service"
            }), " 서비스를 재시작한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Service Manager"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERVICES"
            }), " 메뉴에서 모든 서비스를 재시작하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Stop All"
            }), " 버튼을 클릭하세요. 모든 서비스가 중지된 후 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Start All"
            }), " 버튼이 활성화되면 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-server-(main)",
      children: "BioStar X Server (Main)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "시스템의 메인 서버 역할을 수행하는 핵심 서비스입니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-server.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Server Address"
          }), ": 메인 서버의 IP 주소"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Server Port"
          }), ": 일반 서버 통신 포트 (기본값: 51212)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "SSL Server Port"
          }), ": SSL 보안 암호화 통신 포트 (기본값: 51213)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "gRPC Server Port"
          }), ": gRPC 프로토콜 기반 고성능 통신 포트 (기본값: 51219)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-cache-service",
      children: "BioStar X Cache Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "자주 사용되는 데이터를 메모리에 저장하여 시스템의 데이터 처리 속도와 성능을 향상시키는 서비스입니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cache-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Client Port"
          }), ": 캐시 서비스 클라이언트 연결 포트 (기본값: 10800)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Communication Port"
          }), ": 캐시 노드 간 내부 통신 포트 (기본값: 47500)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Discovery Port"
          }), ": 분산 캐시 노드 자동 발견을 위한 포트 (기본값: 47100)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "change-port",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "의 기본 포트(443)를 변경하는 방법을 단계별로 알아보세요."]
        })
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