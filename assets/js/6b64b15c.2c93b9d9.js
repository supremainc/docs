"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3404"], {
7385: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_integration_paxton_2_0_settings_mdx_6b6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-integration-paxton-2-0-settings-mdx-6b6.json
var site_docs_integration_paxton_2_0_settings_mdx_6b6_namespaceObject = JSON.parse('{"id":"integration/paxton_2.0/settings","title":"Settings","description":"Add device by IP","source":"@site/docs/integration/paxton_2.0/settings.mdx","sourceDirName":"integration/paxton_2.0","slug":"/integration/paxton_2.0/settings","permalink":"/docs/integration/paxton_2.0/settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/integration/paxton_2.0/settings.mdx","tags":[],"version":"current","frontMatter":{"id":"settings","title":"Settings","isTranslationMissing":false},"sidebar":"paxton","previous":{"title":"Installing Paxton Net2","permalink":"/docs/integration/paxton_2.0/installing-paxton-net2"},"next":{"title":"Enrollment Helper Client","permalink":"/docs/integration/paxton_2.0/enrollment-helper-client"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/integration/paxton_2.0/settings.mdx


const frontMatter = {
	id: 'settings',
	title: 'Settings',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add device by IP",
  "id": "add-device-by-ip",
  "level": 2
}, {
  "value": "Skip Enroll User Success",
  "id": "skip-enroll-user-success",
  "level": 2
}, {
  "value": "Set Default Wiegand",
  "id": "set-default-wiegand",
  "level": 2
}, {
  "value": "Register all devices to Mobile Credential",
  "id": "register-all-devices-to-mobile-credential",
  "level": 2
}, {
  "value": "Setup Cloud and SMTP",
  "id": "setup-cloud-and-smtp",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "add-device-by-ip",
      children: "Add device by IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can use this button to add devices to BioStar 2, devices can also be added via the normal BioStar 2 UI."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This button requires valid BioStar 2 Login data to be entered within the login section."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/ico-add-device.png",
            ico: true,
            alone: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Either UDP or TCP can be selected. UDP will scan local subnet only."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/add-device-ip2.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TCP Search:"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/add-device-ip3.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["IP address will be entered in first box, device name will be entered in the second, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add TCP Device"
          }), " will then attempt to add the device to the system. If you wish to just name the device as its Device ID and IP Address, leaving the desired device name blank will populate this with the default. If the device cannot be contacted, an error will display."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/add-device-ip3-1.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A successfully added device will show the following:"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/add-device-ip4.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For UDP search, it will display a message while searching:"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/add-device-ip5.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If devices are found, they will then display in the selection box, this allows you to select a device and to enter a device name into the box, if no name is entered, the device will be added with Device ID and IP Address as its name."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/add-device-ip5-1.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Success will then appear if the device is added successfully."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/add-device-ip4.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skip-enroll-user-success",
      children: "Skip Enroll User Success"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This option when clicked will set BioStar 2 to ignore the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enroll User"
      }), " log from device, this can help prevent against database bloating."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/ico-skip-enroll-user-success.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "set-default-wiegand",
      children: "Set Default Wiegand"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This setting will try to automatically apply the default Wiegand format that Net2 uses to all devices in BioStar 2."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This button requires valid BioStar 2 Login data to be entered within the login section."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/ico-set-default-wiegand.png",
            ico: true,
            alone: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A loading bar will appear at top of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings Editor"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/set-defaule-wiegand2.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "With the prompt below at the bottom."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/set-defaule-wiegand2-1.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Once completed, the following will display if successful, if not successful (For example, if device is not connected to BioStar 2), an error will display instead."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/set-defaule-wiegand3.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "register-all-devices-to-mobile-credential",
      children: "Register all devices to Mobile Credential"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will register all devices connected to the system to the Airfob Mobile Credential, first by uploading the site details to BioStar 2, then going through the device list to apply to devices."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This button requires valid login data to be entered within the Suprema Mobile Credential Settings section."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/ico-register-all-devices-mobile-credentrial.png",
            ico: true,
            alone: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A loading bar will appear at the top of settings editor while trying to apply the settings."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/register-all-device-mobile-credential2.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If any errors occurs, similar to the below will display, in red."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/register-all-device-mobile-credential2-1.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If valid site data has been entered, if will try to apply to devices:"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/register-all-device-mobile-credential2-2.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Once completed, if successful, the below will be displayed."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/register-all-device-mobile-credential3.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setup-cloud-and-smtp",
      children: "Setup Cloud and SMTP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section will allow BioStar 2 Licencing, Cloud settings and SMTP settings to be setup without the BioStar 2 UI."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/ico-setup-cloud-and-smtp.png",
            ico: true,
            alone: true
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The below section will display:"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp2.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The first section will Licence BioStar 2, if you have purchased a BioStar 2 Licence (To use with the cloud section), You can enter here and try to activate. Once activated, the status will change to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "True"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp3.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp3-1.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp3-2.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The second section will allow you to enter specific SMTP settings. Pressing ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/ico-smtp-settings.png",
            ico: true,
            alone: true
          }), " will display the below section. You can enter SMTP server settings that have been provided by provider."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp4.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can enter a test email that will be used to send a test email with entered SMTP settings here, pressing ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Email"
          }), " will try to send."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp5.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Any feedback will appear on the main window, at the bottom, as previous sections detail."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp5-1.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The third section will allow you to choose a cloud Subdomain (If a BioStar 2 Standard or higher licence has been applied)."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp6.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can enter a subdomain prefix (This will allow entry into BioStar 2 from ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://prefix.biostar2.com",
            children: "the following link"
          }), ") and an administrator email, pressing ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/integration/ico-apply.png",
            ico: true,
            alone: true
          }), " at the bottom will try to apply these settings (The popup window will close as BioStar 2 quickly reboots)."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp6-1.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The subdomain settings will then display as saved and un-editable."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp6-2.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The final two sections are specific to how the QR and Visual emails will be formatted, Title is the subject of email, Company name appears in the prompt to user, Logo appears at the top of email (And in QR available to be enrolled in Apple wallet), Contact will appear as contacts within the email (and QR) and footer is specific to the visual email, which will appear as the footer of the email."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/integration/setup-cloud-smtp7.png",
          className: "none",
          alone: true
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