"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7072"], {
6064: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Include, Xclude} = _components;
  if (!Include) _missingMdxReference("Include", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Keep the distance between the device and your face at 60-100 cm when enrolling your face."
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
      product: "facestation_2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Keep the distance between the device and your face at 40-80 cm when enrolling a face."
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Do not change your face expression."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Do not wear masks, hats, or eye patches."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Do not enroll a face wearing a mask. It may increase the False Acceptance Rate (FAR) if both faces with and without a mask are enrolled."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Do not raise head up or lower head."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Do not wear thick makeup."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Do not close your eyes."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Make sure that both of your shoulders correctly appear on the screen."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Stand still and enroll your face by staring at the screen."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Be careful not to display two faces on the screen. Enroll one person at a time."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "If you do not follow the instructions on the screen, the face enrollment may take longer or may fail."
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
2648: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_facestation_2_user_mdx_da3_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-facestation-2-user-mdx-da3.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_facestation_2_user_mdx_da3_namespaceObject = JSON.parse('{"id":"device/facestation_2/user","title":"User","description":"Describes how to register, edit, delete, and manage users.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/facestation_2/user.mdx","sourceDirName":"device/facestation_2","slug":"/device/facestation_2/user","permalink":"/docs/en/device/facestation_2/user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_2/user.mdx","tags":[],"version":"current","frontMatter":{"id":"user","title":"User","description":"Describes how to register, edit, delete, and manage users.","keywords":["Enrollment","Edit","Delete","Manage"],"isTranslationMissing":false},"sidebar":"facestation2","previous":{"title":"Admin Menu","permalink":"/docs/en/device/facestation_2/admin-menu"},"next":{"title":"Certifications","permalink":"/docs/en/device/facestation_2/authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_enrolling-face-warning.mdx
var _enrolling_face_warning = __webpack_require__(6064);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/facestation_2/user.mdx


const frontMatter = {
	id: 'user',
	title: 'User',
	description: 'Describes how to register, edit, delete, and manage users.',
	keywords: [
		'Enrollment',
		'Edit',
		'Delete',
		'Manage'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Registering user information",
  "id": "registering-user-information",
  "level": 2
}, ..._enrolling_face_warning/* .toc */.RM, {
  "value": "Modifying User Information",
  "id": "modifying-user-information",
  "level": 2
}, {
  "value": "Delete All Users",
  "id": "delete-all-users",
  "level": 2
}, {
  "value": "View User Usage",
  "id": "view-user-usage",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describes how to register, edit, delete, and manage users."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registering-user-information",
      children: "Registering user information"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can register user information that includes biometric authentication data."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), ". The face registration wizard will start."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-user-enroll-face.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_108",
            product: "dev"
          }), " to continue the face registration wizard. To skip, press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_065",
            product: "dev"
          }), " and verify step ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "5"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you pressed ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_108",
            product: "dev"
          }), ", follow the instructions on the screen to register your face. Face registration consists of a total of 3 steps."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Front face registration"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/fs2-user-enroll-face1.svg",
              className: "none",
              alone: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Move face up and down"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/fs2-user-enroll-face2.svg",
              className: "none",
              alone: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Move face left and right"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/fs2-user-enroll-face3.svg",
              className: "none",
              alone: true
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Using the face registration wizard will only register the user's face. After face registration is completed, you can select the user to set additional information."
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Please note the following when registering your face."
            })
          }), (0,jsx_runtime.jsx)(_enrolling_face_warning/* ["default"] */.Ay, {})]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you pressed ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_065",
            product: "dev"
          }), ", select the desired item and set it."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-user-add.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-photo2.svg",
                ico: true,
                alone: true
              }), ": You can register a user photo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Name"
              }), ": Enter the user name."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ID"
              }), ": Enter a number between 1-4294967295 to register the user ID. If ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_168",
                product: "dev"
              }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_237",
                product: "dev"
              }), ", you can use a combination of alphanumeric characters and symbols ", (0,jsx_runtime.jsx)(_components.code, {
                children: "_"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-"
              }), " as the ID, with a maximum of 32 characters."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_228",
                product: "dev"
              }), ": You can register a face for user authentication. Press ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), " and follow the instructions on the screen to register your face. To register more faces, please click ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_322",
                product: "dev"
              }), ": You can enroll a card for user authentication. Press ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), " and scan the card to assign it to the user in the RF card authentication section. To register more cards, click ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_040",
                product: "dev"
              }), ": You can enter the PIN you want to use. Enter the PIN you want to use, then confirm by entering the PIN again, and press ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_037",
                product: "dev"
              }), ". To prevent leaks, input a PIN of 4 to 16 digits."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_172",
                product: "dev"
              }), ": You can select permissions to assign to the user."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: "Available menus vary according to the set user level."
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_075",
                      product: "dev"
                    }), ": This is a general user level, and the menu is not available."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_300",
                      product: "dev"
                    }), ": You can use all menus."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_194",
                      product: "dev"
                    }), ": You can use the menus ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_256",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_366",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_280",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_344",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_255",
                      product: "dev"
                    }), "."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_171",
                      product: "dev"
                    }), ": You can use the menus ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_166",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_255",
                      product: "dev"
                    }), "."]
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_230",
                product: "dev"
              }), ": You can select a group for the user's face. Face groups can only be used if ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_078",
                product: "dev"
              }), " is enabled and can only be registered in BioStar X."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_320",
                product: "dev"
              }), ": You can check the user's access group. Access groups can only be registered in BioStar X."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_064",
                product: "dev"
              }), ": You can set a personal authentication mode. Using personal authentication mode allows you to combine authentication methods including face authentication for each user. Otherwise, you can use the device’s basic authentication mode."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), " to complete user information registration."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modifying-user-information",
      children: "Modifying User Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User Management or Administrator can modify the registered user information. A card or face can be added, and PIN and level can be modified."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-search.svg",
            ico: true,
            alone: true
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select your search terms. You can search for users using ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_299",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_167",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_253",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_228",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_322",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the user to modify."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Modify the information by referring to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-user-information",
            children: "Registering user information"
          }), " and press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["To delete a user, select ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-delete.svg",
              ico: true,
              alone: true
            }), " and then press ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_367",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_320",
          product: "dev"
        }), " can be registered in BioStar X. For more information on registering access groups, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../platform/biostar_x/settings-access-control-manage-access-group#addAccessGroup",
          children: "BioStar X Administrator Guide"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-all-users",
      children: "Delete All Users"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can delete all registered users at once."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_303",
            product: "dev"
          }), " to check, then press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To delete all users, press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-user-usage",
      children: "View User Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can see the number of registered users, faces, and cards at a glance."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-info2.svg",
            ico: true,
            alone: true
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), ". User usage information appears."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-user-usage.png"
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