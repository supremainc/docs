"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["93021"], {
77744: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_thermal_mask_mdx_341_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-thermal-mask-mdx-341.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_thermal_mask_mdx_341_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-thermal-mask","title":"Thermal and Mask Settings","description":"This provides guidance for setting details on thermal cameras and mask usage.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-thermal-mask.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-thermal-mask","permalink":"/docs/en/platform/biostar_x/settings-device-details-thermal-mask","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-thermal-mask.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-thermal-mask","title":"Thermal and Mask Settings","description":"This provides guidance for setting details on thermal cameras and mask usage.","keywords":["Device","thermal camera","mask"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Advanced Settings","permalink":"/docs/en/platform/biostar_x/settings-device-details-advanced"},"next":{"title":"Intercom Settings","permalink":"/docs/en/platform/biostar_x/settings-device-details-interphone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-thermal-mask.mdx


const frontMatter = {
	id: 'settings-device-details-thermal-mask',
	title: 'Thermal and Mask Settings',
	description: 'This provides guidance for setting details on thermal cameras and mask usage.',
	keywords: [
		'Device',
		'thermal camera',
		'mask'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Mask settings",
  "id": "mask-settings",
  "level": 2
}, {
  "value": "Thermal camera settings",
  "id": "thermal-camera-settings",
  "level": 2
}, {
  "value": "Thermal and mask verification methods",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.temperMask",
        product: "2"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.mask",
        product: "2"
      }), " sections, you can set detailed parameters for the thermal camera and mask usage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The thermal camera can be linked to Suprema's facial authentication device to measure the temperature of users passing through the door and restrict access for users exceeding the threshold temperature."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The system detects masks and restricts access for users not wearing a mask."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.title",
              product: "2"
            }), " setting feature is supported by FaceStation 2 and FaceStation F2 models. Refer to the thermal cameras supported below."]
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
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.mask.useMask",
              product: "2"
            }), " setting feature is supported by FaceStation F2, BioStation 3, and BioEntry W3."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the user has made any arbitrary changes, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " button. Changes will not be applied to the device if not saved."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mask-settings",
      children: "Mask settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.mask.title",
        product: "2"
      }), " group, you can set whether to use mask detection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.mask.useMask",
            product: "2"
          }), ": Select whether to use mask detection."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.mask.checkModeHard",
                product: "2"
              }), ": Users without masks are denied authentication, and events of mask unwear recorded."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.mask.checkModeSoft",
                product: "2"
              }), ": Users without masks can authenticate, but events of mask unwear are recorded."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.maskCheckModeOff",
                product: "2"
              }), ": Mask detection is not used."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.maskdetectlevel",
            product: "2"
          }), ": Select the mask detection sensitivity."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thermal-camera-settings",
      children: "Thermal camera settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.thermal.title",
        product: "2"
      }), " group, you can set the use of the thermal camera and its parameters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useThermalCamera",
            product: "2"
          }), ": Set whether to use the thermal camera."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.checkModeHard",
                product: "2"
              }), ": Users exceeding the threshold temperature are denied authentication, and events of exceeding the threshold temperature are recorded."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.checkModeSoft",
                product: "2"
              }), ": Users exceeding the threshold temperature can authenticate, but events of exceeding the threshold temperature are recorded."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.usecentigrade",
            product: "2"
          }), ": Set the temperature display unit."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.temperatureThresholdCelc",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.temperatureThresholdFahr",
            product: "2"
          }), ": Set the minimum and maximum values for the threshold temperature that restricts access."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Users with a surface temperature below the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Low"
          }), " value or above the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "High"
          }), " value will be restricted from entry according to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useThermalCamera",
            product: "2"
          }), " option. You can set the range from 1℃ to 45℃, and the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Low"
          }), " value cannot be higher than the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "High"
          }), " value."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useAuditTemperature",
            product: "2"
          }), ": Set whether to save the user's temperature log."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.enabled",
                product: "2"
              }), ": Logs both authentication success and the user's temperature value."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disable",
                product: "2"
              }), ": Only logs authentication success."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useTemperatureRejectSound",
            product: "2"
          }), ": Set whether to notify authentication failure due to exceeding the threshold temperature."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useOverlapThermal",
            product: "2"
          }), ": Set whether to display infrared images on the device screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.cameraconfig",
            product: "2"
          }), ": Set detailed options for the thermal camera."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.compensationCalcTemp",
                product: "2"
              }), ": Adjust the temperature to measure consistently higher or lower based on the product usage environment. For example, if temperatures are consistently measured 0.1℃ higher, set the temperature compensation value to -0.1℃."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.distance",
                product: "2"
              }), ": Set the distance between the user and the thermal camera."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.emissionRate",
                product: "2"
              }), ": Set the infrared emissivity."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.useDynamicROI",
                product: "2"
              }), ": If other lighting is present in the environment, configure the thermal camera to measure the user's temperature automatically without interference from nearby lights."]
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
              }), ": If the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.useDynamicROI",
                product: "2"
              }), " option is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disable",
                product: "2"
              }), ", manually set the ROI (Region of Interest). Adjust the ROI location and size to specify the area where the thermal camera will measure temperature."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The settings for the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.temperatureThreshold",
              product: "2"
            }), " option's ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Low"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              children: "High"
            }), " values are supported from the firmware versions below."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation 2 firmware version 1.4.2 and above"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 firmware version 1.0.2 and above"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For optimal performance, it is advised to use the default settings for the sub-options in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.cameraconfig",
              product: "2"
            }), ". The default values for each device's options are listed below."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "Item"
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
      children: "Thermal and mask verification methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.thermal.mode",
        product: "2"
      }), " group allows settings to determine the verification method based on the device's purpose when ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.mask.useMask",
        product: "2"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.thermal.useThermalCamera",
        product: "2"
      }), " options are set to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.use",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.authBeforeMode",
            product: "2"
          }), ": Checks the user's mask usage or measures temperature after authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.authAfterMode",
            product: "2"
          }), ": Checks the user's mask usage or measures temperature before authentication. In this case, users not wearing a mask or exceeding the threshold temperature cannot authenticate."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.authTemperatureOnlyMode",
            product: "2"
          }), ": The device can only be used to check for mask usage or measure temperature. Users wearing a mask or having a temperature below the threshold can enter regardless of authentication."]
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