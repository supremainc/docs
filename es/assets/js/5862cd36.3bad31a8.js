"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49727"], {
46115: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_schedule_mdx_586_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-schedule-mdx-586.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_schedule_mdx_586_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-schedule","title":"Configurar el horario","description":"Guía a los usuarios para crear horarios de trabajo especificando las reglas de trabajo establecidas, otras reglas de trabajo, la duración y los días festivos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-schedule","permalink":"/docs/es/platform/biostar_x/tna-rule-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-schedule","title":"Configurar el horario","description":"Guía a los usuarios para crear horarios de trabajo especificando las reglas de trabajo establecidas, otras reglas de trabajo, la duración y los días festivos.","keywords":["Horario de trabajo","Reglas de trabajo"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configurar otras reglas de trabajo","permalink":"/docs/es/platform/biostar_x/tna-rule-shift-overtime"},"next":{"title":"Ver el informe","permalink":"/docs/es/platform/biostar_x/tna-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-schedule.mdx


const frontMatter = {
	id: 'tna-rule-schedule',
	title: 'Configurar el horario',
	description: 'Guía a los usuarios para crear horarios de trabajo especificando las reglas de trabajo establecidas, otras reglas de trabajo, la duración y los días festivos.',
	keywords: [
		'Horario de trabajo',
		'Reglas de trabajo'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configurar el horario",
  "id": "configurar-el-horario",
  "level": 2
}, {
  "value": "Agregar un horario",
  "id": "agregar-un-horario",
  "level": 3
}, {
  "value": "Guía de opciones de configuración",
  "id": "guía-de-opciones-de-configuración",
  "level": 3
}, {
  "value": "Editar un horario",
  "id": "editar-un-horario",
  "level": 3
}, {
  "value": "Eliminar un horario",
  "id": "eliminar-un-horario",
  "level": 3
}, {
  "value": "Agregar un horario temporal",
  "id": "agregar-un-horario-temporal",
  "level": 2
}, {
  "value": "Agregar y eliminar una ausencia",
  "id": "agregar-y-eliminar-una-ausencia",
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
      children: ["Cree horarios de trabajo especificando ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "rule.rule",
        product: "2",
        className: "normal"
      }), ", la duración y los días festivos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "También agregue horarios temporales o licencias personales al horario de trabajo creado."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Antes de crear el horario, asegúrese de haber creado correctamente ", (0,jsx_runtime.jsx)(Cmd, {
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
        }), " y los días festivos."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Para obtener más información sobre la configuración de reglas de trabajo, consulte lo siguiente:"
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
            children: ["Para obtener más información sobre la configuración de días festivos, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule#addHolidaySchedule",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurar-el-horario",
      children: "Configurar el horario"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agregar-un-horario",
      children: "Agregar un horario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agregue el horario de trabajo para los usuarios registrados como se indica a continuación."
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
          children: ["Haga clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addSchedule",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addSchedule",
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
            children: ["Después de guardar la configuración, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " para agregar otro ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.schedule",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guía-de-opciones-de-configuración",
      children: "Guía de opciones de configuración"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guía de opciones de configuración del horario de trabajo."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-schedule-template-adding.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.name",
            product: "2"
          }), ": Ingrese el nombre del horario de trabajo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.description",
            product: "2"
          }), ": Ingrese una descripción para el horario de trabajo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), ": Seleccione el ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), " configurado. Configurar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), " ignora las reglas de horas extra establecidas en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), ". Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), " si no se utiliza."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "rule.rule",
              product: "2",
              className: "normal"
            }), " deseado no está disponible, agrégalo. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-overtime",
              children: "lo siguiente"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2"
          }), ": Seleccione la ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " configurada. Una vez configurada, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " no se puede modificar."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si la ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "scheduleTemplate.scheduleTemplate",
              product: "2",
              className: "normal"
            }), " deseada no está disponible, agréguela. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-schedule",
              children: "lo siguiente"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.period",
            product: "2"
          }), ": Defina el periodo para recopilar eventos de asistencia."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "La fecha de inicio no se puede cambiar una vez establecida. La fecha de finalización se puede cambiar más adelante y, si se cambia a una fecha anterior a la establecida, se eliminarán los eventos de asistencia del periodo modificado."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.holiday",
            product: "2"
          }), ": Seleccione el calendario de días festivos configurado. Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), " si no se utiliza."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el calendario de días festivos deseado no está disponible, agréguelo. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule#addHolidaySchedule",
              children: "lo siguiente"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.users",
            product: "2"
          }), ": Agregue usuarios para aplicar las reglas."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La cantidad de usuarios incluida en el horario de trabajo general no puede exceder el máximo admitido por su licencia registrada de gestión de asistencia. El número máximo de usuarios por licencia se detalla en ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/licensing"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editar-un-horario",
      children: "Editar un horario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guía para modificar horarios de trabajo registrados."
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
          children: ["Haga clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el elemento que desea modificar de la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), ". Como alternativa, haga clic en el botón ", (0,jsx_runtime.jsx)(IcEdit, {}), " del elemento que desea modificar en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Modifique el elemento deseado y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eliminar-un-horario",
      children: "Eliminar un horario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guía para eliminar horarios de trabajo registrados."
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
          children: ["Haga clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en la casilla de verificación del elemento que desea eliminar de la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.deleteSchedule",
            product: "2"
          }), " en la parte superior derecha de la pantalla. Como alternativa, haga clic en el botón ", (0,jsx_runtime.jsx)(IcTrash2, {}), " del elemento que desea eliminar en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el mensaje de confirmación, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agregar-un-horario-temporal",
      children: "Agregar un horario temporal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si ya hay un horario registrado, se puede aplicar al usuario una regla de trabajo temporal diferente."
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
          children: ["Haga clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(IcTnaExpand, {}), " del horario deseado de la lista en el lado izquierdo de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Aparecerá una lista de usuarios asignados al horario y, al seleccionar un usuario para aplicar un horario temporal, se mostrará el calendario."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en la fecha del calendario a la que desea agregar un horario temporal."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addTemporarySchedule",
            product: "2"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de configuración ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addTemporarySchedule",
            product: "2"
          }), ", configure cada elemento."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para aplicar el mismo horario de trabajo a otros usuarios, haga clic en el botón ", (0,jsx_runtime.jsx)(IcSearch, {}), " y seleccione los usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " para aplicar las reglas de trabajo establecidas."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para eliminar el horario temporal aplicado al usuario, haga clic en el horario temporal establecido en el calendario. Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.yes",
          product: "2"
        }), " cuando aparezca la ventana del mensaje de confirmación."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agregar-y-eliminar-una-ausencia",
      children: "Agregar y eliminar una ausencia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agregue el horario de ausencia personal de un usuario."
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
          children: ["Haga clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2"
          }), " en la barra lateral izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(IcTnaExpand, {}), " del horario deseado de la lista en el lado izquierdo de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Aparecerá una lista de usuarios asignados al horario y, al seleccionar un usuario para aplicar el horario de ausencia, se mostrará el calendario."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en la fecha del calendario para agregar el horario de ausencia del usuario."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-temp-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addLeave",
            product: "2"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de configuración ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "leave.editLeave",
            product: "2"
          }), ", configure cada elemento."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-schedule-template-add-leave-setting.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para aplicar el mismo horario de ausencia a otros usuarios, haga clic en el botón ", (0,jsx_runtime.jsx)(IcSearch, {}), " y seleccione los usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " para aplicar el horario de ausencia establecido."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si las reglas de tiempo de gestión de ausencias deseadas no están disponibles, agréguelas. Para obtener más información sobre cómo agregar reglas de tiempo, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-rule-shift-paycode",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para eliminar el horario de ausencia aplicado al usuario, haga clic en el botón ", (0,jsx_runtime.jsx)(IcTrash2, {}), " del horario de ausencia establecido en el calendario. Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.yes",
              product: "2"
            }), " cuando aparezca la ventana del mensaje de confirmación."]
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