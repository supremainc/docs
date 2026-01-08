"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["17565"], {
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
57285: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_users_in_bulk_mdx_192_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-adding-users-in-bulk-mdx-192.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_users_in_bulk_mdx_192_namespaceObject = JSON.parse('{"id":"platform/biostar_air/adding-users-in-bulk","title":"Add Users in Bulk","description":"Learn how to efficiently add multiple users at once by uploading a CSV file in BioStar Air Portal, configure bulk access levels, and manage profile images.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-users-in-bulk.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/adding-users-in-bulk","permalink":"/docs/en/platform/biostar_air/adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/adding-users-in-bulk.mdx","tags":[],"version":"current","frontMatter":{"id":"adding-users-in-bulk","title":"Add Users in Bulk","description":"Learn how to efficiently add multiple users at once by uploading a CSV file in BioStar Air Portal, configure bulk access levels, and manage profile images.","keywords":["User Management","BioStar Air","bulk users"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Manage Users","permalink":"/docs/en/platform/biostar_air/user-management-user-list"},"next":{"title":"Manage User Groups","permalink":"/docs/en/platform/biostar_air/managing-user-groups"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-users-in-bulk.mdx


const frontMatter = {
	id: 'adding-users-in-bulk',
	title: 'Add Users in Bulk',
	description: 'Learn how to efficiently add multiple users at once by uploading a CSV file in BioStar Air Portal, configure bulk access levels, and manage profile images.',
	keywords: [
		'User Management',
		'BioStar Air',
		'bulk users'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Download the CSV template",
  "id": "downloadCSVTemplate",
  "level": 2
}, {
  "value": "Prepare the CSV file",
  "id": "preparing-the-csv-file",
  "level": 2
}, {
  "value": "Key input fields",
  "id": "keyInputFields",
  "level": 3
}, {
  "value": "Support for custom Wiegand formats",
  "id": "support-for-custom-wiegand-formats",
  "level": 3
}, {
  "value": "Support for multiple cards",
  "id": "support-for-multiple-cards",
  "level": 3
}, {
  "value": "Upload the CSV file",
  "id": "uploading-the-csv-file",
  "level": 2
}, {
  "value": "Validate CSV import",
  "id": "validate-csv-import",
  "level": 3
}, {
  "value": "Upload user profile images",
  "id": "uploadProfileImages",
  "level": 2
}, {
  "value": "Finalize the bulk upload",
  "id": "finalizing-the-bulk-upload",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {Cmd, DocLink, IcAirUpface, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirUpface) _missingMdxReference("IcAirUpface", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "With BioStar Air, administrators can add multiple users at once using a CSV file. This feature is useful for efficiently handling employee onboarding, site upgrades, or temporary access requirements."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Refer to the following video for a step�by�step guide to adding multiple users in bulk."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "gOi2nP0Ag5o"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloadCSVTemplate",
      children: "Download the CSV template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow these steps to download the CSV template file."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_btn",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " panel appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_download_btn_text",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-download-csv-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Save the CSV template file (", (0,jsx_runtime.jsx)(_components.em, {
            children: "biostar-import-user-csv-example.csv"
          }), ") locally."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparing-the-csv-file",
      children: "Prepare the CSV file"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Download the CSV template and enter the required details for each user."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keyInputFields",
      children: "Key input fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key fields to enter are as follows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header11",
            product: "air",
            className: "bold"
          }), ": Check the group ID in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " \u001a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-list-check-ids.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header12",
            product: "air",
            className: "bold"
          }), ": Check the access level ID in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " \u001a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), ". ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "full_access",
            product: "air",
            className: "bold"
          }), " is always set to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1"
          }), ". Use commas (", (0,jsx_runtime.jsx)(_components.code, {
            children: ","
          }), ") as separators to specify multiple access levels."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-ac-level-list-check-ids.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header7",
            product: "air",
            className: "bold"
          }), ": Enter this if you plan to send invitations by email."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header8",
            product: "air",
            className: "bold"
          }), ": Enter this if you plan to send invitations by mobile SMS."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header7",
          product: "air",
          className: "bold"
        }), " and ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header8",
          product: "air",
          className: "bold"
        }), " must not be duplicated. Uploading a CSV file with duplicate values may cause errors."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "support-for-custom-wiegand-formats",
      children: "Support for custom Wiegand formats"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Freely configure ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "any Wiegand format"
          }), ", including facility codes, segments, parity bits, and more."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HID Corporate 1000 and iCLASS SE and Seos formats are supported."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV template"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Each defined format (custom or default) appears as a separate column in the CSV file."
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_1",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_2",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_3",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_4",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_5",
                  product: "air",
                  className: "bold"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Separate multiple entries in a single field with a slash (", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), ")."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Use single quotes (", (0,jsx_runtime.jsx)(_components.code, {
                children: "'"
              }), ") around the card name. Avoid using double quotes (", (0,jsx_runtime.jsx)(_components.code, {
                children: "\""
              }), "); they may cause errors."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "✅ 'CardName' | ❌ \"CardName\""
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["With a facility code: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "1234567-100-'Main Office Card'"
                }), " (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "CardID"
                }), "-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "FacilityCode"
                }), "-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "'CardName'"
                }), ")"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["With multiple segments: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "12-3456-78-'Lab Entry Card'"
                })]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "support-for-multiple-cards",
      children: "Support for multiple cards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Assign up to eight CSN or Wiegand card formats per user."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSV template"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "For a single card, enter the CSN card number."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Separate CSN card numbers with a slash (", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), ") when enrolling multiple cards."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Card naming format"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CSN"
        }), "-", (0,jsx_runtime.jsx)(_components.code, {
          children: "'Card Name'"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "1234567-'Main Entry'"
        }), " / ", (0,jsx_runtime.jsx)(_components.em, {
          children: "7654321-'Back Door'"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploading-the-csv-file",
      children: "Upload the CSV file"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After preparing the CSV file, upload it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_btn",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " panel appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_csv_text_select_file",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-select-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the CSV file you prepared."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the users' profile images are ready, enable the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "face_register_upload_face_photo",
              product: "air"
            }), " option. For more information on uploading profile images, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#uploadProfileImages",
              children: "the following"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_popup_import_users_btn_next",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_data_preview",
            product: "air"
          }), " section, review the accuracy of the data in the first column."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-csv-data-preview.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If there are no issues, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_btn",
            product: "air"
          }), " in the bottom right corner."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After the upload completes, you can import user images or issue mobile cards in bulk on the next screen. Select the desired action."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-csv-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Do not use special characters other than commas (", (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            }), ") in the CSV file name."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The maximum CSV file size is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5MB"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Alternatively, drag and drop the CSV file into the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_actions_import_upload_text",
              product: "air"
            }), " field of the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_actions_import_title",
              product: "air"
            }), " panel."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validate-csv-import",
      children: "Validate CSV import"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The CSV upload process now provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "row-level error feedback"
      }), ", making troubleshooting easier. If errors occur during upload, a detailed report is provided for review. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_actions_import_download_btn_text",
        product: "air"
      }), " to download the report."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-csv-error.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploadProfileImages",
      children: "Upload user profile images"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Profile images can be uploaded automatically with the CSV file or manually in bulk later."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-with-face-photo.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prepare profile image files that match the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header1",
            product: "air",
            className: "bold"
          }), " column in the CSV file."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For example, the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "601.jpg"
          }), " file corresponds to user ID ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "601"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After uploading the CSV file in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " panel, enable the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_face_photo",
            product: "air"
          }), " option."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_face_photo_select_folder",
            product: "air"
          }), ", then select the folder that contains the profile images."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "File format requirements"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Supported formats: ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".jpg"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".jpeg"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".png"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["File size limit: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1 MB"
            }), " per image"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["If profile images were not ready when the CSV file was uploaded, use ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "image_upload_action",
          product: "air"
        }), "(", (0,jsx_runtime.jsx)(IcAirUpface, {}), ") in the user list to add them later."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-add-bulk-import-user-profile-images.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "finalizing-the-bulk-upload",
      children: "Finalize the bulk upload"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After all user data and images are uploaded, the system processes the entries, and the new users appear in the list with their assigned credentials."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you encounter issues with CSV upload, refer to more detailed documentation that helps resolve common problems. The document also includes Excel formulas that help validate data and remove duplicates. ", (0,jsx_runtime.jsx)(DocLink, {
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