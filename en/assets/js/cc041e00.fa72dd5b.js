"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1046"], {
50138: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_confidential_smartcardapi_mdx_cc0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-confidential-smartcardapi-mdx-cc0.json
var site_docs_confidential_smartcardapi_mdx_cc0_namespaceObject = JSON.parse('{"id":"confidential/smartcardapi","title":"Smartcard API","description":"BioStar의 스마트 카드 데이터를 읽고 쓰는 함수를 제공하는 API입니다.","source":"@site/docs/confidential/smartcardapi.mdx","sourceDirName":"confidential","slug":"/confidential/smartcardapi","permalink":"/docs/en/confidential/smartcardapi","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/confidential/smartcardapi.mdx","tags":[],"version":"current","frontMatter":{"id":"smartcardapi","title":"Smartcard API","toc_max_heading_level":3,"isTranslationMissing":true}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/TypedefStruct/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"typedefContainer":"typedefContainer_Wn7J","titleRow":"titleRow_juh5","metadata":"metadata_jjxW","category":"category_KdBD","size":"size_yHpg","version":"version_y0px","description":"description_vl9m","section":"section_UAKO","sectionHeader":"sectionHeader_fRZ_","sectionSubtitle":"sectionSubtitle_Uhu4","hierarchyContainer":"hierarchyContainer_TJKg","hierarchyLevel":"hierarchyLevel_eVaW","nestedLevel":"nestedLevel_fvI8","hierarchyItem":"hierarchyItem_GODh","nestedLeveltop":"nestedLeveltop_mB2_","hierarchyNode":"hierarchyNode_fJgq","nodeHeader":"nodeHeader_VmLc","hierarchyName":"hierarchyName_Xieu","hierarchyType":"hierarchyType_cEEc","hierarchySize":"hierarchySize_iDgU","hierarchyDesc":"hierarchyDesc_qbou","references":"references_Fuyx","referencesLabel":"referencesLabel_ptzV","reference":"reference_oQRT","childrenContainer":"childrenContainer_yihK","structLink":"structLink_tUc1","relatedStruct":"relatedStruct_OSZX","memoryBlocks":"memoryBlocks_TkDs","memoryBlock":"memoryBlock_RkZ2","memoryBlockHeader":"memoryBlockHeader_jD1Y","memoryOffset":"memoryOffset_djHn","memoryFieldName":"memoryFieldName_QGoe","memoryType":"memoryType_KcxH","memorySize":"memorySize_eMk3","memoryDesc":"memoryDesc_np0k","codeBlock":"codeBlock_LQwb","field":"field_RchT","fieldHeader":"fieldHeader_HncE","fieldNumber":"fieldNumber_PrLt","fieldName":"fieldName_xHbg","fieldType":"fieldType_fbjm","fieldSize":"fieldSize_dkeI","fieldRange":"fieldRange_kmek","fieldDescription":"fieldDescription_sT1v","fieldConstants":"fieldConstants_jw4N","relatedStructs":"relatedStructs_KK4K","relatedLabel":"relatedLabel_uofL","dependencyGroup":"dependencyGroup_PDbs","dependencyList":"dependencyList_DTc4","dependency":"dependency_R2lA","depName":"depName_u4Ua","depType":"depType_lMEs","depDesc":"depDesc_T3ac","constantsTable":"constantsTable_GcDj","variantsTable":"variantsTable_UAHC","constantValue":"constantValue_cMnk","constantNote":"constantNote_TGMI","notesList":"notesList_P0Bz","note":"note_FyD5"});
// EXTERNAL MODULE: ./node_modules/@saucelabs/theme-github-codeblock/build/theme/CodeBlock/index.js
var CodeBlock = __webpack_require__(1841);
var CodeBlock_default = /*#__PURE__*/__webpack_require__.n(CodeBlock);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(34403);
;// CONCATENATED MODULE: ./src/components/TypedefStruct/index.js





const TypedefStruct_TypedefStruct = (param)=>{
    let { name, description, code, fields = [], constants = [], notes = [], dependencies = [], usedBy = [], size, category, hierarchy = [], linkPrefix = "#" } = param;
    const renderHierarchy = function(items) {
        let level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: `${styles_module.hierarchyLevel} ${level > 0 ? styles_module.nestedLevel : styles_module.nestedLeveltop}`,
            children: items.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: styles_module.hierarchyItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            className: styles_module.hierarchyNode,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: styles_module.nodeHeader,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: styles_module.hierarchyName,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: `#${item.name.toLowerCase()}`,
                                                children: item.name
                                            })
                                        }),
                                        item.type && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: styles_module.hierarchyType,
                                            children: item.type
                                        }),
                                        item.size && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: styles_module.hierarchySize,
                                            children: [
                                                item.size,
                                                " ",
                                                item.size > 1 ? "bytes" : "byte"
                                            ]
                                        })
                                    ]
                                }),
                                item.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: styles_module.hierarchyDesc,
                                    children: item.description
                                }),
                                item.references && item.references.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: styles_module.references,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: styles_module.referencesLabel,
                                            children: "\uCC38\uC870:"
                                        }),
                                        item.references.map((ref, refIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: `${linkPrefix}${ref.toLowerCase()}`,
                                                className: styles_module.reference,
                                                children: ref
                                            }, refIndex))
                                    ]
                                })
                            ]
                        }),
                        item.children && item.children.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: styles_module.childrenContainer,
                            children: renderHierarchy(item.children, level + 1)
                        })
                    ]
                }, index))
        });
    };
    const renderStructLink = (structName)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: `${linkPrefix}${structName.toLowerCase()}`,
            className: styles_module.structLink,
            children: structName
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: styles_module.typedefContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.titleRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                as: "h3",
                                id: name.toLowerCase(),
                                children: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: styles_module.metadata,
                                children: [
                                    category && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: styles_module.category,
                                        children: category
                                    }),
                                    size && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: styles_module.size,
                                        children: [
                                            size,
                                            " ",
                                            size > 1 ? "bytes" : "byte"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: styles_module.description,
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.sectionHeader,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                            as: "h4",
                            children: "\uAD6C\uC870\uCCB4 \uC815\uC758"
                        })
                    }),
                    code && /*#__PURE__*/ (0,jsx_runtime.jsx)((CodeBlock_default()), {
                        language: "c",
                        children: code
                    })
                ]
            }),
            hierarchy.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.sectionHeader,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                            as: "h4",
                            children: "\uAD6C\uC870 \uACC4\uCE35"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.hierarchyContainer,
                        children: renderHierarchy(hierarchy)
                    })
                ]
            }),
            fields.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.sectionHeader,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                            as: "h4",
                            children: "\uD544\uB4DC \uC0C1\uC138"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.fieldsList,
                        children: fields.map((field, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: styles_module.field,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.fieldHeader,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.fieldNumber,
                                                children: index + 1
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.fieldName,
                                                id: field.name.toLowerCase(),
                                                children: field.name
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.fieldType,
                                                children: field.type
                                            }),
                                            field.size && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: styles_module.fieldSize,
                                                children: [
                                                    field.size,
                                                    " ",
                                                    field.size > 1 ? "bytes" : "byte"
                                                ]
                                            }),
                                            field.range && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.fieldRange,
                                                children: field.range
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: styles_module.fieldDescription,
                                        dangerouslySetInnerHTML: {
                                            __html: field.description
                                        }
                                    }),
                                    field.constants && field.constants.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.fieldConstants,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                                as: "h6",
                                                children: "\uAC00\uB2A5\uD55C \uAC12"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                                                className: styles_module.constantsTable,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                                    children: "\uAC12"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                                                    children: "\uC124\uBA85"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                                        children: field.constants.map((constant, constIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                                        className: styles_module.constantValue,
                                                                        children: constant.value
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: constant.description
                                                                            }
                                                                        })
                                                                    })
                                                                ]
                                                            }, constIndex))
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    field.relatedStructs && field.relatedStructs.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.relatedStructs,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.relatedLabel,
                                                children: "\uAD00\uB828 \uAD6C\uC870\uCCB4:"
                                            }),
                                            field.relatedStructs.map((struct, structIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: renderStructLink(struct)
                                                }, structIndex))
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            constants.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.sectionHeader,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                as: "h4",
                                children: "\uC0C1\uC218 \uC815\uC758"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: styles_module.sectionSubtitle,
                                children: [
                                    constants.length,
                                    "\uAC1C \uC0C1\uC218"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                        className: styles_module.variantsTable,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            children: "\uAC12"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            children: "\uC124\uBA85"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                            children: "\uBE44\uACE0"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                                children: constants.map((constant, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                className: styles_module.constantValue,
                                                children: constant.value
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                children: constant.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                                children: constant.note
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            (dependencies.length > 0 || usedBy.length > 0) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.sectionHeader,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                            as: "h4",
                            children: "\uC758\uC874\uC131 \uAD00\uACC4"
                        })
                    }),
                    dependencies.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.dependencyGroup,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                as: "h5",
                                children: "\uC774 \uAD6C\uC870\uCCB4\uAC00 \uC758\uC874\uD558\uB294 \uD0C0\uC785"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.dependencyList,
                                children: dependencies.map((dep, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.dependency,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depName,
                                                children: renderStructLink(dep.name)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depType,
                                                children: dep.type
                                            }),
                                            dep.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depDesc,
                                                children: dep.description
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    }),
                    usedBy.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.dependencyGroup,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                                as: "h5",
                                children: "\uC774 \uAD6C\uC870\uCCB4\uB97C \uC0AC\uC6A9\uD558\uB294 \uD0C0\uC785"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.dependencyList,
                                children: usedBy.map((use, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.dependency,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depName,
                                                children: renderStructLink(use.name)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depType,
                                                children: use.type
                                            }),
                                            use.description && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: styles_module.depDesc,
                                                children: use.description
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* ESM default export */ const TypedefStruct = (TypedefStruct_TypedefStruct);

