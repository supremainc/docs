"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41563"], {
71006: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_doorinterface_product_specifications_mdx_c60_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-doorinterface-product-specifications-mdx-c60.json
var site_docs_device_doorinterface_product_specifications_mdx_c60_namespaceObject = JSON.parse('{"id":"device/doorinterface/product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","source":"@site/docs/device/doorinterface/product-specifications.mdx","sourceDirName":"device/doorinterface","slug":"/device/doorinterface/product-specifications","permalink":"/docs/device/doorinterface/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/doorinterface/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","keywords":["일반","인터페이스","전기 규격","제품 치수"],"isTranslationMissing":false},"sidebar":"doorinterface","previous":{"title":"설치하기","permalink":"/docs/device/doorinterface/installation"},"next":{"title":"규제 인증 정보","permalink":"/docs/device/doorinterface/regulatory-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/di24_specs.json
var di24_specs_namespaceObject = JSON.parse('{"G":{"ju":{"label":"일반","label_id":"specs.general","items":{"modelName":{"label":"모델명","label_id":"specs.general.modelName","value":"DI-24"},"cpu":{"label":"CPU","label_id":"specs.general.cpu","value":{"ko":"1.2 GHz Single Core","en":"1.2 GHz Single Core","es":"1.2 GHz de un núcleo","ja":"1.2 GHz 1 コア"}},"memory":{"label":"메모리","label_id":"specs.general.memory","value":"4 GB Flash + 256 MB RAM"},"crypto_chip":{"label":"크립토 칩","label_id":"specs.general.crypto_chip","value":true},"led_type":{"label":"LED","label_id":"specs.general.led_type","value":{"ko":["POWER: 빨간색 단일 색상","STATUS: 다중 색상"],"en":["POWER: RED single-color","STATUS: Multi-color"],"es":["POWER: ROJO color único","STATUS: de varios colores"],"ja":["POWER：赤単色","STATUS：マルチカラー"]}},"operating_temp":{"label":"동작 온도","label_id":"specs.general.operating_temp","value":{"ko":"0 °C ~ 50 °C","en":"0 °C ~ 50 °C","es":"De 0 °C a 50 °C","ja":"0 °C ~ 50 °C"}},"storage_temp":{"label":"보관 온도","label_id":"specs.general.storage_temp","value":{"ko":"-40 °C ~ 70 °C","en":"-40 °C ~ 70 °C","es":"De -40 °C a 70 °C","ja":"-40 °C ~ 70 °C"}},"operating_humidity":{"label":"동작 습도","label_id":"specs.general.operating_humidity","value":{"ko":"0 % ~ 80 %, 비응축","en":"0 % ~ 80 %, non-condensing","es":"Del 0 % al 80 %, sin condensación","ja":"0 % ~ 80 %（結露なきこと）"}},"storage_humidity":{"label":"보관 습도","label_id":"specs.general.storage_humidity","value":{"ko":"0 % ~ 95 %, 비응축","en":"0 % ~ 95 %, non-condensing","es":"Del 0 % al 95 %, sin condensación","ja":"0 % ~ 95 %（結露なきこと）"}},"operating_condition":{"label":"동작 환경 조건","label_id":"specs.general.operating_condition","value":{"ko":"0 °C ~ 49 °C","en":"0 °C ~ 49 °C","es":"De 0 °C a 49 °C","ja":"0 °C ~ 49 °C"}},"certifications":{"label":"인증","label_id":"specs.general.certifications","value":{"ko":"CE, UKCA, KC, FCC, RCM, IC, RoHS, REACH, WEEE, EAC","en":"CE, UKCA, KC, FCC, RCM, IC, RoHS, REACH, WEEE, EAC","es":"CE, UKCA, KC, FCC, RCM, IC, RoHS, REACH, WEEE, EAC","ja":"CE、UKCA、KC、FCC、RCM、IC、RoHS、REACH、WEEE、EAC"}}}},"IG":{"label":"저장 용량","label_id":"specs.storage","items":{"max_text_logs":{"label":"최대 텍스트 로그 수","label_id":"specs.storage.max_text_logs","value":"400"}}},"qO":{"label":"인터페이스","label_id":"specs.interface","items":{"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"3채널","en":"3 ch","es":"3 canales","ja":"3 チャンネル"}},"rs485_protocol":{"label":"RS-485 통신 프로토콜","label_id":"specs.interface.rs485_protocol","value":{"ko":"OSDP V2 호환","en":"OSDP V2 compliant","es":"Compatible con OSDP V2","ja":"OSDP V2 準拠"}},"wiegand":{"label":"Wiegand","label_id":"specs.interface.wiegand","value":{"ko":"2채널","en":"2 ch","es":"2 canales","ja":"2 チャンネル"}},"relay":{"label":"릴레이","label_id":"specs.interface.relay","value":{"ko":"4개","en":"4 relays","es":"4 relés","ja":"4 リレー"}},"input":{"label":"Input","label_id":"specs.interface.input","value":{"ko":"6채널","en":"6 ch","es":"6 canales","ja":"6 チャンネル"},"annotation_value":"anno1"},"output":{"label":"Output","label_id":"specs.interface.output","value":{"ko":"6채널","en":"6 ch","es":"6 canales","ja":"6 チャンネル"}},"supervised":{"label":"Supervised 입력","label_id":"specs.interface.supervised","value":{"ko":"6채널<sup id=\'dupl\'><a href=\'#anno1\'></a></sup>","en":"6 ch<sup id=\'dupl\'><a href=\'#anno1\'></a></sup>","es":"6 canales<sup id=\'dupl\'><a href=\'#anno1\'></a></sup>","ja":"6 チャンネル<sup id=\'dupl\'><a href=\'#anno1\'></a></sup>"}},"auxInput":{"label":"AUX 입력","label_id":"specs.interface.auxInput","value":{"ko":"3채널 (AC POWER FAIL, Tamper, Fire 연결 지원)","en":"3 ch (AC POWER FAIL, Tamper, Fire)","es":"3 canales (FALLA DE ALIMENTACIÓN DE CA, seguro contra alteración [Tamper], incendio)","ja":"3 チャンネル（AC 電源の停止、タンパー、火災）"}}}},"yp":{"label":"전기 규격","label_id":"specs.power","items":{"power":{"label":"전원","label_id":"specs.power.power","type":"model","items":{"12vdc":{"label":"12 Vdc","value":{"ko":"전류: 최대 2.8 A","en":"Current: Max. 2.8 A","es":"Corriente: Máx. 2.8 A","ja":"電流：最大 2.8 A"}},"24vdc":{"label":"24 Vdc","value":{"ko":"전류: 최대 1.4 A","en":"Current: Max. 1.4 A","es":"Corriente: Máx. 1.4 A","ja":"電流：最大 1.4 A"}}}},"power_output":{"label":"전원 출력","label_id":"specs.power.power_output","type":"model","items":{"12vdc":{"label":"12 Vdc","value":{"ko":["리더: 최대 0.6 A (0.3 A x 2개)","락: 최대 1.2 A (0.6 A x 2개)"],"en":["Reader: Max. 0.6 A (0.3 A x 2)","Lock: Max. 1.2 A (0.6 A x 2)"],"es":["Lector: Máx. 0.6 A (0.3 A x 2)","Bloqueo: Máx. 1.2 A (0.6 A x 2)"],"ja":["リーダー：最大 0.6 A（0.3 A x 2）","ロック：最大 1.2 A（0.6 A x 2）"]}},"24vdc":{"label":"24 Vdc","value":{"ko":["리더: 최대 0.3 A (0.15 A x 2개)","락: 최대 0.6 A (0.3 A x 2개)"],"en":["Reader: Max. 0.3 A (0.15 A x 2)","Lock: Max. 0.6 A (0.3 A x 2)"],"es":["Lector: Máx. 0.3 A (0.15 A x 2)","Bloqueo: Máx. 0.6 A (0.3 A x 2)"],"ja":["リーダー：最大 0.3 A（0.15 A x 2）","ロック：最大 0.6 A（0.3 A x 2）"]}}}},"switch_input_vih":{"label":"스위치 입력 VIH","label_id":"specs.power.switch_input_vih","value":{"ko":["최소: 3 V","최대: 5 V"],"en":["Min.: 3 V","Max.: 5 V"],"es":["Mín.: 3 V","Máx.: 5 V"],"ja":["最小：3 V","最大：5 V"]}},"switch_input_vil":{"label":"스위치 입력 VIL","label_id":"specs.power.switch_input_vil","value":{"ko":"최대: 1 V","en":"Max.: 1 V","es":"Máx.: 1 V","ja":"最大：1 V"}},"relay":{"label":"릴레이","label_id":"specs.power.relay","value":{"ko":"5 A @ 30 VDC Resistive load","en":"5 A @ 30 VDC Resistive load","es":"Carga resistiva de 5 A a 30 VCC","ja":"5 A @ 30 VDC 抵抗負荷"}}}}}}')
;// CONCATENATED MODULE: ./docs/device/doorinterface/product-specifications.mdx


const frontMatter = {
	id: 'product-specifications',
	title: '제품 사양',
	description: '제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.',
	keywords: [
		'일반',
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
    hr: "hr",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Anno, Image, PageBreak, SpecSection} = _components;
  if (!Anno) _missingMdxReference("Anno", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!PageBreak) _missingMdxReference("PageBreak", true);
  if (!SpecSection) _missingMdxReference("SpecSection", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다."
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: di24_specs_namespaceObject.G.ju
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: di24_specs_namespaceObject.G.IG
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: di24_specs_namespaceObject.G.qO
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: di24_specs_namespaceObject.G.yp
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "크기-및-무게",
      children: "크기 및 무게"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "치수 공차는 ±0.3 mm입니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/di24-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno1",
          children: "1)"
        }), " Input 또는 Supervised 입력 중 선택하여 사용할 수 있습니다."]
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