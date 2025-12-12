"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3257"], {
12010: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_batch_import_face_mdx_745_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-batch-import-face-mdx-745.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_batch_import_face_mdx_745_namespaceObject = JSON.parse('{"id":"platform/biostar_x/batch-import-face","title":"Batch Enroll Faces","description":"Learn how to batch enroll users\' faces.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/batch-import-face.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/batch-import-face","permalink":"/docs/en/platform/biostar_x/batch-import-face","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/batch-import-face.mdx","tags":[],"version":"current","frontMatter":{"id":"batch-import-face","title":"Batch Enroll Faces","description":"Learn how to batch enroll users\' faces.","keywords":["Face","Enrollment","Batch","Credentials","Authentication"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Login in with Multi-Factor Authentication","permalink":"/docs/en/platform/biostar_x/login-with-mfa"},"next":{"title":"Face Migration","permalink":"/docs/en/platform/biostar_x/migration-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/batch-import-face.mdx


const frontMatter = {
	id: 'batch-import-face',
	title: 'Batch Enroll Faces',
	description: 'Learn how to batch enroll users\' faces.',
	keywords: [
		'Face',
		'Enrollment',
		'Batch',
		'Credentials',
		'Authentication'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Before start",
  "id": "before-start",
  "level": 2
}, {
  "value": "Enroll with CSV file import",
  "id": "import-csv",
  "level": 2
}, {
  "value": "Import face",
  "id": "import-face",
  "level": 2
}, {
  "value": "Facial enrollment via mobile device",
  "id": "mobile-device",
  "level": 2
}, {
  "value": "Before start",
  "id": "before-start-1",
  "level": 3
}, {
  "value": "Send face enrollment link",
  "id": "send-face-enrollment-link",
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
      children: "Learn how to batch enroll users' faces. You can enroll faces of multiple users at once by using the import feature with a CSV file or by loading face pictures with file names that match user IDs. Alternatively, you can send face enrollment links via email to multiple users, allowing them to enroll faces directly from their mobile devices."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prepare user face images before starting batch enrollment."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Face image files must be stored in one folder. Face image file names must match user IDs."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The maximum file size for supported image types is 10MB."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supported image formats include JPG, JPEG, and PNG."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "import-csv",
      children: "Enroll with CSV file import"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can enroll users' faces in bulk using the CSV import feature."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the user list, check the checkbox of the user whose face you want to enroll. You can select more than one user."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button in the upper right corner of the screen and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the CSV export window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.download"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Save the CSV file to your desired location on your local path."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Open the CSV file and add ", (0,jsx_runtime.jsx)(_components.code, {
            children: "face_image_file1"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "face_image_file2"
          }), " columns."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the filenames of the face images, including the extensions, in the added columns and save."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcMoreW, {}), " at the top right of the screen and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.csv"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the modified CSV file."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the CSV import window appears, set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.importStartRow"
          }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Choose whether to overwrite user data already registered in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " with the information from the CSV file, and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-03.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.browse",
            product: "2"
          }), " button in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.visualFaceImageFolder",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-face-import-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the path where the face images are stored and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.upload",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To complete CSV import, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If an error occurs while importing the CSV file, you can recheck and upload only the CSV data that caused the error."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "It is recommended to use the same path for the CSV file and the face image files to be imported."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "import-face",
      children: "Import face"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can import face images with file names matching user IDs and enroll them for face authentication. Prepare user face image files before starting. Face image file names must match user IDs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button in the upper right corner and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.face"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceImport.title"
          }), " window appears, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.browse"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-face-import.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the path where the face images are stored."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the method to load face images in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFaceImport.newImport"
          }), " option."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.visualFaceImport.default"
              }), ": Loads images with filenames matching the user IDs."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.visualFaceImport.createUser"
              }), ": If registered user IDs match the face image filenames, the images are loaded; if they do not match, a new user is created using the file name as the user ID and enrolled as a face authentication method."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.visualFileImport.duplicateUser"
          }), " option, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.duplicateUser.preserve",
            product: "2"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.duplicateUser.overwrite",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.csvImport.duplicateUser.preserve"
              }), ": Preserves the face images of registered users."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.list.csvImport.duplicateUser.overwrite"
              }), ": Overwrites the face images of registered users with the newly imported face images."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To use the imported face images as profile images, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.visualFace.useAsProfileImage"
          }), " option to enable it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.start"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If an error occurs while importing a face image file, a list of photos with errors appears. Check the list and try again."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "A maximum of 1 face image can be imported per user ID."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobile-device",
      children: "Facial enrollment via mobile device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can send face enrollment links to users via email. Users can access the link on their mobile devices to enroll faces directly."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "before-start-1",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Complete the email information settings, including SMTP settings, before using the mobile face enrollment feature. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-email-setting",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You must enable the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.remoteAccess.root"
          }), " feature to use the mobile face enrollment feature. For more information on ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.remoteAccess.root"
          }), " refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-remote-access",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "send-face-enrollment-link",
      children: "Send face enrollment link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the user list, check the checkbox of the user whose face you want to enroll. You can select more than one user."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button in the upper right corner of the screen and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.sendFaceMobileEnrollLink"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-mobile-link.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the message window appears, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.ok"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-mobile-link-warning.png",
          width: "60%"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The face enrollment link is sent to the email of the selected users. Once the users complete the upload, their face credential is added to their user profiles."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can check the email sending status in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "monitoring.auditTrail",
              product: "2"
            }), ". For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-audit-trail",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The language displayed on the page accessed via the face enrollment mobile link follows the language settings of the browser used on the mobile device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When the user accesses the sent face enrollment mobile link, the face enrollment service will be executed as shown below. Follow the instructions on the screen."
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-new-user-credential-face-mobile-app.png",
            className: "none"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The maximum file size for supported image types is 10MB."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Supported image formats include JPG, JPEG, and PNG."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The sent face enrollment mobile link will expire after 24 hours."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Once the Face Mobile Enrollment process is successful after uploading a face picture, an enrollment success message appears on the screen. If enrollment fails, a failure message and reason are displayed, and the user can retry the Visual Face Enrollment again using a different face picture."
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