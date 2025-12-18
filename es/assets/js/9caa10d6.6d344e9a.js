"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["40745"], {
54085: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ tna_rule_shift_day_frontMatter),
  toc: () => (/* binding */ tna_rule_shift_day_toc),
  "default": () => (/* binding */ tna_rule_shift_day_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_day_mdx_9ca_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ tna_rule_shift_day_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-shift-day-mdx-9ca.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_day_mdx_9ca_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-shift-day","title":"Configurar Turno Diario},{","description":"Cree reglas de trabajo aplicando diferentes reglas horarias durante un período de 24 horas.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-day.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-shift-day","permalink":"/docs/es/platform/biostar_x/tna-rule-shift-day","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-shift-day.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-shift-day","title":"Configurar Turno Diario},{","description":"Cree reglas de trabajo aplicando diferentes reglas horarias durante un período de 24 horas.","keywords":["Horas laborales","Reglas de trabajo diarias"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Establecer código de tiempo","permalink":"/docs/es/platform/biostar_x/tna-rule-shift-paycode"},"next":{"title":"Configurar turnos semanales","permalink":"/docs/es/platform/biostar_x/tna-rule-shift-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_tna-rule-shift-settings.mdx


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
            }), ": Establece la hora de inicio de la jornada laboral."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.dayStartTimeExcessTime",
              product: "2"
            }), " permite definir reglas de trabajo para las horas trabajadas en exceso de 24 horas según la hora de inicio del día establecida. Se puede configurar por un máximo de 6 horas."]
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
          }), ": Establece la hora de inicio de la jornada laboral."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.firstInLastOut",
            product: "2"
          }), ": Cuando esta opción está activada, la primera hora autenticada se registra como la hora de inicio y la última hora autenticada se registra como la hora de fin."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cuando esta opción está activada, configura ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.breakByPunch",
              product: "2"
            }), " para registrar los descansos de los usuarios."]
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
          }), ": Establece el total de horas de trabajo del día."]
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
            }), ": Después de seleccionar los elementos configurados en la columna ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.payCode",
              product: "2"
            }), " para los registros de asistencia, establece ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
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
                }), ": Configura el rango horario que se considerará trabajo normal cuando se llegue antes o se salga después de la hora de inicio o fin establecida."]
              }), "\n"]
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.grace",
                  product: "2"
                }), ": Configura el tiempo de gracia para permitir trabajo normal cuando se llegue tarde o se salga temprano respecto a la hora establecida."]
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
            }), ": Redondea automáticamente las horas de inicio y fin. Configura las unidades y los estándares para las horas de inicio y fin."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-fixed-roundup.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.unitMin",
                  product: "2"
                }), ": Define reglas para redondear la hora registrada cuando los eventos de entrada se registran antes o después de la hora de inicio establecida."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.pointMin",
                  product: "2"
                }), ": Define reglas para redondear la hora registrada cuando los eventos de salida se registran antes o después de la hora de fin establecida."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "tip",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["Por ejemplo, si la hora de entrada se establece a las 09:00 y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.unitMin",
                product: "2"
              }), " se establece en 15 minutos y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.pointMin",
                product: "2"
              }), " se establece en 8 minutos, el redondeo se hará de la siguiente manera."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Entrada a las 09:07 → se redondea hacia abajo a 09:00 (menos de 8 minutos)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Entrada a las 09:08 → se redondea hacia arriba a 09:15 (8 minutos o más)"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Las reglas de ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.rounding",
                product: "2"
              }), " tienen prioridad sobre ", (0,jsx_runtime.jsx)(Cmd, {
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
            }), ": Selecciona los elementos para los registros de asistencia."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.punchInTimeLimit",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.punchOutTimeLimit",
              product: "2"
            }), ": Configura el rango de tiempo en el que los usuarios pueden autenticar sus horas de entrada y salida."]
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
          }), ": Configura las deducciones por tiempo de comida de las horas laborales diarias."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.byPunch",
                product: "2"
              }), ": Configura para deducir según los registros de tiempo en el dispositivo de asistencia sin establecer horarios fijos de comida."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.auto",
                product: "2"
              }), ": Configura para deducir automáticamente los tiempos de comida definiendo ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.deductionTime",
                product: "2"
              }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.minimalHoursBeforeDeduction",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.mealDeduction.type.fixed",
                product: "2"
              }), ": Configura para deducir tiempos fijos definiendo ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.startTime",
                product: "2"
              }), " y ", (0,jsx_runtime.jsx)(Cmd, {
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
                children: ["Usar ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction2",
                  product: "2"
                }), " permite deducir dos tiempos de comida de las horas laborales diarias."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Si los tipos de deducción de comida son ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction.type.auto",
                  product: "2"
                }), " o ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction.type.fixed",
                  product: "2"
                }), ", entonces ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction1",
                  product: "2"
                }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.mealDeduction2",
                  product: "2"
                }), " solo pueden configurarse con el mismo tipo."]
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
            }), ": Redondea automáticamente las horas de inicio y fin. Configura las unidades y los estándares para las horas de inicio y fin."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-fixed-roundup.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.unitMin",
                  product: "2"
                }), ": Define reglas para redondear la hora registrada cuando los eventos de entrada se registran antes o después de la hora de inicio establecida."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.pointMin",
                  product: "2"
                }), ": Define reglas para redondear la hora registrada cuando los eventos de salida se registran antes o después de la hora de fin establecida."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "tip",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["Por ejemplo, si la hora de entrada se establece a las 09:00 y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.unitMin",
                product: "2"
              }), " se establece en 15 minutos y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.pointMin",
                product: "2"
              }), " se establece en 8 minutos, el redondeo se hará de la siguiente manera."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Entrada a las 09:07 → se redondea hacia abajo a 09:00 (menos de 8 minutos)"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Entrada a las 09:08 → se redondea hacia arriba a 09:15 (8 minutos o más)"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Las reglas de ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.rounding",
                product: "2"
              }), " tienen prioridad sobre ", (0,jsx_runtime.jsx)(Cmd, {
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
          }), ": Configura los tiempos de descanso."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.breakTime.type.byPunch",
                product: "2"
              }), ": Configura para seguir los registros de tiempo del dispositivo de asistencia sin horarios de descanso fijos. Cuando esta opción está activada, configura ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.maxAllowedBreakTime",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.breakTime.type.fixed",
                product: "2"
              }), ": Establece ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.startTime",
                product: "2"
              }), " y ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shift.endTime",
                product: "2"
              }), " como horarios fijos para los descansos de los usuarios."]
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


