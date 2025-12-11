"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["30823"], {
50911: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_xpass_s_2_product_specifications_mdx_e4c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-xpass-s-2-product-specifications-mdx-e4c.json
var site_docs_device_xpass_s_2_product_specifications_mdx_e4c_namespaceObject = JSON.parse('{"id":"device/xpass_s2/product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","source":"@site/docs/device/xpass_s2/product-specifications.mdx","sourceDirName":"device/xpass_s2","slug":"/device/xpass_s2/product-specifications","permalink":"/docs/device/xpass_s2/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xpass_s2/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","keywords":["크리덴셜","일반","얼굴","저장 용량","인터페이스","전기 규격","제품 치수"],"isTranslationMissing":false},"sidebar":"xpasss2","previous":{"title":"설치하기","permalink":"/docs/device/xpass_s2/installation"},"next":{"title":"규제 인증 정보","permalink":"/docs/device/xpass_s2/regulatory-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/xps2_specs.json
var xps2_specs_namespaceObject = JSON.parse('{"p":{"z3":{"label":"크리덴셜","label_id":"specs.credentials","items":{"rfcard":{"label":"RF 카드","label_id":"specs.credentials.rfcard","value":"13.56MHz MIFARE, MIFARE Plus, DESFire/EV1 (CSN), FeliCa, ISO14443A, ISO15693"},"rf_distance":{"label":"RF 인식 거리","label_id":"specs.credentials.rf_distance","value":"MIFARE/DESFire: 50 mm, FeliCa: 30 mm","annotation_label":"anno1"},"multi_controller":{"label":"다중 컨트롤러","label_id":"specs.credentials.multi_controller","value":true}}},"ju":{"label":"일반","label_id":"specs.general","items":{"cpu":{"label":"CPU","label_id":"specs.general.cpu","value":"533 MHz DSP"},"memory":{"label":"메모리","label_id":"specs.general.memory","value":"16 MB RAM + 16 MB Flash"},"led_type":{"label":"LED","label_id":"specs.general.led_type","value":{"ko":"다중 색상","en":"Multi-color"}},"sound":{"label":"소리","label_id":"specs.general.sound","value":{"ko":"멀티톤 버저","en":"Multi-tone Buzzer"}},"operating_temp":{"label":"동작 온도","label_id":"specs.general.operating_temp","value":"-35 °C ~ 65 °C"},"storage_temp":{"label":"보관 온도","label_id":"specs.general.storage_temp","value":"-40 °C ~ 70 °C"},"operating_humidity":{"label":"동작 습도","label_id":"specs.general.operating_humidity","value":{"ko":"0 % ~ 80 %, 비응축","en":"0 % ~ 80 %, non-condensing"}},"storage_humidity":{"label":"보관 습도","label_id":"specs.general.storage_humidity","value":{"ko":"0 % ~ 90 %, 비응축","en":"0 % ~ 90 %, non-condensing"}},"ip_rating":{"label":"IP 등급","label_id":"specs.general.ip_rating","label_link":"../../reference/glossary#ip_rating","value":"IP65"},"certifications":{"label":"인증","label_id":"specs.general.certifications","value":"CE, UKCA, KC, FCC, BIS, RoHS, REACH, WEEE"}}},"IG":{"label":"저장 용량","label_id":"specs.storage","items":{"max_users":{"label":"최대 사용자 수","label_id":"specs.storage.max_users","value":"50,000"},"max_text_logs":{"label":"최대 텍스트 로그 수","label_id":"specs.storage.max_text_logs","value":"100,000"}}},"qO":{"label":"인터페이스","label_id":"specs.interface","items":{"ethernet":{"label":"이더넷","label_id":"specs.interface.ethernet","value":{"ko":"지원 (10/100 Mbps, 자동 MDI/MDI-X)","en":"Supported (10/100 Mbps, auto MDI/MDI-X)"}},"network_protocol":{"label":"네트워크 프로토콜","label_id":"specs.interface.network_protocol","value":"TCP, UDP"},"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"1채널 마스터/슬레이브 (선택 가능)","en":"1 ch Master / Slave (Selectable)"}},"rs485_protocol":{"label":"RS-485 통신 프로토콜","label_id":"specs.interface.rs485_protocol","value":{"ko":"OSDP V2 호환","en":"OSDP V2 compliant"}},"wiegand":{"label":"Wiegand","label_id":"specs.interface.wiegand","value":{"ko":"1채널 입력/출력 (선택 가능)","en":"1 ch Input / Output (Selectable)"}},"input":{"label":"Input","label_id":"specs.interface.input","value":{"ko":"입력 2채널","en":"2 ch Inputs"}},"relay":{"label":"릴레이","label_id":"specs.interface.relay","value":{"ko":"1개 (전압: 최대 24 Vdc / 전류: 0.5 A, 최대 1.0 A)","en":"1 relay (Voltage: Max. 24 Vdc / Current: Typ. 0.5 A, Max. 1.0 A)"}},"tamper":{"label":"탬퍼","label_id":"specs.interface.tamper","value":true}}},"yp":{"label":"전기 규격","label_id":"specs.power","items":{"power":{"label":"전원","label_id":"specs.power.power","type":"model","items":{"12vdc":{"label":"12 Vdc","value":{"ko":"전류: 최대 0.4 A","en":"Current: Max. 0.4 A"}}}}}}}}')
;// CONCATENATED MODULE: ./docs/device/xpass_s2/product-specifications.mdx


const frontMatter = {
	id: 'product-specifications',
	title: '제품 사양',
	description: '제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.',
	keywords: [
		'크리덴셜',
		'일반',
		'얼굴',
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

/*크리덴셜*/
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
      children: "제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다."
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: xps2_specs_namespaceObject.p.z3
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: xps2_specs_namespaceObject.p.ju
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: xps2_specs_namespaceObject.p.IG
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: xps2_specs_namespaceObject.p.qO
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: xps2_specs_namespaceObject.p.yp
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "크기-및-무게",
      children: "크기 및 무게"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xps2-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno1",
          children: "1)"
        }), " RF 인식 거리는 설치 환경에 따라 다를 수 있습니다."]
      })
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