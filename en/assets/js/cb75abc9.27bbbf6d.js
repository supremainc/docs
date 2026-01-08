"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["64058"], {
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
54243: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_card_templates_mdx_cb7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-card-templates-mdx-cb7.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_card_templates_mdx_cb7_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-card-templates","title":"Manage Card Templates","description":"Create, customize, and manage mobile card templates in BioStar Air using branding elements such as logos, colors, and user attributes.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-card-templates.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-card-templates","permalink":"/docs/en/platform/biostar_air/managing-card-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-card-templates.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-card-templates","title":"Manage Card Templates","description":"Create, customize, and manage mobile card templates in BioStar Air using branding elements such as logos, colors, and user attributes.","keywords":["card template","BioStar Air","User Management"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Manage User Groups","permalink":"/docs/en/platform/biostar_air/managing-user-groups"},"next":{"title":"Manage Users in Mobile App","permalink":"/docs/en/platform/biostar_air/managing-adding-users"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-card-templates.mdx


const frontMatter = {
	id: 'managing-card-templates',
	title: 'Manage Card Templates',
	description: 'Create, customize, and manage mobile card templates in BioStar Air using branding elements such as logos, colors, and user attributes.',
	keywords: [
		'card template',
		'BioStar Air',
		'User Management'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Use default card templates",
  "id": "usingDefaultCardTemplates",
  "level": 2
}, {
  "value": "Create a new card template",
  "id": "creatingNewCardTemplate",
  "level": 2
}, {
  "value": "Set the default card template",
  "id": "set-the-default-card-template",
  "level": 2
}, {
  "value": "Edit card templates",
  "id": "edit-card-templates",
  "level": 2
}, {
  "value": "Delete card templates",
  "id": "delete-card-templates",
  "level": 2
}, {
  "value": "Apply templates to all users",
  "id": "apply-templates-to-all-users",
  "level": 2
}, {
  "value": "Change a user&#39;s card template",
  "id": "applying-card-templates-to-users",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, IcAirDef, IcAirEdit, IcAirL, IcAirR, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcAirDef) _missingMdxReference("IcAirDef", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirL) _missingMdxReference("IcAirL", true);
  if (!IcAirR) _missingMdxReference("IcAirR", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "With card templates in BioStar Air, administrators design and customize mobile cards for users. The templates enhance branding by including corporate colors, logos, and personalized details. Card templates apply to mobile cards used in the Suprema Pass app."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-mobile-card-template-intro.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Refer to the following video to learn how to manage card templates."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "tFO1DvKo0po"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usingDefaultCardTemplates",
      children: "Use default card templates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every site in BioStar Air includes default templates. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_template_submenu",
        product: "air"
      }), " in the left sidebar."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-mobile-card-template.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "View the default templates. Administrators apply mobile card templates in one of the following three ways."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Apply the default card template to a user's mobile card"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Modify parameters of an existing template to apply a customized mobile card"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a new custom template and apply it instead of the existing template"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creatingNewCardTemplate",
      children: "Create a new card template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a new card template."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_new_card_template",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-new.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_templates_header",
            product: "air"
          }), " panel appears, set the card design and layout."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-new-card.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After applying the desired settings, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save the mobile card template."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cardStyles",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_styles_header",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_styles_1",
            product: "air"
          }), ": Set the background color of the mobile card."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_styles_2",
            product: "air"
          }), ": Upload a background image for the mobile card. Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "background_img_upload_btn",
            product: "air"
          }), ", and then select a background image file stored locally. When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "crop_image_header",
            product: "air"
          }), " window appears, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "fit_this_image",
            product: "air"
          }), " option or manually adjust the size. After completing the image adjustments, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-adjust-image.png",
          width: "50%"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cardProperties",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_properties",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select the attributes to include on the mobile card. Click the toggle switch to show the selected attributes in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_template_preview_header",
        product: "air"
      }), " on the right."]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--60",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-card-config.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l10",
        children: [(0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["After placing an attribute, click it in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_template_preview_header",
              product: "air"
            }), " to reveal handles for resizing, repositioning, and rotating."]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-card-config-setting.png",
          width: "20%"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Customize the font of each attribute. Click a placed attribute, and then use the font options at the top. Adjust the font size, style, alignment, and color."
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-card-config-font.png",
          width: "80%"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select dark mode or light mode in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "app_display_theme",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_reset_btn",
                product: "air"
              }), " to initialize the configured design."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["After completing all settings, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " to save the mobile card template."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "set-the-default-card-template",
      children: "Set the default card template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set a newly added mobile card template as the default."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox in the upper right corner of the desired template."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirDef, {}), " at the top left of the template list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-set-default.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the message window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_yes_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The default mobile card template is automatically applied when a new user is added."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Only one template can be set as default."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-card-templates",
      children: "Edit card templates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the template you want to edit in the template list. Alternatively, click the checkbox in the upper right of the template, and then click ", (0,jsx_runtime.jsx)(IcAirEdit, {}), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_templates_header",
            product: "air"
          }), " panel appears, modify the card design and layout."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save the changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the message window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_replace_btn",
            product: "air"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_save_new_btn",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-edit-confirm.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_replace_btn",
                product: "air"
              }), ": Save the changes to the existing template."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_save_new_btn",
                product: "air"
              }), ": Save the changes as a new template."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-card-templates",
      children: "Delete card templates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the template list, click the checkbox in the upper right of the template you want to delete. Select one or more templates."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirRemove, {}), " at the top left of the template list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the message window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), "Yes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Default templates cannot be deleted."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apply-templates-to-all-users",
      children: "Apply templates to all users"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the template list, click the checkbox in the upper right of the template you want to apply."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "update_all_users1",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-apply-all.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the message window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), "Yes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Applying the selected card template to all users replaces any template previously set."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Only one card template can be applied to all users."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applying-card-templates-to-users",
      children: "Change a user's card template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow these steps to change an individual user's card template."
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the user in the user list to apply a card template."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " in the top right of the user details."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-apply-user-edit.png",
          width: "70%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_edit_header",
            product: "air"
          }), " window appears, click ", (0,jsx_runtime.jsx)(IcAirL, {}), " or ", (0,jsx_runtime.jsx)(IcAirR, {}), " under Card Template in the right panel to select the desired card template."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-apply-user-details.png",
          width: "70%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to apply the changes."]
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