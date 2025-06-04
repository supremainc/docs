"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["910"], {
7970: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  contentTitle: () => (/* binding */ contentTitle),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_device_details_auth_mdx_eb6_namespaceObject)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-device-details-auth-mdx-eb6.json
var site_docs_platform_biostar_x_settings_device_details_auth_mdx_eb6_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-auth","title":"인증 설정하기","description":"장치의 사용자 인증과 관련된 다양한 설정 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-device-details-auth.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-auth","permalink":"/docs/en/platform/biostar_x/settings-device-details-auth","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-auth.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-auth","title":"인증 설정하기","description":"장치의 사용자 인증과 관련된 다양한 설정 방법을 안내합니다.","keywords":["장치","인증"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"네트워크 설정하기","permalink":"/docs/en/platform/biostar_x/settings-device-details-network"},"next":{"title":"UI 알아보기","permalink":"/docs/en/platform/biostar_x/ui-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-device-details-auth.mdx


const frontMatter = {
	id: 'settings-device-details-auth',
	title: '인증 설정하기',
	description: '장치의 사용자 인증과 관련된 다양한 설정 방법을 안내합니다.',
	keywords: [
		'장치',
		'인증'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "인증 방법 설정",
  "id": "인증-방법-설정",
  "level": 2
}, {
  "value": "인증 모드 추가",
  "id": "added-auth-mode",
  "level": 3
}, {
  "value": "지문 인증 설정",
  "id": "지문-인증-설정",
  "level": 2
}, {
  "value": "얼굴 인증 설정",
  "id": "얼굴-인증-설정",
  "level": 2
}, {
  "value": "QR/바코드 설정",
  "id": "qr바코드-설정",
  "level": 2
}, {
  "value": "카드 인증 설정",
  "id": "카드-인증-설정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Details, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.authentication",
        product: "2"
      }), " 섹션에서는 장치의 사용자 인증과 관련된 다양한 설정 방법을 안내합니다. 인증 방식과 장치에서 지원하는 주요 인증 옵션을 단계별로 확인할 수 있습니다. 설정을 변경하면 실제 장치에 적용되는 점을 유의하고, 각 옵션의 기능과 주의 사항을 참고하여 환경에 맞는 인증 정책을 구성하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 종류에 따라 설정할 수 있는 네트워크 옵션은 다를 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자가 임의로 변경한 사항이 있다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " 버튼을 클릭하세요. 변경 사항을 저장하지 않으면 장치에 적용되지 않습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "인증-방법-설정",
      children: "인증 방법 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 인증 모드 및 권한, 서버 매칭, 인증 대기 시간을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-auth-mode.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), ": 한 개 이상의 크레덴셜을 조합해 장치의 인증 모드를 설정하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#added-auth-mode",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.usersHaveFullAccess",
            product: "2"
          }), ": 장치에 등록된 사용자에게 출입 그룹 설정 없이 모든 출입 권한을 부여할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), "으로 설정하면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.accessLevel",
              product: "2"
            }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ag.floorLevel.title",
              product: "2"
            }), "에 장치를 등록할 수 없습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#settings-access-level",
              children: "다음 문서"
            }), "를 참고하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.active",
                product: "2"
              }), ": 서버 매칭 기능을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "를 설치한 서버에 저장된 사용자 정보를 이용하여 인증을 수행하는 서버 매칭 기능을 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.inactive",
                product: "2"
              }), ": 서버 매칭 기능을 비활성화합니다. 이 경우 장치에 등록된 사용자 정보로 인증을 수행합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(Details, {
          children: [(0,jsx_runtime.jsxs)("summary", {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.serverMatching",
              product: "2"
            }), " 기능 지원 장치 및 펌웨어 버전 보기"]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "CoreStation 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry P2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation L2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation A2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 2 펌웨어 1.2.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioLite Net 펌웨어 2.2.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry Plus 펌웨어 2.2.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W 펌웨어 2.2.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass 펌웨어 2.2.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass S2 펌웨어 2.2.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioLite N2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass D2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass 2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation 2 펌웨어 1.4.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W3 펌웨어 1.0.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceLite는 서버 매칭 기능을 지원하지 않습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2, BioStation 3, BioEntry W3 장치는 얼굴 인증을 위한 서버 매칭을 사용할 수 없습니다."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authTimeout",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), " 옵션에서 여러가지 크리덴션을 조합해 사용할 때 두 번째 크리덴셜을 인증하는 대기 시간입니다. 지정한 시간 내에 크리덴셜을 인증하지 않으면 인증에 실패합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceDetection",
            product: "2"
          }), ": 사용자가 인증할 때 장치에 내장된 카메라로 얼굴을 인식하는 알고리즘 단계를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.normal",
                product: "2"
              }), ": 사람 팔 길이 정도의 거리에서 얼굴을 검출할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.strict",
                product: "2"
              }), ": 사람 팔 길이보다 더 가까이 다가가야 얼굴을 검출할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.none",
                product: "2"
              }), ": 얼굴 인식 기능을 사용하지 않습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "이 옵션은 BioStation A2 모델에서 지원합니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.userNameDisplay",
            product: "2"
          }), ": 인증을 성공할 때 장치에 표시되는 사용자 이름을 표시하거나 숨길 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.displayAll",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.maskAllButFirstLetter",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.hideAll",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.userIdDisplay",
            product: "2"
          }), ": 인증을 성공할 때 장치에 표시되는 사용자 아이디를 표시하거나 숨길 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.displayAll",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.maskAllButFirstLetter",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.hideAll",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "added-auth-mode",
      children: "인증 모드 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.authenticationMode",
        product: "2"
      }), " 옵션에서 장치의 인증 모드를 설정하세요. 지문, 아이디, 카드, PIN, 얼굴과 같은 크리덴셜을 조합해 인증 모드를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), " 옵션에서 ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addNewAuthMode",
            product: "2"
          }), " 창이 나타나면 원하는 인증 모드를 가운데 영역으로 드래그하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-edit-auth-mode-adding.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "원하는 인증 모드는 최대 5개까지 추가할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.schedule",
            product: "2"
          }), " 옵션에서 원하는 항목을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 설정을 완료했다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule.schedule",
          product: "2"
        }), " 옵션에서 원하는 스케줄이 없다면 ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule.addNewSchedule",
          product: "2"
        }), "를 클릭하세요. 새 스케줄을 추가할 수 있습니다. 스케줄 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#settings-schedule",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "지문-인증-설정",
      children: "지문 인증 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.fingerprint",
        product: "2"
      }), " 그룹에서는 장치의 지문 인증에 대한 세부 사항을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.securityLevel",
            product: "2"
          }), ": 지문을 인증할 때 사용할 보안 등급을 설정하세요. 보안 등급이 높을수록 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#frr",
            children: "본인 거부율(FRR)"
          }), "이 높아지지만 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#far",
            children: "타인 수락율(FAR)"
          }), "이 낮아집니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.scanTimeout",
            product: "2"
          }), ": 지문 스캔 대기 시간을 설정하세요. 설정한 시간 동안 지문을 스캔하지 못하면 인증을 실패합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.sensorSensitivity",
            product: "2"
          }), ": 지문 인식 센서의 민감도를 설정하세요. 센서 감도를 높여 정밀한 지문 정보를 얻으려면 센서 감도를 높게 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.1NFastMode",
            product: "2"
          }), ": 지문 인증 속도를 설정하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.auto",
            product: "2"
          }), "을 선택하면 장치에 등록된 총 지문 템플릿에 따라 인증 속도를 설정합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.templateFormat",
            product: "2"
          }), ": 설정된 지문 템플릿 형식을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.matchingTimeout",
            product: "2"
          }), ": 지문 매칭 대기 시간을 설정하세요. 설정한 시간 동안 인증을 완료하지 못하면 인증을 실패합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.viewImage",
            product: "2"
          }), ": 지문을 인증할 때 화면에 지문 이미지를 표시할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.sensorMode",
            product: "2"
          }), ": 지문 센서의 작동 모드를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.sensorMode.autoOn",
                product: "2"
              }), ": 지문 센서가 사용자의 손가락을 인식하여 센서가 켜집니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.sensorMode.alwaysOn",
                product: "2"
              }), ": 지문 센서가 항상 켜져 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advancedEnrollment",
            product: "2"
          }), ": 높은 품질의 지문 정보를 저장하기 위해 스캔한 지문의 품질을 검사할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.useDhcp",
            product: "2"
          }), "으로 설정하면 지문 품질이 낮을 경우 사용자에게 알려주어 지문을 올바르게 스캔하도록 도와줍니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.fingerprintLFD",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#fake_fp",
            children: "위조 지문"
          }), " 검사 등급을 설정하세요. 위조 지문 검사 등급이 높을수록 실제 사람 지문에 대한 거부율도 높아질 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.duplicateCheck",
            product: "2"
          }), ": 지문을 등록할 때 중복 등록 여부를 검사할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 종류에 따라 설정할 수 있는 옵션은 다를 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["지문 인증 설정에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateFormat",
              product: "2"
            }), " 옵션을 변경하면 이전에 저장된 모든 지문은 사용할 수 없습니다. 사용자의 지문을 등록하기 전에 반드시 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateFormat",
              product: "2"
            }), " 옵션에서 템플릿을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.viewImage",
              product: "2"
            }), " 옵션은 BioStation 2, BioStation A2, BioStation L2, BioLite N2, FaceStation F2(FSF2-ODB), X-Station 2(XS2-ODPB, XS2-OAPB) 모델에서 지원합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.fingerprintLFD",
              product: "2"
            }), " 옵션은 BioStation A2, BioStation L2, BioEntry W2, BioLite N2, FaceStation F2(FSF2-ODB), X-Station 2(XS2-ODPB, XS2-OAPB) 모델에서 지원합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "얼굴-인증-설정",
      children: "얼굴 인증 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "user.credential.face",
        product: "2"
      }), " 그룹에서는 장치의 얼굴 인증에 대한 세부 사항을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.securityLevel",
            product: "2"
          }), ": 얼굴을 인증할 때 사용할 보안 등급을 설정하세요. 보안 등급이 높을수록 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#frr",
            children: "본인 거부율(FRR)"
          }), "이 높아지지만 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#far",
            children: "타인 수락율(FAR)"
          }), "이 낮아집니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "face.operationMode.enrollTime",
            product: "2"
          }), ": 사용자 얼굴을 등록할 때 설정한 시간 동안 얼굴을 등록하지 못하면 얼굴 등록이 취소됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.motionSensor",
            product: "2"
          }), ": 장치 주변의 움직임을 감지하는 감도를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness",
            product: "2"
          }), ": 장치 주변의 밝기를 감지하여 IR LED 세기를 조절할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceLFD",
            product: "2"
          }), ": 위조 얼굴 검사 등급을 설정하세요. 위조 얼굴 등록 검사 강화 등급이 높을수록 실제 얼굴에 대한 거부율도 높아질 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.lightBrightness",
            product: "2"
          }), ": 장치 조명의 밝기를 수동으로 조절할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness.normal",
            product: "2"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness.high",
            product: "2"
          }), "으로 밝기를 설정하거나 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.lightBrightness.notUse",
            product: "2"
          }), "을 선택해 조명을 끌 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceQuickEnrollment",
            product: "2"
          }), ": 빠른 얼굴 등록 사용 여부를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.enable",
                product: "2"
              }), ": 얼굴 등록 절차를 1단계로 설정합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disabled",
                product: "2"
              }), " 얼굴 등록 절차를 3단계로 설정합니다. 고품질의 얼굴 템플릿을 등록하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disabled",
                product: "2"
              }), "으로 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceDetectSetting",
            product: "2"
          }), ": 얼굴을 인증할 때 사용자의 얼굴을 인식하는 환경을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceMaxRotation",
                product: "2"
              }), ": 허용 가능한 얼굴의 최대 회전 각도를 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceDetectDist",
                product: "2"
              }), ": 얼굴을 인식하는 최소, 최대 거리를 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceWideSearch",
                product: "2"
              }), ": 카메라 영상 전체에서 얼굴을 인식하게 하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on",
                product: "2"
              }), "으로 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceOperationMode",
            product: "2"
          }), ": 얼굴을 인증할 때 장치의 작동 모드를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.face.operation_mode.enable",
                product: "2"
              }), ": 비주얼 및 적외선 매칭을 모두 수행하여 얼굴 인증의 정확도를 높일 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.face.operation_mode.disable",
                product: "2"
              }), ": 장치의 인증 범위 안에서 사용자가 걸어가면서도 얼굴을 인증할 수 있도록 빠르게 인증을 수행할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceFakeDetection",
            product: "2"
          }), ": 사진 등의 위조 얼굴을 이용한 사용자 인증을 방지할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceOperationMode",
            product: "2"
          }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.face.operation_mode.enable",
            product: "2"
          }), "로 설정하면 활성화됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.duplicateCheck",
            product: "2"
          }), ": 얼굴을 등록할 때 중복 등록 여부를 검사할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치 종류에 따라 설정할 수 있는 옵션은 다를 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.ambientBrightness",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceLFD",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceQuickEnrollment",
              product: "2"
            }), " 옵션은 FaceStation 2, FaceLite 모델에서 지원합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.lightBrightness",
              product: "2"
            }), " 옵션은 FaceStation F2 펌웨어 1.1.0 이상 모델에서 지원합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceDetectSetting",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceOperationMode",
              product: "2"
            }), " 옵션은 FaceStation F2, BioStation 3 모델에서 지원합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qr바코드-설정",
      children: "QR/바코드 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "user.credential.barcode",
        product: "2"
      }), " 그룹에서는 장치의 QR/바코드 인증에 대한 세부 사항을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useVisualBarcode",
            product: "2"
          }), ": 장치의 카메라를 통한 QR/바코드 인증 사용 여부를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.qrCameraTimeout",
            product: "2"
          }), ": 카메라의 스캔 대기 시간을 설정하세요. 설정한 시간 동안 QR/바코드를 스캔하지 못하면 인증이 실패됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.normalize",
            product: "2"
          }), ": 사용자에게 발급한 CSN 카드 또는 Wiegand 카드와 동일한 데이터의 QR코드로 인증할 수 있도록 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.motionSensor",
            product: "2"
          }), ": 움직임을 감지하여 카메라가 스캔을 시작하는 감도를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useBarcodeScanner",
            product: "2"
          }), ": 장치의 스캐너를 통한 QR/바코드 인증 사용 여부를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.qrScanTimeout",
            product: "2"
          }), ": 스캔 대기 시간을 설정하세요. 설정한 시간 동안 QR/바코드를 스캔하지 못하면 인증이 실패됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVisualBarcode",
              product: "2"
            }), " 옵션을 사용하려면 별도의 장치 라이선스가 필요합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVisualBarcode",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.qrCameraTimeout",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.normalize",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.motionSensor",
              product: "2"
            }), " 옵션을 지원하는 장치는 아래를 참고하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 (XS2-ODPB, XS2-OAPB, XS2-DPB, XS2-APB) 펌웨어 1.2.0 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 (BS3-DB, BS3-APWB) 펌웨어 1.1.0 이상"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useBarcodeScanner",
              product: "2"
            }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.qrScanTimeout",
              product: "2"
            }), " 옵션을 지원하는 장치는 아래를 참고하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "X-Station 2 (XS2-QDPB, XS2-QAPB)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카드-인증-설정",
      children: "카드 인증 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardType",
        product: "2"
      }), " 그룹에서는 장치에서 사용할 카드 종류를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치에서 지원하는 카드 종류만 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.cardType",
          product: "2"
        }), " 그룹에 표시됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.CSN",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSN 카드 및 포맷 종류를 선택하고 바이트 순서를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.byteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": 카드 데이터를 처리할 때 큰 바이트 단위에서 작은 바이트 단위 순서로 처리하여 카드 일련 번호(CSN)를 왼쪽에서 오른쪽으로 순차 저장합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": 카드 데이터를 처리할 때 작은 바이트 단위에서 큰 바이트 단위 순서로 처리하여 카드 일련 번호(CSN)를 저장합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.formatType",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.general",
                product: "2"
              }), ": 카드의 일련 번호(CSN)를 별도의 변환 없이 모두 읽어서 표현합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.wiegand",
                product: "2"
              }), ": 사용자가 정의한 Wiegand 형식에 따라 카드 일련 번호(CSN)를 변환하여 표현합니다. 새로운 Wiegand 형식을 설정하려면 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.Wiegand",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wiegand 카드 종류를 선택하고 Wiegand 형식을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.cardFormat.wiegand.format",
        product: "2"
      }), " 옵션에서 사용할 Wiegand 형식을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["새로운 Wiegand 형식을 설정하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.supremaSmartCard",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "슈프리마 스마트 카드 종류를 선택하고 카드 레이아웃과 바이트 순서를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.batch.supremaSmartCardLayout",
            product: "2"
          }), ": 슈프리마 스마트 카드 레이아웃을 선택하세요. 새로운 스마트 카드 레이아웃을 설정하려면 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.supremaSmartCardByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": 카드 데이터를 큰 바이트 단위에서 작은 바이트 단위 순서로 처리합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": 카드 데이터를 작은 바이트 단위에서 큰 바이트 단위 순서로 처리합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-3",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.customSmartCard",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "타사에서 발급한 커스텀 스마트 카드의 종류를 선택하고 카드 레이아웃과 바이트 순서를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.batch.customSmartCardLayout",
            product: "2"
          }), ": 커스텀 스마트 카드 레이아웃을 선택하세요. 새로운 스마트 카드 레이아웃을 설정하려면 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.customSmartCardByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": 카드 데이터를 큰 바이트 단위에서 작은 바이트 단위 순서로 처리합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": 카드 데이터를 작은 바이트 단위에서 큰 바이트 단위 순서로 처리합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "커스텀 스마트 카드를 지원하는 장치와 펌웨어 버전 보기"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass D2 펌웨어 1.7.1 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry P2 펌웨어 1.5.1 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W2 펌웨어 1.8.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2a 펌웨어 1.1.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 펌웨어 1.3.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 펌웨어 1.3.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 펌웨어 1.0.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 펌웨어 1.6.2 이상"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-4",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.csnMobile",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 카드의 인식 방법을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "NFC"
          }), ": 모바일 기기에서 NFC 통신을 통해 모바일 카드를 인식합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BLE"
          }), ": 저전력 블루투스(Bluetooth Low Energy, BLE) 통신를 통해 모바일 카드를 인식합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-5",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.templateOnMobile",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "템플릿 온 모바일의 인식 방법과 사용자가 장치에서 직접 등록할 바이오 메트릭을 지정하고 바이트 순서를 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.TomOutputByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": 카드 데이터를 큰 바이트 단위에서 작은 바이트 단위 순서로 처리합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": 카드 데이터를 작은 바이트 단위에서 큰 바이트 단위 순서로 처리합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "템플릿 온 모바일을 지원하는 장치와 펌웨어 버전 보기"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 펌웨어 1.2.0 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 펌웨어 1.0.0 이상"
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
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