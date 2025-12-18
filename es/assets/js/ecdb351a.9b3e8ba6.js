"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["19796"], {
9557: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_diretory_integration_frontMatter),
  toc: () => (/* binding */ settings_diretory_integration_toc),
  "default": () => (/* binding */ settings_diretory_integration_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_diretory_integration_mdx_ecd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_diretory_integration_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-diretory-integration-mdx-ecd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_diretory_integration_mdx_ecd_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-diretory-integration","title":"Configuración de Integración de Directorios","description":"Este documento ofrece orientación para sincronizar y administrar usuarios al integrar Microsoft Entra ID o Active Directory con BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-diretory-integration.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-diretory-integration","permalink":"/docs/es/platform/biostar_x/settings-diretory-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-diretory-integration.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-diretory-integration","title":"Configuración de Integración de Directorios","description":"Este documento ofrece orientación para sincronizar y administrar usuarios al integrar Microsoft Entra ID o Active Directory con BioStar X.","isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar visitante","permalink":"/docs/es/platform/biostar_x/settings-visitor"},"next":{"title":"Configurar acceso remoto","permalink":"/docs/es/platform/biostar_x/settings-remote-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_usergroupfilter.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
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
      children: ["Después de completar la configuración en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.ADServerConfiguration",
        product: "2"
      }), " y hacer clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.Connect",
        product: "2"
      }), ", la información de los grupos de usuarios de ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " se recuperará en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.userGroup",
        product: "2"
      }), ". Desmarque los grupos de usuarios que no se sincronizarán con ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-directory-usergroup-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Refresh",
            product: "2"
          }), ": Haga clic para actualizar la información de grupos de usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el ícono ", (0,jsx_runtime.jsx)(IcSearch, {}), " para buscar el grupo de usuarios deseado."]
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_usercustomfield.mdx


