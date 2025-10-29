"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5304"], {
20886: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_camera_mdx_761_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-videos-camera-mdx-761.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_camera_mdx_761_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos-camera","title":"Set up the camera","description":"Learn how to add a camera to BioStar X after VMS integration and efficiently manage it by grouping. This covers how to set up cameras for real-time monitoring and video search.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-camera.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos-camera","permalink":"/docs/en/platform/biostar_x/settings-videos-camera","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos-camera.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos-camera","title":"Set up the camera","description":"Learn how to add a camera to BioStar X after VMS integration and efficiently manage it by grouping. This covers how to set up cameras for real-time monitoring and video search.","keywords":["Camera","Settings","Manage","Group"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Integrate VMS","permalink":"/docs/en/platform/biostar_x/settings-video-integration"},"next":{"title":"Set Video Rules","permalink":"/docs/en/platform/biostar_x/settings-videos-rule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-camera.mdx


const frontMatter = {
	id: 'settings-videos-camera',
	title: 'Set up the camera',
	description: 'Learn how to add a camera to BioStar X after VMS integration and efficiently manage it by grouping. This covers how to set up cameras for real-time monitoring and video search.',
	keywords: [
		'Camera',
		'Settings',
		'Manage',
		'Group'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Camera settings and management",
  "id": "camera-settings-and-management",
  "level": 2
}, {
  "value": "Add camera",
  "id": "add-camera",
  "level": 3
}, {
  "value": "Edit camera information",
  "id": "edit-camera-information",
  "level": 3
}, {
  "value": "Delete camera",
  "id": "delete-camera",
  "level": 3
}, {
  "value": "Camera group settings and management",
  "id": "camera-group-settings-and-management",
  "level": 2
}, {
  "value": "Add camera group",
  "id": "add-camera-group",
  "level": 3
}, {
  "value": "Add multiple cameras to the group",
  "id": "add-multiple-cameras-to-the-group",
  "level": 3
}, {
  "value": "Edit camera group name",
  "id": "edit-camera-group-name",
  "level": 3
}, {
  "value": "Delete camera group",
  "id": "delete-camera-group",
  "level": 3
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
  }, {Cmd, IcEdit, IcEditUL, IcMoreW, IcTrash, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTrash) _missingMdxReference("IcTrash", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "After completing the VMS integration, select and set up the cameras to be used in BioStar X. Appropriate camera configurations enable the use of the following security management features."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optional Monitoring"
          }), ": You can add only the necessary cameras from all the cameras of VMS to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Efficient Management"
          }), ": Cameras can be systematically managed by grouping them according to location or purpose."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-video-integration",
          children: "the following"
        }), " for information on how to integrate with the VMS server."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "camera-settings-and-management",
      children: "Camera settings and management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After VMS integration, you can set up and manage cameras in the menu ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.video.root"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.video.video"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "add-camera",
      children: "Add camera"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If integrated with VMS, you can add cameras connected to the VMS server to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " and play live video and recorded footage on the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " page."]
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
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addCamera.button",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addCamera",
            product: "2"
          }), " window appears, select the cameras to exclude from the list."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If your desired camera is not displayed, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addCamera.refresh",
            product: "2"
          }), " button to refresh the camera list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once you have selected the cameras, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " button in the bottom right corner of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can check the added cameras in the camera list."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-camera.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edit-camera-information",
      children: "Edit camera information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can edit the information of the added cameras. You can change the camera name, group, description, etc."
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
            sid: "video.table.th.camera",
            product: "2"
          }), " tab in the upper left corner of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the camera you want to edit in the camera list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the screen showing the camera information appears, edit your desired items."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-edit-camera-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After editing all the camera information, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button in the bottom right corner of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The camera ID and IP address cannot be modified."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-camera",
      children: "Delete camera"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can delete the added cameras."
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox on the far left of the camera you want to delete from the camera list. You can select more than one camera."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcTrash, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.camera.delete",
            product: "2"
          }), " button in the upper right corner of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the message and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-delete-camera.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the camera you want to delete is included in a rule, you cannot delete the camera. Remove the camera from the rule and try again. For more information on rule creation and management, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-videos-rule",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "camera-group-settings-and-management",
      children: "Camera group settings and management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "add-camera-group",
      children: "Add camera group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can group multiple cameras for management by adding a camera group."
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
            sid: "video.table.th.camera",
            product: "2"
          }), " tab in the upper left corner of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.camera.all.group",
            product: "2"
          }), " and right-click."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-add-camera-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.contextMenu.add.group",
            product: "2"
          }), " from the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the desired group name and press the ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " key."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can create camera groups with up to 8 subgroups."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Camera group names can be entered up to 48 characters long."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When you select a camera group from the camera list, only the cameras belonging to that group will be displayed in the list."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "add-multiple-cameras-to-the-group",
      children: "Add multiple cameras to the group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can add more than one camera to the added group."
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox on the far left of the cameras to be added to the group in the camera list. You can select more than one camera."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you select more than one camera, the ", (0,jsx_runtime.jsx)(IcEditUL, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.batchEdit",
            product: "2"
          }), " button will be activated in the upper right corner of the screen. Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.batchEdit",
            product: "2"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-batch-edit-camera.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.batchEdit",
            product: "2"
          }), " window appears, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group",
            product: "2"
          }), " button of the ", (0,jsx_runtime.jsx)(IcEdit, {}), " item."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the desired group from the group list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["From the camera list in the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "video.table.th.camera",
          product: "2"
        }), " tab, you can also add cameras to the group by drag and drop."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-settings-video-move-camera-group.png",
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edit-camera-group-name",
      children: "Edit camera group name"
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
            sid: "video.table.th.camera",
            product: "2"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the group you want to rename and right-click."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.contextMenu.rename.group",
            product: "2"
          }), " from the popup menu."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-rename-camera-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the desired group name and press the ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " key."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-camera-group",
      children: "Delete camera group"
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
            sid: "video.table.th.camera",
            product: "2"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the group you want to rename and right-click."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.contextMenu.delete.group",
            product: "2"
          }), " from the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the warning message and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "If the camera group contains cameras, you cannot delete the group. Move the cameras belonging to the group to another group or remove them from the group and try again."
      })
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
          children: ["In the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.camera",
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