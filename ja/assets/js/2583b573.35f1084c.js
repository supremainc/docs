"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["69895"], {
37255: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ device_info_settings_frontMatter),
  toc: () => (/* binding */ device_info_settings_toc),
  "default": () => (/* binding */ device_info_settings_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_device_info_settings_mdx_258_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ device_info_settings_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-device-info-settings-mdx-258.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_device_info_settings_mdx_258_namespaceObject = JSON.parse('{"id":"platform/biostar_air/device-info-settings","title":"Device Information and Configuration Options","description":"This page describes the information available for each device model on the BioStar Air portal and explains the configuration options for network, authentication, and time and attendance management.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/device-info-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/device-info-settings","permalink":"/docs/ja/platform/biostar_air/device-info-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/device-info-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"device-info-settings","title":"Device Information and Configuration Options","description":"This page describes the information available for each device model on the BioStar Air portal and explains the configuration options for network, authentication, and time and attendance management.","keywords":["Device Information","Configuration Options","BioStar Air"],"toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Manage Registered Devices","permalink":"/docs/ja/platform/biostar_air/managing-registered-devices"},"next":{"title":"Manage Device Groups","permalink":"/docs/ja/platform/biostar_air/manage-device-group"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_bsair-device-info-settings.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Basic Information",
  "id": "basic-information",
  "level": 4
}, {
  "value": "Actions",
  "id": "actions",
  "level": 4
}, {
  "value": "Initial Settings",
  "id": "initial-settings",
  "level": 4
}, {
  "value": "<Cmd class=\"normal\"></Cmd> (Time &amp; Attendance, T&amp;A)",
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
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_detail",
        product: "air"
      }), " section provides basic information — such as the device name, model, serial number, and firmware version — and includes an action menu for controlling features and default settings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic-information",
      children: "Basic Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "View the device's basic information. This information cannot be edited."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_product",
            product: "air"
          }), ": The product name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_model",
            product: "air"
          }), ": The device's model name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_serial",
            product: "air"
          }), ": The device's serial number."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_non_editable_fields_firmware",
            product: "air"
          }), ": The firmware version installed on the device."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "actions",
      children: "Actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " (액션) feature lets you control the device's functions."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-edit-actions.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "firmware_update_btn",
            product: "air"
          }), ": Update the device firmware to the latest version."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_reboot",
            product: "air"
          }), ": Reboot the device remotely when an issue or anomaly occurs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_factory_reset",
            product: "air"
          }), ": Initialize all settings stored on the device. This action deletes all settings and data on the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_factory_reset",
            product: "air"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_actions_excluding_network",
            product: "air"
          }), ": Initialize all settings except the network settings. This action deletes all settings and data but keeps the network settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "initial-settings",
      children: "Initial Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modify the device's default settings."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_nick_name",
            product: "air"
          }), ": The alias shown in the device list and logs. You can edit this field directly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_timezone",
            product: "air"
          }), ": Set the device time zone to keep logs consistent when the site and device clocks differ. Activate the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), " option to apply daylight saving time (DST)."]
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
            }), ": Enter the RF card number using the keypad to use it."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["This feature is supported only on the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "XP2-GKDPB"
              }), " model, which has a keypad."]
            })
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device_editable_fields_hands_free",
          product: "air"
        }), ": Extend the BLE range."]
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
            }), ": Confirm that an RS-485 QR reader is connected to the device."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "When a QR reader is connected to the device, you cannot use another RS-485 device."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "When using an SIO2, you cannot use a QR reader on the device connected to that door."
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
          }), ": Activate or deactivate card authentication. DESFire and Felica card formats are supported."]
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
          }), ": Configure the success beep for access authentication."]
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
        children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_title",
          product: "air"
        }), " section, you can modify card authentication settings."]
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
            }), ": Click the toggle switch to enable or disable card access authentication. Select the card types supported for card authentication."]
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
                }), ": Processes card data in order from large byte units to small byte units, sequentially storing the card serial number (CSN) from left to right."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  children: "LSB"
                }), ": Processes card data in order from small byte units to large byte units, storing the card serial number (CSN)."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_card_field_data_reading_method",
              product: "air"
            }), ": Select CSN (default) or Wiegand format."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Wiegand supports 5 default formats. Add more formats in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_format_submenu",
                product: "air"
              }), ". For more information about custom card format settings, see ", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_air/custom-wiegand-card-formats"
              }), "."]
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
        children: ["For Wiegand cards, you can select ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card_iclass",
          product: "air"
        }), " and ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card_hid_prox",
          product: "air"
        }), ". Click the toggle to enable the feature, then select the desired card format in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_card_wiegand_card",
          product: "air"
        }), "."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Support may vary by device."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Wiegand supports 5 default formats. Add more formats in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_format_submenu",
                product: "air"
              }), ". For more information about custom card format settings, see ", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_air/custom-wiegand-card-formats"
              }), "."]
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
      children: "Modify the device's network settings."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_use_dhcp",
            product: "air"
          }), ": Configure the device to obtain an IP address automatically."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To set the network manually, disable ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_use_dhcp",
            product: "air"
          }), " and fill in the following fields."]
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
              }), ": Add authentication methods. Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_btn",
                product: "air"
              }), " to add an authentication method."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "XP2-MDPB"
                  }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "XP2-GDPB"
                  }), ": Only RF cards can be selected as the authentication method."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "XP2-GKDPB"
                  }), ": You can use a combination of an RF card and a PIN as the authentication method."]
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
            }), ": Add authentication methods. Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "add_btn",
              product: "air"
            }), " to add an authentication method. You can use a combination of an RF card and facial recognition as the authentication method."]
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
            }), ": Add authentication methods. Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "add_btn",
              product: "air"
            }), " to add an authentication method. You can choose a combination of RF card, face, ID, and PIN for authentication."]
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
              }), ": Choose whether to show the user name or ID on the authentication screen. Select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_bs3_authen_display_user_name_txt3",
                product: "air"
              }), " to hide them."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_auth_timeout",
                product: "air"
              }), ": Authentication fails if the credential is not authenticated within the set time."]
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
              }), ": Authentication fails if the credential is not authenticated within the set time."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["This feature is supported only on the ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "XP2-GKDPB"
                }), " model."]
              })
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "You can configure different authentication methods for the selected schedule. For example, you can allow card-only authentication during work hours and allow card-and-PIN authentication outside work hours."
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
            }), ": Prevent user authentication with spoofed faces such as photos."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_7_text2",
              product: "air"
            }), ": Check for duplicate registrations when enrolling facea."]
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
            }), ": Set the sensitivity for detecting movement around the device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_3_title",
              product: "air"
            }), ": Set the maximum rotation angle allowed for a face."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_5_title",
              product: "air"
            }), ": Expand the area in the camera view where faces are recognized."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_4_title",
              product: "air"
            }), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_4_title_cm",
              product: "air"
            }), ": Set the minimum and maximum recognition distance."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_8_title",
              product: "air"
            }), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_8_title_cm",
              product: "air"
            }), ": If a face is not enrolled within the set time during enrollment, the process is canceled."]
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
        children: ["Activate the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_layout_device_bew3_block_8_1_text",
          product: "air"
        }), " option to configure mask detection."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_device_bew3_block_8_2_text",
              product: "air"
            }), ": Select mask detection sensitivity."]
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
                }), ": Users not wearing a mask are denied authentication, and a mask-non-compliance event log is recorded."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_3_value2",
                  product: "air"
                }), ": Users not wearing a mask can still authenticate, but a mask-non-compliance event log is recorded."]
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
                }), ": After authentication, check mask usage or measure temperature."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_4_value2",
                  product: "air"
                }), ": Check mask usage or measure temperature before authentication. In this case, users not wearing a mask or exceeding the threshold temperature cannot authenticate."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_4_value3",
                  product: "air"
                }), ": Use the device only to check mask usage or measure temperature. Users wearing a mask or having a temperature below the threshold can enter regardless of authentication."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "bs3_qr_barcode_toogle1",
              product: "air"
            }), ": Set whether to allow QR/barcode authentication via the device's camera."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "bs3_qr_barcode_toogle2",
              product: "air"
            }), ": Set authentication to accept a QR code containing the same data as the CSN card or Wiegand card issued to the user. This feature is available when the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "bs3_qr_barcode_toogle1",
              product: "air"
            }), " option is enabled."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "When using non-face credentials, the timing of \"before\" and \"after\" is usually important."
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "tna",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "new_layout_nav_title_tna",
        product: "air",
        className: "normal"
      }), " (Time & Attendance, T&A)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When this feature is enabled, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_edit_tna_event_label",
        product: "air",
        className: "bold"
      }), " is logged in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event Log"
      }), " and used in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna_report",
        product: "air",
        className: "bold"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "new_device_edit_tna_toogle",
            product: "air"
          }), ": Click the toggle switch to turn attendance management on or off."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_tna_mode_label",
            product: "air"
          }), ": Select the desired attendance mode."]
        }), "\n", (0,jsx_runtime.jsx)(Include, {
          type: props.type,
          ref: "bs3",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_tna_mode_option2",
                product: "air"
              }), ": When the attendance key appears on the screen, the user selects the attendance event during authentication."]
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
              }), ": Attendance events change automatically according to the set schedule. You can select a schedule to apply to attendance events."]
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
              }), ": The user continues to use the last selected attendance event."]
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
                }), ": Only the selected attendance event is available."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_edit_tna_mode_option6",
                  product: "air"
                }), ": When presenting a mobile credential, the Suprema Pass app lets the user select the attendance event."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on configuring time and attendance, see ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/configuring-ta"
        }), "."]
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
            }), ": Reduce LCD brightness when the device is not in use to lower unnecessary power consumption."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_label4",
              product: "air"
            }), ": Keep the backlight always on or dim it after inactivity."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_backlight",
              product: "air"
            }), ": Set the time before the backlight turns off automatically."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_form_input3",
              product: "air"
            }), ": Set the language shown on the device screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen",
              product: "air"
            }), ": Configure the items displayed on the device’s home screen background."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_bs3_sound_home_screen_txt1",
                  product: "air"
                }), ": Display the default image on the home screen."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_bs3_sound_home_screen_txt2",
                  product: "air"
                }), ": Display a user-registered image on the home screen."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_bs3_sound_home_screen_txt3",
                  product: "air"
                }), ": Display administrator input on the home screen."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["After clicking ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "audit_action_update",
                product: "air"
              }), " and saving, the image or notice no longer appears in the edit screen but remains on the device."]
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
            }), ": Use voice guidance instead of notification tones."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_soung_device",
              product: "air"
            }), ": Adjust the volume of sounds generated by the device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_soung_speaker",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_sound_home_screen_microphone",
              product: "air"
            }), ": Adjust the output or input volume when using the IP intercom feature."]
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
        children: ["This feature integrates with external systems (e.g., alarm panels). Activate the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "use_wiegand_out_label",
          product: "air"
        }), " option to use this feature."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_output_mode",
              product: "air"
            }), ": Configure the Wiegand signal output mode."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "user_regular_card_type",
                  product: "air"
                }), ": Scan cards using the configured Wiegand format."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "device_wiegand_output_use_fail_code",
                    product: "air"
                  }), ": You can set error codes and choose the value to send when Wiegand card authentication fails."]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_wiegand_output_mode_bypass",
                  product: "air"
                }), ": Send the CSN regardless of Wiegand authentication. Set this if you are using it as a device without door control functionality."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_output_info",
              product: "air"
            }), ": Select the information output during authentication."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_pulse_width",
              product: "air"
            }), ": Set the pulse width for the Wiegand signal."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "wiegand_pulse_interval",
              product: "air"
            }), ": Set the pulse interval for the Wiegand signal."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "mobile_consecutive_tag",
              product: "air"
            }), ": Tag mobile cards consecutively without wait time."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "devices_weigand_out_consecutive_lable",
              product: "air"
            }), ": Set the maximum number of consecutive mobile card tags."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "mobile_consecutive_tag",
            product: "air"
          }), " feature is supported in Suprema Pass app 2.9.0 or later."]
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
            }), ": Activate or deactivate the IP intercom feature."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_server_transport",
              product: "air"
            }), ": Choose the SIP transport method when configuring the intercom’s SIP server."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_server_address",
              product: "air"
            }), ": Enter the SIP server address."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_server_port",
              product: "air"
            }), ": Enter the SIP server port."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_registration_duration",
              product: "air"
            }), ": Enter the registration duration. The device attempts to register with the SIP server every time the registration duration expires."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_username",
              product: "air"
            }), ": Enter the SIP account username."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "login_password",
              product: "air"
            }), ": Enter the SIP account password."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_sip_authorization_id",
              product: "air"
            }), ": Enter the SIP account authorization ID."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_txt_outbound_proxy_server",
              product: "air"
            }), ": Use a separate outbound proxy server for SIP services if required."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_extension_number",
              product: "air"
            }), ": Add or edit extension numbers."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_video_resolution",
              product: "air"
            }), ": Select the video resolution when using the intercom."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_intercom_open_door_button",
              product: "air"
            }), ": Specify a button to unlock the door during a call."]
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
        children: ["If a tamper event occurs, configure the device to delete ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "all user information"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "all logs"
        }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "security keys"
        }), " stored on the device."]
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
        children: ["Configure details for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Real Time Streaming Protocol"
        }), " (RTSP) streaming. The device's camera can stream live video."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_toogle",
              product: "air"
            }), ": Turn RTSP streaming on or off."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_address",
              product: "air"
            }), ": RTSP server address."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_port",
              product: "air"
            }), ": Enter the RTSP server port."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_info_id",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "login_password",
              product: "air"
            }), ": Enter the RTSP server ID and password."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_bs3_rtsp_video",
              product: "air"
            }), ": Select the video resolution when using RTSP."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "info",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "The RTSP streaming feature is supported only on BioStation 3."
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
      children: "Adjust the RSSI value to set how close the mobile device must be to unlock the door."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-edit-sensitivity.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Lower values help block unintended activation."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Higher values improve detection in high-interference environments."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To reset the settings, click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device_btn_reset",
          product: "air"
        }), "."]
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
        children: ["Option to detect an OM-120 module connected to the device. Click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), " to detect the module."]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/device-info-settings.mdx


const device_info_settings_frontMatter = {
	id: 'device-info-settings',
	title: 'Device Information and Configuration Options',
	description: 'This page describes the information available for each device model on the BioStar Air portal and explains the configuration options for network, authentication, and time and attendance management.',
	keywords: [
		'Device Information',
		'Configuration Options',
		'BioStar Air'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: false
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
      children: "Administrators can select a registered device to view its basic information and configure operational settings such as network, authentication, and time and attendance management. Configuration options vary by device model. Expand the device entry to view the available options."
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
          children: "X-Station 2"
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