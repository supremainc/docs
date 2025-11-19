"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["51575"], {
76356: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_04_1_troubleshooting_adding_users_in_bulk_mdx_fd6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-04-1-troubleshooting-adding-users-in-bulk-mdx-fd6.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_04_1_troubleshooting_adding_users_in_bulk_mdx_fd6_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-adding-users-in-bulk","title":"Troubleshooting Adding Users in Bulk","description":"Learn how to troubleshoot common issues when adding users in bulk using the BioStar Air Portal.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/04-1-troubleshooting-adding-users-in-bulk.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-adding-users-in-bulk","permalink":"/docs/en/platform/biostar_air/troubleshooting-adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/04-1-troubleshooting-adding-users-in-bulk.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting-adding-users-in-bulk","title":"Troubleshooting Adding Users in Bulk","description":"Learn how to troubleshoot common issues when adding users in bulk using the BioStar Air Portal.","keywords":["troubleshooting","bulk users","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"E200 QR Scanner - Wiring and Configuration","permalink":"/docs/en/platform/biostar_air/wiring-and-configuration"},"next":{"title":"v2.10","permalink":"/docs/en/platform/biostar_air/release-notes/v2_10"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/04-1-troubleshooting-adding-users-in-bulk.mdx


const frontMatter = {
	id: 'troubleshooting-adding-users-in-bulk',
	title: 'Troubleshooting Adding Users in Bulk',
	description: 'Learn how to troubleshoot common issues when adding users in bulk using the BioStar Air Portal.',
	keywords: [
		'troubleshooting',
		'bulk users',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Preparing Your CSV File",
  "id": "preparing-your-csv-file",
  "level": 2
}, {
  "value": "Use the Exact Format of the CSV Template",
  "id": "use-the-exact-format-of-the-csv-template",
  "level": 3
}, {
  "value": "User Key (User ID)",
  "id": "user-key-user-id",
  "level": 3
}, {
  "value": "Email Address",
  "id": "email-address",
  "level": 3
}, {
  "value": "Phone Number",
  "id": "phone-number",
  "level": 3
}, {
  "value": "Date Fields",
  "id": "date-fields",
  "level": 3
}, {
  "value": "Credential Requirements",
  "id": "credential-requirements",
  "level": 3
}, {
  "value": "Excel Formulas for Pre-Validation",
  "id": "excel-formulas",
  "level": 2
}, {
  "value": "Upload Errors? Here’s What to Check",
  "id": "common-errors",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Several customers and partners have reported issues when uploading user lists in bulk. Most problems stem from incorrectly formatted CSV files. Please follow the instructions below exactly to ensure your upload works as expected."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "From v2.10, BioStar Air returns a validation report if an admin uploads a CSV file with invalid entries. After correcting the errors, re-upload the file."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparing-your-csv-file",
      children: "Preparing Your CSV File"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "use-the-exact-format-of-the-csv-template",
          children: "Use the Exact Format of the CSV Template"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Download the template from the Admin Portal:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "User Management"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Users"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "+ Add User"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Import Users"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Download"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Do not add or delete columns manually"
              }), ". The system will reject the file if unexpected columns are present."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If you need to include additional fields like Employee ID or Department, go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User Template Settings"
              }), " and add these fields there. Once added, they will appear automatically in the downloaded CSV file."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "user-key-user-id",
          children: "User Key (User ID)"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "This is the unique numeric ID for each user."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["You may ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "leave this column blank"
              }), " and the system will assign values automatically."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "If you choose to populate it yourself:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["The value must be ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "numeric only"
                  })]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["The value must be ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "unique"
                  })]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Do not include letters, spaces, hyphens, or special characters"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Important"
            })
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you’re trying to insert a company-specific employee ID (which often contains letters), ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "do not use the User Key field"
            }), ". Instead, create a custom field for this purpose using ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Template Settings"
            }), "."]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "email-address",
          children: "Email Address"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Must follow a valid email format (see validation formula below)."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "No spaces"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Contains ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "@"
                  })]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Domain includes a ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "."
                  }), " and the top-level domain (example.com, gmail.com, suprema.co.kr)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "No extra periods after the address."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "No special or hidden characters"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Must be an email address. (We have seen instance of \"Did not provide\" or \"Not Provided\".)"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Must be ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "unique"
              }), " — no duplicates allowed within the file or among existing users."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Required if the user will be issued:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Mobile credential"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "LinkPass"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "QR code credential"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Not required if the user only has an RFID card."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "phone-number",
          children: "Phone Number"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Optional unless used for credential delivery via SMS."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Must be ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "unique"
              }), ", just like email addresses — no duplicates within the file or with existing users."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Email is preferred for credential delivery since SMS messages incur an additional charge."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "date-fields",
          children: "Date Fields"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "All date fields (such as Issue Date or Expiration Date) must follow this exact format:"
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-plaintext",
            children: "YYYY-MM-DDTHH:MM:SS.sssZ\n\nExample:\n1995-05-09T00:00:00.000Z\n"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Even small differences — such as a missing \"Z\", using slashes instead of dashes, or omitting the time — will cause the upload to fail."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "credential-requirements",
          children: "Credential Requirements"
        }), (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Credential Type"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Email or Phone Required?"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "RFID Only"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "No"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Mobile / LinkPass / QR"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Yes - one is required"
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Credentials must be delivered to either an email address or a phone number."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["You can provide both, but ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "at least one is required"
              }), " for mobile-type credentials."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Email is free. SMS is billed."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "excel-formulas",
      children: "Excel Formulas for Pre-Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We strongly recommend using the following formulas in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "helper columns"
      }), " to check your data before uploading."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Detect Duplicate Emails or Phone Numbers\"",
        children: "=IF(E2=\"\", \"\", IF(COUNTIF(E$2:E2, E2)>1, \"Duplicate\", \"First Occurrence\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate ISO 8601 Date Format (Column Q)\"",
        children: "=IF(Q2=\"\", \"\", IF(AND(LEN(Q2)=24, \n  ISNUMBER(VALUE(MID(Q2,1,4))), MID(Q2,5,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,6,2))), MID(Q2,8,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,9,2))), MID(Q2,11,1)=\"T\", \n  ISNUMBER(VALUE(MID(Q2,12,2))), MID(Q2,14,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,15,2))), MID(Q2,17,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,18,2))), MID(Q2,20,1)=\".\", \n  ISNUMBER(VALUE(MID(Q2,21,3))), RIGHT(Q2,1)=\"Z\"), \n  \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate Email Format (Column E)\"",
        children: "=IF(TRIM(E2)=\"\", \"\", IF(AND(\n  ISNUMBER(FIND(\"@\", E2)),\n  ISNUMBER(FIND(\".\", E2)),\n  FIND(\"@\", E2) > 1,\n  FIND(\".\", E2, FIND(\"@\", E2)) > FIND(\"@\", E2) + 1,\n  LEN(E2) - LEN(SUBSTITUTE(E2, \"@\", \"\")) = 1,\n  ISERROR(FIND(\" \", E2))\n), \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-errors",
      children: "Upload Errors? Here’s What to Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Did you download the correct template and avoid adding extra columns?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Are all required fields filled in for users receiving mobile credentials?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Are email addresses and phone numbers unique across both the file and your existing users?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Are date and email formats exactly as specified above?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Please note"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "We do not offer file correction services. If your file does not upload, use the validation tools above to identify and fix the issue."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "This guide is intended to help you complete the upload successfully without manual troubleshooting from our team."
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