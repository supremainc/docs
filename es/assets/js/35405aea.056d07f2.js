"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["89948"], {
63600: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    a: "a",
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Inicie sesión con la cuenta de administrador de ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " en la página ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.menu.license.root"
          }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.menu.license.biostarXLicense"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Ingrese ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.xlicense.activation",
            product: "2"
          }), " en secuencia con ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.xlicense.activatedBy",
            product: "2"
          }), " y ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.xlicense.activationKey",
            product: "2"
          }), "."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, {
          src: "/img/biostarx-tutorial-license-online.png"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.server.license.button.activate",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Verifique las licencias registradas en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
        sid: "setting.xlicense.myLicense",
        product: "2"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Consulte ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "settings-license-biostar-x-license#registering-offline",
          children: "lo siguiente"
        }), " para activar su licencia en un entorno de red cerrado o en un estado sin conexión con acceso limitado a Internet."]
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
94091: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_mdx_354_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-mdx-354.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_mdx_354_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna","title":"Cómo usar tiempo y asistencia","description":"Configure las reglas de gestión de asistencia y consulte el historial de trabajo registrado a través del dispositivo o expórtelo como informe.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna","permalink":"/docs/es/platform/biostar_x/tna","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna.mdx","tags":[],"version":"current","frontMatter":{"id":"tna","title":"Cómo usar tiempo y asistencia","description":"Configure las reglas de gestión de asistencia y consulte el historial de trabajo registrado a través del dispositivo o expórtelo como informe.","keywords":["C&P","Registros de acceso","Informes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Plugin","permalink":"/docs/es/platform/biostar_x/plugins"},"next":{"title":"Configurar turno","permalink":"/docs/es/platform/biostar_x/tna-rule-setting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_bsx-license-apply.mdx
var _bsx_license_apply = __webpack_require__(63600);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna.mdx


