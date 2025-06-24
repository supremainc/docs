"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9418"], {
4301: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_diretory_integration_frontMatter),
  "default": () => (/* binding */ settings_diretory_integration_MDXContent),
  toc: () => (/* binding */ settings_diretory_integration_toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_diretory_integration_mdx_450_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_diretory_integration_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-diretory-integration-mdx-450.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_diretory_integration_mdx_450_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-diretory-integration","title":"Directory Integration Settings","description":"This document provides guidance on synchronizing and managing users by integrating Microsoft Entra ID or Active Directory with BioStar 2.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-diretory-integration.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-diretory-integration","permalink":"/docs/en/platform/biostar_x/settings-diretory-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-diretory-integration.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-diretory-integration","title":"Directory Integration Settings","description":"This document provides guidance on synchronizing and managing users by integrating Microsoft Entra ID or Active Directory with BioStar 2.","isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"모바일 출입 카드 관리하기","permalink":"/docs/en/platform/biostar_x/settings-credential-mobile-access-card"},"next":{"title":"카드 인쇄하기","permalink":"/docs/en/platform/biostar_x/settings-card-printer"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_usergroupfilter.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Head, IcSearch, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Head) _missingMdxReference("Head", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      level: 3,
      hashid: props.hashid,
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.userGroup",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After completing the settings in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.ADServerConfiguration",
        product: "2"
      }), " and clicking ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.Connect",
        product: "2"
      }), ", user group information from ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " will be retrieved in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.userGroup",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deselect any user groups that should not be synchronized with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar2-setting-directory-usergroup-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Refresh",
            product: "2"
          }), ": Click to refresh the user group information."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcSearch, {}), " icon to search for the desired user group."]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_usercustomfield.mdx


const _usercustomfield_frontMatter = (/* unused pure expression or super */ null && ({}));
const _usercustomfield_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _usercustomfield_toc = [];
function _usercustomfield_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Head, Image} = _components;
  if (!Cmd) _usercustomfield_missingMdxReference("Cmd", true);
  if (!Head) _usercustomfield_missingMdxReference("Head", true);
  if (!Image) _usercustomfield_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      level: 3,
      hashid: props.hashid,
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.FieldConfiguration",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can configure the ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " field to be mapped with the user field of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select the field of ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " to use as the user field of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar 2"
      }), " in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.FieldConfiguration",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: `/img/${props.img01}`
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Each user field of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar 2"
        }), " is set by default to map to the corresponding user information in ", (0,jsx_runtime.jsx)("strong", {
          children: props.name
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To select a field value other than the default, click the field in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: props.sid,
          product: "2"
        }), " and select the desired field value."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: `/img/${props.img02}`
      })]
    })]
  });
}
function _usercustomfield_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_usercustomfield_createMdxContent, {
      ...props
    })
  }) : _usercustomfield_createMdxContent(props);
}
function _usercustomfield_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_sync-with-integ.mdx


const _sync_with_integ_frontMatter = (/* unused pure expression or super */ null && ({}));
const _sync_with_integ_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _sync_with_integ_toc = [];
function _sync_with_integ_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Head, Image} = _components;
  if (!Cmd) _sync_with_integ_missingMdxReference("Cmd", true);
  if (!Head) _sync_with_integ_missingMdxReference("Head", true);
  if (!Image) _sync_with_integ_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      level: 3,
      hashid: props.hashid,
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.SyncDataFromADServer",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This feature allows you to synchronize user information changed in ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.SyncDataFromADServer",
            product: "2"
          }), ": You can select the desired synchronization method and set the synchronization interval."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.manual",
                product: "2"
              }), ": Each time you click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.SyncNow",
                product: "2"
              }), ", user information is retrieved and synchronized from ", (0,jsx_runtime.jsx)("strong", {
                children: props.name
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostar2-setting-directory-sync-manual.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.auto",
                product: "2"
              }), ": User information is retrieved and synchronized from ", (0,jsx_runtime.jsx)("strong", {
                children: props.name
              }), " at the interval set in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.autosyncInterval",
                product: "2"
              }), " item. The synchronization interval can be set in minutes. The minimum value is ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "30"
              }), " minutes, and the maximum value is ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "10,080"
              }), " minutes (7 days)."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostar2-setting-directory-sync-auto.png"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.lastSynchronized",
            product: "2"
          }), ": You can check the date and time of the most recent synchronization."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When you click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.SyncNow",
              product: "2"
            }), ", a warning message will appear. To continue, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.continue",
              product: "2"
            }), ". To cancel, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.cancel",
              product: "2"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostar2-setting-directory-sync-warn-message.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To exclude specific users from synchronization when using the integration feature, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#exclude-integration",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the synchronization method is set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.auto",
              product: "2"
            }), ", you can synchronize immediately by clicking ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.SyncNow",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function _sync_with_integ_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_sync_with_integ_createMdxContent, {
      ...props
    })
  }) : _sync_with_integ_createMdxContent(props);
}
function _sync_with_integ_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-diretory-integration.mdx


