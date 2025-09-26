"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["502"], {
6212: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_biolite_n_2_product_specifications_mdx_d67_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biolite-n-2-product-specifications-mdx-d67.json
var site_docs_device_biolite_n_2_product_specifications_mdx_d67_namespaceObject = JSON.parse('{"id":"device/biolite_n2/product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","source":"@site/docs/device/biolite_n2/product-specifications.mdx","sourceDirName":"device/biolite_n2","slug":"/device/biolite_n2/product-specifications","permalink":"/docs/en/device/biolite_n2/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biolite_n2/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","keywords":["크리덴셜","일반","얼굴","저장 용량","인터페이스","전기 규격","제품 치수"],"isTranslationMissing":true},"sidebar":"bioliten2","previous":{"title":"문제 해결","permalink":"/docs/en/device/biolite_n2/troubleshooting"},"next":{"title":"규제 인증 정보","permalink":"/docs/en/device/biolite_n2/regulatory-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/bln2_specs.json
var bln2_specs_namespaceObject = JSON.parse('{"M":{"z3":{"label":"크리덴셜","label_id":"specs.credentials","items":{"biometrics":{"label":"바이오 인식","label_id":"specs.credentials.biometrics","type":"biometric","items":{"fingerprint":{"label":"지문","label_id":"specs.credentials.biometrics.fingerprint","type":"fingerprint","items":{"image_dimension":{"label":"이미지 크기","label_id":"specs.credentials.biometrics.fingerprint.image_dimension","value":{"ko":"272 x 320 픽셀","en":"272 x 320 pixels"}},"image_bit_depth":{"label":"이미지 비트 심도","label_id":"specs.credentials.biometrics.fingerprint.image_bit_depth","value":{"ko":"8비트, 256 회색조","en":"8 bits, 256 gray scale"}},"resolution":{"label":"해상도","label_id":"specs.credentials.biometrics.fingerprint.resolution","value":"500 dpi"},"template":{"label":"템플릿","label_id":"specs.credentials.biometrics.fingerprint.template","value":"SUPREMA / ISO19794-2 / ANSI-378"},"extractor_matcher":{"label":"추출 / 매치","label_id":"specs.credentials.biometrics.fingerprint.extractor_matcher","value":{"ko":"MINEX 인증 및 호환","en":"MINEX certified and compliant"}},"live_fingerprint_detection":{"label":"위조 지문 검출","label_id":"specs.credentials.biometrics.fingerprint.live_fingerprint_detection","value":{"ko":"지원 (SW 기반)","en":"Supported (SW-based)"}}}}}},"rfcard":{"label":"RF 카드","label_id":"specs.credentials.rfcard","type":"model","items":{"model1":{"label":"BLN2-OD, BLN2-ODB","value":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3<sup id=\'anno1_dest\'><a href=\'#anno1\'></a></sup>, FeliCa","annotation_value":"anno1"},"model2":{"label":"BLN2-OA, BLN2-OAB,<br/>BLN2-PAB","value":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3<sup id=\'dupl\'><a href=\'#anno1\'></a></sup>, FeliCa, iCLASS SE/SR/Seos","annotation_value":"anno1"}}},"rf_distance":{"label":"RF 인식 거리","label_id":"specs.credentials.rf_distance","value":"MIFARE/DESFire/HID iCLASS: 50 mm, EM/HID Prox/FeliCa: 30 mm","annotation_label":"anno2"},"mobile":{"label":"모바일","label_id":"specs.credentials.mobile","type":"model","items":{"model1":{"label":"BLN2-ODB, BLN2-OAB, BLN2-PAB","value":"NFC, BLE"},"model2":{"label":"BLN2-OD, BLN2-OA","value":"NFC"}}}}},"ju":{"label":"일반","label_id":"specs.general","items":{"cpu":{"label":"CPU","label_id":"specs.general.cpu","value":"1.2 GHz"},"memory":{"label":"메모리","label_id":"specs.general.memory","value":"4 GB Flash + 64 Mb RAM"},"crypto_chip":{"label":"크립토 칩","label_id":"specs.general.crypto_chip","value":true},"lcd_type":{"label":"디스플레이","label_id":"specs.general.lcd_type","value":{"ko":"1.77\\" 컬러 TFT LCD","en":"1.77\\" color TFT LCD"}},"lcd_resolution":{"label":"화면 해상도","label_id":"specs.general.lcd_resolution","value":{"ko":"160 x 128 픽셀","en":"160 x 128 pixels","es":"160 x 128 píxeles","jp":"160 x 128 画素"}},"sound":{"label":"소리","label_id":"specs.general.sound","value":"16bit"},"operating_temp":{"label":"동작 온도","label_id":"specs.general.operating_temp","type":"model","items":{"model1":{"label":"BLN2-ODB, BLN2-OAB, BLN2-OD, BLN2-OA","value":"-20 °C ~ 50 °C"},"model2":{"label":"BLN2-PAB","value":"-10 °C ~ 50 °C"}}},"storage_temp":{"label":"보관 온도","label_id":"specs.general.storage_temp","type":"model","items":{"model1":{"label":"BLN2-ODB, BLN2-OAB, BLN2-OD, BLN2-OA","value":"-40 °C ~ 70 °C"},"model2":{"label":"BLN2-PAB","value":"-20 °C ~ 60 °C"}}},"operating_humidity":{"label":"동작 습도","label_id":"specs.general.operating_humidity","value":{"ko":"0 % ~ 80 %, 비응축","en":"0 % ~ 80 %, non-condensing"}},"storage_humidity":{"label":"보관 습도","label_id":"specs.general.storage_humidity","value":{"ko":"0 % ~ 90 %, 비응축","en":"0 % ~ 90 %, non-condensing"}},"ip_rating":{"label":"IP 등급","label_id":"specs.general.ip_rating","label_link":"../../reference/glossary#ip_rating","value":"IP67"},"certifications":{"label":"인증","label_id":"specs.general.certifications","value":"CE, UKCA, KC, FCC, IC, RCM, BIS, SIG, RoHS, REACH, WEEE"}}},"IG":{"label":"저장 용량","label_id":"specs.storage","items":{"max_users":{"label":"최대 사용자 수","label_id":"specs.storage.max_users","value":"10,000"},"max_credentials_1n":{"label":"최대 크리덴셜 수 (1:N)","label_id":"specs.storage.max_credentials_1n","value":{"ko":"지문: 10,000","en":"Fingerprint: 10,000"}},"max_credentials_1on1":{"label":"최대 크리덴셜 수 (1:1)","label_id":"specs.storage.max_credentials_1on1","value":{"ko":["지문: 10,000","카드: 10,000","PIN: 10,000"],"en":["Fingerprint: 10,000","Card: 10,000","PIN: 10,000"]}},"max_text_logs":{"label":"최대 텍스트 로그 수","label_id":"specs.storage.max_text_logs","value":"1,000,000"}}},"qO":{"label":"인터페이스","label_id":"specs.interface","items":{"ethernet":{"label":"이더넷","label_id":"specs.interface.ethernet","value":{"ko":"지원 (10/100 Mbps, 자동 MDI/MDI-X)","en":"Supported (10/100 Mbps, auto MDI/MDI-X)"}},"network_protocol":{"label":"네트워크 프로토콜","label_id":"specs.interface.network_protocol","value":"TCP, UDP"},"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"1채널 마스터/슬레이브 (선택 가능)","en":"1 ch Master / Slave (Selectable)"}},"rs485_protocol":{"label":"RS-485 통신 프로토콜","label_id":"specs.interface.rs485_protocol","value":{"ko":"OSDP V2 호환","en":"OSDP V2 compliant"}},"wiegand":{"label":"Wiegand","label_id":"specs.interface.wiegand","value":{"ko":"1채널 입력/출력 (선택 가능)","en":"1 ch Input / Output (Selectable)"}},"input":{"label":"Input","label_id":"specs.interface.input","value":{"ko":"입력 2채널","en":"2 ch Inputs"}},"relay":{"label":"릴레이","label_id":"specs.interface.relay","value":{"ko":"1개","en":"1 Relay"}},"tamper":{"label":"탬퍼","label_id":"specs.interface.tamper","value":true}}},"yp":{"label":"전기 규격","label_id":"specs.power","items":{"power":{"label":"전원","label_id":"specs.power.power","value":{"ko":"전압/전류: 12 Vdc / 최대 0.4 A","en":"Voltage/Current: 12 Vdc / Max. 0.4 A"}},"switch_input_vih":{"label":"스위치 입력 VIH","label_id":"specs.power.switch_input_vih","value":{"ko":["최소: 3 V","최대: 5 V"],"en":["Min.: 3 V","Max.: 5 V"]}},"switch_input_vil":{"label":"스위치 입력 VIL","label_id":"specs.power.switch_input_vil","value":{"ko":"최대: 1 V","en":"Max.: 1 V"}},"switch_pullup":{"label":"스위치 풀업 저항","label_id":"specs.power.switch_pullup","value":{"ko":"4.7 kΩ (입력 단자는 4.7 kΩ으로 풀업되어 있습니다.)","en":"4.7 kΩ (The input ports are pulled up with 4.7 kΩ)"}},"wiegand_voh":{"label":"Wiegand 출력 VOH","label_id":"specs.power.wiegand_voh","value":{"ko":"4.8 V 이상","en":"More than 4.8 V"}},"wiegand_vol":{"label":"Wiegand 출력 VOL","label_id":"specs.power.wiegand_vol","value":{"ko":"0.2 V 이하","en":"Less than 0.2 V"}},"wiegand_pullup":{"label":"Wiegand 출력 풀업 저항","label_id":"specs.power.wiegand_pullup","value":{"ko":"1 kΩ으로 내부 풀업","en":"Internally pulled up with 1 kΩ"}},"relay":{"label":"릴레이","label_id":"specs.power.relay","value":["2 A @ 30 VDC Resistive load","1 A @ 30 VDC Inductive load"]}}}}}')
;// CONCATENATED MODULE: ./docs/device/biolite_n2/product-specifications.mdx


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
	isTranslationMissing: true
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
      data: bln2_specs_namespaceObject.M.z3
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: bln2_specs_namespaceObject.M.ju
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: bln2_specs_namespaceObject.M.IG
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: bln2_specs_namespaceObject.M.qO
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: bln2_specs_namespaceObject.M.yp
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "크기-및-무게",
      children: "크기 및 무게"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/bln2-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno1",
          children: "1)"
        }), " DESFire EV2/EV3 카드는 DESFire EV1 카드와 하위 호환되므로, DESFire EV1 카드의 기능을 포함하여 CSN 및 스마트 카드 기능이 지원됩니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno2",
          children: "2)"
        }), " RF 인식 거리는 설치 환경에 따라 다를 수 있습니다."]
      })]
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