"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["79028"], {
81705: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_administrators_mdx_67d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-administrators-mdx-67d.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_administrators_mdx_67d_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-administrators","title":"Administrar cuentas y roles de administradores","description":"Aprende cómo invitar a administradores, asignar niveles de rol, gestionar permisos y configurar el control de acceso para los roles observador, operador, administrador y master en BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-administrators.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-administrators","permalink":"/docs/es/platform/biostar_air/managing-administrators","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-administrators.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-administrators","title":"Administrar cuentas y roles de administradores","description":"Aprende cómo invitar a administradores, asignar niveles de rol, gestionar permisos y configurar el control de acceso para los roles observador, operador, administrador y master en BioStar Air.","keywords":["Administrador","roles","Configuración de Control de Acceso"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configuración de funciones adicionales","permalink":"/docs/es/platform/biostar_air/site-additional-settings"},"next":{"title":"Configuración de la cuenta personal","permalink":"/docs/es/platform/biostar_air/account-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-administrators.mdx


const frontMatter = {
	id: 'managing-administrators',
	title: 'Administrar cuentas y roles de administradores',
	description: 'Aprende cómo invitar a administradores, asignar niveles de rol, gestionar permisos y configurar el control de acceso para los roles observador, operador, administrador y master en BioStar Air.',
	keywords: [
		'Administrador',
		'roles',
		'Configuración de Control de Acceso'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ver administradores",
  "id": "viewAdmin",
  "level": 2
}, {
  "value": "Desactivar administradores",
  "id": "deactiveAdmin",
  "level": 2
}, {
  "value": "Cambiar el rol de un administrador",
  "id": "changing-an-administrators-role",
  "level": 2
}, {
  "value": "Invitar a nuevos administradores",
  "id": "inviteNewAdmin",
  "level": 2
}, {
  "value": "Niveles de administrador",
  "id": "administrator-levels",
  "level": 2
}, {
  "value": "<Cmd class=\"normal\"></Cmd> (Nivel más bajo)",
  "id": "observer",
  "level": 3
}, {
  "value": "<Cmd class=\"normal\"></Cmd> (Nivel más alto)",
  "id": "master",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Utiliza la función de administrador en BioStar Air para gestionar cuentas de administrador, asignar roles y controlar los niveles de acceso en tu organización. Esto te permite mantener la seguridad y el control administrativo, a la vez que otorgas los privilegios adecuados al personal correspondiente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Mira el siguiente video para ver cómo gestionar administradores."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "pUyNLeTfGRI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewAdmin",
      children: "Ver administradores"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_submenu",
        product: "air"
      }), " en la barra lateral izquierda."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-admin.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El menú ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_submenu",
        product: "air"
      }), " muestra una lista de todos los administradores activos. La lista de administradores incluye la siguiente información."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nombre"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Dirección de correo electrónico"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Número de teléfono"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Invitado por"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Fecha de invitación"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Rol de administrador"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Estado de la cuenta (activo/inactivo)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deactiveAdmin",
      children: "Desactivar administradores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En lugar de eliminar a un administrador, desactiva la cuenta y reactívala cuando sea necesario."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Busca en la lista al administrador que quieres desactivar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el interruptor de la columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_admin_account_status",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-deactive.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensajes, haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_status_change_confirm_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El estado en la columna ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_admin_account_status",
        product: "air"
      }), " cambia a ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_status_disabled",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-admin-deactive-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La capacidad para desactivar administradores puede estar restringida por el rol del administrador. Los administradores con el rol ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " no pueden desactivar a otros administradores con el rol ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changing-an-administrators-role",
      children: "Cambiar el rol de un administrador"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los administradores pueden cambiar los roles de administradores de nivel inferior."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Busca en la lista al administrador cuyo rol quieres cambiar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el nuevo nivel de administrador en la columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_admin_level",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-change-role.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensajes, haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_status_change_confirm_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Solo los administradores con el rol ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " pueden asignar o modificar el rol ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " para otros administradores."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inviteNewAdmin",
      children: "Invitar a nuevos administradores"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agregar nuevos administradores."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_invite",
            product: "air"
          }), " en la esquina superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_invitation_title",
            product: "air"
          }), ", ingrese la dirección de correo electrónico."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-invite.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_invitation_input2",
            product: "air"
          }), ", seleccione el rol que se asignará al nuevo administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "send_btn",
            product: "air"
          }), " para enviar la invitación."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cada administrador debe tener una dirección de correo electrónico única. Si es necesario, use una dirección alias (por ejemplo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:erik+training@example.com",
              children: "erik+training@example.com"
            }), ")."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en el enlace del correo electrónico de invitación. Regístrese si el administrador no tiene una cuenta. Si el administrador ya tiene una cuenta, inicie sesión para acceder directamente al ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "sitio"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "administrator-levels",
      children: "Niveles de administrador"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cada nivel de administrador en BioStar Air tiene permisos específicos, y los niveles superiores heredan los permisos de los inferiores."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cada rol de administrador tiene permisos distintos en BioStar Air. ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "observer_role",
          product: "air",
          className: "bold"
        }), " tiene el acceso más restringido y algunos menús no se muestran."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "observer",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "observer_role",
        product: "air",
        className: "normal"
      }), " (Nivel más bajo)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dashboard_menu",
            product: "air"
          }), " y los registros ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "se pueden ver"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Exportar"
          }), " registros y generar informes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No puede modificar"
          }), " la configuración, los usuarios ni los dispositivos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El acceso a los menús está restringido. La mayoría de los menús no se muestran en pantalla."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operator",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "operator_role",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Puede administrar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_submenu",
            product: "air"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sin acceso"
          }), " al control de dispositivos ni a la configuración de administración."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Adecuado para administrar la configuración diaria de usuarios y accesos."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "administrator",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_role",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Puede invitar"
          }), " a nuevos administradores. Sin embargo, no puede asignar el rol ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "master_role",
            product: "air",
            className: "bold"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuenta con autoridad de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "control total sobre los dispositivos"
          }), " para modificar la configuración y gestionarlos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["No puede eliminar ni modificar administradores con el rol ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "master_role",
            product: "air",
            className: "bold"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Este rol suele recomendarse para el personal de TI responsable de la gestión del sistema."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "master",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "master_role",
        product: "air",
        className: "normal"
      }), " (Nivel más alto)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tiene ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "acceso total"
          }), " a todas las configuraciones y funciones."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["No puede eliminarse ni modificarse por los ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "administradores"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Puede crear ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "subsitios"
          }), " para gestionar distintas ubicaciones u organizaciones."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Puede configurar los ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ajustes del sitio"
          }), ", incluyendo las configuraciones críticas a nivel del sistema."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Responsable de aceptar los ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "términos"
          }), " antes de que otros administradores inicien sesión."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Generalmente asignado al propietario de la empresa o a un ejecutivo de máxima confianza."
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