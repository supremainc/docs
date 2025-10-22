"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8139"], {
56654: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ settings_diretory_integration_frontMatter),
  toc: () => (/* binding */ settings_diretory_integration_toc),
  "default": () => (/* binding */ settings_diretory_integration_MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_diretory_integration_mdx_cb6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ settings_diretory_integration_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-diretory-integration-mdx-cb6.json
var site_docs_platform_biostar_x_settings_diretory_integration_mdx_cb6_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-diretory-integration","title":"디렉토리 연동 설정하기","description":"Microsoft Entra ID와 BioStar X를 연동하여 사용자를 동기화하고 관리하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-diretory-integration.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-diretory-integration","permalink":"/docs/platform/biostar_x/settings-diretory-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-diretory-integration.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-diretory-integration","title":"디렉토리 연동 설정하기","description":"Microsoft Entra ID와 BioStar X를 연동하여 사용자를 동기화하고 관리하는 방법을 안내합니다.","isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"방문자 설정","permalink":"/docs/platform/biostar_x/settings-visitor"},"next":{"title":"리모트 액세스 설정하기","permalink":"/docs/platform/biostar_x/settings-remote-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/common/_usergroupfilter.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Head, IcSearch, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Head) _missingMdxReference("Head", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      level: 3,
      hashid: props.hashid,
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.userGroup",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.ADServerConfiguration",
        product: "2"
      }), " 섹션에서 설정을 완료하고 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.Connect",
        product: "2"
      }), " 버튼을 클릭하면, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.userGroup",
        product: "2"
      }), " 섹션에 ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), "로부터 사용자 그룹 정보를 가져옵니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 동기화하지 않을 사용자 그룹을 선택 해제하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-directory-usergroup-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Refresh",
            product: "2"
          }), ": 사용자 그룹 정보를 새로 불러오려면 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcSearch, {}), " 버튼을 클릭해 원하는 사용자 그룹을 검색할 수 있습니다."]
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


;// CONCATENATED MODULE: ./docs/common/_usercustomfield.mdx


const _usercustomfield_frontMatter = (/* unused pure expression or super */ null && ({}));
const _usercustomfield_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _usercustomfield_toc = [];
function _usercustomfield_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Head, Image} = _components;
  if (!Cmd) _usercustomfield_missingMdxReference("Cmd", true);
  if (!Head) _usercustomfield_missingMdxReference("Head", true);
  if (!Image) _usercustomfield_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      level: 3,
      hashid: props.hashid,
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.FieldConfiguration",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 사용자 필드와 맵핑할 ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), " 필드를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.FieldConfiguration",
        product: "2"
      }), " 섹션에서 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 사용자 필드로 사용할 ", (0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), "의 필드를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: `/img/${props.img01}`
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "의 각 사용자 필드는 ", (0,jsx_runtime.jsx)("strong", {
          children: props.name
        }), "의 사용자 정보와 일치하는 항목을 맵핑할 수 있도록 기본 설정되어 있습니다. 기본 설정된 필드값이 아닌 다른 필드값을 선택하려면 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: props.sid,
          product: "2"
        }), " 열의 항목을 클릭하고 원하는 필드값을 선택하세요."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: `/img/${props.img02}`
      })]
    })]
  });
}
function _usercustomfield_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_usercustomfield_createMdxContent, {
      ...props
    })
  }) : _usercustomfield_createMdxContent(props);
}
function _usercustomfield_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common/_sync-with-integ.mdx


