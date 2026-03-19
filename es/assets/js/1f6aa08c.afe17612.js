"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["55678"], {
98641: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_users_in_bulk_mdx_1f6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-adding-users-in-bulk-mdx-1f6.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_users_in_bulk_mdx_1f6_namespaceObject = JSON.parse('{"id":"platform/biostar_air/adding-users-in-bulk","title":"Agregar usuarios masivamente","description":"Aprenda a agregar varios usuarios de forma eficiente subiendo un archivo CSV al portal BioStar Air, configurar niveles de acceso por lotes y administrar las imágenes de perfil.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-users-in-bulk.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/adding-users-in-bulk","permalink":"/docs/es/platform/biostar_air/adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/adding-users-in-bulk.mdx","tags":[],"version":"current","frontMatter":{"id":"adding-users-in-bulk","title":"Agregar usuarios masivamente","description":"Aprenda a agregar varios usuarios de forma eficiente subiendo un archivo CSV al portal BioStar Air, configurar niveles de acceso por lotes y administrar las imágenes de perfil.","keywords":["Gestión Usuarios","BioStar Air","usuarios masivos"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Administrar Usuarios","permalink":"/docs/es/platform/biostar_air/user-management-user-list"},"next":{"title":"Administrar Grupos de Usuarios","permalink":"/docs/es/platform/biostar_air/managing-user-groups"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-users-in-bulk.mdx


const frontMatter = {
	id: 'adding-users-in-bulk',
	title: 'Agregar usuarios masivamente',
	description: 'Aprenda a agregar varios usuarios de forma eficiente subiendo un archivo CSV al portal BioStar Air, configurar niveles de acceso por lotes y administrar las imágenes de perfil.',
	keywords: [
		'Gestión Usuarios',
		'BioStar Air',
		'usuarios masivos'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Descargar la plantilla CSV",
  "id": "downloadCSVTemplate",
  "level": 2
}, {
  "value": "Preparar el archivo CSV",
  "id": "preparing-the-csv-file",
  "level": 2
}, {
  "value": "Campos clave",
  "id": "keyInputFields",
  "level": 3
}, {
  "value": "Compatibilidad con formatos Wiegand personalizados",
  "id": "compatibilidad-con-formatos-wiegand-personalizados",
  "level": 3
}, {
  "value": "Soporte para múltiples tarjetas",
  "id": "soporte-para-múltiples-tarjetas",
  "level": 3
}, {
  "value": "Subir el archivo CSV",
  "id": "uploading-the-csv-file",
  "level": 2
}, {
  "value": "Validación del archivo CSV",
  "id": "validación-del-archivo-csv",
  "level": 3
}, {
  "value": "Subir imágenes de perfil de usuario",
  "id": "uploadProfileImages",
  "level": 2
}, {
  "value": "Finalizar la carga masiva",
  "id": "finalizing-the-bulk-upload",
  "level": 2
}, {
  "value": "Solución de Problemas",
  "id": "solución-de-problemas",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
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
  }, {Cmd, DocLink, IcAirUpface, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirUpface) _missingMdxReference("IcAirUpface", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Si necesita agregar varios usuarios a la vez, utilice la función de importación masiva de usuarios de BioStar Air. Suba un archivo CSV para registrar decenas o cientos de empleados en solo minutos. También puede subir masivamente imágenes de perfil al introducir la información de los usuarios. Este documento ofrece instrucciones paso a paso para descargar la plantilla CSV, preparar el archivo, subirlo, gestionar las imágenes de perfil y verificar la información de los usuarios tras la importación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Consulte el siguiente video para obtener una guía paso a paso sobre cómo agregar varios usuarios de forma masiva."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "gOi2nP0Ag5o"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloadCSVTemplate",
      children: "Descargar la plantilla CSV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga estos pasos para descargar la plantilla CSV."
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_btn",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " en la esquina superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_download_btn_text",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-download-csv-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Guarde el archivo de plantilla CSV (", (0,jsx_runtime.jsx)(_components.em, {
            children: "biostar-import-user-csv-example.csv"
          }), ") localmente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparing-the-csv-file",
      children: "Preparar el archivo CSV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Descargue la plantilla CSV e ingrese los datos requeridos para cada usuario."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keyInputFields",
      children: "Campos clave"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los campos clave a ingresar son los siguientes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header11",
            product: "air",
            className: "bold"
          }), ": Verifique el ID del grupo en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-list-check-ids.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header12",
            product: "air",
            className: "bold"
          }), ": Verifique el ID del nivel de acceso en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), ". ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "full_access",
            product: "air",
            className: "bold"
          }), " siempre está establecido en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1"
          }), ". Use comas (", (0,jsx_runtime.jsx)(_components.code, {
            children: ","
          }), ") como separadores para especificar varios niveles de acceso."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-ac-level-list-check-ids.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header7",
            product: "air",
            className: "bold"
          }), ": Ingréselo si planea enviar invitaciones por correo electrónico."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header8",
            product: "air",
            className: "bold"
          }), ": Ingréselo si planea enviar invitaciones por SMS."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header7",
          product: "air",
          className: "bold"
        }), " y ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header8",
          product: "air",
          className: "bold"
        }), " no deben duplicarse. Subir un archivo CSV con valores duplicados puede provocar errores."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compatibilidad-con-formatos-wiegand-personalizados",
      children: "Compatibilidad con formatos Wiegand personalizados"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede configurar libremente cualquier formato Wiegand, incluidos códigos de instalación, segmentos, bits de paridad y más."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Se admiten los formatos HID Corporate 1000, iCLASS SE y Seos."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Plantilla CSV"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Cada formato definido (personalizado o predeterminado) aparece como una columna separada en el archivo CSV."
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_1",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_2",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_3",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_4",
                  product: "air",
                  className: "bold"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_5",
                  product: "air",
                  className: "bold"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Separe varias entradas en un solo campo con una barra (", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), ")."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Use comillas simples (", (0,jsx_runtime.jsx)(_components.code, {
                children: "'"
              }), ") alrededor del nombre de la tarjeta. Evite usar comillas dobles (", (0,jsx_runtime.jsx)(_components.code, {
                children: "\""
              }), "); pueden provocar errores."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "✅ 'Nombre de la tarjeta' | ❌ \"Nombre de la tarjeta\""
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ejemplo"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Con un código de instalación: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "1234567-100-'Main Office Card'"
                }), " (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "CardID"
                }), "-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "FacilityCode"
                }), "-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "'CardName'"
                }), ")"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Con varios segmentos: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "12-3456-78-'Lab Entry Card'"
                })]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "soporte-para-múltiples-tarjetas",
      children: "Soporte para múltiples tarjetas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Asigne hasta ocho formatos de tarjeta CSN o Wiegand por usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Plantilla CSV"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Para una sola tarjeta, ingrese el número CSN."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Separe los números de tarjeta CSN con una barra (", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), ") al registrar múltiples tarjetas."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formato de nombre de tarjeta"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CSN"
        }), "-", (0,jsx_runtime.jsx)(_components.code, {
          children: "'Card Name'"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Ejemplo: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "1234567-'Main Entry'"
        }), " / ", (0,jsx_runtime.jsx)(_components.em, {
          children: "7654321-'Back Door'"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploading-the-csv-file",
      children: "Subir el archivo CSV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Una vez preparado el archivo CSV, cárguelo."
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_btn",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " en la esquina superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_csv_text_select_file",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-select-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione el archivo CSV que preparó."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si las imágenes de perfil de los usuarios están listas, active la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "face_register_upload_face_photo",
              product: "air"
            }), ". Para más información, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#uploadProfileImages"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_popup_import_users_btn_next",
            product: "air"
          }), " en la esquina inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_data_preview",
            product: "air"
          }), ", revise la precisión de los datos en la primera columna."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-csv-data-preview.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si no hay problemas, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_btn",
            product: "air"
          }), " en la esquina inferior derecha."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Después de que finalice la carga, podrá importar imágenes de usuarios o emitir tarjetas móviles en lote en la siguiente pantalla. Seleccione la acción deseada."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-csv-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["No use caracteres especiales distintos de las comas (", (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            }), ") en el nombre del archivo CSV."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["El tamaño máximo del archivo CSV es ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5MB"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Alternativamente, arrastre y suelte el archivo CSV en el campo ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_actions_import_upload_text",
              product: "air"
            }), " del panel ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_actions_import_title",
              product: "air"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validación-del-archivo-csv",
      children: "Validación del archivo CSV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El proceso de carga de CSV ahora proporciona ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "retroalimentación de errores a nivel de fila"
      }), ", lo que facilita la solución de problemas. Si se producen errores durante la carga, se ofrece un informe detallado para su revisión. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_actions_import_download_btn_text",
        product: "air"
      }), " para descargar el informe."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-csv-error.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploadProfileImages",
      children: "Subir imágenes de perfil de usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las imágenes de perfil se pueden subir automáticamente con el archivo CSV o cargarlas manualmente de forma masiva más adelante."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-with-face-photo.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prepare los archivos de imagen de perfil que coincidan con la columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header1",
            product: "air",
            className: "bold"
          }), " del archivo CSV."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Por ejemplo, el archivo ", (0,jsx_runtime.jsx)(_components.em, {
            children: "601.jpg"
          }), " corresponde al usuario con ID ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "601"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de cargar el archivo CSV en el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), ", habilite la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_face_photo",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_face_photo_select_folder",
            product: "air"
          }), ", luego seleccione la carpeta que contiene las imágenes de perfil."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Requisitos de formato de archivo"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Formatos compatibles: ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".jpg"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".jpeg"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".png"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Límite de tamaño de archivo: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1 MB"
            }), " por imagen"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si las imágenes de perfil no estaban listas cuando se cargó el archivo CSV, utilice ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "image_upload_action",
          product: "air"
        }), "(", (0,jsx_runtime.jsx)(IcAirUpface, {}), ") en la lista de usuarios para agregarlas más tarde."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-add-bulk-import-user-profile-images.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "finalizing-the-bulk-upload",
      children: "Finalizar la carga masiva"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Una vez que se han cargado todos los datos de usuario y las imágenes, el sistema procesa las entradas y los nuevos usuarios aparecen en la lista con las credenciales asignadas."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solución-de-problemas",
      children: "Solución de Problemas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si tiene problemas al cargar el CSV, consulte ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/troubleshooting-adding-users-in-bulk"
      }), " para obtener ayuda con la solución de problemas comunes. El documento también incluye fórmulas de Excel que le ayudan a validar los datos y a eliminar duplicados."]
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