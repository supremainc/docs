"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["97015"], {
35820: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_customizing_email_templates_mdx_391_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-customizing-email-templates-mdx-391.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_customizing_email_templates_mdx_391_namespaceObject = JSON.parse('{"id":"platform/biostar_air/customizing-email-templates","title":"Personalizar plantillas de correo electrónico","description":"Esta guía explica cómo crear y personalizar plantillas de correo electrónico con la imagen de su marca para invitaciones, activaciones y notificaciones en BioStar Air, utilizando logotipos, contenido personalizado y soporte multilingüe.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/customizing-email-templates.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/customizing-email-templates","permalink":"/docs/es/platform/biostar_air/customizing-email-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/customizing-email-templates.mdx","tags":[],"version":"current","frontMatter":{"id":"customizing-email-templates","title":"Personalizar plantillas de correo electrónico","description":"Esta guía explica cómo crear y personalizar plantillas de correo electrónico con la imagen de su marca para invitaciones, activaciones y notificaciones en BioStar Air, utilizando logotipos, contenido personalizado y soporte multilingüe.","keywords":["Plantilla de correo electrónico","personalización"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Horario de Verano (DST)","permalink":"/docs/es/platform/biostar_air/daylight-saving-time"},"next":{"title":"Configurar alertas y informes","permalink":"/docs/es/platform/biostar_air/settings-alert-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/customizing-email-templates.mdx


const frontMatter = {
	id: 'customizing-email-templates',
	title: 'Personalizar plantillas de correo electrónico',
	description: 'Esta guía explica cómo crear y personalizar plantillas de correo electrónico con la imagen de su marca para invitaciones, activaciones y notificaciones en BioStar Air, utilizando logotipos, contenido personalizado y soporte multilingüe.',
	keywords: [
		'Plantilla de correo electrónico',
		'personalización'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar plantillas de correo electrónico",
  "id": "addEmailTemplate",
  "level": 2
}, {
  "value": "Editar plantillas de correo electrónico",
  "id": "editEmailTemplate",
  "level": 2
}, {
  "value": "Eliminar plantillas de correo electrónico",
  "id": "deleteEmailTemplate",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
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
  }, {Cmd, DocLink, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice la función de plantillas de correo electrónico para personalizar los correos enviados a los usuarios del sitio, de modo que reflejen la marca y el mensaje de su empresa. Las plantillas incluyen invitaciones, correos de activación y otras notificaciones."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Vea el siguiente video para aprender a configurar las plantillas de correo electrónico."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "xmgpp6xMBuE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addEmailTemplate",
      children: "Agregar plantillas de correo electrónico"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.email_template_menu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.add_template_btn",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-email.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.add_email_template",
            product: "air"
          }), ", configure cada elemento. Seleccione la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_text",
            product: "air"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_text",
            product: "air"
          }), " para configurar las plantillas de correo electrónico de usuario o de administrador."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cree plantillas de correo electrónico separadas para cada idioma. Seleccione el idioma en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_form_input3",
          product: "air"
        }), ". Los idiomas compatibles son los siguientes:"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "English, 한국어, 日本語, Nederlands, Español, Português"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Se admitirán más idiomas."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_text",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Personalice las plantillas de correo electrónico enviadas a los usuarios."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-email-add-user.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.email_type",
            product: "air"
          }), ": Seleccione el tipo de plantilla de correo electrónico que desea crear. Las opciones disponibles son las siguientes:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.activate_user",
                product: "air"
              }), ": Se utiliza normalmente como invitación para descargar una tarjeta móvil."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.reactivate_user",
                product: "air"
              }), ": Envía al usuario una notificación de que la tarjeta móvil ha sido reactivada."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.reissue_user",
                product: "air"
              }), ": Se utiliza al emitir una nueva tarjeta móvil."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.delete_user",
                product: "air"
              }), ": Envía al usuario una notificación sobre la eliminación de la tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.suspend_user",
                product: "air"
              }), ": Notifica al usuario que la tarjeta ha sido suspendida."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.upload_user_face",
                product: "air"
              }), ": Se usa para solicitar al usuario que suba una foto de su rostro."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.card_type",
            product: "air"
          }), ": Se puede seleccionar para tipos de correo que permiten la descarga de la tarjeta móvil, como ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.activate_user",
            product: "air"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.reissue_user",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_card_type_mobile",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_card_type_web_qr",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_card_type_web_link",
              product: "air"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre los tipos de credenciales, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/user-card-types"
            }), "."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "admin",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_text",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Personalice las plantillas de correo electrónico enviadas a los administradores."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-email-add-admin.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "email_templates.email_type",
        product: "air"
      }), ": Seleccione el tipo de plantilla de correo electrónico que desea crear. Las opciones disponibles son las siguientes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.alert_event_log_admin",
            product: "air"
          }), ": Envía a los administradores notificaciones sobre eventos en el sitio."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.alert_system_admin",
            product: "air"
          }), ": Envía alertas del sistema a los administradores."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.alert_report_admin",
            product: "air"
          }), ": Envía a los administradores un enlace de descarga después de generar un informe."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "emailStyles",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "email_templates.email_styles",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Personalice el logotipo y el contenido del correo electrónico. Vea los cambios en tiempo real en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "email_templates.preview",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-email-add-style.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.logo_image",
            product: "air"
          }), ": Cargue la imagen del logotipo que aparecerá en el correo electrónico."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Tipos de archivo: JPG, JPEG, PNG"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Resolución mínima: 200 x 60"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Tamaño del archivo: 1 MB o menos"
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.title_text",
            product: "air"
          }), ": Ingrese el asunto del correo electrónico."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.body_text",
            product: "air"
          }), ": Ingrese el mensaje que se mostrará en el cuerpo del correo electrónico."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["El cuerpo del correo electrónico debe incluir claves HTML. Cada clave se reemplaza por la dirección de correo electrónico del destinatario, el nombre del sitio y otros valores. Las claves disponibles pueden variar según el valor seleccionado en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "email_templates.email_type",
              product: "air"
            }), "."]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Pestaña ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Usuario"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${email}"
                }), ": Dirección de correo electrónico"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${siteName}"
                }), ": Nombre del sitio"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Pestaña ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Administrador"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${email}"
                }), ": Dirección de correo electrónico"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${siteName}"
                }), ": Nombre del sitio"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${alertType}"
                }), ": Tipo de alerta"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${alertDetails}"
                }), ": Detalles de la alerta"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${frequency}"
                }), ": Frecuencia de la alerta"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${location}"
                }), ": Ubicación de la alerta"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${userInvolved}"
                }), ": Usuario involucrado en la alerta"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${deviceInvolved}"
                }), ": Dispositivo involucrado en la alerta"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${dateTime}"
                }), ": Fecha y hora de la alerta"]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.bottom_text",
            product: "air"
          }), ": Ingrese información adicional que aparecerá en la parte inferior del correo electrónico. Agregue la dirección de la empresa o la información de contacto para el cumplimiento normativo o para proporcionar detalles de ubicación a los usuarios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Verifique que la imagen del logotipo tenga el formato y tamaño adecuados para que aparezca correctamente en el correo electrónico."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si el idioma actual no es compatible, consulte las actualizaciones futuras. Se agregarán más idiomas."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El campo de dirección es importante para el cumplimiento normativo y la claridad; ingréselo con precisión."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "save_btn",
              product: "air"
            }), " en la parte inferior para guardar la plantilla de correo electrónico."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_button_reset",
              product: "air"
            }), " en la parte inferior para restaurar el contenido original después de realizar cambios."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editEmailTemplate",
      children: "Editar plantillas de correo electrónico"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.email_template_menu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en la plantilla de correo electrónico que quieres editar de la lista. O bien, marca la casilla y haz clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " en la parte superior."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.edit_email_template",
            product: "air"
          }), ", edita los elementos necesarios."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-email-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " en la parte inferior para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteEmailTemplate",
      children: "Eliminar plantillas de correo electrónico"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.email_template_menu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Marca la casilla de la plantilla de correo electrónico que quieres eliminar de la lista. Puedes seleccionar más de una plantilla."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirRemove, {}), " en la parte superior de la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_delete",
            product: "air"
          }), " cuando aparezca la ventana del mensaje."]
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