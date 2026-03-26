"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4356"], {
34422: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_configure_privacy_overlay_mdx_102_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-configure-privacy-overlay-mdx-102.json
var site_docs_device_vionyx_webserver_configure_privacy_overlay_mdx_102_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/configure-privacy-overlay","title":"프라이버시 및 오버레이 설정하기","description":"민감한 영역을 마스킹하고 얼굴을 자동 블러처리하며, 영상에 날짜/시간과 카메라 이름을 표시하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/configure-privacy-overlay.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/configure-privacy-overlay","permalink":"/docs/ja/device/vionyx_webserver/configure-privacy-overlay","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/configure-privacy-overlay.mdx","tags":[],"version":"current","frontMatter":{"id":"configure-privacy-overlay","title":"프라이버시 및 오버레이 설정하기","description":"민감한 영역을 마스킹하고 얼굴을 자동 블러처리하며, 영상에 날짜/시간과 카메라 이름을 표시하는 방법을 안내합니다.","keywords":["Privacy","Overlay","프라이버시","오버레이","마스킹","블러"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"카메라 설정 변경하기","permalink":"/docs/ja/device/vionyx_webserver/configure-camera-settings"},"next":{"title":"날짜와 시간 설정하기","permalink":"/docs/ja/device/vionyx_webserver/configure-date-time"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/configure-privacy-overlay.mdx


const frontMatter = {
	id: 'configure-privacy-overlay',
	title: '프라이버시 및 오버레이 설정하기',
	description: '민감한 영역을 마스킹하고 얼굴을 자동 블러처리하며, 영상에 날짜/시간과 카메라 이름을 표시하는 방법을 안내합니다.',
	keywords: [
		'Privacy',
		'Overlay',
		'프라이버시',
		'오버레이',
		'마스킹',
		'블러'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "프라이버시 &amp; 오버레이 설정",
  "id": "프라이버시--오버레이-설정",
  "level": 2
}, {
  "value": "프라이버시 영역 설정",
  "id": "프라이버시-영역-설정",
  "level": 2
}, {
  "value": "프라이버시 영역 추가",
  "id": "프라이버시-영역-추가",
  "level": 3
}, {
  "value": "얼굴 프라이버시 설정",
  "id": "얼굴-프라이버시-설정",
  "level": 2
}, {
  "value": "오버레이 설정",
  "id": "오버레이-설정",
  "level": 2
}, {
  "value": "설정 저장",
  "id": "설정-저장",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamReset, IcCamTrash, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamReset) _missingMdxReference("IcCamReset", true);
  if (!IcCamTrash) _missingMdxReference("IcCamTrash", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "privacy_overlay",
        product: "cam",
        className: "normal"
      }), " 설정을 사용하면 카메라 영상에 민감한 영역을 가리거나 얼굴을 자동으로 블러 처리할 수 있습니다. 또한 영상에 날짜 및 시간, 카메라 이름을 표시해 영상의 출처와 촬영 시각을 명확히 할 수 있습니다. 모든 설정은 즉시 라이브 뷰에 반영됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 프라이버시 & 오버레이를 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사생활 침해가 우려되는 특정 영역을 마스킹하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴 자동 블러로 개인정보 보호 정책을 준수하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "녹화 영상에 날짜/시간을 표시해 영상 추적성을 확보하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "여러 카메라 운영 시 카메라 이름을 표시해 영상 출처를 명확히 하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "프라이버시 설정(마스킹, 얼굴 블러)은 영상 표시에만 적용되며, AI 분석은 원본 이미지를 기반으로 수행되어 AI 성능에 영향을 주지 않습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "프라이버시--오버레이-설정",
      children: "프라이버시 & 오버레이 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "basic",
            product: "cam"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "privacy_overlay",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-settings-privacy-overlay.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경 사항을 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "변경 사항은 저장 후 즉시 카메라에 반영됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "프라이버시-영역-설정",
      children: "프라이버시 영역 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "촬영 영상에서 비공개할 특정 영역을 마스킹할 수 있습니다. 최대 10개 영역까지 설정 가능하며, 각 영역은 움직임 없이 고정됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "프라이버시-영역-추가",
      children: "프라이버시 영역 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "area_setting",
            product: "cam"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_button",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "라이브 뷰에 마스킹할 영역이 추가됩니다. 영역의 모서리를 드래그해 크기를 조절하거나 영역 전체를 드래그해 위치를 이동할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-settings-privacy-overlay-add-area.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "마스킹 영역이 생성되면, 우측 설정 패널에서 영역 이름과 순서, 색상을 설정할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "name",
                product: "cam"
              }), ": 마스킹 영역 이름은 자동 생성되며, 필요에 따라 수정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "order",
                product: "cam"
              }), ": 마스킹 영역이 서로 겹칠 때 표시 순서를 조정할 수 있습니다. 숫자가 클수록 위에 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "color",
                product: "cam"
              }), ": 마스킹 영역의 색상을 선택할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "마스킹된 영역은 모든 뷰 모드(Fisheye, Single Panorama, Double Panorama, Quad View)에 자동으로 적용됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["마스킹 영역의 설정을 초기화하려면 ", (0,jsx_runtime.jsx)(IcCamReset, {
              title: "reset"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["마스킹 영역을 삭제하려면 ", (0,jsx_runtime.jsx)(IcCamTrash, {
              title: "delete"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "얼굴-프라이버시-설정",
      children: "얼굴 프라이버시 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["카메라가 감지한 얼굴 또는 전신을 자동으로 블러 처리하여 개인정보를 보호할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "face_privacy_setting",
        product: "cam"
      }), " 옵션을 활성화하고 원하는 블러 처리 범위를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-settings-privacy-overlay-face-body.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Face Only"
          }), ": 감지된 모든 얼굴이 자동으로 블러 처리됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Full Body"
          }), ": 감지된 전신이 자동으로 블러 처리됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "얼굴 또는 전신이 블러 처리되어도 AI 성능에는 영향을 주지 않습니다. 카메라가 블러 처리된 영상을 표시하는 동시에, AI 분석은 원본 이미지를 기반으로 수행되므로 얼굴 인식, 객체 추적 등의 AI 기능이 정상 작동합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "오버레이-설정",
      children: "오버레이 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["라이브 뷰에 날짜/시간과 카메라 이름을 표시할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "overlay",
        product: "cam"
      }), " 옵션을 활성화하고, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "date_and_time_overlay",
        product: "cam"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "camera_name",
        product: "cam"
      }), "에서 세부 설정을 조정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-settings-privacy-overlay-date-camera.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "각 설정은 변경 직후 자동 저장되어 라이브 뷰에 즉시 반영됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "date_and_time_overlay",
        product: "cam",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "라이브 뷰에 표시되는 날짜와 시간의 형식과 크기, 색상을 설정할 수 있습니다. 라이브 뷰에서 날짜/시간 위치를 확인하고, 필요하면 마우스로 드래그하여 위치를 조절하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "date",
            product: "cam"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "time",
            product: "cam"
          }), ": 토글 버튼을 클릭해 날짜 및 시간 오버레이를 켜거나 끌 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "date_format",
            product: "cam"
          }), ": 날짜 형식을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "YYYY-MM-DD (기본값, 예: 2026-01-12)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "MM-DD-YYYY (예: 01-12-2026)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "DD-MM-YYYY (예: 12-01-2026)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "time_format",
            product: "cam"
          }), ": 시간 형식을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["HH:MM", ":SS", " (기본값, 예: 13:45:56)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["HH", ":MM", " (초 생략, 예: 13:45)"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "font_size",
            product: "cam"
          }), ": 라이브 뷰에 표시되는 글자 크기를 선택하세요. 1부터 6까지 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "color",
            product: "cam"
          }), ": 라이브 뷰에 표시되는 글자 색상을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "날짜 및 시간 오버레이는 Fisheye View에만 표시됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "camera_name",
        product: "cam",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "라이브 뷰에 카메라 이름을 표시해 영상의 출처를 명확히 할 수 있습니다. 라이브 뷰에서 카메라 이름 위치를 확인하고, 필요하면 마우스로 드래그하여 위치를 조절하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "display",
            product: "cam"
          }), ": 토글 버튼을 클릭해 카메라 이름 오버레이를 켜거나 끌 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "name",
            product: "cam"
          }), ": 카메라 이름을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "font_size",
            product: "cam"
          }), ": 라이브 뷰에 표시되는 글자 크기를 선택하세요. 1부터 6까지 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "color",
            product: "cam"
          }), ": 라이브 뷰에 표시되는 글자 색상을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "설정-저장",
      children: "설정 저장"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정한 내용은 라이브 뷰에서 바로 확인할 수 있으며, 저장하려면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "save",
        product: "cam"
      }), " 버튼을 클릭하세요. 저장된 설정은 카메라에 적용되어 라이브 뷰와 녹화 영상에 반영됩니다."]
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