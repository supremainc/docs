"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1218"], {
22935: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_auth_mdx_a22_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-auth-mdx-a22.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_auth_mdx_a22_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-auth","title":"Configuración De Autenticación","description":"Se proporcionan instrucciones para varios ajustes relacionados con la autenticación de usuarios en el dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-auth.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-auth","permalink":"/docs/es/platform/biostar_x/settings-device-details-auth","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-auth.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-auth","title":"Configuración De Autenticación","description":"Se proporcionan instrucciones para varios ajustes relacionados con la autenticación de usuarios en el dispositivo.","keywords":["Dispositivo","Autenticación"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración de red","permalink":"/docs/es/platform/biostar_x/settings-device-details-network"},"next":{"title":"Configuración avanzada","permalink":"/docs/es/platform/biostar_x/settings-device-details-advanced"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-auth.mdx


const frontMatter = {
	id: 'settings-device-details-auth',
	title: 'Configuración De Autenticación',
	description: 'Se proporcionan instrucciones para varios ajustes relacionados con la autenticación de usuarios en el dispositivo.',
	keywords: [
		'Dispositivo',
		'Autenticación'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configuración del método de autenticación",
  "id": "configuración-del-método-de-autenticación",
  "level": 2
}, {
  "value": "Agregar modo de autenticación",
  "id": "added-auth-mode",
  "level": 3
}, {
  "value": "Configuración de autenticación de huellas dactilares",
  "id": "configuración-de-autenticación-de-huellas-dactilares",
  "level": 2
}, {
  "value": "Ajustes de autenticación facial",
  "id": "ajustes-de-autenticación-facial",
  "level": 2
}, {
  "value": "Ajustes de QR/código de barras",
  "id": "ajustes-de-qrcódigo-de-barras",
  "level": 2
}, {
  "value": "Ajustes de autenticación con tarjeta",
  "id": "ajustes-de-autenticación-con-tarjeta",
  "level": 2
}, {
  "value": "Configuración de autenticación por PIN",
  "id": "configuración-de-autenticación-por-pin",
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
  }, {Cmd, Details, IcAdd, IcEdit, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Se proporcionan instrucciones para varios ajustes relacionados con la autenticación de usuarios en el dispositivo. La sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.authentication",
        product: "2"
      }), " ofrece información paso a paso sobre los métodos de autenticación y las principales opciones de autenticación compatibles con el dispositivo. Tenga en cuenta que los cambios en los ajustes se aplicarán al dispositivo real y configure la política de autenticación según su entorno, consultando las características y precauciones de cada opción."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las opciones de red disponibles pueden variar según el tipo de dispositivo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el usuario ha realizado cambios, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), ". Los cambios no se aplicarán al dispositivo si no se guardan."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-del-método-de-autenticación",
      children: "Configuración del método de autenticación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure el modo de autenticación del dispositivo, los permisos, la coincidencia con el servidor y el tiempo de espera de autenticación."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-auth-mode.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), ": Configure el modo de autenticación del dispositivo combinando una o más credenciales. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#added-auth-mode",
            children: "lo siguiente"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcEdit, {}), " para modificar el modo de autenticación agregado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " para eliminar el modo de autenticación agregado."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.usersHaveFullAccess",
            product: "2"
          }), ": A los usuarios registrados en el dispositivo se les pueden otorgar todos los permisos de acceso sin definir ajustes de grupo de acceso."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando esta opción está configurada en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), ", el dispositivo no se puede registrar en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.accessLevel",
              product: "2"
            }), " ni en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ag.floorLevel.title",
              product: "2"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authTimeout",
            product: "2"
          }), ": Es el tiempo de espera para autenticar la segunda credencial cuando se utilizan varias credenciales en la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), ". Si la credencial no se autentica dentro del tiempo especificado, la autenticación fallará."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.active",
                product: "2"
              }), ": Activa la coincidencia con el servidor. Configure la función de coincidencia con el servidor para autenticar con la información de usuario almacenada en el servidor donde está instalado ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.inactive",
                product: "2"
              }), ": Desactiva la coincidencia con el servidor. En este caso, la autenticación se realiza utilizando la información de usuario registrada en el dispositivo."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(Details, {
          children: [(0,jsx_runtime.jsxs)("summary", {
            children: ["Ver los dispositivos y versiones de firmware que admiten la función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.serverMatching",
              product: "2"
            })]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Versión de firmware de CoreStation 1.0.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Firmware de BioEntry P2 1.0.0 o posterior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Firmware de BioEntry W2 1.0.0 o posterior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Firmware de BioStation L2 1.0.0 o posterior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Firmware de BioStation A2 1.0.0 o posterior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Firmware de BioStation 2 1.2.0 o posterior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Firmware de BioLite N2 1.0.0 o posterior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Versión de firmware de XPass D2 1.0.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Firmware de XPass 2 1.0.0 o posterior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation 2 versión de firmware 1.4.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 versión de firmware 1.0.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 versión de firmware 1.0.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 firmware 1.0.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W3 versión de firmware 1.0.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceLite no admite la función de coincidencia con el servidor."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Los dispositivos FaceStation F2, BioStation 3 y BioEntry W3 no pueden usar la coincidencia con el servidor para la autenticación facial."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceDetection",
            product: "2"
          }), ": Establezca los pasos del algoritmo para reconocer rostros con la cámara integrada cuando el usuario se autentique."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.normal",
                product: "2"
              }), ": Detecta rostros a una distancia equivalente a la longitud del brazo de una persona."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.strict",
                product: "2"
              }), ": Requiere que el usuario esté más cerca que la longitud del brazo de una persona para detectar un rostro."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.none",
                product: "2"
              }), ": No utiliza la funcionalidad de reconocimiento facial."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta opción es compatible con BioStation A2."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.userIdDisplay",
            product: "2"
          }), ": Controle si se muestra u oculta la ID de usuario en el dispositivo cuando la autenticación es exitosa."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.displayAll",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.maskAllButFirstLetter",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.hideAll",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.userNameDisplay",
            product: "2"
          }), ": Controle si se muestra u oculta el nombre de usuario en el dispositivo cuando la autenticación es exitosa."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.displayAll",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.maskAllButFirstLetter",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.hideAll",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "added-auth-mode",
      children: "Agregar modo de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure el modo de autenticación del dispositivo en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.authenticationMode",
        product: "2"
      }), ". Configure el modo de autenticación combinando credenciales como huella digital, ID, tarjeta, PIN y rostro."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addNewAuthMode",
            product: "2"
          }), ", arrastre el modo de autenticación deseado al área central."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-edit-auth-mode-adding.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agregue hasta cinco modos de autenticación."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el elemento deseado en la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.schedule",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando finalices la configuración, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si el horario deseado no está disponible en la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule.schedule",
          product: "2"
        }), ", haga clic en ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule.addNewSchedule",
          product: "2"
        }), " para agregar un nuevo horario. Agregue un nuevo horario. Para obtener más información sobre la configuración de horarios, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-schedule",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-de-autenticación-de-huellas-dactilares",
      children: "Configuración de autenticación de huellas dactilares"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.fingerprint",
        product: "2"
      }), ", configure los detalles relacionados con la autenticación de huellas dactilares del dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-fingerprint.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.securityLevel",
            product: "2"
          }), ": Establezca el nivel de seguridad utilizado para autenticar huellas dactilares. Los niveles de seguridad más altos incrementan la ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#frr",
            children: "tasa de rechazo falso (FRR)"
          }), " pero disminuyen la ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#far",
            children: "tasa de aceptación falsa (FAR)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.scanTimeout",
            product: "2"
          }), ": Establezca el tiempo de espera para el escaneo de huellas dactilares. Si no se escanea dentro del tiempo establecido, la autenticación fallará."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.sensorSensitivity",
            product: "2"
          }), ": Establezca la sensibilidad del sensor de reconocimiento de huellas dactilares. Establece la sensibilidad más alta para obtener información de huella dactilar precisa."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.1NFastMode",
            product: "2"
          }), ": Establezca la velocidad de autenticación de huellas dactilares. Cuando se selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.auto",
            product: "2"
          }), ", se ajusta el rendimiento de la autenticación según el total de plantillas de huellas dactilares registradas en el dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.templateFormat",
            product: "2"
          }), ": Vea el formato de plantilla de huella dactilar configurado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.matchingTimeout",
            product: "2"
          }), ": Establezca el tiempo de espera para la comparación de huellas dactilares. Si la autenticación no se completa dentro del tiempo especificado, fallará."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.viewImage",
            product: "2"
          }), ": Muestre las imágenes de huellas dactilares en la pantalla durante la autenticación."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.sensorMode",
            product: "2"
          }), ": Establezca el modo de funcionamiento del sensor de huellas dactilares."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.sensorMode.autoOn",
                product: "2"
              }), ": El sensor de huellas dactilares se enciende al reconocer el dedo del usuario."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.sensorMode.alwaysOn",
                product: "2"
              }), ": El sensor de huellas dactilares permanece siempre encendido."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advancedEnrollment",
            product: "2"
          }), ": Evalúe la calidad de las huellas dactilares escaneadas para guardar información de alta calidad. Establézcalo en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), " para notificar al usuario si la calidad de la huella dactilar es baja y ayudar a escanearla correctamente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.fingerprintLFD",
            product: "2"
          }), ": Establezca el nivel para la detección de ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#fake_fp",
            children: "huellas dactilares falsas"
          }), ". Niveles más altos de detección de huellas falsas pueden aumentar las tasas de rechazo de las huellas reales."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.duplicateCheck",
            product: "2"
          }), ": Verifique registros duplicados al enrolar huellas dactilares."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las opciones disponibles para la configuración pueden variar según el tipo de dispositivo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cambiar la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateFormat",
              product: "2"
            }), " en los ajustes de autenticación por huella digital hará que todas las huellas almacenadas previamente queden inutilizables. Asegúrate de seleccionar una plantilla en la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateFormat",
              product: "2"
            }), " antes de enrolar las huellas de los usuarios."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.viewImage",
              product: "2"
            }), " es compatible con los modelos BioStation 2, BioStation A2, BioStation L2, BioLite N2, FaceStation F2 (FSF2-ODB) y X-Station 2 (XS2-ODPB, XS2-OAPB)."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.fingerprintLFD",
              product: "2"
            }), " es compatible con los modelos BioStation A2, BioStation L2, BioEntry W2, BioLite N2, FaceStation F2 (FSF2-ODB) y X-Station 2 (XS2-ODPB, XS2-OAPB)."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ajustes-de-autenticación-facial",
      children: "Ajustes de autenticación facial"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.credential.face",
        product: "2"
      }), ", puedes configurar los detalles relacionados con la autenticación facial del dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-face.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.securityLevel",
            product: "2"
          }), ": Define el nivel de seguridad utilizado para autenticar rostros. Los niveles de seguridad más altos incrementan la ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#frr",
            children: "tasa de rechazo falso (FRR)"
          }), " pero disminuyen la ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#far",
            children: "tasa de aceptación falsa (FAR)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "face.operationMode.enrollTime",
            product: "2"
          }), ": Si el rostro del usuario no se enrola dentro del tiempo establecido al registrarlo, el enrolamiento se cancelará."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.motionSensor",
            product: "2"
          }), ": Define la sensibilidad para detectar movimiento alrededor del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness",
            product: "2"
          }), ": El dispositivo puede detectar la luminosidad ambiental y ajustar la intensidad del LED IR."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceLFD",
            product: "2"
          }), ": Ajusta el nivel de detección de rostros falsos. Incrementar el nivel de detección de rostros falsos puede aumentar la tasa de rechazo de rostros reales."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.lightBrightness",
            product: "2"
          }), ": Ajusta manualmente el brillo de la luz del dispositivo. Define el brillo seleccionando ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness.normal",
            product: "2"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness.high",
            product: "2"
          }), ", o selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.lightBrightness.notUse",
            product: "2"
          }), " para apagar la luz."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceQuickEnrollment",
            product: "2"
          }), ": Define si se habilita el enrolamiento rápido de rostros."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.enable",
                product: "2"
              }), ": Configura el procedimiento de enrolamiento de rostros en un solo paso."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disabled",
                product: "2"
              }), ": Configura el procedimiento de enrolamiento de rostros en 3 pasos. Establece ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disabled",
                product: "2"
              }), " para enrolar plantillas de rostros de alta calidad."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.duplicateCheck",
            product: "2"
          }), ": Verifica registros duplicados al enrolar rostros."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceDetectSetting",
            product: "2"
          }), ": Configura los ajustes ambientales para reconocer el rostro del usuario durante la autenticación."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceMaxRotation",
                product: "2"
              }), ": Define el ángulo máximo de rotación permitido para el rostro."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceDetectDist",
                product: "2"
              }), ": Define las distancias mínima y máxima para reconocer el rostro."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceWideSearch",
                product: "2"
              }), ": Establece ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on",
                product: "2"
              }), " para permitir el reconocimiento facial en toda la vista de la cámara."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceOperationMode",
            product: "2"
          }), ": Define el modo de operación del dispositivo durante la autenticación facial."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.face.operation_mode.enable",
                product: "2"
              }), ": Realiza emparejamiento visual e infrarrojo para mejorar la precisión de la autenticación facial."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.face.operation_mode.disable",
                product: "2"
              }), ": Permite la autenticación rápida de usuarios que caminan dentro del rango de autenticación del dispositivo."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceFakeDetection",
            product: "2"
          }), ": Evita la autenticación de usuarios mediante rostros falsos, como fotografías. Se activa cuando la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceOperationMode",
            product: "2"
          }), " está configurada en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.face.operation_mode.enable",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las opciones disponibles para la configuración pueden variar según el tipo de dispositivo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Las opciones ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.ambientBrightness",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceLFD",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceQuickEnrollment",
              product: "2"
            }), " son compatibles con los modelos FaceStation 2 y FaceLite."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.lightBrightness",
              product: "2"
            }), " es compatible con firmware FaceStation F2 versión 1.1.0 o superior."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Las opciones ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceDetectSetting",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceOperationMode",
              product: "2"
            }), " son compatibles con los modelos FaceStation F2 y BioStation 3."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ajustes-de-qrcódigo-de-barras",
      children: "Ajustes de QR/código de barras"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.credential.barcode",
        product: "2"
      }), ", puedes configurar los detalles para la autenticación mediante QR/código de barras en el dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-qrbarcode.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useVisualBarcode",
            product: "2"
          }), ": Define si se utiliza la autenticación QR/código de barras a través de la cámara del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.qrCameraTimeout",
            product: "2"
          }), ": Define el tiempo de espera de escaneo de la cámara. Si un QR/barcode no se escanea dentro del tiempo especificado, la autenticación fallará."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.normalize",
            product: "2"
          }), ": Configura la autenticación de códigos QR con los mismos datos que las tarjetas CSN o Wiegand emitidas a los usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.motionSensor",
            product: "2"
          }), ": Define la sensibilidad para detectar movimiento e iniciar el escaneo de la cámara."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useBarcodeScanner",
            product: "2"
          }), ": Define si se utiliza el escáner del dispositivo para la autenticación QR/código de barras."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.qrScanTimeout",
            product: "2"
          }), ": Define el tiempo de espera de escaneo. Si un QR/barcode no se escanea dentro del tiempo especificado, la autenticación fallará."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVisualBarcode",
              product: "2"
            }), " requiere una licencia de dispositivo independiente. Para más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-license-device-license",
              children: "el siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los dispositivos que admiten las opciones ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVisualBarcode",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.qrCameraTimeout",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.normalize",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.motionSensor",
              product: "2"
            }), " son los siguientes."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 (XS2-ODPB, XS2-OAPB, XS2-DPB, XS2-APB) versión de firmware 1.2.0 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 (BS3-DB, BS3-APWB) versión de firmware 1.1.0 o superior"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los dispositivos que admiten las opciones ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useBarcodeScanner",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.qrScanTimeout",
              product: "2"
            }), " son los siguientes."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "X-Station 2 (XS2-QDPB, XS2-QAPB)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ajustes-de-autenticación-con-tarjeta",
      children: "Ajustes de autenticación con tarjeta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardType",
        product: "2"
      }), ", puedes definir los tipos de tarjetas que se usarán en el dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Solo se mostrarán en el grupo ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.cardType",
          product: "2"
        }), " los tipos de tarjeta compatibles con el dispositivo."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.CSN",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puedes seleccionar los tipos y formatos de tarjetas CSN y definir el orden de bytes."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-csn.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.byteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de byte grandes a pequeñas, almacenando secuencialmente el número de serie de la tarjeta (CSN) de izquierda a derecha."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de byte pequeñas a grandes, almacenando el número de serie de la tarjeta (CSN)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.formatType",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.general",
                product: "2"
              }), ": Lee y muestra el número de serie (CSN) de la tarjeta sin conversión adicional."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.wiegand",
                product: "2"
              }), ": Transforma y muestra el número de serie (CSN) de la tarjeta según el formato Wiegand definido por el usuario. Para obtener información sobre cómo configurar un nuevo formato Wiegand, consulta ", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-credential-wiegand-format",
                children: "lo siguiente"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.Wiegand",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Selecciona los tipos de tarjetas Wiegand y define los formatos Wiegand. Elija el formato Wiegand que se utilizará en la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.cardFormat.wiegand.format",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-wiegand.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener información sobre cómo configurar un nuevo formato Wiegand, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-credential-wiegand-format",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.supremaSmartCard",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seleccione los tipos de tarjetas inteligentes Suprema y configure la estructura y el orden de bytes de la tarjeta."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-smart.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.batch.supremaSmartCardLayout",
            product: "2"
          }), ": Elija la estructura de tarjeta inteligente Suprema. Para obtener información sobre cómo configurar un nuevo diseño de tarjeta inteligente, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-credential-smart-format",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.supremaSmartCardByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de bytes grandes a pequeñas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de bytes pequeñas a grandes."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-3",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.customSmartCard",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seleccione los tipos de tarjetas inteligentes personalizadas emitidas por terceros y configure la estructura y el orden de bytes de la tarjeta."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-custom.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.batch.customSmartCardLayout",
            product: "2"
          }), ": Elija la estructura de tarjeta inteligente personalizada. Para obtener información sobre cómo configurar un nuevo diseño de tarjeta inteligente, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-credential-smart-format",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.customSmartCardByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de bytes grandes a pequeñas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de bytes pequeñas a grandes."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "Ver dispositivos y versiones de firmware que admiten tarjetas inteligentes personalizadas"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass D2 versión de firmware 1.7.1 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry P2 versión de firmware 1.5.1 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W2 versión de firmware 1.8.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2a versión de firmware 1.1.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 versión de firmware 1.3.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 versión de firmware 1.3.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 versión de firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 versión de firmware 1.6.2 o superior"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-4",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.csnMobile",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure el método para reconocer tarjetas móviles."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-csn-mobile.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "NFC"
          }), ": Reconoce tarjetas móviles mediante comunicación NFC desde dispositivos móviles."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BLE"
          }), ": Reconoce tarjetas móviles mediante comunicación Bluetooth Low Energy (BLE)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-5",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.templateOnMobile",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Especifique cómo funciona el reconocimiento en Template on Mobile y configure el orden de bytes para los biométricos enrolados directamente por el usuario en el dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-card-tom.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.TomOutputByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de bytes grandes a pequeñas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de bytes pequeñas a grandes."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "Ver dispositivos y versiones de firmware que admiten plantillas en el móvil"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 versión de firmware 1.2.0 o superior"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 versión de firmware 1.0.0 o superior"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuración-de-autenticación-por-pin",
      children: "Configuración de autenticación por PIN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.pin",
        product: "2"
      }), ", active o desactive la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.scrambleKeypad",
        product: "2"
      }), " para la autenticación por PIN del dispositivo."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-detail-pin.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.scrambleKeypad",
          product: "2"
        }), " solo está disponible en los productos Suprema que admiten interfaces de usuario a través de la pantalla LCD."]
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