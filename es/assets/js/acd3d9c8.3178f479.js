"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35765"], {
66304: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_door_add_mdx_acd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-door-add-mdx-acd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_door_add_mdx_acd_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-door-add","title":"Registrar puerta","description":"Configure la puerta para el control de acceso. Seleccione el dispositivo de entrada/salida según la puerta o configure anti-passback para mejorar la seguridad y establezca alarmas.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-door-add.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-door-add","permalink":"/docs/es/platform/biostar_x/settings-door-add","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-door-add.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-door-add","title":"Registrar puerta","description":"Configure la puerta para el control de acceso. Seleccione el dispositivo de entrada/salida según la puerta o configure anti-passback para mejorar la seguridad y establezca alarmas.","keywords":["Puerta","Seguridad","Control de acceso"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Administrar grupo de puertas","permalink":"/docs/es/platform/biostar_x/settings-manage-door-group"},"next":{"title":"Modificar la información de la puerta​","permalink":"/docs/es/platform/biostar_x/settings-door-edit-info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-door-add.mdx


const frontMatter = {
	id: 'settings-door-add',
	title: 'Registrar puerta',
	description: 'Configure la puerta para el control de acceso. Seleccione el dispositivo de entrada/salida según la puerta o configure anti-passback para mejorar la seguridad y establezca alarmas.',
	keywords: [
		'Puerta',
		'Seguridad',
		'Control de acceso'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Antes de comenzar",
  "id": "before-start",
  "level": 2
}, {
  "value": "Registrar puerta",
  "id": "adding-door",
  "level": 2
}, {
  "value": "Configurar información básica",
  "id": "info",
  "level": 3
}, {
  "value": "Configurar la puerta",
  "id": "configdoor",
  "level": 3
}, {
  "value": "Configurar opciones adicionales",
  "id": "option",
  "level": 3
}, {
  "value": "Configurar anti-passback",
  "id": "antipassback",
  "level": 3
}, {
  "value": "Configurar anti-passback temporizado",
  "id": "timed-apb",
  "level": 3
}, {
  "value": "Configurar alarmas",
  "id": "alarm",
  "level": 3
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
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía describe cómo registrar y configurar puertas. Conecte dispositivos de entrada y salida para cada puerta y configure funciones de seguridad como anti-passback y autenticación dual para establecer un entorno de gestión de acceso sistemático. Además, configure alarmas basadas en el estado de la puerta para prevenir incidentes de seguridad con anticipación."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure los niveles de acceso, los grupos de acceso y los niveles de piso para el control de acceso antes de registrar puertas. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Registre los dispositivos antes de registrar puertas. Para obtener más información sobre el registro de dispositivos, consulte lo siguiente."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-devices"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-wiegand"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-slave-device"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-door",
      children: "Registrar puerta"
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
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.door.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-door-adding.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.addNewDoor",
            product: "2"
          }), ", configure cada elemento de la sección en orden."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.information",
                product: "2"
              }), ": Configure la información básica de la puerta. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#info",
                children: "lo siguiente"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.configuration",
                product: "2"
              }), ": Configure los dispositivos conectados a la puerta, los botones de entrada y salida y los sensores de puerta. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#configdoor",
                children: "lo siguiente"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.option",
                product: "2"
              }), ": Configure opciones adicionales. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#option",
                children: "lo siguiente"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.antiPassBack",
                product: "2"
              }), ": Configure la función anti-passback para gestionar el historial de acceso y mejorar la seguridad. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#antipassback",
                children: "lo siguiente"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "timedAPB.title",
                product: "2"
              }), ": Configure el tiempo de inicialización para la función anti-passback. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#timed-apb",
                children: "lo siguiente"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.alarm",
                product: "2"
              }), ": Configure la alarma para activar o bloquear el uso del dispositivo cuando ocurra una violación de anti-passback. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#alarm",
                children: "lo siguiente"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez completadas todas las configuraciones, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "info",
      children: "Configurar información básica"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.information",
        product: "2"
      }), ", ingrese o cambie el nombre, el grupo y la descripción de la puerta."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": Ingrese el nombre de la puerta. Ingrese un nombre que permita una gestión conveniente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group",
            product: "2"
          }), ": Seleccione el grupo de la puerta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), ": Ingrese una descripción breve de la puerta."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El nombre de la puerta puede tener hasta 48 caracteres."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre el registro de grupos de puertas, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door-group",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configdoor",
      children: "Configurar la puerta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.configuration",
        product: "2"
      }), ", configure los dispositivos conectados a la puerta, los botones de salida y los sensores de puerta."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-configuration.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.entryDevice",
            product: "2"
          }), ": Seleccione el dispositivo que se utilizará para la entrada. Si el dispositivo no está en la lista, regístrelo primero."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.doorRelay",
            product: "2"
          }), ": Elija el ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#relay",
            children: "relevador"
          }), " que funcionará como mecanismo de cierre de la puerta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitButton",
            product: "2"
          }), ": Seleccione el puerto que se utilizará como botón de salida."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType",
                product: "2"
              }), ": Se puede configurar en ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/C"
              }), " (", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#nc",
                children: "Normalmente Cerrado"
              }), ") o ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/O"
              }), " (", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#no",
                children: "Normalmente Abierto"
              }), ")."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.simulateUnlockSupported",
                product: "2"
              }), ": Configure para que una entrada del botón de salida genere un registro de solicitud de apertura de puerta sin activar el relevador."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.doorSensor",
            product: "2"
          }), ": Elija el puerto para confirmar el estado de la puerta. Si se establece en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), ", se deshabilitará el uso de la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.alarm",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType",
                product: "2"
              }), ": Se puede configurar en ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/C"
              }), " (", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#nc",
                children: "Normalmente Cerrado"
              }), ") o ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/O"
              }), " (", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#no",
                children: "Normalmente Abierto"
              }), ")."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbUseDoorSensor",
                product: "2"
              }), ": Configure si se utilizará el sensor de puerta al usar la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbUseDoorSensor",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title",
              product: "2"
            }), " está habilitado, no se podrá usar la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.apbUseDoorSensor",
              product: "2"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitDevice",
            product: "2"
          }), ": Seleccione el dispositivo que se utilizará para la salida."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si seleccionó una cerradura de puerta inalámbrica para ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice",
              product: "2"
            }), ", también debe seleccionar una cerradura de puerta inalámbrica para ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si seleccionó una cerradura de puerta inalámbrica para ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice",
              product: "2"
            }), ", no podrá usar la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.doorRelay",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los modelos CoreStation no se pueden usar como dispositivos de entrada ni de salida."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option",
      children: "Configurar opciones adicionales"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.option",
        product: "2"
      }), ", configure opciones adicionales para la puerta."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-aditional-option.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.open",
            product: "2"
          }), ": Configure las opciones de apertura de la puerta."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openTime",
                product: "2"
              }), ": Configure la duración durante la cual la puerta permanece abierta después de completar la autenticación. La puerta se bloqueará automáticamente después de este tiempo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce",
                product: "2"
              }), ": La puerta se bloqueará cuando el sensor detecte que se ha cerrado. Si se establece en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnceOn",
                product: "2"
              }), ", no se podrá usar la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor",
                product: "2"
              }), ": Si se usa una puerta automática, el relevador puede operar independientemente del estado del sensor de puerta. Si se establece en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnceOn",
                product: "2"
              }), ", no se podrá usar la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El valor de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.openTime",
              product: "2"
            }), " puede variar según el tipo de dispositivo de cierre de puerta que se use."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.dualAuthentication",
            product: "2"
          }), ": Configura para requerir que dos personas (un usuario regular y un administrador) autentiquen credenciales para abrir la puerta."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), ": Selecciona el dispositivo que se usará para la autenticación dual. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), ": Selecciona el dispositivo para la autenticación dual."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.schedule",
                product: "2"
              }), ": Selecciona el horario para usar la autenticación dual. Si el horario deseado no está disponible, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAddSchedule",
                product: "2"
              }), " para agregar uno."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType",
                product: "2"
              }), ": Define el orden de la autenticación del administrador."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "door.dualAuthentication.approvalType.none",
                    product: "2"
                  }), ": Se requieren dos autenticaciones sin importar el grupo de autenticación."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "door.dualAuthentication.approvalType.last",
                    product: "2"
                  }), ": El usuario general debe autenticarse primero, seguido de un usuario autenticado incluido en el grupo de autenticación establecido."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.approvalGroup",
                product: "2"
              }), ": Define el grupo al que pertenece el administrador. Esta opción está disponible cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType",
                product: "2"
              }), " se establece en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.last",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.authenticationTimeout",
                product: "2"
              }), ": Define el tiempo de espera entre la primera y la segunda autenticación. Si la segunda autenticación no se completa dentro del tiempo establecido, la puerta no se abrirá."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Modifica la configuración en el siguiente menú para cambiar la autenticación dual del dispositivo configurado con el límite de ocupantes. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shell.header.setting"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.menu.advancedAc.root"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "zone.occupancy.title",
                  product: "2"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "zone.occupancy.title",
                  product: "2"
                }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-advanced-ac",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre la configuración de horarios, consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-schedule",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiTailSensor",
            product: "2"
          }), ": Configura para detectar tailgating cuando una persona no autorizada sigue a una autorizada para entrar."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.sensor",
              product: "2"
            }), ": Selecciona un sensor para detectar tailgating."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "antipassback",
      children: "Configurar anti-passback"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#apb",
        children: "Anti-passback"
      }), " se usa para gestionar el historial de acceso y mejorar la seguridad. Previene situaciones en las que un usuario entrega su tarjeta de entrada a otro después de ingresar y detiene a personas externas que siguen a usuarios con privilegios de acceso."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consulta a continuación para completar la configuración en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.antiPassBack",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.type",
            product: "2"
          }), ": Elige el tipo de anti-passback."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.none",
                product: "2"
              }), ": No utiliza la función de anti-passback."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.soft",
                product: "2"
              }), ": Durante una violación de anti-passback, se permite la entrada pero se activa una alarma o se crea un registro en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.hard",
                product: "2"
              }), ": Durante una violación de anti-passback, la entrada no está permitida y se activará una alarma o se creará un registro en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime",
            product: "2"
          }), ": Define el tiempo hasta que se reinicie la función de anti-passback. Admite hasta 7 días (10080 minutos); si se establece en 0, no se reinicia."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Funciona únicamente cuando se instalan dispositivos de entrada y salida; si en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.configuration",
              product: "2"
            }), " la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice",
              product: "2"
            }), " se establece en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.none",
              product: "2"
            }), ", quedará inutilizable. Para el método de configuración del dispositivo de salida, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#configdoor",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack",
              product: "2"
            }), " requiere un dispositivo maestro configurado vía RS-485 y un dispositivo esclavo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si se habilita la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack",
              product: "2"
            }), " no estará disponible."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timed-apb",
      children: "Configurar anti-passback temporizado"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando un usuario intenta volver a autenticarse en el mismo dispositivo después de la autenticación de ingreso, la función de anti-passback impide la reautenticación inmediata. La sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timedAPB.title",
        product: "2"
      }), " define el tiempo de inicialización de la función de anti-passback para limitar de forma efectiva las entradas frecuentes de los usuarios."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-time-litmit-apb.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.field",
            product: "2"
          }), ": Selecciona el dispositivo que usará la función de anti-passback temporizado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime",
            product: "2"
          }), ": Define el tiempo hasta que se reinicie la función de anti-passback. La unidad de entrada es minutos (min) y el valor predeterminado es 10 minutos. Admite un máximo de 60 minutos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apb.bypassGroup",
            product: "2"
          }), ": Selecciona los grupos de acceso que siempre pueden pasar sin estar sujetos al anti-passback temporizado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alarm",
      children: "Configurar alarmas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.alarm",
        product: "2"
      }), ", configura que se active una alarma o se bloquee el uso del dispositivo cuando la puerta se abra por la fuerza, quede abierta o ocurra una violación de anti-passback. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " para agregar una alarma al elemento."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-alarm.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpen",
            product: "2"
          }), ": Configura las acciones de alarma cuando la puerta quede abierta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpenTime",
            product: "2"
          }), ": Define el tiempo para que suene la alarma cuando la puerta haya estado abierta durante un periodo prolongado. Determina el tiempo máximo que la puerta puede permanecer abierta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.forcedOpen",
            product: "2"
          }), ": Configura las acciones de alarma cuando la puerta se abra por la fuerza."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiPassBack",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title",
            product: "2"
          }), ": Configura las acciones de alarma para violaciones de anti-passback o anti-passback temporizado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "door.antiPassBack",
          product: "2"
        }), " está disponible únicamente si el dispositivo de salida está registrado."]
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