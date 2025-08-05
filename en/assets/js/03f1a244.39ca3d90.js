"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5879"], {
75683: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_credential_mobile_access_card_frontMatter),
  "default": () => (/* binding */ settings_credential_mobile_access_card_MDXContent),
  toc: () => (/* binding */ settings_credential_mobile_access_card_toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_mobile_access_card_mdx_03f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_credential_mobile_access_card_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-mobile-access-card-mdx-03f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_mobile_access_card_mdx_03f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-mobile-access-card","title":"Manage Mobile Access Cards","description":"This guide describes how to manage mobile access cards for users in BioStar X by integrating Airfob Portal.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-mobile-access-card.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-mobile-access-card","permalink":"/docs/en/platform/biostar_x/settings-credential-mobile-access-card","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-mobile-access-card.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-mobile-access-card","title":"Manage Mobile Access Cards","description":"This guide describes how to manage mobile access cards for users in BioStar X by integrating Airfob Portal.","keywords":["Mobile","Access card","Settings"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set Smart Card Format","permalink":"/docs/en/platform/biostar_x/settings-credential-smart-format"},"next":{"title":"Card Printer","permalink":"/docs/en/platform/biostar_x/settings-card-printer"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_airfob-portal-site-type.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.admonition, {
    type: "note",
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can select the card type as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular"
      }), " depending on the site type."]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic"
          }), ": A type that deducts credits based on device and usage duration, allowing management actions such as revocation, suspension, reissuance, and expiration date designation even after the card is issued. This type is suitable for membership facilities like fitness clubs or study rooms, as well as co-working spaces."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Regular"
          }), ": A type that deducts credits based on the number of cards issued, available permanently until the administrator removes the cards in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". This type is suitable for companies or groups to use as employee IDs and access cards."]
        }), "\n"]
      }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-mobile-access-card.mdx


const settings_credential_mobile_access_card_frontMatter = {
	id: 'settings-credential-mobile-access-card',
	title: 'Manage Mobile Access Cards',
	description: 'This guide describes how to manage mobile access cards for users in BioStar X by integrating Airfob Portal.',
	keywords: [
		'Mobile',
		'Access card',
		'Settings'
	],
	isTranslationMissing: false
};
const settings_credential_mobile_access_card_contentTitle = undefined;

const assets = {

};




