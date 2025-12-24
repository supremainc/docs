"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["45496"], {
53930: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.administrator",
            product: "2"
          }), ": Este es un nivel de administrador que puede usar todos los menús."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.userOperator",
            product: "2"
          }), ": El menú ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " tiene permisos de ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "lectura"
          }), " y ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "escritura"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.monitoringOperator",
            product: "2"
          }), ": Los menús ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " y ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), " tienen permisos de ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "lectura"
          }), " y ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "escritura"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.taOperator",
            product: "2"
          }), ": El menú ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.gnb.time_attendance",
            product: "2"
          }), " tiene permisos de ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "lectura"
          }), " y ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "escritura"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.visitorOperator",
            product: "2"
          }), ": El menú ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.gnb.visitor",
            product: "2"
          }), " tiene permisos de ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "lectura"
          }), " y ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "escritura"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        pages: "set-permission",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["Seleccione ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "common.selectNone"
            }), " si no desea establecer un nivel de administrador. En este caso, el usuario no puede iniciar sesión en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Consulte ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "settings-adding-custom-account",
              children: "lo siguiente"
            }), " para agregar nuevos permisos de usuario distintos de los predefinidos."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Los permisos de las cuentas predeterminadas no se pueden modificar ni eliminar."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Niveles como ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "setting.account.taOperator",
              product: "2"
            }), " y ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "setting.account.visitorOperator",
              product: "2"
            }), " requieren licencias por separado. Para más información sobre la política de licencias, consulta ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
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
37952: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Nuevo usuario"
        }), ": Haz clic en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
          sid: "team.user.dialog.newUser"
        }), " en la esquina superior derecha de la pantalla. Aparece la ventana ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
          sid: "team.user.dialog.newUser"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Usuario existente"
        }), ": Haz doble clic en un usuario de la lista de usuarios. O haz clic en el usuario y luego haz clic en ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
          sid: "team.user.preview.button.seeMore"
        }), " en la pantalla de vista previa que aparece en el lado derecho de la pantalla. Aparece una ventana para editar la información del usuario."]
      }), "\n"]
    }), "\n"]
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
48748: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_set_permission_mdx_d82_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-set-permission-mdx-d82.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_set_permission_mdx_d82_namespaceObject = JSON.parse('{"id":"platform/biostar_x/set-permission","title":"Configurar permisos de usuario","description":"Esta guía explica cómo establecer los privilegios de administrador y los permisos de acceso para los usuarios de **BioStar X**.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/set-permission.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/set-permission","permalink":"/docs/es/platform/biostar_x/set-permission","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/set-permission.mdx","tags":[],"version":"current","frontMatter":{"id":"set-permission","title":"Configurar permisos de usuario","description":"Esta guía explica cómo establecer los privilegios de administrador y los permisos de acceso para los usuarios de **BioStar X**.","keywords":["Usuario","Permisos"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Registrar PIN","permalink":"/docs/es/platform/biostar_x/enroll-credential-pin"},"next":{"title":"Configura Los Ajustes Avanzados Del Usuario","permalink":"/docs/es/platform/biostar_x/set-user-advanced"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_enter-user-page.mdx
var _enter_user_page = __webpack_require__(37952);
// EXTERNAL MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_account-list.mdx
var _account_list = __webpack_require__(53930);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/set-permission.mdx


const frontMatter = {
	id: 'set-permission',
	title: 'Configurar permisos de usuario',
	description: 'Esta guía explica cómo establecer los privilegios de administrador y los permisos de acceso para los usuarios de **BioStar X**.',
	keywords: [
		'Usuario',
		'Permisos'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [..._enter_user_page/* .toc */.RM, {
  "value": "Seleccione nivel de administrador",
  "id": "operatorLevel",
  "level": 2
}, ..._account_list/* .toc */.RM, {
  "value": "Configurar ID de inicio de sesión y contraseña",
  "id": "configurar-id-de-inicio-de-sesión-y-contraseña",
  "level": 3
}, {
  "value": "Cambiar la contraseña del usuario de inicio de sesión",
  "id": "changeLoginUserPassword",
  "level": 3
}, {
  "value": "Configuración de autenticación de múltiples factores",
  "id": "multiFactorAuth",
  "level": 2
}, {
  "value": "Configuración de inicio de sesión con dirección IP del usuario",
  "id": "userIp",
  "level": 2
}, {
  "value": "Seleccione grupo de acceso",
  "id": "accessGroup",
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
  }, {Cmd, IcAccount, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAccount) _missingMdxReference("IcAccount", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["De acuerdo con la política de seguridad de la organización, puede diferenciar los privilegios operativos específicos del usuario y los permisos de acceso para ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Restrinja el acceso a los menús principales mediante niveles de administrador y controle el acceso a los espacios físicos mediante grupos de acceso. También puede mejorar la seguridad mediante restricciones de dirección IP y autenticación multifactor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ve a la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " y establece permisos de acceso con los dos métodos siguientes."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_enter_user_page/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), ", se pueden configurar los siguientes elementos. Consulte las descripciones de cada elemento para configurar los permisos de usuario adecuados."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-permission.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operatorLevel",
      children: "Seleccione nivel de administrador"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los menús accesibles se limitarán según el nivel de administrador seleccionado. Seleccione el nivel de administrador del usuario en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), ", bajo el elemento ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.bioStarOperator",
        product: "2"
      }), ". Consulte la siguiente lista para conocer los niveles de administrador que se pueden asignar a los usuarios."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_account_list/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-id-de-inicio-de-sesión-y-contraseña",
      children: "Configurar ID de inicio de sesión y contraseña"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si seleccionó un nivel de administrador, debe establecer el ID y la contraseña que se utilizarán cuando el usuario inicie sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-permission-set-login.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Precauciones al establecer ID y contraseña"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Establezca el ID como una combinación de letras y números de entre 8 y 32 caracteres."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración de la política de contraseñas, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-security#password-policy-configuration",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Evite usar contraseñas vulnerables en términos de seguridad."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Caracteres o números consecutivos (por ejemplo, abcd, 1234)"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Palabras o patrones comunes (por ejemplo, qwerty, password)"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "changeLoginUserPassword",
      children: "Cambiar la contraseña del usuario de inicio de sesión"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cambia tu contraseña después de iniciar sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicia sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAccount, {
            width: "26",
            height: "26"
          }), " en la esquina superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-account-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auth.passwordChange.title"
          }), " en el menú desplegable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auth.passwordChange.title"
          }), ", ingresa la contraseña actual y una nueva."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-change-pw.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de ingresar todos los campos, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.change"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multiFactorAuth",
      children: "Configuración de autenticación de múltiples factores"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al habilitar ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.fingerprintLogin",
        product: "2"
      }), ", los usuarios podrán iniciar sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " con autenticación de huella digital adicional."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la configuración de autenticación multifactor, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "login-with-mfa",
          children: "este documento"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userIp",
      children: "Configuración de inicio de sesión con dirección IP del usuario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si registra una dirección IP de usuario, solo podrá iniciar sesión en el PC cuando la información de IP coincida con la registrada en su cuenta. Esto mejora la seguridad. Ingrese la dirección IP del usuario en el campo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.userIp"
      }), " de la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las direcciones IP pueden introducirse en el formato xxx.xxx.xxx.xxx, y cada octeto debe contener un número en el rango de 0–255."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si la dirección IP no está registrada, se permitirá el inicio de sesión en el PC independientemente de la información de IP."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessGroup",
      children: "Seleccione grupo de acceso"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure el grupo de acceso del usuario para restringir el acceso por organización o departamento. En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), ", seleccione el grupo de acceso desde ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.accessGroup"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre cómo agregar y administrar grupos de acceso, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-access-control-manage-access-group",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "set-user-advanced",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced",
            product: "2"
          }), ", configure el mensaje que se mostrará en el dispositivo cuando el usuario acceda o excluya a ese usuario de la sincronización al vincular con ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2",
            className: "normal"
          }), "."]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "edit-user",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Consulte cómo editar la información del usuario."
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