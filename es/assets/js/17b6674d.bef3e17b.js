"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["59467"], {
8777: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_setting_mdx_17b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-setting-mdx-17b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_setting_mdx_17b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-setting","title":"Configurar turno","description":"Esta guía explica cómo configurar las reglas de gestión de asistencia mediante el establecimiento del horario laboral en unidades horarias, diarias y semanales.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-setting.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-setting","permalink":"/docs/es/platform/biostar_x/tna-rule-setting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-setting.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-setting","title":"Configurar turno","description":"Esta guía explica cómo configurar las reglas de gestión de asistencia mediante el establecimiento del horario laboral en unidades horarias, diarias y semanales.","keywords":["Reglas de trabajo","C&P"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Cómo usar tiempo y asistencia","permalink":"/docs/es/platform/biostar_x/tna"},"next":{"title":"Establecer código de tiempo","permalink":"/docs/es/platform/biostar_x/tna-rule-shift-paycode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-setting.mdx


const frontMatter = {
	id: 'tna-rule-setting',
	title: 'Configurar turno',
	description: 'Esta guía explica cómo configurar las reglas de gestión de asistencia mediante el establecimiento del horario laboral en unidades horarias, diarias y semanales.',
	keywords: [
		'Reglas de trabajo',
		'C&P'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Horario de trabajo",
  "id": "horario-de-trabajo",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía explica cómo configurar las reglas de gestión de asistencia mediante el establecimiento del horario laboral en unidades horarias, diarias y semanales."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si es la primera vez que registra reglas de trabajo, siga los pasos a continuación para configurarlas."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
            product: "2",
            className: "bold"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Puede establecer reglas de tiempo para la gestión de registros de asistencia, horas extra y ausencias. Puede definir ponderaciones horarias y asignarles código de color para facilitar la identificación."
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
            product: "2",
            className: "normal"
          }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-shift-paycode",
            children: "lo siguiente"
          }), "."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "-1",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "bold"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Configura reglas de trabajo diarias basadas en un periodo de 24 horas. Las reglas de trabajo incluyen ajustes de reglas por hora, ajustes de hora de inicio diaria y reglas de redondeo de tiempo."
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-shift-day",
            children: "lo siguiente"
          }), "."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "-2",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "bold"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure reglas de trabajo semanales basadas en las reglas diarias configuradas. Configure reglas de trabajo semanales de forma semanal o diaria."
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "normal"
          }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-shift-schedule",
            children: "lo siguiente"
          }), "."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "-3",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "bold"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Esto puede ser útil cuando no ha añadido reglas de horas extra a las reglas de trabajo diarias. Las horas extra establecidas en las reglas de trabajo diarias tienen horas de inicio y fin, pero ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), " calcula el tiempo total que supera el horario laboral regular. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), " puede utilizarse cómodamente para gestionar el total de horas extra diarias/semanales/mensuales y, si configura ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), ", se aplicará en lugar de la regla de horas extra añadida a las reglas de trabajo."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-shift-overtime",
            children: "lo siguiente"
          }), "."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "horario-de-trabajo",
          children: "Horario de trabajo"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Puede establecer el periodo para aplicar el horario de trabajo configurado en el paso anterior, junto con los usuarios, otras reglas de trabajo y los calendarios de ausencias."
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2",
            className: "normal"
          }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-schedule",
            children: "lo siguiente"
          }), "."]
        })]
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