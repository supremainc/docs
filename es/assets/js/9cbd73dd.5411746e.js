"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12044"], {
84081: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_card_mdx_9cb_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-card-mdx-9cb.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_card_mdx_9cb_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-card","title":"Registrar tarjeta de acceso","description":"Guía a los usuarios sobre cómo registrar tarjetas CSN, Wiegand y tarjetas inteligentes.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-card.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-card","permalink":"/docs/es/platform/biostar_x/enroll-credential-card","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-card.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-card","title":"Registrar tarjeta de acceso","description":"Guía a los usuarios sobre cómo registrar tarjetas CSN, Wiegand y tarjetas inteligentes.","keywords":["Tarjeta de acceso","Enrolamiento","Credenciales","Autenticación","tarjeta"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Registrar Cara","permalink":"/docs/es/platform/biostar_x/enroll-credential-face"},"next":{"title":"Registrar credenciales móviles","permalink":"/docs/es/platform/biostar_x/enroll-credential-mobile"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-card.mdx


const frontMatter = {
	id: 'enroll-credential-card',
	title: 'Registrar tarjeta de acceso',
	description: 'Guía a los usuarios sobre cómo registrar tarjetas CSN, Wiegand y tarjetas inteligentes.',
	keywords: [
		'Tarjeta de acceso',
		'Enrolamiento',
		'Credenciales',
		'Autenticación',
		'tarjeta'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Tarjeta CSN",
  "id": "csncard",
  "level": 2
}, {
  "value": "Tarjeta Wiegand",
  "id": "wiegandcard",
  "level": 2
}, {
  "value": "Tarjeta inteligente",
  "id": "smardcard",
  "level": 2
}, {
  "value": "Lectura/formateo de tarjeta",
  "id": "readformatcard",
  "level": 2
}, {
  "value": "Confirmación de información de tarjeta asignada",
  "id": "confirmación-de-información-de-tarjeta-asignada",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
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
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Guía a los usuarios sobre cómo registrar tarjetas de acceso. Explica los métodos de registro para tarjetas CSN, tarjetas Wiegand y tarjetas inteligentes, así como las funciones de lectura y formateo de tarjetas. Consulta el manual del dispositivo para conocer los tipos de tarjetas compatibles con el dispositivo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Registro de tarjetas mediante un agente USB"
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "table-fixed",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Tipo Tarjeta"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "CSN"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "Wiegand"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "Tarjeta Inteligente"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "EM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MIFARE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DESFire"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FeliCa"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HID Prox"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HID iCLASS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csncard",
      children: "Tarjeta CSN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), ", haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), ", selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            children: "CSN"
          }), " en las opciones de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-csn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el método de registro de tarjetas deseado en el campo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.registerByCardReader",
                product: "2"
              }), ": Selecciona el dispositivo de la lista ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), " para escanear la tarjeta y haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.readCard",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.assignCard",
                product: "2"
              }), ": Selecciona de la lista la tarjeta que deseas asignar al usuario. Busca en el campo de entrada."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.enterManually",
                product: "2"
              }), ": Ingresa el número de tarjeta manualmente o haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.useUserId",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegandcard",
      children: "Tarjeta Wiegand"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), ", haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), ", selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Wiegand"
          }), " en las opciones de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-wiegand.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el formato deseado en el campo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardFormat",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el método de registro de tarjetas deseado en el campo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.registerByCardReader",
                product: "2"
              }), ": Selecciona el dispositivo de la lista ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), " para escanear la tarjeta y haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.readCard",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.assignCard",
                product: "2"
              }), ": Selecciona de la lista la tarjeta que deseas asignar al usuario. Busca en el campo de entrada."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.enterManually",
                product: "2"
              }), ": Ingresa manualmente el código de instalación y el ID de la tarjeta."]
            }), "\n"]
          }), "\n"]
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
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si el formato de datos de tarjeta deseado no está disponible en las opciones de ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user.cardEnrol.cardFormat",
          product: "2"
        }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-credential-wiegand-format",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smardcard",
      children: "Tarjeta inteligente"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Registra una tarjeta de credencial de seguridad, una tarjeta access-on o una tarjeta inteligente personalizada."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), ", haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), ", selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.smartCard",
            product: "2"
          }), " en las opciones de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-smartcard.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el dispositivo para el registro de tarjetas en el campo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez seleccionado, aparecerá el formato de diseño de tarjeta configurado en el campo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardLayoutFormatName",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el tipo de tarjeta deseado en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardMode",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.secureCredentialCard",
                product: "2"
              }), ": La información del usuario (ID de tarjeta, PIN, grupo de acceso, duración, plantilla de huella, plantilla facial, modo de autenticación privada) puede almacenarse en la tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.accessOnCard",
                product: "2"
              }), ": La información del usuario (ID de tarjeta, PIN, plantilla de huella, plantilla facial) puede almacenarse en la tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.customSmartCard",
                product: "2"
              }), ": Registra una tarjeta inteligente emitida por un tercero. Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.readCard",
                product: "2"
              }), " para registrar el ID de la tarjeta."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona la plantilla de huella deseada."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.writeCard",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para emitir una tarjeta inteligente, se debe configurar el tipo de tarjeta correcto. Para obtener más información sobre los tipos de tarjetas, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-credential-smart-format",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La información del usuario almacenada en la tarjeta inteligente utiliza la información almacenada en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ". Si no se almacena la información actualizada del usuario, puede que se almacene información incorrecta en la tarjeta inteligente. Además, si la información de usuario actualizada no se sincroniza con el dispositivo, este podría no realizar la autenticación."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para usar una plantilla facial, selecciona ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.useFace",
              product: "2"
            }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.layout",
              product: "2"
            }), " al agregar una nueva tarjeta inteligente en el menú ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.credential.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.credential.cardFormat"
            }), ". Para obtener más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-credential-smart-format#layout",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.accessOnCard",
              product: "2",
              className: "normal"
            }), " no puede configurar el ID de la tarjeta manualmente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Para los dispositivos y versiones de firmware que admiten Custom Smart Card, consulta la lista siguiente."
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "Ver dispositivos y versiones de firmware que admiten tarjetas inteligentes personalizadas"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "XPass D2 versión de firmware 1.7.1 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry P2 versión de firmware 1.5.1 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W2 versión de firmware 1.8.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2a versión de firmware 1.1.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "X-Station 2 versión de firmware 1.3.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 3 versión de firmware 1.3.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W3 versión de firmware 1.0.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioLite N2 versión de firmware 1.6.2 o superior"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para configurar el diseño de la tarjeta inteligente, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details-auth",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para formatear la tarjeta inteligente y reescribir la información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#readformatcard",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "readformatcard",
      children: "Lectura/formateo de tarjeta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formatea tarjetas inteligentes y reescribe información."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), ", haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), ", selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), " en las opciones de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-readcard.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona en el campo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device",
            product: "2"
          }), " el dispositivo capaz de leer tarjetas inteligentes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardModeLong",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifica la información de la tarjeta y haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.formatCard",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La lista de dispositivos en el campo ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.device",
              product: "2"
            }), " solo mostrará dispositivos con el diseño de tarjeta inteligente configurado. Para obtener más información sobre la configuración, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details-auth",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las tarjetas inteligentes personalizadas no se pueden formatear."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "confirmación-de-información-de-tarjeta-asignada",
      children: "Confirmación de información de tarjeta asignada"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para ver la información de la tarjeta asignada al usuario, haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.cardHistory",
        product: "2"
      }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.credential",
        product: "2"
      }), ". Revisa la fecha de asignación de la tarjeta, el tipo de tarjeta, el ID de la tarjeta y el estado."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-card-assign-info.png"
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