"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1507"], {
56559: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_manage_mdx_334_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-visitor-register-manage-mdx-334.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_manage_mdx_334_namespaceObject = JSON.parse('{"id":"platform/biostar_x/visitor-register-manage","title":"Administrar visitantes","description":"Apruebe, modifique, agregue o elimine solicitudes de visitantes.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/visitor-register-manage","permalink":"/docs/es/platform/biostar_x/visitor-register-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/visitor-register-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"visitor-register-manage","title":"Administrar visitantes","description":"Apruebe, modifique, agregue o elimine solicitudes de visitantes.","keywords":["Solicitud de visita","Gestionar"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Solicitar visita","permalink":"/docs/es/platform/biostar_x/visitor-register"},"next":{"title":"Administrar visitantes en check-in","permalink":"/docs/es/platform/biostar_x/visitor-register-checkin-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register-manage.mdx


const frontMatter = {
	id: 'visitor-register-manage',
	title: 'Administrar visitantes',
	description: 'Apruebe, modifique, agregue o elimine solicitudes de visitantes.',
	keywords: [
		'Solicitud de visita',
		'Gestionar'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Aprobación de visitantes",
  "id": "aprobación-de-visitantes",
  "level": 2
}, {
  "value": "Aprobar y enrolar tarjeta",
  "id": "approve-and-register-card",
  "level": 3
}, {
  "value": "Búsqueda de huella digital para aprobación de visitantes",
  "id": "búsqueda-de-huella-digital-para-aprobación-de-visitantes",
  "level": 2
}, {
  "value": "Agregar visitante",
  "id": "agregar-visitante",
  "level": 2
}, {
  "value": "Eliminar visitante",
  "id": "eliminar-visitante",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Apruebe o modifique solicitudes de visitantes. Los administradores también pueden agregar o eliminar visitantes directamente."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aprobación-de-visitantes",
      children: "Aprobación de visitantes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía muestra cómo revisar las solicitudes de visitantes y aprobar su acceso."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en el visitante que desea aprobar en la lista de visitantes."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de revisar la información del visitante, corrija los elementos necesarios y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.edit",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.status.checkIn",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Revise el contenido de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), " y, para aprobar la visita, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.checkin",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el solicitante no ha aceptado los términos de acceso para visitantes, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.checkin",
              product: "2"
            }), " estará deshabilitado. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.term.watch",
              product: "2"
            }), " para mostrar los términos de acceso al visitante y obtener su consentimiento. Si el visitante no acepta los términos de acceso, la visita se restringirá."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/visitor-register-manage-view-term.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si en la PC del visitante hay un dispositivo de registro de tarjetas configurado, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.button.approveAndRegisterCard",
              product: "2"
            }), " se activará. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.button.approveAndRegisterCard",
              product: "2"
            }), " para aprobar al visitante y emitir una tarjeta de acceso. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#approve-and-register-card",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configure el uso de tarjetas en la PC del visitante desde ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.visitor"
            }), " y asegúrese de aplicar los siguientes ajustes mínimos. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor",
              children: "lo siguiente"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-visitor-settings-use-card.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.site",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.setting",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.card",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.use",
                  product: "2"
                }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.cardType",
                  product: "2"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.pc.management",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.pc.setting",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.card",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.server.enrollment_device.device_name",
                  product: "2"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "approve-and-register-card",
      children: "Aprobar y enrolar tarjeta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía muestra cómo aprobar solicitudes de visitantes y emitir tarjetas de acceso."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.approveAndRegisterCard",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando aparezca la ventana de registro de tarjetas, seleccione el método de registro deseado."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.registerByCardReader",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enterManually",
              product: "2"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.registerByCardReader",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Escanee la información de la tarjeta con un dispositivo conectado a la PC del visitante."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registerByCardReader",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card-reader.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para escanear la tarjeta a enrolar, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para enrolar la tarjeta, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.enterManually",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enrole ingresando directamente el número de tarjeta."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enterManually",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card-manual.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese directamente ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardId",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para enrolar la tarjeta, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "búsqueda-de-huella-digital-para-aprobación-de-visitantes",
      children: "Búsqueda de huella digital para aprobación de visitantes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Busque visitantes con huellas digitales enroladas y procese su aprobación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.searchVisitorByFingerprint",
            product: "2"
          }), " en la parte superior izquierda de la lista de solicitudes de visitantes."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-list-search-fingerprint.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Escanee la huella digital del visitante en el dispositivo de escaneo de huellas."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si se encuentra un visitante que coincida con la huella, aparecerá un mensaje de confirmación. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.registerInformation",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-list-search-fingerprint-confirm.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de revisar la información del visitante, corrija los elementos necesarios y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.edit",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.status.checkIn",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Revise el contenido de ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), " y, para aprobar la visita, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.checkin",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agregar-visitante",
      children: "Agregar visitante"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía muestra cómo un administrador puede agregar visitantes directamente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addVisitor",
            product: "2"
          }), " en la parte superior izquierda de la lista de visitantes."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese el nombre y número de teléfono del visitante en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.visitor",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-visitor-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese el nombre y número de teléfono de la persona responsable de la visita en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.host",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-admin-info.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al ingresar un nombre o número de teléfono, se mostrará una lista de usuarios que coinciden con la información ingresada. Para seleccionar el usuario deseado, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.choose",
              product: "2"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el grupo de acceso y la duración de la visita en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.accessInfo",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-access-info.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Solo se pueden seleccionar los grupos de acceso asignados al departamento visitado para la PC de visitas. Para más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-site",
              children: "lo siguiente"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el medio de acceso en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-credential.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), ": Para usar autenticación con tarjeta, configúrelo en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.request",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerPrint",
                product: "2"
              }), ": Para usar autenticación con huella digital, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.addFingerprint",
                product: "2"
              }), " y luego enrole la huella del visitante."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para finalizar la adición del visitante, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " en la parte inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El nombre puede tener hasta 48 caracteres."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para agregar campos personalizados a la información del visitante, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-custom-field",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eliminar-visitante",
      children: "Eliminar visitante"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Marque la casilla del visitante que desea eliminar de la lista de solicitudes de visitantes."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-remove-visitor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.deleteVisitor",
            product: "2"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el mensaje de confirmación, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "button.func.deleteVisitor",
              product: "2"
            }), " se activará cuando se marque la casilla de un visitante."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los visitantes solo se pueden eliminar desde la lista de solicitudes de visitantes."
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