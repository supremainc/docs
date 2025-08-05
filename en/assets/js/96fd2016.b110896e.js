"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6323"], {
29191: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_intrusion_alarm_mdx_96f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-advanced-ac-intrusion-alarm-mdx-96f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_intrusion_alarm_mdx_96f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-intrusion-alarm","title":"Intrusion Alarm Zone","description":"This guide describes how to set the intrusion alarm zone. The intrusion alarm zone provides a feature to lock doors or trigger alarms upon detecting an intrusion.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-intrusion-alarm","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-intrusion-alarm","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-intrusion-alarm","title":"Intrusion Alarm Zone","description":"This guide describes how to set the intrusion alarm zone. The intrusion alarm zone provides a feature to lock doors or trigger alarms upon detecting an intrusion.","keywords":["Advanced access control","Intrusion Alarm Zone"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Scheduled Unlock Zone","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-scheduled-unlock"},"next":{"title":"Interlock Zone","permalink":"/docs/en/platform/biostar_x/settings-advanced-ac-interlock"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx


const frontMatter = {
	id: 'settings-advanced-ac-intrusion-alarm',
	title: 'Intrusion Alarm Zone',
	description: 'This guide describes how to set the intrusion alarm zone. The intrusion alarm zone provides a feature to lock doors or trigger alarms upon detecting an intrusion.',
	keywords: [
		'Advanced access control',
		'Intrusion Alarm Zone'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Register Intrusion Alarm Zone",
  "id": "addIntrusionAlarmZone",
  "level": 2
}, {
  "value": "Setting options guide",
  "id": "setting",
  "level": 3
}, {
  "value": "Arming or disarming settings",
  "id": "armConfiguration",
  "level": 3
}, {
  "value": "Add arming/disarming by device",
  "id": "addArmInput",
  "level": 4
}, {
  "value": "Add arming/disarming by input signal",
  "id": "addArmInputBySignal",
  "level": 4
}, {
  "value": "Intrusion detection settings",
  "id": "intrusionSetting",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Glossary, IcEdit, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This guide describes how to set the intrusion alarm zone. The intrusion alarm zone provides a feature to lock doors or trigger alarms upon detecting an intrusion."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "intrusion_alarm_zone"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addIntrusionAlarmZone",
      children: "Register Intrusion Alarm Zone"
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
            sid: "setting.menu.advancedAc.root"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addZone",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion",
            product: "2"
          }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the name of the intrusion alarm zone to be added in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the details of the scheduled locking zone in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " section. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Add authentication settings for arming and disarming in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.armConfiguration",
            product: "2"
          }), " section. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#armConfiguration",
            children: "following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set up intrusion detection signals in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.intrusionSetting",
            product: "2"
          }), " section. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#intrusionSetting",
            children: "following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the actions to be performed when specific events occur in the intrusion alarm zone in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.alarm",
            product: "2"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After completing all settings, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " at the bottom of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.intrusion.armConfiguration",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.intrusion.intrusionSetting",
          product: "2"
        }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.alarm",
          product: "2"
        }), " sections are available only if the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.pause.doorselected",
          product: "2"
        }), " option is set in the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.setting",
          product: "2"
        }), " section."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting",
      children: "Setting options guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the general settings of the intrusion alarm zone."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the scope of the zone with ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone",
            product: "2"
          }), ". The intrusion alarm zone supports only ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone.local",
            product: "2"
          }), " mode, and zones can only be set up with the entrance device and devices connected via RS-485."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enable or temporarily deactivate zone settings with ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activated",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.deactivate",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the doors to be designated as the intrusion alarm zone with ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.doorselected",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "armConfiguration",
      children: "Arming or disarming settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can add authentication settings for arming and disarming."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the delay time until arming or disarming with ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.delayTime",
            product: "2"
          }), ". This means that the arming is the delay time after authentication until the alarm starts, and the disarming is the delay time before the alarm is triggered after an intrusion is detected."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Add cards authorized for arming or disarming with ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.accessCard",
            product: "2"
          }), ". You can register up to 128 arming/disarming cards."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select groups authorized for arming or disarming with ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.accessGroup",
            product: "2"
          }), ". You can register up to 128 arming/disarming groups."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the arming/disarming by the device or input signal with ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.armInput",
            product: "2"
          }), ". Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " button and configure each item."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "addArmInput",
      children: "Add arming/disarming by device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(IcEdit, {}), " of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armInput",
        product: "2"
      }), " option. Select the device that will control the intrusion alarm zone from the entrance/exit devices and choose ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armType",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType",
        product: "2"
      }), " can select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.card",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.key",
        product: "2"
      }), ", or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.cardOrKey",
        product: "2"
      }), ". Devices without an LCD screen can only use ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.card",
        product: "2"
      }), " for input type."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-add-device.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "addArmInputBySignal",
      children: "Add arming/disarming by input signal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(IcEdit, {}), " of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armInput",
        product: "2"
      }), " option. Select the device that will control the intrusion alarm zone. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.port",
        product: "2"
      }), " to choose the input port of the selected device."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After choosing ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armType",
        product: "2"
      }), ", set the type of switch and the duration of the signal."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-add-signal.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intrusionSetting",
      children: "Intrusion detection settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set up the intrusion detection signals. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " and set it as shown below to recognize an intrusion when an N/O sensor connected to input port 0 of the BioStation 3 device sends a signal for 100(ms)."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-detect-settings.png"
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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