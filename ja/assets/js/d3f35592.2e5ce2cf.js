"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["83371"], {
56019: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_setup_networking_mdx_d3f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-site-setup-networking-mdx-d3f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_setup_networking_mdx_d3f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-setup-networking","title":"ネットワークポートとデバイスの特定","description":"BioStar Air対応デバイスのネットワークポートを設定し、MACアドレスを確認してください。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-setup-networking.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-setup-networking","permalink":"/docs/ja/platform/biostar_air/site-setup-networking","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-setup-networking.mdx","tags":[],"version":"current","frontMatter":{"id":"site-setup-networking","title":"ネットワークポートとデバイスの特定","description":"BioStar Air対応デバイスのネットワークポートを設定し、MACアドレスを確認してください。","keywords":["ネットワーキング","ポート"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"E200 QRスキャナの配線と設定","permalink":"/docs/ja/platform/biostar_air/e200-qr-scanner"},"next":{"title":"認証済みユーザー","permalink":"/docs/ja/platform/biostar_air/credential-users-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./src/components/MacAddressCalculator/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"calculator":"calculator_Acrf","inputSection":"inputSection_yrpc","label":"label_KEMU","inputGroup":"inputGroup_IlNz","input":"input_I6GT","exampleButton":"exampleButton_uFYm","clearButton":"clearButton_bk4j","copyButton":"copyButton_vkfH","error":"error_c7wT","resultContainer":"resultContainer_V9n4","resultLabel":"resultLabel_jtwe","macAddress":"macAddress_t8nc","step":"step_HCML"});
;// CONCATENATED MODULE: ./src/components/MacAddressCalculator/index.js



function MacAddressCalculator() {
    const [serialNumber, setSerialNumber] = (0,react.useState)('');
    const [hexValue, setHexValue] = (0,react.useState)('');
    const [lastThreeBytes, setLastThreeBytes] = (0,react.useState)('');
    const [macAddress, setMacAddress] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const calculateMacAddress = (serial)=>{
        setError('');
        // 입력값 검증
        if (!serial) {
            setHexValue('');
            setLastThreeBytes('');
            setMacAddress('');
            return;
        }
        // 숫자가 아닌 문자 제거
        const cleanSerial = serial.replace(/\D/g, '');
        if (cleanSerial.length !== 9) {
            setError('Serial number must be 9 digits.');
            setHexValue('');
            setLastThreeBytes('');
            setMacAddress('');
            return;
        }
        const serialNum = parseInt(cleanSerial, 10);
        if (isNaN(serialNum)) {
            setError('Please enter a valid number.');
            return;
        }
        // 16진수로 변환
        const hex = serialNum.toString(16).toUpperCase();
        setHexValue(hex);
        // 마지막 3바이트 (6자리) 추출
        const lastSix = hex.slice(-6).padStart(6, '0');
        setLastThreeBytes(lastSix);
        // MAC 주소 구성
        const mac = `00:17:FC:${lastSix.slice(0, 2)}:${lastSix.slice(2, 4)}:${lastSix.slice(4, 6)}`;
        setMacAddress(mac);
    };
    const handleInputChange = (e)=>{
        const value = e.target.value;
        setSerialNumber(value);
        calculateMacAddress(value);
    };
    const handleExampleClick = ()=>{
        const exampleSerial = '546089489';
        setSerialNumber(exampleSerial);
        calculateMacAddress(exampleSerial);
    };
    const handleClear = ()=>{
        setSerialNumber('');
        setHexValue('');
        setLastThreeBytes('');
        setMacAddress('');
        setError('');
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: styles_module.calculator,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.inputSection,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "serialNumber",
                        className: styles_module.label,
                        children: "Serial number (9 digits)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.inputGroup,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                id: "serialNumber",
                                type: "text",
                                value: serialNumber,
                                onChange: handleInputChange,
                                placeholder: "e.g., 546089489",
                                className: styles_module.input,
                                maxLength: "9"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: handleExampleClick,
                                className: styles_module.exampleButton,
                                type: "button",
                                children: "Input example"
                            }),
                            serialNumber && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: handleClear,
                                className: styles_module.clearButton,
                                type: "button",
                                children: "Clear"
                            })
                        ]
                    }),
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.error,
                        children: error
                    })
                ]
            }),
            !error && serialNumber && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.resultContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.resultLabel,
                        children: "MAC 주소"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.macAddress,
                        children: macAddress
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: ()=>navigator.clipboard.writeText(macAddress),
                        className: styles_module.copyButton,
                        type: "button",
                        title: "Copy to clipboard",
                        children: "\uD83D\uDCCB Copy"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-setup-networking.mdx


