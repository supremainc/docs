"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["71400"], {
7650: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_2_a_authentication_mdx_fb6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-biostation-2-a-authentication-mdx-fb6.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_2_a_authentication_mdx_fb6_namespaceObject = JSON.parse('{"id":"device/biostation_2a/authentication","title":"Certifications","description":"Describes the supported authentication methods and authentication procedures.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/biostation_2a/authentication.mdx","sourceDirName":"device/biostation_2a","slug":"/device/biostation_2a/authentication","permalink":"/docs/en/device/biostation_2a/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_2a/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"Certifications","description":"Describes the supported authentication methods and authentication procedures.","keywords":["Authentication mode","Operation","PIN","Face","T&A (Time and Attendance)"],"isTranslationMissing":false},"sidebar":"biostation2a","previous":{"title":"User","permalink":"/docs/en/device/biostation_2a/user"},"next":{"title":"Settings","permalink":"/docs/en/device/biostation_2a/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/biostation_2a/authentication.mdx


const frontMatter = {
	id: 'authentication',
	title: 'Certifications',
	description: 'Describes the supported authentication methods and authentication procedures.',
	keywords: [
		'Authentication mode',
		'Operation',
		'PIN',
		'Face',
		'T&A (Time and Attendance)'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Authentication mode",
  "id": "authentication-mode",
  "level": 2
}, {
  "value": "Fingerprint authentication mode",
  "id": "fingerprint-authentication-mode",
  "level": 3
}, {
  "value": "Card Authentication Mode",
  "id": "card-authentication-mode",
  "level": 3
}, {
  "value": "ID Authentication Mode",
  "id": "id-authentication-mode",
  "level": 3
}, {
  "value": "Attendance Mode",
  "id": "attendance-mode",
  "level": 2
}, {
  "value": "Server matching",
  "id": "server-matching",
  "level": 2
}, {
  "value": "Fingerprint Settings",
  "id": "fingerprint-settings",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcBw, IcFw, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describes the supported authentication methods and authentication procedures."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authentication-mode",
      children: "Authentication mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the authentication mode. You can combine ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_312",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_040",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_322",
        product: "dev"
      }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_020",
        product: "dev"
      }), " for authentication mode, and you can also set schedules for each authentication mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fingerprint-authentication-mode",
      children: "Fingerprint authentication mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set schedules for each authentication method that uses fingerprints."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " and authenticate with the administrator credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_315",
            product: "dev"
          }), " and then press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-auth-authmode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired item and press ", (0,jsx_runtime.jsx)(IcFw, {}), "/", (0,jsx_runtime.jsx)(IcBw, {}), " to set the schedule."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that uses only fingerprints."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that authenticates using fingerprints followed by entering PIN."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " can be set in BioStar X. If no schedule is set, only ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_361",
              product: "dev"
            }), " can be selected."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-schedule",
              children: "the following"
            }), " BioStar X Administrator Manual."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "card-authentication-mode",
      children: "Card Authentication Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set schedules for each authentication method that uses cards."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " and authenticate with the administrator credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_326",
            product: "dev"
          }), " and then press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-auth-authmode1.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired item and press ", (0,jsx_runtime.jsx)(IcFw, {}), "/", (0,jsx_runtime.jsx)(IcBw, {}), " to set the schedule."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that uses only cards."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that authenticates using cards followed by fingerprints."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that authenticates using cards followed by entering PIN."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bs2a.png",
                ico: true,
                alone: true
              }), " / ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that authenticates using cards followed by either fingerprints or entering PIN."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that uses both fingerprint authentication and PIN entry after using a card."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " can be set in BioStar X. If no schedule is set, only ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_361",
              product: "dev"
            }), " can be selected."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-schedule",
              children: "the following"
            }), " BioStar X Administrator Manual."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "id-authentication-mode",
      children: "ID Authentication Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set schedules for each authentication method that uses IDs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " and authenticate with the administrator credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_023",
            product: "dev"
          }), " and then press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-auth-authmode2.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired item and press ", (0,jsx_runtime.jsx)(IcFw, {}), "/", (0,jsx_runtime.jsx)(IcBw, {}), " to set the schedule."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that authenticates using ID followed by fingerprints."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that authenticates using ID followed by entering PIN."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bs2a.png",
                ico: true,
                alone: true
              }), " / ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that authenticates using ID followed by either fingerprints or entering PIN."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bs2a.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs2a.png",
                ico: true,
                alone: true
              }), ": Mode that uses both ID authentication and PIN entry after using a fingerprint."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " can be set in BioStar X. If no schedule is set, only ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_361",
              product: "dev"
            }), " can be selected."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-schedule",
              children: "the following"
            }), " BioStar X Administrator Manual."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendance-mode",
      children: "Attendance Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set how to register T&A mode."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " and authenticate with the administrator credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_083",
            product: "dev"
          }), " and then press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-auth.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired item and press ", (0,jsx_runtime.jsx)(IcFw, {}), "/", (0,jsx_runtime.jsx)(IcBw, {}), " to change the settings."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083",
                product: "dev"
              }), ": Set how to use time and attendance mode."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_084",
                product: "dev"
              }), ": You can check attendance events."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_082",
                product: "dev"
              }), ": Require users to select a time and attendance event during authentication."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_279",
                product: "dev"
              }), ": Select whether to use job codes."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "server-matching",
      children: "Server matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set up server matching. When server matching is used, authentication is performed on BioStar X without authentication on the device. It can be used when the device has too much user information or when the device is installed outside."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " and authenticate with the administrator credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_190",
            product: "dev"
          }), " and then press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-server-matching.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(IcFw, {}), "/", (0,jsx_runtime.jsx)(IcBw, {}), " to change the settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can only use ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_190",
              product: "dev"
            }), " with ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_312",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_322",
              product: "dev"
            }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_020",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If using ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_190",
              product: "dev"
            }), ", you must enable server matching on both the device and BioStar X. For more information about BioStar X server matching settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-server-server#servermatching",
              children: "the following"
            }), " BioStar X Administrator Manual."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fingerprint-settings",
      children: "Fingerprint Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the settings for fingerprint authentication."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " and authenticate with the administrator credential."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_314",
            product: "dev"
          }), " and then press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-fingerprint.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired item and press ", (0,jsx_runtime.jsx)(IcFw, {}), "/", (0,jsx_runtime.jsx)(IcBw, {}), " to change the settings."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), ": You can set the security level for 1", ":N", " authentication."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_130",
                product: "dev"
              }), ": Set the wait time for fingerprint matching. If authentication is not completed within the set time, it fails."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_254",
                product: "dev"
              }), ": View the raw image when scanning a fingerprint."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_197",
                product: "dev"
              }), ": Set the fingerprint sensor sensitivity. Set the sensitivity higher to obtain precise fingerprint information."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_249",
                product: "dev"
              }), ": Set the fake fingerprint detection level. Higher levels for fake fingerprint detection may also increase rejection rates for actual people’s fingerprints."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_003",
                product: "dev"
              }), ": Set the fingerprint authentication performance. When you select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_275",
                product: "dev"
              }), ", authentication speed is set according to the total number of fingerprint templates enrolled in the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_342",
                product: "dev"
              }), ": Set the fingerprint template format. The default is ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_057",
                product: "dev"
              }), ". Changing the template format blocks the use of all previously stored fingerprints, so proceed with caution."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "Delete all user fingerprint information and then change the template format. If user fingerprint information is enrolled, you cannot change the template format."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_198",
                product: "dev"
              }), ": Set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_277",
                product: "dev"
              }), " to turn on the fingerprint sensor when it detects the user’s finger. Set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_362",
                product: "dev"
              }), " to keep the sensor always on, even when not scanning fingerprints."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_116",
                product: "dev"
              }), ": Inspect the quality of the scanned fingerprint to save high-quality fingerprint data. When enabled, the device notifies the user if the fingerprint quality is low, helping them scan correctly."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_118",
                product: "dev"
              }), ": Check for duplicate fingerprints during enrollment."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " to save the settings."]
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