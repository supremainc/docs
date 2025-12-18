"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["76547"], {
54964: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_elevators_add_mdx_f0c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-elevators-add-mdx-f0c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_elevators_add_mdx_f0c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-elevators-add","title":"Registrar ascensor","description":"Esta guía describe cómo registrar un ascensor para el control de pisos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-elevators-add.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-elevators-add","permalink":"/docs/es/platform/biostar_x/settings-elevators-add","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-elevators-add.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-elevators-add","title":"Registrar ascensor","description":"Esta guía describe cómo registrar un ascensor para el control de pisos.","keywords":["Elevador","Control de pisos"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Administrar grupo de elevadores","permalink":"/docs/es/platform/biostar_x/settings-manage-elevators-group"},"next":{"title":"Editar información del ascensor","permalink":"/docs/es/platform/biostar_x/settings-elevators-edit-info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-elevators-add.mdx


const frontMatter = {
	id: 'settings-elevators-add',
	title: 'Registrar ascensor',
	description: 'Esta guía describe cómo registrar un ascensor para el control de pisos.',
	keywords: [
		'Elevador',
		'Control de pisos'
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
  "value": "Registrar ascensor",
  "id": "adding-elevator",
  "level": 2
}, {
  "value": "Configurar información básica",
  "id": "info",
  "level": 3
}, {
  "value": "Configurar información detallada",
  "id": "details",
  "level": 3
}, {
  "value": "Configurar opciones adicionales",
  "id": "option",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Este documento ofrece orientación sobre cómo registrar y configurar un ascensor. El ascensor se utiliza para el control de pisos y forma parte del sistema de control de acceso junto con la puerta de entrada. Registrar el ascensor permite controlar los permisos de acceso para pisos específicos."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el nivel de acceso, el grupo de acceso y el nivel de piso para el control de acceso antes de registrar el ascensor. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Registre el dispositivo antes de registrar el ascensor. Para obtener más información sobre el registro de dispositivos, consulte lo siguiente."
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
      id: "adding-elevator",
      children: "Registrar ascensor"
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
            sid: "setting.menu.elevator.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.new.title",
            product: "2"
          }), ", configure cada elemento de la sección en orden."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.information",
                product: "2"
              }), ": Configure la información básica del ascensor. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#info",
                children: "lo siguiente"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.detail",
                product: "2"
              }), ": Configure la información detallada del ascensor. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#details",
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
      }), ", ingrese o cambie el nombre, el grupo y la descripción del ascensor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": Ingrese el nombre del ascensor. Es conveniente ingresar un nombre que especifique la ubicación del ascensor para facilitar la gestión."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group",
            product: "2"
          }), ": Seleccione el grupo del ascensor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), ": Ingrese una descripción breve del ascensor."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El nombre del ascensor puede tener hasta 48 caracteres."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre el registro de grupos de ascensores, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-elevators-group",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "details",
      children: "Configurar información detallada"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.detail",
        product: "2"
      }), ", configure la información detallada del ascensor, como los dispositivos conectados al ascensor y la información de los pisos. Configure la información de dispositivos y pisos para conectarlos al ascensor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.list.column.controller",
            product: "2"
          }), ": Seleccione el dispositivo que controlará los permisos de acceso del ascensor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.list.column.reader",
            product: "2"
          }), ": Seleccione el dispositivo que se utilizará para la autenticación."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.list.column.module",
            product: "2"
          }), ": Seleccione el dispositivo que controlará el relé del botón del ascensor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.floor.totalFloor",
            product: "2"
          }), ": Ingrese el número total de pisos a los que el ascensor puede acceder. Ingrese hasta 192 pisos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.autoMapping",
            product: "2"
          }), ": Seleccione si desea usar el mapeo automático. El mapeo automático asigna números de relé de forma secuencial."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.floor.setting.title",
            product: "2"
          }), ": Configure los nombres de los pisos y los números de relé que los controlarán."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Solo se pueden seleccionar dispositivos maestro para la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "elevator.list.column.controller",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "elevator.list.column.reader",
              product: "2"
            }), ", solo se pueden seleccionar dispositivos maestro, dispositivos esclavo y dispositivos Wiegand, con un máximo de 4 selecciones permitidas."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El modelo OM-120 no se puede configurar como lector."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "elevator.list.column.module",
              product: "2"
            }), ", solo se pueden seleccionar los modelos OM-120, DM-20, IM-120 y SIO2."]
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
      }), ", configure las opciones adicionales del ascensor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.option.relayTime",
            product: "2"
          }), ": Configure las opciones para el relé del botón de piso."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.openTime",
              product: "2"
            }), ": Configure el tiempo durante el cual el botón de piso permanece activo después de completar la autenticación. Después de este tiempo, el relé no activará el botón de piso."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.dualAuthentication",
            product: "2"
          }), ": Configure para que dos personas (un usuario general y un administrador) deban autenticar sus credenciales para activar el botón de piso."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), ": Selecciona el dispositivo que se usará para la autenticación dual. Para no usar autenticación dual, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.none",
                product: "2"
              }), "."]
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
              }), ": Define el tiempo de espera entre la primera y la segunda autenticación. Si la segunda autenticación no se completa dentro del tiempo establecido, el botón de piso no se activará."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Modifique los ajustes en el siguiente menú para cambiar la autenticación dual del dispositivo configurado para los ajustes de límite de ocupación. ", (0,jsx_runtime.jsx)(Cmd, {
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
            sid: "device.info.wiegandTamper",
            product: "2"
          }), ": Configure el puerto para emitir la señal de sabotaje."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alarm",
      children: "Configurar alarmas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.alarm",
        product: "2"
      }), ", configure las acciones a realizar cuando se detecten entradas de sabotaje o señales de entrada independientes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.trigger",
            product: "2"
          }), ": Configure la detección de entradas de sabotaje o señales de entrada independientes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.action",
            product: "2"
          }), ": Configure las acciones a realizar según las condiciones establecidas. Active todos los botones de piso del ascensor u emita señales específicas."]
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