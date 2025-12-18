"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["99315"], {
77984: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_how_to_master_admin_mdx_efd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-how-to-master-admin-mdx-efd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_how_to_master_admin_mdx_efd_namespaceObject = JSON.parse('{"id":"how-to/master-admin","title":"Introducción a la función Master Admin y guía de configuración","description":"Proporciona una guía para configurar el Master Admin, que mejora la seguridad del dispositivo al reforzar los permisos de administrador.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/how-to/master-admin.mdx","sourceDirName":"how-to","slug":"/how-to/master-admin","permalink":"/docs/es/how-to/master-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/how-to/master-admin.mdx","tags":[],"version":"current","frontMatter":{"id":"master-admin","title":"Introducción a la función Master Admin y guía de configuración","description":"Proporciona una guía para configurar el Master Admin, que mejora la seguridad del dispositivo al reforzar los permisos de administrador.","keywords":["Administrador Principal","Administrador","Maestro"],"isTranslationMissing":false},"sidebar":"howto","previous":{"title":"How-to Articles","permalink":"/docs/es/how-to/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/how-to/faqs.json
var faqs_namespaceObject = JSON.parse('[{"question":"¿Qué sucede si no registras un administrador maestro?","answer":"Un dispositivo nuevo sin un administrador maestro registrado no puede realizar autenticaciones ni cambiar la configuración. Sin embargo, conecta el nuevo dispositivo a BioStar para registrar un administrador maestro."},{"question":"¿Se admite la configuración de administrador maestro en los dispositivos actualizados con firmware de dispositivos existentes?","answer":"No. Los dispositivos actualizados con firmware de dispositivos existentes no admiten la configuración de administrador maestro. Sin embargo, mejora la seguridad del dispositivo fortaleciendo los permisos de todos los administradores mediante la opción Admin 2-Step Authentication. Para obtener más información, consulta <a href=\'#admin-two-step-authentication\'>Admin 2-Step Authentication</a>."},{"question":"¿Es posible registrar un administrador maestro en un dispositivo esclavo?","answer":"Sí. Es posible registrar un administrador maestro en un dispositivo esclavo."}]')
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/how-to/master-admin.mdx


const frontMatter = {
	id: 'master-admin',
	title: 'Introducción a la función Master Admin y guía de configuración',
	description: 'Proporciona una guía para configurar el Master Admin, que mejora la seguridad del dispositivo al reforzar los permisos de administrador.',
	keywords: [
		'Administrador Principal',
		'Administrador',
		'Maestro'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*:::warning

**Warning Message When Master Admin Is Not Registered**

If neither a Master Admin nor an equivalent setting is configured, a warning popup message will appear when saving settings.

<Image src='/img/how-to/no-register-master-admin.png' alone caption />

:::*/
/*## [TBD] Setting Master Admin via BioStar 2

:::info

* The Master Admin feature is supported from BioStar 2 v2.9.11.

* Los dispositivos actualizados mediante firmware no muestran el menú Master Admin en la configuración de administrador de BioStar 2.

:::

## [TBD] Edición por lotes de Master Admin

* Puede editar por lotes Admin 2-step Authentication y la inscripción de credenciales.

* La edición por lotes sobrescribe con las credenciales inscritas.

* Puede inscribir credenciales de face, fingerprint, card y PIN.

* Si el dispositivo seleccionado no admite un tipo de credencial, la edición por lotes fallará para ese dispositivo.

* Los dispositivos nuevos también deben cumplir la condición mínima de dos credenciales; de lo contrario, la edición por lotes para ese dispositivo fallará.*/



const toc = [{
  "value": "Configurar el Master Admin",
  "id": "configurar-el-master-admin",
  "level": 2
}, {
  "value": "¿Qué es un Master Admin?",
  "id": "qué-es-un-master-admin",
  "level": 3
}, {
  "value": "Productos compatibles con Master Admin",
  "id": "productos-compatibles-con-master-admin",
  "level": 3
}, {
  "value": "Cómo mejorar la seguridad del administrador en dispositivos nuevos o dispositivos existentes con firmware actualizado",
  "id": "cómo-mejorar-la-seguridad-del-administrador-en-dispositivos-nuevos-o-dispositivos-existentes-con-firmware-actualizado",
  "level": 2
}, {
  "value": "Dispositivos nuevos",
  "id": "dispositivos-nuevos",
  "level": 3
}, {
  "value": "Registrar un Master Admin en un dispositivo nuevo",
  "id": "registrar-un-master-admin-en-un-dispositivo-nuevo",
  "level": 4
}, {
  "value": "Gestionar Master Admin en un dispositivo nuevo",
  "id": "gestionar-master-admin-en-un-dispositivo-nuevo",
  "level": 4
}, {
  "value": "Dispositivos actualizados",
  "id": "admin-two-step-authentication",
  "level": 3
}, {
  "value": "Configurar Admin 2-step Authentication en dispositivos actualizados",
  "id": "configurar-admin-2-step-authentication-en-dispositivos-actualizados",
  "level": 4
}, {
  "value": "Información adicional",
  "id": "información-adicional",
  "level": 2
}, {
  "value": "Preguntas frecuentes",
  "id": "preguntas-frecuentes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Details, FaqsItems, Image, Row, Table, Tbody, Td, Th} = _components;
  if (!Details) _missingMdxReference("Details", true);
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["La función de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Admin"
      }), " está diseñada para ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mejorar la seguridad del dispositivo"
      }), " al ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reforzar los privilegios de administrador"
      }), " y ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "evitar el acceso no autorizado y cambios de configuración"
      }), ".", (0,jsx_runtime.jsx)("br", {}), "Con esta función, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "debe registrar un Master Admin"
      }), " en el nuevo dispositivo y solo los Master Admin registrados pueden acceder al menú de administrador y cambiar la configuración del dispositivo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La función de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Admin"
      }), " está disponible ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "solo en productos Suprema que admiten interfaz de usuario mediante pantalla LCD"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta función es una política esencial para mejorar la seguridad del dispositivo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El Master Admin no puede eliminarse directamente y ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "solo se borra mediante restablecimiento de fábrica"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurar-el-master-admin",
      children: "Configurar el Master Admin"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qué-es-un-master-admin",
      children: "¿Qué es un Master Admin?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si utiliza el dispositivo sin configurar un administrador, cualquiera puede acceder al menú de administrador y cambiar la configuración del dispositivo. La función de Master Admin soluciona esta vulnerabilidad de seguridad al obligar a configurar un administrador general."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "productos-compatibles-con-master-admin",
      children: "Productos compatibles con Master Admin"
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/BioStation 3-Front.png",
              className: "none",
              alone: true,
              width: "130px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/BioStation 2a-front.png",
              className: "none",
              alone: true,
              width: "200px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/BioLite N2-Front.png",
              className: "none",
              alone: true,
              width: "110px"
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/how-to/X-Station 2-Front.png",
              className: "none",
              alone: true,
              width: "300px"
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 3"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.4.0 o posterior"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 2a"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.2.0 o posterior"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioLite N2"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.7.0 o posterior"]
          }), (0,jsx_runtime.jsxs)(Td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Station 2"
            }), (0,jsx_runtime.jsx)("br", {}), "Firmware v1.4.0 o posterior"]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cómo-mejorar-la-seguridad-del-administrador-en-dispositivos-nuevos-o-dispositivos-existentes-con-firmware-actualizado",
      children: "Cómo mejorar la seguridad del administrador en dispositivos nuevos o dispositivos existentes con firmware actualizado"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dispositivos-nuevos",
      children: "Dispositivos nuevos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En dispositivos nuevos, registrar un ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Admin"
      }), " es obligatorio desde el principio. Si no registra un Master Admin, el uso del dispositivo estará restringido."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["En los dispositivos nuevos, la pantalla de registro de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), " aparece al iniciar por primera vez. No puede avanzar a la siguiente pantalla a menos que registre un Master Admin."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Incluso si asigna un administrador general del dispositivo mediante BioStar 2, debe registrar un ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), " para utilizar todas las funciones del dispositivo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El nuevo dispositivo no puede degradarse a una versión inferior."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Registrar un Master Admin en un dispositivo nuevo"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "registrar-un-master-admin-en-un-dispositivo-nuevo",
        children: "Registrar un Master Admin en un dispositivo nuevo"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando enciende un dispositivo nuevo por primera vez, aparece la pantalla de registro de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-1.png",
            caption: true,
            width: "300px"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para registrar un ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), ", debe inscribir al menos dos tipos de credenciales. Seleccione e inscriba los dos tipos de credenciales que prefiera."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-2.png",
            caption: true,
            width: "300px"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Las credenciales que pueden inscribirse para ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), " son las siguientes:"]
          }), "\n", (0,jsx_runtime.jsx)(Table, {
            children: (0,jsx_runtime.jsxs)(Tbody, {
              children: [(0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Th, {
                  children: "Tipo de credencial"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "Cantidad máxima"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "Detalles"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "Card"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Hasta 4"
                }), (0,jsx_runtime.jsxs)(Td, {
                  children: ["Admite únicamente tipos CSN y Wiegand", (0,jsx_runtime.jsx)("br", {}), "No se permite inscripción duplicada dentro del mismo tipo"]
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "Face"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Hasta 2"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Disponible solo en dispositivos con el mismo algoritmo"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "Fingerprint"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Hasta 2"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "-"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "PIN"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "1"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "Mínimo 8 dígitos"
                })]
              })]
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Condiciones de inscripción"
              })
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Se deben inscribir al menos dos tipos diferentes de credenciales."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Las mismas condiciones se aplican tanto a dispositivos nuevos como a los que se actualicen mediante firmware."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Todas las credenciales compatibles con el dispositivo pueden usarse para autenticación."
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Después de inscribir al menos dos tipos de credenciales, presione el botón ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            }), " para finalizar el registro de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Admin"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/how-to/setting-master-admin-3.png",
            caption: true,
            width: "300px"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gestionar Master Admin en un dispositivo nuevo"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "gestionar-master-admin-en-un-dispositivo-nuevo",
        children: "Gestionar Master Admin en un dispositivo nuevo"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["En dispositivos nuevos, puede modificar la configuración de ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Master Admin"
        }), " en el menú ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings → Device → Master Admin"
        }), "."]
      }), (0,jsx_runtime.jsxs)("div", {
        className: "grid-container",
        children: [(0,jsx_runtime.jsx)(Image, {
          src: "/img/how-to/edit-master-admin-1.png",
          caption: true,
          width: "300px"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/how-to/setting-master-admin-4.png",
          caption: true,
          width: "300px"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "admin-two-step-authentication",
      children: "Dispositivos actualizados"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los dispositivos actualizados mediante firmware no ofrecen la configuración de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Admin"
      }), ", pero puede mejorar la seguridad del administrador al habilitar la opción ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin 2-step Authentication"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El valor predeterminado de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Admin 2-step Authentication"
            }), " es autenticación de un solo paso."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La autenticación de dos pasos puede activarse solo si todos los administradores registrados tienen al menos dos tipos de credenciales."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El dispositivo actualizado mediante firmware no puede degradarse a una versión inferior después de la actualización."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Configurar Admin 2-step Authentication en dispositivos actualizados"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "configurar-admin-2-step-authentication-en-dispositivos-actualizados",
        children: "Configurar Admin 2-step Authentication en dispositivos actualizados"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Puede activar Admin 2-step Authentication en el menú ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings → Device → Admin 2-step Authentication"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["La opción ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Admin 2-step Authentication"
          }), " aparece solo en dispositivos actualizados al firmware más reciente."]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/how-to/setting-two-step-authentication.png",
        caption: true,
        width: "300px"
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "info",
        children: [(0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Si no todos los administradores tienen al menos dos tipos de credenciales, la activación fallará y aparecerá un mensaje de error.", (0,jsx_runtime.jsx)("br", {}), "Inscriba al menos dos tipos de credenciales para todos los administradores y vuelva a intentarlo."]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/how-to/error-two-step-authentication.png",
          caption: true,
          width: "300px"
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "warning",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Si activa ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Admin 2-step Authentication"
            }), " y luego elimina credenciales de modo que todos los administradores tengan menos de dos tipos, no podrá acceder al menú de administrador si la conexión con BioStar 2 también está indisponible. Por lo tanto, tenga precaución al eliminar credenciales de administrador."]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "información-adicional",
      children: "Información adicional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cambio manual de la clave hash del dispositivo"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Al cambiar manualmente la clave hash del dispositivo, aparecerá un mensaje de advertencia que indicará que los PIN de Master Admin se eliminarán. Confirme el mensaje antes de continuar."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Restricción de transmisión de imágenes biométricas RS-485"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Las imágenes de credenciales biométricas no se transmiten por comunicación RS-485, por lo que aparecen imágenes sustitutas al ver el rostro del Master Admin registrado en dispositivos esclavos."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preguntas-frecuentes",
      children: "Preguntas frecuentes"
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: faqs_namespaceObject
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