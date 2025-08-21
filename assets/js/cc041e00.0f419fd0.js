"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1046"], {
54689: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_confidential_smartcardapi_mdx_cc0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-confidential-smartcardapi-mdx-cc0.json
var site_docs_confidential_smartcardapi_mdx_cc0_namespaceObject = JSON.parse('{"id":"confidential/smartcardapi","title":"슈프리마 스마트 카드 발급 안내","description":"이 문서는 서드파티 업체가 슈프리마의 BioStar 플랫폼과 호환되는 스마트 카드를 발급하기 위한 기술 가이드입니다.","source":"@site/docs/confidential/smartcardapi.mdx","sourceDirName":"confidential","slug":"/confidential/smartcardapi","permalink":"/docs/confidential/smartcardapi","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/confidential/smartcardapi.mdx","tags":[],"version":"current","frontMatter":{"id":"smartcardapi","title":"슈프리마 스마트 카드 발급 안내","toc_max_heading_level":3,"heading_className":"confidential","isTranslationMissing":false}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
// EXTERNAL MODULE: ./src/components/TypedefStruct/index.js + 1 modules
var TypedefStruct = __webpack_require__(38757);
;// CONCATENATED MODULE: ./docs/confidential/smartcardapi.mdx


const frontMatter = {
	id: 'smartcardapi',
	title: '슈프리마 스마트 카드 발급 안내',
	toc_max_heading_level: 3,
	heading_className: 'confidential',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "구조체 관계도",
  "id": "구조체-관계도",
  "level": 2
}, {
  "value": "구조체",
  "id": "구조체",
  "level": 2
}, {
  "value": "CRC 계산 및 검증",
  "id": "crc",
  "level": 2
}, {
  "value": "hdrCRC, cardCRC란?",
  "id": "hdrcrc-cardcrc",
  "level": 3
}, {
  "value": "CRC 계산 방법",
  "id": "crc-calculation",
  "level": 3
}, {
  "value": "검증 방법",
  "id": "crc-validation",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서는 서드파티 업체가 슈프리마의 BioStar 플랫폼과 호환되는 스마트 카드를 발급하기 위한 기술 가이드입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "카드 데이터 구조"
          }), ": SCC(Secure Credential Card)와 AOC(Access on Card) 제작에 필요한 데이터 구조"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "구조체 명세"
          }), ": 카드 제작 시 준수해야 하는 필드별 상세 요구사항"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "데이터 무결성"
          }), ": CRC 검증을 통한 카드 데이터 품질 보장 방법"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "구현 참조"
          }), ": 각 구조체 간의 관계와 올바른 데이터 설정 방법"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서에 따라 제작된 스마트 카드는 슈프리마의 모든 BioStar 호환 장치에서 정상 동작합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "스마트 카드를 발급하기 전에 아래 사항을 확인하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SDK 요구 사항"
            }), ": ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://kb.supremainc.com/bs2sdk",
              children: "BioStar 2 Device SDK"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "호환 장치"
            }), ": BioStar 지원 모든 슈프리마 장치"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "카드 유형"
            }), ": SCC(Secure Credential Card), AOC(Access on Card)"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "구조체-관계도",
      children: "구조체 관계도"
    }), "\n", (0,jsx_runtime.jsxs)("map", {
      id: "imgmap2025813133616",
      name: "imgmap2025813133616",
      children: [(0,jsx_runtime.jsx)("area", {
        shape: "rect",
        title: "BS2Card",
        coords: "22,217,190,319",
        href: "#bs2card"
      }), (0,jsx_runtime.jsx)("area", {
        shape: "rect",
        title: "BS2SmartCardData",
        coords: "271,281,539,424",
        href: "#bs2smartcarddata"
      }), (0,jsx_runtime.jsx)("area", {
        shape: "rect",
        title: "BS2SmartCardHeader",
        coords: "621,36,888,337",
        href: "#bs2smartcardheader"
      }), (0,jsx_runtime.jsx)("area", {
        shape: "rect",
        title: "BS2SmartCardCredentials",
        coords: "621,363,888,482",
        href: "#bs2smartcardcredentials"
      }), (0,jsx_runtime.jsx)("area", {
        shape: "rect",
        title: "BS2AcessOnCardData",
        coords: "621,508,888,640",
        href: "#bs2accessoncarddata"
      })]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/smartcardapi-structure.png",
      className: "useMap",
      usemap: "#imgmap2025813133616"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "이미지의 구조체를 클릭하면 해당 구조체의 상세 정보로 이동합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "page-break"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "구조체",
      children: "구조체"
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct/* default */.Z, {
      name: "BS2SmartCardHeader",
      description: "SmartCard 헤더 정보를 담는 구조체입니다.",
      category: "Smart Card",
      size: "16",
      hierarchy: [{
        name: "BS2SmartCardHeader",
        type: "struct",
        size: 16,
        description: "SmartCard 헤더 구조체",
        children: [{
          name: "체크섬 영역",
          description: "체크섬 영역은 카드 데이터의 무결성을 검증하는 데 사용합니다. 자세한 내용은 <a href='#crc'>다음 문서</a>를 참고하세요.",
          children: [{
            name: "hdrCRC",
            type: "uint16_t",
            size: 2,
            description: "카드 헤더 체크섬 값입니다. (cardCRC - reserved)"
          }, {
            name: "cardCRC",
            type: "uint16_t",
            size: 2,
            description: "카드 데이터 체크섬 값입니다. (<code>BS2SmartCardHeader.cardType</code> - <code>BS2SmartCardData.accessOnData</code>)"
          }]
        }, {
          name: "카드 메타데이터",
          description: "카드 유형 및 템플릿 정보",
          children: [{
            name: "cardType",
            type: "BS2_CARD_TYPE",
            size: 1,
            description: "카드 유형의 코드 값입니다.",
            constants: [{
              value: "0x02",
              description: "Secure Credential Card (SCC)"
            }, {
              value: "0x03",
              description: "Access on Card (AOC)"
            }]
          }, {
            name: "numOfTemplate",
            type: "uint8_t",
            size: 1,
            description: "지문 템플릿의 개수입니다. Access on Card (AOC) 카드 구조상 템플릿은 <code>BS2SmartCardCredentials</code>에 저장됩니다. 지문 또는 얼굴을 선택적으로 저장해야 합니다. 지문과 얼굴이 함께 저장되지 않으므로 AOC 카드에 지문 템플릿을 저장하려면, <code>numOfFaceTemplate</code>은 반드시 <code>0</code>으로 설정되어야 합니다.",
            notes: ["최대 4개의 지문 템플릿을 지원합니다. 지문 템플릿 데이터 영역에 대한 자세한 내용은 <a href='#bs2smartcardcredentials'>다음 문서</a>를 참고하세요."]
          }, {
            name: "templateSize",
            type: "uint16_t",
            size: 2,
            description: "지문 템플릿의 크기입니다. 일반적인 지문 템플릿의 크기는 384바이트로 고정되어 있습니다. BioStar 2에서 스마트 카드를 사용하려면 기본값은 300바이트이며, 필요에 따라 변경할 수 있지만 템플릿의 크기가 너무 작게 설정되면 지문 매칭에 문제가 발생할 수 있으므로 300바이트 이상으로 설정하는 것을 권장합니다.",
            notes: ["300바이트로 설정 시 384바이트 크기의 배열에 300바이트를 복사하고 나머지 84바이트는 0으로 패딩해야 합니다.", "Mifare 1K Classic 카드에 2개의 지문을 저장하려면 각 템플릿을 300바이트로 설정해야 합니다."]
          }, {
            name: "issueCount",
            type: "uint16_t",
            size: 2,
            description: "스마트 카드 발급 회차입니다. 카드 ID와 발급 회차를 조합하여 블랙리스트를 관리하므로 발급 회차를 정확히 관리해야 합니다. 카드 재발급 시 발급 회차를 1씩 증가시켜야 합니다."
          }, {
            name: "duressMask",
            type: "uint8_t",
            size: 1,
            description: "협박 지문 유무 마스크 값입니다."
          }, {
            name: "numOfFaceTemplate",
            type: "uint8_t",
            size: 1,
            description: "얼굴 템플릿 수를 나타냅니다. 지문과 얼굴이 갖는 기본 템플릿(지문:384, 얼굴:552)의 크기가 다르지만, 이 경우에도 변함없이 <code>BS2SmartCardCredentials</code>의 <code>templateData</code>의 전체 크기를 고려하여 저장하면 됩니다. AOC 카드 구조 상 템플릿은 <code>BS2SmartCardCredentials</code>에 저장됩니다. 그리고 여기에는 지문 또는 얼굴을 선택적으로 저장해야 합니다. 지문과 얼굴이 함께 저장되지 않으므로 AOC 카드에 얼굴 템플릿을 저장하려면, <code>numOfTemplate</code>은 반드시 <code>0</code>으로 설정되어야 합니다.",
            notes: ["최대 1개의 얼굴 템플릿을 지원합니다."]
          }, {
            name: "reserved",
            type: "uint8_t[1]",
            size: 1,
            description: "예약된 공간입니다."
          }]
        }, {
          name: "인증 설정",
          description: "카드 인증 모드 및 옵션",
          children: [{
            name: "cardAuthMode",
            type: "uint8_t",
            size: 1,
            description: "개인 인증 모드로 장치에 설정된 인증 모드가 아닌 카드에 저장된 인증 모드를 사용하게 됩니다.",
            notes: ["<b>Visual Face</b> 기반은 <code>cardAuthModeEx</code>를 사용하세요."],
            constants: [{
              value: "2",
              description: "카드 인증만 사용"
            }, {
              value: "3",
              description: "카드와 지문 인증 사용"
            }, {
              value: "4",
              description: "카드와 PIN 인증 사용"
            }, {
              value: "5",
              description: "카드 인증 후 지문이나 PIN 인증 사용"
            }, {
              value: "6",
              description: "카드, 지문, PIN 인증 사용"
            }, {
              value: "254",
              description: "사용할 수 없음"
            }, {
              value: "255",
              description: "정의되지 않음(시스템에 정의된 모드로 동작)"
            }]
          }, {
            name: "cardAuthModeEx",
            type: "uint8_t",
            size: 1,
            description: "<span class='badge'>SDK v2.7.1 or later</span> <b>Visual Face</b> 기반 카드 인증 모드 설정값입니다. 개인 인증 모드로 장치에 설정된 인증 모드가 아닌 카드에 저장된 인증 모드를 사용하게 됩니다.",
            notes: ["슈프리마 장치는 FaceStation F2, BioStation 3, BioEntry W3 모델에서 지원합니다.", "모든 장치에 일관되게 적용하려면 <code>cardAuthMode</code>, <code>cardAuthModeEx</code> 모두를 설정해야 합니다. 지원하는 장치를 확인하세요."],
            constants: [{
              value: "21",
              description: "카드"
            }, {
              value: "22",
              description: "카드 + 얼굴"
            }, {
              value: "23",
              description: "카드 + 지문"
            }, {
              value: "24",
              description: "카드 + PIN"
            }, {
              value: "26",
              description: "카드 + 얼굴 또는 PIN"
            }, {
              value: "27",
              description: "카드 + 지문 또는 PIN"
            }, {
              value: "28",
              description: "카드 + 얼굴 또는 지문 또는 PIN"
            }, {
              value: "30",
              description: "카드 + 얼굴 + PIN"
            }, {
              value: "32",
              description: "카드 + 지문 + PIN"
            }, {
              value: "33",
              description: "카드 + 얼굴 또는 지문 + PIN"
            }, {
              value: "254",
              description: "사용할 수 없음"
            }, {
              value: "255",
              description: "정의되지 않음(시스템 정의 모드)"
            }]
          }, {
            name: "useAlphanumericID",
            type: "uint8_t",
            size: 1,
            description: "영숫자(Alphanumeric) ID를 사용할지 결정하는 플래그(flag)입니다."
          }]
        }]
      }],
      dependencies: [{
        name: "BS2_CARD_TYPE",
        type: "enum",
        description: "카드 타입 열거형"
      }],
      usedBy: [{
        name: "BS2SmartCardData",
        type: "struct",
        description: "SmartCard 데이터 구조체"
      }]
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct/* default */.Z, {
      name: "BS2SmartCardCredentials",
      description: "PIN 코드와 생체 인식 템플릿을 저장하는 구조체입니다.",
      category: "Credentials",
      size: "1568",
      hierarchy: [{
        name: "BS2SmartCardCredentials",
        type: "struct",
        size: 1568,
        description: "인증 정보 저장 구조체",
        children: [{
          name: "pin",
          type: "uint8_t[BS2_PIN_HASH_SIZE]",
          size: 32,
          description: "PIN 코드 해시값입니다. PIN 코드를 직접 해시하지 말고 BioStar 2 SDK의 해시 함수를 사용하여 장치와 동일한 해시 알고리즘으로 생성해야 합니다."
        }, {
          name: "templateData",
          type: "uint8_t[S2_SMART_CARD_MAX_TEMPLATE_COUNT * BS2_FINGER_TEMPLATE_SIZE]",
          size: 1536,
          description: "지문 또는 얼굴 템플릿 데이터 영역으로 최대 4개의 지문 템플릿, 최대 1개의 얼굴 템플릿을 저장할 수 있습니다.",
          children: [{
            name: "Template 1",
            type: "uint8_t[384]",
            size: 384,
            description: "첫 번째 템플릿"
          }, {
            name: "Template 2",
            type: "uint8_t[384]",
            size: 384,
            description: "두 번째 템플릿"
          }, {
            name: "Template 3",
            type: "uint8_t[384]",
            size: 384,
            description: "세 번째 템플릿"
          }, {
            name: "Template 4",
            type: "uint8_t[384]",
            size: 384,
            description: "네 번째 템플릿"
          }]
        }]
      }],
      constants: [{
        value: "BS2_PIN_HASH_SIZE",
        description: "PIN 해시 크기",
        note: "32바이트"
      }, {
        value: "BS2_SMART_CARD_MAX_TEMPLATE_COUNT",
        description: "최대 템플릿 개수",
        note: "4개"
      }, {
        value: "BS2_FINGER_TEMPLATE_SIZE",
        description: "지문 템플릿 크기",
        note: "384바이트"
      }],
      usedBy: [{
        name: "BS2SmartCardData",
        type: "struct",
        description: "SmartCard 데이터 구조체"
      }]
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct/* default */.Z, {
      name: "BS2AccessOnCardData",
      description: "AOC 카드의 출입 권한 정보를 저장하는 구조체입니다.",
      category: "Access Control",
      size: "40",
      hierarchy: [{
        name: "BS2AccessOnCardData",
        type: "struct",
        size: 40,
        description: "출입 권한 정보 구조체",
        children: [{
          name: "accessGroupID",
          type: "uint16_t[BS2_SMART_CARD_MAX_ACCESS_GROUP_COUNT]",
          size: 32,
          description: "출입 그룹 ID 리스트입니다. 각 그룹은 1부터 65535까지의 ID를 가질 수 있으며, 최대 16개의 그룹을 지원합니다.",
          children: [{
            name: "Group ID 1",
            type: "uint16_t",
            size: 2,
            description: "첫 번째 출입 그룹"
          }, {
            name: "Group ID 2",
            type: "uint16_t",
            size: 2,
            description: "두 번째 출입 그룹"
          }, {
            name: "...",
            type: "uint16_t",
            size: 2,
            description: "..."
          }, {
            name: "Group ID 16",
            type: "uint16_t",
            size: 2,
            description: "마지막 출입 그룹"
          }]
        }, {
          name: "시간 제한",
          description: "출입 가능 시간 범위입니다.",
          children: [{
            name: "startTime",
            type: "BS2_DATETIME",
            size: 4,
            description: "사용자 인증이 가능한 시작 시간이며, <code>0</code>일 경우 제한이 없습니다. Unix timestamp 형식으로 초 단위입니다."
          }, {
            name: "endTime",
            type: "BS2_DATETIME",
            size: 4,
            description: "사용자 인증이 가능한 마지막 시간이며, <code>0</code>일 경우 제한이 없습니다. Unix timestamp 형식으로 초 단위입니다."
          }]
        }]
      }],
      constants: [{
        value: "BS2_SMART_CARD_MAX_ACCESS_GROUP_COUNT",
        description: "최대 출입 그룹 개수",
        note: "16개"
      }],
      dependencies: [{
        name: "BS2_DATETIME",
        type: "typedef",
        description: "날짜/시간 타입"
      }],
      usedBy: [{
        name: "BS2SmartCardData",
        type: "struct",
        description: "SmartCard 데이터 구조체"
      }]
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct/* default */.Z, {
      name: "BS2SmartCardData",
      description: "SmartCard의 모든 데이터를 포함하는 복합 구조체입니다.",
      category: "Smart Card",
      size: "1656",
      hierarchy: [{
        name: "BS2SmartCardData",
        type: "composite struct",
        size: 1656,
        description: "SmartCard 전체 데이터 컨테이너",
        children: [{
          name: "header",
          type: "BS2SmartCardHeader",
          size: 16,
          description: "SmartCard 헤더입니다.",
          references: ["BS2SmartCardHeader"]
        }, {
          name: "cardID",
          type: "uint8_t[BS2_CARD_DATA_SIZE]",
          size: 32,
          description: "단말기에서 사용할 카드 식별자입니다. <b>Access on Card(AOC)</b>는 배열의 32byte를 Card ID로 사용하고, <b>Secure Credential Card(SCC)</b>는 배열의 24byte를 Card ID로 사용합니다. <b>Secure Credential Card(SCC)</b>는 32byte를 Card ID(24 bytes)로, issueCount(4byte) 그리고 Time Stamp(4byte)로 채워져야 합니다. 또한, <code>BS2UserBlob</code> 구조체의 cardObjs array가 SC Card로 채워야 하며, SC Card 발급 시마다 <code>cardObjs</code>를 업데이트해야 합니다.",
          children: [{
            name: "cardID: Access on Card(AOC)",
            type: "bytes[0-31]",
            size: 32,
            description: "AOC: 전체 32바이트 사용"
          }, {
            name: "cardID: Secure Credential Card(SCC)",
            type: "bytes[0-31]",
            size: 32,
            description: "SCC: 카드 ID(32바이트)",
            children: [{
              name: "cardID (SCC)",
              type: "bytes[0-23]",
              size: 24,
              description: "SCC: 카드 ID(24바이트)"
            }, {
              name: "issueCount (SCC)",
              type: "bytes[24-27]",
              size: 4,
              description: "SCC: 발급 횟수"
            }, {
              name: "timeStamp (SCC)",
              type: "bytes[28-31]",
              size: 4,
              description: "SCC: 발급 시간"
            }]
          }]
        }, {
          name: "credentials",
          type: "BS2SmartCardCredentials",
          size: 1568,
          description: "PIN 코드나 지문 템플릿이 저장되어 있는 인증 데이터 영역입니다.",
          references: ["BS2SmartCardCredentials"]
        }, {
          name: "accessOnData",
          type: "BS2AccessOnCardData",
          size: 40,
          description: "AOC 카드에서 사용하는 영역으로 출입 그룹 정보를 가지고 있습니다.",
          references: ["BS2AccessOnCardData"]
        }]
      }],
      dependencies: [{
        name: "BS2SmartCardHeader",
        type: "struct",
        description: "SmartCard 헤더"
      }, {
        name: "BS2SmartCardCredentials",
        type: "struct",
        description: "인증 정보"
      }, {
        name: "BS2AccessOnCardData",
        type: "struct",
        description: "출입 권한 데이터"
      }, {
        name: "BS2_CARD_DATA_SIZE",
        type: "constant",
        description: "카드 데이터 크기 상수(32)"
      }],
      usedBy: [{
        name: "BS2Card",
        type: "union",
        description: "카드 타입 래퍼"
      }]
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct/* default */.Z, {
      name: "BS2Card",
      description: "모든 카드 타입을 포괄하는 최상위 구조체입니다.",
      category: "Core Structure",
      size: "1657",
      hierarchy: [{
        name: "BS2Card",
        type: "union wrapper",
        size: 1657,
        description: "카드 타입 식별 및 데이터 저장",
        children: [{
          name: "isSmartCard",
          type: "uint8_t",
          size: 1,
          description: "SmartCard 여부를 나타내는 플래그(flag)입니다.",
          constants: [{
            value: "1",
            description: "SmartCard (<code>BS2SmartCardData</code> 사용)"
          }]
        }, {
          name: "Union 데이터",
          description: "카드 타입별 데이터",
          children: [{
            name: "smartCard",
            type: "BS2SmartCardData",
            size: 1656,
            description: "SmartCard 데이터입니다. <code>isSmartCard</code>가 <code>1</code>일 때 사용합니다.",
            references: ["BS2SmartCardData"]
          }]
        }]
      }],
      dependencies: [{
        name: "BS2SmartCardData",
        type: "struct",
        description: "SmartCard 데이터 구조체"
      }]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "crc",
      children: "CRC 계산 및 검증"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SmartCard 데이터의 무결성을 보장하기 위해 헤더와 카드 데이터에 각각 CRC-16 CCITT 체크섬(", (0,jsx_runtime.jsx)(_components.code, {
        children: "hdrCRC"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cardCRC"
      }), ")을 사용합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hdrcrc-cardcrc",
      children: "hdrCRC, cardCRC란?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "hdrCRC"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BS2SmartCardHeader"
        }), "의 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cardCRC"
        }), "부터 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reserved"
        }), "까지(총 14바이트)에 대해 CRC-16 CCITT(다항식 0x1021, 초기값 0xFFFF)로 계산한 값입니다."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cardCRC"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cardType"
        }), "부터 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BS2SmartCardData.accessOnData"
        }), "까지(헤더를 제외한 카드 데이터 전체)에 대해 CRC-16 CCITT(다항식 0x1021, 초기값 0xFFFF)로 계산한 값입니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "crc-calculation",
      children: "CRC 계산 방법"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://kb.supremainc.com/bs2sdk/doku.php",
        children: "BioStar 2 SDK"
      }), "에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BS2_ComputeCRC16CCITT"
      }), " 함수를 제공합니다. 아래는 사용 예시입니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        metastring: "title='Calculate checksum'",
        children: "// Calculate card data checksum (cardCRC)\nuint16_t cardCRC = 0xFFFF;\nint result = BS2_ComputeCRC16CCITT((uint8_t*)&card.header.cardType, sizeof(BS2SmartCardData) - offsetof(BS2SmartCardHeader, cardType), &cardCRC);\n\n// Calculate header checksum (hdrCRC)\ncard.header.cardCRC = cardCRC;  // Set the cardCRC value first\nuint16_t hdrCRC = 0xFFFF;\nresult = BS2_ComputeCRC16CCITT((uint8_t*)&card.header.cardCRC, sizeof(BS2SmartCardHeader) - offsetof(BS2SmartCardHeader, cardCRC), &hdrCRC);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cardCRC"
            }), "는 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cardType"
            }), "부터 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "accessOnData"
            }), "까지 계산합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "hdrCRC"
            }), "는 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cardCRC"
            }), "부터 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "reserved"
            }), "까지 계산합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["반드시 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cardCRC"
            }), "를 먼저 계산한 후 헤더에 설정하고, 그 다음 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hdrCRC"
            }), "를 계산해야 합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "crc-validation",
      children: "검증 방법"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카드 데이터를 읽을 때 무결성을 검증하려면 다음과 같이 수행하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카드에서 읽은 데이터로 CRC 재계산"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "저장된 CRC 값과 계산된 CRC 값 비교"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-csharp",
        metastring: "title='CRC Validation'",
        children: "// CRC validation example\nBS2SmartCardData readCard;  // Data read from card\n\n// 1. cardCRC validation\nuint16_t calculatedCardCRC = 0xFFFF;\nBS2_ComputeCRC16CCITT((uint8_t*)&readCard.header.cardType, sizeof(BS2SmartCardData) - offsetof(BS2SmartCardHeader, cardType), &calculatedCardCRC);\n\nif (readCard.header.cardCRC != calculatedCardCRC) {\n    // Card data corruption\n    return ERROR_CARD_DATA_CORRUPTED;\n}\n\n// 2. hdrCRC validation\nuint16_t calculatedHdrCRC = 0xFFFF;\nBS2_ComputeCRC16CCITT((uint8_t*)&readCard.header.cardCRC, sizeof(BS2SmartCardHeader) - offsetof(BS2SmartCardHeader, cardCRC), &calculatedHdrCRC);\n\nif (readCard.header.hdrCRC != calculatedHdrCRC) {\n    // Header data corruption\n    return ERROR_HEADER_DATA_CORRUPTED;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "CRC 계산 시 주의사항"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "계산 순서"
            }), ": 반드시 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cardCRC"
            }), "를 먼저 계산한 후 헤더에 설정하고, 그 다음 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hdrCRC"
            }), "를 계산해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "구조체 정렬"
            }), ": CRC 계산 범위가 정확히 일치해야 하며, 구조체 패딩이나 정렬에 주의하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "초기값"
            }), ": CRC-16 CCITT는 0x1021 다항식, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "초기값 0xFFFF"
            }), "를 사용합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SDK 함수"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BS2_ComputeCRC16CCITT"
            }), " 함수는 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://kb.supremainc.com/bs2sdk/doku.php",
              children: "BioStar 2 SDK"
            }), "에서 제공됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "데이터 순서"
            }), ": 입력 데이터는 바이트 단위 Little Endian으로 처리됩니다."]
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
38757: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TypedefStruct)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/TypedefStruct/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"typedefContainer":"typedefContainer_Wn7J","titleRow":"titleRow_juh5","metadata":"metadata_jjxW","category":"category_KdBD","size":"size_yHpg","version":"version_y0px","description":"description_vl9m","section":"section_UAKO","sectionHeader":"sectionHeader_fRZ_","sectionSubtitle":"sectionSubtitle_Uhu4","hierarchyContainer":"hierarchyContainer_TJKg","hierarchyLevel":"hierarchyLevel_eVaW","nestedLevel":"nestedLevel_fvI8","hierarchyItem":"hierarchyItem_GODh","nestedLeveltop":"nestedLeveltop_mB2_","hierarchyNotes":"hierarchyNotes_QTbs","hierarchyNode":"hierarchyNode_fJgq","nodeHeader":"nodeHeader_VmLc","hierarchyName":"hierarchyName_Xieu","hierarchyType":"hierarchyType_cEEc","hierarchySize":"hierarchySize_iDgU","hierarchyDesc":"hierarchyDesc_qbou","references":"references_Fuyx","referencesLabel":"referencesLabel_ptzV","reference":"reference_oQRT","childrenContainer":"childrenContainer_yihK","structLink":"structLink_tUc1","relatedStruct":"relatedStruct_OSZX","memoryBlocks":"memoryBlocks_TkDs","memoryBlock":"memoryBlock_RkZ2","memoryBlockHeader":"memoryBlockHeader_jD1Y","memoryOffset":"memoryOffset_djHn","memoryFieldName":"memoryFieldName_QGoe","memoryType":"memoryType_KcxH","memorySize":"memorySize_eMk3","memoryDesc":"memoryDesc_np0k","codeBlock":"codeBlock_LQwb","field":"field_RchT","fieldHeader":"fieldHeader_HncE","fieldNumber":"fieldNumber_PrLt","fieldName":"fieldName_xHbg","fieldType":"fieldType_fbjm","fieldSize":"fieldSize_dkeI","fieldRange":"fieldRange_kmek","fieldDescription":"fieldDescription_sT1v","fieldConstants":"fieldConstants_jw4N","relatedStructs":"relatedStructs_KK4K","relatedLabel":"relatedLabel_uofL","dependencyGroup":"dependencyGroup_PDbs","dependencyList":"dependencyList_DTc4","dependency":"dependency_R2lA","depName":"depName_u4Ua","depType":"depType_lMEs","depDesc":"depDesc_T3ac","constantsTable":"constantsTable_GcDj","variantsTable":"variantsTable_UAHC","constantValue":"constantValue_cMnk","constantNote":"constantNote_TGMI","notesList":"notesList_P0Bz","note":"note_FyD5","depDesc_T3ac":"depDesc_T3ac_YWbU"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(34403);
;// CONCATENATED MODULE: ./src/components/TypedefStruct/index.js




