"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["66094"], {
48986: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_site_setup_networking_mdx_cc7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-site-setup-networking-mdx-cc7.json
var site_docs_platform_biostar_air_site_setup_networking_mdx_cc7_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-setup-networking","title":"네트워크 포트 및 장치 식별","description":"BioStar Air 호환 리더기의 네트워크 포트를 설정하고 MAC 주소를 확인하세요.","source":"@site/docs/platform/biostar_air/site-setup-networking.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-setup-networking","permalink":"/docs/platform/biostar_air/site-setup-networking","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-setup-networking.mdx","tags":[],"version":"current","frontMatter":{"id":"site-setup-networking","title":"네트워크 포트 및 장치 식별","description":"BioStar Air 호환 리더기의 네트워크 포트를 설정하고 MAC 주소를 확인하세요.","keywords":["networking","ports"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"보안 체계","permalink":"/docs/platform/biostar_air/security-overview"},"next":{"title":"마이그레이션","permalink":"/docs/platform/biostar_air/biostar-air-migration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./src/components/MacAddressCalculator/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"calculator":"calculator_Acrf","inputSection":"inputSection_yrpc","label":"label_KEMU","inputGroup":"inputGroup_IlNz","input":"input_I6GT","exampleButton":"exampleButton_uFYm","clearButton":"clearButton_bk4j","copyButton":"copyButton_vkfH","error":"error_c7wT","resultContainer":"resultContainer_V9n4","resultLabel":"resultLabel_jtwe","macAddress":"macAddress_t8nc","step":"step_HCML"});
;// CONCATENATED MODULE: ./src/components/MacAddressCalculator/index.js



function MacAddressCalculator() {
    const [serialNumber, setSerialNumber] = (0,react.useState)('');
    const [hexValue, setHexValue] = (0,react.useState)('');
    const [lastThreeBytes, setLastThreeBytes] = (0,react.useState)('');
    const [macAddress, setMacAddress] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const calculateMacAddress = (serial)=>{
        setError('');
        // 입력값 검증
        if (!serial) {
            setHexValue('');
            setLastThreeBytes('');
            setMacAddress('');
            return;
        }
        // 숫자가 아닌 문자 제거
        const cleanSerial = serial.replace(/\D/g, '');
        if (cleanSerial.length !== 9) {
            setError('Serial number must be 9 digits.');
            setHexValue('');
            setLastThreeBytes('');
            setMacAddress('');
            return;
        }
        const serialNum = parseInt(cleanSerial, 10);
        if (isNaN(serialNum)) {
            setError('Please enter a valid number.');
            return;
        }
        // 16진수로 변환
        const hex = serialNum.toString(16).toUpperCase();
        setHexValue(hex);
        // 마지막 3바이트 (6자리) 추출
        const lastSix = hex.slice(-6).padStart(6, '0');
        setLastThreeBytes(lastSix);
        // MAC 주소 구성
        const mac = `00:17:FC:${lastSix.slice(0, 2)}:${lastSix.slice(2, 4)}:${lastSix.slice(4, 6)}`;
        setMacAddress(mac);
    };
    const handleInputChange = (e)=>{
        const value = e.target.value;
        setSerialNumber(value);
        calculateMacAddress(value);
    };
    const handleExampleClick = ()=>{
        const exampleSerial = '546089489';
        setSerialNumber(exampleSerial);
        calculateMacAddress(exampleSerial);
    };
    const handleClear = ()=>{
        setSerialNumber('');
        setHexValue('');
        setLastThreeBytes('');
        setMacAddress('');
        setError('');
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: styles_module.calculator,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.inputSection,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "serialNumber",
                        className: styles_module.label,
                        children: "Serial number (9 digits)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.inputGroup,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                id: "serialNumber",
                                type: "text",
                                value: serialNumber,
                                onChange: handleInputChange,
                                placeholder: "e.g., 546089489",
                                className: styles_module.input,
                                maxLength: "9"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: handleExampleClick,
                                className: styles_module.exampleButton,
                                type: "button",
                                children: "Input example"
                            }),
                            serialNumber && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: handleClear,
                                className: styles_module.clearButton,
                                type: "button",
                                children: "Clear"
                            })
                        ]
                    }),
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.error,
                        children: error
                    })
                ]
            }),
            !error && serialNumber && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.resultContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.resultLabel,
                        children: "MAC 주소"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.macAddress,
                        children: macAddress
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: ()=>navigator.clipboard.writeText(macAddress),
                        className: styles_module.copyButton,
                        type: "button",
                        title: "Copy to clipboard",
                        children: "\uD83D\uDCCB Copy"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./docs/platform/biostar_air/site-setup-networking.mdx