const settings_diretory_integration_frontMatter = {
	id: 'settings-diretory-integration',
	title: 'Directory Integration Settings',
	description: 'This document provides guidance on synchronizing and managing users by integrating Microsoft Entra ID or Active Directory with BioStar 2.',
	isTranslationMissing: false
};
const settings_diretory_integration_contentTitle = undefined;

const assets = {

};






const settings_diretory_integration_toc = [{
  "value": "Integrate with Entra ID",
  "id": "intergrate-with-entraid",
  "level": 2
}, ...toc, ..._usercustomfield_toc, ..._sync_with_integ_toc, {
  "value": "Integrate with Active Directory",
  "id": "integrate-with-active-directory",
  "level": 2
}, ...toc, ..._usercustomfield_toc, ..._sync_with_integ_toc, {
  "value": "Check the settings results",
  "id": "checksettings",
  "level": 2
}, {
  "value": "Exclude the directory integration",
  "id": "exclude-integration",
  "level": 2
}, {
  "value": "Disable the directory integration",
  "id": "disableIntegration",
  "level": 2
}];
function settings_diretory_integration_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcCopy2, Image, Step, Steps} = _components;
  if (!Cmd) settings_diretory_integration_missingMdxReference("Cmd", true);
  if (!IcCopy2) settings_diretory_integration_missingMdxReference("IcCopy2", true);
  if (!Image) settings_diretory_integration_missingMdxReference("Image", true);
  if (!Step) settings_diretory_integration_missingMdxReference("Step", true);
  if (!Steps) settings_diretory_integration_missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides guidance on how to synchronize and manage users by integrating ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Microsoft Entra ID"
      }), " (hereafter ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), ") or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), " with BioStar 2."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Integrating with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), " provides the following convenient features, enhancing both security and usability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can log in to BioStar 2 using your ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " account via Single Sign-On (SSO) provided by ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can log in to BioStar 2 using Lightweight Directory Access Protocol (LDAP) authentication provided by ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Users and groups configured in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " can be synchronized with BioStar 2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["User information such as title, department, and group used in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " can be mapped to custom fields in BioStar 2."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entra ID"
            }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Active Directory"
            }), " integration setting is available when the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advance"
            }), " license is activated."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entra ID"
            }), " integration setting is available in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar 2.9.9"
            }), " or later."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intergrate-with-entraid",
      children: "Integrate with Entra ID"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Log in to BioStar 2 with an administrator account."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.activeDirectory.menu",
            product: "2"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.AdServerNew",
            product: "2"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-setting-directory-integ-entraid.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set each item as instructed below."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "EntraidServer",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the server information for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Connect",
            product: "2"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          }), "."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-setting-directory-server.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ClientID",
                product: "2"
              }), ": Enter the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client ID"
              }), " of the application registered in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ClientSecret",
                product: "2"
              }), ": Enter the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client secret"
              }), " added in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Certificates & secrets"
              }), " of the application registered in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.PrimaryDomain",
                product: "2"
              }), ": Enter the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Directory (Tenant) ID"
              }), " of the application registered in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information on registering an application in ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), ", refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app",
                  children: "following link"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information on configuring ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Certificates & secrets"
                }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), ", refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://learn.microsoft.com/entra/identity-platform/how-to-add-credentials?tabs=client-secret",
                  children: "following link"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Tenant ID"
                }), " can be found in the ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), " of the registered application in ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(MDXContent, {
          hashid: "usergroupfilterEntraid",
          name: "Entra ID"
        })
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_usercustomfield_MDXContent, {
          hashid: "userfieldEntraid",
          name: "Entra ID",
          img01: "biostar2-setting-directory-userfield.png",
          img02: "biostar2-setting-directory-userfield-select-other.png",
          sid: "settings.activeDirectory.FieldNameEI"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.userId",
              product: "2"
            }), " field cannot be mapped when integrating with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entra ID"
            }), ". It is automatically generated and applied by BioStar 2."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "setssoEntraid",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleEI",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Change the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleEI",
            product: "2"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), " to enable login to  BioStar 2 using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID SSO"
          }), "."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-setting-directory-login-with-entraid.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Copy the redirection URI from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.RedirectionUri",
            product: "2"
          }), " field(", (0,jsx_runtime.jsx)(IcCopy2, {}), ") and paste it into the SSO redirection settings in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " portal. When a user successfully logs in with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), ", they will be redirected to this address."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information on registering an application in ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), " and adding a redirection URI, refer to the following links."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app",
                      children: "Register an application in Microsoft Entra ID"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "https://learn.microsoft.com/entra/identity-platform/how-to-add-redirect-uri",
                      children: "How to add a redirect URI to your application"
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["The redirection address can be found in the ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), " of the registered application in ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(_sync_with_integ_MDXContent, {
          hashid: "syncdatafromEntraid",
          name: "Entra ID"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["After completing all settings in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.activeDirectory.menu",
          product: "2"
        }), ", click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " at the bottom of the screen to save. Refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#checksettings",
          children: "following"
        }), " to check the results."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostar2-setting-directory-btn-apply.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integrate-with-active-directory",
      children: "Integrate with Active Directory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Log in to BioStar 2 with an administrator account."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.activeDirectory.menu",
            product: "2"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.AdServerOld",
            product: "2"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-setting-directory-integ-ad.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set each item as instructed below."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The Active Directory is available for a system environment with Windows Server 2008 R2 or\nlater."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To use the Active Directory server, set the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType",
              product: "2"
            }), " to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.alphanumeric",
              product: "2"
            }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.setting",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ADserver",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the server information for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Connect",
            product: "2"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          }), "."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-setting-directory-ad-server.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ServerAddress",
                product: "2"
              }), ": Enter the server address for Windows Active Directory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.UserName",
                product: "2"
              }), ": Enter the user name used by Windows Active Directory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.Password",
                product: "2"
              }), ": Enter the password used by Windows Active Directory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.DomainNode",
                product: "2"
              }), ": Enter the base domain name for Windows Active Directory. You can find the base domain name in the following steps:"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Run the ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Active Directory Administrative Center"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Right-click on the node where user data is stored, and then click ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Property"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "property"
                  }), " window, select ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Expand"
                  }), " and then click ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Attribute Editor"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["View the value of ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "distinguishedName"
                  }), "."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.secureTransfer",
                product: "2"
              }), ": You can use encryption when communicating with the Windows Active Directory server. To install the Active Directory Certificate Services and configure the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.keystorePassword",
                product: "2"
              }), ", refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "ad-encrypt",
                children: "following"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.keystorePassword",
                  product: "2"
                }), ": Enter the password for the encryption key store of the Windows Active Directory server. You can enter the password when the ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.secureTransfer",
                  product: "2"
                }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.info.enabled",
                  product: "2"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(MDXContent, {
          hashid: "usergroupfilterAD",
          name: "Active Directory"
        })
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(_usercustomfield_MDXContent, {
          hashid: "userfieldAD",
          name: "Active Directory",
          img01: "biostar2-setting-directory-userfield-ad.png",
          img02: "biostar2-setting-directory-userfield-select-other-ad.png",
          sid: "settings.activeDirectory.FieldNameAD"
        })
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "setssoAD",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleAD",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To configure login to BioStar 2 using the user ID of the Active Directory server, change the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleAD",
            product: "2"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), ". The value of the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sAMAccountName"
          }), " field from the Active Directory server will be mapped to the BioStar 2 login ID."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-setting-directory-login-with-ad.png"
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(_sync_with_integ_MDXContent, {
          hashid: "syncdatafromAd",
          name: "Active Directory"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["After completing all settings in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.activeDirectory.menu",
          product: "2"
        }), ", click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " at the bottom of the screen to save. Refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#checksettings",
          children: "following"
        }), " to check the results."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostar2-setting-directory-btn-apply.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checksettings",
      children: "Check the settings results"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After completing the integration settings with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), ", click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " at the bottom of the screen. Refer to the following to check the synchronized settings."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can check the synchronized user list in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), " menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After completing the login settings with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), ", you can see ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "login.entraidLoginBtn",
            product: "2"
          }), " when logging in to BioStar 2."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-setting-directory-entraid-login.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exclude-integration",
      children: "Exclude the directory integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When integrating with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), " through the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.activeDirectory.menu",
        product: "2"
      }), " feature, users that do not exist in the directory service may be deleted from BioStar 2. If there are users that you do not want to be deleted, you can exclude them from the integration using the following method."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Log in to BioStar 2 with an administrator account."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), " menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click on the user you want to exclude from the integration in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.user.allUserGroups",
            product: "2"
          }), " list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the detail information screen of the selected user appears, click the checkbox of ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.adsync.exclude",
            product: "2"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-user-advance-exclude-sync.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The selected user will be excluded from the integration when using the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.activeDirectory.menu",
        product: "2"
      }), " feature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disableIntegration",
      children: "Disable the directory integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To disable the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.title",
        product: "2"
      }), " feature, follow the steps:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Log in to BioStar 2 with an administrator account."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.activeDirectory.menu",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.notUse",
            product: "2"
          }), " in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-setting-directory-unset.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alert.warning",
            product: "2"
          }), " message appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.continue",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar2-setting-directory-unset-warn-message.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " at the bottom of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.activeDirectory.title",
          product: "2"
        }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.activeDirectory.notUse",
          product: "2"
        }), ", all integration settings with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Entra ID"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Directory"
        }), " in BioStar 2 will be removed. The integrated user and group information will not be deleted, but will no longer be synchronized. Please make sure to check before disabling the integration."]
      })
    })]
  });
}
function settings_diretory_integration_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_diretory_integration_createMdxContent, {
      ...props
    })
  }) : settings_diretory_integration_createMdxContent(props);
}
function settings_diretory_integration_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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