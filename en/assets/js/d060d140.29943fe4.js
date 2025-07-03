"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["117"], {
7150: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_preferences_mdx_d06_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-preferences-mdx-d06.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_preferences_mdx_d06_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-preferences","title":"Preferences","description":"You can change language/time zone, date/time format, and upload a sound file to be used as an alert.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-preferences.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-preferences","permalink":"/docs/en/platform/biostar_x/settings-preferences","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-preferences.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-preferences","title":"Preferences","description":"You can change language/time zone, date/time format, and upload a sound file to be used as an alert.","keywords":["Initial Settings"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Daylight Saving Time","permalink":"/docs/en/platform/biostar_x/settings-system-daylight-saving-time"},"next":{"title":"고급 설정","permalink":"/docs/en/platform/biostar_x/how-to-guide-advanced-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-preferences.mdx


const frontMatter = {
	id: 'settings-preferences',
	title: 'Preferences',
	description: 'You can change language/time zone, date/time format, and upload a sound file to be used as an alert.',
	keywords: [
		'Initial Settings'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Language / Time zone",
  "id": "language--time-zone",
  "level": 2
}, {
  "value": "Date/Time",
  "id": "datetime",
  "level": 2
}, {
  "value": "Sound",
  "id": "sound",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Calloutlists, Cmd, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can change language/time zone, date/time format, and upload a sound file to be used as an alert."
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
          children: ["In the left sidebar, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.preference",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Edit the necessary fields."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "language--time-zone",
      children: "Language / Time zone"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can configure the BioStar X language and time zone settings."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-preference-language-timezone.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.language",
            product: "2"
          }), ": Select a language to use."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.timeZone",
            product: "2"
          }), ": Select a time zone to use."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dst",
            product: "2"
          }), ": Select the daylight saving time to apply to BioStar X server. If the desired item is not listed, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-system-daylight-saving-time",
            children: "following"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "datetime",
      children: "Date/Time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can configure the date and time format to use in BioStar X."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-preference-date-time.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dateFormat",
            product: "2"
          }), ": Changes the date format."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.timeFormat",
            product: "2"
          }), ": Changes the time format."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sound",
      children: "Sound"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can upload a sound file to use in BioStar X."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-preference-sound.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.plusAdd",
              product: "2"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-preference-add-sound.png",
            className: "none"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.preference.sound.alert.addSound.browse",
              product: "2"
            }), " to select a file."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Select .wav file or .mp3 file and then click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.add",
              product: "2"
            }), " to upload."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " to save the settings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Sound files must be .wav or .mp3 format."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A maximum file size is 10MB."
          }), "\n"]
        }), "\n"]
      })
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