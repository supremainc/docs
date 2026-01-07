"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9751"], {
18363: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_integration_quickstart_mdx_19b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-integration-quickstart-mdx-19b.json
var site_docs_platform_biostar_air_integration_quickstart_mdx_19b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/integration-quickstart","title":"API 통합","description":"BioStar Air 데모 사이트 설정, 호환 리더기 등록, API 키 생성, 클라우드 API와의 통합 테스트 방법을 알아보세요.","source":"@site/docs/platform/biostar_air/integration-quickstart.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/integration-quickstart","permalink":"/docs/ja/platform/biostar_air/integration-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/integration-quickstart.mdx","tags":[],"version":"current","frontMatter":{"id":"integration-quickstart","title":"API 통합","description":"BioStar Air 데모 사이트 설정, 호환 리더기 등록, API 키 생성, 클라우드 API와의 통합 테스트 방법을 알아보세요.","keywords":["API 통합","빠른 시작","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"페더레이션 사이트","permalink":"/docs/ja/platform/biostar_air/federated-sites"},"next":{"title":"E200 QR Scanner 배선 및 구성","permalink":"/docs/ja/platform/biostar_air/wiring-and-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/integration-quickstart.mdx


const frontMatter = {
	id: 'integration-quickstart',
	title: 'API 통합',
	description: 'BioStar Air 데모 사이트 설정, 호환 리더기 등록, API 키 생성, 클라우드 API와의 통합 테스트 방법을 알아보세요.',
	keywords: [
		'API 통합',
		'빠른 시작',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사전 요구 사항",
  "id": "pre-requisites",
  "level": 2
}, {
  "value": "Step 1: 데모 환경과 API 키 설정",
  "id": "demo-setup",
  "level": 2
}, {
  "value": "회원 가입 및 로그인",
  "id": "회원-가입-및-로그인",
  "level": 3
}, {
  "value": "데모 애플리케이션 생성",
  "id": "데모-애플리케이션-생성",
  "level": 3
}, {
  "value": "API 키 발급",
  "id": "api-키-발급",
  "level": 3
}, {
  "value": "데모 포털 로그인",
  "id": "데모-포털-로그인",
  "level": 3
}, {
  "value": "Step 2: 장치 등록",
  "id": "registerDevices",
  "level": 2
}, {
  "value": "Step 3: 장치 관리",
  "id": "step-3-장치-관리",
  "level": 2
}, {
  "value": "API Base URLs",
  "id": "api-base-urls",
  "level": 2
}, {
  "value": "권장 API 통합 범위",
  "id": "recommended-integration-scope",
  "level": 2
}, {
  "value": "Optional: API 로그인 절차",
  "id": "optional-api-login-flow",
  "level": 2
}, {
  "value": "로그인",
  "id": "login",
  "level": 3
}, {
  "value": "계정 정보 조회",
  "id": "get-self-accounts",
  "level": 3
}, {
  "value": "계정에 로그인",
  "id": "login-to-account",
  "level": 3
}, {
  "value": "웹 브라우저에서 Bearer 토큰 얻는 방법",
  "id": "getYourBearerToken",
  "level": 2
}, {
  "value": "Chrome/Edge (Windows 또는 Mac)",
  "id": "chrome-edge",
  "level": 3
}, {
  "value": "Safari (Mac)",
  "id": "safari",
  "level": 3
}, {
  "value": "사용자 관리 API 호출",
  "id": "user-management-api-calls",
  "level": 2
}, {
  "value": "Demo vs Production",
  "id": "demo-vs-production",
  "level": 2
}, {
  "value": "도움이 필요하세요?",
  "id": "need-help",
  "level": 2
}, {
  "value": "애플리케이션 예제",
  "id": "sample-application",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcAdd, Image, Kbd, Step, Steps} = _components;
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서에서는 BioStar Air 데모 사이트 설정, 호환 BioStar Air 리더기 연결 및 등록, 클라우드 API를 사용한 통합 테스트 방법을 안내합니다. 이전에 BioStar 2에서 작업한 적이 있다면 많은 개념이 친숙하게 느껴질 것입니다. 그러나 BioStar Air는 완전히 클라우드 기반입니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-requisites",
      children: "사전 요구 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "시작하기 전에 다음 사항을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["공장 초기화된 펌웨어를 설치한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air 호환 장치"
          }), "를 준비하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-AIR, XS2-AIR, BEW3-AIR, BS3-AIR, BLN2-AIR"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "장치는 공인 슈프리마 대리점을 통해 구매할 수 있습니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치는 이더넷을 통해 인터넷에 연결되어 있어야 합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "네트워크에서 아웃바운드 액세스를 허용하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Port 443 (HTTPS)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Port 5671 (MQTT over TLS)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-setup",
      children: "Step 1: 데모 환경과 API 키 설정"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "회원-가입-및-로그인",
          children: "회원 가입 및 로그인"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.biostarair.com/login",
                children: "BioStar Air Developer"
              }), "로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "회원 가입"
              }), "을 클릭하고 양식을 작성한 후 승인을 기다리세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "승인이 완료되면 크리덴셜을 사용해 로그인하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "데모-애플리케이션-생성",
          children: "데모 애플리케이션 생성"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "API"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Management"
              }), "로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "+ Register"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["애플리케이션 유형을 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Demo"
              }), "로 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["애플리케이션 이름을 입력하고 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["데모 사이트 로그인 크리덴셜(이메일 및 비밀번호)이 포함된 엑셀 파일을 다운로드하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Download"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "api-키-발급",
          children: "API 키 발급"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Application Management"
              }), "에서 등록한 애플리케이션을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "API Management"
              }), "로 스크롤하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Add"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이름을 입력하고 확인하세요. 생성된 키를 저장하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "데모-포털-로그인",
          children: "데모 포털 로그인"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://demo.airfobspace.com/login",
                children: "Demo Portal"
              }), "로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "엑셀 파일의 이메일 및 비밀번호로 로그인하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "방금 생성한 API 키를 입력하세요."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registerDevices",
      children: "Step 2: 장치 등록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 기기에 BioStar Air Demo App(안드로이드 전용)을 사용하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다음 링크를 클릭해 모바일 앱을 다운로드하세요. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://moca-public-file-share.s3.ap-northeast-2.amazonaws.com/DeviceRegistration.zip",
            children: "DeviceRegistration.zip"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "엑셀 파일의 크리덴셜로 로그인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "안드로이드 환경의 모바일 기기를 리더기 근처(BLE 범위)로 가져가세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "All Menu"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Devices"
              }), "에서 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcAdd, {}), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["장치를 검색하고 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), " 버튼을 탭하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치에서 소리가 나고 재부팅되며 등록된 장치 목록에 나타납니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "장치는 모바일 앱을 통해서만 등록할 수 있습니다. 웹 포털에서는 등록할 수 없습니다. API 기반 등록에는 파트너에게 제공되지 않는 암호화 인증서가 필요합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3-장치-관리",
      children: "Step 3: 장치 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "데모 앱 또는 데모 웹 포털에서 장치를 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Demo App"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo Web Portal"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://demo.airfobspace.com/login",
            children: "https://demo.airfobspace.com/login"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-base-urls",
      children: "API Base URLs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "환경"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base URL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Demo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://demo-afs-api.airfob.com/v1/",
              children: "https://demo-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production - Europe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://e-afs-api.airfob.com/v1/",
              children: "https://e-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production - Korea"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://a-afs-api.airfob.com/v1/",
              children: "https://a-afs-api.airfob.com/v1/"
            }), " (EU가 아닌 모든 고객 전용)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-integration-scope",
      children: "권장 API 통합 범위"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API 통합은 가능한 한 아래의 범위로 제한하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 라이프사이클(lifecycle) 관리(생성/업데이트/삭제)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "자격 증명 관리(모바일, RF 카드, 생체 인식)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자가 기존 BioStar Air 웹 및 모바일 관리 앱을 사용할 수 있도록 허용하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입 등급"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일정"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입문 및 장치 설정"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사이트 설정"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optional-api-login-flow",
      children: "Optional: API 로그인 절차"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.postman.com/",
        children: "Postman"
      }), " 또는 프로그래밍 방식으로 API 호출을 수행할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login",
      children: "로그인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "login"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"username\": \"your_email\",\n  \"password\": \"your_password\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bearer 토큰(JWT)을 반환합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-self-accounts",
      children: "계정 정보 조회"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getSelfAccounts"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), ": Bearer Token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "접근 가능한 사이트 및 계정 목록을 반환합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login-to-account",
      children: "계정에 로그인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "loginAccount"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), ": Bearer Token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "특정 사이트 토큰을 반환합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getYourBearerToken",
      children: "웹 브라우저에서 Bearer 토큰 얻는 방법"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chrome-edge",
      children: "Chrome/Edge (Windows 또는 Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["웹 브라우저에서 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "F12"
          }), " 또는 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Ctrl/Cmd + Shift + I"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " 탭으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "페이지를 새로 고침하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API 호출을 검색하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["예, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "groups"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "login"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 요청을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Headers"
          }), " 탭으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["요청 헤더에서 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer ..."
          }), "를 찾으세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "오른쪽 마우스를 클릭하고 토큰을 복사하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-chrome-develope.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safari",
      children: "Safari (Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "개발자"
          }), " 메뉴를 확성화하세요. Safari → Preferences → Advanced → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Develop menu"
          }), "를 체크하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Develop"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Web Inspector"
          }), "으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " 탭으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "페이지를 새로 고침하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API 호출을 필터링하고 검사하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["요청 헤더에서 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer"
          }), " 토큰을 복사하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-management-api-calls",
      children: "사용자 관리 API 호출"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "로그인 후 다음 엔드포인트를 사용하여 사용자를 관리하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "getUsers"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "createUser"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "updateUser"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "suspendUsers"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "항상 Authorization 헤더에 Bearer 토큰을 포함하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "사용자를 활성화하려면 최소한 하나의 크리덴셜 유형을 할당해야 합니다."
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "예, RF 카드, 모바일, LinkPass"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-vs-production",
      children: "Demo vs Production"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["테스트를 위한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo"
          }), " 사이트는 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developers.biostarair.com/login",
            children: "개발자 포털"
          }), "을 통해 생성됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Production"
          }), " 사이트는 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com/",
            children: "파트너 포털"
          }), "을 통해 생성되며 사이트 ID, 사용자 이메일 및 비밀번호가 필요합니다. Production 사이트는 승인된 판매자 또는 슈프리마 지사만 생성할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 ID와 계정 ID는 다릅니다. 혼동하지 마세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "여러 사이트를 관리한다면 비밀번호를 안전하게 저장하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "항상 최신 Bearer 토큰을 사용하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "브라우저에서 복사한 Bearer 토큰은 Postman에서 재사용할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "need-help",
      children: "도움이 필요하세요?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["슈프리마 기술 지원 포털에서 티켓을 여세요. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://support.supremainc.com",
        children: "https://support.supremainc.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sample-application",
      children: "애플리케이션 예제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음은 API를 통해 CSV 파일을 업로드하고 사용자를 일괄 중단할 수 있는 Python 앱의 샘플 코드입니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        metastring: "title='Python'",
        children: "import requests\nimport csv\nimport getpass\nfrom pathlib import Path\n\ndef select_server():\n    servers = {\n        \"1\": (\"Demo\", \"https://demo-afs-api.airfob.com/v1\"),\n        \"2\": (\"Global\", \"https://a-afs-api.airfob.com/v1\"),\n        \"3\": (\"EU\", \"https://e-afs-api.airfob.com/v1\")\n    }\n\n    print(\"Please select a server:\")\n    for key, (name, _) in servers.items():\n        print(f\"{key}: {name}\")\n\n    choice = input(\"Enter server number: \").strip()\n    return servers.get(choice, (None, None))[1]\n\ndef login(base_url, username, password):\n    url = f\"{base_url}/login\"\n    payload = {\"username\": username, \"password\": password}\n    response = requests.post(url, json=payload)\n    response.raise_for_status()\n    data = response.json()\n    token = data.get(\"access_token\")\n    if not token:\n        raise ValueError(\"Login succeeded but no access_token returned.\")\n    print(\"✅ Login successful.\")\n    return token\n\ndef login_to_account(base_url, token, account_id):\n    url = f\"{base_url}/login/{account_id}\"\n    headers = {\"Authorization\": f\"Bearer {token}\"}\n    response = requests.post(url, headers=headers)\n    response.raise_for_status()\n    new_token = response.json().get(\"access_token\")\n    if new_token:\n        print(f\"✅ Switched to account ID: {account_id}\")\n        return new_token\n    return token\n\ndef get_accounts(base_url, token):\n    url = f\"{base_url}/accounts/self\"\n    headers = {\"Authorization\": f\"Bearer {token}\"}\n    response = requests.get(url, headers=headers)\n    response.raise_for_status()\n    accounts = response.json().get(\"accounts\", [])\n    return [{\"id\": acc[\"id\"], \"name\": acc[\"site\"][\"name\"]} for acc in accounts]\n\ndef suspend_users_from_csv(base_url, csv_path, token):\n    if not Path(csv_path).exists():\n        print(f\"❌ File not found: {csv_path}\")\n        return\n\n    headers = {\"Authorization\": f\"Bearer {token}\"}\n\n    with open(csv_path, newline='', encoding='utf-8-sig') as f:\n        reader = csv.DictReader(f)\n\n        # Normalize headers\n        reader.fieldnames = [field.strip().lower() for field in reader.fieldnames]\n        if 'email' not in reader.fieldnames:\n            print(\"❌ Missing required 'email' column in CSV.\")\n            return\n\n        for row in reader:\n            email = row.get(\"email\")\n            if not email:\n                print(\"⚠️ Skipping row with missing email.\")\n                continue\n\n            # Search user\n            search_url = f\"{base_url}/users/search\"\n            payload = {\"filters\": [{\"field\": \"email\", \"equals\": email}]}\n            search_resp = requests.post(search_url, headers=headers, json=payload)\n            if search_resp.status_code != 200:\n                print(f\"❌ Failed to search user {email}: {search_resp.text}\")\n                continue\n\n            users = search_resp.json().get(\"users\", [])\n            if not users:\n                print(f\"❌ No user found with email: {email}\")\n                continue\n\n            user_id = users[0][\"id\"]\n\n            # Suspend user\n            suspend_url = f\"{base_url}/users/suspend\"\n            suspend_payload = {\n                \"ids\": [user_id],\n                \"certify_by\": \"none\",\n                \"use_site_template\": True\n            }\n            suspend_resp = requests.post(suspend_url, headers=headers, json=suspend_payload)\n            if suspend_resp.status_code == 200:\n                print(f\"✅ Suspended user: {email}\")\n            else:\n                print(f\"❌ Failed to suspend user {email}: {suspend_resp.text}\")\n\ndef main():\n    base_url = select_server()\n    if not base_url:\n        print(\"❌ Invalid selection. Exiting.\")\n        return\n\n    print(\"\\n? BioStar Air Login\")\n    username = input(\"Email: \")\n    password = getpass.getpass(\"Password: \")\n\n    token = login(base_url, username, password)\n    accounts = get_accounts(base_url, token)\n\n    print(\"\\n? Available Sites:\")\n    for i, acc in enumerate(accounts):\n        print(f\"{i}: {acc['name']} (ID: {acc['id']})\")\n\n    selected = int(input(\"\\nSelect site number to log into: \"))\n    account_id = accounts[selected][\"id\"]\n    token = login_to_account(base_url, token, account_id)\n\n    csv_path = input(\"Enter path to CSV file with user emails: \").strip()\n    suspend_users_from_csv(base_url, csv_path, token)\n\nif __name__ == \"__main__\":\n    main()\n"
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