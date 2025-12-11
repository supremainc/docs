"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["28657"], {
6663: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_elevators_add_mdx_cbc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-elevators-add-mdx-cbc.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_elevators_add_mdx_cbc_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-elevators-add","title":"Register Elevator","description":"This guide describes how to register an elevator for floor control.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-elevators-add.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-elevators-add","permalink":"/en/platform/biostar_x/settings-elevators-add","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-elevators-add.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-elevators-add","title":"Register Elevator","description":"This guide describes how to register an elevator for floor control.","keywords":["Elevator","Control floor"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Manage Elevator Group","permalink":"/en/platform/biostar_x/settings-manage-elevators-group"},"next":{"title":"Edit Elevator Information","permalink":"/en/platform/biostar_x/settings-elevators-edit-info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-elevators-add.mdx


const frontMatter = {
	id: 'settings-elevators-add',
	title: 'Register Elevator',
	description: 'This guide describes how to register an elevator for floor control.',
	keywords: [
		'Elevator',
		'Control floor'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Before start",
  "id": "before-start",
  "level": 2
}, {
  "value": "Register elevator",
  "id": "adding-elevator",
  "level": 2
}, {
  "value": "Set basic information",
  "id": "info",
  "level": 3
}, {
  "value": "Set detailed information",
  "id": "details",
  "level": 3
}, {
  "value": "Set additional options",
  "id": "option",
  "level": 3
}, {
  "value": "Set alarms",
  "id": "alarm",
  "level": 3
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides guidance on how to register and set up an elevator. The elevator is used for floor control and forms part of the access control system along with the entrance door. Registering the elevator allows control over access permissions for specific floors."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the access level, access group, and floor level for access control before registering the elevator. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Register the device before registering the elevator. For more information about device registration, refer to the following."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-devices"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-wiegand"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-slave-device"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-elevator",
      children: "Register elevator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.elevator.root"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.new.title",
            product: "2"
          }), " screen appears, set each section item in order."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.information",
                product: "2"
              }), ": Set the basic information for the elevator. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#info",
                children: "the following"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.detail",
                product: "2"
              }), ": Set the detailed information for the elevator. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#details",
                children: "the following"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.option",
                product: "2"
              }), ": Set additional options. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#option",
                children: "the following"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.alarm",
                product: "2"
              }), ": You can set the alarm to trigger or block device usage when an anti-passback violation occurs. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#alarm",
                children: "the following"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once all configurations are complete, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button at the bottom of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "info",
      children: "Set basic information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.information",
        product: "2"
      }), " section, you can enter or change the elevator's name, group, and description."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": Enter the elevator's name. It is convenient to enter a name that specifies the elevator's location for easier management."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group",
            product: "2"
          }), ": Select the elevator group."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), ": Enter a brief description of the elevator."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The elevator name can be up to 48 characters long."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about registering elevator groups, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-elevators-group",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "details",
      children: "Set detailed information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.detail",
        product: "2"
      }), " section, you can set the elevator's detailed information, such as devices connected to the elevator and floor information. Set the device and floor information to connect to the elevator."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.list.column.controller",
            product: "2"
          }), ": Select the device that will control access permissions for the elevator."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.list.column.reader",
            product: "2"
          }), ": Select the device to be used for authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.list.column.module",
            product: "2"
          }), ": Select the device that will control the elevator button relay."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.floor.totalFloor",
            product: "2"
          }), ": Enter the total number of floors the elevator can access. You can enter up to 192 floors."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.autoMapping",
            product: "2"
          }), ": Select whether to use automatic mapping. Automatic mapping assigns relay numbers sequentially."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.floor.setting.title",
            product: "2"
          }), ": Set the floor names and relay numbers that will control the floors."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Only master devices can be selected for the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "elevator.list.column.controller",
              product: "2"
            }), " option."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "elevator.list.column.reader",
              product: "2"
            }), " option, only master devices, slave devices, and Wiegand devices can be selected, with a maximum of 4 selections allowed."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The OM-120 model cannot be set as a reader."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "elevator.list.column.module",
              product: "2"
            }), " option, only the OM-120, DM-20, IM-120, and SIO2 models can be selected."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option",
      children: "Set additional options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.option",
        product: "2"
      }), " section, you can set the additional options for the elevator."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.option.relayTime",
            product: "2"
          }), ": Set options for the floor button relay."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.openTime",
              product: "2"
            }), ": Set the time for which the floor button remains active after authentication is complete. After this time, the relay will not signal the floor button."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.dualAuthentication",
            product: "2"
          }), ": You can set it so that two people (a general user and an administrator) must authenticate their credentials to activate the floor button."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), ": Select the device to use for dual authentication. To not use dual authentication, select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.none",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.schedule",
                product: "2"
              }), ": Select the schedule for using dual authentication. If the desired schedule is not available, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAddSchedule",
                product: "2"
              }), " to add one."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType",
                product: "2"
              }), ": Set the order of administrator authentication."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "door.dualAuthentication.approvalType.none",
                    product: "2"
                  }), ": Two authentications are required regardless of the authentication group."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "door.dualAuthentication.approvalType.last",
                    product: "2"
                  }), ": The general user must authenticate first, followed by an authenticated user included in the set authentication group."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.approvalGroup",
                product: "2"
              }), ": Set the group to which the administrator belongs. This option can be used when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType",
                product: "2"
              }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.last",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.authenticationTimeout",
                product: "2"
              }), ": Set the waiting time between the first and second authentications. If the second authentication is not completed within the set time, the floor button will not be activated."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Modify settings in the following menu to change the dual authentication of the device configured for occupancy limit settings. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shell.header.setting"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.menu.advancedAc.root"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "zone.occupancy.title",
                  product: "2"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information about ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "zone.occupancy.title",
                  product: "2"
                }), " settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-advanced-ac",
                  children: "the following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information about schedule settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-schedule",
                  children: "the following"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandTamper",
            product: "2"
          }), ": Set the port to output the tamper signal."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alarm",
      children: "Set alarms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.alarm",
        product: "2"
      }), " section, you can set actions to be performed when tamper inputs or separate input signals are detected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.trigger",
            product: "2"
          }), ": Set the detection of tamper inputs or separate input signals."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.action",
            product: "2"
          }), ": Set the actions to be performed based on the conditions set. You can activate all elevator floor buttons or output specific signals."]
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