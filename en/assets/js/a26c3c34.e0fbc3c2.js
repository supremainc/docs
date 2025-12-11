"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9157"], {
52156: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_security_mdx_a26_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-security-mdx-a26.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_security_mdx_a26_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-security","title":"Enhance System Security","description":"Enhance system security by configuring the password policy, personal data encryption, and communication security between devices in BioStar X.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-security.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-security","permalink":"/docs/en/platform/biostar_x/settings-system-security","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-security.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-security","title":"Enhance System Security","description":"Enhance system security by configuring the password policy, personal data encryption, and communication security between devices in BioStar X.","keywords":["System security","Encryption"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"System Restore","permalink":"/docs/en/platform/biostar_x/settings-system-system-restore"},"next":{"title":"Daylight Saving Time","permalink":"/docs/en/platform/biostar_x/settings-system-daylight-saving-time"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-security.mdx


const frontMatter = {
	id: 'settings-system-security',
	title: 'Enhance System Security',
	description: 'Enhance system security by configuring the password policy, personal data encryption, and communication security between devices in BioStar X.',
	keywords: [
		'System security',
		'Encryption'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Use system security",
  "id": "use-system-security",
  "level": 2
}, {
  "value": "Set password policy",
  "id": "password-policy-configuration",
  "level": 2
}, {
  "value": "Set password complexity",
  "id": "set-password-complexity",
  "level": 3
}, {
  "value": "Set password change cycle",
  "id": "set-password-change-cycle",
  "level": 3
}, {
  "value": "Set login failure limit",
  "id": "set-login-failure-limit",
  "level": 3
}, {
  "value": "Set password change limit",
  "id": "set-password-change-limit",
  "level": 3
}, {
  "value": "Advanced security settings",
  "id": "advanced-security-configuration",
  "level": 2
}, {
  "value": "Enhance personal data protection",
  "id": "enhance-personal-data-protection",
  "level": 3
}, {
  "value": "Set communication security between devices",
  "id": "set-communication-security-between-devices",
  "level": 3
}, {
  "value": "Concurrent access control",
  "id": "session-security-configuration",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure the security settings of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " according to your organization's security policy. You can selectively set password policy, personal data encryption, communication security between devices, and concurrent access control."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Check your organization's security policy and regulations before enhancing system security."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-system-security",
      children: "Use system security"
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
            sid: "setting.systemSecurity",
            product: "2"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set each item related to security."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.systemSecurity.loginPassword",
                product: "2"
              }), ": Set the security level related to login password. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#password-policy-configuration",
                children: "the following section"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.secure.comm.title",
                product: "2"
              }), ": Enhance communication security between personal information and devices. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#advanced-security-configuration",
                children: "the following section"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.systemSecurity.sessionSecurity",
                product: "2"
              }), ": Enhance session security. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#session-security-configuration",
                children: "the following section"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " at the bottom right of the screen to save your settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Only the first administrator account with ID ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1"
        }), " can use the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.secure.comm.title",
          product: "2"
        }), " menu."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "password-policy-configuration",
      children: "Set password policy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.loginPassword",
        product: "2"
      }), " section sets the security level related to the login password. Set the password policy according to your organization's security requirements."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-password.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-password-complexity",
      children: "Set password complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the complexity of user passwords. Adjust the slider for the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.passwordLevel",
        product: "2"
      }), " option to set the security level."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelDefault",
            product: "2"
          }), ": You can enter up to 32 characters."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelMedium",
            product: "2"
          }), ": When setting a password, a combination of 8 to 32 alphabetic characters (uppercase or lowercase) and numbers is required."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelStrong",
            product: "2"
          }), ": When setting a password, a combination of 10 to 32 alphabetic characters (uppercase and lowercase, including at least one uppercase letter), numbers, and special characters is required."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-password-change-cycle",
      children: "Set password change cycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To limit the usage period of passwords, toggle the button in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.passwordUpdateCycle",
        product: "2"
      }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), " state. Users must change their password periodically as set. If the password change cycle is exceeded, a password change request message will appear during login."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "It can be set from 1 to 180 days."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-login-failure-limit",
      children: "Set login failure limit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the number of allowed password input failures and the login restriction time. If you exceed the number of attempts set in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.allowLoginFailed",
        product: "2"
      }), " option, you cannot log in for a limited time after incorrectly entering the password."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This option is activated by default, and login is restricted for 10 minutes after 100 failures. You can adjust the values or disable them as needed."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-password-change-limit",
      children: "Set password change limit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To limit the number of password changes a user can make in a day, toggle the button in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.allowPasswordChange",
        product: "2"
      }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), " state. Users can change the password up to the specified number of times."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "It can be set to a maximum of 10 times."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanced-security-configuration",
      children: "Advanced security settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.secure.comm.title",
        product: "2"
      }), " section, you can enhance personal information and communication security between devices."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-advanced.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enhance-personal-data-protection",
      children: "Enhance personal data protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To minimize the risk of data breaches, set the options below to encrypt sensitive personal information."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.sever.secure.comm.encrypt.db",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), ": Encrypt and store user personal data, including credential data."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse",
                product: "2"
              }), ": Store user personal information without encryption. Data that is already encrypted will be stored decrypted, and new data will not be encrypted."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.encryption_key_db",
            product: "2"
          }), ": Used to encrypt or decrypt information stored in the database to securely protect user personal information. Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.key_change",
            product: "2"
          }), " button and set a new encryption key value. Changing the encryption key re-encrypts the data that was previously encrypted."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Do not forcefully start the server during the personal data DB encryption or decryption process. Errors such as login failure or data corruption may occur. It may take some time depending on the size of the database and the performance of the server."
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "View personal data encryption items"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Profile image"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "User ID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Name"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Phone number"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "User IP"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Email information for sender ans recipients"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Login ID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Login password"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Face template"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Fingerprint template"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Card ID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Smart card layout key"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Custom information for user and visitor"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Image log files"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.secure.comm.encryption_key_db",
              product: "2"
            }), " can be entered using alphanumeric characters and symbols for a total of 32 characters."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-communication-security-between-devices",
      children: "Set communication security between devices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set up secure communication between the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server and access control devices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          }), ": Communication between the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server and access control devices can be protected with certificates. If you set this option to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), ", the server automatically generates a certificate to send to the devices, and all communication is encrypted thereafter. Devices can use this certificate to establish a secure channel when exchanging data with the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To use external certificates, enable the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.extcert.menu",
            product: "2"
          }), " option and upload the root certificate, public key certificate, and private key file."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-security-advanced-with-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.data_encryption",
            product: "2"
          }), ": You can redefine the data encryption key and administrator password."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " generates or deletes certificates according to the configuration status of device and secure communication settings, and does not recreate the same certificate as before. For example, if the setting of Secure communication with device is changed in the order of ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), ", the created certificate will be deleted automatically. When the setting is changed in the order of ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), ", the operation of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create A certificate"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete A certificate"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create B certificate"
            }), " is carried out."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you set the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.sever.secure.comm.menu",
              product: "2"
            }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), " while the device is physically separated from the network, the certificate stored in the device will be deleted. In this case, the device cannot be reconnected. To connect it again, the certificate saved in the device must be deleted or the device must be reset to factory default. For more information, refer to the manual of the device."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: ["View supported devices and firmware versions for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          }), " feature"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2 FW 1.1.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2 FW 1.5.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2 FW 1.6.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2 FW 1.3.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2 firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2 FW 1.1.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2 FW 1.2.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2 firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "CoreStation FW 1.1.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "X-Station 2 firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 3 firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "session-security-configuration",
      children: "Concurrent access control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.sessionSecurity",
        product: "2"
      }), " section, you can limit duplicate logins for the same account to enhance security. Set the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.useSimultaneousConnection",
        product: "2"
      }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.inactive",
        product: "2"
      }), ". When there are concurrent login attempts for the same account, existing users logged in will be logged out."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-session.png",
      className: "none"
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