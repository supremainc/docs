"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5436"], {
35198: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_videos_camera_mdx_3f3_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-videos-camera-mdx-3f3.json
var site_docs_platform_biostar_x_settings_videos_camera_mdx_3f3_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos-camera","title":"카메라 설정하기","description":"VMS 연동 후 BioStar X에 카메라를 추가하고, 그룹으로 구성하여 효율적으로 관리하는 방법을 안내합니다. 실시간 모니터링과 영상 검색을 위한 카메라 설정 방법을 다룹니다.","source":"@site/docs/platform/biostar_x/settings-videos-camera.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos-camera","permalink":"/docs/platform/biostar_x/settings-videos-camera","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos-camera.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos-camera","title":"카메라 설정하기","description":"VMS 연동 후 BioStar X에 카메라를 추가하고, 그룹으로 구성하여 효율적으로 관리하는 방법을 안내합니다. 실시간 모니터링과 영상 검색을 위한 카메라 설정 방법을 다룹니다.","keywords":["카메라","설정","관리","그룹"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"VMS 연동하기","permalink":"/docs/platform/biostar_x/settings-video-integration"},"next":{"title":"카메라 규칙 설정하기","permalink":"/docs/platform/biostar_x/settings-videos-rule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-videos-camera.mdx


const frontMatter = {
	id: 'settings-videos-camera',
	title: '카메라 설정하기',
	description: 'VMS 연동 후 BioStar X에 카메라를 추가하고, 그룹으로 구성하여 효율적으로 관리하는 방법을 안내합니다. 실시간 모니터링과 영상 검색을 위한 카메라 설정 방법을 다룹니다.',
	keywords: [
		'카메라',
		'설정',
		'관리',
		'그룹'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "카메라 설정 및 관리",
  "id": "카메라-설정-및-관리",
  "level": 2
}, {
  "value": "카메라 추가",
  "id": "카메라-추가",
  "level": 3
}, {
  "value": "카메라 정보 수정",
  "id": "카메라-정보-수정",
  "level": 3
}, {
  "value": "카메라 삭제",
  "id": "카메라-삭제",
  "level": 3
}, {
  "value": "카메라 그룹 설정 및 관리",
  "id": "카메라-그룹-설정-및-관리",
  "level": 2
}, {
  "value": "카메라 그룹 추가",
  "id": "카메라-그룹-추가",
  "level": 3
}, {
  "value": "그룹에 여러 대의 카메라 추가",
  "id": "그룹에-여러-대의-카메라-추가",
  "level": 3
}, {
  "value": "카메라 그룹 이름 수정",
  "id": "카메라-그룹-이름-수정",
  "level": 3
}, {
  "value": "카메라 그룹 삭제",
  "id": "카메라-그룹-삭제",
  "level": 3
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcEdit, IcEditUL, IcTrash, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcTrash) _missingMdxReference("IcTrash", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "VMS 연동을 완료한 후에는 BioStar X에서 사용할 카메라를 선택하고 설정해야 합니다. 적절한 카메라 설정을 통해 다음과 같은 보안 관리 기능을 활용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "선택적 모니터링"
          }), ": VMS의 모든 카메라 중 필요한 카메라만 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 추가할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "효율적인 관리"
          }), ": 카메라를 그룹별로 구성하여 위치나 용도에 따른 체계적으로 관리할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["VMS 서버와 연동하는 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-video-integration",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-설정-및-관리",
      children: "카메라 설정 및 관리"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VMS 연동 후 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.video.root"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.video.video"
      }), " 메뉴에서 카메라를 설정하고 관리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카메라-추가",
      children: "카메라 추가"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["VMS와 연동되어 있다면 VMS 서버에 연결된 카메라를 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 추가하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " 페이지에서 실시간 영상 및 녹화 영상을 재생할 수 있습니다."]
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
            sid: "setting.menu.video.video"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addCamera.button",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addCamera",
            product: "2"
          }), " 창이 나타나면 카메라 목록에서 제외할 카메라를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 카메라가 표시되지 않는다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addCamera.refresh",
            product: "2"
          }), " 버튼을 클릭해 카메라 목록을 새로고침하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카메라를 모두 선택했으면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라 목록에서 추가한 카메라를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-camera.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카메라-정보-수정",
      children: "카메라 정보 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "추가한 카메라의 정보를 수정할 수 있습니다. 카메라 이름 및 그룹, 설명 등을 변경할 수 있습니다."
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
            sid: "setting.menu.video.video"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.table.th.camera",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 목록에서 정보를 수정할 카메라를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 정보가 표시된 화면이 나타나면 원하는 항목을 수정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-edit-camera-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["카메라 정보를 모두 수정했으면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "카메라 아이디와 IP 주소는 수정할 수 없습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카메라-삭제",
      children: "카메라 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "추가한 카메라를 삭제할 수 있습니다."
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
            sid: "setting.menu.video.video"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 목록에서 삭제할 카메라의 가장 왼쪽에 체크박스를 클릭하세요. 1대 이상의 카메라를 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcTrash, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.camera.delete",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["메시지를 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-delete-camera.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "카메라-그룹-설정-및-관리",
      children: "카메라 그룹 설정 및 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카메라-그룹-추가",
      children: "카메라 그룹 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라 그룹을 추가해 여러 대의 카메라를 그룹으로 묶어 관리할 수 있습니다."
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
            sid: "setting.menu.video.video"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.table.th.camera",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.camera.all.group",
            product: "2"
          }), " 항목을 선택하고 마우스 오른쪽 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-add-camera-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.contextMenu.add.group",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 그룹 이름을 입력하고 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " 키를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카메라 그룹은 8단계의 하위 그룹까지 생성할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카메라 그룹 이름은 최대 48자까지 입력할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카메라 목록에서 카메라 그룹을 선택하면 해당 그룹에 속한 카메라만 목록에 표시됩니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "그룹에-여러-대의-카메라-추가",
      children: "그룹에 여러 대의 카메라 추가"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "추가한 그룹에 1대 이상의 카메라를 추가할 수 있습니다."
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
            sid: "setting.menu.video.video"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 목록에서 그룹에 추가할 카메라의 가장 왼쪽에 체크박스를 클릭하세요. 1대 이상의 카메라를 선택할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["1대 이상의 카메라를 선택하면 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(IcEditUL, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.batchEdit",
            product: "2"
          }), " 버튼이 활성화됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.batchEdit",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-batch-edit-camera.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.batchEdit",
            product: "2"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group",
            product: "2"
          }), " 항목의 ", (0,jsx_runtime.jsx)(IcEdit, {}), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "그룹 목록에서 원하는 그룹을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "video.table.th.camera",
          product: "2"
        }), " 탭의 카메라 목록에서 원하는 항목을 선택하고 드래그 앤 드롭으로도 카메라를 그룹에 추가할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-video-move-camera-group.png",
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카메라-그룹-이름-수정",
      children: "카메라 그룹 이름 수정"
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
            sid: "setting.menu.video.video"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.table.th.camera",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이름을 변경할 그룹을 선택하고 마우스 오른쪽 버튼을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.contextMenu.rename.group",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-rename-camera-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["원하는 그룹 이름을 입력하고 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " 키를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카메라-그룹-삭제",
      children: "카메라 그룹 삭제"
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
            sid: "setting.menu.video.video"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.table.th.camera",
            product: "2"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이름을 변경할 그룹을 선택하고 마우스 오른쪽 버튼을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["팝업 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.contextMenu.delete.group",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["경고 메시지를 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "카메라 그룹에 카메라가 포함되어 있다면 그룹을 삭제할 수 없습니다. 그룹에 속한 카메라를 다른 그룹으로 이동하거나 그룹에서 제거한 후 다시 시도하세요."
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