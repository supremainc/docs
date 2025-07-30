"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8438"], {
1818: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_check_ethernet_mdx_8ee_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-check-ethernet-mdx-8ee.json
var site_docs_platform_biostar_x_check_ethernet_mdx_8ee_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-ethernet","title":"네트워크 우선순위 확인하기","description":"BioStar X를 설치하기 전에 서버의 네트워크 우선순위를 확인하고 설정하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/check-ethernet.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-ethernet","permalink":"/docs/platform/biostar_x/check-ethernet","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-ethernet.mdx","tags":[],"version":"current","frontMatter":{"id":"check-ethernet","title":"네트워크 우선순위 확인하기","description":"BioStar X를 설치하기 전에 서버의 네트워크 우선순위를 확인하고 설정하는 방법을 안내합니다.","keywords":["네트워크","BioStar X"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"시작하기","permalink":"/docs/platform/biostar_x/getting-started"},"next":{"title":"간편 설치하기","permalink":"/docs/platform/biostar_x/express-install"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/check-ethernet.mdx


const frontMatter = {
	id: 'check-ethernet',
	title: '네트워크 우선순위 확인하기',
	description: 'BioStar X를 설치하기 전에 서버의 네트워크 우선순위를 확인하고 설정하는 방법을 안내합니다.',
	keywords: [
		'네트워크',
		'BioStar X'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "언제 필요한가요?",
  "id": "언제-필요한가요",
  "level": 2
}, {
  "value": "네트워크 우선순위 확인하기",
  "id": "네트워크-우선순위-확인하기",
  "level": 2
}, {
  "value": "명령 프롬프트에서 확인",
  "id": "명령-프롬프트에서-확인",
  "level": 3
}, {
  "value": "네트워크 어댑터 정보 확인",
  "id": "네트워크-어댑터-정보-확인",
  "level": 3
}, {
  "value": "네트워크 우선순위 변경하기",
  "id": "네트워크-우선순위-변경하기",
  "level": 2
}, {
  "value": "네트워크 설정 열기",
  "id": "네트워크-설정-열기",
  "level": 3
}, {
  "value": "어댑터 옵션 열기",
  "id": "어댑터-옵션-열기",
  "level": 3
}, {
  "value": "메트릭 설정",
  "id": "메트릭-설정",
  "level": 3
}, {
  "value": "설정 확인",
  "id": "설정-확인",
  "level": 3
}, {
  "value": "문제 해결",
  "id": "문제-해결",
  "level": 2
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
  }, {Image, NextItem, NextStep, Step, Steps} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 설치하기 전에 서버의 네트워크 우선순위를 확인하고 설정하는 방법을 안내합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "언제-필요한가요",
      children: "언제 필요한가요?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 네트워크 우선순위 확인 및 설정이 필요합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버에 2개 이상의 네트워크 어댑터(랜카드)가 설치되어 있을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["특정 네트워크 어댑터를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서비스에서 사용해야 할 때"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 설치 후 네트워크 연결 문제가 발생하는 것을 미리 방지할 때"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["위와 같은 상황에 해당하지 않는다면 네트워크 우선순위를 변경할 필요가 없습니다. 이 단계를 건너뛰고 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 설치를 진행하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 설치에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "express-install",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 설치 시 네트워크 메트릭 값이 낮은(우선순위가 높은) 네트워크 어댑터가 자동 선택됩니다. 설치 후에는 이 설정을 변경하기 어려우므로, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "설치 전에 반드시 네트워크 우선순위를 확인하고 조정"
        }), "해야 합니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "네트워크-우선순위-확인하기",
      children: "네트워크 우선순위 확인하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "명령-프롬프트에서-확인",
      children: "명령 프롬프트에서 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "시작"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cmd"
          }), "를 검색하여 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "명령 프롬프트"
          }), "를 실행하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다음 명령어를 입력하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cmd",
            children: "route print\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["출력 결과에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IPv4 Route Table"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network Destination"
          }), "이 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.0.0.0"
          }), "인 항목들을 찾아보세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Metric"
          }), " 열의 값을 확인하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "값이 낮을수록 우선순위가 높습니다"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "예시 출력:"
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-install-check-network-cmd.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["위 예시에서는 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "192.168.40.123"
      }), " 인터페이스가 메트릭 값 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20"
      }), "으로 더 높은 우선순위를 가집니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "네트워크-어댑터-정보-확인",
      children: "네트워크 어댑터 정보 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "각 인터페이스가 어떤 네트워크 어댑터에 해당하는지 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "명령 프롬프트"
          }), " 창에서 아래 명령어를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cmd",
            children: "ipconfig /all\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["각 네트워크 어댑터의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IPv4 주소"
          }), "와 앞서 확인한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Gateway"
          }), " 주소를 매칭하여 어떤 어댑터인지 식별하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "네트워크-우선순위-변경하기",
      children: "네트워크 우선순위 변경하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "원하는 네트워크 어댑터의 우선순위를 높이려면 다음 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 단계는 Windows 11 기준입니다. 사용 중인 Windows 버전에 따라 메뉴 위치가 다를 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "네트워크-설정-열기",
          children: "네트워크 설정 열기"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "시작"
              }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "네트워크 연결 보기"
              }), "를 입력하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-start-network-search.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["검색 결과에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "네트워크 연결 보기"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "목록에서 인터넷에 연결된 어댑터를 더블 클릭하세요."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-control-network-connections.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "어댑터-옵션-열기",
          children: "어댑터 옵션 열기"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "이더넷 상태"
              }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "속성"
              }), " 버튼을 클릭하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-ethernet-status.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["이더넷 속성 창이 나타나면 목록에서 ", (0,jsx_runtime.jsx)("b", {
                children: "인터넷 프로토콜 버전 4(TCP/IPv4)"
              }), "를 선택하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-ethernet-properties.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "속성"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "인터넷 프로토콜 버전 4(TCP/IPv4) 속성"
              }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "고급"
              }), " 버튼을 클릭하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-protocol-properties.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "메트릭-설정",
          children: "메트릭 설정"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "자동 메트릭"
              }), " 체크박스를 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "해제"
              }), "하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-set-metrics.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "인터페이스 메트릭"
              }), " 필드에 원하는 값을 입력하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["가장 높은 우선순위를 원한다면, ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "1"
                  }), "을 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "다른 어댑터보다 높은 우선순위를 원한다면, 다른 어댑터의 메트릭 값보다 작은 수를 입력하세요."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["설정을 저장하고 모든 창을 닫으려면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "확인"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "인터페이스 메트릭"
            }), "로 입력할 수 있는 값은 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), "부터 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "9999"
            }), "까지입니다. 값이 낮을수록 우선순위가 높습니다."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "설정-확인",
          children: "설정 확인"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "명령 프롬프트"
              }), "를 다시 열고 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "route print"
              }), " 명령어를 실행하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "메트릭 값이 변경되었는지 확인하세요."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "문제-해결",
      children: "문제 해결"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설정이 적용되지 않는다면 컴퓨터를 재시작하거나 네트워크 어댑터를 비활성화한 후 다시 활성화하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["네트워크 연결이 끊어진다면 원래 설정으로 되돌리고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "자동 메트릭"
          }), " 옵션을 다시 활성화하세요. 네트워크 관리자에게 문의하여 올바른 설정값을 확인하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 설치 후 네트워크 설정을 변경해야 한다면, 프로그램을 완전히 제거한 후 재설치하는 것을 권장합니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "express-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "처음 설치하는 사용자를 위한 간편 설치 방법을 안내합니다."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "custom-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자가 이미 설치한 데이터베이스와 연동하기 위한 사용자 정의 설치 방식을 안내합니다."
        })
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