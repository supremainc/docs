"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["66143"], {
38600: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_card_templates_mdx_59a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-card-templates-mdx-59a.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_card_templates_mdx_59a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-card-templates","title":"Administrar plantillas de tarjeta","description":"Cree, personalice y administre plantillas de tarjetas móviles en BioStar Air utilizando elementos de marca como logotipos, colores y atributos de usuario.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-card-templates.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-card-templates","permalink":"/docs/es/platform/biostar_air/managing-card-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-card-templates.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-card-templates","title":"Administrar plantillas de tarjeta","description":"Cree, personalice y administre plantillas de tarjetas móviles en BioStar Air utilizando elementos de marca como logotipos, colores y atributos de usuario.","keywords":["plantilla de tarjeta","BioStar Air","Gestión Usuarios"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Administrar Grupos de Usuarios","permalink":"/docs/es/platform/biostar_air/managing-user-groups"},"next":{"title":"Tipos de tarjetas y credenciales de usuario","permalink":"/docs/es/platform/biostar_air/user-card-types"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-card-templates.mdx


const frontMatter = {
	id: 'managing-card-templates',
	title: 'Administrar plantillas de tarjeta',
	description: 'Cree, personalice y administre plantillas de tarjetas móviles en BioStar Air utilizando elementos de marca como logotipos, colores y atributos de usuario.',
	keywords: [
		'plantilla de tarjeta',
		'BioStar Air',
		'Gestión Usuarios'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Crear una nueva plantilla de tarjeta",
  "id": "creatingNewCardTemplate",
  "level": 2
}, {
  "value": "Establecer la plantilla de tarjeta predeterminada",
  "id": "establecer-la-plantilla-de-tarjeta-predeterminada",
  "level": 2
}, {
  "value": "Editar plantillas de tarjeta",
  "id": "editar-plantillas-de-tarjeta",
  "level": 2
}, {
  "value": "Eliminar plantillas de tarjeta",
  "id": "eliminar-plantillas-de-tarjeta",
  "level": 2
}, {
  "value": "Aplicar plantillas a todos los usuarios",
  "id": "aplicar-plantillas-a-todos-los-usuarios",
  "level": 2
}, {
  "value": "Cambiar la plantilla de tarjeta de un usuario",
  "id": "applying-card-templates-to-users",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, IcAirDef, IcAirEdit, IcAirL, IcAirR, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcAirDef) _missingMdxReference("IcAirDef", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirL) _missingMdxReference("IcAirL", true);
  if (!IcAirR) _missingMdxReference("IcAirR", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Con las plantillas de tarjeta en BioStar Air, los administradores pueden diseñar y personalizar las tarjetas móviles de los usuarios. Las plantillas refuerzan la identidad de marca al incluir colores corporativos, logotipos e información personalizada. Se aplican a las tarjetas móviles utilizadas en la aplicación Suprema Pass."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-mobile-card-template-intro.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cada sitio de BioStar Air incluye plantillas predeterminadas. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_template_submenu",
        product: "air"
      }), " en la barra lateral izquierda."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-mobile-card-template.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vea las plantillas predeterminadas. Los administradores aplican las plantillas de tarjeta móvil de una de las siguientes tres maneras."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Aplicar la plantilla de tarjeta predeterminada a la tarjeta móvil de un usuario"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Modificar los parámetros de una plantilla existente para aplicar una tarjeta móvil personalizada"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Crear una nueva plantilla personalizada y aplicarla en lugar de la plantilla existente"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Vea el siguiente video para aprender cómo administrar las plantillas de tarjeta."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "tFO1DvKo0po"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creatingNewCardTemplate",
      children: "Crear una nueva plantilla de tarjeta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Crear una nueva plantilla de tarjeta."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_new_card_template",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-new.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_templates_header",
            product: "air"
          }), ", establezca el diseño y la disposición de la tarjeta."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-new-card.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de aplicar la configuración deseada, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar la plantilla de tarjeta móvil."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cardStyles",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_styles_header",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_styles_header",
        product: "air"
      }), " puede establecer el color de fondo o la imagen de fondo de la tarjeta."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_styles_1",
            product: "air"
          }), ": Establezca el color de fondo de la tarjeta móvil."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_styles_2",
            product: "air"
          }), ": Cargue una imagen de fondo para la tarjeta móvil. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "background_img_upload_btn",
            product: "air"
          }), " y luego seleccione un archivo de imagen de fondo almacenado localmente. Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "crop_image_header",
            product: "air"
          }), ", haga clic en la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "fit_this_image",
            product: "air"
          }), " o ajuste el tamaño manualmente. Tras completar los ajustes de la imagen, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-adjust-image.png",
          width: "50%"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cardProperties",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_properties",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_properties",
        product: "air"
      }), " puede seleccionar qué atributos incluir en la tarjeta móvil. Haga clic en el interruptor para mostrar los atributos seleccionados en la vista previa ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_template_preview_header",
        product: "air"
      }), " a la derecha."]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--60",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-card-config.png"
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Después de colocar un atributo, haga clic en él en la vista previa ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_preview_header",
                product: "air"
              }), " para mostrar las manijas que permiten redimensionarlo, reposicionarlo y rotarlo."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-mobile-card-template-card-config-setting.png",
              width: "20%"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Personalice la fuente de cada atributo. Haga clic en un atributo colocado y luego utilice las opciones de fuente en la parte superior. Ajuste el tamaño, el estilo, la alineación y el color de la fuente."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-mobile-card-template-card-config-font.png",
              width: "80%"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Seleccione el modo oscuro o el modo claro en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "app_display_theme",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_reset_btn",
                product: "air"
              }), " para inicializar el diseño configurado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Después de completar todas las configuraciones, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " para guardar la plantilla de tarjeta móvil."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "establecer-la-plantilla-de-tarjeta-predeterminada",
      children: "Establecer la plantilla de tarjeta predeterminada"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Establezca una plantilla de tarjeta móvil recién agregada como predeterminada."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en la casilla de verificación en la esquina superior derecha de la plantilla deseada."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirDef, {
            title: "Set as Default Card"
          }), " en la parte superior izquierda de la lista de plantillas."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-set-default.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensaje, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_yes_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La plantilla de tarjeta móvil predeterminada se aplica automáticamente cuando se agrega un nuevo usuario."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Solo se puede establecer una plantilla como predeterminada."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editar-plantillas-de-tarjeta",
      children: "Editar plantillas de tarjeta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en la plantilla que desea editar en la lista de plantillas. O bien seleccione la casilla de verificación en la esquina superior derecha de la plantilla y haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_templates_header",
            product: "air"
          }), ", modifique el diseño y la distribución de la tarjeta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar los cambios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensaje, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_replace_btn",
            product: "air"
          }), " o en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_save_new_btn",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-edit-confirm.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_replace_btn",
                product: "air"
              }), ": Guarde los cambios en la plantilla existente."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_save_new_btn",
                product: "air"
              }), ": Guarde los cambios como una nueva plantilla."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eliminar-plantillas-de-tarjeta",
      children: "Eliminar plantillas de tarjeta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En la lista de plantillas, haga clic en la casilla de verificación en la esquina superior derecha de cada plantilla que desee eliminar. Puede seleccionar una o más plantillas."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " en la parte superior izquierda de la lista de plantillas."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensaje, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_yes_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "No se pueden eliminar las plantillas predeterminadas."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aplicar-plantillas-a-todos-los-usuarios",
      children: "Aplicar plantillas a todos los usuarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En la lista de plantillas, haga clic en la casilla de verificación en la esquina superior derecha de la plantilla que desea aplicar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "update_all_users1",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-apply-all.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensaje, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_yes_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al aplicar la plantilla de tarjeta seleccionada a todos los usuarios, se reemplaza cualquier plantilla establecida anteriormente."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Solo se puede aplicar una plantilla de tarjeta a todos los usuarios."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applying-card-templates-to-users",
      children: "Cambiar la plantilla de tarjeta de un usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga estos pasos para cambiar la plantilla de tarjeta de un usuario en particular."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
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
          children: "Haga clic en el usuario en la lista para aplicar una plantilla de tarjeta."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " en la esquina superior derecha de la sección de detalles del usuario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-apply-user-edit.png",
          width: "70%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_edit_header",
            product: "air"
          }), ", haz clic en ", (0,jsx_runtime.jsx)(IcAirL, {
            title: "Previous"
          }), " o ", (0,jsx_runtime.jsx)(IcAirR, {
            title: "Next"
          }), " bajo 'Plantilla de tarjeta' en el panel derecho para seleccionar la plantilla deseada."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-apply-user-details.png",
          width: "70%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para aplicar los cambios."]
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