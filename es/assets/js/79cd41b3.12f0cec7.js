"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["72055"], {
43360: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ device_info_settings_frontMatter),
  toc: () => (/* binding */ device_info_settings_toc),
  "default": () => (/* binding */ device_info_settings_MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_device_info_settings_mdx_79c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ device_info_settings_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-device-info-settings-mdx-79c.json
var site_docs_platform_biostar_air_device_info_settings_mdx_79c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/device-info-settings","title":"장치 정보 및 설정 옵션 안내","description":"BioStar Air 포털에서 장치 모델별로 제공되는 정보 확인 및 네트워크, 인증, 근태 관리 등의 설정 옵션을 안내합니다.","source":"@site/docs/platform/biostar_air/device-info-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/device-info-settings","permalink":"/docs/es/platform/biostar_air/device-info-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/device-info-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"device-info-settings","title":"장치 정보 및 설정 옵션 안내","description":"BioStar Air 포털에서 장치 모델별로 제공되는 정보 확인 및 네트워크, 인증, 근태 관리 등의 설정 옵션을 안내합니다.","keywords":["장치 정보","설정 옵션","BioStar Air"],"toc_max_heading_level":2,"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"등록 장치 관리하기","permalink":"/docs/es/platform/biostar_air/managing-registered-devices"},"next":{"title":"장치 그룹 관리하기","permalink":"/docs/es/platform/biostar_air/manage-device-group"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/common/_bsair-device-info-settings.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "기본 정보",
  "id": "기본-정보",
  "level": 4
}, {
  "value": "액션 기능",
  "id": "액션-기능",
  "level": 4
}, {
  "value": "기본 설정",
  "id": "기본-설정",
  "level": 4
}, {
  "value": "<Cmd class=\"normal\"></Cmd>(Time &amp; Attendance, T&amp;A)",
  "id": "tna",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "deviceInfo",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_detail",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_detail",
        product: "air"
      }), " 섹션에서는 장치의 이름, 모델명, 시리얼 번호, 펌웨어 버전과 같은 기본 정보와 기능을 제어하는 액션 메뉴, 기본 설정 옵션을 제공합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "기본-정보",
      children: "기본 정보"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 기본 정보를 확인할 수 있습니다. 이 정보는 편집할 수 없습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_product",
            product: "air"
          }), ": 장치의 제품 이름입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_model",
            product: "air"
          }), ": 장치의 모델 이름입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_serial",
            product: "air"
          }), ": 장치의 시리얼 번호입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_firmware",
            product: "air"
          }), ": 장치에 설치된 펌웨어 버전입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "액션-기능",
      children: "액션 기능"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["장치의 기능을 제어할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "액션"
      }), "(Action) 기능입니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-edit-actions.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_update_btn",
            product: "air"
          }), ": 장치의 펌웨어를 최신 버전으로 업데이트할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_reboot",
            product: "air"
          }), ": 장치에 문제가 있거나 이상이 발생하면 원격으로 재부팅할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_factory_reset",
            product: "air"
          }), ": 장치에 저장된 모든 설정을 초기화합니다. 이 작업을 수행하면 장치의 모든 설정과 데이터를 삭제합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_factory_reset",
            product: "air"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_excluding_network",
            product: "air"
          }), ": 네트워크 설정을 제외한 모든 설정을 초기화합니다. 이 작업을 수행하면 장치의 모든 설정과 데이터를 삭제하지만, 네트워크 설정은 유지됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "기본-설정",
      children: "기본 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 기본 설정을 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_nick_name",
            product: "air"
          }), ": 장치 목록 및 로그에서 표시되는 장치의 별칭입니다. 직접 수정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_timezone",
            product: "air"
          }), ": 사이트와 장치의 시계가 다를 때 로그를 일관되게 유지할 수 있도록 장치의 시간대를 설정하세요. 일광 절약 시간(Daylight Saving Time, DST)을 적용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), " 옵션을 활성화하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "xpass2",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "keypad_use_rf_card_number",
              product: "air"
            }), ": RF 카드 번호를 키패드로 입력해 사용할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["이 기능은 키패드를 지원하는 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "XP2-GKDPB"
              }), " 모델에서만 지원합니다."]
            })
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_hands_free",
          product: "air"
        }), ": BLE 범위를 확장할 수 있습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "ae-mc,xpass2,xs2",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_editable_fields_qr_reader",
              product: "air"
            }), ": 장치에 RS‑485 QR 리더기가 연결되었음을 확인할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "QR 리더기를 해당 장치와 연결하여 사용할 때, 다른 RS-485 장치를 사용할 수 없습니다."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "SIO2를 사용할 때, 해당 출입문에 연결된 장치에서 QR 리더기를 사용할 수 없습니다."
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "ae-mc,xs2",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_card",
            product: "air"
          }), ": 카드 인증을 활성화하거나 비활성화할 수 있습니다. DESFire, Felica 카드 형식을 지원합니다."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "ae-mc,xpass2",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_beep_setting",
            product: "air"
          }), ": 출입 인증 성공 알림음을 설정할 수 있습니다."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "xpass2,bew3,bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "cardSettings",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_title",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_title",
          product: "air"
        }), " 섹션에서는 카드 인증과 관련된 설정을 수정할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "nfcRfcard",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_card",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_editable_fields_card",
              product: "air"
            }), ": 토글 스위치를 클릭해 카드 출입 인증을 켜거나 끌 수 있습니다. 카드 인증을 지원하는 카드 종류를 선택하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_card_em4100",
                product: "air"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_card_mifare_felica",
                product: "air"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_card_byte_order",
            product: "air"
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
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_card_field_data_reading_method",
              product: "air"
            }), ": CSN(기본값) 또는 Wiegand 형식을 선택할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Wiegand 형식은 5가지 기본 형식이 포함되어 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_format_submenu",
                product: "air"
              }), "에서 더 많은 형식을 추가할 수 있습니다. 커스텀 카드 형식 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_air/custom-wiegand-card-formats"
              }), "를 참고하세요."]
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "device_card_wiegand_card",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Wiegand 카드로 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card_iclass",
          product: "air"
        }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card_hid_prox",
          product: "air"
        }), " 카드로 선택할 수 있습니다. 토글 버튼을 선택해 기능을 활성화한 후 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card",
          product: "air"
        }), "에서 원하는 카드 형식을 선택하세요."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이 기능은 장치에 따라 지원하지 않을 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Wiegand 형식은 5가지 기본 형식이 포함되어 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_format_submenu",
                product: "air"
              }), "에서 더 많은 형식을 추가할 수 있습니다. 커스텀 카드 형식 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_air/custom-wiegand-card-formats"
              }), "를 참고하세요."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_network",
        product: "air",
        className: "normal "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치의 네트워크 설정을 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_use_dhcp",
            product: "air"
          }), ": 장치가 IP 주소를 자동으로 가져오도록 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["네트워크 설정을 수동으로 구성하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_use_dhcp",
            product: "air"
          }), " 옵션을 비활성화하고 다음 필드를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_ip_address",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_gateway",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_dns_address",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_subnet_mask",
          product: "air"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "xpass2,bew3,bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "authentication",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_nav_title_authentication",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "xpass2",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_txt1",
                product: "air"
              }), ": 인증 방식을 추가할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_btn",
                product: "air"
              }), " 버튼을 클릭해 인증 방식을 추가하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "XP2-MDPB"
                  }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "XP2-GDPB"
                  }), ": 인증 방식으로 RF 카드만 선택할 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "XP2-GKDPB"
                  }), ": 인증 방식으로 RF 카드와 PIN을 조합하여 선택할 수 있습니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "bew3",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_nav_title_authentication_txt1",
              product: "air"
            }), ": 인증 방식을 추가할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "add_btn",
              product: "air"
            }), " 버튼을 클릭해 인증 방식을 추가하세요. 인증 방식으로 RF 카드와 얼굴을 조합하여 선택할 수 있습니다."]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "bs3",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_nav_title_authentication_txt1",
              product: "air"
            }), ": 인증 방식을 추가할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "add_btn",
              product: "air"
            }), " 버튼을 클릭해 인증 방식을 추가하세요. 인증 방식으로 RF 카드와 얼굴, ID, PIN을 조합하여 선택할 수 있습니다."]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "bs3",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_bs3_authen_display_user_name",
                product: "air"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_bs3_authen_display_user_id",
                product: "air"
              }), ": 사용자 이름 또는 아이디를 인증 화면에 표시할지 여부를 선택할 수 있습니다. 화면에 표시하지 않도록 설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_bs3_authen_display_user_name_txt3",
                product: "air"
              }), " 옵션을 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_auth_timeout",
                product: "air"
              }), ": 설정한 시간 내에 크리덴셜을 인증하지 않으면 인증에 실패합니다."]
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Include, {
        type: props.type,
        ref: "xpass2",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_auth_timeout",
                product: "air"
              }), ": 설정한 시간 내에 크리덴셜을 인증하지 않으면 인증에 실패합니다."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["이 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "XP2-GKDPB"
                }), " 모델에서만 지원합니다."]
              })
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "선택한 스케줄에 따라 인증 방식을 다르게 설정할 수 있습니다. 예를 들어, 근무 시간에는 카드 인증만 허용하고 비근무 시간에는 카드와 PIN 조합을 허용할 수 있습니다."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bew3,bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "faceAuthentication",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_nav_title_face",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "faceSecurity",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "site_setting_tab_security",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_7_title",
              product: "air"
            }), ": 사진 등의 위조 얼굴을 이용한 사용자 인증을 방지할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_7_text2",
              product: "air"
            }), ": 얼굴을 등록할 때 중복 등록 여부를 검사할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "faceDetection",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_face_detection",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_2_title",
              product: "air"
            }), ": 장치 주변의 움직임을 감지하는 감도를 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_3_title",
              product: "air"
            }), ": 허용 가능한 얼굴의 최대 회전 각도를 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_5_title",
              product: "air"
            }), ": 카메라 영상 전체에서 얼굴을 인식하는 범위를 넓힐 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_4_title",
              product: "air"
            }), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_4_title_cm",
              product: "air"
            }), ": 얼굴을 인식하는 최소, 최대 거리를 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_8_title",
              product: "air"
            }), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_8_title_cm",
              product: "air"
            }), ": 사용자 얼굴을 등록할 때 설정한 시간 동안 얼굴을 등록하지 못하면 얼굴 등록이 취소됩니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "maskDetection",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_device_bew3_block_8_1_text",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["마스크 검출 기능을 설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_device_bew3_block_8_1_text",
          product: "air"
        }), " 옵션을 활성화하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_8_2_text",
              product: "air"
            }), ": 마스크 검출 민감도를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_layout_device_bew3_block_8_3_text",
            product: "air"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_3_value1",
                  product: "air"
                }), ": 마스크를 착용하지 않은 사용자는 인증 거부되며 마스크 미착용 이벤트 로그를 기록합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_3_value2",
                  product: "air"
                }), ": 마스크를 착용하지 않은 사용자도 인증할 수 있으나 마스크 미착용 이벤트 로그를 기록합니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_layout_device_bew3_block_8_4_text",
            product: "air"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_4_value1",
                  product: "air"
                }), ": 인증을 수행한 뒤 사용자의 마스크 착용 여부를 확인하거나 온도를 측정합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_4_value2",
                  product: "air"
                }), ": 사용자의 마스크 착용 여부를 확인하거나 온도를 측정한 뒤 인증을 수행합니다. 이 경우 마스크를 착용하지 않거나 기준 온도를 초과하는 사용자는 인증을 수행할 수 없습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_4_value3",
                  product: "air"
                }), ": 장치를 마스크 착용 여부를 확인하거나 온도를 측정하는 용도로만 사용할 수 있습니다. 이 경우 인증과 관계없이 마스크를 착용하거나 기준 온도 이하인 사용자는 모두 출입할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "bs3_qr_barcode_toogle1",
              product: "air"
            }), ": 장치의 카메라를 통한 QR/바코드 인증 사용 여부를 설정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "bs3_qr_barcode_toogle2",
              product: "air"
            }), ": 인증된 사용자에게 발급한 CSN 카드 또는 Wiegand 카드와 동일한 데이터의 QR코드로 인증할 수 있도록 설정할 수 있습니다. 이 기능은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "bs3_qr_barcode_toogle1",
              product: "air"
            }), " 옵션을 활성화해야 사용할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴이 아닌 크리덴셜을 사용할 때는 주로 '이전'과 '이후'가 중요합니다."
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "tna",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_tna",
        product: "air",
        className: "normal"
      }), "(Time & Attendance, T&A)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이 기능을 활성화하면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_edit_tna_event_label",
        product: "air",
        className: "bold"
      }), "가 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "이벤트 로그"
      }), "에 기록되고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna_report",
        product: "air",
        className: "bold"
      }), "에 사용됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "new_device_edit_tna_toogle",
            product: "air"
          }), ": 토글 스위치를 클릭해 근태 관리 기능을 켜거나 끌 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_label",
            product: "air"
          }), ": 원하는 근태 모드를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Include, {
          type: props.type,
          ref: "bs3",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_tna_mode_option2",
                product: "air"
              }), ": 화면에 근태 키 표시해 인증 시, 사용자가 근태 이벤트를 선택할 수 있습니다."]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Include, {
          type: props.type,
          ref: "ae-mc,xpass2,bew3,bs3,xs2",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_tna_mode_option3",
                product: "air"
              }), ": 설정한 스케줄에 따라 근태 이벤트가 자동으로 변경됩니다. 근태 이벤트에서 적용할 스케줄을 선택할 수 있습니다."]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Include, {
          type: props.type,
          ref: "bs3",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_tna_mode_option4",
                product: "air"
              }), ": 사용자가 마지막으로 사용한 근태 이벤트를 계속 사용할 수 있습니다."]
            }), "\n"]
          })
        }), "\n", (0,jsx_runtime.jsx)(Include, {
          type: props.type,
          ref: "ae-mc,xpass2,bew3,bs3,xs2",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_edit_tna_mode_option5",
                  product: "air"
                }), ": 선택한 근태 이벤트만 사용할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_edit_tna_mode_option6",
                  product: "air"
                }), ": 모바일 크리덴셜을 제시할 때 슈프리마 패스 앱에서 근태 이벤트를 선택할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["근태 관리 구성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/configuring-ta"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "device_bs3_sound_label",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_sound_label",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "device_bs3_sound_label2",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_sound_label2",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_label3",
              product: "air"
            }), ": 장치를 사용하지 않을 때 LCD 화면 밝기를 줄여 불필요한 전력 소모를 줄일 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_label4",
              product: "air"
            }), ": 화면의 조명을 항상 켜두거나 비활성화 후 어두워지도록 설정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_backlight",
              product: "air"
            }), ": 화면 조명이 자동으로 꺼지는 시간을 설정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_form_input3",
              product: "air"
            }), ": 장치의 화면에 표시할 언어를 설정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen",
              product: "air"
            }), ": 장치의 홈 화면 배경에 표시할 항목을 설정하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_bs3_sound_home_screen_txt1",
                  product: "air"
                }), ": 기본 이미지를 홈 화면에 표시합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_bs3_sound_home_screen_txt2",
                  product: "air"
                }), ": 사용자가 등록한 이미지를 장치의 홈 화면에 표시할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_bs3_sound_home_screen_txt3",
                  product: "air"
                }), ": 관리자가 입력한 내용을 홈 화면에 표시할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "audit_action_update",
                product: "air"
              }), " 버튼을 클릭하고 저장하면 이미지 또는 공지 사항이 편집 화면에 나타나지 않으나 장치에는 계속 표시됩니다."]
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "device_bs3_sound_home_screen_sound",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_sound_home_screen_sound",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_soung_use_voice",
              product: "air"
            }), ": 알림음 대신 음성 안내를 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_soung_device",
              product: "air"
            }), ": 장치에서 발생하는 소리 크기를 조절할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_soung_speaker",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_microphone",
              product: "air"
            }), ": IP 인터폰 기능을 사용할 때 장치에서 출력 또는 입력되는 소리 크기를 조절할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "ae-mc,xpass2,bew3,bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "wiegandoutput",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_nav_title_wiegandout",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["외부 시스템(예, 경보 패널)과의 통합을 위한 기능입니다. 이 기능을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "use_wiegand_out_label",
          product: "air"
        }), " 옵션을 활성화하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_output_mode",
              product: "air"
            }), ": Wiegand 신호 출력 모드를 설정하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "user_regular_card_type",
                  product: "air"
                }), ": 설정된 Wiegand 형식으로 카드를 스캔합니다."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "device_wiegand_output_use_fail_code",
                    product: "air"
                  }), ": 오류 코드를 설정할 수 있으며 Wiegand를 사용하는 카드 인증을 실패했을 때 전송할 값을 선택할 수 있습니다."]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_wiegand_output_mode_bypass",
                  product: "air"
                }), ": Wiegand 인증과 관계없이 CSN을 전송합니다. 출입문 제어 기능이 없는 장치로 사용할 때 설정하세요."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_output_info",
              product: "air"
            }), ": 인증 시 장치에 출력되는 정보를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_pulse_width",
              product: "air"
            }), ": Wiegand 신호의 펄스 폭을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_pulse_interval",
              product: "air"
            }), ": Wiegand 신호의 펄스 간격을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "mobile_consecutive_tag",
              product: "air"
            }), ": 대기 시간 없이 연속으로 모바일 카드를 태그할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "devices_weigand_out_consecutive_lable",
              product: "air"
            }), ": 모바일 카드를 연속으로 태그할 수 있는 최대 횟수를 설정할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "mobile_consecutive_tag",
            product: "air"
          }), " 기능은 슈프리마 패스 앱 2.9.0 버전 이상에서 지원합니다."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "intercom",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_intercom_title",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_use_intercom",
              product: "air"
            }), ": IP 인터폰 기능을 활성화하거나 비활성화할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_server_transport",
              product: "air"
            }), ": IP 인터폰의 SIP 서버 설정 시 SIP 전송 방법을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_server_address",
              product: "air"
            }), ": SIP 서버의 주소를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_server_port",
              product: "air"
            }), ": SIP 서버의 포트를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_registration_duration",
              product: "air"
            }), ": 등록 유지 시간을 입력하세요. 장치는 등록 유지 시간이 끝날 때마다 SIP 서버에 등록을 시도합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_username",
              product: "air"
            }), ": SIP 계정의 사용자 이름을 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "login_password",
              product: "air"
            }), ": SIP 계정의 비밀번호를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_authorization_id",
              product: "air"
            }), ": SIP 계정의 인증 아이디를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_outbound_proxy_server",
              product: "air"
            }), ": 별도의 (아웃바운드) 프록시 서버를 통해 SIP 서비스를 사용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_extension_number",
              product: "air"
            }), ": 내선 번호를 추가하거나 편집할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_video_resolution",
              product: "air"
            }), ": IP 인터폰을 사용할 때 출력되는 영상의 해상도를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_open_door_button",
              product: "air"
            }), ": 통화 중 장치의 출입문을 개방할 수 있는 버튼을 지정하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bs3,xpass2",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "secureTamper",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_secure_tamper",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치에서 탬퍼 이벤트가 발생할 경우 장치에 저장된 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "전체 사용자 정보"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "전체 로그"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "보안 키"
        }), "를 삭제하도록 설정할 수 있습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "bs3",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "rtspStreaming",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_bs3_rtsp",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real Time Streaming Protocol"
        }), "(RTSP) 스트리밍을 위한 세부 항목을 설정할 수 있습니다. 장치의 카메라를 통해 실시간으로 영상을 송출할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_toogle",
              product: "air"
            }), ": RTSP 스트리밍 기능을 켜거나 끌 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_address",
              product: "air"
            }), ": RTSP 서버 주소입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_port",
              product: "air"
            }), ": RTSP 서버 포트를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_info_id",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "login_password",
              product: "air"
            }), ": RTSP 서버의 아이디와 비밀번호를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_video",
              product: "air"
            }), ": RTSP 사용 시 출력되는 영상의 해상도를 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "RTSP 스트리밍 기능은 BioStation 3 장치에서만 지원합니다."
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rssiSensitivity",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_sensitivity",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 잠금을 해제하기 위해 모바일 기기와 장치가 얼마나 가까이 있어야 하는지 RSSI 값을 조정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-edit-sensitivity.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "값이 작을수록 의도하지 않은 활성화를 방지합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "값이 클수록 간섭이 높은 곳에서 감지를 개선합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["설정한 값을 초기화하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_btn_reset",
          product: "air"
        }), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Include, {
      type: props.type,
      ref: "ae-mc,xpass2,xs2",
      children: [(0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "moduleFoundSlots",
        children: (0,jsx_runtime.jsx)(Cmd, {
          sid: "module_found_slots_title",
          product: "air",
          className: "normal"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치에 연결된 OM-120 모듈을 감지하기 위한 옵션입니다. ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), " 버튼을 클릭해 모듈을 감지할 수 있습니다."]
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


;// CONCATENATED MODULE: ./docs/platform/biostar_air/device-info-settings.mdx


const device_info_settings_frontMatter = {
	id: 'device-info-settings',
	title: '장치 정보 및 설정 옵션 안내',
	description: 'BioStar Air 포털에서 장치 모델별로 제공되는 정보 확인 및 네트워크, 인증, 근태 관리 등의 설정 옵션을 안내합니다.',
	keywords: [
		'장치 정보',
		'설정 옵션',
		'BioStar Air'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: true
};
const device_info_settings_contentTitle = undefined;

const assets = {

};




const device_info_settings_toc = [...toc, ...toc, ...toc, ...toc, ...toc];
function device_info_settings_createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Details, Head} = _components;
  if (!Details) device_info_settings_missingMdxReference("Details", true);
  if (!Head) device_info_settings_missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "관리자는 등록된 장치를 선택해 기본 정보를 확인하고, 네트워크 및 인증, 근태 관리 등 운영에 필요한 설정을 구성할 수 있습니다. 장치 모델에 따라 제공되는 설정 옵션이 다를 수 있으므로, 해당 장치 항목을 펼쳐 사용 가능한 옵션을 확인하세요."
    }), "\n", "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "airfob",
          children: "AirFob Edge"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "ae-mc"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "xpass2",
          children: "XPass 2"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "xpass2"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "xs2",
          children: "XStation 2"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "xs2"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "bew3",
          children: "BioEntry W3"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "bew3"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "deviceInfo",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(Head, {
          level: "2",
          hashid: "bs3",
          children: "BioStation 3"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {
        type: "bs3"
      })]
    })]
  });
}
function device_info_settings_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(device_info_settings_createMdxContent, {
      ...props
    })
  }) : device_info_settings_createMdxContent(props);
}
function device_info_settings_missingMdxReference(id, component) {
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