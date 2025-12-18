"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6188"], {
6787: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_before_start_mdx_f65_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-before-start-mdx-f65.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_before_start_mdx_f65_namespaceObject = JSON.parse('{"id":"platform/biostar_x/before-start","title":"Antes de comenzar","description":"Esta guía cubre lo que debe saber antes de iniciar BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/before-start.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/before-start","permalink":"/docs/es/platform/biostar_x/before-start","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/before-start.mdx","tags":[],"version":"current","frontMatter":{"id":"before-start","title":"Antes de comenzar","description":"Esta guía cubre lo que debe saber antes de iniciar BioStar X.","keywords":["Guía de instalación","MariaDB","SQL Server","Base de datos"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Resúmen","permalink":"/docs/es/platform/biostar_x/overview"},"next":{"title":"지원 장치","permalink":"/docs/es/platform/biostar_x/supported-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/before-start.mdx


const frontMatter = {
	id: 'before-start',
	title: 'Antes de comenzar',
	description: 'Esta guía cubre lo que debe saber antes de iniciar BioStar X.',
	keywords: [
		'Guía de instalación',
		'MariaDB',
		'SQL Server',
		'Base de datos'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Notas previas a la instalación",
  "id": "before",
  "level": 2
}, {
  "value": "Verificar la base de datos",
  "id": "checkdb",
  "level": 2
}, {
  "value": "MariaDB",
  "id": "mariadb",
  "level": 3
}, {
  "value": "MS SQL Server",
  "id": "ms-sql-server",
  "level": 3
}, {
  "value": "Configurar el puerto",
  "id": "port-setting",
  "level": 4
}, {
  "value": "Crear el usuario y la base de datos",
  "id": "create-a-user-and-database",
  "level": 4
}, {
  "value": "Pequeña (menos de 10 GB)",
  "id": "pequeña-menos-de-10-gb",
  "level": 4
}, {
  "value": "Organización mediana (10 ~ 500 GB)",
  "id": "organización-mediana-10--500-gb",
  "level": 4
}, {
  "value": "Empresa (500 GB o más)",
  "id": "empresa-500-gb-o-más",
  "level": 4
}, {
  "value": "Configurar la base de datos de autenticación de Windows",
  "id": "windows-authentication-database-settings",
  "level": 4
}, {
  "value": "Configuración previa",
  "id": "preliminary-setting",
  "level": 5
}, {
  "value": "Configurar la autenticación de Windows de MS SQL con una cuenta de Active Directory",
  "id": "settingsforusingmssql",
  "level": 5
}, {
  "value": "Configuración de la base de datos",
  "id": "database-setting",
  "level": 5
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
    h5: "h5",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, NextItem, NextStep, Step, Steps} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Esta guía proporciona información importante que debe conocer antes de iniciar ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " es compatible con sistemas operativos de 64 bits. Verifique los requisitos del sistema de la PC donde desea instalar ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " y luego instálelo."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before",
      children: "Notas previas a la instalación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Antes de instalar ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", verifique lo siguiente y continúe con la instalación."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " solo se puede instalar en un sistema operativo de 64 bits."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si está utilizando MS SQL 2012 Express, consulte el siguiente enlace para instalar el ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/download/details.aspx?id=49996",
            children: "Service Pack 3"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si está utilizando MS SQL 2014 Express, consulte el siguiente enlace para instalar el ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=53168",
            children: "Service Pack 2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si está utilizando MS SQL Server, configure la opción ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collation"
          }), " del servidor y de cada tabla en CI (sin distinción de mayúsculas)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Al hacer una copia de seguridad de una base de datos de una versión anterior de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ", desactive todos los servicios antes de continuar. Además, si no respalda y restaura juntas las bases de datos AC y TA, no podrá utilizar la base de datos TA."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si desea respaldar la base de datos de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ", asegúrese de respaldar también el ", (0,jsx_runtime.jsx)(_components.em, {
            children: "enckey"
          }), " en la carpeta ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar X\\util"
          }), " y los archivos ", (0,jsx_runtime.jsx)(_components.em, {
            children: "system.conf"
          }), " y ", (0,jsx_runtime.jsx)(_components.em, {
            children: "setting.conf"
          }), " en la carpeta ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar X"
          }), ". De lo contrario, la base de datos no estará disponible."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "service-settings",
            children: "lo siguiente"
          }), " para conocer el puerto predeterminado que utiliza ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Si otro programa ocupa el mismo puerto, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " podría no funcionar correctamente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checkdb",
      children: "Verificar la base de datos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si está utilizando una base de datos configurada por el usuario, verifique los siguientes elementos antes de instalar ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mariadb",
      children: "MariaDB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cambie las siguientes opciones en la sección ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[mysql]"
          }), " del archivo ", (0,jsx_runtime.jsx)(_components.em, {
            children: "my.cnf"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='my.cnf'",
            children: "character-set-server=utf8\ncollation-server=utf8_unicode_ci\nmax_connections = 600\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Agregue las siguientes opciones en la sección ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[mysql]"
          }), " del archivo ", (0,jsx_runtime.jsx)(_components.em, {
            children: "my.cnf"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='my.cnf'",
            children: "log_bin_trust_function_creators = 1\ngroup_concat_max_len = 102400\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Conéctese a MariaDB con privilegios de root y ejecute el siguiente comando."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title='SQL'",
            children: "GRANT SUPER ON . TO user_id@'localhost' IDENTIFIED BY \"password\";\nGRANT SUPER ON . TO user_id@'%' IDENTIFIED BY \"password\";\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ms-sql-server",
      children: "MS SQL Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configure las opciones de ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Collation"
            }), " para todas las bases de datos y tablas como insensibles a mayúsculas (CI)."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los nombres de base de datos solo pueden contener números, letras en inglés (distinguiendo mayúsculas y minúsculas) y los símbolos especiales ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "port-setting",
      children: "Configurar el puerto"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ejecute ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Configuration Manager"
          }), " y establezca ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TCP/IP Protocol"
          }), " para ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Protocols for SQLEXPRESS"
          }), " en el número de puerto deseado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Reinicie los ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Services"
          }), " para aplicar los ajustes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "create-a-user-and-database",
      children: "Crear el usuario y la base de datos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicie sesión con la cuenta ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "sa"
          }), " usando ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Authentication"
          }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Management Studio"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic derecho en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Security"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "New Login"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese el nombre deseado en el campo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Login Name"
          }), " y seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Authentication"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese la contraseña deseada en los campos ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Password"
          }), " y ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirm password"
          }), ", luego desmarque ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enforce password policy"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para guardar los ajustes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic derecho en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " y seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "New Database"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingrese el nombre deseado en el campo Database Name."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese el nombre de inicio de sesión configurado en el paso ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3"
          }), " en el campo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Owner"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Establezca los siguientes valores recomendados en la sección ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Database Files"
        }), ". Configure ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Autogrowth"
        }), " usando tamaños fijos (MB/GB) en lugar de porcentajes y evite incrementos muy pequeños que puedan causar eventos de crecimiento frecuentes."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-before-start-new-database.png",
        caption: true
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "pequeña-menos-de-10-gb",
        children: "Pequeña (menos de 10 GB)"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Datos: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size"
            }), " 1 - 5 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autogrowth"
            }), " 100 - 512 MB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Registro: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size"
            }), " 512 MB - 2 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autogrowth"
            }), " 100 - 512 MB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TempDB: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size"
            }), " 512 MB - 1 GB"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["p. ej. Datos 2 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Autogrowth"
          }), " 256 MB) / Registro 1 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Autogrowth"
          }), " 128 MB) / TempDB 512 MB"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "organización-mediana-10--500-gb",
        children: "Organización mediana (10 ~ 500 GB)"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Datos: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size"
            }), " 10 - 50 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autogrowth"
            }), " 512 MB - 1 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Registro: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size"
            }), " 5 - 10 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autogrowth"
            }), " 512 MB - 1 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TempDB: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size"
            }), " 2 - 8 GB"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["p. ej. Datos 20 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Autogrowth"
          }), " 1 GB) / Registro 5 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Autogrowth"
          }), " 512 MB) / TempDB 4 GB"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "empresa-500-gb-o-más",
        children: "Empresa (500 GB o más)"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Datos: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size"
            }), " 100 GB o más, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autogrowth"
            }), " 1 - 4 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Registro: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size"
            }), " 20 ~ 100 GB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autogrowth"
            }), " 1 ~ 4 GB"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["TempDB: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size"
            }), " 8 - 32 GB"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["p. ej. Datos 100 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Autogrowth"
          }), " 2 GB) / Registro 50 GB (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Autogrowth"
          }), " 2 GB) / TempDB 16 GB"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["No configure ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Autogrowth"
            }), " con incrementos muy pequeños ni deje ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maxsize"
            }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unlimited"
            }), ". En su lugar, establezca límites apropiados según el crecimiento esperado y supervise el uso."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "En entornos con muchas transacciones, respalde los registros periódicamente para evitar que el tamaño de los archivos de registro aumente."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "windows-authentication-database-settings",
      children: "Configurar la base de datos de autenticación de Windows"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "preliminary-setting",
          children: "Configuración previa"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si utiliza ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Microsoft Windows Active Directory"
          }), ", complete las configuraciones previas que se indican a continuación antes de configurar la base de datos de autenticación de Windows."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Inicie sesión con una cuenta de administrador en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Management Studio"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic derecho en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Security"
              }), " y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "New Login"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Windows Authentication"
              }), " y luego haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Search"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la ventana ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select a user or group"
              }), ", haga clic en Ubicación, seleccione la ruta de Active Directory y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ingrese el nombre de usuario en el campo ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Enter object name to select"
              }), ", luego haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Check Names"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Roles"
              }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select a page"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " y luego haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User Mapping"
              }), " en la página ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Selecciona ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "master"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " y establece ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Default Schema"
              }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "dbo"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " para guardar los ajustes."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "settingsforusingmssql",
          children: "Configurar la autenticación de Windows de MS SQL con una cuenta de Active Directory"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ejecuta ", (0,jsx_runtime.jsx)(_components.em, {
                children: "services.msc"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la ventana ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Properties"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Logon"
              }), " de la base de datos de SQL Server, selecciona ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Specify account"
              }), " e inicia sesión como usuario de dominio."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Agrega el puerto 1433 como excepción en el Firewall de Windows."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Crea las bases de datos vacías ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " en SQL Server con autenticación ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Configura al usuario de dominio para que use la autenticación de Windows en SQL Server y asigna todos los permisos excepto ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " a las bases de datos ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Conecta todos los servicios, excepto el equipo local, en ", (0,jsx_runtime.jsx)(_components.em, {
                children: "services.msc"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Establece al usuario de dominio como administrador en el equipo de servicio local."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Conéctate a MS SQL ODBC."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "database-setting",
          children: "Configuración de la base de datos"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Después de ejecutar ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Configuration Manager"
              }), ", haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client Protocol"
              }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Native Client"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Selecciona ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP/IP"
              }), " y verifica el puerto predeterminado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Protocols for SQL EXPRESS"
              }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Network Configuration"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Comprueba que el puerto ODBC en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP/IP"
              }), " esté configurado con el mismo valor que el puerto predeterminado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Inicie sesión con una cuenta de administrador en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Management Studio"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Security"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Log In"
              }), ", luego haz doble clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "NT AUTHORITY\\SYSTEM"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Roles"
              }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select a page"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Selecciona ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "public"
              }), " y ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), ", luego haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User Mapping"
              }), " en la página ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Selecciona las bases de datos ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " y haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " para guardar."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "system-requirements",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Conoce los requisitos mínimos del sistema para instalar ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "express-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Esta guía proporciona un método de instalación sencillo para usuarios primerizos."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "custom-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Guía al usuario para configurar una instalación personalizada que se integre con una base de datos que ya haya instalado."
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