const _sync_with_integ_frontMatter = (/* unused pure expression or super */ null && ({}));
const _sync_with_integ_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _sync_with_integ_toc = [];
function _sync_with_integ_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Head, Image} = _components;
  if (!Cmd) _sync_with_integ_missingMdxReference("Cmd", true);
  if (!Head) _sync_with_integ_missingMdxReference("Head", true);
  if (!Image) _sync_with_integ_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      level: 3,
      hashid: props.hashid,
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.SyncDataFromADServer",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)("strong", {
        children: props.name
      }), "에서 변경된 사용자 정보를 동기화할 수 있는 기능입니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.SyncDataFromADServer",
            product: "2"
          }), ": 원하는 동기화 방식을 선택하고 동기화 간격을 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.manual",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.SyncNow",
                product: "2"
              }), " 버튼을 클릭할 때마다 ", (0,jsx_runtime.jsx)("strong", {
                children: props.name
              }), "에서 사용자 정보를 가져와 동기화합니다."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-setting-directory-sync-manual.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.auto",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.autosyncInterval",
                product: "2"
              }), " 항목에 설정한 간격으로 ", (0,jsx_runtime.jsx)("strong", {
                children: props.name
              }), "에서 사용자 정보를 가져와 동기화합니다. 동기화 간격은 분 단위로 설정할 수 있습니다. 최소 설정값은 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "30"
              }), "분, 최대 설정값은 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "10,080"
              }), "분(7일)입니다."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-setting-directory-sync-auto.png"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.lastSynchronized",
            product: "2"
          }), ": 가장 최근에 동기화한 날짜와 시간을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.SyncNow",
              product: "2"
            }), " 버튼을 클릭하면 경고 메시지가 나타납니다. 메시지를 확인하고 계속하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.continue",
              product: "2"
            }), " 버튼을 취소하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.cancel",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-setting-directory-sync-warn-message.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["동기화 기능을 통해 연동할 때 특정 사용자를 동기화에서 제외하려면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#exclude-integration",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["동기화 방식이 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.auto",
              product: "2"
            }), "인 상태에서도 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.SyncNow",
              product: "2"
            }), " 버튼을 클릭하면 즉시 동기화할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function _sync_with_integ_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_sync_with_integ_createMdxContent, {
      ...props
    })
  }) : _sync_with_integ_createMdxContent(props);
}
function _sync_with_integ_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-diretory-integration.mdx


const settings_diretory_integration_frontMatter = {
	id: 'settings-diretory-integration',
	title: '디렉토리 연동 설정하기',
	description: 'Microsoft Entra ID와 BioStar X를 연동하여 사용자를 동기화하고 관리하는 방법을 안내합니다.',
	isTranslationMissing: false
};
const settings_diretory_integration_contentTitle = undefined;

const assets = {

};






