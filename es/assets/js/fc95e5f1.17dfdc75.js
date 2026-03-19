"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["46154"], {
51855: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_devices_mdx_fc9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-registered-devices-mdx-fc9.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_devices_mdx_fc9_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-registered-devices","title":"Administrar dispositivos registrados","description":"En el portal de BioStar Air, compruebe el estado de conexión de los dispositivos, modifique la configuración biométrica y de tarjetas y actualice el firmware. Administre el sistema de seguridad de forma eficiente mediante operaciones individuales o masivas.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-devices.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-registered-devices","permalink":"/docs/es/platform/biostar_air/managing-registered-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-registered-devices.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-registered-devices","title":"Administrar dispositivos registrados","description":"En el portal de BioStar Air, compruebe el estado de conexión de los dispositivos, modifique la configuración biométrica y de tarjetas y actualice el firmware. Administre el sistema de seguridad de forma eficiente mediante operaciones individuales o masivas.","keywords":["Gestión Dispositivos","Configuración del Dispositivo","BioStar Air","Biométrico","Configuración de tarjeta","Actualización de firmware","Configuración de red"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Registrar y eliminar dispositivos","permalink":"/docs/es/platform/biostar_air/manage-device-with-app"},"next":{"title":"Información y opciones de configuración del dispositivo","permalink":"/docs/es/platform/biostar_air/device-info-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-devices.mdx


const frontMatter = {
	id: 'managing-registered-devices',
	title: 'Administrar dispositivos registrados',
	description: 'En el portal de BioStar Air, compruebe el estado de conexión de los dispositivos, modifique la configuración biométrica y de tarjetas y actualice el firmware. Administre el sistema de seguridad de forma eficiente mediante operaciones individuales o masivas.',
	keywords: [
		'Gestión Dispositivos',
		'Configuración del Dispositivo',
		'BioStar Air',
		'Biométrico',
		'Configuración de tarjeta',
		'Actualización de firmware',
		'Configuración de red'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ver la lista de dispositivos",
  "id": "viewing-device-information",
  "level": 2
}, {
  "value": "Estado de conexión del dispositivo",
  "id": "device-connection-status",
  "level": 3
}, {
  "value": "Información del dispositivo",
  "id": "device-information",
  "level": 3
}, {
  "value": "Filtrar",
  "id": "deviceFiltering",
  "level": 3
}, {
  "value": "Editar la información y los ajustes individuales del dispositivo",
  "id": "editing-individual-device",
  "level": 2
}, {
  "value": "Acciones masivas para dispositivos",
  "id": "bulkDeviceActions",
  "level": 2
}, {
  "value": "Gestión de grupos de dispositivos",
  "id": "device_group_in_device_list",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
  }, {Cmd, DocLink, IcAirByte, IcAirCloud, IcAirDset, IcAirFilter, IcAirFw, IcAirGroup, IcAirRef, IcAirRemove, IcAirUpd, IcAirWarn, Image, StatusFail, StatusOK, StatusUpdating, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirByte) _missingMdxReference("IcAirByte", true);
  if (!IcAirCloud) _missingMdxReference("IcAirCloud", true);
  if (!IcAirDset) _missingMdxReference("IcAirDset", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirFw) _missingMdxReference("IcAirFw", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirUpd) _missingMdxReference("IcAirUpd", true);
  if (!IcAirWarn) _missingMdxReference("IcAirWarn", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusFail) _missingMdxReference("StatusFail", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!StatusUpdating) _missingMdxReference("StatusUpdating", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Vea de un vistazo el estado de conexión de los dispositivos, cambie la configuración biométrica y de tarjetas o actualice el firmware. Administre algunos dispositivos de forma individual y otros de forma masiva para operar su sistema de seguridad de manera eficiente."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los dispositivos solo se pueden registrar en la ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "aplicación móvil BioStar Air"
            }), " para iOS o Android. No es posible registrar dispositivos desde el portal web. Para obtener instrucciones detalladas sobre cómo registrar dispositivos mediante la aplicación móvil, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Se requiere acceso a Internet para usar ciertas funciones, como el ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "acceso remoto"
            }), ", la ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "autenticación biométrica"
            }), ", el ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "acceso mediante código QR"
            }), " y las ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "actualizaciones de firmware"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Consulte el siguiente video para ver la guía de registro y gestión de dispositivos."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "lpMPkMyjr-c"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-device-information",
      children: "Ver la lista de dispositivos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La lista de dispositivos le permite ver de un vistazo todos los dispositivos registrados en BioStar Air. Obtenga información clave de cada dispositivo, como estado de conexión, nombre de modelo y versión de firmware. Haga clic en un dispositivo para ver los detalles y modificar la configuración."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_submenu",
        product: "air"
      }), " en la barra lateral izquierda."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-connection-status",
      children: "Estado de conexión del dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compruebe el estado de conexión de cada dispositivo mediante los iconos de estado en la lista de dispositivos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusOK, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verde"
          }), ": El dispositivo está en línea, puede controlarse de forma remota y puede aceptar y actualizar la autenticación por QR."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusFail, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rojo"
          }), ": El dispositivo está desconectado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusUpdating, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Naranja"
          }), ": Se está actualizando el firmware."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["⚪ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "No conectado"
          }), ": El dispositivo no tiene conexión a la red. (p. ej., Airfob Patch)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirWarn, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Advertencia"
          }), ": Se requiere sincronización entre el servidor y el dispositivo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-information",
      children: "Información del dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cada columna de la lista de dispositivos contiene la siguiente información."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_product_column",
            product: "air"
          }), ": El nombre y el modelo del dispositivo obtenidos de la base de datos de Suprema."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_nickname_column",
            product: "air"
          }), ": Un campo editable por el usuario para facilitar su identificación. Edítelo en la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), " que aparece al hacer clic en el dispositivo en la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_id_column",
            product: "air"
          }), ": El identificador único asignado al dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_group_column",
            product: "air"
          }), ": El grupo al que pertenece el dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_battery_column",
            product: "air"
          }), ": Disponible solo en dispositivos alimentados por batería. Compatible únicamente con los dispositivos AirPop Tag (AirFob Tag)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_fw_column",
            product: "air"
          }), ": La versión de firmware instalada actualmente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_timezone_column",
            product: "air"
          }), ": La zona horaria configurada en el dispositivo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deviceFiltering",
      children: "Filtrar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puedes usar la función de filtro en el encabezado superior de la lista de dispositivos. Haz clic en ", (0,jsx_runtime.jsx)(IcAirFilter, {
        title: "Filter"
      }), " en el encabezado para establecer las condiciones deseadas."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para restablecer los filtros aplicados, haga clic en ", (0,jsx_runtime.jsx)(IcAirFilter, {
          title: "Filter"
        }), " y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "column_filter_modal_reset_btn",
          product: "air"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editing-individual-device",
      children: "Editar la información y los ajustes individuales del dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haz clic en el dispositivo que deseas editar en la lista."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Aparece la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-edit-details.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Edita los detalles o la configuración del dispositivo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " en la parte inferior para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para obtener más información sobre cómo editar campos y configurar las opciones de cada sección, consulta ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/device-info-settings"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bulkDeviceActions",
      children: "Acciones masivas para dispositivos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usa los controles en la parte superior de la lista de dispositivos para administrar varios dispositivos a la vez."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-tools.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px",
            title: "Refresh"
          }), ": Actualiza la lista de dispositivos y su estado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRemove, {
            width: "24px",
            height: "24px",
            title: "Delete"
          }), ": Elimina los dispositivos registrados en el sitio."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "warning",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Solo los dispositivos en línea pueden eliminarse de forma permanente. Si el dispositivo está fuera de línea, elimínalo primero en la aplicación móvil BioStar Air antes de agregarlo a otro sitio. Para obtener más información sobre cómo eliminar dispositivos mediante la aplicación móvil, consulta ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app#removingDevice"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFw, {
            width: "24px",
            height: "24px",
            title: "Update Firmware"
          }), ": Actualiza el firmware de los dispositivos seleccionados. Para obtener más información sobre las actualizaciones de firmware, consulta ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/how-to-upgrade-firmware"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirCloud, {
            width: "24px",
            height: "24px",
            title: "Sync with Server"
          }), ": Sincroniza las plantillas biométricas de los dispositivos seleccionados con el servidor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), ": Asigna los dispositivos seleccionados a un grupo. Para más información sobre la gestión de grupos de dispositivos, consulta ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#device_group_in_device_list"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirByte, {
            width: "24px",
            height: "24px",
            title: "RF Card Byte Order"
          }), ": Cambia el orden de bytes de la tarjeta RF del dispositivo seleccionado en la lista a ", (0,jsx_runtime.jsx)(Cmd, {
            children: "MSB"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            children: "LSB"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de byte grandes a pequeñas, almacenando secuencialmente el número de serie de la tarjeta (CSN) de izquierda a derecha."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de byte pequeñas a grandes, almacenando el número de serie de la tarjeta (CSN)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirDset, {
            width: "24px",
            height: "24px",
            title: "Load Device Setting"
          }), ": Importa los ajustes del dispositivo configurados originalmente en modo autónomo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUpd, {
            width: "24px",
            height: "24px",
            title: "Update Status"
          }), ": Actualiza el estado de los dispositivos seleccionados en la lista de dispositivos."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device_group_in_device_list",
      children: "Gestión de grupos de dispositivos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En la lista de dispositivos, selecciona dispositivos individuales para añadirlos a un grupo o retirarlos de uno existente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Marca la casilla del dispositivo que deseas agregar o quitar de un grupo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), " en la parte superior de la lista de grupos de dispositivos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_device_group_title",
            product: "air"
          }), ", agrega o elimina los dispositivos seleccionados del grupo."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-group-mng.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Las casillas de verificación de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_device_group_title_two",
            product: "air"
          }), " tienen los siguientes significados:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_one",
                product: "air"
              }), ": Elimina los dispositivos seleccionados del grupo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_two",
                product: "air"
              }), ": Algunos de los dispositivos seleccionados ya pertenecen al grupo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_three",
                product: "air"
              }), ": Agrega los dispositivos seleccionados al grupo."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al seleccionar otro grupo en la ventana ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "manage_device_group_title",
              product: "air"
            }), ", los dispositivos seleccionados se mueven a ese grupo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Un dispositivo puede pertenecer a varios grupos. Ese mismo dispositivo puede asignarse a varios grupos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_btn_reset",
              product: "air"
            }), " para restablecer los cambios."]
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