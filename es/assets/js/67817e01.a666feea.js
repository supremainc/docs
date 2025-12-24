"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["80231"], {
30989: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_credential_mobile_access_card_frontMatter),
  toc: () => (/* binding */ settings_credential_mobile_access_card_toc),
  "default": () => (/* binding */ settings_credential_mobile_access_card_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_mobile_access_card_mdx_678_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_credential_mobile_access_card_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-mobile-access-card-mdx-678.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_mobile_access_card_mdx_678_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-mobile-access-card","title":"Administrar tarjetas de acceso móvil","description":"Esta guía describe cómo administrar tarjetas de acceso móvil para los usuarios en BioStar X mediante la integración con Airfob Portal.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-mobile-access-card.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-mobile-access-card","permalink":"/docs/es/platform/biostar_x/settings-credential-mobile-access-card","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-mobile-access-card.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-mobile-access-card","title":"Administrar tarjetas de acceso móvil","description":"Esta guía describe cómo administrar tarjetas de acceso móvil para los usuarios en BioStar X mediante la integración con Airfob Portal.","keywords":["Móvil","Tarjeta de acceso","Ajustes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar Formato De Tarjeta Inteligente","permalink":"/docs/es/platform/biostar_x/settings-credential-smart-format"},"next":{"title":"Configurar Grupos Identificación Facial IR","permalink":"/docs/es/platform/biostar_x/settings-credential-ir-face-group-matching"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_airfob-portal-site-type.mdx


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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.admonition, {
    type: "note",
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Seleccione el tipo de tarjeta ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic"
      }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular"
      }), " según el tipo de sitio."]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic"
          }), ": Tipo que deduce créditos según el dispositivo y la duración de uso, y permite acciones de gestión como revocación, suspensión, reemisión y definición de fecha de vencimiento incluso después de emitida la tarjeta. Este tipo es adecuado para instalaciones de membresía como gimnasios o salas de estudio, así como espacios de coworking."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Regular"
          }), ": Tipo que deduce créditos según la cantidad de tarjetas emitidas y está disponible de forma permanente hasta que el administrador elimine las tarjetas en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Este tipo es adecuado para que empresas o grupos lo utilicen como credenciales de empleado y tarjetas de acceso."]
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-mobile-access-card.mdx


const settings_credential_mobile_access_card_frontMatter = {
	id: 'settings-credential-mobile-access-card',
	title: 'Administrar tarjetas de acceso móvil',
	description: 'Esta guía describe cómo administrar tarjetas de acceso móvil para los usuarios en BioStar X mediante la integración con Airfob Portal.',
	keywords: [
		'Móvil',
		'Tarjeta de acceso',
		'Ajustes'
	],
	isTranslationMissing: false
};
const settings_credential_mobile_access_card_contentTitle = undefined;

const assets = {

};




