"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["75220"], {
20380: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_virtual_device_event_log_mdx_832_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-virtual-device-event-log-mdx-832.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_virtual_device_event_log_mdx_832_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-virtual-device-event-log","title":"Integrar el registro de eventos de dispositivos virtuales","description":"Esta guía explica cómo inscribir un dispositivo virtual y registrar en **BioStar X** los eventos que ocurren en sistemas externos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-virtual-device-event-log.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-virtual-device-event-log","permalink":"/docs/es/platform/biostar_x/settings-virtual-device-event-log","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-virtual-device-event-log.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-virtual-device-event-log","title":"Integrar el registro de eventos de dispositivos virtuales","description":"Esta guía explica cómo inscribir un dispositivo virtual y registrar en **BioStar X** los eventos que ocurren en sistemas externos.","keywords":["Dispositivo Virtual","Registros de eventos","API","Integración"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar acceso remoto","permalink":"/docs/es/platform/biostar_x/settings-remote-access"},"next":{"title":"Plugin","permalink":"/docs/es/platform/biostar_x/plugins"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-virtual-device-event-log.mdx


const frontMatter = {
	id: 'settings-virtual-device-event-log',
	title: 'Integrar el registro de eventos de dispositivos virtuales',
	description: 'Esta guía explica cómo inscribir un dispositivo virtual y registrar en **BioStar X** los eventos que ocurren en sistemas externos.',
	keywords: [
		'Dispositivo Virtual',
		'Registros de eventos',
		'API',
		'Integración'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "¿Cuándo usarlo?",
  "id": "cuándo-usarlo",
  "level": 2
}, {
  "value": "Antes de comenzar",
  "id": "antes-de-comenzar",
  "level": 2
}, {
  "value": "Registrar dispositivo virtual",
  "id": "registrar-dispositivo-virtual",
  "level": 2
}, {
  "value": "Gestionar grupos de dispositivos",
  "id": "gestionar-grupos-de-dispositivos",
  "level": 3
}, {
  "value": "Limitaciones de dispositivos virtuales",
  "id": "limitaciones-de-dispositivos-virtuales",
  "level": 3
}, {
  "value": "Registrar eventos mediante API",
  "id": "registrar-eventos-mediante-api",
  "level": 2
}, {
  "value": "Tipo de evento admitido",
  "id": "tipo-de-evento-admitido",
  "level": 3
}, {
  "value": "Parámetros de la API",
  "id": "parámetros-de-la-api",
  "level": 3
}, {
  "value": "Recuperar registro de eventos",
  "id": "recuperar-registro-de-eventos",
  "level": 2
}, {
  "value": "Registro de auditoría",
  "id": "registro-de-auditoría",
  "level": 2
}, {
  "value": "Solución de problemas",
  "id": "solución-de-problemas",
  "level": 2
}, {
  "value": "Si el botón <Cmd class=\"normal\"></Cmd> no es visible",
  "id": "si-el-botón--no-es-visible",
  "level": 3
}, {
  "value": "Cuando falla la llamada a la API",
  "id": "cuando-falla-la-llamada-a-la-api",
  "level": 3
}, {
  "value": "Cuando no se recuperan los eventos",
  "id": "cuando-no-se-recuperan-los-eventos",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al usar la función de dispositivo virtual, es posible registrar eventos como entradas y salidas directamente en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " desde aplicaciones móviles o servicios de terceros al integrar la función de gestión de asistencia. Es posible gestionar sistemáticamente los registros de eventos sin un dispositivo físico, lo cual resulta útil para la integración con sistemas externos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cuándo-usarlo",
      children: "¿Cuándo usarlo?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice la función de integración de registro de eventos de dispositivos virtuales en las siguientes situaciones."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al gestionar eventos del sistema externo de gestión de T&A en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando necesite guardar registros de acceso (Punch Log) desde la aplicación móvil o un sistema externo directamente en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " (registrar eventos de entrada/salida sin vinculación de base de datos)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando sea necesario enviar eventos directamente mediante la API de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " desde aplicaciones o servicios de terceros"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Debe activarse la licencia ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event Log API"
      }), ". Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
        href: "licensing#features-add-ons",
        children: "lo siguiente"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la aplicación de licencias, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-license-biostar-x-license",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registrar-dispositivo-virtual",
      children: "Registrar dispositivo virtual"
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
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la parte superior derecha de la lista de dispositivos y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addVirtualDevice",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-device-add-virtual-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese la información de configuración cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addVirtualDevice",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-device-add-virtual-device-settings.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.name",
                product: "2"
              }), ": Ingrese el nombre del dispositivo virtual."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.group",
                product: "2"
              }), ": Seleccione el grupo para asignar el dispositivo virtual."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.deviceId",
                product: "2"
              }), ": Ingrese el ID único del dispositivo virtual. Debe especificarse dentro de un rango que no duplique un ID de dispositivo existente."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.description",
                product: "2"
              }), ": Ingrese la descripción del dispositivo virtual."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla para registrar el dispositivo virtual."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceId",
              product: "2"
            }), " puede especificarse dentro del rango de 100000 - 999999. Debe especificarse dentro de un rango que no duplique un ID de dispositivo Suprema existente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El valor de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceId",
              product: "2"
            }), " que ya se ha creado no puede modificarse."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gestionar-grupos-de-dispositivos",
      children: "Gestionar grupos de dispositivos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los dispositivos virtuales pueden usar la función de grupos de dispositivos igual que los dispositivos normales."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ubique el dispositivo en el mismo grupo que los dispositivos existentes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Si el usuario tiene permisos de grupo, puede otorgar permisos a los dispositivos virtuales dentro de ese grupo."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre los grupos de dispositivos, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-device-group",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "limitaciones-de-dispositivos-virtuales",
      children: "Limitaciones de dispositivos virtuales"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Los dispositivos virtuales aparecen solo en el siguiente menú."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.setting"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.device.root"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Vea todos los registros de eventos y la vista previa de eventos en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.arena"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Recupere registros de eventos desde ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.data"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["El dispositivo virtual no puede usar las funciones de control de acceso en la puerta ni en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.advancedAc.root"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["No puede especificarse como dispositivo para la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Los dispositivos virtuales no aparecen en la lista de dispositivos de la barra lateral del menú ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "No es posible usar la función de control del dispositivo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["No se incluyen en el número de dispositivos de la licencia ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi Communication Server"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registrar-eventos-mediante-api",
      children: "Registrar eventos mediante API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tipo-de-evento-admitido",
      children: "Tipo de evento admitido"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solo pueden registrarse los siguientes tipos de eventos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Acceso concedido"
          }), " (", (0,jsx_runtime.jsx)(_components.code, {
            children: "4088"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Acceso denegado"
          }), " (", (0,jsx_runtime.jsx)(_components.code, {
            children: "6400"
          }), ")"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parámetros-de-la-api",
      children: "Parámetros de la API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Debe proporcionar los siguientes parámetros al registrar eventos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parámetro"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Descripción"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Obligatorio"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dev_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solo se permiten ID de dispositivos virtuales registrados"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Si"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "evt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceso concedido o acceso denegado"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Si"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fecha y hora"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hora de ocurrencia del evento"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Si"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID Usuario"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Si"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tna_key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disponible únicamente para la entrada con el valor especificado"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opción"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title='Request example'",
        children: "{\n    \"packet_device_id\" : 100003, // required\n    \"is_virtual_device\" : \"true\", // required\n    \"events\":[ //4088 access granted, 6400 access denied\n        {\n            \"dev_id\": 100003, // required\n            \"evt\": 6400, // required\n            \"datetime\": \"2025-08-21T14:12:00Z\", // required\n            \"user_id\": \"2\", // required\n            \"tna_key\": \"1\"\n        },\n        {\n            \"dev_id\": 100003,\n            \"evt\": 6400,\n            \"datetime\": \"2025-08-21T14:13:01Z\",\n            \"user_id\": \"2\",\n            \"tna_key\": \"1\"\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title='Response example'",
        children: "{\n    \"Response\": {\n        \"code\": \"0\",\n        \"link\": \"https://support.supremainc.com/en/support/home\",\n        \"message\": \"Success\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Es posible registrar múltiples eventos para un solo dispositivo virtual a la vez con una sola llamada a la API."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre el uso de la API, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../api/bsxapi#tag/Virtual-Device-and-Event-Import",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recuperar-registro-de-eventos",
      children: "Recuperar registro de eventos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recupere los registros de eventos grabados mediante el dispositivo virtual en el menú."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), ": Recupere y filtre todos los eventos, vista previa de eventos"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), ": Recupere y filtre todos los eventos"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la recuperación de eventos en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.data"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "data-generate-reports",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registro-de-auditoría",
      children: "Registro de auditoría"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El rastro de auditoría se registra como se muestra en el siguiente ejemplo cuando se registran eventos."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Access granted, 2025/08/05 03:37:49, outside access door on 12th floor, Administrator(1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Incluso si los eventos se registran por lotes, se crea una entrada de auditoría individual para cada evento."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.system.auditTrail"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-audit-trail",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solución-de-problemas",
      children: "Solución de problemas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "si-el-botón--no-es-visible",
      children: ["Si el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.addVirtualDevice",
        product: "2",
        className: "normal"
      }), " no es visible"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verifique si la licencia ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event Log API"
      }), " está activada."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cuando-falla-la-llamada-a-la-api",
      children: "Cuando falla la llamada a la API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifique si la licencia ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Log API"
          }), " está activada."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifique que el ID de dispositivo sea un dispositivo virtual registrado."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifique que el formato de los parámetros de la API sea correcto."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cuando-no-se-recuperan-los-eventos",
      children: "Cuando no se recuperan los eventos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifique que el dispositivo registrado sea el ID de dispositivo virtual correcto."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifique que el dispositivo virtual esté seleccionado en el filtro de eventos."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compruebe los registros de auditoría para garantizar que no se produjeron errores al registrar eventos."
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