"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3771"], {
7186: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_migration_face_mdx_d69_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-migration-face-mdx-d69.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_migration_face_mdx_d69_namespaceObject = JSON.parse('{"id":"platform/biostar_x/migration-face","title":"Face Migration","description":"You can upgrade the faces enrolled in the previous version of BioStar X to enhance recognition performance using the latest algorithm.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/migration-face.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/migration-face","permalink":"/docs/en/platform/biostar_x/migration-face","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/migration-face.mdx","tags":[],"version":"current","frontMatter":{"id":"migration-face","title":"Face Migration","description":"You can upgrade the faces enrolled in the previous version of BioStar X to enhance recognition performance using the latest algorithm.","keywords":["Face","Migration","Facial recognition"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Login in with Multi-Factor Authentication","permalink":"/docs/en/platform/biostar_x/login-with-mfa"},"next":{"title":"Column Layout","permalink":"/docs/en/platform/biostar_x/columnlayout"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/migration-face.mdx


const frontMatter = {
	id: 'migration-face',
	title: 'Face Migration',
	description: 'You can upgrade the faces enrolled in the previous version of BioStar X to enhance recognition performance using the latest algorithm.',
	keywords: [
		'Face',
		'Migration',
		'Facial recognition'
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
  "value": "Supported device and firmware version",
  "id": "supported-device-and-firmware-version",
  "level": 3
}, {
  "value": "Notes on Face Template Types",
  "id": "notes-on-face-template-types",
  "level": 3
}, {
  "value": "Device Related Notices",
  "id": "device-related-notices",
  "level": 3
}, {
  "value": "How to face migration",
  "id": "how-to-face-migration",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Details, IcMoreW} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can upgrade the faces enrolled in the previous version of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " to enhance recognition performance using the latest algorithm. The synchronization protocol has been improved to only transmit templates, excluding the actual images during user synchronization. Additionally, this helps significantly reduce synchronization time and prevent privacy-related issues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before running the face migration feature, please check the following items."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "What is face migration?"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It is a feature that generates two types of face templates from user images already stored on the BioStar X server. To synchronize faces as templates only during user synchronization, ", (0,jsx_runtime.jsx)(Cmd, {
          children: "Face Migration"
        }), " must be performed."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supported-device-and-firmware-version",
      children: "Supported device and firmware version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Please refer to the list below for the devices that can synchronize the face with the template."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FaceStation F2 firmware v2.2.0 or later"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3 firmware v1.3.1 or later"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioEntry W3 firmware v1.0.0 or later"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Notice on FaceStation F2 v1.x.x Firmware Support Discontinuation"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you are using firmware version 1.x.x of FaceStation F2, you cannot use the facial migration feature of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". Upgrade the FaceStation F2 to the latest firmware. The latest firmware can be downloaded from the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com/",
          children: "Suprema Download Center"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notes-on-face-template-types",
      children: "Notes on Face Template Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Differences in face template types for FaceStation F2, BioStation 3, and BioEntry W3."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NPU Type"
          }), ": BioStation 3, BioEntry W3"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GPU Type"
          }), ": FaceStation F2"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Synchronization Time Between Devices with Different Face Template Types"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Before performing ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Face Migration"
            }), ", if BioStation 3 or BioEntry W3 is added to an environment using only FaceStation F2, synchronization will require extracting NPU-type templates from actual images due to differing template types. This process may take a significant amount of time, depending on the number of faces enrolled on the server."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Face Enrollment Recommendations in BioStar X"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When enrolling faces without using the option to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Store Face Image"
            }), " on the device, only the template is synchronized with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ". As a result, it cannot be synchronized to devices with different face template types. Therefore, it is recommended to enroll faces through ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-related-notices",
      children: "Device Related Notices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The user data file exported from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " contains only templates without images, so the user data file cannot be imported into FaceStation F2 and BioStation 3 that are using existing firmware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When data file export from FaceStation F2 and BioStation 3, the data files can only be exported using firmware versions above the following:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FaceStation F2 firmware v2.2.0 or later"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3 firmware v1.3.1 or later"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["When using FaceStation F2 or BioStation 3, it is recommended to upgrade to the latest firmware version. The latest firmware can be downloaded from the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com/",
          children: "Suprema Download Center"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-face-migration",
      children: "How to face migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button at the top right of the screen and click the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Face Migration"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After checking the warning pop-up message, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Proceeding with face migration. When face migration is complete, a result pop-up will appear. It will show the total number of faces enrolled, as well as the number of faces that were successfully migrated and those that failed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After a successful migration, please sync the user information to the device to apply the changes. For more information on how to send user information to the device, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "transfer-user-info-to-device",
            children: "following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If face migration fails, you can download a list of failed users as a CSV file. To delete all faces that failed migration, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Only the admin account with user ID ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            }), " can use this feature."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Do not navigate away from the current page while the migration is in progress."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The larger the size of the enrolled face images for each user, the longer it may take to generate the templates."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "For approximately 1,000 faces, the process takes about 18 minutes, although this may vary depending on server performance."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on how to save only the template without saving the user's facial image to the server, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "following"
            }), "."]
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