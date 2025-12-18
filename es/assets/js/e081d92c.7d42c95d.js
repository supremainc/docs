"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41290"], {
53141: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_rule_mdx_e08_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-videos-rule-mdx-e08.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_rule_mdx_e08_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos-rule","title":"Configurar reglas de video","description":"Esta guía muestra cómo configurar reglas de video usando VMS integrado con BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-rule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos-rule","permalink":"/docs/es/platform/biostar_x/settings-videos-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos-rule.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos-rule","title":"Configurar reglas de video","description":"Esta guía muestra cómo configurar reglas de video usando VMS integrado con BioStar X.","keywords":["Cámara","Reglas","Ajustes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar la cámara","permalink":"/docs/es/platform/biostar_x/settings-videos-camera"},"next":{"title":"Administrar mapa","permalink":"/docs/es/platform/biostar_x/settings-map-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-rule.mdx


const frontMatter = {
	id: 'settings-videos-rule',
	title: 'Configurar reglas de video',
	description: 'Esta guía muestra cómo configurar reglas de video usando VMS integrado con BioStar X.',
	keywords: [
		'Cámara',
		'Reglas',
		'Ajustes'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar regla",
  "id": "add-camera-rule",
  "level": 2
}, {
  "value": "Ingresar información de la regla",
  "id": "ingresar-información-de-la-regla",
  "level": 3
}, {
  "value": "Ajustes de registro de video",
  "id": "ajustes-de-registro-de-video",
  "level": 3
}, {
  "value": "Ajustes de eventos que se registrarán en VMS",
  "id": "ajustes-de-eventos-que-se-registrarán-en-vms",
  "level": 3
}, {
  "value": "Enlazar puerta y cámara",
  "id": "link-door-camera",
  "level": 3
}, {
  "value": "Editar regla",
  "id": "edit-rule",
  "level": 2
}, {
  "value": "Borrar Regla",
  "id": "borrar-regla",
  "level": 2
}, {
  "value": "Configuración de columnas",
  "id": "configuración-de-columnas",
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
  }, {Cmd, IcMoreW, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Las reglas son ajustes para enviar eventos y marcadores al servidor VMS combinando los eventos que ocurren en la cámara y la puerta. Una configuración adecuada de las reglas de video permite utilizar varias funciones de gestión de seguridad."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Creación automática de marcadores"
          }), ": Crea marcadores automáticamente cuando ocurren eventos de acceso específicos para encontrar fácilmente videos importantes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Supervisión eficiente"
          }), ": Supervisa las imágenes en vivo de las cámaras conectadas a las puertas y comprueba los eventos al instante cuando ocurren."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gestión integrada de eventos"
          }), ": Vincula eventos de acceso e imágenes para comprender de manera integral las situaciones de seguridad."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La función de reglas de video está disponible con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " o superior mediante opciones adicionales. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-camera-rule",
      children: "Agregar regla"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.button",
            product: "2"
          }), " en la parte superior izquierda de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.addRule.title",
        product: "2"
      }), ", configura las reglas según las siguientes instrucciones. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " en la parte inferior de la pantalla para completar y guardar todos los ajustes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ingresar-información-de-la-regla",
      children: "Ingresar información de la regla"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.detail.information.title",
        product: "2"
      }), ", ingresa el nombre y la descripción de la nueva regla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "video.rule.detail.description",
          product: "2"
        }), " es opcional. Úsalo para ingresar una descripción sencilla y comprender fácilmente el propósito o las características de la regla."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ajustes-de-registro-de-video",
      children: "Ajustes de registro de video"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "video.addRule.label.videoLog",
        product: "2"
      }), " es una función que graba automáticamente video antes y después de que ocurra un evento específico. Conserva las grabaciones durante un período determinado para comprender el contexto antes y después de los eventos."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-video-log.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.label.videoLog",
            product: "2"
          }), ": Define el uso de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.label.videoLog",
            product: "2",
            className: "normal"
          }), " en la regla actual."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "video.addRule.label.enabled",
                product: "2"
              }), ": Graba automáticamente video desde antes y después de que ocurran los eventos."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "video.addRule.label.disabled",
                product: "2"
              }), ": Desactiva la función ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "video.addRule.label.videoLog",
                product: "2",
                className: "normal"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.label.videoLogLength",
            product: "2"
          }), ": Define el rango de grabación alrededor de diez segundos antes y después del evento. Se puede configurar hasta un máximo de 60 segundos."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cuanto mayor sea el rango establecido de ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "video.addRule.label.videoLogLength",
          product: "2"
        }), ", más espacio de almacenamiento puede requerir. Ten en cuenta el rendimiento del sistema y la capacidad de almacenamiento al definir una duración adecuada."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ajustes-de-eventos-que-se-registrarán-en-vms",
      children: "Ajustes de eventos que se registrarán en VMS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.detail.event.title",
        product: "2"
      }), ", puedes seleccionar los eventos que se registrarán en el servidor VMS y definir si se enviarán marcadores o eventos."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-event.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.event.itemName",
            product: "2"
          }), ": Selecciona el tipo de evento que se enviará al servidor VMS. Cuando selecciones el evento deseado de la lista de eventos de la izquierda, se añadirá a la lista de la derecha."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.vmsBookmark.itemName",
            product: "2"
          }), ": Puedes definir si se creará un marcador en el servidor VMS cuando ocurra el evento seleccionado en la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.vmsEvent.itemName",
            product: "2"
          }), ": Puedes definir si se crearán registros de eventos en el servidor VMS cuando ocurra el evento seleccionado en la lista."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Seleccionar eventos no es obligatorio."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Puedes encontrar rápidamente el evento deseado utilizando el campo de búsqueda en la parte superior de la lista de eventos de la izquierda."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para eliminar un evento de la lista de la derecha, haz clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Puedes establecer el idioma del mensaje al enviar marcadores y eventos al servidor VMS. Para más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-video-integration#vms-event-bookmark",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "link-door-camera",
      children: "Enlazar puerta y cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.detail.doorCameraLinkage.title",
        product: "2"
      }), ", enlaza puertas con cámaras para enviar grabaciones de las cámaras conectadas junto con los eventos que ocurren en las puertas al servidor VMS. Esto permite ver fácilmente las grabaciones relacionadas con eventos de acceso."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-connect-door.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), " en la parte superior derecha."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.doorCameraLinkage.popup.title",
            product: "2"
          }), ", selecciona la puerta y luego la cámara asociada."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-add-rule-connect-door-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar la puerta y la cámara, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consulta en la lista las cámaras enlazadas a la puerta."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-connect-door-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Una sola puerta puede tener hasta cuatro cámaras añadidas."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las puertas incluidas en una regla no pueden usarse en otras reglas."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para eliminar la regla de enlace de puertas y cámaras, marca la casilla de los elementos que deseas eliminar en la lista y haz clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.delete",
              product: "2"
            }), " en la parte superior derecha."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Las cámaras enlazadas a las puertas pueden visualizarse como una subestructura de las puertas en la lista de puertas de la página ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), ". Para más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "check-door-status#door-tree-structure",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " en la parte inferior de la pantalla para completar y guardar todos los ajustes."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-rule",
      children: "Editar regla"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en la regla que deseas editar en la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.rules",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando aparezca la pantalla de edición de la regla, modifica los elementos deseados."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para guardar la regla modificada, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para información detallada sobre cada sección de la pantalla de edición de reglas, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#add-camera-rule",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "borrar-regla",
      children: "Borrar Regla"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Marca la casilla de la regla que deseas eliminar en la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.rules",
            product: "2"
          }), ". Se puede seleccionar una o más reglas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.delete",
            product: "2"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Revisa el mensaje y haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-de-columnas",
      children: "Configuración de columnas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agrega columnas, cambia su orden en la lista o configúralas como ocultas."
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la parte superior derecha de la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.rules",
            product: "2"
          }), ", haz clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "columnSetting.dialog.header",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "columnSetting.dialog.header",
            product: "2"
          }), ", selecciona las casillas de las columnas que quieras mostrar para agregarlas o configúralas como ocultas. También cambia el orden de las columnas mediante arrastrar y soltar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando hayas terminado de cambiar la configuración de columnas, haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.ok",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "columnSetting.button.defaultColumn",
          product: "2"
        }), " para inicializar la configuración de columnas."]
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