const _usercustomfield_frontMatter = (/* unused pure expression or super */ null && ({}));
const _usercustomfield_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _usercustomfield_toc = [];
function _usercustomfield_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
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
      children: ["Configura el campo de ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " para asignarlo a los campos de usuario de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Selecciona el campo de ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " que se usará como campo de usuario de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.FieldConfiguration",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: `/img/${props.img01}`
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["De forma predeterminada, cada campo de usuario de ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " se asigna a los elementos que coinciden con la información de usuario de ", (0,jsx_runtime.jsx)("strong", {
          children: props.name
        }), ". Haz clic en el campo en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: props.sid,
          product: "2"
        }), " para seleccionar un valor de campo diferente al predeterminado."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: `/img/${props.img02}`
      })]
    })]
  });
}
function _usercustomfield_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_sync-with-integ.mdx


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
    ...(0,lib/* .useMDXComponents */.R)(),
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
      children: ["Sincroniza la información de los usuarios modificada en ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.SyncDataFromADServer",
            product: "2"
          }), ": Selecciona el método de sincronización deseado y establece el intervalo de sincronización."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.manual",
                product: "2"
              }), ": Cada vez que haces clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.SyncNow",
                product: "2"
              }), ", se obtiene y sincroniza la información de los usuarios desde ", (0,jsx_runtime.jsx)("strong", {
                children: props.name
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-setting-directory-sync-manual.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.auto",
                product: "2"
              }), ": La información de usuario se obtiene y sincroniza desde ", (0,jsx_runtime.jsx)("strong", {
                children: props.name
              }), " en el intervalo establecido en el elemento ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.autosyncInterval",
                product: "2"
              }), ". Establece el intervalo de sincronización en minutos. El valor mínimo es de ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "30"
              }), " minutos y el máximo es de ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "10,080"
              }), " minutos (7 días)."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-setting-directory-sync-auto.png"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.lastSynchronized",
            product: "2"
          }), ": Revisa la fecha y la hora de la sincronización más reciente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al hacer clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.SyncNow",
              product: "2"
            }), ", aparece un mensaje de advertencia. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.continue",
              product: "2"
            }), " para continuar. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.cancel",
              product: "2"
            }), " para cancelar."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-setting-directory-sync-warn-message.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#exclude-integration",
              children: "lo siguiente"
            }), " para excluir usuarios específicos de la sincronización cuando uses la función de integración."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando el método de sincronización está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.auto",
              product: "2"
            }), ", sincroniza de inmediato haciendo clic en ", (0,jsx_runtime.jsx)(Cmd, {
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
    ...(0,lib/* .useMDXComponents */.R)(),
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-diretory-integration.mdx


const settings_diretory_integration_frontMatter = {
	id: 'settings-diretory-integration',
	title: 'Configuración de Integración de Directorios',
	description: 'Este documento ofrece orientación para sincronizar y administrar usuarios al integrar Microsoft Entra ID o Active Directory con BioStar X.',
	isTranslationMissing: false
};
const settings_diretory_integration_contentTitle = undefined;

const assets = {

};






const settings_diretory_integration_toc = [{
  "value": "Integra con Entra ID",
  "id": "intergratewithentraid",
  "level": 2
}, ...toc, ..._usercustomfield_toc, ..._sync_with_integ_toc, {
  "value": "Integra con Active Directory",
  "id": "integratewithactivedirectory",
  "level": 2
}, ...toc, ..._usercustomfield_toc, ..._sync_with_integ_toc, {
  "value": "Verifique los resultados de la configuración",
  "id": "checksettings",
  "level": 2
}, {
  "value": "Excluir la integración del directorio",
  "id": "excludeintegration",
  "level": 2
}, {
  "value": "Deshabilitar la integración del directorio",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCopy2, Image, Step, Steps} = _components;
  if (!Cmd) settings_diretory_integration_missingMdxReference("Cmd", true);
  if (!IcCopy2) settings_diretory_integration_missingMdxReference("IcCopy2", true);
  if (!Image) settings_diretory_integration_missingMdxReference("Image", true);
  if (!Step) settings_diretory_integration_missingMdxReference("Step", true);
  if (!Steps) settings_diretory_integration_missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Este documento ofrece orientación sobre cómo sincronizar y administrar usuarios mediante la integración de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Microsoft Entra ID"
      }), " (en adelante, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), ") o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), " con ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La integración con ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), " ofrece las siguientes funciones prácticas, mejorando la seguridad y la usabilidad. Esto mejora la seguridad y la comodidad."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicia sesión en BioStar 2 con la cuenta de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " mediante inicio de sesión único (SSO) proporcionado por ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicia sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " mediante la autenticación Lightweight Directory Access Protocol (LDAP) proporcionada por ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Los usuarios y los grupos configurados en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " se pueden sincronizar con ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Asigna información del usuario, como cargo, departamento y grupo, utilizada en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), ", a los campos personalizados de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La función de configuración de ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Entra ID"
        }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Directory"
        }), " está disponible mediante opciones adicionales en la licencia ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advance"
        }), " y superiores. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intergratewithentraid",
      children: "Integra con Entra ID"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicia sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " con una cuenta de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.directoryIntegration.root"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.AdServerNew",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-integ-entraid.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configura cada elemento como se indica a continuación."
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
          children: ["Ingresa la información del servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Connect",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          }), "."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-server.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ClientID",
                product: "2"
              }), ": Ingresa el ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client ID"
              }), " de la aplicación registrada en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ClientSecret",
                product: "2"
              }), ": Ingresa el ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client secret"
              }), " agregado en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Certificates & secrets"
              }), " de la aplicación registrada en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.PrimaryDomain",
                product: "2"
              }), ": Ingresa el nombre de dominio principal que se ingresó al crear la organización en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre cómo registrar una aplicación en ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app",
                  children: "el siguiente enlace"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre cómo configurar ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Certificates & secrets"
                }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://learn.microsoft.com/entra/identity-platform/how-to-add-credentials?tabs=client-secret",
                  children: "el siguiente enlace"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Tenant ID"
                }), " se puede encontrar en ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), " de la aplicación registrada en ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["La información de ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.PrimaryDomain",
                  product: "2"
                }), " se puede verificar en ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), " de ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "."]
              }), "\n", (0,jsx_runtime.jsx)(Image, {
                src: "/img/biostarx-setting-directory-primary-domain.png"
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
          img01: "biostarx-setting-directory-userfield.png",
          img02: "biostarx-setting-directory-userfield-select-other.png",
          sid: "settings.activeDirectory.FieldNameEI"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El campo ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.userId",
              product: "2"
            }), " no se puede asignar al integrar con ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entra ID"
            }), ". ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.userId",
              product: "2"
            }), " se genera y aplica automáticamente en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
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
          children: ["Cambia ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleEI",
            product: "2"
          }), " a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), " para habilitar el inicio de sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " mediante ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID SSO"
          }), "."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-login-with-entraid.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Copia el URI de redirección del campo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.RedirectionUri",
            product: "2"
          }), " (", (0,jsx_runtime.jsx)(IcCopy2, {}), ") y pégalo en la configuración de redirección SSO en el portal de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), ". Cuando un usuario inicie sesión correctamente con ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), ", será redirigido a esta dirección."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre cómo registrar una aplicación en ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), " y agregar un URI de redirección, consulta los siguientes enlaces."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app",
                      children: "Registrar una aplicación en Microsoft Entra ID"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "https://learn.microsoft.com/entra/identity-platform/how-to-add-redirect-uri",
                      children: "Cómo agregar un URI de redirección a tu aplicación"
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["La dirección de redirección se puede encontrar en ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), " de la aplicación registrada en ", (0,jsx_runtime.jsx)(_components.strong, {
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
        children: ["Después de completar todos los ajustes de ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.directoryIntegration.root"
        }), ", haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " en la parte inferior de la pantalla para guardar. Consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#checksettings",
          children: "lo siguiente"
        }), " para verificar los resultados."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-directory-btn-apply.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integratewithactivedirectory",
      children: "Integra con Active Directory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicia sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " con una cuenta de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.directoryIntegration.root"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.AdServerOld",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-integ-ad.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configura cada elemento como se indica a continuación."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Active Directory está disponible para entornos de sistema con Windows Server 2008 R2 o\nposterior."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para usar el servidor Active Directory, establece ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType",
              product: "2"
            }), " en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.alphanumeric",
              product: "2"
            }), " en ", (0,jsx_runtime.jsx)(Cmd, {
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
          children: ["Ingresa la información del servidor de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), " y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Connect",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          }), "."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-ad-server.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ServerAddress",
                product: "2"
              }), ": Ingresa la dirección del servidor de Windows Active Directory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.UserName",
                product: "2"
              }), ": Ingresa el nombre de usuario que utiliza Windows Active Directory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.Password",
                product: "2"
              }), ": Ingresa la contraseña que utiliza Windows Active Directory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.DomainNode",
                product: "2"
              }), ": Ingresa el nombre de dominio base para Windows Active Directory. Encuentra el nombre de dominio base mediante los siguientes pasos:"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Ejecuta ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Active Directory Administrative Center"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Haz clic derecho en el nodo donde se almacenan los datos de usuario y luego haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Property"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["En la ventana ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "property"
                  }), ", selecciona ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Expand"
                  }), " y luego haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Attribute Editor"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Consulta el valor de ", (0,jsx_runtime.jsx)(_components.strong, {
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
              }), ": Usa cifrado al comunicarte con el servidor Windows Active Directory. Para instalar Active Directory Certificate Services y configurar ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.keystorePassword",
                product: "2"
              }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
                href: "ad-encrypt",
                children: "lo siguiente"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.keystorePassword",
                  product: "2"
                }), ": Ingresa la contraseña del almacén de claves de cifrado del servidor Windows Active Directory. Ingresa la contraseña cuando ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.secureTransfer",
                  product: "2"
                }), " esté establecido en ", (0,jsx_runtime.jsx)(Cmd, {
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
          img01: "biostarx-setting-directory-userfield-ad.png",
          img02: "biostarx-setting-directory-userfield-select-other-ad.png",
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
          children: ["Para configurar el inicio de sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " usando el ID de usuario del servidor Active Directory, cambia ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleAD",
            product: "2"
          }), " a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), ". El valor del campo ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sAMAccountName"
          }), " del servidor Active Directory se asignará al ID de inicio de sesión de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El campo ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sAMAccountName"
            }), " no puede contener caracteres especiales. El inicio de sesión podría fallar si no cumple con la política de ID de inicio de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          })
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-login-with-ad.png"
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
        children: ["Después de completar todos los ajustes de ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.directoryIntegration.root"
        }), ", haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " en la parte inferior de la pantalla para guardar. Consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#checksettings",
          children: "lo siguiente"
        }), " para verificar los resultados."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-directory-btn-apply.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checksettings",
      children: "Verifique los resultados de la configuración"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " en la parte inferior de la pantalla para aplicar la configuración de integración con ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), ". Consulte lo siguiente para verificar la configuración sincronizada."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Revise la lista de usuarios sincronizados en el menú ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tras completar la configuración de inicio de sesión con ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), ", aparece ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "login.entraidLoginBtn",
            product: "2"
          }), " al iniciar sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-entraid-login.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "excludeintegration",
      children: "Excluir la integración del directorio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al integrar ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), " mediante la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.directoryIntegration.root"
      }), ", los usuarios que no existan en el servicio de directorio podrían eliminarse de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Si hay usuarios que no desea que se eliminen, exclúyalos de la integración con el siguiente método."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicia sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " con una cuenta de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya al menú ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el usuario que desea excluir de la integración en la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.user.allUserGroups",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pantalla de información detallada del usuario seleccionado, marque la casilla de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.adsync.exclude",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-advance-exclude-sync.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los usuarios seleccionados se excluirán de la integración al usar la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.directoryIntegration.root"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disableIntegration",
      children: "Deshabilitar la integración del directorio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Siga estos pasos para deshabilitar la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.title",
        product: "2"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicia sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " con una cuenta de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.directoryIntegration.root"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.notUse",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-unset.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el mensaje ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alert.warning",
            product: "2"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.continue",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-unset-warn-message.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cuando ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.activeDirectory.title",
          product: "2"
        }), " se configure en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.activeDirectory.notUse",
          product: "2"
        }), ", se eliminará toda la configuración de integración con ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Entra ID"
        }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Directory"
        }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". La información integrada de usuarios y grupos no se eliminará, pero dejará de sincronizarse. Asegúrese de verificar antes de deshabilitar la integración."]
      })
    })]
  });
}
function settings_diretory_integration_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
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