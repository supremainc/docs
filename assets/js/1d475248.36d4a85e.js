"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["38087"], {
47059: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_managing_registered_devices_mdx_1d4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-managing-registered-devices-mdx-1d4.json
var site_docs_platform_biostar_air_managing_registered_devices_mdx_1d4_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-registered-devices","title":"등록 장치 관리하기","description":"BioStar Air 포털에서 장치의 연결 상태를 확인하고, 생체 인증과 카드 설정을 변경하며, 펌웨어를 업데이트합니다. 개별 또는 일괄 작업으로 보안 시스템을 효율적으로 관리합니다.","source":"@site/docs/platform/biostar_air/managing-registered-devices.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-registered-devices","permalink":"/docs/platform/biostar_air/managing-registered-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-registered-devices.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-registered-devices","title":"등록 장치 관리하기","description":"BioStar Air 포털에서 장치의 연결 상태를 확인하고, 생체 인증과 카드 설정을 변경하며, 펌웨어를 업데이트합니다. 개별 또는 일괄 작업으로 보안 시스템을 효율적으로 관리합니다.","keywords":["장치 관리","장치 설정","BioStar Air","생체 인증","카드 설정","펌웨어 업데이트","네트워크 설정"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"장치 등록 및 삭제하기","permalink":"/docs/platform/biostar_air/manage-device-with-app"},"next":{"title":"장치 정보 및 설정 옵션 안내","permalink":"/docs/platform/biostar_air/device-info-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/managing-registered-devices.mdx


