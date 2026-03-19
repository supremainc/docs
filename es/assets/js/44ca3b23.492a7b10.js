"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3490"], {
69861: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_individual_users_mdx_44c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-adding-individual-users-mdx-44c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_individual_users_mdx_44c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/adding-individual-users","title":"Agregar usuarios","description":"Aprenda a agregar, editar y eliminar usuarios en BioStar Air. Esta guía paso a paso explica cómo seleccionar el tipo de usuario, emitir credenciales (tarjeta móvil, tarjeta RF, tarjeta web, reconocimiento facial y PIN) y configurar niveles de acceso y períodos de validez.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-individual-users.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/adding-individual-users","permalink":"/docs/es/platform/biostar_air/adding-individual-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/adding-individual-users.mdx","tags":[],"version":"current","frontMatter":{"id":"adding-individual-users","title":"Agregar usuarios","description":"Aprenda a agregar, editar y eliminar usuarios en BioStar Air. Esta guía paso a paso explica cómo seleccionar el tipo de usuario, emitir credenciales (tarjeta móvil, tarjeta RF, tarjeta web, reconocimiento facial y PIN) y configurar niveles de acceso y períodos de validez.","keywords":["Gestión Usuarios","BioStar Air","Agregar usuarios"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Usuarios","permalink":"/docs/es/platform/biostar_air/managing-users"},"next":{"title":"Administrar Usuarios","permalink":"/docs/es/platform/biostar_air/user-management-user-list"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-individual-users.mdx


const frontMatter = {
	id: 'adding-individual-users',
	title: 'Agregar usuarios',
	description: 'Aprenda a agregar, editar y eliminar usuarios en BioStar Air. Esta guía paso a paso explica cómo seleccionar el tipo de usuario, emitir credenciales (tarjeta móvil, tarjeta RF, tarjeta web, reconocimiento facial y PIN) y configurar niveles de acceso y períodos de validez.',
	keywords: [
		'Gestión Usuarios',
		'BioStar Air',
		'Agregar usuarios'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar usuarios",
  "id": "addingUsers",
  "level": 2
}, {
  "value": "Ingrese la información del usuario",
  "id": "userInformation",
  "level": 2
}, {
  "value": "Subir imagen de perfil",
  "id": "uploadProfileImage",
  "level": 2
}, {
  "value": "Seleccionar el tipo de usuario",
  "id": "selecting-user-type",
  "level": 2
}, {
  "value": "Emitir credenciales",
  "id": "issuingCredentials",
  "level": 2
}, {
  "value": "Enviar enlace de invitación",
  "id": "sendingInvitationLink",
  "level": 2
}, {
  "value": "Establecer niveles de acceso y vigencia",
  "id": "setting-access-levels-and-validity",
  "level": 2
}, {
  "value": "Seleccionar plantilla de tarjeta",
  "id": "selectingCardTemplate",
  "level": 2
}, {
  "value": "Guardar o activar al usuario",
  "id": "saving-or-activating-the-user",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, DocLink, IcAdd, IcAirL, IcAirR, IcInfinity, Image, NextItem, NextStep, TabItem, Tabs, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirL) _missingMdxReference("IcAirL", true);
  if (!IcAirR) _missingMdxReference("IcAirR", true);
  if (!IcInfinity) _missingMdxReference("IcInfinity", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Este documento ofrece instrucciones paso a paso para agregar y administrar usuarios individuales en BioStar Air. Cubre todo el proceso: seleccionar el tipo de usuario (regular o temporal), emitir las credenciales correspondientes y establecer los niveles de acceso y los períodos de validez. También muestra cómo editar o eliminar la información del usuario agregado."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Vea el siguiente video para seguir una guía paso a paso sobre el proceso completo de agregar un nuevo usuario."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "FTgpsYPlP8k"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingUsers",
      children: "Agregar usuarios"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Aparece una lista de usuarios."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_btn",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_a_user",
                product: "air"
              }), " en la esquina superior derecha de la pantalla."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng-add-user.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_a_user",
            product: "air"
          }), ", ingrese y configure la información requerida en cada sección. Rellene los campos obligatorios de todas las secciones y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_card_activate_btn",
            product: "air"
          }), " en la esquina inferior derecha."]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsxs)(Column, {
            className: "width--40",
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user.png",
              className: "none"
            }), (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add.png",
              className: "none"
            })]
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Inicie sesión con la aplicación móvil."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "site_setting_tab_management",
                    product: "air"
                  }), " en la parte inferior de la pantalla de inicio."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque la tarjeta ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_submenu",
                    product: "air"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque ", (0,jsx_runtime.jsx)(IcAdd, {
                    title: "Add"
                  }), " en la parte superior de la lista de usuarios."]
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_a_user",
                product: "air"
              }), ", ingrese y configure la información requerida en cada sección. Rellene los campos obligatorios de todas las secciones y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_card_activate_btn",
                product: "air"
              }), " en la esquina inferior derecha."]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userInformation",
      children: "Ingrese la información del usuario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ingrese la información básica del nuevo usuario en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_detail",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng-add-user-details.png"
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-info.png",
          width: "30%"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input1",
            product: "air"
          }), ": Ingrese un ID específico manualmente o permita que el sistema lo genere de forma secuencial."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input3",
            product: "air"
          }), ": Seleccione el idioma predeterminado del usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input5",
            product: "air"
          }), ": Seleccione el grupo al que pertenece el usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input2",
            product: "air"
          }), ": Ingrese el nombre completo del usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input18",
            product: "air"
          }), ": Ingrese el cargo del usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input4",
            product: "air"
          }), ": Ingrese el nombre del departamento del usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input11",
            product: "air"
          }), ": Cargue la imagen de perfil del usuario. Para más información, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#uploadProfileImage"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("span", {
              className: "require",
              children: "*"
            }), " indica un campo obligatorio."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Ingrese el correo electrónico y el número de teléfono del usuario en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_form_input8",
              product: "air"
            }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "credential_detail",
              product: "air"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploadProfileImage",
      children: "Subir imagen de perfil"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Pase el cursor sobre el área de la imagen de perfil y haga clic en el icono +."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-upload-profile-image.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Seleccione el archivo de imagen guardado localmente."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "crop_image_header",
                product: "air"
              }), ", ajuste la foto al tamaño deseado. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "fit_this_image",
                product: "air"
              }), " para redimensionarla automáticamente."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-upload-profile-image-adjust.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " para guardar la imagen cargada como imagen de perfil."]
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-image.png"
            })
          }), (0,jsx_runtime.jsx)(Column, {
            className: "padding--l40",
            children: (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Toque la imagen de perfil del usuario."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Elija cómo agregar una imagen desde el menú que aparece en la parte inferior."
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        en: "Choose from library",
                        children: "Seleccionar de la biblioteca"
                      }), ": Seleccione un archivo de imagen guardado en su dispositivo móvil para subirlo."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        en: "Take photo",
                        children: "Tomar foto"
                      }), ": Utilice la cámara de su dispositivo móvil para tomar una foto y subirla."]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Redimensione la imagen cargada a un tamaño adecuado y guárdela."
                }), "\n"]
              }), "\n"]
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selecting-user-type",
      children: "Seleccionar el tipo de usuario"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione si el usuario que está agregando en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "credential_detail",
            product: "air"
          }), " es un usuario regular o un visitante. Los tipos de credenciales que se pueden emitir varían según el tipo de usuario."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_regular_card_type",
                product: "air"
              }), ": Un usuario que es miembro regular de una organización o instalación y que requiere acceso a largo plazo. Se pueden emitir todos los tipos de credenciales."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-user-type-regular.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_temporary_card_type",
                product: "air"
              }), ": Un visitante o miembro no regular que necesita acceso limitado y de corta duración. Esto puede incluir huéspedes, visitantes externos, contratistas temporales, mensajeros de entrega, etc. Solo se pueden emitir las credenciales ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_form_input20",
                product: "air"
              }), ", incluyendo el código QR y LinkPass."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-user-type-temporary.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione si el usuario que está agregando en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "credential_detail",
            product: "air"
          }), " es un usuario regular o un visitante. Los tipos de credenciales que se pueden emitir varían según el tipo de usuario."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-type.png",
          width: "60%",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_regular_card_type",
                product: "air"
              }), ": Un usuario que es miembro regular de una organización o instalación y que requiere acceso a largo plazo. Se pueden emitir todos los tipos de credenciales."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_temporary_card_type",
                product: "air"
              }), ": Un visitante o miembro no regular que necesita acceso limitado y de corta duración. Esto puede incluir huéspedes, visitantes externos, contratistas temporales, mensajeros de entrega, etc. Solo se pueden emitir las credenciales ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_form_input20",
                product: "air"
              }), ", incluyendo el código QR y LinkPass."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["A los usuarios ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_regular_card_type",
              product: "air"
            }), " se les asigna automáticamente el nivel de acceso completo, mientras que los usuarios ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_temporary_card_type",
              product: "air"
            }), " deben seleccionar manualmente un nivel de acceso."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_table_column8",
              product: "air"
            }), " es compatible con BioStar Air versión 2.6 o superior."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "issuingCredentials",
      children: "Emitir credenciales"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Introduzca la información del usuario y, a continuación, configure las credenciales que se usarán para la autenticación de acceso en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "credential_detail",
        product: "air"
      }), ". Cada credencial tiene un interruptor para activarla o desactivarla."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_mobile",
            product: "air"
          }), ": Utilice la aplicación móvil Suprema Pass como método de autenticación de acceso. El administrador puede editar el ID de la tarjeta."]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-mobile.png"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-mobile.png",
              width: "30%"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_rf",
            product: "air"
          }), ": Agregue hasta ocho tarjetas RFID por usuario para la autenticación de acceso. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-rfcard.png"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-rfcard.png",
              width: "30%"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el tipo de tarjeta (CSN o Wiegand), el ID de la tarjeta y el nombre de la tarjeta. Seleccione un lector en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "newest_rf_card_text_device",
            product: "air"
          }), ". Opcionalmente, escanee una tarjeta RFID física con el lector conectado."]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-rfcard-2type.png",
              className: "none"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-rfcard-csn-wiegand.png",
              width: "60%",
              className: "none"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input20",
            product: "air"
          }), ": Utilice ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option3",
            product: "air"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option4",
            product: "air"
          }), " como métodos de autenticación de acceso."]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-web.png"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-webcard.png",
              width: "30%"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), " aparece solo después de habilitar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_label",
              product: "air"
            }), " en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings_menu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_submenu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_reader_tab",
              product: "air"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option5",
            product: "air"
          }), ": Añada hasta dos imágenes de perfil facial para la autenticación de acceso. Puede subir una imagen existente o registrarla utilizando un lector conectado. Alternativamente, envíe al usuario un enlace por correo electrónico para que pueda inscribirse directamente con la cámara de su dispositivo móvil."]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsxs)(TabItem, {
            value: "web",
            label: "Web",
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-face.png"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "select_file",
                    product: "air"
                  }), ": Seleccione un archivo de imagen guardado localmente para subirlo."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_device",
                    product: "air"
                  }), ": Utilice el lector conectado para registrar una imagen facial."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_mobile",
                    product: "air"
                  }), ": Escanee un código QR con la cámara del dispositivo móvil para abrir un enlace y registrar una imagen facial."]
                }), "\n", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-add-user-credential-credential-type-face-qr.png",
                  width: "50%"
                }), "\n"]
              }), "\n"]
            })]
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsxs)(Columns, {
              children: [(0,jsx_runtime.jsx)(Column, {
                className: "width--30",
                children: (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-app-mng-user-add-credential-face.png"
                })
              }), (0,jsx_runtime.jsxs)(Column, {
                className: "padding--l40",
                children: [(0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque ", (0,jsx_runtime.jsx)(IcAdd, {
                    title: "Add"
                  }), " para agregar una foto de rostro. Elija cómo agregarla desde el menú que aparece en la parte inferior."]
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        en: "Choose from library",
                        children: "Seleccionar de la biblioteca"
                      }), ": Seleccione un archivo de imagen guardado en su dispositivo móvil para subirlo."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        en: "Take photo",
                        children: "Tomar foto"
                      }), ": Utilice la cámara de su dispositivo móvil para tomar una foto y subirla."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        sid: "use_as_profile_image",
                        product: "air"
                      }), ": Puede usar la imagen actualmente configurada como foto de perfil para su credencial facial."]
                    }), "\n"]
                  }), "\n"]
                }), (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "note",
                  children: (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Para obtener más información sobre cómo registrar una foto de rostro, consulte ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "view_photo_guide",
                      product: "air"
                    }), "."]
                  })
                })]
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option6",
            product: "air"
          }), ": Establezca un PIN de 4 a 16 dígitos para usar como parte de la autenticación de dos factores (2FA)."]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-pin.png"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-pin.png",
              width: "30%"
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendingInvitationLink",
      children: "Enviar enlace de invitación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Envíe por correo electrónico el enlace de descarga de la aplicación Suprema Pass a los usuarios que utilizan ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_mobile",
        product: "air"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_form_input20",
        product: "air"
      }), ". Ingrese la dirección de correo electrónico (obligatoria) y el número de teléfono (opcional)."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-user-credential-credential-type-invite-link.png"
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-invitation.png",
          width: "30%"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Solicite la recarga de crédito SMS en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "credit_center_submenu",
          product: "air"
        }), " para usar la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_form_input10",
          product: "air"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-access-levels-and-validity",
      children: "Establecer niveles de acceso y vigencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Después de seleccionar las credenciales, configure el período de vigencia de las credenciales, los niveles de acceso y los niveles de planta en la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "access_detail",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-user-access-info.png"
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-validation.png",
          width: "30%"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_valid_period",
            product: "air"
          }), ": Establezca el período de vigencia de las credenciales emitidas al usuario. Haga clic en ", (0,jsx_runtime.jsx)(IcInfinity, {
            title: "No Expiration Date"
          }), " para dejar la fecha de expiración sin límite."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input12",
            product: "air"
          }), ": Seleccione los niveles de acceso para el usuario. Otorgue acceso total o elija un nivel de acceso predefinido."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input19",
            product: "air"
          }), ": Seleccione los niveles de planta a los que el usuario puede acceder."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_device_manager",
            product: "air"
          }), ": Permita que un usuario administre los permisos de acceso en un lector específico."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "mobile_consecutive_tag",
            product: "air"
          }), ": Permite lecturas consecutivas de tarjetas móviles sin tiempo de espera. Esta función está disponible en la aplicación Suprema Pass versión 2.9.0 o superior."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_form_input12",
              product: "air"
            }), " se puede asignar de forma permanente (expira con la credencial) o temporalmente (expira antes de la credencial). Para obtener más información sobre la configuración de niveles de acceso, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-access-level"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración de niveles de planta, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-floor-level"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_device_manager",
              product: "air"
            }), " está disponible solo para usuarios de X-Station 2 que tengan acceso al menú de administrador del dispositivo X-Station 2."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectingCardTemplate",
      children: "Seleccionar plantilla de tarjeta"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirL, {}), " o ", (0,jsx_runtime.jsx)(IcAirR, {}), " debajo de Plantilla de tarjeta en el panel derecho para cambiar el diseño."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-user-select-card-template.png",
          width: "70%"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione la pestaña ", (0,jsx_runtime.jsx)(IcAirL, {}), " o ", (0,jsx_runtime.jsx)(IcAirR, {}), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_preview_header",
            product: "air"
          }), " para cambiar el diseño de la plantilla de tarjeta."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-card-template.png",
          width: "30%"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre cómo crear nuevas plantillas de tarjeta, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-card-templates"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "saving-or-activating-the-user",
      children: "Guardar o activar al usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Después de configurar todos los ajustes del usuario, elija una de las siguientes opciones."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar al usuario para su activación posterior."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_card_activate_btn",
            product: "air"
          }), " para emitir y activar las credenciales de inmediato."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "adding-users-in-bulk",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Una vez que haya aprendido a agregar usuarios uno por uno, aprenda a registrar varios usuarios a la vez."
        })
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