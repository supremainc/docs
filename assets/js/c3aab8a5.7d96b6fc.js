"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["852"], {
10121: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_credential_smart_format_frontMatter),
  toc: () => (/* binding */ settings_credential_smart_format_toc),
  "default": () => (/* binding */ settings_credential_smart_format_MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_credential_smart_format_mdx_c3a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_credential_smart_format_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-credential-smart-format-mdx-c3a.json
var site_docs_platform_biostar_x_settings_credential_smart_format_mdx_c3a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-smart-format","title":"스마트 카드 형식 설정하기","description":"MIFARE, iCLASS, DESFire, iCLASS Seos와 같은 스마트 카드의 레이아웃을 설정할 수 있습니다.","source":"@site/docs/platform/biostar_x/settings-credential-smart-format.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-smart-format","permalink":"/platform/biostar_x/settings-credential-smart-format","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-smart-format.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-smart-format","title":"스마트 카드 형식 설정하기","description":"MIFARE, iCLASS, DESFire, iCLASS Seos와 같은 스마트 카드의 레이아웃을 설정할 수 있습니다.","keywords":["스마트 카드","카드 형식","설정"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Wiegand 카드 형식 설정하기","permalink":"/platform/biostar_x/settings-credential-wiegand-format"},"next":{"title":"모바일 출입 카드 관리하기","permalink":"/platform/biostar_x/settings-credential-mobile-access-card"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/common/_smart-cardtype.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,custom-mifare",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.encryptionType",
            product: "2"
          }), ": 암호화 종류를 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SL1"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SL3"
          }), "로 설정할 수 있습니다."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "desfire,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.format.desfireAvd",
            product: "2"
          }), ": 타사에서 발급한 DESFire 카드를 사용할 수 있습니다. DESFire만 설정할 수 있습니다."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,custom-mifare,iclass,desfire,custom-desfire,iclassseos",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), ": 스마트 카드와 카드 리더 사이의 통신을 암호화하는 키입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), ": 카드의 기본 사이트 키가 일치하지 않을 때 사용하여 인증을 수행할 수 있습니다. 보조 사이트 키는 섹션 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), " 옵션을 활성화해야만 입력할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "mifare,iclass",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.startBlockIndex",
            product: "2"
          }), ": 각 템플릿이 저장될 시작 블록을 선택하세요. 이 블록은 사용자 정보가 저장될 블록의 인덱스이며, 사용자가 이미 스마트 카드를 사용하고 있다면 저장 가능한 블록을 설정하세요."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "custom-mifare,custom-iclass",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.blockIndex",
            product: "2"
          }), ": 각 템플릿이 저장될 시작 블록을 선택하세요. 이 블록은 사용자 정보가 저장될 블록의 인덱스이며, 사용자가 이미 스마트 카드를 사용하고 있다면 저장 가능한 블록을 설정하세요."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "desfire,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.appId",
              product: "2"
            }), ": 애플리케이션 아이디를 설정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.fileId",
              product: "2"
            }), "를 포함하는 일종의 디렉토리 역할을 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.fileId",
              product: "2"
            }), ": 파일 아이디를 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.encryptionType",
              product: "2"
            }), ": 암호화 종류를 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "DES/3DES"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "AES"
            }), "로 설정할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "custom-mifare,custom-iclass,custom-desfire",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.skipBytes",
              product: "2"
            }), ": 카드 번호를 읽어들일 시작점을 설정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.dataSize",
              product: "2"
            }), ": (설정한 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), "가 카드의 설정값과 동일한 경우) 읽어들일 카드의 데이터 크기를 설정할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "iclassseos",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.ADF",
            product: "2"
          }), ": 디지털 자격 증명이 저장되는 ADF 주소입니다."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "felica",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.systemCode",
              product: "2"
            }), ": FeliCa 카드를 읽기 위한 시스템 코드를 16진수로 최대 4자리까지 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.serviceCode",
              product: "2"
            }), ": FeliCa 카드를 읽기 위한 서비스 코드를 16진수로 최대 4자리까지 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.idField",
              product: "2"
            }), ": 카드에서 특정 영역을 읽을 수 있도록 설정합니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.addplus",
              product: "2"
            }), " 버튼을 클릭해 읽고자 하는 최대 8개 블록에 대해 설정할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.blockNumber",
              product: "2"
            }), ": 카드를 읽어들일 블록을 설정합니다. (0 ~ 150)"]
          }), "\n"]
        }), "\n"]
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


;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-credential-smart-format.mdx


const settings_credential_smart_format_frontMatter = {
	id: 'settings-credential-smart-format',
	title: '스마트 카드 형식 설정하기',
	description: 'MIFARE, iCLASS, DESFire, iCLASS Seos와 같은 스마트 카드의 레이아웃을 설정할 수 있습니다.',
	keywords: [
		'스마트 카드',
		'카드 형식',
		'설정'
	],
	isTranslationMissing: false
};
const settings_credential_smart_format_contentTitle = undefined;

const assets = {

};




