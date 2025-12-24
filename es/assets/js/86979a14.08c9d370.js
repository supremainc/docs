"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["73249"], {
35225: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_audit_trail_mdx_869_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-audit-trail-mdx-869.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_audit_trail_mdx_869_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-audit-trail","title":"Registro auditoría","description":"Supervise no solo la información de acceso de los usuarios, sino también toda la información modificada en el sistema.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-audit-trail.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-audit-trail","permalink":"/docs/es/platform/biostar_x/settings-system-audit-trail","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-audit-trail.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-audit-trail","title":"Registro auditoría","description":"Supervise no solo la información de acceso de los usuarios, sino también toda la información modificada en el sistema.","keywords":["Registro de auditoría","Historial de cambios del sistema","registro de auditoría","Gestión de registros","Auditoría de seguridad","Monitoreo del sistema"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración Del Sistema","permalink":"/docs/es/platform/biostar_x/settings-system"},"next":{"title":"Respaldo de Sistema","permalink":"/docs/es/platform/biostar_x/settings-system-system-backup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-audit-trail.mdx


const frontMatter = {
	id: 'settings-system-audit-trail',
	title: 'Registro auditoría',
	description: 'Supervise no solo la información de acceso de los usuarios, sino también toda la información modificada en el sistema.',
	keywords: [
		'Registro de auditoría',
		'Historial de cambios del sistema',
		'registro de auditoría',
		'Gestión de registros',
		'Auditoría de seguridad',
		'Monitoreo del sistema'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Usar registro de auditoría",
  "id": "audit-trail-guide",
  "level": 2
}, {
  "value": "Tipos de acciones rastreadas",
  "id": "method",
  "level": 3
}, {
  "value": "Clasificación por nivel de permiso",
  "id": "permision",
  "level": 3
}, {
  "value": "Consulta de configuración de período",
  "id": "consulta-de-configuración-de-período",
  "level": 2
}, {
  "value": "Consultar con períodos predefinidos",
  "id": "consultar-con-períodos-predefinidos",
  "level": 3
}, {
  "value": "Consultar con períodos personalizados",
  "id": "consultar-con-períodos-personalizados",
  "level": 3
}, {
  "value": "Configuración de filtros",
  "id": "configuración-de-filtros",
  "level": 2
}, {
  "value": "Guardar filtro",
  "id": "guardar-filtro",
  "level": 2
}, {
  "value": "Navegación de páginas",
  "id": "navegación-de-páginas",
  "level": 2
}, {
  "value": "Exportar a CSV",
  "id": "exportar-a-csv",
  "level": 2
}, {
  "value": "Configurar columnas",
  "id": "configurar-columnas",
  "level": 2
}, {
  "value": "Elementos principales de seguimiento",
  "id": "audit-trail-items",
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
  }, {Cmd, Column, Columns, Details, IcEditUL, IcMoreW, IcTrash2, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.system.auditTrail"
      }), " registra y supervisa todas las actividades que se producen en el sistema. Todas las actividades, como inicio/cierre de sesión de usuarios, cambios de Setting y tareas de administración del sistema, se registran y pueden utilizarse para auditorías de seguridad y monitoreo del sistema."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Auditoría de seguridad"
          }), ": Detectar intentos de acceso no autorizado o abuso de privilegios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Solución de problemas"
          }), ": Supervisar la aparición de errores del sistema y el historial de cambios de Setting."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cumplimiento"
          }), ": Conservar registros de acceso y generar informes de auditoría."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audit-trail-guide",
      children: "Usar registro de auditoría"
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
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.auditTrail"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "La lista de registro de auditoría aparece en la pantalla."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para obtener más información sobre los principales elementos de seguimiento, consulte ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#audit-trail-items",
        children: "lo siguiente"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method",
      children: "Tipos de acciones rastreadas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.method",
        product: "2"
      }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " para clasificar los registros de auditoría por los siguientes tipos de acción."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-action-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.1",
            product: "2"
          }), ": Crear un nuevo elemento"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.3",
            product: "2"
          }), ": Modificar un elemento existente"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.4",
            product: "2"
          }), ": Eliminar elemento"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.2",
            product: "2"
          }), ": Ejecutar funciones del sistema (inicio de sesión, control de dispositivos, etc.)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "permision",
      children: "Clasificación por nivel de permiso"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los registros de auditoría pueden clasificarse según el nivel de administrador. Haga clic en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.bioStarOperator",
        product: "2"
      }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " para filtrar por los siguientes niveles de permiso."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.1",
            product: "2"
          }), ": Acceder a todas las funciones del sistema"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.2",
            product: "2"
          }), ": Funciones de gestión de usuarios"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.3",
            product: "2"
          }), ": Funciones de monitoreo"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.253",
            product: "2"
          }), ": Funciones relacionadas con video"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.254",
            product: "2"
          }), ": Funciones de gestión de asistencia"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Los niveles de permiso ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "audit.permission.253",
          product: "2"
        }), " y ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "audit.permission.254",
          product: "2"
        }), " están disponibles mediante opciones adicionales para la licencia ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " o superior. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consulta-de-configuración-de-período",
      children: "Consulta de configuración de período"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure el período para revisar el historial del registro de auditoría durante una duración específica."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "consultar-con-períodos-predefinidos",
      children: "Consultar con períodos predefinidos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.one_month",
        product: "2"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.three_month",
        product: "2"
      }), " en la lista de filtros de la pantalla izquierda."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-defined-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "consultar-con-períodos-personalizados",
      children: "Consultar con períodos personalizados"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para configuraciones de período detalladas, establezca la fecha de inicio y la fecha de finalización en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " bajo la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.datetime",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-set-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-de-filtros",
      children: "Configuración de filtros"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filtre la lista de registro de auditoría de forma eficiente mediante varios criterios."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), ", configure las siguientes opciones. Las opciones de filtro coinciden con los elementos de columna de la lista de registro de auditoría. Sin embargo, la columna ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.content",
        product: "2"
      }), " no se puede filtrar."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.datetime",
            product: "2"
          }), ": Fecha y hora en que ocurrió el evento"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user",
            product: "2"
          }), ": ID del usuario que realizó el evento"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.bioStarOperator",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#permision",
            children: "Nivel de permiso"
          }), " del usuario"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.ip",
            product: "2"
          }), ": Dirección IP desde la cual el usuario accedió"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.menu",
            product: "2"
          }), ": Categoría de menú del elemento modificado"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.target",
            product: "2"
          }), ": Objetivo modificado"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.method",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#method",
            children: "Acción"
          }), " realizada"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.content",
            product: "2"
          }), ": Detalles durante la ocurrencia del evento"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "guardar-filtro",
      children: "Guardar filtro"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure el filtro y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ta.report.condition.saveFilter.button",
        product: "2"
      }), " de la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " para guardar el filtro en la lista de filtros de la pantalla izquierda."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-add-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcEditUL, {}), " para editar el nombre del filtro. Ingrese el nombre del filtro y presione ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " para cambiar el nombre."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " para eliminar el filtro. El filtro se eliminará de la lista de filtros."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navegación-de-páginas",
      children: "Navegación de páginas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Desplácese entre páginas o establezca la cantidad de elementos que aparecerán en cada página."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-first-page.png",
            ico: true,
            alone: true
          }), ": Ir a la primera página."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-previous-page.png",
            ico: true,
            alone: true
          }), ": Ir a la página anterior."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-nav-page.png",
            ico: true,
            alone: true
          }), ": Ingrese el número de página al que desea ir y presione ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " para ir a esa página."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-next-page.png",
            ico: true,
            alone: true
          }), ": Ir a la página siguiente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-last-page.png",
            ico: true,
            alone: true
          }), ": Ir a la última página."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-audit-trail-rows-page.png",
            ico: true
          }), ": Seleccione la cantidad de elementos que se mostrarán por página."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exportar-a-csv",
      children: "Exportar a CSV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exporte la lista de registro de auditoría a un archivo CSV para utilizarla con herramientas de análisis externas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.filter.title",
            product: "2"
          }), ", configure filtros si es necesario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.user.csv_export",
            product: "2"
          }), " en el lado derecho de la sección."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de exportación CSV, ingresa ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.export.reason",
            product: "2"
          }), "(opcional) y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.download",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-audit-trail-export-csv.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Si configuró filtros, solo los resultados filtrados se exportarán al archivo CSV."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurar-columnas",
      children: "Configurar columnas"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-audit-trail-column-setting.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cambie las posiciones de las columnas o ocúltelas en la lista de registro de auditoría. Haga clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.columnSetting",
            product: "2"
          }), " en el extremo derecho de la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.filter.title",
            product: "2"
          }), "."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Desmarque la casilla del elemento que desea ocultar de la lista de columnas."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Arrastra los elementos deseados a una nueva posición para cambiar el orden de las columnas."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "columnSetting.button.defaultColumn",
                product: "2"
              }), " para inicializar la configuración de columnas."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " para guardar la configuración."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audit-trail-items",
      children: "Elementos principales de seguimiento"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Todas las actividades registradas en el registro de auditoría se organizan por categoría. Haz clic en cada elemento para ver los detalles."
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Acceso al sistema"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Inicio de sesión"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.login",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Inicio de sesión multifactor"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.fingerprint_login",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cierre de sesión"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.logout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Motivos de error de inicio de sesión"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.loginfailedfingerprint",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.loginfailedidpw",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.loginfailedip",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Intentos de inicio de sesión excedidos"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.maximum_invalid_attempts",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Información del usuario"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Información básica"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.login_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.email",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.phone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Información de autenticación"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.password",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.pin",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.fingerprint_templates",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.faces",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.cards",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Permisos y grupos"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.permission",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.access_groups",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.private_operation_modes",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Estado del usuario"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.disabled",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.start_datetime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.expiry_datetime",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gestión de datos"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_import",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_export",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.data_import",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.data_export",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Integración de dispositivos"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.export",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.remove",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Otros"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.photo",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_custom_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.security_level",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.report",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gestión"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_export.absence",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.delete.absence",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.faceMigration"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.list.visualFaceImport.title"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Funciones de correo electrónico"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.emailSentSuccess",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.emailSentFail",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Control de acceso"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de la puerta"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.door_group_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Dispositivos de puerta"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.entry_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.exit_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.relay_output_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.sensor_input_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.exit_button_input_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Control de puerta"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_duration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_once",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_timeout",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.dual_authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.unconditional_lock",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Acciones de puerta"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_apb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_apb_ex",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_timed_apb_ex",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Grupos de acceso"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.access_levels",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.user_groups",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.users",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Niveles de acceso"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.access_level_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración del ascensor"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.elevator_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.floors",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.active_timeout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Dispositivos del ascensor"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.control_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.reader_devices",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.module_devices",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.tamper_device",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Control del ascensor"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.dual_authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.trigger_actions",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Acciones del ascensor"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.clear_apb",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Niveles de piso"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.floor_level_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gestión de dispositivos"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración básica del dispositivo"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.device_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.timezone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de autenticación"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.fingerprint",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.face",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.card",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de interfaz"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.display",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.imageLogEventInfo",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.use_image_log",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de comunicación"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.lan",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.server",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.rs485",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wlan",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wiegand",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wiegand_io",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.usb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.voip",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de funciones"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.system",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.tna",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.trigger_actions",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.camera_frequency",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gestión de usuarios"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.export",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Control del dispositivo"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.connect",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.disconnect",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.sync",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.deleteNsync",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.discover_wiegand",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gestión del sistema"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.factory_reset",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.reset",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.update",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.sync_time",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.license",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Estado del dispositivo"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.locked",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.delete",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Control de acceso avanzado"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración básica de control de acceso avanzado"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.zone_type",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.enable",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.is_global",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Antipassback"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.antipassback",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_apb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_apb_ex",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alarma de incendio"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.fire_alarm",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Control de horario"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.forced_lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.forced_unlock",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gestión de ocupación"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.increase_occupancy",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.decrease_occupancy",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.set_occupancy",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Acciones de control de acceso avanzado"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_alarm",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuración del sistema"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración del servidor"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_addr",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_port",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.https",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.session_timeout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de seguridad"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.secure_communication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.password_strength",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_matching",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de sincronización"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.log_sync_method",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.user_sync_method",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración del dispositivo"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.enrollment_device_list",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.fingerprint_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.support_mobile_credential",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.use_photo_log",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Licencias"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.licenses",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración predeterminada"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.language",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.date_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.time_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.time_zone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de horarios"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.daily_schedules",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.holiday_schedules",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.start_date",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.use_daily_iteration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.days_of_iteration",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de días festivos"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.setting.holidays",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de alertas"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.event_type.alert_on",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.event_type.alert_off",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración del registro de imágenes"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.image_filter.EventFilterCollection",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.image_filter.CutoffOption",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Credenciales móviles"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.mobileCredential.use",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.mobileCredential.notUse",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Registro de auditoría"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.audit.csv_export",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuración de seguridad avanzada"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tarjeta inteligente - DESFire"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_app_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_file_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_encryption_type",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tarjeta inteligente - iClass"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_second_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_start_block_index",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tarjeta inteligente - MIFARE"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_second_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_start_block_index",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_mifare_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_mifare_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tarjeta inteligente - móvil"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mobile_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mobile_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tarjeta inteligente - estándar"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.number_of_template",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.template_size",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de Wiegand"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.length",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.id_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_positions",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_types",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.use_facility_code",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Condiciones y acciones de activación"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.trigger",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.action",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.schedule_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Permisos personalizados"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.operator",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.permission_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Campos personalizados"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.custom_fields.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.custom_fields.id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Configuración de señales"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.delay",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.count",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.on_duration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.off_duration",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gestión de datos"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Copia de seguridad del sistema"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.systemBackup",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gestión de video"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.video.camera",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.video.rule",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gestión de visitantes"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.visitor",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.visitor.setting",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gestión de puertos"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.port",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Horario de verano"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Interfaz personalizada"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.quick_action",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
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