"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41239"], {
28707: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_thermal_mask_mdx_9e9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-thermal-mask-mdx-9e9.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_thermal_mask_mdx_9e9_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-thermal-mask","title":"Configuración térmica y de máscara","description":"Esto proporciona orientación para configurar detalles de las cámaras térmicas y el uso de máscaras.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-thermal-mask.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-thermal-mask","permalink":"/docs/es/platform/biostar_x/settings-device-details-thermal-mask","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-thermal-mask.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-thermal-mask","title":"Configuración térmica y de máscara","description":"Esto proporciona orientación para configurar detalles de las cámaras térmicas y el uso de máscaras.","keywords":["Dispositivo","Cámara térmica","mascarilla"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración avanzada","permalink":"/docs/es/platform/biostar_x/settings-device-details-advanced"},"next":{"title":"Configuración del intercomunicador","permalink":"/docs/es/platform/biostar_x/settings-device-details-interphone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-thermal-mask.mdx


const frontMatter = {
	id: 'settings-device-details-thermal-mask',
	title: 'Configuración térmica y de máscara',
	description: 'Esto proporciona orientación para configurar detalles de las cámaras térmicas y el uso de máscaras.',
	keywords: [
		'Dispositivo',
		'Cámara térmica',
		'mascarilla'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configuración de máscara",
  "id": "mask-settings",
  "level": 2
}, {
  "value": "Configuración de la cámara térmica",
  "id": "thermal-camera-settings",
  "level": 2
}, {
  "value": "Métodos de verificación térmica y de mascarilla",
  "id": "thermal-mask-verification",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["En las secciones ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.temperMask",
        product: "2"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.mask",
        product: "2"
      }), ", puede configurar parámetros detallados para la cámara térmica y el uso de máscaras."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "La cámara térmica puede vincularse al dispositivo de autenticación facial de Suprema para medir la temperatura de los usuarios que pasan por la puerta y restringir el acceso de aquellos que superen la temperatura umbral."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El sistema detecta máscaras y restringe el acceso a los usuarios que no lleven máscara."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función de configuración ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.title",
              product: "2"
            }), " es compatible con los modelos FaceStation 2 y FaceStation F2. Consulte las cámaras térmicas compatibles a continuación."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "TCM10-FS2"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "TCM10-FSF2"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función de configuración ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.mask.useMask",
              product: "2"
            }), " es compatible con FaceStation F2, BioStation 3 y BioEntry W3."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el usuario ha realizado cambios, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), ". Los cambios no se aplicarán al dispositivo si no se guardan."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mask-settings",
      children: "Configuración de máscara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.mask.title",
        product: "2"
      }), ", puede definir si se utiliza la detección de máscara."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.mask.useMask",
            product: "2"
          }), ": Seleccione si usar la detección de máscara."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.mask.checkModeHard",
                product: "2"
              }), ": A los usuarios sin máscara se les niega la autenticación y se registran eventos de no uso de máscara."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.mask.checkModeSoft",
                product: "2"
              }), ": Los usuarios sin máscara pueden autenticarse, pero se registran eventos de no uso de máscara."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.maskCheckModeOff",
                product: "2"
              }), ": No se utiliza la detección de máscara."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.maskdetectlevel",
            product: "2"
          }), ": Seleccione la sensibilidad de la detección de máscara."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thermal-camera-settings",
      children: "Configuración de la cámara térmica"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el grupo ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.thermal.title",
        product: "2"
      }), ", puede establecer el uso de la cámara térmica y sus parámetros."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useThermalCamera",
            product: "2"
          }), ": Configure si se utiliza la cámara térmica."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.checkModeHard",
                product: "2"
              }), ": A los usuarios que superen la temperatura umbral se les niega la autenticación y se registran eventos de temperatura excedida."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.checkModeSoft",
                product: "2"
              }), ": Los usuarios que superen la temperatura umbral pueden autenticarse, pero se registran eventos de temperatura excedida."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.usecentigrade",
            product: "2"
          }), ": Defina la unidad de visualización de temperatura."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.temperatureThresholdCelc",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.temperatureThresholdFahr",
            product: "2"
          }), ": Establezca los valores mínimo y máximo de la temperatura umbral que restringe el acceso."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Los usuarios con una temperatura superficial por debajo del valor ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Low"
          }), " o por encima del valor ", (0,jsx_runtime.jsx)(Cmd, {
            children: "High"
          }), " se restringirán de entrar según la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useThermalCamera",
            product: "2"
          }), ". Puede establecer el rango de 1 ℃ a 45 ℃ y el valor ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Low"
          }), " no puede ser mayor que el valor ", (0,jsx_runtime.jsx)(Cmd, {
            children: "High"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useAuditTemperature",
            product: "2"
          }), ": Configure si se guarda el registro de temperatura del usuario."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.enabled",
                product: "2"
              }), ": Registra tanto el éxito de autenticación como el valor de temperatura del usuario."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disable",
                product: "2"
              }), ": Solo registra el éxito de autenticación."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useTemperatureRejectSound",
            product: "2"
          }), ": Configure si se notifica el fallo de autenticación debido a superar la temperatura umbral."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.useOverlapThermal",
            product: "2"
          }), ": Configure si se muestran imágenes infrarrojas en la pantalla del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.cameraconfig",
            product: "2"
          }), ": Configure opciones detalladas para la cámara térmica."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.compensationCalcTemp",
                product: "2"
              }), ": Ajuste la temperatura para medir de forma consistentemente más alta o más baja según el entorno de uso del producto. Por ejemplo, si las temperaturas se miden constantemente 0.1 ℃ más altas, establezca el valor de compensación de temperatura en -0.1 ℃."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.distance",
                product: "2"
              }), ": Establezca la distancia entre el usuario y la cámara térmica."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.emissionRate",
                product: "2"
              }), ": Establezca la emisividad infrarroja."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.useDynamicROI",
                product: "2"
              }), ": Si hay otras fuentes de luz en el entorno, configure la cámara térmica para medir automáticamente la temperatura del usuario sin interferencia de luces cercanas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.roiX",
                product: "2"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.roiY",
                product: "2"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.roiWidth",
                product: "2"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.roiHeight",
                product: "2"
              }), ": Si la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.thermal.useDynamicROI",
                product: "2"
              }), " está configurada en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disable",
                product: "2"
              }), ", establezca manualmente la ROI (Región de interés). Ajuste la ubicación y el tamaño de la ROI para especificar el área donde la cámara térmica medirá la temperatura."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La configuración de los valores ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Low"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              children: "High"
            }), " de la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.temperatureThreshold",
              product: "2"
            }), " es compatible a partir de las siguientes versiones de firmware."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation 2 versión de firmware 1.4.2 o superior"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 versión de firmware 1.0.2 o superior"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para un rendimiento óptimo, se recomienda usar la configuración predeterminada para las subopciones en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.thermal.cameraconfig",
              product: "2"
            }), ". Los valores predeterminados para las opciones de cada dispositivo se enumeran a continuación."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "Ítem"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "FaceStation 2"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "FaceStation F2"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.distance",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "100"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "100"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.emissionRate",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "0.98"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "0.98"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.roiX",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "47"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "30"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.roiY",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "45"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "25"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.roiWidth",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "15"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "50"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.thermal.roiHeight",
                    product: "2"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "10"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "55"
                })]
              })]
            })]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thermal-mask-verification",
      children: "Métodos de verificación térmica y de mascarilla"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.thermal.mode",
        product: "2"
      }), " group permite determinar el método de verificación según el propósito del dispositivo cuando las opciones ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.mask.useMask",
        product: "2"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.thermal.useThermalCamera",
        product: "2"
      }), " están configuradas en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.use",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.authBeforeMode",
            product: "2"
          }), ": Comprueba el uso de mascarilla del usuario o mide la temperatura después de la autenticación."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.authAfterMode",
            product: "2"
          }), ": Comprueba el uso de mascarilla del usuario o mide la temperatura antes de la autenticación. En este caso, los usuarios que no lleven mascarilla o superen la temperatura umbral no podrán autenticarse."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.thermal.authTemperatureOnlyMode",
            product: "2"
          }), ": El dispositivo solo se puede usar para verificar el uso de mascarilla o medir la temperatura. Los usuarios que lleven mascarilla o tengan una temperatura por debajo del umbral pueden ingresar independientemente de la autenticación."]
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