const frontMatter = {
	id: 'site-setup-networking',
	title: '네트워크 포트 및 장치 식별',
	description: 'BioStar Air 호환 리더기의 네트워크 포트를 설정하고 MAC 주소를 확인하세요.',
	keywords: [
		'networking',
		'ports'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "필수 네트워크 포트",
  "id": "필수-네트워크-포트",
  "level": 2
}, {
  "value": "일련번호를 통해 MAC 주소 확인하기",
  "id": "일련번호를-통해-mac-주소-확인하기",
  "level": 2
}, {
  "value": "단계",
  "id": "단계",
  "level": 3
}, {
  "value": "예시",
  "id": "예시",
  "level": 3
}, {
  "value": "MAC 주소 변환기",
  "id": "mac-주소-변환기",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air가 원활하게 작동하려면 특정 네트워크 포트에 접근할 수 있어야 합니다. 네트워크 포트를 통해 호환 리더기, 클라우드 서비스 및 사용자 애플리케이션 간에 안전하게 통신할 수 있습니다. 관리자는 네트워크 구성 작업을 위해 BioStar Air 호환 리더기의 일련 번호를 통해 MAC 주소를 확인해야 할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "필수-네트워크-포트",
      children: "필수 네트워크 포트"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 포트가 네트워크 방화벽에서 열려 있는지 확인하십시오."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "6379"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6381"
          }), ": Redis Ports"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 정보를 동기화하고, 빠른 이벤트 로깅을 처리하고, 세션을 관리하며, 장치와 클라우드 간의 신호 처리를 위한 메시지 브로커로 사용됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "5671"
          }), ": AMQP over TLS (RabbitMQ)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서비스 간의 실시간 통신을 위한 안전한 메시징 프로토콜을 제공합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "443"
          }), ": HTTPS (TLS)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "표준 보안 웹 트래픽으로 사용되며, 아래와 같은 다양한 서비스에 필요합니다:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "웹 브라우저를 통해 관리 포털 웹 앱 접속"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Air 모바일 앱 (iOS/Android)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "API 호출"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "클라우드를 통한 장치 펌웨어 업데이트"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치 로그인 및 인증 서비스"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air의 내장 비디오 관리 기능을 사용하는 경우:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "웹 소켓 도메인: eu-wss-api.airfob.com"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "웹 소켓 포트: 3500"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "TURN/STUN 포트: 80, 443, 3478, 5349"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "장치 로그인 및 인증을 위한 다음 엔드포인트 액세스를 확인하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://e-afs-api.airfob.com/v1/device/login",
              children: "https://e-afs-api.airfob.com/v1/device/login"
            }), " (Europe)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://afs-api.airfob.com/v1/device/login",
              children: "https://afs-api.airfob.com/v1/device/login"
            }), " (Rest of world)"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "일련번호를-통해-mac-주소-확인하기",
      children: "일련번호를 통해 MAC 주소 확인하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "경우에 따라 BioStar Air 호환 리더기의 MAC 주소를 일련 번호만 사용하여 확인해야 할 수도 있습니다. 이는 장치를 네트워크에 추가하기 전에 화이트 리스트에 추가하는 등의 작업에 유용합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "단계",
      children: "단계"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "일련 번호 찾기"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치의 뒷면에서 9자리 일련 번호를 찾으세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "일련 번호를 16진수로 변환"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "계산기나 온라인 도구를 사용하여 일련 번호를 10진수에서 16진수 형식으로 변환하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "마지막 3바이트 추출"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "16진수 값에서 마지막 6자리를 가져오세요. 마지막 6자리는 마지막 3바이트를 나타냅니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MAC 주소 구성"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MAC 주소는 항상 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "00:17:FC:"
          }), "로 시작합니다. 마지막 3바이트(6자리)를 16진수 값에서 가져와 각 쌍을 콜론으로 구분하여 추가하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "예시",
      children: "예시"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "일련 번호"
          }), ": 546089489"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "16진수로 변환"
          }), ": 208CAA11"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "마지막 3바이트 추출"
          }), ": 8CAA11"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MAC 주소 구성"
          }), ": 00:17:FC:8C:AA:11"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 단계를 따르면 일련 번호를 사용하여 네트워크에서 BioStar Air 호환 리더기를 정확하게 식별할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mac-주소-변환기",
      children: "MAC 주소 변환기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래에 장치의 일련 번호를 입력하면 MAC 주소를 바로 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(MacAddressCalculator, {})]
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