const frontMatter = {
	id: 'site-setup-networking',
	title: 'ネットワークポートとデバイスの特定',
	description: 'BioStar Air対応デバイスのネットワークポートを設定し、MACアドレスを確認してください。',
	keywords: [
		'ネットワーキング',
		'ポート'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "必須ネットワークポート",
  "id": "必須ネットワークポート",
  "level": 2
}, {
  "value": "シリアル番号からMACアドレスを確認する",
  "id": "シリアル番号からmacアドレスを確認する",
  "level": 2
}, {
  "value": "手順",
  "id": "手順",
  "level": 3
}, {
  "value": "例",
  "id": "例",
  "level": 3
}, {
  "value": "MACアドレス変換ツール",
  "id": "macアドレス変換ツール",
  "level": 3
}];
function _createMdxContent(props) {
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
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air対応デバイスが円滑に接続するためには、特定のネットワークポートへのアクセスが必要です。 ネットワークポートを介して、対応デバイス、クラウドサービス、およびユーザーアプリケーション間で安全に通信できます。 管理者はネットワーク設定を行う際、BioStar Air対応デバイスのシリアル番号からMACアドレスを確認する必要がある場合があります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "必須ネットワークポート",
      children: "必須ネットワークポート"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次のポートがネットワークファイアウォールで開いていることを確認してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "6379"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6381"
          }), "：Redis ポート"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー情報の同期、迅速なイベントロギングの処理、セッション管理、デバイスとクラウド間のシグナル処理のためのメッセージブローカーとして使用されます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "5671"
          }), "：TLS上のAMQP (RabbitMQ)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "サービス間のリアルタイム通信のための安全なメッセージングプロトコルを提供します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "443"
          }), "：HTTPS (TLS)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "標準のセキュアなウェブトラフィックとして使用され、以下のサービスで必要です："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ウェブブラウザで管理ポータルのWebアプリにアクセスする"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Airモバイルアプリ (iOS/Android)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "API呼び出し"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "クラウド経由でのデバイスのファームウェア更新"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "デバイスのログインおよび認証サービス"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Airの組み込みビデオ管理機能を使用する場合："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "WebSocketドメイン：eu-wss-api.airfob.com"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "WebSocketポート：3500"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "TURN/STUNポート：80, 443, 3478, 5349"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "デバイスのログインおよび認証のために、次のエンドポイントへのアクセスを確認してください。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://e-afs-api.airfob.com/v1/device/login",
              children: "https://e-afs-api.airfob.com/v1/device/login"
            }), "（ヨーロッパ）"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://afs-api.airfob.com/v1/device/login",
              children: "https://afs-api.airfob.com/v1/device/login"
            }), "（その他の地域）"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "シリアル番号からmacアドレスを確認する",
      children: "シリアル番号からMACアドレスを確認する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "場合によっては、BioStar Air対応リーダーのMACアドレスをシリアル番号のみで確認する必要があることがあります。 これは、デバイスをネットワークに追加する前にホワイトリストに登録するなどの作業に便利です。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "手順",
      children: "手順"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "シリアル番号を見つける"
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイスの背面で9桁のシリアル番号を探してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "シリアル番号を16進数に変換する"
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "電卓やオンラインツールを使用して、シリアル番号を10進数から16進数に変換してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "最後の3バイトを抽出する"
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "16進値から最後の6文字を取得してください。 最後の6文字は最後の3バイトを表します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MACアドレスの構成"
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["MACアドレスは常に", (0,jsx_runtime.jsx)(_components.code, {
            children: "00:17:FC:"
          }), "で始まります。 16進値から最後の3バイト（6文字）を取り出し、各ペアをコロンで区切って追加してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "例",
      children: "例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "シリアル番号"
          }), "：546089489"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "16進数に変換"
          }), "：208CAA11"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "最後の3バイトを抽出"
          }), "：8CAA11"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MACアドレスの構成"
          }), "：00:17:FC:8C:AA:11"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "これらの手順に従うことで、シリアル番号を使用してネットワーク上のBioStar Air対応リーダーを正確に特定できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "macアドレス変換ツール",
      children: "MACアドレス変換ツール"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下にデバイスのシリアル番号を入力すると、MACアドレスをすぐに確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(MacAddressCalculator, {})]
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