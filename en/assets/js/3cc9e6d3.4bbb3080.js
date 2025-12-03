"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["28568"], {
81301: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_corestation_40_product_specifications_mdx_3cc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-corestation-40-product-specifications-mdx-3cc.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_corestation_40_product_specifications_mdx_3cc_namespaceObject = JSON.parse('{"id":"device/corestation_40/product-specifications","title":"Product Specifications","description":"Provides key specifications of the product, including size, features, and performance.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/corestation_40/product-specifications.mdx","sourceDirName":"device/corestation_40","slug":"/device/corestation_40/product-specifications","permalink":"/docs/en/device/corestation_40/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_40/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"Product Specifications","description":"Provides key specifications of the product, including size, features, and performance.","keywords":["General","Interfaces","Electrical","Dimensions"],"isTranslationMissing":false},"sidebar":"corestation","previous":{"title":"Installation","permalink":"/docs/en/device/corestation_40/installation"},"next":{"title":"Regulatory Information","permalink":"/docs/en/device/corestation_40/regulatory-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/cs40_specs.json
var cs40_specs_namespaceObject = JSON.parse('{"G":{"ju":{"label":"일반","label_id":"specs.general","items":{"modelName":{"label":"모델명","label_id":"specs.general.modelName","value":"CS-40"},"cpu":{"label":"CPU","label_id":"specs.general.cpu","value":{"ko":"1.4 GHz 옥타코어","en":"1.4 GHz Octa-core"}},"memory":{"label":"메모리","label_id":"specs.general.memory","value":"8 GB Flash + 1 GB RAM"},"crypto_chip":{"label":"크립토 칩","label_id":"specs.general.crypto_chip","value":true},"led_type":{"label":"LED","label_id":"specs.general.led_type","type":"model","items":{"multiColor":{"label":"다중 색상","label_id":"specs.general.led_type.multiColor","value":{"ko":["STATUS: 2개","HOST RS-485 TX: 1개","HOST RS-485 RX: 1개","SUPERVISED INPUT: 8개","RELAY: 4개","AUX IN: 2개"],"en":["STATUS: 2ea","HOST RS-485 TX: 1ea","HOST RS-485 RX: 1ea","SUPERVISED INPUT: 8ea","RELAY: 4ea","AUX IN: 2ea"]}}}},"operating_temp":{"label":"동작 온도","label_id":"specs.general.operating_temp","value":"0 °C ~ 50 °C"},"storage_temp":{"label":"보관 온도","label_id":"specs.general.storage_temp","value":"-40 °C ~ 70 °C"},"operating_humidity":{"label":"동작 습도","label_id":"specs.general.operating_humidity","value":{"ko":"0 % ~ 80 %, 비응축","en":"0 % ~ 80 %, non-condensing"}},"storage_humidity":{"label":"보관 습도","label_id":"specs.general.storage_humidity","value":{"ko":"0 % ~ 95 %, 비응축","en":"0 % ~ 95 %, non-condensing"}},"operating_condition":{"label":"동작 환경 조건","label_id":"specs.general.operating_condition","value":"0 °C ~ 49 °C"},"certifications":{"label":"인증","label_id":"specs.general.certifications","value":"CE, UKCA, KC, FCC, RCM, RoHS, REACH, WEEE"}}},"IG":{"label":"저장 용량","label_id":"specs.storage","items":{"max_users":{"label":"최대 사용자 수","label_id":"specs.storage.max_users","value":"500,000","annotation_value":"anno1"},"max_credentials_1n":{"label":"최대 크리덴셜 수 (1:N)","label_id":"specs.storage.max_credentials_1n","value":{"ko":"얼굴: 4,000","en":"Face: 4,000"},"annotation_value":"anno2"},"max_credentials_1on1":{"label":"최대 크리덴셜 수 (1:1)","label_id":"specs.storage.max_credentials_1on1","value":{"ko":["얼굴: 30,000<sup id=\'dupl\'><a href=\'#anno2\'></a></sup>","카드: 500,000","PIN: 500,000"],"en":["Face: 30,000<sup id=\'dupl\'><a href=\'#anno2\'></a></sup>","Card: 500,000","PIN: 500,000"]}},"max_text_logs":{"label":"최대 텍스트 로그 수","label_id":"specs.storage.max_text_logs","value":"5,000,000"}}},"qO":{"label":"인터페이스","label_id":"specs.interface","items":{"ethernet":{"label":"이더넷","label_id":"specs.interface.ethernet","value":{"ko":"지원 (10/100 Mbps, 자동 MDI/MDI-X)","en":"Supported (10/100 Mbps, auto MDI/MDI-X)"}},"network_protocol":{"label":"네트워크 프로토콜","label_id":"specs.interface.network_protocol","value":"TCP, UDP"},"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"5채널","en":"5 ch"}},"rs485_protocol":{"label":"RS-485 통신 프로토콜","label_id":"specs.interface.rs485_protocol","value":{"ko":"OSDP V2 호환","en":"OSDP V2 compliant"}},"wiegand":{"label":"Wiegand","label_id":"specs.interface.wiegand","value":{"ko":"4채널","en":"4 ch"}},"relay":{"label":"릴레이","label_id":"specs.interface.relay","value":{"ko":"4개","en":"4 relays"}},"input":{"label":"Input","label_id":"specs.interface.input","value":{"ko":"8채널","en":"8 ch"},"annotation_value":"anno3"},"output":{"label":"Output","label_id":"specs.interface.output","value":{"ko":"8채널","en":"8 ch"}},"supervised":{"label":"Supervised 입력","label_id":"specs.interface.supervised","value":{"ko":"8채널<sup id=\'dupl\'><a href=\'#anno3\'></a></sup>","en":"8 ch<sup id=\'dupl\'><a href=\'#anno3\'></a></sup>"}},"auxInput":{"label":"AUX 입력","label_id":"specs.interface.auxInput","value":{"ko":"2채널 (AC POWER FAIL, 탬퍼 연결 지원)","en":"2 ch (AC POWER FAIL, Tamper)"}}}},"yp":{"label":"전기 규격","label_id":"specs.power","type":"model","items":{"corestation":{"label":"전원","label_id":"specs.power.power","type":"model","items":{"corestation":{"label":"CoreStation","value":{"ko":"전압: 12 Vdc / 전류: 최대 3 A","en":"Voltage: 12 Vdc / Current: Max. 3 A"}},"powerSupply":{"label":"전원 장치","label_id":"specs.power.powerSupply","value":"110 ~ 240 VAC, 50/60 Hz"}}},"power_output":{"label":"전원 출력","label_id":"specs.power.power_output","type":"model","items":{"12vdc":{"label":"12 Vdc","value":{"ko":"전류: 최대 1.5 A","en":"Current: Max. 1.5 A"}}}},"switch_input_vih":{"label":"스위치 입력 VIH","label_id":"specs.power.switch_input_vih","value":{"ko":["최대: 5 V","최소: 3 V"],"en":["Max.: 5 V","Min.: 3 V"]}},"switch_input_vil":{"label":"스위치 입력 VIL","label_id":"specs.power.switch_input_vil","value":{"ko":"최대: 1 V","en":"Max.: 1 V"}},"relay":{"label":"릴레이","label_id":"specs.power.relay","value":"5 A @ 30 VDC Resistive load"}}}}}')
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/corestation_40/product-specifications.mdx


const frontMatter = {
	id: 'product-specifications',
	title: 'Product Specifications',
	description: 'Provides key specifications of the product, including size, features, and performance.',
	keywords: [
		'General',
		'Interfaces',
		'Electrical',
		'Dimensions'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*일반*/
/*저장 용량*/
/*인터페이스*/
/*전기 규격*/



const toc = [{
  "value": "Dimensions and Weight",
  "id": "dimensions-and-weight",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Anno, Image, PageBreak, SpecSection} = _components;
  if (!Anno) _missingMdxReference("Anno", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!PageBreak) _missingMdxReference("PageBreak", true);
  if (!SpecSection) _missingMdxReference("SpecSection", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Provides key specifications of the product, including size, features, and performance."
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: cs40_specs_namespaceObject.G.ju
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: cs40_specs_namespaceObject.G.IG
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: cs40_specs_namespaceObject.G.qO
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: cs40_specs_namespaceObject.G.yp
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimensions-and-weight",
      children: "Dimensions and Weight"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The dimensional tolerance is ±0.3 mm."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/cs40-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno1",
          children: "1)"
        }), " This is based on users enrolled without credentials."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno2",
          children: "2)"
        }), " Facial authentication is supported only by FaceStation 2 and FaceLite."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno3",
          children: "3)"
        }), " You can choose between Input or Supervised input."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Product specifications are subject to change without notice for performance improvement."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When this product is a master device, connecting a device with a fingerprint sensor as a slave allows authentication of fingerprints using the slave device."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Max. Fingerprint Credentials (1", ":N", "): 100,000"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Max. Fingerprint Credentials (1:1): 500,000"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For detailed information on products or troubleshooting, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://kb.supremainc.com/knowledge/doku.php?id=en:how_to_configure_corestation&s%5B%5D=corestation/",
              children: "the following link"
            }), "."]
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