"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["9799"], {
"5476": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_troubleshooting_mdx_3bd_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-biostation-3-troubleshooting-mdx-3bd.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_troubleshooting_mdx_3bd_namespaceObject = JSON.parse('{"id":"device/biostation_3/troubleshooting","title":"Troubleshooting","description":"This document provides information to solve unexpected issues that you may encounter when using the device.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/troubleshooting.mdx","sourceDirName":"device/biostation_3","slug":"/device/biostation_3/troubleshooting","permalink":"/docs/en/device/biostation_3/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting","title":"Troubleshooting","description":"This document provides information to solve unexpected issues that you may encounter when using the device.","keywords":["Troubleshooting"],"isTranslationMissing":false},"sidebar":"bioStation3","previous":{"title":"이벤트 로그","permalink":"/docs/en/device/biostation_3/event-log"},"next":{"title":"제품 사양","permalink":"/docs/en/device/biostation_3/product-specifications"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
// EXTERNAL MODULE: ./src/components/Faqs/index.js + 3 modules
var Faqs = __webpack_require__("2793");
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/troubleshooting.mdx


const frontMatter = {
	id: 'troubleshooting',
	title: 'Troubleshooting',
	description: 'This document provides information to solve unexpected issues that you may encounter when using the device.',
	keywords: [
		'Troubleshooting'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides information to solve unexpected issues that you may encounter when using the device."
    }), "\n", "\n", (0,jsx_runtime.jsx)(Faqs/* default */.Z, {})]
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



}),
"2793": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Faqs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
;// CONCATENATED MODULE: ./src/components/Faqs/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"faq":"faq_GMal","question":"question_NGz8","faqTitle":"faqTitle_txQN","faqBody":"faqBody_ifca"});
// EXTERNAL MODULE: ./src/components/Head/index.js + 1 modules
var Head = __webpack_require__("7648");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__("6009");
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("6550");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__("7262");
;// CONCATENATED MODULE: ./i18n/ko/faqs.json
var faqs_namespaceObject = JSON.parse('[{"category":{"title":"전원","hid":"power","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"전원이 공급되고 있으나 작동하지 않습니다.","answer":["단말기와 브래킷이 떨어져 있으면 탬퍼 스위치에 의해 작동하지 않을 수도 있습니다.","어댑터 또는 전원 연결 케이블을 확인하세요."]}]}},{"category":{"title":"PIN","hid":"pin","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"PIN을 분실했습니다.","answer":["일반 사용자의 PIN은 관리자에게 요청한 뒤 다시 입력하세요.","관리자 PIN 분실 시 설치 업체에 문의하세요."]},{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"PIN을 입력한 뒤 <span class=\'cmd\'>OK</span> 버튼을 눌러도 잠긴 문을 열 수 없습니다.","answer":["등록한 PIN을 정상적으로 입력하였는지 확인하세요.","최근에 PIN을 변경하지 않았는지 확인하세요.","PIN을 알 수 없는 경우 관리자에게 요청한 뒤 다시 입력하세요."]}]}},{"category":{"title":"얼굴","hid":"face","contents":[{"product":["biostation_3","facestation_f2","facelite","facestation_2"],"question":"등록은 되었으나 얼굴 인증이 잘 되지 않고 오류가 많이 납니다.","answer":["<a href=\'getting-started#cautions-enrolling-faces\'>얼굴 등록 시 주의 사항</a>을 확인한 뒤 얼굴을 다시 등록하세요.","등록된 얼굴 개수가 많다면 <span class=\'cmd\'>매칭 대기 시간</span>을 변경한 뒤 다시 시도하세요."]},{"product":["biostation_3","facestation_f2","facelite","facestation_2"],"question":"갑자기 얼굴 인증이 되지 않습니다.","answer":["<a href=\'getting-started#cautions-enrolling-faces\'>얼굴 등록 시 주의 사항</a>을 확인한 뒤 다시 시도하세요."]},{"product":["biostation_3","facestation_f2"],"question":"<span class=\'cmd\'>마스크 검출</span> 기능을 <span class=\'cmd\'>사용</span>으로 설정하였으나 마스크 착용 시 얼굴 인증이 잘 되지 않고 오류가 많이 납니다.","answer":["마스크를 코끝까지 내리고 얼굴을 2회 인증한 뒤 다시 코를 덮고 얼굴 인증을 시도하세요. 문제가 지속될 경우 설치 업체에 문의하세요."]},{"product":["facestation_f2"],"question":"열화상 카메라 사용 시 온도가 정상적으로 측정되지 않습니다.","answer":["단말기에 열화상 카메라가 정상적으로 연결되었는지 확인하세요.","이마가 가려지지 않은 상태에서 온도 측정을 다시 시도하세요. 문제가 지속될 경우 설치 업체에 문의하세요."]},{"product":["facestation_f2"],"question":"열화상 카메라 사용 시 온도가 너무 낮게 측정됩니다.","answer":["동절기에 사용자가 장시간 동안 실외의 낮은 온도에 노출된 상태에서 온도를 측정할 경우 체온보다 낮게 측정될 수 있습니다. 실내에서 1~2분 대기한 뒤 다시 시도하세요. 문제가 지속될 경우 설치 업체에 문의하세요."]}]}},{"category":{"title":"지문","hid":"fingerprint","contents":[{"product":["bioentry_n2","biostation_2","biostation_2a","biolite_n2","biostation_a2","biostation_l2"],"question":"등록은 되었으나 지문 인식이 잘 되지 않고 오류가 많이 납니다.","answer":["<a href=\'getting-started#cautions-enrolling-fingers\'>올바른 지문 입력 방법</a>을 확인한 뒤 지문을 다시 등록하세요.","지문에 상처가 생기는 경우 기기는 다른 사람의 지문으로 잘못 인식될 수 있습니다.","등록된 지문 개수가 많다면 <span class=\'cmd\'>매칭 대기 시간</span>을 변경한 뒤 다시 시도하세요.","지문마다 특징의 차이로 인해 인식률에 차이가 있으니 다른 손가락의 지문을 등록하세요."]},{"product":["bioentry_n2","biostation_2","biostation_2a","biolite_n2","biostation_a2","biostation_l2"],"question":"갑자기 지문 인식이 되지 않습니다.","answer":["손가락이나 지문 센서에 땀, 물기, 먼지 등이 묻어 있는지 확인한 뒤 깨끗이 닦아 주세요.","마른 수건 등으로 손가락과 지문 센서를 닦은 다음 다시 시도하세요.","손가락의 지문이 매우 건조할 때는 입김을 분 다음 다시 시도하세요."]},{"product":["bioentry_n2","biostation_2","biostation_2a","biolite_n2"],"question":"지문 센서가 켜지지 않습니다.","answer":["<span class=\'cmd\'>센서 모드</span>가 <span class=\'cmd\'>자동 켜짐</span>으로 설정되어 있을 경우 지문 센서에 손가락을 댈 경우에만 센서가 켜집니다. 항상 지문 센서가 켜져 있길 원한다면 <span class=\'cmd\'>인증</span> → <span class=\'cmd\'>지문</span> → <span class=\'cmd\'>센서 모드</span>를 <span class=\'cmd\'>항상 켜짐</span>으로 설정하세요."]}]}},{"category":{"title":"문 잠금","hid":"doorlock","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"문을 닫아도 잠금 장치는 잠기지 않습니다.","answer":["전기 잠금 장치의 이상일 수 있습니다. 설치 업체를 통해 점검을 받으세요."]}]}},{"category":{"title":"시간","hid":"time","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"갑자기 시간이 맞지 않습니다.","answer":["장치에는 내장 배터리가 있으나, 오랫동안 전원이 공급되지 않으면 내장 배터리가 방전되어 시간이 달라질 수 있습니다. <a href=\'settings#date-time\'>날짜와 시간</a> 메뉴를 참고하여 시간을 수정할 수 있습니다."]}]}},{"category":{"title":"관리자 접속","hid":"admin","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"관리자 PIN을 분실하여 관리자 모드에 진입할 수 없습니다.","answer":["장치는 관리자가 출입 허용 권한을 부여하기 때문에 관리자만 메뉴에 진입할 수 있습니다.","관리자 PIN 분실 시 설치 업체에 문의하세요."]}]}}]')
;// CONCATENATED MODULE: ./i18n/en/faqs.json
var en_faqs_namespaceObject = JSON.parse('[{"category":{"title":"Power","hid":"power","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"The power is being supplied but the device does not operate.","answer":["If the terminal and the bracket are far away from each other, the device may not operate due to the temper switch.","Check the adaptor or the power cable."]}]}},{"category":{"title":"PIN","hid":"pin","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"I lost my PIN.","answer":["For a normal user PIN, request it from the administrator and enter it again.","If you have lost the Admin PIN, contact the installation company."]},{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"I entered my PIN and pressed the <span class=\'cmd\'>OK</span> button, but I still cannot open the door.","answer":["Check if you have entered the registered PIN correctly.","Check if you have changed the PIN recently.","If you cannot remember the PIN, request it from the administrator and enter it again."]}]}},{"category":{"title":"Face","hid":"face","contents":[{"product":["biostation_3","facestation_f2","facelite","facestation_2"],"question":"The face has been registered but face authentication cannot be done smoothly, and errors occur frequently.","answer":["Check <a href=\'getting-started#cautions-enrolling-faces\'>Cautions for enrolling a faces</a> and enroll the face again.","If there are a large number of enrolled faces, change <span class=\'cmd\'>Matching Timeout</span> and try again."]},{"product":["biostation_3","facestation_f2","facelite","facestation_2"],"question":"Face authentication has suddenly stopped working.","answer":["Check <a href=\'getting-started#cautions-authenticating-face\'>Cautions for authenticating a face</a> and try again."]},{"product":["biostation_3","facestation_f2"],"question":"<span class=\'cmd\'>Mask Detection</span> is set to <span class=\'cmd\'>Enabled</span>, but face authentication cannot be done smoothly when wearing a mask.","answer":["Authenticate your face twice with the mask pull down on the tip of your nose. Then, authenticate your face again wearing a mask that covers your nose completely. If the problem persists, contact the installation company."]},{"product":["facestation_f2"],"question":"The thermal camera fails to measure temperature.","answer":["Check if the thermal camera is properly connected to the terminal.","Measure the temperature again without covering your forehead. If the problem persists, contact the installation company."]},{"product":["facestation_f2"],"question":"The thermal camera measures lower temperature than actual temperature.","answer":["If a user measures the temperature after being exposed to cold temperatures for a long time, the temperature may be measured lower than the actual temperature. Wait for 1 to 2 minutes indoors and try again. If the problem persists, contact the installation company."]}]}},{"category":{"title":"Fingerprint","hid":"fingerprint","contents":[{"product":["bioentry_n2","biostation_2","biostation_2a","biolite_n2","biostation_a2","biostation_l2"],"question":"The fingerprint has been enrolled but fingerprint authentication cannot be done smoothly and errors occur frequently.","answer":["Check <a href=\'getting-started#cautions-enrolling-fingers\'>How to enroll a fingerprint</a> and enroll the fingerprint again.","If your fingerprint has a cut, the device may recognize your fingerprint as someone else\\\\\'s fingerprint.","If there are a large number of enrolled fingerprints, change <span class=\'cmd\'>Matching Timeout</span> and try again.","The authentication rate may vary for each fingerprint due to different characteristics. Enroll the fingerprint of another finger."]},{"product":["bioentry_n2","biostation_2","biostation_2a","biolite_n2","biostation_a2","biostation_l2"],"question":"Suddenly fingerprint authentication cannot be done.","answer":["Check if the finger or the fingerprint sensor is smeared with sweat, water or dust, and wipe the finger or the fingerprint sensor clean.","Wipe your finger and the fingerprint sensor with a dry towel and then try again.","If the fingerprint of your finger is too dry, blow on the fingerprint and then try again."]},{"product":["bioentry_n2","biostation_2","biostation_2a","biolite_n2"],"question":"The fingerprint sensor does not turn on.","answer":["When <span class=\'cmd\'>Sensor Mode</span> is set to <span class=\'cmd\'>Auto On</span>, the sensor will only turn on when you place finger on the fingerprint sensor. If you want to keep the fingerprint sensor on, go to <span class=\'cmd\'>AUTH</span> → <span class=\'cmd\'>Fingerprint</span> → <span class=\'cmd\'>Sensor Mode</span> and then select <span class=\'cmd\'>Always On</span>."]}]}},{"category":{"title":"Door lock","hid":"doorlock","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"The door cannot be locked when I close the door.","answer":["The electric lock may be malfunctioning. Have an inspection through the installation company."]}]}},{"category":{"title":"Time","hid":"time","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"Suddenly the time has become incorrect.","answer":["The device is equipped with a built-in battery but if power is not supplied for a long time, the built-in battery may die, causing the time to become incorrect. You can correct the time by referring to <a href=\'settings#date-time\'>Date & Time</a>."]}]}},{"category":{"title":"Admin access","hid":"admin","contents":[{"product":["biostation_3","biostation_2","biostation_2a","facestation_f2","bioentry_n2","biolite_n2","biostation_a2","biostation_l2","facelite","facestation_2"],"question":"I lost my Admin PIN, so I cannot access the Admin mode.","answer":["The administrator grants an access permission in the device, so only the administrator can access the Admin menu.","If you have lost the Admin PIN, contact the installation company."]}]}}]')
;// CONCATENATED MODULE: ./src/components/Faqs/index.js