;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-day.mdx


const tna_rule_shift_day_frontMatter = {
	id: 'tna-rule-shift-day',
	title: 'Configurar Turno Diario},{',
	description: 'Cree reglas de trabajo aplicando diferentes reglas horarias durante un período de 24 horas.',
	keywords: [
		'Horas laborales',
		'Reglas de trabajo diarias'
	],
	isTranslationMissing: false
};
const tna_rule_shift_day_contentTitle = undefined;

const assets = {

};




const tna_rule_shift_day_toc = [{
  "value": "Guía de opciones de configuración",
  "id": "guía-de-opciones-de-configuración",
  "level": 2
}, ...toc, {
  "value": "Trabajo flexible",
  "id": "trabajo-flexible",
  "level": 3
}, ...toc, {
  "value": "Turno flotante",
  "id": "turno-flotante",
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
      children: "Cree reglas de trabajo aplicando diferentes reglas horarias durante un período de 24 horas. Seleccione entre opciones de trabajo fijo, flexible o flotante y configure la hora de inicio del día, las reglas de redondeo, etc."
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
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.addShift",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-day.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.addShift",
            product: "2"
          }), ", configure cada elemento."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " en la parte inferior de la pantalla para guardar la configuración."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.applyAndAddShift",
              product: "2"
            }), " para seguir agregando reglas de trabajo semanales."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Después de guardar la configuración, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " para agregar otro ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.shift",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "guía-de-opciones-de-configuración",
      children: "Guía de opciones de configuración"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Según el tipo de regla de trabajo, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.flexible",
        product: "2"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.floating",
        product: "2"
      }), ". Las opciones de configuración pueden variar según el tipo de regla de trabajo seleccionado."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "shift.type.fixed",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Es una regla de trabajo para llegada y salida en horas establecidas. Ingrese el nombre y la descripción de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), " como ", (0,jsx_runtime.jsx)(Cmd, {
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
            children: ["Solo es posible agregar un conjunto de reglas de tiempo establecido como ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.countAsAttendance",
              product: "2"
            }), " a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.shift",
              product: "2",
              className: "normal"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configure ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.minDuration",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.rounding",
              product: "2"
            }), " para un conjunto de reglas de tiempo establecido como ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.accumulateTowardOvertime",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trabajo-flexible",
      children: "Trabajo flexible"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Es una regla de trabajo que establece las horas laborables diarias y ajusta de forma flexible las horas de llegada y salida según la hora de inicio del día. Ingrese el nombre y la descripción de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), " como ", (0,jsx_runtime.jsx)(Cmd, {
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
        children: ["No se puede agregar un conjunto de reglas de tiempo configurado como ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "payCode.accumulateTowardOvertime",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "turno-flotante",
      children: "Turno flotante"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Es una regla de trabajo que permite configurar de manera flexible las horas de llegada y salida. Ingrese el nombre y la descripción de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "form.type",
        product: "2"
      }), " como ", (0,jsx_runtime.jsx)(Cmd, {
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
            children: ["Los turnos de trabajo pueden consistir en hasta cinco franjas horarias. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.addplus",
              product: "2"
            }), " para agregar una franja horaria."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Al configurar ausencias, debe seleccionarse la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.timeSegmentSet.default",
              product: "2"
            }), ". Se puede seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.timeSegmentSet.default",
              product: "2"
            }), " entre las franjas horarias configuradas en los turnos de trabajo."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-shift-day-adding-floating-timesegment.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configure ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.startTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.endTime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.minDuration",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shift.rounding",
              product: "2"
            }), " para un conjunto de reglas de tiempo establecido como ", (0,jsx_runtime.jsx)(Cmd, {
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
          children: "Configure reglas de trabajo semanales basadas en las reglas diarias configuradas. Configure reglas de trabajo semanales de forma semanal o diaria."
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