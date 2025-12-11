"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2770"], {
49576: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_ip_camera_support_and_configuration_mdx_455_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-ip-camera-support-and-configuration-mdx-455.json
var site_docs_platform_biostar_air_ip_camera_support_and_configuration_mdx_455_namespaceObject = JSON.parse('{"id":"platform/biostar_air/ip-camera-support-and-configuration","title":"IP 카메라 지원 및 설정하기","description":"BioStar Air에서 ONVIF 호환 IP 카메라 설정, 라이브 및 녹화된 비디오 스트림 구성, 카메라 영상을 출입 이벤트와 통합하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/ip-camera-support-and-configuration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/ip-camera-support-and-configuration","permalink":"/platform/biostar_air/ip-camera-support-and-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/ip-camera-support-and-configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"ip-camera-support-and-configuration","title":"IP 카메라 지원 및 설정하기","description":"BioStar Air에서 ONVIF 호환 IP 카메라 설정, 라이브 및 녹화된 비디오 스트림 구성, 카메라 영상을 출입 이벤트와 통합하는 방법을 안내합니다.","keywords":["IP 카메라","BioStar Air","카메라 구성"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"BioStation 3 SIP 인터폰","permalink":"/platform/biostar_air/sip-intercom-for-biostation3"},"next":{"title":"비디오 재생 관련 문제 해결","permalink":"/platform/biostar_air/video-troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/ip-camera-support-and-configuration.mdx


const frontMatter = {
	id: 'ip-camera-support-and-configuration',
	title: 'IP 카메라 지원 및 설정하기',
	description: 'BioStar Air에서 ONVIF 호환 IP 카메라 설정, 라이브 및 녹화된 비디오 스트림 구성, 카메라 영상을 출입 이벤트와 통합하는 방법을 안내합니다.',
	keywords: [
		'IP 카메라',
		'BioStar Air',
		'카메라 구성'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "개요",
  "id": "overview",
  "level": 2
}, {
  "value": "호환성",
  "id": "compatibility",
  "level": 2
}, {
  "value": "기능 소개",
  "id": "functionality",
  "level": 2
}, {
  "value": "사용 안내",
  "id": "instructions",
  "level": 2
}, {
  "value": "IP 카메라 연결",
  "id": "ip-카메라-연결",
  "level": 3
}, {
  "value": "BioStar Air 로그인",
  "id": "biostar-air-로그인",
  "level": 3
}, {
  "value": "비디오 관리 활성화",
  "id": "비디오-관리-활성화",
  "level": 3
}, {
  "value": "카메라 추가",
  "id": "카메라-추가",
  "level": 3
}, {
  "value": "출입문과 연결",
  "id": "출입문과-연결",
  "level": 3
}, {
  "value": "Live Camera 영상 보기",
  "id": "live-camera-영상-보기",
  "level": 3
}, {
  "value": "녹화된 카메라 영상 보기",
  "id": "녹화된-카메라-영상-보기",
  "level": 3
}, {
  "value": "이벤트 영상 보기",
  "id": "이벤트-영상-보기",
  "level": 3
}, {
  "value": "추가 설정 살펴보기",
  "id": "추가-설정-살펴보기",
  "level": 3
}, {
  "value": "테스트 및 확인된 장치",
  "id": "테스트-및-확인된-장치",
  "level": 2
}, {
  "value": "IP 카메라에서 ONVIF를 활성화하기 위한 일반 단계",
  "id": "ip-카메라에서-onvif를-활성화하기-위한-일반-단계",
  "level": 2
}, {
  "value": "추가 팁",
  "id": "추가-팁",
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
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 Airfob Edge 리더기와 동일한 네트워크에 연결된 IP 카메라를 자동 감지합니다. 카메라는 리더기를 게이트웨이로 사용하므로 네트워크 비디오 레코더(Network Video Recorder, NVR)가 필요하지 않습니다. 대신 카메라는 내장 SD 카드 저장 장치를 사용합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Airfob Edge 리더기 또는 XPass 2를 각각 설치했다면 BioStar Air는 아래와 같은 동시 라이브 뷰 스트림을 표시할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최대 2대의 카메라에서 Full HD 해상도(1080p)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최대 4대의 카메라에서 HD 해상도(720p)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 사양은 XStation 2를 사용할 때 두 배로 증가합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatibility",
      children: "호환성"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Onvif Profiles"
          }), ": IP 카메라는 Onvif 프로필 S 및/또는 G와 호환되어야 합니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvif Profile S"
              }), ": 라이브 비디오 스트리밍"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvif Profile G"
              }), ": 녹화된 비디오를 SD 카드에 저장"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SD 카드"
          }), ": IP 카메라는 나중에 녹화한 영상을 재생할 수 있도록 내장 SD 카드가 있어야 합니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "SanDisk microSDXC Class10 Max Endurance 256GB 또는 512GB를 권장합니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "인코딩"
          }), ": 카메라는 H.264(AVC)를 지원해야 하며 활성 CODEC으로 설정되어 있어야 합니다. BioStar Air는 현재 H.265를 지원하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "추천 브랜드"
          }), ": Hanwha, Hikvision 및 Dahua 카메라와의 호환성이 뛰어납니다. 다른 브랜드와의 호환성은 Onvif 프로필 준수 여부에 따라 달라질 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "새 카메라 테스트"
          }), ": 테스트하고 싶은 다른 카메라 브랜드가 있다면 서비스 팀에 문의하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionality",
      children: "기능 소개"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 앱에서 아래와 같은 작업을 수행할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "실시간 카메라 피드를 볼 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "녹화된 카메라 영상을 볼 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출근 이벤트와 관련된 카메라 영상에 접근합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instructions",
      children: "사용 안내"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ip-카메라-연결",
          children: "IP 카메라 연결"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "네트워크 연결"
              }), ": IP 카메라가 Airfob Edge 리더기 또는 Airfob Edge 리더기 Ultimate와 동일한 네트워크에 연결되어 있는지 확인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvif 활성화"
              }), ": 카메라에서 Onvif가 활성화되어 있는지 확인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "리더기 등록"
              }), ": 리더기가 사이트에 등록되어 있는지 확인하세요."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "biostar-air-로그인",
          children: "BioStar Air 로그인"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "마스터 관리자"
          }), "만 비디오 관리 활성화와 같은 사이트 설정을 변경할 수 있습니다. 마스터 권한으로 로그인하세요."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "비디오-관리-활성화",
          children: "비디오 관리 활성화"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Site"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Additional Features"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Management"
          }), "로 이동하여 비디오 관리를 활성화하세요."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능은 마스터 레벨의 관리자만 활성화할 수 있습니다."
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "카메라-추가",
          children: "카메라 추가"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Management"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Cameras"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "+ Add Camera"
              }), "으로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Select Device (Reader)"
              }), ": 게이트웨이 역할을 할 리더기를 선택하세요. 리더기는 펌웨어 2.5.1 버전 이상이 설치되어 있어야 하며, 카메라와 동일한 네트워크에 있어야 합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Automatic Search"
              }), ": BioStar Air는 자동으로 네트워크에서 카메라를 검색합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Camera Registration"
              }), ": 카메라를 등록하려면 ID와 비밀번호를 입력해야 할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "출입문과-연결",
          children: "출입문과 연결"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Door Management"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Registered Doors"
              }), "으로 이동하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Assign Devices"
              }), ": 출입문을 선택한 다음, ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Assign Devices"
              }), " 섹션에서 카메라를 선택하세요. 카메라가 출입문에 연결되어 이벤트 로그에서 관련 영상을 볼 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "live-camera-영상-보기",
          children: "Live Camera 영상 보기"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Monitoring"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Real-Time Video"
              }), "로 이동하여 실시간 비디오 스트림을 시청하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "동시 스트림"
              }), ": 설치된 각 Airfob Edge Reader에 대해 최대 2개의 Full HD (1080p) 실시간 스트림을 볼 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Additional Streams"
              }), ": 더 많은 실시간 스트림을 보려면 더 많은 리더기를 추가하거나 카메라 해상도를 줄이세요. (", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Management"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Cameras"
              }), " → 카메라 클릭 → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Profile"
              }), ")"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "녹화된-카메라-영상-보기",
          children: "녹화된 카메라 영상 보기"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Recorded Video"
          }), "로 이동하여 녹화된 비디오 스트림을 시청하세요."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "이벤트-영상-보기",
          children: "이벤트 영상 보기"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Logs"
          }), "로 이동하세요. 관련 비디오 클립이 있는 이벤트 로그를 찾아 재생 버튼을 클릭하면 영상을 시청할 수 있습니다."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "추가-설정-살펴보기",
          children: "추가 설정 살펴보기"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "앱 내에서 탐색할 수 있는 다양한 설정이 있습니다. 이 문서는 공식 사용 설명서가 출시될 때까지 임시로 참고할 수 있도록 작성되었습니다."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "테스트-및-확인된-장치",
      children: "테스트 및 확인된 장치"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "제조사"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "모델 번호"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "장치 유형"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Onvif 프로필"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "해상도"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "QNV-C8011R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T, M"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2592x1944"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "QND-6022R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MMI-600R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD2025FWD-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD2166G2-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "3200×1800"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD1121-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DHI-NVR2104HS-P-S3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NVR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "12MP"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IPC-HDBW3249E-AS-NI"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SD22204UEN-GN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DH-IPC-HFW1230DT-STW-VN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "11"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Marruy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IPC-A32E-L"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2304×1296"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "12"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TP-Link"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Tapo C210"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2304×1296"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ip-카메라에서-onvif를-활성화하기-위한-일반-단계",
      children: "IP 카메라에서 ONVIF를 활성화하기 위한 일반 단계"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "카메라의 웹 인터페이스에 로그인"
          }), ": 웹 브라우저를 열고, 카메라의 IP 주소를 입력하세요. 관리자 크리덴셜로 인증하여 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "네트워크 또는 구성 설정으로 이동"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuration"
          }), " 섹션을 찾으세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ONVIF 프로토콜 활성화"
          }), ": ONVIF 또는 개방형 네트워크 비디오 인터페이스를 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ONVIF 프로필 또는 사용자 설정"
          }), ": 필요한 경우 ONVIF 전용 사용자 프로필을 생성하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "저장 및 연결 테스트"
          }), ": 설정을 저장하고 Airfob Space에서 ONVIF 연결을 테스트하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "추가-팁",
      children: "추가 팁"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "펌웨어 업데이트"
          }), ": 카메라와 리더기를 최신 펌웨어로 업데이트하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "포트 포워딩"
          }), ": 필요한 경우 ONVIF에 대한 포트 포워딩을 구성하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Third-Party 도구"
          }), ": ONVIF Device Manager를 사용하여 카메라 설정 및 기능을 확인하세요."]
        }), "\n"]
      }), "\n"]
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