const frontMatter = {
	id: 'managing-registered-devices',
	title: '등록 장치 관리하기',
	description: 'BioStar Air 포털에서 장치의 연결 상태를 확인하고, 생체 인증과 카드 설정을 변경하며, 펌웨어를 업데이트합니다. 개별 또는 일괄 작업으로 보안 시스템을 효율적으로 관리합니다.',
	keywords: [
		'장치 관리',
		'장치 설정',
		'BioStar Air',
		'생체 인증',
		'카드 설정',
		'펌웨어 업데이트',
		'네트워크 설정'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "장치 목록 조회",
  "id": "viewing-device-information",
  "level": 2
}, {
  "value": "장치 연결 상태",
  "id": "device-connection-status",
  "level": 3
}, {
  "value": "장치 정보",
  "id": "device-information",
  "level": 3
}, {
  "value": "필터링",
  "id": "deviceFiltering",
  "level": 3
}, {
  "value": "개별 장치 정보 및 설정 수정",
  "id": "editing-individual-device",
  "level": 2
}, {
  "value": "장치 일괄 작업",
  "id": "bulkDeviceActions",
  "level": 2
}, {
  "value": "장치 그룹 관리",
  "id": "device_group_in_device_list",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirByte, IcAirCloud, IcAirDset, IcAirFilter, IcAirFw, IcAirGroup, IcAirRef, IcAirRemove, IcAirUpd, IcAirWarn, Image, StatusFail, StatusOK, StatusUpdating, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirByte) _missingMdxReference("IcAirByte", true);
  if (!IcAirCloud) _missingMdxReference("IcAirCloud", true);
  if (!IcAirDset) _missingMdxReference("IcAirDset", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirFw) _missingMdxReference("IcAirFw", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirUpd) _missingMdxReference("IcAirUpd", true);
  if (!IcAirWarn) _missingMdxReference("IcAirWarn", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusFail) _missingMdxReference("StatusFail", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!StatusUpdating) _missingMdxReference("StatusUpdating", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "등록된 장치의 연결 상태를 한눈에 확인하고, 생체 인증과 카드 설정을 변경하거나 펌웨어를 업데이트합니다. 소수의 장치는 개별로, 다수의 장치는 일괄로 관리할 수 있어 보안 시스템을 효율적으로 운영할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치는 iOS 또는 안드로이드의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar Air 모바일 앱"
            }), "에서만 등록할 수 있습니다. 웹 포털에서는 등록할 수 없습니다. 모바일 앱에서 장치 등록 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "원격 접속"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "생체 인증"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "QR 코드 출입"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "펌웨어 업데이트"
            }), "와 같은 일부 기능을 사용하려면 장치는 인터넷 연결이 필요합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "장치 등록 및 관리에 대한 동영상 가이드를 시청하려면 다음 영상을 참고하세요."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "lpMPkMyjr-c"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-device-information",
      children: "장치 목록 조회"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치 목록에서는 BioStar Air에 등록된 모든 장치를 확인할 수 있습니다. 각 장치의 연결 상태, 모델명, 펌웨어 버전 등 주요 정보를 한눈에 볼 수 있습니다. 또한 개별 장치를 클릭하여 세부 정보를 확인하고 설정을 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_submenu",
        product: "air"
      }), "를 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-connection-status",
      children: "장치 연결 상태"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치 목록에서 상태 아이콘을 통해 각 장치의 연결 상태를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusOK, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "녹색"
          }), ": 온라인 상태로, 해당 장치는 원격으로 제어할 수 있으며, QR 인증을 수락하고 업데이트할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusFail, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "빨간색"
          }), ": 오프라인 상태의 장치입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusUpdating, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "주황색"
          }), ": 펌웨어 업데이트 진행 중인 상태입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["⚪ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "연결 없음"
          }), ": 네트워크 연결이 없는 장치입니다. (예, Airfob Patch)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirWarn, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "주의"
          }), ": 서버와 장치 간의 동기화가 필요한 상태입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-information",
      children: "장치 정보"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치 목록의 각 열은 아래 정보를 포함하고 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_product_column",
            product: "air"
          }), ": 슈프리마 데이터베이스로부터 가져온 장치 이름과 모델명입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_nickname_column",
            product: "air"
          }), ": 쉽게 식별할 수 있도록 사용자가 수정할 수 있는 항목입니다. 장치 목록에서 장치를 클릭하면 표시되는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), " 창에서 변경할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_id_column",
            product: "air"
          }), ": 장치에 할당된 고유 식별자입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_group_column",
            product: "air"
          }), ": 장치가 속한 그룹입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_battery_column",
            product: "air"
          }), ": 배터리로 작동하는 장치에서 확인할 수 있습니다. 에어팝 태그(AirFob Tag) 장치만 지원합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_fw_column",
            product: "air"
          }), ": 현재 설치된 펌웨어 버전입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_timezone_column",
            product: "air"
          }), ": 장치에 설정된 시간대입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deviceFiltering",
      children: "필터링"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치 목록의 상단 헤더 영역에서 필터링 기능을 이용할 수 있습니다. 헤더 영역의 ", (0,jsx_runtime.jsx)(IcAirFilter, {
        title: "Filter"
      }), " 버튼을 클릭하면 원하는 조건을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["적용한 필터 조건을 초기화하려면 ", (0,jsx_runtime.jsx)(IcAirFilter, {
          title: "Filter"
        }), " 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "column_filter_modal_reset_btn",
          product: "air"
        }), " 버튼을 선택하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editing-individual-device",
      children: "개별 장치 정보 및 설정 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 수정할 장치를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), " 창이 나타납니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-edit-details.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치의 세부 정보 또는 설정을 수정하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경 사항을 저장하려면 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["각 섹션별 세부 정보 수정 및 설정 옵션에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/device-info-settings"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bulkDeviceActions",
      children: "장치 일괄 작업"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치 목록 상단에서 제공하는 기능을 통해 여러 장치를 한 번에 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-tools.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px",
            title: "Refresh"
          }), ": 장치 목록 및 장치 상태를 업데이트합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRemove, {
            width: "24px",
            height: "24px",
            title: "Delete"
          }), ": 사이트에 등록된 장치를 삭제할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "warning",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["온라인 상태의 장치만 영구적으로 삭제할 수 있입니다. 장치가 오프라인이라면, 다른 사이트에 추가하기 전에 BioStar Air 모바일 앱에서 먼저 삭제하세요. 모바일 앱에서 장치 삭제 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app#removingDevice"
            }), "를 참고하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFw, {
            width: "24px",
            height: "24px",
            title: "Update Firmware"
          }), ": 장치 목록에서 선택한 장치의 펌웨어를 업데이트할 수 있습니다. 펌웨어 업데이트에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/how-to-upgrade-firmware"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirCloud, {
            width: "24px",
            height: "24px",
            title: "Sync with Server"
          }), ": 장치 목록에서 선택한 장치에서 서버로 생체 인증 템플릿을 동기화할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), ": 장치 목록에서 선택한 장치를 그룹에 할당할 수 있습니다. 장치 그룹 관리에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#device_group_in_device_list"
          }), "를 참고하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirByte, {
            width: "24px",
            height: "24px",
            title: "RF Card Byte Order"
          }), ": 장치 목록에서 선택한 장치의 RF 카드 바이트 순서를 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "MSB"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "LSB"
          }), "로 전환할 수 있습니다."]
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirDset, {
            width: "24px",
            height: "24px",
            title: "Load Device Setting"
          }), ": 독립 실행 모드에서 원래 설정된 장치의 설정을 가져올 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUpd, {
            width: "24px",
            height: "24px",
            title: "Update Status"
          }), ": 장치 목록에서 선택한 장치의 상태를 업데이트할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device_group_in_device_list",
      children: "장치 그룹 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치 목록에서 개별 장치를 선택하여 장치 그룹에 추가하거나, 기존 그룹에서 제거할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 그룹 목록에서 그룹에 추가하거나 제거하려는 장치의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치 그룹 목록 상단의 ", (0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_device_group_title",
            product: "air"
          }), " 창이 나타나면 선택한 장치를 그룹에 추가하거나 제거하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-group-mng.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_device_group_title_two",
            product: "air"
          }), "의 체크박스 상태는 아래와 같은 의미를 가집니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_one",
                product: "air"
              }), ": 선택한 장치를 그룹에서 제거합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_two",
                product: "air"
              }), ": 선택한 장치 중 일부가 그룹에 포함된 상태입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_three",
                product: "air"
              }), ": 선택한 장치를 그룹에 추가합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경한 내용을 저장하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "manage_device_group_title",
              product: "air"
            }), " 창에서 다른 그룹을 선택하면 선택한 장치는 해당 그룹으로 이동합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "장치는 그룹에 중복으로 속할 수 있습니다. 하나의 장치를 여러 그룹에 할당할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["변경한 내용을 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_btn_reset",
              product: "air"
            }), " 버튼을 클릭하세요."]
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