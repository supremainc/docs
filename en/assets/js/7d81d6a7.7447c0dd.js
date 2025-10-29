"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["602"], {
45292: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_https_mdx_7d8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-server-https-mdx-7d8.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_https_mdx_7d8_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-https","title":"Install HTTPS Certificate","description":"To connect BioStar X via HTTPS, you must register the IP address of the server where BioStar X is installed to install the certificate.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-https.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-https","permalink":"/docs/en/platform/biostar_x/settings-server-https","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-https.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-https","title":"Install HTTPS Certificate","description":"To connect BioStar X via HTTPS, you must register the IP address of the server where BioStar X is installed to install the certificate.","keywords":["HTTPS","Certificate"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Server Detailed Settings","permalink":"/docs/en/platform/biostar_x/settings-server-server"},"next":{"title":"Activate License","permalink":"/docs/en/platform/biostar_x/settings-license"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-https.mdx


const frontMatter = {
	id: 'settings-server-https',
	title: 'Install HTTPS Certificate',
	description: 'To connect BioStar X via HTTPS, you must register the IP address of the server where BioStar X is installed to install the certificate.',
	keywords: [
		'HTTPS',
		'Certificate'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "When certificate installation is required",
  "id": "when-certificate-installation-is-required",
  "level": 2
}, {
  "value": "Certificate installation",
  "id": "certificate-installation",
  "level": 2
}, {
  "value": "Certificate installation in server settings",
  "id": "certificate-installation-in-server-settings",
  "level": 2
}, {
  "value": "Certificate installation for VMS server",
  "id": "vms-certification",
  "level": 2
}, {
  "value": "Certificate installation on client PC",
  "id": "install-client-certification",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["To connect ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " via HTTPS, you must register the IP address of the server where ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " is installed to install the certificate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-certificate-installation-is-required",
      children: "When certificate installation is required"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you access ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " without the HTTPS certificate installed, a security warning like the following will appear in your web browser."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-not-secure.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These warnings appear because the browser cannot verify the identity of the server. Installing the certificate will make the browser trust the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server, allowing for a secure HTTPS connection without security warnings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "certificate-installation",
      children: "Certificate installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Install the certificate before using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " for correct network connectivity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Access the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " login page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auth.httpsDownload"
          }), " link at the bottom of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-login-down-https-cert.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Save the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), " file locally."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Extract the downloaded file and run the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.exe"
          }), " file. The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), " program runs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), ", enter the IP address of the PC where ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " is installed in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Address"
          }), ", and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-certification.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The default port number for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " is 443. If you changed the port number, enter the new port number in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the security warning message and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Yes"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Restart the web browser and enter the registered IP address to navigate to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " page. When you click the icon to the left of the address bar, the message ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "This connection is secure"
      }), " will appear."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-secure.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The IP address entered in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enroll Certificate"
        }), " must be the same as the IP address set in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". You can check it in the menu path ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.server.root"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.server.server"
        }), " under ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.biostarIPAdress",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "certificate-installation-in-server-settings",
      children: "Certificate installation in server settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
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
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), " in the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.certDownload",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-https.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Save the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), " file locally."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Unzip the downloaded file and run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), " file. The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), " program runs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), ", enter the IP address of the PC where ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " is installed in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Address"
          }), ", and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-certification.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The default port number for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " is 443. If you changed the port number, enter the new port number in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the security warning message and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Yes"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Restart the web browser and enter the registered IP address to navigate to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " page. When you click the icon to the left of the address bar, the message ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "This connection is secure"
      }), " will appear."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-secure.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-certification",
      children: "Certificate installation for VMS server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the following situations occur, you can install the certificate from the VMS server onto the client PC to resolve the issue."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When accessing ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Management System"
          }), " (VMS) through the browser, and a 'Not secure' warning appears"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When real-time video plays on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " page but recorded video does not play"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When installing the VMS server and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " on the same server"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-video-integration#install-vms-certification",
              children: "the following"
            }), " for how to install the certificate on the VMS server."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The function to integrate with the VMS server must be purchased separately in an additional options package. For more information about the license policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "install-client-certification",
      children: "Certificate installation on client PC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Download the HTTPS certificate installer (", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), ") from the login screen or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), " on the client PC where ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " is installed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Unzip the downloaded file and run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), " file. The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), " program runs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VMS"
          }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), " and enter the following information."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-vms-certification.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              }), ": IP address of the VMS server"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port"
              }), ": Port number of the VMS server"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the security warning message and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Yes"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Restart the web browser and check if the recorded video from the VMS server plays normally on the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " page."]
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