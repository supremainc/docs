"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["44289"], {
64340: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_check_door_status_mdx_475_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-check-door-status-mdx-475.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_check_door_status_mdx_475_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-door-status","title":"Verifica el estado de la puerta","description":"Supervisa el estado de la puerta de entrada en tiempo real para operar el sistema de seguridad de forma confiable. También verifica el estado anómalo del dispositivo asignado a la puerta de entrada.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/check-door-status.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-door-status","permalink":"/docs/es/platform/biostar_x/check-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-door-status.mdx","tags":[],"version":"current","frontMatter":{"id":"check-door-status","title":"Verifica el estado de la puerta","description":"Supervisa el estado de la puerta de entrada en tiempo real para operar el sistema de seguridad de forma confiable. También verifica el estado anómalo del dispositivo asignado a la puerta de entrada.","keywords":["Monitorizar","Puerta"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Supervisar Puertas","permalink":"/docs/es/platform/biostar_x/monitoring-door"},"next":{"title":"Control de puerta","permalink":"/docs/es/platform/biostar_x/control-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/door-tree.json
var door_tree_namespaceObject = JSON.parse('[{"name":"Todos los grupos de puertas de entrada","children":[{"name":"Grupo de puertas de entrada A","type":"door-group","children":[{"name":"Puerta","type":"door-device","children":[{"name":"Sensor de puerta","type":"door-sensor"},{"name":"Relé de puerta","type":"door-relay"},{"name":"Estado de armado","type":"door-arm"},{"name":"Cámara","type":"door-camera"}]}]}]},{"name":"Todos los grupos de ascensores","type":"ascensor","children":[{"name":"Grupo de ascensores B","type":"elevator-group","children":[{"name":"Ascensor 1","type":"elevator-device","children":[{"name":"Ascensor 1 - primer piso","type":"elevator-floor"},{"name":"Ascensor 1 - segundo piso","type":"elevator-floor"}]}]}]},{"name":"Todos los AC avanzados","type":"access-control","children":[{"name":"Configuración de control de acceso","type":"access-zone"}]}]')
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/check-door-status.mdx


const frontMatter = {
	id: 'check-door-status',
	title: 'Verifica el estado de la puerta',
	description: 'Supervisa el estado de la puerta de entrada en tiempo real para operar el sistema de seguridad de forma confiable. También verifica el estado anómalo del dispositivo asignado a la puerta de entrada.',
	keywords: [
		'Monitorizar',
		'Puerta'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Antes de comenzar",
  "id": "antes-de-comenzar",
  "level": 2
}, {
  "value": "Conoce la estructura del árbol",
  "id": "door-tree-structure",
  "level": 2
}, {
  "value": "Verifica el estado",
  "id": "verifica-el-estado",
  "level": 2
}, {
  "value": "Verificar errores de conexión y alarmas",
  "id": "check-the-error-status",
  "level": 3
}, {
  "value": "Verificar el estado del bloqueo de la puerta",
  "id": "check-the-door-lock",
  "level": 3
}, {
  "value": "Verificar el estado de la cámara",
  "id": "check-the-camera-status",
  "level": 3
}, {
  "value": "Verificar el estado de armado",
  "id": "check-the-security-status",
  "level": 3
}, {
  "value": "Verificar el estado del ascensor",
  "id": "verificar-el-estado-del-ascensor",
  "level": 3
}, {
  "value": "Expandir/contraer lista de grupos",
  "id": "expandircontraer-lista-de-grupos",
  "level": 2
}, {
  "value": "Grupo de nivel superior",
  "id": "grupo-de-nivel-superior",
  "level": 3
}, {
  "value": "Subgrupo",
  "id": "subgrupo",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAlert, IcArm, IcCamFail, IcCamOk, IcDisable, IcDisarm, IcErr, IcRelayLock, IcRelayUnlock, Image, StatusNormal, StatusOK, Treeview} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlert) _missingMdxReference("IcAlert", true);
  if (!IcArm) _missingMdxReference("IcArm", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  if (!IcDisarm) _missingMdxReference("IcDisarm", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusNormal) _missingMdxReference("StatusNormal", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!Treeview) _missingMdxReference("Treeview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Supervisa el estado de la puerta de entrada en tiempo real para operar el sistema de seguridad de forma confiable. Consulta de un vistazo el estado anómalo del dispositivo asignado a la puerta de entrada mediante el icono de estado proporcionado en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " y responde de inmediato cuando se produzca un problema."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " en la lista de accesos directos en la esquina superior izquierda de la pantalla. Verifica el estado de cada puerta de entrada en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " ubicada en la barra lateral izquierda de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asegúrate de que los dispositivos conectados a la puerta estén configurados correctamente. Comprueba que el dispositivo esté conectado a la red y actualizado con el firmware más reciente. En caso de un problema, primero verifica el estado de alimentación y la conexión de red del dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cómo añadir y configurar dispositivos, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-devices",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cómo añadir y configurar puertas, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.logUploadType",
              product: "2"
            }), " debe estar habilitada para supervisar o controlar el estado de la puerta de acceso. Activa esta función en la ruta de menú ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.server"
            }), ", en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.general",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función para conectar cámaras a la puerta mediante el servidor VMS está disponible como opción adicional con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " o superior. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-tree-structure",
      children: "Conoce la estructura del árbol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La estructura de árbol en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " de la barra lateral izquierda se organiza de la siguiente manera."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(Treeview, {
      data: door_tree_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cómo añadir y configurar dispositivos, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-devices",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cómo añadir y configurar puertas, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cómo añadir y configurar ascensores, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-elevators",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre la configuración avanzada de control de acceso, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "lo siguiente"
            }), " para vincular la puerta y la cámara."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verifica-el-estado",
      children: "Verifica el estado"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-error-status",
      children: "Verificar errores de conexión y alarmas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifica el estado de la puerta o del ascensor para confirmar su correcto funcionamiento. Consulta la información siguiente para el estado de cada icono."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Ícono de estado"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcErr, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Muestra estados anómalos del dispositivo, como desconexión, errores del servidor de comunicación y errores de sincronización."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcAlert, {
                width: "40px",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Muestra el estado cuando se producen alarmas de la puerta de entrada (apertura forzada, apertura prolongada, APB, alarmas de incendio, aperturas de emergencia) o alarmas de análisis de video con IA (detección de merodeo, detección de intrusión, etc.) se producen."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Haz clic en un icono de estado para ver información detallada en una descripción emergente. Haz clic en el enlace del mensaje de error de la descripción emergente para ir a la lista de dispositivos conectados a la puerta o al ascensor."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip.png"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic derecho en el dispositivo y selecciona la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reconnect"
        }), " o ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reboot"
        }), "."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip-device.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Configura las alarmas provenientes de la puerta o del ascensor mediante los siguientes ajustes."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-door-add#alarm",
                  children: "Ajustes de alarma de puerta"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-elevators-add#alarm",
                  children: "Ajustes de alarma de ascensor"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-advanced-ac",
                  children: "Ajustes avanzados de control de acceso"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Conecta la puerta de entrada y la cámara en las reglas de video para configurar alarmas. Para obtener información sobre los ajustes de reglas de video, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando está vinculado con el servidor VMS, las alarmas de eventos de IA para videos pueden enviarse a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ". Para obtener más información, consulta el manual del servidor VMS."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre el reconocimiento de alarmas, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event#acknowledge-alarm-and-record-action",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-door-lock",
      children: "Verificar el estado del bloqueo de la puerta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifica el estado de bloqueo de la puerta mediante el estado del relé de la puerta. Consulta lo siguiente para el estado del relé de la puerta."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Ícono de estado"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcRelayLock, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La puerta de entrada está bloqueada."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcRelayUnlock, {
                width: "auto",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La puerta está abierta."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-camera-status",
      children: "Verificar el estado de la cámara"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifica el estado de la cámara para asegurarte de que funcione con normalidad. Consulta lo siguiente para el estado de la cámara."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Ícono de estado"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamOk, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La cámara está conectada."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamFail, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La cámara está apagada o desconectada."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-security-status",
      children: "Verificar el estado de armado"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifica el estado de seguridad de la puerta de entrada o de los ajustes avanzados de control de acceso."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Ícono de estado"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcDisable, {
                width: "auto",
                height: "30px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Este es el icono para ajustes inactivos. Los ajustes inactivos no generan alarmas."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcArm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La puerta está armada."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcDisarm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La puerta está desarmada."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["El estado de seguridad se muestra solo cuando la puerta de entrada está configurada como ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "guard"
        }), ". Para obtener más información sobre la configuración de seguridad, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac-intrusion-alarm",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verificar-el-estado-del-ascensor",
      children: "Verificar el estado del ascensor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifica el estado del control de acceso por piso a través del ascensor."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Ícono de estado"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusNormal, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "El piso correspondiente está bloqueado a través del ascensor."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusOK, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "El piso correspondiente está desbloqueado a través del ascensor."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expandircontraer-lista-de-grupos",
      children: "Expandir/contraer lista de grupos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expande o contrae la lista mediante el grupo de nivel superior o el subgrupo."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-group-expand-collapse.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grupo-de-nivel-superior",
      children: "Grupo de nivel superior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), ", selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allDoorGroups"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allElevatorGroups"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allZones"
          }), " y haz clic derecho."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Elige ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.expandAll"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.collapseAll"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Todas las sublistas pueden expandirse o contraerse según el grupo de nivel superior seleccionado."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subgrupo",
      children: "Subgrupo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para expandir o contraer la lista de subgrupos en cada grupo de nivel superior, selecciona el subgrupo y haz clic derecho."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.expandBelow"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.collapseBelow"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puedes expandir o contraer la lista del subgrupo seleccionado."
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