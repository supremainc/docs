"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["83660"], {
54476: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_export_import_user_info_mdx_f6f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-export-import-user-info-mdx-f6f.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_export_import_user_info_mdx_f6f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/export-import-user-info","title":"Exportar/Importar Información De Usuarios","description":"Utiliza la información de usuarios de una versión anterior o de otro servidor exportando o importando los datos de usuario.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/export-import-user-info.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/export-import-user-info","permalink":"/docs/es/platform/biostar_x/export-import-user-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/export-import-user-info.mdx","tags":[],"version":"current","frontMatter":{"id":"export-import-user-info","title":"Exportar/Importar Información De Usuarios","description":"Utiliza la información de usuarios de una versión anterior o de otro servidor exportando o importando los datos de usuario.","keywords":["Información de usuarios","Exportar","Importar"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Rastrear Historial De Acceso De Usuarios","permalink":"/docs/es/platform/biostar_x/trace-user-access-log"},"next":{"title":"Administrar grupos de acceso","permalink":"/docs/es/platform/biostar_x/view-user-by-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/export-import-user-info.mdx


const frontMatter = {
	id: 'export-import-user-info',
	title: 'Exportar/Importar Información De Usuarios',
	description: 'Utiliza la información de usuarios de una versión anterior o de otro servidor exportando o importando los datos de usuario.',
	keywords: [
		'Información de usuarios',
		'Exportar',
		'Importar'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Exportar o importar CSV",
  "id": "csvexportimport",
  "level": 2
}, {
  "value": "Exportar CSV",
  "id": "csvexport",
  "level": 3
}, {
  "value": "Importar CSV",
  "id": "csvimport",
  "level": 3
}, {
  "value": "Exportar o importar archivos de datos",
  "id": "exportimportdatafile",
  "level": 2
}, {
  "value": "Exportar datos",
  "id": "exportdata",
  "level": 3
}, {
  "value": "Importar datos",
  "id": "importdata",
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
  }, {Cmd, Details, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Utiliza la información de usuarios de una versión anterior o de otro servidor exportando o importando los datos de usuario."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csvexportimport",
      children: "Exportar o importar CSV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guarda la información de usuarios seleccionada como un archivo CSV o carga archivos CSV guardados. Transfiere fácilmente la información de usuarios mediante archivos CSV."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si existen campos de usuario personalizados que no se han añadido a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ", el archivo CSV no se importará correctamente. Para más información sobre cómo añadir campos de usuario personalizados, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#custom-field",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si la información de usuarios se introduce en un idioma distinto del inglés o el coreano, guarda el archivo CSV en formato UTF-8."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csvexport",
      children: "Exportar CSV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona la casilla junto a los usuarios que deseas guardar como archivo CSV en la lista de usuarios. Selecciona más de un usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha de la pantalla y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-export-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), ", ingresa ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.exportReason"
          }), " (opcional) y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.download"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-export-csv-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Guarda el archivo CSV en la ubicación deseada de tu ruta local."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "team.menu.export.exportReason"
        }), " es opcional. Consulta los registros de ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "team.menu.export.exportReason"
        }), " en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.system.root"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.system.auditTrail"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csvimport",
      children: "Importar CSV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la parte superior derecha de la pantalla y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.csv"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona el archivo CSV guardado localmente."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configura ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.importStartRow"
          }), " en la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Los campos de datos de usuario del archivo CSV se asignarán automáticamente a los campos correspondientes en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.reMapping",
            product: "2"
          }), " para reasignar campos con el mismo nombre."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-02.png",
          width: "50%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Elige si mantener los datos de usuarios ya registrados con sus IDs en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " o sobrescribirlos con la información del archivo CSV y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-03.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si ocurre un error al importar el archivo CSV, puedes volver a revisar y subir solo los datos CSV que provocaron el error."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Las tarjetas de acceso móvil se pueden emitir mediante la importación de CSV. Al utilizar el sitio regular, se descontará un crédito del Airfob Portal por cada tarjeta de acceso móvil emitida al completar la importación. Para evitar emitir tarjetas de acceso móvil, desactiva la asignación."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el archivo CSV contiene datos idénticos a las tarjetas de acceso móvil ya emitidas a los usuarios registrados en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ", puedes elegir mantener o sobrescribir los datos; en ese caso, se conservarán las tarjetas de acceso móvil existentes."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el archivo CSV contiene datos diferentes de las tarjetas de acceso móvil emitidas a los usuarios registrados en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ", mantener los datos conservará las tarjetas actuales, mientras que sobrescribir emitirá nuevas tarjetas de acceso móvil a los usuarios correspondientes."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al emitir tarjetas de acceso móvil mediante la importación de CSV en un sitio dinámico, asegúrate de introducir valores en los campos ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mobile_start_datetime"
            }), " y ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mobile_expiry_datetime"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los códigos QR de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " no se pueden emitir mediante la importación de CSV."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los datos faciales de usuarios se pueden inscribir mediante la importación de CSV. Para más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "batch-import-face#import-csv",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los PIN de usuario se pueden inscribir mediante la importación de CSV. Para más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "enroll-credential-pin",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si añades columnas que no coinciden con el archivo CSV guardado, no podrás importar el archivo en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exportimportdatafile",
      children: "Exportar o importar archivos de datos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La información de usuarios se puede almacenar en un dispositivo de almacenamiento externo (USB) para importarla a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " o a los dispositivos. Se pueden transferir hasta 500,000 registros de usuarios del servidor a los dispositivos o entre dispositivos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los datos exportados desde dispositivos con firmware obsoleto no se pueden importar a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ". Utiliza siempre la versión más reciente del firmware."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No se pueden importar datos si se utilizan formatos de plantilla de huella dactilar diferentes. Por ejemplo, los datos exportados desde dispositivos que utilizan el formato de plantilla de huella dactilar Suprema no se pueden importar en dispositivos que utilizan el formato de plantilla ISO."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al importar datos de usuario, si ya existen credenciales de huella y rostro almacenadas en el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ", se sobrescribirán con los datos existentes."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No se pueden importar datos desde dispositivos con versiones de firmware obsoletas. Actualiza el firmware del dispositivo a una versión compatible."
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "Ver dispositivos y versiones de firmware compatibles"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2 versión de firmware 1.9.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation A2 versión de firmware 1.8.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceStation 2 versión de firmware 1.4.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceStation F2 versión de firmware 2.2.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "X-Station 2 versión de firmware 1.0.0 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 3 versión de firmware 1.3.1 o superior"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2a versión de firmware 1.0.0 o superior"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exportdata",
      children: "Exportar datos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona la casilla junto a los usuarios que deseas exportar de la lista de usuarios. Selecciona más de un usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha de la pantalla y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.dataFile"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-export-data.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.dialog.exprotDataFile.title"
          }), ", selecciona el dispositivo al que aplicar el archivo de datos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-export-data-select-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingresa ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.exportReason"
          }), " (opcional) y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Guarda el archivo de datos en la ruta local deseada."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La exportación del archivo de datos incluye fotos de perfil de usuario, IDs, nombres, periodos de validez, grupos de acceso, PIN, modos de autenticación privada, credenciales (rostro, huella, tarjeta, tarjeta móvil, rostro, QR/Barcode) e información de nivel de seguridad uno a uno."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Seleccionar un dispositivo incorrecto para aplicar el archivo de datos puede hacer que el dispositivo no lo reconozca."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.export.exportReason"
            }), " es opcional. Consulta los registros de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.export.exportReason"
            }), " en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.system.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.system.auditTrail"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para importar en los dispositivos un archivo exportado desde ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ", cambia el nombre del archivo como se indica a continuación para que el dispositivo lo reconozca. El formato de nombre de archivo se ajustará para que sea reconocido automáticamente en futuras actualizaciones de firmware del dispositivo."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsxs)(_components.em, {
          children: [(0,jsx_runtime.jsx)("b", {
            children: "BioStarX"
          }), "_YYYYMMDD_HHMMSS.tgz"]
        }), " → ", (0,jsx_runtime.jsxs)(_components.em, {
          children: [(0,jsx_runtime.jsx)("b", {
            children: "BioStar2"
          }), "_YYYYMMDD_HHMMSS.tgz"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importdata",
      children: "Importar datos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha de la pantalla y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.dataFile"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-data.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el archivo de datos (", (0,jsx_runtime.jsx)(_components.em, {
            children: ".tgz"
          }), ") guardado localmente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aparecerá un mensaje en la pantalla si el archivo de datos se importa correctamente."
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