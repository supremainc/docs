"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8787"], {
99655: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_video_mdx_d5b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-video-mdx-d5b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_video_mdx_d5b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-video","title":"Supervisar Video","description":"Este documento proporciona instrucciones paso a paso para las operaciones principales de la función de monitoreo de video, incluidas agregar video, cambiar el tamaño, cambiar la posición y comprobar alarmas.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-video.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-video","permalink":"/docs/es/platform/biostar_x/monitoring-video","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-video.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-video","title":"Supervisar Video","description":"Este documento proporciona instrucciones paso a paso para las operaciones principales de la función de monitoreo de video, incluidas agregar video, cambiar el tamaño, cambiar la posición y comprobar alarmas.","keywords":["Monitorizar","Video"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Supervisar dispositivo","permalink":"/docs/es/platform/biostar_x/monitoring-device"},"next":{"title":"Supervisar evento","permalink":"/docs/es/platform/biostar_x/monitoring-event"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-video.mdx


const frontMatter = {
	id: 'monitoring-video',
	title: 'Supervisar Video',
	description: 'Este documento proporciona instrucciones paso a paso para las operaciones principales de la función de monitoreo de video, incluidas agregar video, cambiar el tamaño, cambiar la posición y comprobar alarmas.',
	keywords: [
		'Monitorizar',
		'Video'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*In this case, add a tab to the screen and click <Cmd sid='arena.tree.contextMenu.openVideo' /> again.*/
/*크기를 늘린 영상은 이동되지 않습니다. ???*/


const toc = [{
  "value": "Reproducir video",
  "id": "play-video",
  "level": 2
}, {
  "value": "Controlar video",
  "id": "control-video",
  "level": 2
}, {
  "value": "Herramienta de control de puerta",
  "id": "door-control-tool",
  "level": 2
}, {
  "value": "Comprobar alarma de video",
  "id": "check-the-video-alarm",
  "level": 2
}, {
  "value": "Comprobar registro de video",
  "id": "check-video-log",
  "level": 2
}, {
  "value": "Configurar diseño del video tile",
  "id": "video-tile-layout-setting",
  "level": 2
}, {
  "value": "Cambiar tamaño del video",
  "id": "change-video-size",
  "level": 3
}, {
  "value": "Ampliar tamaño del video",
  "id": "video-size-enlargement",
  "level": 3
}, {
  "value": "Cambiar ubicación del video",
  "id": "changing-the-video-location",
  "level": 3
}, {
  "value": "Vista de pantalla completa",
  "id": "full-screen",
  "level": 2
}, {
  "value": "Cerrar video",
  "id": "close-the-video",
  "level": 2
}, {
  "value": "Cerrar todos los videos",
  "id": "close-all-video",
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
  }, {Calloutlists, Cmd, Column, Columns, IcClose, IcFullscreen, IcMoreB, IcRestorscreen, IcVidLog, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFullscreen) _missingMdxReference("IcFullscreen", true);
  if (!IcMoreB) _missingMdxReference("IcMoreB", true);
  if (!IcRestorscreen) _missingMdxReference("IcRestorscreen", true);
  if (!IcVidLog) _missingMdxReference("IcVidLog", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Supervise y controle en tiempo real los videos de cámaras vinculadas a puertas, áreas y dispositivos mediante la función de monitoreo de video. Este documento ofrece orientación sobre cómo usar los mosaicos de video para agregar videos de cámaras, cambiar su tamaño, cambiar su posición, verlos en pantalla completa y realizar varias tareas. Además, admite una respuesta rápida a situaciones de seguridad mediante funciones de gestión como comprobar y borrar estados de alarma."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Video Tile"
            }), " es el área en el centro de la pantalla donde aparece el video de la cámara. Es un componente de la interfaz que permite colocar y supervisar simultáneamente varios videos de cámaras. Los usuarios pueden cambiar el tamaño o la posición del video en el video tile y cerrarlo o pasarlo a pantalla completa según sea necesario."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-monitoring-video-tiles.png",
            width: "70%"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cómo integrar con VMS y agregar y gestionar cámaras, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si se produce un error de carga al reproducir grabaciones desde el VMS, instale el certificado en el servidor VMS e instale el certificado del servidor VMS en la PC cliente. Para obtener más información, consulta lo siguiente."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-video-integration#install-vms-certification",
                  children: "Instalar el certificado en el servidor VMS"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-video-integration#video-troubleshooting",
                  children: "Instalar el certificado del servidor VMS en la PC cliente"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El monitoreo de video está disponible con opciones adicionales para licencias ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " y superiores. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "play-video",
      children: "Reproducir video"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agregue videos de cámaras al video tile para su monitoreo. El video tile se encuentra en el centro de la pantalla y permite supervisar simultáneamente varios videos de cámaras."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione la cámara que desea ver desde las pestañas ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.map.title"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.device.title"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic con el botón derecho."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El video de la cámara seleccionada se puede colocar en el video tile ubicado en el centro de la pantalla."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Seleccione cámaras de la lista en la barra lateral y arrástrelas al área del video tile."
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/monitoring-door-control-open-video-drag-drop.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los mosaicos de video se añaden en orden desde la parte superior izquierda de la pantalla. Si no hay espacio para añadir más, aparece un mensaje de error. "
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-video",
      children: "Controlar video"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "De forma predeterminada, los videos colocados en el video tile se reproducen en tiempo real. Utilice las herramientas de reproducción para ajustar la reproducción del video o ver grabaciones anteriores."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-player.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Este es el nombre de la cámara."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Este botón permite reproducir el video en pantalla completa (", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-fullscreen.svg",
              ico: true,
              alone: true
            }), ") o excluirlo del video tile (", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-close.svg",
              ico: true,
              alone: true
            }), ")."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Este control deslizante permite ajustar la posición de reproducción del video. Al arrastrar el control deslizante, se pueden ver videos anteriores."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para reproducir o pausar el video, haga clic en el botón ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-play.svg",
              ico: true,
              alone: true
            }), " o ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-pause.svg",
              ico: true,
              alone: true
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Este icono indica que el video actual se reproduce en tiempo real. Para volver al video en vivo mientras reproduce video anterior, haga clic en este icono."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-control-tool",
      children: "Herramienta de control de puerta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Después de agregar un video, use la herramienta ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " para realizar acciones adicionales. Al seleccionar la cámara vinculada a la puerta desde el video tile se activa la herramienta ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " que permite controlar la puerta. Use funciones como abrir o bloquear la puerta, desbloquear y desactivar la alarma."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control.png",
      alt: "Control de puerta"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La herramienta ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.map.doorControl"
            }), " se puede usar cuando no hay nada abierto en el panel derecho. Si la información detallada está abierta en el panel derecho, ciérrela para usar la herramienta."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Esta función requiere que una cámara esté vinculada a la puerta. Para información sobre la vinculación de puertas y cámaras, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre las funciones disponibles en la herramienta ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.map.doorControl"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "control-door",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-video-alarm",
      children: "Comprobar alarma de video"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cuando se activa un estado de alarma para una de las puertas vinculadas a la cámara, aparece un icono de alarma sobre el video. Para que el icono de alarma desaparezca, deben borrarse todas las alarmas vinculadas a la puerta."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-alarm.png",
      alt: "alarma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para borrar la alarma de la puerta, haga clic con el botón derecho en la puerta de la lista y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " en el menú emergente. Como alternativa, haga clic en la herramienta ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " y luego en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-clear-alarm.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Un mensaje de éxito o error aparecerá en la parte superior de la pantalla."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-clear-alarm-success.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la sección ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.event"
        }), " en la parte inferior de la pantalla, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "monitoring-event",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-video-log",
      children: "Comprobar registro de video"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando se produce un evento específico en una puerta establecido por una regla, el elemento de evento correspondiente en la lista de la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " mostrará un icono de registro de video (", (0,jsx_runtime.jsx)(IcVidLog, {}), "). Al hacer clic en el elemento de evento con el icono de registro de video, se muestra información detallada en el lado derecho de la pantalla, lo que le permite ver el video del momento en que ocurrió el evento específico. Compruebe el video del momento en que ocurrió un evento específico."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-event-video-log.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El icono de registro de video se muestra solo cuando una cámara está vinculada a la puerta. Para obtener información sobre cómo vincular cámaras y puertas, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La primera cámara conectada tiene prioridad de reproducción según las reglas de configuración de eventos. Para ver el video en una pantalla más grande, haga doble clic en él."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Vincule hasta 4 cámaras a una puerta y haga clic en el botón de cámara en la parte inferior del video para reproducir el video de la cámara deseada. Si solo hay una cámara vinculada, el botón de cámara no se mostrará."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.eventTable.event"
            }), " en la parte inferior de la pantalla, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "video-tile-layout-setting",
      children: "Configurar diseño del video tile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie el tamaño o la posición del video colocado en el video tile según sea necesario. Ajuste el tamaño y la posición del video según su importancia para el monitoreo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-video-size",
      children: "Cambiar tamaño del video"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en el video cuyo tamaño desea cambiar para activar el marco del video seleccionado."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-adjust-size-01.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mueva el cursor del mouse sobre los bordes del marco para que adopte la forma de redimensionamiento."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en una esquina y arrastre hasta el tamaño deseado."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-adjust-size-02.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El tamaño del video puede ajustarse proporcionalmente al tamaño del mosaico colocado. De manera inversa, también es posible reducir el tamaño del video."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-adjust-size-03.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-size-enlargement",
      children: "Ampliar tamaño del video"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Para ampliar el video al tamaño completo del video tile, haga doble clic en el video. El video se ampliará hasta el tamaño del video tile."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/monitoring-video-extend.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "changing-the-video-location",
      children: "Cambiar ubicación del video"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Haga clic en el video para moverlo y arrástrelo hasta la ubicación deseada. Es posible cambiar la posición del video seleccionado."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-move-position.png",
      alone: true
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "full-screen",
      children: "Vista de pantalla completa"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-fullscreen.png",
          alone: true
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l10",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcFullscreen, {}), " en la esquina superior derecha del video para verlo en pantalla completa."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcRestorscreen, {}), " en la esquina superior derecha de la pantalla para salir de pantalla completa. O presiona la tecla ", (0,jsx_runtime.jsx)("kbd", {
            children: "ESC"
          }), " en el teclado."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close-the-video",
      children: "Cerrar video"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-close.png",
          alone: true
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcClose, {}), " en la esquina superior derecha del video para cerrarlo."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close-all-video",
      children: "Cerrar todos los videos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcMoreB, {}), " en la esquina superior derecha de la pantalla para cerrar todos los videos. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.monitoring.contextMenu.closeAll"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-video-close-all.png"
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