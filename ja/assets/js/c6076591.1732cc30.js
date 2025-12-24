"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["28159"], {
79367: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ tna_rule_shift_day_frontMatter),
  toc: () => (/* binding */ tna_rule_shift_day_toc),
  "default": () => (/* binding */ tna_rule_shift_day_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_day_mdx_c60_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ tna_rule_shift_day_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-shift-day-mdx-c60.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_day_mdx_c60_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-shift-day","title":"日次勤務規則を設定する","description":"24時間を基準に、時刻に応じて異なる時間規則を適用して勤務規則を作成します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-day.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-shift-day","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-day","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-shift-day.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-shift-day","title":"日次勤務規則を設定する","description":"24時間を基準に、時刻に応じて異なる時間規則を適用して勤務規則を作成します。","keywords":["勤務時間","日次勤務規則"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"時間ルールを設定する","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-paycode"},"next":{"title":"週次勤務規則を設定する","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_tna-rule-shift-settings.mdx


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
            }), "：1日の勤務開始時刻を設定します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.dayStartTimeExcessTime",
              product: "2"
            }), "を使用すると、設定した1日の開始時刻を基準に24時間を超える勤務時間に対する勤務ルールを設定できます。 最大で6時間まで設定できます。"]
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
          }), "：1日の勤務開始時刻を設定します。"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.firstInLastOut",
            product: "2"
          }), "：このオプションを有効にすると、ユーザーが最初に認証した時刻を出勤時刻として記録し、最後に認証した時刻を退勤時刻として記録します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["このオプションを有効にする場合、ユーザーの休憩時間を記録するために", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.breakByPunch",
              product: "2"
            }), "を設定する必要があります。"]
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
          }), "：1日の総勤務時間を設定します。"]
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
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.payCode",
              product: "2"
            }), "列で勤怠記録を設定した項目を選択してから、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.minDuration",
              product: "2"
            }), "を設定します。"]
          }), "\n", (0,jsx_runtime.jsx)(Include, {
            type: props.type,
            ref: "floating",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.punchInTimeRange",
                  product: "2"
                }), "：設定された出勤・退勤時刻より早く出勤したり遅く退勤した場合に、通常勤務として認める時間範囲を設定します。"]
              }), "\n"]
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.grace",
                  product: "2"
                }), "：設定した時刻より遅く出勤したり早く退勤した場合でも通常勤務として認める猶予時間を設定します。"]
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
            }), "：出勤と退勤の時刻を自動で丸めることができます。 出勤と退勤それぞれについて単位と基準を設定します。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-fixed-roundup.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.unitMin",
                  product: "2"
                }), "：設定された開始時刻より早いまたは遅い出勤イベントが登録された場合に、その時刻を丸めるルールを設定できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.pointMin",
                  product: "2"
                }), "：設定された終了時刻より早いまたは遅い退勤イベントが登録された場合に、その時刻を丸めるルールを設定できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "tip",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["たとえば、出勤時刻が09:00に設定され、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.unitMin",
                product: "2"
              }), "が15分、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.pointMin",
                product: "2"
              }), "が8分に設定されている場合、次のように丸められます。"]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:07 出勤 → 09:00 に切り捨て（基準 8 分未満）"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:08 出勤 → 09:15 に切り上げ（基準 8 分以上）"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.rounding",
                product: "2"
              }), " ルールは ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.grace",
                product: "2"
              }), " より先に適用されます。"]
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
            }), "：勤怠記録を設定した項目を選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.punchInTimeLimit",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.punchOutTimeLimit",
              product: "2"
            }), "：ユーザーが出勤および退勤時刻を認証できる時間範囲を設定できます。"]
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
          }), "：1日の勤務時間から食事時間を控除するように設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.byPunch",
                product: "2"
              }), "：固定の食事控除時間を設定せず、勤怠登録デバイスに記録された時間に基づいて控除するように設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.auto",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.deductionTime",
                product: "2"
              }), "と", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.minimalHoursBeforeDeduction",
                product: "2"
              }), "を設定して、食事時間を自動で控除するように設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.fixed",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.startTime",
                product: "2"
              }), "と", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.endTime",
                product: "2"
              }), "を設定して、固定時間を控除するように設定できます。"]
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
                }), "を使用すると、1日の勤務時間から2回の食事時間を控除できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction.type.auto",
                  product: "2"
                }), "または", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction.type.fixed",
                  product: "2"
                }), "を食事控除の種類として使用する場合、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction1",
                  product: "2"
                }), "と", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction2",
                  product: "2"
                }), "は同じ種類にのみ設定できます。"]
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
            }), "：出勤と退勤の時刻を自動で丸めることができます。 出勤と退勤それぞれについて単位と基準を設定します。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-fixed-roundup.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.unitMin",
                  product: "2"
                }), "：設定された開始時刻より早いまたは遅い出勤イベントが登録された場合に、その時刻を丸めるルールを設定できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.pointMin",
                  product: "2"
                }), "：設定された終了時刻より早いまたは遅い退勤イベントが登録された場合に、その時刻を丸めるルールを設定できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "tip",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["たとえば、出勤時刻が09:00に設定され、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.unitMin",
                product: "2"
              }), "が15分、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.pointMin",
                product: "2"
              }), "が8分に設定されている場合、次のように丸められます。"]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:07 出勤 → 09:00 に切り捨て（基準 8 分未満）"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "09:08 出勤 → 09:15 に切り上げ（基準 8 分以上）"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.rounding",
                product: "2"
              }), " ルールは ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.grace",
                product: "2"
              }), " より先に適用されます。"]
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
          }), "：休憩時間を設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.breakTime.type.byPunch",
                product: "2"
              }), "：固定の休憩時間を設定せず、勤怠登録デバイスに記録された時間に従うように設定できます。 このオプションを有効にすると、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.maxAllowedBreakTime",
                product: "2"
              }), "を設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.breakTime.type.fixed",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.startTime",
                product: "2"
              }), "と", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.endTime",
                product: "2"
              }), "を設定して、固定時間をユーザーの休憩時間として設定できます。"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-day.mdx


