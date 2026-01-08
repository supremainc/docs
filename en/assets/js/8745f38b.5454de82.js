"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["53731"], {
55296: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_adding_users_in_bulk_mdx_874_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-troubleshooting-adding-users-in-bulk-mdx-874.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_adding_users_in_bulk_mdx_874_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-adding-users-in-bulk","title":"Fix Bulk User Addition Issues","description":"Learn how to troubleshoot common issues when adding users in bulk with the BioStar Air portal.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-adding-users-in-bulk.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-adding-users-in-bulk","permalink":"/docs/en/platform/biostar_air/troubleshooting-adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/troubleshooting-adding-users-in-bulk.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting-adding-users-in-bulk","title":"Fix Bulk User Addition Issues","description":"Learn how to troubleshoot common issues when adding users in bulk with the BioStar Air portal.","keywords":["Troubleshooting","bulk users","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"API Integration","permalink":"/docs/en/platform/biostar_air/integration-quickstart"},"next":{"title":"Why Am I Being Asked to Enable Location Services?","permalink":"/docs/en/platform/biostar_air/location-services-issues"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-adding-users-in-bulk.mdx


const frontMatter = {
	id: 'troubleshooting-adding-users-in-bulk',
	title: 'Fix Bulk User Addition Issues',
	description: 'Learn how to troubleshoot common issues when adding users in bulk with the BioStar Air portal.',
	keywords: [
		'Troubleshooting',
		'bulk users',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Prepare the CSV file",
  "id": "prepare-the-csv-file",
  "level": 2
}, {
  "value": "Download the CSV template",
  "id": "download-the-csv-template",
  "level": 3
}, {
  "value": "Use the exact CSV template format",
  "id": "use-the-exact-csv-template-format",
  "level": 3
}, {
  "value": "Dates (<Cmd class=\"normal\"></Cmd> / <Cmd class=\"normal\"></Cmd>)",
  "id": "dates---",
  "level": 4
}, {
  "value": "Credential requirements",
  "id": "credential-requirements",
  "level": 4
}, {
  "value": "Excel formulas for pre-validation",
  "id": "excelFormulas",
  "level": 2
}, {
  "value": "Duplicate email or phone number validation",
  "id": "duplicate-email-or-phone-number-validation",
  "level": 3
}, {
  "value": "Date format validation",
  "id": "date-format-validation",
  "level": 3
}, {
  "value": "Email format validation",
  "id": "email-format-validation",
  "level": 3
}, {
  "value": "Encountering errors?",
  "id": "common-errors",
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
    h4: "h4",
    li: "li",
    ol: "ol",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Several customers and partners have reported issues when adding user lists in bulk. Most issues arise from incorrectly formatted CSV files. Follow the instructions below exactly to ensure the bulk addition feature works as expected."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Starting with v2.10, BioStar Air returns a validation report when a CSV file containing invalid entries is uploaded. Correct the errors, and then upload the file again."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-add-bulk-import-user-csv-error.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prepare-the-csv-file",
      children: "Prepare the CSV file"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "download-the-csv-template",
      children: "Download the CSV template"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(Cmd, {
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
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Save the CSV template file (", (0,jsx_runtime.jsx)(_components.em, {
            children: "biostar-import-user-csv-example.csv"
          }), ") locally."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-the-exact-csv-template-format",
      children: "Use the exact CSV template format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Do not manually add or delete columns"
          }), ". An unexpected column can cause an error."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_setting_templ_action",
            product: "air"
          }), " to add additional fields (e.g., employee ID or department). When a field is added, the downloaded CSV file automatically includes the corresponding column."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enter data correctly by referring to the requirements of each column."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header1",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A unique numeric ID for each user."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header1",
            product: "air",
            className: "bold"
          }), " column ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "can be left blank"
          }), ", and the system assigns a value automatically."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If you enter user IDs manually"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "numbers only"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Use a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "unique value"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Do not include letters, spaces, hyphens, or special characters."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you need to use a company-specific employee ID that includes letters, do not use the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header1",
          product: "air",
          className: "bold"
        }), " field. Instead, create a custom user field with the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_setting_templ_action",
          product: "air"
        }), " feature."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header7",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use a valid email format. Refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#excelFormulas",
            children: "validation formulas"
          }), " to verify the email format."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "No spaces are allowed."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["It must include the at sign (", (0,jsx_runtime.jsx)(_components.code, {
                children: "@"
              }), ")."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The domain must include a period (", (0,jsx_runtime.jsx)(_components.code, {
                children: "."
              }), ") and a top-level domain."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Example: example.com, gmail.com, suprema.co.kr"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "There must be no additional period after the address."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "No special or hidden characters are allowed."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "It must be an email address. Errors such as 'Not provided' may occur."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The email address ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "must be unique"
          }), ". Duplicates are not allowed within the file or among existing users."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "An email address is required when issuing the credentials below."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_mobile",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option4",
              product: "air"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Users with only an RFID card do not need to enter an email address."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header8",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Providing a phone number is optional when the credential is not delivered via mobile SMS."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Like the email address, it ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "must be unique"
          }), ", and duplicates are not allowed within the file or among existing users."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use email to deliver credentials when possible. SMS messages incur additional charges."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dates---",
      children: ["Dates (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header5",
        product: "air",
        className: "normal"
      }), " / ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header6",
        product: "air",
        className: "normal"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All date fields must follow the exact format shown below."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-plaintext",
        children: "YYYY-MM-DDTHH:MM:SS.sssZ\n\nExample:\n1995-05-09T00:00:00.000Z\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Even minor differences—such as omitting the 'Z', using slashes (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), ") instead of dashes (", (0,jsx_runtime.jsx)(_components.code, {
        children: "—"
      }), "), or leaving out the time—can cause the upload to fail."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "credential-requirements",
      children: "Credential requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Credential type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Email or phone number"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_rf",
              product: "air"
            }), " Only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_mobile",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option4",
              product: "air"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, one is required."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Credentials must be delivered by email address or phone number."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Both can be provided, but ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "mobile credentials"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "require at least one"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Email is free. SMS is charged."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "excelFormulas",
      children: "Excel formulas for pre-validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before uploading data, use the following formulas in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "helper columns"
      }), " to verify the data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "duplicate-email-or-phone-number-validation",
      children: "Duplicate email or phone number validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Detect Duplicate Emails or Phone Numbers\"",
        children: "=IF(E2=\"\", \"\", IF(COUNTIF(E$2:E2, E2)>1, \"Duplicate\", \"First Occurrence\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "date-format-validation",
      children: "Date format validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate ISO 8601 Date Format (Column Q)\"",
        children: "=IF(Q2=\"\", \"\", IF(AND(LEN(Q2)=24, \n  ISNUMBER(VALUE(MID(Q2,1,4))), MID(Q2,5,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,6,2))), MID(Q2,8,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,9,2))), MID(Q2,11,1)=\"T\", \n  ISNUMBER(VALUE(MID(Q2,12,2))), MID(Q2,14,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,15,2))), MID(Q2,17,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,18,2))), MID(Q2,20,1)=\".\", \n  ISNUMBER(VALUE(MID(Q2,21,3))), RIGHT(Q2,1)=\"Z\"), \n  \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "email-format-validation",
      children: "Email format validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate Email Format (Column E)\"",
        children: "=IF(TRIM(E2)=\"\", \"\", IF(AND(\n  ISNUMBER(FIND(\"@\", E2)),\n  ISNUMBER(FIND(\".\", E2)),\n  FIND(\"@\", E2) > 1,\n  FIND(\".\", E2, FIND(\"@\", E2)) > FIND(\"@\", E2) + 1,\n  LEN(E2) - LEN(SUBSTITUTE(E2, \"@\", \"\")) = 1,\n  ISERROR(FIND(\" \", E2))\n), \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-errors",
      children: "Encountering errors?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Did you download the correct template and not add additional columns?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Are all required fields completed for users receiving a mobile credential?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Are the email address and phone number unique between the file and existing users?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Are the date and email formats correct as specified above?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The service team does not provide file-editing services. If the file fails to upload, use the validation tools above to identify and resolve the issue."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This document is designed to enable successful uploads without manual troubleshooting by the service team."
          }), "\n"]
        }), "\n"]
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