"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4140"], {
42281: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_system_security_mdx_78b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-system-security-mdx-78b.json
var site_docs_platform_biostar_x_settings_system_security_mdx_78b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-security","title":"시스템 보안 강화하기","description":"BioStar X의 비밀번호 정책, 개인정보 암호화, 장치 간 통신 보안을 설정하여 시스템 보안을 강화하세요.","source":"@site/docs/platform/biostar_x/settings-system-security.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-security","permalink":"/docs/platform/biostar_x/settings-system-security","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-security.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-security","title":"시스템 보안 강화하기","description":"BioStar X의 비밀번호 정책, 개인정보 암호화, 장치 간 통신 보안을 설정하여 시스템 보안을 강화하세요.","keywords":["시스템 보안","암호화"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"시스템 복원하기","permalink":"/docs/platform/biostar_x/settings-system-system-restore"},"next":{"title":"일광 절약 시간 설정하기","permalink":"/docs/platform/biostar_x/settings-system-daylight-saving-time"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-system-security.mdx


const frontMatter = {
	id: 'settings-system-security',
	title: '시스템 보안 강화하기',
	description: 'BioStar X의 비밀번호 정책, 개인정보 암호화, 장치 간 통신 보안을 설정하여 시스템 보안을 강화하세요.',
	keywords: [
		'시스템 보안',
		'암호화'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*

:::info

<Cmd>클라우드</Cmd>를 사용하면 <Cmd sid="setting.server.passwordLevelMedium" product='2' />과 <Cmd sid="setting.server.passwordLevelStrong" product='2' />만 사용할 수 있습니다.

:::

*/


const toc = [{
  "value": "시스템 보안 사용하기",
  "id": "시스템-보안-사용하기",
  "level": 2
}, {
  "value": "비밀번호 정책 설정",
  "id": "비밀번호-정책-설정",
  "level": 2
}, {
  "value": "비밀번호 복잡성 설정",
  "id": "비밀번호-복잡성-설정",
  "level": 3
}, {
  "value": "비밀번호 변경 주기 설정",
  "id": "비밀번호-변경-주기-설정",
  "level": 3
}, {
  "value": "로그인 실패 제한 설정",
  "id": "로그인-실패-제한-설정",
  "level": 3
}, {
  "value": "비밀번호 변경 횟수 제한 설정",
  "id": "비밀번호-변경-횟수-제한-설정",
  "level": 3
}, {
  "value": "고급 보안 설정",
  "id": "고급-보안-설정",
  "level": 2
}, {
  "value": "개인 정보 보호 강화",
  "id": "개인-정보-보호-강화",
  "level": 3
}, {
  "value": "장치 간 통신 보안 설정",
  "id": "장치-간-통신-보안-설정",
  "level": 3
}, {
  "value": "동시 접속 제어",
  "id": "동시-접속-제어",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["조직의 보안 정책에 맞춰 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 보안 설정을 구성하세요. 비밀번호 정책, 개인정보 암호화, 장치 간 통신 보안, 동시 접속 제어 등을 선택적으로 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "시스템 보안을 강화하기 전에 조직의 보안 정책 및 규정을 확인하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시스템-보안-사용하기",
      children: "시스템 보안 사용하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.systemSecurity",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보안과 관련한 각 항목을 설정하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.secure.comm.title",
          product: "2"
        }), " 메뉴는 아이디가 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1"
        }), "인 최초 관리자 계정으로 접속한 경우에 활성화됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비밀번호-정책-설정",
      children: "비밀번호 정책 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.loginPassword",
        product: "2"
      }), " 섹션에서는 로그인 비밀번호와 관련된 보안 수준을 설정합니다. 조직의 보안 요구 사항에 맞춰 비밀번호 정책을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-password.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "비밀번호-복잡성-설정",
      children: "비밀번호 복잡성 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자 비밀번호의 복잡성을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.passwordLevel",
        product: "2"
      }), " 옵션의 슬라이더를 조정해 보안 수준을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelDefault",
            product: "2"
          }), ": 최대 32자까지 입력할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelMedium",
            product: "2"
          }), ": 비밀번호를 설정할 때 8~32 영문 문자(대문자 또는 소문자)와 숫자를 조합해야 합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelStrong",
            product: "2"
          }), ": 비밀번호를 설정할 때 10~32 영문 문자(대문자와 소문자, 최소 한 글자 이상의 대문자 포함)와 숫자, 특수 기호를 조합해야 합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "비밀번호-변경-주기-설정",
      children: "비밀번호 변경 주기 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["비밀번호 사용 기간을 제한하려면  ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.passwordUpdateCycle",
        product: "2"
      }), " 옵션에서 토글 버튼을 클릭해 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), " 상태로 변경하세요. 사용자는 설정한 기간마다 비밀번호를 변경해야 합니다. 비밀번호 변경 주기를 초과하면 로그인 시 비밀번호 변경 요청 메시지가 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "1일부터 180일까지 설정할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "로그인-실패-제한-설정",
      children: "로그인 실패 제한 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["비밀번호 입력 실패 허용 횟수와 로그인 제한 시간을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.allowLoginFailed",
        product: "2"
      }), " 옵션에서 설정한 횟수를 초과하여 비밀번호를 잘못 입력하면 제한 시간 동안 로그인할 수 없습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "이 옵션은 기본적으로 활성화 상태이며, 100회 실패 시 10분간 로그인이 제한됩니다. 필요에 따라 값을 조정하거나 비활성화할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "비밀번호-변경-횟수-제한-설정",
      children: "비밀번호 변경 횟수 제한 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자가 하루에 비밀번호를 변경할 수 있는 횟수를 제한하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.allowPasswordChange",
        product: "2"
      }), " 옵션에서 토글 버튼을 클릭해 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), " 상태로 변경하세요. 사용자는 설정한 횟수만큼 비밀번호를 변경할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "최대 10회까지 설정할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "고급-보안-설정",
      children: "고급 보안 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.secure.comm.title",
        product: "2"
      }), " 섹션에서는 개인 정보와 장치 간 통신 보안을 강화할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-advanced.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "개인-정보-보호-강화",
      children: "개인 정보 보호 강화"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "민감한 개인 정보를 암호화하여 데이터 유출 위험을 최소화하려면 아래 옵션을 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.sever.secure.comm.encrypt.db",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), ": 크리덴셜 데이터를 포함한 사용자의 개인 정보를 암호화하여 저장합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse",
                product: "2"
              }), ": 사용자의 개인 정보를 암호화하지 않은 상태로 저장합니다. 기존에 암호화된 데이터는 복호화하여 저장하며, 새로운 데이터는 암호화하지 않습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.encryption_key_db",
            product: "2"
          }), ": 사용자의 개인 정보를 안전하게 보호하기 위해 데이터베이스에 저장된 정보를 암호화하거나 복호화할 때 사용합니다. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.key_change",
            product: "2"
          }), " 버튼을 클릭하고 새 암호화 키 값을 설정하세요. 암호화 키를 변경하면 기존에 암호화된 데이터를 재암호화합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "개인 정보 DB 암호화 또는 복호화 기능을 진행하는 동안 서버를 강제로 시작하지 마세요. 로그인 실패, 데이터 손상과 같은 오류가 발생할 수 있습니다. 데이터베이스의 크기 및 서버의 성능에 따라 일정 시간이 소요될 수 있습니다."
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "개인 정보 암호화 항목 보기"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "프로필 이미지"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "사용자 ID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "이름"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "전화번호"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "사용자 IP"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "보낸 사람 및 받는 사람의 이메일 정보"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "로그인 ID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "로그인 암호"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "얼굴 템플릿"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "지문 템플릿"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "카드 ID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "스마트 카드 레이아웃 키"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "사용자 및 방문자에 대한 커스텀 정보"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "이미지 로그 파일"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.secure.comm.encryption_key_db",
              product: "2"
            }), "는 문자와 숫자, 기호를 사용하여 32자로 입력할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-간-통신-보안-설정",
      children: "장치 간 통신 보안 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버와 출입통제 장치 간의 안전한 통신을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서버와 출입통제 장치 간의 통신을 인증서로 보호할 수 있습니다. 이 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "으로 설정하면 서버가 자동으로 인증서를 생성하여 장치에 전송하고, 이후 모든 통신이 암호화됩니다. 장치는 이 인증서를 이용하여 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 서버와 데이터를 주고 받을 때 보안 채널을 사용할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["외부 인증서를 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.extcert.menu",
            product: "2"
          }), " 옵션을 켜고 루트 인증서, 공개키 인증서, 비밀키 파일을 업로드 해야 합니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-security-advanced-with-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.data_encryption",
            product: "2"
          }), ": 데이터 암호화 키와 관리자 암호를 새로 지정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "는 장치와 보안 통신의 설정 상태에 따라 인증서를 생성하거나 삭제하며, 이전과 동일한 인증서를 생성하지 않습니다. 예를 들면, 장치와 보안 통신의 설정을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), " 순서로 변경하면 생성했던 인증서를 자동으로 삭제합니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " 순서로 변경하면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "A 인증서 생성"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "A 인증서 폐기"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "B 인증서 생성"
            }), "의 동작을 수행합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 네트워크에서 물리적으로 분리한 상태에서 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.sever.secure.comm.menu",
              product: "2"
            }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), "으로 설정하면 장치에 저장된 인증서가 삭제됩니다. 이 경우 장치를 다시 연결할 수 없습니다. 다시 연결하려면 장치에 저장된 인증서를 삭제하거나 공장 초기화해야 합니다. 자세한 내용은 장치의 매뉴얼을 참고하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          }), " 기능 지원 장치와 펌웨어 버전 보기"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2 펌웨어 1.1.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2 펌웨어 1.5.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2 펌웨어 1.6.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2 펌웨어 1.3.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2 펌웨어 1.1.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2 펌웨어 1.2.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "CoreStation 펌웨어 1.1.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "X-Station 2 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 3 펌웨어 1.0.0 이상"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "동시-접속-제어",
      children: "동시 접속 제어"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.sessionSecurity",
        product: "2"
      }), " 섹션에서는 보안 강화를 위해 동일 계정의 중복 로그인을 제한할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.useSimultaneousConnection",
        product: "2"
      }), " 옵션을 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.inactive",
        product: "2"
      }), "으로 설정하세요. 동일한 계정에 대한 동시 접속 시도 시 기존에 접속해 있던 사용자는 로그아웃됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-session.png",
      className: "none"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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