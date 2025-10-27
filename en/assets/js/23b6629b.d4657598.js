"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9040"], {
21940: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ tna_rule_shift_day_frontMatter),
  toc: () => (/* binding */ tna_rule_shift_day_toc),
  "default": () => (/* binding */ tna_rule_shift_day_MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_tna_rule_shift_day_mdx_23b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ tna_rule_shift_day_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-tna-rule-shift-day-mdx-23b.json
var site_docs_platform_biostar_x_tna_rule_shift_day_mdx_23b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-shift-day","title":"일일 근무 규칙 설정하기","description":"24 시간을 기준으로 시간에 따라 시간 규칙을 다르게 적용하여 근무 규칙을 생성할 수 있습니다.","source":"@site/docs/platform/biostar_x/tna-rule-shift-day.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-shift-day","permalink":"/docs/en/platform/biostar_x/tna-rule-shift-day","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-shift-day.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-shift-day","title":"일일 근무 규칙 설정하기","description":"24 시간을 기준으로 시간에 따라 시간 규칙을 다르게 적용하여 근무 규칙을 생성할 수 있습니다.","keywords":["근무 시간","일일 근무 규칙"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"시간 규칙 설정하기","permalink":"/docs/en/platform/biostar_x/tna-rule-shift-paycode"},"next":{"title":"주간 근무 규칙 설정하기","permalink":"/docs/en/platform/biostar_x/tna-rule-shift-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/common/_tna-rule-shift-settings.mdx


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
            }), ": 하루 근무의 시작 시간을 설정하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.dayStartTimeExcessTime",
              product: "2"
            }), "을 사용하면 설정된 하루 시작 시간을 기준으로 24시간을 초과한 근무 시간에 대해 근무 규칙을 설정할 수 있습니다. 최대 6시간까지 설정할 수 있습니다."]
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
          }), ": 하루 근무의 시작 시간을 설정하세요."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.firstInLastOut",
            product: "2"
          }), ": 이 옵션을 활성화하면, 가장 처음 사용자가 인증한 시간을 출근 시간으로 기록하며, 가장 마지막에 사용자가 인증한 시간을 퇴근 시간으로 기록합니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이 옵션을 활성화하면 사용자의 휴식 시간을 기록하기 위해 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.breakByPunch",
              product: "2"
            }), "을 설정해야 합니다."]
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
          }), ": 하루 총 근무 시간을 설정하세요."]
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
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.payCode",
              product: "2"
            }), " 열에서 근태 기록을 설정한 항목을 선택한 후 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.minDuration",
              product: "2"
            }), "을 설정하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Include, {
            type: props.type,
            ref: "floating",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.punchInTimeRange",
                  product: "2"
                }), ": 설정된 출근 또는 퇴근 시간보다 일찍 출근하거나 늦게 퇴근한 경우에 정상 근무로 인정할 시간 범위를 설정하세요."]
              }), "\n"]
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.grace",
                  product: "2"
                }), ": 설정한 시간보다 늦게 출근하거나 빨리 퇴근한 경우에도 정상 근무로 인정할 수 있는 허용 시간을 설정하세요."]
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
            }), ": 출근 및 퇴근 시간을 자동으로 반올림할 수 있습니다. 출근과 퇴근 각각에 대해 단위와 기준을 설정하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-fixed-roundup.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.unitMin",
                  product: "2"
                }), ": 설정된 시작 시간 보다 빠르거나 늦게 출근 이벤트가 등록될 경우 등록된 시간을 반올림하는 규칙을 설정할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.pointMin",
                  product: "2"
                }), ": 설정된 종료 시간 보다 빠르거나 늦게 퇴근 이벤트가 등록될 경우 등록된 시간을 반올림하는 규칙을 설정할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "tip",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["예를 들어, 출근 시간이 09:00로 설정되어 있고, ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.unitMin",
                product: "2"
              }), "가 15분, ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.pointMin",
                product: "2"
              }), "이 8분으로 설정된 경우 다음과 같이 반올림됩니다."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:07 출근 → 09:00으로 내림 (기준 8분 미만)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:08 출근 → 09:15로 올림 (기준 8분 이상)"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.rounding",
                product: "2"
              }), " 규칙은 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.grace",
                product: "2"
              }), "보다 우선 적용됩니다"]
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
            }), ": 근태 기록을 설정한 항목을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.punchInTimeLimit",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.punchOutTimeLimit",
              product: "2"
            }), ": 사용자가 출근 및 퇴근 시간을 인증할 수 있는 시간 범위를 설정할 수 있습니다."]
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
          }), ": 일일 근무 시간에서 식사 시간을 공제하도록 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.byPunch",
                product: "2"
              }), ": 고정된 식사 공제 시간을 설정하지 않고, 근태 등록 장치에 등록된 시간 기록에 따라 공제하도록 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.auto",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.deductionTime",
                product: "2"
              }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.minimalHoursBeforeDeduction",
                product: "2"
              }), "을 설정하여 자동으로 식사 시간을 공제하도록 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.fixed",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.startTime",
                product: "2"
              }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.endTime",
                product: "2"
              }), "을 설정하여 고정된 시간을 공제하도록 설정할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction2",
                  product: "2"
                }), "를 사용하면 일일 근무 시간에서 두 번의 식사 시간을 공제할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["식사 공제 종류를 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction.type.auto",
                  product: "2"
                }), " 또는 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction.type.fixed",
                  product: "2"
                }), "으로 사용하면 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction1",
                  product: "2"
                }), "과 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction2",
                  product: "2"
                }), "는 동일한 종류로만 설정할 수 있습니다."]
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
            }), ": 출근 및 퇴근 시간을 자동으로 반올림할 수 있습니다. 출근과 퇴근 각각에 대해 단위와 기준을 설정하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-fixed-roundup.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.unitMin",
                  product: "2"
                }), ": 설정된 시작 시간 보다 빠르거나 늦게 출근 이벤트가 등록될 경우 등록된 시간을 반올림하는 규칙을 설정할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.pointMin",
                  product: "2"
                }), ": 설정된 종료 시간 보다 빠르거나 늦게 퇴근 이벤트가 등록될 경우 등록된 시간을 반올림하는 규칙을 설정할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "tip",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["예를 들어, 출근 시간이 09:00로 설정되어 있고, ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.unitMin",
                product: "2"
              }), "가 15분, ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.pointMin",
                product: "2"
              }), "이 8분으로 설정된 경우 다음과 같이 반올림됩니다."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:07 출근 → 09:00으로 내림 (기준 8분 미만)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:08 출근 → 09:15로 올림 (기준 8분 이상)"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.rounding",
                product: "2"
              }), " 규칙은 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.grace",
                product: "2"
              }), "보다 우선 적용됩니다"]
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
          }), ": 휴식 시간을 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.breakTime.type.byPunch",
                product: "2"
              }), ": 고정된 휴식 시간을 설정하지 않고, 근태 등록 장치에 등록된 시간 기록에 따르도록 설정할 수 있습니다. 이 옵션을 활성화하면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.maxAllowedBreakTime",
                product: "2"
              }), "을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.breakTime.type.fixed",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.startTime",
                product: "2"
              }), " 및 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.endTime",
                product: "2"
              }), "을 설정하여 고정된 시간을 사용자의 휴식 시간으로 설정할 수 있습니다."]
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


