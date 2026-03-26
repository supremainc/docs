"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8717"], {
85946: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_configure_video_profile_mdx_225_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-configure-video-profile-mdx-225.json
var site_docs_device_vionyx_webserver_configure_video_profile_mdx_225_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/configure-video-profile","title":"비디오 프로필 설정하기","description":"채널별 뷰 모드와 스트림 인코딩 값을 설정하고, 화면 좌우 반전과 초기화 정책까지 운영 관점에서 관리하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/configure-video-profile.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/configure-video-profile","permalink":"/docs/en/device/vionyx_webserver/configure-video-profile","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/configure-video-profile.mdx","tags":[],"version":"current","frontMatter":{"id":"configure-video-profile","title":"비디오 프로필 설정하기","description":"채널별 뷰 모드와 스트림 인코딩 값을 설정하고, 화면 좌우 반전과 초기화 정책까지 운영 관점에서 관리하는 방법을 안내합니다.","keywords":["비디오 프로필","스트림","코덱","해상도","프레임 레이트","비트레이트","좌우 반전"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"카메라 설정하기","permalink":"/docs/en/device/vionyx_webserver/configure-camera-device"},"next":{"title":"카메라 설정 변경하기","permalink":"/docs/en/device/vionyx_webserver/configure-camera-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/configure-video-profile.mdx


const frontMatter = {
	id: 'configure-video-profile',
	title: '비디오 프로필 설정하기',
	description: '채널별 뷰 모드와 스트림 인코딩 값을 설정하고, 화면 좌우 반전과 초기화 정책까지 운영 관점에서 관리하는 방법을 안내합니다.',
	keywords: [
		'비디오 프로필',
		'스트림',
		'코덱',
		'해상도',
		'프레임 레이트',
		'비트레이트',
		'좌우 반전'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "비디오 프로필 설정",
  "id": "비디오-프로필-설정",
  "level": 2
}, {
  "value": "채널 선택과 뷰 타입 확인",
  "id": "채널-선택과-뷰-타입-확인",
  "level": 2
}, {
  "value": "스트림 유형 선택",
  "id": "스트림-유형-선택",
  "level": 2
}, {
  "value": "프로필 상세 설정",
  "id": "프로필-상세-설정",
  "level": 2
}, {
  "value": "좌우 반전 설정",
  "id": "좌우-반전-설정",
  "level": 2
}, {
  "value": "채널 설정 초기화",
  "id": "채널-설정-초기화",
  "level": 2
}, {
  "value": "참조 정보",
  "id": "참조-정보",
  "level": 2
}, {
  "value": "채널/뷰 모드 정책",
  "id": "채널뷰-모드-정책",
  "level": 3
}, {
  "value": "스트림 및 인코딩 기본 정보",
  "id": "스트림-및-인코딩-기본-정보",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "라이브 화면에 표시되는 영상 품질과 저장되는 녹화 영상의 품질은 비디오 프로필 설정에 따라 달라집니다. 비디오 프로필 설정에서는 채널별로 뷰 모드와 스트림 인코딩 값을 조정할 수 있습니다. 또한, 설치 환경에 따라 좌우 반전(Mirror) 설정과 채널 설정 초기화 기능도 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 비디오 프로필을 설정해 최적의 영상 품질과 저장 용량, 네트워크 대역폭 균형을 맞추세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "저장 용량과 화질 균형을 맞추고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "네트워크 대역폭에 맞춰 Main/Sub 스트림을 분리해 운영하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "채널별 뷰 모드를 목적에 맞게 사용하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "AI 이벤트를 이미 운영 중이라면, 좌우 반전 또는 초기화 시 AI 이벤트 설정이 삭제될 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비디오-프로필-설정",
      children: "비디오 프로필 설정"
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
            sid: "video_profile",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-settings-video-profile.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "비디오 프로필 설정은 별도 저장 버튼 없이 변경 즉시 카메라에 반영됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "채널-선택과-뷰-타입-확인",
      children: "채널 선택과 뷰 타입 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "채널별 주요 목적은 다음과 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CH 1"
          }), ": 물리 카메라의 원본 Fisheye 화면을 기준으로 운영하는 채널입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CH 2"
          }), ": Panorama 또는 Quad 같은 가공 뷰로 관제 효율을 높여 운영하는 채널입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라 채널별 비디오 프로필 세부 항목을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video_profile",
            product: "cam"
          }), " 패널의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "channel",
            product: "cam"
          }), "에서 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "CH 1"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "CH 2"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "view_type",
            product: "cam"
          }), "의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "type",
            product: "cam"
          }), "에서 선택한 채널의 뷰 타입을 선택할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "채널별 뷰 타입 정책은 아래와 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "CH 1"
          }), ": Fisheye로 고정되어 있으며 변경할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "CH 2"
          }), ": Fisheye를 제외한 뷰 모드를 선택할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Single"
              }), ": 피쉬아이 카메라가 촬영한 영상을 보정하여 벽면형 파노라마 형식을 볼 수 있는 모드입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Double"
              }), ": 360˚ 영역을 촬영한 영상을 왜곡 보정하여 파노라마 형식의 상하 분할 화면으로 볼 수 있는 모드입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Quad View"
              }), ": 사람의 시야에 적합하도록 왜곡 보정한 특정 화면 4개를 동시에 볼 수 있는 모드입니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "스트림-유형-선택",
      children: "스트림 유형 선택"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "stream",
        product: "cam"
      }), "에서 설정할 스트림을 선택하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Main Stream"
      }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sub Stream"
      }), " 중 하나를 선택하고, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "profile",
        product: "cam"
      }), " 섹션에서 상세값을 조정하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Main Stream"
          }), ": 녹화 및 고화질 모니터링(해상도: 3520 × 3520)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sub Stream"
          }), ": 저대역폭 원격 모니터링(해상도: 1760 × 1760)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "프로필-상세-설정",
      children: "프로필 상세 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 스트림 유형에 따라 코덱 및 해상도, 프레임 레이트 등 세부 설정을 조정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "codec",
            product: "cam"
          }), ": 프로필에 적용할 코덱을 선택하세요. H.264 또는 H.265, MJPEG 중 하나를 선택할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "H.265 코덱을 선택하면 Profile T가 필수로 적용됩니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "resolution",
            product: "cam"
          }), ": 프로필에 적용할 해상도입니다. 스트림 유형에 따라 지원하는 해상도가 다릅니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Main Stream"
              }), ": 3520 × 3520"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Sub Stream"
              }), ": 1760 × 1760"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "frame_rate",
            product: "cam"
          }), ": 초당 프레임 수를 설정하세요. 30, 25, 20, 15, 10 프레임 중 하나를 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "max_bitrate",
            product: "cam"
          }), ": ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "bitrate_control",
            product: "cam"
          }), " 옵션이 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "VBR"
          }), "일 때, 영상의 최대 비트 레이트를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "bitrate_control",
            product: "cam"
          }), ": 영상 데이터 제어 방식을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "VBR"
              }), ": 영상의 복잡도에 따라 비트레이트가 가변하므로, 네트워크가 안정적일 때 고화질 제공합니다. 네트워크 대역폭이 충분한 환경에서 권장합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "CBR"
              }), ": 비트레이트를 고정하여 안정적인 스트리밍을 보장하지만, 복잡한 화면에서는 화질이 저하될 수 있습니다. 네트워크 대역폭이 제한적이거나 일정한 환경에서 권장합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "gov_length",
            product: "cam"
          }), ": I-Frame 간격을 설정합니다. 1~300 사이의 값을 선택할 수 있습니다. GOV 길이가 길수록 데이터양이 감소하고, 짧을수록 증가합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "가변 비트 레이트"
            }), "(Variable Bitrate, VBR)는 프레임의 데이터 크기를 고정하지 않고 최대 비트 레이트 내에서 영상을 전송하는 방식입니다. 영상의 복잡도에 따라 비트레이트가 가변적으로 조정되는 방식입니다. 일반적으로 고화질 영상을 제공하지만, 네트워크 대역폭이 일정하지 않은 환경에서는 영상 끊김이 발생할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "고정 비트 레이트"
            }), "(Constant Bitrate, CBR)는 프레임의 데이터 크기를 고정하여 영상을 전송하는 방식입니다. 네트워크 대역폭이 일정한 환경에서 안정적인 영상 스트리밍을 제공하지만, 영상의 복잡도에 따라 화질이 저하될 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "GOV"
            }), "(Group of Video)는 H.264/H.265 압축에서 I-Frame부터 다음 I-Frame 직전까지의 프레임 집합을 의미합니다. GOV 안에는 완전한 이미지 정보를 담는 I-Frame(키 프레임)과, 이전 프레임 대비 변경 정보만 담는 P-Frame이 포함됩니다. GOV 길이가 길수록 I-Frame 수가 줄어 영상 데이터 양이 줄고, GOV 길이가 짧을수록 I-Frame 수가 늘어 영상 데이터 양이 증가합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "좌우-반전-설정",
      children: "좌우 반전 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설치 위치에 따라 좌우 반전 설정이 필요할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "mirror",
        product: "cam"
      }), "에서 좌우 반전 설정을 켜거나 끌 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "AI 이벤트가 설정된 상태에서는 좌우 반전 변경이 제한될 수 있습니다. 이때 안내 팝업에 따라 AI 설정을 삭제하고 진행하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "채널-설정-초기화",
      children: "채널 설정 초기화"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["설정한 채널의 뷰 모드와 스트림 설정을 공장 초기값으로 복원하려면, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reset",
        product: "cam"
      }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "restore_to_default",
        product: "cam"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "선택한 채널만 공장 초기 설정으로 복구됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Fisheye 모드에서 AI 이벤트가 설정되어 있다면, AI 설정을 삭제하고 진행하세요."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "참조-정보",
      children: "참조 정보"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "채널뷰-모드-정책",
      children: "채널/뷰 모드 정책"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "항목"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "정책"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CH 1"
            }), " 뷰 타입"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fisheye 고정"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CH 2"
            }), " 뷰 타입"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single Panorama / Double Panorama / Quad View"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "스트림-및-인코딩-기본-정보",
      children: "스트림 및 인코딩 기본 정보"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "항목"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "지원/기본 정보"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "스트림"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "채널별 Main Stream 1개, Sub Stream 1개"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "코덱"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H.264, H.265, MJPEG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "해상도"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["뷰 모드별 지원 해상도 제공(", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Main Stream"
            }), ": 3520 × 3520 /  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sub Stream"
            }), ": 1760 × 1760)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "프레임 레이트"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30, 25, 20, 15, 10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "최대 비트레이트"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 Kbps ~ 450 Mbps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "비트레이트 제어"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VBR, CBR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GOV 길이"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ~ 300"
          })]
        })]
      })]
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