"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["68505"], {
49549: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_batch_import_face_mdx_8c1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-batch-import-face-mdx-8c1.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_batch_import_face_mdx_8c1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/batch-import-face","title":"Inscribir rostros por lotes","description":"Aprende a inscribir rostros de usuarios por lotes.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/batch-import-face.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/batch-import-face","permalink":"/docs/es/platform/biostar_x/batch-import-face","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/batch-import-face.mdx","tags":[],"version":"current","frontMatter":{"id":"batch-import-face","title":"Inscribir rostros por lotes","description":"Aprende a inscribir rostros de usuarios por lotes.","keywords":["Rostro","Enrolamiento","Lote","Credenciales","Autenticación"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Iniciar sesión con autenticación multifactor","permalink":"/docs/es/platform/biostar_x/login-with-mfa"},"next":{"title":"Migracion Visual Face","permalink":"/docs/es/platform/biostar_x/migration-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/batch-import-face.mdx


const frontMatter = {
	id: 'batch-import-face',
	title: 'Inscribir rostros por lotes',
	description: 'Aprende a inscribir rostros de usuarios por lotes.',
	keywords: [
		'Rostro',
		'Enrolamiento',
		'Lote',
		'Credenciales',
		'Autenticación'
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
  "value": "Inscribir con importación de archivo CSV",
  "id": "import-csv",
  "level": 2
}, {
  "value": "Importar rostro",
  "id": "import-face",
  "level": 2
}, {
  "value": "Inscripción facial mediante dispositivo móvil",
  "id": "mobile-device",
  "level": 2
}, {
  "value": "Antes de comenzar",
  "id": "antes-de-comenzar-1",
  "level": 3
}, {
  "value": "Enviar enlace de inscripción de rostro",
  "id": "enviar-enlace-de-inscripción-de-rostro",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Aprende a inscribir rostros de usuarios por lotes. Inscribe los rostros de varios usuarios a la vez mediante la función de importación con un archivo CSV o cargando fotografías de rostro cuyos nombres de archivo coincidan con los ID de usuario. Como alternativa, envía enlaces de inscripción de rostro por correo electrónico a varios usuarios, lo que les permitirá inscribir sus rostros directamente desde sus dispositivos móviles."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prepara las imágenes de rostro de los usuarios antes de comenzar la inscripción por lotes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Los archivos de imagen de rostro deben almacenarse en una sola carpeta. Los nombres de archivo de las imágenes de rostro deben coincidir con los ID de usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El tamaño máximo de archivo para los tipos de imagen admitidos es de 10MB."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Los formatos de imagen admitidos incluyen JPG, JPEG y PNG."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "import-csv",
      children: "Inscribir con importación de archivo CSV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inscribe rostros de usuarios en bloque mediante la función de importación CSV."
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
          children: "En la lista de usuarios, marca la casilla del usuario cuyo rostro deseas inscribir. Selecciona más de un usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha de la pantalla y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de exportación CSV, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.download"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Guarda el archivo CSV en la ubicación deseada de tu ruta local."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Abre el archivo CSV y agrega las columnas ", (0,jsx_runtime.jsx)(_components.code, {
            children: "face_image_file1"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "face_image_file2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingresa los nombres de archivo de las imágenes de rostro, incluidas las extensiones, en las columnas agregadas y guarda."
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
          children: "Selecciona el archivo CSV modificado."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de importación CSV, establece ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.importStartRow"
          }), " y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Elige si deseas sobrescribir los datos de usuario ya registrados en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " con la información del archivo CSV y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-03.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.browse",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.visualFaceImageFolder",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-face-import-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona la ruta donde se almacenan las imágenes de rostro y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.upload",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para completar la importación CSV, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si ocurre un error al importar el archivo CSV, puedes volver a revisar y subir solo los datos CSV que provocaron el error."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Se recomienda usar la misma ruta para el archivo CSV y los archivos de imágenes de rostro que se van a importar."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "import-face",
      children: "Importar rostro"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puedes importar imágenes de rostro con nombres de archivo que coincidan con los ID de usuario e inscribirlas para autenticación facial. Prepara los archivos de imágenes de rostro de los usuarios antes de comenzar. Los nombres de archivo de las imágenes de rostro deben coincidir con los ID de usuario."
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
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.face"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceImport.title"
          }), ", haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.browse"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-face-import.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona la ruta donde se almacenan las imágenes de rostro."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona el método para cargar imágenes de rostro en la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceImport.newImport"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.visualFaceImport.default"
              }), ": Carga imágenes cuyos nombres de archivo coinciden con los ID de usuario."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.visualFaceImport.createUser"
              }), ": Si los ID de usuario registrados coinciden con los nombres de archivo de las imágenes de rostro, se cargan las imágenes; si no coinciden, se crea un nuevo usuario usando el nombre de archivo como ID de usuario y se inscribe como método de autenticación facial."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFileImport.duplicateUser"
          }), ", selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.duplicateUser.preserve",
            product: "2"
          }), " o ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.duplicateUser.overwrite",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.csvImport.duplicateUser.preserve"
              }), ": Conserva las imágenes de rostro de los usuarios registrados."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.csvImport.duplicateUser.overwrite"
              }), ": Sobrescribe las imágenes de rostro de los usuarios registrados con las nuevas imágenes importadas."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para usar las imágenes de rostro importadas como imágenes de perfil, haz clic en la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.visualFace.useAsProfileImage"
          }), " para habilitarla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.start"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si ocurre un error al importar un archivo de imagen de rostro, aparece una lista de fotos con errores. Revisa la lista y vuelve a intentar."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Se puede importar un máximo de 1 imagen de rostro por ID de usuario."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobile-device",
      children: "Inscripción facial mediante dispositivo móvil"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Envía enlaces de inscripción de rostro a los usuarios por correo electrónico. Los usuarios pueden acceder al enlace en sus dispositivos móviles para inscribir sus rostros directamente."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "antes-de-comenzar-1",
      children: "Antes de comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Completa la configuración de información de correo electrónico, incluyendo la configuración SMTP, antes de usar la función de inscripción facial móvil. Para más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-email-setting",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Debes habilitar la función ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.remoteAccess.root"
          }), " para usar la inscripción facial móvil. Para más información sobre ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.remoteAccess.root"
          }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-remote-access",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enviar-enlace-de-inscripción-de-rostro",
      children: "Enviar enlace de inscripción de rostro"
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
          children: "En la lista de usuarios, marca la casilla del usuario cuyo rostro deseas inscribir. Selecciona más de un usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha de la pantalla y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.sendFaceMobileEnrollLink"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-mobile-link.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de mensajes, haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.ok"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-mobile-link-warning.png",
          width: "60%"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El enlace de inscripción de rostro se envía al correo electrónico de los usuarios seleccionados. Una vez que los usuarios completen la carga, su credencial de rostro se añade a sus perfiles de usuario."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Puedes comprobar el estado de envío de correos electrónicos en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "monitoring.auditTrail",
              product: "2"
            }), ". Para más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-audit-trail",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El idioma que se muestra en la página a la que se accede mediante el enlace móvil de inscripción de rostro sigue la configuración de idioma del navegador utilizado en el dispositivo móvil."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Cuando el usuario accede al enlace móvil de inscripción de rostro enviado, el servicio de inscripción de rostro se ejecutará como se muestra a continuación. Sigue las instrucciones en la pantalla."
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-new-user-credential-face-mobile-app.png",
            className: "none"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El tamaño máximo de archivo para los tipos de imagen admitidos es de 10MB."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los formatos de imagen admitidos incluyen JPG, JPEG y PNG."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El enlace móvil de inscripción de rostro enviado caducará después de 24 horas."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Una vez que el proceso de inscripción móvil de rostro se complete correctamente tras cargar una fotografía de rostro, aparece un mensaje de éxito de inscripción en la pantalla. Si la inscripción falla, se muestra un mensaje de error y el motivo, y el usuario puede volver a intentar la inscripción facial visual con una fotografía de rostro diferente."
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