"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2725"], {
81501: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_xpass_d_2_product_specifications_mdx_a34_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-xpass-d-2-product-specifications-mdx-a34.json
var site_docs_device_xpass_d_2_product_specifications_mdx_a34_namespaceObject = JSON.parse('{"id":"device/xpass_d2/product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","source":"@site/docs/device/xpass_d2/product-specifications.mdx","sourceDirName":"device/xpass_d2","slug":"/device/xpass_d2/product-specifications","permalink":"/docs/en/device/xpass_d2/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xpass_d2/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","keywords":["크리덴셜","일반","얼굴","저장 용량","인터페이스","전기 규격","제품 치수"],"isTranslationMissing":true},"sidebar":"xpassd2","previous":{"title":"설치하기","permalink":"/docs/en/device/xpass_d2/installation"},"next":{"title":"규제 인증 정보","permalink":"/docs/en/device/xpass_d2/regulatory-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/xpd2_specs.json
var xpd2_specs_namespaceObject = JSON.parse('{"y":{"z3":{"label":"크리덴셜","label_id":"specs.credentials","items":{"rfcard":{"label":"RF 카드","label_id":"specs.credentials.rfcard","value":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3<sup id=\'anno1_dest\'><a href=\'#anno1\'></a></sup>, FeliCa"},"rf_distance":{"label":"RF 인식 거리","label_id":"specs.credentials.rf_distance","value":"EM/MIFARE/DESFire: 50 mm, FeliCa: 30 mm","annotation_label":"anno2"},"mobile":{"label":"모바일","label_id":"specs.credentials.mobile","value":"NFC, BLE"}}},"ju":{"label":"일반","label_id":"specs.general","items":{"cpu":{"label":"CPU","label_id":"specs.general.cpu","value":"80 MHz"},"memory":{"label":"메모리","label_id":"specs.general.memory","value":"512 KB Flash + 160 KB RAM"},"crypto_chip":{"label":"크립토 칩","label_id":"specs.general.crypto_chip","value":true},"led_type":{"label":"LED","label_id":"specs.general.led_type","value":{"ko":"다중 색상","en":"Multi-color"}},"sound":{"label":"소리","label_id":"specs.general.sound","value":{"ko":"멀티톤 버저","en":"Multi-tone Buzzer"}},"operating_temp":{"label":"동작 온도","label_id":"specs.general.operating_temp","value":"-35 °C ~ 65 °C"},"storage_temp":{"label":"보관 온도","label_id":"specs.general.storage_temp","value":"-40 °C ~ 70 °C"},"operating_humidity":{"label":"동작 습도","label_id":"specs.general.operating_humidity","value":{"ko":"0 % ~ 95 %, 비응축","en":"0 % ~ 95 %, non-condensing"}},"storage_humidity":{"label":"보관 습도","label_id":"specs.general.storage_humidity","value":{"ko":"0 % ~ 95 %, 비응축","en":"0 % ~ 95 %, non-condensing"}},"ip_rating":{"label":"IP 등급","label_id":"specs.general.ip_rating","label_link":"../../reference/glossary#ip_rating","value":"IP65, IP67"},"ik_rating":{"label":"IK 등급","label_id":"specs.general.ik_rating","label_link":"../../reference/glossary#ik_rating","value":"IK08"},"certifications":{"label":"인증","label_id":"specs.general.certifications","value":"CE, UKCA, KC, FCC, IC, RCM, BIS, SIG, RoHS, REACH, WEEE"}}},"qO":{"label":"인터페이스","label_id":"specs.interface","items":{"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"1채널","en":"1 ch"}},"rs485_protocol":{"label":"RS-485 통신 프로토콜","label_id":"specs.interface.rs485_protocol","value":{"ko":"OSDP V2 호환","en":"OSDP V2 compliant"}},"wiegand":{"label":"Wiegand","label_id":"specs.interface.wiegand","value":{"ko":"1채널","en":"1 ch"}},"led":{"label":"LED","label_id":"specs.interface.led","value":{"ko":"2채널","en":"2 ch"}},"beep":{"label":"Beep","label_id":"specs.interface.beep","value":{"ko":"1채널","en":"1 ch"}},"tamper":{"label":"탬퍼","label_id":"specs.interface.tamper","value":true}}},"yp":{"label":"전기 규격","label_id":"specs.power","items":{"power":{"label":"전원","label_id":"specs.power.power","value":{"ko":["전압: 12 Vdc","전류: 최대 0.3 A"],"en":["Voltage: 12 Vdc","Current: Max. 0.3 A"]}},"led_beep_input_vih":{"label":"LED, Beep 입력 VIH","label_id":"specs.power.led_beep_input_vih","value":{"ko":["최소: 3 V","최대: 5 V"],"en":["Min.: 3 V","Max.: 5 V"]}},"led_beep_input_vil":{"label":"LED, Beep 입력 VIL","label_id":"specs.power.led_beep_input_vil","value":{"ko":"최대: 1 V","en":"Max.: 1 V"}},"led_beep_pullup":{"label":"LED, Beep 풀업 저항","label_id":"specs.power.led_beep_pullup","value":{"ko":"4.7 kΩ (입력 단자는 4.7 kΩ으로 풀업되어 있습니다.)","en":"4.7 kΩ (The input ports are pulled up with 4.7 kΩ)"}},"wiegand_voh":{"label":"Wiegand 출력 VOH","label_id":"specs.power.wiegand_voh","value":{"ko":"4.8 V 이상","en":"More than 4.8 V"}},"wiegand_vol":{"label":"Wiegand 출력 VOL","label_id":"specs.power.wiegand_vol","value":{"ko":"0.2 V 이하","en":"Less than 0.2 V"}},"wiegand_pullup":{"label":"Wiegand 출력 풀업 저항","label_id":"specs.power.wiegand_pullup","value":{"ko":"1 kΩ으로 내부 풀업","en":"Internally pulled up with 1 kΩ"}}}}}}')
;// CONCATENATED MODULE: ./docs/device/xpass_d2/product-specifications.mdx


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
  }, {Anno, Badge, Image, SpecSection} = _components;
  if (!Anno) _missingMdxReference("Anno", true);
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!SpecSection) _missingMdxReference("SpecSection", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다."
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: xpd2_specs_namespaceObject.y.z3
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: xpd2_specs_namespaceObject.y.ju
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: xpd2_specs_namespaceObject.y.qO
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: xpd2_specs_namespaceObject.y.yp
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "크기-및-무게",
      children: "크기 및 무게"
    }), "\n", (0,jsx_runtime.jsx)(Badge, {
      only: true,
      children: "XPD2-MDB"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-mdb-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(Badge, {
      only: true,
      children: "XPD2-GDB, XPD2-GKDB"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-gkdb-dimension.svg",
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