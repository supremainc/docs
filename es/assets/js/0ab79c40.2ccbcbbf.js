"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["55648"], {
15653: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biolite_n_2_authentication_mdx_0ab_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-biolite-n-2-authentication-mdx-0ab.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biolite_n_2_authentication_mdx_0ab_namespaceObject = JSON.parse('{"id":"device/biolite_n2/authentication","title":"Autenticación","description":"Describe los métodos de autenticación compatibles y los procedimientos de autenticación.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/biolite_n2/authentication.mdx","sourceDirName":"device/biolite_n2","slug":"/device/biolite_n2/authentication","permalink":"/docs/es/device/biolite_n2/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biolite_n2/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"Autenticación","description":"Describe los métodos de autenticación compatibles y los procedimientos de autenticación.","keywords":["Modo de autenticación","Operación","PIN","Rostro","T&A (Tiempo y Asistencia)"],"isTranslationMissing":false},"sidebar":"bioliten2","previous":{"title":"Usuario","permalink":"/docs/es/device/biolite_n2/user"},"next":{"title":"Ajustes","permalink":"/docs/es/device/biolite_n2/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/biolite_n2/authentication.mdx


const frontMatter = {
	id: 'authentication',
	title: 'Autenticación',
	description: 'Describe los métodos de autenticación compatibles y los procedimientos de autenticación.',
	keywords: [
		'Modo de autenticación',
		'Operación',
		'PIN',
		'Rostro',
		'T&A (Tiempo y Asistencia)'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Modo de autenticación",
  "id": "modo-de-autenticación",
  "level": 2
}, {
  "value": "Modo de autenticación por huella",
  "id": "modo-de-autenticación-por-huella",
  "level": 3
}, {
  "value": "Modo de autenticación por tarjeta",
  "id": "modo-de-autenticación-por-tarjeta",
  "level": 3
}, {
  "value": "Modo de autenticación por ID",
  "id": "modo-de-autenticación-por-id",
  "level": 3
}, {
  "value": "Modo de asistencia",
  "id": "modo-de-asistencia",
  "level": 2
}, {
  "value": "Ajustes de huella",
  "id": "ajustes-de-huella",
  "level": 2
}, {
  "value": "Coincidencia en el servidor",
  "id": "coincidencia-en-el-servidor",
  "level": 2
}, {
  "value": "Opciones de visualización del resultado de autenticación",
  "id": "opciones-de-visualización-del-resultado-de-autenticación",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describe los métodos de autenticación compatibles y los procedimientos de autenticación."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modo-de-autenticación",
      children: "Modo de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configura el modo de autenticación. Combina ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_312",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_040",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_322",
        product: "dev"
      }), " y ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_020",
        product: "dev"
      }), " para el modo de autenticación y establece horarios para cada modo de autenticación."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modo-de-autenticación-por-huella",
      children: "Modo de autenticación por huella"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define horarios para cada método de autenticación que use huellas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_313",
            product: "dev"
          }), ", pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el elemento deseado y pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " para configurar el horario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth-authmode.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo utiliza solo huellas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo autentica con una huella y luego con la introducción de un PIN."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configura ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " en BioStar X. Sin horarios definidos, solo se pueden seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_162",
              product: "dev"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_361",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), ", consulta la ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-schedule",
              children: "Guía del administrador de BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modo-de-autenticación-por-tarjeta",
      children: "Modo de autenticación por tarjeta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define horarios para cada método de autenticación que use tarjetas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_324",
            product: "dev"
          }), ", pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el elemento deseado y pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " para configurar el horario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo utiliza solo tarjetas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo autentica con una tarjeta seguida de autenticación por huella."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo utiliza una tarjeta para autenticarse y luego ingresa un PIN."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " / ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo autentica con una tarjeta seguida de huella o ingreso de PIN."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo utiliza una tarjeta seguida tanto de autenticación por huella como de ingreso de PIN."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configura ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " en BioStar X. Sin horarios definidos, solo se pueden seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_162",
              product: "dev"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_361",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), ", consulta la ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-schedule",
              children: "Guía del administrador de BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modo-de-autenticación-por-id",
      children: "Modo de autenticación por ID"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define horarios para cada método de autenticación que use ID."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_021",
            product: "dev"
          }), ", pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el elemento deseado y pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " para configurar el horario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth1.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo autentica con un ID seguido de huella."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo utiliza un ID seguido del ingreso de un PIN."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " / ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo utiliza un ID seguido de autenticación por huella o ingreso de PIN."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), ": Este modo utiliza un ID seguido tanto de autenticación por huella como de ingreso de PIN."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configura ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " en BioStar X. Sin horarios definidos, solo se pueden seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_162",
              product: "dev"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_361",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), ", consulta la ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-schedule",
              children: "Guía del administrador de BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modo-de-asistencia",
      children: "Modo de asistencia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura cómo registrar el modo T&A."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_083_title",
            product: "dev"
          }), " y luego pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el elemento deseado y pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " para configurar el horario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_084",
                product: "dev"
              }), ": Permite revisar los eventos de asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), ": Configura cómo usar el modo de asistencia."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_082",
                product: "dev"
              }), ": Exige a los usuarios seleccionar un evento de asistencia durante la autenticación. Al configurar ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_372",
                product: "dev"
              }), ", se exige seleccionar un evento de tiempo y asistencia durante la autenticación."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_080",
                product: "dev"
              }), ": Configura el uso únicamente de eventos de tiempo y asistencia seleccionados por un administrador. Disponible cuando ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), " está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_071",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_279",
                product: "dev"
              }), ": Selecciona si usar códigos de trabajo."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Configura ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_279",
          product: "dev"
        }), " en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_372",
          product: "dev"
        }), " para cambiar el código de acción del usuario. Mantén presionado ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        }), " y luego autentícate para seleccionar el código de trabajo deseado."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ajustes-de-huella",
      children: "Ajustes de huella"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambia los ajustes de autenticación por huella digital."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_312",
            product: "dev"
          }), ", pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el elemento deseado y pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " para configurar el horario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth3.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), ": Configura el nivel de seguridad para la autenticación 1", ":N", "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_130",
                product: "dev"
              }), ": Establece el tiempo de espera para la coincidencia de huellas dactilares. Si la autenticación no se completa dentro del tiempo establecido, falla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_254",
                product: "dev"
              }), ": Muestra la imagen sin procesar al escanear una huella dactilar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_197",
                product: "dev"
              }), ": Establece la sensibilidad del sensor de huellas dactilares. Establece la sensibilidad más alta para obtener información de huella dactilar precisa."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_249",
                product: "dev"
              }), ": Establece el nivel de detección de huellas dactilares falsas. Niveles más altos de detección de huellas falsas pueden aumentar las tasas de rechazo de las huellas reales."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_003",
                product: "dev"
              }), ": Establece el rendimiento de autenticación por huella dactilar. Al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_275",
                product: "dev"
              }), ", la velocidad de autenticación se ajusta según el número total de plantillas de huellas dactilares registradas en el dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_342",
                product: "dev"
              }), ": Establece el formato de la plantilla de huella dactilar. El valor predeterminado es ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_057",
                product: "dev"
              }), ". Cambiar el formato de la plantilla bloquea el uso de todas las huellas dactilares almacenadas previamente, así que procede con precaución."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "Elimina toda la información de huellas dactilares de los usuarios y luego cambia el formato de la plantilla. Si hay información de huellas dactilares registrada, no es posible cambiar el formato de la plantilla."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_198",
                product: "dev"
              }), ": Establece en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_277",
                product: "dev"
              }), " para encender el sensor de huellas dactilares cuando detecta el dedo del usuario. Establece en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_362",
                product: "dev"
              }), " para mantener el sensor siempre encendido, incluso cuando no se escanean huellas dactilares."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_116",
                product: "dev"
              }), ": Inspecciona la calidad de la huella escaneada para guardar datos de alta calidad. Cuando está activado, el dispositivo notifica al usuario si la calidad de la huella es baja y le ayuda a escanear correctamente."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_118",
                product: "dev"
              }), ": Verifica huellas dactilares duplicadas durante el enrolamiento."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "coincidencia-en-el-servidor",
      children: "Coincidencia en el servidor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura la coincidencia con el servidor. Cuando se utiliza la coincidencia con el servidor, la autenticación se realiza en BioStar X sin autenticación en el dispositivo. Se puede usar cuando el dispositivo tiene demasiada información de usuarios o cuando el dispositivo está instalado en exteriores."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_185",
            product: "dev"
          }), ", pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth4.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " para cambiar los ajustes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_185",
              product: "dev"
            }), " solo puede usar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_312",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_322",
              product: "dev"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_020",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si utilizas ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_185",
              product: "dev"
            }), ", debes habilitar la coincidencia en el servidor tanto en el dispositivo como en BioStar X. Para obtener más información sobre la configuración de coincidencia en el servidor de BioStar X, consulta la ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../platform/biostar_x/settings-server-server#servermatching",
              children: "Guía del administrador de BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "opciones-de-visualización-del-resultado-de-autenticación",
      children: "Opciones de visualización del resultado de autenticación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura la opción de visualización del resultado de autenticación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), ", pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el elemento deseado y pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " para cambiar los ajustes."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth5.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_169",
                product: "dev"
              }), ": Selecciona cómo aparece el ID de usuario en la pantalla de resultados de autenticación del dispositivo."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_138",
                    product: "dev"
                  }), ": Muestra todos los ID de usuario."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_316",
                    product: "dev"
                  }), ": Mostrar solo el primer carácter del ID de usuario."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_357",
                    product: "dev"
                  }), ": No mostrar el ID de usuario."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_177",
                product: "dev"
              }), ": Seleccionar cómo aparece el nombre de usuario en la pantalla de resultados de autenticación del dispositivo."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_138",
                    product: "dev"
                  }), ": Muestra todos los nombres de usuario."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_316",
                    product: "dev"
                  }), ": Mostrar solo el primer carácter del nombre de usuario."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_357",
                    product: "dev"
                  }), ": No mostrar el nombre de usuario."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
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