"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5067"], {
31448: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_integration_quickstart_mdx_19b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-integration-quickstart-mdx-19b.json
var site_docs_platform_biostar_air_integration_quickstart_mdx_19b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/integration-quickstart","title":"Integration Quickstart","description":"Learn how to set up a BioStar Air demo site, register compatible readers, generate API keys, and start testing integrations with cloud APIs.","source":"@site/docs/platform/biostar_air/integration-quickstart.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/integration-quickstart","permalink":"/docs/platform/biostar_air/integration-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/integration-quickstart.mdx","tags":[],"version":"current","frontMatter":{"id":"integration-quickstart","title":"Integration Quickstart","description":"Learn how to set up a BioStar Air demo site, register compatible readers, generate API keys, and start testing integrations with cloud APIs.","keywords":["integration","quickstart","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Federated Sites","permalink":"/docs/platform/biostar_air/federated-sites"},"next":{"title":"E200 QR Scanner - Wiring and Configuration","permalink":"/docs/platform/biostar_air/wiring-and-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/integration-quickstart.mdx


const frontMatter = {
	id: 'integration-quickstart',
	title: 'Integration Quickstart',
	description: 'Learn how to set up a BioStar Air demo site, register compatible readers, generate API keys, and start testing integrations with cloud APIs.',
	keywords: [
		'integration',
		'quickstart',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = 'Getting Started with API Integrations';

const assets = {

};



const toc = [{
  "value": "Getting Started",
  "id": "getting-started",
  "level": 2
}, {
  "value": "Pre-Requisites",
  "id": "pre-requisites",
  "level": 3
}, {
  "value": "Step 1: Set Up Your Demo Environment &amp; API Key",
  "id": "step-1-demo-setup",
  "level": 2
}, {
  "value": "Sign Up and Log In",
  "id": "sign-up-and-log-in",
  "level": 3
}, {
  "value": "Create a Demo Application",
  "id": "create-a-demo-application",
  "level": 3
}, {
  "value": "Issue an API Key",
  "id": "issue-an-api-key",
  "level": 3
}, {
  "value": "Log Into the Demo Portal",
  "id": "log-into-the-demo-portal",
  "level": 3
}, {
  "value": "Step 2: Register the Reader",
  "id": "register-the-reader",
  "level": 2
}, {
  "value": "Step 3: Manage the Reader",
  "id": "step-3-manage-the-reader",
  "level": 2
}, {
  "value": "API Base URLs",
  "id": "api-base-urls",
  "level": 2
}, {
  "value": "Recommended Integration Scope",
  "id": "recommended-integration-scope",
  "level": 2
}, {
  "value": "Optional: API Login Flow (Postman or Programmatic)",
  "id": "optional-api-login-flow",
  "level": 2
}, {
  "value": "Login",
  "id": "login",
  "level": 3
}, {
  "value": "Get Self Accounts",
  "id": "get-self-accounts",
  "level": 3
}, {
  "value": "Login to an Account",
  "id": "login-to-account",
  "level": 3
}, {
  "value": "How to Get Your Bearer Token (Browser Method)",
  "id": "how-to-get-your-bearer-token",
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
  "value": "User Management API Calls",
  "id": "user-management-api-calls",
  "level": 2
}, {
  "value": "Demo vs Production",
  "id": "demo-vs-production",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Need Help?",
  "id": "need-help",
  "level": 2
}, {
  "value": "Sample Application",
  "id": "sample-application",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Kbd, Step, Steps} = _components;
  if (!Kbd) _missingMdxReference("Kbd", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "getting-started-with-api-integrations",
        children: "Getting Started with API Integrations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide walks you through how to set up a BioStar Air demo site, connect and register a BioStar Air-compatible readers to it, and begin testing your integration using our cloud APIs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you’ve previously worked with BioStar 2, many concepts will feel familiar—but BioStar Air is fully cloud-native."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-requisites",
      children: "Pre-Requisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensure the following:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You have a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air compatible device"
          }), "with factory-loaded firmware:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-AIR, XS2-AIR, BEW3-AIR, BS3-AIR, BLN2-AIR"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Devices may be purchased through authorized Suprema dealers"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The device is connected to the internet via Ethernet."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Your network allows outbound access on:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Port 443 (HTTPS)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Port 5671 (MQTT over TLS)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-1-demo-setup",
      children: "Step 1: Set Up Your Demo Environment & API Key"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "sign-up-and-log-in",
          children: "Sign Up and Log In"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to: ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.biostarair.com/login",
                children: "https://developers.biostarair.com/login"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sign Up"
              }), ", fill out the form, and wait for approval."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Once approved, log in using your credentials."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "create-a-demo-application",
          children: "Create a Demo Application"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Navigate to ", (0,jsx_runtime.jsx)(_components.strong, {
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
              children: ["Choose ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Demo"
              }), " as the application type."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter a name for your application and click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Download"
              }), " to retrieve an Excel file containing your demo site login credentials (email and password)."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "issue-an-api-key",
          children: "Issue an API Key"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Under ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Application Management"
              }), " click into your registered application."]
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
          id: "log-into-the-demo-portal",
          children: "Log Into the Demo Portal"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Navigate to the ", (0,jsx_runtime.jsx)(_components.a, {
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
              children: "Enter the API Key you just created."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "register-the-reader",
      children: "Step 2: Register the Reader"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the Airfob Pro Demo App (Android only):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Download the app: ", (0,jsx_runtime.jsx)(_components.a, {
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
          children: "Bring your Android phone near the reader (BLE range), then:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "All Menu"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Devices"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "+"
              }), " (upper right corner)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Locate your device and tap ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The reader will chime, reboot, and appear under Registered Devices."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Readers can only be registered using the mobile app. Web registration is not supported. API-based registration requires a cryptographic certificate not provided to partners."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-3-manage-the-reader",
      children: "Step 3: Manage the Reader"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manage the device using either:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Pro Demo App"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: "Recommended Integration Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When possible limit your integration to:"
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
      children: "Allow administrators to use the existing BioStar Air web and mobile admin apps for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Access levels"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Schedules"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Door and reader settings"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Site settings"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "optional-api-login-flow",
      children: "Optional: API Login Flow (Postman or Programmatic)"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "login",
          children: "Login"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint:"
          }), " login"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Payload:"
          })
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\n  \"username\": \"your_email\",\n  \"password\": \"your_password\"\n}\n"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Returns a Bearer Token (JWT)."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "get-self-accounts",
          children: "Get Self Accounts"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint:"
          }), " getSelfAccounts"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization:"
          }), " Bearer Token"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Returns a list of accessible sites/accounts."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "login-to-account",
          children: "Login to an Account"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint:"
          }), " loginAccount"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization:"
          }), " Bearer Token"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Returns a site-specific token."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-get-your-bearer-token",
      children: "How to Get Your Bearer Token (Browser Method)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chrome-edge",
      children: "Chrome/Edge (Windows or Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Kbd, {
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
          children: "Reload the page."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Search for API calls. (e.g., groups, login)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click on the request."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Headers"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Look for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer ..."
          }), " in Request Headers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Right-click and copy the token."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safari",
      children: "Safari (Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enable ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Develop"
          }), " menu: Safari → Preferences → Advanced → Check ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Develop menu"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Open ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Develop"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Web Inspector"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reload the page."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Filter and inspect an API call."
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
      children: "User Management API Calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once logged in, use these endpoints to manage users:"
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
      children: "Always include the Bearer Token in the Authorization header."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "To activate a user, you must assign at least one credential type. (e.g., RF Card, Mobile, Linkpass)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-vs-production",
      children: "Demo vs Production"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo Sites"
          }), " are created via the Developer Portal for testing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Production Sites"
          }), " are created via the Partner Portal and require site ID, user email, and password. Production sites can only be created by authorized dealers or Suprema branch offices."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "User ID and Account ID are different — do not confuse them."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Store passwords securely if managing multiple sites."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Always use the most recent Bearer Token."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bearer Tokens copied from the browser can be reused in Postman."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "need-help",
      children: "Need Help?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open a ticket on the Suprema Technical Support Portal: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://support.supremainc.com",
        children: "https://support.supremainc.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sample-application",
      children: "Sample Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Need an example? The following is sample code for a Python app that lets you bulk suspend users by uploading a CSV file via the API."
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