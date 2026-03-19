"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["26002"], {
33351: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_setup_networking_mdx_b30_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-site-setup-networking-mdx-b30.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_setup_networking_mdx_b30_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-setup-networking","title":"Identificar puertos y dispositivos de red","description":"Configure los puertos de red de los dispositivos compatibles con BioStar Air y verifique las direcciones MAC.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-setup-networking.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-setup-networking","permalink":"/docs/es/platform/biostar_air/site-setup-networking","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-setup-networking.mdx","tags":[],"version":"current","frontMatter":{"id":"site-setup-networking","title":"Identificar puertos y dispositivos de red","description":"Configure los puertos de red de los dispositivos compatibles con BioStar Air y verifique las direcciones MAC.","keywords":["redes","puertos"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Cableado y configuración del escáner QR E200","permalink":"/docs/es/platform/biostar_air/e200-qr-scanner"},"next":{"title":"Credencial de usuario","permalink":"/docs/es/platform/biostar_air/credential-users-guide"}}')
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

;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-setup-networking.mdx


const frontMatter = {
	id: 'site-setup-networking',
	title: 'Identificar puertos y dispositivos de red',
	description: 'Configure los puertos de red de los dispositivos compatibles con BioStar Air y verifique las direcciones MAC.',
	keywords: [
		'redes',
		'puertos'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Puertos de red necesarios",
  "id": "puertos-de-red-necesarios",
  "level": 2
}, {
  "value": "Comprobar la dirección MAC a partir del número de serie",
  "id": "comprobar-la-dirección-mac-a-partir-del-número-de-serie",
  "level": 2
}, {
  "value": "Pasos",
  "id": "pasos",
  "level": 3
}, {
  "value": "Ejemplo",
  "id": "ejemplo",
  "level": 3
}, {
  "value": "Convertidor de direcciones MAC",
  "id": "convertidor-de-direcciones-mac",
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
      children: "BioStar Air y los dispositivos compatibles deben acceder a puertos de red específicos para garantizar una conexión fluida. Estos puertos permiten la comunicación segura entre los dispositivos compatibles, los servicios en la nube y las aplicaciones de los usuarios. En ciertos casos, los administradores necesitan determinar la dirección MAC de un dispositivo compatible con BioStar Air a partir de su número de serie para realizar tareas de configuración de red."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "puertos-de-red-necesarios",
      children: "Puertos de red necesarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifique que los siguientes puertos estén abiertos en el firewall de la red."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "6379"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6381"
          }), ": Puertos de Redis"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Se utilizan para sincronizar la información de usuario, gestionar el registro rápido de eventos, administrar sesiones y actuar como un intermediario de mensajes para la señalización entre los dispositivos y la nube."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "5671"
          }), ": AMQP sobre TLS (RabbitMQ)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Proporciona un protocolo de mensajería seguro para la comunicación en tiempo real entre servicios."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "443"
          }), ": HTTPS (TLS)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Se utiliza para el tráfico web estándar y seguro y es necesario para los siguientes servicios:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Acceso a la aplicación web del portal de administración desde un navegador"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Aplicación móvil BioStar Air (iOS/Android)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Llamadas a la API"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Actualizaciones de firmware de los dispositivos a través de la nube"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Servicios de inicio de sesión y autenticación para dispositivos"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Al usar la función integrada de gestión de video de BioStar Air:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Dominio WebSocket: eu-wss-api.airfob.com"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Puerto WebSocket: 3500"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Puertos TURN/STUN: 80, 443, 3478, 5349"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Verifique el acceso a los siguientes puntos de conexión para el inicio de sesión y la autenticación de dispositivos."
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
            }), " (Rest del mundo)"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comprobar-la-dirección-mac-a-partir-del-número-de-serie",
      children: "Comprobar la dirección MAC a partir del número de serie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En algunos casos, los administradores necesitan determinar la dirección MAC de un lector compatible con BioStar Air utilizando únicamente su número de serie. Esto resulta útil para tareas como añadir el dispositivo a una lista blanca antes de conectarlo a la red."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pasos",
      children: "Pasos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Localice el número de serie"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Localice el número de serie de 9 dígitos en la parte posterior del dispositivo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convierta el número de serie a hexadecimal"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Utilice una calculadora o una herramienta en línea para convertir el número de serie de decimal a hexadecimal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Extraiga los últimos 3 bytes"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tome los últimos seis caracteres del valor hexadecimal; estos seis caracteres representan los últimos 3 bytes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Construya la dirección MAC"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La dirección MAC siempre comienza con ", (0,jsx_runtime.jsx)(_components.code, {
            children: "00:17:FC:"
          }), ". Añada los últimos 3 bytes (seis caracteres) del valor hexadecimal, separando cada par con dos puntos."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ejemplo",
      children: "Ejemplo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Número de serie"
          }), ": 546089489"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hexadecimal"
          }), ": 208CAA11"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Últimos 3 bytes"
          }), ": 8CAA11"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dirección MAC"
          }), ": 00:17:FC:8C:AA:11"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Estos pasos permiten identificar con precisión un lector compatible con BioStar Air en la red mediante su número de serie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "convertidor-de-direcciones-mac",
      children: "Convertidor de direcciones MAC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ingrese a continuación el número de serie del dispositivo para obtener su dirección MAC al instante."
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