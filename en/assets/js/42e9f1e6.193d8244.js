"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16150"], {
49169: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Customers who began using BioStar Air access control before May 2025 may still be using the Airfob Space app, which has since been rebranded as the Suprema Pass app. Both apps offer identical functionality and are fully compatible. There is no need for existing users to switch — mobile credentials work seamlessly across both."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
16209: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_how_to_upgrade_firmware_mdx_42e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-how-to-upgrade-firmware-mdx-42e.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_how_to_upgrade_firmware_mdx_42e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/how-to-upgrade-firmware","title":"How to Upgrade Firmware","description":"Learn how to upgrade device firmware in bulk or individually using the web portal and mobile app, with version checking and troubleshooting tips for BioStar Air.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/how-to-upgrade-firmware.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/how-to-upgrade-firmware","permalink":"/en/platform/biostar_air/how-to-upgrade-firmware","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/how-to-upgrade-firmware.mdx","tags":[],"version":"current","frontMatter":{"id":"how-to-upgrade-firmware","title":"How to Upgrade Firmware","description":"Learn how to upgrade device firmware in bulk or individually using the web portal and mobile app, with version checking and troubleshooting tips for BioStar Air.","keywords":["firmware","upgrade","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configuring the SIO2 Secure Module","permalink":"/en/platform/biostar_air/configuring-the-sio2-secure-module"},"next":{"title":"Biometric Readers and Credentials","permalink":"/en/platform/biostar_air/biometric-readers-and-credentials"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/how-to-upgrade-firmware.mdx


const frontMatter = {
	id: 'how-to-upgrade-firmware',
	title: 'How to Upgrade Firmware',
	description: 'Learn how to upgrade device firmware in bulk or individually using the web portal and mobile app, with version checking and troubleshooting tips for BioStar Air.',
	keywords: [
		'firmware',
		'upgrade',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Feature Overview",
  "id": "feature-overview",
  "level": 2
}, ..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Navigating to the Feature",
  "id": "navigating-to-the-feature",
  "level": 2
}, {
  "value": "Step-by-Step Instructions",
  "id": "step-by-step-instructions",
  "level": 2
}, {
  "value": "Upgrading Firmware in Bulk via Web Portal",
  "id": "upgrading-firmware-in-bulk-via-web-portal",
  "level": 3
}, {
  "value": "Upgrading Firmware for an Individual Device via Web Portal",
  "id": "upgrading-firmware-for-an-individual-device-via-web-portal",
  "level": 3
}, {
  "value": "Upgrading Firmware via BioStar Air Mobile App",
  "id": "upgrading-firmware-via-biostar-air-mobile-app",
  "level": 3
}, {
  "value": "Common Issues &amp; Considerations",
  "id": "common-issues-considerations",
  "level": 2
}, {
  "value": "Learn More about Device Management",
  "id": "learn-more-about-device-management",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, YouTube} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "Feature Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upgrading the firmware in BioStar Air ensures that your devices run the latest software version with improvements, bug fixes, and new features. The process is simple and can be done via the BioStar Air web portal or the BioStar Air mobile app."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-the-feature",
      children: "Navigating to the Feature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To upgrade the firmware using the web portal:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "admin.biostarair.com"
          }), " and log in."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Navigate to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Device Management"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Registered Devices"
          }), " in the left-hand sidebar."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-instructions",
      children: "Step-by-Step Instructions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upgrading-firmware-in-bulk-via-web-portal",
      children: "Upgrading Firmware in Bulk via Web Portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Log in to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "admin.biostarair.com"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Device Management"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Registered Devices"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Find the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Firmware"
          }), " column (second from the left) to check the current version of each device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sort devices by firmware version using the arrow buttons next to the column heading."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select devices running an outdated firmware version (anything below ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.9"
          }), " as of August 2025) by checking the box on the left side."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the gear icon in the toolbar at the top of the screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Hover over the icon to confirm it says ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Firmware"
          }), ", then click it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the latest firmware version ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.9"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.10"
          }), ", depending on the reader, (as of August 2025) and confirm the update."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-device-management-upgrade-fw.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-device-management-upgrade-fw-list.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upgrading-firmware-for-an-individual-device-via-web-portal",
      children: "Upgrading Firmware for an Individual Device via Web Portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Registered Devices"
          }), " list, click on the device name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit Device"
          }), " screen, scroll down to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Device Info"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click on the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Firmware Update"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the latest firmware version ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.9"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.10"
          }), ", depending on the reader, (as of August 2025) and confirm the update."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-device-management-upgrade-fw-edit-device.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upgrading-firmware-via-biostar-air-mobile-app",
      children: "Upgrading Firmware via BioStar Air Mobile App"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The process for upgrading firmware using the BioStar Air app on iOS or Android is similar to the web portal:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open the BioStar Air app and log in."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Go to the device list and check the firmware version of your devices."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select devices running an outdated version and choose the firmware update option."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the latest version ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.9"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2.10"
          }), ", depending on the reader, (as of August 2025) and confirm the update."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-issues-considerations",
      children: "Common Issues & Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Devices must be online"
          }), " to receive the firmware update. Check the device status in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Product"
          }), " column. A green dot next to the device image indicates it is online."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["During the firmware update, devices will ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "temporarily go offline"
          }), " but should reconnect within ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "three to five minutes"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To avoid disruptions, it is recommended to perform firmware updates ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "outside peak business hours"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learn-more-about-device-management",
      children: "Learn More about Device Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Learn more about device management in BioStar Air by watching the following video:"
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "lpMPkMyjr-c"
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