"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9089"], {
48795: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_rule_mdx_82c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-videos-rule-mdx-82c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_rule_mdx_82c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos-rule","title":"Set Video Rules","description":"This guide shows how to set video rules using VMS integrated with BioStar X.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-rule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos-rule","permalink":"/docs/en/platform/biostar_x/settings-videos-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos-rule.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos-rule","title":"Set Video Rules","description":"This guide shows how to set video rules using VMS integrated with BioStar X.","keywords":["Camera","Rules","Settings"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set up the camera","permalink":"/docs/en/platform/biostar_x/settings-videos-camera"},"next":{"title":"Manage Map","permalink":"/docs/en/platform/biostar_x/settings-map-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-rule.mdx


const frontMatter = {
	id: 'settings-videos-rule',
	title: 'Set Video Rules',
	description: 'This guide shows how to set video rules using VMS integrated with BioStar X.',
	keywords: [
		'Camera',
		'Rules',
		'Settings'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add rule",
  "id": "add-camera-rule",
  "level": 2
}, {
  "value": "Enter rule information",
  "id": "enter-rule-information",
  "level": 3
}, {
  "value": "Video log settings",
  "id": "video-log-settings",
  "level": 3
}, {
  "value": "Event settings to be recorded in VMS",
  "id": "event-settings-to-be-recorded-in-vms",
  "level": 3
}, {
  "value": "Linking door and camera",
  "id": "link-door-camera",
  "level": 3
}, {
  "value": "Edit rule",
  "id": "edit-rule",
  "level": 2
}, {
  "value": "Delete rule",
  "id": "delete-rule",
  "level": 2
}, {
  "value": "Column settings",
  "id": "column-settings",
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
  }, {Cmd, IcMoreW, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Rules are settings to send events and bookmarks to the VMS server by combining events that occur at the camera and door. Proper video rule settings enable the utilization of various security management features."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Automatic bookmark creation"
          }), ": Automatically create bookmarks when specific access events occur to easily find important videos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Efficient monitoring"
          }), ": Monitor live footage from cameras connected to doors and check events instantly when they occur."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrated event management"
          }), ": Link access events and footage to comprehensively understand security situations."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The video rule feature is available with an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " license or higher through additional options. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-camera-rule",
      children: "Add rule"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.button",
            product: "2"
          }), " button in the upper left of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.addRule.title",
        product: "2"
      }), " screen appears, set the rules according to the following instructions. After completing all settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " button at the bottom of the screen to save."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enter-rule-information",
      children: "Enter rule information"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.detail.information.title",
        product: "2"
      }), " section, enter the name and description of the new rule."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "video.rule.detail.description",
          product: "2"
        }), " is optional. Use it to enter a simple description to easily understand the purpose or features of the rule."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-log-settings",
      children: "Video log settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "video.addRule.label.videoLog",
        product: "2"
      }), " is a feature that automatically records video before and after a specific event occurs. It preserves footage for a designated period to understand the context before and after events."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-video-log.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.label.videoLog",
            product: "2"
          }), ": Set the usage of ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.label.videoLog",
            product: "2",
            className: "normal"
          }), " in the current rule."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "video.addRule.label.enabled",
                product: "2"
              }), ": Automatically records video from the time before and after events occur."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "video.addRule.label.disabled",
                product: "2"
              }), ": Disables the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "video.addRule.label.videoLog",
                product: "2",
                className: "normal"
              }), " feature."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.label.videoLogLength",
            product: "2"
          }), ": Set the range of footage to be recorded around ten seconds before and after the event. It can be set up to a maximum of 60 seconds."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The longer the set range of ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "video.addRule.label.videoLogLength",
          product: "2"
        }), ", the more storage space it may require. Consider system performance and storage capacity when setting an appropriate length."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "event-settings-to-be-recorded-in-vms",
      children: "Event settings to be recorded in VMS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.detail.event.title",
        product: "2"
      }), " section, you can select the events to record on the VMS server and set whether to send bookmarks or events."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-event.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.event.itemName",
            product: "2"
          }), ": Select the type of event to be sent to the VMS server. When you select the desired event from the left event list, it will be added to the right list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.vmsBookmark.itemName",
            product: "2"
          }), ": You can set whether to create a bookmark on the VMS server when the selected event in the event list occurs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.vmsEvent.itemName",
            product: "2"
          }), ": You can set whether to create event records on the VMS server when the selected event in the event list occurs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Selecting events is not mandatory."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can quickly find the desired event using the search field at the top of the left event list."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To remove an event from the right list, click the ", (0,jsx_runtime.jsx)(IcTrash2, {}), " button."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can set the language of the message when sending bookmarks and events to the VMS server. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-video-integration#vms-event-bookmark",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "link-door-camera",
      children: "Linking door and camera"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.detail.doorCameraLinkage.title",
        product: "2"
      }), " section, you can link doors with cameras to send footage from the connected cameras along with events that occur at the doors to the VMS server. This allows you to easily view footage related to access events."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-connect-door.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), " button in the upper right."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.doorCameraLinkage.popup.title",
            product: "2"
          }), " window appears, select the door and then the associated camera."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-add-rule-connect-door-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once you have selected both the door and the camera, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can check the cameras linked to the door in the list."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-connect-door-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A single door can have up to four cameras added."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Doors included in a rule cannot be used in other rules."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To delete the linkage rule of doors and cameras, click the checkbox of the items you wish to delete in the list and click the ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.delete",
              product: "2"
            }), " button in the upper right."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cameras linked to doors can be viewed as a substructure of the doors in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), " page's door list. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "check-door-status#door-tree-structure",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After completing all settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " button at the bottom of the screen to save."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-rule",
      children: "Edit rule"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the rule you want to edit in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.rules",
            product: "2"
          }), " list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the rule editing screen appears, modify the desired items."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the modified rule, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button in the lower right of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For detailed information on each section of the rule editing screen, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#add-camera-rule",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-rule",
      children: "Delete rule"
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the checkbox of the rule you want to delete in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.rules",
            product: "2"
          }), " list. You can select one or more rules."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.delete",
            product: "2"
          }), " button in the upper right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the message and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "column-settings",
      children: "Column settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can add or change the order of columns to display in the list, or set them to be hidden."
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
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the top right of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.rules",
            product: "2"
          }), " list, click ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "columnSetting.dialog.header",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "columnSetting.dialog.header",
            product: "2"
          }), " window appears, you can click the checkboxes of the columns you want to display to add or set them to be hidden. You can also change the order of columns via drag and drop."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once you have changed all column settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.ok",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To initialize the column settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "columnSetting.button.defaultColumn",
          product: "2"
        }), " button."]
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