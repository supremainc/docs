"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2812"], {
29093: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_video_integration_mdx_cf3_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-video-integration-mdx-cf3.json
var site_docs_platform_biostar_x_settings_video_integration_mdx_cf3_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-video-integration","title":"VMS 연동하기","description":"BioStar X에서 실시간 영상 모니터링 및 녹화 영상 재생을 위한 Video Management System(VMS) 연동 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-video-integration.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-video-integration","permalink":"/docs/platform/biostar_x/settings-video-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-video-integration.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-video-integration","title":"VMS 연동하기","description":"BioStar X에서 실시간 영상 모니터링 및 녹화 영상 재생을 위한 Video Management System(VMS) 연동 방법을 안내합니다.","keywords":["비디오","연동","카메라","설정"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"재실 인원 제한 구역","permalink":"/docs/platform/biostar_x/settings-advanced-ac-occupancy"},"next":{"title":"카메라 설정하기","permalink":"/docs/platform/biostar_x/settings-videos-camera"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-video-integration.mdx


const frontMatter = {
	id: 'settings-video-integration',
	title: 'VMS 연동하기',
	description: 'BioStar X에서 실시간 영상 모니터링 및 녹화 영상 재생을 위한 Video Management System(VMS) 연동 방법을 안내합니다.',
	keywords: [
		'비디오',
		'연동',
		'카메라',
		'설정'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "VMS 서버 연동 설정",
  "id": "vms-서버-연동-설정",
  "level": 2
}, {
  "value": "VMS 서버에서 인증서 설치",
  "id": "install-vms-certification",
  "level": 3
}, {
  "value": "VMS 연동 활성화",
  "id": "vms-연동-활성화",
  "level": 3
}, {
  "value": "서비스 재시작",
  "id": "서비스-재시작",
  "level": 3
}, {
  "value": "카메라 확인 및 설정",
  "id": "카메라-확인-및-설정",
  "level": 3
}, {
  "value": "문제 해결",
  "id": "video-troubleshooting",
  "level": 3
}, {
  "value": "클라이언트 PC에서 인증서 설치",
  "id": "클라이언트-pc에서-인증서-설치",
  "level": 4
}, {
  "value": "VMS 이벤트 및 북마크 설정",
  "id": "vms-event-bookmark",
  "level": 2
}, {
  "value": "VMS 서버 연동 해제",
  "id": "vms-서버-연동-해제",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start, Step, Steps, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), "(VMS)는 여러 카메라의 영상을 통합 관리하고 녹화, 재생할 수 있는 영상 관리 시스템입니다. BioStar X와 VMS를 연동하면 출입 통제와 영상 보안을 하나의 플랫폼에서 통합 관리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VMS 연동을 통해 다음과 같은 혜택을 얻을 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "실시간 모니터링"
          }), ": 출입문과 연결된 카메라의 실시간 영상 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "통합 이벤트 관리"
          }), ": 출입 이벤트와 영상을 연계하여 보안 상황 파악할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "효율적인 증거 수집"
          }), ": 특정 시점의 녹화 영상을 빠르게 검색 및 재생할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "북마크 기능"
          }), ": 중요한 이벤트 시점에 영상 태그를 추가하여 쉽게 찾고 검토할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), "(VMS)과 연동하려면 다음 사항을 확인하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS 연동 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "어드밴스"
          }), "(Advanced) 라이선스 이상에서 추가 옵션을 통해 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "licensing#features-add-ons",
            children: "다음 문서"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS 서버가 올바르게 설치되고 구성되었는지 확인하세요. VMS 서버는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "와 온라인으로 연결 가능한 상태여야 합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "와 호환되는 VMS를 사용하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X VMS"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Nx Witness v5.1.5"
          }), " 계열의 VMS를 사용할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS 서버의 IP 주소, 포트 번호, 관리자 계정 정보를 준비하세요. 이 정보는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에서 VMS 서버에 연결하는 데 필요합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-서버-연동-설정",
      children: "VMS 서버 연동 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VMS 서버와 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 연동하려면 다음 단계를 따르세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "install-vms-certification",
          children: "VMS 서버에서 인증서 설치"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "VMS 서버의 녹화된 영상을 재생하려면 HTTPS 프로토콜을 사용해야 합니다. VMS 서버에서 IP 주소 기반의 인증서를 생성하세요."
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "인증서를 설치하기 전에 VMS를 설치한 PC에 Open JDK 21 이상이 설치되어 있는지 확인하세요."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["VMS 서버와 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), "를 같은 서버에 설치할 때는 VMS 서버에 인증서를 설치해야 합니다."]
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "C:\\Program Files\\BioStar X\\third"
              }), " 경로로 이동해 명령 프롬프트를 실행하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "다음 명령어를 실행하세요."
            }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
              groupId: "os",
              defaultValue: "Windows",
              children: [(0,jsx_runtime.jsx)(TabItem, {
                value: "Windows",
                children: (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-java",
                    children: "java -jar scaleUtil-1.0-all.jar vmsCertCreate \"C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\<%VENDOR.NAME%>\\<%VENDOR.NAME%> Media Server\\ssl\" {VMS_IP_ADDRESS}\n"
                  })
                })
              }), (0,jsx_runtime.jsx)(TabItem, {
                value: "Linux",
                children: (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-java",
                    children: "java -jar scaleUtil-1.0-all.jar vmsCertCreate \"/opt/<%VENDOR.NAME%>/mediaserver/var/ssl\" {VMS_IP_ADDRESS}\n"
                  })
                })
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "<%VENDOR.NAME%>"
                  }), " 부분에 VMS를 설치한 경로를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "{VMS_IP_ADDRESS}"
                  }), " 부분에 VMS 서버의 IP 주소를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["설치한 VMS 제품에 따라 ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "ssl"
                  }), " 경로가 다를 수 있습니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["VMS를 설치한 경로에서 인증서 파일(", (0,jsx_runtime.jsx)(_components.em, {
                children: "*.pem"
              }), ")이 생성되었는지 확인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "VMS 서버를 재부팅하세요."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMS가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "와 서로 다른 서버에 설치되어 있다면 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "scaleUtil-1.0-all.jar"
            }), " 파일을 VMS 서버로 복사하고 위 과정을 진행하세요."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "vms-연동-활성화",
          children: "VMS 연동 활성화"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
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
                sid: "setting.menu.video.root"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.video.vmsIntegration"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["처음 접속한다면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " 관리자 계정으로 로그인해야 합니다."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-video-integration-login.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "video.setting.integration.title",
                product: "2"
              }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), "으로 설정하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-video-integration.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "VMS 서버 정보를 입력하세요."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.serverAddress",
                    product: "2"
                  }), ": VMS 서버의 IP 주소를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.port",
                    product: "2"
                  }), ": VMS 서버의 포트 번호를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.loginId",
                    product: "2"
                  }), ": VMS 서버의 관리자 계정 아이디를 입력하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.password",
                    product: "2"
                  }), ": VMS 서버의 관리자 계정 비밀번호를 입력하세요."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["VMS 서버 정보를 모두 입력했으면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.apply",
                product: "2"
              }), " 버튼을 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "VMS 서버와 연동에 실패해 오류 메시지가 나타나면 서버 주소 및 관리자 계정 정보 등을 다시 확인하세요. VMS 서버가 온라인 상태인지, 방화벽 설정으로 인해 네트워크 연결이 차단되지 않았는지 점검하는 것도 필요합니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "video.setting.tag.title",
                  product: "2"
                }), " 섹션의 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#vms-event-bookmark",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "서비스-재시작",
          children: "서비스 재시작"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS 서버 정보를 동기화하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "의 일부 서비스를 재시작해야 합니다."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Windows에서 ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Service Manager"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "All Services"
              }), " 목록에서 아래 서비스의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Stop"
              }), " 버튼을 클릭해 서비스를 중지하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-sm-restart-service-video.png",
              alone: true
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar X Unified Gateway Service"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar X Core Web Service"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["중지 요청한 서비스의 상태가 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Pending"
              }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Stopped"
              }), "로 변경되면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Start"
              }), " 버튼을 클릭해 서비스를 재시작하세요."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-sm-restart-service-video-start.png",
              alone: true
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "카메라-확인-및-설정",
          children: "카메라 확인 및 설정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS 서버와 정상 연동되었다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " 메뉴에서 연결된 카메라를 확인할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-camera",
            children: "다음 문서"
          }), "를 참조하세요."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-troubleshooting",
      children: "문제 해결"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황이 발생한다면 VMS 서버에 설치된 인증서를 클라이언트 PC에 설치해 문제를 해결할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Management System"
          }), "(VMS)을 브라우저를 통해서 접속했을 때 '안전하지 않음' 경고가 표시될 때"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " 페이지에서 실시간 영상은 재생되나 녹화 영상이 재생되지 않을 때"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "클라이언트-pc에서-인증서-설치",
      children: "클라이언트 PC에서 인증서 설치"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 설치한 클라이언트 PC에서 로그인 화면 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), "에서 HTTPS 인증서 설치 프로그램(", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), ")을 다운로드하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다운로드한 파일의 압축을 해제한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), " 파일을 실행하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment Certification"
          }), " 창이 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), "을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VMS"
          }), "로 선택하고 다음 정보를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-vms-certification.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              }), ": VMS 서버의 IP 주소"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port"
              }), ": VMS 서버의 포트 번호"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["보안 경고 메시지를 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "예"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["웹 브라우저를 다시 시작한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " 페이지에서 VMS 서버의 녹화 영상이 정상 재생되는지 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-event-bookmark",
      children: "VMS 이벤트 및 북마크 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["연동한 VMS 서버에 북마크 태그, 이벤트 태그 정보를 전달할 수 있습니다. 이때, 이벤트 로그, 출입문 이름, 장치 이름, 사용자 아이디를 함께 전달할 수 있도록 선택할 수 있습니다. 원하는 옵션을 선택하고 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-event-bookmark.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.language",
            product: "2"
          }), ": VMS 서버에 전달하는 이벤트 및 북마크 태그의 언어를 선택하세요. 한국어 또는 영어를 선택할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.tag.bookmark",
            product: "2"
          }), ": 북마크 태그는 VMS 서버에 보관된 영상에 표시와 이름이 지정되어 쉽게 찾고 검토할 수 있는 기능입니다. 북마크 태그로 전송할 정보를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.tag.event",
            product: "2"
          }), ": 특정 시점에 발생한 이벤트를 VMS 서버로 전송해 기록할 수 있습니다. 이벤트 태그로 전송할 정보를 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMS에서 북마크 기능에 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://resources.vmsproxy.com/nx_6.0_help/using_bookmarks.html",
              children: "다음 링크"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMS에서 이벤트 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://resources.vmsproxy.com/nx_6.0_help/events_available_in_vms.html",
              children: "다음 링크"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-서버-연동-해제",
      children: "VMS 서버 연동 해제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "연동한 VMS 서버의 연결을 해제하려면 다음 단계를 따르세요. VMS 연동을 해제하면 비디오 설정, 등록한 카메라, 규칙이 모두 삭제됩니다."
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.vmsIntegration"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.integration.title",
            product: "2"
          }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.notUse",
            product: "2"
          }), "으로 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["메시지 창의 내용을 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " 버튼을 클릭하세요."]
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