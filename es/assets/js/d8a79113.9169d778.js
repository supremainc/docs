"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["36938"], {
28390: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_visitor_mdx_d8a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-visitor-mdx-d8a.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_visitor_mdx_d8a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-visitor","title":"Configurar visitante","description":"Configura los sitios y PC de visita. Además, configura los términos y condiciones para los visitantes. Crea los campos de información que necesites de los visitantes mediante el campo personalizado de visitante.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-visitor.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-visitor","permalink":"/docs/es/platform/biostar_x/settings-visitor","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-visitor.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-visitor","title":"Configurar visitante","description":"Configura los sitios y PC de visita. Además, configura los términos y condiciones para los visitantes. Crea los campos de información que necesites de los visitantes mediante el campo personalizado de visitante.","keywords":["Gestión de visitantes","Campo Personalizado"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar área},{","permalink":"/docs/es/platform/biostar_x/settings-map-manage-area"},"next":{"title":"Configuración de Integración de Directorios","permalink":"/docs/es/platform/biostar_x/settings-diretory-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-visitor.mdx


const frontMatter = {
	id: 'settings-visitor',
	title: 'Configurar visitante',
	description: 'Configura los sitios y PC de visita. Además, configura los términos y condiciones para los visitantes. Crea los campos de información que necesites de los visitantes mediante el campo personalizado de visitante.',
	keywords: [
		'Gestión de visitantes',
		'Campo Personalizado'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configuración de visitante",
  "id": "settings-visitor",
  "level": 2
}, {
  "value": "Configuración del sitio de visitante",
  "id": "settings-visitor-site",
  "level": 3
}, {
  "value": "Configuración de PC de visitante",
  "id": "settings-visitor-pc",
  "level": 3
}, {
  "value": "Seleccionar PC de visitante",
  "id": "settings-visitor-assign-pc",
  "level": 3
}, {
  "value": "Acceso directo a la página de aplicación de visitante",
  "id": "settings-visitor-pc-link",
  "level": 3
}, {
  "value": "Términos y configuración de visitante",
  "id": "settings-visitor-terms",
  "level": 2
}, {
  "value": "Configura los campos personalizados de visitantes",
  "id": "settings-visitor-custom-field",
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
  }, {Cmd, IcEdit, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Configura los sitios y PC de visita. Además, configura los términos y condiciones para los visitantes. Crea los campos de información que necesites de los visitantes mediante el campo personalizado de visitante."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La configuración ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.visitor",
              product: "2"
            }), " está disponible mediante opciones adicionales con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " o superior. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Activa la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.serverMatching.use",
              product: "2"
            }), " para usar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.visitor",
              product: "2"
            }), ". Para obtener más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settings-visitor",
      children: "Configuración de visitante"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
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
          children: ["En la barra lateral izquierda, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.visitor",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sigue las instrucciones a continuación para configurar los ajustes de visitante."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "settings-visitor-site",
          children: "Configuración del sitio de visitante"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Define el grupo de acceso que se utilizará en la PC de visita y la PC de administración de cada sitio. También define si se usarán tarjetas. Si usas tarjetas, configura también el tipo de tarjeta y el formato de datos de tarjeta."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-site-settings.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.configure.th.name",
                product: "2"
              }), ": Define el nombre del sitio."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: "Se pueden ingresar hasta 48 caracteres para el nombre del sitio."
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.accessGroup",
                product: "2"
              }), ": Selecciona el grupo de acceso que se asignará al visitante."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Preconfigurar los grupos de acceso para visitantes facilita la administración. Para más información sobre la configuración de grupos de acceso, consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-access-control-manage-access-group",
                  children: "lo siguiente"
                }), "."]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), " ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), ": Define si se usará una tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardType",
                product: "2"
              }), ": Selecciona el tipo de tarjeta que se usará en el sitio. El tipo de tarjeta se activa solo cuando seleccionas ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), " ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardEnrol.cardFormat",
                product: "2"
              }), ": Configura el formato para leer los datos de la tarjeta. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardEnrol.cardFormat",
                product: "2"
              }), " se activa solo cuando estableces ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardType",
                product: "2"
              }), " en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user.cardEnrol.cardTypeWiegand",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.setting.button.apply",
            product: "2"
          }), " para guardar la configuración del sitio de visitante."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "settings-visitor-pc",
          children: "Configuración de PC de visitante"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Configura la PC de visita y la PC de administración."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-visit-pc-settings.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.name",
                product: "2"
              }), ": Define el nombre de la PC de visita y de la PC de administración."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerPrint",
                product: "2"
              }), " ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.enrollment_device.device_name",
                product: "2"
              }), ": Selecciona un dispositivo para inscribir las huellas digitales de los visitantes cuando accedan al sitio mediante autenticación de huella."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), " ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.enrollment_device.device_name",
                product: "2"
              }), ": Selecciona un dispositivo para emitir tarjetas a los visitantes cuando accedan al sitio mediante autenticación con tarjeta. El nombre del dispositivo de tarjeta se activa solo si configuraste una visita en la que seleccionaste usar tarjeta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.site",
                product: "2"
              }), ": Selecciona un sitio para gestionar la visita en la PC de visita."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.setting.button.apply",
            product: "2"
          }), " para guardar la configuración de la PC de visita."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Se pueden ingresar hasta 48 caracteres para el nombre de la PC de visita."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Se pueden usar simultáneamente los dispositivos de huella y de tarjeta. Solo se puede seleccionar uno por tipo."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Solo se puede seleccionar un sitio por PC."
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "settings-visitor-assign-pc",
          children: "Seleccionar PC de visitante"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona la PC configurada en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.pc.setting",
            product: "2"
          }), " y asígnala a la PC actual."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-visit-pc-select.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.setting.button.apply",
            product: "2"
          }), " para guardar la configuración."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "settings-visitor-pc-link",
          children: "Acceso directo a la página de aplicación de visitante"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Crea un ícono de acceso directo a la página de aplicación de visitante en el escritorio de la PC de aplicación. Arrastra la URL del elemento ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.link.visitPCKIOSK",
            product: "2"
          }), " al escritorio."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-page-shortcut.png"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Accede a la página de aplicación de visitante conectándote a la URL en un navegador web."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-visitor-welcome-screen.png"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settings-visitor-terms",
      children: "Términos y configuración de visitante"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Administra los ajustes clave de visitante como los términos de entrada, la política de privacidad y los mensajes de guía."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-terms-visitor-settings.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Términos y condiciones"
          }), ": Configura los términos y condiciones para los visitantes. Haz clic en ", (0,jsx_runtime.jsx)(IcEdit, {}), " para activar el campo de entrada e introducir el contenido de los términos y condiciones."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Se pueden ingresar hasta 65,535 caracteres para la redacción de los términos y condiciones."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Se pueden ingresar hasta 64 caracteres para la frase de aceptación de términos y condiciones."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Política de privacidad"
          }), ": Configura la política de privacidad para los visitantes. Haz clic en ", (0,jsx_runtime.jsx)(IcEdit, {}), " para activar el campo de entrada e introducir la política de privacidad."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Se pueden ingresar hasta 65,535 caracteres para la redacción de la política de privacidad."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Se pueden ingresar hasta 64 caracteres para la frase de aceptación de la política de privacidad."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.periodKeepSensitive",
            product: "2"
          }), ": Define el período de conservación de los datos personales que los visitantes proporcionan al registrarse. Haz clic en ", (0,jsx_runtime.jsx)(IcEdit, {}), " para activar el campo de entrada e introducir el número de días de conservación de los datos personales."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Elimina a los visitantes cuyo período de datos personales haya expirado en el menú ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.visitor",
                product: "2"
              }), "."]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.guideAfterRegister",
            product: "2"
          }), ": Configura la guía que aparecerá en pantalla como ventana emergente cuando un visitante complete una solicitud de visita. Haz clic en ", (0,jsx_runtime.jsx)(IcEdit, {}), " para activar el campo de entrada e introducir la guía para los visitantes."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Se pueden ingresar hasta 65,535 caracteres para la redacción de la guía."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Si no se ingresa la redacción de la guía, no se mostrará nada en pantalla cuando los visitantes completen su solicitud de visita."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.defaultActivePeriod",
            product: "2"
          }), ": Define el período de acceso para los visitantes. Haz clic en ", (0,jsx_runtime.jsx)(IcEdit, {}), " para activar el campo de entrada e ingresar el período de acceso predeterminado para visitantes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "settings-visitor-custom-field",
      children: "Configura los campos personalizados de visitantes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agrega campos personalizados de visitantes para información adicional; estos campos aparecen en la página de solicitud de visitas."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-visitor-custom-visitor-field.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.order",
            product: "2"
          }), ": Establece el orden del campo personalizado de visitantes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.name",
            product: "2"
          }), ": Establece el nombre del campo personalizado de visitantes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type",
            product: "2"
          }), ": Elige la caja de texto, la caja numérica o el cuadro combinado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.data",
            product: "2"
          }), ": Ingresa las opciones que aparecerán en los cuadros combinados. Separa cada elemento con un punto y coma (;). Los datos solo se activan cuando ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type",
            product: "2"
          }), " está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.combobox",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "visitor.setting.button.apply",
        product: "2"
      }), " para guardar la configuración."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["En una ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.textbox",
              product: "2"
            }), ", se permiten caracteres y números."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["En una ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.numericbox",
              product: "2"
            }), ", se permiten números y no se permiten caracteres."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["En un ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.combobox",
              product: "2"
            }), ", los elementos configurados para el campo se muestran como elementos. Si deseas configurar un campo de cuadro combinado como se muestra en la captura de pantalla siguiente, ingresa ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 1"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 2"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 3"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 4"
            }), " en el campo de datos."]
          }), "\n"]
        }), "\n"]
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