const settings_diretory_integration_toc = [{
  "value": "Entra ID와 연동하기",
  "id": "intergrate-with-entraid",
  "level": 2
}, ...toc, ..._usercustomfield_toc, ..._sync_with_integ_toc, {
  "value": "액티브 디렉토리(Active Directory)와 연동하기",
  "id": "integrate-with-active-directory",
  "level": 2
}, ...toc, ..._usercustomfield_toc, ..._sync_with_integ_toc, {
  "value": "설정 결과 확인하기",
  "id": "checksettings",
  "level": 2
}, {
  "value": "디렉토리 연동 제외하기",
  "id": "exclude-integration",
  "level": 2
}, {
  "value": "디렉토리 연동 해제하기",
  "id": "disableIntegration",
  "level": 2
}];
function settings_diretory_integration_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCopy2, Image, Step, Steps} = _components;
  if (!Cmd) settings_diretory_integration_missingMdxReference("Cmd", true);
  if (!IcCopy2) settings_diretory_integration_missingMdxReference("IcCopy2", true);
  if (!Image) settings_diretory_integration_missingMdxReference("Image", true);
  if (!Step) settings_diretory_integration_missingMdxReference("Step", true);
  if (!Steps) settings_diretory_integration_missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Microsoft Entra ID"
      }), "(이하 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), ") 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "액티브 디렉토리"
      }), "(Active Directory)와 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 연동하여 사용자를 동기화하고 관리하는 방법을 안내합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), "와 연동하면 아래의 편의 기능을 사용할 수 있습니다. 이를 통해 보안과 편의성을 높일 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), "에서 제공하는 Single Sign-On(SSO) 기능을 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " 계정으로 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 로그인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), "에서 제공하는 Lightweight Directory Access Protocol(LDAP) 인증을 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 로그인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), "에서 구성한 사용자 및 그룹을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "와 동기화할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), "에서 사용되는 직책과 부서, 그룹 등의 사용자 정보를 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "의 사용자 정의 필드와 맵핑할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entra ID"
        }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Directory"
        }), " 설정 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "어드밴스"
        }), "(Advance) 라이선스 이상에서 추가 옵션을 통해 사용할 수 있습니다. 라이선스 정책에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intergrate-with-entraid",
      children: "Entra ID와 연동하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 관리자 아이디로 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.directoryIntegration.root"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.AdServerNew",
            product: "2"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-integ-entraid.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다음 안내에 따라 각 항목을 설정하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "EntraidServer",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), "의 서버 정보를 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Connect",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-server.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ClientID",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), "에서 등록한 애플리케이션의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "클라이언트 아이디"
              }), "(", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client ID"
              }), ")를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ClientSecret",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), "에서 등록한 애플리케이션의 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "인증서 및 암호"
              }), "(", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Certificates & secrets"
              }), ")에 추가한 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "클라이언트 암호"
              }), "(", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Client secrets"
              }), ")를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.PrimaryDomain",
                product: "2"
              }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Entra ID"
              }), "에서 조직을 만들 때 입력한 기본 도메인 이름을 입력하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "에서 애플리케이션을 등록하는 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app",
                  children: "다음 링크"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "인증서 및 암호"
                }), " 설정 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://learn.microsoft.com/entra/identity-platform/how-to-add-credentials?tabs=client-secret",
                  children: "다음 링크"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "테넌트 ID"
                }), "는 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "에서 등록한 애플리케이션의 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "개요"
                }), "(", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), ")에서 확인할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.PrimaryDomain",
                  product: "2"
                }), " 정보는 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "의 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "개요"
                }), "(", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), ")에서 확인할 수 있습니다."]
              }), "\n", (0,jsx_runtime.jsx)(Image, {
                src: "/img/biostarx-setting-directory-primary-domain.png"
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(MDXContent, {
          hashid: "usergroupfilterEntraid",
          name: "Entra ID"
        })
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_usercustomfield_MDXContent, {
          hashid: "userfieldEntraid",
          name: "Entra ID",
          img01: "biostarx-setting-directory-userfield.png",
          img02: "biostarx-setting-directory-userfield-select-other.png",
          sid: "settings.activeDirectory.FieldNameEI"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Entra ID"
            }), "와 연동할 때 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.userId",
              product: "2"
            }), " 필드는 맵핑할 수 없습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.userId",
              product: "2"
            }), "는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "에서 자동 생성하여 적용합니다."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "setssoEntraid",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleEI",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID SSO"
          }), "로 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 로그인하도록 설정하려면, ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleEI",
            product: "2"
          }), " 항목을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), "으로 변경하세요."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-login-with-entraid.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.RedirectionUri",
            product: "2"
          }), " 항목의 리디렉션 주소를 복사(", (0,jsx_runtime.jsx)(IcCopy2, {}), ")하고, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " 포털의 SSO 리디렉션 설정에 붙여넣으세요. 사용자가 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), "로 로그인에 성공하면 이 주소로 리디렉션됩니다."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "에 애플리케이션을 등록하고, 리디렉션 URI를 추가하는 방법은 다음 링크를 참고하세요."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app",
                      children: "Microsoft Entra ID에 애플리케이션 등록"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: (0,jsx_runtime.jsx)(_components.a, {
                      href: "https://learn.microsoft.com/entra/identity-platform/how-to-add-redirect-uri",
                      children: "앱에 리디렉션 URI 추가"
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["리디렉션 주소는 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Entra ID"
                }), "에서 등록한 애플리케이션의 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "개요"
                }), "(", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Overview"
                }), ")에서 확인할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(_sync_with_integ_MDXContent, {
          hashid: "syncdatafromEntraid",
          name: "Entra ID"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.directoryIntegration.root"
        }), " 설정을 모두 완료한 후 저장하려면 화면 가장 아래에 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " 버튼을 클릭하세요. 설정 결과를 확인하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#checksettings",
          children: "다음 문서"
        }), "를 참고하세요."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-directory-btn-apply.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integrate-with-active-directory",
      children: "액티브 디렉토리(Active Directory)와 연동하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 관리자 아이디로 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.directoryIntegration.root"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.AdServerOld",
            product: "2"
          }), "를 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-integ-ad.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다음 안내에 따라 각 항목을 설정하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Active Directory는 Widows Server 2008 R2 이상의 시스템 환경에서 사용할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Active Directory 서버를 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.setting",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server",
              product: "2"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType",
              product: "2"
            }), " 항목을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.alphanumeric",
              product: "2"
            }), "로 설정해야 합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ADserver",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.ADServerConfiguration",
            product: "2"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), "의 서버 정보를 입력하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.Connect",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-ad-server.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.ServerAddress",
                product: "2"
              }), ": Windows Active Directory 서버 주소를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.UserName",
                product: "2"
              }), ": Windows Active Directory 로그인 아이디를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.Password",
                product: "2"
              }), ": Windows Active Directory 로그인 비밀번호를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.DomainNode",
                product: "2"
              }), ": Windows Active Directory 기본 도메인 이름을 입력하세요. 기본 도메인 이름은 아래 과정을 통해 확인할 수 있습니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Active Directory 관리 센터"
                  }), "를 실행하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["사용자 데이터가 저장된 노드(Node)에서 마우스 오른쪽 버튼을 클릭하고 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "속성"
                  }), "을 선택하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "속성"
                  }), " 창에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "확장"
                  }), "을 선택하고, ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "특성 편집기"
                  }), "를 클릭하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "distinguishedName"
                  }), " 값을 확인하세요."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.secureTransfer",
                product: "2"
              }), ": Windows Active Directory 서버와 통신할 때 암호화를 사용할 수 있습니다. Active Directory 인증서 서비스를 설치하고 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.activeDirectory.keystorePassword",
                product: "2"
              }), "를 설정하려면 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "ad-encrypt",
                children: "다음 문서"
              }), "를 참고하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.keystorePassword",
                  product: "2"
                }), ": Windows Active Directory 서버 암호화 키 저장소 비밀번호를 입력하세요. ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "settings.activeDirectory.secureTransfer",
                  product: "2"
                }), " 항목을 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.info.enabled",
                  product: "2"
                }), "으로 설정하면 입력할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(MDXContent, {
          hashid: "usergroupfilterAD",
          name: "Active Directory"
        })
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(_usercustomfield_MDXContent, {
          hashid: "userfieldAD",
          name: "Active Directory",
          img01: "biostarx-setting-directory-userfield-ad.png",
          img02: "biostarx-setting-directory-userfield-select-other-ad.png",
          sid: "settings.activeDirectory.FieldNameAD"
        })
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "setssoAD",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleAD",
            product: "2"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Active Directory 서버의 사용자 아이디로 로그인하도록 설정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.LogintitleAD",
            product: "2"
          }), " 항목을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), "으로 변경하세요. Active Directory 서버의 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sAMAccountName"
          }), " 필드의 값이 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 로그인 아이디로 맵핑됩니다."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sAMAccountName"
            }), " 필드에는 특수 문자가 포함될 수 없습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 로그인 아이디 정책에 맞지 않는 경우, 로그인에 실패할 수 있습니다."]
          })
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-login-with-ad.png"
        })]
      }), (0,jsx_runtime.jsx)(Step, {
        children: (0,jsx_runtime.jsx)(_sync_with_integ_MDXContent, {
          hashid: "syncdatafromAd",
          name: "Active Directory"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.directoryIntegration.root"
        }), " 설정을 모두 완료한 후 저장하려면 화면 가장 아래에 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " 버튼을 클릭하세요. 설정 결과를 확인하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#checksettings",
          children: "다음 문서"
        }), "를 참고하세요."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-directory-btn-apply.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checksettings",
      children: "설정 결과 확인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), "와 연동 설정을 완료하고, 화면 아래에 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " 버튼을 클릭하세요. 다음 항목을 참고해 동기화된 설정을 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), " 메뉴에서 동기화된 사용자 목록을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Entra ID"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory"
          }), "로 로그인 설정을 완료한 후, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 로그인할 때 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "login.entraidLoginBtn",
            product: "2"
          }), " 버튼을 확인할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-entraid-login.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exclude-integration",
      children: "디렉토리 연동 제외하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.directoryIntegration.root"
      }), " 기능을 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Entra ID"
      }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Directory"
      }), "와 연동할 경우, 디렉토리 서비스에 존재하지 않는 사용자는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에서 삭제될 수 있습니다. 삭제되지 않길 원하는 사용자가 있다면 아래 방법을 통해 연동에서 제외할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 관리자 아이디로 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), " 메뉴로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.user.allUserGroups",
            product: "2"
          }), " 목록에서 연동에서 제외할 사용자를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택한 사용자의 상세 정보 화면이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced",
            product: "2"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.adsync.exclude",
            product: "2"
          }), " 항목의 체크박스를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-advance-exclude-sync.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["선택한 사용자는 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.directoryIntegration.root"
      }), " 기능을 사용할 때 연동에서 제외됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disableIntegration",
      children: "디렉토리 연동 해제하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.activeDirectory.title",
        product: "2"
      }), " 기능을 해제하려면 다음 안내에 따라 진행하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "에 관리자 아이디로 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.directoryIntegration.root"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2"
          }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.notUse",
            product: "2"
          }), "을 선택하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-unset.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alert.warning",
            product: "2"
          }), " 메시지가 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.continue",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-directory-unset-warn-message.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.activeDirectory.title",
          product: "2"
        }), " 기능을 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.activeDirectory.notUse",
          product: "2"
        }), "으로 설정하면, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Entra ID"
        }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Directory"
        }), "와 연동된 모든 설정이 해제됩니다. 연동된 사용자 및 그룹 정보는 삭제되지 않지만, 이후에는 동기화되지 않습니다. 연동을 해제하기 전에 반드시 확인하세요."]
      })
    })]
  });
}
function settings_diretory_integration_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(settings_diretory_integration_createMdxContent, {
      ...props
    })
  }) : settings_diretory_integration_createMdxContent(props);
}
function settings_diretory_integration_missingMdxReference(id, component) {
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