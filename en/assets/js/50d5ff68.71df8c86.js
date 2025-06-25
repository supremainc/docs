"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["400"], {
7703: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_info_mdx_50d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-info-mdx-50d.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_info_mdx_50d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-info","title":"Basic Information Setting","description":"This provides guidance on checking and setting the device name, group, time zone, hardware, and firmware version.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-info.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-info","permalink":"/docs/en/platform/biostar_x/settings-device-details-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-info.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-info","title":"Basic Information Setting","description":"This provides guidance on checking and setting the device name, group, time zone, hardware, and firmware version.","keywords":["Device","Information"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Device Settings","permalink":"/docs/en/platform/biostar_x/settings-device-details"},"next":{"title":"Network Settings","permalink":"/docs/en/platform/biostar_x/settings-device-details-network"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-info.mdx


const frontMatter = {
	id: 'settings-device-details-info',
	title: 'Basic Information Setting',
	description: 'This provides guidance on checking and setting the device name, group, time zone, hardware, and firmware version.',
	keywords: [
		'Device',
		'Information'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Change the Device Name",
  "id": "change-the-device-name",
  "level": 2
}, {
  "value": "Change the Device Group",
  "id": "change-the-device-group",
  "level": 2
}, {
  "value": "Firmware Upgrade",
  "id": "firmware-upgrade",
  "level": 2
}, {
  "value": "Set the Device&#39;s Date and Time",
  "id": "set-the-devices-date-and-time",
  "level": 2
}, {
  "value": "Unlock the Device",
  "id": "unlock-the-device",
  "level": 2
}, {
  "value": "Initialize the Device",
  "id": "initialize-the-device",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.information",
        product: "2"
      }), " section allows you to set the basic information of the device. You can check the device's name and group, time zone, hardware, and firmware versions. You can change the device's name and group or upgrade the device's firmware."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below are the default information settings for the device that cannot be modified by the user."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceId",
            product: "2"
          }), ": You can check the device ID."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceType",
            product: "2"
          }), ": You can check the type of device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.productName",
            product: "2"
          }), ": You can check the model name of the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.kernelVersion",
            product: "2"
          }), ": You can check the device's kernel version."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.hwVersion",
            product: "2"
          }), ": You can check the hardware version of the device."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you have made changes, click the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " button. Changes will not be applied to the device if they are not saved."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "change-the-device-name",
      children: "Change the Device Name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can change the default device name. Enter your desired device name in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.name",
        product: "2"
      }), " field. The device name can be up to 48 characters long and is used to identify the device in the device list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "change-the-device-group",
      children: "Change the Device Group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can change the group to which the device belongs. Select the desired device group in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.group",
        product: "2"
      }), " field."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on creating a new device group, changing, or deleting group names, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-device-group",
          children: "the following document"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "firmware-upgrade",
      children: "Firmware Upgrade"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To check the device's firmware version, refer to the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.firmwareVersion",
        product: "2"
      }), " field. To upgrade the firmware, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.firmwareUpgrade",
        product: "2"
      }), " button."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on upgrading the device's firmware, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-device-upgrade-firmware",
          children: "the following document"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "set-the-devices-date-and-time",
      children: "Set the Device's Date and Time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the device's date and time using the options below."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeZone",
            product: "2"
          }), ": You can select the standard time zone where the device is located."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeSync",
            product: "2"
          }), ": You can synchronize the device's time information with the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dst",
            product: "2"
          }), ": You can apply the user's configured daylight saving time to the device. Refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "the following document"
          }), " to add a new daylight saving time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.date",
            product: "2"
          }), ": You can manually set the device's date and time. After setting both date and time, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.setTime",
            product: "2"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature can be used when the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.timeSync",
              product: "2"
            }), " option is not selected."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dateFormat",
            product: "2"
          }), ": You can select the date format displayed on the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.getTime",
            product: "2"
          }), ": You can get the time set on the device."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The set date and time will be recorded in the event log and in real time. If the device's date and time are incorrect, log records may be inaccurate."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "unlock-the-device",
      children: "Unlock the Device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the device is locked due to operating conditions and actions, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.locked",
        product: "2"
      }), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.unlock",
        product: "2"
      }), " button to unlock the device."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initialize-the-device",
      children: "Initialize the Device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To initialize the device settings, select one of the following features in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.factoryDefault",
        product: "2"
      }), " field."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset",
            product: "2"
          }), ": Initializes all settings of the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset.withoutNetwork",
            product: "2"
          }), ": Maintains network settings and initializes other settings."]
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