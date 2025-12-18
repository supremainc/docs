"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16384"], {
41336: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ enroll_credential_mobile_frontMatter),
  toc: () => (/* binding */ enroll_credential_mobile_toc),
  "default": () => (/* binding */ enroll_credential_mobile_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_mobile_mdx_696_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ enroll_credential_mobile_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-mobile-mdx-696.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_mobile_mdx_696_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-mobile","title":"Registrar credenciales móviles","description":"La integración con el portal Airfob de Suprema permite emitir credenciales móviles a los usuarios.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-mobile.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-mobile","permalink":"/docs/es/platform/biostar_x/enroll-credential-mobile","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-mobile.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-mobile","title":"Registrar credenciales móviles","description":"La integración con el portal Airfob de Suprema permite emitir credenciales móviles a los usuarios.","keywords":["Credenciales móviles","Enrolamiento","Credenciales","Autenticación","tarjeta"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Registrar tarjeta de acceso","permalink":"/docs/es/platform/biostar_x/enroll-credential-card"},"next":{"title":"Inscribir QR/código de barras","permalink":"/docs/es/platform/biostar_x/enroll-credential-qrbarcode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_enroll-credential-mobile-notes.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["Si ha habilitado las opciones ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.photo",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.department",
        product: "2"
      }), " y ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.detail.title",
        product: "2"
      }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.info",
        product: "2"
      }), ", esa información puede mostrarse en la tarjeta de credenciales móviles del usuario. Los elementos que se muestran en este momento se basan en la información ingresada por el usuario. Para obtener más información sobre cómo ingresar la información básica del usuario, consulte ", (0,jsx_runtime.jsx)(_components.a, {
        href: "add-user-basic-info",
        children: "lo siguiente"
      }), "."]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_enroll-credential-mobile-airfob-site-notes.mdx


const _enroll_credential_mobile_airfob_site_notes_frontMatter = (/* unused pure expression or super */ null && ({}));
const _enroll_credential_mobile_airfob_site_notes_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _enroll_credential_mobile_airfob_site_notes_toc = [];
function _enroll_credential_mobile_airfob_site_notes_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _enroll_credential_mobile_airfob_site_notes_missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsx)(_components.admonition, {
    type: "note",
    children: (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El elemento ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.validPeriod",
        product: "2"
      }), " se activa al configurar un sitio ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dinámico"
      }), " durante la creación del sitio en el portal AirPop. Configura la duración de vencimiento y el período de uso de las Credenciales Móviles. Para obtener más información sobre el portal Airfob, consulta ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://airfob.zohodesk.com/portal",
        children: "el siguiente enlace"
      }), "."]
    })
  });
}
function _enroll_credential_mobile_airfob_site_notes_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_enroll_credential_mobile_airfob_site_notes_createMdxContent, {
      ...props
    })
  }) : _enroll_credential_mobile_airfob_site_notes_createMdxContent(props);
}
function _enroll_credential_mobile_airfob_site_notes_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-mobile.mdx


const enroll_credential_mobile_frontMatter = {
	id: 'enroll-credential-mobile',
	title: 'Registrar credenciales móviles',
	description: 'La integración con el portal Airfob de Suprema permite emitir credenciales móviles a los usuarios.',
	keywords: [
		'Credenciales móviles',
		'Enrolamiento',
		'Credenciales',
		'Autenticación',
		'tarjeta'
	],
	isTranslationMissing: false
};
const enroll_credential_mobile_contentTitle = undefined;

const assets = {

};