/**
 * FAQ 컴포넌트
 * @param {Object} props
 * @param {string|string[]} [props.product] - 필터링할 제품명(들)
 */ function Faqs() {
    const faqsMap = {
        ko: faqs_namespaceObject,
        en: en_faqs_namespaceObject
    };
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    const location = (0,react_router/* useLocation */.TH)();
    const cProd = currentLocale === "ko" ? location.pathname.split("/")[3] : location.pathname.split("/")[4];
    console.log(cProd);
    // product가 주어지면 해당 제품만 필터링, 아니면 전체 출력
    const productList = Array.isArray(cProd) ? cProd : cProd ? [
        cProd
    ] : null;
    const faqs = faqsMap[currentLocale] || en_faqs_namespaceObject;
    // 카테고리별로 FAQ를 필터링
    const filteredCategories = faqs.map((cat)=>{
        const contentsArr = Array.isArray(cat.category.contents) ? cat.category.contents : [
            cat.category.contents
        ];
        const filteredContents = productList ? contentsArr.filter((faq)=>faq.product.some((p)=>productList.includes(p))) : contentsArr;
        return filteredContents.length > 0 ? {
            title: cat.category.title,
            hid: cat.category.hid,
            contents: filteredContents
        } : null;
    }).filter(Boolean);
    // FAQ 구조화 데이터 생성 (Google FAQPage Schema)
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": filteredCategories.flatMap((cat)=>cat.contents.map((faq)=>({
                    "@type": "Question",
                    "name": faq.question.replace(/<[^>]+>/g, ""),
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer.map((a)=>a.replace(/<[^>]+>/g, "")).join(" ")
                    }
                })))
    };
    const { navbar: { hideOnScroll } } = (0,useThemeConfig/* useThemeConfig */.L)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqStructuredData)
                }
            }),
            filteredCategories.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: "해당 제품에 대한 FAQ가 없습니다."
            }) : filteredCategories.map((cat, cidx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* default */.Z, {
                            hashid: cat.hid,
                            level: 3,
                            className: styles_module.faqTitle,
                            children: cat.title
                        }),
                        cat.contents.map((faq, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                className: styles_module.faq,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("summary", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.question,
                                                children: "Q."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: faq.question
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: styles_module.faqBody,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                            style: {
                                                marginTop: 8
                                            },
                                            children: faq.answer.map((a, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: a
                                                    }
                                                }, i))
                                        })
                                    })
                                ]
                            }, idx))
                    ]
                }, cidx))
        ]
    });
}


}),
"7648": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Head)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__("6009");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("3367");
;// CONCATENATED MODULE: ./src/components/Head/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_Kz00","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_WDcu"});
;// CONCATENATED MODULE: ./src/components/Head/index.js






function Head(param) {
    let { level, hashid, children, className } = param;
    const Headertag = `h${level}`;
    let hid;
    const { navbar: { hideOnScroll } } = (0,useThemeConfig/* useThemeConfig */.L)();
    if (level === 'none') {
        return null;
    }
    if (!hashid) {
        hid = children.join("_");
    } else {
        hid = hashid;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Headertag, {
        className: (0,clsx/* default */.Z)('anchor', hideOnScroll ? styles_module.anchorWithHideOnScrollNavbar : styles_module.anchorWithStickyNavbar, className),
        id: hid,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                className: "hash-link",
                to: `#${hid}`,
                children: "​"
            })
        ]
    });
}


}),
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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