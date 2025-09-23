"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9145"], {
77851: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_device_facestation_f_2_product_specifications_mdx_f8e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-facestation-f-2-product-specifications-mdx-f8e.json
var site_docs_device_facestation_f_2_product_specifications_mdx_f8e_namespaceObject = JSON.parse('{"id":"device/facestation_f2/product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","source":"@site/docs/device/facestation_f2/product-specifications.mdx","sourceDirName":"device/facestation_f2","slug":"/device/facestation_f2/product-specifications","permalink":"/docs/device/facestation_f2/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"제품 사양","description":"제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다.","keywords":["크리덴셜","일반","얼굴","저장 용량","인터페이스","전기 규격","제품 치수"],"isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"문제 해결","permalink":"/docs/device/facestation_f2/troubleshooting"},"next":{"title":"규제 인증 정보","permalink":"/docs/device/facestation_f2/regulatory-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./static/specs/fsf2_specs.json
var fsf2_specs_namespaceObject = JSON.parse('{"Z":{"K9":{"label":"크리덴셜","label_id":"specs.credentials","items":{"biometrics":{"label":"바이오 인식","label_id":"specs.credentials.biometrics","type":"biometric","items":{"face":{"label":"얼굴","label_id":"specs.credentials.biometrics.face","type":"face","items":{"auth_distance":{"label":"인증 거리","label_id":"specs.credentials.biometrics.face.auth_distance","value":"0.3 ~ 1.3 m","annotation_label":"anno1"},"auth_height":{"label":"인증 높이","label_id":"specs.credentials.biometrics.face.auth_height","value":"1.4 ~ 1.9 m"},"matching_speed":{"label":"매칭 속도","label_id":"specs.credentials.biometrics.face.matching_speed","value":{"ko":"0.5초 이내","en":"Within 0.5 seconds"}},"live_face_detection":{"label":"위조 얼굴 검출","label_id":"specs.credentials.biometrics.face.live_face_detection","value":true}}},"fingerprint":{"label":"지문","label_id":"specs.credentials.biometrics.fingerprint","badge":"FSF2-ODB","type":"fingerprint","items":{"image_dimension":{"label":"이미지 크기","label_id":"specs.credentials.biometrics.fingerprint.image_dimension","value":{"ko":"300 x 400 픽셀","en":"300 x 400 pixels"}},"resolution":{"label":"해상도","label_id":"specs.credentials.biometrics.fingerprint.resolution","value":"500 dpi"},"template":{"label":"템플릿","label_id":"specs.credentials.biometrics.fingerprint.template","value":"SUPREMA / ISO19794-2, ANSI-378"},"extractor_matcher":{"label":"추출 / 매치","label_id":"specs.credentials.biometrics.fingerprint.extractor_matcher","value":{"ko":"MINEX 인증 및 호환","en":"MINEX certified and compliant"}},"live_fingerprint_detection":{"label":"위조 지문 검출","label_id":"specs.credentials.biometrics.fingerprint.live_fingerprint_detection","value":{"ko":"지원 (SW 기반)","en":"Supported (SW-based)"}}}}}},"rfcard":{"label":"RF 카드","label_id":"specs.credentials.rfcard","type":"model","items":{"model1":{"label":"FSF2-DB","value":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3<sup id=\'anno2_dest\'><a href=\'#anno2\'></a></sup>, FeliCa","annotation_value":"anno2"},"model2":{"label":"FSF2-AB","value":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3<sup id=\'dupl\'><a href=\'#anno2\'></a></sup>, FeliCa, iCLASS SE/SR/Seos","annotation_value":"anno2"},"model3":{"label":"FSF2-ODB","value":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3<sup id=\'dupl\'><a href=\'#anno2\'></a></sup>, FeliCa","annotation_value":"anno2"}}},"rf_distance":{"label":"RF 인식 거리","label_id":"specs.credentials.rf_distance","type":"model","items":{"model1":{"label":"FSF2-DB<br/>FSF2-AB","value":"EM/MIFARE/DESFire/HID iCLASS: 50 mm, FeliCa/HID Prox: 30 mm"},"model2":{"label":"FSF2-ODB","value":"EM/MIFARE/DESFire: 50 mm, Felica: 30 mm"}},"annotation_label":"anno3"},"mobile":{"label":"모바일","label_id":"specs.credentials.mobile","value":"NFC, BLE"}}},"Cg":{"label":"일반","label_id":"specs.general","items":{"cpu":{"label":"CPU","label_id":"specs.general.cpu","value":"1.8 GHz Dual Core + 1.4 GHz Quad Core"},"memory":{"label":"메모리","label_id":"specs.general.memory","value":"16 GB Flash + 2 GB RAM"},"crypto_chip":{"label":"크립토 칩","label_id":"specs.general.crypto_chip","value":true},"lcd_type":{"label":"디스플레이","label_id":"specs.general.lcd_type","value":{"ko":"7\\" IPS 컬러 LCD","en":"7\\" color IPS LCD"}},"lcd_resolution":{"label":"화면 해상도","label_id":"specs.general.lcd_resolution","value":{"ko":"800 x 1280 픽셀","en":"800 x 1280 pixels","es":"800 x 1280 píxeles","jp":"800 x 1280 画素"}},"sound":{"label":"소리","label_id":"specs.general.sound","value":"16bit"},"operating_temp":{"label":"동작 온도","label_id":"specs.general.operating_temp","value":"-20 °C ~ 50 °C"},"storage_temp":{"label":"보관 온도","label_id":"specs.general.storage_temp","value":"-40 °C ~ 70 °C"},"operating_humidity":{"label":"동작 습도","label_id":"specs.general.operating_humidity","value":{"ko":"0 % ~ 80 %, 비응축","en":"0 % ~ 80 %, non-condensing"}},"storage_humidity":{"label":"보관 습도","label_id":"specs.general.storage_humidity","value":{"ko":"0 % ~ 90 %, 비응축","en":"0 % ~ 90 %, non-condensing"}},"camera":{"label":"카메라","label_id":"specs.general.camera","value":{"ko":["적외선: 2M 픽셀","비주얼: 2M 픽셀"],"en":["IR: 2M pixels","Visual: 2M pixels"]}},"ip_rating":{"label":"IP 등급","label_id":"specs.general.ip_rating","label_link":"../../reference/glossary#ip_rating","value":"IP65"},"certifications":{"label":"인증","label_id":"specs.general.certifications","value":"CE, UKCA, KC, FCC, IC, RCM, BIS, ANATEL, SIG, RoHS, REACH, WEEE"}}},"tO":{"label":"저장 용량","label_id":"specs.storage","items":{"max_users":{"label":"최대 사용자 수","label_id":"specs.storage.max_users","value":"100,000","annotation_value":"anno4"},"max_credentials_1n":{"label":"최대 크리덴셜 수 (1:N)","label_id":"specs.storage.max_credentials_1n","type":"model","items":{"model1":{"label":"FSF2-DB<br/>FSF2-AB","value":{"ko":["얼굴: 50,000"],"en":["Face: 50,000"]}},"model2":{"label":"FSF2-ODB","value":{"ko":["얼굴: 50,000","지문: 100,000"],"en":["Face: 50,000","Fingerprint: 100,000"]}}}},"max_credentials_1on1":{"label":"최대 크리덴셜 수 (1:1)","label_id":"specs.storage.max_credentials_1on1","type":"model","items":{"model1":{"label":"FSF2-DB<br/>FSF2-AB","value":{"ko":["얼굴: 100,000","카드: 100,000","PIN: 100,000"],"en":["Face: 100,000","Card: 100,000","PIN: 100,000"]}},"model2":{"label":"FSF2-ODB","value":{"ko":["얼굴: 100,000","지문: 100,000","카드: 100,000","PIN: 100,000"],"en":["Face: 100,000","Fingerprint: 100,000","Card: 100,000","PIN: 100,000"]}}}},"max_text_logs":{"label":"최대 텍스트 로그 수","label_id":"specs.storage.max_text_logs","value":"5,000,000"},"max_image_logs":{"label":"최대 이미지 로그 수","label_id":"specs.storage.max_image_logs","value":"50,000"}}},"w3":{"label":"인터페이스","label_id":"specs.interface","items":{"ethernet":{"label":"이더넷","label_id":"specs.interface.ethernet","value":{"ko":"지원 (10/100 Mbps, 자동 MDI/MDI-X)","en":"Supported (10/100 Mbps, auto MDI/MDI-X)"}},"network_protocol":{"label":"네트워크 프로토콜","label_id":"specs.interface.network_protocol","value":"TCP, UDP"},"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"1채널 마스터/슬레이브 (선택 가능)","en":"1 ch Master / Slave (Selectable)"}},"rs485_protocol":{"label":"RS-485 통신 프로토콜","label_id":"specs.interface.rs485_protocol","value":{"ko":"OSDP V2 호환","en":"OSDP V2 compliant"}},"wiegand":{"label":"Wiegand","label_id":"specs.interface.wiegand","value":{"ko":"1채널 입력, 1채널 출력 (선택 가능)","en":"1 ch Input, 1 ch Output (Selectable)"}},"input":{"label":"Input","label_id":"specs.interface.input","value":{"ko":"입력 2채널","en":"2 ch Inputs"}},"relay":{"label":"릴레이","label_id":"specs.interface.relay","value":{"ko":"1개","en":"1 Relay"}},"usb":{"label":"USB","label_id":"specs.interface.usb","value":"USB 2.0 (Host)"},"tamper":{"label":"탬퍼","label_id":"specs.interface.tamper","value":true}}},"qu":{"label":"전기 규격","label_id":"specs.power","items":{"power":{"label":"전원","label_id":"specs.power.power","value":{"ko":["전압/전류: 12 Vdc/최대 2.1 A","전압/전류: 24 Vdc/최대 1 A"],"en":["Voltage / Current: 12 Vdc / Max. 2.1 A","Voltage / Current: 24 Vdc / Max. 1 A"]}},"switch_input_vih":{"label":"스위치 입력 VIH","label_id":"specs.power.switch_input_vih","value":{"ko":["최소: 3 V","최대: 5 V"],"en":["Min.: 3 V","Max.: 5 V"]}},"switch_input_vil":{"label":"스위치 입력 VIL","label_id":"specs.power.switch_input_vil","value":{"ko":"최대: 1 V","en":"Max.: 1 V"}},"switch_pullup":{"label":"스위치 풀업 저항","label_id":"specs.power.switch_pullup","value":{"ko":"4.7 kΩ (입력 단자는 4.7 kΩ으로 풀업되어 있습니다.)","en":"4.7 kΩ (The input ports are pulled up with 4.7 kΩ)"}},"wiegand_voh":{"label":"Wiegand 출력 VOH","label_id":"specs.power.wiegand_voh","value":{"ko":"4.8 V 이상","en":"More than 4.8 V"}},"wiegand_vol":{"label":"Wiegand 출력 VOL","label_id":"specs.power.wiegand_vol","value":{"ko":"0.2 V 이하","en":"Less than 0.2 V"}},"wiegand_pullup":{"label":"Wiegand 출력 풀업 저항","label_id":"specs.power.wiegand_pullup","value":{"ko":"1 kΩ으로 내부 풀업","en":"Internally pulled up with 1 kΩ"}},"relay":{"label":"릴레이","label_id":"specs.power.relay","value":["2 A @ 30 VDC Resistive load","1 A @ 30 VDC Inductive load"]}}}}}')
;// CONCATENATED MODULE: ./docs/device/facestation_f2/product-specifications.mdx


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
}, {
  "value": "FSF2-ODB",
  "id": "fsf2-odb",
  "level": 3
}, {
  "value": "FSF2-DB, FSF2-AB",
  "id": "fsf2-db-fsf2-ab",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Anno, Image, SpecSection} = _components;
  if (!Anno) _missingMdxReference("Anno", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!SpecSection) _missingMdxReference("SpecSection", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "제품에 대한 크기, 기능, 성능 등 주요 사양 정보를 제공합니다."
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: fsf2_specs_namespaceObject.Z.K9
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: fsf2_specs_namespaceObject.Z.Cg
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: fsf2_specs_namespaceObject.Z.tO
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: fsf2_specs_namespaceObject.Z.w3
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: fsf2_specs_namespaceObject.Z.qu
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "크기-및-무게",
      children: "크기 및 무게"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fsf2-odb",
      children: "FSF2-ODB"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/fsf2-odb-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fsf2-db-fsf2-ab",
      children: "FSF2-DB, FSF2-AB"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/fsf2-dbadb-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno1",
          children: "1)"
        }), " 표기된 최소 얼굴 인증 거리는 제품의 기본 설정이며, 권장하는 얼굴 인증 거리는 0.5 ~ 1.3 m입니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno2",
          children: "2)"
        }), " DESFire EV2/EV3 카드는 DESFire EV1 카드와 하위 호환되므로, DESFire EV1 카드의 기능을 포함하여 CSN 및 스마트 카드 기능이 지원됩니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno3",
          children: "3)"
        }), " RF 인식 거리는 설치 환경에 따라 다를 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Anno, {
          id: "anno4",
          children: "4)"
        }), " 크리덴셜 없이 등록된 사용자 기준입니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "FaceStation F2(FSF2-DB, FSF2-AB)가 마스터 장치일 때 지문 센서가 있는 장치를 슬레이브로 연결하면 슬레이브 장치를 사용하여 지문을 인증할 수 있습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["최대 지문 크리덴셜 수 (1", ":N", "): 100,000"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "최대 지문 크리덴셜 수 (1:1): 100,000"
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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