;// CONCATENATED MODULE: ./docs/platform/biostar_x/tna-rule-shift-day.mdx


const tna_rule_shift_day_frontMatter = {
	id: 'tna-rule-shift-day',
	title: '일일 근무 규칙 설정하기',
	description: '24 시간을 기준으로 시간에 따라 시간 규칙을 다르게 적용하여 근무 규칙을 생성할 수 있습니다.',
	keywords: [
		'근무 시간',
		'일일 근무 규칙'
	],
	isTranslationMissing: true
};
const tna_rule_shift_day_contentTitle = undefined;

const assets = {

};




const tna_rule_shift_day_toc = [{
  "value": "설정 옵션 안내",
  "id": "설정-옵션-안내",
  "level": 2
}, ...toc, {
  "value": "유연 근무",
  "id": "유연-근무",
  "level": 3
}, ...toc, {
  "value": "유동 근무",
  "id": "유동-근무",
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
      children: "24시간을 기준으로 시간에 따라 시간 규칙을 다르게 적용하여 근무 규칙을 생성할 수 있습니다. 고정 근무, 유연 근무, 유동 근무를 선택할 수 있으며, 하루 시작 시간, 시간 반올림 규칙 등을 설정할 수 있습니다."
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
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.addShift",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-day.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.addShift",
            product: "2"
          }), " 화면이 나타나면 각 항목을 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설정을 저장하려면 화면 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이어서 주간 근무 규칙을 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.applyAndAddShift",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설정을 저장한 후 다른 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.shift",
              product: "2"
            }), "을 추가하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "설정-옵션-안내",
      children: "설정 옵션 안내"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["근무 규칙 종류에 따라 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.flexible",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.floating",
        product: "2"
      }), " 중 하나를 선택할 수 있습니다. 선택한 근무 규칙 종류에 따라 설정 옵션이 다를 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["정해진 시간에 출근과 퇴근을 하는 근무 규칙입니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), "의 이름과 설명을 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2"
      }), "로 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-day-adding-fixed.png"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {
      type: "fixed"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.countAsAttendance",
              product: "2"
            }), "로 설정된 시간 규칙은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.shift",
              product: "2",
              className: "normal"
            }), "에 하나만 추가할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.accumulateTowardOvertime",
              product: "2"
            }), "로 설정된 시간 규칙은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.minDuration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.rounding",
              product: "2"
            }), "을 설정할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "유연-근무",
      children: "유연 근무"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["하루 근무 시간을 설정하고 하루 시작 시간을 기준으로 출근 및 퇴근 시간을 유연하게 조정하는 근무 규칙입니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), "의 이름과 설명을 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.flexible",
        product: "2"
      }), "로 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-day-adding-flexible.png"
    }), "\n", (0,jsx_runtime.jsx)(MDXContent, {
      type: "flexible"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "payCode.accumulateTowardOvertime",
          product: "2"
        }), "로 설정된 시간 규칙은 추가할 수 없습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "유동-근무",
      children: "유동 근무"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["출근 및 퇴근 시간을 자유롭게 설정할 수 있는 근무 규칙입니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), "의 이름과 설명을 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), "를 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.floating",
        product: "2"
      }), "로 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-day-adding-floating.png"
    }), "\n", (0,jsx_runtime.jsx)(MDXContent, {
      type: "floating"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["근무조는 최대 5개의 시간 슬롯으로 구성할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.addplus",
              product: "2"
            }), " 버튼을 클릭하여 시간 슬롯을 추가하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["부재를 설정할 때 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.timeSegmentSet.default",
              product: "2"
            }), " 옵션을 선택해야 합니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.timeSegmentSet.default",
              product: "2"
            }), "은 근무조로 구성한 시간 슬롯 중 선택할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-floating-timesegment.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.accumulateTowardOvertime",
              product: "2"
            }), "로 설정된 시간 규칙은 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.minDuration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.rounding",
              product: "2"
            }), "을 설정할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "tna-rule-shift-schedule",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "설정된 하루 단위의 근무 규칙으로 주간 근무 규칙을 설정할 수 있습니다. 주별, 일별 주간 근무 규칙을 설정할 수 있습니다."
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