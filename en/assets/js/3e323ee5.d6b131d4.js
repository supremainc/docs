"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["47035"], {
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
73259: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_doors_mdx_3e3_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-registered-doors-mdx-3e3.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_doors_mdx_3e3_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-registered-doors","title":"Manage Registered Doors","description":"This guide explains how to manage registered doors, configure entry devices, set relays, and configure door schedules in BioStar Air.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-doors.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-registered-doors","permalink":"/docs/en/platform/biostar_air/managing-registered-doors","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-registered-doors.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-registered-doors","title":"Manage Registered Doors","description":"This guide explains how to manage registered doors, configure entry devices, set relays, and configure door schedules in BioStar Air.","keywords":["Door Management","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Door Management","permalink":"/docs/en/platform/biostar_air/manage-door"},"next":{"title":"Manage Door Group","permalink":"/docs/en/platform/biostar_air/managing-door-groups"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-doors.mdx


const frontMatter = {
	id: 'managing-registered-doors',
	title: 'Manage Registered Doors',
	description: 'This guide explains how to manage registered doors, configure entry devices, set relays, and configure door schedules in BioStar Air.',
	keywords: [
		'Door Management',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "View registered doors",
  "id": "registeredDoors",
  "level": 2
}, {
  "value": "Door management tools",
  "id": "doorManagementTools",
  "level": 2
}, {
  "value": "Add doors",
  "id": "addingDoor",
  "level": 2
}, {
  "value": "Edit doors",
  "id": "editingDoors",
  "level": 2
}, {
  "value": "Manage doors on mobile",
  "id": "managingDoorsOnMobile",
  "level": 2
}, {
  "value": "Add doors",
  "id": "add-doors",
  "level": 3
}, {
  "value": "Edit doors",
  "id": "edit-doors",
  "level": 3
}, {
  "value": "Generate door reports",
  "id": "generatingDoorReports",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {Cmd, IcAdd, IcAirEdit, IcAirFilter, IcAirGroup, IcAirRef, IcAirRemove, IcAirReport, IcAirSchedule, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirSchedule) _missingMdxReference("IcAirSchedule", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "The door management feature in BioStar Air guides administrators on assigning entry and exit devices, configuring relays, and arranging access points through schedules. Doors provide a system that controls access and tracks user movement for security, fire evacuation, and time and attendance management (T&A)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Watch the following video for a tutorial on registering and managing doors."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "g7fUC-9f0qM"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registeredDoors",
      children: "View registered doors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Doors are automatically created when you register a device. A door is created if you select the ", (0,jsx_runtime.jsx)(Cmd, {
        en: "Create a door with this device",
        children: "이 장치로 출입문 만들기"
      }), " option in the final step of device registration."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_submenu",
        product: "air"
      }), " in the left sidebar to view registered doors."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-registered-door-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The door list provides the following information."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column1",
            product: "air"
          }), ": The name of the door. This is usually assigned automatically during device registration, but administrators can change the door name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column2",
            product: "air"
          }), ": Device that authenticates users entering the door."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column3",
            product: "air"
          }), ": Device that authenticates users exiting the door."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column4",
            product: "air"
          }), ": Name of the group assigned to the door."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column5",
            product: "air"
          }), ": Description of the door's location."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), ": Shows the connected camera if the integrated CCTV feature is supported."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The door list offers a filtering option only for the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column4",
              product: "air"
            }), " column. Click ", (0,jsx_runtime.jsx)(IcAirFilter, {}), " and set the desired conditions."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on registering devices in the BioStar Air mobile app, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "register-device",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "doorManagementTools",
      children: "Door management tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When one or more doors are selected in the list, administrators can manage them using the following tools."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirEdit, {
            width: "24px",
            height: "24px"
          }), ": Edit door information or change the settings of assigned devices. This option is available only when one door is selected. For more information on details, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#editingDoors",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px"
          }), ": Update the status of the selected doors in the list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRemove, {
            width: "24px",
            height: "24px"
          }), ": Remove the selected doors from the site."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirSchedule, {
            width: "24px",
            height: "24px"
          }), ": Set a schedule for door open and lock states. For more information on details, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "managing-door-schedules",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px"
          }), ": Group the selected doors."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirReport, {
            width: "24px",
            height: "24px"
          }), ": Generate door reports."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingDoor",
      children: "Add doors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow these steps to add a new door."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.title",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.title",
            product: "air"
          }), " panel appears, enter ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.door_name",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column2",
            product: "air"
          }), " and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column3",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If a camera is installed, assign ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save and add the door settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rules for assigning devices to doors"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Each device can be assigned to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "one door"
            }), " only."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If a device is already registered but does not appear in the available device list, check whether it is assigned to another door. If it is assigned to another door, remove it from that door and try again."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editingDoors",
      children: "Edit doors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow these steps to edit door details and settings."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the door you want to edit in the list. Or select the checkbox to the left of the door and click ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " in the top left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_door.title",
            product: "air"
          }), " panel appears, edit ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.door_name",
            product: "air"
          }), " and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column5",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the device for door entry authentication from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_entry_and_exit",
            product: "air"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column2",
                product: "air"
              }), ": Select the device that authenticates users entering the door."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column3",
                product: "air"
              }), ": Select the device that authenticates users exiting the door."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column6",
                product: "air"
              }), ": Connect a CCTV camera for event logs if the integrated CCTV feature is supported."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure the relay device in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_auxiliary_device",
            product: "air"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.door_relay",
                product: "air"
              }), ": Select the relay device that controls the door lock."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.relay_ignoring_door_sensor",
                product: "air"
              }), ": Enable this option to resolve the issue."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure additional settings."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If installed, select the port to set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_exit_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select the port to set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_door_sensor",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Set how long the door remains open in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.open_time",
                product: "air"
              }), ". (Default: 3 seconds)"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to apply the changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["We recommend assigning a relay located inside the secure area as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column3",
              product: "air"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column2",
              product: "air"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column3",
              product: "air"
            }), " must be connected to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "separate networks"
            }), ". In a master–slave configuration, connection over Wiegand or RS-485 is not possible."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on configuring the SIO2 secure module, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "configuring-the-sio2-secure-module",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "managingDoorsOnMobile",
      children: "Manage doors on mobile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Administrators can manage doors directly in the BioStar Air mobile app."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open the BioStar Air app on your mobile device and log in."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the home screen, tap ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_tab_management",
            product: "air"
          }), " at the bottom."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_label",
            product: "air"
          }), " card."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "View all registered doors."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "add-doors",
      children: "Add doors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tap ", (0,jsx_runtime.jsx)(IcAdd, {}), " at the top right, and enter the required details to add a new door."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edit-doors",
      children: "Edit doors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tap a door in the list to edit its details or configure the following settings."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Assign entry and exit devices"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set relays"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure exit button and door sensor"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generatingDoorReports",
      children: "Generate door reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate door reports and send them to the administrator's email. A door report provides information about users who accessed through the door."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirReport, {}), " at the top of the door list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " window appears, enter a report name."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the items to include in the report."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " to save the report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), " is created and a download link is sent to the administrator's email."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-registered-door-report-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), ", search for, edit, download, or delete generated reports."]
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