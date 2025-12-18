"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["45801"], {
46824: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_image_log_mdx_052_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-image-log-mdx-052.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_image_log_mdx_052_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-image-log","title":"Configuración de registros de imágenes","description":"Este documento proporciona instrucciones para configurar eventos y horarios que generen registros de imágenes, opciones para eliminar registros de imágenes y métodos para configurar rutas de almacenamiento.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-image-log.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-image-log","permalink":"/docs/es/platform/biostar_x/settings-device-image-log","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-image-log.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-image-log","title":"Configuración de registros de imágenes","description":"Este documento proporciona instrucciones para configurar eventos y horarios que generen registros de imágenes, opciones para eliminar registros de imágenes y métodos para configurar rutas de almacenamiento.","keywords":["Dispositivo","Registro de imágenes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración de RTSP","permalink":"/docs/es/platform/biostar_x/settings-device-details-rtsp"},"next":{"title":"Configuración del agente USB","permalink":"/docs/es/platform/biostar_x/settings-device-usb-agent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-image-log.mdx


const frontMatter = {
	id: 'settings-device-image-log',
	title: 'Configuración de registros de imágenes',
	description: 'Este documento proporciona instrucciones para configurar eventos y horarios que generen registros de imágenes, opciones para eliminar registros de imágenes y métodos para configurar rutas de almacenamiento.',
	keywords: [
		'Dispositivo',
		'Registro de imágenes'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar ajustes básicos",
  "id": "add-image-log-settings",
  "level": 2
}, {
  "value": "Modificar ajustes básicos",
  "id": "edit-image-log-settings",
  "level": 2
}, {
  "value": "Eliminar ajustes básicos",
  "id": "delete-image-log-settings",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcDown, IcImgLog, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcDown) _missingMdxReference("IcDown", true);
  if (!IcImgLog) _missingMdxReference("IcImgLog", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.imageLog",
        product: "2"
      }), " permite la verificación por imágenes de los eventos que ocurren en dispositivos con cámara. Puede registrar imágenes faciales de los usuarios que pasan por las puertas o situaciones durante la ocurrencia de eventos usando la cámara del dispositivo. Las imágenes registradas se pueden visualizar en los eventos en tiempo real en la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-imagelog-example.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al configurar el registro de imágenes, se creará un registro de imágenes del evento en la lista ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), ". Haz clic en ", (0,jsx_runtime.jsx)(IcImgLog, {}), " a la derecha del elemento del evento. Visualiza la imagen capturada cuando ocurrió el evento en el panel derecho."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta función es compatible con los modelos BioStation A2, FaceStation 2, FaceStation F2, X-Station 2 y BioStation 3."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información detallada sobre la visualización de los registros de eventos en la página ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los ajustes configurados en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.device.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.imageLog",
              product: "2"
            }), " no se reflejan en el dispositivo. Para obtener información detallada sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.imageLog",
              product: "2"
            }), " en el dispositivo, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details-advanced#image-log-settings",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-image-log-settings",
      children: "Agregar ajustes básicos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura eventos y horarios para generar registros de imágenes en el dispositivo. Se generará un registro de imágenes cuando se cumplan las condiciones de eventos y horarios."
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
            sid: "setting.menu.device.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.imageLog"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " a la derecha de la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.preset",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-imagelog-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando se añada un evento al final de la lista, haz clic en ", (0,jsx_runtime.jsx)(IcDown, {}), " para ese evento y selecciona las opciones."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-imagelog-select-event.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcDown, {}), " en el horario del evento seleccionado y elige la opción deseada."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-imagelog-select-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si el horario deseado no está disponible, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.plusAddSchedule",
          product: "2"
        }), " para agregar uno. Para obtener más información sobre la configuración de horarios, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-schedule",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-image-log-settings",
      children: "Modificar ajustes básicos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambia los eventos y horarios de los registros de imágenes existentes."
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
            sid: "setting.menu.device.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.imageLog"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la lista de la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.preset",
            product: "2"
          }), ", haz clic en ", (0,jsx_runtime.jsx)(IcDown, {}), " para el evento que quieras modificar y selecciona las opciones."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-imagelog-select-event.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcDown, {}), " en el horario del evento seleccionado y elige la opción deseada."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-imagelog-select-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si el horario deseado no está disponible, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.plusAddSchedule",
          product: "2"
        }), " para agregar uno. Para obtener más información sobre la configuración de horarios, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-schedule",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-image-log-settings",
      children: "Eliminar ajustes básicos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elimina los eventos y horarios de los registros de imágenes existentes."
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
            sid: "setting.menu.device.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.imageLog"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la lista de la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.preset",
            product: "2"
          }), ", haz clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " para el evento que quieras eliminar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-imagelog-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "image-log-delete-options",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.imageLog.deleteOption",
        product: "2",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configura opciones de eliminación para que los archivos de registro de imágenes no ocupen espacio en el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Los registros de imágenes que superen el tamaño de archivo o la duración establecidos se eliminarán automáticamente."]
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
            sid: "setting.menu.device.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.imageLog"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configura las condiciones para eliminar registros de imágenes en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.imageLog.deleteOption",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-imagelog-delete-option.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.imageLog.deleteOption",
                product: "2"
              }), ": Elige la unidad de tamaño de archivo (", (0,jsx_runtime.jsx)(Cmd, {
                children: "MB"
              }), "/", (0,jsx_runtime.jsx)(Cmd, {
                children: "GB"
              }), ") o la unidad de duración (", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.imageLog.deleteOption.day",
                product: "2"
              }), "/", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.imageLog.deleteOption.week",
                product: "2"
              }), "/", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.imageLog.deleteOption.month",
                product: "2"
              }), ")."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.imageLog.deleteOption.log.amount",
                product: "2"
              }), ": Define la unidad de la condición establecida en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.imageLog.deleteOption",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.imageLog.deleteCheckDuration",
                product: "2"
              }), ": Selecciona el ciclo para eliminar registros de imágenes."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "image-log-save-path",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.imageLog.storagePath",
        product: "2",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura la ruta donde se almacenan los registros de imágenes."
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
            sid: "setting.menu.device.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.imageLog"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingresa la ruta para almacenar los registros de imágenes en el campo ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.imageLog.imageLogFilePath",
            product: "2"
          }), " de la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.imageLog.storagePath",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-imagelog-savepath.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La ruta de almacenamiento no se crea automáticamente; debe crearse previamente para almacenar registros de imágenes."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Por ejemplo, si ingresas ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".\\imagelog\\"
            }), ", los registros de imágenes se almacenarán en la ruta donde está instalado BioStar X."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "*C:\\Program Files\\BioStar X\\imagelog*"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "image-log-user-profile",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.image_log.title",
        product: "2",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura el dispositivo para mostrar la foto de perfil del usuario al monitorizar registros de eventos y registros en tiempo real si el dispositivo no puede capturar registros de imágenes."
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
            sid: "setting.menu.device.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.imageLog"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Marca la casilla de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.image_log.display",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.image_log.title",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-imagelog-userprofile.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Cuando esta opción está habilitada, si se genera un registro de imágenes, no se mostrará la foto de perfil del usuario y se mostrará el registro de imágenes grabado."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información detallada sobre la visualización de los registros de eventos en la página ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "lo siguiente"
            }), "."]
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