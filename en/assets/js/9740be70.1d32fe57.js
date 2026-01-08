"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["56686"], {
22515: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_integration_quickstart_mdx_974_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-integration-quickstart-mdx-974.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_integration_quickstart_mdx_974_namespaceObject = JSON.parse('{"id":"platform/biostar_air/integration-quickstart","title":"API Integration","description":"Set up the BioStar Air demo site, register compatible readers, generate API keys, and test integration with the cloud API.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/integration-quickstart.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/integration-quickstart","permalink":"/docs/en/platform/biostar_air/integration-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/integration-quickstart.mdx","tags":[],"version":"current","frontMatter":{"id":"integration-quickstart","title":"API Integration","description":"Set up the BioStar Air demo site, register compatible readers, generate API keys, and test integration with the cloud API.","keywords":["API Integration","Quick start","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Federated Sites","permalink":"/docs/en/platform/biostar_air/federated-sites"},"next":{"title":"Fix Bulk User Addition Issues","permalink":"/docs/en/platform/biostar_air/troubleshooting-adding-users-in-bulk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/integration-quickstart.mdx


const frontMatter = {
	id: 'integration-quickstart',
	title: 'API Integration',
	description: 'Set up the BioStar Air demo site, register compatible readers, generate API keys, and test integration with the cloud API.',
	keywords: [
		'API Integration',
		'Quick start',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "pre-requisites",
  "level": 2
}, {
  "value": "Step 1: Set up the demo environment and API key",
  "id": "demo-setup",
  "level": 2
}, {
  "value": "Sign up and log in",
  "id": "sign-up-and-log-in",
  "level": 3
}, {
  "value": "Create a demo application",
  "id": "create-a-demo-application",
  "level": 3
}, {
  "value": "Generate an API key",
  "id": "generate-an-api-key",
  "level": 3
}, {
  "value": "Log in to the demo portal",
  "id": "log-in-to-the-demo-portal",
  "level": 3
}, {
  "value": "Step 2: Register devices",
  "id": "registerDevices",
  "level": 2
}, {
  "value": "Step 3: Manage devices",
  "id": "step-3-manage-devices",
  "level": 2
}, {
  "value": "API Base URLs",
  "id": "api-base-urls",
  "level": 2
}, {
  "value": "Recommended API integration scope",
  "id": "recommended-integration-scope",
  "level": 2
}, {
  "value": "Optional: API login flow",
  "id": "optional-api-login-flow",
  "level": 2
}, {
  "value": "Log in",
  "id": "login",
  "level": 3
}, {
  "value": "Get account information",
  "id": "get-self-accounts",
  "level": 3
}, {
  "value": "Log in to an account",
  "id": "login-to-account",
  "level": 3
}, {
  "value": "How to get a Bearer token from a web browser",
  "id": "getYourBearerToken",
  "level": 2
}, {
  "value": "Chrome/Edge (Windows or Mac)",
  "id": "chrome-edge",
  "level": 3
}, {
  "value": "Safari (Mac)",
  "id": "safari",
  "level": 3
}, {
  "value": "User management API calls",
  "id": "user-management-api-calls",
  "level": 2
}, {
  "value": "Demo vs production",
  "id": "demo-vs-production",
  "level": 2
}, {
  "value": "Need help?",
  "id": "need-help",
  "level": 2
}, {
  "value": "Sample application",
  "id": "sample-application",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
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
  }, {IcAdd, Image, Kbd, Step, Steps} = _components;
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This article explains how to set up the BioStar Air demo site, connect and register compatible BioStar Air readers, and test integration with the cloud API. If you have worked with BioStar 2 before, many concepts will feel familiar. However, BioStar Air is completely cloud-based."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-requisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before you start, check the following."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prepare a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air-compatible device"
          }), " with factory-initialized firmware."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-AIR, XS2-AIR, BEW3-AIR, BS3-AIR, BLN2-AIR"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Devices can be purchased through authorized Suprema distributors."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The device must be connected to the internet via Ethernet."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Allow outbound access on the network."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Port 443 (HTTPS)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Port 5671 (MQTT over TLS)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-setup",
      children: "Step 1: Set up the demo environment and API key"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "sign-up-and-log-in",
          children: "Sign up and log in"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.biostarair.com/login",
                children: "BioStar Air Developer"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sign Up"
              }), ", complete the form, and wait for approval."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "After approval, log in with your credentials."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "create-a-demo-application",
          children: "Create a demo application"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "API"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Management"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "+ Register"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Demo"
              }), " as the application type."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter an application name and click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Download"
              }), " to download the Excel file with the demo site login credentials (email and password)."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "generate-an-api-key",
          children: "Generate an API key"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Application Management"
              }), ", click the application you registered."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Scroll to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "API Management"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Add"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Enter a name and confirm. Save the generated key."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "log-in-to-the-demo-portal",
          children: "Log in to the demo portal"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://demo.airfobspace.com/login",
                children: "Demo Portal"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Log in with the email and password from the Excel file."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Enter the API key you just generated."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registerDevices",
      children: "Step 2: Register devices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the BioStar Air Demo App (Android only) on your mobile device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the following link to download the mobile app. ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://moca-public-file-share.s3.ap-northeast-2.amazonaws.com/DeviceRegistration.zip",
            children: "DeviceRegistration.zip"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Log in with the credentials from the Excel file."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Move your Android device near the reader (within BLE range)."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "All Menu"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Devices"
              }), ", tap the ", (0,jsx_runtime.jsx)(IcAdd, {}), " button in the upper right."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Search for the device and tap ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The device beeps, reboots, and appears in the registered device list."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Devices can only be registered through the mobile app. You cannot register devices from the web portal. API-based registration requires an encryption certificate that is not provided to partners."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3-manage-devices",
      children: "Step 3: Manage devices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manage devices from the demo app or the demo web portal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Demo App"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo Web Portal"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://demo.airfobspace.com/login",
            children: "https://demo.airfobspace.com/login"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-base-urls",
      children: "API Base URLs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Environment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base URL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Demo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://demo-afs-api.airfob.com/v1/",
              children: "https://demo-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production - Europe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://e-afs-api.airfob.com/v1/",
              children: "https://e-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production - Korea"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://a-afs-api.airfob.com/v1/",
              children: "https://a-afs-api.airfob.com/v1/"
            }), " (for all non-EU customers)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-integration-scope",
      children: "Recommended API integration scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Limit your API integration to the scope below whenever possible."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "User lifecycle management (create/update/delete)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Credential management (mobile, RF card, biometric)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Allow administrators to continue using the existing BioStar Air web and mobile management apps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Access level"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Schedules"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Door and device settings"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Site settings"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optional-api-login-flow",
      children: "Optional: API login flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Make API calls with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.postman.com/",
        children: "Postman"
      }), " or programmatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login",
      children: "Log in"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "login"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"username\": \"your_email\",\n  \"password\": \"your_password\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns a Bearer token (JWT)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-self-accounts",
      children: "Get account information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getSelfAccounts"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), ": Bearer Token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns a list of accessible sites and accounts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login-to-account",
      children: "Log in to an account"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "loginAccount"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), ": Bearer Token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns a site-specific token."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getYourBearerToken",
      children: "How to get a Bearer token from a web browser"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chrome-edge",
      children: "Chrome/Edge (Windows or Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the web browser, press ", (0,jsx_runtime.jsx)(Kbd, {
            children: "F12"
          }), " or ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Ctrl/Cmd + Shift + I"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refresh the page."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Search for API calls."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "groups"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "login"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the request in the list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Headers"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the request headers, find ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer ..."
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Right-click and copy the token."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-chrome-develope.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safari",
      children: "Safari (Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enable the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Develop"
          }), " menu. In Safari, go to Preferences → Advanced and check ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Develop menu"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Develop"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Web Inspector"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refresh the page."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Filter and inspect API calls."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Copy the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer"
          }), " token from the request headers."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-management-api-calls",
      children: "User management API calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After logging in, use the following endpoints to manage users."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "getUsers"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "createUser"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "updateUser"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "suspendUsers"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always include a Bearer token in the Authorization header."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "To activate a user, assign at least one credential type."
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "e.g., RF card, mobile, LinkPass"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-vs-production",
      children: "Demo vs production"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo"
          }), " site for testing is created through the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developers.biostarair.com/login",
            children: "Developer Portal"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Production"
          }), " site is created through the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com/",
            children: "Partner Portal"
          }), " and requires a site ID, user email, and password. Only authorized resellers or Suprema branches can create a production site."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "User IDs and account IDs are different. Do not confuse them."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If you manage multiple sites, store passwords securely."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Always use the latest Bearer token."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A Bearer token copied from the browser can be reused in Postman."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "need-help",
      children: "Need help?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open a ticket in the Suprema Technical Support Portal. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://support.supremainc.com",
        children: "https://support.supremainc.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sample-application",
      children: "Sample application"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following sample code is a Python app that uploads a CSV file via the API and bulk deactivates users."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        metastring: "title='Python'",
        children: "import requests\nimport csv\nimport getpass\nfrom pathlib import Path\n\ndef select_server():\n    servers = {\n        \"1\": (\"Demo\", \"https://demo-afs-api.airfob.com/v1\"),\n        \"2\": (\"Global\", \"https://a-afs-api.airfob.com/v1\"),\n        \"3\": (\"EU\", \"https://e-afs-api.airfob.com/v1\")\n    }\n\n    print(\"Please select a server:\")\n    for key, (name, _) in servers.items():\n        print(f\"{key}: {name}\")\n\n    choice = input(\"Enter server number: \").strip()\n    return servers.get(choice, (None, None))[1]\n\ndef login(base_url, username, password):\n    url = f\"{base_url}/login\"\n    payload = {\"username\": username, \"password\": password}\n    response = requests.post(url, json=payload)\n    response.raise_for_status()\n    data = response.json()\n    token = data.get(\"access_token\")\n    if not token:\n        raise ValueError(\"Login succeeded but no access_token returned.\")\n    print(\"✅ Login successful.\")\n    return token\n\ndef login_to_account(base_url, token, account_id):\n    url = f\"{base_url}/login/{account_id}\"\n    headers = {\"Authorization\": f\"Bearer {token}\"}\n    response = requests.post(url, headers=headers)\n    response.raise_for_status()\n    new_token = response.json().get(\"access_token\")\n    if new_token:\n        print(f\"✅ Switched to account ID: {account_id}\")\n        return new_token\n    return token\n\ndef get_accounts(base_url, token):\n    url = f\"{base_url}/accounts/self\"\n    headers = {\"Authorization\": f\"Bearer {token}\"}\n    response = requests.get(url, headers=headers)\n    response.raise_for_status()\n    accounts = response.json().get(\"accounts\", [])\n    return [{\"id\": acc[\"id\"], \"name\": acc[\"site\"][\"name\"]} for acc in accounts]\n\ndef suspend_users_from_csv(base_url, csv_path, token):\n    if not Path(csv_path).exists():\n        print(f\"❌ File not found: {csv_path}\")\n        return\n\n    headers = {\"Authorization\": f\"Bearer {token}\"}\n\n    with open(csv_path, newline='', encoding='utf-8-sig') as f:\n        reader = csv.DictReader(f)\n\n        # Normalize headers\n        reader.fieldnames = [field.strip().lower() for field in reader.fieldnames]\n        if 'email' not in reader.fieldnames:\n            print(\"❌ Missing required 'email' column in CSV.\")\n            return\n\n        for row in reader:\n            email = row.get(\"email\")\n            if not email:\n                print(\"⚠️ Skipping row with missing email.\")\n                continue\n\n            # Search user\n            search_url = f\"{base_url}/users/search\"\n            payload = {\"filters\": [{\"field\": \"email\", \"equals\": email}]}\n            search_resp = requests.post(search_url, headers=headers, json=payload)\n            if search_resp.status_code != 200:\n                print(f\"❌ Failed to search user {email}: {search_resp.text}\")\n                continue\n\n            users = search_resp.json().get(\"users\", [])\n            if not users:\n                print(f\"❌ No user found with email: {email}\")\n                continue\n\n            user_id = users[0][\"id\"]\n\n            # Suspend user\n            suspend_url = f\"{base_url}/users/suspend\"\n            suspend_payload = {\n                \"ids\": [user_id],\n                \"certify_by\": \"none\",\n                \"use_site_template\": True\n            }\n            suspend_resp = requests.post(suspend_url, headers=headers, json=suspend_payload)\n            if suspend_resp.status_code == 200:\n                print(f\"✅ Suspended user: {email}\")\n            else:\n                print(f\"❌ Failed to suspend user {email}: {suspend_resp.text}\")\n\ndef main():\n    base_url = select_server()\n    if not base_url:\n        print(\"❌ Invalid selection. Exiting.\")\n        return\n\n    print(\"\\n? BioStar Air Login\")\n    username = input(\"Email: \")\n    password = getpass.getpass(\"Password: \")\n\n    token = login(base_url, username, password)\n    accounts = get_accounts(base_url, token)\n\n    print(\"\\n? Available Sites:\")\n    for i, acc in enumerate(accounts):\n        print(f\"{i}: {acc['name']} (ID: {acc['id']})\")\n\n    selected = int(input(\"\\nSelect site number to log into: \"))\n    account_id = accounts[selected][\"id\"]\n    token = login_to_account(base_url, token, account_id)\n\n    csv_path = input(\"Enter path to CSV file with user emails: \").strip()\n    suspend_users_from_csv(base_url, csv_path, token)\n\nif __name__ == \"__main__\":\n    main()\n"
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