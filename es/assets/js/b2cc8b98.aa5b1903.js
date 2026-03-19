"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["32193"], {
32526: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_video_troubleshotting_mdx_b2c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-video-troubleshotting-mdx-b2c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_video_troubleshotting_mdx_b2c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/video-troubleshooting","title":"Solución de problemas de reproducción de video","description":"Aprenda a solucionar problemas de reproducción de video en BioStar Air: verifique si se admite ONVIF Profile G, resuelva incompatibilidades de códecs y corrija problemas con el formato de la tarjeta SD.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/video-troubleshooting","permalink":"/docs/es/platform/biostar_air/video-troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/video-troubleshotting.mdx","tags":[],"version":"current","frontMatter":{"id":"video-troubleshooting","title":"Solución de problemas de reproducción de video","description":"Aprenda a solucionar problemas de reproducción de video en BioStar Air: verifique si se admite ONVIF Profile G, resuelva incompatibilidades de códecs y corrija problemas con el formato de la tarjeta SD.","keywords":["Cámara IP","Reproducción de video grabado","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"¿Por qué se me solicita activar los servicios de ubicación?","permalink":"/docs/es/platform/biostar_air/location-services-issues"},"next":{"title":"v2.11","permalink":"/docs/es/platform/biostar_air/release-notes/v2_11"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.json
var video_troubleshotting_namespaceObject = JSON.parse('[{"question":"Verificar soporte para el perfil ONVIF G","answer":"Verifique si la cámara es compatible con el perfil ONVIF G buscando el nombre del modelo en <a href=\'https://www.onvif.org\' target=\'_blank\'>la lista de productos conformes de ONVIF</a>. El perfil ONVIF G es necesario para la reproducción de videos grabados."},{"question":"Probar la reproducción de video en la configuración de la cámara","answer":"<ul><li>Inicie sesión en la configuración de la cámara a través de su interfaz web.</li><li>Asegúrese de que puede ver la transmisión en vivo y los videos grabados.</li><li>Tenga en cuenta que algunas cámaras pueden restringir la reproducción simultánea de videos grabados en el portal y en el menú de configuración. Si la reproducción funciona en la configuración de la cámara pero no en BioStar Air, cierre la interfaz de configuración y vuelva a intentarlo.</li></ul>"},{"question":"Verificar la compatibilidad del códec de video","answer":"Asegúrese de que el video grabado utilice el códec <b>H.264</b>, ya que BioStar Air no es compatible con <b>H.265</b>."},{"question":"Formatear la tarjeta SD si se cambió el códec","answer":"Si en algún momento se cambió el códec de video, las grabaciones existentes pueden no reproducirse correctamente. Podría ser necesario formatear la tarjeta SD para que la nueva configuración surta efecto. Esta solución ha demostrado resolver problemas de reproducción en algunos modelos de cámara."},{"question":"Consultar la lista de productos conformes de ONVIF","answer":"Si no está seguro de que su cámara cumpla con los estándares ONVIF, visite el <a href=\'https://www.onvif.org\' target=\'_blank\'>sitio web de ONVIF</a> para verificar la compatibilidad."}]')
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.mdx


const frontMatter = {
	id: 'video-troubleshooting',
	title: 'Solución de problemas de reproducción de video',
	description: 'Aprenda a solucionar problemas de reproducción de video en BioStar Air: verifique si se admite ONVIF Profile G, resuelva incompatibilidades de códecs y corrija problemas con el formato de la tarjeta SD.',
	keywords: [
		'Cámara IP',
		'Reproducción de video grabado',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {DocLink, FaqsItems} = _components;
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Siga estos pasos para diagnosticar y resolver el problema cuando el video grabado no se reproduce tras registrar una cámara en BioStar Air. Estos pasos solucionan problemas de reproducción de video y garantizan el correcto funcionamiento en BioStar Air."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre el registro de cámaras, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/ip-camera-support-and-configuration"
        }), "."]
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: video_troubleshotting_namespaceObject
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