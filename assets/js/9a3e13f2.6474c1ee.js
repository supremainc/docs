"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["90682"], {
57516: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_inputmodule_product_specifications_mdx_9a3_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-inputmodule-product-specifications-mdx-9a3.json
var site_docs_device_inputmodule_product_specifications_mdx_9a3_namespaceObject = JSON.parse('{"id":"device/inputmodule/product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","source":"@site/docs/device/inputmodule/product-specifications.mdx","sourceDirName":"device/inputmodule","slug":"/device/inputmodule/product-specifications","permalink":"/docs/device/inputmodule/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/inputmodule/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","keywords":["일반","저장 용량","인터페이스","전기 규격","제품 치수"],"isTranslationMissing":false},"sidebar":"inputmodule","previous":{"title":"설치하기","permalink":"/docs/device/inputmodule/installation"},"next":{"title":"규제 인증 정보","permalink":"/docs/device/inputmodule/regulatory-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/im120_specs.json
var im120_specs_namespaceObject = JSON.parse('{"d":{"ju":{"label":"일반","label_id":"specs.general","items":{"modelName":{"label":"모델명","label_id":"specs.general.modelName","value":"IM-120"},"cpu":{"label":"CPU","label_id":"specs.general.cpu","value":"Cortex M3 72 MHz"},"memory":{"label":"메모리","label_id":"specs.general.memory","value":"512 KB Flash + 64 KB SRAM"},"led_type":{"label":"LED","label_id":"specs.general.led_type","type":"model","items":{"multiColor":{"label":"다중 색상","label_id":"specs.general.led_type.multiColor","value":["POWER - 1개","STATUS - 1개","RS-485 TX - 1개","RS-485 RX - 1개","SUPERVISED INPUT - 12개","RELAY - 2개","AUX IN - 2개","TAMPER - 1개"]}}},"operating_temp":{"label":"동작 온도","label_id":"specs.general.operating_temp","value":"-20 °C ~ 60 °C"},"storage_temp":{"label":"보관 온도","label_id":"specs.general.storage_temp","value":"-40 °C ~ 70 °C"},"operating_humidity":{"label":"동작 습도","label_id":"specs.general.operating_humidity","value":{"ko":"0 % ~ 95 %, 비응축","en":"0 % ~ 95 %, non-condensing"}},"storage_humidity":{"label":"보관 습도","label_id":"specs.general.storage_humidity","value":{"ko":"0 % ~ 95 %, 비응축","en":"0 % ~ 95 %, non-condensing"}},"certifications":{"label":"인증","label_id":"specs.general.certifications","value":"CE, UKCA, KC, FCC, RCM, RoHS, REACH, WEEE"}}},"IG":{"label":"저장 용량","label_id":"specs.storage","items":{"max_text_logs":{"label":"최대 텍스트 로그 수","label_id":"specs.storage.max_text_logs","value":{"ko":"포트당 10개","en":"10 ea per port"},"annotation_value":"anno1"}}},"qO":{"label":"인터페이스","label_id":"specs.interface","items":{"input":{"label":"Input","label_id":"specs.interface.input","value":{"ko":"12채널","en":"12 ch"},"annotation_value":"anno2"},"supervised":{"label":"Supervised 입력","label_id":"specs.interface.supervised","value":{"ko":"12채널<sup id=\'dupl\'><a href=\'#anno2\'></a></sup>","en":"12 ch<sup id=\'dupl\'><a href=\'#anno2\'></a></sup>"}},"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"1채널","en":"1 ch"}},"rs485_protocol":{"label":"RS-485 통신 프로토콜","label_id":"specs.interface.rs485_protocol","value":{"ko":"OSDP V2 호환","en":"OSDP V2 compliant"}},"relay":{"label":"릴레이","label_id":"specs.interface.relay","value":{"ko":"2개","en":"2 Relays"}},"auxInput":{"label":"AUX 입력","label_id":"specs.interface.auxInput","value":{"ko":"2채널 (AC POWER FAIL)","en":"2 ch (AC POWER FAIL)"}},"tamper":{"label":"탬퍼","label_id":"specs.interface.tamper","value":{"ko":"1채널","en":"1 ch"}}}},"yp":{"label":"전기 규격","label_id":"specs.power","items":{"power":{"label":"전원","label_id":"specs.power.power","value":{"ko":["전압/전류: 12 Vdc/최대 0.2 A","전압/전류: 24 Vdc/최대 0.1 A"],"en":["Voltage / Current: 12 Vdc / Max. 0.2 A","Voltage / Current: 24 Vdc / Max. 0.1 A"]}},"switch_input_vih":{"label":"스위치 입력 VIH","label_id":"specs.power.switch_input_vih","value":{"ko":"최대: 5 V (접점 출력)","en":"Max.: 5 V (Dry Contact)"}},"relay":{"label":"릴레이","label_id":"specs.power.relay","value":"5 A @ 30 VDC Resistive load"}}}}}')
;// CONCATENATED MODULE: ./docs/device/inputmodule/product-specifications.mdx


const frontMatter = {
	id: 'product-specifications',
	title: '제품 사양',
	description: '제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.',
	keywords: [
		'일반',
		'저장 용량',
		'인터페이스',
		'전기 규격',
		'제품 치수'
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
  "value": "크기 및 무게",
  "id": "크기-및-무게",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Anno, Image, SpecSection} = _components;
  if (!Anno) _missingMdxReference("Anno", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!SpecSection) _missingMdxReference("SpecSection", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다."
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: im120_specs_namespaceObject.d.ju
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: im120_specs_namespaceObject.d.IG
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: im120_specs_namespaceObject.d.qO
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: im120_specs_namespaceObject.d.yp
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "크기-및-무게",
      children: "크기 및 무게"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "단위: mm"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "치수 공차는 ±0.3 mm입니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/im120-dimension.svg",
      width: "90%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno1",
          children: "1)"
        }), " 네트워크 연결이 끊겼을 때 발생한 이벤트를 포트당 최대 10개까지 저장하며, 이벤트가 10개를 초과할 경우 먼저 발생한 이벤트 로그 순으로 삭제됩니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno2",
          children: "2)"
        }), " Input 또는 Supervised 입력 중 선택하여 사용할 수 있습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "제품 사양은 성능 개선을 위해 예고 없이 변경될 수 있습니다."
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