const settings_credential_mobile_access_card_toc = [{
  "value": "Sign up for Airfob Portal and create Site",
  "id": "airfob-portal-setup",
  "level": 2
}, ...toc, {
  "value": "Configure mobile access card in BioStar X",
  "id": "biostar-x-mobile-access-setup",
  "level": 2
}, {
  "value": "Setting options guide",
  "id": "setting",
  "level": 3
}, ...toc, {
  "value": "Register device",
  "id": "registerDevice",
  "level": 2
}, {
  "value": "Issue mobile access card",
  "id": "issueMobileAccessCard",
  "level": 2
}];
function settings_credential_mobile_access_card_createMdxContent(props) {
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
  }, {Cmd, Details, IcRefresh, IcTrash2, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcRefresh) _missingMdxReference("IcRefresh", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Integrate the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.airfob.com/",
        children: "Airfob Portal"
      }), " to issue or delete mobile access cards for users in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users can receive mobile access cards via a link sent to their email without signing up for the Airfob Portal or separately registering for mobile access cards."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Only one of the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN Mobile"
            }), " card or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), " can be used for mobile access cards."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Refer to the following for devices and firmware versions that support the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN Mobile"
            }), " card."]
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsxs)("summary", {
              children: ["View devices and firmware versions supporting the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "CSN Mobile"
              }), " card"]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "XPass 2 firmware version 1.1.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "XPass D2 (Rev 2) firmware version 1.4.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioLite N2 firmware version 1.3.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W2 (Rev 2) firmware version 1.6.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceStation 2 firmware version 1.4.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceStation F2 firmware 1.0.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2 firmware version 1.9.0 or higher (NFC supported model)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation A2 firmware version 1.8.0 or higher (NFC supported model)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceLite firmware version 1.2.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "X-Station 2 firmware 1.0.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 3 firmware 1.0.0 or higher"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W3 firmware version 1.0.0 or higher"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Refer to the following for devices and firmware versions that support ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 firmware version 1.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W3 firmware version 1.0.0 or higher"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set whether to use mobile access cards and manage settings related to Airfob Portal integration. You can also register devices that will use mobile access cards. After signing up for the Airfob Portal, you can manage mobile access cards in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "airfob-portal-setup",
          children: "Sign up for Airfob Portal and create Site"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Set up mobile access cards and registered devices in the Airfob Portal, and manage your site and credits."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Access the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://portal.airfob.com/",
                children: "Airfob Portal"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Get Started"
              }), " to proceed with membership registration and site creation."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter the Airfob Portal administrator's email address in the email input field, then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Get Started"
              }), ". A verification code will be sent to the entered email address."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter the verification code received via email into the verification code input field, then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Confirm"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "The verification code is a 6-digit number."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Review the privacy policy and terms, then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Agree"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Set a password and nickname for the Airfob Portal, then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Account"
              }), ". Account creation will be completed."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Once account creation is completed, click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sign In"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter your email and password, then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sign In"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Site"
              }), " to proceed with site creation."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Site"
                }), " refers to the organization or company using mobile access cards."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Set the site name and country, then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Next"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Select the site type."
            }), "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create"
              }), ". Site creation will be completed."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Click the site name to access the Airfob Portal for that site."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about using the Airfob Portal, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://airfob.zohodesk.com/portal/home",
              children: "following link"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "biostar-x-mobile-access-setup",
          children: "Configure mobile access card in BioStar X"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After signing up for the Airfob Portal, you can manage mobile access cards in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". To use Suprema mobile access cards, sign up for the Airfob Portal and create a site."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
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
              children: ["In the left sidebar, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.credential.root"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.credential.mobileAccess"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Edit the necessary fields."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Once all settings are completed, click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.close",
                product: "2"
              }), " button."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-mobile-access.png"
        }), (0,jsx_runtime.jsx)(_components.h3, {
          id: "setting",
          children: "Setting options guide"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.setting",
                product: "2"
              }), ": You can set whether to use mobile access cards. Set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), " to issue mobile access cards to users."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.siteType",
                product: "2"
              }), ": Check the type of site."]
            }), "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.mobileCredentialServerAddress",
                product: "2"
              }), ": Check the domain address of the Airfob Portal."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.mobileCredentialPort",
                product: "2"
              }), ": Check the port number of the Airfob Portal."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.siteId",
                product: "2"
              }), ": Enter the site ID created in the Airfob Portal. The site ID can be found in the Airfob Portal pathway ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Settings"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Site"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.email",
                product: "2"
              }), ": Enter the email address of the mobile access card administrator account."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.password",
                product: "2"
              }), ": Enter the password of the mobile access card administrator account."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To use mobile access cards in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ", complete the sign-up and initial setup of the Airfob Portal first. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#airfob-portal-setup",
              children: "following"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "registerDevice",
          children: "Register device"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can register devices that will use mobile access cards directly from the Airfob Pass application or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-mobile-access-connection.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once the settings for integration with the Airfob Portal are completed, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.mobileCredential.connect",
            product: "2"
          }), ". The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.mobileCredential.registerDeviceTable",
            product: "2"
          }), " option will be available."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To add a device that will use mobile access cards, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.addplus",
                product: "2"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-credentail-mobile-access-register-device.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the device list of the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.registerDeviceTable",
                product: "2"
              }), " window, click the checkbox for the device that will use the mobile access card."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-credentail-mobile-access-register-device-popup.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["After selecting all devices, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.add",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "You can verify the added devices in the device list."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To resend the mobile access card certificate, click ", (0,jsx_runtime.jsx)(IcRefresh, {}), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To delete a registered device, click ", (0,jsx_runtime.jsx)(IcTrash2, {}), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Refer to the following for devices and firmware versions that can use mobile access cards."
              }), "\n", (0,jsx_runtime.jsxs)(Details, {
                children: [(0,jsx_runtime.jsx)("summary", {
                  children: "View devices and firmware versions that can use mobile access cards"
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "XPass 2 firmware version 1.1.0 or higher"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "XPass D2 (Rev 2) firmware version 1.4.0 or higher"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioLite N2 firmware version 1.3.0 or higher"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioEntry W2 (Rev 2) firmware version 1.6.0 or higher"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "FaceStation 2 firmware version 1.4.0 or higher"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "FaceStation F2 firmware 1.0.0 or higher"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioStation 2 firmware version 1.9.0 or higher (NFC supported model)"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioStation A2 firmware version 1.8.0 or higher (NFC supported model)"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "FaceLite firmware version 1.2.0 or higher"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "X-Station 2 firmware 1.0.0 or higher"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioStation 3 firmware 1.0.0 or higher"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioEntry W3 firmware version 1.0.0 or higher"
                    }), "\n"]
                  }), "\n"]
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "You can also register devices using the Airfob Pass application."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Deleting a registered device will remove the mobile access card certificate sent to that device."
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "issueMobileAccessCard",
          children: "Issue mobile access card"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can issue mobile access cards to users registered in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". To issue a mobile access card to a user, essential user information based on the method of sending the mobile access card must be entered. For more information, refer to the following documents."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "add-user",
                children: "User Information Registration"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "enroll-credential#enroll-mobile",
                children: "Mobile Access Card Registration"
              })
            }), "\n"]
          }), "\n"]
        })]
      })]
    })]
  });
}
function settings_credential_mobile_access_card_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_credential_mobile_access_card_createMdxContent, {
      ...props
    })
  }) : settings_credential_mobile_access_card_createMdxContent(props);
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