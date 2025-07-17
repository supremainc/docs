"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3659"], {
72574: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_before_start_mdx_047_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-before-start-mdx-047.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_before_start_mdx_047_namespaceObject = JSON.parse('{"id":"platform/biostar_x/before-start","title":"Before start","description":"This guide covers what you need to know before starting BioStar X.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/before-start.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/before-start","permalink":"/docs/en/platform/biostar_x/before-start","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/before-start.mdx","tags":[],"version":"current","frontMatter":{"id":"before-start","title":"Before start","description":"This guide covers what you need to know before starting BioStar X.","keywords":["Installation Guide","MariaDB","SQL Server","Database"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Overview","permalink":"/docs/en/platform/biostar_x/overview"},"next":{"title":"System Minimum Requirements","permalink":"/docs/en/platform/biostar_x/system-requirements"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/before-start.mdx


const frontMatter = {
	id: 'before-start',
	title: 'Before start',
	description: 'This guide covers what you need to know before starting BioStar X.',
	keywords: [
		'Installation Guide',
		'MariaDB',
		'SQL Server',
		'Database'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Pre-installation Notes",
  "id": "before",
  "level": 2
}, {
  "value": "Check the Database",
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
  "value": "Setting the port",
  "id": "port-setting",
  "level": 4
}, {
  "value": "Creating the user and database",
  "id": "create-a-user-and-database",
  "level": 4
}, {
  "value": "Setting the Windows Authentication database",
  "id": "windows-authentication-database-settings",
  "level": 4
}, {
  "value": "Presetting",
  "id": "preliminary-setting",
  "level": 5
}, {
  "value": "Settings for using MS SQL with Windows Authentication through Active Directory",
  "id": "settings-for-using-ms-sql",
  "level": 5
}, {
  "value": "Setting the database",
  "id": "database-setting",
  "level": 5
}, {
  "value": "Next step",
  "id": "next-step",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Column, Columns, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This guide provides important information you should know before starting ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " supports 32-bit and 64-bit operating systems. Check the system requirements of the PC where you want to install ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ", then install it."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before",
      children: "Pre-installation Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before installing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", check the following and proceed with the installation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " can only be installed on a 64bit operating system."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you are using Windows 8.1, refer to the following link to install the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://support.microsoft.com/help/2919355/windows-rt-8-1--windows-8-1--and-windows-server-2012-r2-update-april-2",
            children: "KB2919355 update"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you are using MS SQL 2012 Express, refer to the following link to install the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/download/details.aspx?id=49996",
            children: "Service Pack 3"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you are using MS SQL 2014 Express, refer to the following link to install ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=53168",
            children: "Service Pack 2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you are using MS SQL Server, set the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collation"
          }), " option of the server and each table to CI (Case-insensitive)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When backing up a database from an older version of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ", disable all services before proceeding. Furthermore, if you do not back up and restore the AC database and the TA database together, you will not be able to use the TA database."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you want to back up the database of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ", be sure to also back up the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "enckey"
          }), " in the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar X\\util"
          }), " folder and the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "system.conf"
          }), " and ", (0,jsx_runtime.jsx)(_components.em, {
            children: "setting.conf"
          }), " file in the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "\\Program Files\\BioStar X"
          }), " folder. Otherwise, the database will be unavailable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The default values for the ports used by ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " are as follows. If another program occupies the same port, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " may not work properly."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsx)(Column, {
              className: "text--left",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.webServerHttp",
                      product: "2"
                    }), ": 80"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.webSocket",
                      product: "2"
                    }), ": 9002"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.mariaDB",
                      product: "2"
                    }), ": 3312"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.tnaHttps",
                      product: "2"
                    }), ": 3002"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.webServerFastCgi",
                      product: "2"
                    }), ": 9000"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.gatewayHttps",
                      product: "2"
                    }), ": 5002"]
                  }), "\n"]
                }), "\n"]
              })
            }), (0,jsx_runtime.jsx)(Column, {
              className: "text--left",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.webServerHttps",
                      product: "2"
                    }), ": 443"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.apiPort",
                      product: "2"
                    }), ": 9010"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.tnaHttp",
                      product: "2"
                    }), ": 3000"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.tnaNgrok",
                      product: "2"
                    }), ": 52001"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.gatewayHttp",
                      product: "2"
                    }), ": 5000"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "port.reportHttp",
                      product: "2"
                    }), ": 4213"]
                  }), "\n"]
                }), "\n"]
              })
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checkdb",
      children: "Check the Database"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you are using a user-configured database, check the items below before installing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mariadb",
      children: "MariaDB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Please change the options below under the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[mysql]"
          }), " section in the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "my.cnf"
          }), " file."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='my.cnf'",
            children: "character-set-server=utf8\ncollation-server=utf8_unicode_ci\nmax_connections = 600\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Please add the options below under the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[mysql]"
          }), " section in the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "my.cnf"
          }), " file."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='my.cnf'",
            children: "log_bin_trust_function_creators = 1\ngroup_concat_max_len = 102400\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Connect to MariaDB with root privileges and execute the command below."
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
            children: ["Set the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Collation"
            }), " options for all databases and tables to be case-insensitive (CI)."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Database names can only contain numbers, English letters (case-sensitive), and special symbols ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "port-setting",
      children: "Setting the port"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Configuration Manager"
          }), " and set ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TCP/IP Protocol"
          }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Protocols for SQLEXPRESS"
          }), " to the desired port number."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Restart the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Services"
          }), " to apply the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "create-a-user-and-database",
      children: "Creating the user and database"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Log in with the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "sa"
          }), " account using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Authentication"
          }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Management Studio"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Right-click on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Security"
          }), " and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "New Login"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the desired name in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Login Name"
          }), " field and select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Server Authentication"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the desired password in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Password"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirm password"
          }), " fields, then uncheck ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enforce password policy"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " to save the settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Right-click on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "New Database"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the desired name in the Database Name field."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the login name set in step ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3"
          }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Owner"
          }), " field."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["It is recommended to set up the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Database Files"
        }), " section as shown below."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Initial Size (MB)"
            }), ": 3000"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Autogrowth/Maxsize"
            }), ": 10MB, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unlimited"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "In environments with many transactions, backup the logs periodically to ensure that the size of the log files does not increase."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "windows-authentication-database-settings",
      children: "Setting the Windows Authentication database"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "preliminary-setting",
          children: "Presetting"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you are using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Microsoft Windows Active Directory"
          }), ", complete the presets as below before setting up the Windows Authentication database."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Log in as an administrator account in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Management Studio"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Right-click on ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Security"
              }), " and click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "New Login"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Windows Authentication"
              }), " and then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Search"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click on the location in the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select a user or group"
              }), " window, select the Active Directory path, and click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter the user name in the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Enter object name to select"
              }), " field, then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Check Names"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click on ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Roles"
              }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select a page"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " and then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click on ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User Mapping"
              }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select page"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "master"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " and set the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Default Schema"
              }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "dbo"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " to save the settings."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "settings-for-using-ms-sql",
          children: "Settings for using MS SQL with Windows Authentication through Active Directory"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Run ", (0,jsx_runtime.jsx)(_components.em, {
                children: "services.msc"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Properties"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Logon"
              }), " window of the SQL Server database, select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Specify account"
              }), " and log in as a domain user."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Add port 1433 as an exception in the Windows Firewall."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Create empty ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " databases in SQL Server with ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " authentication."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Set the domain user to use Windows Authentication for SQL Server and assign all permissions except ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), " to the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " databases."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Connect all services except the local computer in ", (0,jsx_runtime.jsx)(_components.em, {
                children: "services.msc"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Set the domain user as an administrator on the local service computer."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Connect to MS SQL ODBC."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h5, {
          id: "database-setting",
          children: "Setting the database"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["After running the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Configuration Manager"
              }), ", click on ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client Protocol"
              }), " under ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Native Client"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP/IP"
              }), " and check the default port."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click on the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Protocols for SQL EXPRESS"
              }), " under ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Network Configuration"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Check if the ODBC port in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP/IP"
              }), " is set to the same value as the default port."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Log in as an administrator account in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "SQL Server Management Studio"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click on ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Security"
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Log In"
              }), ", then double-click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "NT AUTHORITY\\SYSTEM"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click on ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Roles"
              }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select a page"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "public"
              }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "sysadmin"
              }), ", then click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click on ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User Mapping"
              }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select page"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ac"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ta"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ve"
              }), " database and click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " to save."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-step",
      children: "Next step"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Find out the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "system-requirements",
            children: "minimum system requirements"
          }), " to install ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can quickly find out how to install ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " in the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "express-install",
            children: "following"
          }), "."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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