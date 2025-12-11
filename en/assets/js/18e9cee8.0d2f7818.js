"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["25386"], {
76919: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_schedule_mdx_18e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-schedule-mdx-18e.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_schedule_mdx_18e_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-schedule","title":"Set the Schedule","description":"Guide users on how to create work schedules by specifying the set work rules, other work rules, duration, and holidays.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-schedule","permalink":"/docs/en/platform/biostar_x/tna-rule-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-schedule","title":"Set the Schedule","description":"Guide users on how to create work schedules by specifying the set work rules, other work rules, duration, and holidays.","keywords":["Work schedule","Working rules"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set Other Work Rules","permalink":"/docs/en/platform/biostar_x/tna-rule-shift-overtime"},"next":{"title":"View the Report","permalink":"/docs/en/platform/biostar_x/tna-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-schedule.mdx


const frontMatter = {
	id: 'tna-rule-schedule',
	title: 'Set the Schedule',
	description: 'Guide users on how to create work schedules by specifying the set work rules, other work rules, duration, and holidays.',
	keywords: [
		'Work schedule',
		'Working rules'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Set the schedule",
  "id": "set-the-schedule",
  "level": 2
}, {
  "value": "Add a schedule",
  "id": "add-a-schedule",
  "level": 3
}, {
  "value": "Setting options guide",
  "id": "setting-options-guide",
  "level": 3
}, {
  "value": "Edit a schedule",
  "id": "edit-a-schedule",
  "level": 3
}, {
  "value": "Delete a schedule",
  "id": "delete-a-schedule",
  "level": 3
}, {
  "value": "Add a temporary schedule",
  "id": "add-a-temporary-schedule",
  "level": 2
}, {
  "value": "Add and remove a leave",
  "id": "add-and-remove-a-leave",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcEdit, IcSearch, IcTnaExpand, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcTnaExpand) _missingMdxReference("IcTnaExpand", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can create work schedules by specifying the set ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), ", duration, and holidays."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can also add temporary schedules or personal leave to the created work schedule."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Before creating the schedule, ensure that you have correctly created the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "tab.payCode",
          product: "2",
          className: "normal"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "tab.shift",
          product: "2",
          className: "normal"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "tab.shift",
          product: "2",
          className: "normal"
        }), ", and holidays."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "For more information about work rule settings, refer to the following:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-paycode"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-day"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-schedule"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/tna-rule-shift-overtime"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on holiday settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule#addHolidaySchedule",
              children: "the following link"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "set-the-schedule",
      children: "Set the schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "add-a-schedule",
      children: "Add a schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add the work schedule for the registered users as instructed below."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " tab on the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addSchedule",
            product: "2"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addSchedule",
            product: "2"
          }), " screen appears, set each item."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " at the bottom of the screen to save the settings."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After saving the settings, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " button to add another ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.schedule",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting-options-guide",
      children: "Setting options guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guide for work schedule configuration options."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-schedule-template-adding.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.name",
            product: "2"
          }), ": Enter the name of the work schedule."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.description",
            product: "2"
          }), ": Enter a description for the work schedule."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), ": Select the configured ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), ". Setting ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), " disregards the overtime rules set on ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), ". Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), " if not in use."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the desired ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "rule.rule",
              product: "2",
              className: "normal"
            }), " is not available, you can add it. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-overtime",
              children: "the following"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2"
          }), ": Select the configured ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2",
            className: "normal"
          }), ". Once set, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " cannot be modified."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the desired ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "scheduleTemplate.scheduleTemplate",
              product: "2",
              className: "normal"
            }), " is not available, you can add it. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-schedule",
              children: "the following"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.period",
            product: "2"
          }), ": Set the period for collecting attendance events."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "The start date cannot be changed once set. The end date can be changed later, and if it is changed to a date earlier than the set date, attendance events for the changed period will be deleted."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.holiday",
            product: "2"
          }), ": Select the configured holiday schedule. Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), " if not in use."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the desired holiday schedule is not available, you can add it. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule#addHolidaySchedule",
              children: "the following"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.users",
            product: "2"
          }), ": Add users to apply the rules."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The number of users included in the overall work schedule cannot exceed the maximum supported by your registered attendance management license. The maximum number of users per license is detailed in ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/licensing"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edit-a-schedule",
      children: "Edit a schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guide for modifying registered work schedules."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " tab on the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the item to modify from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " list. Alternatively, click the ", (0,jsx_runtime.jsx)(IcEdit, {}), " button for the item to modify on the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Modify the desired item and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-a-schedule",
      children: "Delete a schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guide for deleting registered work schedules."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " tab on the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the checkbox for the item you want to delete from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.deleteSchedule",
            product: "2"
          }), " button at the top right of the screen. Alternatively, click the ", (0,jsx_runtime.jsx)(IcTrash2, {}), " button for the item to delete on the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the confirmation message appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-a-temporary-schedule",
      children: "Add a temporary schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a schedule is already registered, a temporary different work rule can be applied to the user."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " tab on the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcTnaExpand, {}), " button for the desired schedule from the list on the left side of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A list of users assigned to the schedule will appear, and selecting a user to apply a temporary schedule will show the calendar."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the date to which you want to add a temporary schedule on the calendar."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addTemporarySchedule",
            product: "2"
          }), " in the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addTemporarySchedule",
            product: "2"
          }), " settings window appears, set each item."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To apply the same work schedule to other users, click the ", (0,jsx_runtime.jsx)(IcSearch, {}), " button and select the users."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button to apply the set work rules."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To delete the temporary schedule applied to the user, click the set temporary schedule on the calendar. Click the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.yes",
          product: "2"
        }), " button when the confirmation message window appears."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-and-remove-a-leave",
      children: "Add and remove a leave"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can add a user’s personal leave schedule."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " tab on the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcTnaExpand, {}), " button for the desired schedule from the list on the left side of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A list of users assigned to the schedule will appear, and selecting a user to apply the absence schedule will show the calendar."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the date on the calendar to add the user's absence schedule."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addLeave",
            product: "2"
          }), " in the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "leave.editLeave",
            product: "2"
          }), " settings window appears, set each item."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-leave-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To apply the same absence schedule to other users, click the ", (0,jsx_runtime.jsx)(IcSearch, {}), " button and select the users."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button to apply the set absence schedule."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the desired absence management time rules are not available, you can add them. For more information on adding time rules, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-paycode",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To delete the absence schedule applied to the user, click the ", (0,jsx_runtime.jsx)(IcTrash2, {}), " button for the set absence schedule on the calendar. Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.yes",
              product: "2"
            }), " button when the confirmation message window appears."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-schedule-remove-leave-item.png",
            alone: true
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