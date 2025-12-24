"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["91290"], {
66703: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_video_integration_mdx_7fe_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-video-integration-mdx-7fe.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_video_integration_mdx_7fe_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-video-integration","title":"Integrate VMS","description":"This guide explains how to integrate the Video Management System (VMS) for real-time video monitoring and playback on BioStar X.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-video-integration.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-video-integration","permalink":"/docs/en/platform/biostar_x/settings-video-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-video-integration.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-video-integration","title":"Integrate VMS","description":"This guide explains how to integrate the Video Management System (VMS) for real-time video monitoring and playback on BioStar X.","keywords":["Video","Integration","Camera","Settings"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Video Settings","permalink":"/docs/en/platform/biostar_x/settings-videos"},"next":{"title":"Set up the camera","permalink":"/docs/en/platform/biostar_x/settings-videos-camera"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-video-integration.mdx


const frontMatter = {
	id: 'settings-video-integration',
	title: 'Integrate VMS',
	description: 'This guide explains how to integrate the Video Management System (VMS) for real-time video monitoring and playback on BioStar X.',
	keywords: [
		'Video',
		'Integration',
		'Camera',
		'Settings'
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
  "value": "VMS server integration settings",
  "id": "vms-server-integration-settings",
  "level": 2
}, {
  "value": "Install the certificate on the VMS server",
  "id": "install-vms-certification",
  "level": 3
}, {
  "value": "Activate VMS integration",
  "id": "activate-vms-integration",
  "level": 3
}, {
  "value": "Restart service",
  "id": "restart-service",
  "level": 3
}, {
  "value": "Check and configure cameras",
  "id": "check-and-configure-cameras",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "video-troubleshooting",
  "level": 3
}, {
  "value": "Certificate installation on client PC",
  "id": "install-client-certification",
  "level": 4
}, {
  "value": "VMS event and bookmark settings",
  "id": "vms-event-bookmark",
  "level": 2
}, {
  "value": "Disconnect VMS server integration",
  "id": "disconnect-vms-server-integration",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start, Step, Steps, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), " (VMS) is a video management system that integrates and manages video from multiple cameras, allowing for recording and playback. Integrating BioStar X with VMS allows you to manage access control and video security on a single platform."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can gain the following benefits through VMS integration."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-time monitoring"
          }), ": You can view real-time video from cameras connected to doors."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrated event management"
          }), ": You can understand security situations by linking access events with video."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Efficient evidence collection"
          }), ": You can quickly search and replay recorded video from specific points in time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bookmark function"
          }), ": You can add video tags to important event moments for easy retrieval and review."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To integrate with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), " (VMS), please check the following items."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The VMS integration feature is available through additional options for licenses above ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced"
          }), ". For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "licensing#features-add-ons",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Make sure that the VMS server is correctly installed and configured. The VMS server must be in a state that can connect online with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use a VMS that is compatible with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". You can use ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X VMS"
          }), " or the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Nx Witness v5.1.5"
          }), " series of VMS."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prepare the IP address, port number, and administrator account information of the VMS server. This information is needed to connect the VMS server with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-server-integration-settings",
      children: "VMS server integration settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Follow the steps below to integrate the VMS server with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "install-vms-certification",
          children: "Install the certificate on the VMS server"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "To play back recorded video from the VMS server, you must use HTTPS protocol. Generate an IP address-based certificate on the VMS server."
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Before installing the certificate, ensure that Open JDK 21 or higher is installed on the PC where VMS is installed."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["When installing the VMS server and ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " on the same server, you will need to install a certificate."]
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Navigate to the ", (0,jsx_runtime.jsx)(_components.em, {
                children: "C:\\Program Files\\BioStar X\\third"
              }), " path and run the command prompt."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Execute the following command."
            }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
              groupId: "os",
              defaultValue: "Windows",
              children: [(0,jsx_runtime.jsx)(TabItem, {
                value: "Windows",
                children: (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-java",
                    children: "java -Xverify:none -jar scaleUtil-1.0-obfuscated.jar vmsCertCreate \"C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\<%VENDOR.NAME%>\\<%VENDOR.NAME%> Media Server\\ssl\" {VMS_IP_ADDRESS}\n"
                  })
                })
              }), (0,jsx_runtime.jsx)(TabItem, {
                value: "Linux",
                children: (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-java",
                    children: "java -Xverify:none -jar scaleUtil-1.0-obfuscated.jar vmsCertCreate \"/opt/<%VENDOR.NAME%>/mediaserver/var/ssl\" {VMS_IP_ADDRESS}\n"
                  })
                })
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Enter the path where VMS is installed in the ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "<%VENDOR.NAME%>"
                  }), " section."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Enter the IP address of the VMS server in the ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "{VMS_IP_ADDRESS}"
                  }), " section."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["The ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "ssl"
                  }), " path may vary depending on the installed VMS product."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Check whether the certificate file (", (0,jsx_runtime.jsx)(_components.em, {
                children: "*.pem"
              }), ") was created in the path where VMS is installed."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Reboot the VMS server."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If VMS is installed on a different server than ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ", copy the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "scaleUtil-1.0-all.jar"
            }), " file to the VMS server and follow the previous steps."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "activate-vms-integration",
          children: "Activate VMS integration"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
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
              children: ["On the left sidebar, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.video.root"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.video.vmsIntegration"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If this is your first time accessing, log in with the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " administrator account."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-video-integration-login.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Set the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "video.setting.integration.title",
                product: "2"
              }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-video-integration.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Enter the VMS server information."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.serverAddress",
                    product: "2"
                  }), ": Enter the IP address of the VMS server."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.port",
                    product: "2"
                  }), ": Enter the port number of the VMS server."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.loginId",
                    product: "2"
                  }), ": Enter the administrator account ID of the VMS server."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "video.setting.integration.password",
                    product: "2"
                  }), ": Enter the administrator account password of the VMS server."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Once you have entered all the VMS server information, click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.apply",
                product: "2"
              }), " button at the bottom right of the screen."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "If the integration with the VMS server fails and an error message appears, check the server address and administrator account information again. It is also necessary to check whether the VMS server is online and if network connections are blocked due to firewall settings."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information on the settings in the ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "video.setting.tag.title",
                  product: "2"
                }), " section, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#vms-event-bookmark",
                  children: "the following"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "restart-service",
          children: "Restart service"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The first time you integrate with the VMS server, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " will automatically restart the service. If it does not automatically restart, follow the instructions below to manually restart the service."]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Service Manager"
              }), " on Windows."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "All Services"
              }), " list, click the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Stop"
              }), " button for the services below to stop them."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-sm-restart-service-video.png",
              alone: true
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar X Unified Gateway Service"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar X Core Web Service"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the status of the requested service changes from ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Pending"
              }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Stopped"
              }), ", click the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Start"
              }), " button to restart the service."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/biostarx-sm-restart-service-video-start.png",
              alone: true
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "check-and-configure-cameras",
          children: "Check and configure cameras"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If the VMS server is integrated normally, you can check the connected cameras in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " menu. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-camera",
            children: "the following"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the following situations occur, you can install the certificate from the VMS server onto the client PC to resolve the issue."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When accessing ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Management System"
          }), " (VMS) through the browser, and a 'Not secure' warning appears"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When real-time video plays on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " page but recorded video does not play"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "install-client-certification",
      children: "Certificate installation on client PC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Download the HTTPS certificate installer (", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), ") from the login screen or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), " on the client PC where ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " is installed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Unzip the downloaded file and run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), " file. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment Certification"
          }), " window will appears."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VMS"
          }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), " and enter the following information."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-vms-certification.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              }), ": IP address of the VMS server"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port"
              }), ": Port number of the VMS server"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the security warning message and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Yes"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Restart the web browser and check if the recorded video from the VMS server plays normally on the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-event-bookmark",
      children: "VMS event and bookmark settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can transmit bookmark tags and event tag information to the integrated VMS server. At this point, you can choose to transmit event logs, door names, device names, and user IDs together. Select the desired options and click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " button at the bottom right of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-event-bookmark.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.language",
            product: "2"
          }), ": Choose the language for the event and bookmark tags transmitted to the VMS server. You can select either Korean or English."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.tag.bookmark",
            product: "2"
          }), ": Bookmark tags allow you to easily locate and review videos stored on the VMS server with designations and names for quick identification. Select the information to send with the bookmark tag."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.tag.event",
            product: "2"
          }), ": You can transmit events that occurred at specific moments to the VMS server for logging. Select the information to send with the event tag."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on the bookmark function in VMS, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://resources.vmsproxy.com/nx_6.0_help/using_bookmarks.html",
              children: "the following link"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on the event function in VMS, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://resources.vmsproxy.com/nx_6.0_help/events_available_in_vms.html",
              children: "the following link"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disconnect-vms-server-integration",
      children: "Disconnect VMS server integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To disconnect the integrated VMS server, follow the steps below. Disconnecting VMS integration will delete all video settings, registered cameras, and rules."
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
          children: ["On the left sidebar, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.vmsIntegration"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.setting.integration.title",
            product: "2"
          }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.notUse",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button at the bottom right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the contents of the message window and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " button."]
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