const tna_rule_shift_day_frontMatter = {
	id: 'tna-rule-shift-day',
	title: '日次勤務規則を設定する',
	description: '24時間を基準に、時刻に応じて異なる時間規則を適用して勤務規則を作成します。',
	keywords: [
		'勤務時間',
		'日次勤務規則'
	],
	isTranslationMissing: false
};
const tna_rule_shift_day_contentTitle = undefined;

const assets = {

};




const tna_rule_shift_day_toc = [{
  "value": "設定オプションガイド",
  "id": "設定オプションガイド",
  "level": 2
}, ...toc, {
  "value": "フレックスタイム勤務",
  "id": "フレックスタイム勤務",
  "level": 3
}, ...toc, {
  "value": "フローティング勤務",
  "id": "フローティング勤務",
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
      children: "24時間を基準に、時刻に応じて異なる時間規則を適用して勤務規則を作成します。 固定勤務、フレックスタイム勤務、フローティング勤務を選択し、1日の開始時刻や時間の丸め規則などを設定します。"
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
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.addShift",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-day.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.addShift",
            product: "2"
          }), " 画面が表示されたら、各項目を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["設定を保存するには、画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["週次勤務規則を続けて追加するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.applyAndAddShift",
              product: "2"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["設定を保存した後に別の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.shift",
              product: "2"
            }), " を追加するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "設定オプションガイド",
      children: "設定オプションガイド"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["勤務規則の種類に応じて、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.flexible",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.floating",
        product: "2"
      }), " のいずれかを選択します。 選択した勤務規則の種類によって設定オプションが異なる場合があります。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定められた時刻に出勤と退勤を行う勤務規則です。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " の名前と説明を入力し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), " で ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2"
      }), " を選択します。"]
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
            }), " に設定された時間規則は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.shift",
              product: "2",
              className: "normal"
            }), " に 1 つだけ追加できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.accumulateTowardOvertime",
              product: "2"
            }), " に設定された時間規則では、", (0,jsx_runtime.jsx)(Cmd, {
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
            }), " を設定できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "フレックスタイム勤務",
      children: "フレックスタイム勤務"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1日の勤務時間を設定し、1日の開始時刻を基準に出勤および退勤時刻を柔軟に調整する勤務規則です。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " の名前と説明を入力し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), " で ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.flexible",
        product: "2"
      }), " を選択します。"]
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
        }), " に設定された時間規則は追加できません。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "フローティング勤務",
      children: "フローティング勤務"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["出勤と退勤時刻を自由に設定できる勤務規則です。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " の名前と説明を入力し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), " で ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.floating",
        product: "2"
      }), " を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-day-adding-floating.png"
    }), "\n", (0,jsx_runtime.jsx)(MDXContent, {
      type: "floating"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["勤務組は最大 5 つの時間スロットで構成できます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.addplus",
              product: "2"
            }), " をクリックして時間スロットを追加します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["不在を設定する際は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.timeSegmentSet.default",
              product: "2"
            }), " オプションを選択する必要があります。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.timeSegmentSet.default",
              product: "2"
            }), " は勤務組で構成した時間スロットから選択できます。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-floating-timesegment.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.accumulateTowardOvertime",
              product: "2"
            }), " に設定された時間規則では、", (0,jsx_runtime.jsx)(Cmd, {
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
            }), " を設定できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "tna-rule-shift-schedule",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "設定された 1 日単位の勤務規則で週次勤務規則を設定します。 週別または日別で週次勤務規則を設定します。"
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