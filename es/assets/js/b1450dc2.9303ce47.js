"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["30431"], {
70237: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_inputmodule_product_specifications_mdx_b14_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-inputmodule-product-specifications-mdx-b14.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_inputmodule_product_specifications_mdx_b14_namespaceObject = JSON.parse('{"id":"device/inputmodule/product-specifications","title":"Especificaciones del producto","description":"Incluye las especificaciones clave del producto, como tamaño, características y rendimiento.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/inputmodule/product-specifications.mdx","sourceDirName":"device/inputmodule","slug":"/device/inputmodule/product-specifications","permalink":"/docs/es/device/inputmodule/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/inputmodule/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"Especificaciones del producto","description":"Incluye las especificaciones clave del producto, como tamaño, características y rendimiento.","keywords":["General","Capacidad","Interfaz","Eléctrico","Dimensiones"],"isTranslationMissing":false},"sidebar":"inputmodule","previous":{"title":"Instalación","permalink":"/docs/es/device/inputmodule/installation"},"next":{"title":"Información reglamentaria","permalink":"/docs/es/device/inputmodule/regulatory-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/im120_specs.json
var im120_specs_namespaceObject = JSON.parse('{"d":{"ju":{"label":"일반","label_id":"specs.general","items":{"modelName":{"label":"모델명","label_id":"specs.general.modelName","value":"IM-120"},"cpu":{"label":"CPU","label_id":"specs.general.cpu","value":"Cortex M3 72 MHz"},"memory":{"label":"메모리","label_id":"specs.general.memory","value":"512 KB Flash + 64 KB SRAM"},"led_type":{"label":"LED","label_id":"specs.general.led_type","type":"model","items":{"multiColor":{"label":"다중 색상","label_id":"specs.general.led_type.multiColor","value":{"ko":["POWER: 1개","STATUS: 1개","RS-485 TX: 1개","RS-485 RX: 1개","SUPERVISED INPUT: 12개","RELAY: 2개","AUX IN: 2개","TAMPER: 1개"],"en":["POWER: 1ea","STATUS: 1ea","RS-485 TX: 1ea","RS-485 RX: 1ea","SUPERVISED INPUT: 12ea","RELAY: 2ea","AUX IN: 2ea","TAMPER: 1ea"]}}}},"operating_temp":{"label":"동작 온도","label_id":"specs.general.operating_temp","value":"-20 °C ~ 60 °C"},"storage_temp":{"label":"보관 온도","label_id":"specs.general.storage_temp","value":{"ko":"-40 °C ~ 70 °C","en":"-40 °C ~ 70 °C","es":"De -40 °C a 70 °C","ja":"-40 °C ~ 70 °C"}},"operating_humidity":{"label":"동작 습도","label_id":"specs.general.operating_humidity","value":{"ko":"0 % ~ 95 %, 비응축","en":"0 % ~ 95 %, non-condensing"}},"storage_humidity":{"label":"보관 습도","label_id":"specs.general.storage_humidity","value":{"ko":"0 % ~ 95 %, 비응축","en":"0 % ~ 95 %, non-condensing"}},"certifications":{"label":"인증","label_id":"specs.general.certifications","value":"CE, UKCA, KC, FCC, RCM, RoHS, REACH, WEEE"}}},"IG":{"label":"저장 용량","label_id":"specs.storage","items":{"max_text_logs":{"label":"최대 텍스트 로그 수","label_id":"specs.storage.max_text_logs","value":{"ko":"포트당 10개","en":"10 ea per port"},"annotation_value":"anno1"}}},"qO":{"label":"인터페이스","label_id":"specs.interface","items":{"input":{"label":"Input","label_id":"specs.interface.input","value":{"ko":"12채널","en":"12 ch"},"annotation_value":"anno2"},"supervised":{"label":"Supervised 입력","label_id":"specs.interface.supervised","value":{"ko":"12채널<sup id=\'dupl\'><a href=\'#anno2\'></a></sup>","en":"12 ch<sup id=\'dupl\'><a href=\'#anno2\'></a></sup>"}},"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"1채널","en":"1 ch"}},"rs485_protocol":{"label":"RS-485 통신 프로토콜","label_id":"specs.interface.rs485_protocol","value":{"ko":"OSDP V2 호환","en":"OSDP V2 compliant","es":"Compatible con OSDP V2","ja":"OSDP V2 準拠"}},"relay":{"label":"릴레이","label_id":"specs.interface.relay","value":{"ko":"2개","en":"2 relays"}},"auxInput":{"label":"AUX 입력","label_id":"specs.interface.auxInput","value":{"ko":"2채널 (AC POWER FAIL)","en":"2 ch (AC POWER FAIL)"}},"tamper":{"label":"탬퍼","label_id":"specs.interface.tamper","value":{"ko":"1채널","en":"1 ch"}}}},"yp":{"label":"전기 규격","label_id":"specs.power","items":{"power":{"label":"전원","label_id":"specs.power.power","type":"model","items":{"12vdc":{"label":"12 Vdc","value":{"ko":"전류: 최대 0.2 A","en":"Current: Max. 0.2 A","es":"Corriente: Máx. 0.2 A","ja":"電流：最大 0.2 A"}},"24vdc":{"label":"24 Vdc","value":{"ko":"전류: 최대 0.1 A","en":"Current: Max. 0.1 A","es":"Corriente: Máx. 0.1 A","ja":"電流：最大 0.1 A"}}}},"switch_input_vih":{"label":"스위치 입력 VIH","label_id":"specs.power.switch_input_vih","value":{"ko":"최대: 5 V (접점 출력)","en":"Max.: 5 V (Dry Contact)"}},"relay":{"label":"릴레이","label_id":"specs.power.relay","value":"5 A @ 30 VDC Resistive load"}}}}}')
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/inputmodule/product-specifications.mdx


const frontMatter = {
	id: 'product-specifications',
	title: 'Especificaciones del producto',
	description: 'Incluye las especificaciones clave del producto, como tamaño, características y rendimiento.',
	keywords: [
		'General',
		'Capacidad',
		'Interfaz',
		'Eléctrico',
		'Dimensiones'
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
  "value": "Dimensiones y peso",
  "id": "dimensiones-y-peso",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    hr: "hr",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Anno, Image, SpecSection} = _components;
  if (!Anno) _missingMdxReference("Anno", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!SpecSection) _missingMdxReference("SpecSection", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Incluye las especificaciones clave del producto, como tamaño, características y rendimiento."
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: im120_specs_namespaceObject.d.ju
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: im120_specs_namespaceObject.d.IG
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: im120_specs_namespaceObject.d.qO
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: im120_specs_namespaceObject.d.yp
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimensiones-y-peso",
      children: "Dimensiones y peso"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La tolerancia dimensional es de ±0.3 mm."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/im120-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno1",
          children: "1)"
        }), " Se guardarán hasta 10 eventos que hayan ocurrido cuando se perdió la conexión de red por puerto y, cuando haya más de 10 eventos, se eliminarán del registro en el orden en que ocurrieron."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno2",
          children: "2)"
        }), " Elija utilizar Input o Supervised input."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Las especificaciones del producto están sujetas a cambios sin previo aviso para mejorar el rendimiento."
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