const settings_credential_smart_format_toc = [{
  "value": "스마트 카드 추가",
  "id": "addSmartformat",
  "level": 2
}, {
  "value": "스마트 카드 유형",
  "id": "smartCardType",
  "level": 2
}, {
  "value": "설정 옵션 안내",
  "id": "setting",
  "level": 2
}, {
  "value": "기본 정보 설정",
  "id": "기본-정보-설정",
  "level": 3
}, {
  "value": "스마트 카드 설정",
  "id": "스마트-카드-설정",
  "level": 3
}, {
  "value": "슈프리마 스마트 카드",
  "id": "슈프리마-스마트-카드",
  "level": 4
}, ...toc, ...toc, ...toc, ...toc, {
  "value": "레이아웃",
  "id": "layout",
  "level": 5
}, {
  "value": "커스텀 스마트 카드",
  "id": "커스텀-스마트-카드",
  "level": 4
}, ...toc, ...toc, ...toc];
function settings_credential_smart_format_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) settings_credential_smart_format_missingMdxReference("Cmd", true);
  if (!Details) settings_credential_smart_format_missingMdxReference("Details", true);
  if (!Image) settings_credential_smart_format_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "MIFARE, iCLASS, DESFire, iCLASS Seos와 같은 스마트 카드의 레이아웃을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addSmartformat",
      children: "스마트 카드 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.cardFormat"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 카드 형식 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.smartCard",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-smart.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addSmartCard",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.addNewSmartCard",
            product: "2"
          }), " 화면이 나타나면 각 항목을 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#smartCardType",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-smart-format-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정을 마쳤다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smartCardType",
      children: "스마트 카드 유형"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.smartCardType",
        product: "2"
      }), " 옵션에서 원하는 스마트 카드 유형을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.supremaSmartCard",
          product: "2"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-smart-format-type.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.customSmartCard",
          product: "2"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-custom-smart-format-type.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "커스텀 스마트 카드는 MIFARE, DESFire, FeliCa만 지원합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FeliCa는 BioStation 3 펌웨어 1.3.0 이상에서만 지원합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "설정 옵션 안내"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.info",
        product: "2"
      }), " 섹션에서 카드 레이아웃을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-smart-format-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.primaryKey",
              product: "2"
            }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.secondaryKey",
              product: "2"
            }), "는 16진수만 지원합니다. 화면 오른쪽 필드에 사용할 키 값을 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.convertToHex",
              product: "2"
            }), " 버튼을 클릭하세요. 변환된 값을 사이트 키로 사용하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.convertToHex",
              product: "2"
            }), " 버튼은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.smartCardType",
              product: "2"
            }), " 옵션이 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.supremaSmartCard",
              product: "2"
            }), "일때만 사용할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "기본-정보-설정",
      children: "기본 정보 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": 스마트 카드 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.secondaryKey",
            product: "2"
          }), ": 보조 사이트 키 사용 여부를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.active",
            product: "2"
          }), "으로 설정하면 보조 사이트 키를 설정할 수 있습니다. 보조 사이트 키를 설정하면 카드의 기본 사이트 키가 일치하지 않을 때 보조 사이트 키를 사용하여 인증을 수행합니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credential-cart-secondary-key.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "스마트-카드-설정",
      children: "스마트 카드 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "스마트 카드의 구조를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "슈프리마-스마트-카드",
      children: "슈프리마 스마트 카드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.primaryKey",
        product: "2"
      }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.secondaryKey",
        product: "2"
      }), "는 16진수만 지원합니다. 각 입력 필드에 사용할 키 값을 입력한 후 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.cardFormat.convertToHex",
        product: "2"
      }), " 버튼을 클릭하세요. 변환된 값을 사이트 키로 사용하세요."]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "MIFARE"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-mifare.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "mifare"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "iCLASS"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-iclass.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "iclass"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DESFire"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-desfire.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "desfire"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "iClass Seos"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-smart-card-iclassseos.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "iclassseos"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "layout",
      children: "레이아웃"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 정보와 얼굴 및 지문 정보가 기록되는 레이아웃을 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.numberOfTemplate",
            product: "2"
          }), ": 레이아웃에 포함할 지문 템플릿 수를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.templateSize",
            product: "2"
          }), ": 지문 템플릿이 사용하는 바이트 수를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.useFace",
            product: "2"
          }), ": 얼굴 템플릿 사용 여부를 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.faceTemplateSize",
            product: "2"
          }), ": 얼굴 템플릿이 사용하는 바이트 수를 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.cardFormat.useFace",
          product: "2"
        }), "은 FaceStation F2, BioStation 3, BioEntry W3 모델에서 사용할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "커스텀-스마트-카드",
      children: "커스텀 스마트 카드"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커스텀 스마트 카드는 MIFARE, DESFire, FeliCa만 지원합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "FeliCa는 BioStation 3 펌웨어 1.3.0 이상에서만 지원합니다."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "MIFARE"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-mifare.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "custom-mifare"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DesFire"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-desfire.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "custom-desfire"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "Felica"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-credential-custom-card-felica.png"
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "felica"
      })]
    })]
  });
}
function settings_credential_smart_format_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_credential_smart_format_createMdxContent, {
      ...props
    })
  }) : settings_credential_smart_format_createMdxContent(props);
}
function settings_credential_smart_format_missingMdxReference(id, component) {
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