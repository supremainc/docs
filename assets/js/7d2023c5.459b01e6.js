"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6778"], {
92318: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_reference_compares_fingerprint_devices_specs_mdx_7d2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reference-compares-fingerprint-devices-specs-mdx-7d2.json
var site_docs_reference_compares_fingerprint_devices_specs_mdx_7d2_namespaceObject = JSON.parse('{"id":"reference/compares/fingerprint-devices-specs","title":"사양 비교","description":"","source":"@site/docs/reference/compares/fingerprint-devices-specs.mdx","sourceDirName":"reference/compares","slug":"/reference/compares/fingerprint-devices-specs","permalink":"/docs/reference/compares/fingerprint-devices-specs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/reference/compares/fingerprint-devices-specs.mdx","tags":[],"version":"current","frontMatter":{"id":"fingerprint-devices-specs","title":"사양 비교","hide_table_of_contents":true,"isTranslationMissing":false},"sidebar":"reference","previous":{"title":"기능 비교","permalink":"/docs/reference/compares/fingerprint-devices-funcs"},"next":{"title":"기능 비교","permalink":"/docs/reference/compares/face-devices-funcs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/reference/compares/fingerprint-specs.json
var fingerprint_specs_namespaceObject = JSON.parse('[{"category":"rfid","function":"rfoption","models":{"BioStation A2":{"BSA2-OEPW":"125kHz EM","BSA2-OHPW":"125kHz EM, HID Prox","BSA2-OIPW":"13.56MHz iCLASS SE/SR/Seos","BSA2-OMPW":"13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa"},"BioStation 2":{"BS2-OEPW":"125kHz EM","BS2-OHPW":"125kHz HID Prox","BS2-OIPW":"13.56MHz iCLASS SE/SR/Seos","BS2-OMPW":"13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa"},"BioStation 2a":{"BS2A-ODPB":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BS2A-OAPWB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, iCLASS SE/SR/Seos, FeliCa"},"BioStation L2":{"BSL2-OE":"125kHz EM","BSL2-OM":"13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa"},"BioLite N2":{"BLN2-ODB":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BLN2-OAB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos","BLN2-PAB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos"},"BioEntry W2":{"BEW2-OHP":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEW2-ODP":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEW2-OAP":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos","BEW2-OHPB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEW2-ODPB":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEW2-OAPB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos"},"BioEntry P2":{"BEP2-OD":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEP2-OA":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos"},"X-Station 2 Finger":{"XS2-ODPB":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","XS2-OAPB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos"},"BioLite Net":{"BLR-OC":"125kHz EM","BLN-OC":"13.56MHz MIFARE, MIFARE Plus, DESFire/EV1(CSN)"}}},{"category":"rfid","function":"mobile","models":{"BioStation A2":{"BSA2-OEPW":false,"BSA2-OHPW":false,"BSA2-OIPW":"NFC","BSA2-OMPW":"NFC"},"BioStation 2":{"BS2-OEPW":false,"BS2-OHPW":false,"BS2-OIPW":"NFC","BS2-OMPW":"NFC"},"BioStation 2a":{"BS2A-ODPB":"NFC, BLE","BS2A-OAPWB":"NFC, BLE"},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":"NFC"},"BioLite N2":{"BLN2-ODB":"NFC, BLE","BLN2-OAB":"NFC, BLE","BLN2-PAB":"NFC, BLE"},"BioEntry W2":{"BEW2-OHP":"NFC","BEW2-ODP":"NFC","BEW2-OAP":"NFC","BEW2-OHPB":"NFC, BLE","BEW2-ODPB":"NFC, BLE","BEW2-OAPB":"NFC, BLE"},"BioEntry P2":{"BEP2-OD":"NFC","BEP2-OA":"NFC"},"X-Station 2 Finger":{"XS2-ODPB":"NFC, BLE","XS2-OAPB":"NFC, BLE"},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"rfid","function":"sckeypad","models":{"BioStation A2":{"BSA2-OEPW":false,"BSA2-OHPW":false,"BSA2-OIPW":false,"BSA2-OMPW":false},"BioStation 2":{"BS2-OEPW":false,"BS2-OHPW":false,"BS2-OIPW":false,"BS2-OMPW":false},"BioStation 2a":{"BS2A-ODPB":false,"BS2A-OAPWB":false},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":false,"BEW2-ODP":false,"BEW2-OAP":false,"BEW2-OHPB":false,"BEW2-ODPB":false,"BEW2-OAPB":false},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":true,"XS2-OAPB":true},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"rfid","function":"qr","models":{"BioStation A2":{"BSA2-OEPW":false,"BSA2-OHPW":false,"BSA2-OIPW":false,"BSA2-OMPW":false},"BioStation 2":{"BS2-OEPW":false,"BS2-OHPW":false,"BS2-OIPW":false,"BS2-OMPW":false},"BioStation 2a":{"BS2A-ODPB":false,"BS2A-OAPWB":false},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":false,"BEW2-ODP":false,"BEW2-OAP":false,"BEW2-OHPB":false,"BEW2-ODPB":false,"BEW2-OAPB":false},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":"supportExcept","XS2-OAPB":"supportExcept"},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"protectlevel","function":"wd","models":{"BioStation A2":{"BSA2-OEPW":false,"BSA2-OHPW":false,"BSA2-OIPW":false,"BSA2-OMPW":false},"BioStation 2":{"BS2-OEPW":"IP65","BS2-OHPW":"IP65","BS2-OIPW":"IP65","BS2-OMPW":"IP65"},"BioStation 2a":{"BS2A-ODPB":"IP65","BS2A-OAPWB":"IP65"},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":"IP67","BLN2-OAB":"IP67","BLN2-PAB":"IP67"},"BioEntry W2":{"BEW2-OHP":"IP67","BEW2-ODP":"IP67","BEW2-OAP":"IP67","BEW2-OHPB":"IP67","BEW2-ODPB":"IP67","BEW2-OAPB":"IP67"},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":"IP65","XS2-OAPB":"IP65"},"BioLite Net":{"BLR-OC":"IP65","BLN-OC":"IP65"}}},{"category":"protectlevel","function":"breakprevent","models":{"BioStation A2":{"BSA2-OEPW":false,"BSA2-OHPW":false,"BSA2-OIPW":false,"BSA2-OMPW":false},"BioStation 2":{"BS2-OEPW":false,"BS2-OHPW":false,"BS2-OIPW":false,"BS2-OMPW":false},"BioStation 2a":{"BS2A-ODPB":false,"BS2A-OAPWB":false},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":"IK09","BEW2-ODP":"IK09","BEW2-OAP":"IK09","BEW2-OHPB":"IK09","BEW2-ODPB":"IK09","BEW2-OAPB":"IK09"},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":false,"XS2-OAPB":false},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"fingerprint","function":"template","models":{"BioStation A2":{"BSA2-OEPW":"SUPREMA / ISO 19794-2 / ANSI 378","BSA2-OHPW":"SUPREMA / ISO 19794-2 / ANSI 378","BSA2-OIPW":"SUPREMA / ISO 19794-2 / ANSI 378","BSA2-OMPW":"SUPREMA / ISO 19794-2 / ANSI 378"},"BioStation 2":{"BS2-OEPW":"SUPREMA / ISO 19794-2 / ANSI 378","BS2-OHPW":"SUPREMA / ISO 19794-2 / ANSI 378","BS2-OIPW":"SUPREMA / ISO 19794-2 / ANSI 378","BS2-OMPW":"SUPREMA / ISO 19794-2 / ANSI 378"},"BioStation 2a":{"BS2A-ODPB":"SUPREMA / ISO 19794-2 / ANSI 378","BS2A-OAPWB":"SUPREMA / ISO 19794-2 / ANSI 378"},"BioStation L2":{"BSL2-OE":"SUPREMA / ISO 19794-2 / ANSI 378","BSL2-OM":"SUPREMA / ISO 19794-2 / ANSI 378"},"BioLite N2":{"BLN2-ODB":"SUPREMA / ISO 19794-2 / ANSI 378","BLN2-OAB":"SUPREMA / ISO 19794-2 / ANSI 378","BLN2-PAB":"SUPREMA / ISO 19794-2 / ANSI 378"},"BioEntry W2":{"BEW2-OHP":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2-ODP":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2-OAP":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2-OHPB":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2-ODPB":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2-OAPB":"SUPREMA / ISO 19794-2 / ANSI 378"},"BioEntry P2":{"BEP2-OD":"SUPREMA / ISO 19794-2 / ANSI 378","BEP2-OA":"SUPREMA / ISO 19794-2 / ANSI 378"},"X-Station 2 Finger":{"XS2-ODPB":"SUPREMA / ISO 19794-2 / ANSI 378","XS2-OAPB":"SUPREMA / ISO 19794-2 / ANSI 378"},"BioLite Net":{"BLR-OC":"SUPREMA / ISO 19794-2 / ANSI 378","BLN-OC":"SUPREMA / ISO 19794-2 / ANSI 378"}}},{"category":"fingerprint","function":"detection","models":{"BioStation A2":{"BSA2-OEPW":"minex","BSA2-OHPW":"minex","BSA2-OIPW":"minex","BSA2-OMPW":"minex"},"BioStation 2":{"BS2-OEPW":"minex","BS2-OHPW":"minex","BS2-OIPW":"minex","BS2-OMPW":"minex"},"BioStation 2a":{"BS2A-ODPB":"minex","BS2A-OAPWB":"minex"},"BioStation L2":{"BSL2-OE":"minex","BSL2-OM":"minex"},"BioLite N2":{"BLN2-ODB":"minex","BLN2-OAB":"minex","BLN2-PAB":"minex"},"BioEntry W2":{"BEW2-OHP":"minex","BEW2-ODP":"minex","BEW2-OAP":"minex","BEW2-OHPB":"minex","BEW2-ODPB":"minex","BEW2-OAPB":"minex"},"BioEntry P2":{"BEP2-OD":"minex","BEP2-OA":"minex"},"X-Station 2 Finger":{"XS2-ODPB":"minex","XS2-OAPB":"minex"},"BioLite Net":{"BLR-OC":"minex","BLN-OC":"minex"}}},{"category":"fingerprint","function":"fake-fingerprint-detection","models":{"BioStation A2":{"BSA2-OEPW":true,"BSA2-OHPW":true,"BSA2-OIPW":true,"BSA2-OMPW":true},"BioStation 2":{"BS2-OEPW":false,"BS2-OHPW":false,"BS2-OIPW":false,"BS2-OMPW":false},"BioStation 2a":{"BS2A-ODPB":"supportSW","BS2A-OAPWB":"supportSW"},"BioStation L2":{"BSL2-OE":true,"BSL2-OM":true},"BioLite N2":{"BLN2-ODB":"supportSW","BLN2-OAB":"supportSW","BLN2-PAB":"supportSW"},"BioEntry W2":{"BEW2-OHP":true,"BEW2-ODP":true,"BEW2-OAP":true,"BEW2-OHPB":"supportSWHW","BEW2-ODPB":"supportSWHW","BEW2-OAPB":"supportSWHW"},"BioEntry P2":{"BEP2-OD":"supportSW","BEP2-OA":"supportSW"},"X-Station 2 Finger":{"XS2-ODPB":"supportSW","XS2-OAPB":"supportSW"},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"storage","function":"maxUser","models":{"BioStation A2":{"BSA2-OEPW":"500,000","BSA2-OHPW":"500,000","BSA2-OIPW":"500,000","BSA2-OMPW":"500,000"},"BioStation 2":{"BS2-OEPW":"500,000","BS2-OHPW":"500,000","BS2-OIPW":"500,000","BS2-OMPW":"500,000"},"BioStation 2a":{"BS2A-ODPB":"500,000","BS2A-OAPWB":"500,000"},"BioStation L2":{"BSL2-OE":"500,000","BSL2-OM":"500,000"},"BioLite N2":{"BLN2-ODB":"10,000","BLN2-OAB":"10,000","BLN2-PAB":"10,000"},"BioEntry W2":{"BEW2-OHP":"500,000","BEW2-ODP":"500,000","BEW2-OAP":"500,000","BEW2-OHPB":"500,000","BEW2-ODPB":"500,000","BEW2-OAPB":"500,000"},"BioEntry P2":{"BEP2-OD":"10,000","BEP2-OA":"10,000"},"X-Station 2 Finger":{"XS2-ODPB":"500,000","XS2-OAPB":"500,000"},"BioLite Net":{"BLR-OC":"5,000","BLN-OC":"5,000"}}},{"category":"storage","function":"maxCred1onN","models":{"BioStation A2":{"BSA2-OEPW":"finger100","BSA2-OHPW":"finger100","BSA2-OIPW":"finger100","BSA2-OMPW":"finger100"},"BioStation 2":{"BS2-OEPW":"finger20","BS2-OHPW":"finger20","BS2-OIPW":"finger20","BS2-OMPW":"finger20"},"BioStation 2a":{"BS2A-ODPB":"finger100","BS2A-OAPWB":"finger100"},"BioStation L2":{"BSL2-OE":"finger100","BSL2-OM":"finger100"},"BioLite N2":{"BLN2-ODB":"finger10","BLN2-OAB":"finger10","BLN2-PAB":"finger10"},"BioEntry W2":{"BEW2-OHP":"finger100","BEW2-ODP":"finger100","BEW2-OAP":"finger100","BEW2-OHPB":"finger100","BEW2-ODPB":"finger100","BEW2-OAPB":"finger100"},"BioEntry P2":{"BEP2-OD":"finger10","BEP2-OA":"finger10"},"X-Station 2 Finger":{"XS2-ODPB":"finger100","XS2-OAPB":"finger100"},"BioLite Net":{"BLR-OC":"finger5","BLN-OC":"finger5"}}},{"category":"storage","function":"maxCred1on1","models":{"BioStation A2":{"BSA2-OEPW":"cred500","BSA2-OHPW":"cred500","BSA2-OIPW":"cred500","BSA2-OMPW":"cred500"},"BioStation 2":{"BS2-OEPW":"cred500","BS2-OHPW":"cred500","BS2-OIPW":"cred500","BS2-OMPW":"cred500"},"BioStation 2a":{"BS2A-ODPB":"cred500","BS2A-OAPWB":"cred500"},"BioStation L2":{"BSL2-OE":"cred500","BSL2-OM":"cred500"},"BioLite N2":{"BLN2-ODB":"cred10","BLN2-OAB":"cred10","BLN2-PAB":"cred10"},"BioEntry W2":{"BEW2-OHP":"cred2t500","BEW2-ODP":"cred2t500","BEW2-OAP":"cred2t500","BEW2-OHPB":"cred2t500","BEW2-ODPB":"cred2t500","BEW2-OAPB":"cred2t500"},"BioEntry P2":{"BEP2-OD":"cred2t10","BEP2-OA":"cred2t10"},"X-Station 2 Finger":{"XS2-ODPB":"cred500","XS2-OAPB":"cred500"},"BioLite Net":{"BLR-OC":"cred5","BLN-OC":"cred5"}}},{"category":"storage","function":"maxTextLog","models":{"BioStation A2":{"BSA2-OEPW":"5,000,000","BSA2-OHPW":"5,000,000","BSA2-OIPW":"5,000,000","BSA2-OMPW":"5,000,000"},"BioStation 2":{"BS2-OEPW":"3,000,000","BS2-OHPW":"3,000,000","BS2-OIPW":"3,000,000","BS2-OMPW":"3,000,000"},"BioStation 2a":{"BS2A-ODPB":"5,000,000","BS2A-OAPWB":"5,000,000"},"BioStation L2":{"BSL2-OE":"1,000,000","BSL2-OM":"1,000,000"},"BioLite N2":{"BLN2-ODB":"1,000,000","BLN2-OAB":"1,000,000","BLN2-PAB":"1,000,000"},"BioEntry W2":{"BEW2-OHP":"1,000,000","BEW2-ODP":"1,000,000","BEW2-OAP":"1,000,000","BEW2-OHPB":"1,000,000","BEW2-ODPB":"1,000,000","BEW2-OAPB":"1,000,000"},"BioEntry P2":{"BEP2-OD":"1,000,000","BEP2-OA":"1,000,000"},"X-Station 2 Finger":{"XS2-ODPB":"5,000,000","XS2-OAPB":"5,000,000"},"BioLite Net":{"BLR-OC":"50,000","BLN-OC":"50,000"}}},{"category":"storage","function":"maxImageLog","models":{"BioStation A2":{"BSA2-OEPW":"50,000","BSA2-OHPW":"50,000","BSA2-OIPW":"50,000","BSA2-OMPW":"50,000"},"BioStation 2":{"BS2-OEPW":false,"BS2-OHPW":false,"BS2-OIPW":false,"BS2-OMPW":false},"BioStation 2a":{"BS2A-ODPB":false,"BS2A-OAPWB":false},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":false,"BEW2-ODP":false,"BEW2-OAP":false,"BEW2-OHPB":false,"BEW2-ODPB":false,"BEW2-OAPB":false},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":"50,000","XS2-OAPB":"50,000"},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"general","function":"CPU","models":{"BioStation A2":{"BSA2-OEPW":"1.0 GHz Quad Core","BSA2-OHPW":"1.0 GHz Quad Core","BSA2-OIPW":"1.0 GHz Quad Core","BSA2-OMPW":"1.0 GHz Quad Core"},"BioStation 2":{"BS2-OEPW":"1.0 GHz","BS2-OHPW":"1.0 GHz","BS2-OIPW":"1.0 GHz","BS2-OMPW":"1.0 GHz"},"BioStation 2a":{"BS2A-ODPB":"1.5 GHz Quad Core","BS2A-OAPWB":"1.5 GHz Quad Core"},"BioStation L2":{"BSL2-OE":"1.2 GHz Quad Core","BSL2-OM":"1.2 GHz Quad Core"},"BioLite N2":{"BLN2-ODB":"1.2 GHz","BLN2-OAB":"1.2 GHz","BLN2-PAB":"1.2 GHz"},"BioEntry W2":{"BEW2-OHP":"1.2 GHz Quad Core","BEW2-ODP":"1.2 GHz Quad Core","BEW2-OAP":"1.2 GHz Quad Core","BEW2-OHPB":"1.2 GHz Quad Core","BEW2-ODPB":"1.2 GHz Quad Core","BEW2-OAPB":"1.2 GHz Quad Core"},"BioEntry P2":{"BEP2-OD":"1.0 GHz ","BEP2-OA":"1.0 GHz "},"X-Station 2 Finger":{"XS2-ODPB":"1.5 GHz Quad Core","XS2-OAPB":"1.5 GHz Quad Core"},"BioLite Net":{"BLR-OC":"533MHz DSP","BLN-OC":"533MHz DSP"}}},{"category":"general","function":"Memory","models":{"BioStation A2":{"BSA2-OEPW":"8 GB Flash + 1 GB RAM","BSA2-OHPW":"8 GB Flash + 1 GB RAM","BSA2-OIPW":"8 GB Flash + 1 GB RAM","BSA2-OMPW":"8 GB Flash + 1 GB RAM"},"BioStation 2":{"BS2-OEPW":"8 GB Flash + 256 MB RAM","BS2-OHPW":"8 GB Flash + 256 MB RAM","BS2-OIPW":"8 GB Flash + 256 MB RAM","BS2-OMPW":"8 GB Flash + 256 MB RAM"},"BioStation 2a":{"BS2A-ODPB":"16 GB Flash + 2 GB RAM","BS2A-OAPWB":"16 GB Flash + 2 GB RAM"},"BioStation L2":{"BSL2-OE":"2 GB Flash + 256 MB RAM","BSL2-OM":"2 GB Flash + 256 MB RAM"},"BioLite N2":{"BLN2-ODB":"4 GB Flash + 64 Mb RAM","BLN2-OAB":"4 GB Flash + 64 Mb RAM","BLN2-PAB":"4 GB Flash + 64 Mb RAM"},"BioEntry W2":{"BEW2-OHP":"2 GB Flash + 256 MB RAM","BEW2-ODP":"2 GB Flash + 256 MB RAM","BEW2-OAP":"2 GB Flash + 256 MB RAM","BEW2-OHPB":"2 GB Flash + 256 MB RAM","BEW2-ODPB":"2 GB Flash + 256 MB RAM","BEW2-OAPB":"2 GB Flash + 256 MB RAM"},"BioEntry P2":{"BEP2-OD":"8 GB Flash + 64 MB RAM","BEP2-OA":"8 GB Flash + 64 MB RAM"},"X-Station 2 Finger":{"XS2-ODPB":"16 GB Flash + 1 GB RAM","XS2-OAPB":"16 GB Flash + 1 GB RAM"},"BioLite Net":{"BLR-OC":"16 MB RAM + 8 MB Flash","BLN-OC":"16 MB RAM + 8 MB Flash"}}},{"category":"general","function":"cryptochip","models":{"BioStation A2":{"BSA2-OEPW":true,"BSA2-OHPW":true,"BSA2-OIPW":true,"BSA2-OMPW":true},"BioStation 2":{"BS2-OEPW":true,"BS2-OHPW":true,"BS2-OIPW":true,"BS2-OMPW":true},"BioStation 2a":{"BS2A-ODPB":true,"BS2A-OAPWB":true},"BioStation L2":{"BSL2-OE":true,"BSL2-OM":true},"BioLite N2":{"BLN2-ODB":true,"BLN2-OAB":true,"BLN2-PAB":true},"BioEntry W2":{"BEW2-OHP":true,"BEW2-ODP":true,"BEW2-OAP":true,"BEW2-OHPB":true,"BEW2-ODPB":true,"BEW2-OAPB":true},"BioEntry P2":{"BEP2-OD":true,"BEP2-OA":true},"X-Station 2 Finger":{"XS2-ODPB":true,"XS2-OAPB":true},"BioLite Net":{"BLR-OC":true,"BLN-OC":true}}},{"category":"general","function":"display","models":{"BioStation A2":{"BSA2-OEPW":"5\\" color TFT touch","BSA2-OHPW":"5\\" color TFT touch","BSA2-OIPW":"5\\" color TFT touch","BSA2-OMPW":"5\\" color TFT touch"},"BioStation 2":{"BS2-OEPW":"2.8\\" color TFT LCD","BS2-OHPW":"2.8\\" color TFT LCD","BS2-OIPW":"2.8\\" color TFT LCD","BS2-OMPW":"2.8\\" color TFT LCD"},"BioStation 2a":{"BS2A-ODPB":"2.8\\" color TFT LCD","BS2A-OAPWB":"2.8\\" color TFT LCD"},"BioStation L2":{"BSL2-OE":"2\\" color TFT LCD","BSL2-OM":"2\\" color TFT LCD"},"BioLite N2":{"BLN2-ODB":"1.77\\" color TFT LCD","BLN2-OAB":"1.77\\" color TFT LCD","BLN2-PAB":"1.77\\" color TFT LCD"},"BioEntry W2":{"BEW2-OHP":false,"BEW2-ODP":false,"BEW2-OAP":false,"BEW2-OHPB":false,"BEW2-ODPB":false,"BEW2-OAPB":false},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":"4\\" IPS color LCD","XS2-OAPB":"4\\" IPS color LCD"},"BioLite Net":{"BLR-OC":"128 x 64 Graphic LCD (Monochrome)","BLN-OC":"128 x 64 Graphic LCD (Monochrome)"}}},{"category":"general","function":"resolution","models":{"BioStation A2":{"BSA2-OEPW":"480 x 854 pixels","BSA2-OHPW":"480 x 854 pixels","BSA2-OIPW":"480 x 854 pixels","BSA2-OMPW":"480 x 854 pixels"},"BioStation 2":{"BS2-OEPW":"320 x 240 pixels","BS2-OHPW":"320 x 240 pixels","BS2-OIPW":"320 x 240 pixels","BS2-OMPW":"320 x 240 pixels"},"BioStation 2a":{"BS2A-ODPB":"320 x 240 pixels","BS2A-OAPWB":"320 x 240 pixels"},"BioStation L2":{"BSL2-OE":"220 x 176 pixels","BSL2-OM":"220 x 176 pixels"},"BioLite N2":{"BLN2-ODB":"160 x 128 pixels","BLN2-OAB":"160 x 128 pixels","BLN2-PAB":"160 x 128 pixels"},"BioEntry W2":{"BEW2-OHP":false,"BEW2-ODP":false,"BEW2-OAP":false,"BEW2-OHPB":false,"BEW2-ODPB":false,"BEW2-OAPB":false},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":"480 x 800 pixels","XS2-OAPB":"480 x 800 pixels"},"BioLite Net":{"BLR-OC":"128 x 64 pixels","BLN-OC":"128 x 64 pixels"}}},{"category":"general","function":"LED","models":{"BioStation A2":{"BSA2-OEPW":"multiColor","BSA2-OHPW":"multiColor","BSA2-OIPW":"multiColor","BSA2-OMPW":"multiColor"},"BioStation 2":{"BS2-OEPW":"multiColor","BS2-OHPW":"multiColor","BS2-OIPW":"multiColor","BS2-OMPW":"multiColor"},"BioStation 2a":{"BS2A-ODPB":"multiColor","BS2A-OAPWB":"multiColor"},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":"multiColor","BEW2-ODP":"multiColor","BEW2-OAP":"multiColor","BEW2-OHPB":"multiColor","BEW2-ODPB":"multiColor","BEW2-OAPB":"multiColor"},"BioEntry P2":{"BEP2-OD":"multiColor","BEP2-OA":"multiColor"},"X-Station 2 Finger":{"XS2-ODPB":false,"XS2-OAPB":false},"BioLite Net":{"BLR-OC":"multiColor","BLN-OC":"multiColor"}}},{"category":"general","function":"sound","models":{"BioStation A2":{"BSA2-OEPW":"echoCancle","BSA2-OHPW":"echoCancle","BSA2-OIPW":"echoCancle","BSA2-OMPW":"echoCancle"},"BioStation 2":{"BS2-OEPW":"16 bit","BS2-OHPW":"16 bit","BS2-OIPW":"16 bit","BS2-OMPW":"16 bit"},"BioStation 2a":{"BS2A-ODPB":"16 bit","BS2A-OAPWB":"16 bit"},"BioStation L2":{"BSL2-OE":"16 bit","BSL2-OM":"16 bit"},"BioLite N2":{"BLN2-ODB":"16 bit","BLN2-OAB":"16 bit","BLN2-PAB":"16 bit"},"BioEntry W2":{"BEW2-OHP":"multiToneBuzzer","BEW2-ODP":"multiToneBuzzer","BEW2-OAP":"multiToneBuzzer","BEW2-OHPB":"multiToneBuzzer","BEW2-ODPB":"multiToneBuzzer","BEW2-OAPB":"multiToneBuzzer"},"BioEntry P2":{"BEP2-OD":"multiToneBuzzer","BEP2-OA":"multiToneBuzzer"},"X-Station 2 Finger":{"XS2-ODPB":"24 bit","XS2-OAPB":"24 bit"},"BioLite Net":{"BLR-OC":"multiToneBuzzer","BLN-OC":"multiToneBuzzer"}}},{"category":"general","function":"operating-temperature","models":{"BioStation A2":{"BSA2-OEPW":"-20 °C ~ 50 °C","BSA2-OHPW":"-20 °C ~ 50 °C","BSA2-OIPW":"-20 °C ~ 50 °C","BSA2-OMPW":"-20 °C ~ 50 °C"},"BioStation 2":{"BS2-OEPW":"-20 °C ~ 50 °C","BS2-OHPW":"-20 °C ~ 50 °C","BS2-OIPW":"-20 °C ~ 50 °C","BS2-OMPW":"-20 °C ~ 50 °C"},"BioStation 2a":{"BS2A-ODPB":"-20 °C ~ 60 °C","BS2A-OAPWB":"-20 °C ~ 60 °C"},"BioStation L2":{"BSL2-OE":"-20 °C ~ 50 °C","BSL2-OM":"-20 °C ~ 50 °C"},"BioLite N2":{"BLN2-ODB":"-20 °C ~ 50 °C","BLN2-OAB":"-20 °C ~ 50 °C","BLN2-PAB":"-10 °C ~ 50 °C"},"BioEntry W2":{"BEW2-OHP":"-20 °C ~ 50 °C","BEW2-ODP":"-20 °C ~ 50 °C","BEW2-OAP":"-20 °C ~ 50 °C","BEW2-OHPB":"-20 °C ~ 50 °C","BEW2-ODPB":"-20 °C ~ 50 °C","BEW2-OAPB":"-20 °C ~ 50 °C"},"BioEntry P2":{"BEP2-OD":"-20 °C ~ 50 °C","BEP2-OA":"-20 °C ~ 50 °C"},"X-Station 2 Finger":{"XS2-ODPB":"-20 °C ~ 50 °C","XS2-OAPB":"-20 °C ~ 50 °C"},"BioLite Net":{"BLR-OC":"-20 °C ~ 50 °C","BLN-OC":"-20 °C ~ 50 °C"}}},{"category":"general","function":"storage-temperature","models":{"BioStation A2":{"BSA2-OEPW":"-40 °C ~ 70 °C","BSA2-OHPW":"-40 °C ~ 70 °C","BSA2-OIPW":"-40 °C ~ 70 °C","BSA2-OMPW":"-40 °C ~ 70 °C"},"BioStation 2":{"BS2-OEPW":"-40 °C ~ 70 °C","BS2-OHPW":"-40 °C ~ 70 °C","BS2-OIPW":"-40 °C ~ 70 °C","BS2-OMPW":"-40 °C ~ 70 °C"},"BioStation 2a":{"BS2A-ODPB":"-40 °C ~ 70 °C","BS2A-OAPWB":"-40 °C ~ 70 °C"},"BioStation L2":{"BSL2-OE":"-40 °C ~ 70 °C","BSL2-OM":"-40 °C ~ 70 °C"},"BioLite N2":{"BLN2-ODB":"-40 °C ~ 70 °C","BLN2-OAB":"-40 °C ~ 70 °C","BLN2-PAB":"-20 °C ~ 60 °C"},"BioEntry W2":{"BEW2-OHP":"-40 °C ~ 70 °C","BEW2-ODP":"-40 °C ~ 70 °C","BEW2-OAP":"-40 °C ~ 70 °C","BEW2-OHPB":"-40 °C ~ 70 °C","BEW2-ODPB":"-40 °C ~ 70 °C","BEW2-OAPB":"-40 °C ~ 70 °C"},"BioEntry P2":{"BEP2-OD":"-40 °C ~ 70 °C","BEP2-OA":"-40 °C ~ 70 °C"},"X-Station 2 Finger":{"XS2-ODPB":"-40 °C ~ 70 °C","XS2-OAPB":"-40 °C ~ 70 °C"},"BioLite Net":{"BLR-OC":"-40 °C ~ 70 °C","BLN-OC":"-40 °C ~ 70 °C"}}},{"category":"general","function":"operating-humidity","models":{"BioStation A2":{"BSA2-OEPW":"operating-humidity-spec","BSA2-OHPW":"operating-humidity-spec","BSA2-OIPW":"operating-humidity-spec","BSA2-OMPW":"operating-humidity-spec"},"BioStation 2":{"BS2-OEPW":"operating-humidity-spec","BS2-OHPW":"operating-humidity-spec","BS2-OIPW":"operating-humidity-spec","BS2-OMPW":"operating-humidity-spec"},"BioStation 2a":{"BS2A-ODPB":"operating-humidity-spec","BS2A-OAPWB":"operating-humidity-spec"},"BioStation L2":{"BSL2-OE":"operating-humidity-spec","BSL2-OM":"operating-humidity-spec"},"BioLite N2":{"BLN2-ODB":"operating-humidity-spec","BLN2-OAB":"operating-humidity-spec","BLN2-PAB":"operating-humidity-spec"},"BioEntry W2":{"BEW2-OHP":"operating-humidity-spec","BEW2-ODP":"operating-humidity-spec","BEW2-OAP":"operating-humidity-spec","BEW2-OHPB":"operating-humidity-spec","BEW2-ODPB":"operating-humidity-spec","BEW2-OAPB":"operating-humidity-spec"},"BioEntry P2":{"BEP2-OD":"operating-humidity-spec","BEP2-OA":"operating-humidity-spec"},"X-Station 2 Finger":{"XS2-ODPB":"operating-humidity-spec","XS2-OAPB":"operating-humidity-spec"},"BioLite Net":{"BLR-OC":"operating-humidity-spec","BLN-OC":"operating-humidity-spec"}}},{"category":"general","function":"storage-humidity","models":{"BioStation A2":{"BSA2-OEPW":"storage-humidity-spec","BSA2-OHPW":"storage-humidity-spec","BSA2-OIPW":"storage-humidity-spec","BSA2-OMPW":"storage-humidity-spec"},"BioStation 2":{"BS2-OEPW":"storage-humidity-spec","BS2-OHPW":"storage-humidity-spec","BS2-OIPW":"storage-humidity-spec","BS2-OMPW":"storage-humidity-spec"},"BioStation 2a":{"BS2A-ODPB":"storage-humidity-spec","BS2A-OAPWB":"storage-humidity-spec"},"BioStation L2":{"BSL2-OE":"storage-humidity-spec","BSL2-OM":"storage-humidity-spec"},"BioLite N2":{"BLN2-ODB":"storage-humidity-spec","BLN2-OAB":"storage-humidity-spec","BLN2-PAB":"storage-humidity-spec"},"BioEntry W2":{"BEW2-OHP":"storage-humidity-spec","BEW2-ODP":"storage-humidity-spec","BEW2-OAP":"storage-humidity-spec","BEW2-OHPB":"storage-humidity-spec","BEW2-ODPB":"storage-humidity-spec","BEW2-OAPB":"storage-humidity-spec"},"BioEntry P2":{"BEP2-OD":"storage-humidity-spec","BEP2-OA":"storage-humidity-spec"},"X-Station 2 Finger":{"XS2-ODPB":"storage-humidity-spec","XS2-OAPB":"storage-humidity-spec"},"BioLite Net":{"BLR-OC":"storage-humidity-spec","BLN-OC":"storage-humidity-spec"}}},{"category":"general","function":"weight","models":{"BioStation A2":{"BSA2-OEPW":"d440b89","BSA2-OHPW":"d440b89","BSA2-OIPW":"d440b89","BSA2-OMPW":"d440b89"},"BioStation 2":{"BS2-OEPW":"d440b130","BS2-OHPW":"d440b130","BS2-OIPW":"d440b130","BS2-OMPW":"d440b130"},"BioStation 2a":{"BS2A-ODPB":"d429b142","BS2A-OAPWB":"d429b142"},"BioStation L2":{"BSL2-OE":"d280b61","BSL2-OM":"d280b61"},"BioLite N2":{"BLN2-ODB":"d255b57","BLN2-OAB":"d255b57","BLN2-PAB":"d255b57"},"BioEntry W2":{"BEW2-OHP":"d251b43","BEW2-ODP":"d251b43","BEW2-OAP":"d251b43","BEW2-OHPB":"d251b43","BEW2-ODPB":"d251b43","BEW2-OAPB":"d251b43"},"BioEntry P2":{"BEP2-OD":"d162b39","BEP2-OA":"d162b39"},"X-Station 2 Finger":{"XS2-ODPB":"d375b86","XS2-OAPB":"d375b86"},"BioLite Net":{"BLR-OC":"d242b59","BLN-OC":"d242b59"}}},{"category":"general","function":"dimension","models":{"BioStation A2":{"BSA2-OEPW":"155 x 155 x 40","BSA2-OHPW":"155 x 155 x 40","BSA2-OIPW":"155 x 155 x 40","BSA2-OMPW":"155 x 155 x 40"},"BioStation 2":{"BS2-OEPW":"142 x 144 x 45 (Bottom) / 38 (Top)","BS2-OHPW":"142 x 144 x 45 (Bottom) / 38 (Top)","BS2-OIPW":"142 x 144 x 45 (Bottom) / 38 (Top)","BS2-OMPW":"142 x 144 x 45 (Bottom) / 38 (Top)"},"BioStation 2a":{"BS2A-ODPB":"142 x 144 x 45 (Bottom) / 37.8 (Top) (mm)","BS2A-OAPWB":"142 x 144 x 45 (Bottom) / 37.8 (Top) (mm)"},"BioStation L2":{"BSL2-OE":"70.9 x 200.9 x 44.3 (Bottom) / 34.2 (Top)","BSL2-OM":"70.9 x 200.9 x 44.3 (Bottom) / 34.2 (Top)"},"BioLite N2":{"BLN2-ODB":"58 x 190 x 44 (Bottom) / 34.6 (Top)","BLN2-OAB":"58 x 190 x 44 (Bottom) / 34.6 (Top)","BLN2-PAB":"58 x 190 x 44 (Bottom) / 34.6 (Top)"},"BioEntry W2":{"BEW2-OHP":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2-ODP":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2-OAP":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2-OHPB":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2-ODPB":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2-OAPB":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)"},"BioEntry P2":{"BEP2-OD":"50.1 x 164 x 38","BEP2-OA":"50.1 x 164 x 38"},"X-Station 2 Finger":{"XS2-ODPB":"82 x 208.5 x 53 (Bottom) / 25.9 (Top)","XS2-OAPB":"82 x 208.5 x 53 (Bottom) / 25.9 (Top)"},"BioLite Net":{"BLR-OC":"60 x 185 x 40","BLN-OC":"60 x 185 x 40"}}},{"category":"interface","function":"ethernet","models":{"BioStation A2":{"BSA2-OEPW":"ethernet-spec","BSA2-OHPW":"ethernet-spec","BSA2-OIPW":"ethernet-spec","BSA2-OMPW":"ethernet-spec"},"BioStation 2":{"BS2-OEPW":"ethernet-spec","BS2-OHPW":"ethernet-spec","BS2-OIPW":"ethernet-spec","BS2-OMPW":"ethernet-spec"},"BioStation 2a":{"BS2A-ODPB":"ethernet-spec","BS2A-OAPWB":"ethernet-spec"},"BioStation L2":{"BSL2-OE":"ethernet-spec","BSL2-OM":"ethernet-spec"},"BioLite N2":{"BLN2-ODB":"ethernet-spec","BLN2-OAB":"ethernet-spec","BLN2-PAB":"ethernet-spec"},"BioEntry W2":{"BEW2-OHP":"ethernet-spec","BEW2-ODP":"ethernet-spec","BEW2-OAP":"ethernet-spec","BEW2-OHPB":"ethernet-spec","BEW2-ODPB":"ethernet-spec","BEW2-OAPB":"ethernet-spec"},"BioEntry P2":{"BEP2-OD":"ethernet-spec","BEP2-OA":"ethernet-spec"},"X-Station 2 Finger":{"XS2-ODPB":"ethernet-spec","XS2-OAPB":"ethernet-spec"},"BioLite Net":{"BLR-OC":"ethernet-spec","BLN-OC":"ethernet-spec"}}},{"category":"interface","function":"wifi","models":{"BioStation A2":{"BSA2-OEPW":"Built-in, IEEE 802.11 b/g","BSA2-OHPW":"Built-in, IEEE 802.11 b/g","BSA2-OIPW":"Built-in, IEEE 802.11 b/g","BSA2-OMPW":"Built-in, IEEE 802.11 b/g"},"BioStation 2":{"BS2-OEPW":"Built-in, IEEE 802.11 b/g","BS2-OHPW":"Built-in, IEEE 802.11 b/g","BS2-OIPW":"Built-in, IEEE 802.11 b/g","BS2-OMPW":"Built-in, IEEE 802.11 b/g"},"BioStation 2a":{"BS2A-ODPB":false,"BS2A-OAPWB":"802.11 b/ g/ n 2.4 GHz"},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":false,"BEW2-ODP":false,"BEW2-OAP":false,"BEW2-OHPB":false,"BEW2-ODPB":false,"BEW2-OAPB":false},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":false,"XS2-OAPB":false},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"interface","function":"networkprotocol","models":{"BioStation A2":{"BSA2-OEPW":"TCP, UDP","BSA2-OHPW":"TCP, UDP","BSA2-OIPW":"TCP, UDP","BSA2-OMPW":"TCP, UDP"},"BioStation 2":{"BS2-OEPW":"TCP, UDP","BS2-OHPW":"TCP, UDP","BS2-OIPW":"TCP, UDP","BS2-OMPW":"TCP, UDP"},"BioStation 2a":{"BS2A-ODPB":"TCP, UDP","BS2A-OAPWB":"TCP, UDP"},"BioStation L2":{"BSL2-OE":"TCP, UDP","BSL2-OM":"TCP, UDP"},"BioLite N2":{"BLN2-ODB":"TCP, UDP","BLN2-OAB":"TCP, UDP","BLN2-PAB":"TCP, UDP"},"BioEntry W2":{"BEW2-OHP":"TCP, UDP","BEW2-ODP":"TCP, UDP","BEW2-OAP":"TCP, UDP","BEW2-OHPB":"TCP, UDP","BEW2-ODPB":"TCP, UDP","BEW2-OAPB":"TCP, UDP"},"BioEntry P2":{"BEP2-OD":"TCP, UDP","BEP2-OA":"TCP, UDP"},"X-Station 2 Finger":{"XS2-ODPB":"TCP, UDP","XS2-OAPB":"TCP, UDP"},"BioLite Net":{"BLR-OC":"TCP, UDP","BLN-OC":"TCP, UDP"}}},{"category":"interface","function":"rs485","models":{"BioStation A2":{"BSA2-OEPW":"1chmasterslave","BSA2-OHPW":"1chmasterslave","BSA2-OIPW":"1chmasterslave","BSA2-OMPW":"1chmasterslave"},"BioStation 2":{"BS2-OEPW":"1chmasterslave","BS2-OHPW":"1chmasterslave","BS2-OIPW":"1chmasterslave","BS2-OMPW":"1chmasterslave"},"BioStation 2a":{"BS2A-ODPB":"1chmasterslave","BS2A-OAPWB":"1chmasterslave"},"BioStation L2":{"BSL2-OE":"1chmasterslave","BSL2-OM":"1chmasterslave"},"BioLite N2":{"BLN2-ODB":"1chmasterslave","BLN2-OAB":"1chmasterslave","BLN2-PAB":"1chmasterslave"},"BioEntry W2":{"BEW2-OHP":"1chmasterslave","BEW2-ODP":"1chmasterslave","BEW2-OAP":"1chmasterslave","BEW2-OHPB":"1chmasterslave","BEW2-ODPB":"1chmasterslave","BEW2-OAPB":"1chmasterslave"},"BioEntry P2":{"BEP2-OD":"1chmasterslave","BEP2-OA":"1chmasterslave"},"X-Station 2 Finger":{"XS2-ODPB":"1chmasterslave","XS2-OAPB":"1chmasterslave"},"BioLite Net":{"BLR-OC":"1chmasterslave","BLN-OC":"1chmasterslave"}}},{"category":"interface","function":"rs485-protocol","models":{"BioStation A2":{"BSA2-OEPW":"osdpv2","BSA2-OHPW":"osdpv2","BSA2-OIPW":"osdpv2","BSA2-OMPW":"osdpv2"},"BioStation 2":{"BS2-OEPW":"osdpv2","BS2-OHPW":"osdpv2","BS2-OIPW":"osdpv2","BS2-OMPW":"osdpv2"},"BioStation 2a":{"BS2A-ODPB":"osdpv2","BS2A-OAPWB":"osdpv2"},"BioStation L2":{"BSL2-OE":"osdpv2","BSL2-OM":"osdpv2"},"BioLite N2":{"BLN2-ODB":"osdpv2","BLN2-OAB":"osdpv2","BLN2-PAB":"osdpv2"},"BioEntry W2":{"BEW2-OHP":"osdpv2","BEW2-ODP":"osdpv2","BEW2-OAP":"osdpv2","BEW2-OHPB":"osdpv2","BEW2-ODPB":"osdpv2","BEW2-OAPB":"osdpv2"},"BioEntry P2":{"BEP2-OD":"osdpv2","BEP2-OA":"osdpv2"},"X-Station 2 Finger":{"XS2-ODPB":"osdpv2","XS2-OAPB":"osdpv2"},"BioLite Net":{"BLR-OC":"osdpv2","BLN-OC":"osdpv2"}}},{"category":"interface","function":"wiegand","models":{"BioStation A2":{"BSA2-OEPW":"1chin1chout","BSA2-OHPW":"1chin1chout","BSA2-OIPW":"1chin1chout","BSA2-OMPW":"1chin1chout"},"BioStation 2":{"BS2-OEPW":"1chin1chout","BS2-OHPW":"1chin1chout","BS2-OIPW":"1chin1chout","BS2-OMPW":"1chin1chout"},"BioStation 2a":{"BS2A-ODPB":"1chin1chout","BS2A-OAPWB":"1chin1chout"},"BioStation L2":{"BSL2-OE":"1chin1choutopt1","BSL2-OM":"1chin1choutopt1"},"BioLite N2":{"BLN2-ODB":"1chin1choutopt1","BLN2-OAB":"1chin1choutopt1","BLN2-PAB":"1chin1choutopt1"},"BioEntry W2":{"BEW2-OHP":"1chin1choutopt1","BEW2-ODP":"1chin1choutopt1","BEW2-OAP":"1chin1choutopt1","BEW2-OHPB":"1chin1choutopt1","BEW2-ODPB":"1chin1choutopt1","BEW2-OAPB":"1chin1choutopt1"},"BioEntry P2":{"BEP2-OD":"1chin1choutopt1","BEP2-OA":"1chin1choutopt1"},"X-Station 2 Finger":{"XS2-ODPB":"1chin1choutopt2","XS2-OAPB":"1chin1choutopt2"},"BioLite Net":{"BLR-OC":"1chin1choutopt2","BLN-OC":"1chin1choutopt2"}}},{"category":"interface","function":"Input","models":{"BioStation A2":{"BSA2-OEPW":"2chinput","BSA2-OHPW":"2chinput","BSA2-OIPW":"2chinput","BSA2-OMPW":"2chinput"},"BioStation 2":{"BS2-OEPW":"2chinout","BS2-OHPW":"2chinout","BS2-OIPW":"2chinout","BS2-OMPW":"2chinout"},"BioStation 2a":{"BS2A-ODPB":"3chinput","BS2A-OAPWB":"3chinput"},"BioStation L2":{"BSL2-OE":"2chinput","BSL2-OM":"2chinput"},"BioLite N2":{"BLN2-ODB":"2chinput","BLN2-OAB":"2chinput","BLN2-PAB":"2chinput"},"BioEntry W2":{"BEW2-OHP":"2chinput","BEW2-ODP":"2chinput","BEW2-OAP":"2chinput","BEW2-OHPB":"2chinput","BEW2-ODPB":"2chinput","BEW2-OAPB":"2chinput"},"BioEntry P2":{"BEP2-OD":"2chinput","BEP2-OA":"2chinput"},"X-Station 2 Finger":{"XS2-ODPB":"2chinput","XS2-OAPB":"2chinput"},"BioLite Net":{"BLR-OC":"2chinput","BLN-OC":"2chinput"}}},{"category":"interface","function":"relay","models":{"BioStation A2":{"BSA2-OEPW":"2relay","BSA2-OHPW":"2relay","BSA2-OIPW":"2relay","BSA2-OMPW":"2relay"},"BioStation 2":{"BS2-OEPW":"1relay","BS2-OHPW":"1relay","BS2-OIPW":"1relay","BS2-OMPW":"1relay"},"BioStation 2a":{"BS2A-ODPB":"1relay","BS2A-OAPWB":"1relay"},"BioStation L2":{"BSL2-OE":"1relay","BSL2-OM":"1relay"},"BioLite N2":{"BLN2-ODB":"1relay","BLN2-OAB":"1relay","BLN2-PAB":"1relay"},"BioEntry W2":{"BEW2-OHP":"1relay","BEW2-ODP":"1relay","BEW2-OAP":"1relay","BEW2-OHPB":"1relay","BEW2-ODPB":"1relay","BEW2-OAPB":"1relay"},"BioEntry P2":{"BEP2-OD":"1relay","BEP2-OA":"1relay"},"X-Station 2 Finger":{"XS2-ODPB":"1relay","XS2-OAPB":"1relay"},"BioLite Net":{"BLR-OC":"1relay","BLN-OC":"1relay"}}},{"category":"interface","function":"poe","models":{"BioStation A2":{"BSA2-OEPW":"ieee8023af","BSA2-OHPW":"ieee8023af","BSA2-OIPW":"ieee8023af","BSA2-OMPW":"ieee8023af"},"BioStation 2":{"BS2-OEPW":"ieee8023af","BS2-OHPW":"ieee8023af","BS2-OIPW":"ieee8023af","BS2-OMPW":"ieee8023af"},"BioStation 2a":{"BS2A-ODPB":"ieee8023af","BS2A-OAPWB":"ieee8023af"},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":"ieee8023af","BEW2-ODP":"ieee8023af","BEW2-OAP":"ieee8023af","BEW2-OHPB":"ieee8023af","BEW2-ODPB":"ieee8023af","BEW2-OAPB":"ieee8023af"},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":"ieee8023af","XS2-OAPB":"ieee8023af"},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"interface","function":"intercom","models":{"BioStation A2":{"BSA2-OEPW":true,"BSA2-OHPW":true,"BSA2-OIPW":true,"BSA2-OMPW":true},"BioStation 2":{"BS2-OEPW":true,"BS2-OHPW":true,"BS2-OIPW":true,"BS2-OMPW":true},"BioStation 2a":{"BS2A-ODPB":false,"BS2A-OAPWB":false},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":false,"BEW2-ODP":false,"BEW2-OAP":false,"BEW2-OHPB":false,"BEW2-ODPB":false,"BEW2-OAPB":false},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":false,"XS2-OAPB":false},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"interface","function":"USB","models":{"BioStation A2":{"BSA2-OEPW":true,"BSA2-OHPW":true,"BSA2-OIPW":true,"BSA2-OMPW":true},"BioStation 2":{"BS2-OEPW":true,"BS2-OHPW":true,"BS2-OIPW":true,"BS2-OMPW":true},"BioStation 2a":{"BS2A-ODPB":true,"BS2A-OAPWB":true},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":false,"BEW2-ODP":false,"BEW2-OAP":false,"BEW2-OHPB":false,"BEW2-ODPB":false,"BEW2-OAPB":false},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":true,"XS2-OAPB":true},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"interface","function":"sdcard","models":{"BioStation A2":{"BSA2-OEPW":"microSD card (최대 32 GB)","BSA2-OHPW":"microSD card (최대 32 GB)","BSA2-OIPW":"microSD card (최대 32 GB)","BSA2-OMPW":"microSD card (최대 32 GB)"},"BioStation 2":{"BS2-OEPW":false,"BS2-OHPW":false,"BS2-OIPW":false,"BS2-OMPW":false},"BioStation 2a":{"BS2A-ODPB":false,"BS2A-OAPWB":false},"BioStation L2":{"BSL2-OE":false,"BSL2-OM":false},"BioLite N2":{"BLN2-ODB":false,"BLN2-OAB":false,"BLN2-PAB":false},"BioEntry W2":{"BEW2-OHP":false,"BEW2-ODP":false,"BEW2-OAP":false,"BEW2-OHPB":false,"BEW2-ODPB":false,"BEW2-OAPB":false},"BioEntry P2":{"BEP2-OD":false,"BEP2-OA":false},"X-Station 2 Finger":{"XS2-ODPB":false,"XS2-OAPB":false},"BioLite Net":{"BLR-OC":false,"BLN-OC":false}}},{"category":"interface","function":"tamper","models":{"BioStation A2":{"BSA2-OEPW":true,"BSA2-OHPW":true,"BSA2-OIPW":true,"BSA2-OMPW":true},"BioStation 2":{"BS2-OEPW":true,"BS2-OHPW":true,"BS2-OIPW":true,"BS2-OMPW":true},"BioStation 2a":{"BS2A-ODPB":true,"BS2A-OAPWB":true},"BioStation L2":{"BSL2-OE":true,"BSL2-OM":true},"BioLite N2":{"BLN2-ODB":true,"BLN2-OAB":true,"BLN2-PAB":true},"BioEntry W2":{"BEW2-OHP":true,"BEW2-ODP":true,"BEW2-OAP":true,"BEW2-OHPB":true,"BEW2-ODPB":true,"BEW2-OAPB":true},"BioEntry P2":{"BEP2-OD":true,"BEP2-OA":true},"X-Station 2 Finger":{"XS2-ODPB":true,"XS2-OAPB":true},"BioLite Net":{"BLR-OC":true,"BLN-OC":true}}},{"category":"electric","function":"power","models":{"BioStation A2":{"BSA2-OEPW":"p12ve1a","BSA2-OHPW":"p12ve1a","BSA2-OIPW":"p12ve1a","BSA2-OMPW":"p12ve1a"},"BioStation 2":{"BS2-OEPW":"p12ve8a","BS2-OHPW":"p12ve8a","BS2-OIPW":"p12ve8a","BS2-OMPW":"p12ve8a"},"BioStation 2a":{"BS2A-ODPB":"p12ve8a24v4a","BS2A-OAPWB":"p12ve8a24v4a"},"BioStation L2":{"BSL2-OE":"p12ve5a","BSL2-OM":"p12ve5a"},"BioLite N2":{"BLN2-ODB":"p12ve4a","BLN2-OAB":"p12ve4a","BLN2-PAB":"p12ve4a"},"BioEntry W2":{"BEW2-OHP":"p12ve5a","BEW2-ODP":"p12ve5a","BEW2-OAP":"p12ve5a","BEW2-OHPB":"p12ve5a","BEW2-ODPB":"p12ve5a","BEW2-OAPB":"p12ve5a"},"BioEntry P2":{"BEP2-OD":"p12ve2a","BEP2-OA":"p12ve2a"},"X-Station 2 Finger":{"XS2-ODPB":"p12ve8a24v5a","XS2-OAPB":"p12ve8a24v5a"},"BioLite Net":{"BLR-OC":"p12ve3a","BLN-OC":"p12ve3a"}}}]')
// EXTERNAL MODULE: ./src/components/CompareTable/index.js + 2 modules
var CompareTable = __webpack_require__(20173);
;// CONCATENATED MODULE: ./docs/reference/compares/fingerprint-devices-specs.mdx


const frontMatter = {
	id: 'fingerprint-devices-specs',
	title: '사양 비교',
	hide_table_of_contents: true,
	isTranslationMissing: false
};
const contentTitle = '지문 인식 장치 사양 비교';

const assets = {

};





const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "지문-인식-장치-사양-비교",
        children: "지문 인식 장치 사양 비교"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(CompareTable/* RenderTableSpecs */.f, {
      data: fingerprint_specs_namespaceObject
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



}),
20173: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ RenderTableSpecs),
  h: () => (/* binding */ RenderTableFuncs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/tabulator-tables/dist/js/tabulator_esm.mjs
var tabulator_esm = __webpack_require__(15735);
// EXTERNAL MODULE: ./node_modules/tabulator-tables/dist/css/tabulator.min.css
var tabulator_min = __webpack_require__(10409);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2933);
;// CONCATENATED MODULE: ./src/components/CompareTable/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"container":"container_tceN","tableContainerBlock":"tableContainerBlock_Iduk","tableContainer":"tableContainer_BeFC","subtitle":"subtitle_I2lI"});
;// CONCATENATED MODULE: ./src/components/CompareTable/resources.json
var resources_namespaceObject = JSON.parse('{"ko":{"fingerprint_title":"지문 인식 장치 비교","main_function":"주요 기능","main_function_compare":"주요 기능 비교","main_function_compare_note":"🔶: 제품 세부 모델에 따라 지원 여부가 다를 수 있습니다.","product_specs":"제품 사양","product_specs_compare":"제품 사양 비교","credential":"크리덴셜","face":"얼굴","fingerprint":"지문","rfid":"RFID","rfidcard":"RFID 카드","mobile":"모바일 카드","pin":"PIN","sckeypad":"스크램블 키패드(PIN)","qr":"QR/바코드","basic":"기본","wd":"방수 방진","breakprevent":"파손 방지","credential-auth":"크리덴셜 인증","display":"디스플레이","keypad":"키패드","tcp-ip":"TCP/IP","wifi":"Wi-Fi","rs485":"RS-485","rs485-protocol":"RS-485 통신 프로토콜","wiegand":"Wiegand","tamper":"탬퍼","advanced":"고급","image-log":"이미지 로그","fake-fingerprint-detection":"위조 지문 검출","fake-face-detection":"위조 얼굴 검출","face-detection":"얼굴 검출","intercom":"인터폰","poe":"PoE","mullion-type":"멀리온 타입","gang-box-type":"갱 박스 타입","multi-card-reading":"멀티 카드 읽기","rfoption":"RF 옵션","protectlevel":"보호 등급","template":"템플릿","detection":"추출 / 매치","supportExcept":"지원, 별도의 장치 라이선스가 필요합니다.","minex":"MINEX 인증 및 호환","supportSW":"지원 (SW 기반)","supportSWHW":"지원 (HW + SW 기반)","storage":"저장 용량","maxUser":"최대 사용자 수","maxCred1onN":"최대 크리덴셜 수(1:N)","finger100":"지문: 100,000","finger20":"지문: 20,000","finger10":"지문: 10,000","finger5":"지문: 5,000","maxCred1on1":"최대 크리덴셜 수(1:1)","cred500":"지문: 500,000 / 카드: 500,000 / PIN: 500,000","cred2t500":"지문: 500,000 / 카드: 500,000","cred10":"지문: 10,000 / 카드: 10,000 / PIN: 10,000","cred2t10":"지문: 10,000 / 카드: 10,000","cred5":"지문: 5,000 / 카드: 5,000 /<br/>PIN: 5,000","maxTextLog":"최대 텍스트 로그 수","maxImageLog":"최대 이미지 로그 수","general":"일반","cryptochip":"크립토 칩","resolution":"화면 해상도","multiColor":"다중 색상","sound":"소리","echoCancle":"24 bit/Voice DSP (에코 캔슬)","multiToneBuzzer":"멀티톤 버저","operating-temperature":"동작 온도","storage-temperature":"보관 온도","operating-humidity":"동작 습도","operating-humidity-spec":"0% ~ 80%, 비응축","storage-humidity":"보관 습도","storage-humidity-spec":"0% ~ 90%, 비응축","weight":"무게","d440b89":"장치: 440g, 브래킷: 89g (와셔 및 볼트 포함)","d440b130":"장치: 440g, 브래킷: 130g (와셔 및 스크류 포함)","d429b142":"장치: 429g, 브래킷: 142g (와셔 및 볼트 포함)","d280b61":"장치: 280g, 브래킷: 61g (와셔 및 볼트 포함)","d255b57":"장치: 255g, 브래킷: 57g (와셔 및 볼트 포함)","d251b43":"장치: 251g, 브래킷: 43g (와셔 및 볼트 포함)","d162b39":"장치: 162g, 브래킷: 39g (와셔 및 볼트 포함)","d375b86":"장치: 375g, 브래킷: 86g (와셔 및 볼트 포함)","d242b59":"장치: 242g, 브래킷: 59g (와셔 및 볼트 포함)","dimension":"치수 (WxHxD, mm)","interface":"인터페이스","ethernet":"이더넷","ethernet-spec":"10/100 Mbps, 자동 MDI/MDI-X","networkprotocol":"네트워크 프로토콜","1chmasterslave":"1채널 마스터/슬레이브 (선택 가능)","osdpv2":"OSDP V2 호환","1chin1chout":"1채널 입력, 1채널 출력","1chin1choutopt1":"1채널 입력/출력 (선택 가능)","1chin1choutopt2":"1채널 입력/1채널 출력 (선택 가능)","2chinput":"2채널 입력","2chinout":"2채널 입력, 2채널 출력","3chinput":"3채널 입력","relay":"릴레이","1relay":"1 릴레이","2relay":"2 릴레이","ieee8023af":"IEEE 802.3af 호환","sdcard":"SD 카드","microSD":"microSD 카드 (최대 32 GB)","electric":"전기 규격","power":"전원","p12ve1a":"전압: 12 Vdc, 전류: 최대 1 A","p12ve8a":"전압: 12 Vdc, 전류: 최대 0.8 A","p12ve8a24v4a":"전압: 12 Vdc, 전류: 최대 0.8 A / 전압: 24 Vdc , 전류: 최대 0.4 A","p12ve8a24v5a":"전압: 12 Vdc, 전류: 최대 0.8 A / 전압: 24 Vdc , 전류: 최대 0.5 A","p12ve5a":"전압: 12 Vdc, 전류: 최대 0.5 A","p12ve4a":"전압: 12 Vdc, 전류: 최대 0.4 A","p12ve3a":"전압: 12 Vdc, 전류: 최대 0.3 A","p12ve2a":"전압: 12 Vdc, 전류: 최대 0.2 A"},"en":{"fingerprint_title":"Compare Fingerprint Recognition Devices","main_function":"Main Function","main_function_compare":"Compare main functions","main_function_compare_note":"🔶: Support may vary depending on the specific product model.","product_specs":"Product specifications","product_specs_compare":"Compare product specifications","credential":"Credential","face":"Face","fingerprint":"Fingerprint","rfid":"RFID","rfidcard":"RFID card","mobile":"Mobile card","pin":"PIN","sckeypad":"Scramble Keypad (PIN)","qr":"QR/Barcode","basic":"Basic","wd":"Waterproof/Dustproof","breakprevent":"Break prevent","credential-auth":"Credential authentication","display":"Display","keypad":"Keypad","tcp-ip":"TCP/IP","wifi":"Wi-Fi","rs485":"RS-485","rs485-protocol":"RS-485 communication protocol","wiegand":"Wiegand","tamper":"Tamper","advanced":"Advanced","image-log":"Image log","fake-fingerprint-detection":"Fake fingerprint detection","fake-face-detection":"Fake face detection","face-detection":"Face detection","intercom":"Intercom","poe":"PoE","mullion-type":"Mullion type","gang-box-type":"Gang box type","multi-card-reading":"Multi card reading","rfoption":"RF option","protectlevel":"Protection Level","detection":"Detection / Match","supportExcept":"Support, a separate device license is required.","minex":"MINEX certified and compatible","supportSW":"Support (Based SW)","supportSWHW":"Support (Based HW, SW)","storage":"Storage size","maxUser":"Maximum user count","maxCred1onN":"Maximum credential count (1:N)","finger100":"Fingerprint: 100,000","finger20":"Fingerprint: 20,000","finger10":"Fingerprint: 10,000","finger5":"Fingerprint: 5,000","maxCred1on1":"Maximum credential count (1:1)","cred500":"Fingerprint: 500,000 / Card: 500,000 / PIN: 500,000","cred2t500":"Fingerprint: 500,000 / Card: 500,000","cred10":"Fingerprint: 10,000 / Card: 10,000 / PIN: 10,000","cred2t10":"Fingerprint: 10,000 / Card: 10,000","cred5":"Fingerprint: 5,000 / Card: 5,000 /<br/>PIN: 5,000","maxTextLog":"Maximum text log count","maxImageLog":"Maximum image log count","general":"General","cryptochip":"Crypto chip","resolution":"Screen resolution","multiColor":"Multi-color","sound":"Sound","echoCancle":"24 bit/Voice DSP (echo cancellation)","multiToneBuzzer":"Multi-tone buzzer","operating-temperature":"Operating temperature","storage-temperature":"Storage temperature","operating-humidity":"Operating humidity","operating-humidity-spec":"0% ~ 80%, non-condensing","storage-humidity":"Storage humidity","storage-humidity-spec":"0% ~ 90%, non-condensing","weight":"Weight","d440b89":"Device: 440g, Bracket: 89g (Including washer and bolt)","d440b130":"Device: 440g, Bracket: 130g (Including washer and screw)","d429b142":"Device: 429g, Bracket: 142g (Including washer and bolt)","d280b61":"Device: 280g, Bracket: 61g (Including washer and bolt)","d255b57":"Device: 255g, Bracket: 57g (Including washer and bolt)","d251b43":"Device: 251g, Bracket: 43g (Including washer and bolt)","d162b39":"Device: 162g, Bracket: 39g (Including washer and bolt)","d375b86":"Device: 375g, Bracket: 86g (Including washer and bolt)","d242b59":"Device: 242g, Bracket: 59g (Including washer and bolt)","dimension":"Dimension (WxHxD, mm)","interface":"Interface","ethernet":"Ethernet","ethernet-spec":"10/100 Mbps, auto MDI/MDI-X","networkprotocol":"Network Protocol","1chmasterslave":"1ch Host or Slave (selectable)","osdpv2":"OSDP V2 compliant","1chin1chout":"1ch input, 1ch output","1chin1choutopt1":"1ch input/output (selectable)","1chin1choutopt2":"1ch input/1ch output (selectable)","2chinput":"2ch input","2chinout":"2ch inputs, 2ch outputs","3chinput":"3ch inputs","relay":"Relay","1relay":"1 Relay","2relay":"2 Relay","ieee8023af":"IEEE 802.3af compliant","sdcard":"SD card","microSD":"microSD card (Supports up to 32 GB)","electric":"Electrical","power":"Power","p12ve1a":"Voltage: 12 Vdc, Current: Max. 1 A","p12ve8a":"Voltage: 12 Vdc, Current: Max. 0.8 A","p12ve8a24v4a":"Voltage: 12, Vdc Current: Max. 0.8 A / Voltage: 24 Vdc, Current: Max. 0.4 A","p12ve8a24v5a":"Voltage: 12 Vdc, Current: Max. 0.8 A / Voltage: 24 Vdc, Current: Max. 0.5 A","p12ve5a":"Voltage: 12 Vdc, Current: Max. 0.5 A","p12ve4a":"Voltage: 12 Vdc, Current: Max. 0.4 A","p12ve3a":"Voltage: 12 Vdc, Current: Max. 0.3 A","p12ve2a":"Voltage: 12 Vdc, Current: Max. 0.2 A"}}')
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
    width: 150,
    frozen: true
};
// 커스텀 Hook으로 getLocale 함수 제공
function useLocale() {
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    const getLocale = (0,react.useCallback)((id)=>{
        return resources_namespaceObject[currentLocale]?.[id] || id;
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
        if (value === true) {
            return "\u2714\uFE0F";
        } else if (value === false) {
            return "\u274C";
        } else {
            return getLocale(value) || value;
        }
    }, [
        getLocale
    ]);
}
function RenderTableSpecs(param) {
    let { data } = param;
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
            Object.entries(models).forEach((param)=>{
                let [modelName, modelVariants] = param;
                Object.entries(modelVariants).forEach((param)=>{
                    let [variant, value] = param;
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
                width: 120,
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
        Object.entries(models).forEach((param)=>{
            let [productName, variants] = param;
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
            tabulatorInstance.current = new tabulator_esm/* TabulatorFull */.Ae(tableRef.current, {
                height: "calc(100vh - 350px)",
                autoResize: false,
                data: transformedData,
                layout: "fitDataFill",
                groupBy: "category",
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
function RenderTableFuncs(param) {
    let { data } = param;
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
                width: 150,
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
            tabulatorInstance.current = new tabulator_esm/* TabulatorFull */.Ae(tableRef.current, {
                height: "calc(100vh - 350px)",
                data: data,
                layout: "fitDataFill",
                resizableColumnFit: true,
                groupBy: "category",
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