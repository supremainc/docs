"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["59493"], {
75018: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_adding_users_in_bulk_mdx_d65_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-troubleshooting-adding-users-in-bulk-mdx-d65.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_adding_users_in_bulk_mdx_d65_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-adding-users-in-bulk","title":"Solución de problemas al agregar usuarios en masa","description":"Aprenda a solucionar problemas comunes al agregar usuarios en masa desde el portal BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-adding-users-in-bulk.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-adding-users-in-bulk","permalink":"/docs/es/platform/biostar_air/troubleshooting-adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/troubleshooting-adding-users-in-bulk.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting-adding-users-in-bulk","title":"Solución de problemas al agregar usuarios en masa","description":"Aprenda a solucionar problemas comunes al agregar usuarios en masa desde el portal BioStar Air.","keywords":["Solución de Problemas","usuarios masivos","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Solución de Problemas","permalink":"/docs/es/platform/biostar_air/troubleshooting"},"next":{"title":"Solucionar problemas con la tarjeta móvil","permalink":"/docs/es/platform/biostar_air/troubleshooting-suprema-pass-app"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-adding-users-in-bulk.mdx


const frontMatter = {
	id: 'troubleshooting-adding-users-in-bulk',
	title: 'Solución de problemas al agregar usuarios en masa',
	description: 'Aprenda a solucionar problemas comunes al agregar usuarios en masa desde el portal BioStar Air.',
	keywords: [
		'Solución de Problemas',
		'usuarios masivos',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Preparar el archivo CSV",
  "id": "preparar-el-archivo-csv",
  "level": 2
}, {
  "value": "Descargar la plantilla CSV",
  "id": "descargar-la-plantilla-csv",
  "level": 3
}, {
  "value": "Usar el formato exacto de la plantilla CSV",
  "id": "usar-el-formato-exacto-de-la-plantilla-csv",
  "level": 3
}, {
  "value": "Fechas (<Cmd class=\"normal\"></Cmd> / <Cmd class=\"normal\"></Cmd>)",
  "id": "fechas---",
  "level": 4
}, {
  "value": "Requisitos de credenciales",
  "id": "requisitos-de-credenciales",
  "level": 4
}, {
  "value": "Fórmulas de Excel para la prevalidación",
  "id": "excelFormulas",
  "level": 2
}, {
  "value": "Validación de correos electrónicos o números de teléfono duplicados",
  "id": "validación-de-correos-electrónicos-o-números-de-teléfono-duplicados",
  "level": 3
}, {
  "value": "Validación del formato de fecha",
  "id": "validación-del-formato-de-fecha",
  "level": 3
}, {
  "value": "Validación del formato de correo electrónico",
  "id": "validación-del-formato-de-correo-electrónico",
  "level": 3
}, {
  "value": "¿Aparecen errores?",
  "id": "common-errors",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirUtemplate, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirUtemplate) _missingMdxReference("IcAirUtemplate", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Varios clientes y socios han informado problemas al agregar listas de usuarios en masa. La mayoría de estos problemas se deben a archivos CSV con formato incorrecto. Siga exactamente las instrucciones a continuación para asegurarse de que la función de adición masiva funcione como se espera."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "A partir de la versión v2.10, BioStar Air genera un informe de validación cuando se carga un archivo CSV que contiene entradas no válidas. Corrija los errores y vuelva a cargar el archivo."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-add-bulk-import-user-csv-error.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparar-el-archivo-csv",
      children: "Preparar el archivo CSV"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "descargar-la-plantilla-csv",
      children: "Descargar la plantilla CSV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a ", (0,jsx_runtime.jsx)(Cmd, {
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
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Guarde el archivo de plantilla CSV (", (0,jsx_runtime.jsx)(_components.em, {
            children: "biostar-import-user-csv-example.csv"
          }), ") localmente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usar-el-formato-exacto-de-la-plantilla-csv",
      children: "Usar el formato exacto de la plantilla CSV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No agregue ni elimine columnas manualmente"
          }), ". Una columna inesperada puede causar un error."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si necesita incluir campos adicionales (por ejemplo, ID de empleado o departamento), utilice la función ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_setting_templ_action",
            product: "air"
          }), "(", (0,jsx_runtime.jsx)(IcAirUtemplate, {}), ") en la parte superior de la lista de usuarios para agregarlos. Cuando se agrega un campo, el archivo CSV descargado incluye automáticamente la columna correspondiente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ingrese los datos correctamente consultando los requisitos de cada columna."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header1",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Un ID numérico único para cada usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header1",
            product: "air",
            className: "bold"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "puede dejarse en blanco"
          }), ", y el sistema asigna un valor automáticamente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Si ingresa los ID de usuario manualmente"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Utilice ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "solo números"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Utilice un ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "valor único"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "No incluya letras, espacios, guiones ni caracteres especiales."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si debe usar un ID de empleado específico de la empresa que incluya letras, no utilice el campo ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header1",
          product: "air",
          className: "bold"
        }), ". En su lugar, cree un campo de usuario personalizado con la función ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_setting_templ_action",
          product: "air"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header7",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Utilice un formato de correo electrónico válido. Consulte las ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#excelFormulas",
            children: "fórmulas de validación"
          }), " para verificar el formato del correo electrónico."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "No se permiten espacios."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Debe incluir el signo arroba (", (0,jsx_runtime.jsx)(_components.code, {
                children: "@"
              }), ")."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["El dominio debe incluir un punto (", (0,jsx_runtime.jsx)(_components.code, {
                children: "."
              }), ") y un dominio de nivel superior."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Ejemplo: example.com, gmail.com, suprema.co.kr"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "No debe haber ningún punto adicional después de la dirección."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "No se permiten caracteres especiales ni ocultos."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Debe ser una dirección de correo electrónico. Pueden aparecer errores como 'Not provided'."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La dirección de correo electrónico ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "debe ser única"
          }), ". No se permiten duplicados ni en el archivo ni entre los usuarios existentes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Se requiere una dirección de correo electrónico para emitir las credenciales que aparecen a continuación."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_mobile",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option4",
              product: "air"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Los usuarios que solo tienen una tarjeta RFID no necesitan proporcionar una dirección de correo electrónico."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header8",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Proporcionar un número de teléfono es opcional cuando la credencial no se entrega vía SMS."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al igual que la dirección de correo electrónico, el número de teléfono ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "debe ser único"
          }), " y no se permiten duplicados ni en el archivo ni entre los usuarios existentes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Utilice el correo electrónico para enviar las credenciales cuando sea posible. Los SMS generan cargos adicionales."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "fechas---",
      children: ["Fechas (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header5",
        product: "air",
        className: "normal"
      }), " / ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header6",
        product: "air",
        className: "normal"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Todos los campos de fecha deben seguir exactamente el formato que se muestra a continuación."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-plaintext",
        children: "YYYY-MM-DDTHH:MM:SS.sssZ\n\nExample:\n1995-05-09T00:00:00.000Z\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Incluso pequeñas diferencias—por ejemplo, omitir la 'Z', usar barras (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), ") en lugar de guiones (", (0,jsx_runtime.jsx)(_components.code, {
        children: "—"
      }), "), o no incluir la hora—pueden causar que la carga falle."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "requisitos-de-credenciales",
      children: "Requisitos de credenciales"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tipo de credencial"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correo electrónico o número de teléfono"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Solo ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_rf",
              product: "air"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_mobile",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option4",
              product: "air"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sí, se requiere una."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Las credenciales deben entregarse a una dirección de correo electrónico o a un número de teléfono."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Se pueden proporcionar ambos, pero las ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "credenciales móviles"
          }), " requieren al menos uno."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El correo electrónico es gratuito. Los SMS generan cargos."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "excelFormulas",
      children: "Fórmulas de Excel para la prevalidación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Antes de cargar los datos, utilice las siguientes fórmulas en las ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "columnas auxiliares"
      }), " para verificar los datos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validación-de-correos-electrónicos-o-números-de-teléfono-duplicados",
      children: "Validación de correos electrónicos o números de teléfono duplicados"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Detect Duplicate Emails or Phone Numbers\"",
        children: "=IF(E2=\"\", \"\", IF(COUNTIF(E$2:E2, E2)>1, \"Duplicate\", \"First Occurrence\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validación-del-formato-de-fecha",
      children: "Validación del formato de fecha"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate ISO 8601 Date Format (Column Q)\"",
        children: "=IF(Q2=\"\", \"\", IF(AND(LEN(Q2)=24, \n  ISNUMBER(VALUE(MID(Q2,1,4))), MID(Q2,5,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,6,2))), MID(Q2,8,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,9,2))), MID(Q2,11,1)=\"T\", \n  ISNUMBER(VALUE(MID(Q2,12,2))), MID(Q2,14,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,15,2))), MID(Q2,17,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,18,2))), MID(Q2,20,1)=\".\", \n  ISNUMBER(VALUE(MID(Q2,21,3))), RIGHT(Q2,1)=\"Z\"), \n  \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validación-del-formato-de-correo-electrónico",
      children: "Validación del formato de correo electrónico"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate Email Format (Column E)\"",
        children: "=IF(TRIM(E2)=\"\", \"\", IF(AND(\n  ISNUMBER(FIND(\"@\", E2)),\n  ISNUMBER(FIND(\".\", E2)),\n  FIND(\"@\", E2) > 1,\n  FIND(\".\", E2, FIND(\"@\", E2)) > FIND(\"@\", E2) + 1,\n  LEN(E2) - LEN(SUBSTITUTE(E2, \"@\", \"\")) = 1,\n  ISERROR(FIND(\" \", E2))\n), \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-errors",
      children: "¿Aparecen errores?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "¿Descargó la plantilla correcta y no agregó columnas adicionales?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "¿Se han completado todos los campos obligatorios para los usuarios que recibirán una credencial móvil?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "¿La dirección de correo electrónico y el número de teléfono son únicos tanto en el archivo como entre los usuarios existentes?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "¿Los formatos de fecha y de correo electrónico son correctos según lo indicado arriba?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El equipo de soporte no ofrece edición de archivos. Si el archivo no se sube, utilice las herramientas de validación anteriores para identificar y resolver el problema."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Este documento está diseñado para permitir cargas exitosas sin intervención manual por parte del equipo de soporte."
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