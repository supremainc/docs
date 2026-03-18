"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["26984"], {
30315: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_reference_compares_finger_rfid_devices_funcs_mdx_385_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-reference-compares-finger-rfid-devices-funcs-mdx-385.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_reference_compares_finger_rfid_devices_funcs_mdx_385_namespaceObject = JSON.parse('{"id":"reference/compares/finger-rfid-devices-funcs","title":"Compare Features","description":"🔶: Support may vary depending on the product model.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/compares/finger-rfid-devices-funcs.mdx","sourceDirName":"reference/compares","slug":"/reference/compares/finger-rfid-devices-funcs","permalink":"/docs/en/reference/compares/finger-rfid-devices-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/reference/compares/finger-rfid-devices-funcs.mdx","tags":[],"version":"current","frontMatter":{"id":"finger-rfid-devices-funcs","title":"Compare Features","hide_table_of_contents":true,"isTranslationMissing":false},"sidebar":"reference","previous":{"title":"Compare Specifications","permalink":"/docs/en/reference/compares/rfid-devices-specs"},"next":{"title":"Compare Specifications","permalink":"/docs/en/reference/compares/finger-rfid-devices-specs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./src/components/CompareTable/finger-rfid-device-functions.json
var finger_rfid_device_functions_namespaceObject = JSON.parse('[{"category":"credential","function":"face","BioEntry R2":false,"XPass D2":false},{"category":"credential","function":"fingerprint","BioEntry R2":true,"XPass D2":false},{"category":"credential","function":"rfidcard","BioEntry R2":true,"XPass D2":true},{"category":"credential","function":"mobile","BioEntry R2":true,"XPass D2":true},{"category":"credential","function":"pin","BioEntry R2":false,"XPass D2":"🔶"},{"category":"credential","function":"sckeypad","BioEntry R2":false,"XPass D2":false},{"category":"credential","function":"qr","BioEntry R2":false,"XPass D2":false},{"category":"basic","function":"wd","BioEntry R2":false,"XPass D2":true},{"category":"basic","function":"breakprevent","BioEntry R2":false,"XPass D2":true},{"category":"basic","function":"credential-auth","BioEntry R2":false,"XPass D2":false},{"category":"basic","function":"display","BioEntry R2":false,"XPass D2":false},{"category":"basic","function":"keypad","BioEntry R2":false,"XPass D2":"🔶"},{"category":"basic","function":"tcp-ip","BioEntry R2":false,"XPass D2":false},{"category":"basic","function":"wifi","BioEntry R2":false,"XPass D2":false},{"category":"basic","function":"rs485","BioEntry R2":true,"XPass D2":true},{"category":"basic","function":"wiegand","BioEntry R2":false,"XPass D2":true},{"category":"basic","function":"tamper","BioEntry R2":true,"XPass D2":true},{"category":"advanced","function":"image-log","BioEntry R2":false,"XPass D2":false},{"category":"advanced","function":"fake-fingerprint-detection","BioEntry R2":false,"XPass D2":false},{"category":"advanced","function":"fake-face-detection","BioEntry R2":false,"XPass D2":false},{"category":"advanced","function":"face-detection","BioEntry R2":false,"XPass D2":false},{"category":"advanced","function":"intercom","BioEntry R2":false,"XPass D2":false},{"category":"advanced","function":"poe","BioEntry R2":false,"XPass D2":false},{"category":"advanced","function":"mullion-type","BioEntry R2":true,"XPass D2":true},{"category":"advanced","function":"gang-box-type","BioEntry R2":false,"XPass D2":true},{"category":"advanced","function":"multi-card-reading","BioEntry R2":true,"XPass D2":true}]')
// EXTERNAL MODULE: ./src/components/CompareTable/index.js + 2 modules
var CompareTable = __webpack_require__(49472);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/reference/compares/finger-rfid-devices-funcs.mdx


const frontMatter = {
	id: 'finger-rfid-devices-funcs',
	title: 'Compare Features',
	hide_table_of_contents: true,
	isTranslationMissing: false
};
const contentTitle = 'Compare Fingerprint & RFID Reader Features';

const assets = {

};





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "compare-fingerprint--rfid-reader-features",
        children: "Compare Fingerprint & RFID Reader Features"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "🔶: Support may vary depending on the product model."
      })
    }), "\n", (0,jsx_runtime.jsx)(CompareTable/* .RenderTableFuncs */.o, {
      data: finger_rfid_device_functions_namespaceObject
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



}),
49472: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ RenderTableFuncs),
  p: () => (/* binding */ RenderTableSpecs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/tabulator-tables/dist/js/tabulator_esm.mjs
var tabulator_esm = __webpack_require__(52382);
// EXTERNAL MODULE: ./node_modules/tabulator-tables/dist/css/tabulator.min.css
var tabulator_min = __webpack_require__(80990);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(13341);
;// CONCATENATED MODULE: ./src/components/CompareTable/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"container":"container_tceN","tableContainerBlock":"tableContainerBlock_Iduk","tableContainer":"tableContainer_BeFC","subtitle":"subtitle_I2lI"});
;// CONCATENATED MODULE: ./src/components/CompareTable/resources.json
var resources_namespaceObject = JSON.parse('{"ko":{"fingerprint_title":"지문 인증 장치 비교","main_function":"주요 기능","main_function_compare":"주요 기능 비교","main_function_compare_note":"🔶: 제품 세부 모델에 따라 지원 여부가 다를 수 있습니다.","product_specs":"제품 사양","product_specs_compare":"제품 사양 비교","credential":"크리덴셜","face":"얼굴","fingerprint":"지문","rfid":"RFID","rfidcard":"RFID 카드","mobile":"모바일 카드","pin":"PIN","sckeypad":"스크램블 키패드(PIN)","qr":"QR/바코드","basic":"기본","wd":"방수 방진","breakprevent":"파손 방지","credential-auth":"크리덴셜 인증","Memory":"메모리","display":"디스플레이","keypad":"키패드","tcp-ip":"TCP/IP","wifi":"Wi-Fi","rs485":"RS-485","rs485-protocol":"RS-485 통신 프로토콜","wiegand":"Wiegand","tamper":"탬퍼","advanced":"고급","image-log":"이미지 로그","fake-fingerprint-detection":"위조 지문 검출","fake-face-detection":"위조 얼굴 검출","face-detection":"얼굴 검출","intercom":"인터폰","poe":"PoE","poePlus":"PoE+","mullion-type":"멀리온 타입","gang-box-type":"갱 박스 타입","multi-card-reading":"멀티 카드 읽기","rfoption":"RF 옵션","protectlevel":"보호 등급","template":"템플릿","detection":"추출 / 매치","supportExcept":"지원, 별도의 장치 라이선스가 필요합니다.","supportAdd":"지원, 더 다양한 QR/바코드 인증을 사용하려면 Camera QR 라이선스가 필요합니다.","minex":"MINEX 인증 및 호환","supportSW":"지원 (SW 기반)","supportSWHW":"지원 (HW + SW 기반)","storage":"저장 용량","maxUser":"최대 사용자 수","maxCred1onN":"최대 크리덴셜 수(1:N)","finger100":"지문: 100,000","finger20":"지문: 20,000","finger10":"지문: 10,000","finger5":"지문: 5,000","maxCred1on1":"최대 크리덴셜 수(1:1)","maxCard":"최대 카드 수","cred500":"지문: 500,000 / 카드: 500,000 / PIN: 500,000","cred2t500":"지문: 500,000 / 카드: 500,000","cred10":"지문: 10,000 / 카드: 10,000 / PIN: 10,000","cred2t10":"지문: 10,000 / 카드: 10,000","cred5":"지문: 5,000 / 카드: 5,000 / PIN: 5,000","face4finger10":"얼굴: 4,000 / 지문: 10,000*","face30card500pin500finger500":"얼굴: 30,000 / 카드: 500,000 / PIN: 500,000 / 지문: 500,000*","face4finger100":"얼굴: 4,000 / 지문: 100,000*","face4finger30":"얼굴: 4,000 / 지문: 30,000*","face50finger100":"얼굴: 50,000 / 지문: 100,000*","face50finger100none":"얼굴: 50,000 / 지문: 100,000","face30card100":"얼굴: 30,000 / 카드: 100,000","face30card30pin30finger100":"얼굴: 30,000 / 카드: 30,000 / PIN: 30,000 / 지문: 100,000*","face30card30pin30finger30":"얼굴: 30,000 / 카드: 30,000 / PIN: 30,000 / 지문: 30,000*","face100card100pin100finger100":"얼굴: 100,000 / 카드: 100,000 / PIN: 100,000 / 지문: 100,000*","face100card100pin100finger100none":"얼굴: 100,000 / 카드: 100,000 / PIN: 100,000 / 지문: 100,000","card500pin500":"카드: 500,000 / PIN: 500,000","card200pin200":"카드: 200,000 / PIN: 200,000","card200":"카드: 200,000","card50":"카드: 50,000","card40":"카드: 40,000","maxTextLog":"최대 텍스트 로그 수","maxImageLog":"최대 이미지 로그 수","port10":"포트당 10개","general":"일반","cryptochip":"크립토 칩","resolution":"화면 해상도","800x400":"800 x 400 픽셀","800x480":"800 x 480 픽셀","800x1280":"800 x 1280 픽셀","720x1280":"720 x 1280 픽셀","480x854":"480 x 854 픽셀","480x800":"480 x 800 픽셀","320x240":"320 x 240 픽셀","220x176":"220 x 176 픽셀","160x128":"160 x 128 픽셀","128x64":"128 x 64 픽셀","multiColor":"다중 색상","pRedsMulti":"POWER: 빨간색 단일 색상, STATUS: 다중 색상","sound":"소리","echoCancle":"24 bit/Voice DSP (에코 제거)","multiToneBuzzer":"멀티톤 버저","operating-temperature":"동작 온도","operating-temperature-xpq2":"DC 전원: -20℃ ~ 60℃<br/>PoE 전원: -20℃ ~ 50℃","storage-temperature":"보관 온도","operating-humidity":"동작 습도","operating-humidity-spec":"0% ~ 80%, 비응축","operating-humidity-spec95":"0% ~ 95%, 비응축","storage-humidity":"보관 습도","storage-humidity-spec":"0% ~ 90%, 비응축","storage-humidity-spec95":"0% ~ 95%, 비응축","weight":"무게","d440b89":"장치: 440g, 브래킷: 89g (와셔 및 볼트 포함)","d440b130":"장치: 440g, 브래킷: 130g (와셔 및 스크류 포함)","d429b142":"장치: 429g, 브래킷: 142g (와셔 및 볼트 포함)","d280b61":"장치: 280g, 브래킷: 61g (와셔 및 볼트 포함)","d255b57":"장치: 255g, 브래킷: 57g (와셔 및 볼트 포함)","d251b43":"장치: 251g, 브래킷: 43g (와셔 및 볼트 포함)","d162b39":"장치: 162g, 브래킷: 39g (와셔 및 볼트 포함)","d375b86":"장치: 375g, 브래킷: 86g (와셔 및 볼트 포함)","d242b59":"장치: 242g, 브래킷: 59g (와셔 및 볼트 포함)","d555b74":"장치: 555g, 브래킷: 74g (와셔 및 볼트 포함)","d296b41":"장치: 296g, 브래킷: 41g (와셔 및 볼트 포함)","d585b181":"장치: 585g, 브래킷: 181g (와셔 및 볼트 포함)","d670b205":"장치: 670g, 브래킷: 205g (와셔 및 볼트 포함)","d370b90":"장치: 370g, 브래킷: 90g (와셔 및 볼트 포함)","d380b90":"장치: 380g, 브래킷: 90g (와셔 및 볼트 포함)","d283b36":"장치: 283g, 브래킷: 36g","d291b36":"장치: 291g, 브래킷: 36g","d142b27":"장치: 142g, 브래킷: 27g (와셔 및 볼트 포함)","d107b43":"장치: 107g, 브래킷: 43g (와셔 및 볼트 포함)","d136b48":"장치: 136g, 브래킷: 48g (와셔 및 볼트 포함)","d144b30":"장치: 144g, 브래킷: 30g (와셔 및 볼트 포함)","d213b40":"장치: 213g, 브래킷: 40g (와셔 및 볼트 포함)","d220b52":"장치: 220g, 브래킷: 52g (와셔 및 볼트 포함)","d235b52":"장치: 235g, 브래킷: 52g (와셔 및 볼트 포함)","d343b88":"장치: 343g, 브래킷: 88g (와셔 및 볼트 포함)","d280b67":"장치: 280g, 브래킷: 67g (와셔 및 볼트 포함)","d158b39":"장치: 158g, 브래킷: 39g (와셔 및 볼트 포함)","d117b30":"장치: 117g, 브래킷: 30g (와셔 및 볼트 포함)","d140b52":"장치: 140g, 브래킷: 52g (와셔 및 볼트 포함)","d145b52":"장치: 145g, 브래킷: 52g (와셔 및 볼트 포함)","dimension":"치수 (WxHxD, mm)","dim-fsf2odb":"119.8 x 268.3 x 49.6 (하단) / 23.5 (상단)","dim-bs2":"142 x 144 x 45 (하단) / 38 (상단)","dim-bs2a":"142 x 144 x 45 (하단) / 37.8 (상단)","dim-bsl2":"70.9 x 200.9 x 44.3 (하단) / 34.2 (상단)","dim-bln2":"58 x 190 x 44 (하단) / 34.6 (상단)","dim-bew2":"50 x 172 x 43.4 (하단) / 38.1 (상단)","dim-xs2":"82 x 208.5 x 53 (하단) / 25.9 (상단)","interface":"인터페이스","ethernet":"이더넷","ethernet-spec":"10/100 Mbps, 자동 MDI/MDI-X","ethernet-spec1000":"10/100/1000 Mbps, 자동 MDI/MDI-X","networkprotocol":"네트워크 프로토콜","1chmasterslave":"1채널 마스터/슬레이브 (선택 가능)","1chslave":"1채널 슬레이브","osdpv2":"OSDP V2 호환","1chin1chout":"1채널 입력, 1채널 출력","1chin1choutopt1":"1채널 입력/출력 (선택 가능)","1ch":"1채널","2chinput":"2채널 입력","2chinout":"2채널 입력, 2채널 출력","3chinput":"3채널 입력","4chinput":"4채널 입력","5chinput":"5채널 입력","6chinput":"6채널 입력","8chinput":"8채널 입력","6chAsterisk":"6채널**","8chAsterisk":"8채널**","12chAsterisk":"12채널**","12chinput":"12채널 입력","6chinoutput":"6채널","8chinoutput":"8채널","12chinoutput":"12채널","3chrs485":"3채널","4chrs485":"4채널","5chrs485":"5채널","2chwiegand":"2채널","4chwiegand":"4채널","SupervisedInput":"Supervised 입력","4relay":"4 릴레이","12relay":"12 릴레이","relay":"릴레이","1relay":"1 릴레이","2relay":"2 릴레이","optional":"선택 사항","ieee8023af":"IEEE 802.3af 호환","ieee8023at":"IEEE 802.3at (PoE+) 호환","usb2firmwareup":"USB 2.0 (Type C), 펌웨어 업그레이드만 지원","sdcard":"SD 카드","microSD":"microSD 카드 (최대 32 GB)","AUXInput":"AUX 입력","2chAcpowerfail":"2채널 (AC POWER FAIL)","2chDry":"2채널 (스위치 접점)","2chAcpowerfailTamper":"2채널 (AC POWER FAIL, 탬퍼 연결 지원)","3chAcpowerfailTamperFire":"3채널 (AC POWER FAIL, Tamper, Fire 연결 지원)","SAMSlot":"SAM 카드 슬롯","electric":"전기 규격","power":"전원","p12ve1a":"전압: 12Vdc<br/>전류: 최대 1A","p12ve_3a":"전압: 12Vdc<br/>전류: 최대 3A","p12ve_3_1a":"전압: 12Vdc<br/>전류: 최대 3.1A","p12ve8a":"전압: 12Vdc<br/>전류: 최대 0.8A","p12ve2_8a24v1_4a":"전압: 12Vdc<br/>전류: 최대 2.8A<br/>전압: 24Vdc<br/>전류: 최대 1.4A","p12ve8a24v4a":"전압: 12Vdc<br/>전류: 최대 0.8A<br/>전압: 24Vdc<br/>전류: 최대 0.4A","p12ve8a24v5a":"전압: 12Vdc<br/>전류: 최대 0.8A<br/>전압: 24Vdc<br/>전류: 최대 0.5A","p12ve5a24v3a":"전압: 12Vdc<br/>전류: 최대 0.5A<br/>전압: 24Vdc<br/>전류: 최대 0.3A","p12ve6a":"전압: 12Vdc<br/>전류: 최대 0.6A","p12ve5a":"전압: 12Vdc<br/>전류: 최대 0.5A","p12ve4a":"전압: 12Vdc<br/>전류: 최대 0.4A","p12ve3a":"전압: 12Vdc<br/>전류: 최대 0.3A","p12ve2a":"전압: 12Vdc<br/>전류: 최대 0.2A","p24v1_2a":"전압: 24Vdc<br/>전류: 최대 1.2A","p12v2_1a24v1a":"전압: 12Vdc<br/>전류: 최대 2.1A<br/>전압: 24Vdc<br/>전류: 최대 1A","p12v0_2a24v0_1a":"전압: 12Vdc<br/>전류: 최대 0.2A<br/>전압: 24Vdc<br/>전류: 최대 0.1A","p12v1a24v0_7a":"전압: 12Vdc<br/>전류: 최대 1A<br/>전압: 24Vdc<br/>전류: 최대 0.7A","p12v1a24v0_6a":"전압: 12Vdc<br/>전류: 최대 1A<br/>전압: 24Vdc<br/>전류: 최대 0.6A","p12v0_5a24v0_3a":"전압: 12Vdc<br/>DC OUT 미사용 시 전류: 최대 0.5A<br/>DC OUT 사용 시 전류: 최대 2.6A<br/>전압: 24Vdc<br/>DC OUT 미사용 시 전류: 최대 0.3A<br/>DC OUT 사용 시 전류: 최대 1.4A"},"en":{"fingerprint_title":"Compare Fingerprint Recognition Devices","main_function":"Main Features","main_function_compare":"Compare main features","main_function_compare_note":"🔶: Support may vary depending on the specific product model.","product_specs":"Product Specifications","product_specs_compare":"Compare product specifications","credential":"Credential","face":"Face","fingerprint":"Fingerprint","rfid":"RFID","rfidcard":"RFID Card","mobile":"Mobile Card","pin":"PIN","sckeypad":"Scramble Keypad (PIN)","qr":"QR/Barcode","basic":"Basic","wd":"Ingress Protection","breakprevent":"Vandal Proof","credential-auth":"Credential Authentication","Memory":"Memory","display":"Display","keypad":"Keypad","tcp-ip":"TCP/IP","wifi":"Wi-Fi","rs485":"RS-485","rs485-protocol":"RS-485 Communication Protocol","wiegand":"Wiegand","tamper":"Tamper","advanced":"Advanced","image-log":"Image Log","fake-fingerprint-detection":"Live Fingerprint Detection","fake-face-detection":"Live Face Detection","face-detection":"Face Detection","intercom":"Intercom","poe":"PoE","poePlus":"PoE+","mullion-type":"Mullion Type","gang-box-type":"Gang Box Type","multi-card-reading":"Multi Card Reading","rfoption":"RF Option","protectlevel":"Protection","template":"Template","detection":"Extractor / Matcher","supportExcept":"Supported, requires a separate license.","supportAdd":"Supported, Camera QR license is required to use more diverse QR/barcode authentication.","minex":"MINEX certified and compatible","supportSW":"Supported (SW-based)","supportSWHW":"Supported (HW + SW based)","storage":"Capacity","maxUser":"Max. User","maxCred1onN":"Max. Credential (1:N)","finger100":"Fingerprint: 100,000","finger20":"Fingerprint: 20,000","finger10":"Fingerprint: 10,000","finger5":"Fingerprint: 5,000","maxCred1on1":"Max. Credential (1:1)","maxCard":"Max. Card","cred500":"Fingerprint: 500,000 / Card: 500,000 / PIN: 500,000","cred2t500":"Fingerprint: 500,000 / Card: 500,000","cred10":"Fingerprint: 10,000 / Card: 10,000 / PIN: 10,000","cred2t10":"Fingerprint: 10,000 / Card: 10,000","cred5":"Fingerprint: 5,000 / Card: 5,000 / PIN: 5,000","face4finger10":"Face: 4,000 / Fingerprint: 10,000*","face30card500pin500finger500":"Face: 30,000 / Card: 500,000 / PIN: 500,000 / Fingerprint: 500,000*","face4finger100":"Face: 4,000 / Fingerprint: 100,000*","face4finger30":"Face: 4,000 / Fingerprint: 30,000*","face50finger100":"Face: 50,000 / Fingerprint: 100,000*","face50finger100none":"Face: 50,000 / Fingerprint: 100,000","face30card100":"Face: 30,000 / Card: 100,000","face30card30pin30finger100":"Face: 30,000 / Card: 30,000 / PIN: 30,000 / Fingerprint: 100,000*","face30card30pin30finger30":"Face: 30,000 / Card: 30,000 / PIN: 30,000 / Fingerprint: 30,000*","face100card100pin100finger100":"Face: 100,000 / Card: 100,000 / PIN: 100,000 / Fingerprint: 100,000*","face100card100pin100finger100none":"Face: 100,000 / Card: 100,000 / PIN: 100,000 / Fingerprint: 100,000","card500pin500":"Card: 500,000 / PIN: 500,000","card200pin200":"Card: 200,000 / PIN: 200,000","card200":"Card: 200,000","card50":"Card: 50,000","card40":"Card: 40,000","maxTextLog":"Max. Text Log","maxImageLog":"Max. Image Log","port10":"10ea per port","general":"General","cryptochip":"Crypto Chip","resolution":"Display Resolution","800x400":"800 x 400 pixels","800x480":"800 x 480 pixels","800x1280":"800 x 1280 pixels","720x1280":"720 x 1280 pixels","480x854":"480 x 854 pixels","480x800":"480 x 800 pixels","320x240":"320 x 240 pixels","220x176":"220 x 176 pixels","160x128":"160 x 128 pixels","128x64":"128 x 64 pixels","multiColor":"Multi-color","pRedsMulti":"POWER: RED single-color, STATUS: Multi-color","sound":"Sound","echoCancle":"24 bit/Voice DSP (echo cancellation)","multiToneBuzzer":"Multi-tone buzzer","operating-temperature":"Operating Temperature","operating-temperature-xpq2":"DC Power: -20℃ ~ 60℃<br/>PoE Power: -20℃ ~ 50℃","storage-temperature":"Storage Temperature","operating-humidity":"Operating Humidity","operating-humidity-spec":"0% ~ 80%, non-condensing","operating-humidity-spec95":"0% ~ 95%, non-condensing","storage-humidity":"Storage Humidity","storage-humidity-spec":"0% ~ 90%, non-condensing","storage-humidity-spec95":"0% ~ 95%, non-condensing","weight":"Weight","d440b89":"Device: 440g, Bracket: 89g (Including washer and bolt)","d440b130":"Device: 440g, Bracket: 130g (Including washer and screw)","d429b142":"Device: 429g, Bracket: 142g (Including washer and bolt)","d280b61":"Device: 280g, Bracket: 61g (Including washer and bolt)","d255b57":"Device: 255g, Bracket: 57g (Including washer and bolt)","d251b43":"Device: 251g, Bracket: 43g (Including washer and bolt)","d162b39":"Device: 162g, Bracket: 39g (Including washer and bolt)","d375b86":"Device: 375g, Bracket: 86g (Including washer and bolt)","d242b59":"Device: 242g, Bracket: 59g (Including washer and bolt)","d555b74":"Device: 555g, Bracket: 74g (Including washer and bolt)","d296b41":"Device: 296g, Bracket: 41g (Including washer and bolt)","d585b181":"Device: 585g, Bracket: 181g (Including washer and bolt)","d670b205":"Device: 670g, Bracket: 205g (Including washer and bolt)","d370b90":"Device: 370g, Bracket: 90g (Including washer and bolt)","d380b90":"Device: 380g, Bracket: 90g (Including washer and bolt)","d283b36":"Device: 283g, Bracket: 36g","d291b36":"Device: 291g, Bracket: 36g","d142b27":"Device: 142g, Bracket: 27g (Including washer and bolt)","d107b43":"Device: 107g, Bracket: 43g (Including washer and bolt)","d136b48":"Device: 136g, Bracket: 48g (Including washer and bolt)","d144b30":"Device: 144g, Bracket: 30g (Including washer and bolt)","d213b40":"Device: 213g, Bracket: 40g (Including washer and bolt)","d220b52":"Device: 220g, Bracket: 52g (Including washer and bolt)","d235b52":"Device: 235g, Bracket: 52g (Including washer and bolt)","d343b88":"Device: 343g, Bracket: 88g (Including washer and bolt)","d280b67":"Device: 280g, Bracket: 67g (Including washer and bolt)","d158b39":"Device: 158g, Bracket: 39g (Including washer and bolt)","d117b30":"Device: 117g, Bracket: 30g (Including washer and bolt)","d140b52":"Device: 140g, Bracket: 52g (Including washer and bolt)","d145b52":"Device: 145g, Bracket: 52g (Including washer and bolt)","dimension":"Dimension (WxHxD, mm)","dim-fsf2odb":"119.8 x 268.3 x 49.6 (Bottom) / 23.5 (Top)","dim-bs2":"142 x 144 x 45 (Bottom) / 38 (Top)","dim-bs2a":"142 x 144 x 45 (Bottom) / 37.8 (Top)","dim-bsl2":"70.9 x 200.9 x 44.3 (Bottom) / 34.2 (Top)","dim-bln2":"58 x 190 x 44 (Bottom) / 34.6 (Top)","dim-bew2":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","dim-xs2":"82 x 208.5 x 53 (Bottom) / 25.9 (Top)","interface":"Interface","ethernet":"Ethernet","ethernet-spec":"10/100 Mbps, auto MDI/MDI-X","ethernet-spec1000":"10/100/1000 Mbps, auto MDI/MDI-X","networkprotocol":"Network Protocol","1chmasterslave":"1ch Master/Slave (Selectable)","1chslave":"1ch Slave","osdpv2":"OSDP V2 compliant","1chin1chout":"1ch Input, 1ch Output","1chin1choutopt1":"1ch Input/Output (Selectable)","1ch":"1ch","2chinput":"2ch Input","2chinout":"2ch Inputs, 2ch Outputs","3chinput":"3ch Inputs","4chinput":"4ch Inputs","5chinput":"5ch Inputs","6chinput":"6ch Inputs","8chinput":"8ch Inputs","6chAsterisk":"6ch**","8chAsterisk":"8ch**","12chAsterisk":"12ch**","12chinput":"12ch Inputs","6chinoutput":"6ch","8chinoutput":"8ch","12chinoutput":"12ch","3chrs485":"3ch","4chrs485":"4ch","5chrs485":"5ch","2chwiegand":"2ch","4chwiegand":"4ch","SupervisedInput":"Supervised Input","4relay":"4 Relay","12relay":"12 Relay","relay":"Relay","1relay":"1 Relay","2relay":"2 Relay","optional":"Optional","ieee8023af":"IEEE 802.3af compliant","ieee8023at":"IEEE 802.3at (PoE+) compliant","usb2firmwareup":"USB 2.0 (Type C), only FW-Upgrade","sdcard":"SD Card","microSD":"microSD card (Supports up to 32 GB)","AUXInput":"AUX Input","2chAcpowerfail":"2ch (AC POWER FAIL)","2chDry":"2ch (Dry Contact Input)","2chAcpowerfailTamper":"2ch (AC POWER FAIL, Tamper)","3chAcpowerfailTamperFire":"3ch (AC POWER FAIL, Tamper, Fire)","SAMSlot":"SAM Slot","electric":"Electrical","power":"Power","p12ve1a":"Voltage: 12Vdc<br/>Current: Max. 1A","p12ve_3a":"Voltage: 12Vdc<br/>Current: Max. 3A","p12ve_3_1a":"Voltage: 12Vdc<br/>Current: Max. 3.1A","p12ve8a":"Voltage: 12Vdc<br/>Current: Max. 0.8A","p12ve2_8a24v1_4a":"Voltage: 12Vdc<br/>Current: Max. 2.8A<br/>Voltage: 24Vdc<br/>Current: Max. 1.4A","p12ve8a24v4a":"Voltage: 12Vdc<br/>Current: Max. 0.8A<br/>Voltage: 24Vdc<br/>Current: Max. 0.4A","p12ve8a24v5a":"Voltage: 12Vdc<br/>Current: Max. 0.8A<br/>Voltage: 24Vdc<br/>Current: Max. 0.5A","p12ve5a24v3a":"Voltage: 12Vdc<br/>Current: Max. 0.5A<br/>Voltage: 24Vdc<br/>Current: Max. 0.3A","p12ve6a":"Voltage: 12Vdc<br/>Current: Max. 0.6A","p12ve5a":"Voltage: 12Vdc<br/>Current: Max. 0.5A","p12ve4a":"Voltage: 12Vdc<br/>Current: Max. 0.4A","p12ve3a":"Voltage: 12Vdc<br/>Current: Max. 0.3A","p12ve2a":"Voltage: 12Vdc<br/>Current: Max. 0.2A","p24v1_2a":"Voltage: 24Vdc<br/>Current: Max. 1.2A","p12v2_1a24v1a":"Voltage: 12Vdc<br/>Current: Max. 2.1A<br/>Voltage: 24Vdc<br/>Current: Max. 1A","p12v0_2a24v0_1a":"Voltage: 12Vdc<br/>Current: Max. 0.2A<br/>Voltage: 24Vdc<br/>Current: Max. 0.1A","p12v1a24v0_7a":"Voltage: 12Vdc<br/>Current: Max. 1A<br/>Voltage: 24Vdc<br/>Current: Max. 0.7A","p12v1a24v0_6a":"Voltage: 12Vdc<br/>Current: Max. 1A<br/>Voltage: 24Vdc<br/>Current: Max. 0.6A","p12v0_5a24v0_3a":"Voltage: 12Vdc<br/>DC OUT not used Current: Max. 0.5A<br/>DC OUT used Current: Max. 2.6A<br/>Voltage: 24Vdc<br/>DC OUT not used Current: Max. 0.3A<br/>DC OUT used Current: Max. 1.4A"}}')
;// CONCATENATED MODULE: ./src/components/CompareTable/index.js







// 공통 상수 정의
const COMMON_COLUMN_PROPS = {
    hozAlign: "center",
    headerHozAlign: "center",
    headerVertical: false,
    headerSort: false
};
const FROZEN_COLUMN_PROPS = {
    hozAlign: "right",
    headerHozAlign: "center",
    headerVertical: false,
    headerSort: false,
    width: 180,
    frozen: true
};
// 커스텀 Hook으로 getLocale 함수 제공
function useLocale() {
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* ["default"] */.A)();
    const getLocale = (0,react.useCallback)((id)=>{
        return resources_namespaceObject[currentLocale]?.[id] || resources_namespaceObject.en?.[id];
    }, [
        currentLocale
    ]);
    return getLocale;
}
// 공통 포매터 함수
function useCustomLocaleFormatter() {
    const getLocale = useLocale();
    return (0,react.useCallback)((cell)=>{
        const value = cell.getValue();
        // value가 before/after 오브젝트일 때 분기
        if (typeof value === "object" && value !== null && "before" in value && "after" in value) {
            const before = value.before;
            const after = value.after;
            const beforeText = before === true ? "✔️" : before === false ? "❌" : getLocale(before);
            const afterText = after === true ? "✔️" : after === false ? "❌" : getLocale(after);
            return `<span class="before">${beforeText}</span><span class="after">${afterText}</span>`;
        } else if (value === true) {
            return "✔️";
        } else if (value === false) {
            return "❌";
        } else {
            return getLocale(value) || value;
        }
    }, [
        getLocale
    ]);
}
function RenderTableSpecs({ data }) {
    const getLocale = useLocale();
    const customFormatter = useCustomLocaleFormatter();
    const tableRef = (0,react.useRef)(null);
    const tabulatorInstance = (0,react.useRef)(null);
    // 중첩된 구조의 데이터를 평면화된 형태로 변환
    const transformedData = (0,react.useMemo)(()=>{
        if (!data || data.length === 0) {
            return [];
        }
        // 각 데이터 항목을 평면화
        const flattenedData = data.map((item)=>{
            const { category, function: functionName, models } = item;
            const rowData = {
                category,
                function: functionName
            };
            // 각 모델의 모든 변형을 해당 필드에 매핑
            Object.entries(models).forEach(([modelName, modelVariants])=>{
                Object.entries(modelVariants).forEach(([variant, value])=>{
                    const fieldName = variant.replace(/[-]/g, ''); // 하이픈 제거하여 필드명 생성
                    rowData[fieldName] = value;
                });
            });
            return rowData;
        });
        return flattenedData;
    }, [
        data
    ]);
    // 컬럼 정의를 원본 JSON 구조 기반으로 동적 생성
    const columns = (0,react.useMemo)(()=>{
        if (!data || data.length === 0) {
            return [];
        }
        const createColumn = (title, field)=>({
                title,
                field,
                ...COMMON_COLUMN_PROPS,
                // width: 120,
                minWidth: 120,
                formatter: customFormatter
            });
        const createColumnGroup = (title, columns)=>({
                title,
                headerHozAlign: "center",
                columns
            });
        // 첫 번째 데이터 항목에서 모델 구조를 가져옴
        const firstItem = data[0];
        const { models } = firstItem;
        // 컬럼 구성
        const columns = [
            {
                title: getLocale("product_specs"),
                field: "function",
                ...FROZEN_COLUMN_PROPS,
                formatter: customFormatter
            }
        ];
        // 각 제품(모델)별로 컬럼 그룹 생성
        Object.entries(models).forEach(([productName, variants])=>{
            const productColumns = Object.keys(variants).map((variant)=>{
                const fieldName = variant.replace(/[-]/g, ''); // 하이픈 제거하여 필드명 생성
                return createColumn(variant, fieldName);
            });
            if (productColumns.length > 0) {
                columns.push(createColumnGroup(productName, productColumns));
            }
        });
        return columns;
    }, [
        data,
        getLocale,
        customFormatter
    ]);
    const groupHeader = (0,react.useCallback)((value, count)=>{
        return getLocale(value.toLowerCase()) + " (" + count + ")";
    }, [
        getLocale
    ]);
    (0,react.useEffect)(()=>{
        if (tableRef.current && !tabulatorInstance.current) {
            tabulatorInstance.current = new tabulator_esm/* .TabulatorFull */.mu(tableRef.current, {
                height: "calc(100vh - 350px)",
                autoResize: false,
                data: transformedData,
                layout: "fitColumns",
                groupBy: "category",
                groupToggleElement: "header",
                groupHeader,
                columns
            });
        }
        return ()=>{
            if (tabulatorInstance.current) {
                tabulatorInstance.current.destroy();
                tabulatorInstance.current = null;
            }
        };
    }, [
        transformedData,
        columns,
        groupHeader
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: tableRef,
        className: styles_module.tableContainer
    });
}
function RenderTableFuncs({ data, width }) {
    const getLocale = useLocale();
    const customFormatter = useCustomLocaleFormatter();
    const tableRef = (0,react.useRef)(null);
    const tabulatorInstance = (0,react.useRef)(null);
    // 데이터에서 동적으로 컬럼 정의를 생성
    const columns = (0,react.useMemo)(()=>{
        if (!data || data.length === 0) return [];
        const createColumn = (title, field)=>({
                title,
                field,
                width: width || null,
                minWidth: 150,
                ...COMMON_COLUMN_PROPS,
                formatter: customFormatter
            });
        // 첫 번째 데이터 항목에서 제품 컬럼들을 추출
        const firstItem = data[0];
        const productColumns = Object.keys(firstItem).filter((key)=>key !== 'category' && key !== 'function');
        return [
            {
                title: getLocale("main_function"),
                field: "function",
                ...FROZEN_COLUMN_PROPS,
                formatter: (cell)=>{
                    const value = cell.getValue();
                    return getLocale(value) || value;
                }
            },
            ...productColumns.map((product)=>createColumn(product, product))
        ];
    }, [
        data,
        getLocale,
        customFormatter
    ]);
    const groupHeader = (0,react.useCallback)((value, count)=>{
        return getLocale(value.toLowerCase()) + " (" + count + ")";
    }, [
        getLocale
    ]);
    (0,react.useEffect)(()=>{
        if (tableRef.current && !tabulatorInstance.current) {
            tabulatorInstance.current = new tabulator_esm/* .TabulatorFull */.mu(tableRef.current, {
                height: "calc(100vh - 350px)",
                data: data,
                layout: "fitColumns",
                resizableColumnFit: true,
                groupBy: "category",
                groupToggleElement: "header",
                groupHeader,
                columns
            });
        }
        return ()=>{
            if (tabulatorInstance.current) {
                tabulatorInstance.current.destroy();
                tabulatorInstance.current = null;
            }
        };
    }, [
        data,
        columns,
        groupHeader
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: tableRef,
        className: styles_module.tableContainer
    });
}


}),

}]);