const frontMatter = {
	id: 'tna',
	title: 'Cómo usar tiempo y asistencia',
	description: 'Configure las reglas de gestión de asistencia y consulte el historial de trabajo registrado a través del dispositivo o expórtelo como informe.',
	keywords: [
		'C&P',
		'Registros de acceso',
		'Informes'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Antes de comenzar",
  "id": "antes-de-comenzar",
  "level": 2
}, {
  "value": "Aplicar licencia",
  "id": "aplicar-licencia",
  "level": 3
}, ..._bsx_license_apply/* .toc */.RM, {
  "value": "Instalar complemento",
  "id": "instalar-complemento",
  "level": 3
}, {
  "value": "Menú <Cmd class=\"bold\"></Cmd>",
  "id": "menú-",
  "level": 2
}, {
  "value": "Inicio de sesión de <Cmd class=\"bold\"></Cmd>",
  "id": "inicio-de-sesión-de-",
  "level": 2
}, {
  "value": "Configuración inicial",
  "id": "configuración-inicial",
  "level": 2
}, {
  "value": "Configurar modo de asistencia",
  "id": "configurar-modo-de-asistencia",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure las reglas de gestión de asistencia y consulte el historial de trabajo registrado a través del dispositivo o expórtelo como informe. La función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "normal"
      }), " se ofrece como complemento y requiere una licencia independiente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.tna",
          className: "normal"
        }), " se puede usar con opciones adicionales en licencias ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "advanced"
        }), " (Advanced) o superiores. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para usar la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "normal"
      }), ", aplique la licencia y descargue el archivo de instalación independiente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aplicar-licencia",
      children: "Aplicar licencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instrucciones para aplicar la licencia de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "normal"
      }), ". Después de adquirir la licencia ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "normal"
      }), " a través de un proveedor de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", siga las instrucciones para aplicarla."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_bsx_license_apply/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "instalar-complemento",
      children: "Instalar complemento"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para usar la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "normal"
      }), ", se debe descargar e instalar un archivo de instalación independiente. Siga las instrucciones para instalar el complemento."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Acceda al ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://download.supremainc.com/",
            children: "Suprema Download Center"
          }), " y descargue el archivo de instalación del complemento ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna",
            className: "normal"
          }), " (", (0,jsx_runtime.jsx)(_components.em, {
            children: "BioStar X TA.X.Y.Z.BB.exe"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecute el archivo de instalación y complete la instalación siguiendo las instrucciones."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecute el archivo de instalación descargado."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el idioma a usar y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.ok",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-select-language.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para continuar con la instalación, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.agree",
            className: "bold"
          }), " y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-install-agree.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese la contraseña de la cuenta root de la base de datos y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-install-input-db-pw.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Lea la información sobre la gestión y la responsabilidad de los datos personales almacenados en la base de datos y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " para continuar con la instalación."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-install-read-covenant.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el puerto para la comunicación con ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-install-set-port.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Puede usar el número de puerto predeterminado (3002) o cambiarlo por otro. Si cambia el número de puerto, asegúrese de que el puerto correspondiente esté abierto en el firewall."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione los componentes de instalación y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-install-additional.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando se completen todas las preparaciones para la instalación, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.btnInstall",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-install-complete.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["En el nombre del archivo descargado, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X.Y.Z"
            }), " es la información de la versión y ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BB"
            }), " es el número de compilación."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Use la contraseña de la cuenta root de la base de datos que se usó al instalar ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "menú-",
      children: ["Menú ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "bold"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Una vez completada la instalación del complemento y la licencia ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "normal"
      }), ", la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " incluirá el menú ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-main.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en el ícono ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna"
      }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna"
      }), " en la lista de accesos directos en la esquina superior izquierda de la pantalla."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "inicio-de-sesión-de-",
      children: ["Inicio de sesión de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "bold"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Aparecerá una pantalla de inicio de sesión independiente la primera vez que ingrese a la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "normal"
      }), ". Inicie sesión con la cuenta de administrador de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Cuando inicie sesión en la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "normal"
      }), " con la cuenta de administrador, podrá usar la función ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.tna",
        className: "normal"
      }), " posteriormente sin un proceso de inicio de sesión separado."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-login.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-inicial",
      children: "Configuración inicial"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La primera vez que inicie sesión en la función ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna",
            className: "normal"
          }), ", debe agregar un dispositivo para la gestión de asistencia como parte de la configuración inicial. Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " en la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-initial-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione un dispositivo para la gestión de asistencia en la lista de dispositivos."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-initial-setting-register-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón activado ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.register",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-initial-setting-select-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si el dispositivo seleccionado aparece en la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.registerDevices",
            product: "2"
          }), ", haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.setting",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-initial-setting-selected-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.setting",
            product: "2"
          }), ", complete la configuración básica de gestión de asistencia."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-modo-de-asistencia",
      children: "Configurar modo de asistencia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Continúe con la configuración del modo de asistencia y de los eventos de asistencia."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-initial-setting-device-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.mode",
            product: "2"
          }), ": Elija cómo registrar los eventos de asistencia."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.byUser",
                product: "2"
              }), ": Los usuarios pueden seleccionar eventos de asistencia durante la autenticación."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), ": Los eventos de asistencia cambian automáticamente según un horario establecido. Seleccione un horario para aplicar a los eventos de asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.lastChoice",
                product: "2"
              }), ": El último evento de asistencia utilizado puede seguir usándose."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.fixed",
                product: "2"
              }), ": Solo se puede usar el evento de asistencia seleccionado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.unused",
                product: "2"
              }), ": No registra eventos de asistencia."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaRequired",
            product: "2"
          }), ": Puede configurarlo para requerir el registro de eventos de asistencia durante la autenticación. Se puede usar cuando ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.mode",
            product: "2"
          }), " está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.tna.mode.byUser",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaEvent",
            product: "2"
          }), ": Puede modificar el nombre de los eventos de asistencia o agregar horarios cuando configure ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.mode",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.tna.mode.bySchedule",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.eventKey",
                product: "2"
              }), ": Lista de claves que se pueden usar para registrar asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.label",
                product: "2"
              }), ": Puede cambiar el nombre de los eventos de asistencia según la tecla de asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.schedule",
                product: "2"
              }), ": Si configura ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.mode",
                product: "2"
              }), " en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), ", puede establecer automáticamente el horario para que cambie. Para obtener más información sobre la configuración de horarios, consulta ", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-schedule",
                children: "lo siguiente"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los dispositivos que no son compatibles con pantallas LCD pueden configurar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.mode",
              product: "2"
            }), " en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.bySchedule",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.fixed",
              product: "2"
            }), ". Puede registrar eventos de asistencia fijos o cambiar eventos de asistencia según configuraciones programadas previamente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los modelos de dispositivo que admiten los modos ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.bySchedule",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.fixed",
              product: "2"
            }), " incluyen BioEntry P2, BioEntry W2, BioEntry Plus, BioEntry W, XPass, XPass S2, XPass D2, XPass 2."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre el menú ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.setting",
              product: "2"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-settings",
              children: "the following"
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