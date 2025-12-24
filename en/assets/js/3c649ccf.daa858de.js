"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["45097"], {
31297: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_how_to_master_admin_mdx_3c6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-how-to-master-admin-mdx-3c6.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_how_to_master_admin_mdx_3c6_namespaceObject = JSON.parse('{"id":"how-to/master-admin","title":"Introduction to Master Admin Feature and Setup Guide","description":"Provides a guide to configuring the Master Admin, which enhances device security by strengthening administrator permissions.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/how-to/master-admin.mdx","sourceDirName":"how-to","slug":"/how-to/master-admin","permalink":"/docs/en/how-to/master-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/how-to/master-admin.mdx","tags":[],"version":"current","frontMatter":{"id":"master-admin","title":"Introduction to Master Admin Feature and Setup Guide","description":"Provides a guide to configuring the Master Admin, which enhances device security by strengthening administrator permissions.","keywords":["Master Admin","Master","Master Admin"],"isTranslationMissing":false},"sidebar":"howto","previous":{"title":"How-to Articles","permalink":"/docs/en/how-to/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/how-to/faqs.json
var faqs_namespaceObject = JSON.parse('[{"question":"What happens if you do not register a Master Administrator?","answer":"A new device without a registered Master Admin cannot perform authentication or change settings. However, you can connect the new device to BioStar to register a Master Admin."},{"question":"Is Master Administrator configuration supported on devices upgraded with firmware from existing devices?","answer":"No. Devices upgraded with firmware from existing devices do not support master administrator configuration. However, you can enhance device security by strengthening the permissions of all administrators through the Admin 2-Step Authentication option. For more information, refer to the <a href=\'#admin-two-step-authentication\'>Admin 2-Step Authentication</a>."},{"question":"Can you register a Master Administrator on a slave device?","answer":"Yes. You can register a Master Administrator on a slave device."}]')
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/how-to/master-admin.mdx


const frontMatter = {
	id: 'master-admin',
	title: 'Introduction to Master Admin Feature and Setup Guide',
	description: 'Provides a guide to configuring the Master Admin, which enhances device security by strengthening administrator permissions.',
	keywords: [
		'Master Admin',
		'Master',
		'Master Admin'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*:::warning

**Warning Message When Master Admin Is Not Registered**

If neither a Master Admin nor an equivalent setting is configured, a warning popup message will appear when saving settings.

<Image src='/img/how-to/no-register-master-admin.png' alone caption />

:::*/



const toc = [{
  "value": "Setting Up the Master Admin",
  "id": "setting-up-the-master-admin",
  "level": 2
}, {
  "value": "What is a Master Admin?",
  "id": "what-is-a-master-admin",
  "level": 3
}, {
  "value": "Supported Products for Master Admin",
  "id": "supported-products-for-master-admin",
  "level": 3
}, {
  "value": "How to Enhance Administrator Security on New Devices or Existing Devices with Upgraded Firmware",
  "id": "how-to-enhance-administrator-security-on-new-devices-or-existing-devices-with-upgraded-firmware",
  "level": 2
}, {
  "value": "New Devices",
  "id": "new-devices",
  "level": 3
}, {
  "value": "Enroll master administrator on a new device",
  "id": "enroll-master-administrator-on-a-new-device",
  "level": 4
}, {
  "value": "Managing Master Admin on a New Device",
  "id": "managing-master-admin-on-a-new-device",
  "level": 4
}, {
  "value": "Upgraded Devices",
  "id": "admin-two-step-authentication",
  "level": 3
}, {
  "value": "Setting Admin 2-step Authentication on Upgraded Devices",
  "id": "setting-admin-2-step-authentication-on-upgraded-devices",
  "level": 4
}, {
  "value": "Additional Information",
  "id": "additional-information",
  "level": 2
}, {
  "value": "Frequently Asked Questions",
  "id": "frequently-asked-questions",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Details, FaqsItems, Image, Row, Table, Tbody, Td, Th} = _components;
  if (!Details) _missingMdxReference("Details", true);
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Admin"
      }), " feature is designed to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "enhance device security"
      }), " by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strengthening overall administrator privileges"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "preventing unauthorized access and configuration changes"
      }), ".", (0,jsx_runtime.jsx)("br", {}), "With this feature, you ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must register a Master Admin"
      }), " on the new device, and only registered Master Admins can access the administrator menu and change device settings."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Admin"
      }), " feature is available ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only on Suprema products that support user interface via LCD screen"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This feature is an essential policy to enhance device security."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The Master Admin cannot be deleted directly, and they are ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "deleted only through factory reset"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-up-the-master-admin",
      children: "Setting Up the Master Admin"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-a-master-admin",
      children: "What is a Master Admin?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you use the device without setting an administrator, anyone can access the administrator menu and change device settings. The master administrator feature enforces overall administrator settings to address these security vulnerabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supported-products-for-master-admin",
      children: "Supported Products for Master Admin"
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/BioStation 3-Front.png",
              className: "none",
              alone: true,
              width: "130px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/BioStation 2a-front.png",
              className: "none",
              alone: true,
              width: "200px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/BioLite N2-Front.png",
              className: "none",
              alone: true,
              width: "110px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/X-Station 2-Front.png",
              className: "none",
              alone: true,
              width: "300px"
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 3"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.4.0 or later"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 2a"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.2.0 or later"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioLite N2"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.7.0 or later"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Station 2"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.4.0 or later"]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-enhance-administrator-security-on-new-devices-or-existing-devices-with-upgraded-firmware",
      children: "How to Enhance Administrator Security on New Devices or Existing Devices with Upgraded Firmware"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "new-devices",
      children: "New Devices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For new devices, registering a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Admin"
      }), " is mandatory from the beginning. If you do not register a Master Admin, device usage will be restricted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["On new devices, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), " registration screen appears upon initial boot. If you do not register a Master Admin, device usage will be restricted."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Even if you assign an overall device administrator via BioStar 2, you must register a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), " to use all device functions."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "New devices cannot perform firmware downgrades."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Registering Master Admin on a New Device"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "enroll-master-administrator-on-a-new-device",
        children: "Enroll master administrator on a new device"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When you boot a new device for the first time, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), " registration screen appears."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-1.png",
            caption: true,
            width: "300px"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To register a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), ", you must enroll at least two types of credentials. Select and enroll two desired credentials."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-2.png",
            caption: true,
            width: "300px"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Credentials that can be enrolled for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), " are as follows:"]
          }), "\n", (0,jsx_runtime.jsx)(Table, {
            children: (0,jsx_runtime.jsxs)(Tbody, {
              children: [(0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Th, {
                  children: "Credential Type"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "Max Quantity"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "Details"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "Card"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Up to 4"
                }), (0,jsx_runtime.jsxs)(Td, {
                  children: ["Supports CSN and Wiegand type only", (0,jsx_runtime.jsx)("br", {}), "No duplicate enrollment within the same type"]
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "Face"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Up to 2"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Available only on devices with the same algorithm"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "Fingerprint"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Up to 2"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "-"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "PIN"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Minimum 8 digits"
                })]
              })]
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Enrollment conditions"
              })
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "You must enroll at least two types of credentials."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "The same conditions apply to both new devices and firmware upgrade devices."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "All credentials supported by the device can be used as authentication means."
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After enrolling at least two types of credentials, press the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            }), " button to finish ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), " registration."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-3.png",
            caption: true,
            width: "300px"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Managing Master Admin on a New Device"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "managing-master-admin-on-a-new-device",
        children: "Managing Master Admin on a New Device"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["On new devices, you can modify ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Master Admin"
        }), " settings in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings → Device → Master Admin"
        }), " menu."]
      }), (0,jsx_runtime.jsxs)("div", {
        className: "grid-container",
        children: [(0,jsx_runtime.jsx)(Image, {
          src: "/img/how-to/edit-master-admin-1.png",
          caption: true,
          width: "300px"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/how-to/setting-master-admin-4.png",
          caption: true,
          width: "300px"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "admin-two-step-authentication",
      children: "Upgraded Devices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Devices upgraded via firmware do not provide ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Admin"
      }), " settings, but you can enhance administrator security by enabling the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin 2-step Authentication"
      }), " option."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The default value for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Admin 2-step Authentication"
            }), " is single-step authentication."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Two-step authentication can be activated only if all registered administrators have at least two types of credentials."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The firmware upgrade device cannot be downgraded to a lower version after upgrading the firmware."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Setting Admin 2-step Authentication on Upgraded Devices"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "setting-admin-2-step-authentication-on-upgraded-devices",
        children: "Setting Admin 2-step Authentication on Upgraded Devices"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can activate Admin 2-step Authentication in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings → Device → Admin 2-step Authentication"
        }), " menu."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Admin 2-step Authentication"
          }), " option appears only on devices upgraded to the latest firmware."]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/how-to/setting-two-step-authentication.png",
        caption: true,
        width: "300px"
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "info",
        children: [(0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If not all administrators have at least two types of credentials, activation will fail and an error message will appear.", (0,jsx_runtime.jsx)("br", {}), "Enroll two types of credentials for all administrators and try again."]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/how-to/error-two-step-authentication.png",
          caption: true,
          width: "300px"
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "warning",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If you activate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Admin 2-step Authentication"
            }), " and then delete credentials so that all administrators have fewer than two types, you will not be able to access the administrator menu if BioStar 2 connection is also unavailable. Therefore, exercise caution when deleting administrator credentials."]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-information",
      children: "Additional Information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Device Hash Key Change"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "When manually changing the device hash key, a warning message will indicate that Master Admin PINs will be deleted. Please confirm the message before proceeding."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RS-485 Biometric Image Transmission Restriction"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Biometric credential images are not transmitted over RS-485 communication, so substitute images appear when viewing the registered Master Admin face on slave devices."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: faqs_namespaceObject
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