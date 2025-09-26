"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["347"], {
80030: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_security_overview_mdx_b35_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-security-overview-mdx-b35.json
var site_docs_platform_biostar_air_security_overview_mdx_b35_namespaceObject = JSON.parse('{"id":"platform/biostar_air/security-overview","title":"보안 개요","description":"BioStar Air의 포괄적인 보안 조치에 대해 알아보세요. 종단 간 암호화, ISO 27001 인증, 모바일 자격 증명 보호 및 취약성 관리 관행이 포함되어 있습니다.","source":"@site/docs/platform/biostar_air/security-overview.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/security-overview","permalink":"/docs/platform/biostar_air/security-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/security-overview.mdx","tags":[],"version":"current","frontMatter":{"id":"security-overview","title":"보안 개요","description":"BioStar Air의 포괄적인 보안 조치에 대해 알아보세요. 종단 간 암호화, ISO 27001 인증, 모바일 자격 증명 보호 및 취약성 관리 관행이 포함되어 있습니다.","keywords":["security","Biostar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"출입 통제 장치 호환성","permalink":"/docs/platform/biostar_air/access-control-hardware-compatibility"},"next":{"title":"네트워크 포트 및 장치 식별","permalink":"/docs/platform/biostar_air/site-setup-networking"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/security-overview.mdx


const frontMatter = {
	id: 'security-overview',
	title: '보안 개요',
	description: 'BioStar Air의 포괄적인 보안 조치에 대해 알아보세요. 종단 간 암호화, ISO 27001 인증, 모바일 자격 증명 보호 및 취약성 관리 관행이 포함되어 있습니다.',
	keywords: [
		'security',
		'Biostar Air'
	],
	isTranslationMissing: false
};
const contentTitle = 'BioStar Air 및 Suprema Pass 모바일 출입을 위한 보안 조치';

const assets = {

};



const toc = [{
  "value": "기능 개요",
  "id": "기능-개요",
  "level": 2
}, {
  "value": "ISO 27001 인증",
  "id": "iso-27001-인증",
  "level": 2
}, {
  "value": "엔드투엔드(End-to-End) 보안을 위한 검증된 기술",
  "id": "엔드투엔드end-to-end-보안을-위한-검증된-기술",
  "level": 2
}, {
  "value": "보안 포털 액세스 및 데이터 보호",
  "id": "보안-포털-액세스-및-데이터-보호",
  "level": 3
}, {
  "value": "BioStar Air API와의 암호화된 통신",
  "id": "biostar-air-api와의-암호화된-통신",
  "level": 3
}, {
  "value": "암호화 및 해시 처리된 모바일 카드 ID",
  "id": "암호화-및-해시-처리된-모바일-카드-id",
  "level": 3
}, {
  "value": "모바일 기기에 저장된 모바일 카드의 안전한 저장",
  "id": "모바일-기기에-저장된-모바일-카드의-안전한-저장",
  "level": 3
}, {
  "value": "모바일 기기와 리더기 간의 보안 통신",
  "id": "모바일-기기와-리더기-간의-보안-통신",
  "level": 3
}, {
  "value": "모바일 카드 위조 방지",
  "id": "모바일-카드-위조-방지",
  "level": 3
}, {
  "value": "취약성 관리",
  "id": "취약성-관리",
  "level": 2
}, {
  "value": "위험 평가 접근 방식",
  "id": "위험-평가-접근-방식",
  "level": 2
}, {
  "value": "멀티팩터 인증 (MFA)",
  "id": "멀티팩터-인증-mfa",
  "level": 2
}, {
  "value": "자주 묻는 질문",
  "id": "자주-묻는-질문",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "biostar-air-및-suprema-pass-모바일-출입을-위한-보안-조치",
        children: "BioStar Air 및 Suprema Pass 모바일 출입을 위한 보안 조치"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "기능-개요",
      children: "기능 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 Suprema의 안전한 클라우드 기반 모바일 출입 통제 솔루션입니다. Suprema의 하드웨어, 소프트웨어 및 펌웨어 엔지니어링 팀은 '설계 시 보안' 원칙에 따라 작업합니다. 시스템 아키텍처의 모든 계층과 모든 통신 접점은 개인 정보 보호 및 데이터 무결성을 유지하도록 설계되었습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "주요 조치 사항"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air 관리 포털 및 데이터베이스의 데이터 보호 및 암호화"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air API와 클라이언트 간의 데이터 전송 시 암호화 및 보호"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스마트폰에 저장된 모바일 카드 데이터 암호화"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "스마트폰과 리더 간의 통신 보호(Suprema Pass)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 자격 증명 위조 방지(Suprema Pass)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iso-27001-인증",
      children: "ISO 27001 인증"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 ISO 27001 인증을 획득하여 데이터 보호 관리, 보안 통제 및 개인 정보 관리에 대한 글로벌 표준을 충족합니다. 2019년 8월에 처음 설립된 ISO 27001 준수는 일반 데이터 보호 규정(GDPR) 및 캘리포니아 소비자 개인 정보 보호법(CCPA)과 같은 유사한 법률과도 일치합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "엔드투엔드end-to-end-보안을-위한-검증된-기술",
      children: "엔드투엔드(End-to-End) 보안을 위한 검증된 기술"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "보안-포털-액세스-및-데이터-보호",
      children: "보안 포털 액세스 및 데이터 보호"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 관리 포털은 AES-256 이상의 암호화를 사용하는 AWS Amazon RDS 암호화 DB 인스턴스에서 실행됩니다. 모든 개인 데이터에는 추가 암호화가 적용됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-air-api와의-암호화된-통신",
      children: "BioStar Air API와의 암호화된 통신"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air REST API와의 모든 통신은 HTTPS를 통해 TLS 1.2를 사용하여 암호화되며 액세스 토큰(기본 1시간 만료)이 필요합니다. AWS API Gateway는 무차별 대입 공격을 방지하기 위해 API 요청을 제한합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "암호화-및-해시-처리된-모바일-카드-id",
      children: "암호화 및 해시 처리된 모바일 카드 ID"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 카드 ID 번호는 AES-256을 사용하여 암호화되어 타사 서버에서 노출되는 것을 방지합니다. 카드 데이터는 진위 확인을 위해 디지털 서명됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "모바일-기기에-저장된-모바일-카드의-안전한-저장",
      children: "모바일 기기에 저장된 모바일 카드의 안전한 저장"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Pass 모바일 자격 증명 및 관련 데이터는 AES-256으로 암호화됩니다. 암호화 키는 모바일 기기의 신뢰 실행 환경(TEE), 예를 들어 Secure Enclave(Apple) 또는 TrustZone(ARM)에 저장됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "모바일-기기와-리더기-간의-보안-통신",
      children: "모바일 기기와 리더기 간의 보안 통신"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bluetooth Low Energy (BLE)를 통한 '재전송 공격'을 방지하기 위해 BioStar Air는 각 연결에 대해 일회성 암호화 키를 사용하고 전송 직후 연결을 종료하여 중간자 공격(MITM)을 방지합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "모바일-카드-위조-방지",
      children: "모바일 카드 위조 방지"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "각 Suprema Pass 모바일 크리덴셜은 각 BioStar Air 사이트에 고유한 PKI 기반 디지털 서명으로 보호됩니다. 독점적인 검증 프로세스는 수정 또는 위조 시도를 감지합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "취약성-관리",
      children: "취약성 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema의 정보 보안 팀이 취약성 관리를 주도하며, 외부 보안 전문가들이 지원합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "지속적인 자동화된 위협 스캔"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전체 시스템 검토가 포함된 연간 ISO 27001 갱신 감사"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "주요 릴리스 전 침투 테스트 및 위험 평가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비밀번호 위생, 사회 공학 저항성 및 절차 준수를 위한 점검"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모든 취약점 및 수정 조치에 대한 포괄적인 문서화 및 보고"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "위험-평가-접근-방식",
      children: "위험 평가 접근 방식"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "자산은 기밀성, 무결성 및 가용성 등급에 따라 분류됩니다. 위협이 식별되고 취약점이 평가되며 위험이 가능성과 영향에 따라 평가됩니다. 완화 조치는 위험 심각도에 따라 우선 순위가 지정됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "멀티팩터-인증-mfa",
      children: "멀티팩터 인증 (MFA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "멀티팩터 인증(MFA)은 단계적으로 구현되고 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "관리자 계정에 대한 Email 기반 2FA"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air App에 대한 Passcode 기반 2FA"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "90일 후 비활성 관리자 계정 자동 잠금"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비밀번호 만료 설정 가능(30, 60, 90일)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "자주-묻는-질문",
      children: "자주 묻는 질문"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전송 중 데이터 암호화: TLS 1.2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "저장 중 데이터 암호화: AES-256"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DoS 보호: AWS API Gateway 요청 제한"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서비스 가용성: 98–99% 가동 시간(계약 SLA 기준)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API 보안: 토큰 기반 인증, HTTPS 전용, 엄격한 엔드포인트 검증"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "포털 액세스: 글로벌 관리를 위한 클라우드 기반; 개인 클라우드 옵션 개발 중"
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