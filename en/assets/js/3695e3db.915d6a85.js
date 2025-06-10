"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["199"], {
4324: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_device_details_thermal_mask_mdx_369_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-device-details-thermal-mask-mdx-369.json
var site_docs_platform_biostar_x_settings_device_details_thermal_mask_mdx_369_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-thermal-mask","title":"열화상 및 마스크 설정하기","description":"열화상 카메라 및 마스크 사용에 대한 세부 항목 설정을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-device-details-thermal-mask.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-thermal-mask","permalink":"/docs/en/platform/biostar_x/settings-device-details-thermal-mask","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-thermal-mask.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-thermal-mask","title":"열화상 및 마스크 설정하기","description":"열화상 카메라 및 마스크 사용에 대한 세부 항목 설정을 안내합니다.","keywords":["장치","IP 인터폰"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"고급 설정하기","permalink":"/docs/en/platform/biostar_x/settings-device-details-advanced"},"next":{"title":"IP 인터폰 설정하기","permalink":"/docs/en/platform/biostar_x/settings-device-details-interphone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-device-details-thermal-mask.mdx


const frontMatter = {
	id: 'settings-device-details-thermal-mask',
	title: '열화상 및 마스크 설정하기',
	description: '열화상 카메라 및 마스크 사용에 대한 세부 항목 설정을 안내합니다.',
	keywords: [
		'장치',
		'IP 인터폰'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "마스크 설정",
  "id": "mask-settings",
  "level": 2
}, {
  "value": "열화상 카메라 설정",
  "id": "thermal-camera-settings",
  "level": 2
}, {
  "value": "열화상 및 마스크 확인 방식",
  "id": "thermal-mask-verification",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.temperMask",
        product: "2"
      }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.mask",
        product: "2"
      }), " 섹션에서는 열화상 카메라 및 마스크 사용에 대한 세부 항목을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "열화상 카메라를 슈프리마의 얼굴 인증 장치와 연동해 출입문을 오가는 사용자의 온도를 측정하고, 기준 온도를 초과하는 사용자의 접근을 제한할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "마스크를 검출하여 마스크를 착용하지 않은 사용자의 접근을 제한할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.title",
              product: "2"
            }), " 설정 기능은 FaceStation 2, FaceStation F2 모델에서 지원합니다. 지원하는 열화상 카메라는 아래를 참고하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "TCM10-FS2"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "TCM10-FSF2"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.mask.useMask",
              product: "2"
            }), " 설정 기능은 FaceStation F2, BioStation 3, BioEntry W3 모델에서 지원합니다."]
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
      id: "mask-settings",
      children: "마스크 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.mask.title",
        product: "2"
      }), " 그룹에서는 마스크 검출 사용 여부를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.mask.useMask",
            product: "2"
          }), ": 마스크 검출 사용 여부를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.maskCheckModeHard",
                product: "2"
              }), ": 마스크를 착용하지 않은 사용자는 인증 거부되며 마스크 미착용 이벤트 로그를 기록합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.maskCheckModeSoft",
                product: "2"
              }), ": 마스크를 착용하지 않은 사용자도 인증할 수 있으나 마스크 미착용 이벤트 로그를 기록합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["마스크 검출 기능을 사용하지 않으려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.maskCheckModeOff",
              product: "2"
            }), "을 선택하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.maskdetectlevel",
            product: "2"
          }), ": 마스크 검출 민감도를 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thermal-camera-settings",
      children: "열화상 카메라 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.thermal.title",
        product: "2"
      }), " 그룹에서는 열화상 카메라 사용 여부 및 세부 항목을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useThermalCamera",
            product: "2"
          }), ": 열화상 카메라 사용 여부를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.tempCheckModeHard",
                product: "2"
              }), ": 기준 온도를 초과한 사용자는 인증 거부되며 기준 온도 초과 이벤트 로그를 기록합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.tempCheckModeSoft",
                product: "2"
              }), " 기준 온도를 초과한 사용자도 인증할 수 있으나 온도 초과 이벤트 로그를 기록합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.usecentigrade",
            product: "2"
          }), ": 온도 표시 단위를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.temperatureThresholdCelc",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.temperatureThresholdFahr",
            product: "2"
          }), ": 출입을 제한할 기준 온도의 최저 값과 최고 값을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["표면 온도가 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Low"
          }), " 값보다 낮거나 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "High"
          }), " 값보다 높은 사용자는 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useThermalCamera",
            product: "2"
          }), " 옵션에 따라 출입을 제한합니다. 1℃~45℃의 범위에서 설정할 수 있으며, ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Low"
          }), " 값은 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "High"
          }), " 값보다 높게 설정할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useAuditTemperature",
            product: "2"
          }), ": 사용자의 온도 로그 저장 여부를 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.enabled",
                product: "2"
              }), ": 인증 성공 여부 및 사용자의 온도 값을 로그로 저장합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disable",
                product: "2"
              }), ": 인증 성공 여부 로그만 저장합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useTemperatureRejectSound",
            product: "2"
          }), ": 기준 온도 초과로 인한 인증 실패 시 알림 여부를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useOverlapThermal",
            product: "2"
          }), ": 장치 화면에 적외선 영상 표시 여부를 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.cameraconfig",
            product: "2"
          }), ": 열화상 카메라의 세부 옵션을 설정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.compensationCalcTemp",
                product: "2"
              }), ": 제품 사용 환경에 따라 온도를 일정한 값만큼 높거나 낮게 측정하도록 보정할 수 있습니다. 예를 들어, 온도 값이 항상 0.1℃씩 높게 측정되는 환경에서는 온도 보정값을 -0.1℃로 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.distance",
                product: "2"
              }), ": 사용자와 열화상 카메라 사이의 거리를 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.emissionRate",
                product: "2"
              }), ": 적외선 방사율을 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.useDynamicROI",
                product: "2"
              }), ": 주변에 기타 조명이 설치되어 있다면 열화상 카메라가 자동으로 해당 조명이 아닌 사용자의 온도를 측정하도록 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.roiX",
                product: "2"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.roiY",
                product: "2"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.roiWidth",
                product: "2"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.roiHeight",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.useDynamicROI",
                product: "2"
              }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disable",
                product: "2"
              }), "으로 설정할 경우 수동으로 ROI(관심 영역)를 설정할 수 있습니다. ROI 위치와 크기를 조절하여 열화상 카메라가 온도를 측정할 영역을 수동으로 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.temperatureThreshold",
              product: "2"
            }), " 옵션의 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Low"
            }), " 값과 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "High"
            }), " 값 설정은 아래 펌웨어 버전부터 지원합니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation 2 펌웨어 1.4.2 이상"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 펌웨어 1.0.2 이상"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["최적의 성능을 위해 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.cameraconfig",
              product: "2"
            }), "의 하위 옵션은 기본 설정 값 사용을 권장합니다. 장치별 각 옵션의 기본 값은 아래를 참고하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "항목"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "FaceStation 2"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "FaceStation F2"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.distance",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "100"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "100"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.emissionRate",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "0.98"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "0.98"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.roiX",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "47"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "30"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.roiY",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "45"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "25"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.roiWidth",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "15"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "50"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.roiHeight",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "10"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "55"
                })]
              })]
            })]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thermal-mask-verification",
      children: "열화상 및 마스크 확인 방식"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.thermal.mode",
        product: "2"
      }), " 그룹에서는 마스크 검출 또는 열화상 카메라를 사용할 경우 장치의 용도에 따라 확인 방식을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.authBeforeMode",
            product: "2"
          }), ": 인증을 수행한 뒤 사용자의 마스크 착용 여부를 확인하거나 온도를 측정합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.authAfterMode",
            product: "2"
          }), ": 사용자의 마스크 착용 여부를 확인하거나 온도를 측정한 뒤 인증을 수행합니다. 이 경우 마스크를 착용하지 않거나 기준 온도를 초과하는 사용자는 인증을 수행할 수 없습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.authTemperatureOnlyMode",
            product: "2"
          }), ": 장치를 마스크 착용 여부를 확인하거나 온도를 측정하는 용도로만 사용할 수 있습니다. 이 경우 인증과 관계없이 마스크를 착용하거나 기준 온도 이하인 사용자는 모두 출입할 수 있습니다."]
        }), "\n"]
      }), "\n"]
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