const enroll_credential_mobile_toc = [{
  "value": "CSN móvil",
  "id": "csnmobilecard",
  "level": 2
}, {
  "value": "Asignación de tarjeta",
  "id": "asignación-de-tarjeta",
  "level": 3
}, ..._enroll_credential_mobile_airfob_site_notes_toc, ...toc, {
  "value": "Ingresar manualmente",
  "id": "ingresar-manualmente",
  "level": 3
}, ..._enroll_credential_mobile_airfob_site_notes_toc, ...toc, ..._enroll_credential_mobile_airfob_site_notes_toc, ...toc];
function enroll_credential_mobile_createMdxContent(props) {
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
  }, {Cmd, Image} = _components;
  if (!Cmd) enroll_credential_mobile_missingMdxReference("Cmd", true);
  if (!Image) enroll_credential_mobile_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "La integración con el portal Airfob de Suprema permite emitir credenciales móviles a los usuarios. Los usuarios pueden registrar credenciales móviles de forma individual o usar la función de importación CSV para registrar a varios usuarios a la vez."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Debe ingresar el correo electrónico del usuario según el método de envío de credenciales móviles configurado en el portal AirPop."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Solo se puede usar una de las dos opciones: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN Mobile Card"
            }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Esta función solo se puede usar cuando está vinculada con el portal Airfob. Para más información sobre el Airfob Portal y el uso de tarjetas de acceso móvil, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-credential-mobile-access-card",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csnmobilecard",
      children: "CSN móvil"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede emitir credenciales móviles CSN a los usuarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asignación-de-tarjeta",
      children: "Asignación de tarjeta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.mobile",
            product: "2"
          }), ", seleccione la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " y elija ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardTypeCsnMobile",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En las opciones de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), ", seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.assignCard",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-mobile-csn-assign.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsx)(_enroll_credential_mobile_airfob_site_notes_MDXContent, {}), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione o busque en la lista la tarjeta que desea asignar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.validPeriod",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(MDXContent, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ingresar-manualmente",
      children: "Ingresar manualmente"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.mobile",
            product: "2"
          }), ", seleccione la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " y elija ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardTypeCsnMobile",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enterManually",
            product: "2"
          }), " en las opciones de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-mobile-csn.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsx)(_enroll_credential_mobile_airfob_site_notes_MDXContent, {}), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.inputType",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.random.cardid",
                product: "2"
              }), ": Genera automáticamente un ID de tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.useUserId",
                product: "2"
              }), ": Usa el ID de usuario como ID de tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.manual.input",
                product: "2"
              }), ": Permite ingresar manualmente el ID de tarjeta."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.validPeriod",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el usuario perdió o eliminó el enlace de activación enviado por correo electrónico, haga clic en el botón ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reenviar"
            }), " para volver a emitir el enlace de activación."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la aplicación móvil CSN, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.csn.edu/csn-mobile-apps",
              children: "el siguiente enlace"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-on-mobile",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.tom",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Template on Mobile"
      }), " es una credencial móvil que almacena la plantilla biométrica del usuario en un dispositivo móvil. Puede autenticar de forma biométrica sin almacenar los datos del usuario en el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", el portal AirPop (Airfob Portal) ni en el dispositivo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Esta función es útil para entornos que desean usar biometría como credencial pero no pueden almacenar información biométrica en el servidor ni en el dispositivo por motivos de privacidad. Como la emisión de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template on Mobile"
      }), " y el proceso de registro de la plantilla biométrica se realizan por separado, los usuarios pueden registrar su rostro directamente en dispositivos compatibles con ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template on Mobile"
      }), " sin interactuar con un administrador."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.mobile",
            product: "2"
          }), ", seleccione la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " y elija ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnroll.cardTypeTemplateOnMobile",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-mobile-tom.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsx)(_enroll_credential_mobile_airfob_site_notes_MDXContent, {}), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el tipo de tarjeta deseado en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardModeLong",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.accessOnCard",
                product: "2"
              }), ": La información del usuario (ID de tarjeta, PIN, grupo de acceso, duración, modo de autenticación privada) puede almacenarse en la tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.secureCredentialCard",
                product: "2"
              }), ": Tarjeta de credencial segura. Se pueden almacenar el ID de tarjeta del usuario y el PIN."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.validPeriod",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se enviará un correo electrónico de emisión a la dirección de correo electrónico registrada del usuario. El usuario debe instalar la aplicación Airfob Pass mediante el enlace del correo electrónico para completar la emisión de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template on Mobile"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cómo autenticarse con Template on Mobile"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["El usuario acerca el dispositivo móvil que contiene ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Template on Mobile"
        }), " al dispositivo de autenticación y sigue las indicaciones en pantalla para autenticar su rostro."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre los dispositivos y las versiones de firmware que admiten ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), ", consulte la siguiente lista."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 versión de firmware 1.2.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W3 versión de firmware 1.0.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 versión de firmware 2.2.0 o superior"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Solo se puede emitir una credencial móvil: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN mobile card"
            }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function enroll_credential_mobile_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(enroll_credential_mobile_createMdxContent, {
      ...props
    })
  }) : enroll_credential_mobile_createMdxContent(props);
}
function enroll_credential_mobile_missingMdxReference(id, component) {
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