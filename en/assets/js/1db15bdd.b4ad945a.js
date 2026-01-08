"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49831"], {
49853: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_setup_networking_mdx_1db_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-site-setup-networking-mdx-1db.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_setup_networking_mdx_1db_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-setup-networking","title":"Network Ports and Device Identification","description":"Set network ports for BioStar Air-compatible readers and check MAC addresses.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-setup-networking.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-setup-networking","permalink":"/docs/en/platform/biostar_air/site-setup-networking","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-setup-networking.mdx","tags":[],"version":"current","frontMatter":{"id":"site-setup-networking","title":"Network Ports and Device Identification","description":"Set network ports for BioStar Air-compatible readers and check MAC addresses.","keywords":["networking","ports"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Security Framework","permalink":"/docs/en/platform/biostar_air/security-overview"},"next":{"title":"Migration","permalink":"/docs/en/platform/biostar_air/biostar-air-migration"}}')
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

;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-setup-networking.mdx


const frontMatter = {
	id: 'site-setup-networking',
	title: 'Network Ports and Device Identification',
	description: 'Set network ports for BioStar Air-compatible readers and check MAC addresses.',
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
  "value": "Required network ports",
  "id": "required-network-ports",
  "level": 2
}, {
  "value": "Check the MAC address from the serial number",
  "id": "check-the-mac-address-from-the-serial-number",
  "level": 2
}, {
  "value": "Steps",
  "id": "steps",
  "level": 3
}, {
  "value": "Example",
  "id": "example",
  "level": 3
}, {
  "value": "MAC address converter",
  "id": "mac-address-converter",
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
      children: "BioStar Air must access specific network ports to operate properly. Network ports allow secure communication between compatible readers, cloud services, and user applications. Administrators may need to verify a BioStar Air-compatible reader's MAC address from its serial number for network configuration tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "required-network-ports",
      children: "Required network ports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify that the following ports are open on the network firewall."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "6379"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6381"
          }), ": Redis Ports"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Used to synchronize user information, handle fast event logging, manage sessions, and serve as a message broker for signaling between devices and the cloud."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "5671"
          }), ": AMQP over TLS (RabbitMQ)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Provides a secure messaging protocol for real-time communication between services."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "443"
          }), ": HTTPS (TLS)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Used for standard secure web traffic and required for the following services:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Access to the management portal web app through a web browser"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Air mobile app (iOS/Android)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "API calls"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Device firmware updates through the cloud"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Device login and authentication services"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When using BioStar Air's built-in video management feature:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Web-socket domain: eu-wss-api.airfob.com"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Web-socket Port: 3500"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "TURN/STUN Ports: 80, 443, 3478, 5349"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Verify access to the following endpoints for device login and authentication."
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
      id: "check-the-mac-address-from-the-serial-number",
      children: "Check the MAC address from the serial number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In certain cases, administrators need to determine a BioStar Air-compatible reader's MAC address using only its serial number. This is useful for tasks such as adding the device to a whitelist before adding it to the network."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find the serial number"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Locate the 9-digit serial number on the back of the device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convert the serial number to hexadecimal"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use a calculator or an online tool to convert the serial number from decimal to hexadecimal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Extract the last 3 bytes"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Take the last six characters from the hexadecimal value. These six characters represent the last 3 bytes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Build the MAC address"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The MAC address always starts with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "00:17:FC:"
          }), ". Append the last 3 bytes (six characters) from the hexadecimal value, separating each pair with a colon."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example",
      children: "Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Serial number"
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
            children: "Last 3 bytes"
          }), ": 8CAA11"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MAC address"
          }), ": 00:17:FC:8C:AA:11"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These steps allow accurate identification of a BioStar Air-compatible reader on the network using its serial number."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mac-address-converter",
      children: "MAC address converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enter the device's serial number below to get its MAC address instantly."
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