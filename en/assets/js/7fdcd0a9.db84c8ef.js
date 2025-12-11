"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["90538"], {
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
14798: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_04_user_management_bulk_users_mdx_7fd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-04-user-management-bulk-users-mdx-7fd.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_04_user_management_bulk_users_mdx_7fd_namespaceObject = JSON.parse('{"id":"platform/biostar_air/adding-users-in-bulk","title":"Adding Users in Bulk","description":"Learn how to efficiently add multiple users at once using CSV file upload, configure bulk access levels, and manage profile images in BioStar Air Portal.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/04-user-management-bulk-users.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/adding-users-in-bulk","permalink":"/docs/en/platform/biostar_air/adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/04-user-management-bulk-users.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"adding-users-in-bulk","title":"Adding Users in Bulk","description":"Learn how to efficiently add multiple users at once using CSV file upload, configure bulk access levels, and manage profile images in BioStar Air Portal.","keywords":["user management","BioStar Air","bulk users"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Adding Individual Users","permalink":"/docs/en/platform/biostar_air/adding-individual-users"},"next":{"title":"Troubleshooting Adding Users in Bulk","permalink":"/docs/en/platform/biostar_air/troubleshooting-adding-users-in-bulk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/04-user-management-bulk-users.mdx


const frontMatter = {
	id: 'adding-users-in-bulk',
	title: 'Adding Users in Bulk',
	description: 'Learn how to efficiently add multiple users at once using CSV file upload, configure bulk access levels, and manage profile images in BioStar Air Portal.',
	keywords: [
		'user management',
		'BioStar Air',
		'bulk users'
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
  "value": "Navigating to Bulk User Upload",
  "id": "navigating-to-bulk-user-upload",
  "level": 2
}, {
  "value": "Preparing the CSV File",
  "id": "preparing-the-csv-file",
  "level": 2
}, {
  "value": "Custom Wiegand Format Support",
  "id": "custom-wiegand-format-support",
  "level": 3
}, {
  "value": "Multiple Card Support",
  "id": "multiple-card-support",
  "level": 3
}, {
  "value": "Uploading the CSV File",
  "id": "uploading-the-csv-file",
  "level": 2
}, {
  "value": "CSV Import Validation",
  "id": "csv-import-validation",
  "level": 3
}, {
  "value": "Uploading User Profile Images",
  "id": "uploading-user-profile-images",
  "level": 2
}, {
  "value": "Finalizing the Bulk Upload",
  "id": "finalizing-the-bulk-upload",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {DocLink, YouTube} = _components;
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "Feature Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air allows administrators to add multiple users at once using a CSV file. This is useful for onboarding employees, upgrading a site, or handling temporary access needs efficiently."
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "gOi2nP0Ag5o"
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-bulk-user-upload",
      children: "Navigating to Bulk User Upload"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To add multiple users in bulk:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Management"
          }), " in the BioStar Air Portal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Users"
          }), " to open the user list interface."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click on the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download CSV Template"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparing-the-csv-file",
      children: "Preparing the CSV File"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After downloading the CSV template, fill in the required details for each user. Key fields include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User Group ID"
          }), ": Retrieve this from the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Group"
          }), " screen in BioStar Air Portal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Level ID"
          }), ": Retrieve this from the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Levels"
          }), " screen. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Full access"
          }), " is always set as ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Email Address"
          }), ": Required if issuing invitations via email (must be unique)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mobile Phone Number"
          }), ": Required if issuing invitations via mobile (must be unique)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Email addresses and mobile phone numbers must not be duplicated. Duplicate values may result in upload errors."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-wiegand-format-support",
      children: "Custom Wiegand Format Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fully configurable Wiegand formats"
          }), ", including facility codes, segments, and parity bits."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports HID Corporate 1000, iClass SE, and SEOS formats."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV Upload Template"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Each defined format (custom or default) appears as a separate column."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Examples"
              }), ":"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["With facility code: ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "1234567-100-'Main Office Card'"
                  }), " (CardID-FacilityCode-'CardName')"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["With multiple segments: ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "12-3456-78-'Lab Entry Card'"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), " to separate multiple entries in a single field."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Single quotes ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'"
              }), " are allowed around the card name. Double quotes ", (0,jsx_runtime.jsx)(_components.code, {
                children: "\""
              }), " will cause an error and should be avoided."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "✅ 'CardName' | ❌ \"CardName\""
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiple-card-support",
      children: "Multiple Card Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Assign up to 8 cards per user (CSN or Wiegand)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CSV Upload Format:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Single card: Enter CSN."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Multiple cards: Separate CSNs with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Card naming format: ", (0,jsx_runtime.jsx)(_components.em, {
                children: "CSN-'Card Name'"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Example: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "1234567-'Main Entry'"
                }), " / ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "7654321-'Back Door'"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploading-the-csv-file",
      children: "Uploading the CSV File"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once the CSV file is ready:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Drag and drop the file into the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Upload CSV"
          }), " window."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the column data in the preview window to ensure accuracy."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Proceed with the upload if the data is correct."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-import-validation",
      children: "CSV Import Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Improved CSV upload process with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "line-by-line error feedback"
      }), " for easier troubleshooting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploading-user-profile-images",
      children: "Uploading User Profile Images"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Profile images can be uploaded automatically along with the CSV file. Follow these guidelines:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ensure that each image file name matches the user ID in the CSV file (e.g., ", (0,jsx_runtime.jsx)(_components.em, {
            children: "601.jpg"
          }), " corresponds to user ID ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "601"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select all images and drag them into the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bulk User Images"
          }), " upload area."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If images are not ready at the time of CSV upload, they can be added later using the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Image Upload"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File Format Requirements:"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Supported formats: ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".jpg"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".png"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["File size limit: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1MB per image"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "finalizing-the-bulk-upload",
      children: "Finalizing the Bulk Upload"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once all user data and images are uploaded, the system will process the entries, and the new users will appear in the user list with their assigned credentials."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you run into any issues with your CSV upload, we've written a more detailed guide to help you work through common problems. It also includes Excel formulas to help you validate and de-duplicate your data. ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/troubleshooting-adding-users-in-bulk"
      })]
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