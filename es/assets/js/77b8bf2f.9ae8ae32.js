"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24336"], {
67516: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_door_status_mdx_77b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-monitoring-door-status-mdx-77b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_door_status_mdx_77b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-door-status","title":"Supervisar el estado de la puerta","description":"Supervise el estado de las puertas en tiempo real, controle las cerraduras de forma remota y administre el acceso a las puertas desde el portal web y la aplicación móvil de BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-door-status.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-door-status","permalink":"/docs/es/platform/biostar_air/monitoring-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/monitoring-door-status.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-door-status","title":"Supervisar el estado de la puerta","description":"Supervise el estado de las puertas en tiempo real, controle las cerraduras de forma remota y administre el acceso a las puertas desde el portal web y la aplicación móvil de BioStar Air.","keywords":["Monitorizar","Estado de la puerta","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Consultar historial de alertas e informes","permalink":"/docs/es/platform/biostar_air/monitoring-alert-report-history"},"next":{"title":"Llamada Roll","permalink":"/docs/es/platform/biostar_air/managing-roll-call-fire-muster"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-door-status.mdx


const frontMatter = {
	id: 'monitoring-door-status',
	title: 'Supervisar el estado de la puerta',
	description: 'Supervise el estado de las puertas en tiempo real, controle las cerraduras de forma remota y administre el acceso a las puertas desde el portal web y la aplicación móvil de BioStar Air.',
	keywords: [
		'Monitorizar',
		'Estado de la puerta',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Supervisión del estado de las puertas",
  "id": "monitoringWebPortal",
  "level": 2
}, {
  "value": "Desbloquear una puerta",
  "id": "remotely-unlocking-a-door",
  "level": 3
}, {
  "value": "Activar modo siempre abierto",
  "id": "alwaysOpenMode",
  "level": 3
}, {
  "value": "Establecer el modo de bloqueo",
  "id": "lockMode",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, DocLink, IcAirMore, Image, TabItem, Tabs, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirMore) _missingMdxReference("IcAirMore", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Supervise en tiempo real el estado de las puertas conectadas a BioStar Air. Compruebe si una puerta está bloqueada o desbloqueada y el estado de su sensor de relé, y bloquéela o desbloquéela de forma remota para controlar el acceso."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Consulte el siguiente video para ver el tutorial sobre cómo supervisar el estado de las puertas."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "_nxSRwst480"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoringWebPortal",
      children: "Supervisión del estado de las puertas"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supervise el estado de las puertas en el portal web de BioStar Air. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_submenu",
            product: "air"
          }), " en la barra lateral izquierda. Vea la lista de puertas registradas en BioStar Air."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status.png"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Revise los siguientes elementos para cada puerta."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column2",
                product: "air"
              }), ": Indica si la puerta está bloqueada o desbloqueada."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column3",
                product: "air"
              }), ": Indica si la puerta está físicamente abierta o cerrada."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "Supervise el estado de las puertas desde la aplicación BioStar Air en un dispositivo móvil."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-monitoring-door-status.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Abra la aplicación BioStar Air en su dispositivo móvil e inicie sesión."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "monitoring_menu",
                product: "air"
              }), " en la parte inferior de la pantalla de inicio."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Toque la tarjeta ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_submenu",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Vea la lista de puertas registradas en BioStar Air."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre el registro y la gestión de puertas, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-registered-doors"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remotely-unlocking-a-door",
      children: "Desbloquear una puerta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Desbloquee la puerta de forma remota cuando esté en línea y conectada a BioStar Air."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la columna ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column4",
                product: "air"
              }), ", haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_open_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["El estado en la columna ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column2",
                product: "air"
              }), " cambia a desbloqueado y aparece un mensaje de éxito."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-monitoring-door-status-open-door.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Después de que transcurra el tiempo configurado, la puerta vuelve a estar bloqueada."
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-mobile-monitoring-door-open.png"
            })
          }), (0,jsx_runtime.jsx)(Column, {
            className: "padding--l20",
            children: (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "door_open_btn",
                    product: "air"
                  }), " para desbloquear la puerta de forma remota."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Aparecerá un mensaje de éxito en la parte inferior de la pantalla."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Después de que transcurra el tiempo configurado, la puerta vuelve a estar bloqueada."
                }), "\n"]
              }), "\n"]
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener información sobre cómo configurar la duración durante la cual la puerta permanece abierta, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-registered-doors#editingDoors"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alwaysOpenMode",
      children: "Activar modo siempre abierto"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mantenga una puerta desbloqueada indefinidamente. Úselo cuando se necesite acceso temporal o para visitantes."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la lista de puertas, haga clic en ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " en el extremo derecho de la puerta para mantenerla abierta."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-monitoring-door-status-more-func.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_unlock_mode",
                product: "air"
              }), " en el menú emergente."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["El estado en la columna ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column4",
                product: "air"
              }), " cambia a ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_control_unlocked_description",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status-control-always-open.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirMore, {
            title: "Control"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "release_icon_tooltip",
            product: "air"
          }), " para volver al funcionamiento normal."]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-mobile-monitoring-door-status-control.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l20",
            children: [(0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque ", (0,jsx_runtime.jsx)(IcAirMore, {
                    title: "Control"
                  }), " en el extremo derecho de la puerta."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Cuando aparezca la opción ", (0,jsx_runtime.jsx)(Cmd, {
                    en: "Door Info and Control",
                    children: "Door Info and Control"
                  }), ", toque ", (0,jsx_runtime.jsx)(Cmd, {
                    en: "Unlock",
                    children: "Unlock"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Aparecerá un mensaje de éxito en la parte inferior de la pantalla."
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Toque ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "release_icon_tooltip",
                product: "air"
              }), " para volver al funcionamiento normal."]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lockMode",
      children: "Establecer el modo de bloqueo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mantenga la puerta bloqueada independientemente del horario actual. Úselo cuando se requiera mayor seguridad."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la lista de puertas, haga clic en ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " en el extremo derecho de la puerta para mantenerla bloqueada."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-monitoring-door-status-more-func.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_lock_mode",
                product: "air"
              }), " en el menú emergente."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["El estado en la columna ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column4",
                product: "air"
              }), " cambia a ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_control_locked_description",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status-control-lock-mode.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirMore, {
            title: "Control"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "release_icon_tooltip",
            product: "air"
          }), " para volver al funcionamiento normal."]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-mobile-monitoring-door-lock-mode.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l20",
            children: [(0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque ", (0,jsx_runtime.jsx)(IcAirMore, {
                    title: "Control"
                  }), " en el extremo derecho de la puerta."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Cuando aparezca la opción ", (0,jsx_runtime.jsx)(Cmd, {
                    en: "Door Info and Control",
                    children: "Door Info and Control"
                  }), ", toque ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "event_log_lock_mode",
                    product: "air"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Aparecerá un mensaje de éxito en la parte inferior de la pantalla."
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Toque ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "release_icon_tooltip",
                product: "air"
              }), " para volver al funcionamiento normal."]
            })]
          })]
        })
      })]
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