;// CONCATENATED MODULE: ./docs/confidential/smartcardapi.mdx


const frontMatter = {
	id: 'smartcardapi',
	title: 'Smartcard API',
	toc_max_heading_level: 3,
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "구조체 관계도",
  "id": "구조체-관계도",
  "level": 2
}, {
  "value": "구조체",
  "id": "구조체",
  "level": 2
}, {
  "value": "CRC 계산 및 검증",
  "id": "crc-계산-및-검증",
  "level": 2
}, {
  "value": "hdrCRC, cardCRC란?",
  "id": "hdrcrc-cardcrc란",
  "level": 3
}, {
  "value": "CRC 계산 방법",
  "id": "crc-계산-방법",
  "level": 3
}, {
  "value": "검증 방법",
  "id": "검증-방법",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    mermaid: "mermaid",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar의 스마트 카드 데이터를 읽고 쓰는 함수를 제공하는 API입니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "주요 함수"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://kb.supremainc.com/bs2sdk/doku.php?id=ko:bs2_scancard",
              children: "BS2_ScanCard"
            })
          }), ": 장치에서 카드를 스캔하고 카드 데이터를 분석합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://kb.supremainc.com/bs2sdk/doku.php?id=ko:bs2_writecard",
              children: "BS2_WriteCard"
            })
          }), ": SmartCard에 데이터를 저장합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://kb.supremainc.com/bs2sdk/doku.php?id=ko:bs2_erasecard",
              children: "BS2_EraseCard"
            })
          }), ": SmartCard를 포맷합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "구조체-관계도",
      children: "구조체 관계도"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "classDiagram\n    %% 최상위 구조체\n    class BS2Card {\n        <<struct>>\n        +uint8_t isSmartCard\n        +union card_data\n    }\n    \n    %% 스마트카드 데이터 구조체\n    class BS2SmartCardData {\n        <<struct>>\n        +BS2SmartCardHeader header\n        +uint8_t[32] cardID\n        +BS2SmartCardCredentials credentials\n        +BS2AccessOnCardData accessOnData\n    }\n    \n    %% 스마트카드 헤더\n    class BS2SmartCardHeader {\n        <<struct>>\n        +uint16_t hdrCRC\n        +uint16_t cardCRC\n        +BS2_CARD_TYPE cardType\n        +uint8_t numOfTemplate\n        +uint16_t templateSize\n        +uint16_t issueCount\n        +uint8_t duressMask\n        +uint8_t cardAuthMode\n        +uint8_t useAlphanumericID\n        +uint8_t cardAuthModeEx\n        +uint8_t numOfFaceTemplate\n        +uint8_t[1] reserved\n    }\n    \n    %% 인증 정보 구조체\n    class BS2SmartCardCredentials {\n        <<struct>>\n        +uint8_t[32] pin\n        +uint8_t[1536] templateData\n    }\n    \n    %% 출입 권한 구조체\n    class BS2AccessOnCardData {\n        <<struct>>\n        +uint16_t[16] accessGroupID\n        +BS2_DATETIME startTime\n        +BS2_DATETIME endTime\n    }\n    \n    %% 타입 정의\n    class BS2_CARD_TYPE {\n        <<enumeration>>\n        UNKNOWN = 0x00\n        CSN = 0x01\n        SECURE = 0x02\n        ACCESS = 0x03\n        WIEGAND = 0x0A\n        CONFIG = 0x0B\n    }\n    \n    class BS2_DATETIME {\n        <<typedef>>\n        uint32_t timestamp\n    }\n    \n    %% 구조체 간 포함 관계 (Composition)\n    BS2Card *-- BS2SmartCardData : union member\n    BS2SmartCardData *-- BS2SmartCardHeader : contains\n    BS2SmartCardData *-- BS2SmartCardCredentials : contains\n    BS2SmartCardData *-- BS2AccessOnCardData : contains\n    \n    %% 타입 의존성 (Dependency)\n    BS2SmartCardHeader ..> BS2_CARD_TYPE : uses\n    BS2AccessOnCardData ..> BS2_DATETIME : uses\n      \n    %% 클래스 스타일 정의\n    classDef coreStruct fill:#e3f2fd,stroke:#1976d2,stroke-width:3px\n    classDef smartStruct fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px\n    classDef subStruct fill:#e8f5e8,stroke:#388e3c,stroke-width:2px\n    classDef typeStruct fill:#fff3e0,stroke:#f57c00,stroke-width:1px"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "구조체",
      children: "구조체"
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct, {
      name: "BS2Card",
      description: "모든 카드 타입을 포괄하는 최상위 구조체입니다.",
      category: "Core Structure",
      size: "1657",
      code: `typedef struct {
  uint8_t isSmartCard;
  union {
      BS2SmartCardData smartCard;
  };
} BS2Card;`,
      hierarchy: [{
        name: "BS2Card",
        type: "union wrapper",
        size: 1657,
        description: "카드 타입 식별 및 데이터 저장",
        children: [{
          name: "isSmartCard",
          type: "uint8_t",
          size: 1,
          description: "SmartCard 여부 플래그(flag)"
        }, {
          name: "Union 데이터",
          description: "카드 타입별 데이터",
          children: [{
            name: "smartCard",
            type: "BS2SmartCardData",
            size: 1656,
            description: "SmartCard 전체 데이터",
            references: ["BS2SmartCardData"]
          }]
        }]
      }],
      fields: [{
        name: "isSmartCard",
        type: "uint8_t",
        size: 1,
        offset: 0,
        description: "SmartCard 여부를 나타내는 플래그(flag)입니다.",
        constants: [{
          value: "1",
          description: "SmartCard (<code>BS2SmartCardData</code> 사용)"
        }]
      }, {
        name: "smartCard",
        type: "BS2SmartCardData",
        size: 1656,
        offset: 1,
        description: "SmartCard 데이터입니다. <code>isSmartCard</code>가 1일 때 사용합니다.",
        relatedStructs: ["BS2SmartCardData"]
      }],
      dependencies: [{
        name: "BS2SmartCardData",
        type: "struct",
        description: "SmartCard 데이터 구조체"
      }]
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct, {
      name: "BS2SmartCardData",
      description: "SmartCard의 모든 데이터를 포함하는 복합 구조체입니다.",
      category: "Smart Card",
      size: "1656",
      code: `typedef struct {
  BS2SmartCardHeader header;
  uint8_t cardID[BS2_CARD_DATA_SIZE];
  BS2SmartCardCredentials credentials;
  BS2AccessOnCardData accessOnData;
} BS2SmartCardData;`,
      hierarchy: [{
        name: "BS2SmartCardData",
        type: "composite struct",
        size: 1656,
        description: "SmartCard 전체 데이터 컨테이너",
        children: [{
          name: "header",
          type: "BS2SmartCardHeader",
          size: 16,
          description: "SmartCard 헤더",
          references: ["BS2SmartCardHeader"]
        }, {
          name: "cardID",
          type: "uint8_t[32]",
          size: 32,
          description: "카드 식별자",
          children: [{
            name: "cardID: Access on Card(AOC)",
            type: "bytes[0-31]",
            size: 32,
            description: "AOC: 전체 32바이트 사용"
          }, {
            name: "cardID: Secure Credential Card(SCC)",
            type: "bytes[0-31]",
            size: 32,
            description: "SCC: 카드 ID(32바이트)",
            children: [{
              name: "cardID (SCC)",
              type: "bytes[0-23]",
              size: 24,
              description: "SCC: 카드 ID(24바이트)"
            }, {
              name: "issueCount (SCC)",
              type: "bytes[24-27]",
              size: 4,
              description: "SCC: 발급 횟수"
            }, {
              name: "timeStamp (SCC)",
              type: "bytes[28-31]",
              size: 4,
              description: "SCC: 발급 시간"
            }]
          }]
        }, {
          name: "credentials",
          type: "BS2SmartCardCredentials",
          size: 1568,
          description: "인증 정보 (PIN, 생체정보)",
          references: ["BS2SmartCardCredentials"]
        }, {
          name: "accessOnData",
          type: "BS2AccessOnCardData",
          size: 40,
          description: "출입 권한 정보",
          references: ["BS2AccessOnCardData"]
        }]
      }],
      fields: [{
        name: "header",
        type: "BS2SmartCardHeader",
        size: 16,
        offset: 0,
        description: "SmartCard 헤더입니다.",
        relatedStructs: ["BS2SmartCardHeader"]
      }, {
        name: "cardID",
        type: "uint8_t[BS2_CARD_DATA_SIZE]",
        size: 32,
        offset: 16,
        description: "단말기에서 사용할 카드 식별자입니다. <b>Access on Card(AOC)</b>는 배열의 32byte를 Card ID로 사용하고, <b>Secure Credential Card(SCC)</b>는 배열의 24byte를 Card ID로 사용합니다. <b>Secure Credential Card(SCC)</b>는 32byte를 Card ID(24 bytes)로, issueCount(4byte) 그리고 Time Stamp(4byte)로 채워져야 합니다. 또한, <code>BS2UserBlob</code> 구조체의 cardObjs array가 SC Card로 채워야 하며, SC Card 발급 시마다 <code>cardObjs</code>를 업데이트해야 합니다."
      }, {
        name: "credentials",
        type: "BS2SmartCardCredentials",
        size: 1568,
        offset: 48,
        description: "PIN 코드나 지문 템플릿이 저장되어 있는 인증 데이터 영역입니다.",
        relatedStructs: ["BS2SmartCardCredentials"]
      }, {
        name: "accessOnData",
        type: "BS2AccessOnCardData",
        size: 40,
        offset: 1616,
        description: "AOC 카드에서 사용하는 영역으로 출입 그룹 정보를 가지고 있습니다.",
        relatedStructs: ["BS2AccessOnCardData"]
      }],
      dependencies: [{
        name: "BS2SmartCardHeader",
        type: "struct",
        description: "SmartCard 헤더"
      }, {
        name: "BS2SmartCardCredentials",
        type: "struct",
        description: "인증 정보"
      }, {
        name: "BS2AccessOnCardData",
        type: "struct",
        description: "출입 권한 데이터"
      }, {
        name: "BS2_CARD_DATA_SIZE",
        type: "constant",
        description: "카드 데이터 크기 상수(32)"
      }],
      usedBy: [{
        name: "BS2Card",
        type: "union",
        description: "카드 타입 래퍼"
      }]
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct, {
      name: "BS2SmartCardHeader",
      description: "SmartCard 헤더 정보를 담는 구조체입니다.",
      category: "Smart Card",
      size: "16",
      code: `typedef struct {
  uint16_t hdrCRC;
  uint16_t cardCRC;
  BS2_CARD_TYPE cardType;
  uint8_t numOfTemplate;
  uint16_t templateSize;
  uint16_t issueCount;
  uint8_t duressMask;
  uint8_t cardAuthMode;
  uint8_t useAlphanumericID;
  uint8_t cardAuthModeEx;
  uint8_t numOfFaceTemplate;
  uint8_t reserved[1];
} BS2SmartCardHeader;`,
      hierarchy: [{
        name: "BS2SmartCardHeader",
        type: "struct",
        size: 16,
        description: "SmartCard 헤더 구조체",
        children: [{
          name: "체크섬 영역",
          description: "데이터 무결성 검증",
          children: [{
            name: "hdrCRC",
            type: "uint16_t",
            size: 2,
            description: "카드 헤더 체크섬"
          }, {
            name: "cardCRC",
            type: "uint16_t",
            size: 2,
            description: "카드 데이터 체크섬"
          }]
        }, {
          name: "카드 메타데이터",
          description: "카드 타입 및 템플릿 정보",
          children: [{
            name: "cardType",
            type: "BS2_CARD_TYPE",
            size: 1,
            description: "카드 타입"
          }, {
            name: "numOfTemplate",
            type: "uint8_t",
            size: 1,
            description: "지문 템플릿 수"
          }, {
            name: "templateSize",
            type: "uint16_t",
            size: 2,
            description: "템플릿 크기"
          }, {
            name: "numOfFaceTemplate",
            type: "uint8_t",
            size: 1,
            description: "얼굴 템플릿 수"
          }]
        }, {
          name: "인증 설정",
          description: "카드 인증 모드 및 옵션",
          children: [{
            name: "cardAuthMode",
            type: "uint8_t",
            size: 1,
            description: "IR Face 기반 인증 모드"
          }, {
            name: "cardAuthModeEx",
            type: "uint8_t",
            size: 1,
            description: "Visual Face 기반 인증 모드"
          }, {
            name: "useAlphanumericID",
            type: "uint8_t",
            size: 1,
            description: "영숫자 ID 사용 여부"
          }]
        }]
      }],
      fields: [{
        name: "hdrCRC",
        type: "uint16_t",
        size: 2,
        offset: 0,
        description: "카드 헤더 체크섬 값입니다. (cardCRC - reserved)"
      }, {
        name: "cardCRC",
        type: "uint16_t",
        size: 2,
        offset: 2,
        description: "카드 데이터 체크섬 값입니다. (<code>BS2SmartCardHeader.cardType</code> - <code>BS2SmartCardData.accessOnData</code>)"
      }, {
        name: "cardType",
        type: "BS2_CARD_TYPE",
        size: 1,
        offset: 4,
        description: "카드 유형의 코드 값입니다.",
        constants: [{
          value: "0x00",
          description: "알려지지 않음"
        }, {
          value: "0x01",
          description: "CSN 카드"
        }, {
          value: "0x02",
          description: "Secure 카드"
        }, {
          value: "0x03",
          description: "Access 카드"
        }, {
          value: "0x0A",
          description: "Wiegand 카드"
        }, {
          value: "0x0B",
          description: "Config 카드"
        }]
      }, {
        name: "numOfTemplate",
        type: "uint8_t",
        size: 1,
        offset: 5,
        description: "지문 템플릿의 개수입니다. AOC 카드 구조상 템플릿은 <code>BS2SmartCardCredentials</code>에 저장됩니다. 그리고 이곳에는 지문 또는 얼굴이 선택적으로 저장됩니다. 지문과 얼굴이 함께 저장되지 않습니다. 따라서 AOC 카드에 지문 템플릿을 저장하려면, <code>numOfFacetemplate</code>은 반드시 <code>0</code>으로 설정되어야 합니다.",
        note: ""
      }, {
        name: "templateSize",
        type: "uint16_t",
        size: 2,
        offset: 6,
        description: "지문 템플릿의 크기입니다. 일반적인 지문 템플릿의 크기는 384바이트로 고정되어 있습니다. BioStar 2에서 스마트 카드를 사용하려면 기본값은 300바이트이며, 필요에 따라 변경할 수 있지만 템플릿의 크기가 너무 작게 설정되면 지문 매칭에 문제가 발생할 수 있으므로 300바이트 이상으로 설정하는 것을 권장합니다."
      }, {
        name: "issueCount",
        type: "uint16_t",
        size: 2,
        offset: 8,
        description: "스마트 카드 발급 회차입니다."
      }, {
        name: "duressMask",
        type: "uint8_t",
        size: 1,
        offset: 10,
        description: "협박 지문 유무 마스크 값입니다."
      }, {
        name: "cardAuthMode",
        type: "uint8_t",
        size: 1,
        offset: 11,
        description: "<b>IR Face</b> 기반 카드 인증 모드 설정값입니다. <b>Visual Face</b> 기반은 <code>cardAuthModeEx</code>를 사용합니다.",
        constants: [{
          value: "2",
          description: "카드 인증만 사용"
        }, {
          value: "3",
          description: "카드와 지문 인증 사용"
        }, {
          value: "4",
          description: "카드와 PIN 인증 사용"
        }, {
          value: "5",
          description: "카드 인증 후 지문이나 PIN 인증 사용"
        }, {
          value: "6",
          description: "카드, 지문, PIN 인증 사용"
        }, {
          value: "254",
          description: "사용할 수 없음"
        }, {
          value: "255",
          description: "정의되지 않음(시스템에 정의된 모드로 동작)"
        }]
      }, {
        name: "useAlphanumericID",
        type: "uint8_t",
        size: 1,
        offset: 12,
        description: "영숫자(Alphanumeric) ID를 사용할지 결정하는 플래그(flag)입니다."
      }, {
        name: "cardAuthModeEx",
        type: "uint8_t",
        size: 1,
        offset: 13,
        description: "<b>IR Face</b> 기반은 cardAuthMode를 사용합니다.<br/><span class='badge'>v2.7.1 or later</span> <b>Visual Face</b> 기반 카드 인증 모드 설정값입니다.",
        constants: [{
          value: "21",
          description: "카드"
        }, {
          value: "22",
          description: "카드 + 얼굴"
        }, {
          value: "23",
          description: "카드 + 지문"
        }, {
          value: "24",
          description: "카드 + PIN"
        }, {
          value: "25",
          description: "카드 + 얼굴 또는 지문"
        }, {
          value: "26",
          description: "카드 + 얼굴 또는 PIN"
        }, {
          value: "27",
          description: "카드 + 지문 또는 PIN"
        }, {
          value: "28",
          description: "카드 + 얼굴 또는 지문 또는 PIN"
        }, {
          value: "29",
          description: "카드 + 얼굴 + 지문"
        }, {
          value: "30",
          description: "카드 + 얼굴 + PIN"
        }, {
          value: "31",
          description: "카드 + 지문 + 얼굴"
        }, {
          value: "32",
          description: "카드 + 지문 + PIN"
        }, {
          value: "33",
          description: "카드 + 얼굴 또는 지문 + PIN"
        }, {
          value: "34",
          description: "카드 + 얼굴 + 지문 또는 PIN"
        }, {
          value: "35",
          description: "카드 + 지문 + 얼굴 또는 PIN"
        }, {
          value: "254",
          description: "사용할 수 없음"
        }, {
          value: "255",
          description: "정의되지 않음(시스템 정의 모드)"
        }]
      }, {
        name: "numOfFaceTemplate",
        type: "uint8_t",
        size: 1,
        offset: 14,
        description: "얼굴 템플릿 수를 나타냅니다. 지문과 얼굴이 갖는 기본 템플릿(지문:384, 얼굴:552)의 크기가 다르지만, 이 경우에도 변함없이 <code>BS2SmartCardCredentials</code>의 <code>templateData</code>의 전체 크기를 고려하여 저장하면 됩니다. AOC 카드 구조 상 템플릿은 <code>BS2SmartCardCredentials</code>에 저장됩니다. 그리고 여기에는 지문 또는 얼굴이 선택적으로 저장됩니다. 지문과 얼굴이 함께 저장되지 않습니다. 따라서 AOC 카드에 얼굴 템플릿을 저장하려면, <code>numOfTemplate</code>은 반드시 <code>0</code>으로 설정되어야 합니다."
      }, {
        name: "reserved",
        type: "uint8_t[1]",
        size: 1,
        offset: 15,
        description: "예약된 공간입니다."
      }],
      dependencies: [{
        name: "BS2_CARD_TYPE",
        type: "enum",
        description: "카드 타입 열거형"
      }],
      usedBy: [{
        name: "BS2SmartCardData",
        type: "struct",
        description: "SmartCard 데이터 구조체"
      }]
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct, {
      name: "BS2SmartCardCredentials",
      description: "PIN 코드와 생체 인식 템플릿을 저장하는 구조체입니다.",
      category: "Credentials",
      size: "1568",
      code: `typedef struct {
  uint8_t pin[BS2_PIN_HASH_SIZE];
  uint8_t templateData[BS2_SMART_CARD_MAX_TEMPLATE_COUNT * BS2_FINGER_TEMPLATE_SIZE];
} BS2SmartCardCredentials;`,
      hierarchy: [{
        name: "BS2SmartCardCredentials",
        type: "struct",
        size: 1568,
        description: "인증 정보 저장 구조체",
        children: [{
          name: "pin",
          type: "uint8_t[32]",
          size: 32,
          description: "PIN 코드 해시값"
        }, {
          name: "templateData",
          type: "uint8_t[1536]",
          size: 1536,
          description: "생체 템플릿 데이터 (최대 4개 지문)",
          children: [{
            name: "Template 1",
            type: "uint8_t[384]",
            size: 384,
            description: "첫 번째 지문 템플릿"
          }, {
            name: "Template 2",
            type: "uint8_t[384]",
            size: 384,
            description: "두 번째 지문 템플릿"
          }, {
            name: "Template 3",
            type: "uint8_t[384]",
            size: 384,
            description: "세 번째 지문 템플릿"
          }, {
            name: "Template 4",
            type: "uint8_t[384]",
            size: 384,
            description: "네 번째 지문 템플릿"
          }]
        }]
      }],
      fields: [{
        name: "pin",
        type: "uint8_t[BS2_PIN_HASH_SIZE]",
        size: 32,
        offset: 0,
        description: "PIN 코드 값입니다."
      }, {
        name: "templateData",
        type: "uint8_t[BS2_SMART_CARD_MAX_TEMPLATE_COUNT * BS2_FINGER_TEMPLATE_SIZE]",
        size: 1536,
        offset: 32,
        description: "지문 템플릿 데이터 영역으로 최대 4개의 지문 템플릿을 저장할 수 있습니다."
      }],
      constants: [{
        value: "BS2_PIN_HASH_SIZE",
        description: "PIN 해시 크기",
        note: "32바이트"
      }, {
        value: "BS2_SMART_CARD_MAX_TEMPLATE_COUNT",
        description: "최대 템플릿 개수",
        note: "4개"
      }, {
        value: "BS2_FINGER_TEMPLATE_SIZE",
        description: "지문 템플릿 크기",
        note: "384바이트"
      }],
      usedBy: [{
        name: "BS2SmartCardData",
        type: "struct",
        description: "SmartCard 데이터 구조체"
      }]
    }), "\n", (0,jsx_runtime.jsx)(TypedefStruct, {
      name: "BS2AccessOnCardData",
      description: "AOC 카드의 출입 권한 정보를 저장하는 구조체입니다.",
      category: "Access Control",
      size: "40",
      code: `typedef struct {
  uint16_t accessGroupID[BS2_SMART_CARD_MAX_ACCESS_GROUP_COUNT];
  BS2_DATETIME startTime;
  BS2_DATETIME endTime;
} BS2AccessOnCardData;`,
      hierarchy: [{
        name: "BS2AccessOnCardData",
        type: "struct",
        size: 40,
        description: "출입 권한 정보 구조체",
        children: [{
          name: "accessGroupID",
          type: "uint16_t[16]",
          size: 32,
          description: "출입 그룹 ID 배열",
          children: [{
            name: "Group ID 1",
            type: "uint16_t",
            size: 2,
            description: "첫 번째 출입 그룹"
          }, {
            name: "Group ID 2",
            type: "uint16_t",
            size: 2,
            description: "두 번째 출입 그룹"
          }, {
            name: "...",
            type: "uint16_t",
            size: 2,
            description: "..."
          }, {
            name: "Group ID 16",
            type: "uint16_t",
            size: 2,
            description: "마지막 출입 그룹"
          }]
        }, {
          name: "시간 제한",
          description: "출입 가능 시간 범위",
          children: [{
            name: "startTime",
            type: "BS2_DATETIME",
            size: 4,
            description: "유효 시작 시간"
          }, {
            name: "endTime",
            type: "BS2_DATETIME",
            size: 4,
            description: "유효 종료 시간"
          }]
        }]
      }],
      fields: [{
        name: "accessGroupID",
        type: "uint16_t[BS2_SMART_CARD_MAX_ACCESS_GROUP_COUNT]",
        size: 32,
        offset: 0,
        description: "출입 그룹 ID 리스트입니다.",
        range: "1-65535"
      }, {
        name: "startTime",
        type: "BS2_DATETIME",
        size: 4,
        offset: 32,
        description: "사용자 인증이 가능한 시작 시간이며, <code>0</code>일 경우 제한이 없습니다."
      }, {
        name: "endTime",
        type: "BS2_DATETIME",
        size: 4,
        offset: 36,
        description: "사용자 인증이 가능한 마지막 시간이며, <code>0</code>일 경우 제한이 없습니다."
      }],
      constants: [{
        value: "BS2_SMART_CARD_MAX_ACCESS_GROUP_COUNT",
        description: "최대 출입 그룹 개수",
        note: "16개"
      }],
      dependencies: [{
        name: "BS2_DATETIME",
        type: "typedef",
        description: "날짜/시간 타입"
      }],
      usedBy: [{
        name: "BS2SmartCardData",
        type: "struct",
        description: "SmartCard 데이터 구조체"
      }]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "crc-계산-및-검증",
      children: "CRC 계산 및 검증"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SmartCard 데이터의 무결성을 보장하기 위해 헤더와 카드 데이터에 각각 CRC-16 CCITT 체크섬(", (0,jsx_runtime.jsx)(_components.code, {
        children: "hdrCRC"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cardCRC"
      }), ")을 사용합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hdrcrc-cardcrc란",
      children: "hdrCRC, cardCRC란?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "hdrCRC"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BS2SmartCardHeader"
        }), "의 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cardCRC"
        }), "부터 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reserved"
        }), "까지(총 14바이트)에 대해 CRC-16 CCITT(다항식 0x1021, 초기값 0x0000)로 계산한 값입니다."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cardCRC"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cardType"
        }), "부터 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BS2SmartCardData.accessOnData"
        }), "까지(헤더를 제외한 카드 데이터 전체)에 대해 CRC-16 CCITT로 계산한 값입니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "crc-계산-방법",
      children: "CRC 계산 방법"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SDK에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BS2_ComputeCRC16CCITT"
      }), " 함수를 제공합니다. 아래는 사용 예시입니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// 헤더 체크섬 계산 (hdrCRC)\nuint16_t hdrCRC = BS2_ComputeCRC16CCITT((uint8_t*)&header.cardCRC, sizeof(BS2SmartCardHeader) - 2);\n\n// 카드 데이터 체크섬 계산 (cardCRC)\nuint16_t cardCRC = BS2_ComputeCRC16CCITT((uint8_t*)&header.cardType, cardDataLength);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cardDataLength"
        }), "는 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cardType"
        }), " ~ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "accessOnData"
        }), "까지의 실제 길이로 설정해야 합니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "검증-방법",
      children: "검증 방법"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카드 데이터 읽기 시, 저장된 hdrCRC와 cardCRC 값을 각각 위와 동일한 방식으로 재계산하여 일치하는지 비교하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "CRC-16 CCITT는 0x1021 다항식, 초기값 0x0000, 입력 데이터는 바이트 단위 Little Endian입니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CRC 계산 범위가 정확히 일치해야 하며, 구조체 패딩이나 정렬에 주의하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BS2_ComputeCRC16CCITT 함수는 BioStar 2 SDK에서 제공됩니다."
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),

}]);