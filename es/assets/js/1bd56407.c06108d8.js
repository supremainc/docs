"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["76631"], {
54132: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.smtpServer",
            product: "2"
          }), ": Ingrese el nombre del servidor SMTP."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), ": Ingrese la descripción."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.portDefault25",
            product: "2"
          }), ": Ingrese el número de puerto del servidor SMTP. La dirección del servidor SMTP usa el formato ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "smtp.{email-service-provider}.com"
          }), ". Confírmela en la pantalla de ajustes del correo electrónico utilizado como servidor SMTP."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.smtpServerAddr",
            product: "2"
          }), ": Ingrese la dirección del servidor SMTP. Email Service Provider.com', y verifique la información en la pantalla de ajustes del correo electrónico que se utilizará como SMTP."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.userName",
            product: "2"
          }), ": Ingrese la cuenta del servicio SMTP."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.password",
            product: "2"
          }), ": Ingrese la contraseña del servicio SMTP."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.securityType",
            product: "2"
          }), ": Seleccione el tipo de seguridad."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.triggerAction.sender",
            product: "2"
          }), ": Ingrese la dirección de correo electrónico del remitente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Para obtener más información sobre SMTP, contacte al administrador del sistema."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Al usar el servidor SMTP como cuenta de correo con autenticación de dos factores y cambiar la contraseña de la cuenta, tenga en cuenta lo siguiente: Una vez que configure la autenticación de dos factores, la contraseña SMTP es la misma que la contraseña de la aplicación generada mediante la autenticación de dos factores, no la contraseña de la cuenta de correo."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Al configurar la autenticación en dos pasos, la contraseña SMTP usa la contraseña de aplicación generada por la autenticación en dos pasos, no la contraseña de la cuenta de correo."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "En ese momento, si se cambia la contraseña de la cuenta de correo, la contraseña de la aplicación se elimina automáticamente y la contraseña SMTP deja de estar disponible."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Al cambiar la contraseña de la cuenta de correo, genere nuevamente la contraseña de la aplicación y luego configure otra vez la contraseña SMTP."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
73465: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_settings_mdx_1bd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-settings-mdx-1bd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_settings_mdx_1bd_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-settings","title":"Configurar tiempo y asistencia","description":"Puede registrar dispositivos para usarlos en la gestión de asistencia o establecer la información del remitente que se utilizará al enviar correos electrónicos de notificación.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-settings.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-settings","permalink":"/docs/es/platform/biostar_x/tna-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-settings","title":"Configurar tiempo y asistencia","description":"Puede registrar dispositivos para usarlos en la gestión de asistencia o establecer la información del remitente que se utilizará al enviar correos electrónicos de notificación.","keywords":["T&A (Tiempo y Asistencia)","Ajustes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Editar informe de T&A","permalink":"/docs/es/platform/biostar_x/tna-report-edit"},"next":{"title":"Administrar visitantes","permalink":"/docs/es/platform/biostar_x/visitor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_settings-email-settings.mdx
var _settings_email_settings = __webpack_require__(54132);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-settings.mdx


const frontMatter = {
	id: 'tna-settings',
	title: 'Configurar tiempo y asistencia',
	description: 'Puede registrar dispositivos para usarlos en la gestión de asistencia o establecer la información del remitente que se utilizará al enviar correos electrónicos de notificación.',
	keywords: [
		'T&A (Tiempo y Asistencia)',
		'Ajustes'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Acceder a la configuración de gestión de asistencia",
  "id": "acceder-a-la-configuración-de-gestión-de-asistencia",
  "level": 2
}, {
  "value": "Configuración de gestión de asistencia",
  "id": "configuración-de-gestión-de-asistencia",
  "level": 2
}, ..._settings_email_settings/* .toc */.RM];
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
  }, {Cmd, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Puede registrar dispositivos para usarlos en la gestión de asistencia o establecer la información del remitente que se utilizará al enviar correos electrónicos de notificación. También puede establecer el delimitador de documentos para exportar informes de asistencia en formato CSV."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceder-a-la-configuración-de-gestión-de-asistencia",
      children: "Acceder a la configuración de gestión de asistencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcSet, {}), " en la barra lateral izquierda."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-access-btn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Edite los campos necesarios."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-de-gestión-de-asistencia",
      children: "Configuración de gestión de asistencia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.devices",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lista de dispositivos que se pueden usar para la gestión de asistencia. Para registrarlo como dispositivo de gestión de asistencia, seleccione el dispositivo deseado y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.register",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-unregister-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.registerDevices",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lista de dispositivos que se utilizan actualmente para la gestión de asistencia."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para darlo de baja, seleccione el dispositivo deseado y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.unregister",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-settings-register-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para editar la configuración de asistencia de un dispositivo registrado, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.setting",
            product: "2"
          }), ". Para obtener más información sobre la configuración de asistencia, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-device-details-advanced#attendance-management",
            children: "el siguiente enlace"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-initial-setting-device-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.typeCode",
            product: "2"
          }), " es una configuración para asignar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.tna.eventKey",
            product: "2"
          }), " con los tipos de eventos de asistencia. Los tipos de eventos de asistencia son los siguientes:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_CHECK_IN",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_CHECK_OUT",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_BREAK_START",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_BREAK_END",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_MEAL_START",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "PUNCH_TYPE_MEAL_END",
              product: "2"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Solo puede editar la configuración de asistencia de un dispositivo cuando esté conectado a él."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si elimina un dispositivo registrado desde el menú ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.device.root"
            }), ", el dispositivo de gestión de asistencia registrado también se eliminará automáticamente."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "senderInfo",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.triggerAction.senderInfor",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede establecer la información del remitente que se utilizará al enviar correos electrónicos de notificación. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.edit",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-sender-info.png"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_settings_email_settings/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.export",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Con la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.downloadToCsv",
        product: "2"
      }), ", puede elegir el delimitador de documentos al exportar informes de asistencia."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-export-csv.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-3",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna.settings.punchlogs.optionTitle",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede establecer el período de almacenamiento de los registros de asistencia. Establezca la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna.settings.punchlogs.storeDays",
        product: "2"
      }), " en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), " e ingrese el período. Para guardar la configuración, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tna.settings.apply",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-settings-save-period.png"
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