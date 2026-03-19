"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["32167"], {
46711: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_devices_mdx_ac6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-registered-devices-mdx-ac6.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_devices_mdx_ac6_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-registered-devices","title":"Manage Registered Devices","description":"In the BioStar Air portal, check device connection status, change biometric and card settings, and update firmware. Efficiently manage the security system using individual or bulk operations.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-devices.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-registered-devices","permalink":"/docs/en/platform/biostar_air/managing-registered-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-registered-devices.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-registered-devices","title":"Manage Registered Devices","description":"In the BioStar Air portal, check device connection status, change biometric and card settings, and update firmware. Efficiently manage the security system using individual or bulk operations.","keywords":["Device Management","Device settings","BioStar Air","Biometric","Card Setting","Firmware Upgrade","Network settings"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Register and Delete Devices","permalink":"/docs/en/platform/biostar_air/manage-device-with-app"},"next":{"title":"Device Information and Configuration Options","permalink":"/docs/en/platform/biostar_air/device-info-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-devices.mdx


const frontMatter = {
	id: 'managing-registered-devices',
	title: 'Manage Registered Devices',
	description: 'In the BioStar Air portal, check device connection status, change biometric and card settings, and update firmware. Efficiently manage the security system using individual or bulk operations.',
	keywords: [
		'Device Management',
		'Device settings',
		'BioStar Air',
		'Biometric',
		'Card Setting',
		'Firmware Upgrade',
		'Network settings'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "View the device list",
  "id": "viewing-device-information",
  "level": 2
}, {
  "value": "Device connection status",
  "id": "device-connection-status",
  "level": 3
}, {
  "value": "Device information",
  "id": "device-information",
  "level": 3
}, {
  "value": "Filter",
  "id": "deviceFiltering",
  "level": 3
}, {
  "value": "Edit individual device information and settings",
  "id": "editing-individual-device",
  "level": 2
}, {
  "value": "Bulk device actions",
  "id": "bulkDeviceActions",
  "level": 2
}, {
  "value": "Device group management",
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
      children: "View the connection status of registered devices at a glance, change biometric and card settings, or update firmware. Manage a few devices individually and many devices in bulk to operate your security system efficiently."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Devices can be registered only in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar Air mobile app"
            }), " for iOS or Android. You cannot register devices from the web portal. For detailed instructions on registering devices using the mobile app, refer to ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Internet access is required to use certain features, such as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "remote access"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "biometric authentication"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "QR code access"
            }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "firmware updates"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Refer to the following video to watch the device registration and management guide."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "lpMPkMyjr-c"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-device-information",
      children: "View the device list"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The device list lets you see all devices registered in BioStar Air at a glance. View key information for each device at a glance, such as connection status, model name, and firmware version. Click a device to view details and modify settings."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_submenu",
        product: "air"
      }), " in the left sidebar."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-connection-status",
      children: "Device connection status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check each device’s connection status from the status icons in the device list."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusOK, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Green"
          }), ": The device is online, can be controlled remotely, and can accept and update QR authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusFail, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Red"
          }), ": The device is offline."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusUpdating, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Orange"
          }), ": Firmware is updating."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["⚪ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Not connected"
          }), ": The device has no network connection. (e.g., Airfob Patch)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirWarn, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Warning"
          }), ": Synchronization is required between the server and the device."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-information",
      children: "Device information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each column in the device list includes the following information."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_product_column",
            product: "air"
          }), ": The device name and model retrieved from the Suprema database."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_nickname_column",
            product: "air"
          }), ": A user-editable field for easier identification. Edit it in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), " window that appears after clicking the device in the list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_id_column",
            product: "air"
          }), ": The unique identifier assigned to the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_group_column",
            product: "air"
          }), ": The group to which the device belongs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_battery_column",
            product: "air"
          }), ": Available only on battery-powered devices. Supported only by AirPop Tag (AirFob Tag) devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_fw_column",
            product: "air"
          }), ": The currently installed firmware version."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_timezone_column",
            product: "air"
          }), ": The time zone set on the device."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deviceFiltering",
      children: "Filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use the filter feature in the top header of the device list. Click ", (0,jsx_runtime.jsx)(IcAirFilter, {
        title: "Filter"
      }), " in the header to set the desired conditions."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To reset the applied filters, click ", (0,jsx_runtime.jsx)(IcAirFilter, {
          title: "Filter"
        }), " and select ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "column_filter_modal_reset_btn",
          product: "air"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editing-individual-device",
      children: "Edit individual device information and settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the device you want to edit in the list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), " window appears."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-edit-details.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Edit the device’s details or settings."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " at the bottom to save the changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For more information on editing fields and setting options for each section, see ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/device-info-settings"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bulkDeviceActions",
      children: "Bulk device actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the controls at the top of the device list to manage multiple devices at once."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-tools.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px",
            title: "Refresh"
          }), ": Refresh the device list and device status."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRemove, {
            width: "24px",
            height: "24px",
            title: "Delete"
          }), ": Delete devices registered to the site."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "warning",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Only online devices can be deleted permanently. If the device is offline, delete it first in the BioStar Air mobile app before adding it to another site. For more information on deleting devices using the mobile app, see ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app#removingDevice"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFw, {
            width: "24px",
            height: "24px",
            title: "Update Firmware"
          }), ": Update the firmware of selected devices. For more information about firmware upgrades, see ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/how-to-upgrade-firmware"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirCloud, {
            width: "24px",
            height: "24px",
            title: "Sync with Server"
          }), ": Synchronize biometric templates from selected devices to the server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), ": Assign selected devices to a group. For more information about device group management, see ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#device_group_in_device_list"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirByte, {
            width: "24px",
            height: "24px",
            title: "RF Card Byte Order"
          }), ": Switch the RF card byte order of the selected device in the list to ", (0,jsx_runtime.jsx)(Cmd, {
            children: "MSB"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            children: "LSB"
          }), "."]
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
          children: [(0,jsx_runtime.jsx)(IcAirDset, {
            width: "24px",
            height: "24px",
            title: "Load Device Setting"
          }), ": Import the device settings originally configured in standalone mode."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUpd, {
            width: "24px",
            height: "24px",
            title: "Update Status"
          }), ": Update the status of the selected devices in the device list."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device_group_in_device_list",
      children: "Device group management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From the device list, select individual devices to add them to a device group or remove them from an existing group."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the checkbox for the device to add to or remove from a group."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), " at the top of the device group list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_device_group_title",
            product: "air"
          }), " window appears, add or remove the selected devices from the group."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-group-mng.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_device_group_title_two",
            product: "air"
          }), " checkboxes have the following meanings:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_one",
                product: "air"
              }), ": Removes the selected devices from the group."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_two",
                product: "air"
              }), ": Certain selected devices are currently in the group."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_three",
                product: "air"
              }), ": Adds the selected devices to the group."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " to save the changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Selecting another group in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "manage_device_group_title",
              product: "air"
            }), " window moves the selected devices to that group."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A device can belong to multiple groups. A single device can be assigned to multiple groups."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_btn_reset",
              product: "air"
            }), " to initialize the changes."]
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