"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["59090"], {
16042: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_advanced_mdx_028_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-advanced-mdx-028.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_advanced_mdx_028_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-advanced","title":"Configuración avanzada","description":"En la sección Configuración avanzada, configure Master Administrator, administración de dispositivos, pantalla/sonido, condiciones de funcionamiento y acciones.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-advanced.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-advanced","permalink":"/docs/es/platform/biostar_x/settings-device-details-advanced","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-advanced.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-advanced","title":"Configuración avanzada","description":"En la sección Configuración avanzada, configure Master Administrator, administración de dispositivos, pantalla/sonido, condiciones de funcionamiento y acciones.","keywords":["Dispositivo","avanzado"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración De Autenticación","permalink":"/docs/es/platform/biostar_x/settings-device-details-auth"},"next":{"title":"Configuración térmica y de máscara","permalink":"/docs/es/platform/biostar_x/settings-device-details-thermal-mask"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-advanced.mdx


const frontMatter = {
	id: 'settings-device-details-advanced',
	title: 'Configuración avanzada',
	description: 'En la sección Configuración avanzada, configure Master Administrator, administración de dispositivos, pantalla/sonido, condiciones de funcionamiento y acciones.',
	keywords: [
		'Dispositivo',
		'avanzado'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar Master Administrator",
  "id": "master-administrator",
  "level": 2
}, {
  "value": "Configuración de autenticación en dos pasos",
  "id": "two-step-authentication",
  "level": 2
}, {
  "value": "Agregar administradores",
  "id": "administrator",
  "level": 2
}, {
  "value": "Gestión de asistencia",
  "id": "attendance-management",
  "level": 2
}, {
  "value": "Ajustes de pantalla y sonido",
  "id": "screen-and-sound-settings",
  "level": 2
}, {
  "value": "Ajustes de condiciones y acciones de activación",
  "id": "triggerAction",
  "level": 2
}, {
  "value": "Configuración del registro de imágenes",
  "id": "image-log-settings",
  "level": 2
}, {
  "value": "Configuración de Wiegand",
  "id": "wiegang-settings",
  "level": 2
}, {
  "value": "Configuración de manipulación de seguridad",
  "id": "tamper-settings",
  "level": 2
}, {
  "value": "Configuración de intercomunicador analógico",
  "id": "analog-intercom-settings",
  "level": 2
}, {
  "value": "Configuración de la cámara",
  "id": "camera-settings",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
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
  }, {Cmd, Details, IcAdd, IcEdit, IcSearch, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Esta sección ofrece orientación para configurar elementos en los ajustes de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.advanced",
        product: "2"
      }), ". Consulte cómo configurar diversas funciones avanzadas, como Master Administrator, gestión de permisos de administrador, eventos de asistencia, pantalla y sonido, condiciones de funcionamiento y acciones, registros de imágenes, Wiegand, tamper de seguridad y el significado de cada opción. Aplique los ajustes adecuados para su entorno para gestionar el dispositivo de forma eficaz."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las opciones de red disponibles pueden variar según el tipo de dispositivo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el usuario ha realizado cambios, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), ". Los cambios no se aplicarán al dispositivo si no se guardan."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "master-administrator",
      children: "Agregar Master Administrator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), " mejora los permisos de administrador global del dispositivo para aumentar la seguridad y evitar el acceso y los cambios de ajustes no autorizados. Un dispositivo nuevo debe registrar un Master Administrator mediante esta función, y solo el Master Administrator registrado puede acceder al menú de administrador y cambiar ajustes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Seleccione dos tipos de credenciales para enrolar en el menú ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.advanced",
        product: "2"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.administrator",
        product: "2"
      }), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-adv-admin-master-admin.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Las credenciales que se pueden enrolar como ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), " son las siguientes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tipo de credencial"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Número de enrolamientos"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condiciones"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tarjeta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hasta 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solo admite los tipos CSN y Wiegand y no puede enrolar duplicados del mismo tipo."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rostro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hasta 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solo se puede enrolar en dispositivos equipados con el mismo algoritmo."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Huella"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Hasta 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debe ingresar al menos 8 dígitos."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para cambiar la credencial enrolada, haga clic en el botón ", (0,jsx_runtime.jsx)(IcEdit, {}), " a la derecha de esa credencial."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para eliminar la credencial enrolada, haga clic en el botón ", (0,jsx_runtime.jsx)(IcTrash2, {}), " a la derecha de esa credencial."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Condiciones de enrolamiento"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Debe enrolar al menos dos tipos de credenciales."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las mismas condiciones se aplican tanto a dispositivos nuevos como a dispositivos con actualización de firmware."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Todas las credenciales compatibles con el dispositivo pueden utilizarse como medios de autenticación."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta función solo está disponible en productos Suprema que admiten interfaces de usuario mediante pantallas LCD."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los dispositivos existentes que se hayan actualizado no mostrarán el menú ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title",
              product: "2"
            }), " en los ajustes del dispositivo de BioStar 2."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los dispositivos existentes que se hayan actualizado no ofrecen los ajustes de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title",
              product: "2"
            }), "; sin embargo, mejore los permisos de administrador global para aumentar la seguridad del dispositivo mediante la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title",
              product: "2"
            }), ". Para obtener más información sobre cómo configurar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title",
              product: "2"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#two-step-authentication",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre los dispositivos y las versiones de firmware que admiten esta función, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../how-to/master-admin",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "two-step-authentication",
      children: "Configuración de autenticación en dos pasos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los dispositivos existentes que se hayan actualizado no ofrecen los ajustes de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), "; sin embargo, mejore los permisos de administrador global para aumentar la seguridad del dispositivo mediante la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-adv-two-step.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si configura la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title",
        product: "2"
      }), " en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.use",
        product: "2"
      }), ", deberá utilizar dos o más credenciales para la autenticación de administrador global en el dispositivo. Por ejemplo, si se han enrolado una tarjeta y un PIN, deberá escanear la tarjeta e ingresar el PIN para autenticar correctamente durante la autenticación de administrador global."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Si no hay dos tipos de credenciales enroladas para todos los administradores, la activación falla y se muestra un mensaje de error. Enrole dos tipos de credenciales para todos los administradores e inténtelo nuevamente."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-device-adv-error-admin.png"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si el administrador global no está establecido en el dispositivo, aparecerá el siguiente mensaje emergente. Agregue administradores para todos los permisos en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.advanced",
          product: "2"
        }), " →  ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.administrator",
          product: "2"
        }), "."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-device-adv-warning-admin.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si se activa ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.masterAdmin.twoStepAuth.title",
          product: "2"
        }), " y luego se eliminan las credenciales de todos los administradores hasta quedar con menos de dos tipos, no se podrá acceder al menú de administrador en el dispositivo cuando no sea posible conectarse a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". Por lo tanto, tenga especial cuidado al eliminar credenciales de administrador."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "administrator",
      children: "Agregar administradores"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.administrator",
        product: "2"
      }), ", gestione los administradores del dispositivo por nivel de permiso."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-administrator.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para agregar un administrador por nivel de permiso, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), ". Cuando aparezca la lista de usuarios, seleccione el usuario deseado. Busque al usuario deseado haciendo clic en el botón ", (0,jsx_runtime.jsx)(IcSearch, {}), " en la lista de usuarios."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consulte los permisos para cada nivel a continuación."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Nivel"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Gestión de información del usuario"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Configuración del dispositivo"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.all",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.user",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "❌"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.configuration",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "❌"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Se pueden agregar hasta 1,000 administradores. La cantidad de administradores que se pueden agregar puede variar según la versión del firmware del dispositivo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para buscar el usuario registrado, haga clic en el botón ", (0,jsx_runtime.jsx)(IcSearch, {}), " en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.admin.searchTitle",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Settings"
            }), " permite cambiar ajustes de pantalla y sonido, red, RS-485, etc."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para eliminar un administrador, haga clic en el botón ", (0,jsx_runtime.jsx)(IcTrash2, {}), " a la derecha del administrador."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los administradores establecidos para cada dispositivo no afectan los permisos de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendance-management",
      children: "Gestión de asistencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tna",
        product: "2"
      }), " permite cambiar los nombres de eventos de asistencia o establecer modos de asistencia."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-tna.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaMode",
            product: "2"
          }), ": Establece cómo se registran los eventos de asistencia."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.unused",
                product: "2"
              }), ": No se pueden registrar eventos de asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.byUser",
                product: "2"
              }), ": El usuario puede seleccionar el evento de asistencia deseado al autenticarse."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), ": Los eventos de asistencia cambian automáticamente según un horario establecido. Seleccione un horario para aplicar a los eventos de asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.lastChoice",
                product: "2"
              }), ": El último evento de asistencia utilizado puede seguir usándose."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.fixed",
                product: "2"
              }), ": Solo se puede usar el evento de asistencia seleccionado. Elija el evento de asistencia fijo que desea usar."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaRequired",
            product: "2"
          }), ": Configura que se requiera al usuario registrar un evento de asistencia al autenticarse."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Esta opción puede usarse cuando la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.tnaMode",
              product: "2"
            }), " está configurada en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.byUser",
              product: "2"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaEvent",
            product: "2"
          }), ": Modifique los nombres de los eventos de asistencia o agregue horarios cuando la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaMode",
            product: "2"
          }), " esté configurada en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.tna.mode.bySchedule",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.eventKey",
                product: "2"
              }), ": Lista de claves que se pueden usar para registrar asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.label",
                product: "2"
              }), ": Cambie el nombre del evento de asistencia según ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.eventKey",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.schedule",
                product: "2"
              }), ": Configure un horario para cambios automáticos cuando la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.tnaMode",
                product: "2"
              }), " esté configurada en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-setting-device-edit-advanced-tna-auto.png"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los dispositivos sin pantalla LCD pueden establecer los modos de asistencia en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.fixed",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.bySchedule",
              product: "2"
            }), " y pueden registrar eventos de asistencia fijos o eventos de asistencia que cambien según un horario preestablecido. Los dispositivos compatibles son BioEntry P2, BioEntry W2, XPass D2 y XPass 2."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración de nuevos horarios, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "screen-and-sound-settings",
      children: "Ajustes de pantalla y sonido"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie los ajustes relacionados con la pantalla y el sonido del dispositivo. Las opciones disponibles pueden variar según el dispositivo."
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioEntry P2, BioEntry W2, XPass D2, XPass 2"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), ": Active o desactive el sonido."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.ledBuzzer",
              product: "2"
            }), ": Seleccione y configure los elementos de evento que activarán el LED o el zumbador."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.keypadBackLight",
              product: "2"
            }), ": Active o desactive la retroiluminación del teclado. Cuando esta opción está activada, la luz detrás del teclado se enciende, lo que facilita identificar las teclas en entornos oscuros. Identifique fácilmente las teclas incluso en entornos oscuros."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.keypadBackLight",
            product: "2"
          }), " está disponible en el hardware XPass D2 V02M y en la versión de firmware 1.7.1 o superior."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioStation 2, BioStation L2, BioLite N2, FaceLite"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.language",
              product: "2"
            }), ": Configure el idioma que se mostrará en la pantalla del dispositivo. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.updateResource",
              product: "2"
            }), " para enviar archivos de recursos de idioma al dispositivo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), ": Defina el nivel de sonido predeterminado que produce el dispositivo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.menuTimeout",
              product: "2"
            }), ": Defina el tiempo que tarda en pasar de la pantalla de menú a la pantalla inactiva."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.theme",
              product: "2"
            }), ": Cambie el estilo de la pantalla de inicio del dispositivo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.backlightTimeout",
              product: "2"
            }), ": Establezca el tiempo antes de que la luz de la pantalla se apague automáticamente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.msgTimeout",
              product: "2"
            }), ": Establezca el tiempo antes de que los mensajes desaparezcan automáticamente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVoice",
              product: "2"
            }), ": Utilice la guía por voz en lugar de tonos de notificación."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.background",
              product: "2"
            }), ": Defina los elementos que se mostrarán en el fondo de la pantalla de inicio del dispositivo."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.logo",
                  product: "2"
                }), ": Los usuarios pueden mostrar las imágenes que registraron en la pantalla de inicio del dispositivo. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " para registrar una imagen."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.notice",
                  product: "2"
                }), ": Los administradores pueden mostrar sus entradas en la pantalla de inicio."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.slideShow",
                  product: "2"
                }), ": Los usuarios pueden mostrar hasta 10 imágenes registradas como presentación de diapositivas en la pantalla de inicio. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " para registrar una imagen."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " para reflejar los cambios en tiempo real en el dispositivo."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Si cambia el tipo de fondo de pantalla, hacer clic en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " no lo aplicará al dispositivo. En la parte inferior de la pantalla, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.apply",
                    product: "2"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Las opciones ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.notice",
                    product: "2"
                  }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.slideShow",
                    product: "2"
                  }), " son compatibles con el modelo BioStation 2."]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), ": Configure los efectos de sonido que se reproducirán al iniciar, al autenticar correctamente y al fallar la autenticación. Seleccione archivos ", (0,jsx_runtime.jsx)(_components.em, {
              children: "*.wav"
            }), " de hasta 500 Kb de tamaño. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.browse",
              product: "2"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.update",
                product: "2"
              }), " para reflejar los cambios en tiempo real en el dispositivo."]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioStation 3, BioStation A2, FaceStation 2, FaceStation F2, X-Station 2"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.language",
              product: "2"
            }), ": Configure el idioma que se mostrará en la pantalla del dispositivo. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.updateResource",
              product: "2"
            }), " para enviar archivos de recursos de idioma al dispositivo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), ": Defina el nivel de sonido predeterminado que produce el dispositivo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.speakerVolume",
              product: "2"
            }), ": Defina el volumen de salida de sonido del dispositivo cuando utilice la función de intercom IP."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.micVolume",
              product: "2"
            }), ": Defina el volumen de entrada de sonido al dispositivo cuando utilice la función de intercom IP."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.menuTimeout",
              product: "2"
            }), ": Defina el tiempo que tarda en pasar de la pantalla de menú a la pantalla inactiva."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.backlightTimeout",
              product: "2"
            }), ": Establezca el tiempo antes de que la luz de la pantalla se apague automáticamente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.msgTimeout",
              product: "2"
            }), ": Establezca el tiempo antes de que los mensajes desaparezcan automáticamente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.serverPrivateMsg",
              product: "2"
            }), ": Defina si se utilizará un mensaje privado que se mostrará en pantalla cuando el usuario se autentique."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useScreenSaver",
              product: "2"
            }), ": Reduce el consumo innecesario de energía al disminuir el brillo de la pantalla LCD cuando el dispositivo no está en uso. Si esta función no está habilitada, aunque la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useScreenSaver",
              product: "2"
            }), " esté habilitada en el dispositivo, los mensajes de autenticación exitosa no se mostrarán."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "Esta opción es compatible con los modelos FaceStation 2, FaceStation F2, X-Station 2 y BioStation 3."
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVoice",
              product: "2"
            }), ": Utilice la guía por voz en lugar de tonos de notificación."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.homeScreen",
              product: "2"
            }), ": Defina los elementos que se mostrarán en el fondo de la pantalla de inicio del dispositivo."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.normal",
                  product: "2"
                }), ": Muestra la imagen predeterminada en la pantalla de inicio."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.logo",
                  product: "2"
                }), ": Los usuarios pueden mostrar las imágenes que registraron en la pantalla de inicio del dispositivo. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " para registrar una imagen."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.notice",
                  product: "2"
                }), ": Los administradores pueden mostrar sus entradas en la pantalla de inicio."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " para reflejar los cambios en tiempo real en el dispositivo."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Si cambia el tipo de fondo de pantalla, hacer clic en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " no lo aplicará al dispositivo. En la parte inferior de la pantalla, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.apply",
                    product: "2"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Configurar la pantalla de inicio como ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.logo",
                    product: "2"
                  }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.slideShow",
                    product: "2"
                  }), " permite mostrar hasta 10 imágenes como presentación de diapositivas en la pantalla de inicio. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.add",
                    product: "2"
                  }), " para registrar una imagen."]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), ": Configure los efectos de sonido que se reproducirán al iniciar, al autenticar correctamente y al fallar la autenticación. Seleccione archivos ", (0,jsx_runtime.jsx)(_components.em, {
              children: "*.wav"
            }), " de hasta 500 Kb de tamaño. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.browse",
              product: "2"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.update",
                product: "2"
              }), " para reflejar los cambios en tiempo real en el dispositivo."]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "triggerAction",
      children: "Ajustes de condiciones y acciones de activación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.triggerNAction",
        product: "2"
      }), ", defina las condiciones y acciones según situaciones específicas. Por ejemplo, configure todas las alarmas para que suenen cuando falle la autenticación o para que el dispositivo quede inutilizable si se pierde la conexión RS-485."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Registre eventos seleccionándolos como condiciones o acciones, o configure condiciones y acciones según las preferencias del usuario. Haga clic en el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.triggerNAction",
        product: "2"
      }), " y luego en ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.add",
        product: "2"
      }), " ubicado a la derecha."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-triggernaction.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triggerAction",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "triggerAction.trigger",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede seleccionar eventos predefinidos o agregar condiciones personalizadas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.event",
            product: "2"
          }), ": Seleccione un evento predefinido."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.input",
            product: "2"
          }), ": Establezca condiciones personalizadas seleccionando cada elemento dentro de la opción."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.break_glass",
            product: "2"
          }), ": Establezca condiciones personalizadas seleccionando cada elemento dentro de la opción. Puede configurarlo para que solo detecte entradas sin acciones adicionales."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.trigger",
              product: "2"
            }), " se establece en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.event",
              product: "2"
            }), ", solo puede seleccionar un evento de la lista de eventos."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al seleccionar las opciones ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.input",
              product: "2"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), " para establecer condiciones personalizadas, si el horario deseado no está disponible, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.plusAddSchedule",
              product: "2"
            }), ". Para obtener más información sobre la configuración de horarios, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el nombre de evento deseado no está disponible al seleccionar la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), " para establecer condiciones personalizadas, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.addNewBreakGlassEvent",
              product: "2"
            }), ". Cuando ocurra este evento, el nombre del evento se mostrará en el registro de eventos y en el registro en tiempo real."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los nombres de eventos pueden tener un máximo de 64 caracteres."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triggeraction",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "triggerAction.action",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede seleccionar acciones predefinidas o agregar acciones personalizadas."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si selecciona la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.output",
              product: "2"
            }), " para establecer acciones personalizadas y la configuración de señal deseada no está disponible, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.addSignal",
              product: "2"
            }), " para configurarla."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si seleccionó ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.trigger",
              product: "2"
            }), " como ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), ", puede establecer ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.action",
              product: "2"
            }), " como ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.portNone",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "image-log-settings",
      children: "Configuración del registro de imágenes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.imageLog",
        product: "2"
      }), ", puede configurar los eventos y horarios del registro de imágenes utilizados por el dispositivo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Establezca la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.imageLog",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.configuration",
            product: "2"
          }), " y luego en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), " para configurar los eventos y horarios deseados."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-imagelog.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta función es compatible con los modelos BioStation A2, FaceStation 2, FaceStation F2, X-Station 2 y BioStation 3."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración predeterminada de los registros de imágenes, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-image-log",
              children: "la siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegang-settings",
      children: "Configuración de Wiegand"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Wiegand"
      }), ", puede configurar los detalles de entrada y salida relacionados con los dispositivos Wiegand."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-wiegand.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandInOut",
            product: "2"
          }), ": Seleccione el modo de entrada y salida."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseWidth",
            product: "2"
          }), ": Establezca el ancho de pulso para la señal Wiegand."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.inOutFormat",
            product: "2"
          }), ": Cambie el formato Wiegand asignado al dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseInterval",
            product: "2"
          }), ": Establezca el intervalo de pulso para la señal Wiegand."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.out",
            product: "2"
          }), ": Configure el modo de salida de la señal Wiegand."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.card.wiegand.out.normal",
                product: "2"
              }), ": Escanee tarjetas usando el formato Wiegand configurado. Puede establecer códigos de error y seleccionar valores que se enviarán si la autenticación de la tarjeta Wiegand falla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.card.wiegand.out.bypass",
                product: "2"
              }), ": Envíe CSN independientemente de la autenticación Wiegand. Configure esto si lo usa como un dispositivo sin funcionalidad de control de puertas."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.outputInfo",
            product: "2"
          }), ": Seleccione la información que se enviará al dispositivo durante la autenticación."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la configuración del formato Wiegand, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-credential-wiegand-format",
          children: "la siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tamper-settings",
      children: "Configuración de manipulación de seguridad"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si ocurre un evento de manipulación en el dispositivo, puede configurarlo para eliminar toda la información de usuario, los registros y las claves de seguridad almacenadas en el dispositivo. Para activar la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tamperOn",
        product: "2"
      }), ", establézcala en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tamperOn.on",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-tamper.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analog-intercom-settings",
      children: "Configuración de intercomunicador analógico"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede configurar si se utilizará un intercomunicador analógico. Para usar el intercomunicador conectado al dispositivo, haga clic en el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.intercom.title",
        product: "2"
      }), " y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.use",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Esta función es compatible solo con el modelo BioStation 2."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "camera-settings",
      children: "Configuración de la cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede establecer la frecuencia de la cámara. Configurar incorrectamente la frecuencia en entornos con luces fluorescentes puede causar parpadeo en las imágenes. Establezca la frecuencia para el área local en el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.camera",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta función es compatible con los modelos FaceStation F2 y BioStation A2 con versión de firmware 2.1.4 o superior."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las frecuencias de la cámara varían según la ubicación geográfica. Estados Unidos suele usar 60 Hz, mientras que la mayoría de las demás regiones usan 50 Hz. Para conocer la frecuencia de la cámara en su área, consulte a su distribuidor."
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