const settings_credential_mobile_access_card_toc = [{
  "value": "Regístrate en Airfob Portal y crea un sitio",
  "id": "airfob-portal-setup",
  "level": 2
}, ...toc, {
  "value": "Configura la tarjeta de acceso móvil en BioStar X",
  "id": "biostar-x-mobile-access-setup",
  "level": 2
}, {
  "value": "Registrar dispositivo",
  "id": "registerDevice",
  "level": 2
}, {
  "value": "Emitir tarjeta de acceso móvil",
  "id": "issueMobileAccessCard",
  "level": 2
}];
function settings_credential_mobile_access_card_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
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
      children: ["Integra el ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.airfob.com/",
        children: "Airfob Portal"
      }), " para emitir o eliminar tarjetas de acceso móvil para los usuarios en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los usuarios pueden recibir tarjetas de acceso móvil mediante un enlace enviado a su correo electrónico sin registrarse en Airfob Portal ni inscribirse por separado para las tarjetas de acceso móvil."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Solo se puede usar una de las siguientes para tarjetas de acceso móvil: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN Mobile"
            }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Consulta lo siguiente para ver los dispositivos y versiones de firmware que admiten la tarjeta ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN Mobile"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsxs)("summary", {
              children: ["Ver dispositivos y versiones de firmware que admiten la tarjeta ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "CSN Mobile"
              })]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "XPass 2 versión de firmware 1.1.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "XPass D2 (Rev 2) versión de firmware 1.4.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioLite N2 versión de firmware 1.3.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W2 (Rev 2) versión de firmware 1.6.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceStation 2 versión de firmware 1.4.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceStation F2 versión de firmware 1.0.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2 versión de firmware 1.9.0 o superior (modelo con NFC)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation A2 versión de firmware 1.8.0 o superior (modelo con NFC)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceLite versión de firmware 1.2.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "X-Station 2 versión de firmware 1.0.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 3 firmware 1.0.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W3 versión de firmware 1.0.0 o superior"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Consulta lo siguiente para ver los dispositivos y versiones de firmware que admiten ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 versión de firmware 1.2.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W3 versión de firmware 1.0.0 o superior"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define si se usarán tarjetas de acceso móvil y administra los ajustes relacionados con la integración de Airfob Portal. Registra también los dispositivos que usarán tarjetas de acceso móvil. Después de registrarte en Airfob Portal, administra las tarjetas de acceso móvil en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "airfob-portal-setup",
          children: "Regístrate en Airfob Portal y crea un sitio"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Configura las tarjetas de acceso móvil y los dispositivos registrados en Airfob Portal y administra tu sitio y créditos."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Accede al ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://portal.airfob.com/",
                children: "Airfob Portal"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Get Started"
              }), " para continuar con el registro y la creación del sitio."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Introduce la dirección de correo electrónico del administrador de Airfob Portal en el campo de correo electrónico y luego haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Get Started"
              }), ". Se enviará un código de verificación a la dirección de correo electrónico ingresada."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Introduce el código de verificación recibido por correo electrónico en el campo correspondiente y luego haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Confirm"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "El código de verificación es un número de 6 dígitos."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Revisa la política de privacidad y los términos, luego haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Agree"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Establece una contraseña y un apodo para Airfob Portal y luego haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Account"
              }), ". La creación de la cuenta se completará."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Una vez que se haya completado la creación de la cuenta, haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sign In"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Introduce tu correo electrónico y contraseña y luego haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sign In"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Site"
              }), " para continuar con la creación del sitio."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Site"
                }), " se refiere a la organización o empresa que utiliza tarjetas de acceso móvil."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Define el nombre y el país del sitio y luego haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Next"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Selecciona el tipo de sitio."
            }), "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create"
              }), ". La creación del sitio se completará."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Haz clic en el nombre del sitio para acceder a Airfob Portal de ese sitio."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre el uso de Airfob Portal, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://airfob.zohodesk.com/portal/home",
              children: "el siguiente enlace"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "biostar-x-mobile-access-setup",
          children: "Configura la tarjeta de acceso móvil en BioStar X"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de registrarte en Airfob Portal, administra las tarjetas de acceso móvil en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Para usar las tarjetas de acceso móvil de Suprema, regístrate en Airfob Portal y crea un sitio."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
                sid: "setting.menu.credential.root"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.credential.mobileAccess"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Edite los campos necesarios."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-credentail-mobile-access.png"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.mobileCredential.setting",
                    product: "2"
                  }), ": Establece si se usarán tarjetas de acceso móvil. Configura en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.use",
                    product: "2"
                  }), " para emitir tarjetas de acceso móvil a los usuarios."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.mobileCredential.siteId",
                    product: "2"
                  }), ": Introduce el ID del sitio creado en Airfob Portal. El ID del sitio se encuentra en la ruta ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Settings"
                  }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Site"
                  }), " dentro de Airfob Portal."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.mobileCredential.email",
                    product: "2"
                  }), ": Introduce la dirección de correo electrónico de la cuenta administradora de las tarjetas de acceso móvil."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "setting.mobileCredential.password",
                    product: "2"
                  }), ": Introduce la contraseña de la cuenta administradora de las tarjetas de acceso móvil."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.connect",
                product: "2"
              }), " cuando hayas terminado de configurar todo."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para usar tarjetas de acceso móvil en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ", completa primero el registro y la configuración inicial de Airfob Portal. Para obtener más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#airfob-portal-setup",
              children: "lo siguiente"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "registerDevice",
          children: "Registrar dispositivo"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Registra los dispositivos que usarán tarjetas de acceso móvil directamente desde la aplicación Airfob Pass o desde ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-mobile-access-connection.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez que hayas terminado de configurar la integración con Airfob Portal, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.mobileCredential.connect",
            product: "2"
          }), ". La opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.mobileCredential.registerDeviceTable",
            product: "2"
          }), " estará disponible."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para añadir un dispositivo que usará tarjetas de acceso móvil, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.addplus",
                product: "2"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-credentail-mobile-access-register-device.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la lista de dispositivos de la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.mobileCredential.registerDeviceTable",
                product: "2"
              }), ", selecciona la casilla del dispositivo que usará la tarjeta de acceso móvil."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-credentail-mobile-access-register-device-popup.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Después de seleccionar todos los dispositivos, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.add",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifica los dispositivos añadidos en la lista de dispositivos."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcRefresh, {}), " para reenviar el certificado de la tarjeta de acceso móvil."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " para eliminar un dispositivo registrado."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Consulta la siguiente información para conocer los dispositivos y las versiones de firmware que pueden usar tarjetas de acceso móvil."
              }), "\n", (0,jsx_runtime.jsxs)(Details, {
                children: [(0,jsx_runtime.jsx)("summary", {
                  children: "Ver dispositivos y versiones de firmware que pueden usar tarjetas de acceso móvil"
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "XPass 2 versión de firmware 1.1.0 o superior"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "XPass D2 (Rev 2) versión de firmware 1.4.0 o superior"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioLite N2 versión de firmware 1.3.0 o superior"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioEntry W2 (Rev 2) versión de firmware 1.6.0 o superior"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "FaceStation 2 versión de firmware 1.4.0 o superior"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "FaceStation F2 versión de firmware 1.0.0 o superior"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioStation 2 versión de firmware 1.9.0 o superior (modelo con NFC)"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioStation A2 versión de firmware 1.8.0 o superior (modelo con NFC)"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "FaceLite versión de firmware 1.2.0 o superior"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "X-Station 2 versión de firmware 1.0.0 o superior"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioStation 3 firmware 1.0.0 o superior"
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "BioEntry W3 versión de firmware 1.0.0 o superior"
                    }), "\n"]
                  }), "\n"]
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Registra dispositivos también mediante la aplicación Airfob Pass."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Eliminar un dispositivo registrado quitará el certificado de la tarjeta de acceso móvil enviado a ese dispositivo."
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "issueMobileAccessCard",
          children: "Emitir tarjeta de acceso móvil"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Emite tarjetas de acceso móvil a los usuarios registrados en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Ingresa la información esencial del usuario según el método de envío para emitir una tarjeta de acceso móvil al usuario. Para obtener más información, consulta lo siguiente."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "add-user",
                children: "Registro de información del usuario"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "enroll-credential#enroll-mobile",
                children: "Inscripción de tarjeta de acceso móvil"
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
    ...(0,lib/* .useMDXComponents */.R)(),
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