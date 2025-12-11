"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["97277"], {
56012: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ tna_rule_shift_day_frontMatter),
  toc: () => (/* binding */ tna_rule_shift_day_toc),
  "default": () => (/* binding */ tna_rule_shift_day_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_day_mdx_236_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ tna_rule_shift_day_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-shift-day-mdx-236.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_day_mdx_236_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-shift-day","title":"Set Daily Shift","description":"Create work rules by applying different time rules based on time for a 24-hour period.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-day.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-shift-day","permalink":"/en/platform/biostar_x/tna-rule-shift-day","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-shift-day.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-shift-day","title":"Set Daily Shift","description":"Create work rules by applying different time rules based on time for a 24-hour period.","keywords":["Work hours","Daily work rules"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set Time Code","permalink":"/en/platform/biostar_x/tna-rule-shift-paycode"},"next":{"title":"Set Weekly Shifts","permalink":"/en/platform/biostar_x/tna-rule-shift-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_tna-rule-shift-settings.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "fixed",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.dayStartTime",
              product: "2"
            }), ": Set the start time for the workday."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.dayStartTimeExcessTime",
              product: "2"
            }), " allows you to set work rules for hours worked in excess of 24 hours based on the set day start time. It can be set for a maximum of 6 hours."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-fixed-before-after-time.png"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "flexible,floating",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.dayStartTime",
            product: "2"
          }), ": Set the start time for the workday."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.firstInLastOut",
            product: "2"
          }), ": When this option is activated, the first authenticated time is recorded as the start time, and the last authenticated time is recorded as the end time."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When this option is activated, you must set ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.breakByPunch",
              product: "2"
            }), " to record user break times."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "flexible",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.flexible.hours",
            product: "2"
          }), ": Set the total working hours for the day."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "fixed,floating",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.timeSegment",
              product: "2"
            }), ": After selecting the items set in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.payCode",
              product: "2"
            }), " column for attendance records, set ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.minDuration",
              product: "2"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Include, {
            type: props.type,
            ref: "floating",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.punchInTimeRange",
                  product: "2"
                }), ": Set the time range that will be considered normal work when arriving early or leaving late compared to the set start or end time."]
              }), "\n"]
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.grace",
                  product: "2"
                }), ": Set grace time to allow for normal work when arriving late or leaving early compared to the set time."]
              }), "\n", (0,jsx_runtime.jsx)(Image, {
                src: "/img/biostarx-tna-shift-day-adding-fixed-allow-time.png"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.rounding",
              product: "2"
            }), ": Automatically round the start and end times. Set units and standards for both start and end times."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-fixed-roundup.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.unitMin",
                  product: "2"
                }), ": Set rules to round registered time when clock-in events are recorded earlier or later than the set start time."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.pointMin",
                  product: "2"
                }), ": Set rules to round registered time when clock-out events are recorded earlier or later than the set end time."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "tip",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["For example, if the clock-in time is set to 09:00, and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.unitMin",
                product: "2"
              }), " is set to 15 minutes and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.pointMin",
                product: "2"
              }), " is set to 8 minutes, it will round as follows."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:07 clock-in → rounded down to 09:00 (less than 8 minutes)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:08 clock-in → rounded up to 09:15 (8 minutes or more)"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.rounding",
                product: "2"
              }), " rules take precedence over ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.grace",
                product: "2"
              }), "."]
            })
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "flexible",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.payCode",
              product: "2"
            }), ": Select the items for attendance records."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.punchInTimeLimit",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.punchOutTimeLimit",
              product: "2"
            }), ": Set the time range in which users can authenticate their clock-in and clock-out times."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-flexible-inout-time-limit.png"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.mealDeduction1",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.mealDeduction2",
            product: "2"
          }), ": Set deductions for meal times from daily working hours."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.byPunch",
                product: "2"
              }), ": Set to deduct based on time records registered on the attendance device without setting fixed meal deduction times."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.auto",
                product: "2"
              }), ": Set to automatically deduct meal times by defining ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.deductionTime",
                product: "2"
              }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.minimalHoursBeforeDeduction",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.fixed",
                product: "2"
              }), ": Set to deduct fixed times by defining ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.startTime",
                product: "2"
              }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.endTime",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Using ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction2",
                  product: "2"
                }), " allows for deductions of two meal times from daily working hours."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If the meal deduction types are ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction.type.auto",
                  product: "2"
                }), " or ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction.type.fixed",
                  product: "2"
                }), ", then ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction1",
                  product: "2"
                }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction2",
                  product: "2"
                }), " can only be set to the same type."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Include, {
      type: props.type,
      ref: "flexible",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.rounding",
              product: "2"
            }), ": Automatically round the start and end times. Set units and standards for both start and end times."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-fixed-roundup.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.unitMin",
                  product: "2"
                }), ": Set rules to round registered time when clock-in events are recorded earlier or later than the set start time."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.pointMin",
                  product: "2"
                }), ": Set rules to round registered time when clock-out events are recorded earlier or later than the set end time."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "tip",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["For example, if the clock-in time is set to 09:00, and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.unitMin",
                product: "2"
              }), " is set to 15 minutes and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.pointMin",
                product: "2"
              }), " is set to 8 minutes, it will round as follows."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:07 clock-in → rounded down to 09:00 (less than 8 minutes)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:08 clock-in → rounded up to 09:15 (8 minutes or more)"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.rounding",
                product: "2"
              }), " rules take precedence over ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.grace",
                product: "2"
              }), "."]
            })
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.breakTime",
            product: "2"
          }), ": Set break times."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.breakTime.type.byPunch",
                product: "2"
              }), ": Set to follow the time records registered on the attendance device without setting fixed break times. When this option is activated, you can set ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.maxAllowedBreakTime",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.breakTime.type.fixed",
                product: "2"
              }), ": Set ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.startTime",
                product: "2"
              }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.endTime",
                product: "2"
              }), " as fixed times for user break time."]
            }), "\n"]
          }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-day.mdx