const TypedefStruct_TypedefStruct = (param)=>{
    let { name, description, code, fields = [], constants = [], notes = [], dependencies = [], usedBy = [], size, category, hierarchy = [], linkPrefix = "#" } = param;
    const renderHierarchy = function(items) {
        let level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: `${styles_module.hierarchyLevel} ${level > 0 ? styles_module.nestedLevel : styles_module.nestedLeveltop}`,
            children: items.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: styles_module.hierarchyItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            className: styles_module.hierarchyNode,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: styles_module.nodeHeader,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: styles_module.hierarchyName,
                                            id: item.name.toLowerCase(),
                                            children: item.name
                                        }),
                                        item.type && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: styles_module.hierarchyType,
                                            children: item.type
                                        }),
                                        item.size && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: styles_module.hierarchySize,
                                            children: [
                                                item.size,
                                                " ",
                                                item.size > 1 ? "bytes" : "byte"
                                            ]
                                        })
                                    ]
                                }),
                                item.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: styles_module.hierarchyDesc,
                                    dangerouslySetInnerHTML: {
                                        __html: item.description
                                    }
                                }),
                                item.notes && /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                    className: styles_module.hierarchyNotes,
                                    children: item.notes.map((note, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: styles_module.hierarchyDesc,
                                                dangerouslySetInnerHTML: {
                                                    __html: note
                                                }
                                            })
                                        }, index))
                                }),
                                item.constants && item.constants.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: styles_module.fieldConstants,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                            as: "h6",
                                            children: "\uAC00\uB2A5\uD55C \uAC12"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                            className: styles_module.constantsTable,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                                children: "\uAC12"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                                children: "\uC124\uBA85"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                                    children: item.constants.map((constant, constIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                                    className: styles_module.constantValue,
                                                                    children: constant.value
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: constant.description
                                                                        }
                                                                    })
                                                                })
                                                            ]
                                                        }, constIndex))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                item.references && item.references.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: styles_module.references,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: styles_module.referencesLabel,
                                            children: "\uCC38\uC870:"
                                        }),
                                        item.references.map((ref, refIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: `${linkPrefix}${ref.toLowerCase()}`,
                                                className: styles_module.reference,
                                                children: ref
                                            }, refIndex))
                                    ]
                                })
                            ]
                        }),
                        item.children && item.children.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: styles_module.childrenContainer,
                            children: renderHierarchy(item.children, level + 1)
                        })
                    ]
                }, index))
        });
    };
    const renderStructLink = (structName)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: `${linkPrefix}${structName.toLowerCase()}`,
            className: styles_module.structLink,
            children: structName
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: styles_module.typedefContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.titleRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                as: "h3",
                                id: name.toLowerCase(),
                                children: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: styles_module.metadata,
                                children: [
                                    category && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: styles_module.category,
                                        children: category
                                    }),
                                    size && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: styles_module.size,
                                        children: [
                                            size,
                                            " ",
                                            size > 1 ? "bytes" : "byte"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: styles_module.description,
                        children: description
                    })
                ]
            }),
            hierarchy.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.sectionHeader,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                            as: "h4",
                            children: "\uAD6C\uC870 \uACC4\uCE35"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.hierarchyContainer,
                        children: renderHierarchy(hierarchy)
                    })
                ]
            }),
            fields.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.sectionHeader,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                            as: "h4",
                            children: "\uD544\uB4DC \uC0C1\uC138"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.fieldsList,
                        children: fields.map((field, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: styles_module.field,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.fieldHeader,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.fieldNumber,
                                                children: index + 1
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.fieldName,
                                                id: field.name.toLowerCase(),
                                                children: field.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.fieldType,
                                                children: field.type
                                            }),
                                            field.size && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: styles_module.fieldSize,
                                                children: [
                                                    field.size,
                                                    " ",
                                                    field.size > 1 ? "bytes" : "byte"
                                                ]
                                            }),
                                            field.range && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.fieldRange,
                                                children: field.range
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: styles_module.fieldDescription,
                                        dangerouslySetInnerHTML: {
                                            __html: field.description
                                        }
                                    }),
                                    field.constants && field.constants.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.fieldConstants,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                                as: "h6",
                                                children: "\uAC00\uB2A5\uD55C \uAC12"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                                className: styles_module.constantsTable,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                                    children: "\uAC12"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                                    children: "\uC124\uBA85"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                                        children: field.constants.map((constant, constIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                                        className: styles_module.constantValue,
                                                                        children: constant.value
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: constant.description
                                                                            }
                                                                        })
                                                                    })
                                                                ]
                                                            }, constIndex))
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    field.relatedStructs && field.relatedStructs.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.relatedStructs,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.relatedLabel,
                                                children: "\uAD00\uB828 \uAD6C\uC870\uCCB4:"
                                            }),
                                            field.relatedStructs.map((struct, structIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: renderStructLink(struct)
                                                }, structIndex))
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            constants.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.sectionHeader,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                as: "h4",
                                children: "\uC0C1\uC218 \uC815\uC758"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: styles_module.sectionSubtitle,
                                children: [
                                    constants.length,
                                    "\uAC1C \uC0C1\uC218"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                        className: styles_module.variantsTable,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            children: "\uAC12"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            children: "\uC124\uBA85"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            children: "\uBE44\uACE0"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                children: constants.map((constant, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                className: styles_module.constantValue,
                                                children: constant.value
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                children: constant.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                children: constant.note
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            (dependencies.length > 0 || usedBy.length > 0) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.sectionHeader,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                            as: "h4",
                            children: "\uC758\uC874\uC131 \uAD00\uACC4"
                        })
                    }),
                    dependencies.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.dependencyGroup,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                as: "h5",
                                children: "\uC774 \uAD6C\uC870\uCCB4\uAC00 \uC758\uC874\uD558\uB294 \uD0C0\uC785"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.dependencyList,
                                children: dependencies.map((dep, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.dependency,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depName,
                                                children: renderStructLink(dep.name)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depType,
                                                children: dep.type
                                            }),
                                            dep.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depDesc,
                                                children: dep.description
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    }),
                    usedBy.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.dependencyGroup,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                as: "h5",
                                children: "\uC774 \uAD6C\uC870\uCCB4\uB97C \uC0AC\uC6A9\uD558\uB294 \uD0C0\uC785"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.dependencyList,
                                children: usedBy.map((use, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.dependency,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depName,
                                                children: renderStructLink(use.name)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depType,
                                                children: use.type
                                            }),
                                            use.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depDesc,
                                                children: use.description
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* ESM default export */ const TypedefStruct = (TypedefStruct_TypedefStruct);


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