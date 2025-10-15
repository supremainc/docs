"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2945"], {
52652: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_backup_mdx_339_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-system-backup-mdx-339.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_backup_mdx_339_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-system-backup","title":"System Backup","description":"You can back up key information such as the database of **BioStar X**, various settings, and keys using the system backup menu.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-backup.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-system-backup","permalink":"/docs/en/platform/biostar_x/settings-system-system-backup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-system-backup.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-system-backup","title":"System Backup","description":"You can back up key information such as the database of **BioStar X**, various settings, and keys using the system backup menu.","keywords":["System Backup","backup","Automatic backup","Manual backup","Data protection","Restore"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Audit Trail","permalink":"/docs/en/platform/biostar_x/settings-system-audit-trail"},"next":{"title":"System Restore","permalink":"/docs/en/platform/biostar_x/settings-system-system-restore"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-backup.mdx


const frontMatter = {
	id: 'settings-system-system-backup',
	title: 'System Backup',
	description: 'You can back up key information such as the database of **BioStar X**, various settings, and keys using the system backup menu.',
	keywords: [
		'System Backup',
		'backup',
		'Automatic backup',
		'Manual backup',
		'Data protection',
		'Restore'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Manual backup",
  "id": "manual-backup",
  "level": 2
}, {
  "value": "Automatic backup settings",
  "id": "automatic-backup-settings",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can back up key information such as the database of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", various settings, and keys. Use the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.backup",
        product: "2"
      }), " feature to prevent data loss on the server or when migrating to a new PC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The supported backup methods are as follows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Backup"
          }), ": The user manually creates the backup file."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Automatic Backup"
          }), ": The system automatically creates backup files at predefined intervals."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When restoring ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " from a backup file created on a previous PC to a new PC, you need to reissue the license."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the SQL Server database and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " are installed on different servers, you cannot use ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " system backup and restore."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on system restore, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-system-restore",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manual-backup",
      children: "Manual backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users can create backup files manually."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup",
            product: "2"
          }), " on the left sidebar of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-system-backup-general.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.general",
            product: "2"
          }), " section, set the path to save the backup file and the maximum number of backup files."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.filePath",
                product: "2"
              }), ": Enter the path where the backup file will be saved. The save path should be an existing directory path."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.numberFileToKeep",
                product: "2"
              }), ": Set the maximum number of backup files."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To create a backup file, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "backup.backupNow",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Backup files are saved in ", (0,jsx_runtime.jsx)(_components.em, {
        children: "zip"
      }), " format at the path specified in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "backup.filePath",
        product: "2"
      }), " option. The file name is generated in the format ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BioStar_X_Backup_YYYYMMDD_HHMMSS.zip"
      }), ". Here, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYYMMDD"
      }), " represents the backup date, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HHMMSS"
      }), " represents the backup time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the maximum number of backups are exceeded, the oldest backup files are automatically deleted."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "backup.numberFileToKeep",
              product: "2"
            }), ", only numbers between 1 and 100 are entered."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "automatic-backup-settings",
      children: "Automatic backup settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you set automatic backup, the system creates backup files at predefined intervals."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup",
            product: "2"
          }), " on the left sidebar of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-system-backup-automatic.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.autoBackup",
            product: "2"
          }), " section, select the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.backup.frequency",
            product: "2"
          }), " option."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.daily",
                product: "2"
              }), ": Automatically back up daily. Set the backup time in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), " option."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.weekly",
                product: "2"
              }), ": Automatically back up weekly. Set the day for automatic backup in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.day",
                product: "2"
              }), " option, and set the backup time in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), " option."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.monthly",
                product: "2"
              }), ": Automatically back up monthly. Set the date for automatic backup in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.date",
                product: "2"
              }), " option, and set the backup time in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "backup.time",
                product: "2"
              }), " option."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Backup files are saved in ", (0,jsx_runtime.jsx)(_components.em, {
        children: "zip"
      }), " format at the path specified in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.backup.general",
        product: "2"
      }), " section's ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "backup.filePath",
        product: "2"
      }), " option. The file name is generated in the format ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BioStar_X_Backup_YYYYMMDD_HHMMSS.zip"
      }), ". Here, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "YYYYMMDD"
      }), " represents the backup date, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HHMMSS"
      }), " represents the backup time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you select the automatic backup frequency as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "backup.monthly",
              product: "2"
            }), " and set the date to 29, 30, or 31, automatic backups will not occur in months without that date."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The time is based on the standard time zone set in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.preferences.root"
            }), ". For more information on setting the time zone, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-preferences#language-timezone",
              children: "the following"
            }), "."]
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