const tna_rule_shift_day_frontMatter = {
	id: 'tna-rule-shift-day',
	title: 'Set Daily Shift',
	description: 'Create work rules by applying different time rules based on time for a 24-hour period.',
	keywords: [
		'Work hours',
		'Daily work rules'
	],
	isTranslationMissing: false
};
const tna_rule_shift_day_contentTitle = undefined;

const assets = {

};




const tna_rule_shift_day_toc = [{
  "value": "Setting options guide",
  "id": "setting-options-guide",
  "level": 2
}, ...toc, {
  "value": "Flexible work",
  "id": "flexible-work",
  "level": 3
}, ...toc, {
  "value": "Floating Shift",
  "id": "floating-shift",
  "level": 3
}, ...toc];
function tna_rule_shift_day_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) tna_rule_shift_day_missingMdxReference("Cmd", true);
  if (!Image) tna_rule_shift_day_missingMdxReference("Image", true);
  if (!NextItem) tna_rule_shift_day_missingMdxReference("NextItem", true);
  if (!NextStep) tna_rule_shift_day_missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Create work rules by applying different time rules based on time for a 24-hour period. Choose from fixed, flexible, or floating work options, and set the start time of the day, rounding rules, etc."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.addShift",
        product: "2",
        className: "bold"
      })
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
            sid: "tab.shift",
            product: "2"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.addShift",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-day.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.addShift",
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
            children: ["To continue adding weekly work rules, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.applyAndAddShift",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After saving the settings, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " to add another ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.shift",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-options-guide",
      children: "Setting options guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Depending on the type of work rule, you can select either ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.flexible",
        product: "2"
      }), ", or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.floating",
        product: "2"
      }), ". Setting options may vary depending on the selected type of work rule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a work rule for arriving and departing at set times. Enter the name and description of ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " and select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), " as ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-day-adding-fixed.png"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {
      type: "fixed"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can only add one time rule set as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.countAsAttendance",
              product: "2"
            }), " to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.shift",
              product: "2",
              className: "normal"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can set ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.minDuration",
              product: "2"
            }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.rounding",
              product: "2"
            }), " for a time rule set as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.accumulateTowardOvertime",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flexible-work",
      children: "Flexible work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a work rule that sets the daily working hours and flexibly adjusts the arrival and departure times based on the start time of the day. Enter the name and description of ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " and select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), " as ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.flexible",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-day-adding-flexible.png"
    }), "\n", (0,jsx_runtime.jsx)(MDXContent, {
      type: "flexible"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A time rule set as ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "payCode.accumulateTowardOvertime",
          product: "2"
        }), " cannot be added."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floating-shift",
      children: "Floating Shift"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a work rule that allows flexible setting of arrival and departure times. Enter the name and description of ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " and select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), " as ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.floating",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-day-adding-floating.png"
    }), "\n", (0,jsx_runtime.jsx)(MDXContent, {
      type: "floating"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Work shifts can consist of up to five time slots. Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.addplus",
              product: "2"
            }), " to add a time slot."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When setting absences, the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.timeSegmentSet.default",
              product: "2"
            }), " option must be selected. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.timeSegmentSet.default",
              product: "2"
            }), " can be selected from the time slots configured into work shifts."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-floating-timesegment.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can set ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.minDuration",
              product: "2"
            }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.rounding",
              product: "2"
            }), " for a time rule set as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.accumulateTowardOvertime",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "tna-rule-shift-schedule",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "You can set weekly work rules based on the daily work rules configured. You can set weekly work rules on a weekly or daily basis."
        })
      })
    })]
  });
}
function tna_rule_shift_day_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(tna_rule_shift_day_createMdxContent, {
      ...props
    })
  }) : tna_rule_shift_day_createMdxContent(props);
}
function tna_rule_shift_day_missingMdxReference(id, component) {
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