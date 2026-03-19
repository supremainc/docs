"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["150"], {
23660: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_location_services_issues_mdx_68b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-location-services-issues-mdx-68b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_location_services_issues_mdx_68b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/location-services-issues","title":"¿Por qué se me solicita activar los servicios de ubicación?","description":"Esta guía explica cómo activar los servicios de ubicación en la aplicación Suprema Pass para asegurar la comunicación por Bluetooth y habilitar las funciones de la tarjeta de acceso móvil.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/location-services-issues.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/location-services-issues","permalink":"/docs/es/platform/biostar_air/location-services-issues","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/location-services-issues.mdx","tags":[],"version":"current","frontMatter":{"id":"location-services-issues","title":"¿Por qué se me solicita activar los servicios de ubicación?","description":"Esta guía explica cómo activar los servicios de ubicación en la aplicación Suprema Pass para asegurar la comunicación por Bluetooth y habilitar las funciones de la tarjeta de acceso móvil.","keywords":["servicios de ubicación","Suprema Pass","Bluetooth"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Solucionar problemas con la tarjeta móvil","permalink":"/docs/es/platform/biostar_air/troubleshooting-suprema-pass-app"},"next":{"title":"Solución de problemas de reproducción de video","permalink":"/docs/es/platform/biostar_air/video-troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/location-issues.json
var location_issues_namespaceObject = JSON.parse('[{"question":"¿Por qué se me solicita activar los servicios de ubicación?","answer":"La app Suprema Pass se comunica con los dispositivos de control de acceso mediante Bluetooth. En dispositivos Android, el sistema operativo exige activar los servicios de ubicación para que funcione el Bluetooth. En iOS, se requieren permisos de ubicación para usar la app en modo en segundo plano."},{"question":"¿La app Airfob almacena mis datos de ubicación?","answer":"<b>No</b>. La app Suprema Pass no rastrea ni almacena datos de ubicación basados en GPS, ni los comparte con terceros. Aunque la app utiliza servicios de ubicación mediante Bluetooth para la autenticación, los registros de acceso se guardan únicamente en el portal del administrador del sitio. La app Suprema Pass, Suprema y el sistema MOCA no almacenan ni utilizan ningún dato de ubicación personal."},{"question":"¿Activar los servicios de ubicación agotará la batería de mi teléfono?","answer":"<b>No</b>. A diferencia de otras apps que usan GPS, la app Suprema Pass no utiliza servicios de ubicación basados en GPS; por lo tanto, no incrementa el consumo de batería."},{"question":"¿Debo activar los servicios de ubicación para usar la app Suprema Pass?","answer":"<ul><li><b>Usuarios de Android</b>: Sí, se deben activar los servicios de ubicación debido a la política de Bluetooth de Android.</li><li><b>Usuarios de iOS</b>: Requerido solo para el uso en segundo plano. Si se usa el modo \\"Solo mientras la app está en pantalla\\", no se necesitan permisos de ubicación.</li></ul>"},{"question":"Requisitos de permisos de ubicación según el método de conexión:","answer":"<ul><li><b>Solo mientras la app está en pantalla</b>: El permiso de ubicación puede establecerse en \\"Permitir solo mientras se usa la app\\". (No se requiere en iOS.)</li><li><b>Modo en segundo plano (Siempre)</b>: El permiso de ubicación debe configurarse en \\"Permitir siempre\\".</li><li><b>Modo NFC</b>: Los usuarios de Android deben aceptar los permisos de ubicación.</li></ul>"},{"question":"¿Por qué mi teléfono me pide aleatoriamente que active los servicios de ubicación?","answer":"<ol><li>Si seleccionas \\"No permitir\\" o \\"Permitir una vez\\", es posible que tu teléfono siga solicitando que actives los servicios de ubicación. Esto lo controlan iOS o Android, no la app Suprema Pass.</li><li>En iOS, incluso si seleccionas \\"Permitir siempre\\", Apple puede seguir mostrando mensajes de confirmación periódicos como parte de sus políticas de seguridad. Sigue seleccionando \\"Permitir siempre\\"; de lo contrario, las credenciales móviles podrían no funcionar de forma consistente. Funciones como el modo en segundo plano y la pulsación larga pueden deshabilitarse aleatoriamente.</li></ol>"}]')
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/location-services-issues.mdx


const frontMatter = {
	id: 'location-services-issues',
	title: '¿Por qué se me solicita activar los servicios de ubicación?',
	description: 'Esta guía explica cómo activar los servicios de ubicación en la aplicación Suprema Pass para asegurar la comunicación por Bluetooth y habilitar las funciones de la tarjeta de acceso móvil.',
	keywords: [
		'servicios de ubicación',
		'Suprema Pass',
		'Bluetooth'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {FaqsItems} = _components;
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "En Suprema Pass, los servicios de ubicación son necesarios para autenticarse con la tarjeta de acceso móvil. Esto garantiza una comunicación segura por Bluetooth entre el dispositivo móvil y el equipo de control de acceso."
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: location_issues_namespaceObject
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